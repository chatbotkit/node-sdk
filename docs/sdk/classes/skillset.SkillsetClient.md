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

[skillset/index.js:15](https://github.com/chatbotkit/node-sdk/blob/2d607d3/packages/sdk/src/skillset/index.js#L15)

## Properties

### ability

• **ability**: [`AbilityClient`](skillset_ability.AbilityClient.md)

#### Defined in

[skillset/index.js:18](https://github.com/chatbotkit/node-sdk/blob/2d607d3/packages/sdk/src/skillset/index.js#L18)

___

### secret

• **secret**: `string`

#### Inherited from

ChatBotKitClient.secret

#### Defined in

[client.js:135](https://github.com/chatbotkit/node-sdk/blob/2d607d3/packages/sdk/src/client.js#L135)

___

### url

• **url**: `URL`

#### Inherited from

ChatBotKitClient.url

#### Defined in

[client.js:137](https://github.com/chatbotkit/node-sdk/blob/2d607d3/packages/sdk/src/client.js#L137)

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

#### Returns

`ResponsePromise`<`T`, `U`\>

#### Inherited from

ChatBotKitClient.clientFetch

#### Defined in

[client.js:154](https://github.com/chatbotkit/node-sdk/blob/2d607d3/packages/sdk/src/client.js#L154)

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

[skillset/index.js:42](https://github.com/chatbotkit/node-sdk/blob/2d607d3/packages/sdk/src/skillset/index.js#L42)

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

[skillset/index.js:61](https://github.com/chatbotkit/node-sdk/blob/2d607d3/packages/sdk/src/skillset/index.js#L61)

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

[skillset/index.js:33](https://github.com/chatbotkit/node-sdk/blob/2d607d3/packages/sdk/src/skillset/index.js#L33)

___

### list

▸ **list**(): `Promise`<[`SkillsetInstance`](../modules/skillset_v1.md#skillsetinstance)\>

Retrieves a list of all existing skillsets associated with this client.

#### Returns

`Promise`<[`SkillsetInstance`](../modules/skillset_v1.md#skillsetinstance)\>

#### Defined in

[skillset/index.js:24](https://github.com/chatbotkit/node-sdk/blob/2d607d3/packages/sdk/src/skillset/index.js#L24)

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

[skillset/index.js:52](https://github.com/chatbotkit/node-sdk/blob/2d607d3/packages/sdk/src/skillset/index.js#L52)
