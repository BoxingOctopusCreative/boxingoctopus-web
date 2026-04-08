import type { ReactNode } from 'react';
import { Bebas_Neue, Sofia_Sans_Condensed } from 'next/font/google';
import { Analytics } from './Analytics';
import { AppChrome } from '@/components/AppChrome';
import './globals.css';

const bebasNeue = Bebas_Neue({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-bebas',
  display: 'swap',
});

const sofiaSansCondensed = Sofia_Sans_Condensed({
  subsets: ['latin'],
  weight: 'variable',
  variable: '--font-sofia-sans-condensed',
  display: 'swap',
});

export const viewport = {
  themeColor: '#000000',
};

export const metadata = {
  title: 'Boxing Octopus Creative',
  description: 'Boxing Octopus Creative is a Toronto-Based Digital Content Brand With Many Tentacles',
  openGraph: {
    url: 'https://boxingoctop.us',
  },
  icons: {
    icon: 'https://assets.boxingoctop.us/Logo%20White.png',
    apple: 'https://assets.boxingoctop.us/Logo%20White.png',
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`bg-black ${bebasNeue.variable} ${sofiaSansCondensed.variable}`}>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              window.gtag = gtag;
            `,
          }}
        />
      </head>
      <body className="bg-black text-white min-h-screen flex flex-col">
        <Analytics />
        <AppChrome>{children}</AppChrome>
      </body>
    </html>
  );
}
