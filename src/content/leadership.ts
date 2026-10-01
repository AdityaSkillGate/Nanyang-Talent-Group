import { LocalizedString } from './types';

export interface LeadershipBio {
  name: LocalizedString;
  title: LocalizedString;
  role: LocalizedString;
  portrait: string;
  badge: LocalizedString;
  overview: {
    en: string[];
    zh: string[];
  };
  credentials: {
    year?: string;
    text: LocalizedString;
  }[];
  pillars: {
    title: LocalizedString;
    category: LocalizedString;
    desc: LocalizedString;
  }[];
  sculptures: {
    title: LocalizedString;
    institution: LocalizedString;
    location: LocalizedString;
  }[];
}

export const drTengProfile: LeadershipBio = {
  name: {
    en: 'Dr. Teng Jiashu',
    zh: '滕家恕 博士',
  },
  title: {
    en: 'CEO / Director',
    zh: '集团总裁 / 董事',
  },
  role: {
    en: 'Founder of Nanyang Asia College · Renowned Artist & Educator',
    zh: '南洋亚洲学院创办人 · 著名艺术家与资深教育家',
  },
  portrait: '/assets/leadership/dr-teng-jiashu.png',
  badge: {
    en: 'Academic Leadership & Artistic Direction',
    zh: '领航导师与艺术总监',
  },
  overview: {
    en: [
      'Since establishing his first education center in Singapore in 1993, Dr. Teng was inducted into the Who’s Who in the World in 1997. He has been deeply involved in the fields of education and the arts, winning multiple authoritative industry awards.',
      'For over 30 years, he has dedicated himself to founding tertiary colleges, committing to education management research, and striving to develop the education sector. Today, Nanyang Asia College has become a preferred training institute for AEIS parents in Singapore and has been awarded the 4-year Edu Trust certification by the Skills & Workforce Development Agency (SWDA) / Committee for Private Education (CPE), successfully laying a solid cornerstone for the college’s centennial development.',
      'At the same time, he is also a renowned artist. In 2002, under the guidance of Mr. Liu Kang, the founder of the Nanyang Art Style, he founded the Nanyang Artists Association. Dr. Teng is highly proficient in Chinese calligraphy, mastering Regular script, Clerical script, Running script, Cursive script, and Seal script, and is able to blend these various styles into his calligraphic creations. He also innovated the “Mantis-Leg Clerical Script.”',
      'Integrating Chinese and Western methodologies, he is skilled in realism, oil painting, figure painting, and portraiture, having painted portraits for numerous prominent figures. He is equally proficient in traditional Chinese landscape, flower, and bird paintings, and has collaborated with his students to pioneer the “Tropical Rainforest Painting Style.”',
      'Furthermore, he excels in sculpting, having created the large-scale sculpture Unity and Soaring High for Nanyang Primary School in Singapore, and the Confucius sculpture for the Second Affiliate Primary School of Foon Yew in Johor, Malaysia. He also founded brain intelligence development courses, nurturing numerous top students who have successfully entered world-class, prestigious universities.',
    ],
    zh: [
      '自1993年在新加坡创立首家教育中心以来，滕家恕博士于1997年荣登《世界名人录》（Who’s Who in the World）。三十余年来，他深耕教育与艺术领域，荣获多项权威行业大奖与社会高度赞誉。',
      '三十余年来，他倾注心力创办高等院校、潜心教育管理研究，竭力推动教育事业的创新发展。如今，南洋亚洲学院（Nanyang Asia College）已成为备受新加坡AEIS考生及家长信赖的专业培训基地，并荣获新加坡精深技能发展局与私立教育理事会（CPE / SWDA）颁发的高标准四年期EduTrust教育信托认证，为学院百年育人蓝图奠定了坚如磐石的基石。',
      '与此同时，滕博士亦是一位声名卓著的著名艺术家。2002年，在“南洋画派”奠基人刘抗先生的亲自指点与督导下，他创立了新加坡南洋美术家协会。滕博士精通中国书法五体（楷书、隶书、行书、草书、篆书），善于将诸体风貌融会贯通，更独创了享誉书坛的“螳螂腿隶书”。',
      '学贯中西的滕博士，长于写实主义油画、人物画与肖像定制，曾受邀为多位政商要人及各界名流绘制传神肖像；亦深谙传统中国山水与花鸟画，并与众门生共同开创了具有浓郁东南亚风貌的“热带雨林画派”。',
      '在立体雕塑艺术方面，滕博士亦造诣精深，曾为新加坡南洋小学（Nanyang Primary School）创作大型雕塑《同心高飞》，为马来西亚新山宽柔二小创作庄严的《孔子像》。此外，他亦高瞻远瞩创立全脑潜能启发课程，悉心培育大批卓越学子顺利考入世界一流顶尖名校。',
    ],
  },
  credentials: [
    {
      year: '1993',
      text: {
        en: 'Founded first Singapore Education Center',
        zh: '在新加坡创办首间教育中心',
      },
    },
    {
      year: '1997',
      text: {
        en: 'Inducted into Who’s Who in the World',
        zh: '荣登《世界名人录》(Who’s Who in the World)',
      },
    },
    {
      year: '2002',
      text: {
        en: 'Founded Nanyang Artists Association under Mr. Liu Kang',
        zh: '在南洋画派奠基人刘抗先生指导下创立南洋美术家协会',
      },
    },
    {
      year: '30+ Yrs',
      text: {
        en: 'Tertiary Education & Institutional Management Research',
        zh: '三十余载高等教育与管理科研积淀',
      },
    },
    {
      year: 'EduTrust',
      text: {
        en: '4-Year EduTrust Certification by CPE / SWDA',
        zh: '荣获新加坡 CPE / SWDA 4年期 EduTrust 权威认证',
      },
    },
  ],
  pillars: [
    {
      title: {
        en: 'Calligraphic Mastery & Innovation',
        zh: '书法精研与螳螂腿隶书独创',
      },
      category: {
        en: 'Five Scripts + Innovation',
        zh: '真草隶篆行 · 融汇五体',
      },
      desc: {
        en: 'Proficient in Regular, Clerical, Running, Cursive, and Seal scripts. Blends classic traditions into fresh visual forms, including his signature “Mantis-Leg Clerical Script.”',
        zh: '精熟五体碑帖墨韵，将传统法度与个性风骨融会贯通，独创极具艺术张力的“螳螂腿隶书”。',
      },
    },
    {
      title: {
        en: 'East-West Realism & Rainforest Style',
        zh: '中西写实融通与热带雨林画派',
      },
      category: {
        en: 'Fine Painting & Portraiture',
        zh: '油画肖像 · 水墨花鸟山水',
      },
      desc: {
        en: 'Skilled in realism oil figure painting and VIP portraits, traditional Chinese landscapes, flower, and bird paintings. Pioneered the “Tropical Rainforest Painting Style” with students.',
        zh: '贯通西方写实油画与东方写意精髓，长于名流肖像创作，并与门生开创独具南洋风情的“热带雨林画派”。',
      },
    },
    {
      title: {
        en: 'Monumental Sculpture Art',
        zh: '经典公共雕塑创作',
      },
      category: {
        en: 'Public Sculptures',
        zh: '新加坡与马来西亚校园地标',
      },
      desc: {
        en: 'Created the large-scale sculpture “Unity and Soaring High” for Nanyang Primary School in Singapore, and the Confucius sculpture for Foon Yew Second Affiliate Primary School in Malaysia.',
        zh: '为新加坡名校南洋小学创作大型纪念雕塑《同心高飞》，为马来西亚宽柔二小创作《孔子像》。',
      },
    },
    {
      title: {
        en: 'Cognitive & Whole Brain Development',
        zh: '全脑潜能启发与名校培育',
      },
      category: {
        en: 'Brain Intelligence Pioneer',
        zh: '认知训练 · 启迪思维',
      },
      desc: {
        en: 'Founded brain intelligence development programs cultivating focus, memory, and cognitive agility, nurturing students who entered world-class universities.',
        zh: '开创全脑潜能开发课程，培养学员高效专注与图像化思维，输送大批高材生迈入世界名校殿堂。',
      },
    },
  ],
  sculptures: [
    {
      title: {
        en: 'Unity and Soaring High (《同心高飞》)',
        zh: '《同心高飞》大型雕塑',
      },
      institution: {
        en: 'Nanyang Primary School',
        zh: '新加坡南洋小学',
      },
      location: {
        en: 'Singapore',
        zh: '新加坡',
      },
    },
    {
      title: {
        en: 'Confucius Statue (《孔子像》)',
        zh: '《孔子像》纪念雕塑',
      },
      institution: {
        en: 'Second Affiliate Primary School of Foon Yew',
        zh: '新山宽柔二小',
      },
      location: {
        en: 'Johor, Malaysia',
        zh: '马来西亚柔佛',
      },
    },
  ],
};
