[**@chatbotkit/react**](../../../README.md)

***

[@chatbotkit/react](../../../modules.md) / [hooks/useWidgetInstance](../README.md) / ChatBotKitWidgetInstance

# Type Alias: ChatBotKitWidgetInstance

> **ChatBotKitWidgetInstance**\<\> = [`HTMLElement`](https://developer.mozilla.org/docs/Web/API/HTMLElement) & `object`

Defined in: [hooks/useWidgetInstance.js:47](https://github.com/chatbotkit/node-sdk/blob/main/packages/react/src/hooks/useWidgetInstance.js#L47)

## Type Declaration

### functions?

> `optional` **functions**: [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, [`WidgetFunction`](WidgetFunction.md)\> \| `null`

### messages?

> `optional` **messages**: [`WidgetMessage`](WidgetMessage.md)[] \| `null`

### notifications?

> `optional` **notifications**: [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, [`WidgetNotification`](WidgetNotification.md)\> \| `null`

### ready

> **ready**: `boolean`

### readyPromise

> **readyPromise**: [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`boolean`\>

### restartConversation

> **restartConversation**: [`WidgetRestartConversationFn`](WidgetRestartConversationFn.md)

### sendMessage

> **sendMessage**: [`WidgetSendMessageFn`](WidgetSendMessageFn.md)

## Type Parameters
