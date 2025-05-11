import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    images: {
      remotePatterns: [
        { protocol: "https", hostname: "assets.aceternity.com"},
      ],
       domains: ['res.cloudinary.com'],
    }
};

export default nextConfig;
