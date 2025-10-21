[@chatbotkit/sdk](../README.md) / [Modules](../modules.md) / platform/example/v1

# Module: platform/example/v1

## Table of contents

### Type Aliases

- [ChatBotKitClient](platform_example_v1.md#chatbotkitclient)
- [PlatformExampleCloneRequestBody](platform_example_v1.md#platformexampleclonerequestbody)
- [PlatformExampleCloneResponse](platform_example_v1.md#platformexamplecloneresponse)
- [PlatformExampleFetchResponse](platform_example_v1.md#platformexamplefetchresponse)
- [PlatformExampleListRequest](platform_example_v1.md#platformexamplelistrequest)
- [PlatformExampleListResponse](platform_example_v1.md#platformexamplelistresponse)
- [PlatformExampleListStreamType](platform_example_v1.md#platformexampleliststreamtype)
- [PlatformExampleSearchRequest](platform_example_v1.md#platformexamplesearchrequest)
- [PlatformExampleSearchRequestBody](platform_example_v1.md#platformexamplesearchrequestbody)
- [PlatformExampleSearchResponse](platform_example_v1.md#platformexamplesearchresponse)
- [ResponsePromise](platform_example_v1.md#responsepromise)

### Functions

- [clonePlatformExample](platform_example_v1.md#cloneplatformexample)
- [fetchPlatformExample](platform_example_v1.md#fetchplatformexample)
- [listPlatformExamples](platform_example_v1.md#listplatformexamples)
- [searchPlatformExamples](platform_example_v1.md#searchplatformexamples)

## Type Aliases

### ChatBotKitClient

Ƭ **ChatBotKitClient**\<\>: [`client`](client.md)

#### Defined in

[platform/example/v1.js:2](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/platform/example/v1.js#L2)

___

### PlatformExampleCloneRequestBody

Ƭ **PlatformExampleCloneRequestBody**\<\>: `operations`[``"clonePlatformExample"``][``"requestBody"``][``"content"``][``"application/json"``]

#### Defined in

[platform/example/v1.js:79](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/platform/example/v1.js#L79)

___

### PlatformExampleCloneResponse

Ƭ **PlatformExampleCloneResponse**\<\>: `operations`[``"clonePlatformExample"``][``"responses"``][``"200"``][``"content"``][``"application/json"``]

#### Defined in

[platform/example/v1.js:81](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/platform/example/v1.js#L81)

___

### PlatformExampleFetchResponse

Ƭ **PlatformExampleFetchResponse**\<\>: `operations`[``"fetchPlatformExample"``][``"responses"``][``"200"``][``"content"``][``"application/json"``]

#### Defined in

[platform/example/v1.js:36](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/platform/example/v1.js#L36)

___

### PlatformExampleListRequest

Ƭ **PlatformExampleListRequest**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `cursor?` | `string` |
| `order?` | ``"desc"`` \| ``"asc"`` |
| `take?` | `number` |

#### Defined in

[platform/example/v1.js:16](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/platform/example/v1.js#L16)

___

### PlatformExampleListResponse

Ƭ **PlatformExampleListResponse**\<\>: `operations`[``"listPlatformExamples"``][``"responses"``][``"200"``][``"content"``][``"application/json"``]

#### Defined in

[platform/example/v1.js:18](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/platform/example/v1.js#L18)

___

### PlatformExampleListStreamType

Ƭ **PlatformExampleListStreamType**\<\>: `operations`[``"listPlatformExamples"``][``"responses"``][``"200"``][``"content"``][``"application/jsonl"``]

#### Defined in

[platform/example/v1.js:20](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/platform/example/v1.js#L20)

___

### PlatformExampleSearchRequest

Ƭ **PlatformExampleSearchRequest**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `search` | `string` |

#### Defined in

[platform/example/v1.js:54](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/platform/example/v1.js#L54)

___

### PlatformExampleSearchRequestBody

Ƭ **PlatformExampleSearchRequestBody**\<\>: `operations`[``"searchPlatformExamples"``][``"requestBody"``][``"content"``][``"application/json"``]

#### Defined in

[platform/example/v1.js:56](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/platform/example/v1.js#L56)

___

### PlatformExampleSearchResponse

Ƭ **PlatformExampleSearchResponse**\<\>: `operations`[``"searchPlatformExamples"``][``"responses"``][``"200"``][``"content"``][``"application/json"``]

#### Defined in

[platform/example/v1.js:58](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/platform/example/v1.js#L58)

___

### ResponsePromise

Ƭ **ResponsePromise**\<`T`, `U`\>: [`client`](client.md)

#### Type parameters

| Name |
| :------ |
| `T` |
| `U` |

#### Defined in

[platform/example/v1.js:8](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/platform/example/v1.js#L8)

## Functions

### clonePlatformExample

▸ **clonePlatformExample**(`client`, `exampleId`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<{}\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`ChatBotKitClient`](../classes/client.ChatBotKitClient.md) |
| `exampleId` | `string` |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<{}\>

#### Defined in

[platform/example/v1.js:87](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/platform/example/v1.js#L87)

___

### fetchPlatformExample

▸ **fetchPlatformExample**(`client`, `exampleId`): [`ResponsePromise`](../classes/client.ResponsePromise.md)\<{}, `never`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`ChatBotKitClient`](../classes/client.ChatBotKitClient.md) |
| `exampleId` | `string` |

#### Returns

[`ResponsePromise`](../classes/client.ResponsePromise.md)\<{}, `never`\>

#### Defined in

[platform/example/v1.js:42](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/platform/example/v1.js#L42)

___

### listPlatformExamples

▸ **listPlatformExamples**(`client`, `request?`): [`ResponsePromise`](../classes/client.ResponsePromise.md)\<{}, {}\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`ChatBotKitClient`](../classes/client.ChatBotKitClient.md) |
| `request?` | [`PlatformExampleListRequest`](platform_example_v1.md#platformexamplelistrequest) |

#### Returns

[`ResponsePromise`](../classes/client.ResponsePromise.md)\<{}, {}\>

#### Defined in

[platform/example/v1.js:26](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/platform/example/v1.js#L26)

___

### searchPlatformExamples

▸ **searchPlatformExamples**(`client`, `request`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<{}\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`ChatBotKitClient`](../classes/client.ChatBotKitClient.md) |
| `request` | [`PlatformExampleSearchRequest`](platform_example_v1.md#platformexamplesearchrequest) |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<{}\>

#### Defined in

[platform/example/v1.js:64](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/platform/example/v1.js#L64)
