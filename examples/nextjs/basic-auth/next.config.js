/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,

  transpilePackages: [
    '@chatbotkit/sdk',
    '@chatbotkit/next',
    '@chatbotkit/nextauth',
    '@chatbotkit/react',
  ],
}

export default nextConfig
