[@chatbotkit/sdk](../README.md) / [Modules](../modules.md) / [dataset/record](../modules/dataset_record.md) / DatasetRecordClient

# Class: DatasetRecordClient

[dataset/record](../modules/dataset_record.md).DatasetRecordClient

Dataset record client.

## Hierarchy

- [`ChatBotKitClient`](client.ChatBotKitClient.md)

  ↳ **`DatasetRecordClient`**

## Table of contents

### Constructors

- [constructor](dataset_record.DatasetRecordClient.md#constructor)

### Methods

- [clientFetch](dataset_record.DatasetRecordClient.md#clientfetch)
- [create](dataset_record.DatasetRecordClient.md#create)
- [delete](dataset_record.DatasetRecordClient.md#delete)
- [export](dataset_record.DatasetRecordClient.md#export)
- [fetch](dataset_record.DatasetRecordClient.md#fetch)
- [list](dataset_record.DatasetRecordClient.md#list)
- [update](dataset_record.DatasetRecordClient.md#update)

## Constructors

### constructor

• **new DatasetRecordClient**(`options`): [`DatasetRecordClient`](dataset_record.DatasetRecordClient.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`ChatBotKitClientOptions`](../interfaces/client.ChatBotKitClientOptions.md) |

#### Returns

[`DatasetRecordClient`](dataset_record.DatasetRecordClient.md)

#### Overrides

[ChatBotKitClient](client.ChatBotKitClient.md).[constructor](client.ChatBotKitClient.md#constructor)

#### Defined in

[dataset/record/index.js:24](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/dataset/record/index.js#L24)

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

▸ **create**(`datasetId`, `request`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<{}\>

Creates a new record.

#### Parameters

| Name | Type |
| :------ | :------ |
| `datasetId` | `string` |
| `request` | `Object` |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<{}\>

#### Defined in

[dataset/record/index.js:57](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/dataset/record/index.js#L57)

___

### delete

▸ **delete**(`datasetId`, `recordId`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<{}\>

Deletes the record.

#### Parameters

| Name | Type |
| :------ | :------ |
| `datasetId` | `string` |
| `recordId` | `string` |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<{}\>

#### Defined in

[dataset/record/index.js:80](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/dataset/record/index.js#L80)

___

### export

▸ **export**(`datasetId`, `request?`): [`ResponsePromise`](client.ResponsePromise.md)\<{}, {}\>

Exports records.

#### Parameters

| Name | Type |
| :------ | :------ |
| `datasetId` | `string` |
| `request?` | [`DatasetRecordExportRequest`](../modules/dataset_record_v1.md#datasetrecordexportrequest) |

#### Returns

[`ResponsePromise`](client.ResponsePromise.md)\<{}, {}\>

#### Defined in

[dataset/record/index.js:91](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/dataset/record/index.js#L91)

___

### fetch

▸ **fetch**(`datasetId`, `recordId`): [`ResponsePromise`](client.ResponsePromise.md)\<{}, `never`\>

Fetches a record.

#### Parameters

| Name | Type |
| :------ | :------ |
| `datasetId` | `string` |
| `recordId` | `string` |

#### Returns

[`ResponsePromise`](client.ResponsePromise.md)\<{}, `never`\>

#### Defined in

[dataset/record/index.js:46](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/dataset/record/index.js#L46)

___

### list

▸ **list**(`datasetId`, `request?`): [`ResponsePromise`](client.ResponsePromise.md)\<{}, {}\>

Retrieves a list of all records.

#### Parameters

| Name | Type |
| :------ | :------ |
| `datasetId` | `string` |
| `request?` | [`DatasetRecordListRequest`](../modules/dataset_record_v1.md#datasetrecordlistrequest) |

#### Returns

[`ResponsePromise`](client.ResponsePromise.md)\<{}, {}\>

#### Defined in

[dataset/record/index.js:35](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/dataset/record/index.js#L35)

___

### update

▸ **update**(`datasetId`, `recordId`, `request`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<{}\>

Updates a record.

#### Parameters

| Name | Type |
| :------ | :------ |
| `datasetId` | `string` |
| `recordId` | `string` |
| `request` | `Object` |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<{}\>

#### Defined in

[dataset/record/index.js:69](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/dataset/record/index.js#L69)
