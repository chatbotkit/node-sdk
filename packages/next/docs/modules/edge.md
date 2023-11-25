[@chatbotkit/next](../README.md) / [Modules](../modules.md) / edge

# Module: edge

## Table of contents

### Type Aliases

- [IterableObject](edge.md#iterableobject)

### Functions

- [stream](edge.md#stream)

## Type Aliases

### IterableObject

Ƭ **IterableObject**\<\>: `Generator`\<`object`\> \| `AsyncGenerator`\<`object`\>

#### Defined in

[edge.js:2](https://github.com/chatbotkit/node-sdk/blob/main/packages/next/src/edge.js#L2)

## Functions

### stream

▸ **stream**(`source`): `Response`

This function can be used to stream any ChatBotKit streaming response to the
client. It will automatically encode the response as JSONL and it is fully
compatible with the @chatbotkit/react useConversationManager hook.

#### Parameters

| Name | Type |
| :------ | :------ |
| `source` | [`IterableObject`](edge.md#iterableobject) \| \{ `stream`: () => [`IterableObject`](edge.md#iterableobject)  } |

#### Returns

`Response`

**`Example`**

```js
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

#### Defined in

[edge.js:33](https://github.com/chatbotkit/node-sdk/blob/main/packages/next/src/edge.js#L33)
