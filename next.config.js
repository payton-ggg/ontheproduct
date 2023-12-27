/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
  },
  experimental: {
    serverActions: true,
  },
  output: 'export',
};

module.exports = {
  typescript : {
    ignoreBuildErrors: true,
  }
}
