[@chatbotkit/sdk](../README.md) / [Modules](../modules.md) / portal/v1

# Module: portal/v1

## Table of contents

### Type Aliases

- [ChatBotKitClient](portal_v1.md#chatbotkitclient)
- [PortalCreateRequest](portal_v1.md#portalcreaterequest)
- [PortalCreateRequestBody](portal_v1.md#portalcreaterequestbody)
- [PortalCreateResponse](portal_v1.md#portalcreateresponse)
- [PortalCreateResponseBody](portal_v1.md#portalcreateresponsebody)
- [PortalDeleteRequest](portal_v1.md#portaldeleterequest)
- [PortalDeleteRequestBody](portal_v1.md#portaldeleterequestbody)
- [PortalDeleteResponse](portal_v1.md#portaldeleteresponse)
- [PortalDeleteResponseBody](portal_v1.md#portaldeleteresponsebody)
- [PortalFetchResponse](portal_v1.md#portalfetchresponse)
- [PortalListRequest](portal_v1.md#portallistrequest)
- [PortalListResponse](portal_v1.md#portallistresponse)
- [PortalListStreamType](portal_v1.md#portalliststreamtype)
- [PortalUpdateRequest](portal_v1.md#portalupdaterequest)
- [PortalUpdateRequestBody](portal_v1.md#portalupdaterequestbody)
- [PortalUpdateResponse](portal_v1.md#portalupdateresponse)
- [PortalUpdateResponseBody](portal_v1.md#portalupdateresponsebody)
- [ResponsePromise](portal_v1.md#responsepromise)

### Functions

- [createPortal](portal_v1.md#createportal)
- [deletePortal](portal_v1.md#deleteportal)
- [fetchPortal](portal_v1.md#fetchportal)
- [listPortals](portal_v1.md#listportals)
- [updatePortal](portal_v1.md#updateportal)

## Type Aliases

### ChatBotKitClient

Ƭ **ChatBotKitClient**\<\>: [`client`](client.md)

#### Defined in

portal/v1.js:2

___

### PortalCreateRequest

Ƭ **PortalCreateRequest**\<\>: [`PortalCreateRequestBody`](portal_v1.md#portalcreaterequestbody)

#### Defined in

portal/v1.js:55

___

### PortalCreateRequestBody

Ƭ **PortalCreateRequestBody**\<\>: `operations`[``"createPortal"``][``"requestBody"``][``"content"``][``"application/json"``]

#### Defined in

portal/v1.js:53

___

### PortalCreateResponse

Ƭ **PortalCreateResponse**\<\>: [`PortalCreateResponseBody`](portal_v1.md#portalcreateresponsebody)

#### Defined in

portal/v1.js:59

___

### PortalCreateResponseBody

Ƭ **PortalCreateResponseBody**\<\>: `operations`[``"createPortal"``][``"responses"``][``"200"``][``"content"``][``"application/json"``]

#### Defined in

portal/v1.js:57

___

### PortalDeleteRequest

Ƭ **PortalDeleteRequest**\<\>: [`PortalDeleteRequestBody`](portal_v1.md#portaldeleterequestbody)

#### Defined in

portal/v1.js:110

___

### PortalDeleteRequestBody

Ƭ **PortalDeleteRequestBody**\<\>: `operations`[``"deletePortal"``][``"requestBody"``][``"content"``][``"application/json"``]

#### Defined in

portal/v1.js:108

___

### PortalDeleteResponse

Ƭ **PortalDeleteResponse**\<\>: [`PortalDeleteResponseBody`](portal_v1.md#portaldeleteresponsebody)

#### Defined in

portal/v1.js:114

___

### PortalDeleteResponseBody

Ƭ **PortalDeleteResponseBody**\<\>: `operations`[``"deletePortal"``][``"responses"``][``"200"``][``"content"``][``"application/json"``]

#### Defined in

portal/v1.js:112

___

### PortalFetchResponse

Ƭ **PortalFetchResponse**\<\>: `operations`[``"fetchPortal"``][``"responses"``][``"200"``][``"content"``][``"application/json"``]

#### Defined in

portal/v1.js:37

___

### PortalListRequest

Ƭ **PortalListRequest**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `cursor?` | `string` |
| `meta?` | [`Record`]( https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type )\<`string`, `string`\> |
| `order?` | ``"desc"`` \| ``"asc"`` |
| `take?` | `number` |

#### Defined in

portal/v1.js:17

___

### PortalListResponse

Ƭ **PortalListResponse**\<\>: `operations`[``"listPortals"``][``"responses"``][``"200"``][``"content"``][``"application/json"``]

#### Defined in

portal/v1.js:19

___

### PortalListStreamType

Ƭ **PortalListStreamType**\<\>: `operations`[``"listPortals"``][``"responses"``][``"200"``][``"content"``][``"application/jsonl"``]

#### Defined in

portal/v1.js:21

___

### PortalUpdateRequest

Ƭ **PortalUpdateRequest**\<\>: [`PortalUpdateRequestBody`](portal_v1.md#portalupdaterequestbody)

#### Defined in

portal/v1.js:82

___

### PortalUpdateRequestBody

Ƭ **PortalUpdateRequestBody**\<\>: `operations`[``"updatePortal"``][``"requestBody"``][``"content"``][``"application/json"``]

#### Defined in

portal/v1.js:80

___

### PortalUpdateResponse

Ƭ **PortalUpdateResponse**\<\>: [`PortalUpdateResponseBody`](portal_v1.md#portalupdateresponsebody)

#### Defined in

portal/v1.js:86

___

### PortalUpdateResponseBody

Ƭ **PortalUpdateResponseBody**\<\>: `operations`[``"updatePortal"``][``"responses"``][``"200"``][``"content"``][``"application/json"``]

#### Defined in

portal/v1.js:84

___

### ResponsePromise

Ƭ **ResponsePromise**\<`T`, `U`\>: [`client`](client.md)

#### Type parameters

| Name |
| :------ |
| `T` |
| `U` |

#### Defined in

portal/v1.js:8

## Functions

### createPortal

▸ **createPortal**(`client`, `request`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<{}\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`ChatBotKitClient`](../classes/client.ChatBotKitClient.md) |
| `request` | `Object` |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<{}\>

#### Defined in

portal/v1.js:65

___

### deletePortal

▸ **deletePortal**(`client`, `portalId`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<{}\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`ChatBotKitClient`](../classes/client.ChatBotKitClient.md) |
| `portalId` | `string` |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<{}\>

#### Defined in

portal/v1.js:120

___

### fetchPortal

▸ **fetchPortal**(`client`, `portalId`): [`ResponsePromise`](../classes/client.ResponsePromise.md)\<{}, `never`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`ChatBotKitClient`](../classes/client.ChatBotKitClient.md) |
| `portalId` | `string` |

#### Returns

[`ResponsePromise`](../classes/client.ResponsePromise.md)\<{}, `never`\>

#### Defined in

portal/v1.js:43

___

### listPortals

▸ **listPortals**(`client`, `request?`): [`ResponsePromise`](../classes/client.ResponsePromise.md)\<{}, {}\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`ChatBotKitClient`](../classes/client.ChatBotKitClient.md) |
| `request?` | [`PortalListRequest`](portal_v1.md#portallistrequest) |

#### Returns

[`ResponsePromise`](../classes/client.ResponsePromise.md)\<{}, {}\>

#### Defined in

portal/v1.js:27

___

### updatePortal

▸ **updatePortal**(`client`, `portalId`, `request`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<{}\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`ChatBotKitClient`](../classes/client.ChatBotKitClient.md) |
| `portalId` | `string` |
| `request` | `Object` |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<{}\>

#### Defined in

portal/v1.js:93
