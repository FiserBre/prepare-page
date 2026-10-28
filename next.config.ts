import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  // Keep Turbopack scoped to this project; a package-lock in the user's home
  // folder would otherwise be picked up as the workspace root.
  turbopack: { root: process.cwd() },
};

export default nextConfig;
