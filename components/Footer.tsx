export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="fixed bottom-0 left-0 right-0 z-10 bg-black w-full py-3 md:py-4 border-t-2 border-gray-500 pb-[calc(0.75rem+env(safe-area-inset-bottom))]">
      <div className="text-center font-bebas text-lg sm:text-xl md:text-2xl text-white px-3">
        Another fine{' '}
        <a
          href="https://boxingoctop.us"
          target="_blank"
          rel="noreferrer"
          className="text-white no-underline"
        >
          Boxing Octopus Creative
        </a>{' '}
        Project | Built with{' '}
        <a
          href="https://nextjs.org"
          target="_blank"
          rel="noreferrer"
          className="text-white no-underline"
        >
          Next.js
        </a>{' '}
        and{' '}
        <a
          href="https://tailwindcss.com"
          target="_blank"
          rel="noreferrer"
          className="text-white no-underline"
        >
          Tailwind CSS
        </a>{' '}
        | Copyright © {year}{' '}
        <a
          href="https://boxingoctop.us"
          target="_blank"
          rel="noreferrer"
          className="text-white no-underline"
        >
          Boxing Octopus Creative
        </a>
      </div>
    </footer>
  );
}
