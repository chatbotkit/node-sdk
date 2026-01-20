[**@chatbotkit/react**](../../../README.md)

***

[@chatbotkit/react](../../../modules.md) / [hooks/useConversationManagerState](../README.md) / StateFunctions

# Type Alias: StateFunctions

> **StateFunctions**\<\> = `object`

Defined in: [hooks/useConversationManagerState.js:15](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/react/src/hooks/useConversationManagerState.js#L15)

## Type Parameters

## Type Declaration

### appendMessage()

> **appendMessage**: (`message`) => `void`

#### Parameters

##### message

[`AppendMessageAction`](../../useConversationManagerStateReducer/type-aliases/AppendMessageAction.md)\[`"data"`\]\[`"message"`\]

#### Returns

`void`

### appendText()

> **appendText**: (`text`) => `void`

#### Parameters

##### text

[`AppendTextAction`](../../useConversationManagerStateReducer/type-aliases/AppendTextAction.md)\[`"data"`\]\[`"text"`\]

#### Returns

`void`

### setThinking()

> **setThinking**: (`thinking`) => `void`

#### Parameters

##### thinking

[`SetThinkingAction`](../../useConversationManagerStateReducer/type-aliases/SetThinkingAction.md)\[`"data"`\]\[`"thinking"`\]

#### Returns

`void`

### setTyping()

> **setTyping**: (`typing`) => `void`

#### Parameters

##### typing

[`SetTypingAction`](../../useConversationManagerStateReducer/type-aliases/SetTypingAction.md)\[`"data"`\]\[`"typing"`\]

#### Returns

`void`
