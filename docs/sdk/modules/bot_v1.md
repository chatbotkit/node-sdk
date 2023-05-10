[@chatbotkit/sdk](../README.md) / [Modules](../modules.md) / bot/v1

# Module: bot/v1

## Table of contents

### Type Aliases

- [BotCreateRequest](bot_v1.md#botcreaterequest)
- [BotCreateResponse](bot_v1.md#botcreateresponse)
- [BotDeleteResponse](bot_v1.md#botdeleteresponse)
- [BotFetchResponse](bot_v1.md#botfetchresponse)
- [BotInstance](bot_v1.md#botinstance)
- [BotListResponse](bot_v1.md#botlistresponse)
- [BotListStreamItemType](bot_v1.md#botliststreamitemtype)
- [BotListStreamType](bot_v1.md#botliststreamtype)
- [BotOptions](bot_v1.md#botoptions)
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

Ƭ **BotCreateRequest**<\>: [`BotOptions`](bot_v1.md#botoptions)

#### Defined in

[bot/v1.js:50](https://github.com/chatbotkit/node-sdk/blob/e17e7f6/packages/sdk/src/bot/v1.js#L50)

___

### BotCreateResponse

Ƭ **BotCreateResponse**<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Defined in

[bot/v1.js:54](https://github.com/chatbotkit/node-sdk/blob/e17e7f6/packages/sdk/src/bot/v1.js#L54)

___

### BotDeleteResponse

Ƭ **BotDeleteResponse**<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Defined in

[bot/v1.js:87](https://github.com/chatbotkit/node-sdk/blob/e17e7f6/packages/sdk/src/bot/v1.js#L87)

___

### BotFetchResponse

Ƭ **BotFetchResponse**<\>: [`BotInstance`](bot_v1.md#botinstance)

#### Defined in

[bot/v1.js:39](https://github.com/chatbotkit/node-sdk/blob/e17e7f6/packages/sdk/src/bot/v1.js#L39)

___

### BotInstance

Ƭ **BotInstance**<\>: { `createdAt`: `number` ; `id`: `string` ; `updatedAt`: `number`  } & [`BotOptions`](bot_v1.md#botoptions)

#### Defined in

[bot/v1.js:18](https://github.com/chatbotkit/node-sdk/blob/e17e7f6/packages/sdk/src/bot/v1.js#L18)

___

### BotListResponse

Ƭ **BotListResponse**<\>: [`BotInstance`](bot_v1.md#botinstance)

#### Defined in

[bot/v1.js:22](https://github.com/chatbotkit/node-sdk/blob/e17e7f6/packages/sdk/src/bot/v1.js#L22)

___

### BotListStreamItemType

Ƭ **BotListStreamItemType**<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `data` | [`BotInstance`](bot_v1.md#botinstance) |
| `type` | ``"item"`` |

#### Defined in

[bot/v1.js:27](https://github.com/chatbotkit/node-sdk/blob/e17e7f6/packages/sdk/src/bot/v1.js#L27)

___

### BotListStreamType

Ƭ **BotListStreamType**<\>: [`BotListStreamItemType`](bot_v1.md#botliststreamitemtype)

#### Defined in

[bot/v1.js:29](https://github.com/chatbotkit/node-sdk/blob/e17e7f6/packages/sdk/src/bot/v1.js#L29)

___

### BotOptions

Ƭ **BotOptions**<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `backstory?` | `string` |
| `datasetId?` | `string` |
| `meta?` | `Record`<`string`, `any`\> |
| `model?` | `string` |
| `skillsetId?` | `string` |

#### Defined in

[bot/v1.js:12](https://github.com/chatbotkit/node-sdk/blob/e17e7f6/packages/sdk/src/bot/v1.js#L12)

___

### BotUpdateRequest

Ƭ **BotUpdateRequest**<\>: [`BotOptions`](bot_v1.md#botoptions)

#### Defined in

[bot/v1.js:67](https://github.com/chatbotkit/node-sdk/blob/e17e7f6/packages/sdk/src/bot/v1.js#L67)

___

### BotUpdateResponse

Ƭ **BotUpdateResponse**<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Defined in

[bot/v1.js:71](https://github.com/chatbotkit/node-sdk/blob/e17e7f6/packages/sdk/src/bot/v1.js#L71)

___

### ChatBotKitClient

Ƭ **ChatBotKitClient**<\>: `ChatBotKitClient`

#### Defined in

[bot/v1.js:2](https://github.com/chatbotkit/node-sdk/blob/e17e7f6/packages/sdk/src/bot/v1.js#L2)

## Functions

### botCreate

▸ **botCreate**(`client`, `request`): `Promise`<[`BotCreateResponse`](bot_v1.md#botcreateresponse)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | `ChatBotKitClient` |
| `request` | [`BotOptions`](bot_v1.md#botoptions) |

#### Returns

`Promise`<[`BotCreateResponse`](bot_v1.md#botcreateresponse)\>

#### Defined in

[bot/v1.js:60](https://github.com/chatbotkit/node-sdk/blob/e17e7f6/packages/sdk/src/bot/v1.js#L60)

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

[bot/v1.js:93](https://github.com/chatbotkit/node-sdk/blob/e17e7f6/packages/sdk/src/bot/v1.js#L93)

___

### botFetch

▸ **botFetch**(`client`, `botId`): `Promise`<[`BotInstance`](bot_v1.md#botinstance)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | `ChatBotKitClient` |
| `botId` | `string` |

#### Returns

`Promise`<[`BotInstance`](bot_v1.md#botinstance)\>

#### Defined in

[bot/v1.js:45](https://github.com/chatbotkit/node-sdk/blob/e17e7f6/packages/sdk/src/bot/v1.js#L45)

___

### botList

▸ **botList**(`client`): `ResponsePromise`<[`BotInstance`](bot_v1.md#botinstance), [`BotListStreamItemType`](bot_v1.md#botliststreamitemtype)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | `ChatBotKitClient` |

#### Returns

`ResponsePromise`<[`BotInstance`](bot_v1.md#botinstance), [`BotListStreamItemType`](bot_v1.md#botliststreamitemtype)\>

#### Defined in

[bot/v1.js:34](https://github.com/chatbotkit/node-sdk/blob/e17e7f6/packages/sdk/src/bot/v1.js#L34)

___

### botUpdate

▸ **botUpdate**(`client`, `botId`, `request`): `Promise`<[`BotUpdateResponse`](bot_v1.md#botupdateresponse)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | `ChatBotKitClient` |
| `botId` | `string` |
| `request` | [`BotOptions`](bot_v1.md#botoptions) |

#### Returns

`Promise`<[`BotUpdateResponse`](bot_v1.md#botupdateresponse)\>

#### Defined in

[bot/v1.js:78](https://github.com/chatbotkit/node-sdk/blob/e17e7f6/packages/sdk/src/bot/v1.js#L78)
