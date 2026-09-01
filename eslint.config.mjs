import { FlatCompat } from '@eslint/eslintrc'

const compat = new FlatCompat({
  baseDirectory: import.meta.dirname,
  resolvePluginsRelativeTo: import.meta.dirname,
})

const config = [
  {
    ignores: [
      '**/node_modules/**',
      '**/dist/**',
      '**/types/**',
      '**/src/types/api/v1.d.ts',
    ],
  },
  ...compat.config({
    extends: ['plugin:@typescript-eslint/recommended', 'prettier'],
    parser: '@typescript-eslint/parser',
    rules: {
      'no-console': 'error',
      'newline-before-return': 'error',
      curly: ['error', 'all'],
      yoda: 'error',
    },
    env: {
      browser: true,
      node: true,
      es6: true,
    },
  }),
  {
    files: ['**/next.config.js'],
    rules: {
      '@typescript-eslint/no-require-imports': 'off',
    },
  },
]

export default config
