import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  compiler: { styledComponents: true }
  // Als je later statisch wilt exporteren voor Capacitor:
  // output: "export",
  // images: { unoptimized: true }
};

export default nextConfig;
