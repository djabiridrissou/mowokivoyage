# MOWOKI Design Guidelines

## Design Approach
**Reference-Based:** Drawing inspiration from premium travel platforms (Airbnb, National Geographic Travel, Atlas Obscura) combined with African cultural aesthetics - warm earth tones, natural textures, and sophisticated photography. This avoids generic AI-looking designs while creating an elevated, aspirational travel experience.

**Key Principles:**
- Sophisticated storytelling through imagery
- Generous whitespace with purposeful content density
- Subtle animations that enhance without distracting
- Cultural authenticity balanced with modern professionalism

---

## Color Palette

### Light Mode
- **Primary Brand:** 25 45% 25% (deep forest green - represents African nature)
- **Secondary:** 30 60% 45% (warm terracotta - cultural warmth)
- **Accent:** 200 30% 50% (muted teal - minimal use for CTAs)
- **Background:** 40 20% 97% (warm off-white)
- **Text:** 25 30% 15% (rich charcoal)

### Dark Mode
- **Primary:** 25 35% 75% (soft sage)
- **Secondary:** 30 40% 65% (warm sand)
- **Accent:** 200 40% 60% (soft teal)
- **Background:** 25 15% 12% (deep charcoal with green undertone)
- **Text:** 40 10% 90% (warm light)

---

## Typography

**Font Families:**
- **Headings:** 'Playfair Display' (serif, elegant, sophisticated)
- **Body:** 'Inter' (sans-serif, highly readable)
- **Accent:** 'Montserrat' (for navigation, labels)

**Scale:**
- Hero Headline: text-5xl/text-6xl, font-light
- Section Headers: text-3xl/text-4xl, font-normal
- Subheadings: text-xl/text-2xl, font-medium
- Body: text-base/text-lg, leading-relaxed
- Captions: text-sm, uppercase tracking-wider

---

## Layout System

**Spacing Primitives:** Use Tailwind units of 4, 8, 12, 16, 20, 24, 32 (p-4, gap-8, py-20, etc.)

**Container Strategy:**
- Full-width sections with inner max-w-7xl mx-auto px-6/px-8
- Content-heavy sections: max-w-4xl
- Text content: max-w-prose

**Vertical Rhythm:**
- Section padding: py-16 (mobile), py-24/py-32 (desktop)
- Component spacing: gap-12 to gap-20

---

## Page Structure

### Page d'Accueil (Home)

**1. Hero Section (70vh)**
- Full-width background image showcasing African landscape (savanna sunset, vibrant market, or coastal scene)
- Centered overlay with dark gradient (from transparent to rgba black 40%)
- Main headline: "MOWOKI - Votre Porte vers l'Afrique" in Playfair Display
- Subheading: "Découvrez l'Afrique Authentique avec nos Experts"
- Primary CTA button with blur background
- Theme toggle (sun/moon icon) positioned top-right

**2. Introduction Section**
- Two-column layout (60/40 split on desktop)
- Left: Compelling text about MOWOKI mission
- Right: Circular framed image of African experience
- Background: subtle texture or pattern

**3. Destinations Showcase**
- Masonry/grid layout: 3 columns desktop, 2 tablet, 1 mobile
- Each destination card: Large image, overlay with country name, brief description, "Découvrir" link
- Featured destinations: Sénégal, Kenya, Maroc, Tanzanie, Afrique du Sud, Madagascar (6-8 total)
- Hover effect: image slightly scales, overlay darkens

**4. Nos Services**
- 3-column grid with icons
- Tours Personnalisés, Guides Experts, Expériences Authentiques
- Each card: Icon, title, short description

**5. Témoignages**
- 2-column grid with quote cards
- Client photo (circular), quote text, name, destination visited
- Subtle border, soft shadow

**6. CTA Final**
- Full-width section with background image (different from hero)
- "Commencez Votre Aventure Africaine"
- Contact button

### Page À Propos

**1. Hero Section (50vh)**
- Background image: Team photo or cultural scene
- Title: "Notre Histoire"

**2. Mission & Vision**
- Single column, centered, max-w-3xl
- Rich typography, generous line-height

**3. Équipe**
- 3-4 column grid with team member cards
- Photo, name, role, brief bio

**4. Nos Valeurs**
- Icon grid: Authenticité, Expertise, Durabilité, Passion

### Page Contact

**1. Split Layout**
- Left (40%): Contact info, hours, social links, mini-map placeholder
- Right (60%): Contact form
- Form fields: Nom, Email, Téléphone, Destination d'intérêt (dropdown), Message
- Submit button: "Envoyer Votre Demande"

**2. Additional Info**
- "Temps de réponse: Sous 24h"
- Office hours, WhatsApp number

---

## Component Library

**Navigation:**
- Sticky header, blur background when scrolled
- Logo left, navigation center (Accueil, À Propos, Contact), theme toggle right
- Mobile: Hamburger menu with slide-in panel

**Buttons:**
- Primary: Filled with primary color, rounded-lg, px-8 py-3
- Secondary: Outline with blur background over images
- Hover: Subtle transform and color shift

**Cards:**
- Rounded-xl, overflow-hidden
- Subtle shadow: shadow-lg
- Hover: shadow-xl transition

**Forms:**
- Input fields: border, rounded-lg, px-4 py-3
- Dark mode: maintain contrast with proper background colors
- Focus states: ring with accent color

**Footer:**
- Three-column grid: About MOWOKI, Quick Links, Contact
- Social media icons
- Newsletter signup
- Copyright text

---

## Images

**Required Images:**
1. **Hero Image:** Stunning African landscape (savanna, wildlife, or vibrant market) - 1920x1080
2. **Destination Cards:** High-quality photos for each country (8 images) - 800x600
3. **About Page Hero:** Team/cultural scene - 1920x800
4. **Team Photos:** 3-4 professional headshots - 400x400
5. **Introduction Section:** Authentic travel experience photo - 600x600
6. **Final CTA Background:** Different African landscape - 1920x600
7. **Testimonial Photos:** Client photos (circular crop) - 200x200

**Image Treatment:**
- Subtle vignette on hero images
- Maintain natural color grading (avoid over-saturation)
- Consistent aspect ratios within sections

---

## Animations

**Minimal & Purposeful:**
- Fade-in on scroll for sections (subtle, once)
- Hover transforms on cards: scale(1.02), 300ms ease
- Theme toggle: smooth color transition (500ms)
- Navigation: backdrop-blur appears on scroll
- NO parallax effects, NO continuous animations

---

## Accessibility & Responsiveness

- WCAG AA contrast ratios in both modes
- All form inputs maintain contrast in dark mode
- Responsive breakpoints: sm(640px), md(768px), lg(1024px), xl(1280px)
- Touch-friendly: minimum 44px tap targets on mobile
- Alt text for all images (descriptive, in French)

---

**French Language Considerations:**
- Proper typography spacing for accented characters
- Use «guillemets» for quotes where culturally appropriate
- All UI text in French with proper accents (É, è, à, etc.)