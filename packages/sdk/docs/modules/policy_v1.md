[@chatbotkit/sdk](../README.md) / [Modules](../modules.md) / policy/v1

# Module: policy/v1

## Table of contents

### Type Aliases

- [ChatBotKitClient](policy_v1.md#chatbotkitclient)
- [PolicyCreateRequest](policy_v1.md#policycreaterequest)
- [PolicyCreateRequestBody](policy_v1.md#policycreaterequestbody)
- [PolicyCreateResponse](policy_v1.md#policycreateresponse)
- [PolicyDeleteRequestBody](policy_v1.md#policydeleterequestbody)
- [PolicyDeleteResponse](policy_v1.md#policydeleteresponse)
- [PolicyFetchResponse](policy_v1.md#policyfetchresponse)
- [PolicyListRequest](policy_v1.md#policylistrequest)
- [PolicyListResponse](policy_v1.md#policylistresponse)
- [PolicyListStreamType](policy_v1.md#policyliststreamtype)
- [PolicyUpdateRequest](policy_v1.md#policyupdaterequest)
- [PolicyUpdateRequestBody](policy_v1.md#policyupdaterequestbody)
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

[policy/v1.js:2](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/policy/v1.js#L2)

___

### PolicyCreateRequest

Ƭ **PolicyCreateRequest**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `config?` | [`Record`]( https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type )\<`string`, `any`\> |
| `description?` | `string` |
| `meta?` | [`Record`]( https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type )\<`string`, `any`\> |
| `name?` | `string` |
| `type` | ``"retention"`` |

#### Defined in

[policy/v1.js:59](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/policy/v1.js#L59)

___

### PolicyCreateRequestBody

Ƭ **PolicyCreateRequestBody**\<\>: `operations`[``"createPolicy"``][``"requestBody"``][``"content"``][``"application/json"``]

#### Defined in

[policy/v1.js:61](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/policy/v1.js#L61)

___

### PolicyCreateResponse

Ƭ **PolicyCreateResponse**\<\>: `operations`[``"createPolicy"``][``"responses"``][``"200"``][``"content"``][``"application/json"``]

#### Defined in

[policy/v1.js:63](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/policy/v1.js#L63)

___

### PolicyDeleteRequestBody

Ƭ **PolicyDeleteRequestBody**\<\>: `operations`[``"deletePolicy"``][``"requestBody"``][``"content"``][``"application/json"``]

#### Defined in

[policy/v1.js:116](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/policy/v1.js#L116)

___

### PolicyDeleteResponse

Ƭ **PolicyDeleteResponse**\<\>: `operations`[``"deletePolicy"``][``"responses"``][``"200"``][``"content"``][``"application/json"``]

#### Defined in

[policy/v1.js:118](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/policy/v1.js#L118)

___

### PolicyFetchResponse

Ƭ **PolicyFetchResponse**\<\>: `operations`[``"fetchPolicy"``][``"responses"``][``"200"``][``"content"``][``"application/json"``]

#### Defined in

[policy/v1.js:37](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/policy/v1.js#L37)

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

[policy/v1.js:17](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/policy/v1.js#L17)

___

### PolicyListResponse

Ƭ **PolicyListResponse**\<\>: `operations`[``"listPolicies"``][``"responses"``][``"200"``][``"content"``][``"application/json"``]

#### Defined in

[policy/v1.js:19](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/policy/v1.js#L19)

___

### PolicyListStreamType

Ƭ **PolicyListStreamType**\<\>: `operations`[``"listPolicies"``][``"responses"``][``"200"``][``"content"``][``"application/jsonl"``]

#### Defined in

[policy/v1.js:21](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/policy/v1.js#L21)

___

### PolicyUpdateRequest

Ƭ **PolicyUpdateRequest**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `config?` | [`Record`]( https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type )\<`string`, `any`\> |
| `description?` | `string` |
| `meta?` | [`Record`]( https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type )\<`string`, `any`\> |
| `name?` | `string` |
| `type?` | ``"retention"`` |

#### Defined in

[policy/v1.js:90](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/policy/v1.js#L90)

___

### PolicyUpdateRequestBody

Ƭ **PolicyUpdateRequestBody**\<\>: `operations`[``"updatePolicy"``][``"requestBody"``][``"content"``][``"application/json"``]

#### Defined in

[policy/v1.js:92](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/policy/v1.js#L92)

___

### PolicyUpdateResponse

Ƭ **PolicyUpdateResponse**\<\>: `operations`[``"updatePolicy"``][``"responses"``][``"200"``][``"content"``][``"application/json"``]

#### Defined in

[policy/v1.js:94](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/policy/v1.js#L94)

___

### ResponsePromise

Ƭ **ResponsePromise**\<`T`, `U`\>: [`client`](client.md)

#### Type parameters

| Name |
| :------ |
| `T` |
| `U` |

#### Defined in

[policy/v1.js:8](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/policy/v1.js#L8)

## Functions

### createPolicy

▸ **createPolicy**(`client`, `request`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<{}\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`ChatBotKitClient`](../classes/client.ChatBotKitClient.md) |
| `request` | [`PolicyCreateRequest`](policy_v1.md#policycreaterequest) |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<{}\>

#### Defined in

[policy/v1.js:69](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/policy/v1.js#L69)

___

### deletePolicy

▸ **deletePolicy**(`client`, `policyId`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<{}\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`ChatBotKitClient`](../classes/client.ChatBotKitClient.md) |
| `policyId` | `string` |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<{}\>

#### Defined in

[policy/v1.js:124](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/policy/v1.js#L124)

___

### fetchPolicy

▸ **fetchPolicy**(`client`, `policyId`): [`ResponsePromise`](../classes/client.ResponsePromise.md)\<{}, `never`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`ChatBotKitClient`](../classes/client.ChatBotKitClient.md) |
| `policyId` | `string` |

#### Returns

[`ResponsePromise`](../classes/client.ResponsePromise.md)\<{}, `never`\>

#### Defined in

[policy/v1.js:43](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/policy/v1.js#L43)

___

### listPolicies

▸ **listPolicies**(`client`, `request?`): [`ResponsePromise`](../classes/client.ResponsePromise.md)\<{}, {}\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`ChatBotKitClient`](../classes/client.ChatBotKitClient.md) |
| `request?` | [`PolicyListRequest`](policy_v1.md#policylistrequest) |

#### Returns

[`ResponsePromise`](../classes/client.ResponsePromise.md)\<{}, {}\>

#### Defined in

[policy/v1.js:27](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/policy/v1.js#L27)

___

### updatePolicy

▸ **updatePolicy**(`client`, `policyId`, `request`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<{}\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`ChatBotKitClient`](../classes/client.ChatBotKitClient.md) |
| `policyId` | `string` |
| `request` | [`PolicyUpdateRequest`](policy_v1.md#policyupdaterequest) |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<{}\>

#### Defined in

[policy/v1.js:101](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/policy/v1.js#L101)
