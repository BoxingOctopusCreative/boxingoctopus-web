'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export function Navigation() {
  const pathname = usePathname();
  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/projects', label: 'Projects' },
    { href: '/collective', label: 'Collective' },
    { href: '/contact', label: 'Contact' },
  ];

  const getNavLinkClass = (href: string) =>
    [
      'no-underline transition-colors',
      pathname === href ? 'text-gray-500' : 'text-white',
      'hover:text-gray-500 active:text-gray-500',
    ].join(' ');

  return (
    <nav className="bg-black w-full flex justify-center pt-2.5 pr-[100px] sticky top-0 z-50 border-b-2 border-gray-500">
      <div className="w-full max-w-7xl flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <Image
            src="https://assets.boxingoctop.us/img/Logo%20White.png"
            alt="Boxing Octopus"
            className="w-20 h-auto"
            width={80}
            height={80}
          />
        </Link>
        <div className="flex gap-4 font-bebas text-white text-4xl">
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
        </div>
      </div>
    </nav>
  );
}
