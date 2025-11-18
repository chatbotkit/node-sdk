[@chatbotkit/sdk](../README.md) / [Modules](../modules.md) / [graphql](../modules/graphql.md) / GraphqlClient

# Class: GraphqlClient

[graphql](../modules/graphql.md).GraphqlClient

GraphQL client.

## Hierarchy

- [`ChatBotKitClient`](client.ChatBotKitClient.md)

  ↳ **`GraphqlClient`**

## Table of contents

### Constructors

- [constructor](graphql.GraphqlClient.md#constructor)

### Methods

- [call](graphql.GraphqlClient.md#call)
- [extend](graphql.GraphqlClient.md#extend)

## Constructors

### constructor

• **new GraphqlClient**(`options`): [`GraphqlClient`](graphql.GraphqlClient.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`ChatBotKitClientOptions`](../interfaces/client.ChatBotKitClientOptions.md) |

#### Returns

[`GraphqlClient`](graphql.GraphqlClient.md)

#### Overrides

[ChatBotKitClient](client.ChatBotKitClient.md).[constructor](client.ChatBotKitClient.md#constructor)

#### Defined in

[graphql/index.js:11](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/graphql/index.js#L11)

## Methods

### call

▸ **call**(`input`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<{}\>

Executes a GraphQL query.

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | `Object` |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<{}\>

#### Defined in

[graphql/index.js:21](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/graphql/index.js#L21)

___

### extend

▸ **extend**(`extensionOptions`): [`GraphqlClient`](graphql.GraphqlClient.md)

Creates a new instance of the same client type with extended options.

This is useful when you need to create a client with modified configuration
(e.g., different endpoint, token, or headers) without affecting the original.

Note: This method creates a completely new instance rather than cloning,
which is necessary because private class fields cannot be copied.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `extensionOptions` | [`Partial`]( https://www.typescriptlang.org/docs/handbook/utility-types.html#partialtype )\<[`ChatBotKitClientOptions`](../interfaces/client.ChatBotKitClientOptions.md)\> | Options to merge with current options |

#### Returns

[`GraphqlClient`](graphql.GraphqlClient.md)

A new instance of the same client class with extended options

#### Inherited from

[ChatBotKitClient](client.ChatBotKitClient.md).[extend](client.ChatBotKitClient.md#extend)

#### Defined in

[client.js:382](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/client.js#L382)
