[@chatbotkit/sdk](../README.md) / [Modules](../modules.md) / [partner/user/token](../modules/partner_user_token.md) / PartnerUserTokenClient

# Class: PartnerUserTokenClient

[partner/user/token](../modules/partner_user_token.md).PartnerUserTokenClient

Partner user token client.

## Hierarchy

- [`ChatBotKitClient`](client.ChatBotKitClient.md)

  ↳ **`PartnerUserTokenClient`**

## Table of contents

### Constructors

- [constructor](partner_user_token.PartnerUserTokenClient.md#constructor)

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

[partner/user/token/index.js:21](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/partner/user/token/index.js#L21)

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

[partner/user/token/index.js:43](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/partner/user/token/index.js#L43)

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

[partner/user/token/index.js:54](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/partner/user/token/index.js#L54)

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

[partner/user/token/index.js:32](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/partner/user/token/index.js#L32)
