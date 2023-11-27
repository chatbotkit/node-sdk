[@chatbotkit/react](../README.md) / [Modules](../modules.md) / hooks/useConversationManager

# Module: hooks/useConversationManager

## Table of contents

### Type Aliases

- [Message](hooks_useConversationManager.md#message)
- [Model](hooks_useConversationManager.md#model)
- [ModelConfig](hooks_useConversationManager.md#modelconfig)

### Functions

- [useConversationManager](hooks_useConversationManager.md#useconversationmanager)

## Type Aliases

### Message

Ƭ **Message**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `id` | `string` |
| `text` | `string` |
| `type` | ``"bot"`` \| ``"user"`` |

#### Defined in

[hooks/useConversationManager.js:28](https://github.com/chatbotkit/node-sdk/blob/main/packages/react/src/hooks/useConversationManager.js#L28)

___

### Model

Ƭ **Model**\<\>: `string` \| \{ `config?`: [`ModelConfig`](hooks_useConversationManager.md#modelconfig) ; `name`: `string`  }

#### Defined in

[hooks/useConversationManager.js:20](https://github.com/chatbotkit/node-sdk/blob/main/packages/react/src/hooks/useConversationManager.js#L20)

___

### ModelConfig

Ƭ **ModelConfig**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `frequencyPenalty?` | `number` |
| `interactionMaxMessages?` | `number` |
| `maxTokens?` | `number` |
| `presencePenalty?` | `number` |
| `region?` | ``"us"`` \| ``"eu"`` |
| `seed?` | `number` |
| `temperature?` | `number` |

#### Defined in

[hooks/useConversationManager.js:18](https://github.com/chatbotkit/node-sdk/blob/main/packages/react/src/hooks/useConversationManager.js#L18)

## Functions

### useConversationManager

▸ **useConversationManager**(`options`): `Object`

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `Object` |
| `options.Model?` | `string` |
| `options.backstory?` | `string` |
| `options.client?` | `ConversationClient` |
| `options.conversationId?` | `string` |
| `options.datasetId?` | `string` |
| `options.endpoint?` | `string` |
| `options.skillsetId?` | `string` |
| `options.token?` | `string` |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `backstory` | `string` |
| `conversationId` | `string` |
| `datasetId` | `string` |
| `error` | `any` |
| `messages` | [`Message`](hooks_useConversationManager.md#message)[] |
| `model` | `any` |
| `setBackstory` | `Dispatch`\<`SetStateAction`\<`string`\>\> |
| `setConversationId` | `Dispatch`\<`SetStateAction`\<`string`\>\> |
| `setDatasetId` | `Dispatch`\<`SetStateAction`\<`string`\>\> |
| `setError` | `Dispatch`\<`any`\> |
| `setMessages` | `Dispatch`\<`SetStateAction`\<[`Message`](hooks_useConversationManager.md#message)[]\>\> |
| `setModel` | `Dispatch`\<`any`\> |
| `setSkillsetId` | `Dispatch`\<`SetStateAction`\<`string`\>\> |
| `setText` | `Dispatch`\<`SetStateAction`\<`string`\>\> |
| `setThinking` | `Dispatch`\<`SetStateAction`\<`boolean`\>\> |
| `setToken` | `Dispatch`\<`SetStateAction`\<`string`\>\> |
| `setWriting` | `Dispatch`\<`SetStateAction`\<`boolean`\>\> |
| `skillsetId` | `string` |
| `submit` | () => `Promise`\<`void`\> |
| `text` | `string` |
| `thinking` | `boolean` |
| `token` | `string` |
| `writing` | `boolean` |

#### Defined in

[hooks/useConversationManager.js:44](https://github.com/chatbotkit/node-sdk/blob/main/packages/react/src/hooks/useConversationManager.js#L44)
