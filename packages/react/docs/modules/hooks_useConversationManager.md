[@chatbotkit/react](../README.md) / [Modules](../modules.md) / hooks/useConversationManager

# Module: hooks/useConversationManager

## Table of contents

### Type Aliases

- [ComplexMessage](hooks_useConversationManager.md#complexmessage)
- [SimpleMessage](hooks_useConversationManager.md#simplemessage)
- [UseConversationManagerOptions](hooks_useConversationManager.md#useconversationmanageroptions)
- [UseConversationManagerRemoteOptions](hooks_useConversationManager.md#useconversationmanagerremoteoptions)
- [UseConversationManagerResult](hooks_useConversationManager.md#useconversationmanagerresult)

### Functions

- [useConversationManager](hooks_useConversationManager.md#useconversationmanager)

## Type Aliases

### ComplexMessage

Ƭ **ComplexMessage**\<\>: `Message` & \{ `children?`: `ReactNode` ; `id`: `string`  }

#### Defined in

[hooks/useConversationManager.js:18](https://github.com/chatbotkit/node-sdk/blob/main/packages/react/src/hooks/useConversationManager.js#L18)

___

### SimpleMessage

Ƭ **SimpleMessage**\<\>: `Message` & \{ `id`: `string`  }

#### Defined in

[hooks/useConversationManager.js:13](https://github.com/chatbotkit/node-sdk/blob/main/packages/react/src/hooks/useConversationManager.js#L13)

___

### UseConversationManagerOptions

Ƭ **UseConversationManagerOptions**\<\>: [`UseConversationManagerRemoteOptions`](hooks_useConversationManager.md#useconversationmanagerremoteoptions) & {}

#### Defined in

[hooks/useConversationManager.js:27](https://github.com/chatbotkit/node-sdk/blob/main/packages/react/src/hooks/useConversationManager.js#L27)

___

### UseConversationManagerRemoteOptions

Ƭ **UseConversationManagerRemoteOptions**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `backstory?` | `string` |
| `client?` | `ConversationClient` |
| `conversationId?` | `string` |
| `datasetId?` | `string` |
| `endpoint?` | [`EndpointURL`](hooks_useConversationManagerRemote.md#endpointurl) \| [`EndpointFunction`](hooks_useConversationManagerRemote.md#endpointfunction) |
| `model?` | `Model` |
| `moderation?` | `boolean` |
| `privacy?` | `boolean` |
| `skillsetId?` | `string` |
| `token?` | `string` |

#### Defined in

[hooks/useConversationManagerRemote.js:35](https://github.com/chatbotkit/node-sdk/blob/main/packages/react/src/hooks/useConversationManagerRemote.js#L35)

___

### UseConversationManagerResult

Ƭ **UseConversationManagerResult**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `error` | `any` |
| `message` | [`SimpleMessage`](hooks_useConversationManager.md#simplemessage) \| ``null`` |
| `messages` | [`ComplexMessage`](hooks_useConversationManager.md#complexmessage)[] |
| `request` | (`name`: `string`, `args`: `any`) => [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<`boolean`\> |
| `setError` | (`error`: `any`) => `void` |
| `setText` | (`text`: `string`) => `void` |
| `submit` | () => [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<`boolean`\> |
| `text` | `string` |
| `thinking` | `boolean` |
| `trigger` | (`name`: `string`) => [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<`boolean`\> |
| `typing` | `boolean` |

#### Defined in

[hooks/useConversationManager.js:41](https://github.com/chatbotkit/node-sdk/blob/main/packages/react/src/hooks/useConversationManager.js#L41)

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
| `options` | [`UseConversationManagerRemoteOptions`](hooks_useConversationManager.md#useconversationmanagerremoteoptions) |

#### Returns

[`UseConversationManagerResult`](hooks_useConversationManager.md#useconversationmanagerresult)

#### Defined in

[hooks/useConversationManager.js:53](https://github.com/chatbotkit/node-sdk/blob/main/packages/react/src/hooks/useConversationManager.js#L53)
