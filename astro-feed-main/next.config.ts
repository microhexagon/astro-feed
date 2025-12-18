import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        hostname: "via.placeholder.com",
      },
      {
        hostname: "apod.nasa.gov",
      },
      {
        // GitHub images 
        hostname: "avatars.githubusercontent.com",
      },
    ],
  },
};

export default nextConfig;