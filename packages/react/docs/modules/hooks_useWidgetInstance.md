[@chatbotkit/react](../README.md) / [Modules](../modules.md) / hooks/useWidgetInstance

# Module: hooks/useWidgetInstance

## Table of contents

### Type Aliases

- [ChatBotKitWidgetInstance](hooks_useWidgetInstance.md#chatbotkitwidgetinstance)
- [WidgetFunction](hooks_useWidgetInstance.md#widgetfunction)
- [WidgetMessage](hooks_useWidgetInstance.md#widgetmessage)
- [WidgetNotification](hooks_useWidgetInstance.md#widgetnotification)

### Functions

- [useWidgetInstance](hooks_useWidgetInstance.md#usewidgetinstance)

## Type Aliases

### ChatBotKitWidgetInstance

Ƭ **ChatBotKitWidgetInstance**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `functions?` | [`Record`]( https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type )\<`string`, [`WidgetFunction`](hooks_useWidgetInstance.md#widgetfunction)\> \| ``null`` |
| `messages?` | [`WidgetMessage`](hooks_useWidgetInstance.md#widgetmessage)[] \| ``null`` |
| `notifications?` | [`Record`]( https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type )\<`string`, [`WidgetNotification`](hooks_useWidgetInstance.md#widgetnotification)\> \| ``null`` |

#### Defined in

[hooks/useWidgetInstance.js:28](https://github.com/chatbotkit/node-sdk/blob/main/packages/react/src/hooks/useWidgetInstance.js#L28)

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

## Functions

### useWidgetInstance

▸ **useWidgetInstance**(): [`ChatBotKitWidgetInstance`](hooks_useWidgetInstance.md#chatbotkitwidgetinstance)

#### Returns

[`ChatBotKitWidgetInstance`](hooks_useWidgetInstance.md#chatbotkitwidgetinstance)

#### Defined in

[hooks/useWidgetInstance.js:32](https://github.com/chatbotkit/node-sdk/blob/main/packages/react/src/hooks/useWidgetInstance.js#L32)
