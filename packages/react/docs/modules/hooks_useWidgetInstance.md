[@chatbotkit/react](../README.md) / [Modules](../modules.md) / hooks/useWidgetInstance

# Module: hooks/useWidgetInstance

## Table of contents

### Type Aliases

- [ChatBotKitWidgetInstance](hooks_useWidgetInstance.md#chatbotkitwidgetinstance)
- [WidgetFunction](hooks_useWidgetInstance.md#widgetfunction)
- [WidgetMessage](hooks_useWidgetInstance.md#widgetmessage)
- [WidgetNotification](hooks_useWidgetInstance.md#widgetnotification)
- [WidgetSendMessageFn](hooks_useWidgetInstance.md#widgetsendmessagefn)
- [WidgteRestartConversationFn](hooks_useWidgetInstance.md#widgterestartconversationfn)

### Functions

- [useWidgetInstance](hooks_useWidgetInstance.md#usewidgetinstance)

## Type Aliases

### ChatBotKitWidgetInstance

Ƭ **ChatBotKitWidgetInstance**\<\>: [`HTMLElement`]( https://developer.mozilla.org/docs/Web/API/HTMLElement ) & \{ `functions?`: [`Record`]( https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type )\<`string`, [`WidgetFunction`](hooks_useWidgetInstance.md#widgetfunction)\> \| ``null`` ; `messages?`: [`WidgetMessage`](hooks_useWidgetInstance.md#widgetmessage)[] \| ``null`` ; `notifications?`: [`Record`]( https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type )\<`string`, [`WidgetNotification`](hooks_useWidgetInstance.md#widgetnotification)\> \| ``null`` ; `ready`: `boolean` ; `readyPromise`: [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<`boolean`\> ; `restartConversation`: [`WidgteRestartConversationFn`](hooks_useWidgetInstance.md#widgterestartconversationfn) ; `sendMessage`: [`WidgetSendMessageFn`](hooks_useWidgetInstance.md#widgetsendmessagefn)  }

#### Defined in

[hooks/useWidgetInstance.js:36](https://github.com/chatbotkit/node-sdk/blob/main/packages/react/src/hooks/useWidgetInstance.js#L36)

___

### WidgetFunction

Ƭ **WidgetFunction**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `description` | `string` |
| `parameters` | [`Record`]( https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type )\<`string`, `any`\> |
| `results` | \{ `data`: `any`  } |
| `results.data` | `any` |

#### Defined in

[hooks/useWidgetInstance.js:22](https://github.com/chatbotkit/node-sdk/blob/main/packages/react/src/hooks/useWidgetInstance.js#L22)

___

### WidgetMessage

Ƭ **WidgetMessage**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `id` | `string` |
| `text` | `string` |
| `type` | `string` |

#### Defined in

[hooks/useWidgetInstance.js:10](https://github.com/chatbotkit/node-sdk/blob/main/packages/react/src/hooks/useWidgetInstance.js#L10)

___

### WidgetNotification

Ƭ **WidgetNotification**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `text` | `string` |

#### Defined in

[hooks/useWidgetInstance.js:14](https://github.com/chatbotkit/node-sdk/blob/main/packages/react/src/hooks/useWidgetInstance.js#L14)

___

### WidgetSendMessageFn

Ƭ **WidgetSendMessageFn**\<\>: (`options`: `string` \| \{ `message`: `string`  } \| \{ `text`: `string`  } & \{ `hidden?`: `boolean` ; `respond?`: `boolean`  }) => `void`

#### Type declaration

▸ (`options`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `string` \| \{ `message`: `string`  } \| \{ `text`: `string`  } & \{ `hidden?`: `boolean` ; `respond?`: `boolean`  } |

##### Returns

`void`

#### Defined in

[hooks/useWidgetInstance.js:26](https://github.com/chatbotkit/node-sdk/blob/main/packages/react/src/hooks/useWidgetInstance.js#L26)

___

### WidgteRestartConversationFn

Ƭ **WidgteRestartConversationFn**\<\>: () => `void`

#### Type declaration

▸ (): `void`

##### Returns

`void`

#### Defined in

[hooks/useWidgetInstance.js:24](https://github.com/chatbotkit/node-sdk/blob/main/packages/react/src/hooks/useWidgetInstance.js#L24)

## Functions

### useWidgetInstance

▸ **useWidgetInstance**(): [`ChatBotKitWidgetInstance`](hooks_useWidgetInstance.md#chatbotkitwidgetinstance)

#### Returns

[`ChatBotKitWidgetInstance`](hooks_useWidgetInstance.md#chatbotkitwidgetinstance)

#### Defined in

[hooks/useWidgetInstance.js:40](https://github.com/chatbotkit/node-sdk/blob/main/packages/react/src/hooks/useWidgetInstance.js#L40)
