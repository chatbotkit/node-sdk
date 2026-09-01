const path = require('node:path')

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  turbopack: {
    root: path.resolve(__dirname, '../../../..'),
  },
  experimental: {
    serverActions: {
      allowedOrigins: [
        'localhost:3000',
        'automatic-space-barnacle-pq6j94r77hx6-3000.app.github.dev',
      ],
    },
  },

  transpilePackages: ['@chatbotkit/react'],
}

module.exports = nextConfig
