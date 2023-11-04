[@chatbotkit/sdk](../README.md) / [Modules](../modules.md) / [partner/user/token](../modules/partner_user_token.md) / TokenClient

# Class: TokenClient

[partner/user/token](../modules/partner_user_token.md).TokenClient

## Hierarchy

- `ChatBotKitClient`

  ↳ **`TokenClient`**

## Table of contents

### Constructors

- [constructor](partner_user_token.TokenClient.md#constructor)

### Properties

- [secret](partner_user_token.TokenClient.md#secret)
- [url](partner_user_token.TokenClient.md#url)

### Methods

- [clientFetch](partner_user_token.TokenClient.md#clientfetch)
- [create](partner_user_token.TokenClient.md#create)
- [delete](partner_user_token.TokenClient.md#delete)
- [list](partner_user_token.TokenClient.md#list)

## Constructors

### constructor

• **new TokenClient**(`options`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `ChatBotKitClientOptions` |

#### Overrides

ChatBotKitClient.constructor

#### Defined in

[partner/user/token/index.js:8](https://github.com/chatbotkit/node-sdk/blob/78a3d8e/packages/sdk/src/partner/user/token/index.js#L8)

## Properties

### secret

• **secret**: `string`

#### Inherited from

ChatBotKitClient.secret

#### Defined in

[client.js:182](https://github.com/chatbotkit/node-sdk/blob/78a3d8e/packages/sdk/src/client.js#L182)

___

### url

• **url**: `URL`

#### Inherited from

ChatBotKitClient.url

#### Defined in

[client.js:184](https://github.com/chatbotkit/node-sdk/blob/78a3d8e/packages/sdk/src/client.js#L184)

## Methods

### clientFetch

▸ **clientFetch**<`T`, `U`\>(`path`, `options?`): `ResponsePromise`<`T`, `U`\>

#### Type parameters

| Name |
| :------ |
| `T` |
| `U` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | `string` |
| `options?` | `Object` |
| `options.data?` | `Record`<`string`, `any`\> |
| `options.file?` | `Object` |
| `options.file.data` | `string` \| `ArrayBuffer` |
| `options.file.name?` | `string` |
| `options.file.type?` | `string` |

#### Returns

`ResponsePromise`<`T`, `U`\>

#### Inherited from

ChatBotKitClient.clientFetch

#### Defined in

[client.js:201](https://github.com/chatbotkit/node-sdk/blob/78a3d8e/packages/sdk/src/client.js#L201)

___

### create

▸ **create**(`userId`, `request`): `Promise`<[`TokenCreateResponse`](../modules/partner_user_token_v1.md#tokencreateresponse)\>

Creates a new user.

#### Parameters

| Name | Type |
| :------ | :------ |
| `userId` | `string` |
| `request` | [`TokenOptions`](../modules/partner_user_token_v1.md#tokenoptions) |

#### Returns

`Promise`<[`TokenCreateResponse`](../modules/partner_user_token_v1.md#tokencreateresponse)\>

#### Defined in

[partner/user/token/index.js:30](https://github.com/chatbotkit/node-sdk/blob/78a3d8e/packages/sdk/src/partner/user/token/index.js#L30)

___

### delete

▸ **delete**(`userId`, `tokenId`): `Promise`<[`TokenDeleteResponse`](../modules/partner_user_token_v1.md#tokendeleteresponse)\>

Deletes the user.

#### Parameters

| Name | Type |
| :------ | :------ |
| `userId` | `string` |
| `tokenId` | `string` |

#### Returns

`Promise`<[`TokenDeleteResponse`](../modules/partner_user_token_v1.md#tokendeleteresponse)\>

#### Defined in

[partner/user/token/index.js:41](https://github.com/chatbotkit/node-sdk/blob/78a3d8e/packages/sdk/src/partner/user/token/index.js#L41)

___

### list

▸ **list**(`userId`, `cursor?`): `ResponsePromise`<[`TokenListResponse`](../modules/partner_user_token_v1.md#tokenlistresponse), [`TokenListStreamItem`](../modules/partner_user_token_v1.md#tokenliststreamitem)\>

Retrieves a list of all existing user tokens associated with this client.

#### Parameters

| Name | Type |
| :------ | :------ |
| `userId` | `string` |
| `cursor?` | `string` |

#### Returns

`ResponsePromise`<[`TokenListResponse`](../modules/partner_user_token_v1.md#tokenlistresponse), [`TokenListStreamItem`](../modules/partner_user_token_v1.md#tokenliststreamitem)\>

#### Defined in

[partner/user/token/index.js:19](https://github.com/chatbotkit/node-sdk/blob/78a3d8e/packages/sdk/src/partner/user/token/index.js#L19)
