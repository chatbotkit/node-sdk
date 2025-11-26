Welcome to this GraphQL Code Generator example that showcases how to use ChatBotKit's GraphQL API with type-safe code generation in a Next.js application. This project demonstrates the complete setup process from the [official tutorial](https://chatbotkit.com/tutorials/using-graphql-code-generator-with-chatbotkit-s-graphql-api), including authentication configuration, GraphQL operation definitions, and direct server-side data fetching.

**NOTE:** This is the App Router version demonstrating GraphQL Code Generator integration with ChatBotKit's GraphQL API using server components.

The most important files in this project are:

- [codegen.ts](codegen.ts) - GraphQL Code Generator configuration with authentication
- [src/queries/listBots.graphql](src/queries/listBots.graphql) - GraphQL query definition
- [app/page.jsx](app/page.jsx) - Server component using generated SDK

# This is how it works:

1. **Configuration Setup**: The [codegen.ts](codegen.ts) file configures GraphQL Code Generator with ChatBotKit's GraphQL endpoint using TypeScript plugins (`typescript`, `typescript-operations`, `typescript-graphql-request`). It includes authentication headers required to access the schema, as ChatBotKit's endpoint requires proper authorization for schema introspection.

2. **Define GraphQL Operations**: In the `src/queries/` directory, we define GraphQL queries in separate `.graphql` files. These files contain pure GraphQL syntax that specifies exactly what data we want to fetch from the ChatBotKit API.

3. **Generate Types and SDK**: Running `npm run codegen` introspects the ChatBotKit GraphQL schema and generates TypeScript types and a type-safe SDK in `src/generated/graphql.ts`. This creates:

   - TypeScript type definitions for all GraphQL types
   - Type-safe operation functions
   - A complete SDK with methods for all queries

4. **Use Generated SDK in Server Component**: The [app/page.jsx](app/page.jsx) imports the generated SDK using `getSdk()` and calls type-safe methods like `sdk.ListBots()` directly on the server. TypeScript knows the exact structure of variables and response data at compile time.

5. **Render Results**: The page component renders the list of bots directly as a server component, providing fast initial page loads and full type safety throughout the data flow.

## Key Features

### Type Safety

GraphQL Code Generator provides:

- **Compile-time validation** of field names and types
- **Auto-completion** in your IDE for query fields
- **Type inference** for query results and variables
- **Error prevention** by catching schema mismatches during development

### Authentication

ChatBotKit's GraphQL endpoint requires authentication for schema introspection. The configuration in `codegen.ts` includes:

```typescript
schema: [
  {
    'https://api.chatbotkit.com/api/v1/graphql': {
      headers: {
        Authorization: `Bearer ${process.env.CHATBOTKIT_API_SECRET}`,
      },
    },
  },
]
```

This ensures the code generator can access your schema, including any custom GraphQL extensions specific to your account.

### TypeScript Plugins Approach

The example uses TypeScript plugins to generate a complete type-safe SDK:

```typescript
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
}
```

This approach generates:

- TypeScript types for all GraphQL schema types (prefixed with `CBK`)
- Type definitions for all operations (queries, mutations)
- A complete SDK with `getSdk()` function that wraps all operations

## Prerequisites

Before getting started, ensure you have:

- Node.js installed
- A ChatBotKit account with an API key
- At least one chatbot created in your account (to see results)

## Getting Started

### From the ChatBotKit Node SDK Monorepo

```bash
pnpm -F @examples/nextjs-app-router-graphql-codegen bootstrap
pnpm -F @examples/nextjs-app-router-graphql-codegen codegen
pnpm -F @examples/nextjs-app-router-graphql-codegen dev
```

### As a Standalone Application

1. **Install dependencies**:

   ```bash
   npm run bootstrap
   ```

   This will copy `.env.example` to `.env` and install all dependencies.

2. **Configure your API key**:
   Edit `.env` and add your ChatBotKit API secret:

   ```bash
   CHATBOTKIT_API_SECRET=your_api_secret_here
   ```

3. **Generate GraphQL types**:

   ```bash
   npm run codegen
   ```

   This introspects the ChatBotKit GraphQL schema and generates type-safe code in `src/gql/`.

4. **Start the development server**:

   ```bash
   npm run dev
   ```

5. **Open your browser**:
   Navigate to [http://localhost:3000](http://localhost:3000) to see the list of your chatbots.

## Project Structure

```
├── app/
│   ├── globals.css               # Basic styles
│   ├── layout.jsx                # Root layout
│   └── page.jsx                  # Server component using generated SDK
├── src/
│   ├── generated/                # Generated GraphQL code (gitignored)
│   │   └── graphql.ts            # Generated types and SDK
│   └── queries/                  # GraphQL operation definitions
│       └── listBots.graphql      # List bots query
├── .env.example                  # Environment variables template
├── .gitignore                    # Git ignore rules
├── bootstrap.js                  # Setup script
├── codegen.ts                    # GraphQL Code Generator config
├── next.config.js                # Next.js configuration
├── package.json                  # Dependencies and scripts
└── README.md                     # This file
```

## GraphQL Operations

The example includes a GraphQL query defined in a `.graphql` file:

### ListBots Query (`src/queries/listBots.graphql`)

Fetches a paginated list of bots:

```graphql
query ListBots($cursor: ID, $take: Int) {
  bots(after: $cursor, last: $take) {
    edges {
      cursor
      node {
        id
        name
        description
        createdAt
        updatedAt
      }
    }
    pageInfo {
      hasNextPage
      hasPreviousPage
      startCursor
      endCursor
    }
  }
}
```

## Using the Generated SDK

After running `npm run codegen`, you get a complete type-safe SDK. Here's how to use it in a server component:

```javascript
import { getSdk } from '../src/generated/graphql'

import { GraphQLClient } from 'graphql-request'

export default async function Page() {
  // Create GraphQL client with authentication
  const client = new GraphQLClient(
    'https://api.chatbotkit.com/api/v1/graphql',
    {
      headers: {
        Authorization: `Bearer ${process.env.CHATBOTKIT_API_SECRET}`,
      },
    }
  )

  // Get the type-safe SDK
  const sdk = getSdk(client)

  // Use the SDK methods - TypeScript knows the exact shape of variables and responses
  const result = await sdk.ListBots({ take: 10 })

  // Extract bots from edges (fully typed)
  const bots = result.bots.edges.map((edge) => edge.node)

  return <div>{/* Render bots */}</div>
}
```

The SDK provides methods for all your defined GraphQL operations with full type safety.

## Troubleshooting

### Authentication Failures

If you encounter authentication errors during code generation:

1. Verify your API key is correct in `.env`
2. Ensure the `.env` file is in the project root
3. Check that your API key has the necessary permissions
4. Try running with explicit environment loading: `CHATBOTKIT_API_SECRET=your_key npm run codegen`

### Missing Generated Files

If the `src/generated/graphql.ts` file doesn't exist:

1. Make sure you ran `npm run codegen`
2. Check that your `.graphql` files in `src/queries/` have valid syntax
3. Verify the `codegen.ts` configuration is correct
4. Look for error messages in the console output
5. Ensure your API key in `.env` is correct

### Type Errors

If you encounter TypeScript errors:

1. Ensure you've run `npm run codegen` after changing queries
2. Restart your TypeScript server in VS Code (Cmd/Ctrl + Shift + P → "Restart TS Server")
3. Check that imported types match your query definitions

### No Bots Displayed

If the application runs but shows no bots:

1. Verify you have bots created in your ChatBotKit account
2. Check the server console for API errors
3. Ensure your API key has permission to read bots

## Best Practices

1. **Version Control**: Generated files in `src/generated/` are in `.gitignore` and should be regenerated locally by each developer.

2. **Regular Updates**: Run `npm run codegen` whenever:

   - You add new `.graphql` operation files
   - You modify existing GraphQL operations
   - The ChatBotKit API schema changes
   - You pull changes that include new operations

3. **Environment Management**: Never commit `.env` files with actual API keys. Use `.env.example` as a template.

4. **Operation Organization**:

   - Create separate `.graphql` files for each operation
   - Use descriptive query/mutation names
   - Group related operations in the same file when appropriate

5. **Type Safety**:
   - Use the generated SDK methods (`sdk.ListChatbots()`, etc.)
   - Let TypeScript infer types from the SDK
   - Use the generated `CBK*` types when needed

## Learn More

- [ChatBotKit Documentation](https://chatbotkit.com/docs)
- [ChatBotKit GraphQL API](https://chatbotkit.com/docs/api/graphql)
- [GraphQL Code Generator Tutorial](https://chatbotkit.com/tutorials/using-graphql-code-generator-with-chatbotkit-s-graphql-api)
- [GraphQL Code Generator Docs](https://the-guild.dev/graphql/codegen)
- [Next.js Documentation](https://nextjs.org/docs)

## What's Next?

Try extending this example:

- Add more GraphQL queries for creating or updating bots
- Implement pagination using the cursor parameter
- Add a detailed view for individual bots
- Explore other ChatBotKit GraphQL operations (datasets, conversations, etc.)
- Add client-side interactivity with 'use client' components
- Implement streaming responses for real-time updates

## Conclusion

This example demonstrates how GraphQL Code Generator provides a robust foundation for building type-safe applications with ChatBotKit's GraphQL API. The authentication setup ensures secure schema access while enabling powerful development-time features like autocompletion and compile-time type checking.
