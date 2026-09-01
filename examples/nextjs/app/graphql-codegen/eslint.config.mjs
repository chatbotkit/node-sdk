import nextCoreWebVitals from 'eslint-config-next/core-web-vitals'

import baseConfig from '../../../../eslint.config.mjs'

const nextConfig = nextCoreWebVitals.filter(
  ({ name }) => name !== 'next/typescript'
)

const config = [
  ...nextConfig,
  ...baseConfig,
  {
    ignores: ['bootstrap.js', 'src/generated/**'],
  },
  {
    rules: {
      // @note Adopt the React compiler-oriented hooks rules separately from
      // the Next 16 toolchain migration so existing examples keep linting.
      'react-hooks/globals': 'off',
      'react-hooks/immutability': 'off',
      'react-hooks/preserve-manual-memoization': 'off',
      'react-hooks/purity': 'off',
      'react-hooks/refs': 'off',
      'react-hooks/set-state-in-effect': 'off',
      'react-hooks/static-components': 'off',
      'react-hooks/use-memo': 'off',
    },
  },
]

export default config
