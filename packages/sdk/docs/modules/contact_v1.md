[@chatbotkit/sdk](../README.md) / [Modules](../modules.md) / contact/v1

# Module: contact/v1

## Table of contents

### Type Aliases

- [ChatBotKitClient](contact_v1.md#chatbotkitclient)
- [ContactCreateRequest](contact_v1.md#contactcreaterequest)
- [ContactCreateResponse](contact_v1.md#contactcreateresponse)
- [ContactDeleteResponse](contact_v1.md#contactdeleteresponse)
- [ContactEnsureRequest](contact_v1.md#contactensurerequest)
- [ContactEnsureResponse](contact_v1.md#contactensureresponse)
- [ContactFetchResponse](contact_v1.md#contactfetchresponse)
- [ContactInstance](contact_v1.md#contactinstance)
- [ContactListRequest](contact_v1.md#contactlistrequest)
- [ContactListResponse](contact_v1.md#contactlistresponse)
- [ContactListStreamItemType](contact_v1.md#contactliststreamitemtype)
- [ContactListStreamType](contact_v1.md#contactliststreamtype)
- [ContactOptions](contact_v1.md#contactoptions)
- [ContactUpdateRequest](contact_v1.md#contactupdaterequest)
- [ContactUpdateResponse](contact_v1.md#contactupdateresponse)
- [ResponsePromise](contact_v1.md#responsepromise)

### Functions

- [createContact](contact_v1.md#createcontact)
- [deleteContact](contact_v1.md#deletecontact)
- [ensureContact](contact_v1.md#ensurecontact)
- [fetchContact](contact_v1.md#fetchcontact)
- [listContacts](contact_v1.md#listcontacts)
- [updateContact](contact_v1.md#updatecontact)

## Type Aliases

### ChatBotKitClient

Ƭ **ChatBotKitClient**\<\>: [`client`](client.md)

#### Defined in

[contact/v1.js:2](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/contact/v1.js#L2)

___

### ContactCreateRequest

Ƭ **ContactCreateRequest**\<\>: [`ContactOptions`](contact_v1.md#contactoptions) & {}

#### Defined in

[contact/v1.js:82](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/contact/v1.js#L82)

___

### ContactCreateResponse

Ƭ **ContactCreateResponse**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Defined in

[contact/v1.js:86](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/contact/v1.js#L86)

___

### ContactDeleteResponse

Ƭ **ContactDeleteResponse**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Defined in

[contact/v1.js:136](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/contact/v1.js#L136)

___

### ContactEnsureRequest

Ƭ **ContactEnsureRequest**\<\>: [`ContactOptions`](contact_v1.md#contactoptions) & \{ `fingerprint`: `string`  }

#### Defined in

[contact/v1.js:157](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/contact/v1.js#L157)

___

### ContactEnsureResponse

Ƭ **ContactEnsureResponse**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Defined in

[contact/v1.js:161](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/contact/v1.js#L161)

___

### ContactFetchResponse

Ƭ **ContactFetchResponse**\<\>: [`ContactInstance`](contact_v1.md#contactinstance) & {}

#### Defined in

[contact/v1.js:64](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/contact/v1.js#L64)

___

### ContactInstance

Ƭ **ContactInstance**\<\>: [`ContactOptions`](contact_v1.md#contactoptions) & \{ `createdAt`: `number` ; `id`: `string` ; `updatedAt`: `number`  }

#### Defined in

[contact/v1.js:27](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/contact/v1.js#L27)

___

### ContactListRequest

Ƭ **ContactListRequest**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `cursor?` | `string` |
| `meta?` | [`Record`]( https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type )\<`string`, `string`\> |
| `order?` | ``"desc"`` \| ``"asc"`` |
| `take?` | `number` |

#### Defined in

[contact/v1.js:36](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/contact/v1.js#L36)

___

### ContactListResponse

Ƭ **ContactListResponse**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `items` | [`ContactInstance`](contact_v1.md#contactinstance)[] |

#### Defined in

[contact/v1.js:38](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/contact/v1.js#L38)

___

### ContactListStreamItemType

Ƭ **ContactListStreamItemType**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `data` | [`ContactInstance`](contact_v1.md#contactinstance) |
| `type` | ``"item"`` |

#### Defined in

[contact/v1.js:43](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/contact/v1.js#L43)

___

### ContactListStreamType

Ƭ **ContactListStreamType**\<\>: [`ContactListStreamItemType`](contact_v1.md#contactliststreamitemtype)

#### Defined in

[contact/v1.js:45](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/contact/v1.js#L45)

___

### ContactOptions

Ƭ **ContactOptions**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `description?` | `string` |
| `email?` | `string` |
| `fingerprint?` | `string` |
| `meta?` | [`Record`]( https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type )\<`string`, `any`\> |
| `name?` | `string` |
| `nick?` | `string` |
| `phone?` | `string` |
| `verifiedAt?` | `number` |

#### Defined in

[contact/v1.js:21](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/contact/v1.js#L21)

___

### ContactUpdateRequest

Ƭ **ContactUpdateRequest**\<\>: [`ContactOptions`](contact_v1.md#contactoptions) & {}

#### Defined in

[contact/v1.js:108](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/contact/v1.js#L108)

___

### ContactUpdateResponse

Ƭ **ContactUpdateResponse**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Defined in

[contact/v1.js:112](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/contact/v1.js#L112)

___

### ResponsePromise

Ƭ **ResponsePromise**\<`T`, `U`\>: [`client`](client.md)

#### Type parameters

| Name |
| :------ |
| `T` |
| `U` |

#### Defined in

[contact/v1.js:8](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/contact/v1.js#L8)

## Functions

### createContact

▸ **createContact**(`client`, `request`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<[`ContactCreateResponse`](contact_v1.md#contactcreateresponse)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`ChatBotKitClient`](../classes/client.ChatBotKitClient.md) |
| `request` | [`ContactOptions`](contact_v1.md#contactoptions) |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<[`ContactCreateResponse`](contact_v1.md#contactcreateresponse)\>

#### Defined in

[contact/v1.js:92](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/contact/v1.js#L92)

___

### deleteContact

▸ **deleteContact**(`client`, `contactId`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<[`ContactDeleteResponse`](contact_v1.md#contactdeleteresponse)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`ChatBotKitClient`](../classes/client.ChatBotKitClient.md) |
| `contactId` | `string` |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<[`ContactDeleteResponse`](contact_v1.md#contactdeleteresponse)\>

#### Defined in

[contact/v1.js:142](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/contact/v1.js#L142)

___

### ensureContact

▸ **ensureContact**(`client`, `request`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<[`ContactEnsureResponse`](contact_v1.md#contactensureresponse)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`ChatBotKitClient`](../classes/client.ChatBotKitClient.md) |
| `request` | [`ContactEnsureRequest`](contact_v1.md#contactensurerequest) |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<[`ContactEnsureResponse`](contact_v1.md#contactensureresponse)\>

#### Defined in

[contact/v1.js:167](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/contact/v1.js#L167)

___

### fetchContact

▸ **fetchContact**(`client`, `contactId`): [`ResponsePromise`](../classes/client.ResponsePromise.md)\<[`ContactFetchResponse`](contact_v1.md#contactfetchresponse), `never`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`ChatBotKitClient`](../classes/client.ChatBotKitClient.md) |
| `contactId` | `string` |

#### Returns

[`ResponsePromise`](../classes/client.ResponsePromise.md)\<[`ContactFetchResponse`](contact_v1.md#contactfetchresponse), `never`\>

#### Defined in

[contact/v1.js:70](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/contact/v1.js#L70)

___

### listContacts

▸ **listContacts**(`client`, `request?`): [`ResponsePromise`](../classes/client.ResponsePromise.md)\<[`ContactListResponse`](contact_v1.md#contactlistresponse), [`ContactListStreamItemType`](contact_v1.md#contactliststreamitemtype)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`ChatBotKitClient`](../classes/client.ChatBotKitClient.md) |
| `request?` | [`ContactListRequest`](contact_v1.md#contactlistrequest) |

#### Returns

[`ResponsePromise`](../classes/client.ResponsePromise.md)\<[`ContactListResponse`](contact_v1.md#contactlistresponse), [`ContactListStreamItemType`](contact_v1.md#contactliststreamitemtype)\>

#### Defined in

[contact/v1.js:51](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/contact/v1.js#L51)

___

### updateContact

▸ **updateContact**(`client`, `contactId`, `request`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<[`ContactUpdateResponse`](contact_v1.md#contactupdateresponse)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`ChatBotKitClient`](../classes/client.ChatBotKitClient.md) |
| `contactId` | `string` |
| `request` | [`ContactOptions`](contact_v1.md#contactoptions) |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<[`ContactUpdateResponse`](contact_v1.md#contactupdateresponse)\>

#### Defined in

[contact/v1.js:119](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/contact/v1.js#L119)
