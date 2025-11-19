/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,

  transpilePackages: ['@chatbotkit/react', '@chatbotkit/sdk'],
}

module.exports = nextConfig
