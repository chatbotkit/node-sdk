[@chatbotkit/sdk](../README.md) / [Modules](../modules.md) / bot/v1

# Module: bot/v1

## Table of contents

### Type Aliases

- [BotCreateRequest](bot_v1.md#botcreaterequest)
- [BotCreateRequestBody](bot_v1.md#botcreaterequestbody)
- [BotCreateResponse](bot_v1.md#botcreateresponse)
- [BotDeleteRequestBody](bot_v1.md#botdeleterequestbody)
- [BotDeleteResponse](bot_v1.md#botdeleteresponse)
- [BotDownvoteRequest](bot_v1.md#botdownvoterequest)
- [BotDownvoteRequestBody](bot_v1.md#botdownvoterequestbody)
- [BotDownvoteResponse](bot_v1.md#botdownvoteresponse)
- [BotFetchResponse](bot_v1.md#botfetchresponse)
- [BotListRequest](bot_v1.md#botlistrequest)
- [BotListResponse](bot_v1.md#botlistresponse)
- [BotListStreamType](bot_v1.md#botliststreamtype)
- [BotUpdateRequest](bot_v1.md#botupdaterequest)
- [BotUpdateRequestBody](bot_v1.md#botupdaterequestbody)
- [BotUpdateResponse](bot_v1.md#botupdateresponse)
- [BotUpvoteRequest](bot_v1.md#botupvoterequest)
- [BotUpvoteRequestBody](bot_v1.md#botupvoterequestbody)
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

Ƭ **BotCreateRequest**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `backstory?` | `string` |
| `blueprintId?` | `string` |
| `datasetId?` | `string` |
| `description?` | `string` |
| `meta?` | [`Record`]( https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type )\<`string`, `any`\> |
| `model?` | [`model/v1`](model_v1.md) |
| `moderation?` | `boolean` |
| `name?` | `string` |
| `privacy?` | `boolean` |
| `skillsetId?` | `string` |
| `visibility?` | ``"private"`` \| ``"protected"`` \| ``"public"`` |

#### Defined in

[bot/v1.js:67](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/bot/v1.js#L67)

___

### BotCreateRequestBody

Ƭ **BotCreateRequestBody**\<\>: `operations`[``"createBot"``][``"requestBody"``][``"content"``][``"application/json"``]

#### Defined in

[bot/v1.js:69](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/bot/v1.js#L69)

___

### BotCreateResponse

Ƭ **BotCreateResponse**\<\>: `operations`[``"createBot"``][``"responses"``][``"200"``][``"content"``][``"application/json"``]

#### Defined in

[bot/v1.js:71](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/bot/v1.js#L71)

___

### BotDeleteRequestBody

Ƭ **BotDeleteRequestBody**\<\>: `operations`[``"deleteBot"``][``"requestBody"``][``"content"``][``"application/json"``]

#### Defined in

[bot/v1.js:134](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/bot/v1.js#L134)

___

### BotDeleteResponse

Ƭ **BotDeleteResponse**\<\>: `operations`[``"deleteBot"``][``"responses"``][``"200"``][``"content"``][``"application/json"``]

#### Defined in

[bot/v1.js:136](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/bot/v1.js#L136)

___

### BotDownvoteRequest

Ƭ **BotDownvoteRequest**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `reason?` | `string` |
| `value?` | `number` |

#### Defined in

[bot/v1.js:189](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/bot/v1.js#L189)

___

### BotDownvoteRequestBody

Ƭ **BotDownvoteRequestBody**\<\>: `operations`[``"downvoteBot"``][``"requestBody"``][``"content"``][``"application/json"``]

#### Defined in

[bot/v1.js:191](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/bot/v1.js#L191)

___

### BotDownvoteResponse

Ƭ **BotDownvoteResponse**\<\>: `operations`[``"downvoteBot"``][``"responses"``][``"200"``][``"content"``][``"application/json"``]

#### Defined in

[bot/v1.js:193](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/bot/v1.js#L193)

___

### BotFetchResponse

Ƭ **BotFetchResponse**\<\>: `operations`[``"fetchBot"``][``"responses"``][``"200"``][``"content"``][``"application/json"``]

#### Defined in

[bot/v1.js:39](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/bot/v1.js#L39)

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

[bot/v1.js:19](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/bot/v1.js#L19)

___

### BotListResponse

Ƭ **BotListResponse**\<\>: `operations`[``"listBots"``][``"responses"``][``"200"``][``"content"``][``"application/json"``]

#### Defined in

[bot/v1.js:21](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/bot/v1.js#L21)

___

### BotListStreamType

Ƭ **BotListStreamType**\<\>: `operations`[``"listBots"``][``"responses"``][``"200"``][``"content"``][``"application/jsonl"``]

#### Defined in

[bot/v1.js:23](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/bot/v1.js#L23)

___

### BotUpdateRequest

Ƭ **BotUpdateRequest**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `backstory?` | `string` |
| `blueprintId?` | `string` |
| `datasetId?` | `string` |
| `description?` | `string` |
| `meta?` | [`Record`]( https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type )\<`string`, `any`\> |
| `model?` | [`model/v1`](model_v1.md) |
| `moderation?` | `boolean` |
| `name?` | `string` |
| `privacy?` | `boolean` |
| `skillsetId?` | `string` |
| `visibility?` | ``"private"`` \| ``"protected"`` \| ``"public"`` |

#### Defined in

[bot/v1.js:106](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/bot/v1.js#L106)

___

### BotUpdateRequestBody

Ƭ **BotUpdateRequestBody**\<\>: `operations`[``"updateBot"``][``"requestBody"``][``"content"``][``"application/json"``]

#### Defined in

[bot/v1.js:108](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/bot/v1.js#L108)

___

### BotUpdateResponse

Ƭ **BotUpdateResponse**\<\>: `operations`[``"updateBot"``][``"responses"``][``"200"``][``"content"``][``"application/json"``]

#### Defined in

[bot/v1.js:110](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/bot/v1.js#L110)

___

### BotUpvoteRequest

Ƭ **BotUpvoteRequest**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `reason?` | `string` |
| `value?` | `number` |

#### Defined in

[bot/v1.js:158](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/bot/v1.js#L158)

___

### BotUpvoteRequestBody

Ƭ **BotUpvoteRequestBody**\<\>: `operations`[``"upvoteBot"``][``"requestBody"``][``"content"``][``"application/json"``]

#### Defined in

[bot/v1.js:160](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/bot/v1.js#L160)

___

### BotUpvoteResponse

Ƭ **BotUpvoteResponse**\<\>: `operations`[``"upvoteBot"``][``"responses"``][``"200"``][``"content"``][``"application/json"``]

#### Defined in

[bot/v1.js:162](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/bot/v1.js#L162)

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

▸ **createBot**(`client`, `request`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<{}\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`ChatBotKitClient`](../classes/client.ChatBotKitClient.md) |
| `request` | [`BotCreateRequest`](bot_v1.md#botcreaterequest) |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<{}\>

#### Defined in

[bot/v1.js:77](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/bot/v1.js#L77)

___

### deleteBot

▸ **deleteBot**(`client`, `botId`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<{}\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`ChatBotKitClient`](../classes/client.ChatBotKitClient.md) |
| `botId` | `string` |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<{}\>

#### Defined in

[bot/v1.js:142](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/bot/v1.js#L142)

___

### downvoteBot

▸ **downvoteBot**(`client`, `botId`, `request`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<{}\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`ChatBotKitClient`](../classes/client.ChatBotKitClient.md) |
| `botId` | `string` |
| `request` | [`BotDownvoteRequest`](bot_v1.md#botdownvoterequest) |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<{}\>

#### Defined in

[bot/v1.js:200](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/bot/v1.js#L200)

___

### fetchBot

▸ **fetchBot**(`client`, `botId`): [`ResponsePromise`](../classes/client.ResponsePromise.md)\<{}, `never`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`ChatBotKitClient`](../classes/client.ChatBotKitClient.md) |
| `botId` | `string` |

#### Returns

[`ResponsePromise`](../classes/client.ResponsePromise.md)\<{}, `never`\>

#### Defined in

[bot/v1.js:45](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/bot/v1.js#L45)

___

### listBots

▸ **listBots**(`client`, `request?`): [`ResponsePromise`](../classes/client.ResponsePromise.md)\<{}, {}\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`ChatBotKitClient`](../classes/client.ChatBotKitClient.md) |
| `request?` | [`BotListRequest`](bot_v1.md#botlistrequest) |

#### Returns

[`ResponsePromise`](../classes/client.ResponsePromise.md)\<{}, {}\>

#### Defined in

[bot/v1.js:29](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/bot/v1.js#L29)

___

### updateBot

▸ **updateBot**(`client`, `botId`, `request`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<{}\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`ChatBotKitClient`](../classes/client.ChatBotKitClient.md) |
| `botId` | `string` |
| `request` | [`BotUpdateRequest`](bot_v1.md#botupdaterequest) |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<{}\>

#### Defined in

[bot/v1.js:117](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/bot/v1.js#L117)

___

### upvoteBot

▸ **upvoteBot**(`client`, `botId`, `request`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<{}\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`ChatBotKitClient`](../classes/client.ChatBotKitClient.md) |
| `botId` | `string` |
| `request` | [`BotUpvoteRequest`](bot_v1.md#botupvoterequest) |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<{}\>

#### Defined in

[bot/v1.js:169](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/bot/v1.js#L169)
