[@chatbotkit/sdk](../README.md) / [Modules](../modules.md) / [magic](../modules/magic.md) / MagicClient

# Class: MagicClient

[magic](../modules/magic.md).MagicClient

**`Template`**

**`Template`**

## Hierarchy

- [`ChatBotKitClient`](client.ChatBotKitClient.md)

  ↳ **`MagicClient`**

## Table of contents

### Constructors

- [constructor](magic.MagicClient.md#constructor)

### Properties

- [endpoints](magic.MagicClient.md#endpoints)
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
| `options` | [`ChatBotKitClientOptions`](../modules/client.md#chatbotkitclientoptions) |

#### Returns

[`MagicClient`](magic.MagicClient.md)

#### Overrides

[ChatBotKitClient](client.ChatBotKitClient.md).[constructor](client.ChatBotKitClient.md#constructor)

#### Defined in

[magic/index.js:14](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/magic/index.js#L14)

## Properties

### endpoints

• **endpoints**: `Record`\<`string`, `string`\>

#### Inherited from

[ChatBotKitClient](client.ChatBotKitClient.md).[endpoints](client.ChatBotKitClient.md#endpoints)

#### Defined in

[client.js:201](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/client.js#L201)

___

### secret

• **secret**: `string`

#### Inherited from

[ChatBotKitClient](client.ChatBotKitClient.md).[secret](client.ChatBotKitClient.md#secret)

#### Defined in

[client.js:189](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/client.js#L189)

___

### url

• **url**: `URL`

#### Inherited from

[ChatBotKitClient](client.ChatBotKitClient.md).[url](client.ChatBotKitClient.md#url)

#### Defined in

[client.js:191](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/client.js#L191)

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
| `options.data?` | `Record`\<`string`, `any`\> |
| `options.file?` | `Object` |
| `options.file.data` | `string` \| `ArrayBuffer` |
| `options.file.name?` | `string` |
| `options.file.type?` | `string` |
| `options.query?` | `Record`\<`string`, `any`\> |

#### Returns

[`ResponsePromise`](client.ResponsePromise.md)\<`T`, `U`\>

#### Inherited from

[ChatBotKitClient](client.ChatBotKitClient.md).[clientFetch](client.ChatBotKitClient.md#clientfetch)

#### Defined in

[client.js:211](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/client.js#L211)

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

[magic/index.js:25](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/magic/index.js#L25)
