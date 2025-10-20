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

[contact/v1.js:83](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/contact/v1.js#L83)

___

### ContactCreateResponse

Ƭ **ContactCreateResponse**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Defined in

[contact/v1.js:87](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/contact/v1.js#L87)

___

### ContactDeleteResponse

Ƭ **ContactDeleteResponse**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Defined in

[contact/v1.js:137](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/contact/v1.js#L137)

___

### ContactEnsureRequest

Ƭ **ContactEnsureRequest**\<\>: [`ContactOptions`](contact_v1.md#contactoptions) & \{ `fingerprint`: `string`  }

#### Defined in

[contact/v1.js:158](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/contact/v1.js#L158)

___

### ContactEnsureResponse

Ƭ **ContactEnsureResponse**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Defined in

[contact/v1.js:162](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/contact/v1.js#L162)

___

### ContactFetchResponse

Ƭ **ContactFetchResponse**\<\>: [`ContactInstance`](contact_v1.md#contactinstance) & {}

#### Defined in

[contact/v1.js:65](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/contact/v1.js#L65)

___

### ContactInstance

Ƭ **ContactInstance**\<\>: [`ContactOptions`](contact_v1.md#contactoptions) & \{ `createdAt`: `number` ; `id`: `string` ; `updatedAt`: `number`  }

#### Defined in

[contact/v1.js:28](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/contact/v1.js#L28)

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

[contact/v1.js:37](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/contact/v1.js#L37)

___

### ContactListResponse

Ƭ **ContactListResponse**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `items` | [`ContactInstance`](contact_v1.md#contactinstance)[] |

#### Defined in

[contact/v1.js:39](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/contact/v1.js#L39)

___

### ContactListStreamItemType

Ƭ **ContactListStreamItemType**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `data` | [`ContactInstance`](contact_v1.md#contactinstance) |
| `type` | ``"item"`` |

#### Defined in

[contact/v1.js:44](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/contact/v1.js#L44)

___

### ContactListStreamType

Ƭ **ContactListStreamType**\<\>: [`ContactListStreamItemType`](contact_v1.md#contactliststreamitemtype)

#### Defined in

[contact/v1.js:46](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/contact/v1.js#L46)

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
| `preferences?` | `string` |
| `verifiedAt?` | `number` |

#### Defined in

[contact/v1.js:22](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/contact/v1.js#L22)

___

### ContactUpdateRequest

Ƭ **ContactUpdateRequest**\<\>: [`ContactOptions`](contact_v1.md#contactoptions) & {}

#### Defined in

[contact/v1.js:109](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/contact/v1.js#L109)

___

### ContactUpdateResponse

Ƭ **ContactUpdateResponse**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Defined in

[contact/v1.js:113](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/contact/v1.js#L113)

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

[contact/v1.js:93](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/contact/v1.js#L93)

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

[contact/v1.js:143](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/contact/v1.js#L143)

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

[contact/v1.js:168](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/contact/v1.js#L168)

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

[contact/v1.js:71](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/contact/v1.js#L71)

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

[contact/v1.js:52](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/contact/v1.js#L52)

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

[contact/v1.js:120](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/contact/v1.js#L120)
