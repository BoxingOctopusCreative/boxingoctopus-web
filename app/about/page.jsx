export default function About() {
  return (
    <div className="container mx-auto">
      <div className="font-bebas text-[90px] leading-none mb-12">About</div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="flex justify-center items-center">
          <img
            src="https://assets.boxingoctop.us/img/ryan-square.jpg"
            alt="Ryan"
            className="w-[400px] h-auto rounded-full grayscale"
          />
        </div>
        <div className="font-bebas text-2xl">
          <p>
            My Name is Ryan Draga. Owner and Founder of Boxing Octopus Creative; the Toronto-based digital content brand with many tentacles.
            <br /><br />
            I created this website (and the Boxing Octopus brand) to showcase my work both as a developer and graphic designer.
            <br /><br />
            With that said, I am also available for any freelance work. My information can be found on the Contact page.
          </p>
        </div>
      </div>
    </div>
  );
}
