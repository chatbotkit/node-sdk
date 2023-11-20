[@chatbotkit/sdk](../README.md) / [Modules](../modules.md) / [partner/user](../modules/partner_user.md) / PartnerUserClient

# Class: PartnerUserClient

[partner/user](../modules/partner_user.md).PartnerUserClient

**`Template`**

**`Template`**

## Hierarchy

- `ChatBotKitClient`

  ↳ **`PartnerUserClient`**

## Table of contents

### Constructors

- [constructor](partner_user.PartnerUserClient.md#constructor)

### Properties

- [secret](partner_user.PartnerUserClient.md#secret)
- [token](partner_user.PartnerUserClient.md#token)
- [url](partner_user.PartnerUserClient.md#url)

### Methods

- [clientFetch](partner_user.PartnerUserClient.md#clientfetch)
- [create](partner_user.PartnerUserClient.md#create)
- [delete](partner_user.PartnerUserClient.md#delete)
- [fetch](partner_user.PartnerUserClient.md#fetch)
- [list](partner_user.PartnerUserClient.md#list)
- [update](partner_user.PartnerUserClient.md#update)

## Constructors

### constructor

• **new PartnerUserClient**(`options`): [`PartnerUserClient`](partner_user.PartnerUserClient.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `ChatBotKitClientOptions` |

#### Returns

[`PartnerUserClient`](partner_user.PartnerUserClient.md)

#### Overrides

ChatBotKitClient.constructor

#### Defined in

[partner/user/index.js:21](https://github.com/chatbotkit/node-sdk/blob/ae269f9/packages/sdk/src/partner/user/index.js#L21)

## Properties

### secret

• **secret**: `string`

#### Inherited from

ChatBotKitClient.secret

#### Defined in

[client.js:187](https://github.com/chatbotkit/node-sdk/blob/ae269f9/packages/sdk/src/client.js#L187)

___

### token

• **token**: [`PartnerUserTokenClient`](partner_user_token.PartnerUserTokenClient.md)

#### Defined in

[partner/user/index.js:24](https://github.com/chatbotkit/node-sdk/blob/ae269f9/packages/sdk/src/partner/user/index.js#L24)

___

### url

• **url**: `URL`

#### Inherited from

ChatBotKitClient.url

#### Defined in

[client.js:189](https://github.com/chatbotkit/node-sdk/blob/ae269f9/packages/sdk/src/client.js#L189)

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

[client.js:206](https://github.com/chatbotkit/node-sdk/blob/ae269f9/packages/sdk/src/client.js#L206)

___

### create

▸ **create**(`request`): `Promise`\<[`PartnerUserCreateResponse`](../modules/partner_user_v1.md#partnerusercreateresponse)\>

Creates a new user.

#### Parameters

| Name | Type |
| :------ | :------ |
| `request` | [`PartnerUserOptions`](../modules/partner_user_v1.md#partneruseroptions) |

#### Returns

`Promise`\<[`PartnerUserCreateResponse`](../modules/partner_user_v1.md#partnerusercreateresponse)\>

#### Defined in

[partner/user/index.js:53](https://github.com/chatbotkit/node-sdk/blob/ae269f9/packages/sdk/src/partner/user/index.js#L53)

___

### delete

▸ **delete**(`userId`): `Promise`\<[`PartnerUserDeleteResponse`](../modules/partner_user_v1.md#partneruserdeleteresponse)\>

Deletes the user.

#### Parameters

| Name | Type |
| :------ | :------ |
| `userId` | `string` |

#### Returns

`Promise`\<[`PartnerUserDeleteResponse`](../modules/partner_user_v1.md#partneruserdeleteresponse)\>

#### Defined in

[partner/user/index.js:74](https://github.com/chatbotkit/node-sdk/blob/ae269f9/packages/sdk/src/partner/user/index.js#L74)

___

### fetch

▸ **fetch**(`userId`): `Promise`\<[`PartnerUserInstance`](../modules/partner_user_v1.md#partneruserinstance)\>

Fetches a user.

#### Parameters

| Name | Type |
| :------ | :------ |
| `userId` | `string` |

#### Returns

`Promise`\<[`PartnerUserInstance`](../modules/partner_user_v1.md#partneruserinstance)\>

#### Defined in

[partner/user/index.js:43](https://github.com/chatbotkit/node-sdk/blob/ae269f9/packages/sdk/src/partner/user/index.js#L43)

___

### list

▸ **list**(`request?`): `ResponsePromise`\<[`PartnerUserListResponse`](../modules/partner_user_v1.md#partneruserlistresponse), [`PartnerUserListStreamItem`](../modules/partner_user_v1.md#partneruserliststreamitem)\>

Retrieves a list of all users.

#### Parameters

| Name | Type |
| :------ | :------ |
| `request?` | [`PartnerUserListRequest`](../modules/partner_user_v1.md#partneruserlistrequest) |

#### Returns

`ResponsePromise`\<[`PartnerUserListResponse`](../modules/partner_user_v1.md#partneruserlistresponse), [`PartnerUserListStreamItem`](../modules/partner_user_v1.md#partneruserliststreamitem)\>

#### Defined in

[partner/user/index.js:33](https://github.com/chatbotkit/node-sdk/blob/ae269f9/packages/sdk/src/partner/user/index.js#L33)

___

### update

▸ **update**(`userId`, `request`): `Promise`\<[`PartnerUserUpdateResponse`](../modules/partner_user_v1.md#partneruserupdateresponse)\>

Updates the user.

#### Parameters

| Name | Type |
| :------ | :------ |
| `userId` | `string` |
| `request` | [`PartnerUserOptions`](../modules/partner_user_v1.md#partneruseroptions) |

#### Returns

`Promise`\<[`PartnerUserUpdateResponse`](../modules/partner_user_v1.md#partneruserupdateresponse)\>

#### Defined in

[partner/user/index.js:64](https://github.com/chatbotkit/node-sdk/blob/ae269f9/packages/sdk/src/partner/user/index.js#L64)
