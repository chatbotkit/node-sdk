[@chatbotkit/sdk](../README.md) / [Modules](../modules.md) / file/v1

# Module: file/v1

## Table of contents

### Type Aliases

- [ChatBotKitClient](file_v1.md#chatbotkitclient)
- [FileCreateRequest](file_v1.md#filecreaterequest)
- [FileCreateRequestBody](file_v1.md#filecreaterequestbody)
- [FileCreateResponse](file_v1.md#filecreateresponse)
- [FileCreateResponseBody](file_v1.md#filecreateresponsebody)
- [FileDeleteRequest](file_v1.md#filedeleterequest)
- [FileDeleteRequestBody](file_v1.md#filedeleterequestbody)
- [FileDeleteResponse](file_v1.md#filedeleteresponse)
- [FileDeleteResponseBody](file_v1.md#filedeleteresponsebody)
- [FileDownloadResponse](file_v1.md#filedownloadresponse)
- [FileFetchResponse](file_v1.md#filefetchresponse)
- [FileListRequest](file_v1.md#filelistrequest)
- [FileListResponse](file_v1.md#filelistresponse)
- [FileListStreamType](file_v1.md#fileliststreamtype)
- [FileSyncRequestBody](file_v1.md#filesyncrequestbody)
- [FileSyncResponse](file_v1.md#filesyncresponse)
- [FileUpdateRequest](file_v1.md#fileupdaterequest)
- [FileUpdateRequestBody](file_v1.md#fileupdaterequestbody)
- [FileUpdateResponse](file_v1.md#fileupdateresponse)
- [FileUpdateResponseBody](file_v1.md#fileupdateresponsebody)
- [FileUploadRequest](file_v1.md#fileuploadrequest)
- [FileUploadRequestBody](file_v1.md#fileuploadrequestbody)
- [FileUploadResponse](file_v1.md#fileuploadresponse)
- [FileUploadResponseBody](file_v1.md#fileuploadresponsebody)
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

## Type Aliases

### ChatBotKitClient

Ƭ **ChatBotKitClient**\<\>: [`client`](client.md)

#### Defined in

[file/v1.js:6](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/file/v1.js#L6)

___

### FileCreateRequest

Ƭ **FileCreateRequest**\<\>: [`FileCreateRequestBody`](file_v1.md#filecreaterequestbody)

#### Defined in

[file/v1.js:59](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/file/v1.js#L59)

___

### FileCreateRequestBody

Ƭ **FileCreateRequestBody**\<\>: `operations`[``"createFile"``][``"requestBody"``][``"content"``][``"application/json"``]

#### Defined in

[file/v1.js:57](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/file/v1.js#L57)

___

### FileCreateResponse

Ƭ **FileCreateResponse**\<\>: [`FileCreateResponseBody`](file_v1.md#filecreateresponsebody)

#### Defined in

[file/v1.js:63](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/file/v1.js#L63)

___

### FileCreateResponseBody

Ƭ **FileCreateResponseBody**\<\>: `operations`[``"createFile"``][``"responses"``][``"200"``][``"content"``][``"application/json"``]

#### Defined in

[file/v1.js:61](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/file/v1.js#L61)

___

### FileDeleteRequest

Ƭ **FileDeleteRequest**\<\>: [`FileDeleteRequestBody`](file_v1.md#filedeleterequestbody)

#### Defined in

[file/v1.js:114](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/file/v1.js#L114)

___

### FileDeleteRequestBody

Ƭ **FileDeleteRequestBody**\<\>: `operations`[``"deleteFile"``][``"requestBody"``][``"content"``][``"application/json"``]

#### Defined in

[file/v1.js:112](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/file/v1.js#L112)

___

### FileDeleteResponse

Ƭ **FileDeleteResponse**\<\>: [`FileDeleteResponseBody`](file_v1.md#filedeleteresponsebody)

#### Defined in

[file/v1.js:118](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/file/v1.js#L118)

___

### FileDeleteResponseBody

Ƭ **FileDeleteResponseBody**\<\>: `operations`[``"deleteFile"``][``"responses"``][``"200"``][``"content"``][``"application/json"``]

#### Defined in

[file/v1.js:116](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/file/v1.js#L116)

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

[file/v1.js:197](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/file/v1.js#L197)

___

### FileFetchResponse

Ƭ **FileFetchResponse**\<\>: `operations`[``"fetchFile"``][``"responses"``][``"200"``][``"content"``][``"application/json"``]

#### Defined in

[file/v1.js:41](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/file/v1.js#L41)

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

[file/v1.js:21](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/file/v1.js#L21)

___

### FileListResponse

Ƭ **FileListResponse**\<\>: `operations`[``"listFiles"``][``"responses"``][``"200"``][``"content"``][``"application/json"``]

#### Defined in

[file/v1.js:23](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/file/v1.js#L23)

___

### FileListStreamType

Ƭ **FileListStreamType**\<\>: `operations`[``"listFiles"``][``"responses"``][``"200"``][``"content"``][``"application/jsonl"``]

#### Defined in

[file/v1.js:25](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/file/v1.js#L25)

___

### FileSyncRequestBody

Ƭ **FileSyncRequestBody**\<\>: `operations`[``"syncFile"``][``"requestBody"``][``"content"``][``"application/json"``]

#### Defined in

[file/v1.js:213](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/file/v1.js#L213)

___

### FileSyncResponse

Ƭ **FileSyncResponse**\<\>: `operations`[``"syncFile"``][``"responses"``][``"200"``][``"content"``][``"application/json"``]

#### Defined in

[file/v1.js:215](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/file/v1.js#L215)

___

### FileUpdateRequest

Ƭ **FileUpdateRequest**\<\>: [`FileUpdateRequestBody`](file_v1.md#fileupdaterequestbody)

#### Defined in

[file/v1.js:86](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/file/v1.js#L86)

___

### FileUpdateRequestBody

Ƭ **FileUpdateRequestBody**\<\>: `operations`[``"updateFile"``][``"requestBody"``][``"content"``][``"application/json"``]

#### Defined in

[file/v1.js:84](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/file/v1.js#L84)

___

### FileUpdateResponse

Ƭ **FileUpdateResponse**\<\>: [`FileUpdateResponseBody`](file_v1.md#fileupdateresponsebody)

#### Defined in

[file/v1.js:90](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/file/v1.js#L90)

___

### FileUpdateResponseBody

Ƭ **FileUpdateResponseBody**\<\>: `operations`[``"updateFile"``][``"responses"``][``"200"``][``"content"``][``"application/json"``]

#### Defined in

[file/v1.js:88](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/file/v1.js#L88)

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

[file/v1.js:143](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/file/v1.js#L143)

___

### FileUploadRequestBody

Ƭ **FileUploadRequestBody**\<\>: `operations`[``"uploadFile"``][``"requestBody"``][``"content"``][``"application/json"``]

#### Defined in

[file/v1.js:137](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/file/v1.js#L137)

___

### FileUploadResponse

Ƭ **FileUploadResponse**\<\>: [`FileUploadResponseBody`](file_v1.md#fileuploadresponsebody)

#### Defined in

[file/v1.js:147](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/file/v1.js#L147)

___

### FileUploadResponseBody

Ƭ **FileUploadResponseBody**\<\>: `operations`[``"uploadFile"``][``"responses"``][``"200"``][``"content"``][``"application/json"``]

#### Defined in

[file/v1.js:145](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/file/v1.js#L145)

___

### ResponsePromise

Ƭ **ResponsePromise**\<`T`, `U`\>: [`client`](client.md)

#### Type parameters

| Name |
| :------ |
| `T` |
| `U` |

#### Defined in

[file/v1.js:12](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/file/v1.js#L12)

## Functions

### createFile

▸ **createFile**(`client`, `request`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<{}\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`ChatBotKitClient`](../classes/client.ChatBotKitClient.md) |
| `request` | `Object` |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<{}\>

#### Defined in

[file/v1.js:69](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/file/v1.js#L69)

___

### deleteFile

▸ **deleteFile**(`client`, `fileId`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<{}\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`ChatBotKitClient`](../classes/client.ChatBotKitClient.md) |
| `fileId` | `string` |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<{}\>

#### Defined in

[file/v1.js:124](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/file/v1.js#L124)

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

[file/v1.js:203](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/file/v1.js#L203)

___

### fetchFile

▸ **fetchFile**(`client`, `fileId`): [`ResponsePromise`](../classes/client.ResponsePromise.md)\<{}, `never`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`ChatBotKitClient`](../classes/client.ChatBotKitClient.md) |
| `fileId` | `string` |

#### Returns

[`ResponsePromise`](../classes/client.ResponsePromise.md)\<{}, `never`\>

#### Defined in

[file/v1.js:47](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/file/v1.js#L47)

___

### listFiles

▸ **listFiles**(`client`, `request?`): [`ResponsePromise`](../classes/client.ResponsePromise.md)\<{}, {}\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`ChatBotKitClient`](../classes/client.ChatBotKitClient.md) |
| `request?` | [`FileListRequest`](file_v1.md#filelistrequest) |

#### Returns

[`ResponsePromise`](../classes/client.ResponsePromise.md)\<{}, {}\>

#### Defined in

[file/v1.js:31](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/file/v1.js#L31)

___

### syncFile

▸ **syncFile**(`client`, `fileId`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<{}\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`ChatBotKitClient`](../classes/client.ChatBotKitClient.md) |
| `fileId` | `string` |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<{}\>

#### Defined in

[file/v1.js:221](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/file/v1.js#L221)

___

### updateFile

▸ **updateFile**(`client`, `fileId`, `request`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<{}\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`ChatBotKitClient`](../classes/client.ChatBotKitClient.md) |
| `fileId` | `string` |
| `request` | `Object` |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<{}\>

#### Defined in

[file/v1.js:97](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/file/v1.js#L97)

___

### uploadFile

▸ **uploadFile**(`client`, `fileId`, `request`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<{}\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`ChatBotKitClient`](../classes/client.ChatBotKitClient.md) |
| `fileId` | `string` |
| `request` | [`FileUploadRequest`](file_v1.md#fileuploadrequest) |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<{}\>

#### Defined in

[file/v1.js:154](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/file/v1.js#L154)
