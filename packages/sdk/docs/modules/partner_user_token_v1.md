[@chatbotkit/sdk](../README.md) / [Modules](../modules.md) / partner/user/token/v1

# Module: partner/user/token/v1

## Table of contents

### Type Aliases

- [ChatBotKitClient](partner_user_token_v1.md#chatbotkitclient)
- [PartnerUserTokenCreateRequest](partner_user_token_v1.md#partnerusertokencreaterequest)
- [PartnerUserTokenCreateRequestBody](partner_user_token_v1.md#partnerusertokencreaterequestbody)
- [PartnerUserTokenCreateResponse](partner_user_token_v1.md#partnerusertokencreateresponse)
- [PartnerUserTokenCreateResponseBody](partner_user_token_v1.md#partnerusertokencreateresponsebody)
- [PartnerUserTokenDeleteRequest](partner_user_token_v1.md#partnerusertokendeleterequest)
- [PartnerUserTokenDeleteRequestBody](partner_user_token_v1.md#partnerusertokendeleterequestbody)
- [PartnerUserTokenDeleteResponse](partner_user_token_v1.md#partnerusertokendeleteresponse)
- [PartnerUserTokenDeleteResponseBody](partner_user_token_v1.md#partnerusertokendeleteresponsebody)
- [PartnerUserTokenListRequest](partner_user_token_v1.md#partnerusertokenlistrequest)
- [PartnerUserTokenListResponse](partner_user_token_v1.md#partnerusertokenlistresponse)
- [PartnerUserTokenListStreamType](partner_user_token_v1.md#partnerusertokenliststreamtype)
- [ResponsePromise](partner_user_token_v1.md#responsepromise)

### Functions

- [createPartnerUserToken](partner_user_token_v1.md#createpartnerusertoken)
- [deletePartnerUserToken](partner_user_token_v1.md#deletepartnerusertoken)
- [listPartnerUserTokens](partner_user_token_v1.md#listpartnerusertokens)

## Type Aliases

### ChatBotKitClient

Ƭ **ChatBotKitClient**\<\>: [`client`](client.md)

#### Defined in

[partner/user/token/v1.js:2](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/partner/user/token/v1.js#L2)

___

### PartnerUserTokenCreateRequest

Ƭ **PartnerUserTokenCreateRequest**\<\>: [`PartnerUserTokenCreateRequestBody`](partner_user_token_v1.md#partnerusertokencreaterequestbody)

#### Defined in

[partner/user/token/v1.js:40](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/partner/user/token/v1.js#L40)

___

### PartnerUserTokenCreateRequestBody

Ƭ **PartnerUserTokenCreateRequestBody**\<\>: `operations`[``"createPartnerUserToken"``][``"requestBody"``][``"content"``][``"application/json"``]

#### Defined in

[partner/user/token/v1.js:38](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/partner/user/token/v1.js#L38)

___

### PartnerUserTokenCreateResponse

Ƭ **PartnerUserTokenCreateResponse**\<\>: [`PartnerUserTokenCreateResponseBody`](partner_user_token_v1.md#partnerusertokencreateresponsebody)

#### Defined in

[partner/user/token/v1.js:44](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/partner/user/token/v1.js#L44)

___

### PartnerUserTokenCreateResponseBody

Ƭ **PartnerUserTokenCreateResponseBody**\<\>: `operations`[``"createPartnerUserToken"``][``"responses"``][``"200"``][``"content"``][``"application/json"``]

#### Defined in

[partner/user/token/v1.js:42](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/partner/user/token/v1.js#L42)

___

### PartnerUserTokenDeleteRequest

Ƭ **PartnerUserTokenDeleteRequest**\<\>: [`PartnerUserTokenDeleteRequestBody`](partner_user_token_v1.md#partnerusertokendeleterequestbody)

#### Defined in

[partner/user/token/v1.js:68](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/partner/user/token/v1.js#L68)

___

### PartnerUserTokenDeleteRequestBody

Ƭ **PartnerUserTokenDeleteRequestBody**\<\>: `operations`[``"deletePartnerUserToken"``][``"requestBody"``][``"content"``][``"application/json"``]

#### Defined in

[partner/user/token/v1.js:66](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/partner/user/token/v1.js#L66)

___

### PartnerUserTokenDeleteResponse

Ƭ **PartnerUserTokenDeleteResponse**\<\>: [`PartnerUserTokenDeleteResponseBody`](partner_user_token_v1.md#partnerusertokendeleteresponsebody)

#### Defined in

[partner/user/token/v1.js:72](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/partner/user/token/v1.js#L72)

___

### PartnerUserTokenDeleteResponseBody

Ƭ **PartnerUserTokenDeleteResponseBody**\<\>: `operations`[``"deletePartnerUserToken"``][``"responses"``][``"200"``][``"content"``][``"application/json"``]

#### Defined in

[partner/user/token/v1.js:70](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/partner/user/token/v1.js#L70)

___

### PartnerUserTokenListRequest

Ƭ **PartnerUserTokenListRequest**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `cursor?` | `string` |
| `meta?` | [`Record`]( https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type )\<`string`, `string`\> |
| `order?` | ``"desc"`` \| ``"asc"`` |
| `take?` | `number` |

#### Defined in

[partner/user/token/v1.js:17](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/partner/user/token/v1.js#L17)

___

### PartnerUserTokenListResponse

Ƭ **PartnerUserTokenListResponse**\<\>: `operations`[``"listPartnerUserTokens"``][``"responses"``][``"200"``][``"content"``][``"application/json"``]

#### Defined in

[partner/user/token/v1.js:19](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/partner/user/token/v1.js#L19)

___

### PartnerUserTokenListStreamType

Ƭ **PartnerUserTokenListStreamType**\<\>: `operations`[``"listPartnerUserTokens"``][``"responses"``][``"200"``][``"content"``][``"application/jsonl"``]

#### Defined in

[partner/user/token/v1.js:21](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/partner/user/token/v1.js#L21)

___

### ResponsePromise

Ƭ **ResponsePromise**\<`T`, `U`\>: [`client`](client.md)

#### Type parameters

| Name |
| :------ |
| `T` |
| `U` |

#### Defined in

[partner/user/token/v1.js:8](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/partner/user/token/v1.js#L8)

## Functions

### createPartnerUserToken

▸ **createPartnerUserToken**(`client`, `userId`, `request`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<{}\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`ChatBotKitClient`](../classes/client.ChatBotKitClient.md) |
| `userId` | `string` |
| `request` | [`Record`]( https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type )\<`string`, `never`\> |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<{}\>

#### Defined in

[partner/user/token/v1.js:51](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/partner/user/token/v1.js#L51)

___

### deletePartnerUserToken

▸ **deletePartnerUserToken**(`client`, `userId`, `tokenId`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<{}\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`ChatBotKitClient`](../classes/client.ChatBotKitClient.md) |
| `userId` | `string` |
| `tokenId` | `string` |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<{}\>

#### Defined in

[partner/user/token/v1.js:79](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/partner/user/token/v1.js#L79)

___

### listPartnerUserTokens

▸ **listPartnerUserTokens**(`client`, `userId`, `request?`): [`ResponsePromise`](../classes/client.ResponsePromise.md)\<{}, {}\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`ChatBotKitClient`](../classes/client.ChatBotKitClient.md) |
| `userId` | `string` |
| `request?` | [`PartnerUserTokenListRequest`](partner_user_token_v1.md#partnerusertokenlistrequest) |

#### Returns

[`ResponsePromise`](../classes/client.ResponsePromise.md)\<{}, {}\>

#### Defined in

[partner/user/token/v1.js:28](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/partner/user/token/v1.js#L28)
