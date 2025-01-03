[@chatbotkit/react](../README.md) / [Modules](../modules.md) / hooks/useConversationManagerRemote

# Module: hooks/useConversationManagerRemote

## Table of contents

### References

- [UseConversationManagerRemoteOptions](hooks_useConversationManagerRemote.md#useconversationmanagerremoteoptions)

### Type Aliases

- [EndpointFunction](hooks_useConversationManagerRemote.md#endpointfunction)
- [EndpointURL](hooks_useConversationManagerRemote.md#endpointurl)
- [UseConversationManagerRemoteResult](hooks_useConversationManagerRemote.md#useconversationmanagerremoteresult)

### Functions

- [useConversationManagerRemote](hooks_useConversationManagerRemote.md#useconversationmanagerremote)

## References

### UseConversationManagerRemoteOptions

Re-exports [UseConversationManagerRemoteOptions](hooks_useConversationManager.md#useconversationmanagerremoteoptions)

## Type Aliases

### EndpointFunction

Ƭ **EndpointFunction**\<\>: (`options`: `any`) => [`AsyncGenerator`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/AsyncGenerator )\<`any`\>

#### Type declaration

▸ (`options`): [`AsyncGenerator`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/AsyncGenerator )\<`any`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `any` |

##### Returns

[`AsyncGenerator`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/AsyncGenerator )\<`any`\>

#### Defined in

[packages/react/src/hooks/useConversationManagerRemote.js:20](https://github.com/chatbotkit/node-sdk/blob/main/packages/react/src/hooks/useConversationManagerRemote.js#L20)

___

### EndpointURL

Ƭ **EndpointURL**\<\>: `string`

#### Defined in

[packages/react/src/hooks/useConversationManagerRemote.js:19](https://github.com/chatbotkit/node-sdk/blob/main/packages/react/src/hooks/useConversationManagerRemote.js#L19)

___

### UseConversationManagerRemoteResult

Ƭ **UseConversationManagerRemoteResult**\<\>: (`messages`: `Message`[]) => [`AsyncGenerator`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/AsyncGenerator )\<`any`, `void`, `any`\>

#### Type declaration

▸ (`messages`): [`AsyncGenerator`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/AsyncGenerator )\<`any`, `void`, `any`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `messages` | `Message`[] |

##### Returns

[`AsyncGenerator`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/AsyncGenerator )\<`any`, `void`, `any`\>

#### Defined in

[packages/react/src/hooks/useConversationManagerRemote.js:39](https://github.com/chatbotkit/node-sdk/blob/main/packages/react/src/hooks/useConversationManagerRemote.js#L39)

## Functions

### useConversationManagerRemote

▸ **useConversationManagerRemote**(`options`): [`UseConversationManagerRemoteResult`](hooks_useConversationManagerRemote.md#useconversationmanagerremoteresult)

This hook is used to create a remote function that can be used to complete
a conversation.

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`UseConversationManagerRemoteOptions`](hooks_useConversationManager.md#useconversationmanagerremoteoptions) |

#### Returns

[`UseConversationManagerRemoteResult`](hooks_useConversationManagerRemote.md#useconversationmanagerremoteresult)

**`Todo`**

requires refactoring

#### Defined in

[packages/react/src/hooks/useConversationManagerRemote.js:50](https://github.com/chatbotkit/node-sdk/blob/main/packages/react/src/hooks/useConversationManagerRemote.js#L50)
