[@chatbotkit/sdk](../README.md) / [Modules](../modules.md) / dataset/file/v1

# Module: dataset/file/v1

## Table of contents

### Type Aliases

- [ChatBotKitClient](dataset_file_v1.md#chatbotkitclient)
- [FileAttachRequest](dataset_file_v1.md#fileattachrequest)
- [FileAttachResponse](dataset_file_v1.md#fileattachresponse)
- [FileDetachRequest](dataset_file_v1.md#filedetachrequest)
- [FileDetachResponse](dataset_file_v1.md#filedetachresponse)
- [FileSyncRequest](dataset_file_v1.md#filesyncrequest)
- [FileSyncResponse](dataset_file_v1.md#filesyncresponse)

### Functions

- [fileAttach](dataset_file_v1.md#fileattach)
- [fileDetach](dataset_file_v1.md#filedetach)
- [fileSync](dataset_file_v1.md#filesync)

## Type Aliases

### ChatBotKitClient

Ƭ **ChatBotKitClient**<\>: `ChatBotKitClient`

#### Defined in

[dataset/file/v1.js:2](https://github.com/chatbotkit/node-sdk/blob/9f47e54/packages/sdk/src/dataset/file/v1.js#L2)

___

### FileAttachRequest

Ƭ **FileAttachRequest**<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `type` | ``"source"`` |

#### Defined in

[dataset/file/v1.js:8](https://github.com/chatbotkit/node-sdk/blob/9f47e54/packages/sdk/src/dataset/file/v1.js#L8)

___

### FileAttachResponse

Ƭ **FileAttachResponse**<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Defined in

[dataset/file/v1.js:12](https://github.com/chatbotkit/node-sdk/blob/9f47e54/packages/sdk/src/dataset/file/v1.js#L12)

___

### FileDetachRequest

Ƭ **FileDetachRequest**<\>: `Object`

#### Defined in

[dataset/file/v1.js:30](https://github.com/chatbotkit/node-sdk/blob/9f47e54/packages/sdk/src/dataset/file/v1.js#L30)

___

### FileDetachResponse

Ƭ **FileDetachResponse**<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Defined in

[dataset/file/v1.js:34](https://github.com/chatbotkit/node-sdk/blob/9f47e54/packages/sdk/src/dataset/file/v1.js#L34)

___

### FileSyncRequest

Ƭ **FileSyncRequest**<\>: `Object`

#### Defined in

[dataset/file/v1.js:52](https://github.com/chatbotkit/node-sdk/blob/9f47e54/packages/sdk/src/dataset/file/v1.js#L52)

___

### FileSyncResponse

Ƭ **FileSyncResponse**<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Defined in

[dataset/file/v1.js:56](https://github.com/chatbotkit/node-sdk/blob/9f47e54/packages/sdk/src/dataset/file/v1.js#L56)

## Functions

### fileAttach

▸ **fileAttach**(`client`, `datasetId`, `fileId`, `request`): `Promise`<[`FileAttachResponse`](dataset_file_v1.md#fileattachresponse)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | `ChatBotKitClient` |
| `datasetId` | `string` |
| `fileId` | `string` |
| `request` | [`FileAttachRequest`](dataset_file_v1.md#fileattachrequest) |

#### Returns

`Promise`<[`FileAttachResponse`](dataset_file_v1.md#fileattachresponse)\>

#### Defined in

[dataset/file/v1.js:20](https://github.com/chatbotkit/node-sdk/blob/9f47e54/packages/sdk/src/dataset/file/v1.js#L20)

___

### fileDetach

▸ **fileDetach**(`client`, `datasetId`, `fileId`, `request`): `Promise`<[`FileDetachResponse`](dataset_file_v1.md#filedetachresponse)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | `ChatBotKitClient` |
| `datasetId` | `string` |
| `fileId` | `string` |
| `request` | [`FileDetachRequest`](dataset_file_v1.md#filedetachrequest) |

#### Returns

`Promise`<[`FileDetachResponse`](dataset_file_v1.md#filedetachresponse)\>

#### Defined in

[dataset/file/v1.js:42](https://github.com/chatbotkit/node-sdk/blob/9f47e54/packages/sdk/src/dataset/file/v1.js#L42)

___

### fileSync

▸ **fileSync**(`client`, `datasetId`, `fileId`, `request`): `Promise`<[`FileSyncResponse`](dataset_file_v1.md#filesyncresponse)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | `ChatBotKitClient` |
| `datasetId` | `string` |
| `fileId` | `string` |
| `request` | [`FileSyncRequest`](dataset_file_v1.md#filesyncrequest) |

#### Returns

`Promise`<[`FileSyncResponse`](dataset_file_v1.md#filesyncresponse)\>

#### Defined in

[dataset/file/v1.js:64](https://github.com/chatbotkit/node-sdk/blob/9f47e54/packages/sdk/src/dataset/file/v1.js#L64)
