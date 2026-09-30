import { Language } from './types';

export interface StudentReview {
  id: string;
  name: {
    en: string;
    zh: string;
  };
  role: {
    en: string;
    zh: string;
  };
  courseTitle: {
    en: string;
    zh: string;
  };
  courseSlug: string;
  category: 'art' | 'language' | 'brain';
  rating: number;
  quote: {
    en: string;
    zh: string;
  };
  highlight: {
    en: string;
    zh: string;
  };
  yearEnrolled: string;
  image: string;
}

export const studentReviews: StudentReview[] = [
  {
    id: 'review-1',
    name: {
      en: 'Emily Tan (Parent of Chloe, 11)',
      zh: '陈太太（学员 Chloe 家长，11岁）',
    },
    role: {
      en: 'Junior Academy Parent',
      zh: '少儿学院家长',
    },
    courseTitle: {
      en: 'Oil Painting Masterclass',
      zh: '油画研习大师班',
    },
    courseSlug: '/art-courses/oil-painting',
    category: 'art',
    rating: 5,
    quote: {
      en: 'The structured progression from color theory to canvas texture transformed my daughter’s patience and observation skills. Her instructors provide rigorous yet gentle mentorship that inspired genuine artistic passion.',
      zh: '从基础色彩调和到画布肌理表现，南洋系统的教学方式让孩子的观察力和专注力有了显著提升。导师严谨而温暖的指导，真正点燃了她对绘画艺术的热爱。',
    },
    highlight: {
      en: 'Exceptional artistic mentorship & canvas confidence',
      zh: '扎实造型功底 · 点燃艺术灵感',
    },
    yearEnrolled: '2023',
    image: '/assets/students/student-1.png',
  },
  {
    id: 'review-2',
    name: {
      en: 'Lucas Lim (Secondary 2 Student)',
      zh: '林俊杰（中二在读学员）',
    },
    role: {
      en: 'Cognitive Enrichment Scholar',
      zh: '全脑潜能学员',
    },
    courseTitle: {
      en: 'Super Memory & Mind Mapping',
      zh: '超级记忆与思维导图',
    },
    courseSlug: '/enrichment-courses/brain/super-memory',
    category: 'brain',
    rating: 5,
    quote: {
      en: 'Mind mapping and associative memory methods completely changed how I organize revision notes. I can retain complex science concepts and vocabulary with much higher efficiency and clarity.',
      zh: '思维导图与图像联想记忆法彻底改变了我整理复习笔记的方式。面对繁杂的科学概念和词汇，我能更高效地梳理逻辑并长久记忆，学习压力减轻了许多。',
    },
    highlight: {
      en: 'Transformed revision efficiency & conceptual recall',
      zh: '高效记忆方法 · 优化备考逻辑',
    },
    yearEnrolled: '2024',
    image: '/assets/students/student-2.png',
  },
  {
    id: 'review-3',
    name: {
      en: 'Mdm. Zhang & Ethan (Primary 5)',
      zh: '张女士与学员 Ethan（小五）',
    },
    role: {
      en: 'Heritage Arts Family',
      zh: '东方传统艺术学员家庭',
    },
    courseTitle: {
      en: 'Chinese Calligraphy & Brushwork',
      zh: '传统书法与毛笔研习',
    },
    courseSlug: '/art-courses/chinese-calligraphy',
    category: 'art',
    rating: 5,
    quote: {
      en: 'Learning traditional Chinese calligraphy in Singapore helped Ethan appreciate cultural heritage and balance. The master instructor teaches posture, stroke discipline, and mental composure brilliantly.',
      zh: '在新加坡能够跟随资深书法名师系统研习执笔与间架结构非常难得。导师注重运笔气韵与心性磨炼，不仅字写得越来越工整，心境也变得沉稳宁静。',
    },
    highlight: {
      en: 'Cultural depth, character poise & mental focus',
      zh: '陶冶东方心性 · 传承经典墨韵',
    },
    yearEnrolled: '2023',
    image: '/assets/students/student-3.png',
  },
  {
    id: 'review-4',
    name: {
      en: 'Jayden Wong (Adult Professional)',
      zh: '黄伟杰（在职成人研习学员）',
    },
    role: {
      en: 'Language Immersion Learner',
      zh: '多语种研修学员',
    },
    courseTitle: {
      en: 'General English & Communication',
      zh: '综合英语与职场沟通',
    },
    courseSlug: '/enrichment-courses/language/english',
    category: 'language',
    rating: 5,
    quote: {
      en: 'The interactive curriculum and small group setting gave me immediate confidence in verbal presentation and business writing. Highly practical and culturally nuanced training.',
      zh: '小班互动教学营造了纯正的学习语境，在演说表达与商务英文撰写方面让我建立了十足的自信，教学内容既实用又极具专业度。',
    },
    highlight: {
      en: 'Practical fluency & professional communication poise',
      zh: '纯正语境实战 · 显著提升沟通自信',
    },
    yearEnrolled: '2024',
    image: '/assets/students/student-4.png',
  },
  {
    id: 'review-5',
    name: {
      en: 'Mrs. Sophie Koh (Parent of Ryan, 8)',
      zh: '许女士（学员 Ryan 家长，8岁）',
    },
    role: {
      en: 'Early Enrichment Parent',
      zh: '启蒙阶段学员家长',
    },
    courseTitle: {
      en: 'Right Brain Development',
      zh: '右脑潜能深度启发',
    },
    courseSlug: '/enrichment-courses/brain/right-brain-development',
    category: 'brain',
    rating: 5,
    quote: {
      en: 'The spatial puzzles, speed recognition games, and rhythm memory exercises keep Ryan engaged for hours. We observed a noticeable improvement in his focus duration and creative thinking.',
      zh: '空间感知练习、快速图像辨识与节奏思维训练充满启发性。孩子每次上课都非常投入，在校表现出的专注时长和创造力都有了非常直观的进步。',
    },
    highlight: {
      en: 'Heightened spatial perception & attention span',
      zh: '启发发散思维 · 显著提升专注时长',
    },
    yearEnrolled: '2023',
    image: '/assets/students/student-5.png',
  },
  {
    id: 'review-6',
    name: {
      en: 'Hannah Lee (Art Enthusiast)',
      zh: '李涵（经典绘画研习学员）',
    },
    role: {
      en: 'Fine Art Studio Student',
      zh: '画室进阶学员',
    },
    courseTitle: {
      en: 'Academic Sketching & Perspective',
      zh: '学院派经典素描与透视',
    },
    courseSlug: '/art-courses/sketching',
    category: 'art',
    rating: 5,
    quote: {
      en: 'Step-by-step master instruction on chiaroscuro light and shadow structure gave me a rock-solid foundation. The studio environment is quiet, encouraging, and deeply inspiring.',
      zh: '导师对光影明暗交界线与结构透视的耐心剖析，为我奠定了扎实的造型基本功。画室学习氛围沉静浓厚，每一次动笔都让人倍受启发。',
    },
    highlight: {
      en: 'Solid structural draughtsmanship & artistic discipline',
      zh: '精准结构透视 · 严谨造型基本功',
    },
    yearEnrolled: '2024',
    image: '/assets/students/student-6.png',
  },
];
