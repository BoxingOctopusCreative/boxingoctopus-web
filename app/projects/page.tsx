import { PortableText } from '@portabletext/react';
import { groq } from 'next-sanity';
import Image from 'next/image';
import { sanityClient, isSanityConfigured } from '@/lib/sanity.client';
import { urlForImage } from '@/lib/sanity.image';

type PortableTextBlock = {
  _key: string;
  _type: 'block';
  children?: Array<{
    _key: string;
    _type: string;
    text?: string;
  }>;
};

type SanityProject = {
  _id: string;
  projectTitle: { text: string; url: string };
  projectDescription: PortableTextBlock[];
  projectImage: {
    asset: unknown;
    alt: string;
    url: string;
  };
};

const projectsQuery = groq`
  *[_type == "project"] | order(displayOrder asc, _createdAt asc) {
    _id,
    projectTitle,
    projectDescription,
    projectImage
  }
`;

async function getProjects(): Promise<SanityProject[]> {
  if (!isSanityConfigured()) {
    return [];
  }

  return sanityClient.fetch<SanityProject[]>(projectsQuery, {}, { next: { revalidate: 60 } });
}

export default async function Projects() {
  const projects = await getProjects();

  return (
    <div className="container mx-auto">
      <div className="boc-page-title">Projects</div>
      {!isSanityConfigured() ? (
        <p className="boc-page-content mb-6">
          Add `NEXT_PUBLIC_SANITY_PROJECT_ID` and `NEXT_PUBLIC_SANITY_DATASET` to start loading
          projects from Sanity.
        </p>
      ) : null}
      <div className="space-y-8 mb-6">
        {isSanityConfigured() && projects.length === 0 ? (
          <p className="boc-page-content">
            No projects yet. Add `project` documents in `/studio` to populate this page.
          </p>
        ) : null}
        {projects.map((project) => (
          <div key={project._id} className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
            <a href={project.projectImage.url} target="_blank" rel="noreferrer" className="block">
              <Image
                src={urlForImage(project.projectImage.asset).width(800).auto('format').url()}
                alt={project.projectImage.alt}
                width={400}
                height={225}
                className="max-w-full h-auto"
              />
            </a>
            <div>
              <h3 className="font-bebas text-4xl mb-2 max-md:portrait:hidden">
                <a href={project.projectTitle.url} target="_blank" rel="noreferrer">
                  {project.projectTitle.text}
                </a>
              </h3>
              <div className="boc-page-content">
                <PortableText value={project.projectDescription} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
