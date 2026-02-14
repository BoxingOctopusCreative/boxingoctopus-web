'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import LogRocket from 'logrocket';

function initGA() {
  if (typeof window === 'undefined' || !process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID) return;
  const id = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;
  if (window.gtag) {
    window.gtag('config', id, { page_path: window.location.pathname });
    return;
  }
  window.dataLayer = window.dataLayer || [];
  function gtag(...args) {
    window.dataLayer.push(args);
  }
  window.gtag('js', new Date());
  gtag('config', id, { cookie_flags: 'SameSite=None; Secure' });
}

export function Analytics() {
  const pathname = usePathname();

  useEffect(() => {
    LogRocket.init('6mr8rr/boxing-octopus-creative');
  }, []);

  useEffect(() => {
    if (process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID && typeof window !== 'undefined' && window.gtag) {
      window.gtag('config', process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID, {
        page_path: pathname,
      });
    }
  }, [pathname]);

  useEffect(() => {
    if (typeof window === 'undefined' || !process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID) return;
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}`;
    document.head.appendChild(script);
    script.onload = initGA;
  }, []);

  return null;
}
