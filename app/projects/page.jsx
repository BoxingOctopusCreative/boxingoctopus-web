const projects = [
  {
    href: 'https://ryandraga.me',
    img: 'https://boxingoctopus-assets.nyc3.digitaloceanspaces.com/img/nerd-emporium-banner-logo.png',
    alt: "Ryan Draga's Nerd Emporium",
    title: "Ryan Draga's Nerd Emporium",
    description: "My Personal Blog, featuring my work, my thoughts, and my life.",
  },
  {
    href: 'https://mylifeinmusic.me',
    img: 'https://boxingoctopus-assets.nyc3.digitaloceanspaces.com/img/mlim-circular-logo.png',
    alt: 'My Life In Music',
    title: 'My Life In Music',
    description: 'A project I started wherein I attempt to catalogue all the random music I get stuck in my head through Spotify.',
  },
  {
    href: 'https://hipsterdonut.myspreadshop.ca',
    img: 'https://assets.boxingoctop.us/img/hipsterdonut-logo-wide.png',
    alt: 'Hipster Donut Apparel',
    title: 'Hipster Donut Apparel',
    description: 'I get bored and doodle in Illustrator a lot. Sometimes I put those doodles on t-shirts and sell them. Why not buy one?',
  },
  {
    href: 'https://chainsinventinsanity.com',
    img: 'https://boxingoctopus-assets.nyc3.digitaloceanspaces.com/img/ci2-logo-black.png',
    alt: 'Chains Invent Insanity',
    title: 'Chains Invent Insanity',
    description: 'A Cards Against Humanity Card Generator that uses Markov Chains to generate cards; built with React and Flask.',
  },
];

export default function Projects() {
  return (
    <div className="container mx-auto">
      <div className="font-bebas text-[90px] leading-none mb-12">Projects</div>
      <div className="space-y-8 mb-6">
        {projects.map((project) => (
          <div
            key={project.href}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center"
          >
            <a
              href={project.href}
              target="_blank"
              rel="noreferrer"
              className="block"
            >
              <img
                src={project.img}
                alt={project.alt}
                width={400}
                className="max-w-full h-auto"
              />
            </a>
            <div>
              <h3 className="font-bebas text-2xl mb-2">{project.title}</h3>
              <p className="font-bebas text-2xl">{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
