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
- [FileSyncResponse](file_v1.md#filesyncresponse)
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
- [syncFile](file_v1.md#syncfile)
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

[file/v1.js:80](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/file/v1.js#L80)

___

### FileCreateResponse

Ƭ **FileCreateResponse**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Defined in

[file/v1.js:84](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/file/v1.js#L84)

___

### FileDeleteResponse

Ƭ **FileDeleteResponse**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Defined in

[file/v1.js:134](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/file/v1.js#L134)

___

### FileDownloadResponse

Ƭ **FileDownloadResponse**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `data` | [`ArrayBuffer`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer ) |
| `headers` | [`Headers`]( https://developer.mozilla.org/docs/Web/API/Headers ) |
| `url` | `string` |

#### Defined in

[file/v1.js:216](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/file/v1.js#L216)

___

### FileFetchResponse

Ƭ **FileFetchResponse**\<\>: [`DatasetFileInstance`](dataset_file_v1.md#datasetfileinstance) & {}

#### Defined in

[file/v1.js:62](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/file/v1.js#L62)

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

[file/v1.js:35](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/file/v1.js#L35)

___

### FileListResponse

Ƭ **FileListResponse**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `items` | [`DatasetFileInstance`](dataset_file_v1.md#datasetfileinstance)[] |

#### Defined in

[file/v1.js:36](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/file/v1.js#L36)

___

### FileListStreamItemType

Ƭ **FileListStreamItemType**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `data` | [`DatasetFileInstance`](dataset_file_v1.md#datasetfileinstance) |
| `type` | ``"item"`` |

#### Defined in

[file/v1.js:41](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/file/v1.js#L41)

___

### FileListStreamType

Ƭ **FileListStreamType**\<\>: [`FileListStreamItemType`](file_v1.md#fileliststreamitemtype)

#### Defined in

[file/v1.js:43](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/file/v1.js#L43)

___

### FileOptions

Ƭ **FileOptions**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `blueprintId?` | `string` |
| `description?` | `string` |
| `meta?` | [`Record`]( https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type )\<`string`, `any`\> |
| `name?` | `string` |
| `visibility?` | ``"private"`` \| ``"protected"`` \| ``"public"`` |

#### Defined in

[file/v1.js:20](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/file/v1.js#L20)

___

### FileSyncResponse

Ƭ **FileSyncResponse**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Defined in

[file/v1.js:234](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/file/v1.js#L234)

___

### FileUpdateRequest

Ƭ **FileUpdateRequest**\<\>: [`FileOptions`](file_v1.md#fileoptions) & {}

#### Defined in

[file/v1.js:106](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/file/v1.js#L106)

___

### FileUpdateResponse

Ƭ **FileUpdateResponse**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Defined in

[file/v1.js:110](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/file/v1.js#L110)

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

[file/v1.js:157](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/file/v1.js#L157)

___

### FileUploadResponse

Ƭ **FileUploadResponse**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `id` | `string` |
| `uploadRequest?` | \{ `headers`: [`Record`]( https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type )\<`string`, `string`\> ; `method`: `string` ; `url`: `string`  } |
| `uploadRequest.headers` | [`Record`]( https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type )\<`string`, `string`\> |
| `uploadRequest.method` | `string` |
| `uploadRequest.url` | `string` |

#### Defined in

[file/v1.js:166](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/file/v1.js#L166)

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

[file/v1.js:90](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/file/v1.js#L90)

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

[file/v1.js:140](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/file/v1.js#L140)

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

[file/v1.js:222](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/file/v1.js#L222)

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

[file/v1.js:68](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/file/v1.js#L68)

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

[file/v1.js:49](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/file/v1.js#L49)

___

### syncFile

▸ **syncFile**(`client`, `fileId`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<[`FileSyncResponse`](file_v1.md#filesyncresponse)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`ChatBotKitClient`](../classes/client.ChatBotKitClient.md) |
| `fileId` | `string` |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<[`FileSyncResponse`](file_v1.md#filesyncresponse)\>

#### Defined in

[file/v1.js:240](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/file/v1.js#L240)

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

[file/v1.js:117](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/file/v1.js#L117)

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

[file/v1.js:173](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/file/v1.js#L173)
