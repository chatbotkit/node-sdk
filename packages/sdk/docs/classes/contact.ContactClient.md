[@chatbotkit/sdk](../README.md) / [Modules](../modules.md) / [contact](../modules/contact.md) / ContactClient

# Class: ContactClient

[contact](../modules/contact.md).ContactClient

Contact client.

## Hierarchy

- [`ChatBotKitClient`](client.ChatBotKitClient.md)

  ↳ **`ContactClient`**

## Table of contents

### Constructors

- [constructor](contact.ContactClient.md#constructor)

### Methods

- [clientFetch](contact.ContactClient.md#clientfetch)
- [create](contact.ContactClient.md#create)
- [delete](contact.ContactClient.md#delete)
- [fetch](contact.ContactClient.md#fetch)
- [list](contact.ContactClient.md#list)
- [update](contact.ContactClient.md#update)

## Constructors

### constructor

• **new ContactClient**(`options`): [`ContactClient`](contact.ContactClient.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`ChatBotKitClientOptions`](../interfaces/client.ChatBotKitClientOptions.md) |

#### Returns

[`ContactClient`](contact.ContactClient.md)

#### Overrides

[ChatBotKitClient](client.ChatBotKitClient.md).[constructor](client.ChatBotKitClient.md#constructor)

#### Defined in

[contact/index.js:23](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/contact/index.js#L23)

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

[client.js:221](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/client.js#L221)

___

### create

▸ **create**(`request`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<[`ContactCreateResponse`](../modules/contact_v1.md#contactcreateresponse)\>

Creates a new contact.

#### Parameters

| Name | Type |
| :------ | :------ |
| `request` | [`ContactCreateRequest`](../modules/contact_v1.md#contactcreaterequest) |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<[`ContactCreateResponse`](../modules/contact_v1.md#contactcreateresponse)\>

#### Defined in

[contact/index.js:53](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/contact/index.js#L53)

___

### delete

▸ **delete**(`contactId`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<[`ContactDeleteResponse`](../modules/contact_v1.md#contactdeleteresponse)\>

Deletes the contact.

#### Parameters

| Name | Type |
| :------ | :------ |
| `contactId` | `string` |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<[`ContactDeleteResponse`](../modules/contact_v1.md#contactdeleteresponse)\>

#### Defined in

[contact/index.js:74](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/contact/index.js#L74)

___

### fetch

▸ **fetch**(`contactId`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<[`ContactFetchResponse`](../modules/contact_v1.md#contactfetchresponse)\>

Fetches a contact.

#### Parameters

| Name | Type |
| :------ | :------ |
| `contactId` | `string` |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<[`ContactFetchResponse`](../modules/contact_v1.md#contactfetchresponse)\>

#### Defined in

[contact/index.js:43](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/contact/index.js#L43)

___

### list

▸ **list**(`request?`): [`ResponsePromise`](client.ResponsePromise.md)\<[`ContactListResponse`](../modules/contact_v1.md#contactlistresponse), [`ContactListStreamItemType`](../modules/contact_v1.md#contactliststreamitemtype)\>

Retrieves a list of all contacts.

#### Parameters

| Name | Type |
| :------ | :------ |
| `request?` | [`ContactListRequest`](../modules/contact_v1.md#contactlistrequest) |

#### Returns

[`ResponsePromise`](client.ResponsePromise.md)\<[`ContactListResponse`](../modules/contact_v1.md#contactlistresponse), [`ContactListStreamItemType`](../modules/contact_v1.md#contactliststreamitemtype)\>

#### Defined in

[contact/index.js:33](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/contact/index.js#L33)

___

### update

▸ **update**(`contactId`, `request`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<[`ContactUpdateResponse`](../modules/contact_v1.md#contactupdateresponse)\>

Updates a contact.

#### Parameters

| Name | Type |
| :------ | :------ |
| `contactId` | `string` |
| `request` | [`ContactUpdateRequest`](../modules/contact_v1.md#contactupdaterequest) |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<[`ContactUpdateResponse`](../modules/contact_v1.md#contactupdateresponse)\>

#### Defined in

[contact/index.js:64](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/contact/index.js#L64)
