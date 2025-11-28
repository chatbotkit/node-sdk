**@chatbotkit/widget**

***

[![ChatBotKit](https://img.shields.io/badge/credits-ChatBotKit-blue.svg)](https://chatbotkit.com)
[![CBK.AI](https://img.shields.io/badge/credits-CBK.AI-blue.svg)](https://cbk.ai)
[![Follow on Twitter](https://img.shields.io/twitter/follow/chatbotkit.svg?logo=twitter)](https://twitter.com/chatbotkit)
[![NPM](https://img.shields.io/npm/v/@chatbotkit/widget.svg)](https://www.npmjs.com/package/@chatbotkit/widget)
[![Email](https://img.shields.io/badge/Email-Support-blue?logo=mail.ru)](mailto:support@chatbotkit.com)
[![Discord](https://img.shields.io/badge/Discord-Support-blue?logo=discord)](https://go.cbk.ai/discord)

# ChatBotKit Widget Types

Type definitions for the ChatBotKit widget custom element. This package provides TypeScript types for interacting with the ChatBotKit widget (v2).

## What's Included

- **`ChatBotKitWidgetElementV2`**: The main widget custom element interface with all available methods and properties
- **`ChatBotKitGlobalObject`**: The global `window.chatbotkitWidget` object interface
- **`Message`**: Type for conversation messages
- **`FunctionDefinition`**: Type for registering custom functions with the widget
- **`NotificationDefinition`**: Type for widget notifications
- **`Contact`**: Type for contact information
- **`Meta`**: Type for session metadata

## Installation

```bash
npm install @chatbotkit/widget
```

## Usage

Import the types directly:

```typescript
import type {
  ChatBotKitWidgetElementV2,
  ChatBotKitGlobalObject,
  FunctionDefinition,
  Message,
} from '@chatbotkit/widget'

// Access the widget instance
const widget = window.chatbotkitWidget.instance

// Or wait for it to be ready
const widget = await window.chatbotkitWidget.instancePromise

// Register custom functions
const myFunction: FunctionDefinition = {
  description: 'Get the current user name',
  parameters: {},
  handler: async () => {
    return 'John Doe'
  },
}

widget.registerFunctions({ getUserName: myFunction })

// Send a message
widget.sendMessage({ text: 'Hello!' })

// Listen to messages
console.log(widget.messages)
```

### Using with the Widget Script

The types augment the global `Window` interface, so you can access `window.chatbotkitWidget` with full type safety:

```typescript
import '@chatbotkit/widget'

// Now window.chatbotkitWidget is typed
window.chatbotkitWidget.instancePromise.then((widget) => {
  widget.open = true
  widget.sendMessage({ text: 'Hello from TypeScript!' })
})
```

### Using with React

For React integration, consider using the `@chatbotkit/react` package which includes hooks like:

- `useWidgetInstance` - Access the widget instance
- `useWidgetInstanceFunctions` - Register functions with the widget
- `useWidgetInstanceNotifications` - Manage widget notifications

## Documentation

For more information about the ChatBotKit widget, visit:

- [ChatBotKit Documentation](https://chatbotkit.com/docs)
- [Type Documentation](https://chatbotkit.github.io/node-sdk/modules/_chatbotkit_widget.html)

## Contributing

Found a bug or wish to contribute? We welcome your input! Please open an issue or submit a pull request on our [official GitHub repository](https://github.com/chatbotkit/node-sdk).
