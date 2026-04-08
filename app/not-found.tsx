import Image from 'next/image';

export default function NotFound() {
  return (
    <div className="container mx-auto">
      <div className="boc-page-title">Page Not Found</div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="flex justify-center items-center">
          <Image
            src="https://assets.boxingoctop.us/img/eeby-deeby-404.jpg"
            alt="404"
            width={500}
            height={500}
            className="w-full max-w-md items-center h-auto"
          />
        </div>
        <div className="boc-page-content leading-none mt-[100px]">
          Oh No, You seem to have taken a wrong turn.
        </div>
      </div>
    </div>
  );
}
