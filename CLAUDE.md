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
