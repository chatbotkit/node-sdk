[@chatbotkit/sdk](../README.md) / [Modules](../modules.md) / [partner/user](../modules/partner_user.md) / PartnerUserClient

# Class: PartnerUserClient

[partner/user](../modules/partner_user.md).PartnerUserClient

Partner user client.

## Hierarchy

- [`ChatBotKitClient`](client.ChatBotKitClient.md)

  ↳ **`PartnerUserClient`**

## Table of contents

### Constructors

- [constructor](partner_user.PartnerUserClient.md#constructor)

### Properties

- [token](partner_user.PartnerUserClient.md#token)

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
| `options` | [`ChatBotKitClientOptions`](../interfaces/client.ChatBotKitClientOptions.md) |

#### Returns

[`PartnerUserClient`](partner_user.PartnerUserClient.md)

#### Overrides

[ChatBotKitClient](client.ChatBotKitClient.md).[constructor](client.ChatBotKitClient.md#constructor)

#### Defined in

[partner/user/index.js:24](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/partner/user/index.js#L24)

## Properties

### token

• **token**: [`PartnerUserTokenClient`](partner_user_token.PartnerUserTokenClient.md)

#### Defined in

[partner/user/index.js:30](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/partner/user/index.js#L30)

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
| `options.buffer?` | [`ArrayBuffer`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer ) |
| `options.endpoint?` | `string` |
| `options.external?` | `boolean` |
| `options.file?` | `Object` |
| `options.file.data` | `string` \| [`ArrayBuffer`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer ) |
| `options.file.name?` | `string` |
| `options.file.type?` | `string` |
| `options.headers?` | [`Record`]( https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type )\<`string`, `any`\> |
| `options.method?` | `string` |
| `options.query?` | [`Record`]( https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type )\<`string`, `any`\> |
| `options.record?` | [`Record`]( https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type )\<`string`, `any`\> |

#### Returns

[`ResponsePromise`](client.ResponsePromise.md)\<`T`, `U`\>

#### Inherited from

[ChatBotKitClient](client.ChatBotKitClient.md).[clientFetch](client.ChatBotKitClient.md#clientfetch)

#### Defined in

[client.js:251](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/client.js#L251)

___

### create

▸ **create**(`request`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<[`PartnerUserCreateResponse`](../modules/partner_user_v1.md#partnerusercreateresponse)\>

Creates a new user.

#### Parameters

| Name | Type |
| :------ | :------ |
| `request` | [`PartnerUserOptions`](../modules/partner_user_v1.md#partneruseroptions) |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<[`PartnerUserCreateResponse`](../modules/partner_user_v1.md#partnerusercreateresponse)\>

#### Defined in

[partner/user/index.js:59](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/partner/user/index.js#L59)

___

### delete

▸ **delete**(`userId`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<[`PartnerUserDeleteResponse`](../modules/partner_user_v1.md#partneruserdeleteresponse)\>

Deletes the user.

#### Parameters

| Name | Type |
| :------ | :------ |
| `userId` | `string` |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<[`PartnerUserDeleteResponse`](../modules/partner_user_v1.md#partneruserdeleteresponse)\>

#### Defined in

[partner/user/index.js:80](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/partner/user/index.js#L80)

___

### fetch

▸ **fetch**(`userId`): [`ResponsePromise`](client.ResponsePromise.md)\<[`PartnerUserFetchResponse`](../modules/partner_user_v1.md#partneruserfetchresponse), `never`\>

Fetches a user.

#### Parameters

| Name | Type |
| :------ | :------ |
| `userId` | `string` |

#### Returns

[`ResponsePromise`](client.ResponsePromise.md)\<[`PartnerUserFetchResponse`](../modules/partner_user_v1.md#partneruserfetchresponse), `never`\>

#### Defined in

[partner/user/index.js:49](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/partner/user/index.js#L49)

___

### list

▸ **list**(`request?`): [`ResponsePromise`](client.ResponsePromise.md)\<[`PartnerUserListResponse`](../modules/partner_user_v1.md#partneruserlistresponse), [`PartnerUserListStreamItem`](../modules/partner_user_v1.md#partneruserliststreamitem)\>

Retrieves a list of all users.

#### Parameters

| Name | Type |
| :------ | :------ |
| `request?` | [`PartnerUserListRequest`](../modules/partner_user_v1.md#partneruserlistrequest) |

#### Returns

[`ResponsePromise`](client.ResponsePromise.md)\<[`PartnerUserListResponse`](../modules/partner_user_v1.md#partneruserlistresponse), [`PartnerUserListStreamItem`](../modules/partner_user_v1.md#partneruserliststreamitem)\>

#### Defined in

[partner/user/index.js:39](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/partner/user/index.js#L39)

___

### update

▸ **update**(`userId`, `request`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<[`PartnerUserUpdateResponse`](../modules/partner_user_v1.md#partneruserupdateresponse)\>

Updates the user.

#### Parameters

| Name | Type |
| :------ | :------ |
| `userId` | `string` |
| `request` | [`PartnerUserOptions`](../modules/partner_user_v1.md#partneruseroptions) |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<[`PartnerUserUpdateResponse`](../modules/partner_user_v1.md#partneruserupdateresponse)\>

#### Defined in

[partner/user/index.js:70](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/partner/user/index.js#L70)
