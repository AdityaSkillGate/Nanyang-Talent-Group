import { LocalizedString } from './types';

export interface RecruitmentService {
  id: string;
  order: string;
  title: LocalizedString;
  shortDesc: LocalizedString;
  description: LocalizedString;
  deliverables: LocalizedString[];
  icon: string;
}

export interface PartnerInstitution {
  name: LocalizedString;
  shortName: LocalizedString;
  role: LocalizedString;
  edutrust: LocalizedString;
  description: LocalizedString;
  url: string;
  logo: string;
  badge: LocalizedString;
}

export const recruitmentContent = {
  hero: {
    badge: {
      en: 'Official Educational Representation',
      zh: '官方教育代表 · 专业留学招生服务',
    },
    title: {
      en: 'Student Recruitment & Education Services',
      zh: '新加坡国际学生招生与全方位留学服务',
    },
    subtitle: {
      en: 'Education agents provide student services by acting as official representatives for schools and universities to guide applicants through admissions, visas, and arrival in Singapore.',
      zh: '作为新加坡优质院校的官方指定招生代表，南洋人才集团为国际学生与家庭提供从择校规划、入学申请、学生准证（ICA）办理到抵星安顿的全流程专业服务。',
    },
    image: '/assets/recruitment/student-recruitment-counseling.jpg',
  },

  partnerSection: {
    badge: {
      en: 'Official Partner Institutions',
      zh: '官方合作院校联盟',
    },
    title: {
      en: 'Premier Educational Alliances in Singapore',
      zh: '新加坡权威合作院校网络',
    },
    subtitle: {
      en: 'Direct institutional partnerships guaranteeing authentic admissions pathways and recognized Singapore qualifications.',
      zh: '与新加坡顶尖学府及权威私立教育机构建立深度招生合作，保障录取通道正规合规。',
    },
    futureNote: {
      en: 'Additional top-tier universities and institutions are being established and will be announced soon.',
      zh: '更多合作名校与合作项目正在积极拓展推进中，敬请期待后续官方公布。',
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
          en: 'Strategic Higher Education & AEIS Partner',
          zh: '战略合作院校 · AEIS与高等教育基地',
        },
        edutrust: {
          en: '4-Year EduTrust Certified by CPE / SSG',
          zh: '新加坡私立教育理事会（CPE）4年EduTrust教育信托认证',
        },
        description: {
          en: 'Founded by Dr. Teng Jiashu, Nanyang Asia College has become a preferred training institute for AEIS students and academic pathway learners in Singapore, laying a solid cornerstone for lifelong academic success.',
          zh: '由滕家澍博士创立，南洋亚洲学院现已成为广受新加坡AEIS国际中小学备考家长信赖的优质学府，获得新加坡私立教育理事会4年EduTrust权威认证，教学成果卓越。',
        },
        url: 'https://www.nycollege.edu.sg/',
        logo: '/assets/alliance/nanyang-asia-college.png',
        badge: {
          en: 'Official Partner',
          zh: '官方指定合作伙伴',
        },
      },
    ] as PartnerInstitution[],
  },

  keyServicesSection: {
    badge: {
      en: 'Core Representation Services',
      zh: '四大核心服务体系',
    },
    title: {
      en: 'Key Services Provided by Student Agents',
      zh: '专业招生代表核心支持服务',
    },
    subtitle: {
      en: 'Comprehensive, structured support from first consultation through campus graduation.',
      zh: '严格遵循新加坡私立教育法规，为您提供透明、细致、可信赖的一站式留学保障。',
    },
    services: [
      {
        id: 'course-counseling',
        order: '01',
        title: {
          en: 'Course & Institution Counseling',
          zh: '课程与院校专业咨询',
        },
        shortDesc: {
          en: 'Helping students select the right program, school, or university based on their academic background and career goals.',
          zh: '根据学员的学业背景、特长优势与未来职业规划，精准匹配最适合的新加坡院校与专业项目。',
        },
        description: {
          en: 'Our certified education advisors conduct comprehensive profile assessments, evaluating academic transcripts, language proficiency, and long-term career aspirations to chart optimal study pathways in Singapore.',
          zh: '由资深教育顾问针对学员过往成绩、语言基础及升学期望进行多维评估，为学员量身制定循序渐进的个性化升学与发展方案。',
        },
        deliverables: [
          { en: 'One-on-one academic profile assessment', zh: '一对一学术背景全面诊断' },
          { en: 'Institution and course curriculum comparison', zh: '新加坡多所院校专业横向对比分析' },
          { en: 'Admission prerequisites and intake timing advice', zh: '入学门槛、开学批次与时间轴统筹' },
          { en: 'Career roadmap and progression alignment', zh: '升学通路与未来就业前景匹配' },
        ],
        icon: 'Compass',
      },
      {
        id: 'application-assistance',
        order: '02',
        title: {
          en: 'Application Assistance',
          zh: '全程申请材料指导与递交',
        },
        shortDesc: {
          en: 'Reviewing and submitting enrollment forms, ensuring proper documentation, and explaining standard student contracts.',
          zh: '审核并递交院校入学申请表格，确保公证材料合规完整，并协助解读新加坡标准学生合约（Student Contract）。',
        },
        description: {
          en: 'We meticulously verify academic certifications, coordinate certified translations and notarizations, and assist students and parents in reviewing statutory CPE standard student contracts to safeguard legal rights.',
          zh: '严格按照新加坡教育部与私立教育理事会（CPE）规范，逐一核验毕业证件、公证书及成绩单，并逐条为家长解读学费保障计划（FPS）与标准合同条款。',
        },
        deliverables: [
          { en: 'Document checklist and notarization guidance', zh: '申请材料清单审核与公证指导' },
          { en: 'Official direct submission to partner institutions', zh: '直接向合作院校递交官方申请' },
          { en: 'Standard PEI-Student Contract clause review', zh: '标准学生合约（CPE Contract）逐条解读' },
          { en: 'Fast-track Letter of Acceptance (LOA) tracking', zh: '录取通知书（LOA）跟进与发放确认' },
        ],
        icon: 'FileCheck',
      },
      {
        id: 'visa-processing',
        order: '03',
        title: {
          en: 'Visa & Pass Processing',
          zh: '学生准证与移民局（ICA）申报',
        },
        shortDesc: {
          en: "Assisting with Student's Pass applications, ICA requirements, and necessary appeals or documentation.",
          zh: '全程指导新加坡移民与关卡局（ICA）学生准证（Student’s Pass）电子申报，合规准备资金证明与必要申诉文件。',
        },
        description: {
          en: "Navigating Singapore's Immigration & Checkpoints Authority (ICA) Solar+ system requires precision. We guide applicants through financial proof verification, medical checkup scheduling, and pass endorsements.",
          zh: '熟稔新加坡移民局 SOLAR 系统申报流程，精准核验担保金证明与直系亲属材料，协助预约体检并指导最终换取正式学生准证。',
        },
        deliverables: [
          { en: "ICA SOLAR+ Student's Pass electronic submission", zh: '移民局 SOLAR+ 系统电子准证规范提交' },
          { en: 'Financial declaration and affidavit review', zh: '留学资金担保与公证材料合规核查' },
          { en: 'In-Principle Approval (IPA) letter issuance support', zh: '入境原则批准函（IPA Letter）快速领取' },
          { en: 'Singapore biometric appointment scheduling', zh: '抵星后 ICA 预约指纹录取与领卡陪同指导' },
        ],
        icon: 'ShieldCheck',
      },
      {
        id: 'arrival-support',
        order: '04',
        title: {
          en: 'Pre-Departure & Arrival Support',
          zh: '行前指导、住宿安排与抵星安顿',
        },
        shortDesc: {
          en: 'Providing details on living costs, accommodation arrangements, homestays, and orientation guidance.',
          zh: '提供新加坡生活成本指引、学生宿舍与优质寄宿家庭（Homestay）安置，协助机场接机与新生入学报到。',
        },
        description: {
          en: 'Moving to a new country is a pivotal life step. We provide realistic cost-of-living breakdowns, match students with vetted accommodation, coordinate airport reception, and host settling-in orientations.',
          zh: '跨国求学是家庭的重大托付。我们为学员与陪读家长提供细致的行前行囊清单、严选合法学生公寓与寄宿家庭，提供全方位抵星过渡支持。',
        },
        deliverables: [
          { en: 'Singapore cost-of-living budget breakdown', zh: '新加坡生活消费与学期预算详尽指南' },
          { en: 'Vetted student accommodation & homestay matching', zh: '严选安全学生公寓与优质寄宿家庭' },
          { en: 'Airport transfer coordination and SIM/banking setup', zh: '机场接机协助、新加坡银行开户与电话卡办理' },
          { en: 'Campus registration and city orientation briefing', zh: '校园注册陪同与新加坡城市生活适应指导' },
        ],
        icon: 'PlaneTakeoff',
      },
    ] as RecruitmentService[],
  },

  cta: {
    badge: {
      en: 'Free Initial Consultation',
      zh: '免费先期评估与咨询',
    },
    title: {
      en: 'Start Your Singapore Study Journey Today',
      zh: '开启您的高品质新加坡求学之路',
    },
    subtitle: {
      en: 'Connect directly with our admissions and recruitment specialists via WhatsApp or submit an enquiry to receive customized course options.',
      zh: '欢迎通过 WhatsApp 直接联络招生代表，或在线提交意向，顾问团队将在第一时间为您量身定制升学与留学方案。',
    },
    whatsappText: {
      en: 'Inquire on WhatsApp (+65 9004 8768)',
      zh: 'WhatsApp 咨询 (+65 9004 8768)',
    },
    formText: {
      en: 'Submit Online Study Enquiry',
      zh: '提交在线留学咨询表单',
    },
  },
};
