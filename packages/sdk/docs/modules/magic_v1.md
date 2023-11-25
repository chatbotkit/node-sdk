[@chatbotkit/sdk](../README.md) / [Modules](../modules.md) / magic/v1

# Module: magic/v1

## Table of contents

### Type Aliases

- [ChatBotKitClient](magic_v1.md#chatbotkitclient)
- [MagicGenerateRequest](magic_v1.md#magicgeneraterequest)
- [MagicGenerateResponse](magic_v1.md#magicgenerateresponse)
- [MagicGenerateStreamResult](magic_v1.md#magicgeneratestreamresult)
- [MagicGenerateStreamType](magic_v1.md#magicgeneratestreamtype)
- [ResponsePromise](magic_v1.md#responsepromise)

### Functions

- [generateMagic](magic_v1.md#generatemagic)

## Type Aliases

### ChatBotKitClient

Ƭ **ChatBotKitClient**\<\>: [`client`](client.md)

#### Defined in

[magic/v1.js:2](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/magic/v1.js#L2)

___

### MagicGenerateRequest

Ƭ **MagicGenerateRequest**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `text` | `string` |

#### Defined in

[magic/v1.js:14](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/magic/v1.js#L14)

___

### MagicGenerateResponse

Ƭ **MagicGenerateResponse**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `text` | `string` |
| `usage` | \{ `token`: `number`  } |
| `usage.token` | `number` |

#### Defined in

[magic/v1.js:19](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/magic/v1.js#L19)

___

### MagicGenerateStreamResult

Ƭ **MagicGenerateStreamResult**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `data` | [`MagicGenerateResponse`](magic_v1.md#magicgenerateresponse) |
| `type` | ``"result"`` |

#### Defined in

[magic/v1.js:24](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/magic/v1.js#L24)

___

### MagicGenerateStreamType

Ƭ **MagicGenerateStreamType**\<\>: [`MagicGenerateStreamResult`](magic_v1.md#magicgeneratestreamresult)

#### Defined in

[magic/v1.js:26](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/magic/v1.js#L26)

___

### ResponsePromise

Ƭ **ResponsePromise**\<`T`, `U`\>: [`client`](client.md)

#### Type parameters

| Name |
| :------ |
| `T` |
| `U` |

#### Defined in

[magic/v1.js:8](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/magic/v1.js#L8)

## Functions

### generateMagic

▸ **generateMagic**(`client`, `magicId`, `request`): [`ResponsePromise`](../classes/client.ResponsePromise.md)\<[`MagicGenerateResponse`](magic_v1.md#magicgenerateresponse), [`MagicGenerateStreamResult`](magic_v1.md#magicgeneratestreamresult)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`ChatBotKitClient`](../classes/client.ChatBotKitClient.md) |
| `magicId` | `string` |
| `request` | [`MagicGenerateRequest`](magic_v1.md#magicgeneraterequest) |

#### Returns

[`ResponsePromise`](../classes/client.ResponsePromise.md)\<[`MagicGenerateResponse`](magic_v1.md#magicgenerateresponse), [`MagicGenerateStreamResult`](magic_v1.md#magicgeneratestreamresult)\>

#### Defined in

[magic/v1.js:33](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/magic/v1.js#L33)
