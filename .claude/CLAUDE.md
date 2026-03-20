# giorgiovanini.eu — Bauhaus CV Site

## Project overview
Personal portfolio/CV site for Giorgio Vanini. Built with Astro, deployed on Vercel at giorgiovanini.eu.

## Design concept
Interactive Bauhaus-brutalist composition. The CV is not a document — it's a spatial canvas with geometric shapes (circles, rectangles, triangles) that the user navigates with their mouse. Each shape represents a CV section (education, skills, languages, interests, convictions). Shapes float on different parallax layers and reveal content on hover.

## Design reference
See `reference/bauhaus-cv-mockup.html` for the complete working mockup. This is the source of truth for the visual design. Reproduce its behavior faithfully in Astro components.

## Key design tokens
- **Fonts**: Syne (display, 800 weight for headings) + IBM Plex Mono (body/labels)
- **Colors**: EU blue `#003399`, EU gold `#FFCC00`, ink `#0a0a0a`, mid gray `#888`
- **Background**: solid black `#0a0a0a`
- **Interaction**: mouse-tracking parallax on all shapes, crosshair overlay, coordinate readout, hover-to-reveal content panels
- **Decorative**: grid lines at 25/50/75%, diagonal lines, ghost letterforms (G, V), corner marks (+), pulse ring animation on education circle

## Tech stack
- **Framework**: Astro (latest)
- **Styling**: scoped CSS within Astro components, no Tailwind
- **Interactivity**: vanilla JS in `<script>` tags (Astro islands not needed — this is pure DOM manipulation)
- **Deployment**: Vercel
- **Domain**: giorgiovanini.eu

## Architecture
```
src/
  pages/
    index.astro          # Main CV page (full viewport canvas)
  components/
    BauhausCanvas.astro  # The interactive composition
    Shape.astro          # Reusable parallax shape component
  layouts/
    Base.astro           # HTML head, fonts, meta tags
  styles/
    global.css           # Reset, font imports, CSS variables
reference/
  bauhaus-cv-mockup.html # Design mockup (read-only reference)
```

## Content (Giorgio Vanini)
- **Subtitle**: AI · Data · Politics
- **Education**: BSc AI & Management, LUISS Guido Carli, Roma (2024–present). Target: MSc at HEC/ESSEC, Paris (2027)
- **Competences**: Python, ML, SNA, Astro/React, Git, EU policy, constitutional law, electoral systems
- **Languages**: IT C2, EN C2, FR B2
- **Interests**: Art cinema, cantautorato, geopolitics, editorial design
- **Convictions**: European federalist, fiscal union, digital sovereignty, open source, nuclear for AI
- **Contact**: giorgiovanini.eu, Signal preferred

## Conventions
- No rounded corners (brutalist)
- No gradients or shadows
- Monospace for data, Syne for display/headings
- All labels uppercase with letter-spacing
- The site should be a single full-viewport page, no scroll (or minimal scroll on mobile)
- Mobile: stack shapes vertically, disable parallax, tap-to-reveal instead of hover
