# NovaTech Solutions — Interactive Modern Website

An engineering-led, modern, responsive multi-page corporate web application designed and built for **NovaTech Solutions**.

Built with **React 19**, **TypeScript**, **React Router v7**, and a bespoke **Vanilla CSS design system** using design tokens, bento grid architecture, and accessible micro-interactions.

---

## 1. Quick Start & Setup Instructions

### Prerequisites
- Node.js (v18+ recommended; tested on v24.18.0)
- npm (v10+; tested on v11.16.0)

### Installation
```bash
# Navigate to the project root
cd /Users/mukulbhardwaj/nova-h

# Install dependencies (React, React Router, Lucide, TypeScript, Vite)
npm install
```

### Running Locally
```bash
# Start the local development server with Hot Module Replacement (HMR)
npm run dev
```
The application will launch and be accessible at `http://127.0.0.1:5176/` (or your configured port).

### Building for Production
```bash
# Run TypeScript compilation and Vite production build
npm run build
```
Production assets are generated in `dist/`.

### Linting
```bash
# Run the fast oxlint checker
npm run lint
```

---

## 2. Design System & Brand Palette

The site implements a refined, restrained blue-and-navy color system directly aligned with the creative direction:

| Token | Value | Semantic Role |
| :--- | :--- | :--- |
| `--color-navy` | `#0B1F3A` | Primary brand navy, high-contrast headings, card borders |
| `--color-deep-navy` | `#081629` | Deep hero banner backgrounds, footer surfaces |
| `--color-blue` | `#2563EB` | Primary interactive brand blue, active focus rings, primary CTAs |
| `--color-bright-blue` | `#60A5FA` | Accent glow, illuminated node markers, status badges |
| `--color-light-blue` | `#DBEAFE` | Subtle badge backgrounds, selection highlights |
| `--color-pale-blue` | `#EFF6FF` | Soft surface container backgrounds, secondary buttons |
| `--color-bg-pale` | `#F5F9FF` | Primary page canvas background |
| `--color-white` | `#FFFFFF` | Bento card surfaces, inputs, modal dialogs |
| `--color-text` | `#14243A` | High-legibility body text (WCAG AA compliant) |
| `--color-text-muted` | `#64748B` | Secondary descriptions, metadata, footer notes |
| `--color-border` | `#DFE8F3` | Crisp structural borders and card dividers |

---

## 3. Architecture & Component Summary

### Application Structure
```
nova-h/
├── index.html                   # SEO metadata, OpenGraph tags, Google Fonts (Plus Jakarta Sans & Inter)
├── public/
│   ├── favicon.svg              # Bespoke geometric NovaTech SVG favicon
│   ├── robots.txt               # Search crawler indexing rules
│   ├── sitemap.xml              # XML sitemap covering all application routes
│   └── images/                  # High-resolution architectural & infrastructure photography
│       ├── hero_tower_mist.jpg
│       ├── modular_server.jpg
│       ├── tech_engineering.jpg
│       ├── systems_architecture.jpg
│       ├── services_modular_architecture.jpg
│       ├── about_mission_philosophy.jpg
│       └── case_study_integration.jpg
├── src/
│   ├── types/
│   │   └── index.ts             # Strict TypeScript definitions for Services, FAQs, Stages, Forms
│   ├── data/
│   │   ├── servicesData.ts      # 4 core service specifications with deliverables & use cases
│   │   ├── processData.ts       # 4-stage delivery framework (Discover, Define, Develop, Deliver)
│   │   ├── principlesData.ts    # 5 working principles with deep architectural rationales
│   │   ├── faqData.ts           # 5 comprehensive enterprise FAQs
│   │   └── caseStudyData.ts     # Fictional demonstration concept (OmniFlow Unified Architecture)
│   ├── components/
│   │   ├── Logo.tsx             # Scalable geometric SVG logo with dark/light variants
│   │   ├── Navbar.tsx           # Sticky blurred header, dropdown navigation, mobile drawer menu
│   │   ├── Footer.tsx           # Multi-column footer with dynamic copyright year and concept notice
│   │   ├── BentoHero.tsx        # Signature bento hero with organic navy capsule & radial metric gauge
│   │   ├── CapabilitiesBento.tsx # Asymmetric bento grid highlighting 4 capability domains
│   │   ├── ServiceDiscoveryWizard.tsx # Interactive challenge selector with contact preselection
│   │   ├── InteractiveProcess.tsx # 4-stage keyboard-accessible delivery workflow tabs
│   │   ├── ConceptCaseStudySection.tsx # Demonstration concept preview with interactive tabs
│   │   ├── WorkingPrinciples.tsx # Asymmetric principle cards and engineering values
│   │   ├── FaqAccordion.tsx     # Accessible accordion with keyboard controls and ARIA attributes
│   │   ├── FinalCtaSection.tsx  # Navy-to-blue conversion closing section with primary CTA
│   │   └── SeoHead.tsx          # Dynamic document title, meta description, and scroll manager
│   ├── pages/
│   │   ├── HomePage.tsx         # Complete flagship homepage
│   │   ├── AboutPage.tsx        # Company identity, philosophy pillars, working principles
│   │   ├── ServicesPage.tsx     # Services overview, deliverables, practical use cases
│   │   ├── ServiceDetailPage.tsx # Reusable dynamic template for `/services/:serviceId`
│   │   ├── CaseStudyPage.tsx    # OmniFlow Concept Showcase with interactive topology visualizer
│   │   ├── ContactPage.tsx      # Form with real-time validation, URL service preselection, & receipt
│   │   ├── PrivacyPage.tsx      # Privacy Policy, data handling, and concept demo terms
│   │   └── NotFoundPage.tsx     # 404 handler with return home CTA
│   ├── App.tsx                  # React Router setup with semantic `<main>` and layout wrapper
│   ├── index.css                # Master CSS design system with custom properties and responsive rules
│   └── main.tsx                 # React DOM mount point
```

---

## 4. Required Pages & Routes Implemented

1. **Home (`/`)**:
   - Distinctive Bento Hero matching the modern reference layout.
   - Interactive Performance Index gauge with switchable Resilience, Speed, and Security modes.
   - Capability overview bento cards linking to each service.
   - Interactive Service Discovery Wizard linking to `/contact?service=...`.
   - 4-Stage delivery process with keyboard-accessible tabs.
   - Concept demonstration case study preview.
   - 5 working principles in an asymmetric mosaic grid.
   - Accessible FAQ accordion.
   - Closing high-conversion CTA.

2. **About (`/about`)**:
   - Brand overview without fabricated team profiles or fake history.
   - 3 fundamental business philosophy pillars.
   - Full working principles and delivery framework.

3. **Services Hub (`/services`)**:
   - Comprehensive breakdown of all 4 service domains.
   - Practical use cases and tangible deliverables for each domain.
   - Links to dedicated dynamic service detail pages.

4. **Service Detail Dynamic Template (`/services/:serviceId`)**:
   - Reusable template supporting:
     - `/services/technology-consulting`
     - `/services/digital-experiences`
     - `/services/web-software-development`
     - `/services/technology-integration`
   - Detailed specifications, deliverables list, execution methodology, and pre-selected contact CTA.

5. **Showcase Concept Blueprint (`/case-study/omniflow-concept`)**:
   - Fictional demonstration project clearly labeled as a concept.
   - Operational challenge vs. proposed architectural solution.
   - Interactive system topology visualizer (Portal, Gateway, Message Bus, Database, Telemetry).
   - Intended business value and projected KPIs.

6. **Contact & Inquiry (`/contact`)**:
   - URL search parameter pre-selection (`?service=web-software-development`).
   - Client-side validation for Full Name, Business Email, Service Interest, Scope Textarea, and Consent.
   - Real-time error messages with alert icons.
   - Simulated network loading state with spinner.
   - Interactive success receipt card with submitted summary and form reset.

7. **Privacy Policy (`/privacy`)**:
   - Transparent concept demonstration disclaimer.
   - Explanations of data handling, cookies, and mutual NDA policies.

8. **404 Not Found (`*`)**:
   - Graceful fallback with direct navigation back to Home and Services.

---

## 5. Verification & Testing Results

- **TypeScript Compilation (`npx tsc --noEmit`)**: Passed with 0 errors. Strict type safety enforced across all components and data structures.
- **Linter (`npm run lint` / `oxlint`)**: Passed with 0 warnings and 0 errors across 29 files.
- **Production Build (`npm run build`)**: Vite bundled cleanly into `dist/` in 144ms with zero errors.
- **HTTP & Asset Resolution**: All 10 static assets and 12 routes tested via HTTP requests, returning `200 OK` with appropriate MIME types.
- **Accessibility & Interaction**:
  - Semantic HTML5 headings (`h1` through `h4`).
  - ARIA attributes (`aria-expanded`, `aria-controls`, `role="tab"`, `role="tabpanel"`, `aria-label`).
  - Visible focus indicators (`:focus-visible`).
  - `@media (prefers-reduced-motion: reduce)` support.
- **Responsive Layouts**:
  - Tested across CSS media queries: 320px, 360px, 390px, 430px, 768px, 1024px, 1440px, and 1920px.
  - Bento grid collapses gracefully from 12-column desktop layout to 2-column tablet and 1-column mobile views.
  - Zero horizontal overflow.

---

## 6. How to Update Brand Colors, Services, and Content

### Updating Colors
Edit CSS custom properties in `src/index.css`:
```css
:root {
  --color-navy: #0B1F3A;
  --color-blue: #2563EB;
  --color-bright-blue: #60A5FA;
  --color-light-blue: #DBEAFE;
  --color-bg-pale: #F5F9FF;
  /* ... */
}
```

### Adding or Modifying Services
Open `src/data/servicesData.ts` and add or edit any object conforming to the `ServiceItem` interface:
```typescript
{
  id: 'new-service-slug',
  title: 'Service Title',
  shortDesc: '...',
  tagline: '...',
  overview: '...',
  iconName: '...',
  accentColor: '#2563EB',
  deliverables: [...],
  useCases: [...],
  technologies: [...],
  approach: [...],
  image: '/images/...'
}
```
The navigation dropdown, services hub, discovery wizard, and dynamic detail template will update automatically.

---

## 7. Business Details Requiring Client Confirmation

Prior to deploying this website as NovaTech Solutions' official public website, the following details should be reviewed and confirmed with the client:
1. **Legal Company Information**: Official registered business entity name, jurisdiction, physical headquarters address, and official registration number.
2. **Contact Coordinates**: Dedicated corporate contact email address, support telephone numbers, and inquiry routing webhooks.
3. **Confirmed Client Testimonials / Logos**: Replace illustrative concept demonstrations with verified customer case studies, client logos, and quotes with explicit written consent.
4. **Service Scope Commitments**: Confirmation of active delivery capabilities, SLAs, support retainers, and warranty terms.
5. **Analytics & Compliance Setup**: Configuration of cookie consent banner for GDPR/CCPA compliance, domain registration, and production CRM/webhook endpoints for the contact form.
