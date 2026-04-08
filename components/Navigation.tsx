'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export function Navigation() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/projects', label: 'Projects' },
    { href: '/resume', label: 'Resume' },
    { href: '/collective', label: 'Collective' },
    { href: '/contact', label: 'Contact' },
  ];

  const getNavLinkClass = (href: string) =>
    [
      'no-underline transition-colors',
      pathname === href ? 'text-gray-500' : 'text-white',
      'hover:text-gray-500 active:text-gray-500',
    ].join(' ');

  useEffect(() => {
    setIsMobileMenuOpen(false);
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
        <div className="hidden md:flex gap-4 font-bebas text-white text-3xl lg:text-4xl">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className={getNavLinkClass(item.href)}>
              {item.label}
            </Link>
          ))}
          <a
            href="https://github.com/boxingoctopus"
            target="_blank"
            rel="noreferrer"
            className="text-white no-underline transition-colors hover:text-gray-300 active:text-gray-300"
          >
            Github
          </a>
          <a
            href="https://www.fiverr.com/s/kLB7BDw"
            target="_blank"
            rel="noreferrer"
            className="text-white no-underline transition-colors hover:text-gray-300 active:text-gray-300"
          >
            Fiverr
          </a>
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
            <a
              href="https://github.com/boxingoctopus"
              target="_blank"
              rel="noreferrer"
              className="text-white no-underline transition-colors hover:text-gray-300 active:text-gray-300"
            >
              Github
            </a>
            <a
            href="https://www.fiverr.com/s/kLB7BDw"
            target="_blank"
            rel="noreferrer"
            className="text-white no-underline transition-colors hover:text-gray-300 active:text-gray-300"
          >
            Fiverr
          </a>
          </div>
        </div>
      ) : null}
    </nav>
  );
}
