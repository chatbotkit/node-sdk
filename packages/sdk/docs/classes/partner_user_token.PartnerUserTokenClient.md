[@chatbotkit/sdk](../README.md) / [Modules](../modules.md) / [partner/user/token](../modules/partner_user_token.md) / PartnerUserTokenClient

# Class: PartnerUserTokenClient

[partner/user/token](../modules/partner_user_token.md).PartnerUserTokenClient

**`Template`**

**`Template`**

## Hierarchy

- [`ChatBotKitClient`](client.ChatBotKitClient.md)

  ↳ **`PartnerUserTokenClient`**

## Table of contents

### Constructors

- [constructor](partner_user_token.PartnerUserTokenClient.md#constructor)

### Properties

- [endpoints](partner_user_token.PartnerUserTokenClient.md#endpoints)
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
| `options` | [`ChatBotKitClientOptions`](../modules/client.md#chatbotkitclientoptions) |

#### Returns

[`PartnerUserTokenClient`](partner_user_token.PartnerUserTokenClient.md)

#### Overrides

[ChatBotKitClient](client.ChatBotKitClient.md).[constructor](client.ChatBotKitClient.md#constructor)

#### Defined in

[partner/user/token/index.js:18](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/partner/user/token/index.js#L18)

## Properties

### endpoints

• **endpoints**: `Record`\<`string`, `string`\>

#### Inherited from

[ChatBotKitClient](client.ChatBotKitClient.md).[endpoints](client.ChatBotKitClient.md#endpoints)

#### Defined in

[client.js:201](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/client.js#L201)

___

### secret

• **secret**: `string`

#### Inherited from

[ChatBotKitClient](client.ChatBotKitClient.md).[secret](client.ChatBotKitClient.md#secret)

#### Defined in

[client.js:189](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/client.js#L189)

___

### url

• **url**: `URL`

#### Inherited from

[ChatBotKitClient](client.ChatBotKitClient.md).[url](client.ChatBotKitClient.md#url)

#### Defined in

[client.js:191](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/client.js#L191)

## Methods

### clientFetch

▸ **clientFetch**\<`T`, `U`\>(`path`, `options?`): [`ResponsePromise`](client.ResponsePromise.md)\<`T`, `U`\>

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

[`ResponsePromise`](client.ResponsePromise.md)\<`T`, `U`\>

#### Inherited from

[ChatBotKitClient](client.ChatBotKitClient.md).[clientFetch](client.ChatBotKitClient.md#clientfetch)

#### Defined in

[client.js:211](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/client.js#L211)

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

[partner/user/token/index.js:40](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/partner/user/token/index.js#L40)

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

[partner/user/token/index.js:51](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/partner/user/token/index.js#L51)

___

### list

▸ **list**(`userId`, `request?`): [`ResponsePromise`](client.ResponsePromise.md)\<[`PartnerUserTokenListResponse`](../modules/partner_user_token_v1.md#partnerusertokenlistresponse), [`PartnerUserTokenListStreamItem`](../modules/partner_user_token_v1.md#partnerusertokenliststreamitem)\>

Retrieves a list of all user tokens.

#### Parameters

| Name | Type |
| :------ | :------ |
| `userId` | `string` |
| `request?` | [`PartnerUserTokenListRequest`](../modules/partner_user_token_v1.md#partnerusertokenlistrequest) |

#### Returns

[`ResponsePromise`](client.ResponsePromise.md)\<[`PartnerUserTokenListResponse`](../modules/partner_user_token_v1.md#partnerusertokenlistresponse), [`PartnerUserTokenListStreamItem`](../modules/partner_user_token_v1.md#partnerusertokenliststreamitem)\>

#### Defined in

[partner/user/token/index.js:29](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/partner/user/token/index.js#L29)
