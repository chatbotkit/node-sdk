[@chatbotkit/sdk](../README.md) / [Modules](../modules.md) / platform/secret/v1

# Module: platform/secret/v1

## Table of contents

### Type Aliases

- [ChatBotKitClient](platform_secret_v1.md#chatbotkitclient)
- [PlatformSecretInstance](platform_secret_v1.md#platformsecretinstance)
- [PlatformSecretListRequest](platform_secret_v1.md#platformsecretlistrequest)
- [PlatformSecretListResponse](platform_secret_v1.md#platformsecretlistresponse)
- [PlatformSecretListStreamItemType](platform_secret_v1.md#platformsecretliststreamitemtype)
- [PlatformSecretListStreamType](platform_secret_v1.md#platformsecretliststreamtype)
- [PlatformSecretOptions](platform_secret_v1.md#platformsecretoptions)
- [ResponsePromise](platform_secret_v1.md#responsepromise)

### Functions

- [listPlatformSecrets](platform_secret_v1.md#listplatformsecrets)

## Type Aliases

### ChatBotKitClient

Ƭ **ChatBotKitClient**\<\>: [`client`](client.md)

#### Defined in

[platform/secret/v1.js:2](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/platform/secret/v1.js#L2)

___

### PlatformSecretInstance

Ƭ **PlatformSecretInstance**\<\>: [`PlatformSecretOptions`](platform_secret_v1.md#platformsecretoptions) & \{ `createdAt`: `number` ; `id`: `string` ; `updatedAt`: `number`  }

#### Defined in

[platform/secret/v1.js:22](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/platform/secret/v1.js#L22)

___

### PlatformSecretListRequest

Ƭ **PlatformSecretListRequest**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `cursor?` | `string` |
| `meta?` | [`Record`]( https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type )\<`string`, `string`\> |
| `order?` | ``"desc"`` \| ``"asc"`` |
| `take?` | `number` |

#### Defined in

[platform/secret/v1.js:26](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/platform/secret/v1.js#L26)

___

### PlatformSecretListResponse

Ƭ **PlatformSecretListResponse**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `items` | [`PlatformSecretInstance`](platform_secret_v1.md#platformsecretinstance)[] |

#### Defined in

[platform/secret/v1.js:28](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/platform/secret/v1.js#L28)

___

### PlatformSecretListStreamItemType

Ƭ **PlatformSecretListStreamItemType**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `data` | [`PlatformSecretInstance`](platform_secret_v1.md#platformsecretinstance) |
| `type` | ``"item"`` |

#### Defined in

[platform/secret/v1.js:33](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/platform/secret/v1.js#L33)

___

### PlatformSecretListStreamType

Ƭ **PlatformSecretListStreamType**\<\>: [`PlatformSecretListStreamItemType`](platform_secret_v1.md#platformsecretliststreamitemtype)

#### Defined in

[platform/secret/v1.js:35](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/platform/secret/v1.js#L35)

___

### PlatformSecretOptions

Ƭ **PlatformSecretOptions**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `description?` | `string` |
| `meta?` | [`Record`]( https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type )\<`string`, `any`\> |
| `name?` | `string` |

#### Defined in

[platform/secret/v1.js:16](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/platform/secret/v1.js#L16)

___

### ResponsePromise

Ƭ **ResponsePromise**\<`T`, `U`\>: [`client`](client.md)

#### Type parameters

| Name |
| :------ |
| `T` |
| `U` |

#### Defined in

[platform/secret/v1.js:8](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/platform/secret/v1.js#L8)

## Functions

### listPlatformSecrets

▸ **listPlatformSecrets**(`client`, `request?`): [`ResponsePromise`](../classes/client.ResponsePromise.md)\<[`PlatformSecretListResponse`](platform_secret_v1.md#platformsecretlistresponse), [`PlatformSecretListStreamItemType`](platform_secret_v1.md#platformsecretliststreamitemtype)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`ChatBotKitClient`](../classes/client.ChatBotKitClient.md) |
| `request?` | [`PlatformSecretListRequest`](platform_secret_v1.md#platformsecretlistrequest) |

#### Returns

[`ResponsePromise`](../classes/client.ResponsePromise.md)\<[`PlatformSecretListResponse`](platform_secret_v1.md#platformsecretlistresponse), [`PlatformSecretListStreamItemType`](platform_secret_v1.md#platformsecretliststreamitemtype)\>

#### Defined in

[platform/secret/v1.js:41](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/platform/secret/v1.js#L41)
