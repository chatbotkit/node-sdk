[@chatbotkit/sdk](../README.md) / [Modules](../modules.md) / bot/v1

# Module: bot/v1

## Table of contents

### Type Aliases

- [BotCreateRequest](bot_v1.md#botcreaterequest)
- [BotCreateRequestBody](bot_v1.md#botcreaterequestbody)
- [BotCreateResponse](bot_v1.md#botcreateresponse)
- [BotCreateResponseBody](bot_v1.md#botcreateresponsebody)
- [BotDeleteRequest](bot_v1.md#botdeleterequest)
- [BotDeleteRequestBody](bot_v1.md#botdeleterequestbody)
- [BotDeleteResponse](bot_v1.md#botdeleteresponse)
- [BotDeleteResponseBody](bot_v1.md#botdeleteresponsebody)
- [BotDownvoteRequest](bot_v1.md#botdownvoterequest)
- [BotDownvoteRequestBody](bot_v1.md#botdownvoterequestbody)
- [BotDownvoteResponse](bot_v1.md#botdownvoteresponse)
- [BotDownvoteResponseBody](bot_v1.md#botdownvoteresponsebody)
- [BotFetchResponse](bot_v1.md#botfetchresponse)
- [BotListRequest](bot_v1.md#botlistrequest)
- [BotListResponse](bot_v1.md#botlistresponse)
- [BotListStreamType](bot_v1.md#botliststreamtype)
- [BotUpdateRequest](bot_v1.md#botupdaterequest)
- [BotUpdateRequestBody](bot_v1.md#botupdaterequestbody)
- [BotUpdateResponse](bot_v1.md#botupdateresponse)
- [BotUpdateResponseBody](bot_v1.md#botupdateresponsebody)
- [BotUpvoteRequest](bot_v1.md#botupvoterequest)
- [BotUpvoteRequestBody](bot_v1.md#botupvoterequestbody)
- [BotUpvoteResponse](bot_v1.md#botupvoteresponse)
- [BotUpvoteResponseBody](bot_v1.md#botupvoteresponsebody)
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

Ƭ **BotCreateRequest**\<\>: [`Omit`]( https://www.typescriptlang.org/docs/handbook/utility-types.html#omittype-keys )\<[`BotCreateRequestBody`](bot_v1.md#botcreaterequestbody), ``"model"``\> & \{ `model`: [`model/v1`](model_v1.md)  }

#### Defined in

[bot/v1.js:59](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/bot/v1.js#L59)

___

### BotCreateRequestBody

Ƭ **BotCreateRequestBody**\<\>: `operations`[``"createBot"``][``"requestBody"``][``"content"``][``"application/json"``]

#### Defined in

[bot/v1.js:55](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/bot/v1.js#L55)

___

### BotCreateResponse

Ƭ **BotCreateResponse**\<\>: [`BotCreateResponseBody`](bot_v1.md#botcreateresponsebody)

#### Defined in

[bot/v1.js:63](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/bot/v1.js#L63)

___

### BotCreateResponseBody

Ƭ **BotCreateResponseBody**\<\>: `operations`[``"createBot"``][``"responses"``][``"200"``][``"content"``][``"application/json"``]

#### Defined in

[bot/v1.js:61](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/bot/v1.js#L61)

___

### BotDeleteRequest

Ƭ **BotDeleteRequest**\<\>: [`BotDeleteRequestBody`](bot_v1.md#botdeleterequestbody)

#### Defined in

[bot/v1.js:120](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/bot/v1.js#L120)

___

### BotDeleteRequestBody

Ƭ **BotDeleteRequestBody**\<\>: `operations`[``"deleteBot"``][``"requestBody"``][``"content"``][``"application/json"``]

#### Defined in

[bot/v1.js:118](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/bot/v1.js#L118)

___

### BotDeleteResponse

Ƭ **BotDeleteResponse**\<\>: [`BotDeleteResponseBody`](bot_v1.md#botdeleteresponsebody)

#### Defined in

[bot/v1.js:124](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/bot/v1.js#L124)

___

### BotDeleteResponseBody

Ƭ **BotDeleteResponseBody**\<\>: `operations`[``"deleteBot"``][``"responses"``][``"200"``][``"content"``][``"application/json"``]

#### Defined in

[bot/v1.js:122](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/bot/v1.js#L122)

___

### BotDownvoteRequest

Ƭ **BotDownvoteRequest**\<\>: [`BotDownvoteRequestBody`](bot_v1.md#botdownvoterequestbody)

#### Defined in

[bot/v1.js:173](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/bot/v1.js#L173)

___

### BotDownvoteRequestBody

Ƭ **BotDownvoteRequestBody**\<\>: `operations`[``"downvoteBot"``][``"requestBody"``][``"content"``][``"application/json"``]

#### Defined in

[bot/v1.js:171](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/bot/v1.js#L171)

___

### BotDownvoteResponse

Ƭ **BotDownvoteResponse**\<\>: [`BotDownvoteResponseBody`](bot_v1.md#botdownvoteresponsebody)

#### Defined in

[bot/v1.js:177](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/bot/v1.js#L177)

___

### BotDownvoteResponseBody

Ƭ **BotDownvoteResponseBody**\<\>: `operations`[``"downvoteBot"``][``"responses"``][``"200"``][``"content"``][``"application/json"``]

#### Defined in

[bot/v1.js:175](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/bot/v1.js#L175)

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

Ƭ **BotUpdateRequest**\<\>: [`Omit`]( https://www.typescriptlang.org/docs/handbook/utility-types.html#omittype-keys )\<[`BotUpdateRequestBody`](bot_v1.md#botupdaterequestbody), ``"model"``\> & \{ `model?`: [`model/v1`](model_v1.md)  }

#### Defined in

[bot/v1.js:90](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/bot/v1.js#L90)

___

### BotUpdateRequestBody

Ƭ **BotUpdateRequestBody**\<\>: `operations`[``"updateBot"``][``"requestBody"``][``"content"``][``"application/json"``]

#### Defined in

[bot/v1.js:86](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/bot/v1.js#L86)

___

### BotUpdateResponse

Ƭ **BotUpdateResponse**\<\>: [`BotUpdateResponseBody`](bot_v1.md#botupdateresponsebody)

#### Defined in

[bot/v1.js:94](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/bot/v1.js#L94)

___

### BotUpdateResponseBody

Ƭ **BotUpdateResponseBody**\<\>: `operations`[``"updateBot"``][``"responses"``][``"200"``][``"content"``][``"application/json"``]

#### Defined in

[bot/v1.js:92](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/bot/v1.js#L92)

___

### BotUpvoteRequest

Ƭ **BotUpvoteRequest**\<\>: [`BotUpvoteRequestBody`](bot_v1.md#botupvoterequestbody)

#### Defined in

[bot/v1.js:145](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/bot/v1.js#L145)

___

### BotUpvoteRequestBody

Ƭ **BotUpvoteRequestBody**\<\>: `operations`[``"upvoteBot"``][``"requestBody"``][``"content"``][``"application/json"``]

#### Defined in

[bot/v1.js:143](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/bot/v1.js#L143)

___

### BotUpvoteResponse

Ƭ **BotUpvoteResponse**\<\>: [`BotUpvoteResponseBody`](bot_v1.md#botupvoteresponsebody)

#### Defined in

[bot/v1.js:149](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/bot/v1.js#L149)

___

### BotUpvoteResponseBody

Ƭ **BotUpvoteResponseBody**\<\>: `operations`[``"upvoteBot"``][``"responses"``][``"200"``][``"content"``][``"application/json"``]

#### Defined in

[bot/v1.js:147](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/bot/v1.js#L147)

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

[bot/v1.js:69](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/bot/v1.js#L69)

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

[bot/v1.js:130](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/bot/v1.js#L130)

___

### downvoteBot

▸ **downvoteBot**(`client`, `botId`, `request`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<{}\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`ChatBotKitClient`](../classes/client.ChatBotKitClient.md) |
| `botId` | `string` |
| `request` | `Object` |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<{}\>

#### Defined in

[bot/v1.js:184](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/bot/v1.js#L184)

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

[bot/v1.js:101](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/bot/v1.js#L101)

___

### upvoteBot

▸ **upvoteBot**(`client`, `botId`, `request`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<{}\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`ChatBotKitClient`](../classes/client.ChatBotKitClient.md) |
| `botId` | `string` |
| `request` | `Object` |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<{}\>

#### Defined in

[bot/v1.js:156](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/bot/v1.js#L156)
