[@chatbotkit/sdk](../README.md) / [Modules](../modules.md) / partner/user/token/v1

# Module: partner/user/token/v1

## Table of contents

### Type Aliases

- [ChatBotKitClient](partner_user_token_v1.md#chatbotkitclient)
- [PartnerUserTokenCreateRequest](partner_user_token_v1.md#partnerusertokencreaterequest)
- [PartnerUserTokenCreateResponse](partner_user_token_v1.md#partnerusertokencreateresponse)
- [PartnerUserTokenDeleteResponse](partner_user_token_v1.md#partnerusertokendeleteresponse)
- [PartnerUserTokenInstance](partner_user_token_v1.md#partnerusertokeninstance)
- [PartnerUserTokenListRequest](partner_user_token_v1.md#partnerusertokenlistrequest)
- [PartnerUserTokenListResponse](partner_user_token_v1.md#partnerusertokenlistresponse)
- [PartnerUserTokenListStreamItem](partner_user_token_v1.md#partnerusertokenliststreamitem)
- [PartnerUserTokenListStreamType](partner_user_token_v1.md#partnerusertokenliststreamtype)
- [PartnerUserTokenOptions](partner_user_token_v1.md#partnerusertokenoptions)
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

Ƭ **PartnerUserTokenCreateRequest**\<\>: [`PartnerUserTokenOptions`](partner_user_token_v1.md#partnerusertokenoptions) & {}

#### Defined in

[partner/user/token/v1.js:52](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/partner/user/token/v1.js#L52)

___

### PartnerUserTokenCreateResponse

Ƭ **PartnerUserTokenCreateResponse**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `createdAt` | `number` |
| `id` | `string` |
| `token` | `string` |

#### Defined in

[partner/user/token/v1.js:58](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/partner/user/token/v1.js#L58)

___

### PartnerUserTokenDeleteResponse

Ƭ **PartnerUserTokenDeleteResponse**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Defined in

[partner/user/token/v1.js:82](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/partner/user/token/v1.js#L82)

___

### PartnerUserTokenInstance

Ƭ **PartnerUserTokenInstance**\<\>: [`PartnerUserTokenOptions`](partner_user_token_v1.md#partnerusertokenoptions) & \{ `createdAt`: `number` ; `id`: `string` ; `updatedAt`: `number`  }

#### Defined in

[partner/user/token/v1.js:19](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/partner/user/token/v1.js#L19)

___

### PartnerUserTokenListRequest

Ƭ **PartnerUserTokenListRequest**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `cursor?` | `string` |
| `meta?` | `Record`\<`string`, `string`\> |
| `take?` | `number` |

#### Defined in

[partner/user/token/v1.js:23](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/partner/user/token/v1.js#L23)

___

### PartnerUserTokenListResponse

Ƭ **PartnerUserTokenListResponse**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `items` | [`PartnerUserTokenInstance`](partner_user_token_v1.md#partnerusertokeninstance)[] |

#### Defined in

[partner/user/token/v1.js:25](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/partner/user/token/v1.js#L25)

___

### PartnerUserTokenListStreamItem

Ƭ **PartnerUserTokenListStreamItem**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `data` | [`PartnerUserTokenInstance`](partner_user_token_v1.md#partnerusertokeninstance) |
| `type` | ``"item"`` |

#### Defined in

[partner/user/token/v1.js:30](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/partner/user/token/v1.js#L30)

___

### PartnerUserTokenListStreamType

Ƭ **PartnerUserTokenListStreamType**\<\>: [`PartnerUserTokenListStreamItem`](partner_user_token_v1.md#partnerusertokenliststreamitem)

#### Defined in

[partner/user/token/v1.js:32](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/partner/user/token/v1.js#L32)

___

### PartnerUserTokenOptions

Ƭ **PartnerUserTokenOptions**\<\>: `Object`

#### Defined in

[partner/user/token/v1.js:13](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/partner/user/token/v1.js#L13)

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

▸ **createPartnerUserToken**(`client`, `userId`, `request`): `Promise`\<[`PartnerUserTokenCreateResponse`](partner_user_token_v1.md#partnerusertokencreateresponse)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`ChatBotKitClient`](../classes/client.ChatBotKitClient.md) |
| `userId` | `string` |
| `request` | [`PartnerUserTokenOptions`](partner_user_token_v1.md#partnerusertokenoptions) |

#### Returns

`Promise`\<[`PartnerUserTokenCreateResponse`](partner_user_token_v1.md#partnerusertokencreateresponse)\>

#### Defined in

[partner/user/token/v1.js:65](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/partner/user/token/v1.js#L65)

___

### deletePartnerUserToken

▸ **deletePartnerUserToken**(`client`, `userId`, `tokenId`): `Promise`\<[`PartnerUserTokenDeleteResponse`](partner_user_token_v1.md#partnerusertokendeleteresponse)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`ChatBotKitClient`](../classes/client.ChatBotKitClient.md) |
| `userId` | `string` |
| `tokenId` | `string` |

#### Returns

`Promise`\<[`PartnerUserTokenDeleteResponse`](partner_user_token_v1.md#partnerusertokendeleteresponse)\>

#### Defined in

[partner/user/token/v1.js:89](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/partner/user/token/v1.js#L89)

___

### listPartnerUserTokens

▸ **listPartnerUserTokens**(`client`, `userId`, `request?`): [`ResponsePromise`](../classes/client.ResponsePromise.md)\<[`PartnerUserTokenListResponse`](partner_user_token_v1.md#partnerusertokenlistresponse), [`PartnerUserTokenListStreamItem`](partner_user_token_v1.md#partnerusertokenliststreamitem)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`ChatBotKitClient`](../classes/client.ChatBotKitClient.md) |
| `userId` | `string` |
| `request?` | [`PartnerUserTokenListRequest`](partner_user_token_v1.md#partnerusertokenlistrequest) |

#### Returns

[`ResponsePromise`](../classes/client.ResponsePromise.md)\<[`PartnerUserTokenListResponse`](partner_user_token_v1.md#partnerusertokenlistresponse), [`PartnerUserTokenListStreamItem`](partner_user_token_v1.md#partnerusertokenliststreamitem)\>

#### Defined in

[partner/user/token/v1.js:39](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/partner/user/token/v1.js#L39)
