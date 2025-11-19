Welcome to this stateless chat example project that showcases the integration of the ChatBotKit SDK with the Vite framework. This project is designed to provide you with a clear and practical demonstration of how to leverage the powerful features of the ChatBotKit SDK in a Vite environment to create a basic yet functional chat application.

The most important files in this project are:

- [server.js](server.js) - used for completing the conversation (backend)
- [src/App.jsx](src/App.jsx) - used for rendering a basic UI

# This is how it works:

1. We create a dedicated endpoint to handle incoming messages via the `server.js` (Express) server. The route automatically streams the response back to the client.
2. In the [src/App.jsx](src/App.jsx) we build a basic chat interface to interact with the endpoint.

## Getting Started

From the root of the ChatBotKit Node SDK monorepo:

```bash
pnpm -F @examples/vite-react-stateless-chat dev
pnpm -F @examples/vite-react-stateless-chat server
```

As a standalone application:

1. Install dependencies:
```bash
pnpm install
```

2. Start the backend server:
```bash
pnpm server
```

3. Start the Vite development server:
```bash
pnpm dev
```

Open [http://localhost:5173](http://localhost:5173) with your browser to see the result.
