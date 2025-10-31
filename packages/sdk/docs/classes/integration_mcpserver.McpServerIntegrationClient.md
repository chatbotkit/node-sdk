[@chatbotkit/sdk](../README.md) / [Modules](../modules.md) / [integration/mcpserver](../modules/integration_mcpserver.md) / McpServerIntegrationClient

# Class: McpServerIntegrationClient

[integration/mcpserver](../modules/integration_mcpserver.md).McpServerIntegrationClient

**`Template`**

**`Template`**

## Hierarchy

- [`ChatBotKitClient`](client.ChatBotKitClient.md)

  ↳ **`McpServerIntegrationClient`**

## Table of contents

### Constructors

- [constructor](integration_mcpserver.McpServerIntegrationClient.md#constructor)

### Methods

- [clientFetch](integration_mcpserver.McpServerIntegrationClient.md#clientfetch)
- [create](integration_mcpserver.McpServerIntegrationClient.md#create)
- [delete](integration_mcpserver.McpServerIntegrationClient.md#delete)
- [fetch](integration_mcpserver.McpServerIntegrationClient.md#fetch)
- [list](integration_mcpserver.McpServerIntegrationClient.md#list)
- [update](integration_mcpserver.McpServerIntegrationClient.md#update)

## Constructors

### constructor

• **new McpServerIntegrationClient**(`options`): [`McpServerIntegrationClient`](integration_mcpserver.McpServerIntegrationClient.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`ChatBotKitClientOptions`](../interfaces/client.ChatBotKitClientOptions.md) |

#### Returns

[`McpServerIntegrationClient`](integration_mcpserver.McpServerIntegrationClient.md)

#### Overrides

[ChatBotKitClient](client.ChatBotKitClient.md).[constructor](client.ChatBotKitClient.md#constructor)

#### Defined in

[integration/mcpserver/index.js:20](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/mcpserver/index.js#L20)

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

[client.js:345](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/client.js#L345)

___

### create

▸ **create**(`request`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<{}\>

Creates a new mcpserver integration.

#### Parameters

| Name | Type |
| :------ | :------ |
| `request` | `Object` |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<{}\>

#### Defined in

[integration/mcpserver/index.js:50](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/mcpserver/index.js#L50)

___

### delete

▸ **delete**(`mcpserverId`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<{}\>

Deletes a mcpserver integration.

#### Parameters

| Name | Type |
| :------ | :------ |
| `mcpserverId` | `string` |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<{}\>

#### Defined in

[integration/mcpserver/index.js:71](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/mcpserver/index.js#L71)

___

### fetch

▸ **fetch**(`mcpserverId`): [`ResponsePromise`](client.ResponsePromise.md)\<{}, `never`\>

Fetches a mcpserver integration.

#### Parameters

| Name | Type |
| :------ | :------ |
| `mcpserverId` | `string` |

#### Returns

[`ResponsePromise`](client.ResponsePromise.md)\<{}, `never`\>

#### Defined in

[integration/mcpserver/index.js:40](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/mcpserver/index.js#L40)

___

### list

▸ **list**(`request?`): [`ResponsePromise`](client.ResponsePromise.md)\<{}, {}\>

Retrieves a list of all mcpserver integrations.

#### Parameters

| Name | Type |
| :------ | :------ |
| `request?` | [`McpServerIntegrationListRequest`](../modules/integration_mcpserver_v1.md#mcpserverintegrationlistrequest) |

#### Returns

[`ResponsePromise`](client.ResponsePromise.md)\<{}, {}\>

#### Defined in

[integration/mcpserver/index.js:30](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/mcpserver/index.js#L30)

___

### update

▸ **update**(`mcpserverId`, `request`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<{}\>

Updates a mcpserver integration.

#### Parameters

| Name | Type |
| :------ | :------ |
| `mcpserverId` | `string` |
| `request` | `Object` |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<{}\>

#### Defined in

[integration/mcpserver/index.js:61](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/mcpserver/index.js#L61)
