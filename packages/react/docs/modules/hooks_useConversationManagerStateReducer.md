[@chatbotkit/react](../README.md) / [Modules](../modules.md) / hooks/useConversationManagerStateReducer

# Module: hooks/useConversationManagerStateReducer

## Table of contents

### References

- [State](hooks_useConversationManagerStateReducer.md#state)

### Type Aliases

- [Action](hooks_useConversationManagerStateReducer.md#action)
- [AppendMessageAction](hooks_useConversationManagerStateReducer.md#appendmessageaction)
- [AppendTextAction](hooks_useConversationManagerStateReducer.md#appendtextaction)
- [Message](hooks_useConversationManagerStateReducer.md#message)
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

[packages/react/src/hooks/useConversationManagerStateReducer.js:47](https://github.com/chatbotkit/node-sdk/blob/main/packages/react/src/hooks/useConversationManagerStateReducer.js#L47)

___

### AppendMessageAction

Ƭ **AppendMessageAction**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `data` | \{ `message`: [`Omit`]( https://www.typescriptlang.org/docs/handbook/utility-types.html#omittype-keys )\<[`Message`](hooks_useConversationManagerStateReducer.md#message), ``"id"`` \| ``"createdAt"``\> & \{ `createdAt?`: [`Date`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Date ) ; `id?`: `string`  }  } |
| `data.message` | [`Omit`]( https://www.typescriptlang.org/docs/handbook/utility-types.html#omittype-keys )\<[`Message`](hooks_useConversationManagerStateReducer.md#message), ``"id"`` \| ``"createdAt"``\> & \{ `createdAt?`: [`Date`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Date ) ; `id?`: `string`  } |
| `type` | ``"appendMessage"`` |

#### Defined in

[packages/react/src/hooks/useConversationManagerStateReducer.js:45](https://github.com/chatbotkit/node-sdk/blob/main/packages/react/src/hooks/useConversationManagerStateReducer.js#L45)

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

[packages/react/src/hooks/useConversationManagerStateReducer.js:38](https://github.com/chatbotkit/node-sdk/blob/main/packages/react/src/hooks/useConversationManagerStateReducer.js#L38)

___

### Message

Ƭ **Message**\<\>: `Message` & \{ `createdAt`: [`Date`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Date ) ; `id`: `string`  }

#### Defined in

[packages/react/src/hooks/useConversationManagerStateReducer.js:8](https://github.com/chatbotkit/node-sdk/blob/main/packages/react/src/hooks/useConversationManagerStateReducer.js#L8)

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

[packages/react/src/hooks/useConversationManagerStateReducer.js:24](https://github.com/chatbotkit/node-sdk/blob/main/packages/react/src/hooks/useConversationManagerStateReducer.js#L24)

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

[packages/react/src/hooks/useConversationManagerStateReducer.js:31](https://github.com/chatbotkit/node-sdk/blob/main/packages/react/src/hooks/useConversationManagerStateReducer.js#L31)

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

[packages/react/src/hooks/useConversationManagerStateReducer.js:194](https://github.com/chatbotkit/node-sdk/blob/main/packages/react/src/hooks/useConversationManagerStateReducer.js#L194)

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

[packages/react/src/hooks/useConversationManagerStateReducer.js:59](https://github.com/chatbotkit/node-sdk/blob/main/packages/react/src/hooks/useConversationManagerStateReducer.js#L59)

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

[packages/react/src/hooks/useConversationManagerStateReducer.js:213](https://github.com/chatbotkit/node-sdk/blob/main/packages/react/src/hooks/useConversationManagerStateReducer.js#L213)
