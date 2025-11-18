[@chatbotkit/sdk](../README.md) / [Modules](../modules.md) / [integration/notion](../modules/integration_notion.md) / NotionIntegrationClient

# Class: NotionIntegrationClient

[integration/notion](../modules/integration_notion.md).NotionIntegrationClient

**`Template`**

**`Template`**

## Hierarchy

- [`ChatBotKitClient`](client.ChatBotKitClient.md)

  ↳ **`NotionIntegrationClient`**

## Table of contents

### Constructors

- [constructor](integration_notion.NotionIntegrationClient.md#constructor)

### Methods

- [create](integration_notion.NotionIntegrationClient.md#create)
- [delete](integration_notion.NotionIntegrationClient.md#delete)
- [extend](integration_notion.NotionIntegrationClient.md#extend)
- [fetch](integration_notion.NotionIntegrationClient.md#fetch)
- [list](integration_notion.NotionIntegrationClient.md#list)
- [sync](integration_notion.NotionIntegrationClient.md#sync)
- [update](integration_notion.NotionIntegrationClient.md#update)

## Constructors

### constructor

• **new NotionIntegrationClient**(`options`): [`NotionIntegrationClient`](integration_notion.NotionIntegrationClient.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`ChatBotKitClientOptions`](../interfaces/client.ChatBotKitClientOptions.md) |

#### Returns

[`NotionIntegrationClient`](integration_notion.NotionIntegrationClient.md)

#### Overrides

[ChatBotKitClient](client.ChatBotKitClient.md).[constructor](client.ChatBotKitClient.md#constructor)

#### Defined in

[integration/notion/index.js:21](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/notion/index.js#L21)

## Methods

### create

▸ **create**(`request`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<{}\>

Creates a new notion integration.

#### Parameters

| Name | Type |
| :------ | :------ |
| `request` | `Object` |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<{}\>

#### Defined in

[integration/notion/index.js:51](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/notion/index.js#L51)

___

### delete

▸ **delete**(`notionId`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<{}\>

Deletes a notion integration.

#### Parameters

| Name | Type |
| :------ | :------ |
| `notionId` | `string` |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<{}\>

#### Defined in

[integration/notion/index.js:72](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/notion/index.js#L72)

___

### extend

▸ **extend**(`extensionOptions`): [`NotionIntegrationClient`](integration_notion.NotionIntegrationClient.md)

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

[`NotionIntegrationClient`](integration_notion.NotionIntegrationClient.md)

A new instance of the same client class with extended options

#### Inherited from

[ChatBotKitClient](client.ChatBotKitClient.md).[extend](client.ChatBotKitClient.md#extend)

#### Defined in

[client.js:382](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/client.js#L382)

___

### fetch

▸ **fetch**(`notionId`): [`ResponsePromise`](client.ResponsePromise.md)\<{}, `never`\>

Fetches a notion integration.

#### Parameters

| Name | Type |
| :------ | :------ |
| `notionId` | `string` |

#### Returns

[`ResponsePromise`](client.ResponsePromise.md)\<{}, `never`\>

#### Defined in

[integration/notion/index.js:41](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/notion/index.js#L41)

___

### list

▸ **list**(`request?`): [`ResponsePromise`](client.ResponsePromise.md)\<{}, {}\>

Retrieves a list of all notion integrations.

#### Parameters

| Name | Type |
| :------ | :------ |
| `request?` | [`NotionIntegrationListRequest`](../modules/integration_notion_v1.md#notionintegrationlistrequest) |

#### Returns

[`ResponsePromise`](client.ResponsePromise.md)\<{}, {}\>

#### Defined in

[integration/notion/index.js:31](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/notion/index.js#L31)

___

### sync

▸ **sync**(`notionId`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<{}\>

Syncs a notion integration.

#### Parameters

| Name | Type |
| :------ | :------ |
| `notionId` | `string` |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<{}\>

#### Defined in

[integration/notion/index.js:82](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/notion/index.js#L82)

___

### update

▸ **update**(`notionId`, `request`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<{}\>

Updates a notion integration.

#### Parameters

| Name | Type |
| :------ | :------ |
| `notionId` | `string` |
| `request` | `Object` |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<{}\>

#### Defined in

[integration/notion/index.js:62](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/notion/index.js#L62)
