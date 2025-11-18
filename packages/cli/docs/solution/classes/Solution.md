[**@chatbotkit/cli**](../../README.md)

***

[@chatbotkit/cli](../../modules.md) / [solution](../README.md) / Solution

# Class: Solution

Defined in: [sdks/node/packages/cli/src/solution/index.js:345](https://github.com/chatbotkit/node-sdk/blob/main/packages/cli/src/solution/index.js#L345)

Represents a solution.

## Constructors

### Constructor

> **new Solution**(`config`): `Solution`

Defined in: [sdks/node/packages/cli/src/solution/index.js:349](https://github.com/chatbotkit/node-sdk/blob/main/packages/cli/src/solution/index.js#L349)

#### Parameters

##### config

###### resources?

(\{ `description?`: `string`; `id?`: `string`; `name?`: `string`; `properties?`: \{ `backstory?`: `string`; `datasetId?`: `string`; `model?`: `string`; `moderation?`: `boolean`; `privacy?`: `boolean`; `skillsetId?`: `string`; \}; `slug?`: `string`; `type?`: `"bot"`; \} \| \{ `description?`: `string`; `id?`: `string`; `name?`: `string`; `properties?`: \{ \}; `slug?`: `string`; `type?`: `"dataset"`; \} \| \{ `description?`: `string`; `id?`: `string`; `name?`: `string`; `properties?`: \{ \}; `slug?`: `string`; `type?`: `"skillset"`; \} \| \{ `description?`: `string`; `id?`: `string`; `name?`: `string`; `properties?`: \{ \}; `slug?`: `string`; `type?`: `"widgetIntegration"`; \} \| \{ `description?`: `string`; `id?`: `string`; `name?`: `string`; `properties?`: \{ `datasetId?`: `string`; `url?`: `string`; \}; `slug?`: `string`; `type?`: `"sitemapIntegration"`; \})[] = `...`

###### version?

`1` = `...`

#### Returns

`Solution`

## Accessors

### baseClient

#### Get Signature

> **get** **baseClient**(): `ChatBotKit`

Defined in: [sdks/node/packages/cli/src/solution/index.js:356](https://github.com/chatbotkit/node-sdk/blob/main/packages/cli/src/solution/index.js#L356)

##### Returns

`ChatBotKit`

***

### bot

#### Get Signature

> **get** **bot**(): `object`

Defined in: [sdks/node/packages/cli/src/solution/index.js:401](https://github.com/chatbotkit/node-sdk/blob/main/packages/cli/src/solution/index.js#L401)

##### Returns

`object`

***

### bots

#### Get Signature

> **get** **bots**(): [`BotResource`](BotResource.md)[]

Defined in: [sdks/node/packages/cli/src/solution/index.js:392](https://github.com/chatbotkit/node-sdk/blob/main/packages/cli/src/solution/index.js#L392)

##### Returns

[`BotResource`](BotResource.md)[]

***

### dataset

#### Get Signature

> **get** **dataset**(): `object`

Defined in: [sdks/node/packages/cli/src/solution/index.js:417](https://github.com/chatbotkit/node-sdk/blob/main/packages/cli/src/solution/index.js#L417)

##### Returns

`object`

***

### datasets

#### Get Signature

> **get** **datasets**(): [`DatasetResource`](DatasetResource.md)[]

Defined in: [sdks/node/packages/cli/src/solution/index.js:408](https://github.com/chatbotkit/node-sdk/blob/main/packages/cli/src/solution/index.js#L408)

##### Returns

[`DatasetResource`](DatasetResource.md)[]

***

### resources

#### Get Signature

> **get** **resources**(): ([`BotResource`](BotResource.md) \| [`DatasetResource`](DatasetResource.md) \| [`SkillsetResource`](SkillsetResource.md) \| [`WidgetIntegrationResource`](WidgetIntegrationResource.md) \| [`SitemapIntegrationResource`](SitemapIntegrationResource.md))[]

Defined in: [sdks/node/packages/cli/src/solution/index.js:370](https://github.com/chatbotkit/node-sdk/blob/main/packages/cli/src/solution/index.js#L370)

Get the resources.

##### Returns

([`BotResource`](BotResource.md) \| [`DatasetResource`](DatasetResource.md) \| [`SkillsetResource`](SkillsetResource.md) \| [`WidgetIntegrationResource`](WidgetIntegrationResource.md) \| [`SitemapIntegrationResource`](SitemapIntegrationResource.md))[]

***

### sitemapIntegration

#### Get Signature

> **get** **sitemapIntegration**(): `object`

Defined in: [sdks/node/packages/cli/src/solution/index.js:469](https://github.com/chatbotkit/node-sdk/blob/main/packages/cli/src/solution/index.js#L469)

##### Returns

`object`

***

### sitemapIntegrations

#### Get Signature

> **get** **sitemapIntegrations**(): [`SitemapIntegrationResource`](SitemapIntegrationResource.md)[]

Defined in: [sdks/node/packages/cli/src/solution/index.js:458](https://github.com/chatbotkit/node-sdk/blob/main/packages/cli/src/solution/index.js#L458)

##### Returns

[`SitemapIntegrationResource`](SitemapIntegrationResource.md)[]

***

### skillset

#### Get Signature

> **get** **skillset**(): `object`

Defined in: [sdks/node/packages/cli/src/solution/index.js:433](https://github.com/chatbotkit/node-sdk/blob/main/packages/cli/src/solution/index.js#L433)

##### Returns

`object`

***

### skillsets

#### Get Signature

> **get** **skillsets**(): [`SkillsetResource`](SkillsetResource.md)[]

Defined in: [sdks/node/packages/cli/src/solution/index.js:424](https://github.com/chatbotkit/node-sdk/blob/main/packages/cli/src/solution/index.js#L424)

##### Returns

[`SkillsetResource`](SkillsetResource.md)[]

***

### widgetIntegration

#### Get Signature

> **get** **widgetIntegration**(): `object`

Defined in: [sdks/node/packages/cli/src/solution/index.js:451](https://github.com/chatbotkit/node-sdk/blob/main/packages/cli/src/solution/index.js#L451)

##### Returns

`object`

***

### widgetIntegrations

#### Get Signature

> **get** **widgetIntegrations**(): [`WidgetIntegrationResource`](WidgetIntegrationResource.md)[]

Defined in: [sdks/node/packages/cli/src/solution/index.js:440](https://github.com/chatbotkit/node-sdk/blob/main/packages/cli/src/solution/index.js#L440)

##### Returns

[`WidgetIntegrationResource`](WidgetIntegrationResource.md)[]

## Methods

### sync()

> **sync**(): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`void`\>

Defined in: [sdks/node/packages/cli/src/solution/index.js:478](https://github.com/chatbotkit/node-sdk/blob/main/packages/cli/src/solution/index.js#L478)

Sync the solution.

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`void`\>

***

### create()

> `static` **create**(`name`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`void`\>

Defined in: [sdks/node/packages/cli/src/solution/index.js:504](https://github.com/chatbotkit/node-sdk/blob/main/packages/cli/src/solution/index.js#L504)

Creates a new solution.

#### Parameters

##### name

`string`

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`void`\>

***

### delete()

> `static` **delete**(`name`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`void`\>

Defined in: [sdks/node/packages/cli/src/solution/index.js:529](https://github.com/chatbotkit/node-sdk/blob/main/packages/cli/src/solution/index.js#L529)

Deletes a solution.

#### Parameters

##### name

`string`

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`void`\>

***

### list()

> `static` **list**(): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`string`[]\>

Defined in: [sdks/node/packages/cli/src/solution/index.js:488](https://github.com/chatbotkit/node-sdk/blob/main/packages/cli/src/solution/index.js#L488)

Lists solutions.

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`string`[]\>

***

### load()

> `static` **load**(`config`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`Solution`\>

Defined in: [sdks/node/packages/cli/src/solution/index.js:546](https://github.com/chatbotkit/node-sdk/blob/main/packages/cli/src/solution/index.js#L546)

Loads a solution from a configuration object or a file.

#### Parameters

##### config

`string` | \{ `resources?`: (\{ `description?`: `string`; `id?`: `string`; `name?`: `string`; `properties?`: \{ `backstory?`: `string`; `datasetId?`: `string`; `model?`: `string`; `moderation?`: `boolean`; `privacy?`: `boolean`; `skillsetId?`: `string`; \}; `slug?`: `string`; `type?`: `"bot"`; \} \| \{ `description?`: `string`; `id?`: `string`; `name?`: `string`; `properties?`: \{ \}; `slug?`: `string`; `type?`: `"dataset"`; \} \| \{ `description?`: `string`; `id?`: `string`; `name?`: `string`; `properties?`: \{ \}; `slug?`: `string`; `type?`: `"skillset"`; \} \| \{ `description?`: `string`; `id?`: `string`; `name?`: `string`; `properties?`: \{ \}; `slug?`: `string`; `type?`: `"widgetIntegration"`; \} \| \{ `description?`: `string`; `id?`: `string`; `name?`: `string`; `properties?`: \{ `datasetId?`: `string`; `url?`: `string`; \}; `slug?`: `string`; `type?`: `"sitemapIntegration"`; \})[]; `version?`: `1`; \}

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`Solution`\>

***

### save()

> `static` **save**(`name`, `solution`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`void`\>

Defined in: [sdks/node/packages/cli/src/solution/index.js:585](https://github.com/chatbotkit/node-sdk/blob/main/packages/cli/src/solution/index.js#L585)

Saves a solution to a file.

#### Parameters

##### name

`string`

##### solution

`Solution`

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`void`\>
