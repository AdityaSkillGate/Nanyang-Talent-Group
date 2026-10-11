import { LocalizedString } from './types';

export interface CorporatePillar {
  id: string;
  order: string;
  title: LocalizedString;
  shortDesc: LocalizedString;
  description: LocalizedString;
  image: string;
  badge: LocalizedString;
  icon: string;
  category: 'incorporation' | 'immigration';
  processingTime: LocalizedString;
  targetAudience: LocalizedString;
  deliverables: LocalizedString[];
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
      en: 'ACRA & MOM Registered Practices · Singapore',
      zh: '新加坡 ACRA & MOM 官方合规服务体系',
    },
    title: {
      en: 'Business Incorporation & Immigration Services',
      zh: '新加坡企业注册与全方位移民服务',
    },
    subtitle: {
      en: 'One-stop professional solutions for Singapore company registration, corporate secretarial compliance, Employment Pass (EP/S Pass), EntrePass, Permanent Residency (PR), family passes, and personalized immigration advisory.',
      zh: '南洋人才集团依托二十余载本土深厚资源，为全球创业者、跨国企业与高净值人士提供新加坡公司注册、法定秘书合规、工作准证（EP/SP/EntrePass）、永久居民（PR）规划及家属签证一站式专业服务。',
    },
    image: '/assets/corporate/corporate-services-boardroom.jpg',
    stats: [
      {
        value: '25+',
        label: { en: 'Years Institutional Heritage', zh: '载深厚本土办学与专业积淀' },
      },
      {
        value: '100%',
        label: { en: 'ACRA & MOM Compliance Rate', zh: '官方标准合规率与严谨审核' },
      },
      {
        value: '7',
        label: { en: 'Core Advisory Services', zh: '大核心商业与签证服务模块' },
      },
      {
        value: '4.9/5',
        label: { en: 'Client Trust & Satisfaction', zh: '客户综合好评与长期信赖' },
      },
    ],
  },

  pillarsSection: {
    badge: {
      en: 'Complete Solutions',
      zh: '七大核心专业服务',
    },
    title: {
      en: 'Explore Business & Immigration Services',
      zh: '新加坡商业设立与全球移居服务体系',
    },
    subtitle: {
      en: 'Simple, transparent, and compliant pathways tailored for global founders, corporate executives, and international families.',
      zh: '流程清晰透明、材料高效审核，为您量身定制合规的新加坡落地与长期定居方案。',
    },
    pillars: [
      {
        id: 'company-registration',
        order: '01',
        title: {
          en: 'Company Registration & Incorporation',
          zh: '公司注册与设立',
        },
        badge: {
          en: 'ACRA Fast-Track',
          zh: 'ACRA 官方快线',
        },
        shortDesc: {
          en: 'Fast, compliant Singapore Private Limited (Pte Ltd) company incorporation with ACRA in 1 to 2 business days.',
          zh: '1至2个工作日内快速完成新加坡私人有限公司（Pte Ltd）在会计与企业管制局（ACRA）的官方注册。',
        },
        description: {
          en: 'Setting up a company in Singapore unlocks global prestige, 100% foreign ownership, and low corporate tax (8.5% to 17%). We handle the entire end-to-end incorporation digitally.',
          zh: '在新加坡设立企业可享国际商业公信力、低企业所得税优惠（8.5% - 17%）及100%外资控股权。我们全程在线对接新加坡ACRA，协助您零差错快速设立。',
        },
        image: '/assets/corporate/company-registration.jpg',
        category: 'incorporation',
        processingTime: {
          en: '1 - 2 Business Days',
          zh: '1 - 2 个工作日',
        },
        targetAudience: {
          en: 'Global Entrepreneurs, Foreign Investors, SMEs',
          zh: '出海创业者、海外投资者、跨国中小企业',
        },
        deliverables: [
          { en: 'ACRA company name reservation & registration approval', zh: 'ACRA 公司名称核准与正式注册获批' },
          { en: 'Official Certificate of Incorporation & BizFile profile', zh: '官方注册纸（BizFile）与企业法定编号（UEN）' },
          { en: 'Company Constitution & Shareholder Certificates', zh: '公司章程（Constitution）与股东名册出具' },
          { en: 'Assistance with premier local corporate bank accounts', zh: '协助开立新加坡三大本地银行商业账户' },
        ],
        icon: 'Building2',
      },
      {
        id: 'business-setup',
        order: '02',
        title: {
          en: 'Business Setup & Corporate Services',
          zh: '商业运营与企业秘书服务',
        },
        badge: {
          en: 'Corporate Governance',
          zh: '法定秘书与合规',
        },
        shortDesc: {
          en: 'Qualified Singapore named corporate secretary, prestige CBD registered address, and ongoing statutory compliance.',
          zh: '提供新加坡法定公司秘书任命、CBD核心区注册商业地址及全年公司法合规维护。',
        },
        description: {
          en: 'Under Singapore law, every Pte Ltd must appoint a qualified local resident secretary. We maintain statutory registers, prepare AGMs, file annual returns, and safeguard corporate standing.',
          zh: '根据新加坡《公司法》，公司成立6个月内须委任一名合格常住法定秘书。我们妥善保管法定登记册、起草董事决议、呈报年度申报表（Annual Return），确保全流程合法合规。',
        },
        image: '/assets/corporate/business-setup.jpg',
        category: 'incorporation',
        processingTime: {
          en: 'Annual Ongoing Service',
          zh: '即时生效并全年持续维护',
        },
        targetAudience: {
          en: 'All Singapore Pte Ltd Companies & Foreign Subsidiaries',
          zh: '所有新加坡注册公司与外资分支机构',
        },
        deliverables: [
          { en: 'Named Singapore Corporate Secretary service for 12 months', zh: '提供12个月常住法定商业秘书职位委任' },
          { en: 'Prestigious Singapore CBD commercial registered address', zh: '提供新加坡核心商业区（CBD）合规法定注册地址' },
          { en: 'Annual General Meeting (AGM) prep & ACRA Annual Return filing', zh: '准备年度股东大会（AGM）决议并呈报ACRA年审' },
          { en: 'Qualified Local Nominee Director service upon request', zh: '按需提供符合官方资质的本地挂名董事合规服务' },
        ],
        icon: 'Briefcase',
      },
      {
        id: 'employment-pass',
        order: '03',
        title: {
          en: 'Employment Pass (EP) & S Pass',
          zh: '就业准证 (EP) 与 S Pass',
        },
        badge: {
          en: 'MOM COMPASS System',
          zh: 'MOM 积分制精准评估',
        },
        shortDesc: {
          en: 'Strategic work pass applications for company directors, managers, and specialized foreign talent under the MOM COMPASS framework.',
          zh: '针对企业董事、管理高管及外籍专业技术人才，依据人力部（MOM）COMPASS积分制标准提供精准评估与准证申报。',
        },
        description: {
          en: 'The Employment Pass allows foreign professionals and executives to live and work in Singapore. We audit candidate profiles, optimize salary benchmarks, and maximize COMPASS pass points.',
          zh: '就业准证（EP）是外籍精英管理层在新加坡合法工作的首要工作签证。我们深入解读人力部最新指标，精准梳理薪资门槛与积分加分项，保障申请高获批率。',
        },
        image: '/assets/corporate/employment-pass.jpg',
        category: 'immigration',
        processingTime: {
          en: '3 - 8 Weeks',
          zh: '3 - 8 周（视人力部审核周期）',
        },
        targetAudience: {
          en: 'C-Suite Executives, Key Managers, Skilled Professionals',
          zh: '企业高管、核心技术骨干、外派管理人员',
        },
        deliverables: [
          { en: 'Pre-submission MOM COMPASS framework points audit', zh: '递交前 MOM COMPASS 积分全面测评与优化' },
          { en: 'Degree & credential background verification support', zh: '官方认可第三方学历认证核查指导与对接' },
          { en: 'Complete MOM dossier drafting and e-submission', zh: '全套官方申请材料撰写、雇主推荐信与在线呈报' },
          { en: 'IPA card issuance, biometric registration & renewal tracking', zh: '原则性批准函（IPA）获取、生物录入及续签跟进' },
        ],
        icon: 'FileCheck',
      },
      {
        id: 'entrepass-work-pass',
        order: '04',
        title: {
          en: 'EntrePass & Work Pass Applications',
          zh: '创业准证与工作签证申请',
        },
        badge: {
          en: 'Founders & Innovators',
          zh: '创业家与科技创新',
        },
        shortDesc: {
          en: 'Tailored visa pathway for eligible foreign entrepreneurs and innovators launching scalable venture-backed businesses in Singapore.',
          zh: '为计划在新加坡创办创新型、高成长性科技或风险投资初创企业的全球创业家打造的专项工作签证通道。',
        },
        description: {
          en: 'EntrePass has no strict minimum salary requirement and allows founders to relocate before or after company formation. We assist with Singapore-standard Business Plans and innovation criteria matching.',
          zh: '创业准证（EntrePass）无硬性薪资限制，允许创业者在公司成立前后移居新加坡。我们协助撰写符合官方严谨标准的商业计划书，对接创投或知识产权资质，加速获准。',
        },
        image: '/assets/corporate/entrepass.jpg',
        category: 'immigration',
        processingTime: {
          en: '8 - 12 Weeks',
          zh: '8 - 12 周',
        },
        targetAudience: {
          en: 'Tech Founders, Venture-backed Innovators, Serial Entrepreneurs',
          zh: '科技创始人、天使/风投被投团队、连续创业者',
        },
        deliverables: [
          { en: 'Professional 10-page Singapore-standard Business Plan drafting', zh: '量身定制全套符合官方标准的商业计划书（BP）' },
          { en: 'Innovation criteria alignment (funding, IP, or incubator partnership)', zh: '对接官方认可知识产权、风投资金或创投孵化资质' },
          { en: 'Enterprise Singapore (ESG) & MOM liaison', zh: '协助对接新加坡企发局（ESG）与人力部审批流程' },
          { en: 'Annual milestone renewal strategy and local hiring roadmap', zh: '首年及次年考核达标规划与本地雇佣路线指导' },
        ],
        icon: 'Rocket',
      },
      {
        id: 'permanent-residency',
        order: '05',
        title: {
          en: 'Permanent Residency (PR) Services',
          zh: '永久居民 (PR) 申请规划',
        },
        badge: {
          en: 'ICA Long-Term Settlement',
          zh: 'ICA 长期定居规划',
        },
        shortDesc: {
          en: 'Comprehensive Singapore PR profiling, documentary enhancement, and official ICA submission for professionals and families.',
          zh: '针对在籍就业人士及高净值家庭，提供新加坡永久居民（PR）深度背景挖掘、材料公证美化与ICA系统官方申报。',
        },
        description: {
          en: 'Singapore PR status unlocks subsidized healthcare, public housing access, child education priority, and CPF retirement security. We highlight your unique economic and community contributions.',
          zh: '获得新加坡PR身份可享受优质医疗补贴、子女优先入读政府公立学校、中央公积金（CPF）及购房税费减免。我们深度梳理申请人家庭背景与社会融合度，大幅增强获批优势。',
        },
        image: '/assets/corporate/permanent-residency.jpg',
        category: 'immigration',
        processingTime: {
          en: '6 - 12 Months (ICA processing)',
          zh: '6 - 12 个月（视ICA移民局审查期）',
        },
        targetAudience: {
          en: 'EP/S Pass Holders, Foreign Investors, International Families',
          zh: 'EP/S Pass 持有人、家庭投资者、长期定居专业人士',
        },
        deliverables: [
          { en: 'In-depth PR eligibility assessment and competitive profile audit', zh: '深入评估申请人背景竞争力，定制专属PR提升策略' },
          { en: 'Strategic personalized Cover Letter highlighting societal value', zh: '撰写高水准个人陈述信（Cover Letter），凸显社会贡献' },
          { en: 'Document compilation, certified translation, and notary review', zh: '全套支撑材料梳理、专业公证翻译与规范格式排版' },
          { en: 'Flawless digital submission via the ICA e-PR portal', zh: 'ICA官方电子系统零差错递交与全流程状态跟进' },
        ],
        icon: 'Award',
      },
      {
        id: 'dependants-pass',
        order: '06',
        title: {
          en: "Dependant's Pass & Long-Term Visit Pass",
          zh: '家属准证 (DP) 与长期探访准证 (LTVP)',
        },
        badge: {
          en: 'Family Relocation',
          zh: '全家移居与团聚',
        },
        shortDesc: {
          en: 'Bring your legal spouse, children, and parents to live in Singapore through Dependant’s Pass (DP) and Long-Term Visit Pass (LTVP).',
          zh: '协助就业准证持有者及永久居民为合法配偶、未成年子女及父母申请家属准证（DP）与长期探访准证（LTVP），实现全家赴新生活。',
        },
        description: {
          en: 'Eligible work pass holders earning at least S$6,000/month can sponsor spouses and children for DP. We facilitate document legalization, vaccination registry verification, and school placement coordination.',
          zh: '月薪达标（通常S$6,000及以上）的EP持有人可为配偶与21岁以下未婚子女申请DP；月薪S$12,000及以上可为父母申请LTVP。我们负责婚生证明认证、HPB疫苗注册及全程签证代办。',
        },
        image: '/assets/corporate/dependants-pass.jpg',
        category: 'immigration',
        processingTime: {
          en: '2 - 4 Weeks',
          zh: '2 - 4 周',
        },
        targetAudience: {
          en: 'Spouses, Children & Parents of EP / EntrePass / PR Holders',
          zh: 'EP/EntrePass/PR持有人的合法配偶、子女及长辈',
        },
        deliverables: [
          { en: 'Dependant’s Pass (DP) application for legally married spouse', zh: '协助合法配偶申请家属准证（DP）全套申报' },
          { en: 'Child DP with Health Promotion Board (HPB) vaccination sign-off', zh: '协助未成年子女通过新加坡HPB疫苗认证与DP申请' },
          { en: 'Long-Term Visit Pass (LTVP) applications for parents', zh: '为父母申请长期探访准证（LTVP）材料指导与呈报' },
          { en: 'Local and international school placement consultation', zh: '提供新加坡本土公立及国际知名学校入学择校衔接' },
        ],
        icon: 'Users',
      },
      {
        id: 'immigration-advisory',
        order: '07',
        title: {
          en: 'Immigration Advisory & Support',
          zh: '移民顾问与全方位合规支持',
        },
        badge: {
          en: '1-on-1 Advisory',
          zh: '一对一合规专案',
        },
        shortDesc: {
          en: 'Tailored consultation on Singapore immigration pathways, citizenship roadmap, tax residency planning, and corporate pass quota management.',
          zh: '提供定制化新加坡移居战略、公民身份进阶路径、税务居民规划以及企业外籍雇员配额合规管理。',
        },
        description: {
          en: 'Navigating Singapore immigration requires an up-to-date understanding of MOM, ACRA, and ICA regulations. We provide confidential, objective advisory to craft a multi-year relocation and tax-efficient residency blueprint.',
          zh: '新加坡移民政策严谨且持续调整。我们的资深顾问凭借本土二十余载深厚资源，为您提供高度保密的一对一咨询，量身定制家庭移居方案与税务优化路径。',
        },
        image: '/assets/corporate/immigration-advisory.jpg',
        category: 'immigration',
        processingTime: {
          en: 'On-Demand / Flexible',
          zh: '预约即享深度咨询',
        },
        targetAudience: {
          en: 'High-Net-Worth Individuals, Family Offices, Global Executives',
          zh: '高净值人士、家族办公室、跨国企业高管与雇主',
        },
        deliverables: [
          { en: 'Confidential 1-on-1 personalized immigration pathway assessment', zh: '高度保密的一对一个性化移民路径深度评估' },
          { en: 'Multi-year residency roadmap (Work Pass → PR → Citizenship)', zh: '多阶段长期定居规划（工作准证 → PR → 新加坡公民）' },
          { en: 'Singapore personal & corporate tax residency advisory', zh: '新加坡个人与企业税务居民身份合规咨询' },
          { en: 'MOM Fair Consideration Framework (FCF) & quota guidance', zh: '新加坡人力部公平雇佣条例（FCF）与准证配额统筹' },
        ],
        icon: 'Compass',
      },
    ] as CorporatePillar[],
  },

  advantages: [
    {
      title: { en: '25+ Years Institutional Heritage', zh: '25+ 载新加坡深厚公信力' },
      desc: {
        en: 'Rooted in Singapore since 1998, offering unparalleled local network, transparency, and institutional credibility.',
        zh: '自1998年深耕新加坡本土，积累了广泛的官方互信、院校合作及商业网络，信誉卓著。',
      },
      icon: 'ShieldCheck',
    },
    {
      title: { en: 'ACRA & MOM Regulatory Rigor', zh: '紧跟 ACRA、MOM 及 ICA 最新政策' },
      desc: {
        en: 'Strict adherence to Singapore company laws, COMPASS scoring benchmarks, and official immigration guidelines.',
        zh: '严谨遵循新加坡《公司法》、人力部COMPASS积分制与移民局准则，材料审核严丝合缝。',
      },
      icon: 'Award',
    },
    {
      title: { en: 'End-to-End One-Stop Service', zh: '公司设立到全家移居一站式闭环' },
      desc: {
        en: 'From company incorporation and corporate secretarial to executive work passes and family permanent residency.',
        zh: '无缝打通商业注册、银行开户、高管EP工签、家属团聚到永久居民PR申请全流程。',
      },
      icon: 'Sparkles',
    },
    {
      title: { en: '100% Confidentiality & Bilingual Advisory', zh: '全程私密保障与双语专业顾问' },
      desc: {
        en: 'Strict client privacy protection with seamless bilingual English and Mandarin professional support.',
        zh: '严格执行客户信息保密协议，中英双语资深顾问团队提供清晰、高效、有温度的咨询。',
      },
      icon: 'Target',
    },
  ] as CorporateAdvantage[],

  process: [
    {
      step: 'STEP 01',
      title: { en: 'Profile Assessment & Strategy', zh: '初步评估与方案定制' },
      desc: {
        en: 'In-depth review of your business plan, qualifications, or family background to identify the optimal legal and visa pathway.',
        zh: '全面了解您的商业规划、教育背景或家庭情况，精准测算合规指标与最佳落地路径。',
      },
    },
    {
      step: 'STEP 02',
      title: { en: 'Document Curation & Verification', zh: '材料核验与合规润色' },
      desc: {
        en: 'Rigorous preparation of company incorporation forms, Business Plans, notarized documents, and COMPASS points proof.',
        zh: '高效准备公司章程、商业计划书、公证翻译及官方积分证明，确保材料100%完整合规。',
      },
    },
    {
      step: 'STEP 03',
      title: { en: 'Official ACRA / MOM / ICA Filing', zh: '官方系统电子申报' },
      desc: {
        en: 'Seamless digital submission to ACRA, MOM, or ICA portals with proactive status monitoring and liaison.',
        zh: '通过官方直连通道呈交申请，专人跟进审批动态并及时响应政府部门的问询与补件。',
      },
    },
    {
      step: 'STEP 04',
      title: { en: 'Approval & Long-Term Support', zh: '获批落地与后续陪伴' },
      desc: {
        en: 'Immediate collection of incorporation certificates or visa passes, followed by ongoing statutory secretary and tax compliance.',
        zh: '协助领取执照或完成准证办理，并提供后续银行开户、企业年审及移居生活长效支持。',
      },
    },
  ] as CorporateEngagementStep[],

  cta: {
    badge: {
      en: 'Confidential Consultation Line',
      zh: '企业与移居专属咨询热线 · 快速响应',
    },
    title: {
      en: 'Start Your Singapore Business & Immigration Journey',
      zh: '开启您的高效新加坡商业与移居之旅',
    },
    subtitle: {
      en: 'Speak directly with our senior incorporation and immigration consultants for a confidential assessment and bespoke roadmap within 24 hours.',
      zh: '欢迎致电或通过 WhatsApp 联络我们资深顾问，24小时内为您提供免费初步可行性评估与专属合作方案。',
    },
    whatsappText: {
      en: 'WhatsApp Advisory (+65 9004 8768)',
      zh: 'WhatsApp 快速咨询 (+65 9004 8768)',
    },
    officeText: {
      en: 'Office: +65 6899 0828',
      zh: '总部办公热线: +65 6899 0828',
    },
    formText: {
      en: 'Book Confidential Consultation',
      zh: '在线预约一对一咨询',
    },
  },
};
