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

Ƭ **ChatBotKitClient**\<\>: [`client`](client.md)

#### Defined in

[dataset/record/v1.js:2](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/dataset/record/v1.js#L2)

___

### DatasetRecordCreateRequest

Ƭ **DatasetRecordCreateRequest**\<\>: [`DatasetRecordOptions`](dataset_record_v1.md#datasetrecordoptions) & {}

#### Defined in

[dataset/record/v1.js:76](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/dataset/record/v1.js#L76)

___

### DatasetRecordCreateResponse

Ƭ **DatasetRecordCreateResponse**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Defined in

[dataset/record/v1.js:80](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/dataset/record/v1.js#L80)

___

### DatasetRecordDeleteResponse

Ƭ **DatasetRecordDeleteResponse**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Defined in

[dataset/record/v1.js:137](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/dataset/record/v1.js#L137)

___

### DatasetRecordFetchResponse

Ƭ **DatasetRecordFetchResponse**\<\>: [`DatasetRecordInstance`](dataset_record_v1.md#datasetrecordinstance) & {}

#### Defined in

[dataset/record/v1.js:57](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/dataset/record/v1.js#L57)

___

### DatasetRecordInstance

Ƭ **DatasetRecordInstance**\<\>: [`DatasetRecordOptions`](dataset_record_v1.md#datasetrecordoptions) & \{ `createdAt`: `number` ; `id`: `string` ; `updatedAt`: `number`  }

#### Defined in

[dataset/record/v1.js:24](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/dataset/record/v1.js#L24)

___

### DatasetRecordListRequest

Ƭ **DatasetRecordListRequest**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `cursor?` | `string` |
| `meta?` | [`Record`]( https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type )\<`string`, `string`\> |
| `order?` | ``"desc"`` \| ``"asc"`` |
| `take?` | `number` |

#### Defined in

[dataset/record/v1.js:28](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/dataset/record/v1.js#L28)

___

### DatasetRecordListResponse

Ƭ **DatasetRecordListResponse**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `items` | [`DatasetRecordInstance`](dataset_record_v1.md#datasetrecordinstance)[] |

#### Defined in

[dataset/record/v1.js:30](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/dataset/record/v1.js#L30)

___

### DatasetRecordListStreamItem

Ƭ **DatasetRecordListStreamItem**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `data` | [`DatasetRecordInstance`](dataset_record_v1.md#datasetrecordinstance) |
| `type` | ``"item"`` |

#### Defined in

[dataset/record/v1.js:35](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/dataset/record/v1.js#L35)

___

### DatasetRecordListStreamType

Ƭ **DatasetRecordListStreamType**\<\>: [`DatasetRecordListStreamItem`](dataset_record_v1.md#datasetrecordliststreamitem)

#### Defined in

[dataset/record/v1.js:37](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/dataset/record/v1.js#L37)

___

### DatasetRecordOptions

Ƭ **DatasetRecordOptions**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `description?` | `string` |
| `meta?` | [`Record`]( https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type )\<`string`, `any`\> |
| `name?` | `string` |
| `source?` | `string` |
| `text` | `string` |

#### Defined in

[dataset/record/v1.js:18](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/dataset/record/v1.js#L18)

___

### DatasetRecordUpdateRequest

Ƭ **DatasetRecordUpdateRequest**\<\>: [`DatasetRecordOptions`](dataset_record_v1.md#datasetrecordoptions) & {}

#### Defined in

[dataset/record/v1.js:103](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/dataset/record/v1.js#L103)

___

### DatasetRecordUpdateResponse

Ƭ **DatasetRecordUpdateResponse**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Defined in

[dataset/record/v1.js:107](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/dataset/record/v1.js#L107)

___

### ResponsePromise

Ƭ **ResponsePromise**\<`T`, `U`\>: [`client`](client.md)

#### Type parameters

| Name |
| :------ |
| `T` |
| `U` |

#### Defined in

[dataset/record/v1.js:8](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/dataset/record/v1.js#L8)

## Functions

### createDatasetRecord

▸ **createDatasetRecord**(`client`, `datasetId`, `request`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<[`DatasetRecordCreateResponse`](dataset_record_v1.md#datasetrecordcreateresponse)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`ChatBotKitClient`](../classes/client.ChatBotKitClient.md) |
| `datasetId` | `string` |
| `request` | [`DatasetRecordOptions`](dataset_record_v1.md#datasetrecordoptions) |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<[`DatasetRecordCreateResponse`](dataset_record_v1.md#datasetrecordcreateresponse)\>

#### Defined in

[dataset/record/v1.js:87](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/dataset/record/v1.js#L87)

___

### deleteDatasetRecord

▸ **deleteDatasetRecord**(`client`, `datasetId`, `recordId`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<[`DatasetRecordDeleteResponse`](dataset_record_v1.md#datasetrecorddeleteresponse)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`ChatBotKitClient`](../classes/client.ChatBotKitClient.md) |
| `datasetId` | `string` |
| `recordId` | `string` |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<[`DatasetRecordDeleteResponse`](dataset_record_v1.md#datasetrecorddeleteresponse)\>

#### Defined in

[dataset/record/v1.js:144](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/dataset/record/v1.js#L144)

___

### fetchDatasetRecord

▸ **fetchDatasetRecord**(`client`, `datasetId`, `recordId`): [`ResponsePromise`](../classes/client.ResponsePromise.md)\<[`DatasetRecordFetchResponse`](dataset_record_v1.md#datasetrecordfetchresponse), `never`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`ChatBotKitClient`](../classes/client.ChatBotKitClient.md) |
| `datasetId` | `string` |
| `recordId` | `string` |

#### Returns

[`ResponsePromise`](../classes/client.ResponsePromise.md)\<[`DatasetRecordFetchResponse`](dataset_record_v1.md#datasetrecordfetchresponse), `never`\>

#### Defined in

[dataset/record/v1.js:64](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/dataset/record/v1.js#L64)

___

### listDatasetRecords

▸ **listDatasetRecords**(`client`, `datasetId`, `request?`): [`ResponsePromise`](../classes/client.ResponsePromise.md)\<[`DatasetRecordListResponse`](dataset_record_v1.md#datasetrecordlistresponse), [`DatasetRecordListStreamItem`](dataset_record_v1.md#datasetrecordliststreamitem)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`ChatBotKitClient`](../classes/client.ChatBotKitClient.md) |
| `datasetId` | `string` |
| `request?` | [`DatasetRecordListRequest`](dataset_record_v1.md#datasetrecordlistrequest) |

#### Returns

[`ResponsePromise`](../classes/client.ResponsePromise.md)\<[`DatasetRecordListResponse`](dataset_record_v1.md#datasetrecordlistresponse), [`DatasetRecordListStreamItem`](dataset_record_v1.md#datasetrecordliststreamitem)\>

#### Defined in

[dataset/record/v1.js:44](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/dataset/record/v1.js#L44)

___

### updateDatasetRecord

▸ **updateDatasetRecord**(`client`, `datasetId`, `recordId`, `request`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<[`DatasetRecordUpdateResponse`](dataset_record_v1.md#datasetrecordupdateresponse)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`ChatBotKitClient`](../classes/client.ChatBotKitClient.md) |
| `datasetId` | `string` |
| `recordId` | `string` |
| `request` | [`DatasetRecordOptions`](dataset_record_v1.md#datasetrecordoptions) |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<[`DatasetRecordUpdateResponse`](dataset_record_v1.md#datasetrecordupdateresponse)\>

#### Defined in

[dataset/record/v1.js:115](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/dataset/record/v1.js#L115)
