import { CourseDetail } from './types';

export const languageCourses: CourseDetail[] = [
  {
    slug: 'english',
    category: 'language',
    order: 1,
    title: {
      en: 'General English Course',
      zh: '通用英语课程',
    },
    subtitle: {
      en: 'Foundational to Advanced 6-Level Progression',
      zh: '6级阶梯式进阶体系 · 听说读写全方位精进',
    },
    duration: {
      en: '16 lessons of 1.5 hrs or 8 lessons of 3 hrs (2 months per level)',
      zh: '每级16节课(1.5小时)或8节课(3小时)，每级约2个月完成',
    },
    summary: {
      en: 'A comprehensive curriculum designed to build proficiency across listening, speaking, reading, and writing for daily communication and academic pathways. Students progress systematically from Level 1 up to Level 6 with structured grammar analysis and vocabulary expansion.',
      zh: '系统化英语研习课程，涵盖听力、口语表达、阅读理解与写作，夯实语法与词汇基础，帮助学员从第1级循序渐进至第6级，建立自信地道的多场景英语沟通能力。',
    },
    syllabusOutline: [
      { en: 'Identify and correct grammar errors in written and spoken English', zh: '辨析并纠正书面与口语表达中的语法常见错误' },
      { en: 'Master core tenses, active/passive voice, and complex prepositions', zh: '掌握时态体系、主动与被动语态及介词精准用法' },
      { en: 'Expand academic and conversational low-frequency vocabulary', zh: '拓展学术与学术沟通高频及进阶核心词汇' },
      { en: 'Write coherent structured paragraphs and short analytical essays', zh: '撰写结构严谨的段落与主题短文' },
      { en: 'Develop active listening comprehension and natural conversational fluency', zh: '提升深层听力理解力与自然流利的口语对话表达' },
    ],
    objectivesStatus: 'verified-source',
    fees: {
      status: 'client-confirm',
      displayFallback: {
        en: 'Please contact us for the latest course fee and timetable.',
        zh: '最新学费与班级安排，请直接与我们咨询。',
      },
    },
    featured: true,
  },
  {
    slug: 'japanese',
    category: 'language',
    order: 2,
    title: {
      en: 'Japanese Language Course',
      zh: '日语研习课程',
    },
    subtitle: {
      en: 'Conversational Japanese & Practical Communication',
      zh: '实用日常与商务会话 · 互动式小班精讲',
    },
    duration: {
      en: '20 lessons x 1.5 hours per level (2.5 months)',
      zh: '每级20节课 x 1.5小时（约2.5个月完成）',
    },
    summary: {
      en: 'Specially designed for students seeking fluent daily communication and cultural understanding. Employs learner-centered methodologies, interactive partner exercises, and practical contextual scenarios from travel to formal professional introductions.',
      zh: '专为零基础及进阶学员打造的实用日语课程，以生动情境教学为主导，强调小班互动、伙伴练习，涵盖日常生活、旅行出行及职场礼仪日语。',
    },
    syllabusOutline: [
      { en: 'Self-introductions and personal profile communication', zh: '自我介绍、个人背景与日常寒暄' },
      { en: 'Asking for directions in hotels, transit, and public spaces', zh: '机场、酒店、交通及公共场所问询指路' },
      { en: 'Shopping, dining, and practical commercial interactions', zh: '购物、就餐与日常商业生活交流' },
      { en: 'Basic sentence construction and essential grammar structures', zh: '基础句型结构、日常短句与常用助词' },
      { en: 'Verbs (regular & irregular) and noun gender/number concepts', zh: '动词形态变化与日常对话表达' },
    ],
    objectivesStatus: 'verified-source',
    fees: {
      status: 'client-confirm',
      displayFallback: {
        en: 'Please contact us for the latest course fee and timetable.',
        zh: '最新学费与班级安排，请直接与我们咨询。',
      },
    },
    featured: true,
  },
  {
    slug: 'german',
    category: 'language',
    order: 3,
    title: {
      en: 'German Language Course',
      zh: '德语基础与进阶',
    },
    subtitle: {
      en: 'European Framework Communication & Grammar Structure',
      zh: '欧标体系日常会话与扎实语法架构',
    },
    duration: {
      en: '20 lessons x 1.5 hours per level (2.5 months)',
      zh: '每级20节课 x 1.5小时（约2.5个月完成）',
    },
    summary: {
      en: 'Introduction to German syntax, accurate pronunciation, and contextual conversation. Employs interactive group dynamics with maximum individual attention, preparing students for travel, work, and further academic exploration in German-speaking regions.',
      zh: '循序渐进的德语研习课程，注重纯正发音、严谨德语语法与自然对话，涵盖日常交际、商务电话及德语区文化认知。',
    },
    syllabusOutline: [
      { en: 'Self-introductions and talking about family, hobbies, and routines', zh: '个人简介、家庭生活、日常习惯与兴趣交流' },
      { en: 'Navigating directions, transport, hotels, and airport inquiries', zh: '交通出行、住宿办理与城市方位指引' },
      { en: 'Formal and informal workplace greetings and phone communications', zh: '正式与非正式职场礼仪问候及电话沟通' },
      { en: 'Nouns (genders: der/die/das, plural forms) and definite/indefinite articles', zh: '名词词性（阴阳中性）、复数及冠词系统' },
      { en: 'Present tense conjugations of regular and irregular verbs', zh: '规则动词与不规则动词现在时变位应用' },
    ],
    objectivesStatus: 'verified-source',
    fees: {
      status: 'client-confirm',
      displayFallback: {
        en: 'Please contact us for the latest course fee and timetable.',
        zh: '最新学费与班级安排，请直接与我们咨询。',
      },
    },
    featured: true,
  },
  {
    slug: 'chinese',
    category: 'language',
    order: 4,
    title: {
      en: 'Chinese (Mandarin) Course',
      zh: '华语研习课程',
    },
    subtitle: {
      en: 'Listening, Speaking, Reading & Writing (~3,000 Characters Target)',
      zh: '听读写全面突破 · 掌握约3000常用核心汉字',
    },
    duration: {
      en: '16 lessons of 1.5 hrs or 8 lessons of 3 hrs (2 months per level)',
      zh: '每级16节课(1.5小时)或8节课(3小时)，每级约2个月完成',
    },
    summary: {
      en: 'A structured 6-level Mandarin curriculum designed to develop fluency in listening, correct pronunciation, reading comprehension, and structured writing. Uses pattern substitution and concise grammar explanations enabling students to master practical communication and long-form texts.',
      zh: '6级系统化华语学习体系，注重标准语音矫正、汉字演化认知与实效语法句型。课程通过句型替换、阅读拓展与段落短文写作，助力学员掌握约3000常用字，流利自如地进行中文交流。',
    },
    syllabusOutline: [
      { en: 'Accurate Hanyu Pinyin pronunciation and tone correction', zh: '标准汉语拼音发音纠正与声调训练' },
      { en: 'Chinese character radical analysis and differentiation of similar glyphs', zh: '汉字偏旁部首拆解与形近字、多音字辨析' },
      { en: 'Vocabulary acquisition through real-life scenarios', zh: '情境高频实用词汇拓展与语料积累' },
      { en: 'Practical grammar rules and natural sentence structures', zh: '实用语法规则与地道中文语序句型' },
      { en: 'Picture description, paragraph drafting, and short analytical essays', zh: '看图说话叙事、段落书写与主题短文表达' },
    ],
    certification: {
      en: 'Course completion certificate available (Terms & issuing body subject to client confirmation)',
      zh: '结业证书颁发（具体发证机构待客户确认）',
    },
    objectivesStatus: 'verified-source',
    fees: {
      status: 'client-confirm',
      displayFallback: {
        en: 'Please contact us for the latest course fee and timetable.',
        zh: '最新学费与班级安排，请直接与我们咨询。',
      },
    },
    featured: true,
  },
  {
    slug: 'korean',
    category: 'language',
    order: 5,
    title: {
      en: 'Korean Language Course',
      zh: '韩语实用课程',
    },
    subtitle: {
      en: 'Hangul Foundations & Conversational Fluency',
      zh: '韩语字母发音基础 · 现代韩语日常交流',
    },
    duration: {
      en: '20 lessons x 1.5 hours per level (2.5 months)',
      zh: '每级20节课 x 1.5小时（约2.5个月完成）',
    },
    summary: {
      en: 'Interactive Korean communication course combining Hangul fundamentals, natural conversational practice, and modern cultural expressions. Partner-focused class dynamic ensures maximum active participation and progressive skill building.',
      zh: '兼具系统性与趣味性的韩语研习课程，从韩文字母拼读起步，逐步掌握日常会话、生活情境应用、语法句式与韩语常用敬语习惯。',
    },
    syllabusOutline: [
      { en: 'Hangul alphabet reading, writing, and pronunciation principles', zh: '韩文字母表元音、辅音拼读与收音发音规则' },
      { en: 'Daily conversations: greetings, asking for time, dates, and locations', zh: '日常问候、询问时间、日期及地点交流' },
      { en: 'Shopping, dining, transit navigation, and transactional dialogues', zh: '购物支付、餐厅点餐与公共交通问答' },
      { en: 'Grammar structures, polite endings, and conversational sentence construction', zh: '常用语法句型、敬语终结词尾与短句会话' },
      { en: 'Adjectives and basic verb conjugation patterns', zh: '形容词运用与常用动词变位规律' },
    ],
    objectivesStatus: 'verified-source',
    fees: {
      status: 'client-confirm',
      displayFallback: {
        en: 'Please contact us for the latest course fee and timetable.',
        zh: '最新学费与班级安排，请直接与我们咨询。',
      },
    },
    featured: true,
  },
];

export const brainCourses: CourseDetail[] = [
  {
    slug: 'right-brain-development',
    category: 'brain',
    order: 1,
    title: {
      en: 'Right Brain Development',
      zh: '右脑潜能开发',
    },
    subtitle: {
      en: 'Holistic Sensory & Image Thinking Training for Early Childhood',
      zh: '幼儿形象思维与感知力启蒙训练',
    },
    ageGroup: {
      en: 'Ages 3 – 4 years',
      zh: '3 – 4 岁适龄儿童',
    },
    duration: {
      en: '2 hours per class, 4 classes per month',
      zh: '每次2小时，每月4次课',
    },
    summary: {
      en: 'Designed to activate early right-brain creative potential and balance left-brain analytical processing. Cultivates creativity through educational building toys, fairy-tale visual imagery, graphic association, chessboard spatial memory, and aesthetic appreciation.',
      zh: '专为幼儿设计的右脑启发方案，通过空间益智积木、童话形象联想、图形化数学表达、棋盘具象记忆与艺术感知，全方位激发儿童直觉想象力与左右脑协同潜能。',
    },
    syllabusOutline: [
      { en: 'Creativity through educational toys, assembly, and 3D modeling', zh: '通过益智教具、拼插与三维拼搭培养动手创造力' },
      { en: 'Image thinking through fairy tale narratives and scene association', zh: '童话故事画面联想与动态形象思维练习' },
      { en: 'Graphic expression instead of pure linguistic logic for mathematical intuition', zh: '以直观图形取代纯文字逻辑，建立数理空间直觉' },
      { en: 'Pattern and shape recognition through game situational memory', zh: '棋局形态记忆与日常物体特征捕捉训练' },
      { en: 'Spatial orientation and environmental awareness activities', zh: '空间方位感知与环境导向能力锻炼' },
      { en: 'Aesthetic appreciation and unrestrained artistic observation', zh: '自然色彩感知与无拘束创意启蒙' },
    ],
    objectivesStatus: 'verified-source',
    fees: {
      status: 'client-confirm',
      displayFallback: {
        en: 'Please contact us for the latest course fee and term packages.',
        zh: '最新学期学费与套系方案，请直接与我们咨询。',
      },
    },
    featured: true,
  },
  {
    slug: 'super-right-brain',
    category: 'brain',
    order: 2,
    title: {
      en: 'Super Right Brain',
      zh: '超强右脑专注力',
    },
    subtitle: {
      en: 'Schulte Square & Visual Directional Attention Enhancement',
      zh: '舒尔特方格注意力训练与视觉检索加速',
    },
    ageGroup: {
      en: 'Ages 5 – 6 years (Also applicable to school ages)',
      zh: '5 – 6 岁儿童（亦适合学龄期注意力提升）',
    },
    duration: {
      en: '2 hours per class, 4 classes per month',
      zh: '每次2小时，每月4次课',
    },
    summary: {
      en: 'Utilizes the internationally recognized Schulte Square system (5x5 grid from 1 to 25) to expand peripheral vision, accelerate visual search speed, enhance concentration stability, and reduce examination error rates.',
      zh: '采用国际通行的舒尔特方格（Schulte Square）科学训练体系，通过动态视觉搜索有效拓展周边视野、训练视神经末梢反应速度，显著增强专注力稳定性与课堂听讲效率。',
    },
    syllabusOutline: [
      { en: '5x5 Schulte numerical grid visual search and elapsed time tracking', zh: '5×5 标准舒尔特方格数字快速点视与计时达标' },
      { en: 'Expansion of vertical and horizontal peripheral vision frames', zh: '纵向与横向周边视野广度拓展训练' },
      { en: 'Concentration stability, anti-distraction control, and task endurance', zh: '注意力抗干扰能力与持续专注耐力培养' },
      { en: 'High-speed character and symbol identification games', zh: '高速字符与图符精准识别与反应游戏' },
      { en: 'Progression to advanced 36-cell, 49-cell, and 64-cell challenge charts', zh: '进阶36格、49格及64格高阶挑战图表' },
    ],
    objectivesStatus: 'verified-source',
    fees: {
      status: 'client-confirm',
      displayFallback: {
        en: 'Please contact us for the latest course fee and term packages.',
        zh: '最新学期学费与套系方案，请直接与我们咨询。',
      },
    },
    featured: true,
  },
  {
    slug: 'mind-mapping',
    category: 'brain',
    order: 3,
    title: {
      en: 'Mind Mapping',
      zh: '思维导图与辐射思考',
    },
    subtitle: {
      en: 'Radiant Thinking, Visual Note-Taking & Project Planning',
      zh: '结构化放射思维 · 高效笔记与目标管理',
    },
    ageGroup: {
      en: 'Age 6 and above',
      zh: '6岁及以上学员',
    },
    duration: {
      en: '2 hours per class, 4 classes per month',
      zh: '每次2小时，每月4次课',
    },
    summary: {
      en: 'Master radiant thinking principles originated by Tony Buzan. Learn to synthesize complex ideas using blank-sheet branching, color coding, and visual iconography. Directly applicable to school study notes, book summaries, and project goal management.',
      zh: '研习博赞（Tony Buzan）思维导图精髓，掌握放射性思维工具。通过色彩、图像与关键词建立三维记忆网，运用于课堂读书笔记、各学科知识梳理与目标项目管理中。',
    },
    syllabusOutline: [
      { en: 'Principles of radiant thinking and central theme identification', zh: '放射性思维原理与核心主题提炼法则' },
      { en: 'Multi-branch divergent thinking and keyword representation', zh: '主干与次支发散逻辑及核心关键词选取' },
      { en: 'Color coding, visual icons, and emotional memory association', zh: '色彩编码系统、符号图像与情绪记忆链' },
      { en: 'Book summarizing, reading notes, and exam syllabus mapping', zh: '高效读书笔记整理、各学科考点导图绘制' },
      { en: 'Project planning, time management, and creative problem solving', zh: '日程目标规划与创造性问题拆解' },
    ],
    objectivesStatus: 'verified-source',
    fees: {
      status: 'client-confirm',
      displayFallback: {
        en: 'Please contact us for the latest course fee and term packages.',
        zh: '最新学期学费与套系方案，请直接与我们咨询。',
      },
    },
    featured: true,
  },
  {
    slug: 'super-memory',
    category: 'brain',
    order: 4,
    title: {
      en: 'Super Memory',
      zh: '超强记忆法',
    },
    subtitle: {
      en: 'Image-Linked Retention, Coding Chains & Scientific Review',
      zh: '图像联想记忆法 · 编码链与定位记忆术',
    },
    ageGroup: {
      en: 'Age 6 and above',
      zh: '6岁及以上学员',
    },
    duration: {
      en: '2 hours per class, 4 classes per month',
      zh: '每次2小时，每月4次课',
    },
    summary: {
      en: 'Transforms mechanical rote memory into right-brain image-linked memory. Covers the three classical mnemonic techniques: coding chains, story chains, and spatial positioning, alongside digital, vocabulary, and article retention drills.',
      zh: '将枯燥的机械死记硬背转化为生动的右脑图像链接记忆。掌握三大核心记忆方法：编码链条法、故事串联法与空间定位法，攻克数字、中英文词汇与长篇文段记忆难题。',
    },
    syllabusOutline: [
      { en: 'Core memory law: image transformation and associative connection', zh: '记忆法则核心：信息形象化转换与联结' },
      { en: 'Three mnemonic chains: coding chains, story chains, and positioning', zh: '三大记忆体系：编码链法、故事法、空间定位法' },
      { en: 'Digital information and sequence number memory exercises', zh: '长串数字信息与扑克记忆拓展训练' },
      { en: 'English vocabulary and Chinese text rapid memorization techniques', zh: '中英双语词汇速记与课文古诗文背诵技巧' },
      { en: 'Photographic memory training and Ebbinghaus scientific review loops', zh: '照相式记忆训练与艾宾浩斯科学复习循环' },
    ],
    objectivesStatus: 'verified-source',
    fees: {
      status: 'client-confirm',
      displayFallback: {
        en: 'Please contact us for the latest course fee and term packages.',
        zh: '最新学期学费与套系方案，请直接与我们咨询。',
      },
    },
    featured: true,
  },
  {
    slug: 'whole-brain-development',
    category: 'brain',
    order: 5,
    title: {
      en: 'Whole Brain Development',
      zh: '全脑启发 (间脑开发)',
    },
    subtitle: {
      en: 'Interbrain Activation, Sensory Coordination & Neural Balance',
      zh: '间脑平衡启发 · 感官协同与综合潜能开发',
    },
    ageGroup: {
      en: 'Ages 6 – 12 years',
      zh: '6 – 12 岁学龄儿童',
    },
    duration: {
      en: '4 days (whole day intensive) + continuous retraining',
      zh: '4天全天集训 + 后续复训跟踪',
    },
    summary: {
      en: 'An intensive cognitive enrichment module combining multi-sensory balance, attention conditioning, and right-left brain synchronization to unlock enhanced learning confidence and focus.',
      zh: '融合多感官平衡、注意力调优与左右脑协调的系统化潜能激发课程，帮助孩子建立高度自信、敏锐感知与专注自律的学习状态。',
    },
    syllabusOutline: [
      { en: 'Left-right cerebral hemispheric balance conditioning', zh: '左右脑机能协调与神经平衡训练' },
      { en: 'Multi-sensory perception and blindfold spatial intuition activities', zh: '多重感官协同与盲视空间感知练习' },
      { en: 'High-speed attention concentration immersion sessions', zh: '高频度注意力沉浸式专注体验' },
      { en: 'Integrated creative visualization and brain relaxation routines', zh: '意象可视化冥想与大脑放松调节' },
    ],
    objectivesStatus: 'client-confirm',
    fees: {
      status: 'client-confirm',
      displayFallback: {
        en: 'Please contact us for the latest course fee and term packages.',
        zh: '最新学期学费与套系方案，请直接与我们咨询。',
      },
    },
    featured: false,
  },
  {
    slug: 'quantum-speed-reading',
    category: 'brain',
    order: 6,
    title: {
      en: 'Quantum Speed Reading',
      zh: '极速阅读潜能训练',
    },
    subtitle: {
      en: 'High-Speed Page Scanning & Subconscious Information Ingestion',
      zh: '高速文字扫描与右脑深层潜意识信息感知',
    },
    ageGroup: {
      en: 'Subject to Assessment (Pending Client Sign-off: 0-3 vs 6-12)',
      zh: '入学评测评估（待确认适龄范围）',
    },
    duration: {
      en: '4 days (whole day intensive) + continuous retraining',
      zh: '4天全天集训 + 后续复训跟踪',
    },
    summary: {
      en: 'Advanced reading methodologies designed to accelerate text scanning, enhance photographic memory retention, and cultivate expansive reading habits through targeted visual conditioning.',
      zh: '旨在拓展视觉感知广度、提升页面快速扫描能力与右脑图像化摄取效率的特色阅读研习课程。',
    },
    syllabusOutline: [
      { en: 'Rapid ocular saccadic movement and visual tracking routines', zh: '眼球敏捷扫视与视野扩张训练' },
      { en: 'Whole-page image scanning and subconscious retention exercises', zh: '整页图像化扫描感知与潜意识信息捕获' },
      { en: 'Visual rhythm breathing and concentration stabilization', zh: '节奏呼吸调控与高能阅读状态建立' },
      { en: 'Book structure comprehension and rapid thematic extraction', zh: '书籍结构快速理解与核心主旨提炼' },
    ],
    objectivesStatus: 'client-confirm',
    fees: {
      status: 'client-confirm',
      displayFallback: {
        en: 'Please contact us for the latest course fee and term packages.',
        zh: '最新学期学费与套系方案，请直接与我们咨询。',
      },
    },
    featured: false,
  },
];
