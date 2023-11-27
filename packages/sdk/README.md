[![Follow on Twitter](https://img.shields.io/twitter/follow/chatbotkit.svg?logo=twitter)](https://twitter.com/chatbotkit)
[![ChatBotKit](https://img.shields.io/badge/credits-ChatBotKit-blue.svg)](https://chatbotkit.com)
[![NPM](https://img.shields.io/npm/v/@chatbotkit/sdk.svg)](https://www.npmjs.com/package/@chatbotkit/sdk)

# ChatBotKit Node SDK

Welcome to the ChatBotKit Node SDK. This is a Node.js-based solution designed to simplify the process of building conversational AI chatbots. Utilize [ChatBotKit](https://chatbotkit.com) to rapidly develop and deploy AI bots capable of natural language interactions.

## Getting Started

Embark on creating your chatbot with ChatBotKit in a few easy steps:

1. **Installation**: To integrate the SDK into your project, use npm:
   ```bash
   npm install @chatbotkit/sdk
   ```
2. **Implementation**: Start using the SDK to build and manage your chatbot.

### Example: Streaming in Edge and Serverless Environments

Below is a straightforward example demonstrating how to implement streaming with the SDK in both Edge and Serverless environments:

```javascript
import { ConversationClient } from '@chatbotkit/sdk/conversation/index.js'

// Initialize the ConversationClient
const client = new ConversationClient({
  /* configuration options */
})

// Stream messages using the ConversationClient
for await (const { type, data } of client
  .complete(null, { model: 'gpt-4', messages })
  .stream()) {
  if (type === 'token') {
    process.stdout.write(data.token)
  }
}

// Additional processing can be added here
```

Explore a detailed example with more advanced features [here](https://github.com/chatbotkit/node-sdk/tree/main/examples/sdk).

## Documentation

For an in-depth exploration of the ChatBotKit Node SDK, including insights into its capabilities and configurations for different environments, visit our [official documentation page](https://chatbotkit.github.io/node-sdk/modules/_chatbotkit_sdk.html).

## Contributing

Encountered a bug or interested in contributing? Your participation is highly appreciated! Feel free to open an issue or submit a pull request on our [official GitHub repository](https://github.com/chatbotkit/node-sdk).
