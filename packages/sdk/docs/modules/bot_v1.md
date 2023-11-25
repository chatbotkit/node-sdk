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

Ƭ **BotCreateRequest**\<\>: [`BotOptions`](bot_v1.md#botoptions) & {}

#### Defined in

[bot/v1.js:75](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/bot/v1.js#L75)

___

### BotCreateResponse

Ƭ **BotCreateResponse**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Defined in

[bot/v1.js:79](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/bot/v1.js#L79)

___

### BotDeleteResponse

Ƭ **BotDeleteResponse**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Defined in

[bot/v1.js:125](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/bot/v1.js#L125)

___

### BotFetchResponse

Ƭ **BotFetchResponse**\<\>: [`BotInstance`](bot_v1.md#botinstance) & {}

#### Defined in

[bot/v1.js:58](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/bot/v1.js#L58)

___

### BotInstance

Ƭ **BotInstance**\<\>: [`BotOptions`](bot_v1.md#botoptions) & \{ `createdAt`: `number` ; `id`: `string` ; `updatedAt`: `number`  }

#### Defined in

[bot/v1.js:26](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/bot/v1.js#L26)

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

[bot/v1.js:30](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/bot/v1.js#L30)

___

### BotListResponse

Ƭ **BotListResponse**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `items` | [`BotInstance`](bot_v1.md#botinstance)[] |

#### Defined in

[bot/v1.js:32](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/bot/v1.js#L32)

___

### BotListStreamItemType

Ƭ **BotListStreamItemType**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `data` | [`BotInstance`](bot_v1.md#botinstance) |
| `type` | ``"item"`` |

#### Defined in

[bot/v1.js:37](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/bot/v1.js#L37)

___

### BotListStreamType

Ƭ **BotListStreamType**\<\>: [`BotListStreamItemType`](bot_v1.md#botliststreamitemtype)

#### Defined in

[bot/v1.js:39](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/bot/v1.js#L39)

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

[bot/v1.js:20](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/bot/v1.js#L20)

___

### BotUpdateRequest

Ƭ **BotUpdateRequest**\<\>: [`BotOptions`](bot_v1.md#botoptions) & {}

#### Defined in

[bot/v1.js:99](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/bot/v1.js#L99)

___

### BotUpdateResponse

Ƭ **BotUpdateResponse**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Defined in

[bot/v1.js:103](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/bot/v1.js#L103)

___

### ChatBotKitClient

Ƭ **ChatBotKitClient**\<\>: [`client`](client.md)

#### Defined in

[bot/v1.js:2](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/bot/v1.js#L2)

___

### ResponsePromise

Ƭ **ResponsePromise**\<`T`, `U`\>: [`client`](client.md)

#### Type parameters

| Name |
| :------ |
| `T` |
| `U` |

#### Defined in

[bot/v1.js:8](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/bot/v1.js#L8)

## Functions

### createBot

▸ **createBot**(`client`, `request`): `Promise`\<[`BotCreateResponse`](bot_v1.md#botcreateresponse)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`ChatBotKitClient`](../classes/client.ChatBotKitClient.md) |
| `request` | [`BotOptions`](bot_v1.md#botoptions) |

#### Returns

`Promise`\<[`BotCreateResponse`](bot_v1.md#botcreateresponse)\>

#### Defined in

[bot/v1.js:85](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/bot/v1.js#L85)

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

[bot/v1.js:131](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/bot/v1.js#L131)

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

[bot/v1.js:64](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/bot/v1.js#L64)

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

[bot/v1.js:45](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/bot/v1.js#L45)

___

### updateBot

▸ **updateBot**(`client`, `botId`, `request`): `Promise`\<[`BotUpdateResponse`](bot_v1.md#botupdateresponse)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`ChatBotKitClient`](../classes/client.ChatBotKitClient.md) |
| `botId` | `string` |
| `request` | [`BotOptions`](bot_v1.md#botoptions) |

#### Returns

`Promise`\<[`BotUpdateResponse`](bot_v1.md#botupdateresponse)\>

#### Defined in

[bot/v1.js:110](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/bot/v1.js#L110)
