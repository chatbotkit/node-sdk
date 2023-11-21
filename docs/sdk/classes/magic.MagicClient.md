[@chatbotkit/sdk](../README.md) / [Modules](../modules.md) / [magic](../modules/magic.md) / MagicClient

# Class: MagicClient

[magic](../modules/magic.md).MagicClient

**`Template`**

**`Template`**

## Hierarchy

- `ChatBotKitClient`

  ↳ **`MagicClient`**

## Table of contents

### Constructors

- [constructor](magic.MagicClient.md#constructor)

### Properties

- [secret](magic.MagicClient.md#secret)
- [url](magic.MagicClient.md#url)

### Methods

- [clientFetch](magic.MagicClient.md#clientfetch)
- [generate](magic.MagicClient.md#generate)

## Constructors

### constructor

• **new MagicClient**(`options`): [`MagicClient`](magic.MagicClient.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `ChatBotKitClientOptions` |

#### Returns

[`MagicClient`](magic.MagicClient.md)

#### Overrides

ChatBotKitClient.constructor

#### Defined in

[magic/index.js:14](https://github.com/chatbotkit/node-sdk/blob/d5a6097/packages/sdk/src/magic/index.js#L14)

## Properties

### secret

• **secret**: `string`

#### Inherited from

ChatBotKitClient.secret

#### Defined in

[client.js:187](https://github.com/chatbotkit/node-sdk/blob/d5a6097/packages/sdk/src/client.js#L187)

___

### url

• **url**: `URL`

#### Inherited from

ChatBotKitClient.url

#### Defined in

[client.js:189](https://github.com/chatbotkit/node-sdk/blob/d5a6097/packages/sdk/src/client.js#L189)

## Methods

### clientFetch

▸ **clientFetch**\<`T`, `U`\>(`path`, `options?`): `ResponsePromise`\<`T`, `U`\>

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
| `options.data?` | `Record`\<`string`, `any`\> |
| `options.file?` | `Object` |
| `options.file.data` | `string` \| `ArrayBuffer` |
| `options.file.name?` | `string` |
| `options.file.type?` | `string` |
| `options.query?` | `Record`\<`string`, `any`\> |

#### Returns

`ResponsePromise`\<`T`, `U`\>

#### Inherited from

ChatBotKitClient.clientFetch

#### Defined in

[client.js:206](https://github.com/chatbotkit/node-sdk/blob/d5a6097/packages/sdk/src/client.js#L206)

___

### generate

▸ **generate**(`magicId`, `request`): `ResponsePromise`\<[`MagicGenerateResponse`](../modules/magic_v1.md#magicgenerateresponse), [`MagicGenerateStreamResult`](../modules/magic_v1.md#magicgeneratestreamresult)\>

Generates magic.

#### Parameters

| Name | Type |
| :------ | :------ |
| `magicId` | `string` |
| `request` | [`MagicGenerateRequest`](../modules/magic_v1.md#magicgeneraterequest) |

#### Returns

`ResponsePromise`\<[`MagicGenerateResponse`](../modules/magic_v1.md#magicgenerateresponse), [`MagicGenerateStreamResult`](../modules/magic_v1.md#magicgeneratestreamresult)\>

#### Defined in

[magic/index.js:25](https://github.com/chatbotkit/node-sdk/blob/d5a6097/packages/sdk/src/magic/index.js#L25)
