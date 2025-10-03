import { Metadata } from 'next';

export const baseMetadata: Metadata = {
  metadataBase: new URL('https://prompttheory.dev'),

  title: {
    default: 'Prompt Theory - Professional AI Prompt Management',
    template: '%s | Prompt Theory',
  },

  description: 'Never lose meticulously crafted AI prompts again. Professional prompt management for engineers, designers, and technical professionals who ship with AI.',

  keywords: [
    'AI prompts',
    'prompt management',
    'ChatGPT prompts',
    'Claude prompts',
    'AI tools',
    'prompt library',
    'developer tools',
    'productivity',
    'prompt engineering',
  ],

  authors: [{ name: 'Prompt Theory' }],
  creator: 'Prompt Theory',
  publisher: 'Prompt Theory',

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://prompttheory.dev',
    siteName: 'Prompt Theory',
    title: 'Prompt Theory - Professional AI Prompt Management',
    description: 'Never lose meticulously crafted AI prompts again. Professional prompt management for engineers, designers, and technical professionals who ship with AI.',
    images: [
      {
        url: '/images/promotional-small-440x280.png',
        width: 440,
        height: 280,
        alt: 'Prompt Theory Extension Preview',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Prompt Theory - Professional AI Prompt Management',
    description: 'Never lose meticulously crafted AI prompts again.',
    images: ['/images/promotional-small-440x280.png'],
  },

  alternates: {
    canonical: 'https://prompttheory.dev',
  },

  icons: {
    icon: [
      { url: '/images/icon-16.png', sizes: '16x16', type: 'image/png' },
      { url: '/images/icon-32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: { url: '/images/icon-128.png', sizes: '128x128', type: 'image/png' },
  },
};
