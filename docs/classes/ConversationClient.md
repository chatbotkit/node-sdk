[@chatbotkit/sdk](../README.md) / [Exports](../modules.md) / ConversationClient

# Class: ConversationClient

## Hierarchy

- `ChatBotKitClient`

  ↳ **`ConversationClient`**

## Table of contents

### Constructors

- [constructor](ConversationClient.md#constructor)

### Properties

- [secret](ConversationClient.md#secret)
- [url](ConversationClient.md#url)

### Methods

- [clientFetch](ConversationClient.md#clientfetch)
- [complete](ConversationClient.md#complete)
- [create](ConversationClient.md#create)
- [delete](ConversationClient.md#delete)
- [list](ConversationClient.md#list)

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

[conversation/index.js:13](https://github.com/chatbotkit/node-sdk/blob/181c528/lib/conversation/index.js#L13)

## Properties

### secret

• **secret**: `string`

#### Inherited from

ChatBotKitClient.secret

#### Defined in

[client.js:15](https://github.com/chatbotkit/node-sdk/blob/181c528/lib/client.js#L15)

___

### url

• **url**: `URL`

#### Inherited from

ChatBotKitClient.url

#### Defined in

[client.js:17](https://github.com/chatbotkit/node-sdk/blob/181c528/lib/client.js#L17)

## Methods

### clientFetch

▸ **clientFetch**<`T`\>(`path`, `options?`): `Promise`<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | `string` |
| `options?` | `Object` |
| `options.data?` | `Record`<`string`, `any`\> |

#### Returns

`Promise`<`T`\>

#### Inherited from

ChatBotKitClient.clientFetch

#### Defined in

[client.js:28](https://github.com/chatbotkit/node-sdk/blob/181c528/lib/client.js#L28)

___

### complete

▸ **complete**(`request`): `Promise`<`ConversationCompleteResponse`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `request` | `ConversationCompleteRequest` |

#### Returns

`Promise`<`ConversationCompleteResponse`\>

#### Defined in

[conversation/index.js:20](https://github.com/chatbotkit/node-sdk/blob/181c528/lib/conversation/index.js#L20)

___

### create

▸ **create**(`request`): `Promise`<`ConversationCreateResponse`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `request` | `ConversationCreateRequest` |

#### Returns

`Promise`<`ConversationCreateResponse`\>

#### Defined in

[conversation/index.js:33](https://github.com/chatbotkit/node-sdk/blob/181c528/lib/conversation/index.js#L33)

___

### delete

▸ **delete**(`conversationId`): `Promise`<`ConversationDeleteResponse`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `conversationId` | `string` |

#### Returns

`Promise`<`ConversationDeleteResponse`\>

#### Defined in

[conversation/index.js:40](https://github.com/chatbotkit/node-sdk/blob/181c528/lib/conversation/index.js#L40)

___

### list

▸ **list**(): `Promise`<`ConversationListResponse`\>

#### Returns

`Promise`<`ConversationListResponse`\>

#### Defined in

[conversation/index.js:26](https://github.com/chatbotkit/node-sdk/blob/181c528/lib/conversation/index.js#L26)
