# Amplified Tech Style Guide

## Design Philosophy

**Bold, modern SaaS aesthetic** with a deep navy foundation, vibrant purple accents, and high-impact typography. The design emphasizes clarity, professionalism, and energy — perfect for SMEs looking to amplify their digital capabilities.

---

## Color Palette

### Primary Colors (HSL)

| Token | HSL Value | Usage |
|-------|-----------|-------|
| `--background` | `225 71% 8%` | Main background (deep navy) |
| `--foreground` | `0 0% 98%` | Primary text color |
| `--primary` | `262 83% 58%` | Brand purple, CTAs, accents |
| `--primary-foreground` | `0 0% 100%` | Text on primary surfaces |

### Secondary Colors

| Token | HSL Value | Usage |
|-------|-----------|-------|
| `--secondary` | `225 50% 20%` | Secondary surfaces |
| `--secondary-foreground` | `0 0% 98%` | Text on secondary surfaces |
| `--accent` | `38 92% 50%` | Amber accents, highlights |
| `--accent-foreground` | `225 71% 8%` | Text on accent surfaces |

### Surface Colors

| Token | HSL Value | Usage |
|-------|-----------|-------|
| `--card` | `225 50% 15%` | Card backgrounds |
| `--card-foreground` | `0 0% 98%` | Text on cards |
| `--muted` | `225 50% 20%` | Muted backgrounds |
| `--muted-foreground` | `220 9% 66%` | Muted text, subtitles |

### Extended Navy Scale

| Token | HSL Value | Usage |
|-------|-----------|-------|
| `--navy` | `225 71% 8%` | Darkest navy |
| `--navy-light` | `225 50% 15%` | Medium navy |
| `--navy-lighter` | `225 50% 20%` | Light navy |

### Extended Purple Scale

| Token | HSL Value | Usage |
|-------|-----------|-------|
| `--purple` | `262 83% 58%` | Main purple |
| `--purple-light` | `262 83% 68%` | Light purple |
| `--purple-dark` | `262 83% 48%` | Dark purple |

### Utility Colors

| Token | HSL Value | Usage |
|-------|-----------|-------|
| `--border` | `225 50% 20%` | Borders, dividers |
| `--input` | `225 50% 20%` | Input borders |
| `--ring` | `262 83% 58%` | Focus rings |
| `--destructive` | `0 62% 50%` | Error states |
| `--destructive-foreground` | `0 0% 98%` | Text on destructive |

---

## Typography

### Font Family
- **Primary**: `Outfit` (sans-serif)
- **Fallback**: system sans-serif

### Font Weights
- Regular: 400
- Medium: 500
- Semibold: 600
- Bold: 700

### Type Scale

```tsx
// Headlines
h1: text-4xl md:text-6xl lg:text-7xl font-bold
h2: text-3xl md:text-5xl font-bold
h3: text-2xl font-bold

// Body
Large: text-lg md:text-xl
Base: text-base
Small: text-sm
```

### Text Colors
- Primary: `text-foreground`
- Muted: `text-foreground/70` or `text-foreground/60`
- Accent: `text-primary`
- On colored backgrounds: `text-white` or `text-foreground`

---

## Gradients

### Hero Gradient
```css
--gradient-hero: linear-gradient(135deg, 
  hsl(262 83% 58%) 0%, 
  hsl(262 83% 48%) 50%, 
  hsl(225 71% 20%) 100%
);
```

### Subtle Background Gradient
```css
--gradient-subtle: linear-gradient(180deg, 
  hsl(225 71% 8%) 0%, 
  hsl(225 50% 12%) 100%
);
```

### Gradient Text Utility
```css
.gradient-text {
  @apply bg-gradient-to-r from-purple via-purple-light to-primary bg-clip-text text-transparent;
}
```

### Gradient Border Utility
```css
.gradient-border {
  @apply relative before:absolute before:inset-0 before:rounded-[inherit] 
         before:p-[1px] before:bg-gradient-to-r before:from-purple 
         before:to-purple-dark before:-z-10;
}
```

---

## Shadows & Effects

### Shadow Tokens
```css
--shadow-glow: 0 0 60px hsl(var(--purple) / 0.4);
--shadow-card: 0 4px 24px hsl(0 0% 0% / 0.3);
```

### Usage
```tsx
// Glow effect
className="shadow-[var(--shadow-glow)]"

// Card shadow
className="shadow-[var(--shadow-card)]"

// Hover shadow
className="hover:shadow-xl hover:shadow-primary/10"
```

---

## Spacing & Layout

### Border Radius
- `--radius`: `1rem` (16px)
- `lg`: `var(--radius)`
- `md`: `calc(var(--radius) - 2px)`
- `sm`: `calc(var(--radius) - 4px)`

### Container
- Max width: `1400px` (2xl breakpoint)
- Padding: `2rem` (32px)
- Centered with `mx-auto`

### Common Spacing
- Section padding: `py-20 md:py-32`
- Component gap: `gap-4` to `gap-8`
- Text spacing: `space-y-4` to `space-y-8`

---

## Animations

### Keyframes

#### Fade In
```css
fade-in: {
  "0%": { opacity: "0", transform: "translateY(20px)" },
  "100%": { opacity: "1", transform: "translateY(0)" }
}
```

#### Fade In Up
```css
fade-in-up: {
  "0%": { opacity: "0", transform: "translateY(40px)" },
  "100%": { opacity: "1", transform: "translateY(0)" }
}
```

#### Scale In
```css
scale-in: {
  "0%": { opacity: "0", transform: "scale(0.95)" },
  "100%": { opacity: "1", transform: "scale(1)" }
}
```

#### Glow
```css
glow: {
  "0%, 100%": { filter: "drop-shadow(0 0 20px hsl(var(--purple) / 0.5))" },
  "50%": { filter: "drop-shadow(0 0 40px hsl(var(--purple) / 0.8))" }
}
```

### Animation Classes
```tsx
animate-fade-in       // 0.6s ease-out
animate-fade-in-up    // 0.8s ease-out
animate-scale-in      // 0.5s ease-out
animate-glow          // 3s ease-in-out infinite
```

---

## Transitions

### Smooth Transition
```css
--transition-smooth: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
```

### Bounce Transition
```css
--transition-bounce: all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
```

### Common Usage
```tsx
// Hover effects
className="transition-all duration-300 hover:scale-110"

// Transform transitions
className="transition-transform group-hover:translate-x-1"
```

---

## Component Patterns

### Gradient Orbs (Background Effects)
```tsx
<div className="absolute top-20 -right-20 w-96 h-96 bg-purple/30 rounded-full blur-3xl animate-glow" />
<div className="absolute -bottom-20 -left-20 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
```

### Cards
```tsx
<div className="p-8 rounded-3xl bg-card/80 backdrop-blur border border-border 
                hover:border-primary/50 transition-all duration-300 
                hover:shadow-xl hover:shadow-primary/10">
  {/* Content */}
</div>
```

### Buttons (Primary CTA)
```tsx
<Button 
  size="lg" 
  className="group px-8 py-6 text-base font-semibold rounded-full"
>
  Call to Action
  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
</Button>
```

### Buttons (Secondary Outline)
```tsx
<Button
  size="lg"
  variant="outline"
  className="px-8 py-6 text-base font-semibold rounded-full border-2"
>
  Secondary Action
</Button>
```

### Badge/Pill
```tsx
<div className="inline-flex items-center gap-2 px-4 py-2 rounded-full 
                bg-primary/20 border border-primary/40 text-primary-light 
                text-sm font-medium">
  <Sparkles className="w-4 h-4" />
  <span>Label</span>
</div>
```

### Icon Container
```tsx
<div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-purple 
                flex items-center justify-center group-hover:scale-110 
                transition-transform">
  <Icon className="w-8 h-8 text-white" />
</div>
```

---

## Responsive Design

### Breakpoints (Tailwind defaults)
- `sm`: 640px
- `md`: 768px
- `lg`: 1024px
- `xl`: 1280px
- `2xl`: 1400px (customized)

### Mobile-First Approach
```tsx
// Start with mobile, scale up
className="text-4xl md:text-6xl lg:text-7xl"
className="py-20 md:py-32"
className="flex-col sm:flex-row"
```

---

## Accessibility

### Focus States
- All interactive elements use `ring-2 ring-primary` on focus
- Ring offset for better visibility: `ring-offset-2 ring-offset-background`

### Color Contrast
- Foreground on background: WCAG AAA compliant
- Primary text uses 98% lightness for maximum readability
- Muted text at 66% lightness for hierarchy while maintaining AA compliance

### Motion
- All animations respect `prefers-reduced-motion`
- Transitions are smooth but not excessive (300-800ms max)

---

## Usage Examples

### Section Layout
```tsx
<section className="py-20 md:py-32 bg-gradient-to-b from-navy to-navy-light">
  <div className="container px-4 md:px-6">
    <div className="max-w-6xl mx-auto space-y-16">
      {/* Content */}
    </div>
  </div>
</section>
```

### Centered Content Block
```tsx
<div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in-up">
  <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
    Headline
  </h2>
  <p className="text-xl text-foreground/60 max-w-2xl mx-auto">
    Supporting text
  </p>
</div>
```

---

## Brand Voice

- **Tone**: Confident, direct, no-nonsense
- **Style**: Bold headlines, clear value props, minimal jargon
- **Focus**: Results and outcomes over features and tech specs
- **Audience**: SME decision-makers who want practical solutions fast