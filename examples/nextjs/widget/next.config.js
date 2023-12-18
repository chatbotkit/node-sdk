/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,

  transpilePackages: [
    '@chatbotkit/sdk',
    '@chatbotkit/next',
    '@chatbokit/react',
  ],
}

module.exports = nextConfig
