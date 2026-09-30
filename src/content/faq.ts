import { LocalizedString, FAQItem, FAQCategory, Language } from './types';

export const faqCategoryLabels: Record<FAQCategory, LocalizedString> = {
  General: {
    en: 'General',
    zh: '常规概览',
  },
  'Art Courses': {
    en: 'Art Courses',
    zh: '美术课程',
  },
  'Language Courses': {
    en: 'Language Courses',
    zh: '语言研修',
  },
  'Brain Intelligence': {
    en: 'Brain Intelligence',
    zh: '全脑启发',
  },
  Fees: {
    en: 'Fees & Pricing',
    zh: '学费与资费',
  },
  Duration: {
    en: 'Duration & Hours',
    zh: '课时与学制',
  },
  Enquiry: {
    en: 'Enquiry & Contact',
    zh: '咨询与报读',
  },
};

export const faqItems: FAQItem[] = [
  // 1. GENERAL
  {
    id: 'general-history',
    category: 'General',
    question: {
      en: 'What is Nanyang Talent Group and how long has it been established?',
      zh: '南洋人才集团创办于哪一年？办学历史与背景如何？',
    },
    answer: {
      en: 'Nanyang Talent Group Pte Ltd was established Since 1998 in Singapore. With 33+ years of cumulative school experience, 15+ years of expert instructor background, over 26,500 students enrolled, and learners representing 11+ countries, we are dedicated to excellence in Fine Arts, Multilingual Studies, and Cognitive Brain Intelligence.',
      zh: '南洋人才集团（Nanyang Talent Group Pte Ltd）始创于1998年。集团拥有33载办学经验沉淀、15年资深导师教研背景，累计培育学员超26,500人，学员来自全球11个以上国家与地区，深耕美术、多语种研修与全脑智力开发三大核心领域。',
    },
    keywords: [
      'about', 'history', 'since 1998', 'established', '1998', 'singapore', 'experience', 'students', 'countries',
      '关于', '历史', '1998', '始于1998', '背景', '创办', '经验', '学员', '资质', '机构'
    ],
    relatedLink: {
      label: { en: 'About Nanyang Talent Group', zh: '关于南洋人才集团' },
      href: { en: '/about', zh: '/zh/about' },
    },
  },
  {
    id: 'general-age-groups',
    category: 'General',
    question: {
      en: 'What age groups are accepted across your programmes?',
      zh: '各学科课程适合哪些年龄段的学员报读？',
    },
    answer: {
      en: 'We accept learners across all major age tiers: early childhood and primary students (Children’s Intellectual Drawing, Right Brain development), teenagers and secondary school students (Sketching, Water Color, Multilingual courses), and adult learners (Oil Painting, Chinese Calligraphy, Traditional Chinese Painting, and private 1-to-1 language immersion).',
      zh: '我们的课程面向各年龄梯队：包括少儿与学龄前儿童（儿童创意美术、幼儿右脑潜能开发）、青少年与中学生（专业素描、水彩、多语种系统进阶），以及成人学员（经典油画、五体书法、传统国画与一对一多语种高阶辅导）。',
    },
    keywords: [
      'age', 'children', 'adults', 'teens', 'kids', 'level', 'beginner', 'toddler',
      '年龄', '适合年龄', '儿童', '少儿', '成人', '青少年', '零基础', '多大', '几岁'
    ],
  },
  {
    id: 'general-location',
    category: 'General',
    question: {
      en: 'Where are Nanyang Talent Group studios located in Singapore?',
      zh: '南洋人才集团在新加坡的教学中心与画室具体位于何处？',
    },
    answer: {
      en: 'Our teaching studios are situated in Singapore. In strict compliance with institutional accuracy standards, the specific physical center address and upcoming campus viewings are confirmed upon direct client booking with Admissions.',
      zh: '我们的专业研修画室位于新加坡。根据严格的机构信息审核规范，中心具体校区地址与实地探校安排将在您通过招生热线或在线表单预约时，由课程顾问直接确认发送。',
    },
    keywords: [
      'location', 'address', 'where', 'studio', 'center', 'campus', 'singapore', 'visit',
      '地址', '地点', '在哪里', '校区', '画室', '位置', '新加坡', '参观', '探校'
    ],
    relatedLink: {
      label: { en: 'Contact Admissions', zh: '联络招生顾问' },
      href: { en: '/contact', zh: '/zh/contact' },
    },
  },

  // 2. ART COURSES
  {
    id: 'art-disciplines',
    category: 'Art Courses',
    question: {
      en: 'What art courses are offered at Nanyang Talent Group?',
      zh: '美术学院开设哪些具体画种与传统技法课程？',
    },
    answer: {
      en: 'Our Art Academy provides 7 structured disciplines: Oil Painting (techniques of Water Colour, Gouache & Oil), Sketching (Still Life, Plaster Cast & Character), Water Color (washes, flow & transparency), Chinese Calligraphy (five classical scripts), Traditional Chinese Painting (Bird-and-flower, Landscape & Figure in Xieyi & Gongbi), Children’s Drawing, and a specialized Short Course for Art Teachers.',
      zh: '美术学院开设7大系统课程：油画（涵盖水粉、水彩与经典油画）、素描基础与进阶（静物、石膏几何与石膏像、人物肖像）、水彩画（控水、湿画与通透色彩）、中国书法（正统五体临摹）、传统中国国画（花鸟、山水、人物及写意工笔）、儿童创意启蒙画，以及美术助教短期师资研修班。',
    },
    keywords: [
      'art', 'courses', 'oil painting', 'sketching', 'water color', 'watercolor', 'calligraphy', 'chinese painting', 'drawing',
      '美术', '艺术', '油画', '素描', '水彩', '书法', '国画', '画画', '儿童画', '国画'
    ],
    relatedLink: {
      label: { en: 'Explore Art Courses', zh: '浏览美术课程体系' },
      href: { en: '/art-courses', zh: '/zh/art-courses' },
    },
  },
  {
    id: 'art-calligraphy-painting',
    category: 'Art Courses',
    question: {
      en: 'What scripts and styles are taught in Chinese Calligraphy and Painting?',
      zh: '中国书法与传统国画课程教授哪些书体与画法风格？',
    },
    answer: {
      en: 'Chinese Calligraphy covers all five classical scripts: Kaishu (Regular), Lishu (Clerical), Xingshu (Running), Caoshu (Cursive), and Zhuanshu (Seal), incorporating stone inscription and master copybook appreciation. Chinese Painting covers Bird-and-flower, Landscape, and Figure compositions through Xieyi (freehand ink), Gongbi (fine-brush detailed dyeing), and Pomo (splash-ink).',
      zh: '中国书法课程严谨传授五体正统：楷书、隶书、行书、草书及篆书，并结合历代碑帖品鉴与文人笔墨意趣。中国国画课程则系统教授花鸟、山水与人物题材，熟练掌握写意泼墨、工笔勾勒与三矾九染等传统东方美学表现。',
    },
    keywords: [
      'calligraphy', 'chinese painting', 'scripts', 'kaishu', 'lishu', 'xingshu', 'caoshu', 'zhuanshu', 'xieyi', 'gongbi', 'shufa',
      '书法', '国画', '五体', '楷书', '隶书', '行书', '草书', '篆书', '写意', '工笔', '花鸟', '山水', '人物', '泼墨'
    ],
  },
  {
    id: 'art-materials',
    category: 'Art Courses',
    question: {
      en: 'Are painting and art materials provided by the studio?',
      zh: '上课所需的专业画材与工具是由画室提供还是自备？',
    },
    answer: {
      en: 'Foundational studio brushes, ink, palette tools, and practice paper are provided for trial and introductory lessons. Regular enrolled students may purchase recommended professional studio material packages or bring approved personal art supplies aligned with the course syllabus.',
      zh: '体验与基础评测课免费提供基础毛笔、墨汁、调色工具及练习画纸。常规学员可统一申领画室精选的专业配套画材包，亦可按照授课大纲要求携带自备专业画具。',
    },
    keywords: [
      'materials', 'brushes', 'paper', 'paint', 'canvas', 'supplies', 'tools', 'provided',
      '画材', '工具', '毛笔', '颜料', '画纸', '宣纸', '画架', '自备', '提供'
    ],
  },
  {
    id: 'art-teacher-training',
    category: 'Art Courses',
    question: {
      en: 'Is there a teacher training or certification course for art educators?',
      zh: '是否有面向美术助教或未来教师的师资研修班？',
    },
    answer: {
      en: 'Yes, our Short Course Art Teacher programme is designed for aspiring instructors and teaching assistants. Curriculum units and certification frameworks are actively pending final client confirmation before public intake schedules are finalized.',
      zh: '是的，我们设立了“美术助教与教师短期研修班（Short Course Art Teacher）”，专为有志从事美术教学的辅导员与助教定制。该课程的具体考核与证书资质目前正由教研团队进行最终确认。',
    },
    keywords: [
      'teacher', 'teacher training', 'art teacher', 'short course', 'certificate', 'certification',
      '老师', '教师', '师资', '师资培训', '助教', '证书', '培训班'
    ],
  },

  // 3. LANGUAGE COURSES
  {
    id: 'language-offerings',
    category: 'Language Courses',
    question: {
      en: 'What language immersion programmes are available in your curriculum?',
      zh: '多语种研习体系包含哪些语种与级别设置？',
    },
    answer: {
      en: 'We provide structured language training across 5 languages: General English (Levels 1 to 6 structured progression from foundational vocabulary to business communication), Practical Japanese (Hiragana/Katakana to daily conversation), Foundational German (pronunciation, grammar and cultural context), Standard Chinese / Mandarin (pinyin, character literacy & spoken fluency), and Conversational Korean (Hangul to functional interaction).',
      zh: '多语种研习中心开设5大语言体系：通用英语（涵盖Level 1至Level 6梯次递进，从基础词汇至商务沟通）、实用日语（假名起步至日常交流）、基础德语（标准发音、基础语法与跨文化表达）、规范华语（拼音读写、汉字素养与口语流利度）以及实用韩语（韩文字母至生活场景会话）。',
    },
    keywords: [
      'languages', 'english', 'japanese', 'german', 'chinese', 'korean', 'mandarin', 'levels', 'progression',
      '语言', '多语种', '英语', '日语', '德语', '华语', '中文', '韩语', '等级', '级别'
    ],
    relatedLink: {
      label: { en: 'Explore Language Programmes', zh: '浏览多语种研习体系' },
      href: { en: '/enrichment-courses', zh: '/zh/enrichment-courses' },
    },
  },
  {
    id: 'language-format',
    category: 'Language Courses',
    question: {
      en: 'Are 1-to-1 private language lessons and flexible pacing available?',
      zh: '语言课程是否提供一对一（1 to 1）专属定制辅导与灵活排课？',
    },
    answer: {
      en: 'Yes. Both interactive small-group workshops and 1-to-1 private mentoring are available across all languages. Private instruction allows customized pacing, targeted exam/interview preparation, and industry-specific terminology.',
      zh: '是的。所有语种均提供互动式精品小组课与一对一（1 to 1）专属定制辅导。私人专属课可根据学员现有水平定制进度，针对性解决考试测评、面试或特定职场口语需求。',
    },
    keywords: [
      '1 to 1', 'one to one', 'private', 'flexible', 'custom', 'tutoring', 'pacing',
      '一对一', '私人定制', '私教', '灵活', '单独辅导', '小班', '排课'
    ],
  },
  {
    id: 'language-pedagogy',
    category: 'Language Courses',
    question: {
      en: 'What pedagogical methodology is used in language classes?',
      zh: '语言研习课程采用何种教学理念与训练方式？',
    },
    answer: {
      en: 'Our methodology pairs rigorous linguistic foundations (phonetics, systematic syntax, grammatical accuracy) with communicative immersion. Lessons emphasize situational roleplay, active listening comprehension, and cultural context over rote memorization.',
      zh: '我们的教学法将扎实的语言学基础（正统发音、严谨句法与语法结构）与沉浸式实景交流深度融合。注重场景角色演练、听力反应与文化语境理解，彻底告别死记硬背。',
    },
    keywords: [
      'methodology', 'teaching', 'pedagogy', 'speaking', 'grammar', 'fluency',
      '教学法', '方法', '理念', '口语', '语法', '发音', '听力'
    ],
  },

  // 4. BRAIN INTELLIGENCE
  {
    id: 'brain-modules',
    category: 'Brain Intelligence',
    question: {
      en: 'What training modules are included in Brain Intelligence?',
      zh: '全脑潜能智力开发包含哪些具体训练模块？',
    },
    answer: {
      en: 'The Brain Intelligence pathway includes 6 core modules: Right Brain Development (early neuro-stimulation), Super Right Brain (Schulte Square visual attention training), Buzan Mind Mapping (radiant thinking and structured logic), Super Memory (image association and memory peg systems), Whole Brain Development (left-right hemispheric balance), and Quantum Speed Reading (habit and concentration training).',
      zh: '全脑智力开发包含6大核心模块：幼儿右脑潜能开发、超强右脑（舒尔特方格专注力集训）、博赞放射性思维导图、超强图像记忆法、全脑启发集训（左右脑平衡协调）以及量子波动速读专注力强化。',
    },
    keywords: [
      'brain', 'intelligence', 'right brain', 'mind mapping', 'super memory', 'whole brain', 'speed reading', 'schulte',
      '全脑', '右脑', '智力', '思维导图', '记忆力', '超强记忆', '速读', '专注力', '舒尔特方格'
    ],
    relatedLink: {
      label: { en: 'Explore Brain Intelligence', zh: '浏览全脑启发课程' },
      href: { en: '/enrichment-courses', zh: '/zh/enrichment-courses' },
    },
  },
  {
    id: 'brain-schulte',
    category: 'Brain Intelligence',
    question: {
      en: 'What is the Schulte Square method in Super Right Brain training?',
      zh: '超强右脑训练中的舒尔特方格（Schulte Square）是什么训练？',
    },
    answer: {
      en: 'Schulte Square is a internationally recognized neuro-visual exercise designed to expand peripheral vision, visual scanning speed, and sustained attention. Students locate numbers sequentially under timed conditions, training rapid visual tracking and cognitive focus.',
      zh: '舒尔特方格（Schulte Square）是国际公认的视知觉与专注力训练工具。学员在限定时间内按顺序快速定位方格内的数字或字符，有效拓展周边视野、提升视觉追踪速度并显著增强抗干扰注意广度。',
    },
    keywords: [
      'schulte', 'schulte square', 'focus', 'attention', 'concentration', 'visual tracking',
      '舒尔特', '舒尔特方格', '专注力', '注意力', '视野', '视知觉'
    ],
  },
  {
    id: 'brain-speed-reading',
    category: 'Brain Intelligence',
    question: {
      en: 'What is Quantum Speed Reading in your curriculum?',
      zh: '全脑体系中的量子波动速读（QSR）是怎样的课程？',
    },
    answer: {
      en: 'In our curriculum, Quantum Speed Reading (QSR) is approached objectively as a visual habit and high-focus concentration routine. It aims to develop rapid character scanning, reduced sub-vocalization, and strong reading interest, without unsupported claims.',
      zh: '在我们的教学大纲中，量子波动速读（QSR）被严谨定义为一项专注力与高效视读习惯养成训练。核心目标在于锻炼学员的快速扫视敏锐度、减少心里默读瓶颈并激发主动阅读兴趣，坚决杜绝夸大与不实营销。',
    },
    keywords: [
      'speed reading', 'quantum speed reading', 'qsr', 'reading habits', 'concentration',
      '速读', '量子波动速读', '阅读习惯', '阅读速度', '专注'
    ],
  },

  // 5. FEES
  {
    id: 'fees-structure',
    category: 'Fees',
    question: {
      en: 'What are the tuition fees and pricing structures for courses?',
      zh: '各门课程的学费收费标准与结算方式是怎样的？',
    },
    answer: {
      en: 'Tuition rates at Nanyang Talent Group are structured by discipline and format. In source records, foundational group art classes start from S$ 50 per 2-hour session (or structured term packages). Current Singapore package pricing and intake terms are confirmed directly with Admissions prior to registration.',
      zh: '南洋人才集团各项课程学费按学科、班制及阶梯等级规范设定。原始课程大纲记载的基础美术小组课学费约为每课时（2小时）50新币（S$ 50）起。最新学期优惠包与具体期数费用将在咨询时由招生顾问为您详细列明。',
    },
    keywords: [
      'fees', 'fee', 'tuition', 'cost', 'price', 'pricing', 'sgd', 's$', 'how much', 'rates',
      '学费', '费用', '多少钱', '收费', '价格', '资费', '新币', '报读费用'
    ],
    relatedLink: {
      label: { en: 'Inquire About Fees', zh: '咨询学费详情' },
      href: { en: '/contact', zh: '/zh/contact' },
    },
  },
  {
    id: 'fees-trial-materials',
    category: 'Fees',
    question: {
      en: 'Are there registration fees or additional material charges?',
      zh: '报读时是否有注册费、杂费或画材工本费？',
    },
    answer: {
      en: 'Introductory assessment consultations are complimentary. Certain advanced studio courses require dedicated material kits (e.g. oil canvas boards, professional brushes, or calligraphy felt), for which fees are transparently disclosed before term enrolment.',
      zh: '课程初次评估与选课咨询完全免费。部分高阶艺术实操课需使用专属画材耗材（如专业油画亚麻画布、进口毛笔或书法画毡），相关工本费用会在报读前公开透明公示，绝无隐形收费。',
    },
    keywords: [
      'registration fee', 'material fee', 'hidden fees', 'trial fee', 'costs',
      '注册费', '杂费', '画材费', '材料费', '隐形收费', '免费'
    ],
  },

  // 6. DURATION
  {
    id: 'duration-art',
    category: 'Duration',
    question: {
      en: 'How long is each art class session and what is the weekly schedule?',
      zh: '美术课程单次课时时长是多久？每周授课频次如何安排？',
    },
    answer: {
      en: 'Standard Fine Art sessions (Oil Painting, Sketching, Water Color, Chinese Calligraphy, and Chinese Painting) are 2 hours per session. Classes are typically scheduled once or twice weekly, with weekday after-school and weekend studio slots available.',
      zh: '标准美术专业课程（西洋油画、素描造型、水彩画、中国书法、中国国画）单次标准课时均为2小时。常规建议每周1至2次，提供平日放学后时段与周六、周日全天画室排期选择。',
    },
    keywords: [
      'duration', 'hours', 'how long', '2 hours', 'schedule', 'time', 'timing', 'slots',
      '时长', '课时', '多长时间', '两小时', '2小时', '时间', '排课', '周末', '几点'
    ],
  },
  {
    id: 'duration-enrichment',
    category: 'Duration',
    question: {
      en: 'What is the lesson duration for Language and Brain Intelligence courses?',
      zh: '多语种研修与全脑启发课程的课时长度与进阶周期如何？',
    },
    answer: {
      en: 'Language workshops range from 1.5 to 2 hours per session depending on age and level, structured across 10 to 12-week modules. Brain Intelligence sessions are typically 1.5 to 2 hours with periodic attention tracking benchmarks.',
      zh: '多语种研修课程单次课时为1.5至2小时（根据年龄与进阶级别微调），通常以10至12周为一个阶段性研习周期。全脑潜能开发课程单次课时约为1.5至2小时，包含阶段性注意力测评与思维导图成果评估。',
    },
    keywords: [
      'duration', 'language duration', 'brain duration', 'weeks', 'module', 'how long',
      '课时', '时长', '语言时长', '全脑时长', '周期', '周数'
    ],
  },

  // 7. ENQUIRY
  {
    id: 'enquiry-how-to-contact',
    category: 'Enquiry',
    question: {
      en: 'How do I contact Admissions for course enquiry or enrollment?',
      zh: '如何联系南洋人才集团进行课程咨询与入学报读？',
    },
    answer: {
      en: 'You can contact our admissions team instantly via WhatsApp (+65 6789 0123), email us at info@nytalent.com.sg, or submit an inquiry through our online contact form. Our course advisors reply promptly with class schedules and fee guides.',
      zh: '您可以通过 WhatsApp 专线（+65 6789 0123）直接与我们的招生顾问交流，发送电邮至 info@nytalent.com.sg，或在网站“联系我们”页面提交留言。顾问将第一时间为您提供详尽的开班名额与选课建议。',
    },
    keywords: [
      'contact', 'whatsapp', 'phone', 'email', 'enquire', 'enroll', 'enrolment', 'register', 'apply',
      '联系', '咨询', 'whatsapp', '电话', '邮箱', '报名', '登记', '顾问', '联络'
    ],
    relatedLink: {
      label: { en: 'Go to Contact Form', zh: '前往在线咨询表单' },
      href: { en: '/contact', zh: '/zh/contact' },
    },
  },
  {
    id: 'enquiry-trials',
    category: 'Enquiry',
    question: {
      en: 'Can I book a trial class or placement assessment?',
      zh: '能否预约体验课或进行先期入学测评？',
    },
    answer: {
      en: 'Yes. Trial sessions and preliminary artistic or cognitive level assessments are available by appointment. Contact Admissions to match available studio slots based on your preferred discipline.',
      zh: '是的。我们提供体验课与专业基础测评预约服务。请提前联络招生办公室，课程顾问将根据学员意向学科协助安排专属的试听与画室参访时段。',
    },
    keywords: [
      'trial', 'assessment', 'placement', 'book', 'preview', 'audition',
      '体验', '试听', '试课', '测评', '评估', '预约'
    ],
  },
];

export const fallbackResponse: LocalizedString = {
  en: "I don't have that information in the current course guide. Please contact Nanyang Talent Group for the latest details.",
  zh: '当前课程指南中暂未收录该信息。请联系南洋人才集团获取最新详情与官方解答。',
};

export const faqSectionContent = {
  badge: {
    en: 'Frequently Asked Questions',
    zh: '常见问题与答疑',
  },
  title: {
    en: 'Frequently Asked Questions',
    zh: '常见课程与报名咨询',
  },
  subtitle: {
    en: 'Clear answers regarding our curriculum disciplines, pedagogical methodology, and enrollment pathways.',
    zh: '关于课程设置、授课方式及报名咨询的重点解答。',
  },
  footerPrompt: {
    en: 'Still have questions about our curriculum?',
    zh: '对课程安排或学费有更多疑问？',
  },
  whatsappCta: {
    en: 'Chat with Admissions on WhatsApp',
    zh: '通过 WhatsApp 咨询顾问',
  },
  contactPageCta: {
    en: 'Visit Contact Page',
    zh: '前往联系页面',
  },
};

export const faqChatbotContent = {
  headerTitle: {
    en: 'Admissions Assistant',
    zh: '南洋人才课程咨询助手',
  },
  headerSubtitle: {
    en: 'Nanyang Talent Group • Official Enquiry Bot',
    zh: '南洋人才集团 · 官方咨询机器人',
  },
  welcomeMessage: {
    en: 'Hello! Welcome to Nanyang Talent Group Pte Ltd. How can I help you today? Tap any category or question below, or type your inquiry.',
    zh: '您好！欢迎咨询南洋人才集团。请问有什么可以帮助您的？您可以点击下方学科分类或输入关键词查询课程。',
  },
  inputPlaceholder: {
    en: 'Type a question (e.g. fees, oil painting, schedule, duration)...',
    zh: '输入您的问题（例如：学费、油画、上课时间、地点）...',
  },
  categoryPromptLabel: {
    en: 'Browse by Category:',
    zh: '按学科分类浏览：',
  },
  quickPromptLabel: {
    en: 'Suggested Questions:',
    zh: '常见热门咨询：',
  },
  clearChatLabel: {
    en: 'Clear History',
    zh: '清空会话',
  },
  noMatchReply: fallbackResponse,
  whatsappButton: {
    en: 'WhatsApp Admissions',
    zh: 'WhatsApp 招生顾问',
  },
  closeLabel: {
    en: 'Close Chat',
    zh: '关闭咨询窗口',
  },
  onlineStatus: {
    en: 'Online • Verified Guide',
    zh: '在线 · 官方课程大纲',
  },
};

/**
 * Intelligent client-side keyword matching algorithm.
 * No external API or runtime model required.
 */
export function searchFaq(query: string, lang: Language): { item: FAQItem | null; confidence: number } {
  const clean = query.trim().toLowerCase();
  if (!clean) {
    return { item: null, confidence: 0 };
  }

  // Tokenize into words and n-grams
  const tokens = clean
    .replace(/[?!.,;:，。？！（）()]/g, ' ')
    .split(/\s+/)
    .filter(Boolean);

  let bestMatch: FAQItem | null = null;
  let highestScore = 0;

  for (const item of faqItems) {
    let score = 0;
    const qText = item.question[lang].toLowerCase();
    const aText = item.answer[lang].toLowerCase();

    // Exact question match
    if (qText.includes(clean)) {
      score += 15;
    }

    // Category name match
    if (clean.includes(item.category.toLowerCase()) || clean.includes(faqCategoryLabels[item.category][lang].toLowerCase())) {
      score += 8;
    }

    // Keyword exact and partial matches
    for (const kw of item.keywords) {
      const lowerKw = kw.toLowerCase();
      if (clean === lowerKw) {
        score += 12;
      } else if (clean.includes(lowerKw)) {
        score += 6;
      } else {
        for (const token of tokens) {
          if (token.length >= 2 && (lowerKw.includes(token) || token.includes(lowerKw))) {
            score += 3;
          }
        }
      }
    }

    // Question content token match
    for (const token of tokens) {
      if (token.length >= 2) {
        if (qText.includes(token)) score += 4;
        if (aText.includes(token)) score += 1;
      }
    }

    if (score > highestScore) {
      highestScore = score;
      bestMatch = item;
    }
  }

  // Require minimum confidence threshold to avoid false positives
  const confidence = highestScore >= 6 ? highestScore : 0;
  return {
    item: confidence > 0 ? bestMatch : null,
    confidence,
  };
}

export function getFaqsByCategory(category: FAQCategory): FAQItem[] {
  return faqItems.filter((item) => item.category === category);
}

export function getAllCategories(): FAQCategory[] {
  return [
    'General',
    'Art Courses',
    'Language Courses',
    'Brain Intelligence',
    'Fees',
    'Duration',
    'Enquiry',
  ];
}
