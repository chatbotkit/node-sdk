[**@chatbotkit/widget**](../../README.md)

***

[@chatbotkit/widget](../../modules.md) / [v2](../README.md) / ChatBotKitWidgetElementV2

# Interface: ChatBotKitWidgetElementV2

Defined in: [v2.ts:87](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/widget/src/v2.ts#L87)

The ChatBotKit Widget custom element interface (v2).
This interface represents the public API of the chatbotkit-widget custom element.

## Extends

- [`HTMLElement`](https://developer.mozilla.org/docs/Web/API/HTMLElement)

## Properties

### contact

> **contact**: [`Contact`](Contact.md)

Defined in: [v2.ts:98](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/widget/src/v2.ts#L98)

The contact information

***

### functions

> **functions**: [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, [`FunctionDefinition`](FunctionDefinition.md)\>

Defined in: [v2.ts:96](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/widget/src/v2.ts#L96)

The registered engine functions

***

### messages

> **messages**: [`Message`](Message.md)[]

Defined in: [v2.ts:94](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/widget/src/v2.ts#L94)

The current conversation messages

***

### meta

> **meta**: [`Meta`](../type-aliases/Meta.md)

Defined in: [v2.ts:100](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/widget/src/v2.ts#L100)

The session metadata

***

### notifications

> **notifications**: [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, [`NotificationDefinition`](NotificationDefinition.md) \| `null`\>

Defined in: [v2.ts:102](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/widget/src/v2.ts#L102)

The current notifications

***

### open

> **open**: `boolean`

Defined in: [v2.ts:105](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/widget/src/v2.ts#L105)

Whether the widget is open

***

### ready

> `readonly` **ready**: `boolean`

Defined in: [v2.ts:89](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/widget/src/v2.ts#L89)

Whether the widget is ready for interaction

***

### readyPromise

> `readonly` **readyPromise**: [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`boolean`\>

Defined in: [v2.ts:91](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/widget/src/v2.ts#L91)

Promise that resolves when the widget is ready

## Methods

### assignContact()

> **assignContact**(`props`): `void`

Defined in: [v2.ts:133](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/widget/src/v2.ts#L133)

Assigns contact information (legacy method)

#### Parameters

##### props

[`Contact`](Contact.md)

#### Returns

`void`

***

### hide()

> **hide**(): `void`

Defined in: [v2.ts:108](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/widget/src/v2.ts#L108)

Hides the widget

#### Returns

`void`

***

### initiateMessage()

> **initiateMessage**(`props`): `void`

Defined in: [v2.ts:115](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/widget/src/v2.ts#L115)

Initiates a new message

#### Parameters

##### props

[`InitiateMessageOptions`](InitiateMessageOptions.md)

#### Returns

`void`

***

### maximize()

> **maximize**(): `void`

Defined in: [v2.ts:120](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/widget/src/v2.ts#L120)

Maximizes the widget

#### Returns

`void`

***

### minimize()

> **minimize**(): `void`

Defined in: [v2.ts:122](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/widget/src/v2.ts#L122)

Minimizes the widget

#### Returns

`void`

***

### registerFunctions()

> **registerFunctions**(`functions`): `void`

Defined in: [v2.ts:128](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/widget/src/v2.ts#L128)

Registers additional functions

#### Parameters

##### functions

[`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, [`FunctionDefinition`](FunctionDefinition.md) \| `null`\>

#### Returns

`void`

***

### render()

> **render**(`props`): `void`

Defined in: [v2.ts:125](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/widget/src/v2.ts#L125)

Renders custom content

#### Parameters

##### props

[`RenderOptions`](RenderOptions.md)

#### Returns

`void`

***

### restartConversation()

> **restartConversation**(): `void`

Defined in: [v2.ts:113](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/widget/src/v2.ts#L113)

Restarts the conversation

#### Returns

`void`

***

### sendMessage()

> **sendMessage**(`props`): `void`

Defined in: [v2.ts:117](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/widget/src/v2.ts#L117)

Sends a message

#### Parameters

##### props

[`SendMessageOptions`](SendMessageOptions.md)

#### Returns

`void`

***

### show()

> **show**(): `void`

Defined in: [v2.ts:110](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/widget/src/v2.ts#L110)

Shows the widget

#### Returns

`void`

***

### unregisterFunctions()

> **unregisterFunctions**(`functions`): `void`

Defined in: [v2.ts:130](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/widget/src/v2.ts#L130)

Unregisters functions by name

#### Parameters

##### functions

`string`[]

#### Returns

`void`
