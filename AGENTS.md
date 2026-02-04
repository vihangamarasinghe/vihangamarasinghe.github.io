# agents.md

## Project Description

This repository contains a **minimal, performance-focused personal website** for a software engineer.

The site is designed to be:

- Fast and lightweight
- Easy to maintain and extend
- SEO-friendly
- Clear in structure and intent

The emphasis is on content clarity, technical credibility, and long-term maintainability rather than visual complexity or marketing-style presentation.

---

## Primary Objectives

The project prioritizes the following goals, in order:

1. **Performance**
   - Static HTML output by default
   - Minimal JavaScript
   - Strong Core Web Vitals
   - Fast load times on mobile and low-bandwidth connections

2. **SEO**
   - Semantic HTML
   - Clean, predictable URLs
   - Correct metadata
   - Sitemap generation
   - Accessible markup

3. **Maintainability**
   - Simple and explicit architecture
   - Clear separation of concerns
   - Low dependency surface area
   - Easy to extend without refactoring

---

## Tech Stack (Constraints)

The following technologies are required and should not be replaced:

- **Astro** — static-first site framework
- **Tailwind CSS** — utility-first styling
- **GitHub Pages** — hosting
- **GitHub Actions** — build and deployment

---

## Approved Libraries

Only the following libraries are approved for use:

- `astro` - use Astro MCP for efficient documentation reference
- `tailwindcss`
- `@astrojs/sitemap` — sitemap generation for SEO
- `@tailwindcss/typography` — typography defaults for text-heavy sections
- `tailwind-merge` — Tailwind class composition

No additional libraries or frameworks should be introduced without explicit instruction. You are free to suggest libraries if value adding in current context.

---

## Explicitly Out of Scope

The following are intentionally excluded unless explicitly requested:

- Blogs or CMS systems (Blog might be a possible feature, so keep extensibility in mind)
- Analytics or tracking libraries
- UI component libraries
- Client-side routers or frameworks
- State management libraries

---

## Architectural Principles

- Static rendering by default
- Client-side JavaScript only when strictly necessary
- Prefer semantic HTML elements and practices
- Accessibility best practices
- Favor explicit, readable implementations
- Seperate concerns when possible
- Optimize for clarity over cleverness

---

## Separation of Concerns

The project should follow these boundaries consistently:

### Layouts

- Define global page structure
- Own `<html>`, `<head>`, and metadata
- Provide shared wrappers
- Contain no business or content data

### Components

- Reusable UI elements
- Presentation-focused
- Stateless where possible
- No hardcoded structured data

### Data

- Structured content with meaning beyond a single page
- Examples: projects, experience, links
- Stored in `src/data/*`
- Imported at build time

### Pages

- Compose layouts, components, and data
- Minimal logic
- No duplicated structured content

---

## Current Site Scope

The site currently consists of a single homepage containing:

- Name and role
- My photograph
- Short introduction
- Selected projects
- Experience summary
- Contact links and resume

No blog or long-form publishing functionality is included at this stage.

---

## Layout and Design Direction

- Single-column layout
- Typography-driven design (consider performance tradeoffs first)
- Generous whitespace
- Low visual noise
- Restrained color palette
- Minimal decorative elements
- Responsive for all device types
- Possible future darkmode toggle
- Image handling:
- Store images in `src/assets` or `public` depending on build-time needs
- Prefer Astro `Image` component for optimization when possible
- Use optimized formats (`webp`, `avif`) and explicit dimensions

The design should feel modern, calm, and intentional.

---

## Typography Guidelines

- Use a minimal typography system
- Prefer a single primary font family
- Establish hierarchy using size and weight, not multiple fonts
- Avoid decorative or display fonts
- Ensure comfortable line length and line height for reading
- Typography choices must prioritize readability and accessibility

Font decisions should be implemented centrally and applied consistently.
Do not introduce additional fonts without explicit instruction.

---

## Color Palette Guidelines

- Use a restrained color palette
- Base the design on neutral colors (for light/default mode - light background, dark text)
- Allow at most one accent color
- Avoid decorative color usage
- Do not use color as the sole means of conveying information
- Ensure sufficient contrast for all text and interactive elements
- For now a default/light mode pallete, later might extend to a dark mode toggle

Colors should be defined semantically and reused consistently.
Do not introduce additional colors without explicit instruction.

---

## Code Quality Standards

All code should meet the following standards:

- Production-ready
- Clear and descriptive naming
- LLM readable/ agentic development native
- Easy for another engineer to understand quickly

---

## Guidance for Code Generation

When generating or modifying code:

- Avoid unnecessary comments
- Justify tradeoffs when relevant
- Suggest improvements when possible
- Do not introduce new dependencies without instruction
- Use configured  MCPs and web search for documentation or information.

---

## Definition of Success

The project is considered successful if:

- The repository structure is immediately understandable without explanation
- The site loads quickly and consistently across devices and network conditions
- The site meets standard accessibility standards:
  - Semantic HTML is used appropriately
  - Content is navigable via keyboard
  - Text has sufficient color contrast
  - Markup supports screen readers
- The visual design is clean, minimal, and legible:
  - Clear typographic hierarchy
  - Consistent spacing and alignment
  - No unnecessary visual noise or decoration
- SEO fundamentals are correctly implemented:
  - Meaningful page titles and metadata
  - Crawlable, static content
  - Sitemap generation
- Styling is predictable and maintainable:
  - No ad-hoc or duplicated styles
  - Consistent use of Tailwind utilities
- Future changes can be made without architectural rewrites or large refactors
