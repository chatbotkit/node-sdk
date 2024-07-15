[@chatbotkit/sdk](../README.md) / [Modules](../modules.md) / [index](../modules/index.md) / ContactClient

# Class: ContactClient

[index](../modules/index.md).ContactClient

Contact client.

## Hierarchy

- [`ChatBotKitClient`](client.ChatBotKitClient.md)

  ↳ **`ContactClient`**

## Table of contents

### Constructors

- [constructor](index.ContactClient.md#constructor)

### Methods

- [clientFetch](index.ContactClient.md#clientfetch)
- [create](index.ContactClient.md#create)
- [delete](index.ContactClient.md#delete)
- [fetch](index.ContactClient.md#fetch)
- [list](index.ContactClient.md#list)
- [update](index.ContactClient.md#update)

## Constructors

### constructor

• **new ContactClient**(`options`): [`ContactClient`](index.ContactClient.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`ChatBotKitClientOptions`](../interfaces/client.ChatBotKitClientOptions.md) |

#### Returns

[`ContactClient`](index.ContactClient.md)

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

[client.js:219](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/client.js#L219)

___

### create

▸ **create**(`request`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<`ContactCreateResponse`\>

Creates a new contact.

#### Parameters

| Name | Type |
| :------ | :------ |
| `request` | `ContactCreateRequest` |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<`ContactCreateResponse`\>

#### Defined in

[contact/index.js:53](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/contact/index.js#L53)

___

### delete

▸ **delete**(`contactId`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<`ContactDeleteResponse`\>

Deletes the contact.

#### Parameters

| Name | Type |
| :------ | :------ |
| `contactId` | `string` |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<`ContactDeleteResponse`\>

#### Defined in

[contact/index.js:74](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/contact/index.js#L74)

___

### fetch

▸ **fetch**(`contactId`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<`ContactFetchResponse`\>

Fetches a contact.

#### Parameters

| Name | Type |
| :------ | :------ |
| `contactId` | `string` |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<`ContactFetchResponse`\>

#### Defined in

[contact/index.js:43](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/contact/index.js#L43)

___

### list

▸ **list**(`request?`): [`ResponsePromise`](client.ResponsePromise.md)\<`ContactListResponse`, `ContactListStreamItemType`\>

Retrieves a list of all contacts.

#### Parameters

| Name | Type |
| :------ | :------ |
| `request?` | `ContactListRequest` |

#### Returns

[`ResponsePromise`](client.ResponsePromise.md)\<`ContactListResponse`, `ContactListStreamItemType`\>

#### Defined in

[contact/index.js:33](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/contact/index.js#L33)

___

### update

▸ **update**(`contactId`, `request`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<`ContactUpdateResponse`\>

Updates a contact.

#### Parameters

| Name | Type |
| :------ | :------ |
| `contactId` | `string` |
| `request` | `ContactUpdateRequest` |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<`ContactUpdateResponse`\>

#### Defined in

[contact/index.js:64](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/contact/index.js#L64)
