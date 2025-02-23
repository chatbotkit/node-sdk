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
- [ensure](contact.ContactClient.md#ensure)
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

[contact/index.js:27](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/contact/index.js#L27)

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

[client.js:254](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/client.js#L254)

___

### create

▸ **create**(`request`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<[`ContactCreateResponse`](../modules/contact_v1.md#contactcreateresponse)\>

Creates a new contact.

#### Parameters

| Name | Type |
| :------ | :------ |
| `request` | [`ContactOptions`](../modules/contact_v1.md#contactoptions) |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<[`ContactCreateResponse`](../modules/contact_v1.md#contactcreateresponse)\>

#### Defined in

[contact/index.js:63](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/contact/index.js#L63)

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

[contact/index.js:84](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/contact/index.js#L84)

___

### ensure

▸ **ensure**(`request`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<[`ContactEnsureResponse`](../modules/contact_v1.md#contactensureresponse)\>

Ensures a contact exists.

#### Parameters

| Name | Type |
| :------ | :------ |
| `request` | [`ContactEnsureRequest`](../modules/contact_v1.md#contactensurerequest) |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<[`ContactEnsureResponse`](../modules/contact_v1.md#contactensureresponse)\>

#### Defined in

[contact/index.js:94](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/contact/index.js#L94)

___

### fetch

▸ **fetch**(`contactId`): [`ResponsePromise`](client.ResponsePromise.md)\<[`ContactFetchResponse`](../modules/contact_v1.md#contactfetchresponse), `never`\>

Fetches a contact.

#### Parameters

| Name | Type |
| :------ | :------ |
| `contactId` | `string` |

#### Returns

[`ResponsePromise`](client.ResponsePromise.md)\<[`ContactFetchResponse`](../modules/contact_v1.md#contactfetchresponse), `never`\>

#### Defined in

[contact/index.js:53](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/contact/index.js#L53)

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

[contact/index.js:43](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/contact/index.js#L43)

___

### update

▸ **update**(`contactId`, `request`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<[`ContactUpdateResponse`](../modules/contact_v1.md#contactupdateresponse)\>

Updates a contact.

#### Parameters

| Name | Type |
| :------ | :------ |
| `contactId` | `string` |
| `request` | [`ContactOptions`](../modules/contact_v1.md#contactoptions) |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<[`ContactUpdateResponse`](../modules/contact_v1.md#contactupdateresponse)\>

#### Defined in

[contact/index.js:74](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/contact/index.js#L74)
