# PROJECT BRIEF — STP Landing Page

## Figma references
- UI Landing + open menu: `https://www.figma.com/design/z2dNZGTYEgX16UOpYrJHvW/Landing-Launch?node-id=11-449`
- UI Kit (components): `https://www.figma.com/design/z2dNZGTYEgX16UOpYrJHvW/Landing-Launch?node-id=0-1`

## Stack
React + Vite + Tailwind CSS. No routing library — all CTAs link externally. No SSR.

## Scope & priority
Build the **mobile** version first. The page must be fully responsive afterwards, but for now focus on pixel-perfect mobile. Structure the code so that adding desktop breakpoints later is straightforward (breakpoint and grid specs are in the tokens folder).

## Project structure
The working directory currently contains, organized as follows:
- Foundation tokens and breakpoint/grid specs in `/src/tokens`
- Self-hosted fonts in `/src/fonts`
- Main assets (decorative SVGs, images) in `/src/assets`
- Style reference document at `/src/reference/ReferenceStile.md`

This is the starting organization. You are free to reorganize, rename and optimize the folder structure as you see fit for a clean, standard React + Vite + Tailwind project (e.g. `/src/components`, `/src/sections`, `/src/styles`, `/src/lib`). Just make sure inputs (tokens, fonts, assets, reference) are correctly consumed wherever you move them.

## Source of truth
In case of discrepancy between token JSON and Figma values: JSON is source of truth for values, Figma is source of truth for visual structure and layout.

## Fonts
Fonts are self-hosted in `/src/fonts`. Load them in the most performant way for a React + Tailwind setup (e.g. `@font-face` in global CSS with `font-display: swap`). Never use external font services.

## Tokens
Always use token values. Never hardcode values. If a required token is missing and it blocks progress, use a hardcode for that specific point only and flag it at the end of the task in the `Hardcoded exceptions` section.

## Assets
Decorative SVGs (brush strokes, illustrations) are in `/src/assets`. Use them as `<img aria-hidden="true" alt="" />` or as CSS `background-image`. Never reconstruct them in CSS.
Images fill the media frame as defined in the Figma component. For any image not found in assets, use a placeholder that respects the exact dimensions of the Figma frame.

## Language
All code, comments, variable names and component names must be in English. Page copy stays in the original language (Italian/English as designed).

## Naming convention
Keep component names as close as possible to Figma naming. If a change is necessary, make it without asking and flag it at the end of the task in the `Naming changes` section.

## Approach
Before writing any code:
1. Analyze tokens and UI Kit components thoroughly
2. Read `/src/reference/ReferenceStile.md`
3. Produce a style guide document (save it in the working directory, e.g. `/src/reference/StyleGuide.md`) summarizing the key look & feel characteristics and the components to use — this will serve as your development reference
4. Write an explicit development plan listing all steps in order

Then proceed atomically, one step at a time:
1. Set up Tailwind config from tokens (colors, typography, spacing, border radius, shadows)
2. Set up global CSS (font-face, base styles, grid)
3. Build atoms (Button, Tag, NavItem...)
4. Build molecules (Card, Banner, SectionHeader, MobileMenu...)
5. Compose sections
6. Assemble the full page

**Quality check (after each step above):** at the end of each task, autonomously review the output for quality and adherence to the design specs and tokens. If you find errors or inconsistencies, redo the task and run the check again. Only move to the next task when the current one passes the check.

## Tools
Use the Figma skills as needed to read the design, components, tokens and values from the linked files.

## Goal
Pixel-perfect output matching the mobile UI as designed in Figma. Code must be clean, well structured and ready for responsive extension.

Proceed without asking for permission. You can read, write and modify everything in the working directory.

## End of task summary
At the end of the full task, produce a summary with:
- `Hardcoded exceptions` — any value hardcoded due to missing token
- `Naming changes` — any component name changed from Figma convention
- `Open questions` — anything that needs designer review
