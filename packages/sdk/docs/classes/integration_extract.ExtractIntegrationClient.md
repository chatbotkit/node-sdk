[@chatbotkit/sdk](../README.md) / [Modules](../modules.md) / [integration/extract](../modules/integration_extract.md) / ExtractIntegrationClient

# Class: ExtractIntegrationClient

[integration/extract](../modules/integration_extract.md).ExtractIntegrationClient

**`Template`**

**`Template`**

## Hierarchy

- [`ChatBotKitClient`](client.ChatBotKitClient.md)

  ↳ **`ExtractIntegrationClient`**

## Table of contents

### Constructors

- [constructor](integration_extract.ExtractIntegrationClient.md#constructor)

### Methods

- [clientFetch](integration_extract.ExtractIntegrationClient.md#clientfetch)
- [create](integration_extract.ExtractIntegrationClient.md#create)
- [delete](integration_extract.ExtractIntegrationClient.md#delete)
- [fetch](integration_extract.ExtractIntegrationClient.md#fetch)
- [list](integration_extract.ExtractIntegrationClient.md#list)
- [update](integration_extract.ExtractIntegrationClient.md#update)

## Constructors

### constructor

• **new ExtractIntegrationClient**(`options`): [`ExtractIntegrationClient`](integration_extract.ExtractIntegrationClient.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`ChatBotKitClientOptions`](../interfaces/client.ChatBotKitClientOptions.md) |

#### Returns

[`ExtractIntegrationClient`](integration_extract.ExtractIntegrationClient.md)

#### Overrides

[ChatBotKitClient](client.ChatBotKitClient.md).[constructor](client.ChatBotKitClient.md#constructor)

#### Defined in

[integration/extract/index.js:20](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/extract/index.js#L20)

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

Creates a new extract integration.

#### Parameters

| Name | Type |
| :------ | :------ |
| `request` | `Object` |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<{}\>

#### Defined in

[integration/extract/index.js:50](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/extract/index.js#L50)

___

### delete

▸ **delete**(`extractId`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<{}\>

Deletes a extract integration.

#### Parameters

| Name | Type |
| :------ | :------ |
| `extractId` | `string` |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<{}\>

#### Defined in

[integration/extract/index.js:71](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/extract/index.js#L71)

___

### fetch

▸ **fetch**(`extractId`): [`ResponsePromise`](client.ResponsePromise.md)\<{}, `never`\>

Fetches a extract integration.

#### Parameters

| Name | Type |
| :------ | :------ |
| `extractId` | `string` |

#### Returns

[`ResponsePromise`](client.ResponsePromise.md)\<{}, `never`\>

#### Defined in

[integration/extract/index.js:40](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/extract/index.js#L40)

___

### list

▸ **list**(`request?`): [`ResponsePromise`](client.ResponsePromise.md)\<{}, {}\>

Retrieves a list of all extract integrations.

#### Parameters

| Name | Type |
| :------ | :------ |
| `request?` | [`ExtractIntegrationListRequest`](../modules/integration_extract_v1.md#extractintegrationlistrequest) |

#### Returns

[`ResponsePromise`](client.ResponsePromise.md)\<{}, {}\>

#### Defined in

[integration/extract/index.js:30](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/extract/index.js#L30)

___

### update

▸ **update**(`extractId`, `request`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<{}\>

Updates a extract integration.

#### Parameters

| Name | Type |
| :------ | :------ |
| `extractId` | `string` |
| `request` | `Object` |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<{}\>

#### Defined in

[integration/extract/index.js:61](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/extract/index.js#L61)
