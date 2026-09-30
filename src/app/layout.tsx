import type { Metadata } from 'next';
import '@/styles/globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://nytalent.com.sg'),
  title: {
    default: 'Nanyang Talent Group Pte Ltd | 南洋人才集团',
    template: '%s | Nanyang Talent Group',
  },
  description:
    'Discover premier art, language, and brain intelligence enrichment programmes in Singapore. Nanyang Talent Group Pte Ltd, established Since 1998.',
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.png',
    apple: '/favicon.png',
  },
  openGraph: {
    title: 'Nanyang Talent Group Pte Ltd | 南洋人才集团',
    description:
      'Premier Singapore art academy, language studies, and cognitive brain intelligence programmes. Established Since 1998.',
    url: 'https://nytalent.com.sg',
    siteName: 'Nanyang Talent Group',
    locale: 'en_SG',
    type: 'website',
  },
  alternates: {
    canonical: 'https://nytalent.com.sg',
    languages: {
      'en-SG': 'https://nytalent.com.sg',
      'zh-SG': 'https://nytalent.com.sg/zh',
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="min-h-screen flex flex-col font-sans bg-surface-canvas text-ink-primary antialiased">
        {children}
      </body>
    </html>
  );
}
