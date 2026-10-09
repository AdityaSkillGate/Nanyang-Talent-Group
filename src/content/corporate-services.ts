import { LocalizedString } from './types';

export interface CorporatePillar {
  id: string;
  order: string;
  title: LocalizedString;
  shortDesc: LocalizedString;
  description: LocalizedString;
  deliverables: LocalizedString[];
  icon: string;
  badge: LocalizedString;
}

export interface CorporateEngagementStep {
  step: string;
  title: LocalizedString;
  desc: LocalizedString;
}

export interface CorporateAdvantage {
  title: LocalizedString;
  desc: LocalizedString;
  icon: string;
}

export const corporateServicesContent = {
  hero: {
    badge: {
      en: 'Institutional & Enterprise Solutions · Singapore',
      zh: '新加坡专业企业服务 · 权威产教融合',
    },
    title: {
      en: 'Corporate Services & Enterprise Talent Solutions',
      zh: '企业服务与机构人才赋能解决方案',
    },
    subtitle: {
      en: 'Customized corporate talent acquisition, executive leadership upskilling, workplace bilingual fluency, employee wellness art workshops, and cognitive agility training tailored for businesses and institutions in Singapore.',
      zh: '南洋人才集团依托二十余载优质教育资源与广泛的商业合作网络，为新加坡企业与跨国机构提供定向人才招聘、高管定制化培训、商务双语提升、员工身心艺术工作坊及企业认知效能研修等一站式综合服务。',
    },
    image: '/assets/corporate/corporate-services-boardroom.jpg',
    stats: [
      {
        value: '25+',
        label: { en: 'Years Institutional Pedagogy', zh: '载办学积淀与培训经验' },
      },
      {
        value: '150+',
        label: { en: 'Enterprise & School Partners', zh: '合作企业与院校伙伴' },
      },
      {
        value: '100%',
        label: { en: 'Customized Curriculum', zh: '专属量身定制方案' },
      },
      {
        value: '4.9/5',
        label: { en: 'Client Satisfaction Rating', zh: '企业客户综合满意度' },
      },
    ],
  },

  pillarsSection: {
    badge: {
      en: 'Comprehensive Enterprise Solutions',
      zh: '六大核心企业服务支柱',
    },
    title: {
      en: 'Integrated Corporate Development Pillars',
      zh: '全方位企业赋能与专业支持体系',
    },
    subtitle: {
      en: 'Tailored for Singapore SMEs, multinational corporations, private academies, and government-linked entities.',
      zh: '专为新加坡中小型企业、跨国公司、私立教育学府及政府关联机构量身定制的高品质服务。',
    },
    pillars: [
      {
        id: 'talent-acquisition',
        order: '01',
        title: {
          en: 'Corporate Talent Acquisition & Placement',
          zh: '企业定向人才招聘与猎头安置',
        },
        badge: {
          en: 'Hiring & Headhunting',
          zh: '精准猎聘',
        },
        shortDesc: {
          en: 'Pre-vetted bilingual candidates, executive search, and specialized talent matching for Singapore companies.',
          zh: '依托庞大人才库与多维背调，为新加坡企业精准输送高质量双语专业人才与业务骨干。',
        },
        description: {
          en: 'We match qualified professionals, polytechnic/university graduates, and specialized bilingual talent with corporate roles across education, commerce, finance, and creative design while ensuring strict TAFEP and MOM compliance.',
          zh: '深入洞察雇主用人需求，针对教育师资、商务运营、外贸管理及创意设计等紧缺岗位开展精准搜寻与背景初筛，严格遵循新加坡劳资政公平雇佣框架（TAFEP）与人力部准则。',
        },
        deliverables: [
          { en: 'Custom candidate sourcing & technical pre-screening', zh: '企业用人画像定制与候选人专业初筛' },
          { en: 'Bilingual proficiency & background verification', zh: '中英双语流利度核查与职业背景核验' },
          { en: 'MOM Work Pass (EP/SP) eligibility guidance', zh: '人力部工作准证（EP/SP）申报政策协助' },
          { en: 'Probation tracking & candidate guarantee replacement', zh: '试用期工作表现跟进与合规保障机制' },
        ],
        icon: 'UserCheck',
      },
      {
        id: 'custom-training',
        order: '02',
        title: {
          en: 'Corporate Custom Training & Executive Upskilling',
          zh: '企业定制化内训与高管研修',
        },
        badge: {
          en: 'Workforce Upskilling',
          zh: '内训定制',
        },
        shortDesc: {
          en: 'Bespoke corporate workshops in leadership development, cross-cultural synergy, and business execution.',
          zh: '围绕企业发展战略与团队短板，定制开发领导力拓展、跨文化协同与高效业务执行力研修课程。',
        },
        description: {
          en: 'Tailored training modules co-developed with senior educators and industry veterans, focused on elevating practical workplace capabilities, team accountability, and strategic adaptability.',
          zh: '由南洋资深教研导师与业界实战专家联合授课，结合大量本土与跨国真实商战案例，助力管理层破局思维瓶颈，全面提升组织战斗力。',
        },
        deliverables: [
          { en: 'Pre-training enterprise training needs analysis (TNA)', zh: '培训前企业痛点诊断与培训需求评估（TNA）' },
          { en: 'Modular curriculum design with interactive case studies', zh: '模块化课程架构设计与情境演练案例' },
          { en: 'Flexible delivery: on-site at client office or NTG campus', zh: '灵活授课模式：企业上门内训或南洋校区研修' },
          { en: 'Post-training effectiveness evaluation & action plans', zh: '培训后转化效果评估与行动改进追踪' },
        ],
        icon: 'GraduationCap',
      },
      {
        id: 'bilingual-communication',
        order: '03',
        title: {
          en: 'Business Bilingual Fluency & Workplace Communications',
          zh: '商务双语沟通与跨文化实战培训',
        },
        badge: {
          en: 'Language & Etiquette',
          zh: '双语沟通',
        },
        shortDesc: {
          en: 'Business English and Mandarin coaching for multinational teams, executive presentations, and cross-border commercial deals.',
          zh: '专注于商务英语与商务华语实战应用，提升多文化背景员工的提案汇报、跨国谈判与客户沟通效能。',
        },
        description: {
          en: 'Singapore is Asia’s premier bilingual commerce hub. We equip corporate executives and cross-border teams with fluent oral presentation, precise business writing, negotiation terminology, and high-stakes communication etiquette.',
          zh: '新加坡作为连接东西方的核心商业枢纽，对员工的双语与跨文化交互能力要求极高。南洋多语种教研团队为企业量身定制高级商务沟通、商务信函与合同表达、跨国跨文化商务礼仪等专业实训。',
        },
        deliverables: [
          { en: 'Executive pitch & board-level presentation coaching', zh: '高管商务演讲、述职汇报与项目推介演练' },
          { en: 'Cross-border business contract & email correspondence', zh: '跨国商业合同解析与商务英文邮件精准书写' },
          { en: 'Professional Business Mandarin for non-native speakers', zh: '针对非华语母语员工的定制化商务华语快训' },
          { en: 'Singapore multicultural workplace etiquette workshops', zh: '新加坡多元文化职场沟通与跨文化协作规范' },
        ],
        icon: 'Globe2',
      },
      {
        id: 'art-wellness',
        order: '04',
        title: {
          en: 'Corporate Art, Calligraphy & Wellness Workshops',
          zh: '员工身心健康与企业艺术书法工作坊',
        },
        badge: {
          en: 'Wellness & Teambuilding',
          zh: '艺术团建',
        },
        shortDesc: {
          en: 'Mindful corporate team-building events in Chinese calligraphy, oil painting, watercolor, and mindfulness art therapy.',
          zh: '以传统书画、现代油画及水彩晕染为载体的沉浸式企业团建，有效缓解员工职场压力，凝聚团队向心力。',
        },
        description: {
          en: 'Combating corporate burnout through creative flow. Our fine arts faculty leads interactive teambuilding experiences where employees explore calligraphy brushwork, collaborative murals, and artistic mindfulness in a relaxing environment.',
          zh: '现代企业节奏紧凑，创意美育与书画静心具有独特的心理疏导与赋能效果。我们的国家级与资深美院导师带领员工静心体悟笔墨意趣、共创大型企业主题画作，融艺术熏陶与团队凝聚于一体。',
        },
        deliverables: [
          { en: 'Corporate calligraphy & seal carving team bonding', zh: '正统中国书法与印章篆刻传统文化体验团建' },
          { en: 'Collaborative giant canvas mural painting for teams', zh: '团队协同大型企业文化主题油画/画布共创' },
          { en: 'Stress-reduction art therapy & mindfulness sessions', zh: '职场减压艺术疗愈与专注力静心工作坊' },
          { en: 'All professional art materials & framed keepsakes included', zh: '提供全套高端艺术画材并为员工装裱留念' },
        ],
        icon: 'Palette',
      },
      {
        id: 'cognitive-agility',
        order: '05',
        title: {
          en: 'Cognitive Agility & Brain Intelligence for Executives',
          zh: '职场高效脑力与专注力提升研修',
        },
        badge: {
          en: 'Cognitive Optimization',
          zh: '脑力效能',
        },
        shortDesc: {
          en: 'Scientific memory optimization, Buzan Mind Mapping, and Schulte focus drills to enhance analytical decision-making speed.',
          zh: '运用博赞思维导图、舒尔特方格注意力训练及超强记忆法，全面优化职场人的信息处理速度与决策敏锐度。',
        },
        description: {
          en: 'Information overload impairs executive performance. Drawing from our acclaimed Brain Intelligence curriculum, we train corporate teams in structured visual thinking, rapid data retention, and sustained focus under pressure.',
          zh: '海量信息时代，注意力与结构化思考是企业核心竞争力。本课程提炼南洋人才全脑启发精粹，帮助职场精英掌握复杂信息脉络梳理、核心数据超强记忆与高强度工作下的深度专注技巧。',
        },
        deliverables: [
          { en: 'Buzan Mind Mapping for complex project brainstorming', zh: '博赞思维导图法在复杂项目分解与头脑风暴中的实战' },
          { en: 'Schulte Grid drills for sustained workplace focus', zh: '舒尔特方格高抗干扰度与专注力训练体系' },
          { en: 'Memory palace techniques for rapid data & pitch recall', zh: '快速记忆宫殿法在关键数据汇报与记忆中的应用' },
          { en: 'Executive mental agility & cognitive resilience toolkit', zh: '高管抗压认知韧性与敏捷决策思维工具箱' },
        ],
        icon: 'Brain',
      },
      {
        id: 'institutional-alliances',
        order: '06',
        title: {
          en: 'Institutional Alliances & Academic Consulting',
          zh: '院校产教融合与校企战略合作咨询',
        },
        badge: {
          en: 'Academic Alliances',
          zh: '产教融合',
        },
        shortDesc: {
          en: 'Facilitating corporate-school alliances, student internship programs, joint certifications, and Singapore EduTrust consulting.',
          zh: '搭建新加坡院校与企业的协同育人桥梁，协助设立企业实习基地、联合认证项目及私立教育合规咨询。',
        },
        description: {
          en: 'Bridging academia and commerce. We connect businesses with leading educational institutions like Nanyang Asia College for graduate talent pipelines, co-branded certificates, and private education regulatory compliance support.',
          zh: '依托在新加坡教育界深耕多年的行业声誉，我们协助企业对接本土与海外优质院校，建立产学研一体化实践基地，协助企业设计具备学术含金量的联合认证，并提供EduTrust教育信托合规辅导。',
        },
        deliverables: [
          { en: 'Corporate internship & graduate trainee program design', zh: '企业实习生管培生项目架构设计与定向招募' },
          { en: 'Joint academic-industry certification partnerships', zh: '院校-企业联合职业技能认证与学分衔接' },
          { en: 'Singapore CPE / EduTrust regulatory framework advisory', zh: '新加坡私立教育理事会（CPE）政策与EduTrust合规咨询' },
          { en: 'Cross-border educational delegation & forum hosting', zh: '跨国教育学术考察团接待与行业研讨会承办' },
        ],
        icon: 'Building2',
      },
    ] as CorporatePillar[],
  },

  advantages: [
    {
      title: { en: '25+ Years Verified Pedagogy', zh: '25+ 载深厚教育教研积淀' },
      desc: {
        en: 'A mature curriculum heritage founded by Dr. Teng Jiashu, tested across tens of thousands of learners and professionals.',
        zh: '传承滕家澍博士创立的严谨治学精神，历经数万学员与专业人士实践验证，体系成熟扎实。',
      },
      icon: 'ShieldCheck',
    },
    {
      title: { en: 'Singapore Institutional Standard', zh: '新加坡高标准合规与专业性' },
      desc: {
        en: 'Strict compliance with Singapore regulatory bodies, MOM frameworks, and EduTrust educational benchmarks.',
        zh: '严谨遵循新加坡相关政策、劳资政公平雇佣框架与私立教育高质标准，信誉可靠。',
      },
      icon: 'Award',
    },
    {
      title: { en: 'Cross-Disciplinary Synergy', zh: '跨学科复合赋能独特优势' },
      desc: {
        en: 'Seamlessly merging corporate professionalism with artistic creativity, multilingual agility, and brain science.',
        zh: '融合专业商务素养、艺术美学陶冶、多语种实战与全脑认知科学，提供不可替代的复合型培训方案。',
      },
      icon: 'Sparkles',
    },
    {
      title: { en: 'Customized & Measurable ROI', zh: '高契合度定制与可衡量成效' },
      desc: {
        en: 'Every corporate programme is designed to solve real operational bottlenecks with transparent outcome tracking.',
        zh: '紧扣企业实际业务痛点与员工成长诉求量身定制，提供清晰可衡量的培训转化与交付成果。',
      },
      icon: 'Target',
    },
  ] as CorporateAdvantage[],

  process: [
    {
      step: 'STEP 01',
      title: { en: 'Discovery & Needs Audit', zh: '深度调研与痛点诊断' },
      desc: {
        en: 'Understanding your enterprise objectives, team profile, operational hurdles, and budget parameters.',
        zh: '深入了解企业战略目标、团队构成特点、面临的业务瓶颈与预期预算。',
      },
    },
    {
      step: 'STEP 02',
      title: { en: 'Tailored Solution Architecture', zh: '方案定制与课程架构' },
      desc: {
        en: 'Curating custom modules, assigning lead faculty mentors, and providing detailed syllabus deliverables.',
        zh: '针对性匹配核心教研师资，输出详细的模块化实施大纲、排期表与预期产出。',
      },
    },
    {
      step: 'STEP 03',
      title: { en: 'Interactive Program Delivery', zh: '沉浸实施与互动交付' },
      desc: {
        en: 'High-engagement workshops delivered on-site at your premises, at our modern campus, or via hybrid format.',
        zh: '可安排企业上门培训、南洋校区实训或线上混合交付，注重实战演练与全员互动。',
      },
    },
    {
      step: 'STEP 04',
      title: { en: 'Outcomes Review & Sustained Support', zh: '成效复盘与持续赋能' },
      desc: {
        en: 'Delivering participant evaluation analytics, actionable growth roadmaps, and ongoing institutional alliance support.',
        zh: '提供学员反馈大数据分析与评估报告，量化成果交付，并建立长期合作赋能机制。',
      },
    },
  ] as CorporateEngagementStep[],

  cta: {
    badge: {
      en: 'Enterprise Consultation Hotline',
      zh: '企业定制咨询专线 · 快速响应',
    },
    title: {
      en: 'Empower Your Organization with Nanyang Talent Group',
      zh: '携手南洋人才集团 · 全面激发企业组织潜能',
    },
    subtitle: {
      en: 'Speak directly with our Director of Corporate Services to discuss bespoke training programs, talent recruitment, or strategic institutional partnerships.',
      zh: '欢迎致电或通过 WhatsApp 联络企业服务总监，我们将在24小时内为您出具专业诊断与定制化合作建议书。',
    },
    whatsappText: {
      en: 'Corporate WhatsApp (+65 9004 8768)',
      zh: '企业微信/WhatsApp (+65 9004 8768)',
    },
    officeText: {
      en: 'Office Telephone: +65 6899 0828',
      zh: '总部办公热线: +65 6899 0828',
    },
    formText: {
      en: 'Request Corporate Proposal',
      zh: '在线申请企业合作方案',
    },
  },
};
