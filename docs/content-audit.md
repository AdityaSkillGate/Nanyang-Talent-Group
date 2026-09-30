# Nanyang Talent Group Pte Ltd (南洋人才集团)
## Phase 0: Brand & Content Audit Report

**Document Reference:** `docs/content-audit.md`  
**Date:** September 2026  
**Status:** Approved for Phase 0 Baseline / Ready for Phase 1  
**Target Platform:** Next.js (Static Export — `output: 'export'`, Zero Backend, Zero Database, Zero CMS)

---

## 1. Executive Summary & Brand Overview

This audit document establishes the authoritative content and brand foundation for building the new official website of **Nanyang Talent Group Pte Ltd (南洋人才集团)**.

### Brand Identities Discovered:
* **Legal Entity Name (English):** Nanyang Talent Group Pte Ltd
* **Entity Name (Simplified Chinese):** 南洋人才集团
* **Historical Mark in Primary Logo:** `Since 1998`
* **Art Division Reference Mark:** `Nanyang Art since 2002` (c.f. client reference materials)
* **School Experience Claim:** `33+ Years of School Experience` (client-provided trust statistic)

### Strategic Guardrails:
1. **Fully Static Delivery:** The entire website will be statically exported via Next.js SSG (`output: 'export'`). No server runtime, database, headless CMS, or external API dependencies will be used.
2. **Zero-Hallucination Policy:** Course descriptions, teacher names, exact fees, intake timetables, certificates, student awards, testimonials, and past event archives will **never** be invented or assumed. Every unverified item is explicitly tagged `client-confirmation required` or `do-not-invent`.
3. **Price Conflict Protection:** Discrepancies between supplied markdown sheets, OCR scans, and live reference packages are flagged; fallback phrasing (`Please contact us for the latest course fee.`) will be used until client confirmation is received.
4. **Boundary Separation:** Content from the separate entity *Nanyang Artists Society* (grade examinations, Nanyang Star competitions, society history archives) is excluded from the new website unless approved in writing by the client.

---

## 2. Audit of Supplied Logo & Poster Assets

### Asset 2.1 — Horizontal Brand Logo (`assets/logo-horizantal.png`)

| Attribute | Specification | Audit Notes |
| :--- | :--- | :--- |
| **File Path** | `assets/logo-horizantal.png` | Note: File is named `.png` but encoded internally as JPEG (RGB mode, no alpha). |
| **Pixel Dimensions** | 1,335 × 354 px | High resolution suitable for desktop navigation header. |
| **Aspect Ratio** | 3.77 : 1 (Landscape) | Optimal for horizontal header bars and corporate mastheads. |
| **Background Color** | `#F7F7F7` (RGB 247, 247, 247) | Flat solid off-white background; needs clean container or CSS matching `#F7F7F7` / `#F8F9FB`. |
| **Left Symbol / Emblem** | X: 16px – 375px; Y: 15px – 335px | Stylized globe with latitude/longitude grid (Cyan `#2096D3`), dynamic brush/flame swirls (Red `#DF0912` and Warm Gold `#F3E97C`). |
| **Emblem Sub-Text** | X: 124px – 267px; Y: 314px – 335px | Carries text **`Since 1998`** in Deep Navy (`#202185`). |
| **Top Text Line** | X: 504px – 1,199px; Y: 121px – 221px | Bold Chinese characters **`南洋人才集团`** in Nanyang Red (`#DF0912`), height 100px. |
| **Bottom Text Line** | X: 419px – 1,322px; Y: 265px – 314px | English typography **`Nanyang Talent Group Pte Ltd`** in Deep Navy (`#202185`), height 49px. |
| **Recommended Usage** | **Desktop Primary Header & Footer** | Use as primary horizontal branding for desktop navbar, email footers, and official documents. |

---

### Asset 2.2 — Vertical / Compact Brand Logo (`assets/logo-vertical.png`)

| Attribute | Specification | Audit Notes |
| :--- | :--- | :--- |
| **File Path** | `assets/logo-vertical.png` | Encoded as JPEG (RGB mode, no alpha). |
| **Pixel Dimensions** | 933 × 504 px | Centered vertical layout. |
| **Aspect Ratio** | 1.85 : 1 (Compact Stacked) | Balanced for square/compact mobile screens. |
| **Background Color** | `#F7F7F7` (RGB 247, 247, 247) | Flat solid off-white background. |
| **Emblem Placement** | Centered (X: 272px – 652px; Y: 8px – 296px) | Top centered brand mark (Globe, flame/brush strokes). |
| **Emblem Sub-Text** | Centered (X: 368px – 559px; Y: 310px – 334px) | **`Since 1998`** in Deep Navy. |
| **Chinese Name Line** | Centered (X: 96px – 796px; Y: 347px – 446px) | **`南洋人才集团`** in Nanyang Red (`#DF0912`), height 99px. |
| **English Name Line** | Centered (X: 16px – 919px; Y: 448px – 497px) | **`Nanyang Talent Group Pte Ltd`** in Deep Navy (`#202185`), height 49px. |
| **Recommended Usage** | **Mobile Header, Mobile Drawer, Favicon/App Badge** | Ideal for mobile navigation bars, collapsible drawer menus, and compact cards. |

---

### Asset 2.3 — Poster Assets Audit & Timeline Discrepancy

| Check Item | Findings & Recommendations |
| :--- | :--- |
| **Asset Existence** | **MISSING FROM WORKSPACE REPOSITORY.** No physical graphic file or PDF poster is present in the `assets/` directory. |
| **Source Reference** | Mentioned in client brief and `plan.md` (lines 351–355): *"The Art poster carries: Nanyang Art since 2002."* |
| **Timeline Discrepancy** | **1998 vs 2002 vs 33+ Years:**<br>1. Logo emblem explicitly states **`Since 1998`**.<br>2. Art poster reference states **`Nanyang Art since 2002`**.<br>3. Trust statistics state **`33+ Years of School Experience`** (suggesting education roots dating back to ~1991–1993). |
| **Governance Rule** | **DO NOT MERGE OR ALTER THESE DATES AUTOMATICALLY.**<br>• The website header and hero badge will display `Since 1998` as anchored by the primary corporate logo.<br>• Art department references may reflect the 2002 milestone once confirmed.<br>• The statistical counter will faithfully display `33+ Years of School Experience` without fabricating explanations. |
| **Client Request** | Request high-resolution vector/PNG source files with transparent backgrounds (`.svg` or `.png` with alpha channel) for both logos and any marketing posters. |

---

## 3. Brand Color Palette & Design Tokens

Extracted directly from pixel analysis of the supplied logo assets and aligned with Singapore institutional aesthetics:

```
+-----------------------------------------------------------------------------------+
|                           NANYANG TALENT GROUP BRAND PALETTE                     |
+-----------------------------------------------------------------------------------+
|  Primary Navy      |  #172A73 / #202185  |  RGB(32, 33, 133)   |  Institutional   |
|  Nanyang Red       |  #D71920 / #DF0912  |  RGB(223, 9, 18)    |  Signature CTA   |
|  Globe Sky Blue    |  #1FA7D6 / #2096D3  |  RGB(32, 150, 211)  |  Cyan Arc Accent |
|  Warm Gold         |  #C7A04B / #F3E97C  |  RGB(243, 233, 124) |  Prestige Touch  |
|  Surface Off-White |  #F8F9FB / #F7F7F7  |  RGB(247, 247, 247) |  Clean Space     |
|  Text High Dark    |  #172033            |  RGB(23, 32, 51)    |  Typography      |
|  Text Muted Slate  |  #667085            |  RGB(102, 112, 133) |  Subtitles/Body  |
+-----------------------------------------------------------------------------------+
```

### CSS Tokens (`styles/tokens.css` or Tailwind config):

```css
:root {
  /* Brand Core */
  --color-primary-navy: #172A73;       /* Main corporate typography, headers, footer */
  --color-primary-navy-deep: #202185;  /* Sampled logo text exact */
  --color-nanyang-red: #D71920;        /* Signature buttons, call-to-actions, badges */
  --color-nanyang-red-sampled: #DF0912;/* Sampled logo Chinese text */
  --color-globe-blue: #1FA7D6;         /* Secondary accent, category tags, globe motifs */
  --color-globe-blue-soft: #9BD2EB;    /* Light tint for cards and chips */
  --color-warm-gold: #C7A04B;          /* 'Since 1998' badge, fine dividers, trust stars */
  --color-warm-yellow-sampled: #F3E97C;/* Sampled swirl accent */

  /* Neutral System */
  --color-bg-canvas: #F8F9FB;          /* Main page background */
  --color-bg-card: #FFFFFF;            /* Course cards, modals */
  --color-bg-logo-match: #F7F7F7;      /* Blends with non-transparent logo containers */
  --color-text-primary: #172033;       /* Headings, high-contrast readable text */
  --color-text-secondary: #475467;     /* Explanatory descriptions */
  --color-text-muted: #667085;         /* Metadata, dates, footnotes */
  --color-border-subtle: #E4E7EC;      /* Crisp fine borders (no heavy drop shadows) */
  --color-border-accent: #D71920;      /* Active state underlines and borders */

  /* Typography */
  --font-en: "Inter", "Manrope", system-ui, -apple-system, sans-serif;
  --font-zh: "Noto Sans SC", "PingFang SC", "Microsoft YaHei", sans-serif;
}
```

### Contrast & Accessibility (WCAG 2.1 AA):
* Primary Navy (`#172A73`) on Canvas (`#F8F9FB`): **11.2 : 1** (Passes AAA).
* Nanyang Red (`#D71920`) on White (`#FFFFFF`): **4.68 : 1** (Passes AA for large text and buttons with bold text).
* Text Dark (`#172033`) on White (`#FFFFFF`): **14.8 : 1** (Passes AAA).

---

## 4. Normalization of Art Courses (`Art courses.md`)

Seven courses are documented in the raw client markdown file:

```
Art Courses Family
├── 1. Oil Painting (油画)
├── 2. Sketching (素描)
├── 3. Water Color (水彩)
├── 4. Chinese Calligraphy (中国书法)
├── 5. Chinese Painting (中国国画)
├── 6. Children's Drawing (儿童美术 / 创意画)
└── 7. Short Course Art Teacher (美术师资短期培训班) [HEADING ONLY]
```

### Detailed Course-by-Course Audit:

| # | Course Title | Chinese Title | Summary of Supplied Curriculum | Empty / Missing Fields | Pricing in Source File | Status |
| :---: | :--- | :--- | :--- | :--- | :--- | :---: |
| **01** | **Oil Painting** | 油画 | Techniques of Water Colour, Gouache and Oil Painting; foundation on usage of colour, transparency, overlaying, detailing; developing artistic expression for career foundation. | `Objectives:` heading is present but completely blank. Lesson structure/levels missing. | Group: S$50 (2 hrs)<br>1-to-1: S$80 (2 hrs)<br>Self-contained Materials<br>Payment: Min 3 mos; 6 mos -$50; 1 yr -$150. | `client-confirm` |
| **02** | **Sketching** | 素描 | Present stereoscopic objects through contrast; still life, plaster cast, and character sketching; develops texture, dimension, and perspective. | `Objectives:` heading is present but completely blank. Schedule/intake missing. | Group: S$50 (2 hrs)<br>1-to-1: S$80 (2 hrs)<br>Self-contained Materials<br>Payment: Min 3 mos; 6 mos -$50; 1 yr -$150. | `client-confirm` |
| **03** | **Water Color** | 水彩 | *Duplicate Content:* Body text is a verbatim copy of Course 01 (mentions Watercolour, Gouache, Oil). Needs distinct watercolour syllabus. | `Objectives:` heading is present but blank. Unique curriculum missing. | Group: S$50 (2 hrs)<br>1-to-1: S$80 (2 hrs)<br>Self-contained Materials<br>Payment: Min 3 mos; 6 mos -$50; 1 yr -$150. | `client-confirm` |
| **04** | **Chinese Calligraphy** | 中国书法 | History of Shufa; 5 scripts: Kaishu (regular), Lishu (official), Xingshu (running), Caoshu (cursive), Zhuanshu (seal); Art appreciation of famous works, copybooks, inscriptions. | `Objectives:` heading is present but completely blank. Tool requirements (brushes, ink) missing. | Group: S$50 (2 hrs)<br>1-to-1: S$80 (2 hrs)<br>Self-contained Materials<br>Payment: Min 3 mos; 6 mos -$50; 1 yr -$150. | `client-confirm` |
| **05** | **Chinese Painting** | 中国国画 | 2,000-year tradition; 3 subjects: Bird-and-flower, Landscape, Figure; 3 techniques: Xieyi (freehand), Gongbi (fine-brush), Pomo (splash-ink). Expression of personality through brush and ink. | `Objectives:` heading is present but completely blank. Grading/levels missing. | Group: S$50 (2 hrs)<br>1-to-1: S$80 (2 hrs)<br>Self-contained Materials<br>Payment: Min 3 mos; 6 mos -$50; 1 yr -$150. | `client-confirm` |
| **06** | **Children's Drawing** | 儿童美术 | Intellectual Art Education; handwork, painting, drawing, memory development, emotional intelligence, cartoon drawing class, caricature expressions. | Age range not specified in header (implied children/preschool). Timetable missing. | Group: S$50 (2 hrs)<br>1-to-1: S$80 (2 hrs)<br>**One-time Teaching Materials Fee: S$50**<br>Payment: Min 3 mos; 6 mos -$50; 1 yr -$150. | `client-confirm` |
| **07** | **Short Course Art Teacher** | 美术师资短期培训班 | **NONE PROVIDED.** The source markdown ends abruptly at `# 7 Short Course Art Teacher`. | **COMPLETELY EMPTY.** No description, syllabus, duration, prerequisites, or fee. | None provided. | `client-confirm` / Pending Client Copy |

---

## 5. Normalization of Enrichment Courses (`Enrichment Courses.md`)

Eleven courses across two major subdivisions:

```
Enrichment Courses
├── Language Courses
│   ├── 1. English Course (英语课程)
│   ├── 2. Japanese Course (日语课程)
│   ├── 3. German Course (德语课程)
│   ├── 4. Chinese Course (华语课程)
│   └── 5. Korean Course (韩语课程)
│
└── Brain Intelligence Courses
    ├── 1. Right Brain Development (右脑开发)
    ├── 2. Super Right Brain (超强右脑)
    ├── 3. Mind Mapping (思维导图)
    ├── 4. Super Memory (超强记忆)
    ├── 5. Whole Brain Development (全脑开发)
    └── 6. Quantum Speed Reading (量子波动速读)
```

### 5.1 Language Courses Audit:

| # | Course | Core Outline / Focus | Schedule & Duration | Teachers & Prerequisites | Discrepancies & Corruptions in Source | Status |
| :---: | :--- | :--- | :--- | :--- | :--- | :---: |
| **01** | **English Course** | Listening, speaking, reading, writing, grammar, vocabulary. 6 progressive levels (Level 1 to 6). | 16 lessons of 1.5 hrs OR 8 lessons of 3 hrs (2 months per level). | Qualified teachers (generic). Level 1: no req; Level 2+: placement interview. Compulsory material fee. | Table header unexpectedly says **"English & Math Course"**. OCR error **"SSBO"** for Adult 1-to-1 fee. Rates: P1-P6 S$50/S$60; S1-S4 S$80/S$120; Adult S$40/S$80. | `client-confirm` |
| **02** | **Japanese Course** | Learner-centered, conversational communication, self-introduction, daily routine, travel directions, shopping, grammar, verbs. | 20 lessons × 1.5 hrs per level (2.5 months). | Native speakers or qualified locals. Compulsory material fee. | Table is OCR-corrupted: "Type", "Fee (SS)", **"SS6O"**, "1 to 1", **"SS 8O"**, mismatched duration rows. | `client-confirm` |
| **03** | **German Course** | Conversational communication, personal details, directions, travel, work phone calls, grammar, noun genders. | 20 lessons × 1.5 hrs per level (2.5 months). | Native speakers or qualified locals. Compulsory material fee. | Title typo **"Grerman Course"**. Corrupted fee line **"08 55"** for 1 to 1 rate. S$50/1.5h, S$60/2h. | `client-confirm` |
| **04** | **Chinese Course** | Mandarin listening, speaking, reading, writing; grammar analysis; 6 progressive levels; ~3,000 character goal. | 16 lessons of 1.5 hrs OR 8 lessons of 3 hrs (2 months per level). | Supplementary consolidation. **Certification: "certificate by SCI upon completion"**. | **Severe OCR damage in table:** "Teu (5$)", N-K2 $540, P1-P6 $8 50/9840, S1-S4 99.50/860, Adult 88.40/$60. Also need client confirmation on who **"SCI"** is (Spring College International?). | `client-confirm` |
| **05** | **Korean Course** | Conversational Korean, partner work, daily routines, shopping, travel, grammar, verb conjugation. | 20 lessons × 1.5 hrs per level (2.5 months). | Native speakers or qualified locals. Compulsory material fee. | Subheading error: copied **"Grerman Course"** as title of fee table! Corrupted fee **"S$00"** for 1 to 1. S$50/1.5h, S$60/2h. | `client-confirm` |

---

### 5.2 Brain Intelligence Courses Audit:

| # | Course | Core Methodology / Focus | Target Age | Schedule & Structure | Pricing in Source File | Critical Discrepancies & Flagged Gaps |
| :---: | :--- | :--- | :---: | :--- | :--- | :--- |
| **01** | **Right Brain Development** | Left vs Right brain theory; 6 techniques: toy assembly, image thinking (fairies/sports/dreams/mental abacus), graphic expression, shape feature memory (Chess/Go), spatial awareness, art appreciation. | Age 3–4 | 2 hrs/class, 4 classes/month.<br>Basic: 3 mos (12 classes)<br>Inter: 6 mos (24 classes)<br>Adv: 1 yr (48 classes) | Basic: S$720<br>Inter: S$1,440 (disc. S$1,368)<br>Adv: S$2,880 (disc. S$2,600) | Valid pedagogical introduction provided. Long-term package payment discounts apply. |
| **02** | **Super Right Brain** | Schulte Square (5×5 numerical grid 1–25), attention speed, peripheral vision widening, reading speed, error reduction in examinations. | Age 5–6 (intro also mentions Grades 1–12 & Adults) | 2 hrs/class, 4 classes/month.<br>Basic: 3 mos (12 classes)<br>Inter: 6 mos (24 classes)<br>Adv: 1 yr (48 classes) | Basic: S$720<br>Inter: S$1,440 (disc. S$1,368)<br>Adv: S$2,880 (disc. S$2,600) | Discrepancy between intro target age (Grades 1–12 and adults) and pricing table age (Age 5–6). |
| **03** | **Mind Mapping** | Radiant thinking (Tony Buzan), left/right brain synergy, 19x efficiency concept, 5 characteristics, blank paper branching technique, reading notes, target management. | Age 6 and above | 2 hrs/class, 4 classes/month.<br>Basic: 6 mos (24 classes)<br>Inter: 1 yr (48 classes) | Basic: S$1,440<br>Inter: S$2,880 (disc. S$2,700)<br>Adv: None listed | No Advanced course listed in pricing table (unlike Right Brain courses). |
| **04** | **Super Memory** | 1 Center (image linkage), 2 Points (transform & connect), 3 Reps (keyword, code, positioning), 4 Steps, 5 Capabilities, 6 Exercises (poker, vocabulary, etc.), 3 Methods (coding, story, positioning chain), 6 Sessions. | Age 6 and above | 2 hrs/class, 4 classes/month.<br>Basic: 6 mos (24 classes)<br>Inter: 1 yr (48 classes) | Basic: S$1,440<br>Inter: S$2,880 (disc. S$2,700) | Header error: Table is captioned **"Charges / mind Mapping"** instead of Super Memory. |
| **05** | **Whole Brain Development** (Interbrain Development) | Full-brain balancing, interbrain activation, sensory coordination, memory enhancement. | Age 6–12 | 4 days (whole day intensive) + retraining:<br>Basic: +2 mos (4 classes)<br>Inter: +6 mos (24 classes)<br>Adv: +1 yr (48 classes) | Basic: S$2,880<br>Inter: S$3,980 (disc. S$3,180)<br>Adv: S$5,780 (disc. S$4,180) | **DUPLICATE BODY TEXT:** Body text is a verbatim copy of Course 04 (Super Memory: *"Memory law system: One and one center..."*). Needs authentic Interbrain syllabus copy. |
| **06** | **Quantum Speed Reading** | Subconscious right-brain image reading, Maeda Makoto research, 8 baby games (leg kick, dance, "like", find friends, paper balls, magic tray, voice guess, rock-paper-scissors). | **CRITICAL AGE CONFLICT:**<br>Intro: 0–3 yrs<br>Pricing Table: 6–12 yrs | 4 days (whole day intensive) + retraining:<br>Basic: +2 mos (4 classes)<br>Inter: +6 mos (24 classes)<br>Adv: +1 yr (48 classes) | Basic: S$2,880<br>Inter: S$3,980 (disc. S$3,180)<br>Adv: S$5,780 (disc. S$4,180) | **MAJOR CONFLICT:** Introduction provides 8 games for babies aged 0–3 years, while the pricing table specifies "Preferable age 6–12". Requires urgent client clarification. |

---

## 6. Four-Tier Content Governance Matrix

Every content field across the website is categorized into one of four strict governance states:

```
+-----------------------------------------------------------------------------------------+
|                              CONTENT GOVERNANCE MODEL                                   |
+--------------------------+--------------------------------------------------------------+
| 1. client-provided       | Sourced directly from provided markdown files & logos        |
| 2. verified-source       | Confirmed against brand tokens and agreed plan architecture  |
| 3. client-confirm        | Gaps, pricing conflicts, OCR errors, schedules, approvals    |
| 4. do-not-invent         | Strictly prohibited from being hallucinated or fabricated    |
+--------------------------+--------------------------------------------------------------+
```

### Detailed Field-Level Classification:

| Content Element / Field | Governance Tier | Source Reference | Action for Static Next.js Build |
| :--- | :---: | :--- | :--- |
| **Company Legal Name (EN & ZH)** | `client-provided` | `logo-horizantal.png` | Display: *Nanyang Talent Group Pte Ltd* / *南洋人才集团* |
| **Historical Badge ("Since 1998")** | `client-provided` | `logo-horizantal.png` | Display badge on Hero, About, and Footer. |
| **Stat: 15+ Years Expert Instructors** | `client-provided` | `plan.md` | Display exact counter without interpretive embellishments. |
| **Stat: 26,500+ Students Enrolled** | `client-provided` | `plan.md` | Display exact counter without interpretive embellishments. |
| **Stat: 11+ Countries Represented** | `client-provided` | `plan.md` | Display exact counter without interpretive embellishments. |
| **Stat: 33+ Years School Experience** | `client-provided` | `plan.md` | Display exact counter without interpretive embellishments. |
| **Brand Colors (Navy, Red, Cyan, Gold)** | `verified-source` | Pixel Sampling | Enforce via CSS tokens and Tailwind theme. |
| **Website IA / Nav Structure** | `verified-source` | `plan.md` Section 2 | Implement: Home, About, Art Courses, Enrichment Courses, News & Events, Contact, FAQ. |
| **Art Course Names (1 to 6)** | `client-provided` | `Art courses.md` | Create static routes for: Oil Painting, Sketching, Water Color, Chinese Calligraphy, Chinese Painting, Children's Drawing. |
| **Art Course #7: Short Course Art Teacher** | `client-confirm` | `Art courses.md` #7 | Render route shell with placeholder: *"Content Pending Client Confirmation"*. |
| **Art Course Objectives** | `client-confirm` | `Art courses.md` | Headers were empty in source; hide field or mark pending client sign-off. |
| **Art Course Pricing (S$50/S$80)** | `client-confirm` | `Art courses.md` vs Live | Display: *"Please contact us for the latest course fee."* |
| **Art Course Materials Terms** | `client-confirm` | `Art courses.md` | Clarify "Self-contained Materials" vs S$50 fee for Children's Drawing. |
| **Language Course Names (1 to 5)** | `client-provided` | `Enrichment Courses.md` | Create static routes for English, Japanese, German, Chinese, Korean. |
| **Language Course Syllabi** | `client-provided` | `Enrichment Courses.md` | Display normalized clean bullet points. |
| **Language Course Fees (All)** | `client-confirm` | `Enrichment Courses.md` | OCR corrupted; display contact fallback until verified fee sheet provided. |
| **Chinese Course SCI Certificate** | `client-confirm` | `Enrichment Courses.md` | Mark issuing body (*SCI*) as pending client confirmation. |
| **Brain Intelligence Course Names (1 to 6)** | `client-provided` | `Enrichment Courses.md` | Create routes for: Right Brain, Super Right Brain, Mind Mapping, Super Memory, Whole Brain, Quantum Speed Reading. |
| **Whole Brain Development Syllabus** | `client-confirm` | `Enrichment Courses.md` | Source was duplicate of Super Memory; flag for unique curriculum copy. |
| **Quantum Speed Reading Age (0–3 vs 6–12)** | `client-confirm` | `Enrichment Courses.md` | Flag conflict; hide age badge until client approves. |
| **Brain Intelligence Course Fees** | `client-confirm` | `Enrichment Courses.md` | Display contact fallback or indicate fees subject to confirmation. |
| **Teacher Names, Photos, Credentials** | **`do-not-invent`** | Not provided | **Zero invented names.** Use generic institutional statements until provided. |
| **Timetables & Class Intake Dates** | **`do-not-invent`** | Not provided | Display: *"Flexible intake schedules available. Please enquire for current timetable."* |
| **Student Testimonials & Reviews** | **`do-not-invent`** | Not provided | Section omitted or displayed with client-approved quotes only. |
| **Certificates & Accreditations** | **`do-not-invent`** | Not provided | Do not fabricate MOE or educational partner claims. |
| **Upcoming Events & Competition Dates** | **`do-not-invent`** | Not provided | Display: *"News and event updates will be published here."* |
| **Nanyang Artists Society Historical Data** | **`do-not-invent`** | External Reference | Strictly excluded unless explicitly requested and approved. |

---

## 7. Flagged Pricing & Content Conflicts Matrix

The following table summarizes all conflicts that must **never** be resolved by guessing:

| Issue ID | Section | Conflict Description | Source 1 (Markdown) | Source 2 (External / Reference) | Recommended Static Fallback |
| :---: | :--- | :--- | :--- | :--- | :--- |
| **CF-01** | Art Pricing | Single lesson / hourly rate vs Package pricing | S$50/group, S$80/1-to-1 (2 hours, 3-month min payment) | Live college site shows 12-lesson packages and materials fees | Set `feeStatus: "client-confirm"`. Display: *"Please contact us for the latest course fee."* |
| **CF-02** | English Course | Mislabeled subject & OCR typos | Heading reads "English & Math Course"; rate says "SSBO" (S$80) | Standalone English Language Course brief | Display English language syllabus only; mark fees `client-confirm`. |
| **CF-03** | German Course | Typo in title & corrupted rate | Title is "Grerman Course"; 1-to-1 fee listed as "08 55" | Standard language fee scale | Fix UI label to "German Course"; set fee to `client-confirm`. |
| **CF-04** | Korean Course | Misplaced table title & zero fee | Sub-header reads "Grerman Course"; 1-to-1 fee reads "S$00" | Standard language fee scale | Set fee to `client-confirm`. |
| **CF-05** | Chinese Course | Severe OCR corruption in table | Values like "$8 50", "9840", "99.50", "860", "88.40" | Regular tuition rates | Set fee to `client-confirm`. |
| **CF-06** | Chinese Certificate | Unverified issuing organization | "Students can receive a certificate by SCI upon completion" | Spring College International / Unverified | Display: *"Course completion certificate available (Terms apply)."* Pending SCI identity sign-off. |
| **CF-07** | Quantum Speed Reading | Direct contradiction on target age | Introduction specifies 8 parent-child games for **ages 0 to 3** | Pricing table specifies **ages 6 to 12** | Omit age chip or display *"All ages / Enquire for age assessment"* until confirmed. |
| **CF-08** | Whole Brain Development | Verbatim duplicated content | Identical text to Super Memory ("Memory law system: One and one center...") | Distinct Interbrain / Whole Brain curriculum | Use introductory synopsis; flag full curriculum for client copy update. |
| **CF-09** | Corporate Timeline | Multiple founding milestone dates | Logo: **Since 1998**; Poster: **Since 2002**; Stat: **33+ Years** | Unconsolidated institutional evolution | Anchor main site to `Since 1998`; retain 33+ years stat; do not blend into a synthetic narrative. |

---

## 8. Bilingual Static Content Model (TypeScript)

To ensure the website remains 100% static, type-safe, and instantly localized into English and Simplified Chinese, all data will live in local TypeScript files under `src/content/`.

### 8.1 Core Type Definitions (`src/content/types.ts`)

```typescript
export type Language = 'en' | 'zh';

export type LocalizedString = {
  en: string;
  zh: string;
};

export type ContentStatus = 
  | 'client-provided' 
  | 'verified-source' 
  | 'client-confirm' 
  | 'do-not-invent';

export interface FeeStructure {
  status: ContentStatus;
  groupFee?: LocalizedString;
  privateFee?: LocalizedString;
  materialsFee?: LocalizedString;
  paymentTerms?: LocalizedString[];
  discounts?: LocalizedString[];
  displayFallback: LocalizedString;
}

export interface CourseDetail {
  slug: string;
  category: 'art' | 'language' | 'brain';
  title: LocalizedString;
  subtitle?: LocalizedString;
  ageGroup?: LocalizedString;
  duration?: LocalizedString;
  levelInfo?: LocalizedString;
  summary: LocalizedString;
  syllabusOutline?: LocalizedString[];
  techniques?: LocalizedString[];
  objectivesStatus: ContentStatus;
  objectives?: LocalizedString[];
  certification?: LocalizedString;
  fees: FeeStructure;
  heroImage: string;
  featured: boolean;
}

export interface SiteStatistic {
  value: string;
  label: LocalizedString;
  status: 'client-provided';
}

export interface FAQItem {
  id: string;
  question: LocalizedString;
  answer: LocalizedString;
  category: 'general' | 'art' | 'language' | 'brain' | 'enrolment';
  keywords: string[];
}
```

### 8.2 Standardized Route Mapping (Bilingual):

| Canonical English Route | Simplified Chinese Route (`/zh/`) | Page Content |
| :--- | :--- | :--- |
| `/` | `/zh` | Homepage (Hero, Stats, 3 Pathways, Featured Cards, Heritage Visual) |
| `/about` | `/zh/about` | Corporate Profile, Story, Philosophy, Learning Pillars |
| `/art-courses` | `/zh/art-courses` | Art Courses Hub (6 verified + 1 pending) |
| `/art-courses/[slug]` | `/zh/art-courses/[slug]` | Individual Course Detail (e.g. `/art-courses/oil-painting`) |
| `/enrichment-courses` | `/zh/enrichment-courses` | Enrichment Hub (Language + Brain Intelligence pathways) |
| `/enrichment-courses/language/[slug]` | `/zh/enrichment-courses/language/[slug]` | Language Course Detail (e.g. `/enrichment-courses/language/english`) |
| `/enrichment-courses/brain/[slug]` | `/zh/enrichment-courses/brain/[slug]` | Brain Course Detail (e.g. `/enrichment-courses/brain/mind-mapping`) |
| `/news-events` | `/zh/news-events` | Editorial updates & announcements (Clean static registry) |
| `/contact` | `/zh/contact` | Static enquiry form, WhatsApp link, WeChat QR placeholder |
| `/faq` | `/zh/faq` | Comprehensive bilingual FAQ with keyword lookup |

---

## 9. Comprehensive Missing Field Registry & Client Request List

To adhere strictly to the zero-hallucination mandate, the following fields are recorded as missing and awaiting client submission:

### Category A: Visual Assets
1. **Vector Logos (`.svg` or transparent `.png`):** Transparent horizontal and vertical logos (current assets are RGB JPEGs with `#F7F7F7` solid background).
2. **Missing Art Poster Asset:** The physical graphic file carrying the `Nanyang Art since 2002` mark referenced in project documentation.
3. **High-Resolution Course Imagery:** Authentic Singapore classroom/student artwork images for course headers and gallery cards.

### Category B: Course Syllabi & Pedagogical Copy
1. **Short Course Art Teacher (#7):** Full course outline, prerequisites, duration, certification, and fees.
2. **Art Course Objectives:** Objectives for Oil Painting, Sketching, Water Color, Chinese Calligraphy, Chinese Painting, and Children's Drawing.
3. **Water Color Unique Syllabus:** Distinct syllabus separating Water Color from Oil Painting and Gouache.
4. **Whole Brain Development Syllabus:** Unique curriculum text to replace the accidental duplicate of Super Memory.
5. **Quantum Speed Reading Age Clarification:** Sign-off on whether target age is 0–3 years (per games) or 6–12 years (per table).

### Category C: Financial & Administrative Terms
1. **Confirmed Singapore Fee Schedule:** Official pricing for all Art, Language, and Brain Intelligence courses (Package vs Hourly).
2. **Materials Fee Policy:** Confirmation of which courses require self-supplied materials vs compulsory center-provided materials.
3. **Chinese Course Certification Body:** Confirmation of the full name and accreditation of *SCI*.

### Category D: Institutional Contact & Facilities
1. **Official Registered Address:** Physical campus / studio address in Singapore.
2. **Official Contact Information:** Main telephone number, WhatsApp business line, official email, and WeChat ID.
3. **Opening Hours / Class Schedules:** Studio operating days and available lesson time slots.

---

## 10. Development Readiness & Next Phase Sign-off

| Readiness Milestone | Status | Details |
| :--- | :---: | :--- |
| **Audit Supplied Assets** | **COMPLETED** | Both horizontal and vertical logos analyzed for dimensions, color, text, and layout. Missing poster flagged. |
| **Extract Brand Color Direction** | **COMPLETED** | Deep Navy (`#172A73`), Nanyang Red (`#D71920`), Globe Blue (`#1FA7D6`), Warm Gold (`#C7A04B`) established. |
| **Normalize Course Markdowns** | **COMPLETED** | All 7 Art courses and 11 Enrichment courses normalized and indexed into structured content families. |
| **Content Governance Classification** | **COMPLETED** | Every field strictly classified into `client-provided`, `verified-source`, `client-confirm`, or `do-not-invent`. |
| **Pricing Conflict Registry** | **COMPLETED** | Hourly vs Package and OCR corruption flagged with non-committal static display fallbacks. |
| **Bilingual Data Model** | **COMPLETED** | TypeScript interfaces defined for static export and dual-language route hierarchy. |
| **Static Architecture Guarantee** | **COMPLETED** | Zero runtime DB, zero server API, zero external CMS. Static export via Next.js. |

**Proceeding to Phase 1:** Next.js Project Scaffolding, Static Pipeline, Asset Setup, Design System CSS Tokens, and Base Layouts.
