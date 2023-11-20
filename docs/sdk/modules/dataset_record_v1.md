[@chatbotkit/sdk](../README.md) / [Modules](../modules.md) / dataset/record/v1

# Module: dataset/record/v1

## Table of contents

### Type Aliases

- [ChatBotKitClient](dataset_record_v1.md#chatbotkitclient)
- [DatasetRecordCreateRequest](dataset_record_v1.md#datasetrecordcreaterequest)
- [DatasetRecordCreateResponse](dataset_record_v1.md#datasetrecordcreateresponse)
- [DatasetRecordDeleteResponse](dataset_record_v1.md#datasetrecorddeleteresponse)
- [DatasetRecordFetchResponse](dataset_record_v1.md#datasetrecordfetchresponse)
- [DatasetRecordInstance](dataset_record_v1.md#datasetrecordinstance)
- [DatasetRecordListRequest](dataset_record_v1.md#datasetrecordlistrequest)
- [DatasetRecordListResponse](dataset_record_v1.md#datasetrecordlistresponse)
- [DatasetRecordListStreamItem](dataset_record_v1.md#datasetrecordliststreamitem)
- [DatasetRecordListStreamType](dataset_record_v1.md#datasetrecordliststreamtype)
- [DatasetRecordOptions](dataset_record_v1.md#datasetrecordoptions)
- [DatasetRecordUpdateRequest](dataset_record_v1.md#datasetrecordupdaterequest)
- [DatasetRecordUpdateResponse](dataset_record_v1.md#datasetrecordupdateresponse)
- [ResponsePromise](dataset_record_v1.md#responsepromise)

### Functions

- [createDatasetRecord](dataset_record_v1.md#createdatasetrecord)
- [deleteDatasetRecord](dataset_record_v1.md#deletedatasetrecord)
- [fetchDatasetRecord](dataset_record_v1.md#fetchdatasetrecord)
- [listDatasetRecords](dataset_record_v1.md#listdatasetrecords)
- [updateDatasetRecord](dataset_record_v1.md#updatedatasetrecord)

## Type Aliases

### ChatBotKitClient

Ƭ **ChatBotKitClient**\<\>: `ChatBotKitClient`

#### Defined in

[dataset/record/v1.js:2](https://github.com/chatbotkit/node-sdk/blob/ae269f9/packages/sdk/src/dataset/record/v1.js#L2)

___

### DatasetRecordCreateRequest

Ƭ **DatasetRecordCreateRequest**\<\>: [`DatasetRecordOptions`](dataset_record_v1.md#datasetrecordoptions)

#### Defined in

[dataset/record/v1.js:70](https://github.com/chatbotkit/node-sdk/blob/ae269f9/packages/sdk/src/dataset/record/v1.js#L70)

___

### DatasetRecordCreateResponse

Ƭ **DatasetRecordCreateResponse**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Defined in

[dataset/record/v1.js:74](https://github.com/chatbotkit/node-sdk/blob/ae269f9/packages/sdk/src/dataset/record/v1.js#L74)

___

### DatasetRecordDeleteResponse

Ƭ **DatasetRecordDeleteResponse**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Defined in

[dataset/record/v1.js:126](https://github.com/chatbotkit/node-sdk/blob/ae269f9/packages/sdk/src/dataset/record/v1.js#L126)

___

### DatasetRecordFetchResponse

Ƭ **DatasetRecordFetchResponse**\<\>: [`DatasetRecordInstance`](dataset_record_v1.md#datasetrecordinstance)

#### Defined in

[dataset/record/v1.js:53](https://github.com/chatbotkit/node-sdk/blob/ae269f9/packages/sdk/src/dataset/record/v1.js#L53)

___

### DatasetRecordInstance

Ƭ **DatasetRecordInstance**\<\>: \{ `createdAt`: `number` ; `id`: `string` ; `updatedAt`: `number`  } & [`DatasetRecordOptions`](dataset_record_v1.md#datasetrecordoptions)

#### Defined in

[dataset/record/v1.js:21](https://github.com/chatbotkit/node-sdk/blob/ae269f9/packages/sdk/src/dataset/record/v1.js#L21)

___

### DatasetRecordListRequest

Ƭ **DatasetRecordListRequest**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `cursor?` | `string` |
| `meta?` | `Record`\<`string`, `string`\> |
| `take?` | `number` |

#### Defined in

[dataset/record/v1.js:25](https://github.com/chatbotkit/node-sdk/blob/ae269f9/packages/sdk/src/dataset/record/v1.js#L25)

___

### DatasetRecordListResponse

Ƭ **DatasetRecordListResponse**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `items` | [`DatasetRecordInstance`](dataset_record_v1.md#datasetrecordinstance)[] |

#### Defined in

[dataset/record/v1.js:27](https://github.com/chatbotkit/node-sdk/blob/ae269f9/packages/sdk/src/dataset/record/v1.js#L27)

___

### DatasetRecordListStreamItem

Ƭ **DatasetRecordListStreamItem**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `data` | [`DatasetRecordInstance`](dataset_record_v1.md#datasetrecordinstance) |
| `type` | ``"item"`` |

#### Defined in

[dataset/record/v1.js:32](https://github.com/chatbotkit/node-sdk/blob/ae269f9/packages/sdk/src/dataset/record/v1.js#L32)

___

### DatasetRecordListStreamType

Ƭ **DatasetRecordListStreamType**\<\>: [`DatasetRecordListStreamItem`](dataset_record_v1.md#datasetrecordliststreamitem)

#### Defined in

[dataset/record/v1.js:34](https://github.com/chatbotkit/node-sdk/blob/ae269f9/packages/sdk/src/dataset/record/v1.js#L34)

___

### DatasetRecordOptions

Ƭ **DatasetRecordOptions**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `meta?` | `Record`\<`string`, `any`\> |
| `text` | `string` |

#### Defined in

[dataset/record/v1.js:15](https://github.com/chatbotkit/node-sdk/blob/ae269f9/packages/sdk/src/dataset/record/v1.js#L15)

___

### DatasetRecordUpdateRequest

Ƭ **DatasetRecordUpdateRequest**\<\>: [`DatasetRecordOptions`](dataset_record_v1.md#datasetrecordoptions)

#### Defined in

[dataset/record/v1.js:94](https://github.com/chatbotkit/node-sdk/blob/ae269f9/packages/sdk/src/dataset/record/v1.js#L94)

___

### DatasetRecordUpdateResponse

Ƭ **DatasetRecordUpdateResponse**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Defined in

[dataset/record/v1.js:98](https://github.com/chatbotkit/node-sdk/blob/ae269f9/packages/sdk/src/dataset/record/v1.js#L98)

___

### ResponsePromise

Ƭ **ResponsePromise**\<`T`, `U`\>: `ResponsePromise`

#### Type parameters

| Name |
| :------ |
| `T` |
| `U` |

#### Defined in

[dataset/record/v1.js:8](https://github.com/chatbotkit/node-sdk/blob/ae269f9/packages/sdk/src/dataset/record/v1.js#L8)

## Functions

### createDatasetRecord

▸ **createDatasetRecord**(`client`, `datasetId`, `request`): `Promise`\<[`DatasetRecordCreateResponse`](dataset_record_v1.md#datasetrecordcreateresponse)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | `ChatBotKitClient` |
| `datasetId` | `string` |
| `request` | [`DatasetRecordOptions`](dataset_record_v1.md#datasetrecordoptions) |

#### Returns

`Promise`\<[`DatasetRecordCreateResponse`](dataset_record_v1.md#datasetrecordcreateresponse)\>

#### Defined in

[dataset/record/v1.js:81](https://github.com/chatbotkit/node-sdk/blob/ae269f9/packages/sdk/src/dataset/record/v1.js#L81)

___

### deleteDatasetRecord

▸ **deleteDatasetRecord**(`client`, `datasetId`, `recordId`): `Promise`\<[`DatasetRecordDeleteResponse`](dataset_record_v1.md#datasetrecorddeleteresponse)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | `ChatBotKitClient` |
| `datasetId` | `string` |
| `recordId` | `string` |

#### Returns

`Promise`\<[`DatasetRecordDeleteResponse`](dataset_record_v1.md#datasetrecorddeleteresponse)\>

#### Defined in

[dataset/record/v1.js:133](https://github.com/chatbotkit/node-sdk/blob/ae269f9/packages/sdk/src/dataset/record/v1.js#L133)

___

### fetchDatasetRecord

▸ **fetchDatasetRecord**(`client`, `datasetId`, `recordId`): `Promise`\<[`DatasetRecordInstance`](dataset_record_v1.md#datasetrecordinstance)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | `ChatBotKitClient` |
| `datasetId` | `string` |
| `recordId` | `string` |

#### Returns

`Promise`\<[`DatasetRecordInstance`](dataset_record_v1.md#datasetrecordinstance)\>

#### Defined in

[dataset/record/v1.js:60](https://github.com/chatbotkit/node-sdk/blob/ae269f9/packages/sdk/src/dataset/record/v1.js#L60)

___

### listDatasetRecords

▸ **listDatasetRecords**(`client`, `datasetId`, `request?`): `ResponsePromise`\<[`DatasetRecordListResponse`](dataset_record_v1.md#datasetrecordlistresponse), [`DatasetRecordListStreamItem`](dataset_record_v1.md#datasetrecordliststreamitem)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | `ChatBotKitClient` |
| `datasetId` | `string` |
| `request?` | [`DatasetRecordListRequest`](dataset_record_v1.md#datasetrecordlistrequest) |

#### Returns

`ResponsePromise`\<[`DatasetRecordListResponse`](dataset_record_v1.md#datasetrecordlistresponse), [`DatasetRecordListStreamItem`](dataset_record_v1.md#datasetrecordliststreamitem)\>

#### Defined in

[dataset/record/v1.js:41](https://github.com/chatbotkit/node-sdk/blob/ae269f9/packages/sdk/src/dataset/record/v1.js#L41)

___

### updateDatasetRecord

▸ **updateDatasetRecord**(`client`, `datasetId`, `recordId`, `request`): `Promise`\<[`DatasetRecordUpdateResponse`](dataset_record_v1.md#datasetrecordupdateresponse)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | `ChatBotKitClient` |
| `datasetId` | `string` |
| `recordId` | `string` |
| `request` | [`DatasetRecordOptions`](dataset_record_v1.md#datasetrecordoptions) |

#### Returns

`Promise`\<[`DatasetRecordUpdateResponse`](dataset_record_v1.md#datasetrecordupdateresponse)\>

#### Defined in

[dataset/record/v1.js:106](https://github.com/chatbotkit/node-sdk/blob/ae269f9/packages/sdk/src/dataset/record/v1.js#L106)
