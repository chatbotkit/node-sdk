[@chatbotkit/sdk](../README.md) / [Modules](../modules.md) / partner/user/v1

# Module: partner/user/v1

## Table of contents

### Type Aliases

- [ChatBotKitClient](partner_user_v1.md#chatbotkitclient)
- [PartnerUserCreateRequest](partner_user_v1.md#partnerusercreaterequest)
- [PartnerUserCreateRequestBody](partner_user_v1.md#partnerusercreaterequestbody)
- [PartnerUserCreateResponse](partner_user_v1.md#partnerusercreateresponse)
- [PartnerUserCreateResponseBody](partner_user_v1.md#partnerusercreateresponsebody)
- [PartnerUserDeleteRequest](partner_user_v1.md#partneruserdeleterequest)
- [PartnerUserDeleteRequestBody](partner_user_v1.md#partneruserdeleterequestbody)
- [PartnerUserDeleteResponse](partner_user_v1.md#partneruserdeleteresponse)
- [PartnerUserDeleteResponseBody](partner_user_v1.md#partneruserdeleteresponsebody)
- [PartnerUserFetchResponse](partner_user_v1.md#partneruserfetchresponse)
- [PartnerUserListRequest](partner_user_v1.md#partneruserlistrequest)
- [PartnerUserListResponse](partner_user_v1.md#partneruserlistresponse)
- [PartnerUserListStreamType](partner_user_v1.md#partneruserliststreamtype)
- [PartnerUserUpdateRequest](partner_user_v1.md#partneruserupdaterequest)
- [PartnerUserUpdateRequestBody](partner_user_v1.md#partneruserupdaterequestbody)
- [PartnerUserUpdateResponse](partner_user_v1.md#partneruserupdateresponse)
- [PartnerUserUpdateResponseBody](partner_user_v1.md#partneruserupdateresponsebody)
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

Ƭ **PartnerUserCreateRequest**\<\>: [`PartnerUserCreateRequestBody`](partner_user_v1.md#partnerusercreaterequestbody)

#### Defined in

[partner/user/v1.js:55](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/partner/user/v1.js#L55)

___

### PartnerUserCreateRequestBody

Ƭ **PartnerUserCreateRequestBody**\<\>: `operations`[``"createPartnerUser"``][``"requestBody"``][``"content"``][``"application/json"``]

#### Defined in

[partner/user/v1.js:53](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/partner/user/v1.js#L53)

___

### PartnerUserCreateResponse

Ƭ **PartnerUserCreateResponse**\<\>: [`PartnerUserCreateResponseBody`](partner_user_v1.md#partnerusercreateresponsebody)

#### Defined in

[partner/user/v1.js:59](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/partner/user/v1.js#L59)

___

### PartnerUserCreateResponseBody

Ƭ **PartnerUserCreateResponseBody**\<\>: `operations`[``"createPartnerUser"``][``"responses"``][``"200"``][``"content"``][``"application/json"``]

#### Defined in

[partner/user/v1.js:57](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/partner/user/v1.js#L57)

___

### PartnerUserDeleteRequest

Ƭ **PartnerUserDeleteRequest**\<\>: [`PartnerUserDeleteRequestBody`](partner_user_v1.md#partneruserdeleterequestbody)

#### Defined in

[partner/user/v1.js:110](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/partner/user/v1.js#L110)

___

### PartnerUserDeleteRequestBody

Ƭ **PartnerUserDeleteRequestBody**\<\>: `operations`[``"deletePartnerUser"``][``"requestBody"``][``"content"``][``"application/json"``]

#### Defined in

[partner/user/v1.js:108](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/partner/user/v1.js#L108)

___

### PartnerUserDeleteResponse

Ƭ **PartnerUserDeleteResponse**\<\>: [`PartnerUserDeleteResponseBody`](partner_user_v1.md#partneruserdeleteresponsebody)

#### Defined in

[partner/user/v1.js:114](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/partner/user/v1.js#L114)

___

### PartnerUserDeleteResponseBody

Ƭ **PartnerUserDeleteResponseBody**\<\>: `operations`[``"deletePartnerUser"``][``"responses"``][``"200"``][``"content"``][``"application/json"``]

#### Defined in

[partner/user/v1.js:112](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/partner/user/v1.js#L112)

___

### PartnerUserFetchResponse

Ƭ **PartnerUserFetchResponse**\<\>: `operations`[``"fetchPartnerUser"``][``"responses"``][``"200"``][``"content"``][``"application/json"``]

#### Defined in

[partner/user/v1.js:37](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/partner/user/v1.js#L37)

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

[partner/user/v1.js:17](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/partner/user/v1.js#L17)

___

### PartnerUserListResponse

Ƭ **PartnerUserListResponse**\<\>: `operations`[``"listPartnerUsers"``][``"responses"``][``"200"``][``"content"``][``"application/json"``]

#### Defined in

[partner/user/v1.js:19](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/partner/user/v1.js#L19)

___

### PartnerUserListStreamType

Ƭ **PartnerUserListStreamType**\<\>: `operations`[``"listPartnerUsers"``][``"responses"``][``"200"``][``"content"``][``"application/jsonl"``]

#### Defined in

[partner/user/v1.js:21](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/partner/user/v1.js#L21)

___

### PartnerUserUpdateRequest

Ƭ **PartnerUserUpdateRequest**\<\>: [`PartnerUserUpdateRequestBody`](partner_user_v1.md#partneruserupdaterequestbody)

#### Defined in

[partner/user/v1.js:82](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/partner/user/v1.js#L82)

___

### PartnerUserUpdateRequestBody

Ƭ **PartnerUserUpdateRequestBody**\<\>: `operations`[``"updatePartnerUser"``][``"requestBody"``][``"content"``][``"application/json"``]

#### Defined in

[partner/user/v1.js:80](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/partner/user/v1.js#L80)

___

### PartnerUserUpdateResponse

Ƭ **PartnerUserUpdateResponse**\<\>: [`PartnerUserUpdateResponseBody`](partner_user_v1.md#partneruserupdateresponsebody)

#### Defined in

[partner/user/v1.js:86](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/partner/user/v1.js#L86)

___

### PartnerUserUpdateResponseBody

Ƭ **PartnerUserUpdateResponseBody**\<\>: `operations`[``"updatePartnerUser"``][``"responses"``][``"200"``][``"content"``][``"application/json"``]

#### Defined in

[partner/user/v1.js:84](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/partner/user/v1.js#L84)

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

▸ **createPartnerUser**(`client`, `request`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<{}\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`ChatBotKitClient`](../classes/client.ChatBotKitClient.md) |
| `request` | `Object` |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<{}\>

#### Defined in

[partner/user/v1.js:65](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/partner/user/v1.js#L65)

___

### deletePartnerUser

▸ **deletePartnerUser**(`client`, `userId`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<{}\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`ChatBotKitClient`](../classes/client.ChatBotKitClient.md) |
| `userId` | `string` |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<{}\>

#### Defined in

[partner/user/v1.js:120](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/partner/user/v1.js#L120)

___

### fetchPartnerUser

▸ **fetchPartnerUser**(`client`, `userId`): [`ResponsePromise`](../classes/client.ResponsePromise.md)\<{}, `never`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`ChatBotKitClient`](../classes/client.ChatBotKitClient.md) |
| `userId` | `string` |

#### Returns

[`ResponsePromise`](../classes/client.ResponsePromise.md)\<{}, `never`\>

#### Defined in

[partner/user/v1.js:43](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/partner/user/v1.js#L43)

___

### listPartnerUsers

▸ **listPartnerUsers**(`client`, `request?`): [`ResponsePromise`](../classes/client.ResponsePromise.md)\<{}, {}\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`ChatBotKitClient`](../classes/client.ChatBotKitClient.md) |
| `request?` | [`PartnerUserListRequest`](partner_user_v1.md#partneruserlistrequest) |

#### Returns

[`ResponsePromise`](../classes/client.ResponsePromise.md)\<{}, {}\>

#### Defined in

[partner/user/v1.js:27](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/partner/user/v1.js#L27)

___

### updatePartnerUser

▸ **updatePartnerUser**(`client`, `userId`, `request`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<{}\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`ChatBotKitClient`](../classes/client.ChatBotKitClient.md) |
| `userId` | `string` |
| `request` | `Object` |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<{}\>

#### Defined in

[partner/user/v1.js:93](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/partner/user/v1.js#L93)
