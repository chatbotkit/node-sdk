Welcome to this GraphQL Code Generator example that showcases how to use ChatBotKit's GraphQL API with type-safe code generation in a Next.js application. This project demonstrates the complete setup process from the [official tutorial](https://chatbotkit.com/tutorials/using-graphql-code-generator-with-chatbotkit-s-graphql-api), including authentication configuration, GraphQL operation definitions, and type-safe API integration.

**NOTE:** This is the App Router version demonstrating GraphQL Code Generator integration with ChatBotKit's GraphQL API.

The most important files in this project are:

- [codegen.ts](codegen.ts) - GraphQL Code Generator configuration with authentication
- [src/queries/\*.graphql](src/queries/) - GraphQL query and mutation definitions
- [app/api/chatbots/route.js](app/api/chatbots/route.js) - API route using generated SDK
- [components/ChatbotList.jsx](components/ChatbotList.jsx) - UI component displaying chatbots

# This is how it works:

1. **Configuration Setup**: The [codegen.ts](codegen.ts) file configures GraphQL Code Generator with ChatBotKit's GraphQL endpoint using TypeScript plugins (`typescript`, `typescript-operations`, `typescript-graphql-request`). It includes authentication headers required to access the schema, as ChatBotKit's endpoint requires proper authorization for schema introspection.

2. **Define GraphQL Operations**: In the `src/queries/` directory, we define GraphQL queries and mutations in separate `.graphql` files. These files contain pure GraphQL syntax that specifies exactly what data we want to fetch from or send to the ChatBotKit API.

3. **Generate Types and SDK**: Running `npm run codegen` introspects the ChatBotKit GraphQL schema and generates TypeScript types and a type-safe SDK in `src/generated/graphql.ts`. This creates:

   - TypeScript type definitions for all GraphQL types
   - Type-safe operation functions
   - A complete SDK with methods for all queries and mutations

4. **Use Generated SDK in API Route**: The [app/api/chatbots/route.js](app/api/chatbots/route.js) imports the generated SDK using `getSdk()` and calls type-safe methods like `sdk.ListChatbots()`. TypeScript knows the exact structure of variables and response data at compile time.

5. **Display Results**: The [components/ChatbotList.jsx](components/ChatbotList.jsx) component fetches data from our API route and displays the list of chatbots with type-safe data structures flowing through the entire application.

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
│   ├── api/
│   │   └── chatbots/
│   │       └── route.js          # API route using generated SDK
│   ├── globals.css               # Basic styles
│   ├── layout.jsx                # Root layout
│   └── page.jsx                  # Home page
├── components/
│   └── ChatbotList.jsx           # Chatbot list component
├── src/
│   ├── generated/                # Generated GraphQL code (gitignored)
│   │   └── graphql.ts            # Generated types and SDK
│   └── queries/                  # GraphQL operation definitions
│       ├── listChatbots.graphql  # List chatbots query
│       ├── getChatbot.graphql    # Get single chatbot query
│       └── createChatbot.graphql # Create chatbot mutation
├── .env.example                  # Environment variables template
├── .gitignore                    # Git ignore rules
├── bootstrap.js                  # Setup script
├── codegen.ts                    # GraphQL Code Generator config
├── next.config.js                # Next.js configuration
├── package.json                  # Dependencies and scripts
└── README.md                     # This file
```

## GraphQL Operations

The example includes three GraphQL operations defined in separate `.graphql` files:

### ListChatbots Query (`src/queries/listChatbots.graphql`)

Fetches a paginated list of chatbots:

```graphql
query ListChatbots($cursor: ID, $order: String, $take: Int) {
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

### GetChatbot Query (`src/queries/getChatbot.graphql`)

Fetches a single chatbot with detailed information:

```graphql
query GetChatbot($id: ID!) {
  bot: bots(botIds: [$id], last: 1) {
    edges {
      node {
        id
        name
        description
        backstory
        model
        moderation
        createdAt
        updatedAt
      }
    }
  }
}
```

### CreateChatbot Mutation (`src/queries/createChatbot.graphql`)

Creates a new chatbot:

```graphql
mutation CreateChatbot($input: BotCreateRequest!) {
  createBot(input: $input) {
    id
  }
}
```

## Using the Generated SDK

After running `npm run codegen`, you get a complete type-safe SDK. Here's how to use it:

```javascript
import { getSdk } from './src/generated/graphql'

import { GraphQLClient } from 'graphql-request'

// Create GraphQL client with authentication
const client = new GraphQLClient('https://api.chatbotkit.com/api/v1/graphql', {
  headers: {
    Authorization: `Bearer ${process.env.CHATBOTKIT_API_SECRET}`,
  },
})

// Get the type-safe SDK
const sdk = getSdk(client)

// Use the SDK methods - TypeScript knows the exact shape of variables and responses
const data = await sdk.ListChatbots({
  cursor: undefined,
  order: 'desc',
  take: 10,
})

// Extract chatbots from edges (fully typed)
const chatbots =
  data.bots?.edges?.map((edge) => edge?.node).filter(Boolean) || []
console.log(chatbots)
```

The SDK provides methods for all your defined GraphQL operations:

- `sdk.ListChatbots(variables)` - Type-safe query
- `sdk.GetChatbot(variables)` - Type-safe query
- `sdk.CreateChatbot(variables)` - Type-safe mutation

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

### No Chatbots Displayed

If the application runs but shows no chatbots:

1. Verify you have chatbots created in your ChatBotKit account
2. Check the browser console for API errors
3. Ensure your API key has permission to read chatbots
4. Try accessing the API route directly: `http://localhost:3000/api/chatbots`

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

- Add a form to create new chatbots using the `CreateChatbot` mutation
- Implement pagination using the cursor parameter
- Add more detailed views using the `GetChatbot` query
- Explore other ChatBotKit GraphQL operations (datasets, conversations, etc.)
- Add error handling and loading states
- Implement real-time updates using GraphQL subscriptions

## Conclusion

This example demonstrates how GraphQL Code Generator provides a robust foundation for building type-safe applications with ChatBotKit's GraphQL API. The authentication setup ensures secure schema access while enabling powerful development-time features like autocompletion and compile-time type checking.
