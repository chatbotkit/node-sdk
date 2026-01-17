[**@chatbotkit/sdk**](../../README.md)

***

[@chatbotkit/sdk](../../modules.md) / [event](../README.md) / EventClient

# Class: EventClient

Defined in: [event/index.js:26](https://github.com/chatbotkit/cbk-platform/blob/main/sdks/node/packages/sdk/src/event/index.js#L26)

Event client for accessing event-related functionality.

This client provides access to ChatBotKit's event system, including
event logs that record all significant platform activities. Use the
`log` sub-client to list, export, or subscribe to events.

## Example

```ts
const client = new EventClient({ secret: 'your-secret' })

// List recent events
const events = await client.log.list({ take: 100 })

// Export events for a specific conversation
const exported = await client.log.export({ conversationId: 'conv_123' })

// Subscribe to live events (Pro+ only)
const stream = client.log.subscribe()
for await (const event of stream) {
  console.log('Live event:', event.data.type)
}
```

## Extends

- [`ChatBotKitClient`](../../client/classes/ChatBotKitClient.md)

## Constructors

### Constructor

> **new EventClient**(`options`): `EventClient`

Defined in: [event/index.js:30](https://github.com/chatbotkit/cbk-platform/blob/main/sdks/node/packages/sdk/src/event/index.js#L30)

#### Parameters

##### options

[`ChatBotKitClientOptions`](../../client/interfaces/ChatBotKitClientOptions.md)

#### Returns

`EventClient`

#### Overrides

[`ChatBotKitClient`](../../client/classes/ChatBotKitClient.md).[`constructor`](../../client/classes/ChatBotKitClient.md#constructor)

## Properties

### log

> **log**: [`EventLogClient`](../log/classes/EventLogClient.md)

Defined in: [event/index.js:36](https://github.com/chatbotkit/cbk-platform/blob/main/sdks/node/packages/sdk/src/event/index.js#L36)

## Methods

### extend()

> **extend**(`extensionOptions`): `EventClient`

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

`EventClient`

A new instance of the same client class with extended options

#### Inherited from

[`ChatBotKitClient`](../../client/classes/ChatBotKitClient.md).[`extend`](../../client/classes/ChatBotKitClient.md#extend)
