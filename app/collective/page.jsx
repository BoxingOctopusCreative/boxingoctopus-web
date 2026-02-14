export default function Collective() {
  return (
    <div className="container mx-auto">
      <div className="font-bebas text-[90px] leading-none mb-12">Collective</div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
        <div className="flex justify-center items-center">
          <img
            src="https://assets.boxingoctop.us/img%2Fcollective-logo.png"
            alt="Collective logo"
            className="w-[400px] max-w-full h-auto"
          />
        </div>
        <div className="font-bebas text-2xl">
          <p>
            One of my great passions in life is not only learning, but mentoring and passing on knowledge to others.
            <br /><br />
            To that end, I created a Discord server where folks can collaborate and learn from one another. We all have things we&apos;re passionate about, and I want to help people share their passion and knowledge with others.
            <br /><br />
            With that said, I hope you&apos;ll join us.
          </p>
        </div>
        <div className="flex justify-center items-center">
          <iframe
            title="Discord"
            src="https://discord.com/widget?id=581293084076408843&theme=dark"
            width="350"
            height="500"
            allowTransparency
            frameBorder="0"
            sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
            className="rounded-lg"
          />
        </div>
      </div>
    </div>
  );
}
