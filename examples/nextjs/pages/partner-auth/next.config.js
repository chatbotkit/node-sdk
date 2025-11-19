/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,

  transpilePackages: [
    '@chatbotkit/react',
    '@chatbotkit/sdk',
    '@chatbotkit/next',
    '@chatbotkit/fetch',
    '@chatbotkit/nextauth',
  ],
}

export default nextConfig
