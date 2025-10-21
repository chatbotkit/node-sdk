[@chatbotkit/sdk](../README.md) / [Modules](../modules.md) / dataset/record/v1

# Module: dataset/record/v1

## Table of contents

### Type Aliases

- [ChatBotKitClient](dataset_record_v1.md#chatbotkitclient)
- [DatasetRecordCreateRequest](dataset_record_v1.md#datasetrecordcreaterequest)
- [DatasetRecordCreateRequestBody](dataset_record_v1.md#datasetrecordcreaterequestbody)
- [DatasetRecordCreateResponse](dataset_record_v1.md#datasetrecordcreateresponse)
- [DatasetRecordCreateResponseBody](dataset_record_v1.md#datasetrecordcreateresponsebody)
- [DatasetRecordDeleteRequest](dataset_record_v1.md#datasetrecorddeleterequest)
- [DatasetRecordDeleteRequestBody](dataset_record_v1.md#datasetrecorddeleterequestbody)
- [DatasetRecordDeleteResponse](dataset_record_v1.md#datasetrecorddeleteresponse)
- [DatasetRecordDeleteResponseBody](dataset_record_v1.md#datasetrecorddeleteresponsebody)
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
- [DatasetRecordUpdateResponseBody](dataset_record_v1.md#datasetrecordupdateresponsebody)
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

Ƭ **DatasetRecordCreateRequest**\<\>: [`DatasetRecordCreateRequestBody`](dataset_record_v1.md#datasetrecordcreaterequestbody)

#### Defined in

[dataset/record/v1.js:57](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/dataset/record/v1.js#L57)

___

### DatasetRecordCreateRequestBody

Ƭ **DatasetRecordCreateRequestBody**\<\>: `operations`[``"createDatasetRecord"``][``"requestBody"``][``"content"``][``"application/json"``]

#### Defined in

[dataset/record/v1.js:55](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/dataset/record/v1.js#L55)

___

### DatasetRecordCreateResponse

Ƭ **DatasetRecordCreateResponse**\<\>: [`DatasetRecordCreateResponseBody`](dataset_record_v1.md#datasetrecordcreateresponsebody)

#### Defined in

[dataset/record/v1.js:61](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/dataset/record/v1.js#L61)

___

### DatasetRecordCreateResponseBody

Ƭ **DatasetRecordCreateResponseBody**\<\>: `operations`[``"createDatasetRecord"``][``"responses"``][``"200"``][``"content"``][``"application/json"``]

#### Defined in

[dataset/record/v1.js:59](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/dataset/record/v1.js#L59)

___

### DatasetRecordDeleteRequest

Ƭ **DatasetRecordDeleteRequest**\<\>: [`DatasetRecordDeleteRequestBody`](dataset_record_v1.md#datasetrecorddeleterequestbody)

#### Defined in

[dataset/record/v1.js:119](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/dataset/record/v1.js#L119)

___

### DatasetRecordDeleteRequestBody

Ƭ **DatasetRecordDeleteRequestBody**\<\>: `operations`[``"deleteDatasetRecord"``][``"requestBody"``][``"content"``][``"application/json"``]

#### Defined in

[dataset/record/v1.js:117](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/dataset/record/v1.js#L117)

___

### DatasetRecordDeleteResponse

Ƭ **DatasetRecordDeleteResponse**\<\>: [`DatasetRecordDeleteResponseBody`](dataset_record_v1.md#datasetrecorddeleteresponsebody)

#### Defined in

[dataset/record/v1.js:123](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/dataset/record/v1.js#L123)

___

### DatasetRecordDeleteResponseBody

Ƭ **DatasetRecordDeleteResponseBody**\<\>: `operations`[``"deleteDatasetRecord"``][``"responses"``][``"200"``][``"content"``][``"application/json"``]

#### Defined in

[dataset/record/v1.js:121](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/dataset/record/v1.js#L121)

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

[dataset/record/v1.js:148](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/dataset/record/v1.js#L148)

___

### DatasetRecordExportResponse

Ƭ **DatasetRecordExportResponse**\<\>: `operations`[``"exportDatasetRecords"``][``"responses"``][``"200"``][``"content"``][``"application/json"``]

#### Defined in

[dataset/record/v1.js:150](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/dataset/record/v1.js#L150)

___

### DatasetRecordExportStreamType

Ƭ **DatasetRecordExportStreamType**\<\>: `operations`[``"exportDatasetRecords"``][``"responses"``][``"200"``][``"content"``][``"application/jsonl"``]

#### Defined in

[dataset/record/v1.js:152](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/dataset/record/v1.js#L152)

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

Ƭ **DatasetRecordUpdateRequest**\<\>: [`DatasetRecordUpdateRequestBody`](dataset_record_v1.md#datasetrecordupdaterequestbody)

#### Defined in

[dataset/record/v1.js:85](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/dataset/record/v1.js#L85)

___

### DatasetRecordUpdateRequestBody

Ƭ **DatasetRecordUpdateRequestBody**\<\>: `operations`[``"updateDatasetRecord"``][``"requestBody"``][``"content"``][``"application/json"``]

#### Defined in

[dataset/record/v1.js:83](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/dataset/record/v1.js#L83)

___

### DatasetRecordUpdateResponse

Ƭ **DatasetRecordUpdateResponse**\<\>: [`DatasetRecordUpdateResponseBody`](dataset_record_v1.md#datasetrecordupdateresponsebody)

#### Defined in

[dataset/record/v1.js:89](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/dataset/record/v1.js#L89)

___

### DatasetRecordUpdateResponseBody

Ƭ **DatasetRecordUpdateResponseBody**\<\>: `operations`[``"updateDatasetRecord"``][``"responses"``][``"200"``][``"content"``][``"application/json"``]

#### Defined in

[dataset/record/v1.js:87](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/dataset/record/v1.js#L87)

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
| `request` | `Object` |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<{}\>

#### Defined in

[dataset/record/v1.js:68](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/dataset/record/v1.js#L68)

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

[dataset/record/v1.js:130](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/dataset/record/v1.js#L130)

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

[dataset/record/v1.js:159](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/dataset/record/v1.js#L159)

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
| `request` | `Object` |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<{}\>

#### Defined in

[dataset/record/v1.js:97](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/dataset/record/v1.js#L97)
