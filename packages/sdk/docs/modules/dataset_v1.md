[@chatbotkit/sdk](../README.md) / [Modules](../modules.md) / dataset/v1

# Module: dataset/v1

## Table of contents

### Type Aliases

- [ChatBotKitClient](dataset_v1.md#chatbotkitclient)
- [DatasetCreateRequest](dataset_v1.md#datasetcreaterequest)
- [DatasetCreateRequestBody](dataset_v1.md#datasetcreaterequestbody)
- [DatasetCreateResponse](dataset_v1.md#datasetcreateresponse)
- [DatasetDeleteRequestBody](dataset_v1.md#datasetdeleterequestbody)
- [DatasetDeleteResponse](dataset_v1.md#datasetdeleteresponse)
- [DatasetFetchResponse](dataset_v1.md#datasetfetchresponse)
- [DatasetListRequest](dataset_v1.md#datasetlistrequest)
- [DatasetListResponse](dataset_v1.md#datasetlistresponse)
- [DatasetListStreamType](dataset_v1.md#datasetliststreamtype)
- [DatasetSearchRequest](dataset_v1.md#datasetsearchrequest)
- [DatasetSearchRequestBody](dataset_v1.md#datasetsearchrequestbody)
- [DatasetSearchResponse](dataset_v1.md#datasetsearchresponse)
- [DatasetUpdateRequest](dataset_v1.md#datasetupdaterequest)
- [DatasetUpdateRequestBody](dataset_v1.md#datasetupdaterequestbody)
- [DatasetUpdateResponse](dataset_v1.md#datasetupdateresponse)
- [ResponsePromise](dataset_v1.md#responsepromise)

### Functions

- [createDataset](dataset_v1.md#createdataset)
- [deleteDataset](dataset_v1.md#deletedataset)
- [fetchDataset](dataset_v1.md#fetchdataset)
- [listDatasets](dataset_v1.md#listdatasets)
- [searchDataset](dataset_v1.md#searchdataset)
- [updateDataset](dataset_v1.md#updatedataset)

## Type Aliases

### ChatBotKitClient

Ƭ **ChatBotKitClient**\<\>: [`client`](client.md)

#### Defined in

[dataset/v1.js:2](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/dataset/v1.js#L2)

___

### DatasetCreateRequest

Ƭ **DatasetCreateRequest**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `blueprintId?` | `string` |
| `description?` | `string` |
| `matchInstruction?` | `string` |
| `meta?` | [`Record`]( https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type )\<`string`, `any`\> |
| `mismatchInstruction?` | `string` |
| `name?` | `string` |
| `recordMaxTokens?` | `number` |
| `reranker?` | `string` |
| `searchMaxRecords?` | `number` |
| `searchMaxTokens?` | `number` |
| `searchMinScore?` | `number` |
| `separators?` | `string` |
| `store?` | `string` |
| `visibility?` | ``"private"`` \| ``"protected"`` \| ``"public"`` |

#### Defined in

[dataset/v1.js:68](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/dataset/v1.js#L68)

___

### DatasetCreateRequestBody

Ƭ **DatasetCreateRequestBody**\<\>: `operations`[``"createDataset"``][``"requestBody"``][``"content"``][``"application/json"``]

#### Defined in

[dataset/v1.js:70](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/dataset/v1.js#L70)

___

### DatasetCreateResponse

Ƭ **DatasetCreateResponse**\<\>: `operations`[``"createDataset"``][``"responses"``][``"200"``][``"content"``][``"application/json"``]

#### Defined in

[dataset/v1.js:72](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/dataset/v1.js#L72)

___

### DatasetDeleteRequestBody

Ƭ **DatasetDeleteRequestBody**\<\>: `operations`[``"deleteDataset"``][``"requestBody"``][``"content"``][``"application/json"``]

#### Defined in

[dataset/v1.js:133](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/dataset/v1.js#L133)

___

### DatasetDeleteResponse

Ƭ **DatasetDeleteResponse**\<\>: `operations`[``"deleteDataset"``][``"responses"``][``"200"``][``"content"``][``"application/json"``]

#### Defined in

[dataset/v1.js:135](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/dataset/v1.js#L135)

___

### DatasetFetchResponse

Ƭ **DatasetFetchResponse**\<\>: `operations`[``"fetchDataset"``][``"responses"``][``"200"``][``"content"``][``"application/json"``]

#### Defined in

[dataset/v1.js:37](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/dataset/v1.js#L37)

___

### DatasetListRequest

Ƭ **DatasetListRequest**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `cursor?` | `string` |
| `meta?` | [`Record`]( https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type )\<`string`, `string`\> |
| `order?` | ``"desc"`` \| ``"asc"`` |
| `take?` | `number` |

#### Defined in

[dataset/v1.js:17](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/dataset/v1.js#L17)

___

### DatasetListResponse

Ƭ **DatasetListResponse**\<\>: `operations`[``"listDatasets"``][``"responses"``][``"200"``][``"content"``][``"application/json"``]

#### Defined in

[dataset/v1.js:19](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/dataset/v1.js#L19)

___

### DatasetListStreamType

Ƭ **DatasetListStreamType**\<\>: `operations`[``"listDatasets"``][``"responses"``][``"200"``][``"content"``][``"application/jsonl"``]

#### Defined in

[dataset/v1.js:21](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/dataset/v1.js#L21)

___

### DatasetSearchRequest

Ƭ **DatasetSearchRequest**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `search` | `string` |

#### Defined in

[dataset/v1.js:156](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/dataset/v1.js#L156)

___

### DatasetSearchRequestBody

Ƭ **DatasetSearchRequestBody**\<\>: `operations`[``"searchDataset"``][``"requestBody"``][``"content"``][``"application/json"``]

#### Defined in

[dataset/v1.js:158](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/dataset/v1.js#L158)

___

### DatasetSearchResponse

Ƭ **DatasetSearchResponse**\<\>: `operations`[``"searchDataset"``][``"responses"``][``"200"``][``"content"``][``"application/json"``]

#### Defined in

[dataset/v1.js:160](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/dataset/v1.js#L160)

___

### DatasetUpdateRequest

Ƭ **DatasetUpdateRequest**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `blueprintId?` | `string` |
| `description?` | `string` |
| `matchInstruction?` | `string` |
| `meta?` | [`Record`]( https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type )\<`string`, `any`\> |
| `mismatchInstruction?` | `string` |
| `name?` | `string` |
| `recordMaxTokens?` | `number` |
| `reranker?` | `string` |
| `searchMaxRecords?` | `number` |
| `searchMaxTokens?` | `number` |
| `searchMinScore?` | `number` |
| `separators?` | `string` |
| `visibility?` | ``"private"`` \| ``"protected"`` \| ``"public"`` |

#### Defined in

[dataset/v1.js:107](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/dataset/v1.js#L107)

___

### DatasetUpdateRequestBody

Ƭ **DatasetUpdateRequestBody**\<\>: `operations`[``"updateDataset"``][``"requestBody"``][``"content"``][``"application/json"``]

#### Defined in

[dataset/v1.js:109](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/dataset/v1.js#L109)

___

### DatasetUpdateResponse

Ƭ **DatasetUpdateResponse**\<\>: `operations`[``"updateDataset"``][``"responses"``][``"200"``][``"content"``][``"application/json"``]

#### Defined in

[dataset/v1.js:111](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/dataset/v1.js#L111)

___

### ResponsePromise

Ƭ **ResponsePromise**\<`T`, `U`\>: [`client`](client.md)

#### Type parameters

| Name |
| :------ |
| `T` |
| `U` |

#### Defined in

[dataset/v1.js:8](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/dataset/v1.js#L8)

## Functions

### createDataset

▸ **createDataset**(`client`, `request`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<{}\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`ChatBotKitClient`](../classes/client.ChatBotKitClient.md) |
| `request` | [`DatasetCreateRequest`](dataset_v1.md#datasetcreaterequest) |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<{}\>

#### Defined in

[dataset/v1.js:78](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/dataset/v1.js#L78)

___

### deleteDataset

▸ **deleteDataset**(`client`, `datasetId`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<{}\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`ChatBotKitClient`](../classes/client.ChatBotKitClient.md) |
| `datasetId` | `string` |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<{}\>

#### Defined in

[dataset/v1.js:141](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/dataset/v1.js#L141)

___

### fetchDataset

▸ **fetchDataset**(`client`, `datasetId`): [`ResponsePromise`](../classes/client.ResponsePromise.md)\<{}, `never`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`ChatBotKitClient`](../classes/client.ChatBotKitClient.md) |
| `datasetId` | `string` |

#### Returns

[`ResponsePromise`](../classes/client.ResponsePromise.md)\<{}, `never`\>

#### Defined in

[dataset/v1.js:43](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/dataset/v1.js#L43)

___

### listDatasets

▸ **listDatasets**(`client`, `request?`): [`ResponsePromise`](../classes/client.ResponsePromise.md)\<{}, {}\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`ChatBotKitClient`](../classes/client.ChatBotKitClient.md) |
| `request?` | [`DatasetListRequest`](dataset_v1.md#datasetlistrequest) |

#### Returns

[`ResponsePromise`](../classes/client.ResponsePromise.md)\<{}, {}\>

#### Defined in

[dataset/v1.js:27](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/dataset/v1.js#L27)

___

### searchDataset

▸ **searchDataset**(`client`, `datasetId`, `search`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<{}\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`ChatBotKitClient`](../classes/client.ChatBotKitClient.md) |
| `datasetId` | `string` |
| `search` | `string` |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<{}\>

#### Defined in

[dataset/v1.js:167](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/dataset/v1.js#L167)

___

### updateDataset

▸ **updateDataset**(`client`, `datasetId`, `request`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<{}\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`ChatBotKitClient`](../classes/client.ChatBotKitClient.md) |
| `datasetId` | `string` |
| `request` | [`DatasetUpdateRequest`](dataset_v1.md#datasetupdaterequest) |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<{}\>

#### Defined in

[dataset/v1.js:118](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/dataset/v1.js#L118)
