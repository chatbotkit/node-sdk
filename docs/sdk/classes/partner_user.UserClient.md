[@chatbotkit/sdk](../README.md) / [Modules](../modules.md) / [partner/user](../modules/partner_user.md) / UserClient

# Class: UserClient

[partner/user](../modules/partner_user.md).UserClient

## Hierarchy

- `ChatBotKitClient`

  ↳ **`UserClient`**

## Table of contents

### Constructors

- [constructor](partner_user.UserClient.md#constructor)

### Properties

- [secret](partner_user.UserClient.md#secret)
- [token](partner_user.UserClient.md#token)
- [url](partner_user.UserClient.md#url)

### Methods

- [clientFetch](partner_user.UserClient.md#clientfetch)
- [create](partner_user.UserClient.md#create)
- [delete](partner_user.UserClient.md#delete)
- [fetch](partner_user.UserClient.md#fetch)
- [list](partner_user.UserClient.md#list)
- [update](partner_user.UserClient.md#update)

## Constructors

### constructor

• **new UserClient**(`options`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `ChatBotKitClientOptions` |

#### Overrides

ChatBotKitClient.constructor

#### Defined in

[partner/user/index.js:15](https://github.com/chatbotkit/node-sdk/blob/78a3d8e/packages/sdk/src/partner/user/index.js#L15)

## Properties

### secret

• **secret**: `string`

#### Inherited from

ChatBotKitClient.secret

#### Defined in

[client.js:182](https://github.com/chatbotkit/node-sdk/blob/78a3d8e/packages/sdk/src/client.js#L182)

___

### token

• **token**: [`TokenClient`](partner_user_token.TokenClient.md)

#### Defined in

[partner/user/index.js:18](https://github.com/chatbotkit/node-sdk/blob/78a3d8e/packages/sdk/src/partner/user/index.js#L18)

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

▸ **create**(`request`): `Promise`<[`UserCreateResponse`](../modules/partner_user_v1.md#usercreateresponse)\>

Creates a new user.

#### Parameters

| Name | Type |
| :------ | :------ |
| `request` | [`UserOptions`](../modules/partner_user_v1.md#useroptions) |

#### Returns

`Promise`<[`UserCreateResponse`](../modules/partner_user_v1.md#usercreateresponse)\>

#### Defined in

[partner/user/index.js:47](https://github.com/chatbotkit/node-sdk/blob/78a3d8e/packages/sdk/src/partner/user/index.js#L47)

___

### delete

▸ **delete**(`userId`): `Promise`<[`UserDeleteResponse`](../modules/partner_user_v1.md#userdeleteresponse)\>

Deletes the user.

#### Parameters

| Name | Type |
| :------ | :------ |
| `userId` | `string` |

#### Returns

`Promise`<[`UserDeleteResponse`](../modules/partner_user_v1.md#userdeleteresponse)\>

#### Defined in

[partner/user/index.js:68](https://github.com/chatbotkit/node-sdk/blob/78a3d8e/packages/sdk/src/partner/user/index.js#L68)

___

### fetch

▸ **fetch**(`userId`): `Promise`<[`UserInstance`](../modules/partner_user_v1.md#userinstance)\>

Fetches a user.

#### Parameters

| Name | Type |
| :------ | :------ |
| `userId` | `string` |

#### Returns

`Promise`<[`UserInstance`](../modules/partner_user_v1.md#userinstance)\>

#### Defined in

[partner/user/index.js:37](https://github.com/chatbotkit/node-sdk/blob/78a3d8e/packages/sdk/src/partner/user/index.js#L37)

___

### list

▸ **list**(`cursor?`): `ResponsePromise`<[`UserListResponse`](../modules/partner_user_v1.md#userlistresponse), [`UserListStreamItem`](../modules/partner_user_v1.md#userliststreamitem)\>

Retrieves a list of all existing users associated with this client.

#### Parameters

| Name | Type |
| :------ | :------ |
| `cursor?` | `string` |

#### Returns

`ResponsePromise`<[`UserListResponse`](../modules/partner_user_v1.md#userlistresponse), [`UserListStreamItem`](../modules/partner_user_v1.md#userliststreamitem)\>

#### Defined in

[partner/user/index.js:27](https://github.com/chatbotkit/node-sdk/blob/78a3d8e/packages/sdk/src/partner/user/index.js#L27)

___

### update

▸ **update**(`userId`, `request`): `Promise`<[`UserUpdateResponse`](../modules/partner_user_v1.md#userupdateresponse)\>

Updates the user.

#### Parameters

| Name | Type |
| :------ | :------ |
| `userId` | `string` |
| `request` | [`UserOptions`](../modules/partner_user_v1.md#useroptions) |

#### Returns

`Promise`<[`UserUpdateResponse`](../modules/partner_user_v1.md#userupdateresponse)\>

#### Defined in

[partner/user/index.js:58](https://github.com/chatbotkit/node-sdk/blob/78a3d8e/packages/sdk/src/partner/user/index.js#L58)
