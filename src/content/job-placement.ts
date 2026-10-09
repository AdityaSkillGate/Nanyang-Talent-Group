import { LocalizedString } from './types';

export interface PlacementService {
  id: string;
  order: string;
  title: LocalizedString;
  shortDesc: LocalizedString;
  description: LocalizedString;
  deliverables: LocalizedString[];
  icon: string;
}

export interface PartnerAlliance {
  name: LocalizedString;
  shortName: LocalizedString;
  role: LocalizedString;
  compliance: LocalizedString;
  description: LocalizedString;
  url: string;
  logo: string;
  badge: LocalizedString;
}

export interface CandidateCategory {
  title: LocalizedString;
  target: LocalizedString;
  focus: LocalizedString;
  icon: string;
}

export interface PlacementStep {
  step: string;
  title: LocalizedString;
  desc: LocalizedString;
}

export const jobPlacementContent = {
  hero: {
    badge: {
      en: 'Singapore Career Advisory & Placement',
      zh: '新加坡专业人才安置 · 权威职场推荐',
    },
    title: {
      en: 'Professional Job Placement & Career Services',
      zh: '新加坡专业人才就业安置与求职发展服务',
    },
    subtitle: {
      en: 'Connecting skilled candidates, international graduates, and working professionals with reputable Singapore employers and industry leaders across commerce, education, creative industries, and technology.',
      zh: '依托新加坡深厚行业资源与企业网络，南洋人才集团为毕业生、专业人才及跨国求职者提供职业咨询、简历优化、精准岗位推荐与工作准证政策指引的一站式就业安置服务。',
    },
    image: '/assets/recruitment/student-recruitment-counseling.jpg',
    stats: [
      {
        value: '94%',
        label: { en: 'Interview Shortlist Rate', zh: '面试推荐入选率' },
      },
      {
        value: '100+',
        label: { en: 'Singapore Enterprise Partners', zh: '新加坡合作雇主企业' },
      },
      {
        value: '2-4 Wks',
        label: { en: 'Average Placement Timeline', zh: '平均岗位匹配周期' },
      },
      {
        value: '100%',
        label: { en: 'TAFEP & MOM Fair Hiring Compliant', zh: '人力部与公平雇佣守则合规' },
      },
    ],
  },

  partnerSection: {
    badge: {
      en: 'Strategic Employer & Academic Alliances',
      zh: '官方企业雇主与学术合作网络',
    },
    title: {
      en: 'Premier Enterprise & Institutional Partners in Singapore',
      zh: '新加坡权威雇主联盟与产教融合网络',
    },
    subtitle: {
      en: 'Direct collaboration with verified Singapore corporations, educational academies, and commercial enterprises ensuring authentic career pathways and career progression.',
      zh: '与新加坡各行业优质企业、私立学府与跨国机构深度协同，提供规范、高效、透明的人才输送与就业安置通道。',
    },
    futureNote: {
      en: 'Additional multinational corporate partners and SME employment channels are onboarded continuously.',
      zh: '更多新加坡跨国企业与行业领军雇主合作通道正在持续拓展接入中。',
    },
    partners: [
      {
        name: {
          en: 'Nanyang Asia College',
          zh: '南洋亚洲学院',
        },
        shortName: {
          en: 'NYC Singapore',
          zh: '南洋亚院',
        },
        role: {
          en: 'Strategic Educational & Career Pathway Partner',
          zh: '战略合作院校 · 职业赋能与人才联合培养基地',
        },
        compliance: {
          en: '4-Year EduTrust Certified by CPE / SSG',
          zh: '新加坡私立教育理事会（CPE）4年EduTrust教育信托认证',
        },
        description: {
          en: 'Founded by Dr. Teng Jiashu, Nanyang Asia College collaborates with Nanyang Talent Group in curriculum design, business language mastery, and career readiness certifications for Singapore workforce integration.',
          zh: '由滕家澍博士创立，南洋亚洲学院荣获新加坡私立教育理事会4年EduTrust权威认证，携手南洋人才集团开展职场技能提升、商务语言培训与国际人才就业接轨实训。',
        },
        url: 'https://www.nycollege.edu.sg/',
        logo: '/assets/alliance/nanyang-asia-college.png',
        badge: {
          en: 'Strategic Academic Partner',
          zh: '战略合作院校',
        },
      },
    ] as PartnerAlliance[],
  },

  keyServicesSection: {
    badge: {
      en: 'Core Placement Pillars',
      zh: '四大核心安置服务体系',
    },
    title: {
      en: 'Key Job Placement & Career Acceleration Services',
      zh: '专业人才就业安置核心支持服务',
    },
    subtitle: {
      en: 'End-to-end professional support from initial competency profiling through official onboarding and career probation.',
      zh: '从初期职业能力诊断、简历优化、高薪岗位直推，到工作准证指引与入职融入，全周期护航您的职场发展。',
    },
    services: [
      {
        id: 'career-profiling',
        order: '01',
        title: {
          en: 'Career Profiling & Skills Matching',
          zh: '职业规划与人才画像精准评估',
        },
        shortDesc: {
          en: 'Evaluating academic background, technical abilities, and bilingual strengths to match high-demand Singapore job roles.',
          zh: '根据候选人学术背景、双语能力与专业技能，深度匹配新加坡本地高景气行业与优质岗位。',
        },
        description: {
          en: 'Our experienced career consultants conduct rigorous 1-on-1 profile diagnostics, analyzing your educational background, core competencies, language fluency, and career aspirations against real-time Singapore Ministry of Manpower (MOM) hiring trends.',
          zh: '由资深人力资源顾问针对求职者过往经历、技能长项与薪酬期望开展深度诊断，结合新加坡人力部就业紧缺清单，量身定制最具竞争力的职业赛道与提升建议。',
        },
        deliverables: [
          { en: 'One-on-one professional competency assessment', zh: '一对一职业能力与竞争力全方位诊断' },
          { en: 'Singapore industry demand & salary benchmarking', zh: '新加坡行业薪酬水平与岗位供需分析' },
          { en: 'Target job roles & market positioning roadmap', zh: '目标岗位定位与职业晋升发展路径规划' },
          { en: 'Skills gap identification & upskilling recommendations', zh: '技能差距剖析与针对性专业技能强化建议' },
        ],
        icon: 'Compass',
      },
      {
        id: 'resume-optimization',
        order: '02',
        title: {
          en: 'Bilingual Resume & Portfolio Optimization',
          zh: '双语简历精修与作品集指导',
        },
        shortDesc: {
          en: 'Refining resumes and portfolios to Singapore corporate HR standards, maximizing ATS compatibility and recruiter engagement.',
          zh: '按照新加坡雇主与HR专业审美标准重塑双语简历，优化ATS招聘系统关键词，精修专业作品集。',
        },
        description: {
          en: 'A Singapore-standard CV requires clear achievement metrics, concise language, and relevant industry keywords. We optimize your bilingual English/Chinese resume and curate specialized portfolios for education, design, and business roles.',
          zh: '新加坡跨国企业与本土知名雇主对简历结构、量化成果及格式规范有着严苛标准。我们为候选人提供中英双语简历精细打磨，并针对教育、艺术、管理等特定岗位定制高水准作品集。',
        },
        deliverables: [
          { en: 'Singapore corporate-standard CV restructuring', zh: '符合新加坡外企标准的简历结构重塑' },
          { en: 'ATS (Applicant Tracking System) keyword tuning', zh: '企业招聘管理系统（ATS）关键词算法优化' },
          { en: 'Portfolio curation for educators and creative roles', zh: '针对教育师资与艺术设计类岗位的作品集精编' },
          { en: 'Personalized cover letter & executive summary draft', zh: '量身定制专业求职信与职业履历亮点提炼' },
        ],
        icon: 'FileCheck',
      },
      {
        id: 'enterprise-referral',
        order: '03',
        title: {
          en: 'Direct Enterprise Referral & Interview Coaching',
          zh: '企业岗位精准内推与模拟面试辅导',
        },
        shortDesc: {
          en: 'Direct submission to hiring managers and intensive mock interviews with experienced industry mentors.',
          zh: '绕过常规简历池直接内推至企业决策层与HR主管，资深面试官一对一实战模拟与话术指导。',
        },
        description: {
          en: 'Leveraging our extensive business network, we recommend shortlisted candidates directly to HR decision-makers. Before each interview, we conduct tailored mock sessions covering behavioral, technical, and situational scenarios.',
          zh: '依托南洋人才集团在新加坡政商界与教育界的多年资源积淀，为优秀候选人建立绿色内推通道；并在面试前提供针对目标企业文化、高频业务考核题及薪酬谈判的一对一模拟实战。',
        },
        deliverables: [
          { en: 'Priority direct referral to partner enterprises', zh: '直通合作企业HR与业务部门负责人的优先内推' },
          { en: 'Competency-based & behavioral mock interview drills', zh: '行为面试法（STAR）与专业情景模拟演练' },
          { en: 'Cross-cultural workplace communication etiquette', zh: '新加坡多元职场文化与跨文化沟通礼仪辅导' },
          { en: 'Offer evaluation & compensation negotiation advisory', zh: '录用Offer条款核算与薪资福利谈判策略建议' },
        ],
        icon: 'ShieldCheck',
      },
      {
        id: 'work-pass-onboarding',
        order: '04',
        title: {
          en: 'MOM Work Pass Guidance & Onboarding Support',
          zh: '工作准证政策指引与入职融入保障',
        },
        shortDesc: {
          en: 'Expert orientation on Singapore Ministry of Manpower (MOM) pass regulations and smooth workplace transition.',
          zh: '熟稔新加坡人力部（MOM）最新准证政策（EP/SP/WP及COMPASS计分），协助合规准备并助力平稳入职。',
        },
        description: {
          en: 'Singapore foreign workforce regulations evolve regularly. We guide candidates and employers through MOM criteria, COMPASS framework evaluation, educational credential verification, and first-90-day onboarding transition.',
          zh: '新加坡外籍雇员准证审核体系严密。我们协助求职者厘清人力部各项准证申报门槛、COMPASS互补专才评估框架自测、学位公证认证要求，并在入职后提供持续的职场发展跟进。',
        },
        deliverables: [
          { en: 'MOM Work Pass (EP / S Pass) criteria pre-assessment', zh: '新加坡工作准证（EP/S Pass）准入条件前置评估' },
          { en: 'COMPASS points calculator & qualification verification', zh: 'COMPASS互补专才评估框架计分预审与学历认证指导' },
          { en: 'TAFEP Fair Consideration Framework compliance notice', zh: '新加坡劳资政公平雇佣框架（TAFEP）合规告知' },
          { en: 'First-90-day workplace transition & mentorship check-in', zh: '入职前90天职场适应跟进与长效导师发展关怀' },
        ],
        icon: 'PlaneTakeoff',
      },
    ] as PlacementService[],
  },

  candidateCategories: [
    {
      title: { en: 'Graduates & Alumni', zh: '应届高校毕业生与留学生' },
      target: { en: 'Polytechnic & University Graduates', zh: '新加坡公立/私立学府及海外归国毕业生' },
      focus: { en: 'First-job career roadmap, entry-level placement, resume building, and work pass initiation.', zh: '初入职场定位规划、校招内推、简历提炼与新加坡首份全职工作安置。' },
      icon: 'GraduationCap',
    },
    {
      title: { en: 'Mid-Career Professionals', zh: '职场跃迁与中高阶专业人才' },
      target: { en: 'Experienced Executives & Specialists', zh: '拥有3-10年以上经验的资深职场人与转型人士' },
      focus: { en: 'Executive search, role transition, senior compensation benchmarking, and leadership matching.', zh: '高阶岗位定向猎聘、跨行业转型辅导、薪酬包谈判与管理层岗位对接。' },
      icon: 'Award',
    },
    {
      title: { en: 'Bilingual Educators & Creatives', zh: '双语教育师资与文化艺术人才' },
      target: { en: 'Teachers, Artists & Cultural Specialists', zh: '语言教师、艺术导师、书画传承人与创意工作者' },
      focus: { en: 'Placement into top private academies, enrichment centres, and international institutions.', zh: '对接新加坡知名国际学校、品牌补习中心、艺术院校与文化创意机构。' },
      icon: 'Palette',
    },
    {
      title: { en: 'International Candidates', zh: '意向赴星跨国优秀人才' },
      target: { en: 'Skilled Foreign Professionals', zh: '有意在新加坡发展长期职业生涯的海外各界菁英' },
      focus: { en: 'Singapore MOM pass navigation, overseas interview coordination, and relocation onboarding.', zh: '跨国线上面试统筹、MOM工作准证合规指引与抵星安顿职场过渡。' },
      icon: 'Globe2',
    },
  ] as CandidateCategory[],

  workflow: [
    {
      step: 'STEP 01',
      title: { en: 'Initial Profile Intake', zh: '初访咨询与档案建立' },
      desc: {
        en: 'Comprehensive intake interview evaluating education, work history, language fluency, and target salary.',
        zh: '专业顾问一对一深入沟通，采集学历履历、专业强项、薪资预期并建立求职档案。',
      },
    },
    {
      step: 'STEP 02',
      title: { en: 'Competency Audit & CV Polish', zh: '能力评估与简历精修' },
      desc: {
        en: 'Detailed review against Singapore standards, restructuring CV for ATS optimization and recruiter impact.',
        zh: '对标新加坡雇主招聘标准，优化中英文简历版式，提炼量化亮点与核心竞争力。',
      },
    },
    {
      step: 'STEP 03',
      title: { en: 'Enterprise Matching & Referral', zh: '企业精准匹配与直推' },
      desc: {
        en: 'Matching candidate profile to verified partner employers and submitting through direct referral channels.',
        zh: '依托庞大企业资源库精准匹配岗位，绕过公开海选简历池直接呈送用人部门负责人。',
      },
    },
    {
      step: 'STEP 04',
      title: { en: 'Mock Interview Coaching', zh: '全真模拟面试与强化' },
      desc: {
        en: 'Intensive practice covering STAR behavioral methods, technical depth, and Singapore workplace dynamics.',
        zh: '进行一对一多轮全真模拟面试，提供针对性回答话术、跨文化仪态与心理辅导。',
      },
    },
    {
      step: 'STEP 05',
      title: { en: 'Offer Advisory & Onboarding', zh: 'Offer评估与入职落地' },
      desc: {
        en: 'Reviewing compensation terms, guiding MOM work pass procedures, and monitoring smooth 90-day transition.',
        zh: '指导审阅劳动合同条款，协同企业办理工作准证（EP/SP），提供前90天入职关怀。',
      },
    },
  ] as PlacementStep[],

  cta: {
    badge: {
      en: 'Confidential Career Consultation',
      zh: '免费先期职业咨询 · 严格隐私保护',
    },
    title: {
      en: 'Accelerate Your Singapore Career with Nanyang Talent Group',
      zh: '开启您在新加坡的高品质职业发展新征程',
    },
    subtitle: {
      en: 'Connect directly with our senior placement specialists via WhatsApp or submit your resume for confidential evaluation and curated employer referrals.',
      zh: '欢迎通过 WhatsApp 直接联络高级职业顾问，或在线提交求职简历，我们将在第一时间为您提供专业评估与高契合度岗位推荐。',
    },
    whatsappText: {
      en: 'Chat with Career Advisor (+65 9004 8768)',
      zh: 'WhatsApp 职业顾问 (+65 9004 8768)',
    },
    formText: {
      en: 'Submit Resume & Job Profile',
      zh: '在线提交求职简历与需求',
    },
  },
};

// Backward-compatible alias for existing imports
export const recruitmentContent = jobPlacementContent;
export type RecruitmentService = PlacementService;
export type PartnerInstitution = PartnerAlliance;
