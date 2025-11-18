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

[packages/react/src/utils/stream.js:130](https://github.com/chatbotkit/node-sdk/blob/main/packages/react/src/utils/stream.js#L130)

___

### ConsumeResult

Ƭ **ConsumeResult**\<\>: `any`

This function is used on the client to consume a server stream.

#### Defined in

[packages/react/src/utils/stream.js:84](https://github.com/chatbotkit/node-sdk/blob/main/packages/react/src/utils/stream.js#L84)

___

### ConsumeSource

Ƭ **ConsumeSource**\<\>: `any`

#### Defined in

[packages/react/src/utils/stream.js:83](https://github.com/chatbotkit/node-sdk/blob/main/packages/react/src/utils/stream.js#L83)

___

### Handlers

Ƭ **Handlers**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `onFinish?` | () => `any` |

#### Defined in

[packages/react/src/utils/stream.js:20](https://github.com/chatbotkit/node-sdk/blob/main/packages/react/src/utils/stream.js#L20)

___

### StreamOptions

Ƭ **StreamOptions**\<\>: {} & [`Handlers`](utils_stream.md#handlers)

This function is used on the server to stream data to the client.

#### Defined in

[packages/react/src/utils/stream.js:61](https://github.com/chatbotkit/node-sdk/blob/main/packages/react/src/utils/stream.js#L61)

___

### StreamResult

Ƭ **StreamResult**\<\>: `any`

This function is used on the server to stream data to the client.

#### Defined in

[packages/react/src/utils/stream.js:27](https://github.com/chatbotkit/node-sdk/blob/main/packages/react/src/utils/stream.js#L27)

___

### StreamSource

Ƭ **StreamSource**\<\>: `any`

#### Defined in

[packages/react/src/utils/stream.js:26](https://github.com/chatbotkit/node-sdk/blob/main/packages/react/src/utils/stream.js#L26)
