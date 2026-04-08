import { PortableText } from '@portabletext/react';
import { groq } from 'next-sanity';
import { urlForImage } from '@/lib/sanity.image';
import { sanityClient, isSanityConfigured } from '@/lib/sanity.client';
import Image from 'next/image';

type PortableTextBlock = {
  _key: string;
  _type: 'block';
  children?: Array<{
    _key: string;
    _type: string;
    text?: string;
  }>;
};

type SanityProfile = {
  _id: string;
  profileImage?: {
    asset?: unknown;
  };
  profileImageAlt?: string;
  profileText?: PortableTextBlock[];
};

const profileQuery = groq`
  *[_type == "profile"] | order(_updatedAt desc)[0] {
    _id,
    profileImage,
    profileImageAlt,
    profileText,
  }
`;

async function getProfile(): Promise<SanityProfile | null> {
  if (!isSanityConfigured()) {
    return null;
  }

  return sanityClient.fetch<SanityProfile | null>(profileQuery, {}, { next: { revalidate: 60 } });
}

export default async function About() {
  const profile = await getProfile();

  return (
    <div className="container mx-auto">
      <div className="boc-page-title pb-6">About</div>
      {!isSanityConfigured() ? (
        <p className="boc-page-content mb-6">
          Add `NEXT_PUBLIC_SANITY_PROJECT_ID` and `NEXT_PUBLIC_SANITY_DATASET` to start loading profile
          content from Sanity.
        </p>
      ) : null}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        {/* Column 1: images */}
        <div className="flex flex-col gap-6 items-center md:items-start">
          {isSanityConfigured() && profile === null ? (
            <p className="boc-page-content text-center md:text-left">
              No profile yet. Add a `profile` document in `/studio` to populate this page.
            </p>
          ) : null}
          {isSanityConfigured() && profile !== null && profile.profileImage?.asset ? (
            <Image
              src={urlForImage(profile.profileImage.asset).width(512).height(512).auto('format').url()}
              alt={profile.profileImageAlt ?? 'Profile'}
              width={512}
              height={512}
              className="w-full max-w-md h-auto rounded-full grayscale contrast-150"
            />
          ) : null}
          {isSanityConfigured() && profile !== null && !profile.profileImage?.asset ? (
            <p className="boc-page-content">Add a profile image in Studio to show it here.</p>
          ) : null}
        </div>
        <div className="boc-page-content text-3xl align-middle">
          {isSanityConfigured() && profile !== null && profile.profileText && profile.profileText.length > 0 ? (
            <div className="mb-6">
              <PortableText value={profile.profileText} />
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}
