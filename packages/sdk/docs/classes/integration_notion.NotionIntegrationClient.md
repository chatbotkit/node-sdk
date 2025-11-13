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

- [clientFetch](integration_notion.NotionIntegrationClient.md#clientfetch)
- [create](integration_notion.NotionIntegrationClient.md#create)
- [delete](integration_notion.NotionIntegrationClient.md#delete)
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

### clientFetch

▸ **clientFetch**\<`T`, `U`\>(`path`, `options?`): [`ResponsePromise`](client.ResponsePromise.md)\<`T`, `U`\>

#### Type parameters

| Name |
| :------ |
| `T` |
| `U` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | `string` |
| `options?` | `Object` |
| `options.buffer?` | [`ArrayBuffer`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer ) |
| `options.endpoint?` | `string` |
| `options.external?` | `boolean` |
| `options.fetchFn?` | [`FetchFunction`](../modules/client.md#fetchfunction) |
| `options.file?` | `Object` |
| `options.file.data` | `string` \| [`ArrayBuffer`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer ) |
| `options.file.name?` | `string` |
| `options.file.type?` | `string` |
| `options.headers?` | [`Record`]( https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type )\<`string`, `any`\> |
| `options.method?` | `string` |
| `options.query?` | [`Record`]( https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type )\<`string`, `any`\> |
| `options.record?` | [`Record`]( https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type )\<`string`, `any`\> |
| `options.retries?` | `number` |
| `options.retryDelay?` | `number` |
| `options.retryTimeout?` | `boolean` |
| `options.timeout?` | `number` |

#### Returns

[`ResponsePromise`](client.ResponsePromise.md)\<`T`, `U`\>

#### Inherited from

[ChatBotKitClient](client.ChatBotKitClient.md).[clientFetch](client.ChatBotKitClient.md#clientfetch)

#### Defined in

[client.js:390](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/client.js#L390)

___

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
