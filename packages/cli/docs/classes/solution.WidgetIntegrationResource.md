[@chatbotkit/cli](../README.md) / [Modules](../modules.md) / [solution](../modules/solution.md) / WidgetIntegrationResource

# Class: WidgetIntegrationResource

[solution](../modules/solution.md).WidgetIntegrationResource

Represents a widget integration resource.

## Hierarchy

- [`Resource`](solution.Resource.md)

  ↳ **`WidgetIntegrationResource`**

## Table of contents

### Constructors

- [constructor](solution.WidgetIntegrationResource.md#constructor)

### Accessors

- [baseClient](solution.WidgetIntegrationResource.md#baseclient)
- [client](solution.WidgetIntegrationResource.md#client)
- [description](solution.WidgetIntegrationResource.md#description)
- [id](solution.WidgetIntegrationResource.md#id)
- [name](solution.WidgetIntegrationResource.md#name)
- [slug](solution.WidgetIntegrationResource.md#slug)
- [type](solution.WidgetIntegrationResource.md#type)

### Methods

- [sync](solution.WidgetIntegrationResource.md#sync)

## Constructors

### constructor

• **new WidgetIntegrationResource**(`config`): [`WidgetIntegrationResource`](solution.WidgetIntegrationResource.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `config` | \{ `description?`: `string` ; `id?`: `string` ; `name?`: `string` ; `properties?`: \{ `backstory?`: `string` ; `datasetId?`: `string` ; `model?`: `string` ; `moderation?`: `boolean` ; `privacy?`: `boolean` ; `skillsetId?`: `string`  } ; `slug?`: `string` ; `type?`: ``"bot"``  } \| \{ `description?`: `string` ; `id?`: `string` ; `name?`: `string` ; `properties?`: {} ; `slug?`: `string` ; `type?`: ``"dataset"``  } \| \{ `description?`: `string` ; `id?`: `string` ; `name?`: `string` ; `properties?`: {} ; `slug?`: `string` ; `type?`: ``"skillset"``  } \| \{ `description?`: `string` ; `id?`: `string` ; `name?`: `string` ; `properties?`: {} ; `slug?`: `string` ; `type?`: ``"widgetIntegration"``  } \| \{ `description?`: `string` ; `id?`: `string` ; `name?`: `string` ; `properties?`: \{ `datasetId?`: `string` ; `url?`: `string`  } ; `slug?`: `string` ; `type?`: ``"sitemapIntegration"``  } |

#### Returns

[`WidgetIntegrationResource`](solution.WidgetIntegrationResource.md)

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

• `get` **client**(): `WidgetIntegrationClient`

#### Returns

`WidgetIntegrationClient`

#### Overrides

Resource.client

#### Defined in

[packages/cli/src/solution/index.js:290](https://github.com/chatbotkit/node-sdk/blob/main/packages/cli/src/solution/index.js#L290)

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
