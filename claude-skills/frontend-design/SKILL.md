# Frontend Design Skill

## Core Philosophy
Create distinctive, production-grade interfaces that feel polished and intentional. Avoid generic AI aesthetics - every design decision should have purpose. Balance innovation with usability.

## When Subtle 3D Enhances (Not Dominates)
Use Three.js when it supports the content, never when it competes:
- Ambient background effects that add depth without distraction
- Subtle interactive elements that reward exploration
- Smooth transitions that guide attention
- Performance-first: 60fps or degrade gracefully

**Technical approach:**
- Simple geometries (Box, Sphere, Torus)
- Minimal particle counts (50-200 max)
- Imperceptible rotations (0.001-0.003 rad/frame)
- Low opacity (20-40%) for background elements
- THREE.js r128 limitations: no CapsuleGeometry

## Design Principles
- **Content hierarchy first**: Clear visual priority for what matters
- **White space is a feature**: Generous spacing shows confidence
- **Performance = polish**: Smooth interactions at 60fps
- **Mobile-first thinking**: Responsive without compromise
- **Purposeful animation**: Every motion should communicate something

## Typography & Layout Patterns
- Strong hierarchy through size, weight, and spacing
- Body text: 1.6-1.8 line height for readability  
- Limit fonts: 2-3 typefaces maximum
- Generous margins, especially for text-heavy sections

## Animation Timing
- Micro-interactions: 0.2-0.3s
- Section transitions: 0.6-0.8s ease-out
- Scroll animations: trigger at 60-70% viewport
- Count-ups / reveals: 1.5-2s with easing
- Never auto-play unless essential

## What Good Design Avoids
- Over-formatting: excessive bold, bullets, visual noise
- Generic templates: avoid obviously "AI-generated" aesthetics  
- Competing elements: don't let decoration fight with content
- Arbitrary motion: animation without purpose
- Heavy dependencies: keep bundles reasonable

## Tech Stack Defaults
- React + TypeScript for type safety
- Tailwind for utility-first styling
- Framer Motion for smooth 2D animations
- Three.js r128 when 3D adds value
- Performance budget: <500kb initial load

## The Test
When you're done:
- Does it feel custom, not templated?
- Is the content easy to scan and navigate?
- Would you proudly share this publicly?
- Does it work smoothly on mobile?
- Did you make deliberate choices, not default ones?