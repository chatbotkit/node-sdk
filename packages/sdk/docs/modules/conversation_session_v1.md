[@chatbotkit/sdk](../README.md) / [Modules](../modules.md) / conversation/session/v1

# Module: conversation/session/v1

## Table of contents

### Type Aliases

- [ChatBotKitClient](conversation_session_v1.md#chatbotkitclient)
- [ConversationSessionCreateRequest](conversation_session_v1.md#conversationsessioncreaterequest)
- [ConversationSessionCreateRequestBody](conversation_session_v1.md#conversationsessioncreaterequestbody)
- [ConversationSessionCreateResponse](conversation_session_v1.md#conversationsessioncreateresponse)
- [ConversationSessionCreateResponseBody](conversation_session_v1.md#conversationsessioncreateresponsebody)

### Functions

- [createConversationSession](conversation_session_v1.md#createconversationsession)

## Type Aliases

### ChatBotKitClient

Ƭ **ChatBotKitClient**\<\>: [`client`](client.md)

#### Defined in

[conversation/session/v1.js:2](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/conversation/session/v1.js#L2)

___

### ConversationSessionCreateRequest

Ƭ **ConversationSessionCreateRequest**\<\>: [`ConversationSessionCreateRequestBody`](conversation_session_v1.md#conversationsessioncreaterequestbody)

#### Defined in

[conversation/session/v1.js:8](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/conversation/session/v1.js#L8)

___

### ConversationSessionCreateRequestBody

Ƭ **ConversationSessionCreateRequestBody**\<\>: `operations`[``"createConversationSession"``][``"requestBody"``][``"content"``][``"application/json"``]

#### Defined in

[conversation/session/v1.js:6](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/conversation/session/v1.js#L6)

___

### ConversationSessionCreateResponse

Ƭ **ConversationSessionCreateResponse**\<\>: [`ConversationSessionCreateResponseBody`](conversation_session_v1.md#conversationsessioncreateresponsebody)

#### Defined in

[conversation/session/v1.js:12](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/conversation/session/v1.js#L12)

___

### ConversationSessionCreateResponseBody

Ƭ **ConversationSessionCreateResponseBody**\<\>: `operations`[``"createConversationSession"``][``"responses"``][``"200"``][``"content"``][``"application/json"``]

#### Defined in

[conversation/session/v1.js:10](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/conversation/session/v1.js#L10)

## Functions

### createConversationSession

▸ **createConversationSession**(`client`, `conversationId`, `request`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<{}\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`ChatBotKitClient`](../classes/client.ChatBotKitClient.md) |
| `conversationId` | `string` |
| `request` | `Object` |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<{}\>

#### Defined in

[conversation/session/v1.js:19](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/conversation/session/v1.js#L19)
