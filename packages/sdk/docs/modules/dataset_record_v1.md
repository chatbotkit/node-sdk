[@chatbotkit/sdk](../README.md) / [Modules](../modules.md) / dataset/record/v1

# Module: dataset/record/v1

## Table of contents

### Type Aliases

- [ChatBotKitClient](dataset_record_v1.md#chatbotkitclient)
- [DatasetRecordCreateRequest](dataset_record_v1.md#datasetrecordcreaterequest)
- [DatasetRecordCreateRequestBody](dataset_record_v1.md#datasetrecordcreaterequestbody)
- [DatasetRecordCreateResponse](dataset_record_v1.md#datasetrecordcreateresponse)
- [DatasetRecordDeleteRequestBody](dataset_record_v1.md#datasetrecorddeleterequestbody)
- [DatasetRecordDeleteResponse](dataset_record_v1.md#datasetrecorddeleteresponse)
- [DatasetRecordExportRequest](dataset_record_v1.md#datasetrecordexportrequest)
- [DatasetRecordExportResponse](dataset_record_v1.md#datasetrecordexportresponse)
- [DatasetRecordExportStreamType](dataset_record_v1.md#datasetrecordexportstreamtype)
- [DatasetRecordFetchResponse](dataset_record_v1.md#datasetrecordfetchresponse)
- [DatasetRecordListRequest](dataset_record_v1.md#datasetrecordlistrequest)
- [DatasetRecordListResponse](dataset_record_v1.md#datasetrecordlistresponse)
- [DatasetRecordListStreamType](dataset_record_v1.md#datasetrecordliststreamtype)
- [DatasetRecordUpdateRequest](dataset_record_v1.md#datasetrecordupdaterequest)
- [DatasetRecordUpdateRequestBody](dataset_record_v1.md#datasetrecordupdaterequestbody)
- [DatasetRecordUpdateResponse](dataset_record_v1.md#datasetrecordupdateresponse)
- [ResponsePromise](dataset_record_v1.md#responsepromise)

### Functions

- [createDatasetRecord](dataset_record_v1.md#createdatasetrecord)
- [deleteDatasetRecord](dataset_record_v1.md#deletedatasetrecord)
- [exportDatasetRecords](dataset_record_v1.md#exportdatasetrecords)
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

Ƭ **DatasetRecordCreateRequest**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `description?` | `string` |
| `meta?` | [`Record`]( https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type )\<`string`, `any`\> |
| `name?` | `string` |
| `source?` | `string` |
| `text` | `string` |

#### Defined in

[dataset/record/v1.js:61](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/dataset/record/v1.js#L61)

___

### DatasetRecordCreateRequestBody

Ƭ **DatasetRecordCreateRequestBody**\<\>: `operations`[``"createDatasetRecord"``][``"requestBody"``][``"content"``][``"application/json"``]

#### Defined in

[dataset/record/v1.js:63](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/dataset/record/v1.js#L63)

___

### DatasetRecordCreateResponse

Ƭ **DatasetRecordCreateResponse**\<\>: `operations`[``"createDatasetRecord"``][``"responses"``][``"200"``][``"content"``][``"application/json"``]

#### Defined in

[dataset/record/v1.js:65](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/dataset/record/v1.js#L65)

___

### DatasetRecordDeleteRequestBody

Ƭ **DatasetRecordDeleteRequestBody**\<\>: `operations`[``"deleteDatasetRecord"``][``"requestBody"``][``"content"``][``"application/json"``]

#### Defined in

[dataset/record/v1.js:125](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/dataset/record/v1.js#L125)

___

### DatasetRecordDeleteResponse

Ƭ **DatasetRecordDeleteResponse**\<\>: `operations`[``"deleteDatasetRecord"``][``"responses"``][``"200"``][``"content"``][``"application/json"``]

#### Defined in

[dataset/record/v1.js:127](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/dataset/record/v1.js#L127)

___

### DatasetRecordExportRequest

Ƭ **DatasetRecordExportRequest**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `cursor?` | `string` |
| `meta?` | [`Record`]( https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type )\<`string`, `string`\> |
| `order?` | ``"desc"`` \| ``"asc"`` |
| `take?` | `number` |

#### Defined in

[dataset/record/v1.js:152](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/dataset/record/v1.js#L152)

___

### DatasetRecordExportResponse

Ƭ **DatasetRecordExportResponse**\<\>: `operations`[``"exportDatasetRecords"``][``"responses"``][``"200"``][``"content"``][``"application/json"``]

#### Defined in

[dataset/record/v1.js:154](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/dataset/record/v1.js#L154)

___

### DatasetRecordExportStreamType

Ƭ **DatasetRecordExportStreamType**\<\>: `operations`[``"exportDatasetRecords"``][``"responses"``][``"200"``][``"content"``][``"application/jsonl"``]

#### Defined in

[dataset/record/v1.js:156](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/dataset/record/v1.js#L156)

___

### DatasetRecordFetchResponse

Ƭ **DatasetRecordFetchResponse**\<\>: `operations`[``"fetchDatasetRecord"``][``"responses"``][``"200"``][``"content"``][``"application/json"``]

#### Defined in

[dataset/record/v1.js:38](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/dataset/record/v1.js#L38)

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

[dataset/record/v1.js:17](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/dataset/record/v1.js#L17)

___

### DatasetRecordListResponse

Ƭ **DatasetRecordListResponse**\<\>: `operations`[``"listDatasetRecords"``][``"responses"``][``"200"``][``"content"``][``"application/json"``]

#### Defined in

[dataset/record/v1.js:19](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/dataset/record/v1.js#L19)

___

### DatasetRecordListStreamType

Ƭ **DatasetRecordListStreamType**\<\>: `operations`[``"listDatasetRecords"``][``"responses"``][``"200"``][``"content"``][``"application/jsonl"``]

#### Defined in

[dataset/record/v1.js:21](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/dataset/record/v1.js#L21)

___

### DatasetRecordUpdateRequest

Ƭ **DatasetRecordUpdateRequest**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `description?` | `string` |
| `meta?` | [`Record`]( https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type )\<`string`, `any`\> |
| `name?` | `string` |
| `source?` | `string` |
| `text?` | `string` |

#### Defined in

[dataset/record/v1.js:93](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/dataset/record/v1.js#L93)

___

### DatasetRecordUpdateRequestBody

Ƭ **DatasetRecordUpdateRequestBody**\<\>: `operations`[``"updateDatasetRecord"``][``"requestBody"``][``"content"``][``"application/json"``]

#### Defined in

[dataset/record/v1.js:95](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/dataset/record/v1.js#L95)

___

### DatasetRecordUpdateResponse

Ƭ **DatasetRecordUpdateResponse**\<\>: `operations`[``"updateDatasetRecord"``][``"responses"``][``"200"``][``"content"``][``"application/json"``]

#### Defined in

[dataset/record/v1.js:97](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/dataset/record/v1.js#L97)

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

▸ **createDatasetRecord**(`client`, `datasetId`, `request`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<{}\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`ChatBotKitClient`](../classes/client.ChatBotKitClient.md) |
| `datasetId` | `string` |
| `request` | [`DatasetRecordCreateRequest`](dataset_record_v1.md#datasetrecordcreaterequest) |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<{}\>

#### Defined in

[dataset/record/v1.js:72](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/dataset/record/v1.js#L72)

___

### deleteDatasetRecord

▸ **deleteDatasetRecord**(`client`, `datasetId`, `recordId`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<{}\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`ChatBotKitClient`](../classes/client.ChatBotKitClient.md) |
| `datasetId` | `string` |
| `recordId` | `string` |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<{}\>

#### Defined in

[dataset/record/v1.js:134](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/dataset/record/v1.js#L134)

___

### exportDatasetRecords

▸ **exportDatasetRecords**(`client`, `datasetId`, `request?`): [`ResponsePromise`](../classes/client.ResponsePromise.md)\<{}, {}\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`ChatBotKitClient`](../classes/client.ChatBotKitClient.md) |
| `datasetId` | `string` |
| `request?` | [`DatasetRecordExportRequest`](dataset_record_v1.md#datasetrecordexportrequest) |

#### Returns

[`ResponsePromise`](../classes/client.ResponsePromise.md)\<{}, {}\>

#### Defined in

[dataset/record/v1.js:163](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/dataset/record/v1.js#L163)

___

### fetchDatasetRecord

▸ **fetchDatasetRecord**(`client`, `datasetId`, `recordId`): [`ResponsePromise`](../classes/client.ResponsePromise.md)\<{}, `never`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`ChatBotKitClient`](../classes/client.ChatBotKitClient.md) |
| `datasetId` | `string` |
| `recordId` | `string` |

#### Returns

[`ResponsePromise`](../classes/client.ResponsePromise.md)\<{}, `never`\>

#### Defined in

[dataset/record/v1.js:45](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/dataset/record/v1.js#L45)

___

### listDatasetRecords

▸ **listDatasetRecords**(`client`, `datasetId`, `request?`): [`ResponsePromise`](../classes/client.ResponsePromise.md)\<{}, {}\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`ChatBotKitClient`](../classes/client.ChatBotKitClient.md) |
| `datasetId` | `string` |
| `request?` | [`DatasetRecordListRequest`](dataset_record_v1.md#datasetrecordlistrequest) |

#### Returns

[`ResponsePromise`](../classes/client.ResponsePromise.md)\<{}, {}\>

#### Defined in

[dataset/record/v1.js:28](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/dataset/record/v1.js#L28)

___

### updateDatasetRecord

▸ **updateDatasetRecord**(`client`, `datasetId`, `recordId`, `request`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<{}\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`ChatBotKitClient`](../classes/client.ChatBotKitClient.md) |
| `datasetId` | `string` |
| `recordId` | `string` |
| `request` | [`DatasetRecordUpdateRequest`](dataset_record_v1.md#datasetrecordupdaterequest) |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<{}\>

#### Defined in

[dataset/record/v1.js:105](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/dataset/record/v1.js#L105)
