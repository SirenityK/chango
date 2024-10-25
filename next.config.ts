import type { NextConfig } from "next";

const prod = process.env.TAURI_DEV_HOST || "localhost";
const internalHost = process.env.TAURI_DEV_HOST || "localhost";

const nextConfig: NextConfig = {
  /* config options here */
  output: "export",

  images: {
    unoptimized: true,
  },

  assetPrefix: prod ? undefined : `http://${internalHost}:3000`,
};

export default nextConfig;
