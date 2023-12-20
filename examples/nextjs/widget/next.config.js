/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,

  transpilePackages: [
    '@chatbotkit/sdk',
    '@chatbotkit/next',
    '@chatbotkit/react',
  ],
}

module.exports = nextConfig
