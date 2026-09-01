const path = require('node:path')

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  turbopack: {
    root: path.resolve(__dirname, '../../../..'),
  },
  transpilePackages: [
    '@chatbotkit/react',
    '@chatbotkit/sdk',
    '@chatbotkit/next',
    '@chatbotkit/fetch',
  ],

  experimental: {
    serverActions: {
      allowedOrigins: ['localhost:3000'],
    },
  },
}

module.exports = nextConfig
