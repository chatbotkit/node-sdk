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
- [save](solution.Solution.md#save)

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

[packages/cli/src/solution/index.js:350](https://github.com/chatbotkit/node-sdk/blob/main/packages/cli/src/solution/index.js#L350)

## Accessors

### baseClient

• `get` **baseClient**(): `ChatBotKit`

#### Returns

`ChatBotKit`

#### Defined in

[packages/cli/src/solution/index.js:357](https://github.com/chatbotkit/node-sdk/blob/main/packages/cli/src/solution/index.js#L357)

___

### bot

• `get` **bot**(): `Object`

#### Returns

`Object`

#### Defined in

[packages/cli/src/solution/index.js:402](https://github.com/chatbotkit/node-sdk/blob/main/packages/cli/src/solution/index.js#L402)

___

### bots

• `get` **bots**(): [`BotResource`](solution.BotResource.md)[]

#### Returns

[`BotResource`](solution.BotResource.md)[]

#### Defined in

[packages/cli/src/solution/index.js:393](https://github.com/chatbotkit/node-sdk/blob/main/packages/cli/src/solution/index.js#L393)

___

### dataset

• `get` **dataset**(): `Object`

#### Returns

`Object`

#### Defined in

[packages/cli/src/solution/index.js:418](https://github.com/chatbotkit/node-sdk/blob/main/packages/cli/src/solution/index.js#L418)

___

### datasets

• `get` **datasets**(): [`DatasetResource`](solution.DatasetResource.md)[]

#### Returns

[`DatasetResource`](solution.DatasetResource.md)[]

#### Defined in

[packages/cli/src/solution/index.js:409](https://github.com/chatbotkit/node-sdk/blob/main/packages/cli/src/solution/index.js#L409)

___

### resources

• `get` **resources**(): ([`BotResource`](solution.BotResource.md) \| [`DatasetResource`](solution.DatasetResource.md) \| [`SkillsetResource`](solution.SkillsetResource.md) \| [`WidgetIntegrationResource`](solution.WidgetIntegrationResource.md) \| [`SitemapIntegrationResource`](solution.SitemapIntegrationResource.md))[]

Get the resources.

#### Returns

([`BotResource`](solution.BotResource.md) \| [`DatasetResource`](solution.DatasetResource.md) \| [`SkillsetResource`](solution.SkillsetResource.md) \| [`WidgetIntegrationResource`](solution.WidgetIntegrationResource.md) \| [`SitemapIntegrationResource`](solution.SitemapIntegrationResource.md))[]

#### Defined in

[packages/cli/src/solution/index.js:371](https://github.com/chatbotkit/node-sdk/blob/main/packages/cli/src/solution/index.js#L371)

___

### sitemapIntegration

• `get` **sitemapIntegration**(): `Object`

#### Returns

`Object`

#### Defined in

[packages/cli/src/solution/index.js:470](https://github.com/chatbotkit/node-sdk/blob/main/packages/cli/src/solution/index.js#L470)

___

### sitemapIntegrations

• `get` **sitemapIntegrations**(): [`SitemapIntegrationResource`](solution.SitemapIntegrationResource.md)[]

#### Returns

[`SitemapIntegrationResource`](solution.SitemapIntegrationResource.md)[]

#### Defined in

[packages/cli/src/solution/index.js:459](https://github.com/chatbotkit/node-sdk/blob/main/packages/cli/src/solution/index.js#L459)

___

### skillset

• `get` **skillset**(): `Object`

#### Returns

`Object`

#### Defined in

[packages/cli/src/solution/index.js:434](https://github.com/chatbotkit/node-sdk/blob/main/packages/cli/src/solution/index.js#L434)

___

### skillsets

• `get` **skillsets**(): [`SkillsetResource`](solution.SkillsetResource.md)[]

#### Returns

[`SkillsetResource`](solution.SkillsetResource.md)[]

#### Defined in

[packages/cli/src/solution/index.js:425](https://github.com/chatbotkit/node-sdk/blob/main/packages/cli/src/solution/index.js#L425)

___

### widgetIntegration

• `get` **widgetIntegration**(): `Object`

#### Returns

`Object`

#### Defined in

[packages/cli/src/solution/index.js:452](https://github.com/chatbotkit/node-sdk/blob/main/packages/cli/src/solution/index.js#L452)

___

### widgetIntegrations

• `get` **widgetIntegrations**(): [`WidgetIntegrationResource`](solution.WidgetIntegrationResource.md)[]

#### Returns

[`WidgetIntegrationResource`](solution.WidgetIntegrationResource.md)[]

#### Defined in

[packages/cli/src/solution/index.js:441](https://github.com/chatbotkit/node-sdk/blob/main/packages/cli/src/solution/index.js#L441)

## Methods

### sync

▸ **sync**(): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<`void`\>

Sync the solution.

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<`void`\>

#### Defined in

[packages/cli/src/solution/index.js:479](https://github.com/chatbotkit/node-sdk/blob/main/packages/cli/src/solution/index.js#L479)

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

[packages/cli/src/solution/index.js:505](https://github.com/chatbotkit/node-sdk/blob/main/packages/cli/src/solution/index.js#L505)

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

[packages/cli/src/solution/index.js:530](https://github.com/chatbotkit/node-sdk/blob/main/packages/cli/src/solution/index.js#L530)

___

### list

▸ **list**(): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<`string`[]\>

Lists solutions.

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<`string`[]\>

#### Defined in

[packages/cli/src/solution/index.js:489](https://github.com/chatbotkit/node-sdk/blob/main/packages/cli/src/solution/index.js#L489)

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

[packages/cli/src/solution/index.js:547](https://github.com/chatbotkit/node-sdk/blob/main/packages/cli/src/solution/index.js#L547)

___

### save

▸ **save**(`name`, `solution`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<`void`\>

Saves a solution to a file.

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `solution` | [`Solution`](solution.Solution.md) |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<`void`\>

#### Defined in

[packages/cli/src/solution/index.js:586](https://github.com/chatbotkit/node-sdk/blob/main/packages/cli/src/solution/index.js#L586)
