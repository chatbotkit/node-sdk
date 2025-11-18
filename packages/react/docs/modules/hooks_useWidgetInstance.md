[@chatbotkit/react](../README.md) / [Modules](../modules.md) / hooks/useWidgetInstance

# Module: hooks/useWidgetInstance

## Table of contents

### Type Aliases

- [ChatBotKitWidgetInstance](hooks_useWidgetInstance.md#chatbotkitwidgetinstance)
- [WidgetFunction](hooks_useWidgetInstance.md#widgetfunction)
- [WidgetFunctionBase](hooks_useWidgetInstance.md#widgetfunctionbase)
- [WidgetFunctionWithHandler](hooks_useWidgetInstance.md#widgetfunctionwithhandler)
- [WidgetFunctionWithResult](hooks_useWidgetInstance.md#widgetfunctionwithresult)
- [WidgetMessage](hooks_useWidgetInstance.md#widgetmessage)
- [WidgetNotification](hooks_useWidgetInstance.md#widgetnotification)
- [WidgetRestartConversationFn](hooks_useWidgetInstance.md#widgetrestartconversationfn)
- [WidgetSendMessageFn](hooks_useWidgetInstance.md#widgetsendmessagefn)

### Functions

- [useWidgetInstance](hooks_useWidgetInstance.md#usewidgetinstance)

## Type Aliases

### ChatBotKitWidgetInstance

Ƭ **ChatBotKitWidgetInstance**\<\>: [`HTMLElement`]( https://developer.mozilla.org/docs/Web/API/HTMLElement ) & \{ `functions?`: [`Record`]( https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type )\<`string`, [`WidgetFunction`](hooks_useWidgetInstance.md#widgetfunction)\> \| ``null`` ; `messages?`: [`WidgetMessage`](hooks_useWidgetInstance.md#widgetmessage)[] \| ``null`` ; `notifications?`: [`Record`]( https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type )\<`string`, [`WidgetNotification`](hooks_useWidgetInstance.md#widgetnotification)\> \| ``null`` ; `ready`: `boolean` ; `readyPromise`: [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<`boolean`\> ; `restartConversation`: [`WidgetRestartConversationFn`](hooks_useWidgetInstance.md#widgetrestartconversationfn) ; `sendMessage`: [`WidgetSendMessageFn`](hooks_useWidgetInstance.md#widgetsendmessagefn)  }

#### Defined in

[packages/react/src/hooks/useWidgetInstance.js:47](https://github.com/chatbotkit/node-sdk/blob/main/packages/react/src/hooks/useWidgetInstance.js#L47)

___

### WidgetFunction

Ƭ **WidgetFunction**\<\>: [`WidgetFunctionWithResult`](hooks_useWidgetInstance.md#widgetfunctionwithresult) \| [`WidgetFunctionWithHandler`](hooks_useWidgetInstance.md#widgetfunctionwithhandler)

#### Defined in

[packages/react/src/hooks/useWidgetInstance.js:33](https://github.com/chatbotkit/node-sdk/blob/main/packages/react/src/hooks/useWidgetInstance.js#L33)

___

### WidgetFunctionBase

Ƭ **WidgetFunctionBase**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `description` | `string` |
| `parameters` | [`Record`]( https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type )\<`string`, `any`\> |

#### Defined in

[packages/react/src/hooks/useWidgetInstance.js:21](https://github.com/chatbotkit/node-sdk/blob/main/packages/react/src/hooks/useWidgetInstance.js#L21)

___

### WidgetFunctionWithHandler

Ƭ **WidgetFunctionWithHandler**\<\>: [`WidgetFunctionBase`](hooks_useWidgetInstance.md#widgetfunctionbase) & \{ `handler`: (`args`: `any`) => `any`  }

#### Defined in

[packages/react/src/hooks/useWidgetInstance.js:31](https://github.com/chatbotkit/node-sdk/blob/main/packages/react/src/hooks/useWidgetInstance.js#L31)

___

### WidgetFunctionWithResult

Ƭ **WidgetFunctionWithResult**\<\>: [`WidgetFunctionBase`](hooks_useWidgetInstance.md#widgetfunctionbase) & \{ `result`: \{ `data`: `any`  }  }

#### Defined in

[packages/react/src/hooks/useWidgetInstance.js:27](https://github.com/chatbotkit/node-sdk/blob/main/packages/react/src/hooks/useWidgetInstance.js#L27)

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

[packages/react/src/hooks/useWidgetInstance.js:12](https://github.com/chatbotkit/node-sdk/blob/main/packages/react/src/hooks/useWidgetInstance.js#L12)

___

### WidgetNotification

Ƭ **WidgetNotification**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `text` | `string` |

#### Defined in

[packages/react/src/hooks/useWidgetInstance.js:16](https://github.com/chatbotkit/node-sdk/blob/main/packages/react/src/hooks/useWidgetInstance.js#L16)

___

### WidgetRestartConversationFn

Ƭ **WidgetRestartConversationFn**\<\>: () => `void`

#### Type declaration

▸ (): `void`

##### Returns

`void`

#### Defined in

[packages/react/src/hooks/useWidgetInstance.js:35](https://github.com/chatbotkit/node-sdk/blob/main/packages/react/src/hooks/useWidgetInstance.js#L35)

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

[packages/react/src/hooks/useWidgetInstance.js:37](https://github.com/chatbotkit/node-sdk/blob/main/packages/react/src/hooks/useWidgetInstance.js#L37)

## Functions

### useWidgetInstance

▸ **useWidgetInstance**(`selector?`, `deps?`): [`ChatBotKitWidgetInstance`](hooks_useWidgetInstance.md#chatbotkitwidgetinstance)

#### Parameters

| Name | Type |
| :------ | :------ |
| `selector?` | `string` |
| `deps?` | `any`[] |

#### Returns

[`ChatBotKitWidgetInstance`](hooks_useWidgetInstance.md#chatbotkitwidgetinstance)

#### Defined in

[packages/react/src/hooks/useWidgetInstance.js:53](https://github.com/chatbotkit/node-sdk/blob/main/packages/react/src/hooks/useWidgetInstance.js#L53)
