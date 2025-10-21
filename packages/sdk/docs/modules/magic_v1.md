[@chatbotkit/sdk](../README.md) / [Modules](../modules.md) / magic/v1

# Module: magic/v1

## Table of contents

### Type Aliases

- [ChatBotKitClient](magic_v1.md#chatbotkitclient)
- [MagicGenerateRequest](magic_v1.md#magicgeneraterequest)
- [MagicGenerateResponse](magic_v1.md#magicgenerateresponse)
- [MagicGenerateStreamType](magic_v1.md#magicgeneratestreamtype)
- [ResponsePromise](magic_v1.md#responsepromise)

### Functions

- [generateMagic](magic_v1.md#generatemagic)

## Type Aliases

### ChatBotKitClient

Ƭ **ChatBotKitClient**\<\>: [`client`](client.md)

#### Defined in

[magic/v1.js:4](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/magic/v1.js#L4)

___

### MagicGenerateRequest

Ƭ **MagicGenerateRequest**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `text` | `string` |

#### Defined in

[magic/v1.js:16](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/magic/v1.js#L16)

___

### MagicGenerateResponse

Ƭ **MagicGenerateResponse**\<\>: `operations`[``"generateMagicFromPrompt"``][``"responses"``][``"200"``][``"content"``][``"application/json"``]

#### Defined in

[magic/v1.js:18](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/magic/v1.js#L18)

___

### MagicGenerateStreamType

Ƭ **MagicGenerateStreamType**\<\>: `operations`[``"generateMagicFromPrompt"``][``"responses"``][``"200"``][``"content"``][``"application/jsonl"``]

#### Defined in

[magic/v1.js:20](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/magic/v1.js#L20)

___

### ResponsePromise

Ƭ **ResponsePromise**\<`T`, `U`\>: [`client`](client.md)

#### Type parameters

| Name |
| :------ |
| `T` |
| `U` |

#### Defined in

[magic/v1.js:10](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/magic/v1.js#L10)

## Functions

### generateMagic

▸ **generateMagic**(`client`, `magicId`, `request`): [`ResponsePromise`](../classes/client.ResponsePromise.md)\<{}, {}\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`ChatBotKitClient`](../classes/client.ChatBotKitClient.md) |
| `magicId` | `string` |
| `request` | [`MagicGenerateRequest`](magic_v1.md#magicgeneraterequest) |

#### Returns

[`ResponsePromise`](../classes/client.ResponsePromise.md)\<{}, {}\>

#### Defined in

[magic/v1.js:27](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/magic/v1.js#L27)
