# UO AISA Annual Report 2024-2025

A premium, interactive digital annual report for the University of Oregon AI Student Association (AISA).

## Overview

This is a single-page React application showcasing AISA's incredible growth and achievements during the 2024-2025 academic year—from 10 members to 250+, organizing Oregon's largest hackathon, and becoming the first university in the nation to deploy student-led AI teaching assistants.

## Features

- **Premium Design**: UO colors (green #154733 and gold #FEE123) with polished, professional aesthetics
- **Smooth Animations**: 60fps performance with Framer Motion for seamless scroll experiences
- **Subtle 3D Elements**: Three.js background effects that add depth without distraction
- **Mobile Responsive**: Fully optimized for all screen sizes
- **Comprehensive Content**: 10 key sections covering our year's impact

## Tech Stack

- **React** + **TypeScript** for type-safe development
- **Vite** for blazing-fast build tooling
- **Tailwind CSS** for utility-first styling
- **Framer Motion** for smooth 2D animations
- **Three.js** for subtle 3D background effects

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

The site will be available at `http://localhost:5173`

### Building for Production

```bash
# Create production build
npm run build

# Preview production build
npm run preview
```

## Sections

1. **Hero** - Bold opening with growth statistics
2. **Letter from the President** - Maggie Byrne's vision and message
3. **Stats Snapshot** - Animated counters showcasing our impact
4. **Learn & Land** - Weekly breakdown of speakers and workshops
5. **Alumni Success** - Annika's journey to Amazon AGI Labs
6. **QuackHacks** - Oregon's largest hackathon in history
7. **SF Site Tour** - Visiting Google, Anthropic, Airbnb, and more
8. **Featured Projects** - Student-led builds making real impact
9. **2026 Goals** - Our vision for scaling and expansion
10. **Thank You** - Contact and involvement opportunities

## Design Philosophy

Following our frontend design skill principles:
- Content hierarchy first with clear visual priority
- Generous white space showing confidence
- 60fps performance with optimized animations
- Purposeful motion that communicates
- Professional and credible first, innovative second

## Performance

- Initial load: <500kb
- Smooth 60fps animations
- Optimized for mobile and desktop
- Lazy loading for images and components

## Deployment

This site is ready to deploy to:
- **Vercel**: `npm run build` → Deploy `dist` folder
- **Netlify**: Connect repository and deploy
- **GitHub Pages**: Build and deploy to `gh-pages` branch
- **Any static hosting**: Build and upload `dist` folder

## Customization

### Colors

Edit `tailwind.config.js` to customize UO brand colors:

```js
colors: {
  'uo-green': '#154733',
  'uo-gold': '#FEE123',
}
```

### Fonts

Fonts are loaded from Google Fonts in `src/index.css`:
- **Inter** for body text
- **Poppins** for headings

### Content

All content is in the respective component files in `src/components/`. Simply edit the text, stats, or structure as needed.

## Credits

Built with Claude Code for the University of Oregon AI Student Association.

**Design & Development**: Following professional frontend design principles with emphasis on performance, accessibility, and polish.

## License

© 2024-2025 AI Student Association at University of Oregon

---

**Live Preview**: http://localhost:5173
**Contact**: aisa@uoregon.edu
**LinkedIn**: https://www.linkedin.com/company/uo-aisa
