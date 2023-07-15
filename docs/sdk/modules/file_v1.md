[@chatbotkit/sdk](../README.md) / [Modules](../modules.md) / file/v1

# Module: file/v1

## Table of contents

### Type Aliases

- [ChatBotKitClient](file_v1.md#chatbotkitclient)
- [FileCreateRequest](file_v1.md#filecreaterequest)
- [FileCreateResponse](file_v1.md#filecreateresponse)
- [FileDeleteResponse](file_v1.md#filedeleteresponse)
- [FileDownloadResponse](file_v1.md#filedownloadresponse)
- [FileFetchResponse](file_v1.md#filefetchresponse)
- [FileInstance](file_v1.md#fileinstance)
- [FileListResponse](file_v1.md#filelistresponse)
- [FileListStreamItemType](file_v1.md#fileliststreamitemtype)
- [FileListStreamType](file_v1.md#fileliststreamtype)
- [FileOptions](file_v1.md#fileoptions)
- [FileUpdateRequest](file_v1.md#fileupdaterequest)
- [FileUpdateResponse](file_v1.md#fileupdateresponse)
- [FileUploadRequest](file_v1.md#fileuploadrequest)
- [FileUploadResponse](file_v1.md#fileuploadresponse)

### Functions

- [fileCreate](file_v1.md#filecreate)
- [fileDelete](file_v1.md#filedelete)
- [fileDownload](file_v1.md#filedownload)
- [fileFetch](file_v1.md#filefetch)
- [fileList](file_v1.md#filelist)
- [fileUpdate](file_v1.md#fileupdate)
- [fileUpload](file_v1.md#fileupload)

## Type Aliases

### ChatBotKitClient

Ƭ **ChatBotKitClient**<\>: `ChatBotKitClient`

#### Defined in

[file/v1.js:2](https://github.com/chatbotkit/node-sdk/blob/834f7e8/packages/sdk/src/file/v1.js#L2)

___

### FileCreateRequest

Ƭ **FileCreateRequest**<\>: [`FileOptions`](file_v1.md#fileoptions)

#### Defined in

[file/v1.js:57](https://github.com/chatbotkit/node-sdk/blob/834f7e8/packages/sdk/src/file/v1.js#L57)

___

### FileCreateResponse

Ƭ **FileCreateResponse**<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Defined in

[file/v1.js:61](https://github.com/chatbotkit/node-sdk/blob/834f7e8/packages/sdk/src/file/v1.js#L61)

___

### FileDeleteResponse

Ƭ **FileDeleteResponse**<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Defined in

[file/v1.js:98](https://github.com/chatbotkit/node-sdk/blob/834f7e8/packages/sdk/src/file/v1.js#L98)

___

### FileDownloadResponse

Ƭ **FileDownloadResponse**<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `data` | `ArrayBuffer` |

#### Defined in

[file/v1.js:139](https://github.com/chatbotkit/node-sdk/blob/834f7e8/packages/sdk/src/file/v1.js#L139)

___

### FileFetchResponse

Ƭ **FileFetchResponse**<\>: [`FileInstance`](file_v1.md#fileinstance)

#### Defined in

[file/v1.js:44](https://github.com/chatbotkit/node-sdk/blob/834f7e8/packages/sdk/src/file/v1.js#L44)

___

### FileInstance

Ƭ **FileInstance**<\>: { `createdAt`: `number` ; `id`: `string` ; `updatedAt`: `number`  } & [`FileOptions`](file_v1.md#fileoptions)

#### Defined in

[file/v1.js:16](https://github.com/chatbotkit/node-sdk/blob/834f7e8/packages/sdk/src/file/v1.js#L16)

___

### FileListResponse

Ƭ **FileListResponse**<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `items` | [`FileInstance`](file_v1.md#fileinstance)[] |

#### Defined in

[file/v1.js:20](https://github.com/chatbotkit/node-sdk/blob/834f7e8/packages/sdk/src/file/v1.js#L20)

___

### FileListStreamItemType

Ƭ **FileListStreamItemType**<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `data` | [`FileInstance`](file_v1.md#fileinstance) |
| `type` | ``"item"`` |

#### Defined in

[file/v1.js:25](https://github.com/chatbotkit/node-sdk/blob/834f7e8/packages/sdk/src/file/v1.js#L25)

___

### FileListStreamType

Ƭ **FileListStreamType**<\>: [`FileListStreamItemType`](file_v1.md#fileliststreamitemtype)

#### Defined in

[file/v1.js:27](https://github.com/chatbotkit/node-sdk/blob/834f7e8/packages/sdk/src/file/v1.js#L27)

___

### FileOptions

Ƭ **FileOptions**<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `description?` | `string` |
| `meta?` | `Record`<`string`, `any`\> |
| `name?` | `string` |

#### Defined in

[file/v1.js:10](https://github.com/chatbotkit/node-sdk/blob/834f7e8/packages/sdk/src/file/v1.js#L10)

___

### FileUpdateRequest

Ƭ **FileUpdateRequest**<\>: [`FileOptions`](file_v1.md#fileoptions)

#### Defined in

[file/v1.js:76](https://github.com/chatbotkit/node-sdk/blob/834f7e8/packages/sdk/src/file/v1.js#L76)

___

### FileUpdateResponse

Ƭ **FileUpdateResponse**<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Defined in

[file/v1.js:80](https://github.com/chatbotkit/node-sdk/blob/834f7e8/packages/sdk/src/file/v1.js#L80)

___

### FileUploadRequest

Ƭ **FileUploadRequest**<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `data` | `string` \| `ArrayBuffer` |
| `name?` | `string` |
| `type?` | `string` |

#### Defined in

[file/v1.js:117](https://github.com/chatbotkit/node-sdk/blob/834f7e8/packages/sdk/src/file/v1.js#L117)

___

### FileUploadResponse

Ƭ **FileUploadResponse**<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Defined in

[file/v1.js:121](https://github.com/chatbotkit/node-sdk/blob/834f7e8/packages/sdk/src/file/v1.js#L121)

## Functions

### fileCreate

▸ **fileCreate**(`client`, `request`): `Promise`<[`FileCreateResponse`](file_v1.md#filecreateresponse)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | `ChatBotKitClient` |
| `request` | [`FileOptions`](file_v1.md#fileoptions) |

#### Returns

`Promise`<[`FileCreateResponse`](file_v1.md#filecreateresponse)\>

#### Defined in

[file/v1.js:67](https://github.com/chatbotkit/node-sdk/blob/834f7e8/packages/sdk/src/file/v1.js#L67)

___

### fileDelete

▸ **fileDelete**(`client`, `fileId`): `Promise`<[`FileDeleteResponse`](file_v1.md#filedeleteresponse)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | `ChatBotKitClient` |
| `fileId` | `string` |

#### Returns

`Promise`<[`FileDeleteResponse`](file_v1.md#filedeleteresponse)\>

#### Defined in

[file/v1.js:104](https://github.com/chatbotkit/node-sdk/blob/834f7e8/packages/sdk/src/file/v1.js#L104)

___

### fileDownload

▸ **fileDownload**(`client`, `fileId`): `Promise`<[`FileDownloadResponse`](file_v1.md#filedownloadresponse)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | `ChatBotKitClient` |
| `fileId` | `string` |

#### Returns

`Promise`<[`FileDownloadResponse`](file_v1.md#filedownloadresponse)\>

#### Defined in

[file/v1.js:145](https://github.com/chatbotkit/node-sdk/blob/834f7e8/packages/sdk/src/file/v1.js#L145)

___

### fileFetch

▸ **fileFetch**(`client`, `fileId`): `Promise`<[`FileInstance`](file_v1.md#fileinstance)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | `ChatBotKitClient` |
| `fileId` | `string` |

#### Returns

`Promise`<[`FileInstance`](file_v1.md#fileinstance)\>

#### Defined in

[file/v1.js:50](https://github.com/chatbotkit/node-sdk/blob/834f7e8/packages/sdk/src/file/v1.js#L50)

___

### fileList

▸ **fileList**(`client`, `cursor?`): `ResponsePromise`<[`FileListResponse`](file_v1.md#filelistresponse), [`FileListStreamItemType`](file_v1.md#fileliststreamitemtype)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | `ChatBotKitClient` |
| `cursor?` | `string` |

#### Returns

`ResponsePromise`<[`FileListResponse`](file_v1.md#filelistresponse), [`FileListStreamItemType`](file_v1.md#fileliststreamitemtype)\>

#### Defined in

[file/v1.js:33](https://github.com/chatbotkit/node-sdk/blob/834f7e8/packages/sdk/src/file/v1.js#L33)

___

### fileUpdate

▸ **fileUpdate**(`client`, `fileId`, `request`): `Promise`<[`FileUpdateResponse`](file_v1.md#fileupdateresponse)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | `ChatBotKitClient` |
| `fileId` | `string` |
| `request` | [`FileOptions`](file_v1.md#fileoptions) |

#### Returns

`Promise`<[`FileUpdateResponse`](file_v1.md#fileupdateresponse)\>

#### Defined in

[file/v1.js:87](https://github.com/chatbotkit/node-sdk/blob/834f7e8/packages/sdk/src/file/v1.js#L87)

___

### fileUpload

▸ **fileUpload**(`client`, `fileId`, `request`): `Promise`<[`FileUploadResponse`](file_v1.md#fileuploadresponse)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | `ChatBotKitClient` |
| `fileId` | `string` |
| `request` | [`FileUploadRequest`](file_v1.md#fileuploadrequest) |

#### Returns

`Promise`<[`FileUploadResponse`](file_v1.md#fileuploadresponse)\>

#### Defined in

[file/v1.js:128](https://github.com/chatbotkit/node-sdk/blob/834f7e8/packages/sdk/src/file/v1.js#L128)
