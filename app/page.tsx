import Image from 'next/image';

export default function Home() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 w-full items-center">
      <div className="flex items-center w-full pl-4 md:pl-12">
        <Image
          src="https://assets.boxingoctop.us/img/Logo%20White.png"
          alt="Boxing Octopus logo"
          width={400}
          height={400}
          className="w-full max-w-md items-center h-auto"
        />
      </div>
      <div className="flex justify-end items-center font-bebas text-5xl sm:text-6xl lg:text-[90px] leading-none mt-6 md:mt-0 text-left md:text-right">
        Boxing Octopus Creative is a Many-Armed Digital Content Brand from Toronto
      </div>
    </div>
  );
}
