import type { NextConfig } from 'next';

const pagesBasePath = process.env.PAGES_BASE_PATH ?? '';
const pagesBaseUrl = process.env.PAGES_BASE_URL ?? '';

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  basePath: pagesBasePath,
  assetPrefix:
    pagesBasePath && pagesBaseUrl ? pagesBaseUrl : undefined,
  images: {
    unoptimized: true,
  },
  env: {
    NEXT_PUBLIC_BASE_PATH: pagesBasePath,
  },
};

export default nextConfig;
