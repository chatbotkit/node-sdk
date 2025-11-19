[**@chatbotkit/cli**](../../README.md)

***

[@chatbotkit/cli](../../modules.md) / [tools](../README.md) / getTools

# Function: getTools()

> **getTools**(`selectedTools?`): [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, \{ `default?`: `boolean`; `description`: `string`; `handler`: (`input`) => [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`any`\>; `input`: `ZodObject`\<`any`\>; \}\>

Defined in: [sdks/node/packages/cli/src/tools.js:230](https://github.com/chatbotkit/node-sdk/blob/main/packages/cli/src/tools.js#L230)

Get specific tools based on selected tool names

## Parameters

### selectedTools?

`string`[]

Array of tool names to include. If not provided, returns only default tools

## Returns

[`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, \{ `default?`: `boolean`; `description`: `string`; `handler`: (`input`) => [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`any`\>; `input`: `ZodObject`\<`any`\>; \}\>
