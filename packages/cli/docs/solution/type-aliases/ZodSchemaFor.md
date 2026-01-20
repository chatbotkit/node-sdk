[**@chatbotkit/cli**](../../README.md)

***

[@chatbotkit/cli](../../modules.md) / [solution](../README.md) / ZodSchemaFor

# Type Alias: ZodSchemaFor\<T\>

> **ZodSchemaFor**\<`T`\> = `{ [K in keyof T]-?: undefined extends T[K] ? z.ZodOptional<z.ZodType<Exclude<T[K], undefined>>> : z.ZodType<T[K]> }`

Defined in: [sdks/node/packages/cli/src/solution/index.js:97](https://github.com/chatbotkit/cbk-platform/blob/main/sdks/node/packages/cli/src/solution/index.js#L97)

## Type Parameters

### T

`T`
