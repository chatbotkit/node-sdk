[@chatbotkit/sdk](../README.md) / [Modules](../modules.md) / [magic](../modules/magic.md) / MagicClient

# Class: MagicClient

[magic](../modules/magic.md).MagicClient

Magic client.

## Hierarchy

- [`ChatBotKitClient`](client.ChatBotKitClient.md)

  ↳ **`MagicClient`**

## Table of contents

### Constructors

- [constructor](magic.MagicClient.md#constructor)

### Methods

- [clientFetch](magic.MagicClient.md#clientfetch)
- [generate](magic.MagicClient.md#generate)

## Constructors

### constructor

• **new MagicClient**(`options`): [`MagicClient`](magic.MagicClient.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`ChatBotKitClientOptions`](../interfaces/client.ChatBotKitClientOptions.md) |

#### Returns

[`MagicClient`](magic.MagicClient.md)

#### Overrides

[ChatBotKitClient](client.ChatBotKitClient.md).[constructor](client.ChatBotKitClient.md#constructor)

#### Defined in

[magic/index.js:17](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/magic/index.js#L17)

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

### generate

▸ **generate**(`magicId`, `request`): [`ResponsePromise`](client.ResponsePromise.md)\<[`MagicGenerateResponse`](../modules/magic_v1.md#magicgenerateresponse), [`MagicGenerateStreamResult`](../modules/magic_v1.md#magicgeneratestreamresult)\>

Generates magic.

#### Parameters

| Name | Type |
| :------ | :------ |
| `magicId` | `string` |
| `request` | [`MagicGenerateRequest`](../modules/magic_v1.md#magicgeneraterequest) |

#### Returns

[`ResponsePromise`](client.ResponsePromise.md)\<[`MagicGenerateResponse`](../modules/magic_v1.md#magicgenerateresponse), [`MagicGenerateStreamResult`](../modules/magic_v1.md#magicgeneratestreamresult)\>

#### Defined in

[magic/index.js:28](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/magic/index.js#L28)
