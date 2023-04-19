[@chatbotkit/sdk](../README.md) / [Modules](../modules.md) / [index](../modules/index.md) / DatasetClient

# Class: DatasetClient

[index](../modules/index.md).DatasetClient

## Hierarchy

- `ChatBotKitClient`

  ↳ **`DatasetClient`**

## Table of contents

### Constructors

- [constructor](index.DatasetClient.md#constructor)

### Properties

- [secret](index.DatasetClient.md#secret)
- [url](index.DatasetClient.md#url)

### Methods

- [clientFetch](index.DatasetClient.md#clientfetch)
- [create](index.DatasetClient.md#create)
- [delete](index.DatasetClient.md#delete)
- [fetch](index.DatasetClient.md#fetch)
- [list](index.DatasetClient.md#list)
- [update](index.DatasetClient.md#update)

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

[dataset/index.js:14](https://github.com/chatbotkit/node-sdk/blob/43f3938/packages/sdk/src/dataset/index.js#L14)

## Properties

### secret

• **secret**: `string`

#### Inherited from

ChatBotKitClient.secret

#### Defined in

[client.js:125](https://github.com/chatbotkit/node-sdk/blob/43f3938/packages/sdk/src/client.js#L125)

___

### url

• **url**: `URL`

#### Inherited from

ChatBotKitClient.url

#### Defined in

[client.js:127](https://github.com/chatbotkit/node-sdk/blob/43f3938/packages/sdk/src/client.js#L127)

## Methods

### clientFetch

▸ **clientFetch**<`T`, `D`\>(`path`, `options?`): `ResponsePromise`<`T`, `D`\>

#### Type parameters

| Name |
| :------ |
| `T` |
| `D` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | `string` |
| `options?` | `Object` |
| `options.data?` | `Record`<`string`, `any`\> |

#### Returns

`ResponsePromise`<`T`, `D`\>

#### Inherited from

ChatBotKitClient.clientFetch

#### Defined in

[client.js:140](https://github.com/chatbotkit/node-sdk/blob/43f3938/packages/sdk/src/client.js#L140)

___

### create

▸ **create**(`request`): `Promise`<`DatasetCreateResponse`\>

Creates a new dataset.

#### Parameters

| Name | Type |
| :------ | :------ |
| `request` | `DatasetCreateRequest` |

#### Returns

`Promise`<`DatasetCreateResponse`\>

#### Defined in

[dataset/index.js:39](https://github.com/chatbotkit/node-sdk/blob/43f3938/packages/sdk/src/dataset/index.js#L39)

___

### delete

▸ **delete**(`datasetId`): `Promise`<`DatasetDeleteResponse`\>

Deletes the dataset.

#### Parameters

| Name | Type |
| :------ | :------ |
| `datasetId` | `string` |

#### Returns

`Promise`<`DatasetDeleteResponse`\>

#### Defined in

[dataset/index.js:58](https://github.com/chatbotkit/node-sdk/blob/43f3938/packages/sdk/src/dataset/index.js#L58)

___

### fetch

▸ **fetch**(`datasetId`): `Promise`<`DatasetFetchResponse`\>

Fetches a dataset.

#### Parameters

| Name | Type |
| :------ | :------ |
| `datasetId` | `string` |

#### Returns

`Promise`<`DatasetFetchResponse`\>

#### Defined in

[dataset/index.js:30](https://github.com/chatbotkit/node-sdk/blob/43f3938/packages/sdk/src/dataset/index.js#L30)

___

### list

▸ **list**(): `Promise`<`DatasetListResponse`\>

Retrieves a list of all existing datasets associated with this client.

#### Returns

`Promise`<`DatasetListResponse`\>

#### Defined in

[dataset/index.js:21](https://github.com/chatbotkit/node-sdk/blob/43f3938/packages/sdk/src/dataset/index.js#L21)

___

### update

▸ **update**(`datasetId`, `request`): `Promise`<`DatasetUpdateResponse`\>

Updates a new dataset.

#### Parameters

| Name | Type |
| :------ | :------ |
| `datasetId` | `string` |
| `request` | `DatasetUpdateRequest` |

#### Returns

`Promise`<`DatasetUpdateResponse`\>

#### Defined in

[dataset/index.js:49](https://github.com/chatbotkit/node-sdk/blob/43f3938/packages/sdk/src/dataset/index.js#L49)
