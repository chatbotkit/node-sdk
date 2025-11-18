[@chatbotkit/cli](../README.md) / [Modules](../modules.md) / [solution](../modules/solution.md) / Resource

# Class: Resource

[solution](../modules/solution.md).Resource

Represents a resource.

## Hierarchy

- **`Resource`**

  ↳ [`BotResource`](solution.BotResource.md)

  ↳ [`DatasetResource`](solution.DatasetResource.md)

  ↳ [`SkillsetResource`](solution.SkillsetResource.md)

  ↳ [`WidgetIntegrationResource`](solution.WidgetIntegrationResource.md)

  ↳ [`SitemapIntegrationResource`](solution.SitemapIntegrationResource.md)

## Table of contents

### Constructors

- [constructor](solution.Resource.md#constructor)

### Accessors

- [baseClient](solution.Resource.md#baseclient)
- [client](solution.Resource.md#client)
- [description](solution.Resource.md#description)
- [id](solution.Resource.md#id)
- [name](solution.Resource.md#name)
- [slug](solution.Resource.md#slug)
- [type](solution.Resource.md#type)

### Methods

- [sync](solution.Resource.md#sync)

## Constructors

### constructor

• **new Resource**(`config`): [`Resource`](solution.Resource.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `config` | \{ `description?`: `string` ; `id?`: `string` ; `name?`: `string` ; `properties?`: \{ `backstory?`: `string` ; `datasetId?`: `string` ; `model?`: `string` ; `moderation?`: `boolean` ; `privacy?`: `boolean` ; `skillsetId?`: `string`  } ; `slug?`: `string` ; `type?`: ``"bot"``  } \| \{ `description?`: `string` ; `id?`: `string` ; `name?`: `string` ; `properties?`: {} ; `slug?`: `string` ; `type?`: ``"dataset"``  } \| \{ `description?`: `string` ; `id?`: `string` ; `name?`: `string` ; `properties?`: {} ; `slug?`: `string` ; `type?`: ``"skillset"``  } \| \{ `description?`: `string` ; `id?`: `string` ; `name?`: `string` ; `properties?`: {} ; `slug?`: `string` ; `type?`: ``"widgetIntegration"``  } \| \{ `description?`: `string` ; `id?`: `string` ; `name?`: `string` ; `properties?`: \{ `datasetId?`: `string` ; `url?`: `string`  } ; `slug?`: `string` ; `type?`: ``"sitemapIntegration"``  } |

#### Returns

[`Resource`](solution.Resource.md)

#### Defined in

[packages/cli/src/solution/index.js:186](https://github.com/chatbotkit/node-sdk/blob/main/packages/cli/src/solution/index.js#L186)

## Accessors

### baseClient

• `get` **baseClient**(): `ChatBotKit`

#### Returns

`ChatBotKit`

#### Defined in

[packages/cli/src/solution/index.js:231](https://github.com/chatbotkit/node-sdk/blob/main/packages/cli/src/solution/index.js#L231)

___

### client

• `get` **client**(): `Object`

Get the resource client.

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `create` | (`properties`: [`Record`]( https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type )\<`string`, `any`\>) => [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<\{ `id`: `string`  }\> |
| `update` | (`id`: `string`, `properties`: [`Record`]( https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type )\<`string`, `any`\>) => [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<\{ `id`: `string`  }\> |

#### Defined in

[packages/cli/src/solution/index.js:248](https://github.com/chatbotkit/node-sdk/blob/main/packages/cli/src/solution/index.js#L248)

___

### description

• `get` **description**(): `string`

#### Returns

`string`

#### Defined in

[packages/cli/src/solution/index.js:224](https://github.com/chatbotkit/node-sdk/blob/main/packages/cli/src/solution/index.js#L224)

___

### id

• `get` **id**(): `string`

#### Returns

`string`

#### Defined in

[packages/cli/src/solution/index.js:210](https://github.com/chatbotkit/node-sdk/blob/main/packages/cli/src/solution/index.js#L210)

___

### name

• `get` **name**(): `string`

#### Returns

`string`

#### Defined in

[packages/cli/src/solution/index.js:217](https://github.com/chatbotkit/node-sdk/blob/main/packages/cli/src/solution/index.js#L217)

___

### slug

• `get` **slug**(): `string`

#### Returns

`string`

#### Defined in

[packages/cli/src/solution/index.js:200](https://github.com/chatbotkit/node-sdk/blob/main/packages/cli/src/solution/index.js#L200)

___

### type

• `get` **type**(): `string`

#### Returns

`string`

#### Defined in

[packages/cli/src/solution/index.js:193](https://github.com/chatbotkit/node-sdk/blob/main/packages/cli/src/solution/index.js#L193)

## Methods

### sync

▸ **sync**(): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<`void`\>

Sync the resource.

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<`void`\>

#### Defined in

[packages/cli/src/solution/index.js:257](https://github.com/chatbotkit/node-sdk/blob/main/packages/cli/src/solution/index.js#L257)
