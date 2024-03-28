[![Follow on Twitter](https://img.shields.io/twitter/follow/chatbotkit.svg?logo=twitter)](https://twitter.com/chatbotkit)
[![ChatBotKit](https://img.shields.io/badge/credits-ChatBotKit-blue.svg)](https://chatbotkit.com)

```
    .d8888b.  888888b.   888    d8P
   d88P  Y88b 888  "88b  888   d8P
   888    888 888  .88P  888  d8P
   888        8888888K.  888d88K
   888        888  "Y88b 8888888b
   888    888 888    888 888  Y88b
   Y88b  d88P 888   d88P 888   Y88b
    "Y8888P"  8888888P"  888    Y88b .ai
```

# ChatBotKit Node SDK

Welcome to the ChatBotKit Node SDK. This SDK offers a JavaScript-based platform for effortlessly building conversational AI bots and agents. With [ChatBotKit](https://chatbotkit.com), you can swiftly develop and deploy AI bots capable of natural language interactions.

This is a meta repository for the ChatBotKit Node SDK. It contains the SDK packages for a number of popular platforms and frameworks such as **React**, **Next.js**, **NextAuth** and more.

## SDK Features

- **Easy Setup**: Quick and straightforward installation process.
- **Serverless Compatibility**: Works seamlessly with modern runtime environments like Serverless, Edge, Vercel, Netlify, Cloudflare Workers, Deno, AWS Lambda, and more.
- **Modern Framework Support**: Built-in support for CommonJS, ECMAScript Modules, async/await, streams, etc.
- **Customizability**: Tailor the chatbot’s behavior and responses to fit specific use cases.
- **Multi-Platform**: Deploy chatbots on websites, mobile apps, and messaging platforms like Slack, Discord, and WhatsApp.
- **Multi-Model**: Support for a wide range of language models, including GPT-3, GPT-4, Claude, and more.

## ChatBotKit Capabilities

- 🔄 **Multi-modal Support**: Support various language and image models from all vendors such as OpenAI, Anthropic, Mistral, and AWS.
- 🌍 **Multi-language Support**: Allowing for easy customization and use in diverse linguistic contexts.
- 💬 **Conversation Management**: Manage complex conversation flaws with ease.
- 🗨 **Chat History**: Review and reference past conversations.
- 💾 **Custom Datasets**: Organize data for bot responses.
- 💡 **Custom Skillset**: Equip chatbots with unique abilities like image generation or web fetching.
- 📄 **Document File Importing**: Import various document file types into chatbot datasets.
- 🎵 **Media File Importing**: Import a range of media file formats into chatbot datasets.
- 🌐 **Widget Integration**: Seamlessly embed chatbots on websites with customizable options.
- 💬 **Slack, Discord, WhatsApp Bot Integrations**: Easy integration with popular messaging platforms.
- 🗺 **Sitemap Integration**: Ingest website content into a searchable knowledge base.
- 🎥 **Streaming**: Enable/disable streaming capabilities.
- 🔒 **Data Security**: Robust measures to protect user data.
- 🕵 **Privacy Focus**: Strong privacy controls to ensure responsible data handling.
- 🚫 **Content Moderation**: Automatic scanning and flagging of abusive content.
- 💵 **Simple Pricing**: Transparent and straightforward pricing.

## Getting Started

Follow these steps to start with ChatBotKit:

1. **Installation**:
   ```bash
   npm install @chatbotkit/sdk
   ```
2. **Usage**: Implement the SDK in your chatbot project.

### Streaming Example

This example demonstrates streaming capabilities in Edge and Serverless environments:

```javascript
import { ConversationClient } from '@chatbotkit/sdk/conversation/index.js'

const client = new ConversationClient(/* configuration */)

for await (const { type, data } of client
  .complete(null, { model: 'gpt-4', messages })
  .stream()) {
  if (type === 'token') {
    process.stdout.write(data.token)
  }
}
```

### A NextGen Example for Next.js

This example showcases how to build advanced conversational AI with streaming,
function calls, server-side rendering and much more in a Next.js project:

```javascript
// file: ./app/page.jsx
import ChatArea from '../components/ChatArea.jsx'

export default function Page() {
  return <ChatArea />
}

// file: ./components/ChatArea.jsx
'use client'

import { useContext } from 'react'

import { complete } from '../actions/conversation.js'

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

// file: ./actions/conversation.js
'use server'

import CalendarEvents from '../components/CalendarEvents.jsx'

import { streamComplete } from '@chatbotkit/react/actions/complete'
import { ChatBotKit } from '@chatbotkit/sdk'

const cbk = new ChatBotKit({
  secret: process.env.CHATBOTKIT_API_SECRET,
})

export async function complete(_, { messages }) {
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

### Basic Next.js Example

This quick example demonstrates how to use the SDK in a Next.js project:

```javascript
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

## Examples

Explore a range of examples [here](https://github.com/chatbotkit/node-sdk/tree/main/examples).

Some notable examples include:

| Platform           | Example                                                                                                                                                                        | Description                                                                                                                                                                                                                                                                                                 |
| ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Next.js            | [Stateless Chat (App Router + RSC + Functions + Function Triggers)](https://github.com/chatbotkit/node-sdk/tree/main/examples/nextjs/app/stateless-chat-rsc-functions-trigger) | A stateless chatbot example, where the conversation is managed by the client and the server. This example uses the App Router and Server Actions as well AI functions with function triggers. This is a powerful example to demonstrate the full capabilities of the ChatBotKit conversational AI platform. |
| Next.js            | [Stateless Chat (App Router + RSC + Functions)](https://github.com/chatbotkit/node-sdk/tree/main/examples/nextjs/app/stateless-chat-rsc-functions)                             | A stateless chatbot example, where the conversation is managed by the client and the server. This example uses the App Router and Server Actions as well AI functions.                                                                                                                                      |
| Next.js            | [Stateless Chat (App Router + RSC)](https://github.com/chatbotkit/node-sdk/tree/main/examples/nextjs/app/stateless-chat-rsc)                                                   | A stateless chatbot example, where the conversation is managed by the client and the server. This example uses the App Router and Server Actions.                                                                                                                                                           |
| Next.js            | [Stateless Chat (App Router)](https://github.com/chatbotkit/node-sdk/tree/main/examples/nextjs/app/stateless-chat)                                                             | A stateless chatbot example, where the conversation is managed by the client. This example uses the App Router.                                                                                                                                                                                             |
| Next.js            | [Stateless Chat](https://github.com/chatbotkit/node-sdk/tree/main/examples/nextjs/pages/stateless-chat)                                                                        | A stateless chatbot example, where the conversation is managed by the client.                                                                                                                                                                                                                               |
| Next.js            | [Basic Chat](https://github.com/chatbotkit/node-sdk/tree/main/examples/nextjs/pages/basic-chat)                                                                                | A basic chatbot example, where the conversation is managed by ChatBotKit.                                                                                                                                                                                                                                   |
| Next.js            | [NextAuth Example](https://github.com/chatbotkit/node-sdk/tree/main/examples/nextjs/pages/basic-auth)                                                                          | Shows how to combine NextAuth and ChatBotKit.                                                                                                                                                                                                                                                               |
| Node               | [GPT4 Streaming AI chatbot](https://github.com/chatbotkit/node-sdk/tree/main/examples/sdk/esm/gpt4-chatbot-stream.js)                                                          | A simple streaming AI chatbot example.                                                                                                                                                                                                                                                                      |
| Cloudflare Workers | [GPT4 AI chatbot](https://github.com/chatbotkit/node-sdk/tree/main/examples/cloudflare/gpt4-stream)                                                                            | A streaming AI chatbot example for Cloudflare Workers.                                                                                                                                                                                                                                                      |

## Packages

The ChatBotKit Node SDK is comprised of the following packages:

| Package                                                                                    | Version                                                                                                             | Description                                    |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------- |
| [@chatbotkit/cli](https://github.com/chatbotkit/node-sdk/tree/main/packages/cli)           | [![NPM](https://img.shields.io/npm/v/@chatbotkit/cli.svg)](https://www.npmjs.com/package/@chatbotkit/cli)           | The ChatBotKit CLI.                            |
| [@chatbotkit/sdk](https://github.com/chatbotkit/node-sdk/tree/main/packages/sdk)           | [![NPM](https://img.shields.io/npm/v/@chatbotkit/sdk.svg)](https://www.npmjs.com/package/@chatbotkit/sdk)           | The ChatBotKit API SDK.                        |
| [@chatbotkit/react](https://github.com/chatbotkit/node-sdk/tree/main/packages/react)       | [![NPM](https://img.shields.io/npm/v/@chatbotkit/react.svg)](https://www.npmjs.com/package/@chatbotkit/react)       | The ChatBotKit React SDK.                      |
| [@chatbotkit/next](https://github.com/chatbotkit/node-sdk/tree/main/packages/next)         | [![NPM](https://img.shields.io/npm/v/@chatbotkit/next.svg)](https://www.npmjs.com/package/@chatbotkit/next)         | The ChatBotKit Next.js SDK.                    |
| [@chatbotkit/nextauth](https://github.com/chatbotkit/node-sdk/tree/main/packages/nextauth) | [![NPM](https://img.shields.io/npm/v/@chatbotkit/nextauth.svg)](https://www.npmjs.com/package/@chatbotkit/nextauth) | The ChatBotKit NextAuth.js SDK.                |
| [@chatbotkit/fetch](https://github.com/chatbotkit/node-sdk/tree/main/packages/fetch)       | [![NPM](https://img.shields.io/npm/v/@chatbotkit/fetch.svg)](https://www.npmjs.com/package/@chatbotkit/fetch)       | The ChatBotKit isometric fetch implementation. |

## Documentation

- **Type Documentation**: Detailed information on available types [here](https://chatbotkit.github.io/node-sdk/).
- **Platform Documentation**: Comprehensive guide to ChatBotKit [here](https://chatbotkit.com/docs).
- **Platform Tutorials**: Step-by-step tutorials for ChatBotKit [here](https://chatbotkit.com/tutorials).

## Contributing

Encounter a bug or want to contribute? Open an issue or submit a pull request on our [official GitHub repository](https://github.com/chatbotkit/node-sdk).
