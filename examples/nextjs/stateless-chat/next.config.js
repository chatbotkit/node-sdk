/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,

  transpilePackages: [
    '@chatbotkit/next',
    '@chatbokit/react',
    '@chatbotkit/sdk',
    '@chatbotkit/client',
  ],
}

module.exports = nextConfig
