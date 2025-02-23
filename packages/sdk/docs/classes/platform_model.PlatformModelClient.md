[@chatbotkit/sdk](../README.md) / [Modules](../modules.md) / [platform/model](../modules/platform_model.md) / PlatformModelClient

# Class: PlatformModelClient

[platform/model](../modules/platform_model.md).PlatformModelClient

Model client.

## Hierarchy

- [`ChatBotKitClient`](client.ChatBotKitClient.md)

  ↳ **`PlatformModelClient`**

## Table of contents

### Constructors

- [constructor](platform_model.PlatformModelClient.md#constructor)

### Methods

- [clientFetch](platform_model.PlatformModelClient.md#clientfetch)
- [list](platform_model.PlatformModelClient.md#list)

## Constructors

### constructor

• **new PlatformModelClient**(`options`): [`PlatformModelClient`](platform_model.PlatformModelClient.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`ChatBotKitClientOptions`](../interfaces/client.ChatBotKitClientOptions.md) |

#### Returns

[`PlatformModelClient`](platform_model.PlatformModelClient.md)

#### Overrides

[ChatBotKitClient](client.ChatBotKitClient.md).[constructor](client.ChatBotKitClient.md#constructor)

#### Defined in

[platform/model/index.js:17](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/platform/model/index.js#L17)

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

[client.js:251](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/client.js#L251)

___

### list

▸ **list**(`request?`): [`ResponsePromise`](client.ResponsePromise.md)\<[`PlatformModelListResponse`](../modules/platform_model_v1.md#platformmodellistresponse), [`PlatformModelListStreamItemType`](../modules/platform_model_v1.md#platformmodelliststreamitemtype)\>

Retrieves a list of all platform models.

#### Parameters

| Name | Type |
| :------ | :------ |
| `request?` | [`PlatformModelListRequest`](../modules/platform_model_v1.md#platformmodellistrequest) |

#### Returns

[`ResponsePromise`](client.ResponsePromise.md)\<[`PlatformModelListResponse`](../modules/platform_model_v1.md#platformmodellistresponse), [`PlatformModelListStreamItemType`](../modules/platform_model_v1.md#platformmodelliststreamitemtype)\>

#### Defined in

[platform/model/index.js:27](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/platform/model/index.js#L27)
