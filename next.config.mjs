/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [{ protocol: "http", hostname: "app.econverse.com.br" }],
  },
};

export default nextConfig;
