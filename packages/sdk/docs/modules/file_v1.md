[@chatbotkit/sdk](../README.md) / [Modules](../modules.md) / file/v1

# Module: file/v1

## Table of contents

### References

- [FileInstance](file_v1.md#fileinstance)

### Type Aliases

- [ChatBotKitClient](file_v1.md#chatbotkitclient)
- [FileCreateRequest](file_v1.md#filecreaterequest)
- [FileCreateResponse](file_v1.md#filecreateresponse)
- [FileDeleteResponse](file_v1.md#filedeleteresponse)
- [FileDownloadResponse](file_v1.md#filedownloadresponse)
- [FileFetchResponse](file_v1.md#filefetchresponse)
- [FileListRequest](file_v1.md#filelistrequest)
- [FileListResponse](file_v1.md#filelistresponse)
- [FileListStreamItemType](file_v1.md#fileliststreamitemtype)
- [FileListStreamType](file_v1.md#fileliststreamtype)
- [FileOptions](file_v1.md#fileoptions)
- [FileUpdateRequest](file_v1.md#fileupdaterequest)
- [FileUpdateResponse](file_v1.md#fileupdateresponse)
- [FileUploadRequest](file_v1.md#fileuploadrequest)
- [FileUploadResponse](file_v1.md#fileuploadresponse)
- [ResponsePromise](file_v1.md#responsepromise)

### Functions

- [createFile](file_v1.md#createfile)
- [deleteFile](file_v1.md#deletefile)
- [downloadFile](file_v1.md#downloadfile)
- [fetchFile](file_v1.md#fetchfile)
- [listFiles](file_v1.md#listfiles)
- [updateFile](file_v1.md#updatefile)
- [uploadFile](file_v1.md#uploadfile)

## References

### FileInstance

Renames and re-exports [DatasetFileInstance](dataset_file_v1.md#datasetfileinstance)

## Type Aliases

### ChatBotKitClient

Ƭ **ChatBotKitClient**\<\>: [`client`](client.md)

#### Defined in

[file/v1.js:4](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/file/v1.js#L4)

___

### FileCreateRequest

Ƭ **FileCreateRequest**\<\>: [`FileOptions`](file_v1.md#fileoptions) & {}

#### Defined in

[file/v1.js:73](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/file/v1.js#L73)

___

### FileCreateResponse

Ƭ **FileCreateResponse**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Defined in

[file/v1.js:77](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/file/v1.js#L77)

___

### FileDeleteResponse

Ƭ **FileDeleteResponse**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Defined in

[file/v1.js:127](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/file/v1.js#L127)

___

### FileDownloadResponse

Ƭ **FileDownloadResponse**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `data` | [`ArrayBuffer`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer ) |

#### Defined in

[file/v1.js:202](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/file/v1.js#L202)

___

### FileFetchResponse

Ƭ **FileFetchResponse**\<\>: [`DatasetFileInstance`](dataset_file_v1.md#datasetfileinstance) & {}

#### Defined in

[file/v1.js:55](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/file/v1.js#L55)

___

### FileListRequest

Ƭ **FileListRequest**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `cursor?` | `string` |
| `meta?` | [`Record`]( https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type )\<`string`, `string`\> |
| `order?` | ``"desc"`` \| ``"asc"`` |
| `take?` | `number` |

#### Defined in

[file/v1.js:28](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/file/v1.js#L28)

___

### FileListResponse

Ƭ **FileListResponse**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `items` | [`DatasetFileInstance`](dataset_file_v1.md#datasetfileinstance)[] |

#### Defined in

[file/v1.js:29](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/file/v1.js#L29)

___

### FileListStreamItemType

Ƭ **FileListStreamItemType**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `data` | [`DatasetFileInstance`](dataset_file_v1.md#datasetfileinstance) |
| `type` | ``"item"`` |

#### Defined in

[file/v1.js:34](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/file/v1.js#L34)

___

### FileListStreamType

Ƭ **FileListStreamType**\<\>: [`FileListStreamItemType`](file_v1.md#fileliststreamitemtype)

#### Defined in

[file/v1.js:36](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/file/v1.js#L36)

___

### FileOptions

Ƭ **FileOptions**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `description?` | `string` |
| `meta?` | [`Record`]( https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type )\<`string`, `any`\> |
| `name?` | `string` |

#### Defined in

[file/v1.js:18](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/file/v1.js#L18)

___

### FileUpdateRequest

Ƭ **FileUpdateRequest**\<\>: [`FileOptions`](file_v1.md#fileoptions) & {}

#### Defined in

[file/v1.js:99](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/file/v1.js#L99)

___

### FileUpdateResponse

Ƭ **FileUpdateResponse**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Defined in

[file/v1.js:103](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/file/v1.js#L103)

___

### FileUploadRequest

Ƭ **FileUploadRequest**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `data` | `string` \| [`ArrayBuffer`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer ) |
| `name?` | `string` |
| `type` | `string` |

#### Defined in

[file/v1.js:150](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/file/v1.js#L150)

___

### FileUploadResponse

Ƭ **FileUploadResponse**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Defined in

[file/v1.js:154](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/file/v1.js#L154)

___

### ResponsePromise

Ƭ **ResponsePromise**\<`T`, `U`\>: [`client`](client.md)

#### Type parameters

| Name |
| :------ |
| `T` |
| `U` |

#### Defined in

[file/v1.js:10](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/file/v1.js#L10)

## Functions

### createFile

▸ **createFile**(`client`, `request`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<[`FileCreateResponse`](file_v1.md#filecreateresponse)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`ChatBotKitClient`](../classes/client.ChatBotKitClient.md) |
| `request` | [`FileOptions`](file_v1.md#fileoptions) |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<[`FileCreateResponse`](file_v1.md#filecreateresponse)\>

#### Defined in

[file/v1.js:83](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/file/v1.js#L83)

___

### deleteFile

▸ **deleteFile**(`client`, `fileId`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<[`FileDeleteResponse`](file_v1.md#filedeleteresponse)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`ChatBotKitClient`](../classes/client.ChatBotKitClient.md) |
| `fileId` | `string` |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<[`FileDeleteResponse`](file_v1.md#filedeleteresponse)\>

#### Defined in

[file/v1.js:133](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/file/v1.js#L133)

___

### downloadFile

▸ **downloadFile**(`client`, `fileId`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<[`FileDownloadResponse`](file_v1.md#filedownloadresponse)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`ChatBotKitClient`](../classes/client.ChatBotKitClient.md) |
| `fileId` | `string` |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<[`FileDownloadResponse`](file_v1.md#filedownloadresponse)\>

#### Defined in

[file/v1.js:208](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/file/v1.js#L208)

___

### fetchFile

▸ **fetchFile**(`client`, `fileId`): [`ResponsePromise`](../classes/client.ResponsePromise.md)\<[`FileFetchResponse`](file_v1.md#filefetchresponse), `never`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`ChatBotKitClient`](../classes/client.ChatBotKitClient.md) |
| `fileId` | `string` |

#### Returns

[`ResponsePromise`](../classes/client.ResponsePromise.md)\<[`FileFetchResponse`](file_v1.md#filefetchresponse), `never`\>

#### Defined in

[file/v1.js:61](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/file/v1.js#L61)

___

### listFiles

▸ **listFiles**(`client`, `request?`): [`ResponsePromise`](../classes/client.ResponsePromise.md)\<[`FileListResponse`](file_v1.md#filelistresponse), [`FileListStreamItemType`](file_v1.md#fileliststreamitemtype)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`ChatBotKitClient`](../classes/client.ChatBotKitClient.md) |
| `request?` | [`FileListRequest`](file_v1.md#filelistrequest) |

#### Returns

[`ResponsePromise`](../classes/client.ResponsePromise.md)\<[`FileListResponse`](file_v1.md#filelistresponse), [`FileListStreamItemType`](file_v1.md#fileliststreamitemtype)\>

#### Defined in

[file/v1.js:42](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/file/v1.js#L42)

___

### updateFile

▸ **updateFile**(`client`, `fileId`, `request`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<[`FileUpdateResponse`](file_v1.md#fileupdateresponse)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`ChatBotKitClient`](../classes/client.ChatBotKitClient.md) |
| `fileId` | `string` |
| `request` | [`FileOptions`](file_v1.md#fileoptions) |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<[`FileUpdateResponse`](file_v1.md#fileupdateresponse)\>

#### Defined in

[file/v1.js:110](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/file/v1.js#L110)

___

### uploadFile

▸ **uploadFile**(`client`, `fileId`, `request`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<[`FileUploadResponse`](file_v1.md#fileuploadresponse)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`ChatBotKitClient`](../classes/client.ChatBotKitClient.md) |
| `fileId` | `string` |
| `request` | [`FileUploadRequest`](file_v1.md#fileuploadrequest) |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<[`FileUploadResponse`](file_v1.md#fileuploadresponse)\>

#### Defined in

[file/v1.js:161](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/file/v1.js#L161)
