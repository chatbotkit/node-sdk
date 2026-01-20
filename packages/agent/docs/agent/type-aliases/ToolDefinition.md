[**@chatbotkit/agent**](../../README.md)

***

[@chatbotkit/agent](../../modules.md) / [agent](../README.md) / ToolDefinition

# Type Alias: ToolDefinition\<T\>

> **ToolDefinition**\<`T`\> = `object`

Defined in: [agent/src/agent.js:20](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/agent/src/agent.js#L20)

## Type Parameters

### T

`T` *extends* [`ZodObject`](ZodObject.md)

## Type Declaration

### description

> **description**: `string`

### handler()

> **handler**: (`input`) => [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`any`\>

#### Parameters

##### input

`any`

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`any`\>

### input?

> `optional` **input**: `T`
