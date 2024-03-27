[@chatbotkit/react](../README.md) / [Modules](../modules.md) / actions/complete

# Module: actions/complete

## Table of contents

### Type Aliases

- [InputFunction](actions_complete.md#inputfunction)
- [InputMessage](actions_complete.md#inputmessage)
- [Options](actions_complete.md#options)

### Functions

- [default](actions_complete.md#default)
- [streamComplete](actions_complete.md#streamcomplete)

## Type Aliases

### InputFunction

Ƭ **InputFunction**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `description` | `string` |
| `handler?` | (`args`: `any`) => `Promise`\<`string` \| `ReactElement` \| \{ `children?`: `ReactElement` ; `result?`: `any` ; `text?`: `string`  }\> |
| `name` | `string` |
| `parameters` | `Record`\<`string`, `any`\> |

#### Defined in

[actions/complete.js:17](https://github.com/chatbotkit/node-sdk/blob/main/packages/react/src/actions/complete.js#L17)

___

### InputMessage

Ƭ **InputMessage**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `meta?` | `Record`\<`string`, `any`\> |
| `text` | `string` |
| `type` | ``"bot"`` \| ``"user"`` \| ``"context"`` \| ``"instruction"`` \| ``"backstory"`` \| ``"activity"`` |

#### Defined in

[actions/complete.js:10](https://github.com/chatbotkit/node-sdk/blob/main/packages/react/src/actions/complete.js#L10)

___

### Options

Ƭ **Options**\<\>: `Omit`\<`ConversationCompleteRequest`, ``"messages"`` \| ``"functions"``\> & \{ `client`: `ConversationClient` ; `functions?`: [`InputFunction`](actions_complete.md#inputfunction)[] ; `maxRecusion?`: `number` ; `messages`: [`InputMessage`](actions_complete.md#inputmessage)[]  }

#### Defined in

[actions/complete.js:24](https://github.com/chatbotkit/node-sdk/blob/main/packages/react/src/actions/complete.js#L24)

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

[actions/complete.js:35](https://github.com/chatbotkit/node-sdk/blob/main/packages/react/src/actions/complete.js#L35)

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

[actions/complete.js:205](https://github.com/chatbotkit/node-sdk/blob/main/packages/react/src/actions/complete.js#L205)
