import path from 'path';
import { fileURLToPath } from 'url';
import type { NextConfig } from 'next';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const nextConfig: NextConfig = {
  reactStrictMode: true,
  transpilePackages: ['next-sanity', 'sanity'],
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'cdn.sanity.io' },
      { protocol: 'https', hostname: 'assets.boxingoctop.us' },
    ],
  },
  // Prefer this repo when multiple lockfiles exist (e.g. parent workspace)
  outputFileTracingRoot: path.join(__dirname),
};

export default nextConfig;
