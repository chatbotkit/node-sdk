[@chatbotkit/sdk](../README.md) / [Modules](../modules.md) / platform/ability/v1

# Module: platform/ability/v1

## Table of contents

### Type Aliases

- [ChatBotKitClient](platform_ability_v1.md#chatbotkitclient)
- [PlatformAbilityInstance](platform_ability_v1.md#platformabilityinstance)
- [PlatformAbilityListRequest](platform_ability_v1.md#platformabilitylistrequest)
- [PlatformAbilityListResponse](platform_ability_v1.md#platformabilitylistresponse)
- [PlatformAbilityListStreamType](platform_ability_v1.md#platformabilityliststreamtype)
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

Ƭ **PlatformAbilityInstance**\<\>: [`PlatformAbilityListResponse`](platform_ability_v1.md#platformabilitylistresponse)[``"items"``][`number`]

#### Defined in

[platform/ability/v1.js:21](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/platform/ability/v1.js#L21)

___

### PlatformAbilityListRequest

Ƭ **PlatformAbilityListRequest**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `cursor?` | `string` |
| `meta?` | [`Record`]( https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type )\<`string`, `string`\> |
| `order?` | ``"desc"`` \| ``"asc"`` |
| `take?` | `number` |

#### Defined in

[platform/ability/v1.js:17](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/platform/ability/v1.js#L17)

___

### PlatformAbilityListResponse

Ƭ **PlatformAbilityListResponse**\<\>: `operations`[``"listPlatformAbilities"``][``"responses"``][``"200"``][``"content"``][``"application/json"``]

#### Defined in

[platform/ability/v1.js:19](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/platform/ability/v1.js#L19)

___

### PlatformAbilityListStreamType

Ƭ **PlatformAbilityListStreamType**\<\>: `operations`[``"listPlatformAbilities"``][``"responses"``][``"200"``][``"content"``][``"application/jsonl"``]

#### Defined in

[platform/ability/v1.js:23](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/platform/ability/v1.js#L23)

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

▸ **listPlatformAbilities**(`client`, `request?`): [`ResponsePromise`](../classes/client.ResponsePromise.md)\<{}, {}\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`ChatBotKitClient`](../classes/client.ChatBotKitClient.md) |
| `request?` | [`PlatformAbilityListRequest`](platform_ability_v1.md#platformabilitylistrequest) |

#### Returns

[`ResponsePromise`](../classes/client.ResponsePromise.md)\<{}, {}\>

#### Defined in

[platform/ability/v1.js:29](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/platform/ability/v1.js#L29)
