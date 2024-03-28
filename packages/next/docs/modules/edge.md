[@chatbotkit/next](../README.md) / [Modules](../modules.md) / edge

# Module: edge

## Table of contents

### Type Aliases

- [IterableObject](edge.md#iterableobject)

### Functions

- [stream](edge.md#stream)

## Type Aliases

### IterableObject

Ƭ **IterableObject**\<\>: [`Generator`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Generator )\<`object`\> \| [`AsyncGenerator`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/AsyncGenerator )\<`object`\>

#### Defined in

[edge.js:2](https://github.com/chatbotkit/node-sdk/blob/main/packages/next/src/edge.js#L2)

## Functions

### stream

▸ **stream**(`source`): [`Response`]( https://developer.mozilla.org/docs/Web/API/Response )

This function can be used to stream any ChatBotKit streaming response to the
client. It will automatically encode the response as JSONL and it is fully
compatible with the @chatbotkit/react useConversationManager hook.

#### Parameters

| Name | Type |
| :------ | :------ |
| `source` | [`IterableObject`](edge.md#iterableobject) \| \{ `stream`: () => [`IterableObject`](edge.md#iterableobject)  } |

#### Returns

[`Response`]( https://developer.mozilla.org/docs/Web/API/Response )

**`Example`**

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
  const {
    thinking,

    text,
    setText,

    messages,

    submit
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

#### Defined in

[edge.js:104](https://github.com/chatbotkit/node-sdk/blob/main/packages/next/src/edge.js#L104)
