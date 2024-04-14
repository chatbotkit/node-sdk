[@chatbotkit/cli](../README.md) / [Modules](../modules.md) / [solution](../modules/solution.md) / BotResource

# Class: BotResource

[solution](../modules/solution.md).BotResource

Represents a bot resource.

## Hierarchy

- [`Resource`](solution.Resource.md)

  ↳ **`BotResource`**

## Table of contents

### Constructors

- [constructor](solution.BotResource.md#constructor)

### Accessors

- [baseClient](solution.BotResource.md#baseclient)
- [client](solution.BotResource.md#client)
- [description](solution.BotResource.md#description)
- [id](solution.BotResource.md#id)
- [name](solution.BotResource.md#name)
- [slug](solution.BotResource.md#slug)
- [type](solution.BotResource.md#type)

### Methods

- [sync](solution.BotResource.md#sync)

## Constructors

### constructor

• **new BotResource**(`config`): [`BotResource`](solution.BotResource.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `config` | \{ `description?`: `string` ; `id?`: `string` ; `name?`: `string` ; `properties?`: \{ `backstory?`: `string` ; `datasetId?`: `string` ; `model?`: `string` ; `moderation?`: `boolean` ; `privacy?`: `boolean` ; `skillsetId?`: `string`  } ; `slug?`: `string` ; `type?`: ``"bot"``  } \| \{ `description?`: `string` ; `id?`: `string` ; `name?`: `string` ; `properties?`: {} ; `slug?`: `string` ; `type?`: ``"dataset"``  } \| \{ `description?`: `string` ; `id?`: `string` ; `name?`: `string` ; `properties?`: {} ; `slug?`: `string` ; `type?`: ``"skillset"``  } \| \{ `description?`: `string` ; `id?`: `string` ; `name?`: `string` ; `properties?`: {} ; `slug?`: `string` ; `type?`: ``"widgetIntegration"``  } \| \{ `description?`: `string` ; `id?`: `string` ; `name?`: `string` ; `properties?`: \{ `datasetId?`: `string` ; `url?`: `string`  } ; `slug?`: `string` ; `type?`: ``"sitemapIntegration"``  } |

#### Returns

[`BotResource`](solution.BotResource.md)

#### Inherited from

[Resource](solution.Resource.md).[constructor](solution.Resource.md#constructor)

#### Defined in

[packages/cli/src/solution/index.js:151](https://github.com/chatbotkit/node-sdk/blob/main/packages/cli/src/solution/index.js#L151)

## Accessors

### baseClient

• `get` **baseClient**(): `ChatBotKit`

#### Returns

`ChatBotKit`

#### Inherited from

Resource.baseClient

#### Defined in

[packages/cli/src/solution/index.js:196](https://github.com/chatbotkit/node-sdk/blob/main/packages/cli/src/solution/index.js#L196)

___

### client

• `get` **client**(): `BotClient`

#### Returns

`BotClient`

#### Overrides

Resource.client

#### Defined in

[packages/cli/src/solution/index.js:251](https://github.com/chatbotkit/node-sdk/blob/main/packages/cli/src/solution/index.js#L251)

___

### description

• `get` **description**(): `string`

#### Returns

`string`

#### Inherited from

Resource.description

#### Defined in

[packages/cli/src/solution/index.js:189](https://github.com/chatbotkit/node-sdk/blob/main/packages/cli/src/solution/index.js#L189)

___

### id

• `get` **id**(): `string`

#### Returns

`string`

#### Inherited from

Resource.id

#### Defined in

[packages/cli/src/solution/index.js:175](https://github.com/chatbotkit/node-sdk/blob/main/packages/cli/src/solution/index.js#L175)

___

### name

• `get` **name**(): `string`

#### Returns

`string`

#### Inherited from

Resource.name

#### Defined in

[packages/cli/src/solution/index.js:182](https://github.com/chatbotkit/node-sdk/blob/main/packages/cli/src/solution/index.js#L182)

___

### slug

• `get` **slug**(): `string`

#### Returns

`string`

#### Inherited from

Resource.slug

#### Defined in

[packages/cli/src/solution/index.js:165](https://github.com/chatbotkit/node-sdk/blob/main/packages/cli/src/solution/index.js#L165)

___

### type

• `get` **type**(): `string`

#### Returns

`string`

#### Inherited from

Resource.type

#### Defined in

[packages/cli/src/solution/index.js:158](https://github.com/chatbotkit/node-sdk/blob/main/packages/cli/src/solution/index.js#L158)

## Methods

### sync

▸ **sync**(): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<`void`\>

Sync the resource.

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<`void`\>

#### Inherited from

[Resource](solution.Resource.md).[sync](solution.Resource.md#sync)

#### Defined in

[packages/cli/src/solution/index.js:222](https://github.com/chatbotkit/node-sdk/blob/main/packages/cli/src/solution/index.js#L222)
