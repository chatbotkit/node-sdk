[@chatbotkit/sdk](../README.md) / [Modules](../modules.md) / policy/v1

# Module: policy/v1

## Table of contents

### Type Aliases

- [ChatBotKitClient](policy_v1.md#chatbotkitclient)
- [PolicyCreateRequest](policy_v1.md#policycreaterequest)
- [PolicyCreateResponse](policy_v1.md#policycreateresponse)
- [PolicyDeleteResponse](policy_v1.md#policydeleteresponse)
- [PolicyFetchResponse](policy_v1.md#policyfetchresponse)
- [PolicyInstance](policy_v1.md#policyinstance)
- [PolicyListRequest](policy_v1.md#policylistrequest)
- [PolicyListResponse](policy_v1.md#policylistresponse)
- [PolicyListStreamItemType](policy_v1.md#policyliststreamitemtype)
- [PolicyListStreamType](policy_v1.md#policyliststreamtype)
- [PolicyOptions](policy_v1.md#policyoptions)
- [PolicyUpdateRequest](policy_v1.md#policyupdaterequest)
- [PolicyUpdateResponse](policy_v1.md#policyupdateresponse)
- [ResponsePromise](policy_v1.md#responsepromise)

### Functions

- [createPolicy](policy_v1.md#createpolicy)
- [deletePolicy](policy_v1.md#deletepolicy)
- [fetchPolicy](policy_v1.md#fetchpolicy)
- [listPolicies](policy_v1.md#listpolicies)
- [updatePolicy](policy_v1.md#updatepolicy)

## Type Aliases

### ChatBotKitClient

Ƭ **ChatBotKitClient**\<\>: [`client`](client.md)

#### Defined in

policy/v1.js:2

___

### PolicyCreateRequest

Ƭ **PolicyCreateRequest**\<\>: [`PolicyOptions`](policy_v1.md#policyoptions) & {}

#### Defined in

policy/v1.js:80

___

### PolicyCreateResponse

Ƭ **PolicyCreateResponse**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Defined in

policy/v1.js:84

___

### PolicyDeleteResponse

Ƭ **PolicyDeleteResponse**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Defined in

policy/v1.js:134

___

### PolicyFetchResponse

Ƭ **PolicyFetchResponse**\<\>: [`PolicyOptions`](policy_v1.md#policyoptions) & \{ `type`: `string`  }

#### Defined in

policy/v1.js:62

___

### PolicyInstance

Ƭ **PolicyInstance**\<\>: [`PolicyOptions`](policy_v1.md#policyoptions) & \{ `createdAt`: `number` ; `id`: `string` ; `updatedAt`: `number`  }

#### Defined in

policy/v1.js:24

___

### PolicyListRequest

Ƭ **PolicyListRequest**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `cursor?` | `string` |
| `meta?` | [`Record`]( https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type )\<`string`, `string`\> |
| `order?` | ``"desc"`` \| ``"asc"`` |
| `take?` | `number` |

#### Defined in

policy/v1.js:33

___

### PolicyListResponse

Ƭ **PolicyListResponse**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `items` | [`PolicyInstance`](policy_v1.md#policyinstance)[] |

#### Defined in

policy/v1.js:35

___

### PolicyListStreamItemType

Ƭ **PolicyListStreamItemType**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `data` | [`PolicyInstance`](policy_v1.md#policyinstance) |
| `type` | ``"item"`` |

#### Defined in

policy/v1.js:40

___

### PolicyListStreamType

Ƭ **PolicyListStreamType**\<\>: [`PolicyListStreamItemType`](policy_v1.md#policyliststreamitemtype)

#### Defined in

policy/v1.js:42

___

### PolicyOptions

Ƭ **PolicyOptions**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `config?` | [`Record`]( https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type )\<`string`, `any`\> |
| `description?` | `string` |
| `meta?` | [`Record`]( https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type )\<`string`, `any`\> |
| `name?` | `string` |
| `type` | ``"retention"`` |

#### Defined in

policy/v1.js:18

___

### PolicyUpdateRequest

Ƭ **PolicyUpdateRequest**\<\>: [`PolicyOptions`](policy_v1.md#policyoptions) & {}

#### Defined in

policy/v1.js:106

___

### PolicyUpdateResponse

Ƭ **PolicyUpdateResponse**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Defined in

policy/v1.js:110

___

### ResponsePromise

Ƭ **ResponsePromise**\<`T`, `U`\>: [`client`](client.md)

#### Type parameters

| Name |
| :------ |
| `T` |
| `U` |

#### Defined in

policy/v1.js:8

## Functions

### createPolicy

▸ **createPolicy**(`client`, `request`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<[`PolicyCreateResponse`](policy_v1.md#policycreateresponse)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`ChatBotKitClient`](../classes/client.ChatBotKitClient.md) |
| `request` | [`PolicyOptions`](policy_v1.md#policyoptions) |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<[`PolicyCreateResponse`](policy_v1.md#policycreateresponse)\>

#### Defined in

policy/v1.js:90

___

### deletePolicy

▸ **deletePolicy**(`client`, `policyId`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<[`PolicyDeleteResponse`](policy_v1.md#policydeleteresponse)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`ChatBotKitClient`](../classes/client.ChatBotKitClient.md) |
| `policyId` | `string` |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<[`PolicyDeleteResponse`](policy_v1.md#policydeleteresponse)\>

#### Defined in

policy/v1.js:140

___

### fetchPolicy

▸ **fetchPolicy**(`client`, `policyId`): [`ResponsePromise`](../classes/client.ResponsePromise.md)\<[`PolicyFetchResponse`](policy_v1.md#policyfetchresponse), `never`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`ChatBotKitClient`](../classes/client.ChatBotKitClient.md) |
| `policyId` | `string` |

#### Returns

[`ResponsePromise`](../classes/client.ResponsePromise.md)\<[`PolicyFetchResponse`](policy_v1.md#policyfetchresponse), `never`\>

#### Defined in

policy/v1.js:68

___

### listPolicies

▸ **listPolicies**(`client`, `request?`): [`ResponsePromise`](../classes/client.ResponsePromise.md)\<[`PolicyListResponse`](policy_v1.md#policylistresponse), [`PolicyListStreamItemType`](policy_v1.md#policyliststreamitemtype)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`ChatBotKitClient`](../classes/client.ChatBotKitClient.md) |
| `request?` | [`PolicyListRequest`](policy_v1.md#policylistrequest) |

#### Returns

[`ResponsePromise`](../classes/client.ResponsePromise.md)\<[`PolicyListResponse`](policy_v1.md#policylistresponse), [`PolicyListStreamItemType`](policy_v1.md#policyliststreamitemtype)\>

#### Defined in

policy/v1.js:48

___

### updatePolicy

▸ **updatePolicy**(`client`, `policyId`, `request`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<[`PolicyUpdateResponse`](policy_v1.md#policyupdateresponse)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`ChatBotKitClient`](../classes/client.ChatBotKitClient.md) |
| `policyId` | `string` |
| `request` | [`PolicyOptions`](policy_v1.md#policyoptions) |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<[`PolicyUpdateResponse`](policy_v1.md#policyupdateresponse)\>

#### Defined in

policy/v1.js:117
