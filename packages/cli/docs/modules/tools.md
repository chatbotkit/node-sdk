[@chatbotkit/cli](../README.md) / [Modules](../modules.md) / tools

# Module: tools

## Table of contents

### Variables

- [tools](tools.md#tools)

### Functions

- [getToolNames](tools.md#gettoolnames)
- [getTools](tools.md#gettools)

## Variables

### tools

• `Const` **tools**: [`Record`]( https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type )\<`string`, \{ `default?`: `boolean` ; `description`: `string` ; `handler`: (`input`: `any`) => [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<`any`\> ; `input`: `ZodObject`\<`any`, `UnknownKeysParam`, `ZodTypeAny`, {}, {}\>  }\>

Available tools for agent CLI

#### Defined in

[packages/cli/src/tools.js:18](https://github.com/chatbotkit/node-sdk/blob/main/packages/cli/src/tools.js#L18)

## Functions

### getToolNames

▸ **getToolNames**(): `string`[]

Get available tool names

#### Returns

`string`[]

#### Defined in

[packages/cli/src/tools.js:247](https://github.com/chatbotkit/node-sdk/blob/main/packages/cli/src/tools.js#L247)

___

### getTools

▸ **getTools**(`selectedTools?`): [`Record`]( https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type )\<`string`, \{ `default?`: `boolean` ; `description`: `string` ; `handler`: (`input`: `any`) => [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<`any`\> ; `input`: `ZodObject`\<`any`, `UnknownKeysParam`, `ZodTypeAny`, {}, {}\>  }\>

Get specific tools based on selected tool names

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `selectedTools?` | `string`[] | Array of tool names to include. If not provided, returns only default tools |

#### Returns

[`Record`]( https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type )\<`string`, \{ `default?`: `boolean` ; `description`: `string` ; `handler`: (`input`: `any`) => [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<`any`\> ; `input`: `ZodObject`\<`any`, `UnknownKeysParam`, `ZodTypeAny`, {}, {}\>  }\>

#### Defined in

[packages/cli/src/tools.js:230](https://github.com/chatbotkit/node-sdk/blob/main/packages/cli/src/tools.js#L230)
