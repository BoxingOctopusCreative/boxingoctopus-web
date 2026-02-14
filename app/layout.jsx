import { Analytics } from './Analytics';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
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

export default function RootLayout({ children }) {
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
        <Navigation />
        <main className="flex-1 flex justify-center items-center mt-[100px] px-4 pb-24">
          <div className="w-full max-w-7xl mx-auto">
            {children}
          </div>
        </main>
        <Footer />
      </body>
    </html>
  );
}
