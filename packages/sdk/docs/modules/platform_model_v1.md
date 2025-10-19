[@chatbotkit/sdk](../README.md) / [Modules](../modules.md) / platform/model/v1

# Module: platform/model/v1

## Table of contents

### Type Aliases

- [ChatBotKitClient](platform_model_v1.md#chatbotkitclient)
- [PlatformModelInstance](platform_model_v1.md#platformmodelinstance)
- [PlatformModelListRequest](platform_model_v1.md#platformmodellistrequest)
- [PlatformModelListResponse](platform_model_v1.md#platformmodellistresponse)
- [PlatformModelListStreamItemType](platform_model_v1.md#platformmodelliststreamitemtype)
- [PlatformModelListStreamType](platform_model_v1.md#platformmodelliststreamtype)
- [PlatformModelOptions](platform_model_v1.md#platformmodeloptions)
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

Ƭ **PlatformModelInstance**\<\>: [`PlatformModelOptions`](platform_model_v1.md#platformmodeloptions) & \{ `createdAt`: `number` ; `id`: `string` ; `updatedAt`: `number`  }

#### Defined in

[platform/model/v1.js:22](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/platform/model/v1.js#L22)

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

[platform/model/v1.js:31](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/platform/model/v1.js#L31)

___

### PlatformModelListResponse

Ƭ **PlatformModelListResponse**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `items` | [`PlatformModelInstance`](platform_model_v1.md#platformmodelinstance)[] |

#### Defined in

[platform/model/v1.js:33](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/platform/model/v1.js#L33)

___

### PlatformModelListStreamItemType

Ƭ **PlatformModelListStreamItemType**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `data` | [`PlatformModelInstance`](platform_model_v1.md#platformmodelinstance) |
| `type` | ``"item"`` |

#### Defined in

[platform/model/v1.js:38](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/platform/model/v1.js#L38)

___

### PlatformModelListStreamType

Ƭ **PlatformModelListStreamType**\<\>: [`PlatformModelListStreamItemType`](platform_model_v1.md#platformmodelliststreamitemtype)

#### Defined in

[platform/model/v1.js:40](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/platform/model/v1.js#L40)

___

### PlatformModelOptions

Ƭ **PlatformModelOptions**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `description?` | `string` |
| `meta?` | [`Record`]( https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type )\<`string`, `any`\> |
| `name?` | `string` |

#### Defined in

[platform/model/v1.js:16](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/platform/model/v1.js#L16)

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

▸ **listPlatformModels**(`client`, `request?`): [`ResponsePromise`](../classes/client.ResponsePromise.md)\<[`PlatformModelListResponse`](platform_model_v1.md#platformmodellistresponse), [`PlatformModelListStreamItemType`](platform_model_v1.md#platformmodelliststreamitemtype)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`ChatBotKitClient`](../classes/client.ChatBotKitClient.md) |
| `request?` | [`PlatformModelListRequest`](platform_model_v1.md#platformmodellistrequest) |

#### Returns

[`ResponsePromise`](../classes/client.ResponsePromise.md)\<[`PlatformModelListResponse`](platform_model_v1.md#platformmodellistresponse), [`PlatformModelListStreamItemType`](platform_model_v1.md#platformmodelliststreamitemtype)\>

#### Defined in

[platform/model/v1.js:46](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/platform/model/v1.js#L46)
