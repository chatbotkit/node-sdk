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

[dataset/record/index.js:14](https://github.com/chatbotkit/node-sdk/blob/e17e7f6/packages/sdk/src/dataset/record/index.js#L14)

## Properties

### secret

• **secret**: `string`

#### Inherited from

ChatBotKitClient.secret

#### Defined in

[client.js:130](https://github.com/chatbotkit/node-sdk/blob/e17e7f6/packages/sdk/src/client.js#L130)

___

### url

• **url**: `URL`

#### Inherited from

ChatBotKitClient.url

#### Defined in

[client.js:132](https://github.com/chatbotkit/node-sdk/blob/e17e7f6/packages/sdk/src/client.js#L132)

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

[client.js:149](https://github.com/chatbotkit/node-sdk/blob/e17e7f6/packages/sdk/src/client.js#L149)

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

[dataset/record/index.js:43](https://github.com/chatbotkit/node-sdk/blob/e17e7f6/packages/sdk/src/dataset/record/index.js#L43)

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

[dataset/record/index.js:64](https://github.com/chatbotkit/node-sdk/blob/e17e7f6/packages/sdk/src/dataset/record/index.js#L64)

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

[dataset/record/index.js:33](https://github.com/chatbotkit/node-sdk/blob/e17e7f6/packages/sdk/src/dataset/record/index.js#L33)

___

### list

▸ **list**(`datasetId`): `ResponsePromise`<[`RecordInstance`](../modules/dataset_record_v1.md#recordinstance), [`RecordListStreamItem`](../modules/dataset_record_v1.md#recordliststreamitem)\>

Retrieves a list of all existing records associated with this client.

#### Parameters

| Name | Type |
| :------ | :------ |
| `datasetId` | `string` |

#### Returns

`ResponsePromise`<[`RecordInstance`](../modules/dataset_record_v1.md#recordinstance), [`RecordListStreamItem`](../modules/dataset_record_v1.md#recordliststreamitem)\>

#### Defined in

[dataset/record/index.js:23](https://github.com/chatbotkit/node-sdk/blob/e17e7f6/packages/sdk/src/dataset/record/index.js#L23)

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

[dataset/record/index.js:54](https://github.com/chatbotkit/node-sdk/blob/e17e7f6/packages/sdk/src/dataset/record/index.js#L54)
