[@chatbotkit/sdk](../README.md) / [Modules](../modules.md) / platform/model/v1

# Module: platform/model/v1

## Table of contents

### Type Aliases

- [ChatBotKitClient](platform_model_v1.md#chatbotkitclient)
- [PlatformModelInstance](platform_model_v1.md#platformmodelinstance)
- [PlatformModelListRequest](platform_model_v1.md#platformmodellistrequest)
- [PlatformModelListResponse](platform_model_v1.md#platformmodellistresponse)
- [PlatformModelListStreamType](platform_model_v1.md#platformmodelliststreamtype)
- [ResponsePromise](platform_model_v1.md#responsepromise)

### Functions

- [listPlatformModels](platform_model_v1.md#listplatformmodels)

## Type Aliases

### ChatBotKitClient

Ƭ **ChatBotKitClient**\<\>: [`client`](client.md)

#### Defined in

[platform/model/v1.js:2](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/platform/model/v1.js#L2)

___

### PlatformModelInstance

Ƭ **PlatformModelInstance**\<\>: [`PlatformModelListResponse`](platform_model_v1.md#platformmodellistresponse)[``"items"``][`number`]

#### Defined in

[platform/model/v1.js:21](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/platform/model/v1.js#L21)

___

### PlatformModelListRequest

Ƭ **PlatformModelListRequest**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `cursor?` | `string` |
| `meta?` | [`Record`]( https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type )\<`string`, `string`\> |
| `order?` | ``"desc"`` \| ``"asc"`` |
| `take?` | `number` |

#### Defined in

[platform/model/v1.js:17](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/platform/model/v1.js#L17)

___

### PlatformModelListResponse

Ƭ **PlatformModelListResponse**\<\>: `operations`[``"listPlatformModels"``][``"responses"``][``"200"``][``"content"``][``"application/json"``]

#### Defined in

[platform/model/v1.js:19](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/platform/model/v1.js#L19)

___

### PlatformModelListStreamType

Ƭ **PlatformModelListStreamType**\<\>: `operations`[``"listPlatformModels"``][``"responses"``][``"200"``][``"content"``][``"application/jsonl"``]

#### Defined in

[platform/model/v1.js:23](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/platform/model/v1.js#L23)

___

### ResponsePromise

Ƭ **ResponsePromise**\<`T`, `U`\>: [`client`](client.md)

#### Type parameters

| Name |
| :------ |
| `T` |
| `U` |

#### Defined in

[platform/model/v1.js:8](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/platform/model/v1.js#L8)

## Functions

### listPlatformModels

▸ **listPlatformModels**(`client`, `request?`): [`ResponsePromise`](../classes/client.ResponsePromise.md)\<{}, {}\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`ChatBotKitClient`](../classes/client.ChatBotKitClient.md) |
| `request?` | [`PlatformModelListRequest`](platform_model_v1.md#platformmodellistrequest) |

#### Returns

[`ResponsePromise`](../classes/client.ResponsePromise.md)\<{}, {}\>

#### Defined in

[platform/model/v1.js:29](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/platform/model/v1.js#L29)
