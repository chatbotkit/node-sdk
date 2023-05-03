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

[skillset/index.js:14](https://github.com/chatbotkit/node-sdk/blob/9c88124/packages/sdk/src/skillset/index.js#L14)

## Properties

### secret

• **secret**: `string`

#### Inherited from

ChatBotKitClient.secret

#### Defined in

[client.js:130](https://github.com/chatbotkit/node-sdk/blob/9c88124/packages/sdk/src/client.js#L130)

___

### url

• **url**: `URL`

#### Inherited from

ChatBotKitClient.url

#### Defined in

[client.js:132](https://github.com/chatbotkit/node-sdk/blob/9c88124/packages/sdk/src/client.js#L132)

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

[client.js:149](https://github.com/chatbotkit/node-sdk/blob/9c88124/packages/sdk/src/client.js#L149)

___

### create

▸ **create**(`request`): `Promise`<[`SkillsetCreateResponse`](../modules/skillset_v1.md#skillsetcreateresponse)\>

Creates a new skillset.

#### Parameters

| Name | Type |
| :------ | :------ |
| `request` | [`SkillsetCreateRequest`](../modules/skillset_v1.md#skillsetcreaterequest) |

#### Returns

`Promise`<[`SkillsetCreateResponse`](../modules/skillset_v1.md#skillsetcreateresponse)\>

#### Defined in

[skillset/index.js:39](https://github.com/chatbotkit/node-sdk/blob/9c88124/packages/sdk/src/skillset/index.js#L39)

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

[skillset/index.js:58](https://github.com/chatbotkit/node-sdk/blob/9c88124/packages/sdk/src/skillset/index.js#L58)

___

### fetch

▸ **fetch**(`skillsetId`): `Promise`<[`SkillsetFetchResponse`](../modules/skillset_v1.md#skillsetfetchresponse)\>

Fetches a skillset.

#### Parameters

| Name | Type |
| :------ | :------ |
| `skillsetId` | `string` |

#### Returns

`Promise`<[`SkillsetFetchResponse`](../modules/skillset_v1.md#skillsetfetchresponse)\>

#### Defined in

[skillset/index.js:30](https://github.com/chatbotkit/node-sdk/blob/9c88124/packages/sdk/src/skillset/index.js#L30)

___

### list

▸ **list**(): `Promise`<[`SkillsetListResponse`](../modules/skillset_v1.md#skillsetlistresponse)\>

Retrieves a list of all existing skillsets associated with this client.

#### Returns

`Promise`<[`SkillsetListResponse`](../modules/skillset_v1.md#skillsetlistresponse)\>

#### Defined in

[skillset/index.js:21](https://github.com/chatbotkit/node-sdk/blob/9c88124/packages/sdk/src/skillset/index.js#L21)

___

### update

▸ **update**(`skillsetId`, `request`): `Promise`<[`SkillsetUpdateResponse`](../modules/skillset_v1.md#skillsetupdateresponse)\>

Updates a new skillset.

#### Parameters

| Name | Type |
| :------ | :------ |
| `skillsetId` | `string` |
| `request` | [`SkillsetUpdateRequest`](../modules/skillset_v1.md#skillsetupdaterequest) |

#### Returns

`Promise`<[`SkillsetUpdateResponse`](../modules/skillset_v1.md#skillsetupdateresponse)\>

#### Defined in

[skillset/index.js:49](https://github.com/chatbotkit/node-sdk/blob/9c88124/packages/sdk/src/skillset/index.js#L49)
