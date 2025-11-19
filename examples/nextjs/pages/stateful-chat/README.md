Welcome to this basic chat example project that showcases the integration of the ChatBotKit SDK with the Next.js framework. This project is designed to provide you with a clear and practical demonstration of how to leverage the powerful features of the ChatBotKit SDK alongside the ChatBotKit React library in a Next.js environment to create a basic yet functional chat application.

The most important files in this project are:

- [pages/api/session/create.js](pages/api/session/create.js) - used for creating a conversation session
- [pages/index.js](pages/index.js) - used for rendering a basic UI

This is how it works:

1. We create a chat session via the [pages/api/session/create.js](pages/api/session/create.js) route. The resulting conversationId and token can be used to securely open a chat session to the ChatBotKit SDK without having an intermediate layer.
2. In the [pages/index.js](pages/index.js) we build a basic chat interface and use the token and conversationId to chat to the bot.

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
