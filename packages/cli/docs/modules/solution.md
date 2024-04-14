[@chatbotkit/cli](../README.md) / [Modules](../modules.md) / solution

# Module: solution

## Table of contents

### Classes

- [BotResource](../classes/solution.BotResource.md)
- [DatasetResource](../classes/solution.DatasetResource.md)
- [Resource](../classes/solution.Resource.md)
- [SitemapIntegrationResource](../classes/solution.SitemapIntegrationResource.md)
- [SkillsetResource](../classes/solution.SkillsetResource.md)
- [Solution](../classes/solution.Solution.md)
- [WidgetIntegrationResource](../classes/solution.WidgetIntegrationResource.md)

### Type Aliases

- [ResourceConfig](solution.md#resourceconfig)
- [SolutionConfig](solution.md#solutionconfig)

### Variables

- [BasicResourceConfigSchema](solution.md#basicresourceconfigschema)
- [BotResourceConfigSchema](solution.md#botresourceconfigschema)
- [DatasetResourceConfigSchema](solution.md#datasetresourceconfigschema)
- [ResourceConfigSchema](solution.md#resourceconfigschema)
- [SitemapIntegrationResourceConfigSchema](solution.md#sitemapintegrationresourceconfigschema)
- [SkillsetResourceConfigSchema](solution.md#skillsetresourceconfigschema)
- [SolutionConfigSchema](solution.md#solutionconfigschema)
- [WidgetIntegrationResourceConfigSchema](solution.md#widgetintegrationresourceconfigschema)

### Functions

- [getArrayBackedObject](solution.md#getarraybackedobject)

## Type Aliases

### ResourceConfig

Ƭ **ResourceConfig**\<\>: `z.infer`\<typeof [`ResourceConfigSchema`](solution.md#resourceconfigschema)\>

#### Defined in

[packages/cli/src/solution/index.js:141](https://github.com/chatbotkit/node-sdk/blob/main/packages/cli/src/solution/index.js#L141)

___

### SolutionConfig

Ƭ **SolutionConfig**\<\>: `z.infer`\<typeof [`SolutionConfigSchema`](solution.md#solutionconfigschema)\>

#### Defined in

[packages/cli/src/solution/index.js:140](https://github.com/chatbotkit/node-sdk/blob/main/packages/cli/src/solution/index.js#L140)

## Variables

### BasicResourceConfigSchema

• `Const` **BasicResourceConfigSchema**: `ZodObject`\<\{ `description`: `ZodOptional`\<`ZodString`\> ; `id`: `ZodOptional`\<`ZodString`\> ; `name`: `ZodString` ; `properties`: `ZodRecord`\<`ZodString`, `ZodUnknown`\> ; `slug`: `ZodOptional`\<`ZodString`\> ; `type`: `ZodString`  }, ``"strip"``, `ZodTypeAny`, \{ `description?`: `string` ; `id?`: `string` ; `name?`: `string` ; `properties?`: [`Record`]( https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type )\<`string`, `unknown`\> ; `slug?`: `string` ; `type?`: `string`  }, \{ `description?`: `string` ; `id?`: `string` ; `name?`: `string` ; `properties?`: [`Record`]( https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type )\<`string`, `unknown`\> ; `slug?`: `string` ; `type?`: `string`  }\>

The schema for a basic resource configuration.

#### Defined in

[packages/cli/src/solution/index.js:59](https://github.com/chatbotkit/node-sdk/blob/main/packages/cli/src/solution/index.js#L59)

___

### BotResourceConfigSchema

• `Const` **BotResourceConfigSchema**: `ZodObject`\<\{ `description`: `ZodOptional`\<`ZodString`\> ; `id`: `ZodOptional`\<`ZodString`\> ; `name`: `ZodString` ; `properties`: `ZodObject`\<\{ `backstory`: `ZodOptional`\<`ZodString`\> ; `datasetId`: `ZodOptional`\<`ZodString`\> ; `model`: `ZodOptional`\<`ZodString`\> ; `moderation`: `ZodOptional`\<`ZodBoolean`\> ; `privacy`: `ZodOptional`\<`ZodBoolean`\> ; `skillsetId`: `ZodOptional`\<`ZodString`\>  }, ``"strip"``, `ZodTypeAny`, \{ `backstory?`: `string` ; `datasetId?`: `string` ; `model?`: `string` ; `moderation?`: `boolean` ; `privacy?`: `boolean` ; `skillsetId?`: `string`  }, \{ `backstory?`: `string` ; `datasetId?`: `string` ; `model?`: `string` ; `moderation?`: `boolean` ; `privacy?`: `boolean` ; `skillsetId?`: `string`  }\> ; `slug`: `ZodOptional`\<`ZodString`\> ; `type`: `ZodLiteral`\<``"bot"``\>  }, ``"strip"``, `ZodTypeAny`, \{ `description?`: `string` ; `id?`: `string` ; `name?`: `string` ; `properties?`: \{ `backstory?`: `string` ; `datasetId?`: `string` ; `model?`: `string` ; `moderation?`: `boolean` ; `privacy?`: `boolean` ; `skillsetId?`: `string`  } ; `slug?`: `string` ; `type?`: ``"bot"``  }, \{ `description?`: `string` ; `id?`: `string` ; `name?`: `string` ; `properties?`: \{ `backstory?`: `string` ; `datasetId?`: `string` ; `model?`: `string` ; `moderation?`: `boolean` ; `privacy?`: `boolean` ; `skillsetId?`: `string`  } ; `slug?`: `string` ; `type?`: ``"bot"``  }\>

The schema for a bot resource configuration.

#### Defined in

[packages/cli/src/solution/index.js:71](https://github.com/chatbotkit/node-sdk/blob/main/packages/cli/src/solution/index.js#L71)

___

### DatasetResourceConfigSchema

• `Const` **DatasetResourceConfigSchema**: `ZodObject`\<\{ `description`: `ZodOptional`\<`ZodString`\> ; `id`: `ZodOptional`\<`ZodString`\> ; `name`: `ZodString` ; `properties`: `ZodObject`\<{}, ``"strip"``, `ZodTypeAny`, {}, {}\> ; `slug`: `ZodOptional`\<`ZodString`\> ; `type`: `ZodLiteral`\<``"dataset"``\>  }, ``"strip"``, `ZodTypeAny`, \{ `description?`: `string` ; `id?`: `string` ; `name?`: `string` ; `properties?`: {} ; `slug?`: `string` ; `type?`: ``"dataset"``  }, \{ `description?`: `string` ; `id?`: `string` ; `name?`: `string` ; `properties?`: {} ; `slug?`: `string` ; `type?`: ``"dataset"``  }\>

The schema for a dataset resource configuration.

#### Defined in

[packages/cli/src/solution/index.js:86](https://github.com/chatbotkit/node-sdk/blob/main/packages/cli/src/solution/index.js#L86)

___

### ResourceConfigSchema

• `Const` **ResourceConfigSchema**: `ZodUnion`\<[`ZodObject`\<\{ `description`: `ZodOptional`\<`ZodString`\> ; `id`: `ZodOptional`\<`ZodString`\> ; `name`: `ZodString` ; `properties`: `ZodObject`\<\{ `backstory`: `ZodOptional`\<`ZodString`\> ; `datasetId`: `ZodOptional`\<`ZodString`\> ; `model`: `ZodOptional`\<`ZodString`\> ; `moderation`: `ZodOptional`\<`ZodBoolean`\> ; `privacy`: `ZodOptional`\<`ZodBoolean`\> ; `skillsetId`: `ZodOptional`\<`ZodString`\>  }, ``"strip"``, `ZodTypeAny`, \{ `backstory?`: `string` ; `datasetId?`: `string` ; `model?`: `string` ; `moderation?`: `boolean` ; `privacy?`: `boolean` ; `skillsetId?`: `string`  }, \{ `backstory?`: `string` ; `datasetId?`: `string` ; `model?`: `string` ; `moderation?`: `boolean` ; `privacy?`: `boolean` ; `skillsetId?`: `string`  }\> ; `slug`: `ZodOptional`\<`ZodString`\> ; `type`: `ZodLiteral`\<``"bot"``\>  }, ``"strip"``, `ZodTypeAny`, \{ `description?`: `string` ; `id?`: `string` ; `name?`: `string` ; `properties?`: \{ `backstory?`: `string` ; `datasetId?`: `string` ; `model?`: `string` ; `moderation?`: `boolean` ; `privacy?`: `boolean` ; `skillsetId?`: `string`  } ; `slug?`: `string` ; `type?`: ``"bot"``  }, \{ `description?`: `string` ; `id?`: `string` ; `name?`: `string` ; `properties?`: \{ `backstory?`: `string` ; `datasetId?`: `string` ; `model?`: `string` ; `moderation?`: `boolean` ; `privacy?`: `boolean` ; `skillsetId?`: `string`  } ; `slug?`: `string` ; `type?`: ``"bot"``  }\>, `ZodObject`\<\{ `description`: `ZodOptional`\<`ZodString`\> ; `id`: `ZodOptional`\<`ZodString`\> ; `name`: `ZodString` ; `properties`: `ZodObject`\<{}, ``"strip"``, `ZodTypeAny`, {}, {}\> ; `slug`: `ZodOptional`\<`ZodString`\> ; `type`: `ZodLiteral`\<``"dataset"``\>  }, ``"strip"``, `ZodTypeAny`, \{ `description?`: `string` ; `id?`: `string` ; `name?`: `string` ; `properties?`: {} ; `slug?`: `string` ; `type?`: ``"dataset"``  }, \{ `description?`: `string` ; `id?`: `string` ; `name?`: `string` ; `properties?`: {} ; `slug?`: `string` ; `type?`: ``"dataset"``  }\>, `ZodObject`\<\{ `description`: `ZodOptional`\<`ZodString`\> ; `id`: `ZodOptional`\<`ZodString`\> ; `name`: `ZodString` ; `properties`: `ZodObject`\<{}, ``"strip"``, `ZodTypeAny`, {}, {}\> ; `slug`: `ZodOptional`\<`ZodString`\> ; `type`: `ZodLiteral`\<``"skillset"``\>  }, ``"strip"``, `ZodTypeAny`, \{ `description?`: `string` ; `id?`: `string` ; `name?`: `string` ; `properties?`: {} ; `slug?`: `string` ; `type?`: ``"skillset"``  }, \{ `description?`: `string` ; `id?`: `string` ; `name?`: `string` ; `properties?`: {} ; `slug?`: `string` ; `type?`: ``"skillset"``  }\>, `ZodObject`\<\{ `description`: `ZodOptional`\<`ZodString`\> ; `id`: `ZodOptional`\<`ZodString`\> ; `name`: `ZodString` ; `properties`: `ZodObject`\<{}, ``"strip"``, `ZodTypeAny`, {}, {}\> ; `slug`: `ZodOptional`\<`ZodString`\> ; `type`: `ZodLiteral`\<``"widgetIntegration"``\>  }, ``"strip"``, `ZodTypeAny`, \{ `description?`: `string` ; `id?`: `string` ; `name?`: `string` ; `properties?`: {} ; `slug?`: `string` ; `type?`: ``"widgetIntegration"``  }, \{ `description?`: `string` ; `id?`: `string` ; `name?`: `string` ; `properties?`: {} ; `slug?`: `string` ; `type?`: ``"widgetIntegration"``  }\>, `ZodObject`\<\{ `description`: `ZodOptional`\<`ZodString`\> ; `id`: `ZodOptional`\<`ZodString`\> ; `name`: `ZodString` ; `properties`: `ZodObject`\<\{ `datasetId`: `ZodString` ; `url`: `ZodString`  }, ``"strip"``, `ZodTypeAny`, \{ `datasetId?`: `string` ; `url?`: `string`  }, \{ `datasetId?`: `string` ; `url?`: `string`  }\> ; `slug`: `ZodOptional`\<`ZodString`\> ; `type`: `ZodLiteral`\<``"sitemapIntegration"``\>  }, ``"strip"``, `ZodTypeAny`, \{ `description?`: `string` ; `id?`: `string` ; `name?`: `string` ; `properties?`: \{ `datasetId?`: `string` ; `url?`: `string`  } ; `slug?`: `string` ; `type?`: ``"sitemapIntegration"``  }, \{ `description?`: `string` ; `id?`: `string` ; `name?`: `string` ; `properties?`: \{ `datasetId?`: `string` ; `url?`: `string`  } ; `slug?`: `string` ; `type?`: ``"sitemapIntegration"``  }\>]\>

The schema for a resource configuration.

#### Defined in

[packages/cli/src/solution/index.js:123](https://github.com/chatbotkit/node-sdk/blob/main/packages/cli/src/solution/index.js#L123)

___

### SitemapIntegrationResourceConfigSchema

• `Const` **SitemapIntegrationResourceConfigSchema**: `ZodObject`\<\{ `description`: `ZodOptional`\<`ZodString`\> ; `id`: `ZodOptional`\<`ZodString`\> ; `name`: `ZodString` ; `properties`: `ZodObject`\<\{ `datasetId`: `ZodString` ; `url`: `ZodString`  }, ``"strip"``, `ZodTypeAny`, \{ `datasetId?`: `string` ; `url?`: `string`  }, \{ `datasetId?`: `string` ; `url?`: `string`  }\> ; `slug`: `ZodOptional`\<`ZodString`\> ; `type`: `ZodLiteral`\<``"sitemapIntegration"``\>  }, ``"strip"``, `ZodTypeAny`, \{ `description?`: `string` ; `id?`: `string` ; `name?`: `string` ; `properties?`: \{ `datasetId?`: `string` ; `url?`: `string`  } ; `slug?`: `string` ; `type?`: ``"sitemapIntegration"``  }, \{ `description?`: `string` ; `id?`: `string` ; `name?`: `string` ; `properties?`: \{ `datasetId?`: `string` ; `url?`: `string`  } ; `slug?`: `string` ; `type?`: ``"sitemapIntegration"``  }\>

The schema for a sitemap integration resource configuration.

#### Defined in

[packages/cli/src/solution/index.js:111](https://github.com/chatbotkit/node-sdk/blob/main/packages/cli/src/solution/index.js#L111)

___

### SkillsetResourceConfigSchema

• `Const` **SkillsetResourceConfigSchema**: `ZodObject`\<\{ `description`: `ZodOptional`\<`ZodString`\> ; `id`: `ZodOptional`\<`ZodString`\> ; `name`: `ZodString` ; `properties`: `ZodObject`\<{}, ``"strip"``, `ZodTypeAny`, {}, {}\> ; `slug`: `ZodOptional`\<`ZodString`\> ; `type`: `ZodLiteral`\<``"skillset"``\>  }, ``"strip"``, `ZodTypeAny`, \{ `description?`: `string` ; `id?`: `string` ; `name?`: `string` ; `properties?`: {} ; `slug?`: `string` ; `type?`: ``"skillset"``  }, \{ `description?`: `string` ; `id?`: `string` ; `name?`: `string` ; `properties?`: {} ; `slug?`: `string` ; `type?`: ``"skillset"``  }\>

The schema for a skillset resource configuration.

#### Defined in

[packages/cli/src/solution/index.js:94](https://github.com/chatbotkit/node-sdk/blob/main/packages/cli/src/solution/index.js#L94)

___

### SolutionConfigSchema

• `Const` **SolutionConfigSchema**: `ZodObject`\<\{ `resources`: `ZodArray`\<`ZodUnion`\<[`ZodObject`\<\{ `description`: `ZodOptional`\<`ZodString`\> ; `id`: `ZodOptional`\<`ZodString`\> ; `name`: `ZodString` ; `properties`: `ZodObject`\<\{ `backstory`: `ZodOptional`\<`ZodString`\> ; `datasetId`: `ZodOptional`\<`ZodString`\> ; `model`: `ZodOptional`\<`ZodString`\> ; `moderation`: `ZodOptional`\<`ZodBoolean`\> ; `privacy`: `ZodOptional`\<`ZodBoolean`\> ; `skillsetId`: `ZodOptional`\<`ZodString`\>  }, ``"strip"``, `ZodTypeAny`, \{ `backstory?`: `string` ; `datasetId?`: `string` ; `model?`: `string` ; `moderation?`: `boolean` ; `privacy?`: `boolean` ; `skillsetId?`: `string`  }, \{ `backstory?`: `string` ; `datasetId?`: `string` ; `model?`: `string` ; `moderation?`: `boolean` ; `privacy?`: `boolean` ; `skillsetId?`: `string`  }\> ; `slug`: `ZodOptional`\<`ZodString`\> ; `type`: `ZodLiteral`\<``"bot"``\>  }, ``"strip"``, `ZodTypeAny`, \{ `description?`: `string` ; `id?`: `string` ; `name?`: `string` ; `properties?`: \{ `backstory?`: `string` ; `datasetId?`: `string` ; `model?`: `string` ; `moderation?`: `boolean` ; `privacy?`: `boolean` ; `skillsetId?`: `string`  } ; `slug?`: `string` ; `type?`: ``"bot"``  }, \{ `description?`: `string` ; `id?`: `string` ; `name?`: `string` ; `properties?`: \{ `backstory?`: `string` ; `datasetId?`: `string` ; `model?`: `string` ; `moderation?`: `boolean` ; `privacy?`: `boolean` ; `skillsetId?`: `string`  } ; `slug?`: `string` ; `type?`: ``"bot"``  }\>, `ZodObject`\<\{ `description`: `ZodOptional`\<`ZodString`\> ; `id`: `ZodOptional`\<`ZodString`\> ; `name`: `ZodString` ; `properties`: `ZodObject`\<{}, ``"strip"``, `ZodTypeAny`, {}, {}\> ; `slug`: `ZodOptional`\<`ZodString`\> ; `type`: `ZodLiteral`\<``"dataset"``\>  }, ``"strip"``, `ZodTypeAny`, \{ `description?`: `string` ; `id?`: `string` ; `name?`: `string` ; `properties?`: {} ; `slug?`: `string` ; `type?`: ``"dataset"``  }, \{ `description?`: `string` ; `id?`: `string` ; `name?`: `string` ; `properties?`: {} ; `slug?`: `string` ; `type?`: ``"dataset"``  }\>, `ZodObject`\<\{ `description`: `ZodOptional`\<`ZodString`\> ; `id`: `ZodOptional`\<`ZodString`\> ; `name`: `ZodString` ; `properties`: `ZodObject`\<{}, ``"strip"``, `ZodTypeAny`, {}, {}\> ; `slug`: `ZodOptional`\<`ZodString`\> ; `type`: `ZodLiteral`\<``"skillset"``\>  }, ``"strip"``, `ZodTypeAny`, \{ `description?`: `string` ; `id?`: `string` ; `name?`: `string` ; `properties?`: {} ; `slug?`: `string` ; `type?`: ``"skillset"``  }, \{ `description?`: `string` ; `id?`: `string` ; `name?`: `string` ; `properties?`: {} ; `slug?`: `string` ; `type?`: ``"skillset"``  }\>, `ZodObject`\<\{ `description`: `ZodOptional`\<`ZodString`\> ; `id`: `ZodOptional`\<`ZodString`\> ; `name`: `ZodString` ; `properties`: `ZodObject`\<{}, ``"strip"``, `ZodTypeAny`, {}, {}\> ; `slug`: `ZodOptional`\<`ZodString`\> ; `type`: `ZodLiteral`\<``"widgetIntegration"``\>  }, ``"strip"``, `ZodTypeAny`, \{ `description?`: `string` ; `id?`: `string` ; `name?`: `string` ; `properties?`: {} ; `slug?`: `string` ; `type?`: ``"widgetIntegration"``  }, \{ `description?`: `string` ; `id?`: `string` ; `name?`: `string` ; `properties?`: {} ; `slug?`: `string` ; `type?`: ``"widgetIntegration"``  }\>, `ZodObject`\<\{ `description`: `ZodOptional`\<`ZodString`\> ; `id`: `ZodOptional`\<`ZodString`\> ; `name`: `ZodString` ; `properties`: `ZodObject`\<\{ `datasetId`: `ZodString` ; `url`: `ZodString`  }, ``"strip"``, `ZodTypeAny`, \{ `datasetId?`: `string` ; `url?`: `string`  }, \{ `datasetId?`: `string` ; `url?`: `string`  }\> ; `slug`: `ZodOptional`\<`ZodString`\> ; `type`: `ZodLiteral`\<``"sitemapIntegration"``\>  }, ``"strip"``, `ZodTypeAny`, \{ `description?`: `string` ; `id?`: `string` ; `name?`: `string` ; `properties?`: \{ `datasetId?`: `string` ; `url?`: `string`  } ; `slug?`: `string` ; `type?`: ``"sitemapIntegration"``  }, \{ `description?`: `string` ; `id?`: `string` ; `name?`: `string` ; `properties?`: \{ `datasetId?`: `string` ; `url?`: `string`  } ; `slug?`: `string` ; `type?`: ``"sitemapIntegration"``  }\>]\>, ``"many"``\> ; `version`: `ZodLiteral`\<``1``\>  }, ``"strip"``, `ZodTypeAny`, \{ `resources?`: (\{ `description?`: `string` ; `id?`: `string` ; `name?`: `string` ; `properties?`: \{ model?: string; backstory?: string; datasetId?: string; skillsetId?: string; moderation?: boolean; privacy?: boolean; } ; `slug?`: `string` ; `type?`: ``"bot"``  } \| \{ `description?`: `string` ; `id?`: `string` ; `name?`: `string` ; `properties?`: \{} ; `slug?`: `string` ; `type?`: ``"dataset"``  } \| \{ `description?`: `string` ; `id?`: `string` ; `name?`: `string` ; `properties?`: \{} ; `slug?`: `string` ; `type?`: ``"skillset"``  } \| \{ `description?`: `string` ; `id?`: `string` ; `name?`: `string` ; `properties?`: \{} ; `slug?`: `string` ; `type?`: ``"widgetIntegration"``  } \| \{ `description?`: `string` ; `id?`: `string` ; `name?`: `string` ; `properties?`: \{ url?: string; datasetId?: string; } ; `slug?`: `string` ; `type?`: ``"sitemapIntegration"``  })[] ; `version?`: ``1``  }, \{ `resources?`: (\{ `description?`: `string` ; `id?`: `string` ; `name?`: `string` ; `properties?`: \{ model?: string; backstory?: string; datasetId?: string; skillsetId?: string; moderation?: boolean; privacy?: boolean; } ; `slug?`: `string` ; `type?`: ``"bot"``  } \| \{ `description?`: `string` ; `id?`: `string` ; `name?`: `string` ; `properties?`: \{} ; `slug?`: `string` ; `type?`: ``"dataset"``  } \| \{ `description?`: `string` ; `id?`: `string` ; `name?`: `string` ; `properties?`: \{} ; `slug?`: `string` ; `type?`: ``"skillset"``  } \| \{ `description?`: `string` ; `id?`: `string` ; `name?`: `string` ; `properties?`: \{} ; `slug?`: `string` ; `type?`: ``"widgetIntegration"``  } \| \{ `description?`: `string` ; `id?`: `string` ; `name?`: `string` ; `properties?`: \{ url?: string; datasetId?: string; } ; `slug?`: `string` ; `type?`: ``"sitemapIntegration"``  })[] ; `version?`: ``1``  }\>

The schema for a solution configuration.

#### Defined in

[packages/cli/src/solution/index.js:134](https://github.com/chatbotkit/node-sdk/blob/main/packages/cli/src/solution/index.js#L134)

___

### WidgetIntegrationResourceConfigSchema

• `Const` **WidgetIntegrationResourceConfigSchema**: `ZodObject`\<\{ `description`: `ZodOptional`\<`ZodString`\> ; `id`: `ZodOptional`\<`ZodString`\> ; `name`: `ZodString` ; `properties`: `ZodObject`\<{}, ``"strip"``, `ZodTypeAny`, {}, {}\> ; `slug`: `ZodOptional`\<`ZodString`\> ; `type`: `ZodLiteral`\<``"widgetIntegration"``\>  }, ``"strip"``, `ZodTypeAny`, \{ `description?`: `string` ; `id?`: `string` ; `name?`: `string` ; `properties?`: {} ; `slug?`: `string` ; `type?`: ``"widgetIntegration"``  }, \{ `description?`: `string` ; `id?`: `string` ; `name?`: `string` ; `properties?`: {} ; `slug?`: `string` ; `type?`: ``"widgetIntegration"``  }\>

The schema for a widget integration resource configuration.

#### Defined in

[packages/cli/src/solution/index.js:102](https://github.com/chatbotkit/node-sdk/blob/main/packages/cli/src/solution/index.js#L102)

## Functions

### getArrayBackedObject

▸ **getArrayBackedObject**\<`T`\>(`array`): `Object`

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `array` | `T`[] |

#### Returns

`Object`

#### Defined in

[packages/cli/src/solution/index.js:594](https://github.com/chatbotkit/node-sdk/blob/main/packages/cli/src/solution/index.js#L594)
