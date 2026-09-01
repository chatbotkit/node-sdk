# User Authentication Example

Demonstrates passwordless email authentication with automatic ChatBotKit user provisioning through the User API and NextAuth.js.

## Features

- **Automatic user creation** - User API creates and manages isolated users on demand
- **Passwordless email auth** - Secure 6-character verification codes via NextAuth.js
- **Direct user access** - Users are automatically logged into their dedicated ChatBotKit workspace
- **Zero infrastructure overhead** - No need to build backend auth or manage user databases

## Use Case

Ideal for quickly building AI applications where each user needs their own isolated ChatBotKit environment without managing complex authentication infrastructure.

## Getting Started

From the root of the ChatBotKit Node SDK monorepo:

```bash
pnpm -F @examples/nextjs-pages-router-user-auth dev
```

As a standalone application:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
