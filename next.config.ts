import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',  // AWS: export static HTML/JS/CSS files
  images: {
    unoptimized: true  // Required for static export
  },
  // Kept from the original project: this is how Tailwind CSS gets compiled
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
  reactStrictMode: true,
};

export default nextConfig;
