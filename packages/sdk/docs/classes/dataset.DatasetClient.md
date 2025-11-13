[@chatbotkit/sdk](../README.md) / [Modules](../modules.md) / [dataset](../modules/dataset.md) / DatasetClient

# Class: DatasetClient

[dataset](../modules/dataset.md).DatasetClient

Dataset client.

## Hierarchy

- [`ChatBotKitClient`](client.ChatBotKitClient.md)

  ↳ **`DatasetClient`**

## Table of contents

### Constructors

- [constructor](dataset.DatasetClient.md#constructor)

### Properties

- [file](dataset.DatasetClient.md#file)
- [record](dataset.DatasetClient.md#record)

### Methods

- [clientFetch](dataset.DatasetClient.md#clientfetch)
- [create](dataset.DatasetClient.md#create)
- [delete](dataset.DatasetClient.md#delete)
- [fetch](dataset.DatasetClient.md#fetch)
- [list](dataset.DatasetClient.md#list)
- [search](dataset.DatasetClient.md#search)
- [update](dataset.DatasetClient.md#update)

## Constructors

### constructor

• **new DatasetClient**(`options`): [`DatasetClient`](dataset.DatasetClient.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`ChatBotKitClientOptions`](../interfaces/client.ChatBotKitClientOptions.md) |

#### Returns

[`DatasetClient`](dataset.DatasetClient.md)

#### Overrides

[ChatBotKitClient](client.ChatBotKitClient.md).[constructor](client.ChatBotKitClient.md#constructor)

#### Defined in

[dataset/index.js:26](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/dataset/index.js#L26)

## Properties

### file

• **file**: [`DatasetFileClient`](dataset_file.DatasetFileClient.md)

#### Defined in

[dataset/index.js:32](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/dataset/index.js#L32)

___

### record

• **record**: [`DatasetRecordClient`](dataset_record.DatasetRecordClient.md)

#### Defined in

[dataset/index.js:37](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/dataset/index.js#L37)

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

Creates a new dataset.

#### Parameters

| Name | Type |
| :------ | :------ |
| `request` | `Object` |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<{}\>

#### Defined in

[dataset/index.js:66](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/dataset/index.js#L66)

___

### delete

▸ **delete**(`datasetId`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<{}\>

Deletes the dataset.

#### Parameters

| Name | Type |
| :------ | :------ |
| `datasetId` | `string` |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<{}\>

#### Defined in

[dataset/index.js:87](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/dataset/index.js#L87)

___

### fetch

▸ **fetch**(`datasetId`): [`ResponsePromise`](client.ResponsePromise.md)\<{}, `never`\>

Fetches a dataset.

#### Parameters

| Name | Type |
| :------ | :------ |
| `datasetId` | `string` |

#### Returns

[`ResponsePromise`](client.ResponsePromise.md)\<{}, `never`\>

#### Defined in

[dataset/index.js:56](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/dataset/index.js#L56)

___

### list

▸ **list**(`request?`): [`ResponsePromise`](client.ResponsePromise.md)\<{}, {}\>

Retrieves a list of all datasets.

#### Parameters

| Name | Type |
| :------ | :------ |
| `request?` | [`DatasetListRequest`](../modules/dataset_v1.md#datasetlistrequest) |

#### Returns

[`ResponsePromise`](client.ResponsePromise.md)\<{}, {}\>

#### Defined in

[dataset/index.js:46](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/dataset/index.js#L46)

___

### search

▸ **search**(`datasetId`, `search`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<{}\>

Searches the dataset.

#### Parameters

| Name | Type |
| :------ | :------ |
| `datasetId` | `string` |
| `search` | `string` |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<{}\>

#### Defined in

[dataset/index.js:98](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/dataset/index.js#L98)

___

### update

▸ **update**(`datasetId`, `request`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<{}\>

Updates a dataset.

#### Parameters

| Name | Type |
| :------ | :------ |
| `datasetId` | `string` |
| `request` | `Object` |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<{}\>

#### Defined in

[dataset/index.js:77](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/dataset/index.js#L77)
