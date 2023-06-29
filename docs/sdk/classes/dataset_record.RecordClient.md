[@chatbotkit/sdk](../README.md) / [Modules](../modules.md) / [dataset/record](../modules/dataset_record.md) / RecordClient

# Class: RecordClient

[dataset/record](../modules/dataset_record.md).RecordClient

## Hierarchy

- `ChatBotKitClient`

  ↳ **`RecordClient`**

## Table of contents

### Constructors

- [constructor](dataset_record.RecordClient.md#constructor)

### Properties

- [secret](dataset_record.RecordClient.md#secret)
- [url](dataset_record.RecordClient.md#url)

### Methods

- [clientFetch](dataset_record.RecordClient.md#clientfetch)
- [create](dataset_record.RecordClient.md#create)
- [delete](dataset_record.RecordClient.md#delete)
- [fetch](dataset_record.RecordClient.md#fetch)
- [list](dataset_record.RecordClient.md#list)
- [update](dataset_record.RecordClient.md#update)

## Constructors

### constructor

• **new RecordClient**(`options`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `ChatBotKitClientOptions` |

#### Overrides

ChatBotKitClient.constructor

#### Defined in

[dataset/record/index.js:14](https://github.com/chatbotkit/node-sdk/blob/976a254/packages/sdk/src/dataset/record/index.js#L14)

## Properties

### secret

• **secret**: `string`

#### Inherited from

ChatBotKitClient.secret

#### Defined in

[client.js:155](https://github.com/chatbotkit/node-sdk/blob/976a254/packages/sdk/src/client.js#L155)

___

### url

• **url**: `URL`

#### Inherited from

ChatBotKitClient.url

#### Defined in

[client.js:157](https://github.com/chatbotkit/node-sdk/blob/976a254/packages/sdk/src/client.js#L157)

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

[client.js:174](https://github.com/chatbotkit/node-sdk/blob/976a254/packages/sdk/src/client.js#L174)

___

### create

▸ **create**(`datasetId`, `request`): `Promise`<[`RecordCreateResponse`](../modules/dataset_record_v1.md#recordcreateresponse)\>

Creates a new record.

#### Parameters

| Name | Type |
| :------ | :------ |
| `datasetId` | `string` |
| `request` | [`RecordOptions`](../modules/dataset_record_v1.md#recordoptions) |

#### Returns

`Promise`<[`RecordCreateResponse`](../modules/dataset_record_v1.md#recordcreateresponse)\>

#### Defined in

[dataset/record/index.js:46](https://github.com/chatbotkit/node-sdk/blob/976a254/packages/sdk/src/dataset/record/index.js#L46)

___

### delete

▸ **delete**(`datasetId`, `recordId`): `Promise`<[`RecordDeleteResponse`](../modules/dataset_record_v1.md#recorddeleteresponse)\>

Deletes the record.

#### Parameters

| Name | Type |
| :------ | :------ |
| `datasetId` | `string` |
| `recordId` | `string` |

#### Returns

`Promise`<[`RecordDeleteResponse`](../modules/dataset_record_v1.md#recorddeleteresponse)\>

#### Defined in

[dataset/record/index.js:69](https://github.com/chatbotkit/node-sdk/blob/976a254/packages/sdk/src/dataset/record/index.js#L69)

___

### fetch

▸ **fetch**(`datasetId`, `recordId`): `Promise`<[`RecordInstance`](../modules/dataset_record_v1.md#recordinstance)\>

Fetches a record.

#### Parameters

| Name | Type |
| :------ | :------ |
| `datasetId` | `string` |
| `recordId` | `string` |

#### Returns

`Promise`<[`RecordInstance`](../modules/dataset_record_v1.md#recordinstance)\>

#### Defined in

[dataset/record/index.js:35](https://github.com/chatbotkit/node-sdk/blob/976a254/packages/sdk/src/dataset/record/index.js#L35)

___

### list

▸ **list**(`datasetId`): `ResponsePromise`<[`RecordListResponse`](../modules/dataset_record_v1.md#recordlistresponse), [`RecordListStreamItem`](../modules/dataset_record_v1.md#recordliststreamitem)\>

Retrieves a list of all existing records associated with this client.

#### Parameters

| Name | Type |
| :------ | :------ |
| `datasetId` | `string` |

#### Returns

`ResponsePromise`<[`RecordListResponse`](../modules/dataset_record_v1.md#recordlistresponse), [`RecordListStreamItem`](../modules/dataset_record_v1.md#recordliststreamitem)\>

#### Defined in

[dataset/record/index.js:24](https://github.com/chatbotkit/node-sdk/blob/976a254/packages/sdk/src/dataset/record/index.js#L24)

___

### update

▸ **update**(`datasetId`, `recordId`, `request`): `Promise`<[`RecordUpdateResponse`](../modules/dataset_record_v1.md#recordupdateresponse)\>

Updates a new record.

#### Parameters

| Name | Type |
| :------ | :------ |
| `datasetId` | `string` |
| `recordId` | `string` |
| `request` | [`RecordOptions`](../modules/dataset_record_v1.md#recordoptions) |

#### Returns

`Promise`<[`RecordUpdateResponse`](../modules/dataset_record_v1.md#recordupdateresponse)\>

#### Defined in

[dataset/record/index.js:58](https://github.com/chatbotkit/node-sdk/blob/976a254/packages/sdk/src/dataset/record/index.js#L58)
