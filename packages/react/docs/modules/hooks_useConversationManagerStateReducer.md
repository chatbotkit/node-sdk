[@chatbotkit/react](../README.md) / [Modules](../modules.md) / hooks/useConversationManagerStateReducer

# Module: hooks/useConversationManagerStateReducer

## Table of contents

### References

- [State](hooks_useConversationManagerStateReducer.md#state)

### Type Aliases

- [Action](hooks_useConversationManagerStateReducer.md#action)

### Functions

- [conversationManagerStateInitial](hooks_useConversationManagerStateReducer.md#conversationmanagerstateinitial)
- [conversationManagerStateReducer](hooks_useConversationManagerStateReducer.md#conversationmanagerstatereducer)
- [useConversationManagerStateReducer](hooks_useConversationManagerStateReducer.md#useconversationmanagerstatereducer)

## References

### State

Re-exports [State](hooks_useConversationManagerState.md#state)

## Type Aliases

### Action

Ƭ **Action**\<\>: `any`

#### Defined in

[hooks/useConversationManagerStateReducer.js:9](https://github.com/chatbotkit/node-sdk/blob/main/packages/react/src/hooks/useConversationManagerStateReducer.js#L9)

## Functions

### conversationManagerStateInitial

▸ **conversationManagerStateInitial**(`state?`): `any`

This function initializes the state of the conversation manager. It sets the
initial state of the conversation manager to the given state or to the
default state if no state is given.

#### Parameters

| Name | Type |
| :------ | :------ |
| `state?` | [`Partial`]( https://www.typescriptlang.org/docs/handbook/utility-types.html#partialtype )\<`any`\> |

#### Returns

`any`

#### Defined in

[hooks/useConversationManagerStateReducer.js:153](https://github.com/chatbotkit/node-sdk/blob/main/packages/react/src/hooks/useConversationManagerStateReducer.js#L153)

___

### conversationManagerStateReducer

▸ **conversationManagerStateReducer**(`state`, `action`): `any`

This is the reducer function for the conversation manager. It handles the
state of the conversation manager and updates the state based on the actions
that are dispatched to it.

#### Parameters

| Name | Type |
| :------ | :------ |
| `state` | [`Partial`]( https://www.typescriptlang.org/docs/handbook/utility-types.html#partialtype )\<`any`\> |
| `action` | `any` |

#### Returns

`any`

#### Defined in

[hooks/useConversationManagerStateReducer.js:21](https://github.com/chatbotkit/node-sdk/blob/main/packages/react/src/hooks/useConversationManagerStateReducer.js#L21)

___

### useConversationManagerStateReducer

▸ **useConversationManagerStateReducer**(`state?`): [`any`, `Dispatch`\<`any`\>]

This is a hook that creates a conversation manager reducer and initializes
the state of the conversation manager to the given state or to the default
state if no state is given.

#### Parameters

| Name | Type |
| :------ | :------ |
| `state?` | [`Partial`]( https://www.typescriptlang.org/docs/handbook/utility-types.html#partialtype )\<`any`\> |

#### Returns

[`any`, `Dispatch`\<`any`\>]

#### Defined in

[hooks/useConversationManagerStateReducer.js:172](https://github.com/chatbotkit/node-sdk/blob/main/packages/react/src/hooks/useConversationManagerStateReducer.js#L172)
