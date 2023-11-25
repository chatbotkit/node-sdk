[@chatbotkit/sdk](../README.md) / [Modules](../modules.md) / [dataset/record](../modules/dataset_record.md) / DatasetRecordClient

# Class: DatasetRecordClient

[dataset/record](../modules/dataset_record.md).DatasetRecordClient

**`Template`**

**`Template`**

## Hierarchy

- [`ChatBotKitClient`](client.ChatBotKitClient.md)

  ↳ **`DatasetRecordClient`**

## Table of contents

### Constructors

- [constructor](dataset_record.DatasetRecordClient.md#constructor)

### Properties

- [endpoints](dataset_record.DatasetRecordClient.md#endpoints)
- [secret](dataset_record.DatasetRecordClient.md#secret)
- [url](dataset_record.DatasetRecordClient.md#url)

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
| `options` | [`ChatBotKitClientOptions`](../modules/client.md#chatbotkitclientoptions) |

#### Returns

[`DatasetRecordClient`](dataset_record.DatasetRecordClient.md)

#### Overrides

[ChatBotKitClient](client.ChatBotKitClient.md).[constructor](client.ChatBotKitClient.md#constructor)

#### Defined in

[dataset/record/index.js:20](https://github.com/chatbotkit/node-sdk/blob/1a40caa/packages/sdk/src/dataset/record/index.js#L20)

## Properties

### endpoints

• **endpoints**: `Record`\<`string`, `string`\>

#### Inherited from

[ChatBotKitClient](client.ChatBotKitClient.md).[endpoints](client.ChatBotKitClient.md#endpoints)

#### Defined in

[client.js:201](https://github.com/chatbotkit/node-sdk/blob/1a40caa/packages/sdk/src/client.js#L201)

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

▸ **create**(`datasetId`, `request`): `Promise`\<[`DatasetRecordCreateResponse`](../modules/dataset_record_v1.md#datasetrecordcreateresponse)\>

Creates a new record.

#### Parameters

| Name | Type |
| :------ | :------ |
| `datasetId` | `string` |
| `request` | [`DatasetRecordOptions`](../modules/dataset_record_v1.md#datasetrecordoptions) |

#### Returns

`Promise`\<[`DatasetRecordCreateResponse`](../modules/dataset_record_v1.md#datasetrecordcreateresponse)\>

#### Defined in

[dataset/record/index.js:53](https://github.com/chatbotkit/node-sdk/blob/1a40caa/packages/sdk/src/dataset/record/index.js#L53)

___

### delete

▸ **delete**(`datasetId`, `recordId`): `Promise`\<[`DatasetRecordDeleteResponse`](../modules/dataset_record_v1.md#datasetrecorddeleteresponse)\>

Deletes the record.

#### Parameters

| Name | Type |
| :------ | :------ |
| `datasetId` | `string` |
| `recordId` | `string` |

#### Returns

`Promise`\<[`DatasetRecordDeleteResponse`](../modules/dataset_record_v1.md#datasetrecorddeleteresponse)\>

#### Defined in

[dataset/record/index.js:76](https://github.com/chatbotkit/node-sdk/blob/1a40caa/packages/sdk/src/dataset/record/index.js#L76)

___

### fetch

▸ **fetch**(`datasetId`, `recordId`): `Promise`\<[`DatasetRecordFetchResponse`](../modules/dataset_record_v1.md#datasetrecordfetchresponse)\>

Fetches a record.

#### Parameters

| Name | Type |
| :------ | :------ |
| `datasetId` | `string` |
| `recordId` | `string` |

#### Returns

`Promise`\<[`DatasetRecordFetchResponse`](../modules/dataset_record_v1.md#datasetrecordfetchresponse)\>

#### Defined in

[dataset/record/index.js:42](https://github.com/chatbotkit/node-sdk/blob/1a40caa/packages/sdk/src/dataset/record/index.js#L42)

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

[dataset/record/index.js:31](https://github.com/chatbotkit/node-sdk/blob/1a40caa/packages/sdk/src/dataset/record/index.js#L31)

___

### update

▸ **update**(`datasetId`, `recordId`, `request`): `Promise`\<[`DatasetRecordUpdateResponse`](../modules/dataset_record_v1.md#datasetrecordupdateresponse)\>

Updates a record.

#### Parameters

| Name | Type |
| :------ | :------ |
| `datasetId` | `string` |
| `recordId` | `string` |
| `request` | [`DatasetRecordOptions`](../modules/dataset_record_v1.md#datasetrecordoptions) |

#### Returns

`Promise`\<[`DatasetRecordUpdateResponse`](../modules/dataset_record_v1.md#datasetrecordupdateresponse)\>

#### Defined in

[dataset/record/index.js:65](https://github.com/chatbotkit/node-sdk/blob/1a40caa/packages/sdk/src/dataset/record/index.js#L65)
