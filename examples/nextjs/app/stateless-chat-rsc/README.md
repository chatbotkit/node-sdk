Welcome to this stateless chat example project that showcases the integration of the ChatBotKit SDK with the Next.js framework. This project is designed to provide you with a clear and practical demonstration of how to leverage the powerful features of the ChatBotKit SDK alongside the ChatBotKit Next library in a Next.js environment to create a basic yet functional chat application.

**NOTE:** This is the App Router version of the Stateless Chat example that uses server-side rendering with server actions (pretty cool). If you are looking for the Page Router version, please refer to the [API Router version](../../stateless-chat/README.md).

The most important files in this project are:

- [actions/conversation.js](actions/conversation.js) - the server side actions that handle the conversation
- [app/page.jsx](app/page.jsx) - the main page where the chat interface is rendered
- [components/ChatArea.jsx](components/ChatArea.jsx) - the client-side chat area component

# This is how it works:

1. We create a specialised server-side action to handle incoming messages as well as streaming the response back to the client via the [actions/conversation.js](actions/conversation.js) file.
2. In the [components/ChatArea.jsx](components/ChatArea.jsx) we build a basic chat interface to interact with the action.

## Getting Started

From the root of the ChatBotKit Node SDK monorepo:

```bash
pnpm -F @examples/nextjs-app-router-stateless-chat-rsc dev
```

As a standalone application:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
