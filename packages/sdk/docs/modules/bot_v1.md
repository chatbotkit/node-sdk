[@chatbotkit/sdk](../README.md) / [Modules](../modules.md) / bot/v1

# Module: bot/v1

## Table of contents

### Type Aliases

- [BotCreateRequest](bot_v1.md#botcreaterequest)
- [BotCreateResponse](bot_v1.md#botcreateresponse)
- [BotDeleteResponse](bot_v1.md#botdeleteresponse)
- [BotDownvoteRequest](bot_v1.md#botdownvoterequest)
- [BotDownvoteResponse](bot_v1.md#botdownvoteresponse)
- [BotFetchResponse](bot_v1.md#botfetchresponse)
- [BotInstance](bot_v1.md#botinstance)
- [BotListRequest](bot_v1.md#botlistrequest)
- [BotListResponse](bot_v1.md#botlistresponse)
- [BotListStreamItemType](bot_v1.md#botliststreamitemtype)
- [BotListStreamType](bot_v1.md#botliststreamtype)
- [BotOptions](bot_v1.md#botoptions)
- [BotUpdateRequest](bot_v1.md#botupdaterequest)
- [BotUpdateResponse](bot_v1.md#botupdateresponse)
- [BotUpvoteRequest](bot_v1.md#botupvoterequest)
- [BotUpvoteResponse](bot_v1.md#botupvoteresponse)
- [ChatBotKitClient](bot_v1.md#chatbotkitclient)
- [ResponsePromise](bot_v1.md#responsepromise)

### Functions

- [createBot](bot_v1.md#createbot)
- [deleteBot](bot_v1.md#deletebot)
- [downvoteBot](bot_v1.md#downvotebot)
- [fetchBot](bot_v1.md#fetchbot)
- [listBots](bot_v1.md#listbots)
- [updateBot](bot_v1.md#updatebot)
- [upvoteBot](bot_v1.md#upvotebot)

## Type Aliases

### BotCreateRequest

Ƭ **BotCreateRequest**\<\>: [`BotOptions`](bot_v1.md#botoptions) & \{ `model?`: [`model/v1`](model_v1.md)  }

#### Defined in

[bot/v1.js:88](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/bot/v1.js#L88)

___

### BotCreateResponse

Ƭ **BotCreateResponse**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Defined in

[bot/v1.js:92](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/bot/v1.js#L92)

___

### BotDeleteResponse

Ƭ **BotDeleteResponse**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Defined in

[bot/v1.js:147](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/bot/v1.js#L147)

___

### BotDownvoteRequest

Ƭ **BotDownvoteRequest**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `reason?` | `string` |
| `value?` | `number` |

#### Defined in

[bot/v1.js:200](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/bot/v1.js#L200)

___

### BotDownvoteResponse

Ƭ **BotDownvoteResponse**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Defined in

[bot/v1.js:204](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/bot/v1.js#L204)

___

### BotFetchResponse

Ƭ **BotFetchResponse**\<\>: [`BotInstance`](bot_v1.md#botinstance) & {}

#### Defined in

[bot/v1.js:69](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/bot/v1.js#L69)

___

### BotInstance

Ƭ **BotInstance**\<\>: [`BotOptions`](bot_v1.md#botoptions) & \{ `createdAt`: `number` ; `id`: `string` ; `updatedAt`: `number`  }

#### Defined in

[bot/v1.js:32](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/bot/v1.js#L32)

___

### BotListRequest

Ƭ **BotListRequest**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `cursor?` | `string` |
| `meta?` | [`Record`]( https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type )\<`string`, `string`\> |
| `order?` | ``"desc"`` \| ``"asc"`` |
| `take?` | `number` |

#### Defined in

[bot/v1.js:41](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/bot/v1.js#L41)

___

### BotListResponse

Ƭ **BotListResponse**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `items` | [`BotInstance`](bot_v1.md#botinstance)[] |

#### Defined in

[bot/v1.js:43](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/bot/v1.js#L43)

___

### BotListStreamItemType

Ƭ **BotListStreamItemType**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `data` | [`BotInstance`](bot_v1.md#botinstance) |
| `type` | ``"item"`` |

#### Defined in

[bot/v1.js:48](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/bot/v1.js#L48)

___

### BotListStreamType

Ƭ **BotListStreamType**\<\>: [`BotListStreamItemType`](bot_v1.md#botliststreamitemtype)

#### Defined in

[bot/v1.js:50](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/bot/v1.js#L50)

___

### BotOptions

Ƭ **BotOptions**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `backstory?` | `string` |
| `blueprintId?` | `string` |
| `datasetId?` | `string` |
| `description?` | `string` |
| `meta?` | [`Record`]( https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type )\<`string`, `any`\> |
| `model?` | `string` |
| `moderation?` | `boolean` |
| `name?` | `string` |
| `privacy?` | `boolean` |
| `skillsetId?` | `string` |
| `visibility?` | ``"private"`` \| ``"protected"`` \| ``"public"`` |

#### Defined in

[bot/v1.js:26](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/bot/v1.js#L26)

___

### BotUpdateRequest

Ƭ **BotUpdateRequest**\<\>: [`BotOptions`](bot_v1.md#botoptions) & \{ `model?`: [`model/v1`](model_v1.md)  }

#### Defined in

[bot/v1.js:117](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/bot/v1.js#L117)

___

### BotUpdateResponse

Ƭ **BotUpdateResponse**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Defined in

[bot/v1.js:121](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/bot/v1.js#L121)

___

### BotUpvoteRequest

Ƭ **BotUpvoteRequest**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `reason?` | `string` |
| `value?` | `number` |

#### Defined in

[bot/v1.js:169](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/bot/v1.js#L169)

___

### BotUpvoteResponse

Ƭ **BotUpvoteResponse**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Defined in

[bot/v1.js:173](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/bot/v1.js#L173)

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

▸ **createBot**(`client`, `request`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<[`BotCreateResponse`](bot_v1.md#botcreateresponse)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`ChatBotKitClient`](../classes/client.ChatBotKitClient.md) |
| `request` | [`BotCreateRequest`](bot_v1.md#botcreaterequest) |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<[`BotCreateResponse`](bot_v1.md#botcreateresponse)\>

#### Defined in

[bot/v1.js:98](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/bot/v1.js#L98)

___

### deleteBot

▸ **deleteBot**(`client`, `botId`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<[`BotDeleteResponse`](bot_v1.md#botdeleteresponse)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`ChatBotKitClient`](../classes/client.ChatBotKitClient.md) |
| `botId` | `string` |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<[`BotDeleteResponse`](bot_v1.md#botdeleteresponse)\>

#### Defined in

[bot/v1.js:153](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/bot/v1.js#L153)

___

### downvoteBot

▸ **downvoteBot**(`client`, `botId`, `request`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<[`BotDownvoteResponse`](bot_v1.md#botdownvoteresponse)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`ChatBotKitClient`](../classes/client.ChatBotKitClient.md) |
| `botId` | `string` |
| `request` | [`BotDownvoteRequest`](bot_v1.md#botdownvoterequest) |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<[`BotDownvoteResponse`](bot_v1.md#botdownvoteresponse)\>

#### Defined in

[bot/v1.js:211](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/bot/v1.js#L211)

___

### fetchBot

▸ **fetchBot**(`client`, `botId`): [`ResponsePromise`](../classes/client.ResponsePromise.md)\<[`BotFetchResponse`](bot_v1.md#botfetchresponse), `never`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`ChatBotKitClient`](../classes/client.ChatBotKitClient.md) |
| `botId` | `string` |

#### Returns

[`ResponsePromise`](../classes/client.ResponsePromise.md)\<[`BotFetchResponse`](bot_v1.md#botfetchresponse), `never`\>

#### Defined in

[bot/v1.js:75](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/bot/v1.js#L75)

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

[bot/v1.js:56](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/bot/v1.js#L56)

___

### updateBot

▸ **updateBot**(`client`, `botId`, `request`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<[`BotUpdateResponse`](bot_v1.md#botupdateresponse)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`ChatBotKitClient`](../classes/client.ChatBotKitClient.md) |
| `botId` | `string` |
| `request` | [`BotUpdateRequest`](bot_v1.md#botupdaterequest) |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<[`BotUpdateResponse`](bot_v1.md#botupdateresponse)\>

#### Defined in

[bot/v1.js:128](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/bot/v1.js#L128)

___

### upvoteBot

▸ **upvoteBot**(`client`, `botId`, `request`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<[`BotUpvoteResponse`](bot_v1.md#botupvoteresponse)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`ChatBotKitClient`](../classes/client.ChatBotKitClient.md) |
| `botId` | `string` |
| `request` | [`BotUpvoteRequest`](bot_v1.md#botupvoterequest) |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<[`BotUpvoteResponse`](bot_v1.md#botupvoteresponse)\>

#### Defined in

[bot/v1.js:180](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/bot/v1.js#L180)
