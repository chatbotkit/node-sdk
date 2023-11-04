[@chatbotkit/sdk](../README.md) / [Modules](../modules.md) / partner/user/token/v1

# Module: partner/user/token/v1

## Table of contents

### Type Aliases

- [ChatBotKitClient](partner_user_token_v1.md#chatbotkitclient)
- [TokenCreateRequest](partner_user_token_v1.md#tokencreaterequest)
- [TokenCreateResponse](partner_user_token_v1.md#tokencreateresponse)
- [TokenDeleteResponse](partner_user_token_v1.md#tokendeleteresponse)
- [TokenInstance](partner_user_token_v1.md#tokeninstance)
- [TokenListResponse](partner_user_token_v1.md#tokenlistresponse)
- [TokenListStreamItem](partner_user_token_v1.md#tokenliststreamitem)
- [TokenListStreamType](partner_user_token_v1.md#tokenliststreamtype)
- [TokenOptions](partner_user_token_v1.md#tokenoptions)

### Functions

- [tokenCreate](partner_user_token_v1.md#tokencreate)
- [tokenDelete](partner_user_token_v1.md#tokendelete)
- [tokenList](partner_user_token_v1.md#tokenlist)

## Type Aliases

### ChatBotKitClient

Ƭ **ChatBotKitClient**<\>: `ChatBotKitClient`

#### Defined in

[partner/user/token/v1.js:2](https://github.com/chatbotkit/node-sdk/blob/09ac200/packages/sdk/src/partner/user/token/v1.js#L2)

___

### TokenCreateRequest

Ƭ **TokenCreateRequest**<\>: [`TokenOptions`](partner_user_token_v1.md#tokenoptions)

#### Defined in

[partner/user/token/v1.js:42](https://github.com/chatbotkit/node-sdk/blob/09ac200/packages/sdk/src/partner/user/token/v1.js#L42)

___

### TokenCreateResponse

Ƭ **TokenCreateResponse**<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `createdAt` | `number` |
| `id` | `string` |
| `token` | `string` |

#### Defined in

[partner/user/token/v1.js:48](https://github.com/chatbotkit/node-sdk/blob/09ac200/packages/sdk/src/partner/user/token/v1.js#L48)

___

### TokenDeleteResponse

Ƭ **TokenDeleteResponse**<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Defined in

[partner/user/token/v1.js:66](https://github.com/chatbotkit/node-sdk/blob/09ac200/packages/sdk/src/partner/user/token/v1.js#L66)

___

### TokenInstance

Ƭ **TokenInstance**<\>: { `createdAt`: `number` ; `id`: `string` ; `updatedAt`: `number`  } & [`TokenOptions`](partner_user_token_v1.md#tokenoptions)

#### Defined in

[partner/user/token/v1.js:13](https://github.com/chatbotkit/node-sdk/blob/09ac200/packages/sdk/src/partner/user/token/v1.js#L13)

___

### TokenListResponse

Ƭ **TokenListResponse**<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `items` | [`TokenInstance`](partner_user_token_v1.md#tokeninstance)[] |

#### Defined in

[partner/user/token/v1.js:17](https://github.com/chatbotkit/node-sdk/blob/09ac200/packages/sdk/src/partner/user/token/v1.js#L17)

___

### TokenListStreamItem

Ƭ **TokenListStreamItem**<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `data` | [`TokenInstance`](partner_user_token_v1.md#tokeninstance) |
| `type` | ``"item"`` |

#### Defined in

[partner/user/token/v1.js:22](https://github.com/chatbotkit/node-sdk/blob/09ac200/packages/sdk/src/partner/user/token/v1.js#L22)

___

### TokenListStreamType

Ƭ **TokenListStreamType**<\>: [`TokenListStreamItem`](partner_user_token_v1.md#tokenliststreamitem)

#### Defined in

[partner/user/token/v1.js:24](https://github.com/chatbotkit/node-sdk/blob/09ac200/packages/sdk/src/partner/user/token/v1.js#L24)

___

### TokenOptions

Ƭ **TokenOptions**<\>: `Object`

#### Defined in

[partner/user/token/v1.js:7](https://github.com/chatbotkit/node-sdk/blob/09ac200/packages/sdk/src/partner/user/token/v1.js#L7)

## Functions

### tokenCreate

▸ **tokenCreate**(`client`, `userId`, `request`): `Promise`<[`TokenCreateResponse`](partner_user_token_v1.md#tokencreateresponse)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | `ChatBotKitClient` |
| `userId` | `string` |
| `request` | [`TokenOptions`](partner_user_token_v1.md#tokenoptions) |

#### Returns

`Promise`<[`TokenCreateResponse`](partner_user_token_v1.md#tokencreateresponse)\>

#### Defined in

[partner/user/token/v1.js:55](https://github.com/chatbotkit/node-sdk/blob/09ac200/packages/sdk/src/partner/user/token/v1.js#L55)

___

### tokenDelete

▸ **tokenDelete**(`client`, `userId`, `tokenId`): `Promise`<[`TokenDeleteResponse`](partner_user_token_v1.md#tokendeleteresponse)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | `ChatBotKitClient` |
| `userId` | `string` |
| `tokenId` | `string` |

#### Returns

`Promise`<[`TokenDeleteResponse`](partner_user_token_v1.md#tokendeleteresponse)\>

#### Defined in

[partner/user/token/v1.js:73](https://github.com/chatbotkit/node-sdk/blob/09ac200/packages/sdk/src/partner/user/token/v1.js#L73)

___

### tokenList

▸ **tokenList**(`client`, `userId`, `cursor?`): `ResponsePromise`<[`TokenListResponse`](partner_user_token_v1.md#tokenlistresponse), [`TokenListStreamItem`](partner_user_token_v1.md#tokenliststreamitem)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | `ChatBotKitClient` |
| `userId` | `string` |
| `cursor?` | `string` |

#### Returns

`ResponsePromise`<[`TokenListResponse`](partner_user_token_v1.md#tokenlistresponse), [`TokenListStreamItem`](partner_user_token_v1.md#tokenliststreamitem)\>

#### Defined in

[partner/user/token/v1.js:31](https://github.com/chatbotkit/node-sdk/blob/09ac200/packages/sdk/src/partner/user/token/v1.js#L31)
