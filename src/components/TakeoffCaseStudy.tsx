import { useEffect } from 'react'
import type { CSSProperties } from 'react'
import { ReactCompareSlider, ReactCompareSliderImage } from 'react-compare-slider'

interface TakeoffCaseStudyProps {
  onBack: () => void
}

const LIVE_URL = 'https://mytakeoff.ai'
const FRONTEND_REPO = 'https://github.com/abotha-dev/blueprint-estimate'
const ENGINE_REPO = 'https://github.com/abotha-dev/blueprint-intelligence-engine'

const codeStyle: CSSProperties = {
  fontFamily: 'var(--font-mono, ui-monospace, SFMono-Regular, Menlo, monospace)',
  fontSize: '0.875em',
  background: 'rgba(255,255,255,0.06)',
  border: '1px solid rgba(255,255,255,0.08)',
  padding: '1px 6px',
  borderRadius: '4px',
  color: 'var(--text)',
}

const pullQuoteStyle: CSSProperties = {
  borderLeft: '3px solid rgba(99,102,241,0.5)',
  padding: '1rem 1.25rem',
  margin: '1.5rem 0',
  background: 'rgba(99,102,241,0.05)',
  borderRadius: '0 8px 8px 0',
}

const metaLinkStyle: CSSProperties = {
  color: 'var(--accent)',
  textDecoration: 'none',
  fontWeight: 500,
}

export function TakeoffCaseStudy({ onBack }: TakeoffCaseStudyProps) {
  useEffect(() => { window.scrollTo(0, 0) }, [])

  return (
    <div className="cs-page-shell" style={{ paddingTop: '80px' }}>
      <div className="container">
        <button className="back-btn" onClick={onBack} aria-label="Back to portfolio">
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M9 2 L4 7 L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          Back to Work
        </button>
      </div>

      {/* Hero */}
      <div className="cs-hero">
        <div className="container">
          <span className="cs-label">Case Study · AI SaaS · Redesign · Solo Build</span>
          <h1 className="cs-title">Repackaging mytakeoff.ai:<br/>from accuracy-first claims to honest ballpark estimates</h1>
          <p className="cs-subtitle">I redesigned the site to repackage what it actually is: a fast filter that runs before a real takeoff. Not a replacement for one.</p>

          <div className="metadata-table">
            <div className="meta-cell">
              <span className="meta-label">Live</span>
              <div className="meta-value">
                <a href={LIVE_URL} target="_blank" rel="noopener noreferrer" style={metaLinkStyle}>mytakeoff.ai</a>
              </div>
            </div>
            <div className="meta-cell">
              <span className="meta-label">Code</span>
              <div className="meta-value" style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
                <a href={FRONTEND_REPO} target="_blank" rel="noopener noreferrer" style={metaLinkStyle}>Frontend</a>
                <a href={ENGINE_REPO} target="_blank" rel="noopener noreferrer" style={metaLinkStyle}>Engine</a>
              </div>
            </div>
            <div className="meta-cell">
              <span className="meta-label">Role</span>
              <div className="meta-value">Solo design and<br/>frontend implementation</div>
            </div>
            <div className="meta-cell">
              <span className="meta-label">Stack</span>
              <div className="meta-value" style={{ fontSize: '0.85rem' }}>React · TypeScript<br/>Tailwind · shadcn/ui<br/>Supabase · Stripe · Vercel</div>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Visual — live product screenshot */}
      <div className="container" style={{ marginBottom: '4rem' }}>
        <a
          href={LIVE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="takeoff-hero-card"
          aria-label="Try mytakeoff.ai live product"
        >
          <img
            src="/takeoff-hero.png"
            alt="mytakeoff.ai homepage screenshot"
            className="takeoff-hero-img"
          />
          <div className="takeoff-hero-overlay">
            <span className="takeoff-hero-cta">
              Try Live Product
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M3 7h8M7 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </span>
          </div>
        </a>
        <style>{`
          .takeoff-hero-card {
            position: relative;
            display: block;
            border: 1px solid rgba(99,102,241,0.2);
            border-radius: 16px;
            overflow: hidden;
            text-decoration: none;
            line-height: 0;
            box-shadow: 0 20px 40px -20px rgba(0,0,0,0.15);
          }
          .takeoff-hero-img {
            display: block;
            width: 100%;
            height: auto;
          }
          .takeoff-hero-overlay {
            position: absolute;
            inset: 0;
            display: flex;
            align-items: center;
            justify-content: center;
            background: rgba(0,0,0,0.5);
            opacity: 0;
            transition: opacity 200ms ease;
          }
          .takeoff-hero-card:hover .takeoff-hero-overlay,
          .takeoff-hero-card:focus-visible .takeoff-hero-overlay {
            opacity: 1;
          }
          .takeoff-hero-cta {
            display: inline-flex;
            align-items: center;
            gap: 0.5rem;
            background: var(--accent);
            color: #fff;
            border-radius: 8px;
            padding: 0.65rem 1.25rem;
            font-size: 0.875rem;
            font-weight: 600;
            line-height: 1;
          }
          @media (hover: none) {
            .takeoff-hero-overlay { opacity: 1; }
          }
          .takeoff-compare-wrap {
            position: relative;
            max-width: 720px;
            margin: 0 0 2rem;
            border: 1px solid rgba(99,102,241,0.2);
            border-radius: 16px;
            overflow: hidden;
            box-shadow: 0 20px 40px -20px rgba(0,0,0,0.15);
            line-height: 0;
          }
          .takeoff-compare-label {
            position: absolute;
            top: 0.75rem;
            z-index: 2;
            font-family: var(--font-mono);
            font-size: 10px;
            letter-spacing: 0.12em;
            text-transform: uppercase;
            color: #fff;
            background: rgba(0,0,0,0.55);
            padding: 0.3rem 0.55rem;
            border-radius: 4px;
            pointer-events: none;
            line-height: 1;
          }
          .takeoff-compare-label--before { left: 0.75rem; }
          .takeoff-compare-label--after { right: 0.75rem; }
          .takeoff-excerpt {
            max-width: 720px;
            margin: 0 0 1.5rem;
            border: 1px solid rgba(99,102,241,0.2);
            border-radius: 16px;
            overflow: hidden;
            box-shadow: 0 20px 40px -20px rgba(0,0,0,0.15);
            line-height: 0;
          }
          .takeoff-excerpt img {
            display: block;
            width: 100%;
            height: auto;
            transform: scale(1.1);
            transform-origin: center;
          }
        `}</style>
      </div>

      <div className="container">
        {/* Outcomes — top stat grid */}
        <div className="cs-section">
          <h2 className="cs-section-title">Project Outcomes</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem', marginTop: '1.5rem' }}>
            {[
              { stat: 'Promise corrected', label: 'From accuracy-first claims to honest ballpark framing' },
              { stat: 'Real Stripe live', label: 'Live checkout, customer portal, post-checkout flow shipped without a backend code change' },
              { stat: '−1,431 lines / −50KB', label: 'Net code reduction across the redesign' },
              { stat: 'Backend untouched', label: 'Frontend-only scope held; debt logged in _context/decisions.md' },
            ].map(({ stat, label }) => (
              <div key={stat} style={{ background: 'rgba(99,102,241,0.06)', border: '1px solid rgba(99,102,241,0.15)', borderRadius: '10px', padding: '1.25rem 1.5rem' }}>
                <div style={{ fontSize: '1.5rem', fontWeight: 700, lineHeight: 1.15, color: 'var(--accent)', marginBottom: '0.4rem' }}>{stat}</div>
                <div style={{ fontSize: '0.875rem', color: 'var(--text-muted)', lineHeight: 1.5 }}>{label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Lead-in (no heading in markdown) */}
        <div className="cs-section">
          <p className="cs-body">I shipped mytakeoff.ai solo in four weeks — design, frontend, AI pipeline, the whole stack. The product worked. The positioning didn&apos;t. This case study is about going back six weeks later to fix what the marketing was claiming, not what the engine was doing.</p>
          <p className="cs-body" style={{ marginTop: '1rem' }}>The site pitched it as &ldquo;accurate construction estimates powered by AI.&rdquo; The actual accuracy data told a more complicated story: 96.7% on clean floor plans rendered from design software, 79.6% on messier inputs, room detection at 100% across both. The cost estimate copy claimed &ldquo;within 4% of contractor benchmarks,&rdquo; which wasn&apos;t defensible — contractor benchmarks themselves span 2x ranges, so &ldquo;within range&rdquo; doesn&apos;t mean &ldquo;4% accurate.&rdquo;</p>
          <p className="cs-body" style={{ marginTop: '1rem' }}>A contractor reading the homepage would expect production-grade precision. They&apos;d upload a phone photo of a marked-up plan, get a result that was off by 20%, and never come back.</p>
          <p className="cs-body" style={{ marginTop: '1rem' }}>The promise was wrong, not the product. I redesigned the site to repackage what it actually is: a fast filter that runs before a real takeoff. Not a replacement for one.</p>
        </div>

        {/* The positioning shift */}
        <div className="cs-section">
          <h2 className="cs-section-title">The positioning shift</h2>
          <p className="cs-body">The reframe was a single sentence that drove every other decision in the project.</p>

          <div style={pullQuoteStyle}>
            <p style={{ margin: 0, fontSize: '0.95rem', color: 'var(--text-muted)' }}>From: <em>&ldquo;Accurate construction estimates powered by AI.&rdquo;</em></p>
            <p style={{ margin: '0.5rem 0 0', fontSize: '0.95rem', color: 'var(--text)' }}>To: <em>&ldquo;Instant ballpark estimates for residential remodels and ADUs.&rdquo;</em></p>
          </div>

          <p className="cs-body" style={{ marginTop: '1rem' }}>&ldquo;Ballpark&rdquo; is doing real work in that sentence. It signals a range, not a number. It signals approximation, not precision. It signals &ldquo;this is the conversation starter, not the final bid.&rdquo; It also matches how contractors actually talk to each other  -  &ldquo;give me a ballpark&rdquo; is the language of pre-bid scope.</p>
          <p className="cs-body" style={{ marginTop: '1rem' }}>The narrower ICP language is also load-bearing. The engine has hardcoded assumptions: slab-on-grade foundation at 4&quot; thickness, gable roof at 4/12 pitch, single-story residential. Those constraints map cleanly onto ADUs and small remodels. They map poorly onto multi-story custom homes or commercial work. Calling out the fit honestly does two things at once: it sets expectations correctly, and it makes the product read more confident, not less. A tool that knows what it&apos;s for reads more credibly than a tool that promises everything.</p>
          <p className="cs-body" style={{ marginTop: '1rem' }}>This positioning decision determined the entire information architecture of the site. Every page had to be evaluated against the new framing: does this still make sense if the product is &ldquo;ballpark, not bid&rdquo;?</p>
          <p className="cs-body" style={{ marginTop: '1rem' }}>The Results page is the clearest example. The original showed a single grand total at $226,643.03  -  two-decimal precision on an estimate that was actually a range. The new Results page shows three columns  -  Budget / Standard / Premium  -  at $184,500 / $226,600 / $294,400. Three rounded numbers in a row tell the truth about what the data is. One precise number lies about it.</p>
          <p className="cs-body" style={{ marginTop: '1rem' }}>This is the entanglement the project lives in. Showing three columns instead of one number isn&apos;t a design preference. It&apos;s the only honest way to surface the underlying data. The engineering reality (cost benchmarks span 2x ranges) and the design choice (anchor the conversation in three tiers) have to be made together or neither makes sense.</p>
        </div>

        {/* Visual language */}
        <div className="cs-section">
          <h2 className="cs-section-title">Visual language</h2>
          <div className="takeoff-compare-wrap">
            <span className="takeoff-compare-label takeoff-compare-label--before">Before</span>
            <span className="takeoff-compare-label takeoff-compare-label--after">After</span>
            <ReactCompareSlider
              itemOne={<ReactCompareSliderImage src="/takeoff-before.png" alt="Original mytakeoff.ai site" />}
              itemTwo={<ReactCompareSliderImage src="/takeoff-hero.png" alt="Redesigned mytakeoff.ai site" />}
            />
          </div>
          <p className="cs-body">The old site was dark blue with electric accent colors. Generic SaaS dressing. It looked like it was for software developers, not contractors.</p>
          <p className="cs-body" style={{ marginTop: '1rem' }}>The new site uses a slate-950 chrome (header and footer) with a stone-50 body and amber accents for action. The amber is deliberate. It reads warm and slightly industrial  -  closer to a contractor&apos;s job site than a SaaS dashboard. It&apos;s also the only color used for primary actions and pricing emphasis, so visual hierarchy is unambiguous: amber means &ldquo;this is what to do next.&rdquo;</p>
          <p className="cs-body" style={{ marginTop: '1rem' }}>Typography is tight Inter throughout. Subsection labels (small uppercase amber text above each block) appear consistently across pages. They let a contractor scanning the page understand what they&apos;re looking at without reading the full headline, and they create a rhythm that ties the site together visually without forcing identical layouts.</p>
        </div>

        {/* Page decisions worth surfacing */}
        <div className="cs-section">
          <h2 className="cs-section-title">Page decisions worth surfacing</h2>
          <p className="cs-body">Eight pages migrated to the new design. Four made decisions that mattered.</p>

          <h3 style={{ fontSize: '1.1rem', fontWeight: 600, color: 'var(--text)', marginTop: '2rem', marginBottom: '0.75rem' }}>Home.</h3>
          <div className="takeoff-excerpt">
            <img
              src="/takeoff-honesty-block.png"
              alt="The Honesty Block section of the mytakeoff.ai homepage — three plain-language statements describing what the product is and isn't: 'Ballpark, not a bid,' 'Works best on clean floor plans and single-story residential, especially ADUs,' and 'The quick filter before your real takeoff, not a replacement for one.'"
            />
          </div>
          <p className="cs-body">The Honesty Block was the section I was most uncertain about and ended up most committed to. It sits near the bottom of the page and says, in plain language, what the product is and isn&apos;t. <em>&ldquo;Ballpark, not a bid.&rdquo;</em> <em>&ldquo;Works best on clean floor plans and single-story residential, especially ADUs.&rdquo;</em> <em>&ldquo;It&apos;s the quick filter before your real takeoff, not a replacement for one.&rdquo;</em></p>
          <p className="cs-body" style={{ marginTop: '1rem' }}>This kind of section usually gets cut from marketing pages because it sounds like an apology. I kept it because the alternative  -  a homepage that overpromises  -  produces churn and refunds at scale. Telling contractors the truth up front is a longer-term trust play. A contractor who lands on the page, reads the Honesty Block, and uses the tool for what it&apos;s good at becomes a paying customer. A contractor who lands on a polished marketing pitch and gets a result that disappoints leaves and never returns. The Honesty Block is a filter for the right customer, not a confession.</p>

          <h3 style={{ fontSize: '1.1rem', fontWeight: 600, color: 'var(--text)', marginTop: '2rem', marginBottom: '0.75rem' }}>Analyze.</h3>
          <div className="takeoff-excerpt">
            <img
              src="/takeoff-analyze.png"
              alt="The Analyze page on mytakeoff.ai — a single drag-and-drop upload area for a floor plan, with no settings panel or configuration in front of it. The processing state cycles through four named steps: parsing rooms and labels, extracting dimensions, calculating material quantities, and building the cost estimate."
            />
          </div>
          <p className="cs-body">The original Analyze page had a settings panel  -  project name, region, contingency percentage, quality tier  -  that the user had to fill in before uploading. I deleted it.</p>
          <p className="cs-body" style={{ marginTop: '1rem' }}>This is the second piece of natural entanglement worth calling out. The settings panel only existed because the original framing assumed users wanted to configure a precise estimate. The new framing  -  60-second filter  -  works only if the upload is a single drag-and-drop with no configuration in front of it. The simplification is both a design decision and an engineering decision: the design decision is &ldquo;no settings before upload&rdquo;; the engineering decision is &ldquo;trust the AI&apos;s defaults and surface ranges instead of single numbers.&rdquo; Neither works without the other.</p>
          <p className="cs-body" style={{ marginTop: '1rem' }}>The processing state cycles through four named steps  -  <em>&ldquo;Parsing rooms and labels,&rdquo;</em> <em>&ldquo;Extracting dimensions,&rdquo;</em> <em>&ldquo;Calculating material quantities,&rdquo;</em> <em>&ldquo;Building your cost estimate&rdquo;</em>  -  over the actual parse time. The parser doesn&apos;t report per-step progress, so the steps cycle on a timed estimate that snaps to completion when the real result arrives. A single spinner would have been more honest about what the system actually knows. The four-step sequence does something a spinner can&apos;t: it teaches the user what the system is doing, in their language, while they wait. By the time the result lands they understand what they&apos;re looking at.</p>

          <h3 style={{ fontSize: '1.1rem', fontWeight: 600, color: 'var(--text)', marginTop: '2rem', marginBottom: '0.75rem' }}>Results.</h3>
          <div className="takeoff-excerpt">
            <img
              src="/takeoff-results.png"
              alt="The Results page on mytakeoff.ai — three columns of pricing labeled Budget, Standard, and Premium showing rounded cost ranges instead of a single precise grand total. A persistent context banner sits below the page header explaining that this is a ballpark estimate with low, mid, and high ranges, not a bid or fixed-price quote."
            />
          </div>
          <p className="cs-body">Three columns of pricing instead of one number is the headline change. Two smaller decisions deserve attention.</p>
          <p className="cs-body" style={{ marginTop: '1rem' }}>The first is a context banner that sits below the page header, never dismissible: <em>&ldquo;This is a ballpark estimate with low, mid, and high ranges, not a bid or fixed-price quote. Best used for lead qualification and early client conversations. Your real takeoff is still your real takeoff.&rdquo;</em> It costs vertical space on a page that already has a lot of content. It earns that space because it reframes the entire page in two sentences. A contractor screenshotting the result to send to a client will probably crop the banner out  -  and that&apos;s fine. The contractor saw it, internalized the framing, and is now using the tool the right way.</p>
          <p className="cs-body" style={{ marginTop: '1rem' }}>The second is confidence handling. The engine returns a confidence score per parse. When confidence is low, a small inline note appears above the room list: <em>&ldquo;Some measurements on this plan were harder to read than usual. The room list and ranges below are still a useful starting point, but treat the dimensions as approximate.&rdquo;</em> No warning icon, no modal, no alert component. Just a muted line with an amber left accent. Adding a warning icon would imply the result is wrong, which it isn&apos;t  -  it&apos;s just less precise than usual. The note tells the user what they need to know without panicking them.</p>

          <h3 style={{ fontSize: '1.1rem', fontWeight: 600, color: 'var(--text)', marginTop: '2rem', marginBottom: '0.75rem' }}>Pricing.</h3>
          <div className="takeoff-excerpt">
            <img
              src="/takeoff-pricing.png"
              alt="The Pricing page on mytakeoff.ai — two cards labeled Free and Pro using an 'Everything in Free, plus...' pattern, with a segmented Monthly/Annual toggle that swaps the Pro price between $79 and $59. The Pro card has a heavier amber border treatment and a soft shadow to mark it as the conversion target."
            />
          </div>
          <p className="cs-body">This page made the riskiest decision in the project: ship real Stripe checkout, not a waitlist mock. The argument for waitlist was operational simplicity. The argument for real Stripe was that &ldquo;shipped a real SaaS with working billing&rdquo; reads stronger than &ldquo;designed mock pricing tiers.&rdquo; I went with real Stripe.</p>
          <p className="cs-body" style={{ marginTop: '1rem' }}>The page itself is two cards (Free, Pro) using the &ldquo;Everything in Free, plus...&rdquo; pattern, with a segmented Monthly/Annual toggle that swaps the Pro price between $79 and $59. The Pro card has a slightly heavier visual treatment  -  <code style={codeStyle}>border-2 border-amber-500</code> plus a soft shadow  -  because it&apos;s the conversion target. The FAQ section uses shadcn Accordion to keep the page short while giving five common contractor questions room to be answered.</p>
          <p className="cs-body" style={{ marginTop: '1rem' }}>This decision also surfaced the project&apos;s biggest pre-existing debt discovery. While testing the live checkout, I found that the production Stripe account had stale pricing ($49/month vs the redesigned page&apos;s $79/month), stale brand metadata (&ldquo;Takeoff.ai&rdquo; merchant name), and was running in live mode rather than test mode (so test cards were being rejected by design). None of this was caused by the redesign. All of it was made visible by it.</p>
          <p className="cs-body" style={{ marginTop: '1rem' }}>I logged the drift in the project&apos;s <code style={codeStyle}>_context/decisions.md</code> file as the highest-priority post-merge fix and proceeded with the merge. Fixing it cleanly required touching the backend repo, which I&apos;d scoped out of the redesign at the start. Honest scope discipline is a hard thing to demonstrate in a portfolio piece because the easy move is to expand scope and &ldquo;fix everything.&rdquo; The harder move is to scope, ship, and document the debt.</p>
        </div>

        {/* Shared primitives, extracted on the third pass */}
        <div className="cs-section">
          <h2 className="cs-section-title">Shared primitives, extracted on the third pass</h2>
          <p className="cs-body">After Home, Analyze, and Results all shipped with inlined header and footer JSX, I extracted <code style={codeStyle}>SiteHeader</code> and <code style={codeStyle}>SiteFooter</code> into shared components and refactored the existing pages to use them. Refactoring after three implementations rather than upfront let me see what the duplicated chrome actually needed before standardizing it.</p>
          <p className="cs-body" style={{ marginTop: '1rem' }}>The extracted <code style={codeStyle}>SiteHeader</code> handles the auth-derived nav (Logout link for logged-in users, Login + Get Started for visitors), with a public-only state during auth-loading to prevent the visible flicker that shows up when you render the logged-out variant first and snap to logged-in. The Logout affordance was a gap I caught during the extraction  -  the redesigned chrome had no way for a logged-in user to sign out, and the old dropdown sign-out from the legacy <code style={codeStyle}>Header</code> had been left behind. The extraction was the right moment to fix it.</p>
          <p className="cs-body" style={{ marginTop: '1rem' }}>This is the kind of decision that&apos;s easy to miss in a portfolio piece. Shared components extracted at the start are over-designed for problems that don&apos;t exist yet. Shared components extracted after the third or fourth duplication are right-sized for the patterns that actually emerged. The git history shows the sequence: three pages with duplicated chrome, then one refactor commit that extracts and migrates all three at once, then the remaining pages built against the shared components from the start.</p>
        </div>

        {/* Trade-offs that didn't make it */}
        <div className="cs-section">
          <h2 className="cs-section-title">Trade-offs that didn&apos;t make it</h2>
          <p className="cs-body">Several things stayed broken or stale because the project scope was frontend-only and I held the line:</p>
          <p className="cs-body" style={{ marginTop: '1rem' }}>The PDF report template still uses the old Takeoff.ai branding and the old itemized-cost layout that contradicts the ballpark framing. Lives in the backend repo. Logged.</p>
          <p className="cs-body" style={{ marginTop: '1rem' }}>A signup-flow toast still says &ldquo;Welcome to Takeoff.ai&rdquo; instead of &ldquo;Welcome to mytakeoff.ai.&rdquo; Caught it during implementation, didn&apos;t fix it, logged it. Brand cleanup is its own pass.</p>
          <p className="cs-body" style={{ marginTop: '1rem' }}>A defunct Agency tier label remains reachable in the subscription-status code even though the redesigned Pricing page only shows Free and Pro. Logged for cleanup alongside the Stripe configuration drift mentioned above.</p>
          <p className="cs-body" style={{ marginTop: '1rem' }}>In a different project I would have addressed these inline. For this redesign I held scope deliberately  -  the goal was to repackage the product around honest positioning, not to ship a comprehensive refactor. Each piece of debt got logged with the decision rationale and a recommended next step. A senior reviewer reading <code style={codeStyle}>_context/decisions.md</code> can reconstruct every trade-off I made and why.</p>
        </div>

        {/* What I'd do differently */}
        <div className="cs-section">
          <h2 className="cs-section-title">What I&apos;d do differently</h2>
          <p className="cs-body">The bridge-file workflow created real friction during the merge  -  at one point I&apos;d made a copy edit in chat that hadn&apos;t propagated to the source file in the repo, and Claude Code surfaced it correctly when implementing the affected page. That kind of drift between &ldquo;what we decided&rdquo; and &ldquo;what the file says&rdquo; cost me a round-trip more than once. The fix in retrospect is treating bridge files as code: every decision lands as a commit, immediately, before the next prompt runs. I caught this pattern late and would build it in from day one next time.</p>
          <p className="cs-body" style={{ marginTop: '1rem' }}>The Stripe configuration drift would have been worth catching earlier. I scoped backend work out of the project deliberately, but a 15-minute audit of the live Stripe account at the start would have surfaced the price mismatch before the redesigned Pricing page advertised numbers that don&apos;t match production. That doesn&apos;t change the merge decision  -  backend cleanup was still out of scope  -  but it would have let me address the discrepancy in the case study with more confidence.</p>
          <p className="cs-body" style={{ marginTop: '1rem' }}>Production-grade portfolio work is mostly the unsexy stuff: scope discipline, debt logging, honest trade-offs, refactor timing. The redesign itself was three weeks of compounding small decisions, each one documented at the moment it was made. The final commit on <code style={codeStyle}>main</code> is one squash; the case study is what the squash actually means.</p>
        </div>

        {/* CTAs */}
        <div className="cs-section" style={{ borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: '3rem', marginTop: '2rem', display: 'flex', flexWrap: 'wrap', gap: '1rem', alignItems: 'center', justifyContent: 'space-between' }}>
          <div>
            <div style={{ fontSize: '1.125rem', fontWeight: 600, color: 'var(--text)', marginBottom: '0.35rem' }}>See it in action</div>
            <div style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>Upload a floor plan and get a ballpark range in under a minute.</div>
          </div>
          <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
            <a
              href={LIVE_URL}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                background: 'var(--accent)',
                color: '#fff',
                borderRadius: '8px',
                padding: '0.65rem 1.25rem',
                fontSize: '0.875rem',
                fontWeight: 600,
                textDecoration: 'none',
              }}
            >
              Try Live Product
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M3 7h8M7 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
            <a
              href={FRONTEND_REPO}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                background: 'rgba(255,255,255,0.06)',
                border: '1px solid rgba(255,255,255,0.1)',
                color: 'var(--text)',
                borderRadius: '8px',
                padding: '0.65rem 1.25rem',
                fontSize: '0.875rem',
                fontWeight: 500,
                textDecoration: 'none',
              }}
            >
              Frontend Repo
            </a>
            <a
              href={ENGINE_REPO}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                background: 'rgba(255,255,255,0.06)',
                border: '1px solid rgba(255,255,255,0.1)',
                color: 'var(--text)',
                borderRadius: '8px',
                padding: '0.65rem 1.25rem',
                fontSize: '0.875rem',
                fontWeight: 500,
                textDecoration: 'none',
              }}
            >
              Engine Repo
            </a>
          </div>
        </div>

        <div style={{ marginTop: '3rem', padding: '2rem', borderRadius: '16px', border: '1px solid rgba(99,102,241,0.2)', background: 'rgba(99,102,241,0.08)', display: 'flex', flexWrap: 'wrap', gap: '1.5rem', alignItems: 'center', justifyContent: 'space-between' }}>
          <div>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '0.5rem', color: 'var(--text)' }}>Let&apos;s work together</h3>
            <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', margin: 0, maxWidth: '520px' }}>
              Have a product or team that could use AI-native design and execution? I&apos;d love to help.
            </p>
          </div>
          <a href="/#contact" className="btn-primary" style={{ whiteSpace: 'nowrap' }}>Get in touch</a>
        </div>

        <button className="back-btn" onClick={onBack} style={{ marginTop: '3rem', marginBottom: '4rem' }}>
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M9 2 L4 7 L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          Back to Work
        </button>
      </div>
    </div>
  )
}
