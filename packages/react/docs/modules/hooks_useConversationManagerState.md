[@chatbotkit/react](../README.md) / [Modules](../modules.md) / hooks/useConversationManagerState

# Module: hooks/useConversationManagerState

## Table of contents

### Type Aliases

- [State](hooks_useConversationManagerState.md#state)
- [StateFunctions](hooks_useConversationManagerState.md#statefunctions)

### Functions

- [useConversationManagerState](hooks_useConversationManagerState.md#useconversationmanagerstate)

## Type Aliases

### State

Ƭ **State**\<\>: `any`

#### Defined in

[hooks/useConversationManagerStateReducer.js:8](https://github.com/chatbotkit/node-sdk/blob/main/packages/react/src/hooks/useConversationManagerStateReducer.js#L8)

___

### StateFunctions

Ƭ **StateFunctions**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `appendMessage` | (`message`: `Message`) => `void` |
| `appendText` | (`text`: `string`) => `void` |
| `setThinking` | (`thinking`: `boolean`) => `void` |
| `setTyping` | (`typing`: `boolean`) => `void` |

#### Defined in

[hooks/useConversationManagerState.js:15](https://github.com/chatbotkit/node-sdk/blob/main/packages/react/src/hooks/useConversationManagerState.js#L15)

## Functions

### useConversationManagerState

▸ **useConversationManagerState**(`state?`): [`any`, [`StateFunctions`](hooks_useConversationManagerState.md#statefunctions)]

This is a hook that creates a conversation manager reducer and initializes
the state of the conversation manager to the given state or to the default
state if no state is given.

#### Parameters

| Name | Type |
| :------ | :------ |
| `state?` | [`Partial`]( https://www.typescriptlang.org/docs/handbook/utility-types.html#partialtype )\<`any`\> |

#### Returns

[`any`, [`StateFunctions`](hooks_useConversationManagerState.md#statefunctions)]

#### Defined in

[hooks/useConversationManagerState.js:26](https://github.com/chatbotkit/node-sdk/blob/main/packages/react/src/hooks/useConversationManagerState.js#L26)
