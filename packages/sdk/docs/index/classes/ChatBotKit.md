[**@chatbotkit/sdk**](../../README.md)

***

[@chatbotkit/sdk](../../modules.md) / [index](../README.md) / ChatBotKit

# Class: ChatBotKit

Defined in: [index.js:61](https://github.com/chatbotkit/cbk-platform/blob/main/sdks/node/packages/sdk/src/index.js#L61)

ChatBotKit SDK - Main client class for interacting with the ChatBotKit API

This is the primary entry point for the ChatBotKit SDK. It provides access to all
ChatBotKit API resources through specialized client instances.

## Example

```ts
import ChatBotKit from '@chatbotkit/sdk'

const client = new ChatBotKit({
  secret: 'your-secret-key'
})
```

## Extends

- [`ChatBotKitClient`](../../client/classes/ChatBotKitClient.md)

## Constructors

### Constructor

> **new ChatBotKit**(`options`): `ChatBotKit`

Defined in: [index.js:65](https://github.com/chatbotkit/cbk-platform/blob/main/sdks/node/packages/sdk/src/index.js#L65)

#### Parameters

##### options

[`ChatBotKitClientOptions`](../../client/interfaces/ChatBotKitClientOptions.md)

#### Returns

`ChatBotKit`

#### Overrides

[`ChatBotKitClient`](../../client/classes/ChatBotKitClient.md).[`constructor`](../../client/classes/ChatBotKitClient.md#constructor)

## Methods

### extend()

> **extend**(`extensionOptions`): `ChatBotKit`

Defined in: [client.js:382](https://github.com/chatbotkit/cbk-platform/blob/main/sdks/node/packages/sdk/src/client.js#L382)

Creates a new instance of the same client type with extended options.

This is useful when you need to create a client with modified configuration
(e.g., different endpoint, token, or headers) without affecting the original.

Note: This method creates a completely new instance rather than cloning,
which is necessary because private class fields cannot be copied.

#### Parameters

##### extensionOptions

[`Partial`](https://www.typescriptlang.org/docs/handbook/utility-types.html#partialtype)\<[`ChatBotKitClientOptions`](../../client/interfaces/ChatBotKitClientOptions.md)\>

Options to merge with current options

#### Returns

`ChatBotKit`

A new instance of the same client class with extended options

#### Inherited from

[`ChatBotKitClient`](../../client/classes/ChatBotKitClient.md).[`extend`](../../client/classes/ChatBotKitClient.md#extend)
