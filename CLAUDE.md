# CLAUDE.md for AI Fitness App
## 1. Project Goal
Build an AI-powered fitness and nutrition application. The primary goal is to create a functional MVP that can be added to my portfolio to showcase my ability to design and build end-to-end AI products. The long-term vision is an AI fitness copilot that adapts to user progress.
## 2. Core Documents
- The single source of truth for the project's features and architecture is `ai_fitness_app_project_overview.md`. Always refer to this document for planning and implementation details.
## 3. Tech Stack & Constraints
- **Frontend:** React, TypeScript, Tailwind CSS
- **Backend:** Supabase (for database and auth)
- **Deployment:** Vercel
- **UI Components:** Generate all UI components using the **21st.dev Magic MCP server**. The prompt format is `/ui <description>`.
- **Language:** All code and documentation must be in English.
## 4. Development Workflow
Follow this sequence for all new features:
1.  **Plan:** First, create or update a plan. Do not write code immediately.
2.  **Database:** If database changes are needed, generate the SQL migration scripts for Supabase first.
3.  **Backend:** Implement any necessary Supabase functions or backend logic.
4.  **Frontend:** Use the `/ui` command to generate the required React components from 21st.dev.
5.  **Integrate:** Wire the frontend components to the backend logic.
6.  **Test:** Write and run tests for the new functionality.
## 5. My Persona (Andre Botha)
- I am a senior product designer and solo founder.
- My goal is to demonstrate my skills as an AI-native designer who builds end-to-end.
- The code should be clean, well-documented, and production-quality.

<!-- VERCEL BEST PRACTICES START -->
## Best practices for developing on Vercel

These defaults are optimized for AI coding agents (and humans) working on apps that deploy to Vercel.

- Treat Vercel Functions as stateless + ephemeral (no durable RAM/FS, no background daemons), use Blob or marketplace integrations for preserving state
- Edge Functions (standalone) are deprecated; prefer Vercel Functions
- Don't start new projects on Vercel KV/Postgres (both discontinued); use Marketplace Redis/Postgres instead
- Store secrets in Vercel Env Variables; not in git or `NEXT_PUBLIC_*`
- Provision Marketplace native integrations with `vercel integration add` (CI/agent-friendly)
- Sync env + project settings with `vercel env pull` / `vercel pull` when you need local/offline parity
- Use `waitUntil` for post-response work; avoid the deprecated Function `context` parameter
- Set Function regions near your primary data source; avoid cross-region DB/service roundtrips
- Tune Fluid Compute knobs (e.g., `maxDuration`, memory/CPU) for long I/O-heavy calls (LLMs, APIs)
- Use Runtime Cache for fast **regional** caching + tag invalidation (don't treat it as global KV)
- Use Cron Jobs for schedules; cron runs in UTC and triggers your production URL via HTTP GET
- Use Vercel Blob for uploads/media; Use Edge Config for small, globally-read config
- If Enable Deployment Protection is enabled, use a bypass secret to directly access them
- Add OpenTelemetry via `@vercel/otel` on Node; don't expect OTEL support on the Edge runtime
- Enable Web Analytics + Speed Insights early
- Use AI Gateway for model routing, set AI_GATEWAY_API_KEY, using a model string (e.g. 'anthropic/claude-sonnet-4.6'), Gateway is already default in AI SDK
  needed. Always curl https://ai-gateway.vercel.sh/v1/models first; never trust model IDs from memory
- For durable agent loops or untrusted code: use Workflow (pause/resume/state) + Sandbox; use Vercel MCP for secure infra access
<!-- VERCEL BEST PRACTICES END -->
