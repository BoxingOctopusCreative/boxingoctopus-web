'use client';

import { useEffect, useId, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const contactLinks = [
  { label: 'GitHub', href: 'https://github.com/boxingoctopus' },
  { label: 'Fiverr', href: 'https://www.fiverr.com/s/kLB7BDw' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/ryandraga' },
  { label: 'BlueSky', href: 'https://bsky.app/profile/boxingoctopus.social' },
  { label: 'Hey.Cafe', href: 'https://hey.cafe/@boxingoctopus' },
  { label: 'Email', href: 'mailto:info@boxingoctop.us' },
] as const;

export function Navigation() {
  const pathname = usePathname();
  const contactMenuId = useId();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/projects', label: 'Projects' },
    { href: '/resume', label: 'Resume' },
    { href: '/collective', label: 'Collective' },
  ];

  const getNavLinkClass = (href: string) =>
    [
      'no-underline transition-colors',
      pathname === href ? 'text-gray-500' : 'text-white',
      'hover:text-gray-500 active:text-gray-500',
    ].join(' ');

  const contactTriggerClass = [
    'inline-flex items-center gap-1 font-bebas text-inherit bg-transparent border-0 cursor-pointer p-0',
    'text-white hover:text-gray-500 active:text-gray-500 transition-colors',
  ].join(' ');

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsContactOpen(false);
  }, [pathname]);

  return (
    <nav className="bg-black w-full sticky top-0 z-50 border-b-2 border-gray-500">
      <div className="w-full max-w-7xl mx-auto flex items-center justify-between px-4 md:px-6 lg:px-8 py-2.5">
        <Link href="/" className="flex items-center" aria-label="Boxing Octopus logo link">
          <Image
            src="https://assets.boxingoctop.us/img/Logo%20White.png"
            alt="Boxing Octopus"
            className="w-20 h-auto"
            width={80}
            height={80}
          />
        </Link>
        <button
          type="button"
          aria-label={isMobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={isMobileMenuOpen}
          className="md:hidden flex flex-col justify-center gap-1.5 p-2 text-white hover:text-gray-400 transition-colors"
          onClick={() => setIsMobileMenuOpen((isOpen) => !isOpen)}
        >
          <span
            className={[
              'block h-0.5 w-6 bg-current transition-transform duration-200',
              isMobileMenuOpen ? 'translate-y-2 rotate-45' : '',
            ].join(' ')}
          />
          <span
            className={[
              'block h-0.5 w-6 bg-current transition-opacity duration-200',
              isMobileMenuOpen ? 'opacity-0' : 'opacity-100',
            ].join(' ')}
          />
          <span
            className={[
              'block h-0.5 w-6 bg-current transition-transform duration-200',
              isMobileMenuOpen ? '-translate-y-2 -rotate-45' : '',
            ].join(' ')}
          />
        </button>
        <div className="hidden md:flex gap-4 font-bebas text-white text-3xl lg:text-4xl items-center">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className={getNavLinkClass(item.href)}>
              {item.label}
            </Link>
          ))}
          <div className="relative group inline-flex items-center gap-1">
            <Link href="/contact" className={getNavLinkClass('/contact')}>
              Contact
            </Link>
            <button
              type="button"
              className={[
                'inline-flex items-center font-bebas text-inherit bg-transparent border-0 cursor-pointer shrink-0 px-0.5',
                pathname === '/contact'
                  ? 'text-gray-500'
                  : 'text-white hover:text-gray-500 active:text-gray-500',
                'transition-colors',
              ].join(' ')}
              aria-haspopup="true"
              aria-controls={contactMenuId}
              id={`${contactMenuId}-trigger`}
              aria-label="Contact sub-menu"
            >
              <span aria-hidden className="text-xl leading-none">
                ▾
              </span>
            </button>
            <div
              id={contactMenuId}
              role="menu"
              aria-labelledby={`${contactMenuId}-trigger`}
              className="absolute right-0 top-full pt-2 min-w-[12rem] hidden group-hover:block group-focus-within:block z-50"
            >
              <ul className="border-2 border-gray-500 bg-black py-2 text-2xl lg:text-3xl shadow-lg">
                {contactLinks.map((item) => (
                  <li key={item.href} role="none">
                    <a
                      role="menuitem"
                      href={item.href}
                      {...(item.href.startsWith('mailto:')
                        ? {}
                        : { target: '_blank', rel: 'noreferrer' })}
                      className="block px-4 py-1.5 text-white no-underline transition-colors hover:text-gray-500 hover:bg-gray-900/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-gray-400"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      {isMobileMenuOpen ? (
        <div className="md:hidden border-t border-gray-800 px-4 pb-4">
          <div className="flex flex-col gap-2 font-bebas text-3xl pt-3">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className={getNavLinkClass(item.href)}>
                {item.label}
              </Link>
            ))}
            <div className="flex flex-col gap-1">
              <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
                <Link
                  href="/contact"
                  className={getNavLinkClass('/contact')}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Contact
                </Link>
                <button
                  type="button"
                  className={[
                    'inline-flex items-center font-bebas text-inherit bg-transparent border-0 cursor-pointer shrink-0 px-0.5',
                    pathname === '/contact'
                      ? 'text-gray-500'
                      : 'text-white hover:text-gray-500 active:text-gray-500',
                    'transition-colors',
                  ].join(' ')}
                  aria-expanded={isContactOpen}
                  aria-controls={`${contactMenuId}-mobile`}
                  id={`${contactMenuId}-mobile-trigger`}
                  aria-label="Contact sub-menu"
                  onClick={() => setIsContactOpen((open) => !open)}
                >
                  <span aria-hidden className="text-xl leading-none">
                    {isContactOpen ? '▴' : '▾'}
                  </span>
                </button>
              </div>
              {isContactOpen ? (
                <ul
                  id={`${contactMenuId}-mobile`}
                  role="menu"
                  aria-labelledby={`${contactMenuId}-mobile-trigger`}
                  className="flex flex-col gap-1 pl-3 border-l-2 border-gray-600 ml-1"
                >
                  {contactLinks.map((item) => (
                    <li key={item.href} role="none">
                      <a
                        role="menuitem"
                        href={item.href}
                        {...(item.href.startsWith('mailto:')
                          ? {}
                          : { target: '_blank', rel: 'noreferrer' })}
                        className="text-white no-underline transition-colors hover:text-gray-400 active:text-gray-400 text-2xl"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              ) : null}
            </div>
          </div>
        </div>
      ) : null}
    </nav>
  );
}
