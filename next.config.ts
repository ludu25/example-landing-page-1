import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  target: 'serverless',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
