[@chatbotkit/sdk](../README.md) / [Modules](../modules.md) / skillset/ability/v1

# Module: skillset/ability/v1

## Table of contents

### Type Aliases

- [ChatBotKitClient](skillset_ability_v1.md#chatbotkitclient)
- [ResponsePromise](skillset_ability_v1.md#responsepromise)
- [SkillsetAbilityCreateRequest](skillset_ability_v1.md#skillsetabilitycreaterequest)
- [SkillsetAbilityCreateResponse](skillset_ability_v1.md#skillsetabilitycreateresponse)
- [SkillsetAbilityDeleteResponse](skillset_ability_v1.md#skillsetabilitydeleteresponse)
- [SkillsetAbilityFetchResponse](skillset_ability_v1.md#skillsetabilityfetchresponse)
- [SkillsetAbilityInstance](skillset_ability_v1.md#skillsetabilityinstance)
- [SkillsetAbilityListRequest](skillset_ability_v1.md#skillsetabilitylistrequest)
- [SkillsetAbilityListResponse](skillset_ability_v1.md#skillsetabilitylistresponse)
- [SkillsetAbilityListStreamItem](skillset_ability_v1.md#skillsetabilityliststreamitem)
- [SkillsetAbilityListStreamType](skillset_ability_v1.md#skillsetabilityliststreamtype)
- [SkillsetAbilityOptions](skillset_ability_v1.md#skillsetabilityoptions)
- [SkillsetAbilityUpdateRequest](skillset_ability_v1.md#skillsetabilityupdaterequest)
- [SkillsetAbilityUpdateResponse](skillset_ability_v1.md#skillsetabilityupdateresponse)

### Functions

- [createSkillsetAbility](skillset_ability_v1.md#createskillsetability)
- [deleteSkillsetAbility](skillset_ability_v1.md#deleteskillsetability)
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

Ƭ **SkillsetAbilityCreateRequest**\<\>: [`SkillsetAbilityOptions`](skillset_ability_v1.md#skillsetabilityoptions) & {}

#### Defined in

[skillset/ability/v1.js:81](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/skillset/ability/v1.js#L81)

___

### SkillsetAbilityCreateResponse

Ƭ **SkillsetAbilityCreateResponse**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Defined in

[skillset/ability/v1.js:85](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/skillset/ability/v1.js#L85)

___

### SkillsetAbilityDeleteResponse

Ƭ **SkillsetAbilityDeleteResponse**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Defined in

[skillset/ability/v1.js:142](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/skillset/ability/v1.js#L142)

___

### SkillsetAbilityFetchResponse

Ƭ **SkillsetAbilityFetchResponse**\<\>: [`SkillsetAbilityInstance`](skillset_ability_v1.md#skillsetabilityinstance) & {}

#### Defined in

[skillset/ability/v1.js:62](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/skillset/ability/v1.js#L62)

___

### SkillsetAbilityInstance

Ƭ **SkillsetAbilityInstance**\<\>: [`SkillsetAbilityOptions`](skillset_ability_v1.md#skillsetabilityoptions) & \{ `createdAt`: `number` ; `id`: `string` ; `updatedAt`: `number`  }

#### Defined in

[skillset/ability/v1.js:24](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/skillset/ability/v1.js#L24)

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

[skillset/ability/v1.js:33](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/skillset/ability/v1.js#L33)

___

### SkillsetAbilityListResponse

Ƭ **SkillsetAbilityListResponse**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `items` | [`SkillsetAbilityInstance`](skillset_ability_v1.md#skillsetabilityinstance)[] |

#### Defined in

[skillset/ability/v1.js:35](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/skillset/ability/v1.js#L35)

___

### SkillsetAbilityListStreamItem

Ƭ **SkillsetAbilityListStreamItem**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `data` | [`SkillsetAbilityInstance`](skillset_ability_v1.md#skillsetabilityinstance) |
| `type` | ``"item"`` |

#### Defined in

[skillset/ability/v1.js:40](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/skillset/ability/v1.js#L40)

___

### SkillsetAbilityListStreamType

Ƭ **SkillsetAbilityListStreamType**\<\>: [`SkillsetAbilityListStreamItem`](skillset_ability_v1.md#skillsetabilityliststreamitem)

#### Defined in

[skillset/ability/v1.js:42](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/skillset/ability/v1.js#L42)

___

### SkillsetAbilityOptions

Ƭ **SkillsetAbilityOptions**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `description` | `string` |
| `instruction` | `string` |
| `meta?` | [`Record`]( https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type )\<`string`, `any`\> |
| `name` | `string` |
| `secretId?` | `string` |

#### Defined in

[skillset/ability/v1.js:18](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/skillset/ability/v1.js#L18)

___

### SkillsetAbilityUpdateRequest

Ƭ **SkillsetAbilityUpdateRequest**\<\>: [`SkillsetAbilityOptions`](skillset_ability_v1.md#skillsetabilityoptions) & {}

#### Defined in

[skillset/ability/v1.js:108](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/skillset/ability/v1.js#L108)

___

### SkillsetAbilityUpdateResponse

Ƭ **SkillsetAbilityUpdateResponse**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Defined in

[skillset/ability/v1.js:112](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/skillset/ability/v1.js#L112)

## Functions

### createSkillsetAbility

▸ **createSkillsetAbility**(`client`, `skillsetId`, `request`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<[`SkillsetAbilityCreateResponse`](skillset_ability_v1.md#skillsetabilitycreateresponse)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`ChatBotKitClient`](../classes/client.ChatBotKitClient.md) |
| `skillsetId` | `string` |
| `request` | [`SkillsetAbilityOptions`](skillset_ability_v1.md#skillsetabilityoptions) |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<[`SkillsetAbilityCreateResponse`](skillset_ability_v1.md#skillsetabilitycreateresponse)\>

#### Defined in

[skillset/ability/v1.js:92](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/skillset/ability/v1.js#L92)

___

### deleteSkillsetAbility

▸ **deleteSkillsetAbility**(`client`, `skillsetId`, `abilityId`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<[`SkillsetAbilityDeleteResponse`](skillset_ability_v1.md#skillsetabilitydeleteresponse)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`ChatBotKitClient`](../classes/client.ChatBotKitClient.md) |
| `skillsetId` | `string` |
| `abilityId` | `string` |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<[`SkillsetAbilityDeleteResponse`](skillset_ability_v1.md#skillsetabilitydeleteresponse)\>

#### Defined in

[skillset/ability/v1.js:149](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/skillset/ability/v1.js#L149)

___

### fetchSkillsetAbility

▸ **fetchSkillsetAbility**(`client`, `skillsetId`, `abilityId`): [`ResponsePromise`](../classes/client.ResponsePromise.md)\<[`SkillsetAbilityFetchResponse`](skillset_ability_v1.md#skillsetabilityfetchresponse), `never`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`ChatBotKitClient`](../classes/client.ChatBotKitClient.md) |
| `skillsetId` | `string` |
| `abilityId` | `string` |

#### Returns

[`ResponsePromise`](../classes/client.ResponsePromise.md)\<[`SkillsetAbilityFetchResponse`](skillset_ability_v1.md#skillsetabilityfetchresponse), `never`\>

#### Defined in

[skillset/ability/v1.js:69](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/skillset/ability/v1.js#L69)

___

### listSkillsetAbilities

▸ **listSkillsetAbilities**(`client`, `skillsetId`, `request?`): [`ResponsePromise`](../classes/client.ResponsePromise.md)\<[`SkillsetAbilityListResponse`](skillset_ability_v1.md#skillsetabilitylistresponse), [`SkillsetAbilityListStreamItem`](skillset_ability_v1.md#skillsetabilityliststreamitem)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`ChatBotKitClient`](../classes/client.ChatBotKitClient.md) |
| `skillsetId` | `string` |
| `request?` | [`SkillsetAbilityListRequest`](skillset_ability_v1.md#skillsetabilitylistrequest) |

#### Returns

[`ResponsePromise`](../classes/client.ResponsePromise.md)\<[`SkillsetAbilityListResponse`](skillset_ability_v1.md#skillsetabilitylistresponse), [`SkillsetAbilityListStreamItem`](skillset_ability_v1.md#skillsetabilityliststreamitem)\>

#### Defined in

[skillset/ability/v1.js:49](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/skillset/ability/v1.js#L49)

___

### updateSkillsetAbility

▸ **updateSkillsetAbility**(`client`, `skillsetId`, `abilityId`, `request`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<[`SkillsetAbilityUpdateResponse`](skillset_ability_v1.md#skillsetabilityupdateresponse)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`ChatBotKitClient`](../classes/client.ChatBotKitClient.md) |
| `skillsetId` | `string` |
| `abilityId` | `string` |
| `request` | [`SkillsetAbilityOptions`](skillset_ability_v1.md#skillsetabilityoptions) |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<[`SkillsetAbilityUpdateResponse`](skillset_ability_v1.md#skillsetabilityupdateresponse)\>

#### Defined in

[skillset/ability/v1.js:120](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/skillset/ability/v1.js#L120)
