[@chatbotkit/agent](../README.md) / [Modules](../modules.md) / agent

# Module: agent

## Table of contents

### Type Aliases

- [ChatBotKit](agent.md#chatbotkit)
- [ExitResult](agent.md#exitresult)
- [ToolDefinition](agent.md#tooldefinition)
- [Tools](agent.md#tools)
- [ZodObject](agent.md#zodobject)

### Functions

- [complete](agent.md#complete)
- [execute](agent.md#execute)

## Type Aliases

### ChatBotKit

Ƭ **ChatBotKit**\<\>: `ChatBotKit`

#### Defined in

[packages/agent/src/agent.js:9](https://github.com/chatbotkit/node-sdk/blob/main/packages/agent/src/agent.js#L9)

___

### ExitResult

Ƭ **ExitResult**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `code` | `number` |
| `message?` | `string` |

#### Defined in

[packages/agent/src/agent.js:31](https://github.com/chatbotkit/node-sdk/blob/main/packages/agent/src/agent.js#L31)

___

### ToolDefinition

Ƭ **ToolDefinition**\<`T`\>: `Object`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`ZodObject`](agent.md#zodobject) |

#### Type declaration

| Name | Type |
| :------ | :------ |
| `description` | `string` |
| `handler` | (`input`: `any`) => [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<`any`\> |
| `input?` | `T` |

#### Defined in

[packages/agent/src/agent.js:20](https://github.com/chatbotkit/node-sdk/blob/main/packages/agent/src/agent.js#L20)

___

### Tools

Ƭ **Tools**\<\>: [`Record`]( https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type )\<`string`, [`ToolDefinition`](agent.md#tooldefinition)\<[`ZodObject`](agent.md#zodobject)\>\>

#### Defined in

[packages/agent/src/agent.js:24](https://github.com/chatbotkit/node-sdk/blob/main/packages/agent/src/agent.js#L24)

___

### ZodObject

Ƭ **ZodObject**\<\>: `ZodObject`

#### Defined in

[packages/agent/src/agent.js:5](https://github.com/chatbotkit/node-sdk/blob/main/packages/agent/src/agent.js#L5)

## Functions

### complete

▸ **complete**(`options`): [`AsyncGenerator`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/AsyncGenerator )\<{} \| {} \| {} \| {} \| {} \| {} \| {} \| {} \| {} \| {}, `void`, `unknown`\>

Agent complete generator function.

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | {} & {} \| [`Omit`]( https://www.typescriptlang.org/docs/handbook/utility-types.html#omittype-keys )\<{} & {}, ``"model"``\> & {} & \{ `client`: `ChatBotKit` ; `tools?`: [`Record`]( https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type )\<`string`, [`ToolDefinition`](agent.md#tooldefinition)\<`ZodObject`\<`any`, `UnknownKeysParam`, `ZodTypeAny`, {}, {}\>\>\>  } |

#### Returns

[`AsyncGenerator`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/AsyncGenerator )\<{} \| {} \| {} \| {} \| {} \| {} \| {} \| {} \| {} \| {}, `void`, `unknown`\>

#### Defined in

[packages/agent/src/agent.js:43](https://github.com/chatbotkit/node-sdk/blob/main/packages/agent/src/agent.js#L43)

___

### execute

▸ **execute**(`options`): [`AsyncGenerator`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/AsyncGenerator )\<{} \| {} \| {} \| {} \| {} \| {} \| {} \| {} \| {} \| {} \| \{ `data`: \{ `iteration`: `number`  } ; `type`: ``"iteration"``  } \| \{ `data`: [`ExitResult`](agent.md#exitresult) ; `type`: ``"exit"``  }, `void`, `unknown`\>

Execute an agent task in a loop until exit is called. Provides planning,
progress tracking, and controlled exit functionality.

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | {} & {} \| [`Omit`]( https://www.typescriptlang.org/docs/handbook/utility-types.html#omittype-keys )\<{} & {}, ``"model"``\> & {} & \{ `client`: `ChatBotKit` ; `maxIterations?`: `number` ; `tools?`: [`Record`]( https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type )\<`string`, [`ToolDefinition`](agent.md#tooldefinition)\<`ZodObject`\<`any`, `UnknownKeysParam`, `ZodTypeAny`, {}, {}\>\>\>  } |

#### Returns

[`AsyncGenerator`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/AsyncGenerator )\<{} \| {} \| {} \| {} \| {} \| {} \| {} \| {} \| {} \| {} \| \{ `data`: \{ `iteration`: `number`  } ; `type`: ``"iteration"``  } \| \{ `data`: [`ExitResult`](agent.md#exitresult) ; `type`: ``"exit"``  }, `void`, `unknown`\>

#### Defined in

[packages/agent/src/agent.js:174](https://github.com/chatbotkit/node-sdk/blob/main/packages/agent/src/agent.js#L174)
