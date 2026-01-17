[**@chatbotkit/sdk**](../../../README.md)

***

[@chatbotkit/sdk](../../../modules.md) / [conversation/attachment](../README.md) / ConversationAttachmentClient

# Class: ConversationAttachmentClient

Defined in: [conversation/attachment/index.js:13](https://github.com/chatbotkit/cbk-platform/blob/main/sdks/node/packages/sdk/src/conversation/attachment/index.js#L13)

Attachment client.

## Extends

- [`ChatBotKitClient`](../../../client/classes/ChatBotKitClient.md)

## Constructors

### Constructor

> **new ConversationAttachmentClient**(`options`): `ConversationAttachmentClient`

Defined in: [conversation/attachment/index.js:17](https://github.com/chatbotkit/cbk-platform/blob/main/sdks/node/packages/sdk/src/conversation/attachment/index.js#L17)

#### Parameters

##### options

[`ChatBotKitClientOptions`](../../../client/interfaces/ChatBotKitClientOptions.md)

#### Returns

`ConversationAttachmentClient`

#### Overrides

[`ChatBotKitClient`](../../../client/classes/ChatBotKitClient.md).[`constructor`](../../../client/classes/ChatBotKitClient.md#constructor)

## Methods

### extend()

> **extend**(`extensionOptions`): `ConversationAttachmentClient`

Defined in: [client.js:382](https://github.com/chatbotkit/cbk-platform/blob/main/sdks/node/packages/sdk/src/client.js#L382)

Creates a new instance of the same client type with extended options.

This is useful when you need to create a client with modified configuration
(e.g., different endpoint, token, or headers) without affecting the original.

Note: This method creates a completely new instance rather than cloning,
which is necessary because private class fields cannot be copied.

#### Parameters

##### extensionOptions

[`Partial`](https://www.typescriptlang.org/docs/handbook/utility-types.html#partialtype)\<[`ChatBotKitClientOptions`](../../../client/interfaces/ChatBotKitClientOptions.md)\>

Options to merge with current options

#### Returns

`ConversationAttachmentClient`

A new instance of the same client class with extended options

#### Inherited from

[`ChatBotKitClient`](../../../client/classes/ChatBotKitClient.md).[`extend`](../../../client/classes/ChatBotKitClient.md#extend)

***

### upload()

> **upload**(`fileId`, `request`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`ConversationAttachmentUploadResponse`](../v1/type-aliases/ConversationAttachmentUploadResponse.md)\>

Defined in: [conversation/attachment/index.js:28](https://github.com/chatbotkit/cbk-platform/blob/main/sdks/node/packages/sdk/src/conversation/attachment/index.js#L28)

Upload file data.

#### Parameters

##### fileId

`string`

##### request

[`ConversationAttachmentUploadRequest`](../v1/type-aliases/ConversationAttachmentUploadRequest.md)

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`ConversationAttachmentUploadResponse`](../v1/type-aliases/ConversationAttachmentUploadResponse.md)\>
