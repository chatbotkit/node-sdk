[**@chatbotkit/sdk**](../../README.md)

***

[@chatbotkit/sdk](../../modules.md) / [channel](../README.md) / ChannelClient

# Class: ChannelClient

Defined in: [channel/index.js:13](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/channel/index.js#L13)

Channel client.

## Extends

- [`ChatBotKitClient`](../../client/classes/ChatBotKitClient.md)

## Constructors

### Constructor

> **new ChannelClient**(`options`): `ChannelClient`

Defined in: [channel/index.js:17](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/channel/index.js#L17)

#### Parameters

##### options

[`ChatBotKitClientOptions`](../../client/interfaces/ChatBotKitClientOptions.md)

#### Returns

`ChannelClient`

#### Overrides

[`ChatBotKitClient`](../../client/classes/ChatBotKitClient.md).[`constructor`](../../client/classes/ChatBotKitClient.md#constructor)

## Methods

### extend()

> **extend**(`extensionOptions`): `ChannelClient`

Defined in: [client.js:382](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/client.js#L382)

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

`ChannelClient`

A new instance of the same client class with extended options

#### Inherited from

[`ChatBotKitClient`](../../client/classes/ChatBotKitClient.md).[`extend`](../../client/classes/ChatBotKitClient.md#extend)

***

### publish()

> **publish**(`channelId`, `request`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<\{ \}\>

Defined in: [channel/index.js:28](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/channel/index.js#L28)

Publishes a message to a channel.

#### Parameters

##### channelId

`string`

##### request

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<\{ \}\>

***

### subscribe()

> **subscribe**(`channelId`, `request?`): [`ResponsePromise`](../../client/classes/ResponsePromise.md)\<`never`, \{ \}\>

Defined in: [channel/index.js:39](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/channel/index.js#L39)

Subscribes to channel messages.

#### Parameters

##### channelId

`string`

##### request?

[`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `never`\>

#### Returns

[`ResponsePromise`](../../client/classes/ResponsePromise.md)\<`never`, \{ \}\>
