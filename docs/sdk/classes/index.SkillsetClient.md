[@chatbotkit/sdk](../README.md) / [Modules](../modules.md) / [index](../modules/index.md) / SkillsetClient

# Class: SkillsetClient

[index](../modules/index.md).SkillsetClient

## Hierarchy

- `ChatBotKitClient`

  ↳ **`SkillsetClient`**

## Table of contents

### Constructors

- [constructor](index.SkillsetClient.md#constructor)

### Properties

- [secret](index.SkillsetClient.md#secret)
- [url](index.SkillsetClient.md#url)

### Methods

- [clientFetch](index.SkillsetClient.md#clientfetch)
- [create](index.SkillsetClient.md#create)
- [delete](index.SkillsetClient.md#delete)
- [fetch](index.SkillsetClient.md#fetch)
- [list](index.SkillsetClient.md#list)
- [update](index.SkillsetClient.md#update)

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

[skillset/index.js:14](https://github.com/chatbotkit/node-sdk/blob/629c3de/packages/sdk/src/skillset/index.js#L14)

## Properties

### secret

• **secret**: `string`

#### Inherited from

ChatBotKitClient.secret

#### Defined in

[client.js:125](https://github.com/chatbotkit/node-sdk/blob/629c3de/packages/sdk/src/client.js#L125)

___

### url

• **url**: `URL`

#### Inherited from

ChatBotKitClient.url

#### Defined in

[client.js:127](https://github.com/chatbotkit/node-sdk/blob/629c3de/packages/sdk/src/client.js#L127)

## Methods

### clientFetch

▸ **clientFetch**<`T`, `D`\>(`path`, `options?`): `ResponsePromise`<`T`, `D`\>

#### Type parameters

| Name |
| :------ |
| `T` |
| `D` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | `string` |
| `options?` | `Object` |
| `options.data?` | `Record`<`string`, `any`\> |

#### Returns

`ResponsePromise`<`T`, `D`\>

#### Inherited from

ChatBotKitClient.clientFetch

#### Defined in

[client.js:140](https://github.com/chatbotkit/node-sdk/blob/629c3de/packages/sdk/src/client.js#L140)

___

### create

▸ **create**(`request`): `Promise`<`SkillsetCreateResponse`\>

Creates a new skillset.

#### Parameters

| Name | Type |
| :------ | :------ |
| `request` | `SkillsetCreateRequest` |

#### Returns

`Promise`<`SkillsetCreateResponse`\>

#### Defined in

[skillset/index.js:39](https://github.com/chatbotkit/node-sdk/blob/629c3de/packages/sdk/src/skillset/index.js#L39)

___

### delete

▸ **delete**(`skillsetId`): `Promise`<`SkillsetDeleteResponse`\>

Deletes the skillset.

#### Parameters

| Name | Type |
| :------ | :------ |
| `skillsetId` | `string` |

#### Returns

`Promise`<`SkillsetDeleteResponse`\>

#### Defined in

[skillset/index.js:58](https://github.com/chatbotkit/node-sdk/blob/629c3de/packages/sdk/src/skillset/index.js#L58)

___

### fetch

▸ **fetch**(`skillsetId`): `Promise`<`SkillsetFetchResponse`\>

Fetches a skillset.

#### Parameters

| Name | Type |
| :------ | :------ |
| `skillsetId` | `string` |

#### Returns

`Promise`<`SkillsetFetchResponse`\>

#### Defined in

[skillset/index.js:30](https://github.com/chatbotkit/node-sdk/blob/629c3de/packages/sdk/src/skillset/index.js#L30)

___

### list

▸ **list**(): `Promise`<`SkillsetListResponse`\>

Retrieves a list of all existing skillsets associated with this client.

#### Returns

`Promise`<`SkillsetListResponse`\>

#### Defined in

[skillset/index.js:21](https://github.com/chatbotkit/node-sdk/blob/629c3de/packages/sdk/src/skillset/index.js#L21)

___

### update

▸ **update**(`skillsetId`, `request`): `Promise`<`SkillsetUpdateResponse`\>

Updates a new skillset.

#### Parameters

| Name | Type |
| :------ | :------ |
| `skillsetId` | `string` |
| `request` | `SkillsetUpdateRequest` |

#### Returns

`Promise`<`SkillsetUpdateResponse`\>

#### Defined in

[skillset/index.js:49](https://github.com/chatbotkit/node-sdk/blob/629c3de/packages/sdk/src/skillset/index.js#L49)
