[@chatbotkit/sdk](../README.md) / [Modules](../modules.md) / [partner/user/token](../modules/partner_user_token.md) / PartnerUserTokenClient

# Class: PartnerUserTokenClient

[partner/user/token](../modules/partner_user_token.md).PartnerUserTokenClient

**`Template`**

**`Template`**

## Hierarchy

- `ChatBotKitClient`

  ↳ **`PartnerUserTokenClient`**

## Table of contents

### Constructors

- [constructor](partner_user_token.PartnerUserTokenClient.md#constructor)

### Properties

- [secret](partner_user_token.PartnerUserTokenClient.md#secret)
- [url](partner_user_token.PartnerUserTokenClient.md#url)

### Methods

- [clientFetch](partner_user_token.PartnerUserTokenClient.md#clientfetch)
- [create](partner_user_token.PartnerUserTokenClient.md#create)
- [delete](partner_user_token.PartnerUserTokenClient.md#delete)
- [list](partner_user_token.PartnerUserTokenClient.md#list)

## Constructors

### constructor

• **new PartnerUserTokenClient**(`options`): [`PartnerUserTokenClient`](partner_user_token.PartnerUserTokenClient.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `ChatBotKitClientOptions` |

#### Returns

[`PartnerUserTokenClient`](partner_user_token.PartnerUserTokenClient.md)

#### Overrides

ChatBotKitClient.constructor

#### Defined in

[partner/user/token/index.js:18](https://github.com/chatbotkit/node-sdk/blob/d5a6097/packages/sdk/src/partner/user/token/index.js#L18)

## Properties

### secret

• **secret**: `string`

#### Inherited from

ChatBotKitClient.secret

#### Defined in

[client.js:187](https://github.com/chatbotkit/node-sdk/blob/d5a6097/packages/sdk/src/client.js#L187)

___

### url

• **url**: `URL`

#### Inherited from

ChatBotKitClient.url

#### Defined in

[client.js:189](https://github.com/chatbotkit/node-sdk/blob/d5a6097/packages/sdk/src/client.js#L189)

## Methods

### clientFetch

▸ **clientFetch**\<`T`, `U`\>(`path`, `options?`): `ResponsePromise`\<`T`, `U`\>

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
| `options.data?` | `Record`\<`string`, `any`\> |
| `options.file?` | `Object` |
| `options.file.data` | `string` \| `ArrayBuffer` |
| `options.file.name?` | `string` |
| `options.file.type?` | `string` |
| `options.query?` | `Record`\<`string`, `any`\> |

#### Returns

`ResponsePromise`\<`T`, `U`\>

#### Inherited from

ChatBotKitClient.clientFetch

#### Defined in

[client.js:206](https://github.com/chatbotkit/node-sdk/blob/d5a6097/packages/sdk/src/client.js#L206)

___

### create

▸ **create**(`userId`, `request`): `Promise`\<[`PartnerUserTokenCreateResponse`](../modules/partner_user_token_v1.md#partnerusertokencreateresponse)\>

Creates a new user token.

#### Parameters

| Name | Type |
| :------ | :------ |
| `userId` | `string` |
| `request` | [`PartnerUserTokenOptions`](../modules/partner_user_token_v1.md#partnerusertokenoptions) |

#### Returns

`Promise`\<[`PartnerUserTokenCreateResponse`](../modules/partner_user_token_v1.md#partnerusertokencreateresponse)\>

#### Defined in

[partner/user/token/index.js:40](https://github.com/chatbotkit/node-sdk/blob/d5a6097/packages/sdk/src/partner/user/token/index.js#L40)

___

### delete

▸ **delete**(`userId`, `tokenId`): `Promise`\<[`PartnerUserTokenDeleteResponse`](../modules/partner_user_token_v1.md#partnerusertokendeleteresponse)\>

Deletes the user.

#### Parameters

| Name | Type |
| :------ | :------ |
| `userId` | `string` |
| `tokenId` | `string` |

#### Returns

`Promise`\<[`PartnerUserTokenDeleteResponse`](../modules/partner_user_token_v1.md#partnerusertokendeleteresponse)\>

#### Defined in

[partner/user/token/index.js:51](https://github.com/chatbotkit/node-sdk/blob/d5a6097/packages/sdk/src/partner/user/token/index.js#L51)

___

### list

▸ **list**(`userId`, `request?`): `ResponsePromise`\<[`PartnerUserTokenListResponse`](../modules/partner_user_token_v1.md#partnerusertokenlistresponse), [`PartnerUserTokenListStreamItem`](../modules/partner_user_token_v1.md#partnerusertokenliststreamitem)\>

Retrieves a list of all user tokens.

#### Parameters

| Name | Type |
| :------ | :------ |
| `userId` | `string` |
| `request?` | [`PartnerUserTokenListRequest`](../modules/partner_user_token_v1.md#partnerusertokenlistrequest) |

#### Returns

`ResponsePromise`\<[`PartnerUserTokenListResponse`](../modules/partner_user_token_v1.md#partnerusertokenlistresponse), [`PartnerUserTokenListStreamItem`](../modules/partner_user_token_v1.md#partnerusertokenliststreamitem)\>

#### Defined in

[partner/user/token/index.js:29](https://github.com/chatbotkit/node-sdk/blob/d5a6097/packages/sdk/src/partner/user/token/index.js#L29)
