[@chatbotkit/react](../README.md) / [Modules](../modules.md) / actions/complete

# Module: actions/complete

## Table of contents

### Type Aliases

- [BasicParametersSchema](actions_complete.md#basicparametersschema)
- [InputFunction](actions_complete.md#inputfunction)
- [InputMessage](actions_complete.md#inputmessage)
- [Options](actions_complete.md#options)
- [ValidatingParametersSchema](actions_complete.md#validatingparametersschema)

### Functions

- [default](actions_complete.md#default)
- [streamComplete](actions_complete.md#streamcomplete)

## Type Aliases

### BasicParametersSchema

Ƭ **BasicParametersSchema**\<\>: [`Record`]( https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type )\<`string`, `any`\>

#### Defined in

[actions/complete.js:6](https://github.com/chatbotkit/node-sdk/blob/main/packages/react/src/actions/complete.js#L6)

___

### InputFunction

Ƭ **InputFunction**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `description` | `string` |
| `handler?` | (`args`: `any`) => [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<`string` \| `ReactElement` \| \{ `children?`: `ReactElement` ; `result?`: `any` ; `text?`: `string`  }\> |
| `name` | `string` |
| `parameters` | [`BasicParametersSchema`](actions_complete.md#basicparametersschema) \| [`ValidatingParametersSchema`](actions_complete.md#validatingparametersschema) |

#### Defined in

[actions/complete.js:24](https://github.com/chatbotkit/node-sdk/blob/main/packages/react/src/actions/complete.js#L24)

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

[actions/complete.js:17](https://github.com/chatbotkit/node-sdk/blob/main/packages/react/src/actions/complete.js#L17)

___

### Options

Ƭ **Options**\<\>: [`Omit`]( https://www.typescriptlang.org/docs/handbook/utility-types.html#omittype-keys )\<`ConversationCompleteRequest`, ``"messages"`` \| ``"functions"``\> & \{ `client`: `ConversationClient` ; `functions?`: ([`InputFunction`](actions_complete.md#inputfunction) \| () => [`InputFunction`](actions_complete.md#inputfunction))[] ; `maxRecusion?`: `number` ; `messages`: [`InputMessage`](actions_complete.md#inputmessage)[]  }

#### Defined in

[actions/complete.js:31](https://github.com/chatbotkit/node-sdk/blob/main/packages/react/src/actions/complete.js#L31)

___

### ValidatingParametersSchema

Ƭ **ValidatingParametersSchema**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `schema` | [`BasicParametersSchema`](actions_complete.md#basicparametersschema) |
| `validate` | (`value`: `any`) => [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<\{ `error?`: [`Error`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Error ) ; `valid`: `boolean`  }\> |

#### Defined in

[actions/complete.js:11](https://github.com/chatbotkit/node-sdk/blob/main/packages/react/src/actions/complete.js#L11)

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

[actions/complete.js:42](https://github.com/chatbotkit/node-sdk/blob/main/packages/react/src/actions/complete.js#L42)

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

[actions/complete.js:264](https://github.com/chatbotkit/node-sdk/blob/main/packages/react/src/actions/complete.js#L264)
