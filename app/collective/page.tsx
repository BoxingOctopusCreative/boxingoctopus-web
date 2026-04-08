import Image from 'next/image';

export default function Collective() {
  return (
    <div className="container mx-auto">
      <div className="boc-page-title">Collective</div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
        <div className="flex justify-center items-center">
          <Image
            src="https://assets.boxingoctop.us/img%2Fcollective-logo.png"
            alt="Collective logo"
            width={400}
            height={400}
            className="w-full max-w-md items-center h-auto"
          />
        </div>
        <div className="boc-page-content">
          <p>
            One of my great passions in life is not only learning, but mentoring and passing on knowledge to others.
            <br />
            <br />
            To that end, I created a Discord server where folks can collaborate and learn from one another. We all have
            things we&apos;re passionate about, and I want to help people share their passion and knowledge with others.
            <br />
            <br />
            With that said, I hope you&apos;ll join us.
          </p>
        </div>
        <div className="flex justify-center items-center">
          <iframe
            title="Discord"
            src="https://discord.com/widget?id=581293084076408843&theme=dark"
            width={350}
            height={500}
            allowtransparency="true"
            sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
            className="w-full max-w-[350px] h-[500px] rounded-lg border-0"
          />
        </div>
      </div>
    </div>
  );
}
