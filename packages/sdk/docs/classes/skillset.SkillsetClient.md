[@chatbotkit/sdk](../README.md) / [Modules](../modules.md) / [skillset](../modules/skillset.md) / SkillsetClient

# Class: SkillsetClient

[skillset](../modules/skillset.md).SkillsetClient

**`Template`**

**`Template`**

## Hierarchy

- [`ChatBotKitClient`](client.ChatBotKitClient.md)

  ↳ **`SkillsetClient`**

## Table of contents

### Constructors

- [constructor](skillset.SkillsetClient.md#constructor)

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
| `options` | [`ChatBotKitClientOptions`](../modules/client.md#chatbotkitclientoptions) |

#### Returns

[`SkillsetClient`](skillset.SkillsetClient.md)

#### Overrides

[ChatBotKitClient](client.ChatBotKitClient.md).[constructor](client.ChatBotKitClient.md#constructor)

#### Defined in

[skillset/index.js:21](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/skillset/index.js#L21)

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

▸ **create**(`request`): `Promise`\<[`SkillsetCreateResponse`](../modules/skillset_v1.md#skillsetcreateresponse)\>

Creates a new skillset.

#### Parameters

| Name | Type |
| :------ | :------ |
| `request` | [`SkillsetOptions`](../modules/skillset_v1.md#skillsetoptions) |

#### Returns

`Promise`\<[`SkillsetCreateResponse`](../modules/skillset_v1.md#skillsetcreateresponse)\>

#### Defined in

[skillset/index.js:53](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/skillset/index.js#L53)

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

[skillset/index.js:74](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/skillset/index.js#L74)

___

### fetch

▸ **fetch**(`skillsetId`): `Promise`\<[`SkillsetFetchResponse`](../modules/skillset_v1.md#skillsetfetchresponse)\>

Fetches a skillset.

#### Parameters

| Name | Type |
| :------ | :------ |
| `skillsetId` | `string` |

#### Returns

`Promise`\<[`SkillsetFetchResponse`](../modules/skillset_v1.md#skillsetfetchresponse)\>

#### Defined in

[skillset/index.js:43](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/skillset/index.js#L43)

___

### list

▸ **list**(`request?`): [`ResponsePromise`](client.ResponsePromise.md)\<[`SkillsetListResponse`](../modules/skillset_v1.md#skillsetlistresponse), [`SkillsetListStreamItemType`](../modules/skillset_v1.md#skillsetliststreamitemtype)\>

Retrieves a list of all skillsets.

#### Parameters

| Name | Type |
| :------ | :------ |
| `request?` | [`SkillsetListRequest`](../modules/skillset_v1.md#skillsetlistrequest) |

#### Returns

[`ResponsePromise`](client.ResponsePromise.md)\<[`SkillsetListResponse`](../modules/skillset_v1.md#skillsetlistresponse), [`SkillsetListStreamItemType`](../modules/skillset_v1.md#skillsetliststreamitemtype)\>

#### Defined in

[skillset/index.js:33](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/skillset/index.js#L33)

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

[skillset/index.js:64](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/skillset/index.js#L64)
