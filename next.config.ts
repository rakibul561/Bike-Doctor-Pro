import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.ibb.co', // সঠিক হোস্টনেম
        port: '',
        pathname: '**',
        search: '',
      },
    ],
  },
};

export default nextConfig;
