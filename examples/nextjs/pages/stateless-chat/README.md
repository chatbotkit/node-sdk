# Stateless Chat Example

A Next.js example demonstrating stateless chat implementation with the ChatBotKit SDK. Each message is processed independently without maintaining conversation state on the server.

## How It Works

1. **API Route** - [pages/api/conversation/complete.js](pages/api/conversation/complete.js) handles incoming messages and streams responses back to the client
2. **UI Component** - [pages/index.js](pages/index.js) provides a basic chat interface

## Key Features

- Stateless message processing
- Streaming responses for real-time feedback
- Simple integration with Next.js API routes

## Getting Started

From the root of the ChatBotKit Node SDK monorepo:

```bash
pnpm -F @examples/nextjs-pages-router-stateless-chat dev
```

As a standalone application:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
