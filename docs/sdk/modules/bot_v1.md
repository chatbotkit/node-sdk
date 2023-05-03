[@chatbotkit/sdk](../README.md) / [Modules](../modules.md) / bot/v1

# Module: bot/v1

## Table of contents

### Type Aliases

- [BotCreateRequest](bot_v1.md#botcreaterequest)
- [BotCreateResponse](bot_v1.md#botcreateresponse)
- [BotDeleteResponse](bot_v1.md#botdeleteresponse)
- [BotFetchResponse](bot_v1.md#botfetchresponse)
- [BotListResponse](bot_v1.md#botlistresponse)
- [BotListStreamItemType](bot_v1.md#botliststreamitemtype)
- [BotListStreamType](bot_v1.md#botliststreamtype)
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

[bot/v1.js:65](https://github.com/chatbotkit/node-sdk/blob/9c88124/packages/sdk/src/bot/v1.js#L65)

___

### BotCreateResponse

Ƭ **BotCreateResponse**<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Defined in

[bot/v1.js:69](https://github.com/chatbotkit/node-sdk/blob/9c88124/packages/sdk/src/bot/v1.js#L69)

___

### BotDeleteResponse

Ƭ **BotDeleteResponse**<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Defined in

[bot/v1.js:109](https://github.com/chatbotkit/node-sdk/blob/9c88124/packages/sdk/src/bot/v1.js#L109)

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

[bot/v1.js:47](https://github.com/chatbotkit/node-sdk/blob/9c88124/packages/sdk/src/bot/v1.js#L47)

___

### BotListResponse

Ƭ **BotListResponse**<\>: `Object`

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

[bot/v1.js:14](https://github.com/chatbotkit/node-sdk/blob/9c88124/packages/sdk/src/bot/v1.js#L14)

___

### BotListStreamItemType

Ƭ **BotListStreamItemType**<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `data` | { `backstory?`: `string` ; `createdAt`: `number` ; `datasetId?`: `string` ; `id`: `string` ; `model?`: `string` ; `skillsetId?`: `string` ; `updatedAt`: `number`  } |
| `data.backstory?` | `string` |
| `data.createdAt` | `number` |
| `data.datasetId?` | `string` |
| `data.id` | `string` |
| `data.model?` | `string` |
| `data.skillsetId?` | `string` |
| `data.updatedAt` | `number` |
| `type` | ``"item"`` |

#### Defined in

[bot/v1.js:27](https://github.com/chatbotkit/node-sdk/blob/9c88124/packages/sdk/src/bot/v1.js#L27)

___

### BotListStreamType

Ƭ **BotListStreamType**<\>: [`BotListStreamItemType`](bot_v1.md#botliststreamitemtype)

#### Defined in

[bot/v1.js:29](https://github.com/chatbotkit/node-sdk/blob/9c88124/packages/sdk/src/bot/v1.js#L29)

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

[bot/v1.js:89](https://github.com/chatbotkit/node-sdk/blob/9c88124/packages/sdk/src/bot/v1.js#L89)

___

### BotUpdateResponse

Ƭ **BotUpdateResponse**<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Defined in

[bot/v1.js:93](https://github.com/chatbotkit/node-sdk/blob/9c88124/packages/sdk/src/bot/v1.js#L93)

___

### ChatBotKitClient

Ƭ **ChatBotKitClient**<\>: `ChatBotKitClient`

#### Defined in

[bot/v1.js:2](https://github.com/chatbotkit/node-sdk/blob/9c88124/packages/sdk/src/bot/v1.js#L2)

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

[bot/v1.js:75](https://github.com/chatbotkit/node-sdk/blob/9c88124/packages/sdk/src/bot/v1.js#L75)

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

[bot/v1.js:115](https://github.com/chatbotkit/node-sdk/blob/9c88124/packages/sdk/src/bot/v1.js#L115)

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

[bot/v1.js:53](https://github.com/chatbotkit/node-sdk/blob/9c88124/packages/sdk/src/bot/v1.js#L53)

___

### botList

▸ **botList**(`client`): `ResponsePromise`<[`BotListResponse`](bot_v1.md#botlistresponse), [`BotListStreamItemType`](bot_v1.md#botliststreamitemtype)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | `ChatBotKitClient` |

#### Returns

`ResponsePromise`<[`BotListResponse`](bot_v1.md#botlistresponse), [`BotListStreamItemType`](bot_v1.md#botliststreamitemtype)\>

#### Defined in

[bot/v1.js:34](https://github.com/chatbotkit/node-sdk/blob/9c88124/packages/sdk/src/bot/v1.js#L34)

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

[bot/v1.js:100](https://github.com/chatbotkit/node-sdk/blob/9c88124/packages/sdk/src/bot/v1.js#L100)
