# ChatBotKit Next.js SDK

This is the ChatBotKit SDK for Next.js. ...

## Getting Started

To get started with ChatBotKit, follow these simple steps:

1. Install the SDK using npm: `npm install @chatbotkit/next @chatbotkit/react @chatbotkit/sdk`.
2. Use the SDK to setup or interact with your chatbot.

Here is a simple streaming example that works in Edge:

```js
// on the server

import { ChatBotKit } from '@chatbotkit/sdk'
import { stream } from '@chatbotkit/next/edge'

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

// on the client

import { AutoTextarea, useConversationManager } from '@chatbotkit/react'

export default function Index() {
  const { thinking, text, setText, messages, submit } = useConversationManager({
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
      <div>
        {messages.map(({ id, type, text }) => {
          switch (type) {
            case 'user':
              return (
                <div key={id}>
                  <strong>user:</strong> {text}
                </div>
              )

            case 'bot':
              return (
                <div key={id}>
                  <strong>bot:</strong> {text}
                </div>
              )
          }
        })}
        {thinking ? (
          <div key="thinking">
            <strong>bot:</strong> thinking...
          </div>
        ) : null}
      </div>
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

A complete example can be found [here](https://github.com/chatbotkit/node-sdk/tree/main/examples/nextjs/stateless-chat).
