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

[skillset/ability/v1.js:76](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/skillset/ability/v1.js#L76)

___

### SkillsetAbilityCreateResponse

Ƭ **SkillsetAbilityCreateResponse**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Defined in

[skillset/ability/v1.js:80](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/skillset/ability/v1.js#L80)

___

### SkillsetAbilityDeleteResponse

Ƭ **SkillsetAbilityDeleteResponse**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Defined in

[skillset/ability/v1.js:137](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/skillset/ability/v1.js#L137)

___

### SkillsetAbilityFetchResponse

Ƭ **SkillsetAbilityFetchResponse**\<\>: [`SkillsetAbilityInstance`](skillset_ability_v1.md#skillsetabilityinstance) & {}

#### Defined in

[skillset/ability/v1.js:57](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/skillset/ability/v1.js#L57)

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

[skillset/ability/v1.js:28](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/skillset/ability/v1.js#L28)

___

### SkillsetAbilityListResponse

Ƭ **SkillsetAbilityListResponse**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `items` | [`SkillsetAbilityInstance`](skillset_ability_v1.md#skillsetabilityinstance)[] |

#### Defined in

[skillset/ability/v1.js:30](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/skillset/ability/v1.js#L30)

___

### SkillsetAbilityListStreamItem

Ƭ **SkillsetAbilityListStreamItem**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `data` | [`SkillsetAbilityInstance`](skillset_ability_v1.md#skillsetabilityinstance) |
| `type` | ``"item"`` |

#### Defined in

[skillset/ability/v1.js:35](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/skillset/ability/v1.js#L35)

___

### SkillsetAbilityListStreamType

Ƭ **SkillsetAbilityListStreamType**\<\>: [`SkillsetAbilityListStreamItem`](skillset_ability_v1.md#skillsetabilityliststreamitem)

#### Defined in

[skillset/ability/v1.js:37](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/skillset/ability/v1.js#L37)

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

[skillset/ability/v1.js:103](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/skillset/ability/v1.js#L103)

___

### SkillsetAbilityUpdateResponse

Ƭ **SkillsetAbilityUpdateResponse**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Defined in

[skillset/ability/v1.js:107](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/skillset/ability/v1.js#L107)

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

[skillset/ability/v1.js:87](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/skillset/ability/v1.js#L87)

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

[skillset/ability/v1.js:144](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/skillset/ability/v1.js#L144)

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

[skillset/ability/v1.js:64](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/skillset/ability/v1.js#L64)

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

[skillset/ability/v1.js:44](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/skillset/ability/v1.js#L44)

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

[skillset/ability/v1.js:115](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/skillset/ability/v1.js#L115)
