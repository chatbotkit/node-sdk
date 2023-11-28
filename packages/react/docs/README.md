@chatbotkit/react / [Modules](modules.md)

[![ChatBotKit](https://img.shields.io/badge/credits-ChatBotKit-blue.svg)](https://chatbotkit.com)
[![Follow on Twitter](https://img.shields.io/twitter/follow/chatbotkit.svg?logo=twitter)](https://twitter.com/chatbotkit)
[![NPM](https://img.shields.io/npm/v/@chatbotkit/react.svg)](https://www.npmjs.com/package/@chatbotkit/react)

# ChatBotKit React SDK

Welcome to the ChatBotKit React SDK! This SDK is your go-to React solution for creating conversational AI chatbots with ease. Leveraging the power of [ChatBotKit](https://chatbotkit.com), this SDK enables the rapid development and deployment of chatbots capable of natural language interactions.

## What's Included

The ChatBotKit React SDK offers a comprehensive set of features and capabilities, including:

- **[userConversationManager](https://chatbotkit.github.io/node-sdk/modules/_chatbotkit_react.hooks_useConversationManager.html)**: A React Hook for managing conversation flow. Handles all the heavy lifting of sending and receiving messages, as well as thinking and typing indicators.
- **[AutoTextarea](https://chatbotkit.github.io/node-sdk/modules/_chatbotkit_react.components_AutoTextarea.html)**: A React component that automatically resizes the textarea to fit the content. Useful for chat interfaces to allow users to type messages.

## Getting Started

Embark on your ChatBotKit journey with these easy steps:

1. **Installation**: Add the SDK to your React project:
   ```bash
   npm install @chatbotkit/react
   ```
2. **Implementation**: Utilize the SDK to build or manage your chatbot.

### A Basic Example for Next.js

Here's a straightforward example using the `useConversationManager` React Hook to manage conversation flow within a Next.js application:

```javascript
import { AutoTextarea, useConversationManager } from '@chatbotkit/react'

export default function Index() {
  const {
    conversationId,
    setConversationId,
    token,
    setToken,
    text,
    setText,
    messages,
    thinking,
    submit,
  } = useConversationManager({ stream: true })

  // Function to create a new chat session
  async function createSession() {
    const response = await fetch(`/api/session/create`)

    if (!response.ok) {
      throw new Error(`Unexpected error`)
    }

    const { conversationId, token } = await response.json()

    setConversationId(conversationId)
    setToken(token)
  }

  // Handle text submission
  function handleOnKeyDown(event) {
    if (event.keyCode === 13) {
      event.preventDefault()

      submit()
    }
  }

  // Render chat interface
  return (
    <div style={{ fontFamily: 'monospace', padding: '10px' }}>
      {conversationId && token ? (
        <>
          {messages.map(({ id, type, text }) => (
            <div key={id}>
              <strong>{type}:</strong> {text}
            </div>
          ))}
          {thinking && (
            <div key="thinking">
              <strong>bot:</strong> thinking...
            </div>
          )}
          <AutoTextarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            onKeyDown={handleOnKeyDown}
            placeholder="Type something..."
            style={{
              border: 0,
              outline: 'none',
              resize: 'none',
              width: '100%',
              marginTop: '10px',
            }}
          />
        </>
      ) : (
        <button onClick={createSession}>Start Chat</button>
      )}
    </div>
  )
}
```

Discover a complete example with advanced features [here](https://github.com/chatbotkit/node-sdk/tree/main/examples/nextjs/basic-chat).

## Documentation

For a comprehensive understanding of the ChatBotKit React SDK, including detailed insights into its capabilities and configuration for various environments, please visit our [type documentation page](https://chatbotkit.github.io/node-sdk/modules/_chatbotkit_react.html).

## Contributing

Found a bug or wish to contribute? We welcome your input! Please open an issue or submit a pull request on our [official GitHub repository](https://github.com/chatbotkit/node-sdk).
