[@chatbotkit/sdk](../README.md) / [Modules](../modules.md) / [skillset](../modules/skillset.md) / SkillsetClient

# Class: SkillsetClient

[skillset](../modules/skillset.md).SkillsetClient

## Hierarchy

- `ChatBotKitClient`

  ↳ **`SkillsetClient`**

## Table of contents

### Constructors

- [constructor](skillset.SkillsetClient.md#constructor)

### Properties

- [ability](skillset.SkillsetClient.md#ability)
- [secret](skillset.SkillsetClient.md#secret)
- [url](skillset.SkillsetClient.md#url)

### Methods

- [clientFetch](skillset.SkillsetClient.md#clientfetch)
- [create](skillset.SkillsetClient.md#create)
- [delete](skillset.SkillsetClient.md#delete)
- [fetch](skillset.SkillsetClient.md#fetch)
- [list](skillset.SkillsetClient.md#list)
- [update](skillset.SkillsetClient.md#update)

## Constructors

### constructor

• **new SkillsetClient**(`options`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `ChatBotKitClientOptions` |

#### Overrides

ChatBotKitClient.constructor

#### Defined in

[skillset/index.js:15](https://github.com/chatbotkit/node-sdk/blob/c325fd2/packages/sdk/src/skillset/index.js#L15)

## Properties

### ability

• **ability**: [`AbilityClient`](skillset_ability.AbilityClient.md)

#### Defined in

[skillset/index.js:18](https://github.com/chatbotkit/node-sdk/blob/c325fd2/packages/sdk/src/skillset/index.js#L18)

___

### secret

• **secret**: `string`

#### Inherited from

ChatBotKitClient.secret

#### Defined in

[client.js:155](https://github.com/chatbotkit/node-sdk/blob/c325fd2/packages/sdk/src/client.js#L155)

___

### url

• **url**: `URL`

#### Inherited from

ChatBotKitClient.url

#### Defined in

[client.js:157](https://github.com/chatbotkit/node-sdk/blob/c325fd2/packages/sdk/src/client.js#L157)

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

[client.js:174](https://github.com/chatbotkit/node-sdk/blob/c325fd2/packages/sdk/src/client.js#L174)

___

### create

▸ **create**(`request`): `Promise`<[`SkillsetCreateResponse`](../modules/skillset_v1.md#skillsetcreateresponse)\>

Creates a new skillset.

#### Parameters

| Name | Type |
| :------ | :------ |
| `request` | [`SkillsetOptions`](../modules/skillset_v1.md#skillsetoptions) |

#### Returns

`Promise`<[`SkillsetCreateResponse`](../modules/skillset_v1.md#skillsetcreateresponse)\>

#### Defined in

[skillset/index.js:45](https://github.com/chatbotkit/node-sdk/blob/c325fd2/packages/sdk/src/skillset/index.js#L45)

___

### delete

▸ **delete**(`skillsetId`): `Promise`<[`SkillsetDeleteResponse`](../modules/skillset_v1.md#skillsetdeleteresponse)\>

Deletes the skillset.

#### Parameters

| Name | Type |
| :------ | :------ |
| `skillsetId` | `string` |

#### Returns

`Promise`<[`SkillsetDeleteResponse`](../modules/skillset_v1.md#skillsetdeleteresponse)\>

#### Defined in

[skillset/index.js:66](https://github.com/chatbotkit/node-sdk/blob/c325fd2/packages/sdk/src/skillset/index.js#L66)

___

### fetch

▸ **fetch**(`skillsetId`): `Promise`<[`SkillsetInstance`](../modules/skillset_v1.md#skillsetinstance)\>

Fetches a skillset.

#### Parameters

| Name | Type |
| :------ | :------ |
| `skillsetId` | `string` |

#### Returns

`Promise`<[`SkillsetInstance`](../modules/skillset_v1.md#skillsetinstance)\>

#### Defined in

[skillset/index.js:35](https://github.com/chatbotkit/node-sdk/blob/c325fd2/packages/sdk/src/skillset/index.js#L35)

___

### list

▸ **list**(): `ResponsePromise`<[`SkillsetListResponse`](../modules/skillset_v1.md#skillsetlistresponse), [`SkillsetListStreamItemType`](../modules/skillset_v1.md#skillsetliststreamitemtype)\>

Retrieves a list of all existing skillsets associated with this client.

#### Returns

`ResponsePromise`<[`SkillsetListResponse`](../modules/skillset_v1.md#skillsetlistresponse), [`SkillsetListStreamItemType`](../modules/skillset_v1.md#skillsetliststreamitemtype)\>

#### Defined in

[skillset/index.js:25](https://github.com/chatbotkit/node-sdk/blob/c325fd2/packages/sdk/src/skillset/index.js#L25)

___

### update

▸ **update**(`skillsetId`, `request`): `Promise`<[`SkillsetUpdateResponse`](../modules/skillset_v1.md#skillsetupdateresponse)\>

Updates a new skillset.

#### Parameters

| Name | Type |
| :------ | :------ |
| `skillsetId` | `string` |
| `request` | [`SkillsetOptions`](../modules/skillset_v1.md#skillsetoptions) |

#### Returns

`Promise`<[`SkillsetUpdateResponse`](../modules/skillset_v1.md#skillsetupdateresponse)\>

#### Defined in

[skillset/index.js:56](https://github.com/chatbotkit/node-sdk/blob/c325fd2/packages/sdk/src/skillset/index.js#L56)
