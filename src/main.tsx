import { ViteReactSSG } from 'vite-react-ssg'
import { routes } from './App.tsx'
import './index.css'

// ViteReactSSG replaces ReactDOM.createRoot: it prerenders each route to static
// HTML at build time and hydrates the same routes in the browser. <Analytics />
// and <SpeedInsights /> now live in the Layout (src/App.tsx).
export const createRoot = ViteReactSSG({ routes })
