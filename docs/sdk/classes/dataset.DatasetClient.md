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

- [secret](dataset.DatasetClient.md#secret)
- [url](dataset.DatasetClient.md#url)

### Methods

- [clientFetch](dataset.DatasetClient.md#clientfetch)
- [create](dataset.DatasetClient.md#create)
- [delete](dataset.DatasetClient.md#delete)
- [fetch](dataset.DatasetClient.md#fetch)
- [list](dataset.DatasetClient.md#list)
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

[dataset/index.js:14](https://github.com/chatbotkit/node-sdk/blob/ef5e830/packages/sdk/src/dataset/index.js#L14)

## Properties

### secret

• **secret**: `string`

#### Inherited from

ChatBotKitClient.secret

#### Defined in

[client.js:130](https://github.com/chatbotkit/node-sdk/blob/ef5e830/packages/sdk/src/client.js#L130)

___

### url

• **url**: `URL`

#### Inherited from

ChatBotKitClient.url

#### Defined in

[client.js:132](https://github.com/chatbotkit/node-sdk/blob/ef5e830/packages/sdk/src/client.js#L132)

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

#### Returns

`ResponsePromise`<`T`, `U`\>

#### Inherited from

ChatBotKitClient.clientFetch

#### Defined in

[client.js:149](https://github.com/chatbotkit/node-sdk/blob/ef5e830/packages/sdk/src/client.js#L149)

___

### create

▸ **create**(`request`): `Promise`<[`DatasetCreateResponse`](../modules/dataset_v1.md#datasetcreateresponse)\>

Creates a new dataset.

#### Parameters

| Name | Type |
| :------ | :------ |
| `request` | [`DatasetOptions`](../modules/dataset_v1.md#datasetoptions) |

#### Returns

`Promise`<[`DatasetCreateResponse`](../modules/dataset_v1.md#datasetcreateresponse)\>

#### Defined in

[dataset/index.js:39](https://github.com/chatbotkit/node-sdk/blob/ef5e830/packages/sdk/src/dataset/index.js#L39)

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

[dataset/index.js:58](https://github.com/chatbotkit/node-sdk/blob/ef5e830/packages/sdk/src/dataset/index.js#L58)

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

[dataset/index.js:30](https://github.com/chatbotkit/node-sdk/blob/ef5e830/packages/sdk/src/dataset/index.js#L30)

___

### list

▸ **list**(): `Promise`<[`DatasetInstance`](../modules/dataset_v1.md#datasetinstance)\>

Retrieves a list of all existing datasets associated with this client.

#### Returns

`Promise`<[`DatasetInstance`](../modules/dataset_v1.md#datasetinstance)\>

#### Defined in

[dataset/index.js:21](https://github.com/chatbotkit/node-sdk/blob/ef5e830/packages/sdk/src/dataset/index.js#L21)

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

[dataset/index.js:49](https://github.com/chatbotkit/node-sdk/blob/ef5e830/packages/sdk/src/dataset/index.js#L49)
