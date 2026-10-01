import { CourseDetail } from './types';

export const artCourses: CourseDetail[] = [
  {
    slug: 'oil-painting',
    category: 'art',
    order: 1,
    image: '/assets/courses/oil-painting.jpg',
    title: {
      en: 'Oil Painting',
      zh: '油画',
    },
    subtitle: {
      en: 'Water Colour, Gouache and Oil Painting Techniques',
      zh: '水彩、水粉与经典油画技法研习',
    },
    duration: {
      en: '2 Hours per session',
      zh: '每课时 2 小时',
    },
    summary: {
      en: 'Master foundational to advanced color techniques in oil, watercolor, and gouache. Students develop color sensitivity, underpainting, glazing, and impasto brushwork.',
      zh: '系统研习水彩、水粉及经典油画技法，打下扎实的色彩运用基础，涵盖通透度、叠色与细节表现，培养敏锐色感与个人艺术表达。',
    },
    techniques: [
      { en: 'Transparency & Layering', zh: '色彩通透与层次叠色' },
      { en: 'Underpainting & Tonal Wash', zh: '底色铺设与素描调性' },
      { en: 'Gouache & Body Color', zh: '水粉不透明覆盖技法' },
      { en: 'Impasto & Glazing Details', zh: '厚涂与罩染细节表现' },
    ],
    objectivesStatus: 'client-confirm',
    fees: {
      status: 'client-confirm',
      materialsFee: { en: 'Self-contained Materials', zh: '画材自备或详询' },
      displayFallback: {
        en: 'Course fees and term schedules are available upon consultation.',
        zh: '最新学费与开班排期请直接向招生顾问咨询。',
      },
    },
    featured: true,
  },
  {
    slug: 'sketching',
    category: 'art',
    order: 2,
    image: '/assets/courses/sketching.jpg',
    title: {
      en: 'Sketching',
      zh: '素描基础与进阶',
    },
    subtitle: {
      en: 'Still Life, Plaster Cast and Character Sketching',
      zh: '静物素描、石膏像与人物造型',
    },
    duration: {
      en: '2 Hours per session',
      zh: '每课时 2 小时',
    },
    summary: {
      en: 'Present stereoscopic objects through tonal contrast. Develop fundamental drawing through still life, plaster casts, and portraits, mastering proportion and perspective.',
      zh: '通过黑白灰明暗对比呈现物体的立体结构与空间感。通过静物、石膏像与人物肖像素描，掌握质感、体积感、比例与透视法则。',
    },
    techniques: [
      { en: 'Linear Perspective & Proportion', zh: '透视结构与精确比例' },
      { en: 'Light, Shadow & Contrast', zh: '光影调子与明暗交界线' },
      { en: 'Still Life & Plaster Cast Studies', zh: '静物与石膏像造型' },
      { en: 'Surface Texture Presentation', zh: '物体材质感与空间刻画' },
    ],
    objectivesStatus: 'client-confirm',
    fees: {
      status: 'client-confirm',
      materialsFee: { en: 'Self-contained Materials', zh: '画材自备' },
      displayFallback: {
        en: 'Course fees and term schedules are available upon consultation.',
        zh: '最新学费与开班排期请直接向招生顾问咨询。',
      },
    },
    featured: true,
  },
  {
    slug: 'water-color',
    category: 'art',
    order: 3,
    image: '/assets/courses/water-color.jpg',
    title: {
      en: 'Water Color',
      zh: '水彩画',
    },
    subtitle: {
      en: 'Luminous Washes, Flow and Color Blending',
      zh: '水色交融与通透晕染技法',
    },
    duration: {
      en: '2 Hours per session',
      zh: '每课时 2 小时',
    },
    summary: {
      en: 'Practice dynamic watercolor techniques, mastering water control, transparency, color bleeding, and atmospheric perspective in wet-on-wet and wet-on-dry methods.',
      zh: '学习水彩画特有的水色调和技法，掌握控水、湿画法、干画法与色彩通透过渡，捕捉自然光影与空气感。',
    },
    techniques: [
      { en: 'Wet-on-Wet & Wet-on-Dry Washes', zh: '湿画晕染与干画层叠' },
      { en: 'Color Gradients & Atmospheric Light', zh: '色彩渐变与光影通透感' },
      { en: 'Brushwork & Edge Softening', zh: '笔法运用与边缘虚实处理' },
      { en: 'Landscape & Botanical Compositions', zh: '风景速写与植物静物构图' },
    ],
    objectivesStatus: 'client-confirm',
    fees: {
      status: 'client-confirm',
      materialsFee: { en: 'Self-contained Materials', zh: '画材自备' },
      displayFallback: {
        en: 'Course fees and term schedules are available upon consultation.',
        zh: '最新学费与开班排期请直接向招生顾问咨询。',
      },
    },
    featured: true,
  },
  {
    slug: 'chinese-calligraphy',
    category: 'art',
    order: 4,
    image: '/assets/calligraphy/5-running-script.jpg',
    title: {
      en: 'Chinese Calligraphy',
      zh: '中国书法',
    },
    subtitle: {
      en: 'Five Traditional Scripts & Classical Art Appreciation',
      zh: '五体正统书法传承与名碑临摹赏析',
    },
    duration: {
      en: '2 Hours per session',
      zh: '每课时 2 小时',
    },
    summary: {
      en: 'Explore the five classical scripts: Seal Script (Zhuanshu), Clerical Script (Lishu), Cursive Hand (Caoshu), Regular Script (Kaishu), and Running Script (Xingshu), studying line rhythm and brush spirit.',
      zh: '系统研习中国书法五大正统书体：篆书、隶书、草书、楷书与行书，精研名碑法帖临摹，涵养东方人文精神与线条气韵。',
    },
    techniques: [
      { en: 'Zhuanshu (Seal Script) - Archaic Symmetry', zh: '篆书——圆润对称与秦汉古风' },
      { en: 'Lishu (Clerical Script) - Silkworm Head & Swallow Tail', zh: '隶书——蚕头燕尾与古朴凝重' },
      { en: 'Caoshu (Cursive Hand) - Dynamic Energy', zh: '草书——笔走龙蛇与意境超逸' },
      { en: 'Kaishu (Regular Script) - Upright Balance', zh: '楷书——严谨正锋与间架结构' },
      { en: 'Xingshu (Running Script) - Fluid Rhythm', zh: '行书——行云流水与生动气韵' },
    ],
    objectivesStatus: 'client-confirm',
    fees: {
      status: 'client-confirm',
      materialsFee: { en: 'Self-contained Materials (Brush, Ink, Xuan Paper)', zh: '笔墨纸砚自备或详询' },
      displayFallback: {
        en: 'Course fees and term schedules are available upon consultation.',
        zh: '最新学费与开班排期请直接向招生顾问咨询。',
      },
    },
    featured: true,
  },
  {
    slug: 'chinese-painting',
    category: 'art',
    order: 5,
    image: '/assets/courses/chinese-painting.jpg',
    title: {
      en: 'Chinese Painting',
      zh: '中国国画',
    },
    subtitle: {
      en: 'Bird-and-Flower, Landscape, Xieyi and Gongbi',
      zh: '花鸟、山水、工笔与写意国画',
    },
    duration: {
      en: '2 Hours per session',
      zh: '每课时 2 小时',
    },
    summary: {
      en: 'Comprehensive study of Chinese traditional painting across flower-and-bird, landscape, and figures, mastering freehand Xieyi and fine-brush Gongbi techniques.',
      zh: '承袭正统国画文脉，涵盖花鸟、山水与人物三大传统题材，融合写意、工笔与泼墨技法，以水墨与天然矿物色彩展现东方意境。',
    },
    techniques: [
      { en: 'Xieyi (Freehand Style) - Expressive Ink Energy', zh: '写意画——水墨淋漓与神韵意境' },
      { en: 'Gongbi (Fine-Brush Work) - Precise Line & Delicate Dyeing', zh: '工笔画——勾线精细与三矾九染' },
      { en: 'Pomo (Splash-Ink) & Color Washing', zh: '泼墨法与彩墨交融' },
      { en: 'Traditional Composition & Seal Inscription', zh: '传统留白构图与题款印章' },
    ],
    objectivesStatus: 'client-confirm',
    fees: {
      status: 'client-confirm',
      materialsFee: { en: 'Self-contained Materials', zh: '画材自备' },
      displayFallback: {
        en: 'Course fees and term schedules are available upon consultation.',
        zh: '最新学费与开班排期请直接向招生顾问咨询。',
      },
    },
    featured: true,
  },
  {
    slug: 'childrens-drawing',
    category: 'art',
    order: 6,
    image: '/assets/courses/childrens-drawing.jpg',
    title: {
      en: "Children's Drawing",
      zh: '儿童创意美术',
    },
    subtitle: {
      en: "Children's Intellectual Art Education & Cartoon Drawing",
      zh: '儿童智力启发美术与卡通动漫创作',
    },
    duration: {
      en: '2 Hours per session',
      zh: '每课时 2 小时',
    },
    summary: {
      en: 'Promotes creative thinking, spatial memory, and focus in young children through expressive painting, mixed craftwork, and fun cartoon character storytelling.',
      zh: '通过绘画、综合手工创意、卡通动漫形象创作与记忆训练，全面提升儿童专注力与空间想象力，在快乐绘画中启迪艺术天赋。',
    },
    techniques: [
      { en: 'Creative Painting & Handwork Crafting', zh: '多媒介创意绘画与综合手作' },
      { en: 'Visual Memory & Color Association', zh: '视觉记忆力启发与色彩联想' },
      { en: 'Cartoon & Caricature Facial Expressions', zh: '卡通造型与生动表情刻画' },
      { en: 'Storytelling Through Visual Media', zh: '儿童故事绘本情境表达' },
    ],
    objectivesStatus: 'client-confirm',
    fees: {
      status: 'client-confirm',
      materialsFee: { en: 'Teaching materials fee upon enrollment', zh: '教学耗材费报读时详询' },
      displayFallback: {
        en: 'Course fees and term schedules are available upon consultation.',
        zh: '最新学费与开班排期请直接向招生顾问咨询。',
      },
    },
    featured: true,
  },
  {
    slug: 'short-course-art-teacher',
    category: 'art',
    order: 7,
    image: '/assets/courses/short-course-art-teacher.jpg',
    title: {
      en: 'Short Course Art Teacher',
      zh: '美术师资短期培训班',
    },
    subtitle: {
      en: 'Art Educator Professional Certification Programme',
      zh: '专业美术师资进修与教学法培训',
    },
    duration: {
      en: 'Pending Client Confirmation',
      zh: '课时待确认',
    },
    summary: {
      en: 'Professional training module designed for aspiring art instructors and educators. Curriculum syllabus and certification pathways are available upon inquiry.',
      zh: '为有志从事美术教学的导师量身定制的师资专业进修课程。具体课程大纲、认证体系与开班排期待客户最终确认。',
    },
    techniques: [
      { en: 'Curriculum Planning & Pedagogical Methods', zh: '美术教案设计与教学法（待确认）' },
      { en: 'Classroom Demonstration & Critique', zh: '课堂示范与习作讲评技巧（待确认）' },
    ],
    objectivesStatus: 'client-confirm',
    fees: {
      status: 'client-confirm',
      displayFallback: {
        en: 'Course fee pending client confirmation. Please contact us for details.',
        zh: '学费待客户确认，欢迎联系咨询详细师资方案。',
      },
    },
    featured: false,
  },
];
