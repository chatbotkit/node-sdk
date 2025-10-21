[@chatbotkit/sdk](../README.md) / [Modules](../modules.md) / contact/v1

# Module: contact/v1

## Table of contents

### Type Aliases

- [ChatBotKitClient](contact_v1.md#chatbotkitclient)
- [ContactCreateRequest](contact_v1.md#contactcreaterequest)
- [ContactCreateRequestBody](contact_v1.md#contactcreaterequestbody)
- [ContactCreateResponse](contact_v1.md#contactcreateresponse)
- [ContactCreateResponseBody](contact_v1.md#contactcreateresponsebody)
- [ContactDeleteRequest](contact_v1.md#contactdeleterequest)
- [ContactDeleteRequestBody](contact_v1.md#contactdeleterequestbody)
- [ContactDeleteResponse](contact_v1.md#contactdeleteresponse)
- [ContactDeleteResponseBody](contact_v1.md#contactdeleteresponsebody)
- [ContactEnsureRequest](contact_v1.md#contactensurerequest)
- [ContactEnsureRequestBody](contact_v1.md#contactensurerequestbody)
- [ContactEnsureResponse](contact_v1.md#contactensureresponse)
- [ContactEnsureResponseBody](contact_v1.md#contactensureresponsebody)
- [ContactFetchResponse](contact_v1.md#contactfetchresponse)
- [ContactListRequest](contact_v1.md#contactlistrequest)
- [ContactListResponse](contact_v1.md#contactlistresponse)
- [ContactListStreamType](contact_v1.md#contactliststreamtype)
- [ContactUpdateRequest](contact_v1.md#contactupdaterequest)
- [ContactUpdateRequestBody](contact_v1.md#contactupdaterequestbody)
- [ContactUpdateResponse](contact_v1.md#contactupdateresponse)
- [ContactUpdateResponseBody](contact_v1.md#contactupdateresponsebody)
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

Ƭ **ContactCreateRequest**\<\>: [`ContactCreateRequestBody`](contact_v1.md#contactcreaterequestbody)

#### Defined in

[contact/v1.js:55](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/contact/v1.js#L55)

___

### ContactCreateRequestBody

Ƭ **ContactCreateRequestBody**\<\>: `operations`[``"createContact"``][``"requestBody"``][``"content"``][``"application/json"``]

#### Defined in

[contact/v1.js:53](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/contact/v1.js#L53)

___

### ContactCreateResponse

Ƭ **ContactCreateResponse**\<\>: [`ContactCreateResponseBody`](contact_v1.md#contactcreateresponsebody)

#### Defined in

[contact/v1.js:59](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/contact/v1.js#L59)

___

### ContactCreateResponseBody

Ƭ **ContactCreateResponseBody**\<\>: `operations`[``"createContact"``][``"responses"``][``"200"``][``"content"``][``"application/json"``]

#### Defined in

[contact/v1.js:57](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/contact/v1.js#L57)

___

### ContactDeleteRequest

Ƭ **ContactDeleteRequest**\<\>: [`ContactDeleteRequestBody`](contact_v1.md#contactdeleterequestbody)

#### Defined in

[contact/v1.js:110](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/contact/v1.js#L110)

___

### ContactDeleteRequestBody

Ƭ **ContactDeleteRequestBody**\<\>: `operations`[``"deleteContact"``][``"requestBody"``][``"content"``][``"application/json"``]

#### Defined in

[contact/v1.js:108](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/contact/v1.js#L108)

___

### ContactDeleteResponse

Ƭ **ContactDeleteResponse**\<\>: [`ContactDeleteResponseBody`](contact_v1.md#contactdeleteresponsebody)

#### Defined in

[contact/v1.js:114](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/contact/v1.js#L114)

___

### ContactDeleteResponseBody

Ƭ **ContactDeleteResponseBody**\<\>: `operations`[``"deleteContact"``][``"responses"``][``"200"``][``"content"``][``"application/json"``]

#### Defined in

[contact/v1.js:112](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/contact/v1.js#L112)

___

### ContactEnsureRequest

Ƭ **ContactEnsureRequest**\<\>: [`ContactEnsureRequestBody`](contact_v1.md#contactensurerequestbody)

#### Defined in

[contact/v1.js:135](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/contact/v1.js#L135)

___

### ContactEnsureRequestBody

Ƭ **ContactEnsureRequestBody**\<\>: `operations`[``"ensureContact"``][``"requestBody"``][``"content"``][``"application/json"``]

#### Defined in

[contact/v1.js:133](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/contact/v1.js#L133)

___

### ContactEnsureResponse

Ƭ **ContactEnsureResponse**\<\>: [`ContactEnsureResponseBody`](contact_v1.md#contactensureresponsebody)

#### Defined in

[contact/v1.js:139](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/contact/v1.js#L139)

___

### ContactEnsureResponseBody

Ƭ **ContactEnsureResponseBody**\<\>: `operations`[``"ensureContact"``][``"responses"``][``"200"``][``"content"``][``"application/json"``]

#### Defined in

[contact/v1.js:137](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/contact/v1.js#L137)

___

### ContactFetchResponse

Ƭ **ContactFetchResponse**\<\>: `operations`[``"fetchContact"``][``"responses"``][``"200"``][``"content"``][``"application/json"``]

#### Defined in

[contact/v1.js:37](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/contact/v1.js#L37)

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

[contact/v1.js:17](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/contact/v1.js#L17)

___

### ContactListResponse

Ƭ **ContactListResponse**\<\>: `operations`[``"listContacts"``][``"responses"``][``"200"``][``"content"``][``"application/json"``]

#### Defined in

[contact/v1.js:19](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/contact/v1.js#L19)

___

### ContactListStreamType

Ƭ **ContactListStreamType**\<\>: `operations`[``"listContacts"``][``"responses"``][``"200"``][``"content"``][``"application/jsonl"``]

#### Defined in

[contact/v1.js:21](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/contact/v1.js#L21)

___

### ContactUpdateRequest

Ƭ **ContactUpdateRequest**\<\>: [`ContactUpdateRequestBody`](contact_v1.md#contactupdaterequestbody)

#### Defined in

[contact/v1.js:82](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/contact/v1.js#L82)

___

### ContactUpdateRequestBody

Ƭ **ContactUpdateRequestBody**\<\>: `operations`[``"updateContact"``][``"requestBody"``][``"content"``][``"application/json"``]

#### Defined in

[contact/v1.js:80](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/contact/v1.js#L80)

___

### ContactUpdateResponse

Ƭ **ContactUpdateResponse**\<\>: [`ContactUpdateResponseBody`](contact_v1.md#contactupdateresponsebody)

#### Defined in

[contact/v1.js:86](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/contact/v1.js#L86)

___

### ContactUpdateResponseBody

Ƭ **ContactUpdateResponseBody**\<\>: `operations`[``"updateContact"``][``"responses"``][``"200"``][``"content"``][``"application/json"``]

#### Defined in

[contact/v1.js:84](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/contact/v1.js#L84)

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

▸ **createContact**(`client`, `request`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<{}\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`ChatBotKitClient`](../classes/client.ChatBotKitClient.md) |
| `request` | `Object` |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<{}\>

#### Defined in

[contact/v1.js:65](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/contact/v1.js#L65)

___

### deleteContact

▸ **deleteContact**(`client`, `contactId`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<{}\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`ChatBotKitClient`](../classes/client.ChatBotKitClient.md) |
| `contactId` | `string` |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<{}\>

#### Defined in

[contact/v1.js:120](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/contact/v1.js#L120)

___

### ensureContact

▸ **ensureContact**(`client`, `request`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<{}\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`ChatBotKitClient`](../classes/client.ChatBotKitClient.md) |
| `request` | `Object` |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<{}\>

#### Defined in

[contact/v1.js:145](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/contact/v1.js#L145)

___

### fetchContact

▸ **fetchContact**(`client`, `contactId`): [`ResponsePromise`](../classes/client.ResponsePromise.md)\<{}, `never`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`ChatBotKitClient`](../classes/client.ChatBotKitClient.md) |
| `contactId` | `string` |

#### Returns

[`ResponsePromise`](../classes/client.ResponsePromise.md)\<{}, `never`\>

#### Defined in

[contact/v1.js:43](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/contact/v1.js#L43)

___

### listContacts

▸ **listContacts**(`client`, `request?`): [`ResponsePromise`](../classes/client.ResponsePromise.md)\<{}, {}\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`ChatBotKitClient`](../classes/client.ChatBotKitClient.md) |
| `request?` | [`ContactListRequest`](contact_v1.md#contactlistrequest) |

#### Returns

[`ResponsePromise`](../classes/client.ResponsePromise.md)\<{}, {}\>

#### Defined in

[contact/v1.js:27](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/contact/v1.js#L27)

___

### updateContact

▸ **updateContact**(`client`, `contactId`, `request`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<{}\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`ChatBotKitClient`](../classes/client.ChatBotKitClient.md) |
| `contactId` | `string` |
| `request` | `Object` |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<{}\>

#### Defined in

[contact/v1.js:93](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/contact/v1.js#L93)
