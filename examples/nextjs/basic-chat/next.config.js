/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,

  transpilePackages: ['@chatbokit/react', '@chatbotkit/sdk'],
}

module.exports = nextConfig
