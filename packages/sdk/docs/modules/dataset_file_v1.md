[@chatbotkit/sdk](../README.md) / [Modules](../modules.md) / dataset/file/v1

# Module: dataset/file/v1

## Table of contents

### Type Aliases

- [ChatBotKitClient](dataset_file_v1.md#chatbotkitclient)
- [DatasetFileAttachRequest](dataset_file_v1.md#datasetfileattachrequest)
- [DatasetFileAttachRequestBody](dataset_file_v1.md#datasetfileattachrequestbody)
- [DatasetFileAttachResponse](dataset_file_v1.md#datasetfileattachresponse)
- [DatasetFileDetachRequest](dataset_file_v1.md#datasetfiledetachrequest)
- [DatasetFileDetachRequestBody](dataset_file_v1.md#datasetfiledetachrequestbody)
- [DatasetFileDetachResponse](dataset_file_v1.md#datasetfiledetachresponse)
- [DatasetFileListRequest](dataset_file_v1.md#datasetfilelistrequest)
- [DatasetFileListResponse](dataset_file_v1.md#datasetfilelistresponse)
- [DatasetFileListStreamType](dataset_file_v1.md#datasetfileliststreamtype)
- [DatasetFileSyncRequest](dataset_file_v1.md#datasetfilesyncrequest)
- [DatasetFileSyncRequestBody](dataset_file_v1.md#datasetfilesyncrequestbody)
- [DatasetFileSyncResponse](dataset_file_v1.md#datasetfilesyncresponse)
- [ResponsePromise](dataset_file_v1.md#responsepromise)

### Functions

- [attachDatasetFile](dataset_file_v1.md#attachdatasetfile)
- [detachDatasetFile](dataset_file_v1.md#detachdatasetfile)
- [listDatasetFiles](dataset_file_v1.md#listdatasetfiles)
- [syncDatasetFile](dataset_file_v1.md#syncdatasetfile)

## Type Aliases

### ChatBotKitClient

Ƭ **ChatBotKitClient**\<\>: [`client`](client.md)

#### Defined in

[dataset/file/v1.js:2](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/dataset/file/v1.js#L2)

___

### DatasetFileAttachRequest

Ƭ **DatasetFileAttachRequest**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `type` | ``"source"`` |

#### Defined in

[dataset/file/v1.js:40](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/dataset/file/v1.js#L40)

___

### DatasetFileAttachRequestBody

Ƭ **DatasetFileAttachRequestBody**\<\>: `operations`[``"attachDatasetFile"``][``"requestBody"``][``"content"``][``"application/json"``]

#### Defined in

[dataset/file/v1.js:42](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/dataset/file/v1.js#L42)

___

### DatasetFileAttachResponse

Ƭ **DatasetFileAttachResponse**\<\>: `operations`[``"attachDatasetFile"``][``"responses"``][``"200"``][``"content"``][``"application/json"``]

#### Defined in

[dataset/file/v1.js:44](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/dataset/file/v1.js#L44)

___

### DatasetFileDetachRequest

Ƭ **DatasetFileDetachRequest**\<\>: `Object`

#### Defined in

[dataset/file/v1.js:67](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/dataset/file/v1.js#L67)

___

### DatasetFileDetachRequestBody

Ƭ **DatasetFileDetachRequestBody**\<\>: `operations`[``"detachDatasetFile"``][``"requestBody"``][``"content"``][``"application/json"``]

#### Defined in

[dataset/file/v1.js:69](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/dataset/file/v1.js#L69)

___

### DatasetFileDetachResponse

Ƭ **DatasetFileDetachResponse**\<\>: `operations`[``"detachDatasetFile"``][``"responses"``][``"200"``][``"content"``][``"application/json"``]

#### Defined in

[dataset/file/v1.js:71](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/dataset/file/v1.js#L71)

___

### DatasetFileListRequest

Ƭ **DatasetFileListRequest**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `cursor?` | `string` |
| `meta?` | [`Record`]( https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type )\<`string`, `string`\> |
| `order?` | ``"desc"`` \| ``"asc"`` |
| `take?` | `number` |

#### Defined in

[dataset/file/v1.js:17](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/dataset/file/v1.js#L17)

___

### DatasetFileListResponse

Ƭ **DatasetFileListResponse**\<\>: `operations`[``"listDatasetFiles"``][``"responses"``][``"200"``][``"content"``][``"application/json"``]

#### Defined in

[dataset/file/v1.js:19](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/dataset/file/v1.js#L19)

___

### DatasetFileListStreamType

Ƭ **DatasetFileListStreamType**\<\>: `operations`[``"listDatasetFiles"``][``"responses"``][``"200"``][``"content"``][``"application/jsonl"``]

#### Defined in

[dataset/file/v1.js:21](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/dataset/file/v1.js#L21)

___

### DatasetFileSyncRequest

Ƭ **DatasetFileSyncRequest**\<\>: `Object`

#### Defined in

[dataset/file/v1.js:94](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/dataset/file/v1.js#L94)

___

### DatasetFileSyncRequestBody

Ƭ **DatasetFileSyncRequestBody**\<\>: `operations`[``"syncDatasetFile"``][``"requestBody"``][``"content"``][``"application/json"``]

#### Defined in

[dataset/file/v1.js:96](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/dataset/file/v1.js#L96)

___

### DatasetFileSyncResponse

Ƭ **DatasetFileSyncResponse**\<\>: `operations`[``"syncDatasetFile"``][``"responses"``][``"200"``][``"content"``][``"application/json"``]

#### Defined in

[dataset/file/v1.js:98](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/dataset/file/v1.js#L98)

___

### ResponsePromise

Ƭ **ResponsePromise**\<`T`, `U`\>: [`client`](client.md)

#### Type parameters

| Name |
| :------ |
| `T` |
| `U` |

#### Defined in

[dataset/file/v1.js:8](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/dataset/file/v1.js#L8)

## Functions

### attachDatasetFile

▸ **attachDatasetFile**(`client`, `datasetId`, `fileId`, `request`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<{}\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`ChatBotKitClient`](../classes/client.ChatBotKitClient.md) |
| `datasetId` | `string` |
| `fileId` | `string` |
| `request` | [`DatasetFileAttachRequest`](dataset_file_v1.md#datasetfileattachrequest) |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<{}\>

#### Defined in

[dataset/file/v1.js:52](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/dataset/file/v1.js#L52)

___

### detachDatasetFile

▸ **detachDatasetFile**(`client`, `datasetId`, `fileId`, `request`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<{}\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`ChatBotKitClient`](../classes/client.ChatBotKitClient.md) |
| `datasetId` | `string` |
| `fileId` | `string` |
| `request` | [`DatasetFileDetachRequest`](dataset_file_v1.md#datasetfiledetachrequest) |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<{}\>

#### Defined in

[dataset/file/v1.js:79](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/dataset/file/v1.js#L79)

___

### listDatasetFiles

▸ **listDatasetFiles**(`client`, `datasetId`, `request?`): [`ResponsePromise`](../classes/client.ResponsePromise.md)\<{}, {}\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`ChatBotKitClient`](../classes/client.ChatBotKitClient.md) |
| `datasetId` | `string` |
| `request?` | [`DatasetFileListRequest`](dataset_file_v1.md#datasetfilelistrequest) |

#### Returns

[`ResponsePromise`](../classes/client.ResponsePromise.md)\<{}, {}\>

#### Defined in

[dataset/file/v1.js:28](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/dataset/file/v1.js#L28)

___

### syncDatasetFile

▸ **syncDatasetFile**(`client`, `datasetId`, `fileId`, `request`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<{}\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`ChatBotKitClient`](../classes/client.ChatBotKitClient.md) |
| `datasetId` | `string` |
| `fileId` | `string` |
| `request` | [`DatasetFileSyncRequest`](dataset_file_v1.md#datasetfilesyncrequest) |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<{}\>

#### Defined in

[dataset/file/v1.js:106](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/dataset/file/v1.js#L106)
