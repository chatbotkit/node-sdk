[@chatbotkit/sdk](../README.md) / [Modules](../modules.md) / dataset/file/v1

# Module: dataset/file/v1

## Table of contents

### Type Aliases

- [ChatBotKitClient](dataset_file_v1.md#chatbotkitclient)
- [DatasetFileAttachRequest](dataset_file_v1.md#datasetfileattachrequest)
- [DatasetFileAttachRequestBody](dataset_file_v1.md#datasetfileattachrequestbody)
- [DatasetFileAttachResponse](dataset_file_v1.md#datasetfileattachresponse)
- [DatasetFileAttachResponseBody](dataset_file_v1.md#datasetfileattachresponsebody)
- [DatasetFileDetachRequest](dataset_file_v1.md#datasetfiledetachrequest)
- [DatasetFileDetachRequestBody](dataset_file_v1.md#datasetfiledetachrequestbody)
- [DatasetFileDetachResponse](dataset_file_v1.md#datasetfiledetachresponse)
- [DatasetFileDetachResponseBody](dataset_file_v1.md#datasetfiledetachresponsebody)
- [DatasetFileListRequest](dataset_file_v1.md#datasetfilelistrequest)
- [DatasetFileListResponse](dataset_file_v1.md#datasetfilelistresponse)
- [DatasetFileListStreamType](dataset_file_v1.md#datasetfileliststreamtype)
- [DatasetFileSyncRequest](dataset_file_v1.md#datasetfilesyncrequest)
- [DatasetFileSyncRequestBody](dataset_file_v1.md#datasetfilesyncrequestbody)
- [DatasetFileSyncResponse](dataset_file_v1.md#datasetfilesyncresponse)
- [DatasetFileSyncResponseBody](dataset_file_v1.md#datasetfilesyncresponsebody)
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

Ƭ **DatasetFileAttachRequest**\<\>: [`DatasetFileAttachRequestBody`](dataset_file_v1.md#datasetfileattachrequestbody)

#### Defined in

[dataset/file/v1.js:40](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/dataset/file/v1.js#L40)

___

### DatasetFileAttachRequestBody

Ƭ **DatasetFileAttachRequestBody**\<\>: `operations`[``"attachDatasetFile"``][``"requestBody"``][``"content"``][``"application/json"``]

#### Defined in

[dataset/file/v1.js:38](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/dataset/file/v1.js#L38)

___

### DatasetFileAttachResponse

Ƭ **DatasetFileAttachResponse**\<\>: [`DatasetFileAttachResponseBody`](dataset_file_v1.md#datasetfileattachresponsebody)

#### Defined in

[dataset/file/v1.js:44](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/dataset/file/v1.js#L44)

___

### DatasetFileAttachResponseBody

Ƭ **DatasetFileAttachResponseBody**\<\>: `operations`[``"attachDatasetFile"``][``"responses"``][``"200"``][``"content"``][``"application/json"``]

#### Defined in

[dataset/file/v1.js:42](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/dataset/file/v1.js#L42)

___

### DatasetFileDetachRequest

Ƭ **DatasetFileDetachRequest**\<\>: [`DatasetFileDetachRequestBody`](dataset_file_v1.md#datasetfiledetachrequestbody)

#### Defined in

[dataset/file/v1.js:69](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/dataset/file/v1.js#L69)

___

### DatasetFileDetachRequestBody

Ƭ **DatasetFileDetachRequestBody**\<\>: `operations`[``"detachDatasetFile"``][``"requestBody"``][``"content"``][``"application/json"``]

#### Defined in

[dataset/file/v1.js:67](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/dataset/file/v1.js#L67)

___

### DatasetFileDetachResponse

Ƭ **DatasetFileDetachResponse**\<\>: [`DatasetFileDetachResponseBody`](dataset_file_v1.md#datasetfiledetachresponsebody)

#### Defined in

[dataset/file/v1.js:73](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/dataset/file/v1.js#L73)

___

### DatasetFileDetachResponseBody

Ƭ **DatasetFileDetachResponseBody**\<\>: `operations`[``"detachDatasetFile"``][``"responses"``][``"200"``][``"content"``][``"application/json"``]

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

Ƭ **DatasetFileSyncRequest**\<\>: [`DatasetFileSyncRequestBody`](dataset_file_v1.md#datasetfilesyncrequestbody)

#### Defined in

[dataset/file/v1.js:98](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/dataset/file/v1.js#L98)

___

### DatasetFileSyncRequestBody

Ƭ **DatasetFileSyncRequestBody**\<\>: `operations`[``"syncDatasetFile"``][``"requestBody"``][``"content"``][``"application/json"``]

#### Defined in

[dataset/file/v1.js:96](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/dataset/file/v1.js#L96)

___

### DatasetFileSyncResponse

Ƭ **DatasetFileSyncResponse**\<\>: [`DatasetFileSyncResponseBody`](dataset_file_v1.md#datasetfilesyncresponsebody)

#### Defined in

[dataset/file/v1.js:102](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/dataset/file/v1.js#L102)

___

### DatasetFileSyncResponseBody

Ƭ **DatasetFileSyncResponseBody**\<\>: `operations`[``"syncDatasetFile"``][``"responses"``][``"200"``][``"content"``][``"application/json"``]

#### Defined in

[dataset/file/v1.js:100](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/dataset/file/v1.js#L100)

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
| `request` | `Object` |

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
| `request` | `Object` |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<{}\>

#### Defined in

[dataset/file/v1.js:81](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/dataset/file/v1.js#L81)

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
| `request` | [`Record`]( https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type )\<`string`, `never`\> |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<{}\>

#### Defined in

[dataset/file/v1.js:110](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/dataset/file/v1.js#L110)
