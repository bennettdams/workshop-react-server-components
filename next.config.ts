import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  logging: { fetches: { fullUrl: true } },
  devIndicators: {
    appIsrStatus: true,
    buildActivity: true,
    buildActivityPosition: "bottom-right",
  },
};

export default nextConfig;
