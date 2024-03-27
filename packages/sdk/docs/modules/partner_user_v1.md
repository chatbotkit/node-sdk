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

Ƭ **ChatBotKitClient**\<\>: [`client`](client.md)

#### Defined in

[partner/user/v1.js:2](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/partner/user/v1.js#L2)

___

### PartnerUserCreateRequest

Ƭ **PartnerUserCreateRequest**\<\>: [`PartnerUserOptions`](partner_user_v1.md#partneruseroptions) & {}

#### Defined in

[partner/user/v1.js:71](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/partner/user/v1.js#L71)

___

### PartnerUserCreateResponse

Ƭ **PartnerUserCreateResponse**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Defined in

[partner/user/v1.js:75](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/partner/user/v1.js#L75)

___

### PartnerUserDeleteResponse

Ƭ **PartnerUserDeleteResponse**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Defined in

[partner/user/v1.js:125](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/partner/user/v1.js#L125)

___

### PartnerUserFetchResponse

Ƭ **PartnerUserFetchResponse**\<\>: [`PartnerUserInstance`](partner_user_v1.md#partneruserinstance) & {}

#### Defined in

[partner/user/v1.js:54](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/partner/user/v1.js#L54)

___

### PartnerUserInstance

Ƭ **PartnerUserInstance**\<\>: [`PartnerUserOptions`](partner_user_v1.md#partneruseroptions) & \{ `createdAt`: `number` ; `id`: `string` ; `updatedAt`: `number`  }

#### Defined in

[partner/user/v1.js:22](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/partner/user/v1.js#L22)

___

### PartnerUserListRequest

Ƭ **PartnerUserListRequest**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `cursor?` | `string` |
| `meta?` | [`Record`]( https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type )\<`string`, `string`\> |
| `order?` | ``"desc"`` \| ``"asc"`` |
| `take?` | `number` |

#### Defined in

[partner/user/v1.js:26](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/partner/user/v1.js#L26)

___

### PartnerUserListResponse

Ƭ **PartnerUserListResponse**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `items` | [`PartnerUserInstance`](partner_user_v1.md#partneruserinstance)[] |

#### Defined in

[partner/user/v1.js:28](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/partner/user/v1.js#L28)

___

### PartnerUserListStreamItem

Ƭ **PartnerUserListStreamItem**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `data` | [`PartnerUserInstance`](partner_user_v1.md#partneruserinstance) |
| `type` | ``"item"`` |

#### Defined in

[partner/user/v1.js:33](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/partner/user/v1.js#L33)

___

### PartnerUserListStreamType

Ƭ **PartnerUserListStreamType**\<\>: [`PartnerUserListStreamItem`](partner_user_v1.md#partneruserliststreamitem)

#### Defined in

[partner/user/v1.js:35](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/partner/user/v1.js#L35)

___

### PartnerUserOptions

Ƭ **PartnerUserOptions**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `image?` | `string` |
| `meta?` | [`Record`]( https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type )\<`string`, `any`\> |
| `name?` | `string` |

#### Defined in

[partner/user/v1.js:16](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/partner/user/v1.js#L16)

___

### PartnerUserUpdateRequest

Ƭ **PartnerUserUpdateRequest**\<\>: [`PartnerUserOptions`](partner_user_v1.md#partneruseroptions) & {}

#### Defined in

[partner/user/v1.js:97](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/partner/user/v1.js#L97)

___

### PartnerUserUpdateResponse

Ƭ **PartnerUserUpdateResponse**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Defined in

[partner/user/v1.js:101](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/partner/user/v1.js#L101)

___

### ResponsePromise

Ƭ **ResponsePromise**\<`T`, `U`\>: [`client`](client.md)

#### Type parameters

| Name |
| :------ |
| `T` |
| `U` |

#### Defined in

[partner/user/v1.js:8](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/partner/user/v1.js#L8)

## Functions

### createPartnerUser

▸ **createPartnerUser**(`client`, `request`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<[`PartnerUserCreateResponse`](partner_user_v1.md#partnerusercreateresponse)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`ChatBotKitClient`](../classes/client.ChatBotKitClient.md) |
| `request` | [`PartnerUserOptions`](partner_user_v1.md#partneruseroptions) |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<[`PartnerUserCreateResponse`](partner_user_v1.md#partnerusercreateresponse)\>

#### Defined in

[partner/user/v1.js:81](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/partner/user/v1.js#L81)

___

### deletePartnerUser

▸ **deletePartnerUser**(`client`, `userId`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<[`PartnerUserDeleteResponse`](partner_user_v1.md#partneruserdeleteresponse)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`ChatBotKitClient`](../classes/client.ChatBotKitClient.md) |
| `userId` | `string` |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<[`PartnerUserDeleteResponse`](partner_user_v1.md#partneruserdeleteresponse)\>

#### Defined in

[partner/user/v1.js:131](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/partner/user/v1.js#L131)

___

### fetchPartnerUser

▸ **fetchPartnerUser**(`client`, `userId`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<[`PartnerUserFetchResponse`](partner_user_v1.md#partneruserfetchresponse)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`ChatBotKitClient`](../classes/client.ChatBotKitClient.md) |
| `userId` | `string` |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<[`PartnerUserFetchResponse`](partner_user_v1.md#partneruserfetchresponse)\>

#### Defined in

[partner/user/v1.js:60](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/partner/user/v1.js#L60)

___

### listPartnerUsers

▸ **listPartnerUsers**(`client`, `request?`): [`ResponsePromise`](../classes/client.ResponsePromise.md)\<[`PartnerUserListResponse`](partner_user_v1.md#partneruserlistresponse), [`PartnerUserListStreamItem`](partner_user_v1.md#partneruserliststreamitem)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`ChatBotKitClient`](../classes/client.ChatBotKitClient.md) |
| `request?` | [`PartnerUserListRequest`](partner_user_v1.md#partneruserlistrequest) |

#### Returns

[`ResponsePromise`](../classes/client.ResponsePromise.md)\<[`PartnerUserListResponse`](partner_user_v1.md#partneruserlistresponse), [`PartnerUserListStreamItem`](partner_user_v1.md#partneruserliststreamitem)\>

#### Defined in

[partner/user/v1.js:41](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/partner/user/v1.js#L41)

___

### updatePartnerUser

▸ **updatePartnerUser**(`client`, `userId`, `request`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<[`PartnerUserUpdateResponse`](partner_user_v1.md#partneruserupdateresponse)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`ChatBotKitClient`](../classes/client.ChatBotKitClient.md) |
| `userId` | `string` |
| `request` | [`PartnerUserOptions`](partner_user_v1.md#partneruseroptions) |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<[`PartnerUserUpdateResponse`](partner_user_v1.md#partneruserupdateresponse)\>

#### Defined in

[partner/user/v1.js:108](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/partner/user/v1.js#L108)
