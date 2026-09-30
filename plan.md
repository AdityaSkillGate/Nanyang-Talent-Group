1. Recommended website direction
Brand

Nanyang Talent Group Pte Ltd
南洋人才集团

Use the supplied horizontal logo for desktop and a compact/vertical version for mobile.

The visual language should be:

Premium Singapore education/institutional style
Clean white space
Deep navy as the main institutional colour
Nanyang red as the signature accent
Cyan/sky-blue accents from the globe
Very small amounts of gold for premium emphasis
Elegant Chinese typography
Fine borders and editorial layouts instead of excessive card shadows
Subtle brush-stroke/globe/arc motifs inspired by the supplied logo
Professional animations, but never flashy or distracting

The design should feel Singapore-based, established, educational and trustworthy, rather than like a generic children's tuition website.

2. Core information architecture

I recommend this navigation:

HOME
ABOUT
ART COURSES
ENRICHMENT COURSES
NEWS & EVENTS
CONTACT

Right side:

EN | 中文
Enquire Now

On desktop, Art and Enrichment can have elegant mega/dropdown menus.

Art Courses
Art Courses
├── Oil Painting
├── Sketching
├── Water Color
├── Chinese Calligraphy
├── Chinese Painting
├── Children's Drawing
└── Short Course Art Teacher
Enrichment Courses
Enrichment Courses
├── Language Courses
│   ├── English
│   ├── Japanese
│   ├── German
│   ├── Chinese
│   └── Korean
│
└── Brain Intelligence Courses
    ├── Right Brain Development
    ├── Super Right Brain
    ├── Mind Mapping
    ├── Super Memory
    ├── Whole Brain Development
    └── Quantum Speed Reading

This structure matches the course families in the supplied material and the category organization visible on the reference site.

3. Homepage — recommended final structure

I would make the homepage relatively long, but each section should remain visually simple.

Section 01 — Premium Hero

Large cinematic hero with:

Create. Learn. Grow.

Supporting line:

Discover art, languages and enrichment programmes designed to encourage creativity, learning and personal development.

Buttons:

Explore Courses
Contact Us

On the right:

layered art image
subtle globe arc
floating paint stroke
very light animated particles
Nanyang logo watermark

A small badge:

Since 1998

The hero should not contain huge paragraphs.

4. Trust statistics section

This should be one of the strongest sections on the home page.

15+
Years of Expert Instructors

26,500+
Students Enrolled

11+
Countries Represented

33+
Years of School Experience

Use animated counters when they enter the viewport.

Important: display these exactly as client-provided, without adding interpretations such as "students successfully graduated" or "countries currently active."

5. Three learning pathways

Large premium section:

ART COURSES

Create • Express • Explore

LANGUAGE COURSES

Communicate • Learn • Connect

BRAIN INTELLIGENCE

Think • Remember • Develop

Each has:

Short description
Explore Courses →

This gives visitors an immediate understanding of the business.

6. Featured Art Courses

Use a refined horizontal/2-column grid:

Oil Painting
Sketching
Water Color
Chinese Calligraphy
Chinese Painting
Children's Drawing

Each course card:

[Image]

Oil Painting
Water Colour • Gouache • Oil

Explore Course →

Do not put long course descriptions on the homepage.

The supplied material explains, for example, that the Oil Painting course covers colour usage and techniques such as transparency, overlaying and detailing.

Sketching focuses on still life, plaster cast and character sketching, developing presentation of texture, dimension and perspective.

Chinese Calligraphy includes Kaishu, Lishu, Xingshu, Caoshu and Zhuanshu, along with appreciation, copybook and inscription work.

Chinese Painting includes bird-and-flower, landscape and figure traditions and techniques such as Xieyi, Gongbi and Pomo.

7. Featured Enrichment section

Use two large visual pathways.

Language Courses
English
Japanese
German
Chinese
Korean
Brain Intelligence
Right Brain Development
Super Right Brain
Mind Mapping
Super Memory
Whole Brain Development
Quantum Speed Reading

The supplied enrichment document provides structured information for these language programmes, including English progression, lesson structure and language-learning objectives.

The brain-intelligence material covers the six programmes listed above, including Right Brain Development, Super Right Brain, Mind Mapping, Super Memory, Whole Brain Development and Quantum Speed Reading.

8. "Why Nanyang" section

Keep this very short.

Recommended layout:

Learning with Purpose

A learning environment combining
creative expression, language development
and enrichment opportunities.

15+ Years
Expert Instructors

26,500+
Students Enrolled

11+
Countries Represented

Avoid inventing statements like:

"Singapore's No.1"
"best academy"
"MOE certified"
"award-winning teachers"
"guaranteed results"

unless the client supplies documentation.

9. Art + Chinese heritage visual section

This can become the signature part of the design.

Split screen:

Left:

ART AS EXPRESSION
艺术 · 创意 · 传承

Right:

Large Chinese painting / calligraphy visual.

Use subtle brush animation.

This connects naturally to the supplied Chinese Calligraphy and Chinese Painting material without introducing new claims.

10. Bilingual section

Create a dedicated visual:

English
Learn with confidence.

中文
探索艺术 · 语言 · 全脑发展

Language switching should not reload the entire site.

Recommended URLs:

/en
/zh

or:

/
 /zh/

I prefer:

/
 /zh/

where English is the default canonical experience.

For Singapore Chinese, use Simplified Chinese, with natural Singapore-oriented wording rather than mechanically translated mainland-Chinese marketing language.

The existing reference site already demonstrates an English/Chinese switch, so this is consistent with the source ecosystem.

11. News & Events

This should be simple and editorial.

Homepage:

Latest News & Events

[01]
Title
Short description

[02]
Title
Short description

[03]
Title
Short description

View All →

Full page:

News
Events
Announcements

Each item gets:

Date
Category
Title
Brief
Image
Read More

Because the website is static, maintain the data locally:

content/news.ts
content/events.ts

Do not invent news/events during development.

When there are no approved items, show:

News and event updates will be published here.

12. About page

The About page should borrow the institutional storytelling structure from your previous Nanyang College project, but be much shorter.

Your saved project already used a proper institutional architecture around About, history, programmes, media, FAQs and contact, and its UI audit specifically emphasized stronger institutional branding and verified imagery.

I recommend:

About Hero
About Nanyang Talent Group
南洋人才集团

Short introduction.

Our Story

Use only verified/client-approved history.

The supplied logo itself carries:

Since 1998

The Art poster carries:

Nanyang Art
since 2002

Do not automatically merge these into one establishment date.

Our Learning Areas
Art
Languages
Brain Intelligence
Our Numbers

The four statistics supplied by the client.

Learning Philosophy

A short 3-column section:

Creativity
Knowledge
Development
CTA
Explore Our Courses
13. Course detail page architecture

Every course should use the same reusable template.

Example:

Oil Painting
油画

Short Introduction

What You Will Learn
• ...
• ...
• ...

Course Details
Duration
Class Type
Materials
Fees

Who Is It For?

Course Enquiry

Related Courses

Do not show a field when the source doesn't provide it.

For example, the current Art document gives group and 1-to-1 durations/fees for several courses and payment instructions such as minimum three-month payment and discounts for longer payment periods.

14. Important pricing issue

This needs to be handled carefully.

The supplied Art document contains figures such as:

Group — S$50
1 to 1 — S$80
2 hrs

and payment instructions for longer payment periods.

However, the current nycollege.edu.sg site shows different package-style pricing for some Art products, including an Oil Painting listing showing a 12-lesson package and materials fee.

So do not hard-code prices as final client information yet.

Create:

status: "client-confirm"

for all financial fields.

The website can initially display:

Course Fee
Please contact us for the latest course fee.

until the client confirms the final Singapore pricing.

This avoids publishing outdated pricing.

15. Missing information that must remain unfilled

There are several intentional gaps.

For example, the supplied Art document ends with:

# 7 Short Course Art Teacher

but no actual detailed curriculum is included afterward.

Therefore:

Do not invent the Short Course Art Teacher description.

Build the course page structure now, but mark the content:

Content Pending Client Confirmation

The same rule should apply to:

teacher names
exact teacher qualifications
current timetable
current intake dates
exact branch/contact information
trial-class information
certification claims
current event dates
testimonials
awards
registration requirements
16. FAQ chatbot

This is one of the features I strongly recommend.

But because the website must be fully static, I would not make it a live AI chatbot in V1.

Build a local FAQ chatbot.

UI

Bottom-right:

💬
Ask Nanyang

Click:

Hello! How can I help?

Popular questions:

What art courses are available?
What language courses are available?
What brain intelligence courses are available?
Are one-to-one classes available?
How long are the courses?
How can I enquire?
Architecture
FAQ database
↓
keyword matching
↓
best matching answer
↓
fallback

Example:

User:
"What languages do you teach?"

Bot:
"We offer English, Japanese, German, Chinese and Korean courses."
Important fallback

Never let the chatbot invent an answer.

For unknown questions:

I don't have that information in my current course guide. Please contact Nanyang Talent Group for the latest details.

This is particularly important for fees and schedules.

17. Singapore-oriented UX

Rather than filling the website with random Singapore landmarks, I recommend a Singapore premium institutional visual language:

Use
clean white/cream backgrounds
strong navy typography
red accent lines
compact bilingual labels
precise alignment
generous spacing
premium photography
subtle motion
restrained decorative elements
Chinese/English side-by-side where appropriate
Avoid
excessive gradients
neon colours
giant cartoon illustrations
noisy animations
excessive glassmorphism
10+ colour combinations
huge paragraphs
generic AI-generated student images

The logo already gives enough visual personality.

18. Recommended colour system

Approximate brand system:

Primary Navy
#172A73

Nanyang Red
#D71920

Sky Blue
#1FA7D6

Aqua
#4CB8D4

Warm Gold
#C7A04B

Background
#F8F9FB

Text
#172033

Muted Text
#667085

Use the red primarily for:

CTA
active states
small highlights
Chinese calligraphy accents

Do not make the entire website red.

19. Typography

I recommend:

English
Inter
or
Manrope
Chinese

Use a highly readable system Chinese font stack rather than embedding a large font file.

Example:

font-family:
  "Noto Sans SC",
  "PingFang SC",
  "Microsoft YaHei",
  sans-serif;

For decorative Chinese headings, use a restrained calligraphic treatment only in a few locations.

20. Animation system

Premium animation should be subtle.

Hero
globe/arc reveal
logo fade/scale
text stagger
CTA slide
Scroll
section reveal
number counter
image parallax
horizontal brush-stroke reveal
Cards
3–5px lift
image zoom
border accent
Page transitions

Very short:

200–500ms

Avoid animations that make the website feel like a gaming site.

21. Next.js architecture

Since you specifically want fully static Next.js, this is a good fit.

Next.js currently supports static export through:

output: 'export'

and generates static HTML assets into the out directory.

Recommended architecture:

src/
├── app/
│   ├── page.tsx
│   ├── about/
│   ├── art-courses/
│   │   ├── page.tsx
│   │   └── [slug]/
│   ├── enrichment-courses/
│   │   ├── page.tsx
│   │   ├── language/
│   │   └── brain/
│   ├── news-events/
│   ├── contact/
│   ├── faq/
│   ├── zh/
│   ├── sitemap.ts
│   ├── robots.ts
│   └── layout.tsx
│
├── components/
│   ├── header/
│   ├── footer/
│   ├── hero/
│   ├── course-card/
│   ├── course-detail/
│   ├── language-switcher/
│   ├── faq-chatbot/
│   └── animations/
│
├── content/
│   ├── art-courses.ts
│   ├── language-courses.ts
│   ├── brain-courses.ts
│   ├── faq.ts
│   ├── news.ts
│   └── events.ts
│
├── data/
│   └── site-config.ts
│
└── styles/

Next.js also supports file-based metadata, favicons, Open Graph images, sitemap.ts and robots.ts, which fits this static project.

22. Data architecture

Do not put course information directly inside JSX.

Use structured content.

Example:

export const artCourses = [
  {
    slug: "oil-painting",
    title: {
      en: "Oil Painting",
      zh: "油画",
    },
    category: "art",
    summary: {
      en: "...",
      zh: "...",
    },
    details: [],
    feeStatus: "client-confirm",
    durationStatus: "verified",
  }
]

This will make the site extremely easy to update.

23. SEO strategy

Every course gets its own static page.

Examples:

/art-courses/oil-painting
/art-courses/sketching
/art-courses/chinese-calligraphy

/enrichment-courses/english
/enrichment-courses/japanese
/enrichment-courses/right-brain-development

Each page should have:

Title
Meta description
Canonical URL
Open Graph image
Structured data
Breadcrumb

Generate a sitemap and robots file during build. Next.js supports both through its metadata conventions.

24. Mobile design

This should be mobile-first, not desktop-first.

Mobile navigation:

☰
Nanyang Logo
中文

Bottom sticky CTA:

☎ Enquire
💬 WhatsApp

Course cards become:

[Image]
Course
Brief
Explore →

Chatbot should sit above the sticky CTA rather than overlap it.

25. Accessibility

Include:

keyboard navigation
visible focus states
appropriate colour contrast
alt text for all real images
semantic headings
reduced-motion option
correct language attributes
accessible mobile menu
accessible FAQ chatbot
readable font sizes
26. Performance

Because the site is static, performance can be excellent.

Use:

Static export
Local course data
Optimised images
Lazy loading
Minimal client components
CSS-first animation
No unnecessary API calls
No runtime database
No large JS framework libraries beyond Next/React

For the hero, load only the critical image first.

All lower images should lazy-load.

27. Content governance — very important

Create a simple content status model:

VERIFIED
CLIENT-PROVIDED
CLIENT-CONFIRM
DO-NOT-PUBLISH
VERIFIED / CLIENT-PROVIDED

Use:

Nanyang Talent Group name
logo
Since 1998
15+ Years of Expert Instructors
26,500+ Students Enrolled
11+ Countries Represented
33+ Years of School Experience
supplied course names
supplied course descriptions
supplied posters/assets
CLIENT-CONFIRM
fees
schedules
teachers
current address
current telephone numbers
registration requirements
upcoming events
testimonials
certifications
DO NOT AUTOMATICALLY COPY

The existing nytalent.com.sg currently contains additional content about grade examinations, Nanyang Star competitions, exhibition archives and society history.

Those should only enter the new Talent Group site after the client explicitly approves them.