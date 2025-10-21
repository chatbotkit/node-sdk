[@chatbotkit/sdk](../README.md) / [Modules](../modules.md) / skillset/ability/v1

# Module: skillset/ability/v1

## Table of contents

### Type Aliases

- [ChatBotKitClient](skillset_ability_v1.md#chatbotkitclient)
- [ResponsePromise](skillset_ability_v1.md#responsepromise)
- [SkillsetAbilityCreateRequest](skillset_ability_v1.md#skillsetabilitycreaterequest)
- [SkillsetAbilityCreateRequestBody](skillset_ability_v1.md#skillsetabilitycreaterequestbody)
- [SkillsetAbilityCreateResponse](skillset_ability_v1.md#skillsetabilitycreateresponse)
- [SkillsetAbilityDeleteRequestBody](skillset_ability_v1.md#skillsetabilitydeleterequestbody)
- [SkillsetAbilityDeleteResponse](skillset_ability_v1.md#skillsetabilitydeleteresponse)
- [SkillsetAbilityExportRequest](skillset_ability_v1.md#skillsetabilityexportrequest)
- [SkillsetAbilityExportResponse](skillset_ability_v1.md#skillsetabilityexportresponse)
- [SkillsetAbilityExportStreamType](skillset_ability_v1.md#skillsetabilityexportstreamtype)
- [SkillsetAbilityFetchResponse](skillset_ability_v1.md#skillsetabilityfetchresponse)
- [SkillsetAbilityListRequest](skillset_ability_v1.md#skillsetabilitylistrequest)
- [SkillsetAbilityListResponse](skillset_ability_v1.md#skillsetabilitylistresponse)
- [SkillsetAbilityListStreamType](skillset_ability_v1.md#skillsetabilityliststreamtype)
- [SkillsetAbilityUpdateRequest](skillset_ability_v1.md#skillsetabilityupdaterequest)
- [SkillsetAbilityUpdateRequestBody](skillset_ability_v1.md#skillsetabilityupdaterequestbody)
- [SkillsetAbilityUpdateResponse](skillset_ability_v1.md#skillsetabilityupdateresponse)

### Functions

- [createSkillsetAbility](skillset_ability_v1.md#createskillsetability)
- [deleteSkillsetAbility](skillset_ability_v1.md#deleteskillsetability)
- [exportSkillsetAbilities](skillset_ability_v1.md#exportskillsetabilities)
- [fetchSkillsetAbility](skillset_ability_v1.md#fetchskillsetability)
- [listSkillsetAbilities](skillset_ability_v1.md#listskillsetabilities)
- [updateSkillsetAbility](skillset_ability_v1.md#updateskillsetability)

## Type Aliases

### ChatBotKitClient

Ƭ **ChatBotKitClient**\<\>: [`client`](client.md)

#### Defined in

[skillset/ability/v1.js:2](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/skillset/ability/v1.js#L2)

___

### ResponsePromise

Ƭ **ResponsePromise**\<`T`, `U`\>: [`client`](client.md)

#### Type parameters

| Name |
| :------ |
| `T` |
| `U` |

#### Defined in

[skillset/ability/v1.js:8](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/skillset/ability/v1.js#L8)

___

### SkillsetAbilityCreateRequest

Ƭ **SkillsetAbilityCreateRequest**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `botId?` | `string` |
| `description?` | `string` |
| `fileId?` | `string` |
| `instruction?` | `string` |
| `meta?` | [`Record`]( https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type )\<`string`, `any`\> |
| `name?` | `string` |
| `secretId?` | `string` |

#### Defined in

[skillset/ability/v1.js:89](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/skillset/ability/v1.js#L89)

___

### SkillsetAbilityCreateRequestBody

Ƭ **SkillsetAbilityCreateRequestBody**\<\>: `operations`[``"createSkillsetAbility"``][``"requestBody"``][``"content"``][``"application/json"``]

#### Defined in

[skillset/ability/v1.js:91](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/skillset/ability/v1.js#L91)

___

### SkillsetAbilityCreateResponse

Ƭ **SkillsetAbilityCreateResponse**\<\>: `operations`[``"createSkillsetAbility"``][``"responses"``][``"200"``][``"content"``][``"application/json"``]

#### Defined in

[skillset/ability/v1.js:93](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/skillset/ability/v1.js#L93)

___

### SkillsetAbilityDeleteRequestBody

Ƭ **SkillsetAbilityDeleteRequestBody**\<\>: `operations`[``"deleteSkillsetAbility"``][``"requestBody"``][``"content"``][``"application/json"``]

#### Defined in

[skillset/ability/v1.js:155](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/skillset/ability/v1.js#L155)

___

### SkillsetAbilityDeleteResponse

Ƭ **SkillsetAbilityDeleteResponse**\<\>: `operations`[``"deleteSkillsetAbility"``][``"responses"``][``"200"``][``"content"``][``"application/json"``]

#### Defined in

[skillset/ability/v1.js:157](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/skillset/ability/v1.js#L157)

___

### SkillsetAbilityExportRequest

Ƭ **SkillsetAbilityExportRequest**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `cursor?` | `string` |
| `meta?` | [`Record`]( https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type )\<`string`, `string`\> |
| `order?` | ``"desc"`` \| ``"asc"`` |
| `take?` | `number` |

#### Defined in

[skillset/ability/v1.js:43](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/skillset/ability/v1.js#L43)

___

### SkillsetAbilityExportResponse

Ƭ **SkillsetAbilityExportResponse**\<\>: `operations`[``"exportSkillsetAbilities"``][``"responses"``][``"200"``][``"content"``][``"application/json"``]

#### Defined in

[skillset/ability/v1.js:45](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/skillset/ability/v1.js#L45)

___

### SkillsetAbilityExportStreamType

Ƭ **SkillsetAbilityExportStreamType**\<\>: `operations`[``"exportSkillsetAbilities"``][``"responses"``][``"200"``][``"content"``][``"application/jsonl"``]

#### Defined in

[skillset/ability/v1.js:47](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/skillset/ability/v1.js#L47)

___

### SkillsetAbilityFetchResponse

Ƭ **SkillsetAbilityFetchResponse**\<\>: `operations`[``"fetchSkillsetAbility"``][``"responses"``][``"200"``][``"content"``][``"application/json"``]

#### Defined in

[skillset/ability/v1.js:64](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/skillset/ability/v1.js#L64)

___

### SkillsetAbilityListRequest

Ƭ **SkillsetAbilityListRequest**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `cursor?` | `string` |
| `meta?` | [`Record`]( https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type )\<`string`, `string`\> |
| `order?` | ``"desc"`` \| ``"asc"`` |
| `take?` | `number` |

#### Defined in

[skillset/ability/v1.js:17](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/skillset/ability/v1.js#L17)

___

### SkillsetAbilityListResponse

Ƭ **SkillsetAbilityListResponse**\<\>: `operations`[``"listSkillsetAbilities"``][``"responses"``][``"200"``][``"content"``][``"application/json"``]

#### Defined in

[skillset/ability/v1.js:19](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/skillset/ability/v1.js#L19)

___

### SkillsetAbilityListStreamType

Ƭ **SkillsetAbilityListStreamType**\<\>: `operations`[``"listSkillsetAbilities"``][``"responses"``][``"200"``][``"content"``][``"application/jsonl"``]

#### Defined in

[skillset/ability/v1.js:21](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/skillset/ability/v1.js#L21)

___

### SkillsetAbilityUpdateRequest

Ƭ **SkillsetAbilityUpdateRequest**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `botId?` | `string` |
| `description?` | `string` |
| `fileId?` | `string` |
| `instruction?` | `string` |
| `meta?` | [`Record`]( https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type )\<`string`, `any`\> |
| `name?` | `string` |
| `secretId?` | `string` |

#### Defined in

[skillset/ability/v1.js:123](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/skillset/ability/v1.js#L123)

___

### SkillsetAbilityUpdateRequestBody

Ƭ **SkillsetAbilityUpdateRequestBody**\<\>: `operations`[``"updateSkillsetAbility"``][``"requestBody"``][``"content"``][``"application/json"``]

#### Defined in

[skillset/ability/v1.js:125](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/skillset/ability/v1.js#L125)

___

### SkillsetAbilityUpdateResponse

Ƭ **SkillsetAbilityUpdateResponse**\<\>: `operations`[``"updateSkillsetAbility"``][``"responses"``][``"200"``][``"content"``][``"application/json"``]

#### Defined in

[skillset/ability/v1.js:127](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/skillset/ability/v1.js#L127)

## Functions

### createSkillsetAbility

▸ **createSkillsetAbility**(`client`, `skillsetId`, `request`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<{}\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`ChatBotKitClient`](../classes/client.ChatBotKitClient.md) |
| `skillsetId` | `string` |
| `request` | [`SkillsetAbilityCreateRequest`](skillset_ability_v1.md#skillsetabilitycreaterequest) |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<{}\>

#### Defined in

[skillset/ability/v1.js:100](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/skillset/ability/v1.js#L100)

___

### deleteSkillsetAbility

▸ **deleteSkillsetAbility**(`client`, `skillsetId`, `abilityId`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<{}\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`ChatBotKitClient`](../classes/client.ChatBotKitClient.md) |
| `skillsetId` | `string` |
| `abilityId` | `string` |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<{}\>

#### Defined in

[skillset/ability/v1.js:164](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/skillset/ability/v1.js#L164)

___

### exportSkillsetAbilities

▸ **exportSkillsetAbilities**(`client`, `skillsetId`, `request?`): [`ResponsePromise`](../classes/client.ResponsePromise.md)\<{}, {}\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`ChatBotKitClient`](../classes/client.ChatBotKitClient.md) |
| `skillsetId` | `string` |
| `request?` | [`SkillsetAbilityExportRequest`](skillset_ability_v1.md#skillsetabilityexportrequest) |

#### Returns

[`ResponsePromise`](../classes/client.ResponsePromise.md)\<{}, {}\>

#### Defined in

[skillset/ability/v1.js:54](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/skillset/ability/v1.js#L54)

___

### fetchSkillsetAbility

▸ **fetchSkillsetAbility**(`client`, `skillsetId`, `abilityId`): [`ResponsePromise`](../classes/client.ResponsePromise.md)\<{}, `never`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`ChatBotKitClient`](../classes/client.ChatBotKitClient.md) |
| `skillsetId` | `string` |
| `abilityId` | `string` |

#### Returns

[`ResponsePromise`](../classes/client.ResponsePromise.md)\<{}, `never`\>

#### Defined in

[skillset/ability/v1.js:71](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/skillset/ability/v1.js#L71)

___

### listSkillsetAbilities

▸ **listSkillsetAbilities**(`client`, `skillsetId`, `request?`): [`ResponsePromise`](../classes/client.ResponsePromise.md)\<{}, {}\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`ChatBotKitClient`](../classes/client.ChatBotKitClient.md) |
| `skillsetId` | `string` |
| `request?` | [`SkillsetAbilityListRequest`](skillset_ability_v1.md#skillsetabilitylistrequest) |

#### Returns

[`ResponsePromise`](../classes/client.ResponsePromise.md)\<{}, {}\>

#### Defined in

[skillset/ability/v1.js:28](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/skillset/ability/v1.js#L28)

___

### updateSkillsetAbility

▸ **updateSkillsetAbility**(`client`, `skillsetId`, `abilityId`, `request`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<{}\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`ChatBotKitClient`](../classes/client.ChatBotKitClient.md) |
| `skillsetId` | `string` |
| `abilityId` | `string` |
| `request` | [`SkillsetAbilityUpdateRequest`](skillset_ability_v1.md#skillsetabilityupdaterequest) |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<{}\>

#### Defined in

[skillset/ability/v1.js:135](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/skillset/ability/v1.js#L135)
