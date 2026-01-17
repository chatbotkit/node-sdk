[**@chatbotkit/sdk**](../../../README.md)

***

[@chatbotkit/sdk](../../../modules.md) / [contact/secret](../README.md) / SecretClient

# Class: SecretClient

Defined in: [contact/secret/index.js:18](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/contact/secret/index.js#L18)

Contact secret client.

## Extends

- [`ChatBotKitClient`](../../../client/classes/ChatBotKitClient.md)

## Constructors

### Constructor

> **new SecretClient**(`options`): `SecretClient`

Defined in: [contact/secret/index.js:22](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/contact/secret/index.js#L22)

#### Parameters

##### options

[`ChatBotKitClientOptions`](../../../client/interfaces/ChatBotKitClientOptions.md)

#### Returns

`SecretClient`

#### Overrides

[`ChatBotKitClient`](../../../client/classes/ChatBotKitClient.md).[`constructor`](../../../client/classes/ChatBotKitClient.md#constructor)

## Methods

### authenticate()

> **authenticate**(`contactId`, `secretId`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<\{ \}\>

Defined in: [contact/secret/index.js:66](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/contact/secret/index.js#L66)

Authenticates the contact secret.

#### Parameters

##### contactId

`string`

##### secretId

`string`

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<\{ \}\>

***

### extend()

> **extend**(`extensionOptions`): `SecretClient`

Defined in: [client.js:382](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/client.js#L382)

Creates a new instance of the same client type with extended options.

This is useful when you need to create a client with modified configuration
(e.g., different endpoint, token, or headers) without affecting the original.

Note: This method creates a completely new instance rather than cloning,
which is necessary because private class fields cannot be copied.

#### Parameters

##### extensionOptions

[`Partial`](https://www.typescriptlang.org/docs/handbook/utility-types.html#partialtype)\<[`ChatBotKitClientOptions`](../../../client/interfaces/ChatBotKitClientOptions.md)\>

Options to merge with current options

#### Returns

`SecretClient`

A new instance of the same client class with extended options

#### Inherited from

[`ChatBotKitClient`](../../../client/classes/ChatBotKitClient.md).[`extend`](../../../client/classes/ChatBotKitClient.md#extend)

***

### list()

> **list**(`contactId`, `request?`): [`ResponsePromise`](../../../client/classes/ResponsePromise.md)\<\{ \}, \{ \}\>

Defined in: [contact/secret/index.js:33](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/contact/secret/index.js#L33)

Retrieves a list of all contact secrets.

#### Parameters

##### contactId

`string`

##### request?

[`SecretListRequest`](../v1/type-aliases/SecretListRequest.md)

#### Returns

[`ResponsePromise`](../../../client/classes/ResponsePromise.md)\<\{ \}, \{ \}\>

***

### revoke()

> **revoke**(`contactId`, `secretId`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<\{ \}\>

Defined in: [contact/secret/index.js:44](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/contact/secret/index.js#L44)

Revokes the contact secret.

#### Parameters

##### contactId

`string`

##### secretId

`string`

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<\{ \}\>

***

### verify()

> **verify**(`contactId`, `secretId`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<\{ \}\>

Defined in: [contact/secret/index.js:55](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/contact/secret/index.js#L55)

Verifies the contact secret.

#### Parameters

##### contactId

`string`

##### secretId

`string`

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<\{ \}\>
