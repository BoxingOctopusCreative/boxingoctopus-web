import { PortableText, type PortableTextComponents } from '@portabletext/react';
import { groq } from 'next-sanity';
import { sanityClient, isSanityConfigured } from '@/lib/sanity.client';

/** Renders Sanity bullet/numbered lists as real HTML lists (Tailwind preflight strips default markers). */
const jobDescriptionComponents: Partial<PortableTextComponents> = {
  list: {
    bullet: ({ children }) => (
      <ul
        className="list-square list-outside pl-5 space-y-1 my-3 [&_li>p]:my-0"
        role="list"
      >
        {children}
      </ul>
    ),
    number: ({ children }) => (
      <ol
        className="list-decimal list-outside pl-5 space-y-1 my-3 [&_li>p]:my-0"
        role="list"
      >
        {children}
      </ol>
    ),
  },
  listItem: {
    bullet: ({ children }) => <li className="pl-1">{children}</li>,
    number: ({ children }) => <li className="pl-1">{children}</li>,
  },
};

type PortableTextBlock = {
  _key: string;
  _type: 'block';
  children?: Array<{
    _key: string;
    _type: string;
    text?: string;
  }>;
};

type SanityResume = {
  _id: string;
  jobTitle: string;
  companyName: string;
  jobLocation: string;
  /** YYYY-MM (month + year only) */
  jobStartDate: string;
  presentJob: boolean;
  /** YYYY-MM when not present job */
  jobEndDate?: string;
  jobDescription: PortableTextBlock[];
};

/** Accepts YYYY-MM or legacy full ISO dates from older content. */
function formatMonthYear(value: string): string {
  const ym = value.slice(0, 7);
  if (!/^\d{4}-\d{2}$/.test(ym)) return value;
  const year = Number(ym.slice(0, 4));
  const month = Number(ym.slice(5, 7));
  return new Date(year, month - 1).toLocaleDateString('en-US', {
    month: 'short',
    year: 'numeric',
  });
}

const resumeQuery = groq`
  *[_type == "resume"] | order(jobStartDate desc) {
    _id,
    jobTitle,
    companyName,
    jobLocation,
    jobStartDate,
    presentJob,
    jobEndDate,
    jobDescription,
  }
`;

async function getResume(): Promise<SanityResume[]> {
  if (!isSanityConfigured()) {
    return [];
  }

  return sanityClient.fetch<SanityResume[]>(resumeQuery, {}, { next: { revalidate: 60 } });
}

export default async function Resume() {
  const resume = await getResume();

  return (
    <div className="container mx-auto">
      <div className="boc-page-title">Resume/CV</div>
      {!isSanityConfigured() ? (
        <p className="boc-page-content mb-6">
          Add `NEXT_PUBLIC_SANITY_PROJECT_ID` and `NEXT_PUBLIC_SANITY_DATASET` to start loading
          resume from Sanity.
        </p>
      ) : null}
      <div className="space-y-8 mb-6">
        {isSanityConfigured() && resume.length === 0 ? (
          <p className="boc-page-content">
            No resume yet. Add `resume` documents in `/studio` to populate this page.
          </p>
        ) : null}
        {resume.map((job) => (
          <div key={job._id} className="grid grid-cols-1 md:grid-cols-1 gap-6 items-center border-b-2 border-gray-500 my-6 pb-6 border-dotted">
            <div>
              <div className="grid grid-cols-2 md:grid-cols-2 gap-2">
                <div className="bg-gray-500 text-black pl-2 max-md:portrait:hidden">
                  <h3 className="font-bebas text-4xl mt-1 mb-1">
                    {job.jobTitle}
                  </h3>
                </div>
                <div className="font-bebas text-right text-3xl mt-1 mb-1">
                  {formatMonthYear(job.jobStartDate)} —{' '}
                  {job.presentJob
                    ? 'Present'
                    : job.jobEndDate
                      ? formatMonthYear(job.jobEndDate)
                      : ''}
                </div>
              </div>
              <div className="grid grid-cols-2 gap-x-4 items-baseline mb-2">
                <div className="font-bebas text-3xl pt-1 pl-2 ml-2 pr-12 w-fit max-w-full min-w-0 border-b-2 border-r-2 border-gray-500">
                  {job.companyName}
                </div>
                <div className="font-bebas text-2xl text-right">
                  {job.jobLocation}
                </div>
              </div>
              <div className="gap-2 pl-2">
                <div className="font-bebas text-2xl pt-6 mb-2">
                  Responsibilities / Achievements:
                </div>
              </div>
              <div className="boc-page-content text-xl mb-2">
                <PortableText
                  value={job.jobDescription}
                  components={jobDescriptionComponents}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}