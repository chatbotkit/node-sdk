[@chatbotkit/sdk](../README.md) / [Modules](../modules.md) / skillset/v1

# Module: skillset/v1

## Table of contents

### Type Aliases

- [ChatBotKitClient](skillset_v1.md#chatbotkitclient)
- [ResponsePromise](skillset_v1.md#responsepromise)
- [SkillsetCreateRequest](skillset_v1.md#skillsetcreaterequest)
- [SkillsetCreateRequestBody](skillset_v1.md#skillsetcreaterequestbody)
- [SkillsetCreateResponse](skillset_v1.md#skillsetcreateresponse)
- [SkillsetDeleteRequestBody](skillset_v1.md#skillsetdeleterequestbody)
- [SkillsetDeleteResponse](skillset_v1.md#skillsetdeleteresponse)
- [SkillsetFetchResponse](skillset_v1.md#skillsetfetchresponse)
- [SkillsetListRequest](skillset_v1.md#skillsetlistrequest)
- [SkillsetListResponse](skillset_v1.md#skillsetlistresponse)
- [SkillsetListStreamType](skillset_v1.md#skillsetliststreamtype)
- [SkillsetUpdateRequest](skillset_v1.md#skillsetupdaterequest)
- [SkillsetUpdateRequestBody](skillset_v1.md#skillsetupdaterequestbody)
- [SkillsetUpdateResponse](skillset_v1.md#skillsetupdateresponse)

### Functions

- [createSkillset](skillset_v1.md#createskillset)
- [deleteSkillset](skillset_v1.md#deleteskillset)
- [fetchSkillset](skillset_v1.md#fetchskillset)
- [listSkillsets](skillset_v1.md#listskillsets)
- [updateSkillset](skillset_v1.md#updateskillset)

## Type Aliases

### ChatBotKitClient

Ƭ **ChatBotKitClient**\<\>: [`client`](client.md)

#### Defined in

[skillset/v1.js:2](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/skillset/v1.js#L2)

___

### ResponsePromise

Ƭ **ResponsePromise**\<`T`, `U`\>: [`client`](client.md)

#### Type parameters

| Name |
| :------ |
| `T` |
| `U` |

#### Defined in

[skillset/v1.js:8](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/skillset/v1.js#L8)

___

### SkillsetCreateRequest

Ƭ **SkillsetCreateRequest**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `blueprintId?` | `string` |
| `description?` | `string` |
| `meta?` | [`Record`]( https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type )\<`string`, `any`\> |
| `name?` | `string` |
| `visibility?` | ``"private"`` \| ``"protected"`` \| ``"public"`` |

#### Defined in

[skillset/v1.js:59](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/skillset/v1.js#L59)

___

### SkillsetCreateRequestBody

Ƭ **SkillsetCreateRequestBody**\<\>: `operations`[``"createSkillset"``][``"requestBody"``][``"content"``][``"application/json"``]

#### Defined in

[skillset/v1.js:61](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/skillset/v1.js#L61)

___

### SkillsetCreateResponse

Ƭ **SkillsetCreateResponse**\<\>: `operations`[``"createSkillset"``][``"responses"``][``"200"``][``"content"``][``"application/json"``]

#### Defined in

[skillset/v1.js:63](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/skillset/v1.js#L63)

___

### SkillsetDeleteRequestBody

Ƭ **SkillsetDeleteRequestBody**\<\>: `operations`[``"deleteSkillset"``][``"requestBody"``][``"content"``][``"application/json"``]

#### Defined in

[skillset/v1.js:116](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/skillset/v1.js#L116)

___

### SkillsetDeleteResponse

Ƭ **SkillsetDeleteResponse**\<\>: `operations`[``"deleteSkillset"``][``"responses"``][``"200"``][``"content"``][``"application/json"``]

#### Defined in

[skillset/v1.js:118](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/skillset/v1.js#L118)

___

### SkillsetFetchResponse

Ƭ **SkillsetFetchResponse**\<\>: `operations`[``"fetchSkillset"``][``"responses"``][``"200"``][``"content"``][``"application/json"``]

#### Defined in

[skillset/v1.js:37](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/skillset/v1.js#L37)

___

### SkillsetListRequest

Ƭ **SkillsetListRequest**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `cursor?` | `string` |
| `meta?` | [`Record`]( https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type )\<`string`, `string`\> |
| `order?` | ``"desc"`` \| ``"asc"`` |
| `take?` | `number` |

#### Defined in

[skillset/v1.js:17](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/skillset/v1.js#L17)

___

### SkillsetListResponse

Ƭ **SkillsetListResponse**\<\>: `operations`[``"listSkillsets"``][``"responses"``][``"200"``][``"content"``][``"application/json"``]

#### Defined in

[skillset/v1.js:19](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/skillset/v1.js#L19)

___

### SkillsetListStreamType

Ƭ **SkillsetListStreamType**\<\>: `operations`[``"listSkillsets"``][``"responses"``][``"200"``][``"content"``][``"application/jsonl"``]

#### Defined in

[skillset/v1.js:21](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/skillset/v1.js#L21)

___

### SkillsetUpdateRequest

Ƭ **SkillsetUpdateRequest**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `blueprintId?` | `string` |
| `description?` | `string` |
| `meta?` | [`Record`]( https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type )\<`string`, `any`\> |
| `name?` | `string` |
| `visibility?` | ``"private"`` \| ``"protected"`` \| ``"public"`` |

#### Defined in

[skillset/v1.js:90](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/skillset/v1.js#L90)

___

### SkillsetUpdateRequestBody

Ƭ **SkillsetUpdateRequestBody**\<\>: `operations`[``"updateSkillset"``][``"requestBody"``][``"content"``][``"application/json"``]

#### Defined in

[skillset/v1.js:92](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/skillset/v1.js#L92)

___

### SkillsetUpdateResponse

Ƭ **SkillsetUpdateResponse**\<\>: `operations`[``"updateSkillset"``][``"responses"``][``"200"``][``"content"``][``"application/json"``]

#### Defined in

[skillset/v1.js:94](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/skillset/v1.js#L94)

## Functions

### createSkillset

▸ **createSkillset**(`client`, `request`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<{}\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`ChatBotKitClient`](../classes/client.ChatBotKitClient.md) |
| `request` | [`SkillsetCreateRequest`](skillset_v1.md#skillsetcreaterequest) |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<{}\>

#### Defined in

[skillset/v1.js:69](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/skillset/v1.js#L69)

___

### deleteSkillset

▸ **deleteSkillset**(`client`, `skillsetId`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<{}\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`ChatBotKitClient`](../classes/client.ChatBotKitClient.md) |
| `skillsetId` | `string` |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<{}\>

#### Defined in

[skillset/v1.js:124](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/skillset/v1.js#L124)

___

### fetchSkillset

▸ **fetchSkillset**(`client`, `skillsetId`): [`ResponsePromise`](../classes/client.ResponsePromise.md)\<{}, `never`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`ChatBotKitClient`](../classes/client.ChatBotKitClient.md) |
| `skillsetId` | `string` |

#### Returns

[`ResponsePromise`](../classes/client.ResponsePromise.md)\<{}, `never`\>

#### Defined in

[skillset/v1.js:43](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/skillset/v1.js#L43)

___

### listSkillsets

▸ **listSkillsets**(`client`, `request?`): [`ResponsePromise`](../classes/client.ResponsePromise.md)\<{}, {}\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`ChatBotKitClient`](../classes/client.ChatBotKitClient.md) |
| `request?` | [`SkillsetListRequest`](skillset_v1.md#skillsetlistrequest) |

#### Returns

[`ResponsePromise`](../classes/client.ResponsePromise.md)\<{}, {}\>

#### Defined in

[skillset/v1.js:27](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/skillset/v1.js#L27)

___

### updateSkillset

▸ **updateSkillset**(`client`, `skillsetId`, `request`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<{}\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`ChatBotKitClient`](../classes/client.ChatBotKitClient.md) |
| `skillsetId` | `string` |
| `request` | [`SkillsetUpdateRequest`](skillset_v1.md#skillsetupdaterequest) |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<{}\>

#### Defined in

[skillset/v1.js:101](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/skillset/v1.js#L101)
