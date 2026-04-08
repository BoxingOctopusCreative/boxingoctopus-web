import '@testing-library/jest-dom';
import React from 'react';

// EmailJS env for Contact form tests (set before any modules load)
process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID =
  process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || 'test-service';
process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID =
  process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || 'test-template';
process.env.NEXT_PUBLIC_EMAILJS_USER_ID =
  process.env.NEXT_PUBLIC_EMAILJS_USER_ID || 'test-user';

jest.mock('@portabletext/react', () => ({
  PortableText: ({ value }: { value: Array<{ children?: Array<{ text?: string }> }> }) => (
    React.createElement(
      'div',
      { 'data-testid': 'portable-text' },
      value?.map((block) => block.children?.map((child) => child.text).join('')).join(' ')
    )
  ),
}));

jest.mock('next/image', () => ({
  __esModule: true,
  default: (props: React.ImgHTMLAttributes<HTMLImageElement>) =>
    React.createElement('img', { ...props, alt: props.alt }),
}));

jest.mock('next-sanity', () => ({
  groq: (strings: TemplateStringsArray, ...values: string[]) =>
    strings.reduce((out, str, i) => out + str + (values[i] ?? ''), ''),
}));

/** Avoid loading @sanity/image-url (ESM) in Jest; support width/height/auto chains used by pages. */
jest.mock('@/lib/sanity.image', () => ({
  urlForImage: jest.fn(() => {
    const chain = {
      width: jest.fn().mockReturnThis(),
      height: jest.fn().mockReturnThis(),
      auto: jest.fn().mockReturnThis(),
      url: jest.fn(() => 'https://cdn.sanity.io/images/test/image.png'),
    };
    return chain;
  }),
}));
