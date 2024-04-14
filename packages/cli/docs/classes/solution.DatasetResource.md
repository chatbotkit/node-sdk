[@chatbotkit/cli](../README.md) / [Modules](../modules.md) / [solution](../modules/solution.md) / DatasetResource

# Class: DatasetResource

[solution](../modules/solution.md).DatasetResource

Represents a dataset resource.

## Hierarchy

- [`Resource`](solution.Resource.md)

  ↳ **`DatasetResource`**

## Table of contents

### Constructors

- [constructor](solution.DatasetResource.md#constructor)

### Accessors

- [baseClient](solution.DatasetResource.md#baseclient)
- [client](solution.DatasetResource.md#client)
- [description](solution.DatasetResource.md#description)
- [id](solution.DatasetResource.md#id)
- [name](solution.DatasetResource.md#name)
- [slug](solution.DatasetResource.md#slug)
- [type](solution.DatasetResource.md#type)

### Methods

- [sync](solution.DatasetResource.md#sync)

## Constructors

### constructor

• **new DatasetResource**(`config`): [`DatasetResource`](solution.DatasetResource.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `config` | \{ `description?`: `string` ; `id?`: `string` ; `name?`: `string` ; `properties?`: \{ `backstory?`: `string` ; `datasetId?`: `string` ; `model?`: `string` ; `moderation?`: `boolean` ; `privacy?`: `boolean` ; `skillsetId?`: `string`  } ; `slug?`: `string` ; `type?`: ``"bot"``  } \| \{ `description?`: `string` ; `id?`: `string` ; `name?`: `string` ; `properties?`: {} ; `slug?`: `string` ; `type?`: ``"dataset"``  } \| \{ `description?`: `string` ; `id?`: `string` ; `name?`: `string` ; `properties?`: {} ; `slug?`: `string` ; `type?`: ``"skillset"``  } \| \{ `description?`: `string` ; `id?`: `string` ; `name?`: `string` ; `properties?`: {} ; `slug?`: `string` ; `type?`: ``"widgetIntegration"``  } \| \{ `description?`: `string` ; `id?`: `string` ; `name?`: `string` ; `properties?`: \{ `datasetId?`: `string` ; `url?`: `string`  } ; `slug?`: `string` ; `type?`: ``"sitemapIntegration"``  } |

#### Returns

[`DatasetResource`](solution.DatasetResource.md)

#### Inherited from

[Resource](solution.Resource.md).[constructor](solution.Resource.md#constructor)

#### Defined in

[packages/cli/src/solution/index.js:186](https://github.com/chatbotkit/node-sdk/blob/main/packages/cli/src/solution/index.js#L186)

## Accessors

### baseClient

• `get` **baseClient**(): `ChatBotKit`

#### Returns

`ChatBotKit`

#### Inherited from

Resource.baseClient

#### Defined in

[packages/cli/src/solution/index.js:231](https://github.com/chatbotkit/node-sdk/blob/main/packages/cli/src/solution/index.js#L231)

___

### client

• `get` **client**(): `DatasetClient`

#### Returns

`DatasetClient`

#### Overrides

Resource.client

#### Defined in

[packages/cli/src/solution/index.js:299](https://github.com/chatbotkit/node-sdk/blob/main/packages/cli/src/solution/index.js#L299)

___

### description

• `get` **description**(): `string`

#### Returns

`string`

#### Inherited from

Resource.description

#### Defined in

[packages/cli/src/solution/index.js:224](https://github.com/chatbotkit/node-sdk/blob/main/packages/cli/src/solution/index.js#L224)

___

### id

• `get` **id**(): `string`

#### Returns

`string`

#### Inherited from

Resource.id

#### Defined in

[packages/cli/src/solution/index.js:210](https://github.com/chatbotkit/node-sdk/blob/main/packages/cli/src/solution/index.js#L210)

___

### name

• `get` **name**(): `string`

#### Returns

`string`

#### Inherited from

Resource.name

#### Defined in

[packages/cli/src/solution/index.js:217](https://github.com/chatbotkit/node-sdk/blob/main/packages/cli/src/solution/index.js#L217)

___

### slug

• `get` **slug**(): `string`

#### Returns

`string`

#### Inherited from

Resource.slug

#### Defined in

[packages/cli/src/solution/index.js:200](https://github.com/chatbotkit/node-sdk/blob/main/packages/cli/src/solution/index.js#L200)

___

### type

• `get` **type**(): `string`

#### Returns

`string`

#### Inherited from

Resource.type

#### Defined in

[packages/cli/src/solution/index.js:193](https://github.com/chatbotkit/node-sdk/blob/main/packages/cli/src/solution/index.js#L193)

## Methods

### sync

▸ **sync**(): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<`void`\>

Sync the resource.

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<`void`\>

#### Inherited from

[Resource](solution.Resource.md).[sync](solution.Resource.md#sync)

#### Defined in

[packages/cli/src/solution/index.js:257](https://github.com/chatbotkit/node-sdk/blob/main/packages/cli/src/solution/index.js#L257)
