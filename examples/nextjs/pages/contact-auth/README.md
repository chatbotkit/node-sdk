# Contact API Authentication Example

Demonstrates passwordless email authentication with ChatBotKit Contacts using the Contact API and NextAuth.js.

## Features

- **Contact-based authentication** - Users are managed as contacts within your ChatBotKit account
- **Passwordless email auth** - Secure 6-character verification codes via NextAuth.js
- **Shared resources** - All contacts share the same bots, datasets, and other resources
- **Individual tracking** - Each contact has their own conversation history and preferences
- **Zero infrastructure overhead** - No need to build backend auth or manage user databases

## Use Case

Ideal for building AI applications where multiple users interact with shared AI assistants within a single ChatBotKit account. Unlike the Partner API approach (which creates separate sub-accounts), all contacts exist within your main account.

## Key Differences from Partner Auth

| Feature | Contact Auth | Partner Auth |
|---------|--------------|--------------|
| User isolation | Shared account | Separate sub-accounts |
| Resources | Shared across contacts | Per-user resources |
| Billing | Single account | Per sub-account |
| Use case | Multi-user chat apps | White-label solutions |

## Getting Started

From the root of the ChatBotKit Node SDK monorepo:

```bash
pnpm -F @examples/nextjs-pages-router-contact-auth dev
```

As a standalone application:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
