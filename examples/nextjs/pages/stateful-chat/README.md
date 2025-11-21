# Stateful Chat Example

A Next.js example demonstrating stateful chat implementation with the ChatBotKit SDK. Maintains conversation context across multiple messages using sessions.

## How It Works

1. **Session Creation** - [pages/api/session/create.js](pages/api/session/create.js) creates a conversation session and returns a `conversationId` and secure `token`
2. **UI Component** - [pages/index.js](pages/index.js) uses the session credentials to maintain conversation context

## Key Features

- Persistent conversation state
- Secure session tokens for direct ChatBotKit SDK communication
- No intermediate server layer required for message handling

## Getting Started

From the root of the ChatBotKit Node SDK monorepo:

```bash
pnpm -F @examples/nextjs-pages-router-stateful-chat dev
```

As a standalone application:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
