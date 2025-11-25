Welcome to this stateless RAG (retrieval augmented generation) example project that showcases the integration of the ChatBotKit SDK with the Next.js framework. This project is designed to provide you with a clear and practical demonstration of how to leverage the powerful features of the ChatBotKit SDK alongside the ChatBotKit Next library in a Next.js environment to create a basic yet functional chat application.

In this example we use several features to facilitate building a RAG chatbot:

- A solution which is made from a number of components. In this case we use a Sitemap Integration and a Dataset. The Sitemap Integration is used to spider a webisite and create the corresponding records in the Dataset. The Dataset is then used to retrieve the information when the user asks for it.
- A streaming server-side action that handles the conversation and sends the response back to the client.

The most important files in this project are:

- [.chatbotkit/solutions/rag.json](.chatbotkit/solutions/rag.json) - the solution file that defines the RAG chatbot
- [actions/search.jsx](actions/search.jsx) - the server side actions that handle the interactions with the RAG chatbot
- [app/page.jsx](app/page.jsx) - the main page where the chat interface is rendered
- [components/SearchArea.jsx](components/SearchArea.jsx) - the client-side search area component

# This is how it works:

1. We use a ChatBotKit solution to easily assamble the RAG system.
1. We create a specialised server-side action to handle incoming messages as well as streaming the response back to the client via the [actions/search.jsx](actions/search.jsx) file.
1. In the [components/SearchArea.jsx](components/SearchArea.jsx) we build a basic search interface to interact with the action.

## Getting Started

From the root of the ChatBotKit Node SDK monorepo:

```bash
pnpm -F @examples/nextjs-app-router-stateless-rag dev
```

As a standalone application:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
