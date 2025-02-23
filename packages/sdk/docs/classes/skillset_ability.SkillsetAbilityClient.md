[@chatbotkit/sdk](../README.md) / [Modules](../modules.md) / [skillset/ability](../modules/skillset_ability.md) / SkillsetAbilityClient

# Class: SkillsetAbilityClient

[skillset/ability](../modules/skillset_ability.md).SkillsetAbilityClient

Skillset ability client.

## Hierarchy

- [`ChatBotKitClient`](client.ChatBotKitClient.md)

  ↳ **`SkillsetAbilityClient`**

## Table of contents

### Constructors

- [constructor](skillset_ability.SkillsetAbilityClient.md#constructor)

### Methods

- [clientFetch](skillset_ability.SkillsetAbilityClient.md#clientfetch)
- [create](skillset_ability.SkillsetAbilityClient.md#create)
- [delete](skillset_ability.SkillsetAbilityClient.md#delete)
- [fetch](skillset_ability.SkillsetAbilityClient.md#fetch)
- [list](skillset_ability.SkillsetAbilityClient.md#list)
- [update](skillset_ability.SkillsetAbilityClient.md#update)

## Constructors

### constructor

• **new SkillsetAbilityClient**(`options`): [`SkillsetAbilityClient`](skillset_ability.SkillsetAbilityClient.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`ChatBotKitClientOptions`](../interfaces/client.ChatBotKitClientOptions.md) |

#### Returns

[`SkillsetAbilityClient`](skillset_ability.SkillsetAbilityClient.md)

#### Overrides

[ChatBotKitClient](client.ChatBotKitClient.md).[constructor](client.ChatBotKitClient.md#constructor)

#### Defined in

[skillset/ability/index.js:23](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/skillset/ability/index.js#L23)

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
| `options.endpoint?` | `string` |
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

[client.js:251](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/client.js#L251)

___

### create

▸ **create**(`skillsetId`, `request`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<[`SkillsetAbilityCreateResponse`](../modules/skillset_ability_v1.md#skillsetabilitycreateresponse)\>

Creates a new ability.

#### Parameters

| Name | Type |
| :------ | :------ |
| `skillsetId` | `string` |
| `request` | [`SkillsetAbilityOptions`](../modules/skillset_ability_v1.md#skillsetabilityoptions) |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<[`SkillsetAbilityCreateResponse`](../modules/skillset_ability_v1.md#skillsetabilitycreateresponse)\>

#### Defined in

[skillset/ability/index.js:56](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/skillset/ability/index.js#L56)

___

### delete

▸ **delete**(`skillsetId`, `abilityId`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<[`SkillsetAbilityDeleteResponse`](../modules/skillset_ability_v1.md#skillsetabilitydeleteresponse)\>

Deletes the ability.

#### Parameters

| Name | Type |
| :------ | :------ |
| `skillsetId` | `string` |
| `abilityId` | `string` |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<[`SkillsetAbilityDeleteResponse`](../modules/skillset_ability_v1.md#skillsetabilitydeleteresponse)\>

#### Defined in

[skillset/ability/index.js:79](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/skillset/ability/index.js#L79)

___

### fetch

▸ **fetch**(`skillsetId`, `abilityId`): [`ResponsePromise`](client.ResponsePromise.md)\<[`SkillsetAbilityFetchResponse`](../modules/skillset_ability_v1.md#skillsetabilityfetchresponse), `never`\>

Fetches a ability.

#### Parameters

| Name | Type |
| :------ | :------ |
| `skillsetId` | `string` |
| `abilityId` | `string` |

#### Returns

[`ResponsePromise`](client.ResponsePromise.md)\<[`SkillsetAbilityFetchResponse`](../modules/skillset_ability_v1.md#skillsetabilityfetchresponse), `never`\>

#### Defined in

[skillset/ability/index.js:45](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/skillset/ability/index.js#L45)

___

### list

▸ **list**(`skillsetId`, `request?`): [`ResponsePromise`](client.ResponsePromise.md)\<[`SkillsetAbilityListResponse`](../modules/skillset_ability_v1.md#skillsetabilitylistresponse), [`SkillsetAbilityListStreamItem`](../modules/skillset_ability_v1.md#skillsetabilityliststreamitem)\>

Retrieves a list of all abilitys.

#### Parameters

| Name | Type |
| :------ | :------ |
| `skillsetId` | `string` |
| `request?` | [`SkillsetAbilityListRequest`](../modules/skillset_ability_v1.md#skillsetabilitylistrequest) |

#### Returns

[`ResponsePromise`](client.ResponsePromise.md)\<[`SkillsetAbilityListResponse`](../modules/skillset_ability_v1.md#skillsetabilitylistresponse), [`SkillsetAbilityListStreamItem`](../modules/skillset_ability_v1.md#skillsetabilityliststreamitem)\>

#### Defined in

[skillset/ability/index.js:34](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/skillset/ability/index.js#L34)

___

### update

▸ **update**(`skillsetId`, `abilityId`, `request`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<[`SkillsetAbilityUpdateResponse`](../modules/skillset_ability_v1.md#skillsetabilityupdateresponse)\>

Updates an ability.

#### Parameters

| Name | Type |
| :------ | :------ |
| `skillsetId` | `string` |
| `abilityId` | `string` |
| `request` | [`SkillsetAbilityOptions`](../modules/skillset_ability_v1.md#skillsetabilityoptions) |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<[`SkillsetAbilityUpdateResponse`](../modules/skillset_ability_v1.md#skillsetabilityupdateresponse)\>

#### Defined in

[skillset/ability/index.js:68](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/skillset/ability/index.js#L68)
