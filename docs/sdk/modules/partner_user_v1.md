[@chatbotkit/sdk](../README.md) / [Modules](../modules.md) / partner/user/v1

# Module: partner/user/v1

## Table of contents

### Type Aliases

- [ChatBotKitClient](partner_user_v1.md#chatbotkitclient)
- [PartnerUserCreateRequest](partner_user_v1.md#partnerusercreaterequest)
- [PartnerUserCreateResponse](partner_user_v1.md#partnerusercreateresponse)
- [PartnerUserDeleteResponse](partner_user_v1.md#partneruserdeleteresponse)
- [PartnerUserFetchResponse](partner_user_v1.md#partneruserfetchresponse)
- [PartnerUserInstance](partner_user_v1.md#partneruserinstance)
- [PartnerUserListRequest](partner_user_v1.md#partneruserlistrequest)
- [PartnerUserListResponse](partner_user_v1.md#partneruserlistresponse)
- [PartnerUserListStreamItem](partner_user_v1.md#partneruserliststreamitem)
- [PartnerUserListStreamType](partner_user_v1.md#partneruserliststreamtype)
- [PartnerUserOptions](partner_user_v1.md#partneruseroptions)
- [PartnerUserUpdateRequest](partner_user_v1.md#partneruserupdaterequest)
- [PartnerUserUpdateResponse](partner_user_v1.md#partneruserupdateresponse)
- [ResponsePromise](partner_user_v1.md#responsepromise)

### Functions

- [createPartnerUser](partner_user_v1.md#createpartneruser)
- [deletePartnerUser](partner_user_v1.md#deletepartneruser)
- [fetchPartnerUser](partner_user_v1.md#fetchpartneruser)
- [listPartnerUsers](partner_user_v1.md#listpartnerusers)
- [updatePartnerUser](partner_user_v1.md#updatepartneruser)

## Type Aliases

### ChatBotKitClient

Ƭ **ChatBotKitClient**\<\>: `ChatBotKitClient`

#### Defined in

[partner/user/v1.js:2](https://github.com/chatbotkit/node-sdk/blob/ae269f9/packages/sdk/src/partner/user/v1.js#L2)

___

### PartnerUserCreateRequest

Ƭ **PartnerUserCreateRequest**\<\>: [`PartnerUserOptions`](partner_user_v1.md#partneruseroptions)

#### Defined in

[partner/user/v1.js:69](https://github.com/chatbotkit/node-sdk/blob/ae269f9/packages/sdk/src/partner/user/v1.js#L69)

___

### PartnerUserCreateResponse

Ƭ **PartnerUserCreateResponse**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Defined in

[partner/user/v1.js:73](https://github.com/chatbotkit/node-sdk/blob/ae269f9/packages/sdk/src/partner/user/v1.js#L73)

___

### PartnerUserDeleteResponse

Ƭ **PartnerUserDeleteResponse**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Defined in

[partner/user/v1.js:118](https://github.com/chatbotkit/node-sdk/blob/ae269f9/packages/sdk/src/partner/user/v1.js#L118)

___

### PartnerUserFetchResponse

Ƭ **PartnerUserFetchResponse**\<\>: [`PartnerUserInstance`](partner_user_v1.md#partneruserinstance)

#### Defined in

[partner/user/v1.js:53](https://github.com/chatbotkit/node-sdk/blob/ae269f9/packages/sdk/src/partner/user/v1.js#L53)

___

### PartnerUserInstance

Ƭ **PartnerUserInstance**\<\>: \{ `createdAt`: `number` ; `id`: `string` ; `updatedAt`: `number`  } & [`PartnerUserOptions`](partner_user_v1.md#partneruseroptions)

#### Defined in

[partner/user/v1.js:22](https://github.com/chatbotkit/node-sdk/blob/ae269f9/packages/sdk/src/partner/user/v1.js#L22)

___

### PartnerUserListRequest

Ƭ **PartnerUserListRequest**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `cursor?` | `string` |
| `meta?` | `Record`\<`string`, `string`\> |
| `take?` | `number` |

#### Defined in

[partner/user/v1.js:26](https://github.com/chatbotkit/node-sdk/blob/ae269f9/packages/sdk/src/partner/user/v1.js#L26)

___

### PartnerUserListResponse

Ƭ **PartnerUserListResponse**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `items` | [`PartnerUserInstance`](partner_user_v1.md#partneruserinstance)[] |

#### Defined in

[partner/user/v1.js:28](https://github.com/chatbotkit/node-sdk/blob/ae269f9/packages/sdk/src/partner/user/v1.js#L28)

___

### PartnerUserListStreamItem

Ƭ **PartnerUserListStreamItem**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `data` | [`PartnerUserInstance`](partner_user_v1.md#partneruserinstance) |
| `type` | ``"item"`` |

#### Defined in

[partner/user/v1.js:33](https://github.com/chatbotkit/node-sdk/blob/ae269f9/packages/sdk/src/partner/user/v1.js#L33)

___

### PartnerUserListStreamType

Ƭ **PartnerUserListStreamType**\<\>: [`PartnerUserListStreamItem`](partner_user_v1.md#partneruserliststreamitem)

#### Defined in

[partner/user/v1.js:35](https://github.com/chatbotkit/node-sdk/blob/ae269f9/packages/sdk/src/partner/user/v1.js#L35)

___

### PartnerUserOptions

Ƭ **PartnerUserOptions**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `image?` | `string` |
| `meta?` | `Record`\<`string`, `any`\> |
| `name?` | `string` |

#### Defined in

[partner/user/v1.js:16](https://github.com/chatbotkit/node-sdk/blob/ae269f9/packages/sdk/src/partner/user/v1.js#L16)

___

### PartnerUserUpdateRequest

Ƭ **PartnerUserUpdateRequest**\<\>: [`PartnerUserOptions`](partner_user_v1.md#partneruseroptions)

#### Defined in

[partner/user/v1.js:92](https://github.com/chatbotkit/node-sdk/blob/ae269f9/packages/sdk/src/partner/user/v1.js#L92)

___

### PartnerUserUpdateResponse

Ƭ **PartnerUserUpdateResponse**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Defined in

[partner/user/v1.js:96](https://github.com/chatbotkit/node-sdk/blob/ae269f9/packages/sdk/src/partner/user/v1.js#L96)

___

### ResponsePromise

Ƭ **ResponsePromise**\<`T`, `U`\>: `ResponsePromise`

#### Type parameters

| Name |
| :------ |
| `T` |
| `U` |

#### Defined in

[partner/user/v1.js:8](https://github.com/chatbotkit/node-sdk/blob/ae269f9/packages/sdk/src/partner/user/v1.js#L8)

## Functions

### createPartnerUser

▸ **createPartnerUser**(`client`, `request`): `Promise`\<[`PartnerUserCreateResponse`](partner_user_v1.md#partnerusercreateresponse)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | `ChatBotKitClient` |
| `request` | [`PartnerUserOptions`](partner_user_v1.md#partneruseroptions) |

#### Returns

`Promise`\<[`PartnerUserCreateResponse`](partner_user_v1.md#partnerusercreateresponse)\>

#### Defined in

[partner/user/v1.js:79](https://github.com/chatbotkit/node-sdk/blob/ae269f9/packages/sdk/src/partner/user/v1.js#L79)

___

### deletePartnerUser

▸ **deletePartnerUser**(`client`, `userId`): `Promise`\<[`PartnerUserDeleteResponse`](partner_user_v1.md#partneruserdeleteresponse)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | `ChatBotKitClient` |
| `userId` | `string` |

#### Returns

`Promise`\<[`PartnerUserDeleteResponse`](partner_user_v1.md#partneruserdeleteresponse)\>

#### Defined in

[partner/user/v1.js:124](https://github.com/chatbotkit/node-sdk/blob/ae269f9/packages/sdk/src/partner/user/v1.js#L124)

___

### fetchPartnerUser

▸ **fetchPartnerUser**(`client`, `userId`): `Promise`\<[`PartnerUserInstance`](partner_user_v1.md#partneruserinstance)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | `ChatBotKitClient` |
| `userId` | `string` |

#### Returns

`Promise`\<[`PartnerUserInstance`](partner_user_v1.md#partneruserinstance)\>

#### Defined in

[partner/user/v1.js:59](https://github.com/chatbotkit/node-sdk/blob/ae269f9/packages/sdk/src/partner/user/v1.js#L59)

___

### listPartnerUsers

▸ **listPartnerUsers**(`client`, `request?`): `ResponsePromise`\<[`PartnerUserListResponse`](partner_user_v1.md#partneruserlistresponse), [`PartnerUserListStreamItem`](partner_user_v1.md#partneruserliststreamitem)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | `ChatBotKitClient` |
| `request?` | [`PartnerUserListRequest`](partner_user_v1.md#partneruserlistrequest) |

#### Returns

`ResponsePromise`\<[`PartnerUserListResponse`](partner_user_v1.md#partneruserlistresponse), [`PartnerUserListStreamItem`](partner_user_v1.md#partneruserliststreamitem)\>

#### Defined in

[partner/user/v1.js:41](https://github.com/chatbotkit/node-sdk/blob/ae269f9/packages/sdk/src/partner/user/v1.js#L41)

___

### updatePartnerUser

▸ **updatePartnerUser**(`client`, `userId`, `request`): `Promise`\<[`PartnerUserUpdateResponse`](partner_user_v1.md#partneruserupdateresponse)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | `ChatBotKitClient` |
| `userId` | `string` |
| `request` | [`PartnerUserOptions`](partner_user_v1.md#partneruseroptions) |

#### Returns

`Promise`\<[`PartnerUserUpdateResponse`](partner_user_v1.md#partneruserupdateresponse)\>

#### Defined in

[partner/user/v1.js:103](https://github.com/chatbotkit/node-sdk/blob/ae269f9/packages/sdk/src/partner/user/v1.js#L103)
