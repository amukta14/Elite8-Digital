/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  output: 'standalone',
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  env: {
    NEXT_PUBLIC_BASE_URL: process.env.NEXT_PUBLIC_BASE_URL || 'https://amukta-portfolio.onrender.com',
  },
  experimental: {
    metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL || 'https://amukta-portfolio.onrender.com'),
  },
}

module.exports = nextConfig 