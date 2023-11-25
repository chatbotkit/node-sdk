[@chatbotkit/sdk](../README.md) / [Modules](../modules.md) / [skillset/ability](../modules/skillset_ability.md) / SkillsetAbilityClient

# Class: SkillsetAbilityClient

[skillset/ability](../modules/skillset_ability.md).SkillsetAbilityClient

**`Template`**

**`Template`**

## Hierarchy

- [`ChatBotKitClient`](client.ChatBotKitClient.md)

  ↳ **`SkillsetAbilityClient`**

## Table of contents

### Constructors

- [constructor](skillset_ability.SkillsetAbilityClient.md#constructor)

### Properties

- [endpoints](skillset_ability.SkillsetAbilityClient.md#endpoints)
- [secret](skillset_ability.SkillsetAbilityClient.md#secret)
- [url](skillset_ability.SkillsetAbilityClient.md#url)

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
| `options` | [`ChatBotKitClientOptions`](../modules/client.md#chatbotkitclientoptions) |

#### Returns

[`SkillsetAbilityClient`](skillset_ability.SkillsetAbilityClient.md)

#### Overrides

[ChatBotKitClient](client.ChatBotKitClient.md).[constructor](client.ChatBotKitClient.md#constructor)

#### Defined in

[skillset/ability/index.js:20](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/skillset/ability/index.js#L20)

## Properties

### endpoints

• **endpoints**: `Record`\<`string`, `string`\>

#### Inherited from

[ChatBotKitClient](client.ChatBotKitClient.md).[endpoints](client.ChatBotKitClient.md#endpoints)

#### Defined in

[client.js:201](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/client.js#L201)

___

### secret

• **secret**: `string`

#### Inherited from

[ChatBotKitClient](client.ChatBotKitClient.md).[secret](client.ChatBotKitClient.md#secret)

#### Defined in

[client.js:189](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/client.js#L189)

___

### url

• **url**: `URL`

#### Inherited from

[ChatBotKitClient](client.ChatBotKitClient.md).[url](client.ChatBotKitClient.md#url)

#### Defined in

[client.js:191](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/client.js#L191)

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
| `options.data?` | `Record`\<`string`, `any`\> |
| `options.file?` | `Object` |
| `options.file.data` | `string` \| `ArrayBuffer` |
| `options.file.name?` | `string` |
| `options.file.type?` | `string` |
| `options.query?` | `Record`\<`string`, `any`\> |

#### Returns

[`ResponsePromise`](client.ResponsePromise.md)\<`T`, `U`\>

#### Inherited from

[ChatBotKitClient](client.ChatBotKitClient.md).[clientFetch](client.ChatBotKitClient.md#clientfetch)

#### Defined in

[client.js:211](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/client.js#L211)

___

### create

▸ **create**(`skillsetId`, `request`): `Promise`\<[`SkillsetAbilityCreateResponse`](../modules/skillset_ability_v1.md#skillsetabilitycreateresponse)\>

Creates a new ability.

#### Parameters

| Name | Type |
| :------ | :------ |
| `skillsetId` | `string` |
| `request` | [`SkillsetAbilityOptions`](../modules/skillset_ability_v1.md#skillsetabilityoptions) |

#### Returns

`Promise`\<[`SkillsetAbilityCreateResponse`](../modules/skillset_ability_v1.md#skillsetabilitycreateresponse)\>

#### Defined in

[skillset/ability/index.js:53](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/skillset/ability/index.js#L53)

___

### delete

▸ **delete**(`skillsetId`, `abilityId`): `Promise`\<[`SkillsetAbilityDeleteResponse`](../modules/skillset_ability_v1.md#skillsetabilitydeleteresponse)\>

Deletes the ability.

#### Parameters

| Name | Type |
| :------ | :------ |
| `skillsetId` | `string` |
| `abilityId` | `string` |

#### Returns

`Promise`\<[`SkillsetAbilityDeleteResponse`](../modules/skillset_ability_v1.md#skillsetabilitydeleteresponse)\>

#### Defined in

[skillset/ability/index.js:76](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/skillset/ability/index.js#L76)

___

### fetch

▸ **fetch**(`skillsetId`, `abilityId`): `Promise`\<[`SkillsetAbilityFetchResponse`](../modules/skillset_ability_v1.md#skillsetabilityfetchresponse)\>

Fetches a ability.

#### Parameters

| Name | Type |
| :------ | :------ |
| `skillsetId` | `string` |
| `abilityId` | `string` |

#### Returns

`Promise`\<[`SkillsetAbilityFetchResponse`](../modules/skillset_ability_v1.md#skillsetabilityfetchresponse)\>

#### Defined in

[skillset/ability/index.js:42](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/skillset/ability/index.js#L42)

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

[skillset/ability/index.js:31](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/skillset/ability/index.js#L31)

___

### update

▸ **update**(`skillsetId`, `abilityId`, `request`): `Promise`\<[`SkillsetAbilityUpdateResponse`](../modules/skillset_ability_v1.md#skillsetabilityupdateresponse)\>

Updates an ability.

#### Parameters

| Name | Type |
| :------ | :------ |
| `skillsetId` | `string` |
| `abilityId` | `string` |
| `request` | [`SkillsetAbilityOptions`](../modules/skillset_ability_v1.md#skillsetabilityoptions) |

#### Returns

`Promise`\<[`SkillsetAbilityUpdateResponse`](../modules/skillset_ability_v1.md#skillsetabilityupdateresponse)\>

#### Defined in

[skillset/ability/index.js:65](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/skillset/ability/index.js#L65)
