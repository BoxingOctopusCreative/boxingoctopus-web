'use client';

import type { ReactNode } from 'react';
import { usePathname } from 'next/navigation';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';

export function AppChrome({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const isStudioRoute = pathname.startsWith('/studio');

  if (isStudioRoute) {
    return <main className="min-h-screen">{children}</main>;
  }

  return (
    <>
      <Navigation />
      <main className="flex-1 flex justify-center items-start px-4 pt-8 pb-16 md:pb-20">
        <div className="w-full max-w-7xl mx-auto">{children}</div>
      </main>
      <Footer />
    </>
  );
}
