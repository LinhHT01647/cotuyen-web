import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [],
  },
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: "http://160.191.50.180/v1/:path*",
      },
    ];
  },
};

export default nextConfig;
