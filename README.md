[![Follow on Twitter](https://img.shields.io/twitter/follow/chatbotkit.svg?logo=twitter)](https://twitter.com/chatbotkit)
[![ChatBotKit](https://img.shields.io/badge/credits-ChatBotKit-blue.svg)](https://chatbotkit.com)

# ChatBotKit Node SDK

Welcome to the ChatBotKit Node SDK. This SDK offers a Node.js-based platform for effortlessly building conversational AI chatbots. With [ChatBotKit](https://chatbotkit.com), you can swiftly develop and deploy AI bots capable of natural language interactions.

## SDK Features

- **Easy Setup**: Quick and straightforward installation process.
- **Serverless Compatibility**: Works seamlessly with modern runtime environments like Serverless, Edge, Vercel, Netlify, Cloudflare Workers, Deno, AWS Lambda, and more.
- **Modern Framework Support**: Built-in support for CommonJS, ECMAScript Modules, async/await, streams, etc.
- **Customizability**: Tailor the chatbot’s behavior and responses to fit specific use cases.

## ChatBotKit Capabilities

- 🗨 **Chat History**: Review and reference past conversations.
- 💾 **Custom Datasets**: Organize data for bot responses.
- 💡 **Custom Skillset**: Equip chatbots with unique abilities like image generation or web fetching.
- 📄 **Document File Importing**: Import various document file types into chatbot datasets.
- 🎵 **Media File Importing**: Import a range of media file formats into chatbot datasets.
- 🌐 **Widget Integration**: Seamlessly embed chatbots on websites with customizable options.
- 💬 **Slack, Discord, WhatsApp Bot Integrations**: Easy integration with popular messaging platforms.
- 🗺 **Sitemap Integration**: Ingest website content into a searchable knowledge base.
- 🤖 **Multi-vendor Model Support**: Utilize advanced language models for conversation.
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

### Next.js Example

This quick example demonstrates how to use the SDK in a Next.js project:

```javascript
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

// file: ./pages/index.js
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

## Examples

Explore a range of examples [here](https://github.com/chatbotkit/node-sdk/tree/main/examples).

## Documentation

- **Type Documentation**: Detailed information on available types [here](https://github.com/chatbotkit/node-sdk/tree/main/docs).
- **Platform Documentation**: Comprehensive guide to ChatBotKit [here](https://chatbotkit.com/docs).
- **SDK Documentation**: In-depth SDK documentation [here](https://chatbotkit.github.io/node-sdk/).

## Contributing

Encounter a bug or want to contribute? Open an issue or submit a pull request on our [official GitHub repository](https://github.com/chatbotkit/node-sdk).
