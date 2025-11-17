[@chatbotkit/sdk](../README.md) / [Modules](../modules.md) / [dataset/file](../modules/dataset_file.md) / DatasetFileClient

# Class: DatasetFileClient

[dataset/file](../modules/dataset_file.md).DatasetFileClient

Dataset file client.

## Hierarchy

- [`ChatBotKitClient`](client.ChatBotKitClient.md)

  ↳ **`DatasetFileClient`**

## Table of contents

### Constructors

- [constructor](dataset_file.DatasetFileClient.md#constructor)

### Methods

- [attach](dataset_file.DatasetFileClient.md#attach)
- [clientFetch](dataset_file.DatasetFileClient.md#clientfetch)
- [detach](dataset_file.DatasetFileClient.md#detach)
- [extend](dataset_file.DatasetFileClient.md#extend)
- [list](dataset_file.DatasetFileClient.md#list)
- [sync](dataset_file.DatasetFileClient.md#sync)

## Constructors

### constructor

• **new DatasetFileClient**(`options`): [`DatasetFileClient`](dataset_file.DatasetFileClient.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`ChatBotKitClientOptions`](../interfaces/client.ChatBotKitClientOptions.md) |

#### Returns

[`DatasetFileClient`](dataset_file.DatasetFileClient.md)

#### Overrides

[ChatBotKitClient](client.ChatBotKitClient.md).[constructor](client.ChatBotKitClient.md#constructor)

#### Defined in

[dataset/file/index.js:22](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/dataset/file/index.js#L22)

## Methods

### attach

▸ **attach**(`datasetId`, `fileId`, `request`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<{}\>

Attaches a file.

#### Parameters

| Name | Type |
| :------ | :------ |
| `datasetId` | `string` |
| `fileId` | `string` |
| `request` | `Object` |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<{}\>

#### Defined in

[dataset/file/index.js:44](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/dataset/file/index.js#L44)

___

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

[client.js:449](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/client.js#L449)

___

### detach

▸ **detach**(`datasetId`, `fileId`, `request`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<{}\>

Detach a file.

#### Parameters

| Name | Type |
| :------ | :------ |
| `datasetId` | `string` |
| `fileId` | `string` |
| `request` | `Object` |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<{}\>

#### Defined in

[dataset/file/index.js:56](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/dataset/file/index.js#L56)

___

### extend

▸ **extend**(`extensionOptions`): [`DatasetFileClient`](dataset_file.DatasetFileClient.md)

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

[`DatasetFileClient`](dataset_file.DatasetFileClient.md)

A new instance of the same client class with extended options

#### Inherited from

[ChatBotKitClient](client.ChatBotKitClient.md).[extend](client.ChatBotKitClient.md#extend)

#### Defined in

[client.js:382](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/client.js#L382)

___

### list

▸ **list**(`datasetId`, `request?`): [`ResponsePromise`](client.ResponsePromise.md)\<{}, {}\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `datasetId` | `string` |
| `request?` | [`DatasetFileListRequest`](../modules/dataset_file_v1.md#datasetfilelistrequest) |

#### Returns

[`ResponsePromise`](client.ResponsePromise.md)\<{}, {}\>

#### Defined in

[dataset/file/index.js:32](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/dataset/file/index.js#L32)

___

### sync

▸ **sync**(`datasetId`, `fileId`, `request`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<{}\>

Sync a file.

#### Parameters

| Name | Type |
| :------ | :------ |
| `datasetId` | `string` |
| `fileId` | `string` |
| `request` | [`Record`]( https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type )\<`string`, `never`\> |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<{}\>

#### Defined in

[dataset/file/index.js:68](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/dataset/file/index.js#L68)
