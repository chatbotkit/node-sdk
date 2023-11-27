[@chatbotkit/sdk](../README.md) / [Modules](../modules.md) / bot/v1

# Module: bot/v1

## Table of contents

### Type Aliases

- [BotCreateRequest](bot_v1.md#botcreaterequest)
- [BotCreateResponse](bot_v1.md#botcreateresponse)
- [BotDeleteResponse](bot_v1.md#botdeleteresponse)
- [BotFetchResponse](bot_v1.md#botfetchresponse)
- [BotInstance](bot_v1.md#botinstance)
- [BotListRequest](bot_v1.md#botlistrequest)
- [BotListResponse](bot_v1.md#botlistresponse)
- [BotListStreamItemType](bot_v1.md#botliststreamitemtype)
- [BotListStreamType](bot_v1.md#botliststreamtype)
- [BotOptions](bot_v1.md#botoptions)
- [BotUpdateRequest](bot_v1.md#botupdaterequest)
- [BotUpdateResponse](bot_v1.md#botupdateresponse)
- [ChatBotKitClient](bot_v1.md#chatbotkitclient)
- [ResponsePromise](bot_v1.md#responsepromise)

### Functions

- [createBot](bot_v1.md#createbot)
- [deleteBot](bot_v1.md#deletebot)
- [fetchBot](bot_v1.md#fetchbot)
- [listBots](bot_v1.md#listbots)
- [updateBot](bot_v1.md#updatebot)

## Type Aliases

### BotCreateRequest

Ƭ **BotCreateRequest**\<\>: [`BotOptions`](bot_v1.md#botoptions) & \{ `model?`: [`model/v1`](model_v1.md)  }

#### Defined in

[bot/v1.js:78](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/bot/v1.js#L78)

___

### BotCreateResponse

Ƭ **BotCreateResponse**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Defined in

[bot/v1.js:82](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/bot/v1.js#L82)

___

### BotDeleteResponse

Ƭ **BotDeleteResponse**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Defined in

[bot/v1.js:137](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/bot/v1.js#L137)

___

### BotFetchResponse

Ƭ **BotFetchResponse**\<\>: [`BotInstance`](bot_v1.md#botinstance) & {}

#### Defined in

[bot/v1.js:60](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/bot/v1.js#L60)

___

### BotInstance

Ƭ **BotInstance**\<\>: [`BotOptions`](bot_v1.md#botoptions) & \{ `createdAt`: `number` ; `id`: `string` ; `updatedAt`: `number`  }

#### Defined in

[bot/v1.js:28](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/bot/v1.js#L28)

___

### BotListRequest

Ƭ **BotListRequest**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `cursor?` | `string` |
| `meta?` | `Record`\<`string`, `string`\> |
| `take?` | `number` |

#### Defined in

[bot/v1.js:32](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/bot/v1.js#L32)

___

### BotListResponse

Ƭ **BotListResponse**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `items` | [`BotInstance`](bot_v1.md#botinstance)[] |

#### Defined in

[bot/v1.js:34](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/bot/v1.js#L34)

___

### BotListStreamItemType

Ƭ **BotListStreamItemType**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `data` | [`BotInstance`](bot_v1.md#botinstance) |
| `type` | ``"item"`` |

#### Defined in

[bot/v1.js:39](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/bot/v1.js#L39)

___

### BotListStreamType

Ƭ **BotListStreamType**\<\>: [`BotListStreamItemType`](bot_v1.md#botliststreamitemtype)

#### Defined in

[bot/v1.js:41](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/bot/v1.js#L41)

___

### BotOptions

Ƭ **BotOptions**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `backstory?` | `string` |
| `datasetId?` | `string` |
| `description?` | `string` |
| `meta?` | `Record`\<`string`, `any`\> |
| `model?` | `string` |
| `name?` | `string` |
| `skillsetId?` | `string` |

#### Defined in

[bot/v1.js:22](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/bot/v1.js#L22)

___

### BotUpdateRequest

Ƭ **BotUpdateRequest**\<\>: [`BotOptions`](bot_v1.md#botoptions) & \{ `model?`: [`model/v1`](model_v1.md)  }

#### Defined in

[bot/v1.js:107](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/bot/v1.js#L107)

___

### BotUpdateResponse

Ƭ **BotUpdateResponse**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Defined in

[bot/v1.js:111](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/bot/v1.js#L111)

___

### ChatBotKitClient

Ƭ **ChatBotKitClient**\<\>: [`client`](client.md)

#### Defined in

[bot/v1.js:4](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/bot/v1.js#L4)

___

### ResponsePromise

Ƭ **ResponsePromise**\<`T`, `U`\>: [`client`](client.md)

#### Type parameters

| Name |
| :------ |
| `T` |
| `U` |

#### Defined in

[bot/v1.js:10](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/bot/v1.js#L10)

## Functions

### createBot

▸ **createBot**(`client`, `request`): `Promise`\<[`BotCreateResponse`](bot_v1.md#botcreateresponse)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`ChatBotKitClient`](../classes/client.ChatBotKitClient.md) |
| `request` | [`BotCreateRequest`](bot_v1.md#botcreaterequest) |

#### Returns

`Promise`\<[`BotCreateResponse`](bot_v1.md#botcreateresponse)\>

#### Defined in

[bot/v1.js:88](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/bot/v1.js#L88)

___

### deleteBot

▸ **deleteBot**(`client`, `botId`): `Promise`\<[`BotDeleteResponse`](bot_v1.md#botdeleteresponse)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`ChatBotKitClient`](../classes/client.ChatBotKitClient.md) |
| `botId` | `string` |

#### Returns

`Promise`\<[`BotDeleteResponse`](bot_v1.md#botdeleteresponse)\>

#### Defined in

[bot/v1.js:143](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/bot/v1.js#L143)

___

### fetchBot

▸ **fetchBot**(`client`, `botId`): `Promise`\<[`BotFetchResponse`](bot_v1.md#botfetchresponse)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`ChatBotKitClient`](../classes/client.ChatBotKitClient.md) |
| `botId` | `string` |

#### Returns

`Promise`\<[`BotFetchResponse`](bot_v1.md#botfetchresponse)\>

#### Defined in

[bot/v1.js:66](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/bot/v1.js#L66)

___

### listBots

▸ **listBots**(`client`, `request?`): [`ResponsePromise`](../classes/client.ResponsePromise.md)\<[`BotListResponse`](bot_v1.md#botlistresponse), [`BotListStreamItemType`](bot_v1.md#botliststreamitemtype)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`ChatBotKitClient`](../classes/client.ChatBotKitClient.md) |
| `request?` | [`BotListRequest`](bot_v1.md#botlistrequest) |

#### Returns

[`ResponsePromise`](../classes/client.ResponsePromise.md)\<[`BotListResponse`](bot_v1.md#botlistresponse), [`BotListStreamItemType`](bot_v1.md#botliststreamitemtype)\>

#### Defined in

[bot/v1.js:47](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/bot/v1.js#L47)

___

### updateBot

▸ **updateBot**(`client`, `botId`, `request`): `Promise`\<[`BotUpdateResponse`](bot_v1.md#botupdateresponse)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`ChatBotKitClient`](../classes/client.ChatBotKitClient.md) |
| `botId` | `string` |
| `request` | [`BotUpdateRequest`](bot_v1.md#botupdaterequest) |

#### Returns

`Promise`\<[`BotUpdateResponse`](bot_v1.md#botupdateresponse)\>

#### Defined in

[bot/v1.js:118](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/bot/v1.js#L118)
