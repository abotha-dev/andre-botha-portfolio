# UI/UX Pro Max — Portfolio Style Reference

**Purpose:** Keep the portfolio’s UI aligned with a minimal, high‑contrast dark aesthetic inspired by UUPM (without introducing any runtime dependency).

## Selected UUPM Style Stack
- **Dark Mode Minimalism** — primary visual language
- **Subtle Glassmorphism (cards only)** — low blur, strong borders for readability
- **Soft Elevation / Shadow** — used sparingly to separate surfaces from background

## Accessibility Guardrails
- Keep secondary text at **AA contrast** against `--bg` and `--surface`
- Ensure **focus-visible outlines** for keyboard navigation
- Avoid low‑contrast borders on cards; prefer `--border-strong`

## Token Source of Truth
- **File:** `src/design-tokens.css`
- All color, radii, and typography tokens live there.

## Current Token Notes
- Background: `--bg` (#0d0d0f)
- Surfaces: `--surface`, `--surface-2`, `--surface-hover`
- Text: `--text-1`, `--text-2`, `--text-3`
- Accent: `--accent` (#6366f1)

## When to Use “Glass”
- Only for **cards/panels** on dense backgrounds
- Use **low opacity** + **stronger borders** to maintain contrast

## Reference
- UUPM Stacks: https://uupm.cc/#stacks
