[@chatbotkit/react](../README.md) / [Modules](../modules.md) / utils/stream

# Module: utils/stream

## Table of contents

### Type Aliases

- [ConsumeOptions](utils_stream.md#consumeoptions)
- [ConsumeResult](utils_stream.md#consumeresult)
- [ConsumeSource](utils_stream.md#consumesource)
- [Handlers](utils_stream.md#handlers)
- [StreamOptions](utils_stream.md#streamoptions)
- [StreamResult](utils_stream.md#streamresult)
- [StreamSource](utils_stream.md#streamsource)

## Type Aliases

### ConsumeOptions

Ƭ **ConsumeOptions**\<\>: {} & [`Handlers`](utils_stream.md#handlers)

This function is used on the client to consume a server stream.

#### Defined in

[packages/react/src/utils/stream.js:99](https://github.com/chatbotkit/node-sdk/blob/main/packages/react/src/utils/stream.js#L99)

___

### ConsumeResult

Ƭ **ConsumeResult**\<\>: `any`

This function is used on the client to consume a server stream.

#### Defined in

[packages/react/src/utils/stream.js:68](https://github.com/chatbotkit/node-sdk/blob/main/packages/react/src/utils/stream.js#L68)

___

### ConsumeSource

Ƭ **ConsumeSource**\<\>: `any`

#### Defined in

[packages/react/src/utils/stream.js:67](https://github.com/chatbotkit/node-sdk/blob/main/packages/react/src/utils/stream.js#L67)

___

### Handlers

Ƭ **Handlers**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `onFinish?` | () => `any` |

#### Defined in

[packages/react/src/utils/stream.js:4](https://github.com/chatbotkit/node-sdk/blob/main/packages/react/src/utils/stream.js#L4)

___

### StreamOptions

Ƭ **StreamOptions**\<\>: {} & [`Handlers`](utils_stream.md#handlers)

This function is used on the server to stream data to the client.

#### Defined in

[packages/react/src/utils/stream.js:45](https://github.com/chatbotkit/node-sdk/blob/main/packages/react/src/utils/stream.js#L45)

___

### StreamResult

Ƭ **StreamResult**\<\>: `any`

This function is used on the server to stream data to the client.

#### Defined in

[packages/react/src/utils/stream.js:11](https://github.com/chatbotkit/node-sdk/blob/main/packages/react/src/utils/stream.js#L11)

___

### StreamSource

Ƭ **StreamSource**\<\>: `any`

#### Defined in

[packages/react/src/utils/stream.js:10](https://github.com/chatbotkit/node-sdk/blob/main/packages/react/src/utils/stream.js#L10)
