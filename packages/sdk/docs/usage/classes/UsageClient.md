[**@chatbotkit/sdk**](../../README.md)

***

[@chatbotkit/sdk](../../modules.md) / [usage](../README.md) / UsageClient

# Class: UsageClient

Defined in: [usage/index.js:11](https://github.com/chatbotkit/cbk-platform/blob/main/sdks/node/packages/sdk/src/usage/index.js#L11)

## Template

## Template

## Extends

- [`ChatBotKitClient`](../../client/classes/ChatBotKitClient.md)

## Constructors

### Constructor

> **new UsageClient**(`options`): `UsageClient`

Defined in: [usage/index.js:15](https://github.com/chatbotkit/cbk-platform/blob/main/sdks/node/packages/sdk/src/usage/index.js#L15)

#### Parameters

##### options

[`ChatBotKitClientOptions`](../../client/interfaces/ChatBotKitClientOptions.md)

#### Returns

`UsageClient`

#### Overrides

[`ChatBotKitClient`](../../client/classes/ChatBotKitClient.md).[`constructor`](../../client/classes/ChatBotKitClient.md#constructor)

## Properties

### series

> **series**: [`UsageSeriesClient`](../series/classes/UsageSeriesClient.md)

Defined in: [usage/index.js:21](https://github.com/chatbotkit/cbk-platform/blob/main/sdks/node/packages/sdk/src/usage/index.js#L21)

## Methods

### extend()

> **extend**(`extensionOptions`): `UsageClient`

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

`UsageClient`

A new instance of the same client class with extended options

#### Inherited from

[`ChatBotKitClient`](../../client/classes/ChatBotKitClient.md).[`extend`](../../client/classes/ChatBotKitClient.md#extend)

***

### fetch()

> **fetch**(): [`ResponsePromise`](../../client/classes/ResponsePromise.md)\<\{ \}, `never`\>

Defined in: [usage/index.js:29](https://github.com/chatbotkit/cbk-platform/blob/main/sdks/node/packages/sdk/src/usage/index.js#L29)

Fetches usage.

#### Returns

[`ResponsePromise`](../../client/classes/ResponsePromise.md)\<\{ \}, `never`\>
