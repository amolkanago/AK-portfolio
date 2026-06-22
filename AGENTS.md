# AGENTS.md

## Overview
This repository is a React application built with Vite, Tailwind CSS, TypeScript, and shadcn/ui. The goal is to keep the codebase fast, type-safe, accessible, and easy to extend by following existing patterns instead of introducing unnecessary abstractions.

## Stack
- React
- TypeScript
- Vite
- Tailwind CSS
- shadcn/ui
- Radix UI primitives where used
- ESLint
- Prettier if configured in the repo

## Agent Priorities
When making changes, follow this order:
1. Understand the existing feature and nearby code before editing.
2. Reuse current utilities, components, hooks, and patterns.
3. Keep changes small, local, and easy to review.
4. Preserve accessibility, responsiveness, and type safety.
5. Validate with lint, build, and relevant tests before finishing.

## Commands
Use the exact scripts from `package.json`. In most cases, the project will use commands similar to:

```bash
npm install
npm run dev
npm run lint
npm run build
npm run preview
```

If the project uses `pnpm`, `yarn`, or `bun`, follow the lockfile and existing package manager instead of switching tools.

## Expected Structure
Prefer the existing repository layout. If adding new code to an early-stage project, use this structure:

```text
src/
  assets/
  components/
    ui/              # shadcn/ui base primitives
    common/          # shared app-level wrappers/compositions
    layout/          # navbar, sidebar, header, footer
  features/          # feature/domain folders
  hooks/             # reusable custom hooks
  lib/               # utilities, cn(), constants, helpers
  services/          # API clients and request logic
  pages/             # route-level screens if used
  types/             # shared TypeScript types
  styles/            # globals or style helpers
  main.tsx
```

## Folder Rules
- `components/ui/` should contain base shadcn-generated components and light local edits only.
- Put app-specific compositions in `components/common/` or the relevant `features/*` folder.
- Keep business logic close to the feature that owns it.
- Avoid deep nesting unless it clearly improves maintainability.
- Prefer feature-based organization over scattering related files across many top-level folders.

## shadcn/ui Rules
- Treat shadcn/ui components as internal UI primitives.
- Prefer wrapping or composing primitives instead of heavily rewriting their base API.
- If styling needs differ by product area, build thin wrappers instead of duplicating component logic.
- Keep variant extensions near the component when practical.
- Be careful when modifying copied shadcn component internals because upstream updates are manual.

## React Conventions
- Use functional components only.
- Use Hooks for state and side effects.
- Keep components focused on one responsibility.
- Extract repeated UI into reusable components.
- Extract repeated logic into custom hooks.
- Do not manipulate the DOM directly unless React refs are clearly required.
- Prefer declarative state-driven UI over imperative UI fixes.

## TypeScript Rules
- Use `.tsx` for components and `.ts` for non-UI modules.
- Explicitly type props, return values when useful, and shared domain models.
- Avoid `any`; prefer `unknown`, generics, discriminated unions, or proper interfaces.
- Keep shared types in `src/types` or feature-local type files depending on ownership.
- Narrow types close to usage rather than over-generalizing early.

## File Naming
- React components: `PascalCase.tsx`
- Hooks: `useSomething.ts`
- Utilities: `camelCase.ts`
- Feature modules: clear descriptive names, no abbreviations unless standard
- Route/page components: match route or screen purpose
- Avoid vague names like `temp.ts`, `helpers2.ts`, or `newComponent.tsx`

## Tailwind Rules
- Prefer Tailwind utility classes for component styling.
- Reuse existing spacing, color, radius, shadow, and typography conventions.
- Avoid long unreadable class strings when a component should be split.
- If class composition becomes repetitive, extract with `cva`, helper functions, or wrapper components only if the repo already uses that pattern.
- Keep responsive behavior explicit with standard breakpoint usage.
- Avoid ad hoc one-off values unless they are already part of the design language.

## Styling Guidelines
- Use the existing `cn()` helper if present for class merging.
- Preserve dark mode behavior where already supported.
- Follow the current design tokens and visual rhythm.
- Prefer consistent spacing and alignment over visual hacks.
- Avoid inline styles unless the value is dynamic and tightly scoped.

## State Management
- Use local component state for local UI.
- Lift state only when multiple children need the same source of truth.
- Use context sparingly and only for shared cross-tree concerns.
- If the repo already uses a global state library, follow that pattern instead of introducing another one.
- Keep server state concerns separate from purely interactive UI state.

## Data and API Rules
- Keep API logic out of low-level presentational components.
- Use `services/`, `lib/`, or feature hooks for requests and transformations.
- Always handle loading, error, empty, and success states in user-facing async flows.
- Do not hardcode secrets, tokens, or environment-specific URLs.
- Use environment variables through the project’s Vite config pattern such as `import.meta.env`.

## Forms
- Prefer controlled components unless the repo uses a form library pattern already.
- Reuse existing form primitives from shadcn/ui where possible.
- Keep validation messages clear and field-specific.
- Ensure labels, descriptions, error states, and keyboard interaction are accessible.

## Accessibility
- Use semantic HTML first.
- Ensure every button, link, dialog, dropdown, and form field is keyboard accessible.
- Preserve visible focus states.
- Provide accessible names for icon-only controls.
- Use proper labels, `aria-*` attributes only where necessary, and alt text for meaningful images.
- Do not ship UI that only works on hover.

## Performance
- Avoid unnecessary re-renders from unstable props or inline object creation in hot paths.
- Memoize only when there is a real render or computation concern.
- Lazy load route-level or heavy UI when appropriate.
- Keep bundle impact in mind before adding libraries.
- Prefer existing dependencies over introducing near-duplicate packages.

## Testing and Validation
Before completing work, run the relevant checks available in the repo:
- lint
- build
- unit tests
- type checks

Typical workflow:

```bash
npm run lint
npm run build
```

If tests exist for the touched area, run those too. Do not claim success without running the repository’s actual checks when available.

## Change Safety
- Do not refactor unrelated files while solving a focused task.
- Do not rename public exports, routes, or shared APIs unless required.
- Do not add dependencies without clear need.
- Do not replace existing architectural patterns unless the task explicitly asks for it.
- Do not remove comments, tests, or types without replacing their value.

## When Adding a New Feature
1. Check whether the feature fits an existing `features/` domain.
2. Reuse `components/ui` primitives first.
3. Create app-specific wrappers only when needed.
4. Keep fetching, transformation, and UI concerns separated.
5. Add loading, empty, and error states.
6. Confirm responsive layout and keyboard usability.
7. Run lint and build before finishing.

## When Editing shadcn Components
- Prefer minimal edits.
- Keep the original structure understandable.
- If the same customization is needed in many places, create a wrapper component.
- Avoid changing base prop contracts unless there is a strong reason.
- Document non-obvious changes in code comments or PR notes.

## Pull Request Expectations
- Keep the diff focused.
- Explain what changed and why.
- Mention tradeoffs when relevant.
- Include screenshots for visible UI work when possible.
- Call out follow-up cleanup separately instead of mixing it into the same change.

## If Repo Context Is Missing
Before making assumptions, inspect:
- `package.json`
- `vite.config.ts`
- `tsconfig.json`
- `components.json`
- `src/lib/utils.ts`
- existing files in `src/components/ui`
- ESLint and Prettier configuration
- routing setup and feature folders

Match the repository’s real conventions over this document whenever the codebase clearly establishes a pattern.