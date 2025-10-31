[@chatbotkit/sdk](../README.md) / [Modules](../modules.md) / platform/example/v1

# Module: platform/example/v1

## Table of contents

### Type Aliases

- [ChatBotKitClient](platform_example_v1.md#chatbotkitclient)
- [PlatformExampleCloneRequest](platform_example_v1.md#platformexampleclonerequest)
- [PlatformExampleCloneRequestBody](platform_example_v1.md#platformexampleclonerequestbody)
- [PlatformExampleCloneResponse](platform_example_v1.md#platformexamplecloneresponse)
- [PlatformExampleCloneResponseBody](platform_example_v1.md#platformexamplecloneresponsebody)
- [PlatformExampleListItem](platform_example_v1.md#platformexamplelistitem)
- [PlatformExampleListRequest](platform_example_v1.md#platformexamplelistrequest)
- [PlatformExampleListResponse](platform_example_v1.md#platformexamplelistresponse)
- [PlatformExampleListStreamType](platform_example_v1.md#platformexampleliststreamtype)
- [PlatformExampleSearchRequest](platform_example_v1.md#platformexamplesearchrequest)
- [PlatformExampleSearchRequestBody](platform_example_v1.md#platformexamplesearchrequestbody)
- [PlatformExampleSearchResponse](platform_example_v1.md#platformexamplesearchresponse)
- [PlatformExampleSearchResponseBody](platform_example_v1.md#platformexamplesearchresponsebody)
- [ResponsePromise](platform_example_v1.md#responsepromise)

### Functions

- [clonePlatformExample](platform_example_v1.md#cloneplatformexample)
- [listPlatformExamples](platform_example_v1.md#listplatformexamples)
- [searchPlatformExamples](platform_example_v1.md#searchplatformexamples)

## Type Aliases

### ChatBotKitClient

Ƭ **ChatBotKitClient**\<\>: [`client`](client.md)

#### Defined in

[platform/example/v1.js:2](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/platform/example/v1.js#L2)

___

### PlatformExampleCloneRequest

Ƭ **PlatformExampleCloneRequest**\<\>: [`PlatformExampleCloneRequestBody`](platform_example_v1.md#platformexampleclonerequestbody)

#### Defined in

[platform/example/v1.js:67](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/platform/example/v1.js#L67)

___

### PlatformExampleCloneRequestBody

Ƭ **PlatformExampleCloneRequestBody**\<\>: `operations`[``"clonePlatformExample"``][``"requestBody"``][``"content"``][``"application/json"``]

#### Defined in

[platform/example/v1.js:65](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/platform/example/v1.js#L65)

___

### PlatformExampleCloneResponse

Ƭ **PlatformExampleCloneResponse**\<\>: [`PlatformExampleCloneResponseBody`](platform_example_v1.md#platformexamplecloneresponsebody)

#### Defined in

[platform/example/v1.js:71](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/platform/example/v1.js#L71)

___

### PlatformExampleCloneResponseBody

Ƭ **PlatformExampleCloneResponseBody**\<\>: `operations`[``"clonePlatformExample"``][``"responses"``][``"200"``][``"content"``][``"application/json"``]

#### Defined in

[platform/example/v1.js:69](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/platform/example/v1.js#L69)

___

### PlatformExampleListItem

Ƭ **PlatformExampleListItem**\<\>: [`PlatformExampleListResponse`](platform_example_v1.md#platformexamplelistresponse)[``"items"``][`number`]

#### Defined in

[platform/example/v1.js:20](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/platform/example/v1.js#L20)

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

[platform/example/v1.js:22](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/platform/example/v1.js#L22)

___

### PlatformExampleSearchRequest

Ƭ **PlatformExampleSearchRequest**\<\>: [`PlatformExampleSearchRequestBody`](platform_example_v1.md#platformexamplesearchrequestbody)

#### Defined in

[platform/example/v1.js:40](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/platform/example/v1.js#L40)

___

### PlatformExampleSearchRequestBody

Ƭ **PlatformExampleSearchRequestBody**\<\>: `operations`[``"searchPlatformExamples"``][``"requestBody"``][``"content"``][``"application/json"``]

#### Defined in

[platform/example/v1.js:38](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/platform/example/v1.js#L38)

___

### PlatformExampleSearchResponse

Ƭ **PlatformExampleSearchResponse**\<\>: [`PlatformExampleSearchResponseBody`](platform_example_v1.md#platformexamplesearchresponsebody)

#### Defined in

[platform/example/v1.js:44](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/platform/example/v1.js#L44)

___

### PlatformExampleSearchResponseBody

Ƭ **PlatformExampleSearchResponseBody**\<\>: `operations`[``"searchPlatformExamples"``][``"responses"``][``"200"``][``"content"``][``"application/json"``]

#### Defined in

[platform/example/v1.js:42](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/platform/example/v1.js#L42)

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

[platform/example/v1.js:77](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/platform/example/v1.js#L77)

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

[platform/example/v1.js:28](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/platform/example/v1.js#L28)

___

### searchPlatformExamples

▸ **searchPlatformExamples**(`client`, `request`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<{}\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`ChatBotKitClient`](../classes/client.ChatBotKitClient.md) |
| `request` | `Object` |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<{}\>

#### Defined in

[platform/example/v1.js:50](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/platform/example/v1.js#L50)
