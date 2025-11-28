[**@chatbotkit/widget**](../../README.md)

***

[@chatbotkit/widget](../../modules.md) / [v2](../README.md) / Message

# Interface: Message

Defined in: [v2.ts:7](https://github.com/chatbotkit/node-sdk/blob/main/packages/widget/src/v2.ts#L7)

Represents a single message in the widget conversation.

## Properties

### id

> **id**: `string`

Defined in: [v2.ts:9](https://github.com/chatbotkit/node-sdk/blob/main/packages/widget/src/v2.ts#L9)

Unique identifier for the message

***

### meta?

> `optional` **meta**: [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `unknown`\>

Defined in: [v2.ts:15](https://github.com/chatbotkit/node-sdk/blob/main/packages/widget/src/v2.ts#L15)

Optional metadata associated with the message

***

### text

> **text**: `string`

Defined in: [v2.ts:13](https://github.com/chatbotkit/node-sdk/blob/main/packages/widget/src/v2.ts#L13)

The text content of the message

***

### type

> **type**: `"user"` \| `"bot"` \| `"input"`

Defined in: [v2.ts:11](https://github.com/chatbotkit/node-sdk/blob/main/packages/widget/src/v2.ts#L11)

The type of message
