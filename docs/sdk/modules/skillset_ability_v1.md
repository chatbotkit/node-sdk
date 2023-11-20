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

Ƭ **ChatBotKitClient**\<\>: `ChatBotKitClient`

#### Defined in

[skillset/ability/v1.js:2](https://github.com/chatbotkit/node-sdk/blob/b5ebcd8/packages/sdk/src/skillset/ability/v1.js#L2)

___

### ResponsePromise

Ƭ **ResponsePromise**\<`T`, `U`\>: `ResponsePromise`

#### Type parameters

| Name |
| :------ |
| `T` |
| `U` |

#### Defined in

[skillset/ability/v1.js:8](https://github.com/chatbotkit/node-sdk/blob/b5ebcd8/packages/sdk/src/skillset/ability/v1.js#L8)

___

### SkillsetAbilityCreateRequest

Ƭ **SkillsetAbilityCreateRequest**\<\>: [`SkillsetAbilityOptions`](skillset_ability_v1.md#skillsetabilityoptions)

#### Defined in

[skillset/ability/v1.js:72](https://github.com/chatbotkit/node-sdk/blob/b5ebcd8/packages/sdk/src/skillset/ability/v1.js#L72)

___

### SkillsetAbilityCreateResponse

Ƭ **SkillsetAbilityCreateResponse**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Defined in

[skillset/ability/v1.js:76](https://github.com/chatbotkit/node-sdk/blob/b5ebcd8/packages/sdk/src/skillset/ability/v1.js#L76)

___

### SkillsetAbilityDeleteResponse

Ƭ **SkillsetAbilityDeleteResponse**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Defined in

[skillset/ability/v1.js:128](https://github.com/chatbotkit/node-sdk/blob/b5ebcd8/packages/sdk/src/skillset/ability/v1.js#L128)

___

### SkillsetAbilityFetchResponse

Ƭ **SkillsetAbilityFetchResponse**\<\>: [`SkillsetAbilityInstance`](skillset_ability_v1.md#skillsetabilityinstance)

#### Defined in

[skillset/ability/v1.js:55](https://github.com/chatbotkit/node-sdk/blob/b5ebcd8/packages/sdk/src/skillset/ability/v1.js#L55)

___

### SkillsetAbilityInstance

Ƭ **SkillsetAbilityInstance**\<\>: \{ `createdAt`: `number` ; `id`: `string` ; `updatedAt`: `number`  } & [`SkillsetAbilityOptions`](skillset_ability_v1.md#skillsetabilityoptions)

#### Defined in

[skillset/ability/v1.js:23](https://github.com/chatbotkit/node-sdk/blob/b5ebcd8/packages/sdk/src/skillset/ability/v1.js#L23)

___

### SkillsetAbilityListRequest

Ƭ **SkillsetAbilityListRequest**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `cursor?` | `string` |
| `meta?` | `Record`\<`string`, `string`\> |
| `take?` | `number` |

#### Defined in

[skillset/ability/v1.js:27](https://github.com/chatbotkit/node-sdk/blob/b5ebcd8/packages/sdk/src/skillset/ability/v1.js#L27)

___

### SkillsetAbilityListResponse

Ƭ **SkillsetAbilityListResponse**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `items` | [`SkillsetAbilityInstance`](skillset_ability_v1.md#skillsetabilityinstance)[] |

#### Defined in

[skillset/ability/v1.js:29](https://github.com/chatbotkit/node-sdk/blob/b5ebcd8/packages/sdk/src/skillset/ability/v1.js#L29)

___

### SkillsetAbilityListStreamItem

Ƭ **SkillsetAbilityListStreamItem**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `data` | [`SkillsetAbilityInstance`](skillset_ability_v1.md#skillsetabilityinstance) |
| `type` | ``"item"`` |

#### Defined in

[skillset/ability/v1.js:34](https://github.com/chatbotkit/node-sdk/blob/b5ebcd8/packages/sdk/src/skillset/ability/v1.js#L34)

___

### SkillsetAbilityListStreamType

Ƭ **SkillsetAbilityListStreamType**\<\>: [`SkillsetAbilityListStreamItem`](skillset_ability_v1.md#skillsetabilityliststreamitem)

#### Defined in

[skillset/ability/v1.js:36](https://github.com/chatbotkit/node-sdk/blob/b5ebcd8/packages/sdk/src/skillset/ability/v1.js#L36)

___

### SkillsetAbilityOptions

Ƭ **SkillsetAbilityOptions**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `description` | `string` |
| `instruction` | `string` |
| `meta?` | `Record`\<`string`, `any`\> |
| `name` | `string` |

#### Defined in

[skillset/ability/v1.js:17](https://github.com/chatbotkit/node-sdk/blob/b5ebcd8/packages/sdk/src/skillset/ability/v1.js#L17)

___

### SkillsetAbilityUpdateRequest

Ƭ **SkillsetAbilityUpdateRequest**\<\>: [`SkillsetAbilityOptions`](skillset_ability_v1.md#skillsetabilityoptions)

#### Defined in

[skillset/ability/v1.js:96](https://github.com/chatbotkit/node-sdk/blob/b5ebcd8/packages/sdk/src/skillset/ability/v1.js#L96)

___

### SkillsetAbilityUpdateResponse

Ƭ **SkillsetAbilityUpdateResponse**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Defined in

[skillset/ability/v1.js:100](https://github.com/chatbotkit/node-sdk/blob/b5ebcd8/packages/sdk/src/skillset/ability/v1.js#L100)

## Functions

### createSkillsetAbility

▸ **createSkillsetAbility**(`client`, `skillsetId`, `request`): `Promise`\<[`SkillsetAbilityCreateResponse`](skillset_ability_v1.md#skillsetabilitycreateresponse)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | `ChatBotKitClient` |
| `skillsetId` | `string` |
| `request` | [`SkillsetAbilityOptions`](skillset_ability_v1.md#skillsetabilityoptions) |

#### Returns

`Promise`\<[`SkillsetAbilityCreateResponse`](skillset_ability_v1.md#skillsetabilitycreateresponse)\>

#### Defined in

[skillset/ability/v1.js:83](https://github.com/chatbotkit/node-sdk/blob/b5ebcd8/packages/sdk/src/skillset/ability/v1.js#L83)

___

### deleteSkillsetAbility

▸ **deleteSkillsetAbility**(`client`, `skillsetId`, `abilityId`): `Promise`\<[`SkillsetAbilityDeleteResponse`](skillset_ability_v1.md#skillsetabilitydeleteresponse)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | `ChatBotKitClient` |
| `skillsetId` | `string` |
| `abilityId` | `string` |

#### Returns

`Promise`\<[`SkillsetAbilityDeleteResponse`](skillset_ability_v1.md#skillsetabilitydeleteresponse)\>

#### Defined in

[skillset/ability/v1.js:135](https://github.com/chatbotkit/node-sdk/blob/b5ebcd8/packages/sdk/src/skillset/ability/v1.js#L135)

___

### fetchSkillsetAbility

▸ **fetchSkillsetAbility**(`client`, `skillsetId`, `abilityId`): `Promise`\<[`SkillsetAbilityInstance`](skillset_ability_v1.md#skillsetabilityinstance)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | `ChatBotKitClient` |
| `skillsetId` | `string` |
| `abilityId` | `string` |

#### Returns

`Promise`\<[`SkillsetAbilityInstance`](skillset_ability_v1.md#skillsetabilityinstance)\>

#### Defined in

[skillset/ability/v1.js:62](https://github.com/chatbotkit/node-sdk/blob/b5ebcd8/packages/sdk/src/skillset/ability/v1.js#L62)

___

### listSkillsetAbilities

▸ **listSkillsetAbilities**(`client`, `skillsetId`, `request?`): `ResponsePromise`\<[`SkillsetAbilityListResponse`](skillset_ability_v1.md#skillsetabilitylistresponse), [`SkillsetAbilityListStreamItem`](skillset_ability_v1.md#skillsetabilityliststreamitem)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | `ChatBotKitClient` |
| `skillsetId` | `string` |
| `request?` | [`SkillsetAbilityListRequest`](skillset_ability_v1.md#skillsetabilitylistrequest) |

#### Returns

`ResponsePromise`\<[`SkillsetAbilityListResponse`](skillset_ability_v1.md#skillsetabilitylistresponse), [`SkillsetAbilityListStreamItem`](skillset_ability_v1.md#skillsetabilityliststreamitem)\>

#### Defined in

[skillset/ability/v1.js:43](https://github.com/chatbotkit/node-sdk/blob/b5ebcd8/packages/sdk/src/skillset/ability/v1.js#L43)

___

### updateSkillsetAbility

▸ **updateSkillsetAbility**(`client`, `skillsetId`, `abilityId`, `request`): `Promise`\<[`SkillsetAbilityUpdateResponse`](skillset_ability_v1.md#skillsetabilityupdateresponse)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | `ChatBotKitClient` |
| `skillsetId` | `string` |
| `abilityId` | `string` |
| `request` | [`SkillsetAbilityOptions`](skillset_ability_v1.md#skillsetabilityoptions) |

#### Returns

`Promise`\<[`SkillsetAbilityUpdateResponse`](skillset_ability_v1.md#skillsetabilityupdateresponse)\>

#### Defined in

[skillset/ability/v1.js:108](https://github.com/chatbotkit/node-sdk/blob/b5ebcd8/packages/sdk/src/skillset/ability/v1.js#L108)
