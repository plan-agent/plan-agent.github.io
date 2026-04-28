import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/camp-assistant",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
