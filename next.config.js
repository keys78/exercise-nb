/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['i.dummyjson.com', 'cdn.dummyjson.com'],
  },
}

module.exports = nextConfig
