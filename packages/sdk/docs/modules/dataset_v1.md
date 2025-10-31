[@chatbotkit/sdk](../README.md) / [Modules](../modules.md) / dataset/v1

# Module: dataset/v1

## Table of contents

### Type Aliases

- [ChatBotKitClient](dataset_v1.md#chatbotkitclient)
- [DatasetCreateRequest](dataset_v1.md#datasetcreaterequest)
- [DatasetCreateRequestBody](dataset_v1.md#datasetcreaterequestbody)
- [DatasetCreateResponse](dataset_v1.md#datasetcreateresponse)
- [DatasetCreateResponseBody](dataset_v1.md#datasetcreateresponsebody)
- [DatasetDeleteRequest](dataset_v1.md#datasetdeleterequest)
- [DatasetDeleteRequestBody](dataset_v1.md#datasetdeleterequestbody)
- [DatasetDeleteResponse](dataset_v1.md#datasetdeleteresponse)
- [DatasetDeleteResponseBody](dataset_v1.md#datasetdeleteresponsebody)
- [DatasetFetchResponse](dataset_v1.md#datasetfetchresponse)
- [DatasetListRequest](dataset_v1.md#datasetlistrequest)
- [DatasetListResponse](dataset_v1.md#datasetlistresponse)
- [DatasetListStreamType](dataset_v1.md#datasetliststreamtype)
- [DatasetSearchRequest](dataset_v1.md#datasetsearchrequest)
- [DatasetSearchRequestBody](dataset_v1.md#datasetsearchrequestbody)
- [DatasetSearchResponse](dataset_v1.md#datasetsearchresponse)
- [DatasetSearchResponseBody](dataset_v1.md#datasetsearchresponsebody)
- [DatasetUpdateRequest](dataset_v1.md#datasetupdaterequest)
- [DatasetUpdateRequestBody](dataset_v1.md#datasetupdaterequestbody)
- [DatasetUpdateResponse](dataset_v1.md#datasetupdateresponse)
- [DatasetUpdateResponseBody](dataset_v1.md#datasetupdateresponsebody)
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

Ƭ **DatasetCreateRequest**\<\>: [`DatasetCreateRequestBody`](dataset_v1.md#datasetcreaterequestbody)

#### Defined in

[dataset/v1.js:55](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/dataset/v1.js#L55)

___

### DatasetCreateRequestBody

Ƭ **DatasetCreateRequestBody**\<\>: `operations`[``"createDataset"``][``"requestBody"``][``"content"``][``"application/json"``]

#### Defined in

[dataset/v1.js:53](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/dataset/v1.js#L53)

___

### DatasetCreateResponse

Ƭ **DatasetCreateResponse**\<\>: [`DatasetCreateResponseBody`](dataset_v1.md#datasetcreateresponsebody)

#### Defined in

[dataset/v1.js:59](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/dataset/v1.js#L59)

___

### DatasetCreateResponseBody

Ƭ **DatasetCreateResponseBody**\<\>: `operations`[``"createDataset"``][``"responses"``][``"200"``][``"content"``][``"application/json"``]

#### Defined in

[dataset/v1.js:57](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/dataset/v1.js#L57)

___

### DatasetDeleteRequest

Ƭ **DatasetDeleteRequest**\<\>: [`DatasetDeleteRequestBody`](dataset_v1.md#datasetdeleterequestbody)

#### Defined in

[dataset/v1.js:110](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/dataset/v1.js#L110)

___

### DatasetDeleteRequestBody

Ƭ **DatasetDeleteRequestBody**\<\>: `operations`[``"deleteDataset"``][``"requestBody"``][``"content"``][``"application/json"``]

#### Defined in

[dataset/v1.js:108](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/dataset/v1.js#L108)

___

### DatasetDeleteResponse

Ƭ **DatasetDeleteResponse**\<\>: [`DatasetDeleteResponseBody`](dataset_v1.md#datasetdeleteresponsebody)

#### Defined in

[dataset/v1.js:114](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/dataset/v1.js#L114)

___

### DatasetDeleteResponseBody

Ƭ **DatasetDeleteResponseBody**\<\>: `operations`[``"deleteDataset"``][``"responses"``][``"200"``][``"content"``][``"application/json"``]

#### Defined in

[dataset/v1.js:112](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/dataset/v1.js#L112)

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

Ƭ **DatasetSearchRequest**\<\>: [`DatasetSearchRequestBody`](dataset_v1.md#datasetsearchrequestbody)

#### Defined in

[dataset/v1.js:135](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/dataset/v1.js#L135)

___

### DatasetSearchRequestBody

Ƭ **DatasetSearchRequestBody**\<\>: `operations`[``"searchDataset"``][``"requestBody"``][``"content"``][``"application/json"``]

#### Defined in

[dataset/v1.js:133](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/dataset/v1.js#L133)

___

### DatasetSearchResponse

Ƭ **DatasetSearchResponse**\<\>: [`DatasetSearchResponseBody`](dataset_v1.md#datasetsearchresponsebody)

#### Defined in

[dataset/v1.js:139](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/dataset/v1.js#L139)

___

### DatasetSearchResponseBody

Ƭ **DatasetSearchResponseBody**\<\>: `operations`[``"searchDataset"``][``"responses"``][``"200"``][``"content"``][``"application/json"``]

#### Defined in

[dataset/v1.js:137](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/dataset/v1.js#L137)

___

### DatasetUpdateRequest

Ƭ **DatasetUpdateRequest**\<\>: [`DatasetUpdateRequestBody`](dataset_v1.md#datasetupdaterequestbody)

#### Defined in

[dataset/v1.js:82](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/dataset/v1.js#L82)

___

### DatasetUpdateRequestBody

Ƭ **DatasetUpdateRequestBody**\<\>: `operations`[``"updateDataset"``][``"requestBody"``][``"content"``][``"application/json"``]

#### Defined in

[dataset/v1.js:80](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/dataset/v1.js#L80)

___

### DatasetUpdateResponse

Ƭ **DatasetUpdateResponse**\<\>: [`DatasetUpdateResponseBody`](dataset_v1.md#datasetupdateresponsebody)

#### Defined in

[dataset/v1.js:86](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/dataset/v1.js#L86)

___

### DatasetUpdateResponseBody

Ƭ **DatasetUpdateResponseBody**\<\>: `operations`[``"updateDataset"``][``"responses"``][``"200"``][``"content"``][``"application/json"``]

#### Defined in

[dataset/v1.js:84](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/dataset/v1.js#L84)

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
| `request` | `Object` |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<{}\>

#### Defined in

[dataset/v1.js:65](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/dataset/v1.js#L65)

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

[dataset/v1.js:120](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/dataset/v1.js#L120)

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

[dataset/v1.js:146](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/dataset/v1.js#L146)

___

### updateDataset

▸ **updateDataset**(`client`, `datasetId`, `request`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<{}\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`ChatBotKitClient`](../classes/client.ChatBotKitClient.md) |
| `datasetId` | `string` |
| `request` | `Object` |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<{}\>

#### Defined in

[dataset/v1.js:93](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/dataset/v1.js#L93)
