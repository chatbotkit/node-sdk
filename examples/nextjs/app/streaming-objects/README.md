In this example we demonstrate how to use ChatBotKit React primitives for server-side streaming.

The most important files in this project are:

- [actions/objects.js](actions/object.js) - the server side stream generator
- [components/Objects.jsx](components/Objects.jsx) - a client-side component that consumes the stream

# This is how it works:

1. In the [actions/objects.js](actions/objects.js) we create a stream of objects that are sent to the client using the `streamObjects` server-side function. This function wraps around an async generator using the ChatBotKit `stream` helper function. The generator yields objects that are sent to the client.
2. In the [components/Objects.jsx](components/Objects.jsx) we build a basic interface to consume the objects from the stream. We use the ChatBotKit `consume` helper functions to consume the stream.

## Getting Started

From the root of the ChatBotKit Node SDK monorepo:

```bash
pnpm -F @examples/nextjs-app-router-streaming-objects dev
```

As a standalone application:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
