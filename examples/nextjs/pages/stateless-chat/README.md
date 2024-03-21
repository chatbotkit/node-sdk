Welcome to this stateless chat example project that showcases the integration of the ChatBotKit SDK with the Next.js framework. This project is designed to provide you with a clear and practical demonstration of how to leverage the powerful features of the ChatBotKit SDK alongside the ChatBotKit Next library in a Next.js environment to create a basic yet functional chat application.

The most important files in this project are:

- [pages/api/conversation/complete.js](pages/api/conversation/complete.js) - used for completing the conversation
- [pages/index.js](pages/index.js) - used for rendering a basic UI

# This is how it works:

1. We create a dedicated endpoint to handle incoming messages via the [pages/api/conversation/complete.js](pages/api/conversation/complete.js) route. The route automatically streams the response back to the client.
2. In the [pages/index.js](pages/index.js) we build a basic chat interface to interact with the endpoint.

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
