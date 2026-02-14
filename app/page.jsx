export default function Home() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full items-center">
      <div className="flex items-center w-full pl-4 md:pl-12">
        <img
          src="https://assets.boxingoctop.us/img/Logo%20White.png"
          alt="Boxing Octopus logo"
          className="w-full max-w-md mt-[100px]"
        />
      </div>
      <div className="flex justify-end items-center font-bebas text-[90px] leading-none mt-[100px]">
        Boxing Octopus Creative is a Toronto-Based Digital Content Brand With Many Tentacles
      </div>
    </div>
  );
}
