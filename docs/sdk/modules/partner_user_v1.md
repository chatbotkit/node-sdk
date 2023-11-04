[@chatbotkit/sdk](../README.md) / [Modules](../modules.md) / partner/user/v1

# Module: partner/user/v1

## Table of contents

### Type Aliases

- [ChatBotKitClient](partner_user_v1.md#chatbotkitclient)
- [UserCreateRequest](partner_user_v1.md#usercreaterequest)
- [UserCreateResponse](partner_user_v1.md#usercreateresponse)
- [UserDeleteResponse](partner_user_v1.md#userdeleteresponse)
- [UserFetchResponse](partner_user_v1.md#userfetchresponse)
- [UserInstance](partner_user_v1.md#userinstance)
- [UserListResponse](partner_user_v1.md#userlistresponse)
- [UserListStreamItem](partner_user_v1.md#userliststreamitem)
- [UserListStreamType](partner_user_v1.md#userliststreamtype)
- [UserOptions](partner_user_v1.md#useroptions)
- [UserUpdateRequest](partner_user_v1.md#userupdaterequest)
- [UserUpdateResponse](partner_user_v1.md#userupdateresponse)

### Functions

- [userCreate](partner_user_v1.md#usercreate)
- [userDelete](partner_user_v1.md#userdelete)
- [userFetch](partner_user_v1.md#userfetch)
- [userList](partner_user_v1.md#userlist)
- [userUpdate](partner_user_v1.md#userupdate)

## Type Aliases

### ChatBotKitClient

Ƭ **ChatBotKitClient**<\>: `ChatBotKitClient`

#### Defined in

[partner/user/v1.js:2](https://github.com/chatbotkit/node-sdk/blob/78a3d8e/packages/sdk/src/partner/user/v1.js#L2)

___

### UserCreateRequest

Ƭ **UserCreateRequest**<\>: [`UserOptions`](partner_user_v1.md#useroptions)

#### Defined in

[partner/user/v1.js:57](https://github.com/chatbotkit/node-sdk/blob/78a3d8e/packages/sdk/src/partner/user/v1.js#L57)

___

### UserCreateResponse

Ƭ **UserCreateResponse**<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Defined in

[partner/user/v1.js:61](https://github.com/chatbotkit/node-sdk/blob/78a3d8e/packages/sdk/src/partner/user/v1.js#L61)

___

### UserDeleteResponse

Ƭ **UserDeleteResponse**<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Defined in

[partner/user/v1.js:98](https://github.com/chatbotkit/node-sdk/blob/78a3d8e/packages/sdk/src/partner/user/v1.js#L98)

___

### UserFetchResponse

Ƭ **UserFetchResponse**<\>: [`UserInstance`](partner_user_v1.md#userinstance)

#### Defined in

[partner/user/v1.js:44](https://github.com/chatbotkit/node-sdk/blob/78a3d8e/packages/sdk/src/partner/user/v1.js#L44)

___

### UserInstance

Ƭ **UserInstance**<\>: { `createdAt`: `number` ; `id`: `string` ; `updatedAt`: `number`  } & [`UserOptions`](partner_user_v1.md#useroptions)

#### Defined in

[partner/user/v1.js:16](https://github.com/chatbotkit/node-sdk/blob/78a3d8e/packages/sdk/src/partner/user/v1.js#L16)

___

### UserListResponse

Ƭ **UserListResponse**<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `items` | [`UserInstance`](partner_user_v1.md#userinstance)[] |

#### Defined in

[partner/user/v1.js:20](https://github.com/chatbotkit/node-sdk/blob/78a3d8e/packages/sdk/src/partner/user/v1.js#L20)

___

### UserListStreamItem

Ƭ **UserListStreamItem**<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `data` | [`UserInstance`](partner_user_v1.md#userinstance) |
| `type` | ``"item"`` |

#### Defined in

[partner/user/v1.js:25](https://github.com/chatbotkit/node-sdk/blob/78a3d8e/packages/sdk/src/partner/user/v1.js#L25)

___

### UserListStreamType

Ƭ **UserListStreamType**<\>: [`UserListStreamItem`](partner_user_v1.md#userliststreamitem)

#### Defined in

[partner/user/v1.js:27](https://github.com/chatbotkit/node-sdk/blob/78a3d8e/packages/sdk/src/partner/user/v1.js#L27)

___

### UserOptions

Ƭ **UserOptions**<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `image?` | `string` |
| `meta?` | `Record`<`string`, `any`\> |
| `name?` | `string` |

#### Defined in

[partner/user/v1.js:10](https://github.com/chatbotkit/node-sdk/blob/78a3d8e/packages/sdk/src/partner/user/v1.js#L10)

___

### UserUpdateRequest

Ƭ **UserUpdateRequest**<\>: [`UserOptions`](partner_user_v1.md#useroptions)

#### Defined in

[partner/user/v1.js:76](https://github.com/chatbotkit/node-sdk/blob/78a3d8e/packages/sdk/src/partner/user/v1.js#L76)

___

### UserUpdateResponse

Ƭ **UserUpdateResponse**<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Defined in

[partner/user/v1.js:80](https://github.com/chatbotkit/node-sdk/blob/78a3d8e/packages/sdk/src/partner/user/v1.js#L80)

## Functions

### userCreate

▸ **userCreate**(`client`, `request`): `Promise`<[`UserCreateResponse`](partner_user_v1.md#usercreateresponse)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | `ChatBotKitClient` |
| `request` | [`UserOptions`](partner_user_v1.md#useroptions) |

#### Returns

`Promise`<[`UserCreateResponse`](partner_user_v1.md#usercreateresponse)\>

#### Defined in

[partner/user/v1.js:67](https://github.com/chatbotkit/node-sdk/blob/78a3d8e/packages/sdk/src/partner/user/v1.js#L67)

___

### userDelete

▸ **userDelete**(`client`, `userId`): `Promise`<[`UserDeleteResponse`](partner_user_v1.md#userdeleteresponse)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | `ChatBotKitClient` |
| `userId` | `string` |

#### Returns

`Promise`<[`UserDeleteResponse`](partner_user_v1.md#userdeleteresponse)\>

#### Defined in

[partner/user/v1.js:104](https://github.com/chatbotkit/node-sdk/blob/78a3d8e/packages/sdk/src/partner/user/v1.js#L104)

___

### userFetch

▸ **userFetch**(`client`, `userId`): `Promise`<[`UserInstance`](partner_user_v1.md#userinstance)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | `ChatBotKitClient` |
| `userId` | `string` |

#### Returns

`Promise`<[`UserInstance`](partner_user_v1.md#userinstance)\>

#### Defined in

[partner/user/v1.js:50](https://github.com/chatbotkit/node-sdk/blob/78a3d8e/packages/sdk/src/partner/user/v1.js#L50)

___

### userList

▸ **userList**(`client`, `cursor?`): `ResponsePromise`<[`UserListResponse`](partner_user_v1.md#userlistresponse), [`UserListStreamItem`](partner_user_v1.md#userliststreamitem)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | `ChatBotKitClient` |
| `cursor?` | `string` |

#### Returns

`ResponsePromise`<[`UserListResponse`](partner_user_v1.md#userlistresponse), [`UserListStreamItem`](partner_user_v1.md#userliststreamitem)\>

#### Defined in

[partner/user/v1.js:33](https://github.com/chatbotkit/node-sdk/blob/78a3d8e/packages/sdk/src/partner/user/v1.js#L33)

___

### userUpdate

▸ **userUpdate**(`client`, `userId`, `request`): `Promise`<[`UserUpdateResponse`](partner_user_v1.md#userupdateresponse)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | `ChatBotKitClient` |
| `userId` | `string` |
| `request` | [`UserOptions`](partner_user_v1.md#useroptions) |

#### Returns

`Promise`<[`UserUpdateResponse`](partner_user_v1.md#userupdateresponse)\>

#### Defined in

[partner/user/v1.js:87](https://github.com/chatbotkit/node-sdk/blob/78a3d8e/packages/sdk/src/partner/user/v1.js#L87)
