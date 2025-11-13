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
- [export](skillset_ability.SkillsetAbilityClient.md#export)
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

[skillset/ability/index.js:24](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/skillset/ability/index.js#L24)

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
| `options.fetchFn?` | [`FetchFunction`](../modules/client.md#fetchfunction) |
| `options.file?` | `Object` |
| `options.file.data` | `string` \| [`ArrayBuffer`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer ) |
| `options.file.name?` | `string` |
| `options.file.type?` | `string` |
| `options.headers?` | [`Record`]( https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type )\<`string`, `any`\> |
| `options.method?` | `string` |
| `options.query?` | [`Record`]( https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type )\<`string`, `any`\> |
| `options.record?` | [`Record`]( https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type )\<`string`, `any`\> |
| `options.retries?` | `number` |
| `options.retryDelay?` | `number` |
| `options.retryTimeout?` | `boolean` |
| `options.timeout?` | `number` |

#### Returns

[`ResponsePromise`](client.ResponsePromise.md)\<`T`, `U`\>

#### Inherited from

[ChatBotKitClient](client.ChatBotKitClient.md).[clientFetch](client.ChatBotKitClient.md#clientfetch)

#### Defined in

[client.js:390](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/client.js#L390)

___

### create

▸ **create**(`skillsetId`, `request`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<{}\>

Creates a new ability.

#### Parameters

| Name | Type |
| :------ | :------ |
| `skillsetId` | `string` |
| `request` | `Object` |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<{}\>

#### Defined in

[skillset/ability/index.js:68](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/skillset/ability/index.js#L68)

___

### delete

▸ **delete**(`skillsetId`, `abilityId`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<{}\>

Deletes the ability.

#### Parameters

| Name | Type |
| :------ | :------ |
| `skillsetId` | `string` |
| `abilityId` | `string` |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<{}\>

#### Defined in

[skillset/ability/index.js:91](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/skillset/ability/index.js#L91)

___

### export

▸ **export**(`skillsetId`, `request?`): [`ResponsePromise`](client.ResponsePromise.md)\<{}, {}\>

Exports abilities.

#### Parameters

| Name | Type |
| :------ | :------ |
| `skillsetId` | `string` |
| `request?` | [`SkillsetAbilityExportRequest`](../modules/skillset_ability_v1.md#skillsetabilityexportrequest) |

#### Returns

[`ResponsePromise`](client.ResponsePromise.md)\<{}, {}\>

#### Defined in

[skillset/ability/index.js:46](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/skillset/ability/index.js#L46)

___

### fetch

▸ **fetch**(`skillsetId`, `abilityId`): [`ResponsePromise`](client.ResponsePromise.md)\<{}, `never`\>

Fetches a ability.

#### Parameters

| Name | Type |
| :------ | :------ |
| `skillsetId` | `string` |
| `abilityId` | `string` |

#### Returns

[`ResponsePromise`](client.ResponsePromise.md)\<{}, `never`\>

#### Defined in

[skillset/ability/index.js:57](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/skillset/ability/index.js#L57)

___

### list

▸ **list**(`skillsetId`, `request?`): [`ResponsePromise`](client.ResponsePromise.md)\<{}, {}\>

Retrieves a list of all abilities.

#### Parameters

| Name | Type |
| :------ | :------ |
| `skillsetId` | `string` |
| `request?` | [`SkillsetAbilityListRequest`](../modules/skillset_ability_v1.md#skillsetabilitylistrequest) |

#### Returns

[`ResponsePromise`](client.ResponsePromise.md)\<{}, {}\>

#### Defined in

[skillset/ability/index.js:35](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/skillset/ability/index.js#L35)

___

### update

▸ **update**(`skillsetId`, `abilityId`, `request`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<{}\>

Updates an ability.

#### Parameters

| Name | Type |
| :------ | :------ |
| `skillsetId` | `string` |
| `abilityId` | `string` |
| `request` | `Object` |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<{}\>

#### Defined in

[skillset/ability/index.js:80](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/skillset/ability/index.js#L80)
