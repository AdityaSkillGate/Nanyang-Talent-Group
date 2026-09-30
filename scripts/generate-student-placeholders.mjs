import fs from 'node:fs';
import path from 'node:path';
import sharp from 'sharp';

const OUT_DIR = path.resolve(process.cwd(), 'public', 'assets', 'students');
fs.mkdirSync(OUT_DIR, { recursive: true });

const students = [
  {
    id: 1,
    name: 'Emily Tan',
    nameZh: '陈美玲',
    course: 'Oil Painting',
    color1: '#172A73',
    color2: '#2A439C',
    accent: '#C7A04B',
  },
  {
    id: 2,
    name: 'Lucas Lim',
    nameZh: '林俊杰',
    course: 'Brain Development',
    color1: '#0F4C81',
    color2: '#1FA7D6',
    accent: '#38BDF8',
  },
  {
    id: 3,
    name: 'Chloe Zhang',
    nameZh: '张心妍',
    course: 'Chinese Calligraphy',
    color1: '#8B1E22',
    color2: '#D71920',
    accent: '#FCA5A5',
  },
  {
    id: 4,
    name: 'Jayden Wong',
    nameZh: '黄伟杰',
    course: 'Language Immersion',
    color1: '#065F46',
    color2: '#0D9488',
    accent: '#6EE7B7',
  },
  {
    id: 5,
    name: 'Sophie Koh',
    nameZh: '许嘉欣',
    course: 'Super Memory',
    color1: '#312E81',
    color2: '#4F46E5',
    accent: '#C7A04B',
  },
  {
    id: 6,
    name: 'Aiden Ng',
    nameZh: '黄睿恩',
    course: "Children's Drawing",
    color1: '#9A3412',
    color2: '#EA580C',
    accent: '#FDBA74',
  },
];

async function generatePlaceholder(s) {
  const svg = `
  <svg width="400" height="400" viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="grad-${s.id}" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="${s.color1}" />
        <stop offset="100%" stop-color="${s.color2}" />
      </linearGradient>
    </defs>
    
    <!-- Background Circle / Rounded Card -->
    <rect width="400" height="400" rx="40" fill="url(#grad-${s.id})" />
    
    <!-- Ambient Orbital Arc -->
    <circle cx="200" cy="200" r="160" stroke="${s.accent}" stroke-width="2" stroke-dasharray="8 8" opacity="0.4" />
    <circle cx="200" cy="200" r="130" stroke="#FFFFFF" stroke-width="1.5" opacity="0.2" />

    <!-- Stylized Student Portrait Silhouette -->
    <!-- Head -->
    <circle cx="200" cy="145" r="52" fill="#FFFFFF" opacity="0.95" />
    <!-- Hair / Cap Accent -->
    <path d="M 152 145 C 152 105, 248 105, 248 145 Z" fill="${s.color1}" opacity="0.25" />
    
    <!-- Shoulders / Torso -->
    <path d="M 115 300 C 115 225, 285 225, 285 300 Z" fill="#FFFFFF" opacity="0.95" />
    
    <!-- Lower Label Ribbon -->
    <rect x="50" y="325" width="300" height="46" rx="23" fill="#FFFFFF" opacity="0.96" />
    <text x="200" y="354" font-family="system-ui, -apple-system, sans-serif" font-size="14" font-weight="700" fill="${s.color1}" text-anchor="middle" letter-spacing="0.5">
      ${s.name} · ${s.course}
    </text>
  </svg>
  `;

  const destPng = path.join(OUT_DIR, `student-${s.id}.png`);
  await sharp(Buffer.from(svg))
    .png({ quality: 95 })
    .toFile(destPng);
    
  console.log(`[Placeholder] Created ${destPng}`);
}

async function main() {
  console.log('Generating high-resolution student portrait placeholders...');
  for (const s of students) {
    await generatePlaceholder(s);
  }
  console.log('Student placeholders generated successfully.');
}

main().catch(console.error);
