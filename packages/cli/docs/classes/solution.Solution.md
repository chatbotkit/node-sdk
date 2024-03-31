[@chatbotkit/cli](../README.md) / [Modules](../modules.md) / [solution](../modules/solution.md) / Solution

# Class: Solution

[solution](../modules/solution.md).Solution

Represents a solution.

## Table of contents

### Constructors

- [constructor](solution.Solution.md#constructor)

### Accessors

- [baseClient](solution.Solution.md#baseclient)
- [bot](solution.Solution.md#bot)
- [bots](solution.Solution.md#bots)
- [dataset](solution.Solution.md#dataset)
- [datasets](solution.Solution.md#datasets)
- [resources](solution.Solution.md#resources)
- [sitemapIntegration](solution.Solution.md#sitemapintegration)
- [sitemapIntegrations](solution.Solution.md#sitemapintegrations)
- [skillset](solution.Solution.md#skillset)
- [skillsets](solution.Solution.md#skillsets)
- [widgetIntegration](solution.Solution.md#widgetintegration)
- [widgetIntegrations](solution.Solution.md#widgetintegrations)

### Methods

- [sync](solution.Solution.md#sync)
- [create](solution.Solution.md#create)
- [delete](solution.Solution.md#delete)
- [list](solution.Solution.md#list)
- [load](solution.Solution.md#load)

## Constructors

### constructor

• **new Solution**(`config`): [`Solution`](solution.Solution.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `config` | `Object` |
| `config.resources?` | (\{ `description?`: `string` ; `id?`: `string` ; `name?`: `string` ; `properties?`: \{ model?: string; backstory?: string; datasetId?: string; skillsetId?: string; moderation?: boolean; privacy?: boolean; } ; `slug?`: `string` ; `type?`: ``"bot"``  } \| \{ `description?`: `string` ; `id?`: `string` ; `name?`: `string` ; `properties?`: \{} ; `slug?`: `string` ; `type?`: ``"dataset"``  } \| \{ `description?`: `string` ; `id?`: `string` ; `name?`: `string` ; `properties?`: \{} ; `slug?`: `string` ; `type?`: ``"skillset"``  } \| \{ `description?`: `string` ; `id?`: `string` ; `name?`: `string` ; `properties?`: \{} ; `slug?`: `string` ; `type?`: ``"widgetIntegration"``  } \| \{ `description?`: `string` ; `id?`: `string` ; `name?`: `string` ; `properties?`: \{ url?: string; datasetId?: string; } ; `slug?`: `string` ; `type?`: ``"sitemapIntegration"``  })[] |
| `config.version?` | ``1`` |

#### Returns

[`Solution`](solution.Solution.md)

#### Defined in

[packages/cli/src/solution/index.js:301](https://github.com/chatbotkit/node-sdk/blob/main/packages/cli/src/solution/index.js#L301)

## Accessors

### baseClient

• `get` **baseClient**(): `ChatBotKit`

#### Returns

`ChatBotKit`

#### Defined in

[packages/cli/src/solution/index.js:308](https://github.com/chatbotkit/node-sdk/blob/main/packages/cli/src/solution/index.js#L308)

___

### bot

• `get` **bot**(): `Object`

#### Returns

`Object`

#### Defined in

[packages/cli/src/solution/index.js:353](https://github.com/chatbotkit/node-sdk/blob/main/packages/cli/src/solution/index.js#L353)

___

### bots

• `get` **bots**(): [`BotResource`](solution.BotResource.md)[]

#### Returns

[`BotResource`](solution.BotResource.md)[]

#### Defined in

[packages/cli/src/solution/index.js:344](https://github.com/chatbotkit/node-sdk/blob/main/packages/cli/src/solution/index.js#L344)

___

### dataset

• `get` **dataset**(): `Object`

#### Returns

`Object`

#### Defined in

[packages/cli/src/solution/index.js:369](https://github.com/chatbotkit/node-sdk/blob/main/packages/cli/src/solution/index.js#L369)

___

### datasets

• `get` **datasets**(): [`DatasetResource`](solution.DatasetResource.md)[]

#### Returns

[`DatasetResource`](solution.DatasetResource.md)[]

#### Defined in

[packages/cli/src/solution/index.js:360](https://github.com/chatbotkit/node-sdk/blob/main/packages/cli/src/solution/index.js#L360)

___

### resources

• `get` **resources**(): ([`BotResource`](solution.BotResource.md) \| [`DatasetResource`](solution.DatasetResource.md) \| [`SkillsetResource`](solution.SkillsetResource.md) \| [`WidgetIntegrationResource`](solution.WidgetIntegrationResource.md) \| [`SitemapIntegrationResource`](solution.SitemapIntegrationResource.md))[]

Get the resources.

#### Returns

([`BotResource`](solution.BotResource.md) \| [`DatasetResource`](solution.DatasetResource.md) \| [`SkillsetResource`](solution.SkillsetResource.md) \| [`WidgetIntegrationResource`](solution.WidgetIntegrationResource.md) \| [`SitemapIntegrationResource`](solution.SitemapIntegrationResource.md))[]

#### Defined in

[packages/cli/src/solution/index.js:322](https://github.com/chatbotkit/node-sdk/blob/main/packages/cli/src/solution/index.js#L322)

___

### sitemapIntegration

• `get` **sitemapIntegration**(): `Object`

#### Returns

`Object`

#### Defined in

[packages/cli/src/solution/index.js:421](https://github.com/chatbotkit/node-sdk/blob/main/packages/cli/src/solution/index.js#L421)

___

### sitemapIntegrations

• `get` **sitemapIntegrations**(): [`SitemapIntegrationResource`](solution.SitemapIntegrationResource.md)[]

#### Returns

[`SitemapIntegrationResource`](solution.SitemapIntegrationResource.md)[]

#### Defined in

[packages/cli/src/solution/index.js:410](https://github.com/chatbotkit/node-sdk/blob/main/packages/cli/src/solution/index.js#L410)

___

### skillset

• `get` **skillset**(): `Object`

#### Returns

`Object`

#### Defined in

[packages/cli/src/solution/index.js:385](https://github.com/chatbotkit/node-sdk/blob/main/packages/cli/src/solution/index.js#L385)

___

### skillsets

• `get` **skillsets**(): [`SkillsetResource`](solution.SkillsetResource.md)[]

#### Returns

[`SkillsetResource`](solution.SkillsetResource.md)[]

#### Defined in

[packages/cli/src/solution/index.js:376](https://github.com/chatbotkit/node-sdk/blob/main/packages/cli/src/solution/index.js#L376)

___

### widgetIntegration

• `get` **widgetIntegration**(): `Object`

#### Returns

`Object`

#### Defined in

[packages/cli/src/solution/index.js:403](https://github.com/chatbotkit/node-sdk/blob/main/packages/cli/src/solution/index.js#L403)

___

### widgetIntegrations

• `get` **widgetIntegrations**(): [`WidgetIntegrationResource`](solution.WidgetIntegrationResource.md)[]

#### Returns

[`WidgetIntegrationResource`](solution.WidgetIntegrationResource.md)[]

#### Defined in

[packages/cli/src/solution/index.js:392](https://github.com/chatbotkit/node-sdk/blob/main/packages/cli/src/solution/index.js#L392)

## Methods

### sync

▸ **sync**(): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<`void`\>

Sync the solution.

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<`void`\>

#### Defined in

[packages/cli/src/solution/index.js:430](https://github.com/chatbotkit/node-sdk/blob/main/packages/cli/src/solution/index.js#L430)

___

### create

▸ **create**(`name`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<`void`\>

Creates a new solution.

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<`void`\>

#### Defined in

[packages/cli/src/solution/index.js:456](https://github.com/chatbotkit/node-sdk/blob/main/packages/cli/src/solution/index.js#L456)

___

### delete

▸ **delete**(`name`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<`void`\>

Deletes a solution.

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<`void`\>

#### Defined in

[packages/cli/src/solution/index.js:481](https://github.com/chatbotkit/node-sdk/blob/main/packages/cli/src/solution/index.js#L481)

___

### list

▸ **list**(): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<`string`[]\>

Lists solutions.

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<`string`[]\>

#### Defined in

[packages/cli/src/solution/index.js:440](https://github.com/chatbotkit/node-sdk/blob/main/packages/cli/src/solution/index.js#L440)

___

### load

▸ **load**(`config`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<[`Solution`](solution.Solution.md)\>

Loads a solution from a configuration object or a file.

#### Parameters

| Name | Type |
| :------ | :------ |
| `config` | `string` \| \{ `resources?`: (\{ `description?`: `string` ; `id?`: `string` ; `name?`: `string` ; `properties?`: \{ model?: string; backstory?: string; datasetId?: string; skillsetId?: string; moderation?: boolean; privacy?: boolean; } ; `slug?`: `string` ; `type?`: ``"bot"``  } \| \{ `description?`: `string` ; `id?`: `string` ; `name?`: `string` ; `properties?`: \{} ; `slug?`: `string` ; `type?`: ``"dataset"``  } \| \{ `description?`: `string` ; `id?`: `string` ; `name?`: `string` ; `properties?`: \{} ; `slug?`: `string` ; `type?`: ``"skillset"``  } \| \{ `description?`: `string` ; `id?`: `string` ; `name?`: `string` ; `properties?`: \{} ; `slug?`: `string` ; `type?`: ``"widgetIntegration"``  } \| \{ `description?`: `string` ; `id?`: `string` ; `name?`: `string` ; `properties?`: \{ url?: string; datasetId?: string; } ; `slug?`: `string` ; `type?`: ``"sitemapIntegration"``  })[] ; `version?`: ``1``  } |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<[`Solution`](solution.Solution.md)\>

#### Defined in

[packages/cli/src/solution/index.js:498](https://github.com/chatbotkit/node-sdk/blob/main/packages/cli/src/solution/index.js#L498)
