@chatbotkit/react / [Modules](modules.md)

[![ChatBotKit](https://img.shields.io/badge/credits-ChatBotKit-blue.svg)](https://chatbotkit.com)
[![Follow on Twitter](https://img.shields.io/twitter/follow/chatbotkit.svg?logo=twitter)](https://twitter.com/chatbotkit)
[![NPM](https://img.shields.io/npm/v/@chatbotkit/react.svg)](https://www.npmjs.com/package/@chatbotkit/react)

# ChatBotKit React SDK

Welcome to the ChatBotKit React SDK. This SDK is a React solution for building conversational AI chatbots with ease. With [ChatBotKit](https://chatbotkit.com), you can quickly develop and deploy chatbots that can interact with users in natural language.

## React SDK Features

- **Easy setup** - The ChatBotKit React SDK is easy to install and set up. You can have your first chatbot up and running in minutes.
- **No styles** - ChatBotKit React SDK does not enforce any styles. You can easily style your applications just the way you want them.
- **Modern** - A modern SDK with built-in support for CommonJS, ECMAScript Modules, async/await, streams and much more.
- **Customizable** - You can easily customize the chatbot's behavior and responses to fit your specific use case.

## ChatBotKit Features

- 🗨 **Chat History**: Easily review and reference previous conversations with your bots, ensuring that it has all the information it needs.
- 💾 **Custom Datasets**: Manage and organize the data that your chat bots use to respond to user input with bespoke datasets.
- 💾 **Custom Skillset**: Create special skills for your chatbot, such as the ability to generate images or fetch web pages.
- 🎬 **Document File Importing**: Import PDF, CSV, JSON, MD and many other document files directly into your your chatbot datasets
- 🎬 **Media File Importing**: Import MP3, MP4, MPEG, WAV and many other media files directly into your your chatbot datasets
- 🌐 **Widget Integration**: Embed ChatBotKit chatbots directly on any website using advanced customization options and theming.
- 💬 **Slack Bot Integration**: Create and deploy wide-range of Slack bot integrations with just a few click.
- 🎮 **Discord Bot Integration**: Create and deploy wide-range of Discord chat bot with just a few click.
- 📱 **WhatsApp Bot Integration**: Connect with your audience instantly on the world’s most popular AI bot platform.
- 🗺 **Sitemap Integration**: Automatically ingest website content into a searchable knowledge base for your chatbot to reference.
- 🗺 **Suppoert Integration**: Automatically send conversation summaries to your prefered support system and follow up with users off-session.
- 🤖 **GPT-3.5 Support**: State-of-the-art language models to power your conversations.
- 🚀 **GPT-4 Support**: The latest and best language model now can power all chatbots.
- 🎥 **Streaming**: You can turn on and off streaming capabilities for your chatbots.
- 🎨 **Widget Themes**: Customize the appearance of your chatbot widget with different themes to match your website branding or personal preferences.
- 🔒 **Data Security**: Ensuring the security of user data, with robust measures in place to protect against unauthorized access.
- 🕵 **Focus on Privacy**: Get strong privacy controls out of the box. Privide confindence that your customers' data is being handled responsibly.
- 🚫 **Content Moderation**: All messages are automatically scanned for abusive content and automatically flagged by the system.
- 💵 **Simple Pricing**: Our pricing is straightforward and easy to understand, with no hidden fees or surprises.

## Getting Started

To get started with ChatBotKit, follow these simple steps:

1. Install the SDK using npm: `npm install @chatbotkit/react`.
2. Use the SDK to setup or interact with your chatbot.

Here is a simple example for the next.js framework. Within the body of our component we invoke the `useConversationManager` React Hook which setups a simple utility to manage the conversation flow.

```js
import { AutoTextarea, useConversationManager } from '@chatbotkit/react'

export default function Home() {
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
    <div>
      {conversationId && token ? (
        <>
          <div>
            {messages.map(({ id, type, text }) => {
              switch (type) {
                case 'user':
                  return <div key={id}>user: {text}</div>

                case 'bot':
                  return <div key={id}>bot: {text}</div>
              }
            })}
            {thinking ? <div key="thinking">bot: thinking...</div> : null}
          </div>
          <AutoTextarea
            value={text}
            onChange={(e) => setText(event.target.value)}
            onKeyDown={handleOnKeyDown}
          />
        </>
      ) : (
        <button onClick={() => createSession()}>Start Chat</button>
      )}
    </div>
  )
}
```

## Examples

You can find a wide-range of examples at [here](https://github.com/chatbotkit/node-sdk/tree/main/examples).

## Documentation

For detailed documentation on available types, please refer to the [type documentation](https://github.com/chatbotkit/node-sdk/blob/main/docs/react/modules.md).

Checkout the [ChatBotKit Documentation](https://chatbotkit.com/docs/react-sdk) for more information about the platform.

## Contributing

If you find a bug or would like to contribute to the ChatBotKit SDK, please open an issue or submit a pull request on the [official GitHub repository](https://github.com/chatbotkit/node-sdk).