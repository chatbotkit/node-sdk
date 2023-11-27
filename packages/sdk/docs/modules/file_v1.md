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

[file/v1.js:2](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/file/v1.js#L2)

___

### FileCreateRequest

Ƭ **FileCreateRequest**\<\>: [`FileOptions`](file_v1.md#fileoptions) & {}

#### Defined in

[file/v1.js:70](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/file/v1.js#L70)

___

### FileCreateResponse

Ƭ **FileCreateResponse**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Defined in

[file/v1.js:74](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/file/v1.js#L74)

___

### FileDeleteResponse

Ƭ **FileDeleteResponse**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Defined in

[file/v1.js:124](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/file/v1.js#L124)

___

### FileDownloadResponse

Ƭ **FileDownloadResponse**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `data` | `ArrayBuffer` |

#### Defined in

[file/v1.js:172](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/file/v1.js#L172)

___

### FileFetchResponse

Ƭ **FileFetchResponse**\<\>: [`DatasetFileInstance`](dataset_file_v1.md#datasetfileinstance) & {}

#### Defined in

[file/v1.js:53](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/file/v1.js#L53)

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

[file/v1.js:26](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/file/v1.js#L26)

___

### FileListResponse

Ƭ **FileListResponse**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `items` | [`DatasetFileInstance`](dataset_file_v1.md#datasetfileinstance)[] |

#### Defined in

[file/v1.js:27](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/file/v1.js#L27)

___

### FileListStreamItemType

Ƭ **FileListStreamItemType**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `data` | [`DatasetFileInstance`](dataset_file_v1.md#datasetfileinstance) |
| `type` | ``"item"`` |

#### Defined in

[file/v1.js:32](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/file/v1.js#L32)

___

### FileListStreamType

Ƭ **FileListStreamType**\<\>: [`FileListStreamItemType`](file_v1.md#fileliststreamitemtype)

#### Defined in

[file/v1.js:34](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/file/v1.js#L34)

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

[file/v1.js:16](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/file/v1.js#L16)

___

### FileUpdateRequest

Ƭ **FileUpdateRequest**\<\>: [`FileOptions`](file_v1.md#fileoptions) & {}

#### Defined in

[file/v1.js:96](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/file/v1.js#L96)

___

### FileUpdateResponse

Ƭ **FileUpdateResponse**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Defined in

[file/v1.js:100](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/file/v1.js#L100)

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

[file/v1.js:147](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/file/v1.js#L147)

___

### FileUploadResponse

Ƭ **FileUploadResponse**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Defined in

[file/v1.js:151](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/file/v1.js#L151)

___

### ResponsePromise

Ƭ **ResponsePromise**\<`T`, `U`\>: [`client`](client.md)

#### Type parameters

| Name |
| :------ |
| `T` |
| `U` |

#### Defined in

[file/v1.js:8](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/file/v1.js#L8)

## Functions

### createFile

▸ **createFile**(`client`, `request`): `Promise`\<[`FileCreateResponse`](file_v1.md#filecreateresponse)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`ChatBotKitClient`](../classes/client.ChatBotKitClient.md) |
| `request` | [`FileOptions`](file_v1.md#fileoptions) |

#### Returns

`Promise`\<[`FileCreateResponse`](file_v1.md#filecreateresponse)\>

#### Defined in

[file/v1.js:80](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/file/v1.js#L80)

___

### deleteFile

▸ **deleteFile**(`client`, `fileId`): `Promise`\<[`FileDeleteResponse`](file_v1.md#filedeleteresponse)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`ChatBotKitClient`](../classes/client.ChatBotKitClient.md) |
| `fileId` | `string` |

#### Returns

`Promise`\<[`FileDeleteResponse`](file_v1.md#filedeleteresponse)\>

#### Defined in

[file/v1.js:130](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/file/v1.js#L130)

___

### downloadFile

▸ **downloadFile**(`client`, `fileId`): `Promise`\<[`FileDownloadResponse`](file_v1.md#filedownloadresponse)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`ChatBotKitClient`](../classes/client.ChatBotKitClient.md) |
| `fileId` | `string` |

#### Returns

`Promise`\<[`FileDownloadResponse`](file_v1.md#filedownloadresponse)\>

#### Defined in

[file/v1.js:178](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/file/v1.js#L178)

___

### fetchFile

▸ **fetchFile**(`client`, `fileId`): `Promise`\<[`FileFetchResponse`](file_v1.md#filefetchresponse)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`ChatBotKitClient`](../classes/client.ChatBotKitClient.md) |
| `fileId` | `string` |

#### Returns

`Promise`\<[`FileFetchResponse`](file_v1.md#filefetchresponse)\>

#### Defined in

[file/v1.js:59](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/file/v1.js#L59)

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

[file/v1.js:40](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/file/v1.js#L40)

___

### updateFile

▸ **updateFile**(`client`, `fileId`, `request`): `Promise`\<[`FileUpdateResponse`](file_v1.md#fileupdateresponse)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`ChatBotKitClient`](../classes/client.ChatBotKitClient.md) |
| `fileId` | `string` |
| `request` | [`FileOptions`](file_v1.md#fileoptions) |

#### Returns

`Promise`\<[`FileUpdateResponse`](file_v1.md#fileupdateresponse)\>

#### Defined in

[file/v1.js:107](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/file/v1.js#L107)

___

### uploadFile

▸ **uploadFile**(`client`, `fileId`, `request`): `Promise`\<[`FileUploadResponse`](file_v1.md#fileuploadresponse)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`ChatBotKitClient`](../classes/client.ChatBotKitClient.md) |
| `fileId` | `string` |
| `request` | [`FileUploadRequest`](file_v1.md#fileuploadrequest) |

#### Returns

`Promise`\<[`FileUploadResponse`](file_v1.md#fileuploadresponse)\>

#### Defined in

[file/v1.js:158](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/file/v1.js#L158)
