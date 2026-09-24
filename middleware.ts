import { next } from '@vercel/functions/middleware'

// Vercel Routing Middleware. Runs at the edge before the static filesystem, so
// it can gate files in /public that would otherwise be served to anyone.
//
// Gates the Healio screens page (public/work/healio-screens.html) behind the
// same password as the NTT Data case study. A correct password sets an
// HttpOnly cookie holding an HMAC of the password, so changing the password
// in Vercel invalidates every existing cookie.

export const config = {
  // Every path except hashed bundles, fonts and logos. Kept broad on purpose:
  // the gate matches on the decoded, lowercased path, so encoded or re-cased
  // variants of the file URL can't slip past a narrow matcher.
  matcher: '/((?!assets/|fonts/|logos/).*)',
}

const COOKIE = 'healio_screens'
const MAX_AGE = 60 * 60 * 24 * 7 // 7 days

function isGatedPath(pathname: string) {
  let path = pathname
  try { path = decodeURIComponent(pathname) } catch { /* keep raw path */ }
  return path.toLowerCase().includes('healio-screens')
}

async function tokenFor(password: string) {
  const enc = new TextEncoder()
  const key = await crypto.subtle.importKey('raw', enc.encode(password), { name: 'HMAC', hash: 'SHA-256' }, false, ['sign'])
  const sig = await crypto.subtle.sign('HMAC', key, enc.encode('healio-screens:v1'))
  return [...new Uint8Array(sig)].map((b) => b.toString(16).padStart(2, '0')).join('')
}

function safeEqual(a: string, b: string) {
  if (a.length !== b.length) return false
  let diff = 0
  for (let i = 0; i < a.length; i++) diff |= a.charCodeAt(i) ^ b.charCodeAt(i)
  return diff === 0
}

function readCookie(request: Request, name: string) {
  const header = request.headers.get('cookie') ?? ''
  for (const part of header.split(';')) {
    const [k, ...v] = part.trim().split('=')
    if (k === name) return v.join('=')
  }
  return null
}

const noStore = {
  'Cache-Control': 'private, no-store',
  'X-Robots-Tag': 'noindex, nofollow',
}

function gatePage(error: boolean, status: number) {
  const html = `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="robots" content="noindex, nofollow">
<title>Protected | Andre Botha</title>
<style>
*{box-sizing:border-box}
body{margin:0;min-height:100vh;display:flex;align-items:center;justify-content:center;padding:1rem;background:#05050a;font-family:system-ui,-apple-system,"Segoe UI",sans-serif}
form{background:#0d0d1a;border:1px solid rgba(99,102,241,.3);border-radius:16px;padding:2.5rem;max-width:420px;width:100%}
.k{font-size:.75rem;font-weight:600;letter-spacing:.08em;color:rgba(99,102,241,.8);text-transform:uppercase;margin:0 0 .75rem}
h1{font-size:1.3rem;font-weight:700;color:#fff;margin:0 0 .5rem}
p{font-size:.875rem;color:rgba(255,255,255,.5);line-height:1.6;margin:0 0 1.75rem}
input{width:100%;padding:.75rem 1rem;border-radius:8px;background:rgba(255,255,255,.05);border:1px solid ${error ? 'rgba(239,68,68,.6)' : 'rgba(255,255,255,.12)'};color:#fff;font-size:.95rem;outline:none;margin-bottom:.5rem}
input:focus{border-color:rgba(99,102,241,.6)}
.e{font-size:.8rem;color:rgba(239,68,68,.8);margin:0 0 1rem}
button{width:100%;margin-top:1rem;padding:.75rem;border-radius:8px;background:#6366f1;border:0;color:#fff;font-size:.9rem;font-weight:600;cursor:pointer}
</style>
</head>
<body>
<form method="post">
<p class="k">Protected Case Study</p>
<h1>Healio | NTT Data</h1>
<p>This case study contains client work shared under NDA. Enter the password provided to you to view.</p>
<input type="password" name="password" placeholder="Enter password" aria-label="Password" autocomplete="current-password" autofocus required>
${error ? '<p class="e">Incorrect password. Please try again.</p>' : ''}
<button type="submit">View Screens</button>
</form>
</body>
</html>`
  return new Response(html, { status, headers: { ...noStore, 'Content-Type': 'text/html; charset=utf-8' } })
}

export default async function middleware(request: Request) {
  const url = new URL(request.url)
  if (!isGatedPath(url.pathname)) return next()

  const password = process.env.VITE_NTT_PASSWORD
  if (!password) {
    // Fail closed if the password isn't configured for this environment.
    return new Response('Not available.', { status: 503, headers: noStore })
  }
  const token = await tokenFor(password)

  if (request.method === 'POST') {
    const form = await request.formData().catch(() => null)
    const attempt = String(form?.get('password') ?? '')
    const ok = safeEqual(await tokenFor(attempt), token)
    const wantsJson = (request.headers.get('accept') ?? '').includes('application/json')
    const cookie = `${COOKIE}=${token}; Path=/work; Max-Age=${MAX_AGE}; HttpOnly; Secure; SameSite=Lax`

    // Called in the background by the NTT Data password modal: just set the cookie.
    if (wantsJson) {
      return ok
        ? new Response(null, { status: 204, headers: { ...noStore, 'Set-Cookie': cookie } })
        : new Response(null, { status: 401, headers: noStore })
    }
    if (!ok) return gatePage(true, 401)
    return new Response(null, {
      status: 303,
      headers: { ...noStore, 'Set-Cookie': cookie, Location: '/work/healio-screens' },
    })
  }

  const cookie = readCookie(request, COOKIE)
  // no-cache (not no-store): the browser may keep the 5.8 MB page but must
  // revalidate, and every revalidation passes back through this check.
  if (cookie && safeEqual(cookie, token)) {
    return next({ headers: { 'Cache-Control': 'private, no-cache', 'X-Robots-Tag': 'noindex, nofollow' } })
  }

  return gatePage(false, 401)
}
