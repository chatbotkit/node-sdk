[@chatbotkit/react](../README.md) / [Modules](../modules.md) / hooks/useConversationManager

# Module: hooks/useConversationManager

## Table of contents

### Type Aliases

- [EndpointFunction](hooks_useConversationManager.md#endpointfunction)
- [EndpointURL](hooks_useConversationManager.md#endpointurl)
- [Message](hooks_useConversationManager.md#message)
- [Model](hooks_useConversationManager.md#model)
- [ModelConfig](hooks_useConversationManager.md#modelconfig)
- [UseConversationManagerOptions](hooks_useConversationManager.md#useconversationmanageroptions)
- [UseConversationManagerResult](hooks_useConversationManager.md#useconversationmanagerresult)

### Functions

- [useConversationManager](hooks_useConversationManager.md#useconversationmanager)

## Type Aliases

### EndpointFunction

Ƭ **EndpointFunction**\<\>: (`conversationId`: `any`, `request`: `any`) => [`AsyncGenerator`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/AsyncGenerator )\<`any`\>

#### Type declaration

▸ (`conversationId`, `request`): [`AsyncGenerator`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/AsyncGenerator )\<`any`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `conversationId` | `any` |
| `request` | `any` |

##### Returns

[`AsyncGenerator`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/AsyncGenerator )\<`any`\>

#### Defined in

[hooks/useConversationManager.js:35](https://github.com/chatbotkit/node-sdk/blob/main/packages/react/src/hooks/useConversationManager.js#L35)

___

### EndpointURL

Ƭ **EndpointURL**\<\>: `string`

#### Defined in

[hooks/useConversationManager.js:34](https://github.com/chatbotkit/node-sdk/blob/main/packages/react/src/hooks/useConversationManager.js#L34)

___

### Message

Ƭ **Message**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `id?` | `string` |
| `meta?` | [`Record`]( https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type )\<`string`, `any`\> |
| `text` | `string` |
| `type` | ``"bot"`` \| ``"user"`` \| ``"context"`` \| ``"instruction"`` \| ``"backstory"`` \| ``"activity"`` |

#### Defined in

[hooks/useConversationManager.js:30](https://github.com/chatbotkit/node-sdk/blob/main/packages/react/src/hooks/useConversationManager.js#L30)

___

### Model

Ƭ **Model**\<\>: `string` \| \{ `config?`: [`ModelConfig`](hooks_useConversationManager.md#modelconfig) ; `name`: `string`  }

#### Defined in

[hooks/useConversationManager.js:21](https://github.com/chatbotkit/node-sdk/blob/main/packages/react/src/hooks/useConversationManager.js#L21)

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

[hooks/useConversationManager.js:19](https://github.com/chatbotkit/node-sdk/blob/main/packages/react/src/hooks/useConversationManager.js#L19)

___

### UseConversationManagerOptions

Ƭ **UseConversationManagerOptions**\<\>: `Object`

#### Index signature

▪ [key: `string`]: `any`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `Model?` | `string` |
| `backstory?` | `string` |
| `client?` | `ConversationClient` |
| `conversationId?` | `string` |
| `datasetId?` | `string` |
| `endpoint?` | [`EndpointURL`](hooks_useConversationManager.md#endpointurl) \| [`EndpointFunction`](hooks_useConversationManager.md#endpointfunction) |
| `skillsetId?` | `string` |
| `token?` | `string` |

#### Defined in

[hooks/useConversationManager.js:49](https://github.com/chatbotkit/node-sdk/blob/main/packages/react/src/hooks/useConversationManager.js#L49)

___

### UseConversationManagerResult

Ƭ **UseConversationManagerResult**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `backstory?` | `string` |
| `botId?` | `string` |
| `conversationId?` | `string` |
| `datasetId?` | `string` |
| `error` | `any` |
| `messages` | [`Message`](hooks_useConversationManager.md#message)[] |
| `model?` | [`Model`](hooks_useConversationManager.md#model) |
| `request` | (`name`: `string`, ...`args`: `any`) => `void` |
| `setBackstory` | (`backstory`: `string`) => `void` |
| `setBotId` | (`botId`: `string`) => `void` |
| `setConversationId` | (`conversationId`: `string`) => `void` |
| `setDatasetId` | (`datasetId`: `string`) => `void` |
| `setError` | (`error`: `any`) => `void` |
| `setMessages` | (`messages`: [`Message`](hooks_useConversationManager.md#message)[]) => `void` |
| `setModel` | (`model`: [`Model`](hooks_useConversationManager.md#model)) => `void` |
| `setSkillsetId` | (`skillsetId`: `string`) => `void` |
| `setText` | (`text`: `string`) => `void` |
| `setThinking` | (`thinking`: `boolean`) => `void` |
| `setToken` | (`token`: `string`) => `void` |
| `setTyping` | (`typing`: `boolean`) => `void` |
| `skillsetId?` | `string` |
| `submit` | () => `void` |
| `text` | `string` |
| `thinking` | `boolean` |
| `token?` | `string` |
| `trigger` | (`name`: `string`) => `void` |
| `typing` | `boolean` |

#### Defined in

[hooks/useConversationManager.js:79](https://github.com/chatbotkit/node-sdk/blob/main/packages/react/src/hooks/useConversationManager.js#L79)

## Functions

### useConversationManager

▸ **useConversationManager**(`options`): [`UseConversationManagerResult`](hooks_useConversationManager.md#useconversationmanagerresult)

The useConversationManager hook is a React hook that manages the conversation
state including the messages, the input text and all calls to the ChatBotKit
API endpoint. It automatically handles the conversation state and other
details like the token and conversation ID.

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`UseConversationManagerOptions`](hooks_useConversationManager.md#useconversationmanageroptions) |

#### Returns

[`UseConversationManagerResult`](hooks_useConversationManager.md#useconversationmanagerresult)

#### Defined in

[hooks/useConversationManager.js:91](https://github.com/chatbotkit/node-sdk/blob/main/packages/react/src/hooks/useConversationManager.js#L91)
