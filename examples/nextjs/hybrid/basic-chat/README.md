Welcome to this basic chat example project that showcases the integration of the ChatBotKit SDK with the Next.js framework. This project is designed to provide you with a clear and practical demonstration of how to leverage the powerful features of the ChatBotKit SDK alongside the ChatBotKit Next library in a Next.js environment to create a basic yet functional chat application.

**NOTE:** This is the Hybrid (App and Page router) version of the Basic Chat example.

The most important files in this project are:

- [pages/api/conversation/create.js](pages/api/conversation/[conversationId]/create.js) - used for creating a new conversation
- [pages/api/conversation/[conversationId]/create.js](pages/api/conversation/[conversationId]/create.js) - used for completing the conversation
- [app/page.jsx](app/page.jsx) - the main page where the chat interface is rendered
- [components/ChatArea.jsx](components/ChatArea.jsx) - the client-side chat area component

# This is how it works:

1. We create a conversation using the [pages/api/conversation/create.js](pages/api/conversation/create.js) endpoint. The endpoint returns a conversation ID.
2. We use the conversation ID to interact with the conversation using the [pages/api/conversation/[conversationId]/create.js](pages/api/conversation/[conversationId]/create.js) endpoint.
3. In the [components/ChatArea.jsx](components/ChatArea.jsx) we build a basic chat interface to interact with the endpoint.

## Getting Started

From the root of the ChatBotKit Node SDK monorepo:

```bash
pnpm -F @examples/nextjs-hybrid-router-stateless-chat
```

As a standalone application:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
