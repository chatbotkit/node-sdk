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

## Type Aliases

### ChatBotKitClient

Ƭ **ChatBotKitClient**\<\>: `ChatBotKitClient`

#### Defined in

[file/v1.js:2](https://github.com/chatbotkit/node-sdk/blob/b5ebcd8/packages/sdk/src/file/v1.js#L2)

___

### FileCreateRequest

Ƭ **FileCreateRequest**\<\>: [`FileOptions`](file_v1.md#fileoptions)

#### Defined in

[file/v1.js:68](https://github.com/chatbotkit/node-sdk/blob/b5ebcd8/packages/sdk/src/file/v1.js#L68)

___

### FileCreateResponse

Ƭ **FileCreateResponse**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Defined in

[file/v1.js:72](https://github.com/chatbotkit/node-sdk/blob/b5ebcd8/packages/sdk/src/file/v1.js#L72)

___

### FileDeleteResponse

Ƭ **FileDeleteResponse**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Defined in

[file/v1.js:117](https://github.com/chatbotkit/node-sdk/blob/b5ebcd8/packages/sdk/src/file/v1.js#L117)

___

### FileDownloadResponse

Ƭ **FileDownloadResponse**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `data` | `ArrayBuffer` |

#### Defined in

[file/v1.js:165](https://github.com/chatbotkit/node-sdk/blob/b5ebcd8/packages/sdk/src/file/v1.js#L165)

___

### FileFetchResponse

Ƭ **FileFetchResponse**\<\>: [`FileInstance`](file_v1.md#fileinstance)

#### Defined in

[file/v1.js:52](https://github.com/chatbotkit/node-sdk/blob/b5ebcd8/packages/sdk/src/file/v1.js#L52)

___

### FileInstance

Ƭ **FileInstance**\<\>: \{ `createdAt`: `number` ; `id`: `string` ; `updatedAt`: `number`  } & [`FileOptions`](file_v1.md#fileoptions)

#### Defined in

[file/v1.js:22](https://github.com/chatbotkit/node-sdk/blob/b5ebcd8/packages/sdk/src/file/v1.js#L22)

___

### FileListRequest

Ƭ **FileListRequest**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `cursor?` | `string` |
| `meta?` | `Record`\<`string`, `string`\> |
| `take?` | `number` |

#### Defined in

[file/v1.js:26](https://github.com/chatbotkit/node-sdk/blob/b5ebcd8/packages/sdk/src/file/v1.js#L26)

___

### FileListResponse

Ƭ **FileListResponse**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `items` | [`FileInstance`](file_v1.md#fileinstance)[] |

#### Defined in

[file/v1.js:27](https://github.com/chatbotkit/node-sdk/blob/b5ebcd8/packages/sdk/src/file/v1.js#L27)

___

### FileListStreamItemType

Ƭ **FileListStreamItemType**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `data` | [`FileInstance`](file_v1.md#fileinstance) |
| `type` | ``"item"`` |

#### Defined in

[file/v1.js:32](https://github.com/chatbotkit/node-sdk/blob/b5ebcd8/packages/sdk/src/file/v1.js#L32)

___

### FileListStreamType

Ƭ **FileListStreamType**\<\>: [`FileListStreamItemType`](file_v1.md#fileliststreamitemtype)

#### Defined in

[file/v1.js:34](https://github.com/chatbotkit/node-sdk/blob/b5ebcd8/packages/sdk/src/file/v1.js#L34)

___

### FileOptions

Ƭ **FileOptions**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `description?` | `string` |
| `meta?` | `Record`\<`string`, `any`\> |
| `name?` | `string` |

#### Defined in

[file/v1.js:16](https://github.com/chatbotkit/node-sdk/blob/b5ebcd8/packages/sdk/src/file/v1.js#L16)

___

### FileUpdateRequest

Ƭ **FileUpdateRequest**\<\>: [`FileOptions`](file_v1.md#fileoptions)

#### Defined in

[file/v1.js:91](https://github.com/chatbotkit/node-sdk/blob/b5ebcd8/packages/sdk/src/file/v1.js#L91)

___

### FileUpdateResponse

Ƭ **FileUpdateResponse**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Defined in

[file/v1.js:95](https://github.com/chatbotkit/node-sdk/blob/b5ebcd8/packages/sdk/src/file/v1.js#L95)

___

### FileUploadRequest

Ƭ **FileUploadRequest**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `data` | `string` \| `ArrayBuffer` |
| `name?` | `string` |
| `type?` | `string` |

#### Defined in

[file/v1.js:140](https://github.com/chatbotkit/node-sdk/blob/b5ebcd8/packages/sdk/src/file/v1.js#L140)

___

### FileUploadResponse

Ƭ **FileUploadResponse**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Defined in

[file/v1.js:144](https://github.com/chatbotkit/node-sdk/blob/b5ebcd8/packages/sdk/src/file/v1.js#L144)

___

### ResponsePromise

Ƭ **ResponsePromise**\<`T`, `U`\>: `ResponsePromise`

#### Type parameters

| Name |
| :------ |
| `T` |
| `U` |

#### Defined in

[file/v1.js:8](https://github.com/chatbotkit/node-sdk/blob/b5ebcd8/packages/sdk/src/file/v1.js#L8)

## Functions

### createFile

▸ **createFile**(`client`, `request`): `Promise`\<[`FileCreateResponse`](file_v1.md#filecreateresponse)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | `ChatBotKitClient` |
| `request` | [`FileOptions`](file_v1.md#fileoptions) |

#### Returns

`Promise`\<[`FileCreateResponse`](file_v1.md#filecreateresponse)\>

#### Defined in

[file/v1.js:78](https://github.com/chatbotkit/node-sdk/blob/b5ebcd8/packages/sdk/src/file/v1.js#L78)

___

### deleteFile

▸ **deleteFile**(`client`, `fileId`): `Promise`\<[`FileDeleteResponse`](file_v1.md#filedeleteresponse)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | `ChatBotKitClient` |
| `fileId` | `string` |

#### Returns

`Promise`\<[`FileDeleteResponse`](file_v1.md#filedeleteresponse)\>

#### Defined in

[file/v1.js:123](https://github.com/chatbotkit/node-sdk/blob/b5ebcd8/packages/sdk/src/file/v1.js#L123)

___

### downloadFile

▸ **downloadFile**(`client`, `fileId`): `Promise`\<[`FileDownloadResponse`](file_v1.md#filedownloadresponse)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | `ChatBotKitClient` |
| `fileId` | `string` |

#### Returns

`Promise`\<[`FileDownloadResponse`](file_v1.md#filedownloadresponse)\>

#### Defined in

[file/v1.js:171](https://github.com/chatbotkit/node-sdk/blob/b5ebcd8/packages/sdk/src/file/v1.js#L171)

___

### fetchFile

▸ **fetchFile**(`client`, `fileId`): `Promise`\<[`FileInstance`](file_v1.md#fileinstance)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | `ChatBotKitClient` |
| `fileId` | `string` |

#### Returns

`Promise`\<[`FileInstance`](file_v1.md#fileinstance)\>

#### Defined in

[file/v1.js:58](https://github.com/chatbotkit/node-sdk/blob/b5ebcd8/packages/sdk/src/file/v1.js#L58)

___

### listFiles

▸ **listFiles**(`client`, `request?`): `ResponsePromise`\<[`FileListResponse`](file_v1.md#filelistresponse), [`FileListStreamItemType`](file_v1.md#fileliststreamitemtype)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | `ChatBotKitClient` |
| `request?` | [`FileListRequest`](file_v1.md#filelistrequest) |

#### Returns

`ResponsePromise`\<[`FileListResponse`](file_v1.md#filelistresponse), [`FileListStreamItemType`](file_v1.md#fileliststreamitemtype)\>

#### Defined in

[file/v1.js:40](https://github.com/chatbotkit/node-sdk/blob/b5ebcd8/packages/sdk/src/file/v1.js#L40)

___

### updateFile

▸ **updateFile**(`client`, `fileId`, `request`): `Promise`\<[`FileUpdateResponse`](file_v1.md#fileupdateresponse)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | `ChatBotKitClient` |
| `fileId` | `string` |
| `request` | [`FileOptions`](file_v1.md#fileoptions) |

#### Returns

`Promise`\<[`FileUpdateResponse`](file_v1.md#fileupdateresponse)\>

#### Defined in

[file/v1.js:102](https://github.com/chatbotkit/node-sdk/blob/b5ebcd8/packages/sdk/src/file/v1.js#L102)

___

### uploadFile

▸ **uploadFile**(`client`, `fileId`, `request`): `Promise`\<[`FileUploadResponse`](file_v1.md#fileuploadresponse)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | `ChatBotKitClient` |
| `fileId` | `string` |
| `request` | [`FileUploadRequest`](file_v1.md#fileuploadrequest) |

#### Returns

`Promise`\<[`FileUploadResponse`](file_v1.md#fileuploadresponse)\>

#### Defined in

[file/v1.js:151](https://github.com/chatbotkit/node-sdk/blob/b5ebcd8/packages/sdk/src/file/v1.js#L151)
