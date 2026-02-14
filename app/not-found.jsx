export default function NotFound() {
  return (
    <div className="container mx-auto">
      <div className="font-bebas text-[90px] leading-none mb-12">Page Not Found</div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="flex justify-center items-center">
          <img
            src="https://assets.boxingoctop.us/img/eeby-deeby-404.jpg"
            alt="404"
            className="w-[50%] max-w-md h-auto"
          />
        </div>
        <div className="font-bebas text-[90px] leading-none mt-[100px]">
          Oh No, You seem to have taken a wrong turn.
        </div>
      </div>
    </div>
  );
}
