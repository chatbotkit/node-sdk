# @chatbotkit/agent

ChatBotKit Agent implementation.

## Installation

```bash
npm install @chatbotkit/agent
```

## Usage

```javascript
import { complete } from '@chatbotkit/agent'

// Use the complete function
const generator = complete({
  /* request options */
})

for await (const chunk of generator) {
  console.log(chunk)
}
```

## License

ISC
