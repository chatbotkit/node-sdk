[**@chatbotkit/sdk**](../../../README.md)

***

[@chatbotkit/sdk](../../../modules.md) / [event/log](../README.md) / EventLogClient

# Class: EventLogClient

Defined in: [event/log/index.js:37](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/sdk/src/event/log/index.js#L37)

Event log client for accessing event logs.

This client provides access to ChatBotKit's event logging system, which
records all significant events that occur in your account. Events include
conversation creation, message exchanges, bot interactions, and other
platform activities. Use this client to retrieve historical events, export
event data, or subscribe to live event streams for real-time monitoring.

## Examples

```ts
// List recent events
const events = await client.event.log.list({ take: 100 })
```

```ts
// Filter events by conversation
const conversationEvents = await client.event.log.list({
  conversationId: 'conv_123',
  take: 50
})
```

```ts
// Subscribe to live events (requires Pro+ plan)
const stream = client.event.log.subscribe({ historyLength: 10 })
for await (const event of stream) {
  console.log('Event:', event.data.type, event.data.id)
}
```

## Extends

- [`ChatBotKitClient`](../../../client/classes/ChatBotKitClient.md)

## Constructors

### Constructor

> **new EventLogClient**(`options`): `EventLogClient`

Defined in: [event/log/index.js:41](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/sdk/src/event/log/index.js#L41)

#### Parameters

##### options

[`ChatBotKitClientOptions`](../../../client/interfaces/ChatBotKitClientOptions.md)

#### Returns

`EventLogClient`

#### Overrides

[`ChatBotKitClient`](../../../client/classes/ChatBotKitClient.md).[`constructor`](../../../client/classes/ChatBotKitClient.md#constructor)

## Methods

### export()

> **export**(`request?`): [`ResponsePromise`](../../../client/classes/ResponsePromise.md)\<\{ \}, \{ \}\>

Defined in: [event/log/index.js:61](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/sdk/src/event/log/index.js#L61)

Exports event logs.

#### Parameters

##### request?

[`EventLogExportRequest`](../v1/type-aliases/EventLogExportRequest.md)

#### Returns

[`ResponsePromise`](../../../client/classes/ResponsePromise.md)\<\{ \}, \{ \}\>

***

### extend()

> **extend**(`extensionOptions`): `EventLogClient`

Defined in: [client.js:382](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/sdk/src/client.js#L382)

Creates a new instance of the same client type with extended options.

This is useful when you need to create a client with modified configuration
(e.g., different endpoint, token, or headers) without affecting the original.

Note: This method creates a completely new instance rather than cloning,
which is necessary because private class fields cannot be copied.

#### Parameters

##### extensionOptions

[`Partial`](https://www.typescriptlang.org/docs/handbook/utility-types.html#partialtype)\<[`ChatBotKitClientOptions`](../../../client/interfaces/ChatBotKitClientOptions.md)\>

Options to merge with current options

#### Returns

`EventLogClient`

A new instance of the same client class with extended options

#### Inherited from

[`ChatBotKitClient`](../../../client/classes/ChatBotKitClient.md).[`extend`](../../../client/classes/ChatBotKitClient.md#extend)

***

### list()

> **list**(`request?`): [`ResponsePromise`](../../../client/classes/ResponsePromise.md)\<\{ \}, \{ \}\>

Defined in: [event/log/index.js:51](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/sdk/src/event/log/index.js#L51)

Retrieves a list of event logs.

#### Parameters

##### request?

[`EventLogListRequest`](../v1/type-aliases/EventLogListRequest.md)

#### Returns

[`ResponsePromise`](../../../client/classes/ResponsePromise.md)\<\{ \}, \{ \}\>

***

### subscribe()

> **subscribe**(`request?`): [`ResponsePromise`](../../../client/classes/ResponsePromise.md)\<`never`, \{ \}\>

Defined in: [event/log/index.js:75](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/sdk/src/event/log/index.js#L75)

Subscribes to live event logs.

This method establishes a streaming connection to receive real-time events
as they occur. The connection remains open until closed by the client.
This feature requires a Pro plan or higher.

#### Parameters

##### request?

#### Returns

[`ResponsePromise`](../../../client/classes/ResponsePromise.md)\<`never`, \{ \}\>
