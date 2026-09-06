import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://kaixuewen.github.io'),
  title: {
    default: 'Kaiwen Xue | Multimodal & Embodied Intelligence',
    template: '%s | Kaiwen Xue',
  },
  description:
    'Kaiwen Xue is a Ph.D. candidate researching multimodal large language models, embodied geo-localization, world models, and human-aligned AI evaluation.',
  keywords: [
    'Kaiwen Xue',
    '薛凯文',
    'multimodal large language models',
    'embodied intelligence',
    'geo-localization',
    'world models',
  ],
  authors: [{ name: 'Kaiwen Xue', url: 'https://kaixuewen.github.io' }],
  creator: 'Kaiwen Xue',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    url: '/',
    siteName: 'Kaiwen Xue',
    title: 'Kaiwen Xue | Multimodal & Embodied Intelligence',
    description:
      'Researching multimodal large language models, embodied geo-localization, world models, and human-aligned AI evaluation.',
    images: [
      {
        url: '/og.png',
        width: 1200,
        height: 630,
        alt: 'Kaiwen Xue - Multimodal & Embodied Intelligence',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kaiwen Xue | Multimodal & Embodied Intelligence',
    description:
      'Researching multimodal large language models, embodied geo-localization, world models, and human-aligned AI evaluation.',
    images: ['/og.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
