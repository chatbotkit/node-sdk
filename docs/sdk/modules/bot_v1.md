[@chatbotkit/sdk](../README.md) / [Modules](../modules.md) / bot/v1

# Module: bot/v1

## Table of contents

### Type Aliases

- [BotCreateRequest](bot_v1.md#botcreaterequest)
- [BotCreateResponse](bot_v1.md#botcreateresponse)
- [BotDeleteResponse](bot_v1.md#botdeleteresponse)
- [BotFetchResponse](bot_v1.md#botfetchresponse)
- [BotListResponse](bot_v1.md#botlistresponse)
- [BotUpdateRequest](bot_v1.md#botupdaterequest)
- [BotUpdateResponse](bot_v1.md#botupdateresponse)
- [ChatBotKitClient](bot_v1.md#chatbotkitclient)

### Functions

- [botCreate](bot_v1.md#botcreate)
- [botDelete](bot_v1.md#botdelete)
- [botFetch](bot_v1.md#botfetch)
- [botList](bot_v1.md#botlist)
- [botUpdate](bot_v1.md#botupdate)

## Type Aliases

### BotCreateRequest

Ƭ **BotCreateRequest**<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `backstory?` | `string` |
| `datasetId?` | `string` |
| `model?` | `string` |
| `moderation?` | `boolean` |
| `privacy?` | `boolean` |
| `skillsetId?` | `string` |

#### Defined in

[bot/v1.js:44](https://github.com/chatbotkit/node-sdk/blob/f805d5d/packages/sdk/src/bot/v1.js#L44)

___

### BotCreateResponse

Ƭ **BotCreateResponse**<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Defined in

[bot/v1.js:48](https://github.com/chatbotkit/node-sdk/blob/f805d5d/packages/sdk/src/bot/v1.js#L48)

___

### BotDeleteResponse

Ƭ **BotDeleteResponse**<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Defined in

[bot/v1.js:88](https://github.com/chatbotkit/node-sdk/blob/f805d5d/packages/sdk/src/bot/v1.js#L88)

___

### BotFetchResponse

Ƭ **BotFetchResponse**<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `backstory?` | `string` |
| `createdAt` | `number` |
| `datasetId?` | `string` |
| `id` | `string` |
| `model?` | `string` |
| `skillsetId?` | `string` |
| `updatedAt` | `number` |

#### Defined in

[bot/v1.js:26](https://github.com/chatbotkit/node-sdk/blob/f805d5d/packages/sdk/src/bot/v1.js#L26)

___

### BotListResponse

Ƭ **BotListResponse**<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Defined in

[bot/v1.js:8](https://github.com/chatbotkit/node-sdk/blob/f805d5d/packages/sdk/src/bot/v1.js#L8)

___

### BotUpdateRequest

Ƭ **BotUpdateRequest**<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `backstory?` | `string` |
| `datasetId?` | `string` |
| `model?` | `string` |
| `moderation?` | `boolean` |
| `privacy?` | `boolean` |
| `skillsetId?` | `string` |

#### Defined in

[bot/v1.js:68](https://github.com/chatbotkit/node-sdk/blob/f805d5d/packages/sdk/src/bot/v1.js#L68)

___

### BotUpdateResponse

Ƭ **BotUpdateResponse**<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Defined in

[bot/v1.js:72](https://github.com/chatbotkit/node-sdk/blob/f805d5d/packages/sdk/src/bot/v1.js#L72)

___

### ChatBotKitClient

Ƭ **ChatBotKitClient**<\>: `ChatBotKitClient`

#### Defined in

[bot/v1.js:2](https://github.com/chatbotkit/node-sdk/blob/f805d5d/packages/sdk/src/bot/v1.js#L2)

## Functions

### botCreate

▸ **botCreate**(`client`, `request`): `Promise`<[`BotCreateResponse`](bot_v1.md#botcreateresponse)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | `ChatBotKitClient` |
| `request` | [`BotCreateRequest`](bot_v1.md#botcreaterequest) |

#### Returns

`Promise`<[`BotCreateResponse`](bot_v1.md#botcreateresponse)\>

#### Defined in

[bot/v1.js:54](https://github.com/chatbotkit/node-sdk/blob/f805d5d/packages/sdk/src/bot/v1.js#L54)

___

### botDelete

▸ **botDelete**(`client`, `botId`): `Promise`<[`BotDeleteResponse`](bot_v1.md#botdeleteresponse)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | `ChatBotKitClient` |
| `botId` | `string` |

#### Returns

`Promise`<[`BotDeleteResponse`](bot_v1.md#botdeleteresponse)\>

#### Defined in

[bot/v1.js:94](https://github.com/chatbotkit/node-sdk/blob/f805d5d/packages/sdk/src/bot/v1.js#L94)

___

### botFetch

▸ **botFetch**(`client`, `botId`): `Promise`<[`BotFetchResponse`](bot_v1.md#botfetchresponse)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | `ChatBotKitClient` |
| `botId` | `string` |

#### Returns

`Promise`<[`BotFetchResponse`](bot_v1.md#botfetchresponse)\>

#### Defined in

[bot/v1.js:32](https://github.com/chatbotkit/node-sdk/blob/f805d5d/packages/sdk/src/bot/v1.js#L32)

___

### botList

▸ **botList**(`client`): `Promise`<[`BotListResponse`](bot_v1.md#botlistresponse)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | `ChatBotKitClient` |

#### Returns

`Promise`<[`BotListResponse`](bot_v1.md#botlistresponse)\>

#### Defined in

[bot/v1.js:13](https://github.com/chatbotkit/node-sdk/blob/f805d5d/packages/sdk/src/bot/v1.js#L13)

___

### botUpdate

▸ **botUpdate**(`client`, `botId`, `request`): `Promise`<[`BotUpdateResponse`](bot_v1.md#botupdateresponse)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | `ChatBotKitClient` |
| `botId` | `string` |
| `request` | [`BotUpdateRequest`](bot_v1.md#botupdaterequest) |

#### Returns

`Promise`<[`BotUpdateResponse`](bot_v1.md#botupdateresponse)\>

#### Defined in

[bot/v1.js:79](https://github.com/chatbotkit/node-sdk/blob/f805d5d/packages/sdk/src/bot/v1.js#L79)
