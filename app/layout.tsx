import type { ReactNode } from 'react';
import { Analytics } from './Analytics';
import { AppChrome } from '@/components/AppChrome';
import './globals.css';

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
    <html lang="en" className="bg-black">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap"
          rel="stylesheet"
        />
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
