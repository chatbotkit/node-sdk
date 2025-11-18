[**@chatbotkit/cli**](../../README.md)

***

[@chatbotkit/cli](../../modules.md) / [solution](../README.md) / SitemapIntegrationResource

# Class: SitemapIntegrationResource

Defined in: [sdks/node/packages/cli/src/solution/index.js:333](https://github.com/chatbotkit/node-sdk/blob/main/packages/cli/src/solution/index.js#L333)

Represents a sitemap integration resource.

## Extends

- [`Resource`](Resource.md)

## Constructors

### Constructor

> **new SitemapIntegrationResource**(`config`): `SitemapIntegrationResource`

Defined in: [sdks/node/packages/cli/src/solution/index.js:186](https://github.com/chatbotkit/node-sdk/blob/main/packages/cli/src/solution/index.js#L186)

#### Parameters

##### config

\{ `description?`: `string`; `id?`: `string`; `name?`: `string`; `properties?`: \{ `backstory?`: `string`; `datasetId?`: `string`; `model?`: `string`; `moderation?`: `boolean`; `privacy?`: `boolean`; `skillsetId?`: `string`; \}; `slug?`: `string`; `type?`: `"bot"`; \} | \{ `description?`: `string`; `id?`: `string`; `name?`: `string`; `properties?`: \{ \}; `slug?`: `string`; `type?`: `"dataset"`; \} | \{ `description?`: `string`; `id?`: `string`; `name?`: `string`; `properties?`: \{ \}; `slug?`: `string`; `type?`: `"skillset"`; \} | \{ `description?`: `string`; `id?`: `string`; `name?`: `string`; `properties?`: \{ \}; `slug?`: `string`; `type?`: `"widgetIntegration"`; \} | \{ `description?`: `string`; `id?`: `string`; `name?`: `string`; `properties?`: \{ `datasetId?`: `string`; `url?`: `string`; \}; `slug?`: `string`; `type?`: `"sitemapIntegration"`; \}

#### Returns

`SitemapIntegrationResource`

#### Inherited from

[`Resource`](Resource.md).[`constructor`](Resource.md#constructor)

## Accessors

### baseClient

#### Get Signature

> **get** **baseClient**(): `ChatBotKit`

Defined in: [sdks/node/packages/cli/src/solution/index.js:231](https://github.com/chatbotkit/node-sdk/blob/main/packages/cli/src/solution/index.js#L231)

##### Returns

`ChatBotKit`

#### Inherited from

[`Resource`](Resource.md).[`baseClient`](Resource.md#baseclient)

***

### client

#### Get Signature

> **get** **client**(): `SitemapIntegrationClient`

Defined in: [sdks/node/packages/cli/src/solution/index.js:337](https://github.com/chatbotkit/node-sdk/blob/main/packages/cli/src/solution/index.js#L337)

##### Returns

`SitemapIntegrationClient`

#### Overrides

[`Resource`](Resource.md).[`client`](Resource.md#client)

***

### description

#### Get Signature

> **get** **description**(): `string`

Defined in: [sdks/node/packages/cli/src/solution/index.js:224](https://github.com/chatbotkit/node-sdk/blob/main/packages/cli/src/solution/index.js#L224)

##### Returns

`string`

#### Inherited from

[`Resource`](Resource.md).[`description`](Resource.md#description)

***

### id

#### Get Signature

> **get** **id**(): `string`

Defined in: [sdks/node/packages/cli/src/solution/index.js:210](https://github.com/chatbotkit/node-sdk/blob/main/packages/cli/src/solution/index.js#L210)

##### Returns

`string`

#### Inherited from

[`Resource`](Resource.md).[`id`](Resource.md#id)

***

### name

#### Get Signature

> **get** **name**(): `string`

Defined in: [sdks/node/packages/cli/src/solution/index.js:217](https://github.com/chatbotkit/node-sdk/blob/main/packages/cli/src/solution/index.js#L217)

##### Returns

`string`

#### Inherited from

[`Resource`](Resource.md).[`name`](Resource.md#name)

***

### slug

#### Get Signature

> **get** **slug**(): `string`

Defined in: [sdks/node/packages/cli/src/solution/index.js:200](https://github.com/chatbotkit/node-sdk/blob/main/packages/cli/src/solution/index.js#L200)

##### Returns

`string`

#### Inherited from

[`Resource`](Resource.md).[`slug`](Resource.md#slug)

***

### type

#### Get Signature

> **get** **type**(): `string`

Defined in: [sdks/node/packages/cli/src/solution/index.js:193](https://github.com/chatbotkit/node-sdk/blob/main/packages/cli/src/solution/index.js#L193)

##### Returns

`string`

#### Inherited from

[`Resource`](Resource.md).[`type`](Resource.md#type)

## Methods

### sync()

> **sync**(): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`void`\>

Defined in: [sdks/node/packages/cli/src/solution/index.js:257](https://github.com/chatbotkit/node-sdk/blob/main/packages/cli/src/solution/index.js#L257)

Sync the resource.

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`void`\>

#### Inherited from

[`Resource`](Resource.md).[`sync`](Resource.md#sync)
