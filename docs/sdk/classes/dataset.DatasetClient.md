[@chatbotkit/sdk](../README.md) / [Modules](../modules.md) / [dataset](../modules/dataset.md) / DatasetClient

# Class: DatasetClient

[dataset](../modules/dataset.md).DatasetClient

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

• **new DatasetClient**(`options`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `ChatBotKitClientOptions` |

#### Overrides

ChatBotKitClient.constructor

#### Defined in

[dataset/index.js:17](https://github.com/chatbotkit/node-sdk/blob/9f47e54/packages/sdk/src/dataset/index.js#L17)

## Properties

### file

• **file**: [`FileClient`](dataset_file.FileClient.md)

#### Defined in

[dataset/index.js:20](https://github.com/chatbotkit/node-sdk/blob/9f47e54/packages/sdk/src/dataset/index.js#L20)

___

### record

• **record**: [`RecordClient`](dataset_record.RecordClient.md)

#### Defined in

[dataset/index.js:21](https://github.com/chatbotkit/node-sdk/blob/9f47e54/packages/sdk/src/dataset/index.js#L21)

___

### secret

• **secret**: `string`

#### Inherited from

ChatBotKitClient.secret

#### Defined in

[client.js:155](https://github.com/chatbotkit/node-sdk/blob/9f47e54/packages/sdk/src/client.js#L155)

___

### url

• **url**: `URL`

#### Inherited from

ChatBotKitClient.url

#### Defined in

[client.js:157](https://github.com/chatbotkit/node-sdk/blob/9f47e54/packages/sdk/src/client.js#L157)

## Methods

### clientFetch

▸ **clientFetch**<`T`, `U`\>(`path`, `options?`): `ResponsePromise`<`T`, `U`\>

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
| `options.data?` | `Record`<`string`, `any`\> |
| `options.file?` | `Object` |
| `options.file.data` | `string` \| `ArrayBuffer` |
| `options.file.name?` | `string` |
| `options.file.type?` | `string` |

#### Returns

`ResponsePromise`<`T`, `U`\>

#### Inherited from

ChatBotKitClient.clientFetch

#### Defined in

[client.js:174](https://github.com/chatbotkit/node-sdk/blob/9f47e54/packages/sdk/src/client.js#L174)

___

### create

▸ **create**(`request`): `Promise`<[`DatasetCreateResponse`](../modules/dataset_v1.md#datasetcreateresponse)\>

Creates a new dataset.

#### Parameters

| Name | Type |
| :------ | :------ |
| `request` | [`DatasetCreateRequest`](../modules/dataset_v1.md#datasetcreaterequest) |

#### Returns

`Promise`<[`DatasetCreateResponse`](../modules/dataset_v1.md#datasetcreateresponse)\>

#### Defined in

[dataset/index.js:48](https://github.com/chatbotkit/node-sdk/blob/9f47e54/packages/sdk/src/dataset/index.js#L48)

___

### delete

▸ **delete**(`datasetId`): `Promise`<[`DatasetDeleteResponse`](../modules/dataset_v1.md#datasetdeleteresponse)\>

Deletes the dataset.

#### Parameters

| Name | Type |
| :------ | :------ |
| `datasetId` | `string` |

#### Returns

`Promise`<[`DatasetDeleteResponse`](../modules/dataset_v1.md#datasetdeleteresponse)\>

#### Defined in

[dataset/index.js:69](https://github.com/chatbotkit/node-sdk/blob/9f47e54/packages/sdk/src/dataset/index.js#L69)

___

### fetch

▸ **fetch**(`datasetId`): `Promise`<[`DatasetInstance`](../modules/dataset_v1.md#datasetinstance)\>

Fetches a dataset.

#### Parameters

| Name | Type |
| :------ | :------ |
| `datasetId` | `string` |

#### Returns

`Promise`<[`DatasetInstance`](../modules/dataset_v1.md#datasetinstance)\>

#### Defined in

[dataset/index.js:38](https://github.com/chatbotkit/node-sdk/blob/9f47e54/packages/sdk/src/dataset/index.js#L38)

___

### list

▸ **list**(): `ResponsePromise`<[`DatasetInstance`](../modules/dataset_v1.md#datasetinstance), [`DatasetListStreamItemType`](../modules/dataset_v1.md#datasetliststreamitemtype)\>

Retrieves a list of all existing datasets associated with this client.

#### Returns

`ResponsePromise`<[`DatasetInstance`](../modules/dataset_v1.md#datasetinstance), [`DatasetListStreamItemType`](../modules/dataset_v1.md#datasetliststreamitemtype)\>

#### Defined in

[dataset/index.js:28](https://github.com/chatbotkit/node-sdk/blob/9f47e54/packages/sdk/src/dataset/index.js#L28)

___

### search

▸ **search**(`datasetId`, `search`): `Promise`<[`DatasetSearchResponse`](../modules/dataset_v1.md#datasetsearchresponse)\>

Searches the dataset.

#### Parameters

| Name | Type |
| :------ | :------ |
| `datasetId` | `string` |
| `search` | `string` |

#### Returns

`Promise`<[`DatasetSearchResponse`](../modules/dataset_v1.md#datasetsearchresponse)\>

#### Defined in

[dataset/index.js:80](https://github.com/chatbotkit/node-sdk/blob/9f47e54/packages/sdk/src/dataset/index.js#L80)

___

### update

▸ **update**(`datasetId`, `request`): `Promise`<[`DatasetUpdateResponse`](../modules/dataset_v1.md#datasetupdateresponse)\>

Updates a new dataset.

#### Parameters

| Name | Type |
| :------ | :------ |
| `datasetId` | `string` |
| `request` | [`DatasetOptions`](../modules/dataset_v1.md#datasetoptions) |

#### Returns

`Promise`<[`DatasetUpdateResponse`](../modules/dataset_v1.md#datasetupdateresponse)\>

#### Defined in

[dataset/index.js:59](https://github.com/chatbotkit/node-sdk/blob/9f47e54/packages/sdk/src/dataset/index.js#L59)
