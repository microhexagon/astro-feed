import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'via.placeholder.com',
      },
      // Add NASA APOD image domains
      {
        protocol: 'https',
        hostname: 'apod.nasa.gov',
        port: '',
        pathname: '/apod/image/**',
      },
      {
        protocol: 'https',
        hostname: 'www.nasa.gov',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;