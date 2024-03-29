[@chatbotkit/react](../README.md) / [Modules](../modules.md) / actions/complete

# Module: actions/complete

## Table of contents

### Type Aliases

- [BasicParametersSchema](actions_complete.md#basicparametersschema)
- [HandlerArgs](actions_complete.md#handlerargs)
- [HandlerResult](actions_complete.md#handlerresult)
- [InputFunction](actions_complete.md#inputfunction)
- [InputMessage](actions_complete.md#inputmessage)
- [Options](actions_complete.md#options)
- [ReactElement](actions_complete.md#reactelement)
- [RenderFunction](actions_complete.md#renderfunction)
- [ValidatingParametersSchema](actions_complete.md#validatingparametersschema)

### Functions

- [default](actions_complete.md#default)
- [streamComplete](actions_complete.md#streamcomplete)

## Type Aliases

### BasicParametersSchema

Ƭ **BasicParametersSchema**\<\>: [`Record`]( https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type )\<`string`, `any`\>

#### Defined in

[actions/complete.js:13](https://github.com/chatbotkit/node-sdk/blob/main/packages/react/src/actions/complete.js#L13)

___

### HandlerArgs

Ƭ **HandlerArgs**\<\>: `any`

#### Defined in

[actions/complete.js:28](https://github.com/chatbotkit/node-sdk/blob/main/packages/react/src/actions/complete.js#L28)

___

### HandlerResult

Ƭ **HandlerResult**\<\>: `string` \| [`ReactElement`](actions_complete.md#reactelement) \| \{ `children?`: `ReactNode` ; `render?`: [`RenderFunction`](actions_complete.md#renderfunction) ; `result?`: `any` ; `text?`: `string`  }

#### Defined in

[actions/complete.js:29](https://github.com/chatbotkit/node-sdk/blob/main/packages/react/src/actions/complete.js#L29)

___

### InputFunction

Ƭ **InputFunction**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `description` | `string` |
| `handler?` | (`args`: [`HandlerArgs`](actions_complete.md#handlerargs)) => [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<[`HandlerResult`](actions_complete.md#handlerresult)\> |
| `name` | `string` |
| `parameters` | [`BasicParametersSchema`](actions_complete.md#basicparametersschema) \| [`ValidatingParametersSchema`](actions_complete.md#validatingparametersschema) |

#### Defined in

[actions/complete.js:36](https://github.com/chatbotkit/node-sdk/blob/main/packages/react/src/actions/complete.js#L36)

___

### InputMessage

Ƭ **InputMessage**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `meta?` | [`Record`]( https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type )\<`string`, `any`\> |
| `text` | `string` |
| `type` | ``"bot"`` \| ``"user"`` \| ``"context"`` \| ``"instruction"`` \| ``"backstory"`` \| ``"activity"`` |

#### Defined in

[actions/complete.js:24](https://github.com/chatbotkit/node-sdk/blob/main/packages/react/src/actions/complete.js#L24)

___

### Options

Ƭ **Options**\<\>: [`Omit`]( https://www.typescriptlang.org/docs/handbook/utility-types.html#omittype-keys )\<`ConversationCompleteRequest`, ``"messages"`` \| ``"functions"``\> & \{ `client`: `ConversationClient` ; `functions?`: ([`InputFunction`](actions_complete.md#inputfunction) \| () => [`InputFunction`](actions_complete.md#inputfunction))[] ; `maxRecusion?`: `number` ; `messages`: [`InputMessage`](actions_complete.md#inputmessage)[]  }

#### Defined in

[actions/complete.js:43](https://github.com/chatbotkit/node-sdk/blob/main/packages/react/src/actions/complete.js#L43)

___

### ReactElement

Ƭ **ReactElement**\<\>: `ReactElement`

#### Defined in

[actions/complete.js:8](https://github.com/chatbotkit/node-sdk/blob/main/packages/react/src/actions/complete.js#L8)

___

### RenderFunction

Ƭ **RenderFunction**\<\>: () => [`AsyncGenerator`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/AsyncGenerator )\<`ReactNode`\> \| `ReactNode` \| [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<`ReactNode`\>

#### Type declaration

▸ (): [`AsyncGenerator`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/AsyncGenerator )\<`ReactNode`\> \| `ReactNode` \| [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<`ReactNode`\>

##### Returns

[`AsyncGenerator`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/AsyncGenerator )\<`ReactNode`\> \| `ReactNode` \| [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<`ReactNode`\>

#### Defined in

[actions/complete.js:26](https://github.com/chatbotkit/node-sdk/blob/main/packages/react/src/actions/complete.js#L26)

___

### ValidatingParametersSchema

Ƭ **ValidatingParametersSchema**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `schema` | [`BasicParametersSchema`](actions_complete.md#basicparametersschema) |
| `validate` | (`value`: `any`) => [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<\{ `error?`: [`Error`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Error ) ; `valid`: `boolean`  }\> |

#### Defined in

[actions/complete.js:18](https://github.com/chatbotkit/node-sdk/blob/main/packages/react/src/actions/complete.js#L18)

## Functions

### default

▸ **default**(`options`): `any`

The complete function will take a list of messages and optional functions and
return a generator that will yield various events. The function also handles
the current message state as well as correctly handling function calls.

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`Options`](actions_complete.md#options) |

#### Returns

`any`

#### Defined in

[actions/complete.js:54](https://github.com/chatbotkit/node-sdk/blob/main/packages/react/src/actions/complete.js#L54)

___

### streamComplete

▸ **streamComplete**(`options`): `any`

A wrapper around the complete function that will return a generator that will
yield various events. Similarly to the complete function it will handle the
current message state as well as correctly handling function calls.

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`Options`](actions_complete.md#options) |

#### Returns

`any`

#### Defined in

[actions/complete.js:312](https://github.com/chatbotkit/node-sdk/blob/main/packages/react/src/actions/complete.js#L312)
