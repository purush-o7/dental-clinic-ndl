import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/dental-clinic-ndl",
  images: { unoptimized: true },
};

export default nextConfig;
