# HackIndia Development Instructions

## 1. Project Identity

- Project name: HackIndia
- Domain target: hackindia.dev
- Purpose: Help students understand hackathon problem statements, research solutions, discover technical resources, and find upcoming hackathons.
- Long-term goal: Become a major Indian hackathon knowledge and discovery platform.

## 2. Technology

- Use the Next.js App Router.
- Use TypeScript.
- Use Tailwind CSS.
- Use ESLint.
- Use the React Compiler.
- Use the existing project configuration.
- Do not replace the framework or introduce another frontend framework.

## 3. Architecture Principles

- Prefer simple, scalable architecture.
- Use reusable components.
- Keep public content SEO-friendly.
- Prefer server components unless client-side interactivity is actually required.
- Keep business logic separate from presentation.
- Avoid unnecessary abstractions.
- Avoid premature backend, database, and authentication implementation.
- Do not install dependencies unless there is a clear reason.

## 4. Routing Strategy

The platform will eventually contain routes such as:

- `/`
- `/problems`
- `/problems/[slug]`
- `/hackathons`
- `/hackathons/[slug]`
- `/resources`
- `/about`

Problem pages are a core product feature and must be designed with search-engine indexing and scalable content generation in mind.

## 5. Problem Content System

A problem page may eventually contain:

- Official problem statement
- Simplified explanation
- Background
- Research
- Existing solutions
- Solution opportunities
- Features
- Architecture
- Technology stack
- Datasets
- APIs
- Research papers
- References
- FAQs

Do not invent factual research information.

## 6. UI/UX

- Build a modern, premium, technical platform.
- The design should feel trustworthy and energetic rather than childish.
- Use a mobile-first responsive design.
- Use strong typography and spacing.
- Make interactive elements accessible.
- Maintain a consistent visual design system.
- Avoid unnecessary animations.
- Avoid excessive gradients, glassmorphism, or decorative effects.
- Prioritize usability and content discovery.

## 7. SEO

Every public content page should be designed with SEO in mind. Use:

- Meaningful titles
- Descriptions
- Canonical metadata where appropriate
- Semantic HTML
- Clean URLs
- Internal linking
- Structured content
- Sitemap and robots support when implemented

## 8. Code Quality

- Preserve TypeScript strictness.
- Do not use `any` unless genuinely necessary.
- Keep components focused.
- Avoid duplicated code.
- Use meaningful names.
- Do not modify unrelated files.
- Do not remove working functionality without a reason.

## 9. AI Coding Rules

Before implementing a significant feature:

- Inspect relevant existing code.
- Explain the intended changes.
- Identify files that will change.
- Avoid rewriting unrelated files.

When fixing a bug:

- Identify the root cause first.
- Make the smallest appropriate fix.
- Do not rewrite the application unnecessarily.

## 10. Documentation

Important architecture and product decisions must be documented in the `docs/` directory.

Do not create documentation files for trivial changes.

## 11. Git Discipline

- Keep changes logically grouped.
- Do not commit generated files such as `node_modules` or `.next`.
- Use clear conventional commit messages such as:
  - `feat:`
  - `fix:`
  - `docs:`
  - `refactor:`
  - `chore:`

## 12. Scope Control

Do not independently add the following unless explicitly requested:

- Authentication
- Payments
- Database systems
- AI APIs
- Analytics
- Admin dashboards
- Complex backend services

Do not make product decisions that have not been requested.

## 13. Important Product Principle

HackIndia is not simply an AI chatbot.

The primary product value is:

**Problem discovery -> Understanding -> Research -> Resources -> Building**

AI should eventually enhance this workflow rather than replace the core content and discovery experience.
