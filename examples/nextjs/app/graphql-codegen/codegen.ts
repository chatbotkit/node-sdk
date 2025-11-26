import * as dotenv from 'dotenv'

import type { CodegenConfig } from '@graphql-codegen/cli'

dotenv.config()

/**
 * GraphQL Code Generator configuration for ChatBotKit's GraphQL API.
 *
 * This configuration generates TypeScript types from GraphQL schema and operations
 * using the typescript plugins. This approach is used in the main ChatBotKit platform
 * and provides full type safety with graphql-request.
 *
 * Important: ChatBotKit's GraphQL endpoint requires authentication headers to access
 * the schema definitions. This is intentionally designed this way because some customers
 * may have custom GraphQL extensions that require proper authorization to access.
 */
const config: CodegenConfig = {
  schema: [
    {
      'https://api.chatbotkit.com/api/v1/graphql': {
        headers: {
          Authorization: `Bearer ${process.env.CHATBOTKIT_API_SECRET}`,
        },
      },
    },
  ],
  documents: ['src/queries/**/*.graphql'],
  generates: {
    './src/generated/graphql.ts': {
      plugins: [
        'typescript',
        'typescript-operations',
        'typescript-graphql-request',
      ],
      config: {
        typesPrefix: 'CBK',
      },
    },
  },
}

export default config
