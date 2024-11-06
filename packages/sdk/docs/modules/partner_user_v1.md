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

[partner/user/v1.js:72](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/partner/user/v1.js#L72)

___

### PartnerUserCreateResponse

Ƭ **PartnerUserCreateResponse**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Defined in

[partner/user/v1.js:76](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/partner/user/v1.js#L76)

___

### PartnerUserDeleteResponse

Ƭ **PartnerUserDeleteResponse**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Defined in

[partner/user/v1.js:126](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/partner/user/v1.js#L126)

___

### PartnerUserFetchResponse

Ƭ **PartnerUserFetchResponse**\<\>: [`PartnerUserInstance`](partner_user_v1.md#partneruserinstance) & {}

#### Defined in

[partner/user/v1.js:55](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/partner/user/v1.js#L55)

___

### PartnerUserInstance

Ƭ **PartnerUserInstance**\<\>: [`PartnerUserOptions`](partner_user_v1.md#partneruseroptions) & \{ `createdAt`: `number` ; `id`: `string` ; `updatedAt`: `number`  }

#### Defined in

[partner/user/v1.js:23](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/partner/user/v1.js#L23)

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

[partner/user/v1.js:27](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/partner/user/v1.js#L27)

___

### PartnerUserListResponse

Ƭ **PartnerUserListResponse**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `items` | [`PartnerUserInstance`](partner_user_v1.md#partneruserinstance)[] |

#### Defined in

[partner/user/v1.js:29](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/partner/user/v1.js#L29)

___

### PartnerUserListStreamItem

Ƭ **PartnerUserListStreamItem**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `data` | [`PartnerUserInstance`](partner_user_v1.md#partneruserinstance) |
| `type` | ``"item"`` |

#### Defined in

[partner/user/v1.js:34](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/partner/user/v1.js#L34)

___

### PartnerUserListStreamType

Ƭ **PartnerUserListStreamType**\<\>: [`PartnerUserListStreamItem`](partner_user_v1.md#partneruserliststreamitem)

#### Defined in

[partner/user/v1.js:36](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/partner/user/v1.js#L36)

___

### PartnerUserOptions

Ƭ **PartnerUserOptions**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `email?` | `string` |
| `image?` | `string` |
| `meta?` | [`Record`]( https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type )\<`string`, `any`\> |
| `name?` | `string` |

#### Defined in

[partner/user/v1.js:17](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/partner/user/v1.js#L17)

___

### PartnerUserUpdateRequest

Ƭ **PartnerUserUpdateRequest**\<\>: [`PartnerUserOptions`](partner_user_v1.md#partneruseroptions) & {}

#### Defined in

[partner/user/v1.js:98](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/partner/user/v1.js#L98)

___

### PartnerUserUpdateResponse

Ƭ **PartnerUserUpdateResponse**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Defined in

[partner/user/v1.js:102](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/partner/user/v1.js#L102)

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

[partner/user/v1.js:82](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/partner/user/v1.js#L82)

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

[partner/user/v1.js:132](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/partner/user/v1.js#L132)

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

[partner/user/v1.js:61](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/partner/user/v1.js#L61)

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

[partner/user/v1.js:42](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/partner/user/v1.js#L42)

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

[partner/user/v1.js:109](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/partner/user/v1.js#L109)
