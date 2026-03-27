import 'react';

export {};

declare module 'react' {
  interface IframeHTMLAttributes<T> {
    /** Legacy HTML attribute for iframe transparency (e.g. Discord widget). */
    allowtransparency?: string | boolean;
  }
}

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag: (...args: unknown[]) => void;
  }
}
