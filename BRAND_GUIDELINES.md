# CLNL Brand Guidelines

## Brand Colors

The CLNL website uses a professional color palette that reflects trust, reliability, and excellence in logistics services.

### Primary Colors

#### Primary Blue
- **Hex:** `#0066CC`
- **RGB:** `rgb(0, 102, 204)`
- **Usage:** Primary CTAs, links, brand elements, headers
- **Tailwind:** `bg-primary`, `text-primary`, `border-primary`

#### Secondary Blue
- **Hex:** `#003D7A`
- **RGB:** `rgb(0, 61, 122)`
- **Usage:** Hover states, secondary elements, footer
- **Tailwind:** `bg-secondary`, `text-secondary`, `border-secondary`

#### Accent Yellow
- **Hex:** `#FFD700`
- **RGB:** `rgb(255, 215, 0)`
- **Usage:** Highlights, accents, secondary CTAs
- **Tailwind:** `bg-accent`, `text-accent`, `border-accent`

### Neutral Colors

#### Grayscale
- **White:** `#FFFFFF` - Backgrounds, text on dark
- **Gray 50:** `#F9FAFB` - Light backgrounds
- **Gray 100:** `#F3F4F6` - Subtle backgrounds
- **Gray 200:** `#E5E7EB` - Borders
- **Gray 300:** `#D1D5DB` - Disabled states
- **Gray 600:** `#4B5563` - Secondary text
- **Gray 700:** `#374151` - Body text
- **Gray 800:** `#1F2937` - Headings
- **Gray 900:** `#111827` - Primary text
- **Black:** `#000000` - Maximum contrast

## Typography

### Font Families

The website uses the Geist font family for a modern, clean appearance:

#### Primary Font: Geist Sans
- **Usage:** Body text, headings, UI elements
- **Weights:** 400 (Regular), 500 (Medium), 600 (Semibold), 700 (Bold)
- **Variable:** `--font-geist-sans`

#### Monospace Font: Geist Mono
- **Usage:** Code snippets, technical content (if needed)
- **Variable:** `--font-geist-mono`

### Type Scale

#### Headings
- **H1:** `text-4xl md:text-5xl lg:text-6xl` (36px → 48px → 60px)
  - Font weight: `font-bold` (700)
  - Usage: Hero section, main page title
  
- **H2:** `text-3xl md:text-4xl lg:text-5xl` (30px → 36px → 48px)
  - Font weight: `font-bold` (700)
  - Usage: Section headings
  
- **H3:** `text-2xl md:text-3xl` (24px → 30px)
  - Font weight: `font-bold` (700)
  - Usage: Subsection headings
  
- **H4:** `text-xl md:text-2xl` (20px → 24px)
  - Font weight: `font-semibold` (600)
  - Usage: Card titles, feature headings

#### Body Text
- **Large:** `text-lg md:text-xl` (18px → 20px)
  - Usage: Lead paragraphs, important content
  
- **Base:** `text-base` (16px)
  - Usage: Standard body text
  
- **Small:** `text-sm` (14px)
  - Usage: Captions, helper text, labels

### Line Height
- **Tight:** `leading-tight` - Headings
- **Normal:** `leading-normal` - Body text
- **Relaxed:** `leading-relaxed` - Long-form content

## Spacing System

The website uses Tailwind's default spacing scale (4px base unit):

### Common Spacing Values
- **xs:** `2` (8px) - Tight spacing
- **sm:** `4` (16px) - Small spacing
- **md:** `6` (24px) - Medium spacing
- **lg:** `8` (32px) - Large spacing
- **xl:** `12` (48px) - Extra large spacing
- **2xl:** `16` (64px) - Section spacing
- **3xl:** `20` (80px) - Large section spacing

### Section Padding
- **Mobile:** `py-16` (64px vertical)
- **Desktop:** `py-20` (80px vertical)

### Container Padding
- **Mobile:** `px-4` (16px horizontal)
- **Tablet:** `sm:px-6` (24px horizontal)
- **Desktop:** `lg:px-8` (32px horizontal)

## Component Styling

### Buttons

#### Primary Button
```tsx
className="bg-primary text-white px-6 py-3 rounded-md hover:bg-secondary transition-colors font-medium"
```

#### Secondary Button
```tsx
className="bg-accent text-gray-900 px-6 py-3 rounded-md hover:bg-yellow-500 transition-colors font-medium"
```

#### Outline Button
```tsx
className="border-2 border-white text-white px-6 py-3 rounded-md hover:bg-white hover:text-primary transition-colors font-medium"
```

### Cards

#### Standard Card
```tsx
className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
```

#### Feature Card
```tsx
className="bg-white rounded-lg p-8 shadow-md hover:shadow-xl transition-all hover:-translate-y-1"
```

### Forms

#### Input Fields
```tsx
className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
```

#### Labels
```tsx
className="block text-sm font-medium text-gray-700 mb-2"
```

## Logo Usage

### Logo Specifications
- **File:** `/public/logo.svg`
- **Format:** SVG (scalable)
- **Primary Color:** Primary Blue (#0066CC)
- **Accent:** Accent Yellow (#FFD700)

### Logo Sizes
- **Header:** `h-10` (40px height)
- **Footer:** `h-8` (32px height)
- **Mobile:** `h-8` (32px height)

### Logo Placement
- **Header:** Top left, always visible
- **Footer:** Center or left-aligned
- **Minimum Clear Space:** 8px on all sides

## Responsive Breakpoints

Following Tailwind's default breakpoints:

- **sm:** 640px - Small tablets
- **md:** 768px - Tablets
- **lg:** 1024px - Desktops
- **xl:** 1280px - Large desktops
- **2xl:** 1536px - Extra large screens

## Animation & Transitions

### Transition Durations
- **Fast:** `duration-150` (150ms) - Hover states
- **Normal:** `duration-300` (300ms) - Standard transitions
- **Slow:** `duration-500` (500ms) - Page transitions

### Easing Functions
- **Default:** `ease-out` - Most transitions
- **Smooth:** `ease-in-out` - Smooth animations

### Common Animations
- **Hover Scale:** `hover:scale-105 transition-transform`
- **Hover Shadow:** `hover:shadow-lg transition-shadow`
- **Fade In:** `opacity-0 animate-fade-in`

## Accessibility

### Color Contrast Ratios
- **Primary Blue on White:** 4.58:1 (AA compliant) ✓
- **Secondary Blue on White:** 8.59:1 (AAA compliant) ✓
- **Gray 700 on White:** 7.0:1 (AAA compliant) ✓

### Focus States
All interactive elements must have visible focus indicators:
```tsx
className="focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
```

### Touch Targets
Minimum touch target size: 44x44 pixels
```tsx
className="min-h-[44px] min-w-[44px]"
```

## Best Practices

### Do's ✓
- Use primary blue for main CTAs and brand elements
- Maintain consistent spacing throughout
- Use proper heading hierarchy (h1 → h2 → h3)
- Ensure sufficient color contrast
- Use responsive utilities for all breakpoints
- Add hover states to interactive elements
- Include focus indicators for accessibility

### Don'ts ✗
- Don't use colors outside the brand palette
- Don't skip heading levels
- Don't use text smaller than 14px for body content
- Don't forget mobile-first responsive design
- Don't use low-contrast color combinations
- Don't remove focus indicators

## Implementation Examples

### Section Header
```tsx
<div className="text-center mb-16">
  <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
    Section Title
  </h2>
  <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
  <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
    Section description text
  </p>
</div>
```

### Feature Grid
```tsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
  {/* Feature cards */}
</div>
```

### Container
```tsx
<div className="container mx-auto px-4 sm:px-6 lg:px-8">
  {/* Content */}
</div>
```

## Resources

- **Tailwind CSS Documentation:** https://tailwindcss.com/docs
- **Color Contrast Checker:** https://webaim.org/resources/contrastchecker/
- **Geist Font:** https://vercel.com/font

## Version History

- **v1.0** (2024) - Initial brand guidelines established
