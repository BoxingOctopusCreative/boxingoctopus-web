import { createImageUrlBuilder } from '@sanity/image-url';
import { sanityClient } from './sanity.client';

const builder = createImageUrlBuilder(sanityClient);

type SanityImageSource = Parameters<typeof builder.image>[0];

export function urlForImage(source: unknown) {
  return builder.image(source as SanityImageSource);
}
