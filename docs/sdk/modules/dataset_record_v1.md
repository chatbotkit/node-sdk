[@chatbotkit/sdk](../README.md) / [Modules](../modules.md) / dataset/record/v1

# Module: dataset/record/v1

## Table of contents

### Type Aliases

- [ChatBotKitClient](dataset_record_v1.md#chatbotkitclient)
- [RecordCreateRequest](dataset_record_v1.md#recordcreaterequest)
- [RecordCreateResponse](dataset_record_v1.md#recordcreateresponse)
- [RecordDeleteResponse](dataset_record_v1.md#recorddeleteresponse)
- [RecordFetchResponse](dataset_record_v1.md#recordfetchresponse)
- [RecordInstance](dataset_record_v1.md#recordinstance)
- [RecordListResponse](dataset_record_v1.md#recordlistresponse)
- [RecordListStreamItem](dataset_record_v1.md#recordliststreamitem)
- [RecordListStreamType](dataset_record_v1.md#recordliststreamtype)
- [RecordOptions](dataset_record_v1.md#recordoptions)
- [RecordUpdateRequest](dataset_record_v1.md#recordupdaterequest)
- [RecordUpdateResponse](dataset_record_v1.md#recordupdateresponse)

### Functions

- [recordCreate](dataset_record_v1.md#recordcreate)
- [recordDelete](dataset_record_v1.md#recorddelete)
- [recordFetch](dataset_record_v1.md#recordfetch)
- [recordList](dataset_record_v1.md#recordlist)
- [recordUpdate](dataset_record_v1.md#recordupdate)

## Type Aliases

### ChatBotKitClient

Ƭ **ChatBotKitClient**<\>: `ChatBotKitClient`

#### Defined in

[dataset/record/v1.js:2](https://github.com/chatbotkit/node-sdk/blob/c325fd2/packages/sdk/src/dataset/record/v1.js#L2)

___

### RecordCreateRequest

Ƭ **RecordCreateRequest**<\>: [`RecordOptions`](dataset_record_v1.md#recordoptions)

#### Defined in

[dataset/record/v1.js:51](https://github.com/chatbotkit/node-sdk/blob/c325fd2/packages/sdk/src/dataset/record/v1.js#L51)

___

### RecordCreateResponse

Ƭ **RecordCreateResponse**<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Defined in

[dataset/record/v1.js:55](https://github.com/chatbotkit/node-sdk/blob/c325fd2/packages/sdk/src/dataset/record/v1.js#L55)

___

### RecordDeleteResponse

Ƭ **RecordDeleteResponse**<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Defined in

[dataset/record/v1.js:93](https://github.com/chatbotkit/node-sdk/blob/c325fd2/packages/sdk/src/dataset/record/v1.js#L93)

___

### RecordFetchResponse

Ƭ **RecordFetchResponse**<\>: [`RecordInstance`](dataset_record_v1.md#recordinstance)

#### Defined in

[dataset/record/v1.js:37](https://github.com/chatbotkit/node-sdk/blob/c325fd2/packages/sdk/src/dataset/record/v1.js#L37)

___

### RecordInstance

Ƭ **RecordInstance**<\>: { `createdAt`: `number` ; `id`: `string` ; `updatedAt`: `number`  } & [`RecordOptions`](dataset_record_v1.md#recordoptions)

#### Defined in

[dataset/record/v1.js:15](https://github.com/chatbotkit/node-sdk/blob/c325fd2/packages/sdk/src/dataset/record/v1.js#L15)

___

### RecordListResponse

Ƭ **RecordListResponse**<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `items` | [`RecordInstance`](dataset_record_v1.md#recordinstance)[] |

#### Defined in

[dataset/record/v1.js:19](https://github.com/chatbotkit/node-sdk/blob/c325fd2/packages/sdk/src/dataset/record/v1.js#L19)

___

### RecordListStreamItem

Ƭ **RecordListStreamItem**<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `data` | [`RecordInstance`](dataset_record_v1.md#recordinstance) |
| `type` | ``"item"`` |

#### Defined in

[dataset/record/v1.js:24](https://github.com/chatbotkit/node-sdk/blob/c325fd2/packages/sdk/src/dataset/record/v1.js#L24)

___

### RecordListStreamType

Ƭ **RecordListStreamType**<\>: [`RecordListStreamItem`](dataset_record_v1.md#recordliststreamitem)

#### Defined in

[dataset/record/v1.js:26](https://github.com/chatbotkit/node-sdk/blob/c325fd2/packages/sdk/src/dataset/record/v1.js#L26)

___

### RecordOptions

Ƭ **RecordOptions**<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `meta?` | `Record`<`string`, `any`\> |
| `text` | `string` |

#### Defined in

[dataset/record/v1.js:9](https://github.com/chatbotkit/node-sdk/blob/c325fd2/packages/sdk/src/dataset/record/v1.js#L9)

___

### RecordUpdateRequest

Ƭ **RecordUpdateRequest**<\>: [`RecordOptions`](dataset_record_v1.md#recordoptions)

#### Defined in

[dataset/record/v1.js:69](https://github.com/chatbotkit/node-sdk/blob/c325fd2/packages/sdk/src/dataset/record/v1.js#L69)

___

### RecordUpdateResponse

Ƭ **RecordUpdateResponse**<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Defined in

[dataset/record/v1.js:73](https://github.com/chatbotkit/node-sdk/blob/c325fd2/packages/sdk/src/dataset/record/v1.js#L73)

## Functions

### recordCreate

▸ **recordCreate**(`client`, `datasetId`, `request`): `Promise`<[`RecordCreateResponse`](dataset_record_v1.md#recordcreateresponse)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | `ChatBotKitClient` |
| `datasetId` | `string` |
| `request` | [`RecordOptions`](dataset_record_v1.md#recordoptions) |

#### Returns

`Promise`<[`RecordCreateResponse`](dataset_record_v1.md#recordcreateresponse)\>

#### Defined in

[dataset/record/v1.js:62](https://github.com/chatbotkit/node-sdk/blob/c325fd2/packages/sdk/src/dataset/record/v1.js#L62)

___

### recordDelete

▸ **recordDelete**(`client`, `datasetId`, `recordId`): `Promise`<[`RecordDeleteResponse`](dataset_record_v1.md#recorddeleteresponse)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | `ChatBotKitClient` |
| `datasetId` | `string` |
| `recordId` | `string` |

#### Returns

`Promise`<[`RecordDeleteResponse`](dataset_record_v1.md#recorddeleteresponse)\>

#### Defined in

[dataset/record/v1.js:100](https://github.com/chatbotkit/node-sdk/blob/c325fd2/packages/sdk/src/dataset/record/v1.js#L100)

___

### recordFetch

▸ **recordFetch**(`client`, `datasetId`, `recordId`): `Promise`<[`RecordInstance`](dataset_record_v1.md#recordinstance)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | `ChatBotKitClient` |
| `datasetId` | `string` |
| `recordId` | `string` |

#### Returns

`Promise`<[`RecordInstance`](dataset_record_v1.md#recordinstance)\>

#### Defined in

[dataset/record/v1.js:44](https://github.com/chatbotkit/node-sdk/blob/c325fd2/packages/sdk/src/dataset/record/v1.js#L44)

___

### recordList

▸ **recordList**(`client`, `datasetId`): `ResponsePromise`<[`RecordListResponse`](dataset_record_v1.md#recordlistresponse), [`RecordListStreamItem`](dataset_record_v1.md#recordliststreamitem)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | `ChatBotKitClient` |
| `datasetId` | `string` |

#### Returns

`ResponsePromise`<[`RecordListResponse`](dataset_record_v1.md#recordlistresponse), [`RecordListStreamItem`](dataset_record_v1.md#recordliststreamitem)\>

#### Defined in

[dataset/record/v1.js:32](https://github.com/chatbotkit/node-sdk/blob/c325fd2/packages/sdk/src/dataset/record/v1.js#L32)

___

### recordUpdate

▸ **recordUpdate**(`client`, `datasetId`, `recordId`, `request`): `Promise`<[`RecordUpdateResponse`](dataset_record_v1.md#recordupdateresponse)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | `ChatBotKitClient` |
| `datasetId` | `string` |
| `recordId` | `string` |
| `request` | [`RecordOptions`](dataset_record_v1.md#recordoptions) |

#### Returns

`Promise`<[`RecordUpdateResponse`](dataset_record_v1.md#recordupdateresponse)\>

#### Defined in

[dataset/record/v1.js:81](https://github.com/chatbotkit/node-sdk/blob/c325fd2/packages/sdk/src/dataset/record/v1.js#L81)
