[@chatbotkit/sdk](../README.md) / [Modules](../modules.md) / [skillset](../modules/skillset.md) / SkillsetClient

# Class: SkillsetClient

[skillset](../modules/skillset.md).SkillsetClient

**`Template`**

**`Template`**

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

• **new SkillsetClient**(`options`): [`SkillsetClient`](skillset.SkillsetClient.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `ChatBotKitClientOptions` |

#### Returns

[`SkillsetClient`](skillset.SkillsetClient.md)

#### Overrides

ChatBotKitClient.constructor

#### Defined in

[skillset/index.js:21](https://github.com/chatbotkit/node-sdk/blob/d5a6097/packages/sdk/src/skillset/index.js#L21)

## Properties

### ability

• **ability**: [`SkillsetAbilityClient`](skillset_ability.SkillsetAbilityClient.md)

#### Defined in

[skillset/index.js:24](https://github.com/chatbotkit/node-sdk/blob/d5a6097/packages/sdk/src/skillset/index.js#L24)

___

### secret

• **secret**: `string`

#### Inherited from

ChatBotKitClient.secret

#### Defined in

[client.js:187](https://github.com/chatbotkit/node-sdk/blob/d5a6097/packages/sdk/src/client.js#L187)

___

### url

• **url**: `URL`

#### Inherited from

ChatBotKitClient.url

#### Defined in

[client.js:189](https://github.com/chatbotkit/node-sdk/blob/d5a6097/packages/sdk/src/client.js#L189)

## Methods

### clientFetch

▸ **clientFetch**\<`T`, `U`\>(`path`, `options?`): `ResponsePromise`\<`T`, `U`\>

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

`ResponsePromise`\<`T`, `U`\>

#### Inherited from

ChatBotKitClient.clientFetch

#### Defined in

[client.js:206](https://github.com/chatbotkit/node-sdk/blob/d5a6097/packages/sdk/src/client.js#L206)

___

### create

▸ **create**(`request`): `Promise`\<[`SkillsetCreateResponse`](../modules/skillset_v1.md#skillsetcreateresponse)\>

Creates a new skillset.

#### Parameters

| Name | Type |
| :------ | :------ |
| `request` | [`SkillsetOptions`](../modules/skillset_v1.md#skillsetoptions) |

#### Returns

`Promise`\<[`SkillsetCreateResponse`](../modules/skillset_v1.md#skillsetcreateresponse)\>

#### Defined in

[skillset/index.js:53](https://github.com/chatbotkit/node-sdk/blob/d5a6097/packages/sdk/src/skillset/index.js#L53)

___

### delete

▸ **delete**(`skillsetId`): `Promise`\<[`SkillsetDeleteResponse`](../modules/skillset_v1.md#skillsetdeleteresponse)\>

Deletes the skillset.

#### Parameters

| Name | Type |
| :------ | :------ |
| `skillsetId` | `string` |

#### Returns

`Promise`\<[`SkillsetDeleteResponse`](../modules/skillset_v1.md#skillsetdeleteresponse)\>

#### Defined in

[skillset/index.js:74](https://github.com/chatbotkit/node-sdk/blob/d5a6097/packages/sdk/src/skillset/index.js#L74)

___

### fetch

▸ **fetch**(`skillsetId`): `Promise`\<[`SkillsetInstance`](../modules/skillset_v1.md#skillsetinstance)\>

Fetches a skillset.

#### Parameters

| Name | Type |
| :------ | :------ |
| `skillsetId` | `string` |

#### Returns

`Promise`\<[`SkillsetInstance`](../modules/skillset_v1.md#skillsetinstance)\>

#### Defined in

[skillset/index.js:43](https://github.com/chatbotkit/node-sdk/blob/d5a6097/packages/sdk/src/skillset/index.js#L43)

___

### list

▸ **list**(`request?`): `ResponsePromise`\<[`SkillsetListResponse`](../modules/skillset_v1.md#skillsetlistresponse), [`SkillsetListStreamItemType`](../modules/skillset_v1.md#skillsetliststreamitemtype)\>

Retrieves a list of all skillsets.

#### Parameters

| Name | Type |
| :------ | :------ |
| `request?` | [`SkillsetListRequest`](../modules/skillset_v1.md#skillsetlistrequest) |

#### Returns

`ResponsePromise`\<[`SkillsetListResponse`](../modules/skillset_v1.md#skillsetlistresponse), [`SkillsetListStreamItemType`](../modules/skillset_v1.md#skillsetliststreamitemtype)\>

#### Defined in

[skillset/index.js:33](https://github.com/chatbotkit/node-sdk/blob/d5a6097/packages/sdk/src/skillset/index.js#L33)

___

### update

▸ **update**(`skillsetId`, `request`): `Promise`\<[`SkillsetUpdateResponse`](../modules/skillset_v1.md#skillsetupdateresponse)\>

Updates a skillset.

#### Parameters

| Name | Type |
| :------ | :------ |
| `skillsetId` | `string` |
| `request` | [`SkillsetOptions`](../modules/skillset_v1.md#skillsetoptions) |

#### Returns

`Promise`\<[`SkillsetUpdateResponse`](../modules/skillset_v1.md#skillsetupdateresponse)\>

#### Defined in

[skillset/index.js:64](https://github.com/chatbotkit/node-sdk/blob/d5a6097/packages/sdk/src/skillset/index.js#L64)
