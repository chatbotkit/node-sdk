[@chatbotkit/sdk](../README.md) / [Modules](../modules.md) / [skillset/ability](../modules/skillset_ability.md) / AbilityClient

# Class: AbilityClient

[skillset/ability](../modules/skillset_ability.md).AbilityClient

## Hierarchy

- `ChatBotKitClient`

  ↳ **`AbilityClient`**

## Table of contents

### Constructors

- [constructor](skillset_ability.AbilityClient.md#constructor)

### Properties

- [secret](skillset_ability.AbilityClient.md#secret)
- [url](skillset_ability.AbilityClient.md#url)

### Methods

- [clientFetch](skillset_ability.AbilityClient.md#clientfetch)
- [create](skillset_ability.AbilityClient.md#create)
- [delete](skillset_ability.AbilityClient.md#delete)
- [fetch](skillset_ability.AbilityClient.md#fetch)
- [list](skillset_ability.AbilityClient.md#list)
- [update](skillset_ability.AbilityClient.md#update)

## Constructors

### constructor

• **new AbilityClient**(`options`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `ChatBotKitClientOptions` |

#### Overrides

ChatBotKitClient.constructor

#### Defined in

[skillset/ability/index.js:14](https://github.com/chatbotkit/node-sdk/blob/976a254/packages/sdk/src/skillset/ability/index.js#L14)

## Properties

### secret

• **secret**: `string`

#### Inherited from

ChatBotKitClient.secret

#### Defined in

[client.js:155](https://github.com/chatbotkit/node-sdk/blob/976a254/packages/sdk/src/client.js#L155)

___

### url

• **url**: `URL`

#### Inherited from

ChatBotKitClient.url

#### Defined in

[client.js:157](https://github.com/chatbotkit/node-sdk/blob/976a254/packages/sdk/src/client.js#L157)

## Methods

### clientFetch

▸ **clientFetch**<`T`, `U`\>(`path`, `options?`): `ResponsePromise`<`T`, `U`\>

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
| `options.data?` | `Record`<`string`, `any`\> |
| `options.file?` | `Object` |
| `options.file.data` | `string` \| `ArrayBuffer` |
| `options.file.name?` | `string` |
| `options.file.type?` | `string` |

#### Returns

`ResponsePromise`<`T`, `U`\>

#### Inherited from

ChatBotKitClient.clientFetch

#### Defined in

[client.js:174](https://github.com/chatbotkit/node-sdk/blob/976a254/packages/sdk/src/client.js#L174)

___

### create

▸ **create**(`skillsetId`, `request`): `Promise`<[`AbilityCreateResponse`](../modules/skillset_ability_v1.md#abilitycreateresponse)\>

Creates a new ability.

#### Parameters

| Name | Type |
| :------ | :------ |
| `skillsetId` | `string` |
| `request` | [`AbilityOptions`](../modules/skillset_ability_v1.md#abilityoptions) |

#### Returns

`Promise`<[`AbilityCreateResponse`](../modules/skillset_ability_v1.md#abilitycreateresponse)\>

#### Defined in

[skillset/ability/index.js:46](https://github.com/chatbotkit/node-sdk/blob/976a254/packages/sdk/src/skillset/ability/index.js#L46)

___

### delete

▸ **delete**(`skillsetId`, `abilityId`): `Promise`<[`AbilityDeleteResponse`](../modules/skillset_ability_v1.md#abilitydeleteresponse)\>

Deletes the ability.

#### Parameters

| Name | Type |
| :------ | :------ |
| `skillsetId` | `string` |
| `abilityId` | `string` |

#### Returns

`Promise`<[`AbilityDeleteResponse`](../modules/skillset_ability_v1.md#abilitydeleteresponse)\>

#### Defined in

[skillset/ability/index.js:69](https://github.com/chatbotkit/node-sdk/blob/976a254/packages/sdk/src/skillset/ability/index.js#L69)

___

### fetch

▸ **fetch**(`skillsetId`, `abilityId`): `Promise`<[`AbilityInstance`](../modules/skillset_ability_v1.md#abilityinstance)\>

Fetches a ability.

#### Parameters

| Name | Type |
| :------ | :------ |
| `skillsetId` | `string` |
| `abilityId` | `string` |

#### Returns

`Promise`<[`AbilityInstance`](../modules/skillset_ability_v1.md#abilityinstance)\>

#### Defined in

[skillset/ability/index.js:35](https://github.com/chatbotkit/node-sdk/blob/976a254/packages/sdk/src/skillset/ability/index.js#L35)

___

### list

▸ **list**(`skillsetId`): `ResponsePromise`<[`AbilityListResponse`](../modules/skillset_ability_v1.md#abilitylistresponse), [`AbilityListStreamItem`](../modules/skillset_ability_v1.md#abilityliststreamitem)\>

Retrieves a list of all existing abilitys associated with this client.

#### Parameters

| Name | Type |
| :------ | :------ |
| `skillsetId` | `string` |

#### Returns

`ResponsePromise`<[`AbilityListResponse`](../modules/skillset_ability_v1.md#abilitylistresponse), [`AbilityListStreamItem`](../modules/skillset_ability_v1.md#abilityliststreamitem)\>

#### Defined in

[skillset/ability/index.js:24](https://github.com/chatbotkit/node-sdk/blob/976a254/packages/sdk/src/skillset/ability/index.js#L24)

___

### update

▸ **update**(`skillsetId`, `abilityId`, `request`): `Promise`<[`AbilityUpdateResponse`](../modules/skillset_ability_v1.md#abilityupdateresponse)\>

Updates a new ability.

#### Parameters

| Name | Type |
| :------ | :------ |
| `skillsetId` | `string` |
| `abilityId` | `string` |
| `request` | [`AbilityOptions`](../modules/skillset_ability_v1.md#abilityoptions) |

#### Returns

`Promise`<[`AbilityUpdateResponse`](../modules/skillset_ability_v1.md#abilityupdateresponse)\>

#### Defined in

[skillset/ability/index.js:58](https://github.com/chatbotkit/node-sdk/blob/976a254/packages/sdk/src/skillset/ability/index.js#L58)
