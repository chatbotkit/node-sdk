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

[dataset/record/index.js:23](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/dataset/record/index.js#L23)

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

[client.js:330](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/client.js#L330)

___

### create

▸ **create**(`datasetId`, `request`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<[`DatasetRecordCreateResponse`](../modules/dataset_record_v1.md#datasetrecordcreateresponse)\>

Creates a new record.

#### Parameters

| Name | Type |
| :------ | :------ |
| `datasetId` | `string` |
| `request` | [`DatasetRecordOptions`](../modules/dataset_record_v1.md#datasetrecordoptions) |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<[`DatasetRecordCreateResponse`](../modules/dataset_record_v1.md#datasetrecordcreateresponse)\>

#### Defined in

[dataset/record/index.js:56](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/dataset/record/index.js#L56)

___

### delete

▸ **delete**(`datasetId`, `recordId`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<[`DatasetRecordDeleteResponse`](../modules/dataset_record_v1.md#datasetrecorddeleteresponse)\>

Deletes the record.

#### Parameters

| Name | Type |
| :------ | :------ |
| `datasetId` | `string` |
| `recordId` | `string` |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<[`DatasetRecordDeleteResponse`](../modules/dataset_record_v1.md#datasetrecorddeleteresponse)\>

#### Defined in

[dataset/record/index.js:79](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/dataset/record/index.js#L79)

___

### fetch

▸ **fetch**(`datasetId`, `recordId`): [`ResponsePromise`](client.ResponsePromise.md)\<[`DatasetRecordFetchResponse`](../modules/dataset_record_v1.md#datasetrecordfetchresponse), `never`\>

Fetches a record.

#### Parameters

| Name | Type |
| :------ | :------ |
| `datasetId` | `string` |
| `recordId` | `string` |

#### Returns

[`ResponsePromise`](client.ResponsePromise.md)\<[`DatasetRecordFetchResponse`](../modules/dataset_record_v1.md#datasetrecordfetchresponse), `never`\>

#### Defined in

[dataset/record/index.js:45](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/dataset/record/index.js#L45)

___

### list

▸ **list**(`datasetId`, `request?`): [`ResponsePromise`](client.ResponsePromise.md)\<[`DatasetRecordListResponse`](../modules/dataset_record_v1.md#datasetrecordlistresponse), [`DatasetRecordListStreamItem`](../modules/dataset_record_v1.md#datasetrecordliststreamitem)\>

Retrieves a list of all records.

#### Parameters

| Name | Type |
| :------ | :------ |
| `datasetId` | `string` |
| `request?` | [`DatasetRecordListRequest`](../modules/dataset_record_v1.md#datasetrecordlistrequest) |

#### Returns

[`ResponsePromise`](client.ResponsePromise.md)\<[`DatasetRecordListResponse`](../modules/dataset_record_v1.md#datasetrecordlistresponse), [`DatasetRecordListStreamItem`](../modules/dataset_record_v1.md#datasetrecordliststreamitem)\>

#### Defined in

[dataset/record/index.js:34](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/dataset/record/index.js#L34)

___

### update

▸ **update**(`datasetId`, `recordId`, `request`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<[`DatasetRecordUpdateResponse`](../modules/dataset_record_v1.md#datasetrecordupdateresponse)\>

Updates a record.

#### Parameters

| Name | Type |
| :------ | :------ |
| `datasetId` | `string` |
| `recordId` | `string` |
| `request` | [`DatasetRecordOptions`](../modules/dataset_record_v1.md#datasetrecordoptions) |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<[`DatasetRecordUpdateResponse`](../modules/dataset_record_v1.md#datasetrecordupdateresponse)\>

#### Defined in

[dataset/record/index.js:68](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/dataset/record/index.js#L68)
