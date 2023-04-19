[@chatbotkit/sdk](../README.md) / [Modules](../modules.md) / [conversation](../modules/conversation.md) / ConversationClient

# Class: ConversationClient

[conversation](../modules/conversation.md).ConversationClient

## Hierarchy

- `ChatBotKitClient`

  ↳ **`ConversationClient`**

## Table of contents

### Constructors

- [constructor](conversation.ConversationClient.md#constructor)

### Properties

- [secret](conversation.ConversationClient.md#secret)
- [url](conversation.ConversationClient.md#url)

### Methods

- [clientFetch](conversation.ConversationClient.md#clientfetch)
- [complete](conversation.ConversationClient.md#complete)
- [create](conversation.ConversationClient.md#create)
- [delete](conversation.ConversationClient.md#delete)
- [fetch](conversation.ConversationClient.md#fetch)
- [list](conversation.ConversationClient.md#list)
- [receive](conversation.ConversationClient.md#receive)
- [send](conversation.ConversationClient.md#send)
- [update](conversation.ConversationClient.md#update)

## Constructors

### constructor

• **new ConversationClient**(`options`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `ChatBotKitClientOptions` |

#### Overrides

ChatBotKitClient.constructor

#### Defined in

[conversation/index.js:19](https://github.com/chatbotkit/node-sdk/blob/43f3938/packages/sdk/src/conversation/index.js#L19)

## Properties

### secret

• **secret**: `string`

#### Inherited from

ChatBotKitClient.secret

#### Defined in

[client.js:125](https://github.com/chatbotkit/node-sdk/blob/43f3938/packages/sdk/src/client.js#L125)

___

### url

• **url**: `URL`

#### Inherited from

ChatBotKitClient.url

#### Defined in

[client.js:127](https://github.com/chatbotkit/node-sdk/blob/43f3938/packages/sdk/src/client.js#L127)

## Methods

### clientFetch

▸ **clientFetch**<`T`, `D`\>(`path`, `options?`): `ResponsePromise`<`T`, `D`\>

#### Type parameters

| Name |
| :------ |
| `T` |
| `D` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | `string` |
| `options?` | `Object` |
| `options.data?` | `Record`<`string`, `any`\> |

#### Returns

`ResponsePromise`<`T`, `D`\>

#### Inherited from

ChatBotKitClient.clientFetch

#### Defined in

[client.js:140](https://github.com/chatbotkit/node-sdk/blob/43f3938/packages/sdk/src/client.js#L140)

___

### complete

▸ **complete**(`request`): `ResponsePromise`<`ConversationCompleteResponse`, `ConversationCompleteStreamType`\>

Completes the next bot message in a stateless conversation.

#### Parameters

| Name | Type |
| :------ | :------ |
| `request` | `ConversationCompleteRequest` |

#### Returns

`ResponsePromise`<`ConversationCompleteResponse`, `ConversationCompleteStreamType`\>

#### Defined in

[conversation/index.js:72](https://github.com/chatbotkit/node-sdk/blob/43f3938/packages/sdk/src/conversation/index.js#L72)

___

### create

▸ **create**(`request`): `Promise`<`ConversationCreateResponse`\>

Creates a new conversation.

#### Parameters

| Name | Type |
| :------ | :------ |
| `request` | `ConversationCreateRequest` |

#### Returns

`Promise`<`ConversationCreateResponse`\>

#### Defined in

[conversation/index.js:44](https://github.com/chatbotkit/node-sdk/blob/43f3938/packages/sdk/src/conversation/index.js#L44)

___

### delete

▸ **delete**(`conversationId`): `Promise`<`ConversationDeleteResponse`\>

Deletes the conversation.

#### Parameters

| Name | Type |
| :------ | :------ |
| `conversationId` | `string` |

#### Returns

`Promise`<`ConversationDeleteResponse`\>

#### Defined in

[conversation/index.js:63](https://github.com/chatbotkit/node-sdk/blob/43f3938/packages/sdk/src/conversation/index.js#L63)

___

### fetch

▸ **fetch**(`conversationId`): `Promise`<`ConversationFetchResponse`\>

Fetches a conversation.

#### Parameters

| Name | Type |
| :------ | :------ |
| `conversationId` | `string` |

#### Returns

`Promise`<`ConversationFetchResponse`\>

#### Defined in

[conversation/index.js:35](https://github.com/chatbotkit/node-sdk/blob/43f3938/packages/sdk/src/conversation/index.js#L35)

___

### list

▸ **list**(): `Promise`<`ConversationListResponse`\>

Retrieves a list of all existing conversations associated with this client.

#### Returns

`Promise`<`ConversationListResponse`\>

#### Defined in

[conversation/index.js:26](https://github.com/chatbotkit/node-sdk/blob/43f3938/packages/sdk/src/conversation/index.js#L26)

___

### receive

▸ **receive**(`conversationId`, `request`): `Promise`<`ConversationReceiveResponse`\>

Receives a message from the conversation.

#### Parameters

| Name | Type |
| :------ | :------ |
| `conversationId` | `string` |
| `request` | `ConversationReceiveRequest` |

#### Returns

`Promise`<`ConversationReceiveResponse`\>

#### Defined in

[conversation/index.js:92](https://github.com/chatbotkit/node-sdk/blob/43f3938/packages/sdk/src/conversation/index.js#L92)

___

### send

▸ **send**(`conversationId`, `request`): `Promise`<`ConversationSendResponse`\>

Sends a message to the conversation.

#### Parameters

| Name | Type |
| :------ | :------ |
| `conversationId` | `string` |
| `request` | `ConversationSendRequest` |

#### Returns

`Promise`<`ConversationSendResponse`\>

#### Defined in

[conversation/index.js:82](https://github.com/chatbotkit/node-sdk/blob/43f3938/packages/sdk/src/conversation/index.js#L82)

___

### update

▸ **update**(`conversationId`, `request`): `Promise`<`ConversationUpdateResponse`\>

Updates a new conversation.

#### Parameters

| Name | Type |
| :------ | :------ |
| `conversationId` | `string` |
| `request` | `ConversationUpdateRequest` |

#### Returns

`Promise`<`ConversationUpdateResponse`\>

#### Defined in

[conversation/index.js:54](https://github.com/chatbotkit/node-sdk/blob/43f3938/packages/sdk/src/conversation/index.js#L54)
