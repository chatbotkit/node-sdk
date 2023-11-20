[@chatbotkit/sdk](../README.md) / [Modules](../modules.md) / [dataset](../modules/dataset.md) / DatasetClient

# Class: DatasetClient

[dataset](../modules/dataset.md).DatasetClient

**`Template`**

**`Template`**

## Hierarchy

- `ChatBotKitClient`

  ↳ **`DatasetClient`**

## Table of contents

### Constructors

- [constructor](dataset.DatasetClient.md#constructor)

### Properties

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
| `options` | `ChatBotKitClientOptions` |

#### Returns

[`DatasetClient`](dataset.DatasetClient.md)

#### Overrides

ChatBotKitClient.constructor

#### Defined in

[dataset/index.js:23](https://github.com/chatbotkit/node-sdk/blob/b5ebcd8/packages/sdk/src/dataset/index.js#L23)

## Properties

### file

• **file**: [`DatasetFileClient`](dataset_file.DatasetFileClient.md)

#### Defined in

[dataset/index.js:26](https://github.com/chatbotkit/node-sdk/blob/b5ebcd8/packages/sdk/src/dataset/index.js#L26)

___

### record

• **record**: [`DatasetRecordClient`](dataset_record.DatasetRecordClient.md)

#### Defined in

[dataset/index.js:27](https://github.com/chatbotkit/node-sdk/blob/b5ebcd8/packages/sdk/src/dataset/index.js#L27)

___

### secret

• **secret**: `string`

#### Inherited from

ChatBotKitClient.secret

#### Defined in

[client.js:187](https://github.com/chatbotkit/node-sdk/blob/b5ebcd8/packages/sdk/src/client.js#L187)

___

### url

• **url**: `URL`

#### Inherited from

ChatBotKitClient.url

#### Defined in

[client.js:189](https://github.com/chatbotkit/node-sdk/blob/b5ebcd8/packages/sdk/src/client.js#L189)

## Methods

### clientFetch

▸ **clientFetch**\<`T`, `U`\>(`path`, `options?`): `ResponsePromise`\<`T`, `U`\>

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

`ResponsePromise`\<`T`, `U`\>

#### Inherited from

ChatBotKitClient.clientFetch

#### Defined in

[client.js:206](https://github.com/chatbotkit/node-sdk/blob/b5ebcd8/packages/sdk/src/client.js#L206)

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

[dataset/index.js:56](https://github.com/chatbotkit/node-sdk/blob/b5ebcd8/packages/sdk/src/dataset/index.js#L56)

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

[dataset/index.js:77](https://github.com/chatbotkit/node-sdk/blob/b5ebcd8/packages/sdk/src/dataset/index.js#L77)

___

### fetch

▸ **fetch**(`datasetId`): `Promise`\<[`DatasetInstance`](../modules/dataset_v1.md#datasetinstance)\>

Fetches a dataset.

#### Parameters

| Name | Type |
| :------ | :------ |
| `datasetId` | `string` |

#### Returns

`Promise`\<[`DatasetInstance`](../modules/dataset_v1.md#datasetinstance)\>

#### Defined in

[dataset/index.js:46](https://github.com/chatbotkit/node-sdk/blob/b5ebcd8/packages/sdk/src/dataset/index.js#L46)

___

### list

▸ **list**(`request?`): `ResponsePromise`\<[`DatasetListResponse`](../modules/dataset_v1.md#datasetlistresponse), [`DatasetListStreamItemType`](../modules/dataset_v1.md#datasetliststreamitemtype)\>

Retrieves a list of all datasets.

#### Parameters

| Name | Type |
| :------ | :------ |
| `request?` | [`DatasetListRequest`](../modules/dataset_v1.md#datasetlistrequest) |

#### Returns

`ResponsePromise`\<[`DatasetListResponse`](../modules/dataset_v1.md#datasetlistresponse), [`DatasetListStreamItemType`](../modules/dataset_v1.md#datasetliststreamitemtype)\>

#### Defined in

[dataset/index.js:36](https://github.com/chatbotkit/node-sdk/blob/b5ebcd8/packages/sdk/src/dataset/index.js#L36)

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

[dataset/index.js:88](https://github.com/chatbotkit/node-sdk/blob/b5ebcd8/packages/sdk/src/dataset/index.js#L88)

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

[dataset/index.js:67](https://github.com/chatbotkit/node-sdk/blob/b5ebcd8/packages/sdk/src/dataset/index.js#L67)
