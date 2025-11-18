[**@chatbotkit/cli**](../../README.md)

***

[@chatbotkit/cli](../../modules.md) / [solution](../README.md) / Resource

# Class: Resource

Defined in: [packages/cli/src/solution/index.js:182](https://github.com/chatbotkit/node-sdk/blob/main/packages/cli/src/solution/index.js#L182)

Represents a resource.

## Extended by

- [`BotResource`](BotResource.md)
- [`DatasetResource`](DatasetResource.md)
- [`SkillsetResource`](SkillsetResource.md)
- [`WidgetIntegrationResource`](WidgetIntegrationResource.md)
- [`SitemapIntegrationResource`](SitemapIntegrationResource.md)

## Constructors

### Constructor

> **new Resource**(`config`): `Resource`

Defined in: [packages/cli/src/solution/index.js:186](https://github.com/chatbotkit/node-sdk/blob/main/packages/cli/src/solution/index.js#L186)

#### Parameters

##### config

\{ `description?`: `string`; `id?`: `string`; `name?`: `string`; `properties?`: \{ `backstory?`: `string`; `datasetId?`: `string`; `model?`: `string`; `moderation?`: `boolean`; `privacy?`: `boolean`; `skillsetId?`: `string`; \}; `slug?`: `string`; `type?`: `"bot"`; \} | \{ `description?`: `string`; `id?`: `string`; `name?`: `string`; `properties?`: \{ \}; `slug?`: `string`; `type?`: `"dataset"`; \} | \{ `description?`: `string`; `id?`: `string`; `name?`: `string`; `properties?`: \{ \}; `slug?`: `string`; `type?`: `"skillset"`; \} | \{ `description?`: `string`; `id?`: `string`; `name?`: `string`; `properties?`: \{ \}; `slug?`: `string`; `type?`: `"widgetIntegration"`; \} | \{ `description?`: `string`; `id?`: `string`; `name?`: `string`; `properties?`: \{ `datasetId?`: `string`; `url?`: `string`; \}; `slug?`: `string`; `type?`: `"sitemapIntegration"`; \}

#### Returns

`Resource`

## Accessors

### baseClient

#### Get Signature

> **get** **baseClient**(): `ChatBotKit`

Defined in: [packages/cli/src/solution/index.js:231](https://github.com/chatbotkit/node-sdk/blob/main/packages/cli/src/solution/index.js#L231)

##### Returns

`ChatBotKit`

***

### client

#### Get Signature

> **get** **client**(): `object`

Defined in: [packages/cli/src/solution/index.js:248](https://github.com/chatbotkit/node-sdk/blob/main/packages/cli/src/solution/index.js#L248)

Get the resource client.

##### Returns

`object`

###### create()

> **create**: (`properties`) => [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<\{ `id`: `string`; \}\>

###### Parameters

###### properties

[`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `any`\>

###### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<\{ `id`: `string`; \}\>

###### update()

> **update**: (`id`, `properties`) => [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<\{ `id`: `string`; \}\>

###### Parameters

###### id

`string`

###### properties

[`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `any`\>

###### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<\{ `id`: `string`; \}\>

***

### description

#### Get Signature

> **get** **description**(): `string`

Defined in: [packages/cli/src/solution/index.js:224](https://github.com/chatbotkit/node-sdk/blob/main/packages/cli/src/solution/index.js#L224)

##### Returns

`string`

***

### id

#### Get Signature

> **get** **id**(): `string`

Defined in: [packages/cli/src/solution/index.js:210](https://github.com/chatbotkit/node-sdk/blob/main/packages/cli/src/solution/index.js#L210)

##### Returns

`string`

***

### name

#### Get Signature

> **get** **name**(): `string`

Defined in: [packages/cli/src/solution/index.js:217](https://github.com/chatbotkit/node-sdk/blob/main/packages/cli/src/solution/index.js#L217)

##### Returns

`string`

***

### slug

#### Get Signature

> **get** **slug**(): `string`

Defined in: [packages/cli/src/solution/index.js:200](https://github.com/chatbotkit/node-sdk/blob/main/packages/cli/src/solution/index.js#L200)

##### Returns

`string`

***

### type

#### Get Signature

> **get** **type**(): `string`

Defined in: [packages/cli/src/solution/index.js:193](https://github.com/chatbotkit/node-sdk/blob/main/packages/cli/src/solution/index.js#L193)

##### Returns

`string`

## Methods

### sync()

> **sync**(): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`void`\>

Defined in: [packages/cli/src/solution/index.js:257](https://github.com/chatbotkit/node-sdk/blob/main/packages/cli/src/solution/index.js#L257)

Sync the resource.

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`void`\>
