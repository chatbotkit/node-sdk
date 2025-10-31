[@chatbotkit/sdk](../README.md) / [Modules](../modules.md) / [platform](../modules/platform.md) / PlatformClient

# Class: PlatformClient

[platform](../modules/platform.md).PlatformClient

Platform client.

## Hierarchy

- [`ChatBotKitClient`](client.ChatBotKitClient.md)

  ↳ **`PlatformClient`**

## Table of contents

### Constructors

- [constructor](platform.PlatformClient.md#constructor)

### Properties

- [ability](platform.PlatformClient.md#ability)
- [action](platform.PlatformClient.md#action)
- [example](platform.PlatformClient.md#example)
- [model](platform.PlatformClient.md#model)
- [secrets](platform.PlatformClient.md#secrets)

### Methods

- [clientFetch](platform.PlatformClient.md#clientfetch)

## Constructors

### constructor

• **new PlatformClient**(`options`): [`PlatformClient`](platform.PlatformClient.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`ChatBotKitClientOptions`](../interfaces/client.ChatBotKitClientOptions.md) |

#### Returns

[`PlatformClient`](platform.PlatformClient.md)

#### Overrides

[ChatBotKitClient](client.ChatBotKitClient.md).[constructor](client.ChatBotKitClient.md#constructor)

#### Defined in

[platform/index.js:15](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/platform/index.js#L15)

## Properties

### ability

• **ability**: [`PlatformAbilityClient`](platform_ability.PlatformAbilityClient.md)

#### Defined in

[platform/index.js:26](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/platform/index.js#L26)

___

### action

• **action**: [`PlatformActionClient`](platform_action.PlatformActionClient.md)

#### Defined in

[platform/index.js:31](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/platform/index.js#L31)

___

### example

• **example**: [`PlatformExampleClient`](platform_example.PlatformExampleClient.md)

#### Defined in

[platform/index.js:42](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/platform/index.js#L42)

___

### model

• **model**: [`PlatformModelClient`](platform_model.PlatformModelClient.md)

#### Defined in

[platform/index.js:21](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/platform/index.js#L21)

___

### secrets

• **secrets**: [`PlatformSecretClient`](platform_secret.PlatformSecretClient.md)

**`Note`**

overlapping name with the `secret` property

#### Defined in

[platform/index.js:37](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/platform/index.js#L37)

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
| `options.fetchFn?` | [`FetchFunction`](../modules/client.md#fetchfunction) |
| `options.file?` | `Object` |
| `options.file.data` | `string` \| [`ArrayBuffer`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer ) |
| `options.file.name?` | `string` |
| `options.file.type?` | `string` |
| `options.headers?` | [`Record`]( https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type )\<`string`, `any`\> |
| `options.method?` | `string` |
| `options.query?` | [`Record`]( https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type )\<`string`, `any`\> |
| `options.record?` | [`Record`]( https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type )\<`string`, `any`\> |
| `options.retries?` | `number` |
| `options.retryDelay?` | `number` |
| `options.retryTimeout?` | `boolean` |
| `options.timeout?` | `number` |

#### Returns

[`ResponsePromise`](client.ResponsePromise.md)\<`T`, `U`\>

#### Inherited from

[ChatBotKitClient](client.ChatBotKitClient.md).[clientFetch](client.ChatBotKitClient.md#clientfetch)

#### Defined in

[client.js:351](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/client.js#L351)
