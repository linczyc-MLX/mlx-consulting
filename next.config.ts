import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "framerusercontent.com",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/d360",
        destination: "/services/d-velop360",
        permanent: true,
      },
      {
        source: "/n4s",
        destination: "/services/not4sale",
        permanent: true,
      },
      {
        source: "/think",
        destination: "/services/thought-leadership",
        permanent: true,
      },
      {
        source: "/services/architectural-design",
        destination: "/services/development-management",
        permanent: true,
      },
      {
        source: "/portfolio/restaurants-and-bars",
        destination: "/portfolio/restaurants-bars",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
