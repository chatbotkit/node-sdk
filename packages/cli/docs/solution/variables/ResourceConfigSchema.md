[**@chatbotkit/cli**](../../README.md)

***

[@chatbotkit/cli](../../modules.md) / [solution](../README.md) / ResourceConfigSchema

# Variable: ResourceConfigSchema

> `const` **ResourceConfigSchema**: `ZodUnion`\<\[`ZodObject`\<`object` & `object`, `"strip"`, `ZodTypeAny`, \{ `description?`: `string`; `id?`: `string`; `name?`: `string`; `properties?`: \{ `backstory?`: `string`; `datasetId?`: `string`; `model?`: `string`; `moderation?`: `boolean`; `privacy?`: `boolean`; `skillsetId?`: `string`; \}; `slug?`: `string`; `type?`: `"bot"`; \}, \{ `description?`: `string`; `id?`: `string`; `name?`: `string`; `properties?`: \{ `backstory?`: `string`; `datasetId?`: `string`; `model?`: `string`; `moderation?`: `boolean`; `privacy?`: `boolean`; `skillsetId?`: `string`; \}; `slug?`: `string`; `type?`: `"bot"`; \}\>, `ZodObject`\<`object` & `object`, `"strip"`, `ZodTypeAny`, \{ `description?`: `string`; `id?`: `string`; `name?`: `string`; `properties?`: \{ \}; `slug?`: `string`; `type?`: `"dataset"`; \}, \{ `description?`: `string`; `id?`: `string`; `name?`: `string`; `properties?`: \{ \}; `slug?`: `string`; `type?`: `"dataset"`; \}\>, `ZodObject`\<`object` & `object`, `"strip"`, `ZodTypeAny`, \{ `description?`: `string`; `id?`: `string`; `name?`: `string`; `properties?`: \{ \}; `slug?`: `string`; `type?`: `"skillset"`; \}, \{ `description?`: `string`; `id?`: `string`; `name?`: `string`; `properties?`: \{ \}; `slug?`: `string`; `type?`: `"skillset"`; \}\>, `ZodObject`\<`object` & `object`, `"strip"`, `ZodTypeAny`, \{ `description?`: `string`; `id?`: `string`; `name?`: `string`; `properties?`: \{ \}; `slug?`: `string`; `type?`: `"widgetIntegration"`; \}, \{ `description?`: `string`; `id?`: `string`; `name?`: `string`; `properties?`: \{ \}; `slug?`: `string`; `type?`: `"widgetIntegration"`; \}\>, `ZodObject`\<`object` & `object`, `"strip"`, `ZodTypeAny`, \{ `description?`: `string`; `id?`: `string`; `name?`: `string`; `properties?`: \{ `datasetId?`: `string`; `url?`: `string`; \}; `slug?`: `string`; `type?`: `"sitemapIntegration"`; \}, \{ `description?`: `string`; `id?`: `string`; `name?`: `string`; `properties?`: \{ `datasetId?`: `string`; `url?`: `string`; \}; `slug?`: `string`; `type?`: `"sitemapIntegration"`; \}\>\]\>

Defined in: [sdks/node/packages/cli/src/solution/index.js:158](https://github.com/chatbotkit/node-sdk/blob/main/packages/cli/src/solution/index.js#L158)

The schema for a resource configuration.
