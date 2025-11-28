[**@chatbotkit/widget**](../../README.md)

***

[@chatbotkit/widget](../../modules.md) / [v2](../README.md) / ChatBotKitWidgetElementV2

# Interface: ChatBotKitWidgetElementV2

Defined in: [v2.ts:83](https://github.com/chatbotkit/node-sdk/blob/main/packages/widget/src/v2.ts#L83)

The ChatBotKit Widget custom element interface (v2).
This interface represents the public API of the chatbotkit-widget custom element.

## Extends

- [`HTMLElement`](https://developer.mozilla.org/docs/Web/API/HTMLElement)

## Properties

### contact

> **contact**: [`Contact`](Contact.md)

Defined in: [v2.ts:94](https://github.com/chatbotkit/node-sdk/blob/main/packages/widget/src/v2.ts#L94)

The contact information

***

### functions

> **functions**: [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, [`FunctionDefinition`](FunctionDefinition.md)\>

Defined in: [v2.ts:92](https://github.com/chatbotkit/node-sdk/blob/main/packages/widget/src/v2.ts#L92)

The registered engine functions

***

### messages

> **messages**: [`Message`](Message.md)[]

Defined in: [v2.ts:90](https://github.com/chatbotkit/node-sdk/blob/main/packages/widget/src/v2.ts#L90)

The current conversation messages

***

### meta

> **meta**: [`Meta`](../type-aliases/Meta.md)

Defined in: [v2.ts:96](https://github.com/chatbotkit/node-sdk/blob/main/packages/widget/src/v2.ts#L96)

The session metadata

***

### notifications

> **notifications**: [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, [`NotificationDefinition`](NotificationDefinition.md) \| `null`\>

Defined in: [v2.ts:98](https://github.com/chatbotkit/node-sdk/blob/main/packages/widget/src/v2.ts#L98)

The current notifications

***

### open

> **open**: `boolean`

Defined in: [v2.ts:101](https://github.com/chatbotkit/node-sdk/blob/main/packages/widget/src/v2.ts#L101)

Whether the widget is open

***

### ready

> `readonly` **ready**: `boolean`

Defined in: [v2.ts:85](https://github.com/chatbotkit/node-sdk/blob/main/packages/widget/src/v2.ts#L85)

Whether the widget is ready for interaction

***

### readyPromise

> `readonly` **readyPromise**: [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`boolean`\>

Defined in: [v2.ts:87](https://github.com/chatbotkit/node-sdk/blob/main/packages/widget/src/v2.ts#L87)

Promise that resolves when the widget is ready

## Methods

### assignContact()

> **assignContact**(`props`): `void`

Defined in: [v2.ts:129](https://github.com/chatbotkit/node-sdk/blob/main/packages/widget/src/v2.ts#L129)

Assigns contact information (legacy method)

#### Parameters

##### props

[`Contact`](Contact.md)

#### Returns

`void`

***

### hide()

> **hide**(): `void`

Defined in: [v2.ts:104](https://github.com/chatbotkit/node-sdk/blob/main/packages/widget/src/v2.ts#L104)

Hides the widget

#### Returns

`void`

***

### initiateMessage()

> **initiateMessage**(`props`): `void`

Defined in: [v2.ts:111](https://github.com/chatbotkit/node-sdk/blob/main/packages/widget/src/v2.ts#L111)

Initiates a new message

#### Parameters

##### props

[`InitiateMessageOptions`](InitiateMessageOptions.md)

#### Returns

`void`

***

### maximize()

> **maximize**(): `void`

Defined in: [v2.ts:116](https://github.com/chatbotkit/node-sdk/blob/main/packages/widget/src/v2.ts#L116)

Maximizes the widget

#### Returns

`void`

***

### minimize()

> **minimize**(): `void`

Defined in: [v2.ts:118](https://github.com/chatbotkit/node-sdk/blob/main/packages/widget/src/v2.ts#L118)

Minimizes the widget

#### Returns

`void`

***

### registerFunctions()

> **registerFunctions**(`functions`): `void`

Defined in: [v2.ts:124](https://github.com/chatbotkit/node-sdk/blob/main/packages/widget/src/v2.ts#L124)

Registers additional functions

#### Parameters

##### functions

[`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, [`FunctionDefinition`](FunctionDefinition.md) \| `null`\>

#### Returns

`void`

***

### render()

> **render**(`props`): `void`

Defined in: [v2.ts:121](https://github.com/chatbotkit/node-sdk/blob/main/packages/widget/src/v2.ts#L121)

Renders custom content

#### Parameters

##### props

[`RenderOptions`](RenderOptions.md)

#### Returns

`void`

***

### restartConversation()

> **restartConversation**(): `void`

Defined in: [v2.ts:109](https://github.com/chatbotkit/node-sdk/blob/main/packages/widget/src/v2.ts#L109)

Restarts the conversation

#### Returns

`void`

***

### sendMessage()

> **sendMessage**(`props`): `void`

Defined in: [v2.ts:113](https://github.com/chatbotkit/node-sdk/blob/main/packages/widget/src/v2.ts#L113)

Sends a message

#### Parameters

##### props

[`SendMessageOptions`](SendMessageOptions.md)

#### Returns

`void`

***

### show()

> **show**(): `void`

Defined in: [v2.ts:106](https://github.com/chatbotkit/node-sdk/blob/main/packages/widget/src/v2.ts#L106)

Shows the widget

#### Returns

`void`

***

### unregisterFunctions()

> **unregisterFunctions**(`functions`): `void`

Defined in: [v2.ts:126](https://github.com/chatbotkit/node-sdk/blob/main/packages/widget/src/v2.ts#L126)

Unregisters functions by name

#### Parameters

##### functions

`string`[]

#### Returns

`void`
