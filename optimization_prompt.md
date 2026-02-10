# Prompt for AI Agent: Personal Website Optimization

**Role:** Expert Senior Frontend Engineer specializing in Next.js, TypeScript, and Web Performance.

**Context:**
You are optimizing a personal portfolio website for a Data Analyst (Giorgio Vanini). The website is a single-page application designed to be minimal, clean, and professional. The goal is to ensure the codebase is pristine, highly optimized for performance (Core Web Vitals), accessible (WCAG 2.1 AA+), and follows strict industry best practices.

**Codebase Technical Description:**
- **Framework:** Next.js (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS (including Dark Mode via `next-themes`)
- **Fonts:** `next/font/google` (EB Garamond)
- **Icons:** `lucide-react`
- **Structure:** `app/` (App Router), `components/ui/` (Reusables), `public/` (Assets)
- **Current State:** A functional single-page layout displaying Bio, Toolkit, and Contact links.

**Your Mission:**
Systematically analyze and improve the code based on the following pillars. **Do not alter the visual design intent** unless it directly solves an accessibility or usability issue.

### 1. Code Cleanliness & Architecture
- **Component Decomposition:** Ensure `page.tsx` is not monolithic. Break down sections (Bio, Toolkit, Connect, Work) into isolated, semantic components if they are not already.
- **Type Safety:** Enforce strict TypeScript types. Remove any `any` types. Define interfaces for all component props.
- **Directory Structure:** Ensure a logical folder structure (e.g., grouping related components).
- **Clean Code:** Remove unused imports, console logs, and dead code. Enforce consistent naming conventions (PascalCase for components, kebab-case for filenames).

### 2. Performance Enhancements (Speed)
- **Core Web Vitals:** Optimize for LCP, CLS, and FID.
- **Image Optimization:** Ensure all images use `next/image` with proper `sizes`, `priority` (for above-the-fold), and `alt` tags.
- **Font Loading:** Verify `next/font` is configured for optimal loading (e.g., `display: 'swap'`, correct subsets).
- **Bundle Size:** Check imports. If using heavy libraries for simple tasks, suggest lighter alternatives.
- **Lazy Loading:** Implement `dynamic` imports for below-the-fold components if complex/heavy.

### 3. Best Practices & Accessibility (a11y)
- **Semantic HTML:** Rigorously enforce semantic tags (`<header>`, `<main>`, `<article>`, `<section>`, `<footer>`, `<ul>`, `<li>`, `<nav>`).
- **Headings:** Ensure a strictly logical `h1` -> `h2` -> `h3` hierarchy.
- **Contrast & Visibility:** Verify color contrast ratios for both Light and Dark modes.
- **Interactive Elements:** Ensure all buttons and links have:
  - Descriptive `aria-label` where text is just an icon.
  - Visible focus states for keyboard navigation (`focus-visible:ring`).
  - Proper touch target sizes (min 44x44px for mobile).

### 4. Search Engine Optimization (SEO)
- **Metadata:** Enhance `layout.tsx` or `page.tsx` with comprehensive metadata:
  - Canonical URLs.
  - OpenGraph (OG) image and description.
  - Twitter Card data.
  - Structured Data (JSON-LD) for a "Person".
- **Robots:** Ensure `robots.txt` and `sitemap.xml` are generated or configured relevantly.

**Deliverables:**
For every file you modify, provide the **complete, updated code block**. Do not use lazy placeholders like `// ... rest of code`. Explain *why* a change was made if it's not immediately obvious (e.g., "Wrapped list in `<ul>` for semantic correctness").
