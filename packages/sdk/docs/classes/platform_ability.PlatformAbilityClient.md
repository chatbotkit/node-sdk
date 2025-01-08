[@chatbotkit/sdk](../README.md) / [Modules](../modules.md) / [platform/ability](../modules/platform_ability.md) / PlatformAbilityClient

# Class: PlatformAbilityClient

[platform/ability](../modules/platform_ability.md).PlatformAbilityClient

Ability client.

## Hierarchy

- [`ChatBotKitClient`](client.ChatBotKitClient.md)

  ↳ **`PlatformAbilityClient`**

## Table of contents

### Constructors

- [constructor](platform_ability.PlatformAbilityClient.md#constructor)

### Methods

- [clientFetch](platform_ability.PlatformAbilityClient.md#clientfetch)
- [list](platform_ability.PlatformAbilityClient.md#list)

## Constructors

### constructor

• **new PlatformAbilityClient**(`options`): [`PlatformAbilityClient`](platform_ability.PlatformAbilityClient.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`ChatBotKitClientOptions`](../interfaces/client.ChatBotKitClientOptions.md) |

#### Returns

[`PlatformAbilityClient`](platform_ability.PlatformAbilityClient.md)

#### Overrides

[ChatBotKitClient](client.ChatBotKitClient.md).[constructor](client.ChatBotKitClient.md#constructor)

#### Defined in

[platform/ability/index.js:17](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/platform/ability/index.js#L17)

## Methods

### clientFetch

▸ **clientFetch**\<`T`, `U`\>(`path`, `options?`): [`ResponsePromise`](client.ResponsePromise.md)\<`T`, `U`\>

#### Type parameters

| Name |
| :------ |
| `T` |
| `U` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | `string` |
| `options?` | `Object` |
| `options.buffer?` | [`ArrayBuffer`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer ) |
| `options.endpoint?` | `string` |
| `options.external?` | `boolean` |
| `options.file?` | `Object` |
| `options.file.data` | `string` \| [`ArrayBuffer`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer ) |
| `options.file.name?` | `string` |
| `options.file.type?` | `string` |
| `options.headers?` | [`Record`]( https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type )\<`string`, `any`\> |
| `options.method?` | `string` |
| `options.query?` | [`Record`]( https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type )\<`string`, `any`\> |
| `options.record?` | [`Record`]( https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type )\<`string`, `any`\> |

#### Returns

[`ResponsePromise`](client.ResponsePromise.md)\<`T`, `U`\>

#### Inherited from

[ChatBotKitClient](client.ChatBotKitClient.md).[clientFetch](client.ChatBotKitClient.md#clientfetch)

#### Defined in

[client.js:222](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/client.js#L222)

___

### list

▸ **list**(`request?`): [`ResponsePromise`](client.ResponsePromise.md)\<[`PlatformAbilityListResponse`](../modules/platform_ability_v1.md#platformabilitylistresponse), [`PlatformAbilityListStreamItemType`](../modules/platform_ability_v1.md#platformabilityliststreamitemtype)\>

Retrieves a list of all platform abilities.

#### Parameters

| Name | Type |
| :------ | :------ |
| `request?` | [`PlatformAbilityListRequest`](../modules/platform_ability_v1.md#platformabilitylistrequest) |

#### Returns

[`ResponsePromise`](client.ResponsePromise.md)\<[`PlatformAbilityListResponse`](../modules/platform_ability_v1.md#platformabilitylistresponse), [`PlatformAbilityListStreamItemType`](../modules/platform_ability_v1.md#platformabilityliststreamitemtype)\>

#### Defined in

[platform/ability/index.js:27](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/platform/ability/index.js#L27)
