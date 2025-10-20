[@chatbotkit/sdk](../README.md) / [Modules](../modules.md) / platform/example/v1

# Module: platform/example/v1

## Table of contents

### Type Aliases

- [ChatBotKitClient](platform_example_v1.md#chatbotkitclient)
- [PlatformExampleCloneResponse](platform_example_v1.md#platformexamplecloneresponse)
- [PlatformExampleInstance](platform_example_v1.md#platformexampleinstance)
- [PlatformExampleListRequest](platform_example_v1.md#platformexamplelistrequest)
- [PlatformExampleListResponse](platform_example_v1.md#platformexamplelistresponse)
- [PlatformExampleListStreamItemType](platform_example_v1.md#platformexampleliststreamitemtype)
- [PlatformExampleListStreamType](platform_example_v1.md#platformexampleliststreamtype)
- [PlatformExampleOptions](platform_example_v1.md#platformexampleoptions)
- [ResponsePromise](platform_example_v1.md#responsepromise)

### Functions

- [clonePlatformExample](platform_example_v1.md#cloneplatformexample)
- [listPlatformExamples](platform_example_v1.md#listplatformexamples)

## Type Aliases

### ChatBotKitClient

Ƭ **ChatBotKitClient**\<\>: [`client`](client.md)

#### Defined in

[platform/example/v1.js:2](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/platform/example/v1.js#L2)

___

### PlatformExampleCloneResponse

Ƭ **PlatformExampleCloneResponse**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `resources` | [`Record`]( https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type )\<`string`, \{ `description?`: `string` ; `id`: `string` ; `name?`: `string`  }[]\> |

#### Defined in

[platform/example/v1.js:63](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/platform/example/v1.js#L63)

___

### PlatformExampleInstance

Ƭ **PlatformExampleInstance**\<\>: [`PlatformExampleOptions`](platform_example_v1.md#platformexampleoptions) & \{ `createdAt`: `number` ; `updatedAt`: `number`  }

#### Defined in

[platform/example/v1.js:25](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/platform/example/v1.js#L25)

___

### PlatformExampleListRequest

Ƭ **PlatformExampleListRequest**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `cursor?` | `string` |
| `meta?` | [`Record`]( https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type )\<`string`, `string`\> |
| `order?` | ``"desc"`` \| ``"asc"`` |
| `take?` | `number` |

#### Defined in

[platform/example/v1.js:34](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/platform/example/v1.js#L34)

___

### PlatformExampleListResponse

Ƭ **PlatformExampleListResponse**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `items` | [`PlatformExampleInstance`](platform_example_v1.md#platformexampleinstance)[] |

#### Defined in

[platform/example/v1.js:36](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/platform/example/v1.js#L36)

___

### PlatformExampleListStreamItemType

Ƭ **PlatformExampleListStreamItemType**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `data` | [`PlatformExampleInstance`](platform_example_v1.md#platformexampleinstance) |
| `type` | ``"item"`` |

#### Defined in

[platform/example/v1.js:41](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/platform/example/v1.js#L41)

___

### PlatformExampleListStreamType

Ƭ **PlatformExampleListStreamType**\<\>: [`PlatformExampleListStreamItemType`](platform_example_v1.md#platformexampleliststreamitemtype)

#### Defined in

[platform/example/v1.js:43](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/platform/example/v1.js#L43)

___

### PlatformExampleOptions

Ƭ **PlatformExampleOptions**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `category?` | `string` |
| `config?` | [`Record`]( https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type )\<`string`, `any`\> |
| `description?` | `string` |
| `id` | `string` |
| `meta?` | [`Record`]( https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type )\<`string`, `any`\> |
| `name?` | `string` |
| `tags?` | `string`[] |

#### Defined in

[platform/example/v1.js:20](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/platform/example/v1.js#L20)

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

▸ **clonePlatformExample**(`client`, `exampleId`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<[`PlatformExampleCloneResponse`](platform_example_v1.md#platformexamplecloneresponse)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`ChatBotKitClient`](../classes/client.ChatBotKitClient.md) |
| `exampleId` | `string` |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<[`PlatformExampleCloneResponse`](platform_example_v1.md#platformexamplecloneresponse)\>

#### Defined in

[platform/example/v1.js:69](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/platform/example/v1.js#L69)

___

### listPlatformExamples

▸ **listPlatformExamples**(`client`, `request?`): [`ResponsePromise`](../classes/client.ResponsePromise.md)\<[`PlatformExampleListResponse`](platform_example_v1.md#platformexamplelistresponse), [`PlatformExampleListStreamItemType`](platform_example_v1.md#platformexampleliststreamitemtype)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`ChatBotKitClient`](../classes/client.ChatBotKitClient.md) |
| `request?` | [`PlatformExampleListRequest`](platform_example_v1.md#platformexamplelistrequest) |

#### Returns

[`ResponsePromise`](../classes/client.ResponsePromise.md)\<[`PlatformExampleListResponse`](platform_example_v1.md#platformexamplelistresponse), [`PlatformExampleListStreamItemType`](platform_example_v1.md#platformexampleliststreamitemtype)\>

#### Defined in

[platform/example/v1.js:49](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/platform/example/v1.js#L49)
