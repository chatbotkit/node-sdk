import path from 'node:path'

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  turbopack: {
    root: path.resolve(import.meta.dirname, '../../../..'),
  },
  transpilePackages: [
    '@chatbotkit/react',
    '@chatbotkit/sdk',
    '@chatbotkit/next',
    '@chatbotkit/fetch',
    '@chatbotkit/nextauth',
  ],
}

export default nextConfig
