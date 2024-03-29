@chatbotkit/next / [Modules](modules.md)

[![Follow on Twitter](https://img.shields.io/twitter/follow/chatbotkit.svg?logo=twitter)](https://twitter.com/chatbotkit)
[![ChatBotKit](https://img.shields.io/badge/credits-ChatBotKit-blue.svg)](https://chatbotkit.com)
[![CBK.AI](https://img.shields.io/badge/credits-CBK.AI-blue.svg)](https://cbk.ai)
[![NPM](https://img.shields.io/npm/v/@chatbotkit/next.svg)](https://www.npmjs.com/package/@chatbotkit/next)

# ChatBotKit Next.js SDK

The [ChatBotKit](https://chatbotkit.com) SDK for Next.js is crafted to integrate chatbot functionalities seamlessly into Next.js applications, specifically optimized for Next.js Edge runtime environments.

## Getting Started

Begin your journey with ChatBotKit using these steps:

1. **Installation**: Add the SDK to your project by running the npm command:
   ```
   npm install @chatbotkit/next @chatbotkit/react @chatbotkit/sdk
   ```
2. **Integration**: Utilize the SDK to create and manage chatbot interactions in your Next.js application.

### Streaming Example for Next.js Edge Runtime

The following example showcases how to implement a chatbot in a Next.js application using the Edge runtime environment.

#### Server-Side Code

```js
// file: ./pages/api/conversation/complete.js
import { stream } from '@chatbotkit/next/edge'
import { ChatBotKit } from '@chatbotkit/sdk'

const cbk = new ChatBotKit({
  secret: process.env.CHATBOTKIT_API_SECRET,
})

export default async function handler(req) {
  const { messages } = await req.json()

  return stream(cbk.conversation.complete(null, { messages }))
}

export const config = {
  runtime: 'edge',
}
```

#### Client-Side Code

```js
// file: ./pages/index.js
import { AutoTextarea, useConversationManager } from '@chatbotkit/react'

export default function Index() {
  const {
    thinking,

    text,
    setText,

    messages,

    submit,
  } = useConversationManager({
    endpoint: '/api/conversation/complete',
  })

  function handleOnKeyDown(event) {
    if (event.keyCode === 13) {
      event.preventDefault()

      submit()
    }
  }

  return (
    <div style={{ fontFamily: 'monospace', padding: '10px' }}>
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
    </div>
  )
}
```

Explore a full example with additional features [here](https://github.com/chatbotkit/node-sdk/tree/main/examples/nextjs/stateless-chat).

## Documentation

For a detailed exploration of the ChatBotKit Next SDK, including its capabilities and configurations tailored for Next.js Edge runtime, visit our [type documentation page](https://chatbotkit.github.io/node-sdk/modules/_chatbotkit_next.html).

## Contributing

If you find a bug or would like to contribute to the ChatBotKit SDK, please open an issue or submit a pull request on the [official GitHub repository](https://github.com/chatbotkit/node-sdk).
