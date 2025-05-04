import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    ppr: 'incremental'
  },
  eslint: {
    // Allow production builds to complete even if ESLint errors are present
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
