[@chatbotkit/sdk](../README.md) / [Modules](../modules.md) / [dataset](../modules/dataset.md) / DatasetClient

# Class: DatasetClient

[dataset](../modules/dataset.md).DatasetClient

**`Template`**

**`Template`**

## Hierarchy

- [`ChatBotKitClient`](client.ChatBotKitClient.md)

  ↳ **`DatasetClient`**

## Table of contents

### Constructors

- [constructor](dataset.DatasetClient.md#constructor)

### Properties

- [endpoints](dataset.DatasetClient.md#endpoints)
- [file](dataset.DatasetClient.md#file)
- [record](dataset.DatasetClient.md#record)
- [secret](dataset.DatasetClient.md#secret)
- [url](dataset.DatasetClient.md#url)

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
| `options` | [`ChatBotKitClientOptions`](../modules/client.md#chatbotkitclientoptions) |

#### Returns

[`DatasetClient`](dataset.DatasetClient.md)

#### Overrides

[ChatBotKitClient](client.ChatBotKitClient.md).[constructor](client.ChatBotKitClient.md#constructor)

#### Defined in

[dataset/index.js:23](https://github.com/chatbotkit/node-sdk/blob/1a40caa/packages/sdk/src/dataset/index.js#L23)

## Properties

### endpoints

• **endpoints**: `Record`\<`string`, `string`\>

#### Inherited from

[ChatBotKitClient](client.ChatBotKitClient.md).[endpoints](client.ChatBotKitClient.md#endpoints)

#### Defined in

[client.js:201](https://github.com/chatbotkit/node-sdk/blob/1a40caa/packages/sdk/src/client.js#L201)

___

### file

• **file**: [`DatasetFileClient`](dataset_file.DatasetFileClient.md)

#### Defined in

[dataset/index.js:26](https://github.com/chatbotkit/node-sdk/blob/1a40caa/packages/sdk/src/dataset/index.js#L26)

___

### record

• **record**: [`DatasetRecordClient`](dataset_record.DatasetRecordClient.md)

#### Defined in

[dataset/index.js:27](https://github.com/chatbotkit/node-sdk/blob/1a40caa/packages/sdk/src/dataset/index.js#L27)

___

### secret

• **secret**: `string`

#### Inherited from

[ChatBotKitClient](client.ChatBotKitClient.md).[secret](client.ChatBotKitClient.md#secret)

#### Defined in

[client.js:189](https://github.com/chatbotkit/node-sdk/blob/1a40caa/packages/sdk/src/client.js#L189)

___

### url

• **url**: `URL`

#### Inherited from

[ChatBotKitClient](client.ChatBotKitClient.md).[url](client.ChatBotKitClient.md#url)

#### Defined in

[client.js:191](https://github.com/chatbotkit/node-sdk/blob/1a40caa/packages/sdk/src/client.js#L191)

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
| `options.data?` | `Record`\<`string`, `any`\> |
| `options.file?` | `Object` |
| `options.file.data` | `string` \| `ArrayBuffer` |
| `options.file.name?` | `string` |
| `options.file.type?` | `string` |
| `options.query?` | `Record`\<`string`, `any`\> |

#### Returns

[`ResponsePromise`](client.ResponsePromise.md)\<`T`, `U`\>

#### Inherited from

[ChatBotKitClient](client.ChatBotKitClient.md).[clientFetch](client.ChatBotKitClient.md#clientfetch)

#### Defined in

[client.js:211](https://github.com/chatbotkit/node-sdk/blob/1a40caa/packages/sdk/src/client.js#L211)

___

### create

▸ **create**(`request`): `Promise`\<[`DatasetCreateResponse`](../modules/dataset_v1.md#datasetcreateresponse)\>

Creates a new dataset.

#### Parameters

| Name | Type |
| :------ | :------ |
| `request` | [`DatasetCreateRequest`](../modules/dataset_v1.md#datasetcreaterequest) |

#### Returns

`Promise`\<[`DatasetCreateResponse`](../modules/dataset_v1.md#datasetcreateresponse)\>

#### Defined in

[dataset/index.js:56](https://github.com/chatbotkit/node-sdk/blob/1a40caa/packages/sdk/src/dataset/index.js#L56)

___

### delete

▸ **delete**(`datasetId`): `Promise`\<[`DatasetDeleteResponse`](../modules/dataset_v1.md#datasetdeleteresponse)\>

Deletes the dataset.

#### Parameters

| Name | Type |
| :------ | :------ |
| `datasetId` | `string` |

#### Returns

`Promise`\<[`DatasetDeleteResponse`](../modules/dataset_v1.md#datasetdeleteresponse)\>

#### Defined in

[dataset/index.js:77](https://github.com/chatbotkit/node-sdk/blob/1a40caa/packages/sdk/src/dataset/index.js#L77)

___

### fetch

▸ **fetch**(`datasetId`): `Promise`\<[`DatasetFetchResponse`](../modules/dataset_v1.md#datasetfetchresponse)\>

Fetches a dataset.

#### Parameters

| Name | Type |
| :------ | :------ |
| `datasetId` | `string` |

#### Returns

`Promise`\<[`DatasetFetchResponse`](../modules/dataset_v1.md#datasetfetchresponse)\>

#### Defined in

[dataset/index.js:46](https://github.com/chatbotkit/node-sdk/blob/1a40caa/packages/sdk/src/dataset/index.js#L46)

___

### list

▸ **list**(`request?`): [`ResponsePromise`](client.ResponsePromise.md)\<[`DatasetListResponse`](../modules/dataset_v1.md#datasetlistresponse), [`DatasetListStreamItemType`](../modules/dataset_v1.md#datasetliststreamitemtype)\>

Retrieves a list of all datasets.

#### Parameters

| Name | Type |
| :------ | :------ |
| `request?` | [`DatasetListRequest`](../modules/dataset_v1.md#datasetlistrequest) |

#### Returns

[`ResponsePromise`](client.ResponsePromise.md)\<[`DatasetListResponse`](../modules/dataset_v1.md#datasetlistresponse), [`DatasetListStreamItemType`](../modules/dataset_v1.md#datasetliststreamitemtype)\>

#### Defined in

[dataset/index.js:36](https://github.com/chatbotkit/node-sdk/blob/1a40caa/packages/sdk/src/dataset/index.js#L36)

___

### search

▸ **search**(`datasetId`, `search`): `Promise`\<[`DatasetSearchResponse`](../modules/dataset_v1.md#datasetsearchresponse)\>

Searches the dataset.

#### Parameters

| Name | Type |
| :------ | :------ |
| `datasetId` | `string` |
| `search` | `string` |

#### Returns

`Promise`\<[`DatasetSearchResponse`](../modules/dataset_v1.md#datasetsearchresponse)\>

#### Defined in

[dataset/index.js:88](https://github.com/chatbotkit/node-sdk/blob/1a40caa/packages/sdk/src/dataset/index.js#L88)

___

### update

▸ **update**(`datasetId`, `request`): `Promise`\<[`DatasetUpdateResponse`](../modules/dataset_v1.md#datasetupdateresponse)\>

Updates a dataset.

#### Parameters

| Name | Type |
| :------ | :------ |
| `datasetId` | `string` |
| `request` | [`DatasetOptions`](../modules/dataset_v1.md#datasetoptions) |

#### Returns

`Promise`\<[`DatasetUpdateResponse`](../modules/dataset_v1.md#datasetupdateresponse)\>

#### Defined in

[dataset/index.js:67](https://github.com/chatbotkit/node-sdk/blob/1a40caa/packages/sdk/src/dataset/index.js#L67)
