[**@chatbotkit/widget**](../../README.md)

***

[@chatbotkit/widget](../../modules.md) / [v2](../README.md) / FunctionDefinition

# Interface: FunctionDefinition

Defined in: [v2.ts:21](https://github.com/chatbotkit/node-sdk/blob/main/packages/widget/src/v2.ts#L21)

Definition for a single function.

## Properties

### description

> **description**: `string`

Defined in: [v2.ts:23](https://github.com/chatbotkit/node-sdk/blob/main/packages/widget/src/v2.ts#L23)

Description of what the function does

***

### handler()

> **handler**: (`args`) => `unknown`

Defined in: [v2.ts:27](https://github.com/chatbotkit/node-sdk/blob/main/packages/widget/src/v2.ts#L27)

Handler function called when the engine invokes this function

#### Parameters

##### args

[`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `unknown`\>

#### Returns

`unknown`

***

### parameters

> **parameters**: [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `unknown`\>

Defined in: [v2.ts:25](https://github.com/chatbotkit/node-sdk/blob/main/packages/widget/src/v2.ts#L25)

JSON schema parameters for the function
