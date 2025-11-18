[**@chatbotkit/react**](../../../README.md)

***

[@chatbotkit/react](../../../modules.md) / [hooks/useConversationManagerStateReducer](../README.md) / AppendMessageAction

# Type Alias: AppendMessageAction

> **AppendMessageAction**\<\> = `object`

Defined in: [hooks/useConversationManagerStateReducer.js:45](https://github.com/chatbotkit/node-sdk/blob/main/packages/react/src/hooks/useConversationManagerStateReducer.js#L45)

## Type Parameters

## Type Declaration

### data

> **data**: `object`

#### data.message

> **message**: [`Omit`](https://www.typescriptlang.org/docs/handbook/utility-types.html#omittype-keys)\<[`Message`](Message.md), `"id"` \| `"createdAt"`\> & `object`

##### Type Declaration

###### createdAt?

> `optional` **createdAt**: [`Date`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Date)

###### id?

> `optional` **id**: `string`

### type

> **type**: `"appendMessage"`
