'use client';

import Link from 'next/link';

export function Navigation() {
  return (
    <nav className="bg-black w-full flex justify-center pt-2.5 pr-[100px] sticky top-0 z-50">
      <div className="w-full max-w-7xl flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <img
            src="https://assets.boxingoctop.us/img/Logo%20White.png"
            alt="Boxing Octopus"
            className="w-20 h-auto"
          />
        </Link>
        <div className="flex gap-4 font-bebas text-white text-4xl">
          <Link href="/" className="text-white no-underline hover:opacity-80">
            Home
          </Link>
          <Link href="/about" className="text-white no-underline hover:opacity-80">
            About
          </Link>
          <Link href="/projects" className="text-white no-underline hover:opacity-80">
            Projects
          </Link>
          <Link href="/collective" className="text-white no-underline hover:opacity-80">
            Collective
          </Link>
          <Link href="/contact" className="text-white no-underline hover:opacity-80">
            Contact
          </Link>
          <a
            href="https://github.com/boxingoctopus"
            target="_blank"
            rel="noreferrer"
            className="text-white no-underline hover:opacity-80"
          >
            Github
          </a>
        </div>
      </div>
    </nav>
  );
}
