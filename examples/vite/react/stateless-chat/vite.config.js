import react from '@vitejs/plugin-react'

import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react({
      include: ['**/*.jsx', '**/*.js'],
    }),
  ],
  server: {
    proxy: {
      '/api': 'http://localhost:3001',
    },
  },
  optimizeDeps: {
    include: ['@chatbotkit/react', '@chatbotkit/sdk', '@chatbotkit/fetch'],
    esbuildOptions: {
      loader: {
        '.js': 'jsx',
      },
    },
  },
  build: {
    commonjsOptions: {
      include: [/node_modules/, /@chatbotkit/],
      transformMixedEsModules: true,
    },
  },
  esbuild: {
    loader: 'jsx',
    include: /.*\.jsx?$/,
    exclude: [],
  },
})
