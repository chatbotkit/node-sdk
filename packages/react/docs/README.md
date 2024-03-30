@chatbotkit/react / [Modules](modules.md)

[![ChatBotKit](https://img.shields.io/badge/credits-ChatBotKit-blue.svg)](https://chatbotkit.com)
[![CBK.AI](https://img.shields.io/badge/credits-CBK.AI-blue.svg)](https://cbk.ai)
[![Follow on Twitter](https://img.shields.io/twitter/follow/chatbotkit.svg?logo=twitter)](https://twitter.com/chatbotkit)
[![NPM](https://img.shields.io/npm/v/@chatbotkit/react.svg)](https://www.npmjs.com/package/@chatbotkit/react)

# ChatBotKit React SDK

Welcome to the ChatBotKit React SDK! This SDK is your go-to React solution for creating conversational AI chatbots with ease. Leveraging the power of [ChatBotKit](https://chatbotkit.com), this SDK enables the rapid development and deployment of chatbots capable of natural language interactions.

## What's Included

The ChatBotKit React SDK offers a comprehensive set of features and capabilities, including:

- **[streamComplete](https://chatbotkit.github.io/node-sdk/functions/_chatbotkit_react.actions_complete.streamComplete.html)**: A server-side reaction which allow for function calling and React component streaming.
- **[userConversationManager](https://chatbotkit.github.io/node-sdk/functions/_chatbotkit_react.hooks_useConversationManager.useConversationManager.html)**: A React Hook for managing conversation flow. Handles all the heavy lifting of sending and receiving messages, as well as thinking and typing indicators.
- **[ConvesationManager](https://chatbotkit.github.io/node-sdk/functions/_chatbotkit_react.components_ConversationManager.ConversationManager.html)**: A React component that provides a conversation manager interface. Useful for chat interfaces to manage conversation flow.
- **[AutoTextarea](https://chatbotkit.github.io/node-sdk/modules/_chatbotkit_react.components_AutoTextarea.html)**: A React component that automatically resizes the textarea to fit the content. Useful for chat interfaces to allow users to type messages.
- **[ChatInput](https://chatbotkit.github.io/node-sdk/modules/_chatbotkit_react.components_ChatInput.html)**: A React component that provides a chat input interface. Useful for chat interfaces to allow users to type messages. It automatically handles modifiers such as ctrl, cmd and shift.
- **[ChatMessage](https://chatbotkit.github.io/node-sdk/modules/_chatbotkit_react.components_ChatMessage.html)**: A React component that provides a chat message interface. Useful for chat interfaces to display messages with rich formatting.
- **[ChatMessages](https://chatbotkit.github.io/node-sdk/modules/_chatbotkit_react.components_ChatMessages.html)**: A React component that provides a chat messages interface. Useful for chat interfaces to display messages.

## Getting Started

Embark on your ChatBotKit journey with these easy steps:

1. **Installation**: Add the SDK to your React project:
   ```bash
   npm install @chatbotkit/react
   ```
2. **Implementation**: Utilize the SDK to build or manage your chatbot.

### A NextGen Example for Next.js

This example showcases how to build advanced conversational AI with streaming, function calls, server-side rendering and much more in a Next.js project:

```javascript
// file: ./app/page.jsx
import ChatArea from '../components/ChatArea.jsx'

export default function Page() {
  return <ChatArea />
}

// file: ./components/ChatArea.jsx
'use client'

import { useContext } from 'react'

import { complete } from '../actions/conversation.jsx'

import { ChatInput, ConversationContext } from '@chatbotkit/react'
import ConversationManager from '@chatbotkit/react/components/ConversationManager'

export function ChatMessages() {
  const {
    thinking,

    text,
    setText,

    messages,

    submit,
  } = useContext(ConversationContext)

  return (
    <div>
      <div>
        {messages.map(({ id, type, text, children }) => {
          switch (type) {
            case 'user':
              return (
                <div key={id}>
                  <div>
                    <strong>user:</strong> {text}
                  </div>
                </div>
              )

            case 'bot':
              return (
                <div key={id}>
                  <div>
                    <strong>bot:</strong> {text}
                  </div>
                  {children ? <div>{children}</div> : null}
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
      <ChatInput
        value={text}
        onChange={(e) => setText(e.target.value)}
        onSubmit={submit}
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

export default function ChatArea() {
  return (
    <ConversationManager endpoint={complete}>
      <ChatMessages />
    </ConversationManager>
  )
}

// file: ./actions/conversation.jsx
'use server'

import CalendarEvents from '../components/CalendarEvents.jsx'

import { streamComplete } from '@chatbotkit/react/actions/complete'
import { ChatBotKit } from '@chatbotkit/sdk'

const cbk = new ChatBotKit({
  secret: process.env.CHATBOTKIT_API_SECRET,
})

export async function complete({ messages }) {
  return streamComplete({
    client: cbk.conversation,

    messages,

    functions: [
      {
        name: 'getUserName',
        description: 'Get the authenticated user name',
        parameters: {},
        handler: async () => {
          return 'John Doe'
        },
      },

      {
        name: 'getCalendarEvents',
        description: 'Get a list of calendar events',
        parameters: {},
        handler: async () => {
          const events = [
            { id: 1, title: 'Meeting with Jane Doe' },
            { id: 2, title: 'Meeting with Jill Doe' },
          ]

          return {
            children: <CalendarEvents events={events} />,

            result: {
              events,
            },
          }
        },
      },

      {
        name: 'declineCalendarEvent',
        description: 'Decline a calendar event',
        parameters: {
          type: 'object',
          properties: {
            id: {
              type: 'number',
              description: 'The ID of the event to decline',
            },
          },
          required: ['id'],
        },
        handler: async ({ id }) => {
          return `You have declined the event with ID ${id}`
        },
      },
    ],
  })
}
```

### A Basic Example for Next.js

Here's a straightforward example using the `useConversationManager` React Hook to manage conversation flow within a Next.js application:

```javascript
// file: ./pages/index.jsx
import { useState } from 'react'

import { AutoTextarea, useConversationManager } from '@chatbotkit/react'

export default function Index() {
  const [conversationId, setConversationId] = useState(null)
  const [token, setToken] = useState(null)

  const {
    text,
    setText,

    message,
    messages,

    thinking,

    submit,
  } = useConversationManager({ conversationId, token })

  async function createSession() {
    const response = await fetch(`/api/session/create`)

    if (!response.ok) {
      throw new Error(`Unexpected error`)
    }

    const { conversationId, token } = await response.json()

    setConversationId(conversationId)
    setToken(token)
  }

  function handleOnKeyDown(event) {
    if (event.keyCode === 13) {
      event.preventDefault()

      submit()
    }
  }

  return (
    <div style={{ fontFamily: 'monospace', padding: '10px' }}>
      {conversationId && token ? (
        <>
          {messages.map(({ id, type, text }) => (
            <div key={id}>
              <strong>{type}:</strong> {text}
            </div>
          ))}
          {message ? (
            <div key={message.id}>
              <strong>bot:</strong> {message.text}
            </div>
          ) : null}
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

// file: ./pages/api/conversation/complete.js
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
```

Discover more examples [here](https://github.com/chatbotkit/node-sdk/tree/main/examples/nextjs).

## Documentation

For a comprehensive understanding of the ChatBotKit React SDK, including detailed insights into its capabilities and configuration for various environments, please visit our [type documentation page](https://chatbotkit.github.io/node-sdk/modules/_chatbotkit_react.html).

## Contributing

Found a bug or wish to contribute? We welcome your input! Please open an issue or submit a pull request on our [official GitHub repository](https://github.com/chatbotkit/node-sdk).
