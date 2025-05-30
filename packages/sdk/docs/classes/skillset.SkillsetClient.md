[@chatbotkit/sdk](../README.md) / [Modules](../modules.md) / [skillset](../modules/skillset.md) / SkillsetClient

# Class: SkillsetClient

[skillset](../modules/skillset.md).SkillsetClient

Skillset client.

## Hierarchy

- [`ChatBotKitClient`](client.ChatBotKitClient.md)

  ↳ **`SkillsetClient`**

## Table of contents

### Constructors

- [constructor](skillset.SkillsetClient.md#constructor)

### Properties

- [ability](skillset.SkillsetClient.md#ability)

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
| `options` | [`ChatBotKitClientOptions`](../interfaces/client.ChatBotKitClientOptions.md) |

#### Returns

[`SkillsetClient`](skillset.SkillsetClient.md)

#### Overrides

[ChatBotKitClient](client.ChatBotKitClient.md).[constructor](client.ChatBotKitClient.md#constructor)

#### Defined in

[skillset/index.js:24](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/skillset/index.js#L24)

## Properties

### ability

• **ability**: [`SkillsetAbilityClient`](skillset_ability.SkillsetAbilityClient.md)

#### Defined in

[skillset/index.js:30](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/skillset/index.js#L30)

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
| `options.fetchFn?` | `FetchFn` |
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

[client.js:330](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/client.js#L330)

___

### create

▸ **create**(`request`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<[`SkillsetCreateResponse`](../modules/skillset_v1.md#skillsetcreateresponse)\>

Creates a new skillset.

#### Parameters

| Name | Type |
| :------ | :------ |
| `request` | [`SkillsetOptions`](../modules/skillset_v1.md#skillsetoptions) |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<[`SkillsetCreateResponse`](../modules/skillset_v1.md#skillsetcreateresponse)\>

#### Defined in

[skillset/index.js:59](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/skillset/index.js#L59)

___

### delete

▸ **delete**(`skillsetId`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<[`SkillsetDeleteResponse`](../modules/skillset_v1.md#skillsetdeleteresponse)\>

Deletes the skillset.

#### Parameters

| Name | Type |
| :------ | :------ |
| `skillsetId` | `string` |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<[`SkillsetDeleteResponse`](../modules/skillset_v1.md#skillsetdeleteresponse)\>

#### Defined in

[skillset/index.js:80](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/skillset/index.js#L80)

___

### fetch

▸ **fetch**(`skillsetId`): [`ResponsePromise`](client.ResponsePromise.md)\<[`SkillsetFetchResponse`](../modules/skillset_v1.md#skillsetfetchresponse), `never`\>

Fetches a skillset.

#### Parameters

| Name | Type |
| :------ | :------ |
| `skillsetId` | `string` |

#### Returns

[`ResponsePromise`](client.ResponsePromise.md)\<[`SkillsetFetchResponse`](../modules/skillset_v1.md#skillsetfetchresponse), `never`\>

#### Defined in

[skillset/index.js:49](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/skillset/index.js#L49)

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

[skillset/index.js:39](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/skillset/index.js#L39)

___

### update

▸ **update**(`skillsetId`, `request`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<[`SkillsetUpdateResponse`](../modules/skillset_v1.md#skillsetupdateresponse)\>

Updates a skillset.

#### Parameters

| Name | Type |
| :------ | :------ |
| `skillsetId` | `string` |
| `request` | [`SkillsetOptions`](../modules/skillset_v1.md#skillsetoptions) |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<[`SkillsetUpdateResponse`](../modules/skillset_v1.md#skillsetupdateresponse)\>

#### Defined in

[skillset/index.js:70](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/skillset/index.js#L70)
