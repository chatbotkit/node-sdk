[@chatbotkit/sdk](../README.md) / [Modules](../modules.md) / platform/ability/v1

# Module: platform/ability/v1

## Table of contents

### Type Aliases

- [ChatBotKitClient](platform_ability_v1.md#chatbotkitclient)
- [PlatformAbilityInstance](platform_ability_v1.md#platformabilityinstance)
- [PlatformAbilityListRequest](platform_ability_v1.md#platformabilitylistrequest)
- [PlatformAbilityListResponse](platform_ability_v1.md#platformabilitylistresponse)
- [PlatformAbilityListStreamItemType](platform_ability_v1.md#platformabilityliststreamitemtype)
- [PlatformAbilityListStreamType](platform_ability_v1.md#platformabilityliststreamtype)
- [PlatformAbilityOptions](platform_ability_v1.md#platformabilityoptions)
- [ResponsePromise](platform_ability_v1.md#responsepromise)

### Functions

- [listPlatformAbilities](platform_ability_v1.md#listplatformabilities)

## Type Aliases

### ChatBotKitClient

Ƭ **ChatBotKitClient**\<\>: [`client`](client.md)

#### Defined in

[platform/ability/v1.js:2](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/platform/ability/v1.js#L2)

___

### PlatformAbilityInstance

Ƭ **PlatformAbilityInstance**\<\>: [`PlatformAbilityOptions`](platform_ability_v1.md#platformabilityoptions) & \{ `createdAt`: `number` ; `id`: `string` ; `updatedAt`: `number`  }

#### Defined in

[platform/ability/v1.js:22](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/platform/ability/v1.js#L22)

___

### PlatformAbilityListRequest

Ƭ **PlatformAbilityListRequest**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `cursor?` | `string` |
| `order?` | ``"desc"`` \| ``"asc"`` |
| `take?` | `number` |

#### Defined in

[platform/ability/v1.js:30](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/platform/ability/v1.js#L30)

___

### PlatformAbilityListResponse

Ƭ **PlatformAbilityListResponse**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `items` | [`PlatformAbilityInstance`](platform_ability_v1.md#platformabilityinstance)[] |

#### Defined in

[platform/ability/v1.js:32](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/platform/ability/v1.js#L32)

___

### PlatformAbilityListStreamItemType

Ƭ **PlatformAbilityListStreamItemType**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `data` | [`PlatformAbilityInstance`](platform_ability_v1.md#platformabilityinstance) |
| `type` | ``"item"`` |

#### Defined in

[platform/ability/v1.js:37](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/platform/ability/v1.js#L37)

___

### PlatformAbilityListStreamType

Ƭ **PlatformAbilityListStreamType**\<\>: [`PlatformAbilityListStreamItemType`](platform_ability_v1.md#platformabilityliststreamitemtype)

#### Defined in

[platform/ability/v1.js:39](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/platform/ability/v1.js#L39)

___

### PlatformAbilityOptions

Ƭ **PlatformAbilityOptions**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `description?` | `string` |
| `meta?` | [`Record`]( https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type )\<`string`, `any`\> |
| `name?` | `string` |

#### Defined in

[platform/ability/v1.js:16](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/platform/ability/v1.js#L16)

___

### ResponsePromise

Ƭ **ResponsePromise**\<`T`, `U`\>: [`client`](client.md)

#### Type parameters

| Name |
| :------ |
| `T` |
| `U` |

#### Defined in

[platform/ability/v1.js:8](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/platform/ability/v1.js#L8)

## Functions

### listPlatformAbilities

▸ **listPlatformAbilities**(`client`, `request?`): [`ResponsePromise`](../classes/client.ResponsePromise.md)\<[`PlatformAbilityListResponse`](platform_ability_v1.md#platformabilitylistresponse), [`PlatformAbilityListStreamItemType`](platform_ability_v1.md#platformabilityliststreamitemtype)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`ChatBotKitClient`](../classes/client.ChatBotKitClient.md) |
| `request?` | [`PlatformAbilityListRequest`](platform_ability_v1.md#platformabilitylistrequest) |

#### Returns

[`ResponsePromise`](../classes/client.ResponsePromise.md)\<[`PlatformAbilityListResponse`](platform_ability_v1.md#platformabilitylistresponse), [`PlatformAbilityListStreamItemType`](platform_ability_v1.md#platformabilityliststreamitemtype)\>

#### Defined in

[platform/ability/v1.js:45](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/platform/ability/v1.js#L45)
