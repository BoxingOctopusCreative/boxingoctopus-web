'use client';

import type { ReactNode } from 'react';
import { usePathname } from 'next/navigation';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';

export function AppChrome({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const isStudioRoute = pathname.startsWith('/studio');
  const isHome = pathname === '/';

  if (isStudioRoute) {
    return <main className="min-h-screen">{children}</main>;
  }

  return (
    <>
      <Navigation />
      <main
        className={`flex-1 flex justify-center px-4 pb-28 md:pb-24 ${
          isHome ? 'items-center pt-0' : 'items-start pt-8'
        }`}
      >
        <div className="w-full max-w-7xl mx-auto">{children}</div>
      </main>
      <Footer />
    </>
  );
}
