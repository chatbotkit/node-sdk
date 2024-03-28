[@chatbotkit/react](../README.md) / [Modules](../modules.md) / hooks/useConversationManagerStateReducer

# Module: hooks/useConversationManagerStateReducer

## Table of contents

### References

- [State](hooks_useConversationManagerStateReducer.md#state)

### Type Aliases

- [Action](hooks_useConversationManagerStateReducer.md#action)
- [AppendMessageAction](hooks_useConversationManagerStateReducer.md#appendmessageaction)
- [AppendTextAction](hooks_useConversationManagerStateReducer.md#appendtextaction)
- [MessageWithId](hooks_useConversationManagerStateReducer.md#messagewithid)
- [MessageWithOptionalId](hooks_useConversationManagerStateReducer.md#messagewithoptionalid)
- [SetThinkingAction](hooks_useConversationManagerStateReducer.md#setthinkingaction)
- [SetTypingAction](hooks_useConversationManagerStateReducer.md#settypingaction)

### Functions

- [conversationManagerStateInitial](hooks_useConversationManagerStateReducer.md#conversationmanagerstateinitial)
- [conversationManagerStateReducer](hooks_useConversationManagerStateReducer.md#conversationmanagerstatereducer)
- [useConversationManagerStateReducer](hooks_useConversationManagerStateReducer.md#useconversationmanagerstatereducer)

## References

### State

Re-exports [State](hooks_useConversationManagerState.md#state)

## Type Aliases

### Action

Ƭ **Action**\<\>: [`SetThinkingAction`](hooks_useConversationManagerStateReducer.md#setthinkingaction) \| [`SetTypingAction`](hooks_useConversationManagerStateReducer.md#settypingaction) \| [`AppendTextAction`](hooks_useConversationManagerStateReducer.md#appendtextaction) \| [`AppendMessageAction`](hooks_useConversationManagerStateReducer.md#appendmessageaction)

#### Defined in

[hooks/useConversationManagerStateReducer.js:48](https://github.com/chatbotkit/node-sdk/blob/main/packages/react/src/hooks/useConversationManagerStateReducer.js#L48)

___

### AppendMessageAction

Ƭ **AppendMessageAction**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `data` | \{ `message`: [`MessageWithOptionalId`](hooks_useConversationManagerStateReducer.md#messagewithoptionalid)  } |
| `data.message` | [`MessageWithOptionalId`](hooks_useConversationManagerStateReducer.md#messagewithoptionalid) |
| `type` | ``"appendMessage"`` |

#### Defined in

[hooks/useConversationManagerStateReducer.js:46](https://github.com/chatbotkit/node-sdk/blob/main/packages/react/src/hooks/useConversationManagerStateReducer.js#L46)

___

### AppendTextAction

Ƭ **AppendTextAction**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `data` | \{ `text`: `string`  } |
| `data.text` | `string` |
| `type` | ``"appendText"`` |

#### Defined in

[hooks/useConversationManagerStateReducer.js:39](https://github.com/chatbotkit/node-sdk/blob/main/packages/react/src/hooks/useConversationManagerStateReducer.js#L39)

___

### MessageWithId

Ƭ **MessageWithId**\<\>: \{ `id`: `string`  } & `Message`

#### Defined in

[hooks/useConversationManagerStateReducer.js:8](https://github.com/chatbotkit/node-sdk/blob/main/packages/react/src/hooks/useConversationManagerStateReducer.js#L8)

___

### MessageWithOptionalId

Ƭ **MessageWithOptionalId**\<\>: \{ `id?`: `string`  } & `Message`

#### Defined in

[hooks/useConversationManagerStateReducer.js:9](https://github.com/chatbotkit/node-sdk/blob/main/packages/react/src/hooks/useConversationManagerStateReducer.js#L9)

___

### SetThinkingAction

Ƭ **SetThinkingAction**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `data` | \{ `thinking`: `boolean`  } |
| `data.thinking` | `boolean` |
| `type` | ``"setThinking"`` |

#### Defined in

[hooks/useConversationManagerStateReducer.js:25](https://github.com/chatbotkit/node-sdk/blob/main/packages/react/src/hooks/useConversationManagerStateReducer.js#L25)

___

### SetTypingAction

Ƭ **SetTypingAction**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `data` | \{ `typing`: `boolean`  } |
| `data.typing` | `boolean` |
| `type` | ``"setTyping"`` |

#### Defined in

[hooks/useConversationManagerStateReducer.js:32](https://github.com/chatbotkit/node-sdk/blob/main/packages/react/src/hooks/useConversationManagerStateReducer.js#L32)

## Functions

### conversationManagerStateInitial

▸ **conversationManagerStateInitial**(`state?`): [`State`](hooks_useConversationManagerState.md#state)

This function initializes the state of the conversation manager. It sets the
initial state of the conversation manager to the given state or to the
default state if no state is given.

#### Parameters

| Name | Type |
| :------ | :------ |
| `state?` | [`Partial`]( https://www.typescriptlang.org/docs/handbook/utility-types.html#partialtype )\<[`State`](hooks_useConversationManagerState.md#state)\> |

#### Returns

[`State`](hooks_useConversationManagerState.md#state)

#### Defined in

[hooks/useConversationManagerStateReducer.js:192](https://github.com/chatbotkit/node-sdk/blob/main/packages/react/src/hooks/useConversationManagerStateReducer.js#L192)

___

### conversationManagerStateReducer

▸ **conversationManagerStateReducer**(`state`, `action`): [`State`](hooks_useConversationManagerState.md#state)

This is the reducer function for the conversation manager. It handles the
state of the conversation manager and updates the state based on the actions
that are dispatched to it.

#### Parameters

| Name | Type |
| :------ | :------ |
| `state` | [`State`](hooks_useConversationManagerState.md#state) |
| `action` | [`Action`](hooks_useConversationManagerStateReducer.md#action) |

#### Returns

[`State`](hooks_useConversationManagerState.md#state)

#### Defined in

[hooks/useConversationManagerStateReducer.js:60](https://github.com/chatbotkit/node-sdk/blob/main/packages/react/src/hooks/useConversationManagerStateReducer.js#L60)

___

### useConversationManagerStateReducer

▸ **useConversationManagerStateReducer**(`state?`): [[`State`](hooks_useConversationManagerState.md#state), `Dispatch`\<[`Action`](hooks_useConversationManagerStateReducer.md#action)\>]

This is a hook that creates a conversation manager reducer and initializes
the state of the conversation manager to the given state or to the default
state if no state is given.

#### Parameters

| Name | Type |
| :------ | :------ |
| `state?` | [`Partial`]( https://www.typescriptlang.org/docs/handbook/utility-types.html#partialtype )\<[`State`](hooks_useConversationManagerState.md#state)\> |

#### Returns

[[`State`](hooks_useConversationManagerState.md#state), `Dispatch`\<[`Action`](hooks_useConversationManagerStateReducer.md#action)\>]

#### Defined in

[hooks/useConversationManagerStateReducer.js:211](https://github.com/chatbotkit/node-sdk/blob/main/packages/react/src/hooks/useConversationManagerStateReducer.js#L211)
