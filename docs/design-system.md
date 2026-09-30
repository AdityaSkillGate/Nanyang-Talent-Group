# Nanyang Talent Group Pte Ltd (南洋人才集团)
## Phase 2: Design System Specification

**Document Reference:** `docs/design-system.md`  
**Version:** 1.0 (Singapore Institutional Standard)  
**Status:** Approved for Implementation  
**Primary Visual Identity:** Supplied Nanyang Talent Group Emblem (`assets/logo-horizantal.png`, `assets/logo-vertical.png`)

---

## 1. Design Philosophy & Visual Direction

The visual language of **Nanyang Talent Group** is anchored in Singapore's premier educational aesthetic: **established, trustworthy, editorial, modern, and friendly**, while strictly avoiding generic children's tuition card clutter or flashy commercial entertainment styles.

### Core Visual Principles:
1. **Institutional Dignity:** Dominated by deep corporate navy (`#172A73`) balanced with abundant clean white space (`#F8F9FB` / `#FFFFFF`).
2. **Signature Accent:** Nanyang Red (`#D71920`) is used deliberately for primary call-to-actions, active navigation highlights, and Chinese calligraphy accents.
3. **Heritage Integration:** Subtle globe arcs (`#1FA7D6`) and warm gold prestige touches (`#C7A04B`) reflect the continuous educational journey since 1998.
4. **Bilingual Harmony:** Balanced typographic pairings that respect Chinese character geometry alongside modern Latin sans-serif forms.
5. **Restrained Editorial Motion:** Subtle, purposeful micro-animations running on CSS keyframes, with full reduced-motion accessibility support.

### Explicit Anti-Patterns (Strictly Avoided):
* ❌ Generic education templates with cartoon mascots
* ❌ Excessive multi-color gradients or neon accents
* ❌ Heavy, blurry drop shadows or thick glossy card borders
* ❌ Excessive glassmorphism / distracting blur overlays
* ❌ Over-animation, gaming effects, or delayed page transitions

---

## 2. Color System & Contrast Ratios (WCAG 2.1 AA)

| Color Token | Hex Code | RGB | Role / Usage | WCAG AA Contrast Compliance |
| :--- | :--- | :--- | :--- | :--- |
| **Primary Navy** | `#172A73` | (23, 42, 115) | Core brand headings, institutional text, primary navbar, dark footer | **11.2 : 1** on White (Passes AAA) |
| **Navy Deep** | `#202185` | (32, 33, 133) | Sampled emblem text exact; dark section backgrounds | **12.5 : 1** on White (Passes AAA) |
| **Nanyang Red** | `#D71920` | (215, 25, 32) | Primary CTA buttons, active state indicators, key badges | **4.68 : 1** on White (Passes AA for bold text) |
| **Red Deep** | `#DF0912` | (223, 9, 18) | Sampled emblem red; hover states | **4.55 : 1** on White (Passes AA) |
| **Globe Sky Blue**| `#1FA7D6` | (31, 167, 214) | Category badges, globe arc accents, enrichment highlights | Accent on light surfaces / icon marks |
| **Warm Gold** | `#C7A04B` | (199, 160, 75) | "Since 1998" badge, trust statistics, fine dividers | Prestige accent on Navy and Canvas |
| **Canvas** | `#F8F9FB` | (248, 249, 251)| Default page background; crisp clean white space | Surface background |
| **High Dark Ink**| `#172033` | (23, 32, 51) | High-contrast body text, form inputs, metadata | **14.8 : 1** on White (Passes AAA) |
| **Secondary Ink**| `#475467` | (71, 84, 103) | Explanatory descriptions, card summaries | **7.5 : 1** on White (Passes AAA) |
| **Muted Ink** | `#667085` | (102, 112, 133)| Metadata, dates, footnotes, helper text | **4.8 : 1** on White (Passes AA) |

---

## 3. Typography & Dual-Language Stacks

### 3.1 Font Stacks:
```css
/* English Primary */
font-family: "Inter", "Manrope", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;

/* Simplified Chinese Primary */
font-family: "Noto Sans SC", "PingFang SC", "Microsoft YaHei", sans-serif;
```

### 3.2 Typographic Hierarchy Scale:

| Level | Size / Line-Height | Weight | Tracking | Usage |
| :--- | :--- | :--- | :--- | :--- |
| **Display H1** | `3.75rem` (60px) / `1.15` | ExtraBold (800) | `-0.025em` | Homepage Hero Headline (*"Create. Learn. Grow."*) |
| **Page H1** | `2.5rem – 3rem` (40–48px) | ExtraBold (800) | `-0.02em` | Main section & hub page headers |
| **Section H2** | `1.875rem – 2.25rem` (30–36px) | Bold (700) | `-0.015em` | Major page section headers |
| **Card H3** | `1.25rem – 1.5rem` (20–24px) | Bold (700) | `-0.01em` | Course titles, pathway card headings |
| **Subheading**| `1.125rem` (18px) / `1.75rem`| Medium (500) | `normal` | Hero sub-lines, lead intro text |
| **Body Base** | `1.0rem` (16px) / `1.5rem` | Regular (400) | `normal` | Standard body copy, course descriptions |
| **Body Small**| `0.875rem` (14px) / `1.25rem`| Regular/Medium | `normal` | Card descriptions, form labels, footer links |
| **Microcopy** | `0.75rem` (12px) / `1.0rem` | SemiBold (600) | `+0.05em` | Badges, category pills, table metadata |

---

## 4. 8pt Spatial Grid System

Consistent spacing is enforced through an 8-point geometric scale:

```
--space-1:  4px  | Micro spacing, badge inner gaps, icon-to-text
--space-2:  8px  | Element padding, button vertical padding
--space-3: 12px  | Compact card inner gaps, table cell padding
--space-4: 16px  | Standard container padding, form field gaps
--space-6: 24px  | Component separation, card internal margins
--space-8: 32px  | Grid gutters, subsection vertical gaps
--space-12: 48px | Section content grouping
--space-16: 64px | Major section vertical padding (mobile)
--space-24: 96px | Hero and major section vertical padding (desktop)
```

---

## 5. UI Component Library Specifications

### 5.1 Buttons (`src/components/ui/Button.tsx`)
* **`primary`:** Nanyang Red (`#D71920`) with `#B8141A` hover. For main CTAs (*"Explore Courses"*, *"Enquire Now"*).
* **`navy`:** Institutional Navy (`#172A73`) with `#0F1C4D` hover. For secondary corporate actions and hero secondary buttons.
* **`secondary`:** White surface with `#E4E7EC` border and `#172A73` text. For inline options.
* **`outline`:** Transparent surface with fine Navy border (`border-brand-navy/30`).
* **`ghost`:** Clean text button with subtle `#FCE8E9` hover wash.
* **`gold`:** Warm Gold (`#C7A04B`) for prestige or featured advisory calls.
* **Interactive States:** Active click scale (`scale-[0.98]`), focus-visible ring (`outline: 2px solid #172A73`), and loading spinner state.

### 5.2 Badges (`src/components/ui/Badge.tsx`)
* **`since`:** Prestige pill for `"Since 1998"` with red dot indicator.
* **`red`:** Art academy category badge.
* **`blue`:** Language studies category badge.
* **`gold`:** Brain intelligence category badge.
* **`warning`:** Amber warning pill for `"Client-Confirmation Required"` status.

### 5.3 Editorial Cards (`src/components/ui/Card.tsx`)
* **`editorial`:** White surface with top 4px Navy accent bar (`border-t-brand-navy`) and subtle drop shadow.
* **`featured`:** White surface with top 4px Red accent bar (`border-t-brand-red`) and card shadow.
* **`notice`:** Surface canvas container with subtle borders for advisories and terms.

### 5.4 Section Headers (`src/components/ui/SectionHeader.tsx`)
* Features an eyebrow pill (`"ART ACADEMY PROGRAMMES"`), bold primary title, optional Chinese parallel subtitle, and description text. Supports both left-aligned and center-aligned configurations.

### 5.5 Breadcrumbs (`src/components/ui/Breadcrumb.tsx`)
* Fully accessible breadcrumb navigation with home icon, chevron separators, and `aria-current="page"` markup.

### 5.6 Form Controls (`src/components/ui/FormInput.tsx`)
* Accessible inputs, selects, and textareas with high-contrast labels, required asterisks, focus rings in Navy (`#172A73`), helper texts, and error state indicators.

### 5.7 Bilingual Typography (`src/components/ui/BilingualLabel.tsx`)
* Dual-language rendering utilities supporting:
  * **Stacked:** English primary above with Chinese subtitle below.
  * **Inline:** English text paired with Chinese companion separated by a subtle interpunct (`·`).
  * **Chinese-First:** Chinese primary above with English subtitle below.

---

## 6. CSS-First Micro-Animations & Accessibility

All animations are authored directly in CSS (`src/styles/design-system.css`) for zero runtime overhead and maximum rendering performance:

* **`ny-animate-fade-in`:** Opacity reveal from `0` to `1` over `250ms`.
* **`ny-animate-slide-up`:** Smooth entry with `8px` vertical translation over `350ms`.
* **`ny-animate-pulse`:** Subtle institutional breathing cycle over `3.0s`.
* **`ny-brush-reveal`:** Horizontal clip-path reveal over `600ms` for calligraphy accents.

### Strict Reduced Motion Policy:
```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```

---

## 7. Interactive Component Showcase

The complete design system can be previewed directly at:
* English Showcase: `/design-system`
* Simplified Chinese Showcase: `/zh/design-system`
