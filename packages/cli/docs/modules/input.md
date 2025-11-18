[@chatbotkit/cli](../README.md) / [Modules](../modules.md) / input

# Module: input

## Table of contents

### Functions

- [confirm](input.md#confirm)
- [prompt](input.md#prompt)

## Functions

### confirm

▸ **confirm**(`question`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<`boolean`\>

Ask a question to the user

#### Parameters

| Name | Type |
| :------ | :------ |
| `question` | `string` |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<`boolean`\>

#### Defined in

[packages/cli/src/input.js:9](https://github.com/chatbotkit/node-sdk/blob/main/packages/cli/src/input.js#L9)

___

### prompt

▸ **prompt**(`question`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<`string`\>

Ask for user input

#### Parameters

| Name | Type |
| :------ | :------ |
| `question` | `string` |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<`string`\>

#### Defined in

[packages/cli/src/input.js:30](https://github.com/chatbotkit/node-sdk/blob/main/packages/cli/src/input.js#L30)
