[**@chatbotkit/sdk**](../../README.md)

***

[@chatbotkit/sdk](../../modules.md) / [secret](../README.md) / SecretClient

# Class: SecretClient

Defined in: [secret/index.js:22](https://github.com/chatbotkit/cbk-platform/blob/main/sdks/node/packages/sdk/src/secret/index.js#L22)

Secret client.

## Extends

- [`ChatBotKitClient`](../../client/classes/ChatBotKitClient.md)

## Constructors

### Constructor

> **new SecretClient**(`options`): `SecretClient`

Defined in: [secret/index.js:26](https://github.com/chatbotkit/cbk-platform/blob/main/sdks/node/packages/sdk/src/secret/index.js#L26)

#### Parameters

##### options

[`ChatBotKitClientOptions`](../../client/interfaces/ChatBotKitClientOptions.md)

#### Returns

`SecretClient`

#### Overrides

[`ChatBotKitClient`](../../client/classes/ChatBotKitClient.md).[`constructor`](../../client/classes/ChatBotKitClient.md#constructor)

## Methods

### authenticate()

> **authenticate**(`secretId`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<\{ \}\>

Defined in: [secret/index.js:107](https://github.com/chatbotkit/cbk-platform/blob/main/sdks/node/packages/sdk/src/secret/index.js#L107)

Authenticates the secret.

#### Parameters

##### secretId

`string`

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<\{ \}\>

***

### create()

> **create**(`request`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<\{ \}\>

Defined in: [secret/index.js:56](https://github.com/chatbotkit/cbk-platform/blob/main/sdks/node/packages/sdk/src/secret/index.js#L56)

Creates a new secret.

#### Parameters

##### request

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<\{ \}\>

***

### delete()

> **delete**(`secretId`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<\{ \}\>

Defined in: [secret/index.js:77](https://github.com/chatbotkit/cbk-platform/blob/main/sdks/node/packages/sdk/src/secret/index.js#L77)

Deletes the secret.

#### Parameters

##### secretId

`string`

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<\{ \}\>

***

### extend()

> **extend**(`extensionOptions`): `SecretClient`

Defined in: [client.js:382](https://github.com/chatbotkit/cbk-platform/blob/main/sdks/node/packages/sdk/src/client.js#L382)

Creates a new instance of the same client type with extended options.

This is useful when you need to create a client with modified configuration
(e.g., different endpoint, token, or headers) without affecting the original.

Note: This method creates a completely new instance rather than cloning,
which is necessary because private class fields cannot be copied.

#### Parameters

##### extensionOptions

[`Partial`](https://www.typescriptlang.org/docs/handbook/utility-types.html#partialtype)\<[`ChatBotKitClientOptions`](../../client/interfaces/ChatBotKitClientOptions.md)\>

Options to merge with current options

#### Returns

`SecretClient`

A new instance of the same client class with extended options

#### Inherited from

[`ChatBotKitClient`](../../client/classes/ChatBotKitClient.md).[`extend`](../../client/classes/ChatBotKitClient.md#extend)

***

### fetch()

> **fetch**(`secretId`): [`ResponsePromise`](../../client/classes/ResponsePromise.md)\<\{ \}, `never`\>

Defined in: [secret/index.js:46](https://github.com/chatbotkit/cbk-platform/blob/main/sdks/node/packages/sdk/src/secret/index.js#L46)

Fetches a secret.

#### Parameters

##### secretId

`string`

#### Returns

[`ResponsePromise`](../../client/classes/ResponsePromise.md)\<\{ \}, `never`\>

***

### list()

> **list**(`request?`): [`ResponsePromise`](../../client/classes/ResponsePromise.md)\<\{ \}, \{ \}\>

Defined in: [secret/index.js:36](https://github.com/chatbotkit/cbk-platform/blob/main/sdks/node/packages/sdk/src/secret/index.js#L36)

Retrieves a list of all secrets.

#### Parameters

##### request?

[`SecretListRequest`](../v1/type-aliases/SecretListRequest.md)

#### Returns

[`ResponsePromise`](../../client/classes/ResponsePromise.md)\<\{ \}, \{ \}\>

***

### revoke()

> **revoke**(`secretId`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<\{ \}\>

Defined in: [secret/index.js:87](https://github.com/chatbotkit/cbk-platform/blob/main/sdks/node/packages/sdk/src/secret/index.js#L87)

Revokes a secret.

#### Parameters

##### secretId

`string`

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<\{ \}\>

***

### update()

> **update**(`secretId`, `request`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<\{ \}\>

Defined in: [secret/index.js:67](https://github.com/chatbotkit/cbk-platform/blob/main/sdks/node/packages/sdk/src/secret/index.js#L67)

Updates a secret.

#### Parameters

##### secretId

`string`

##### request

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<\{ \}\>

***

### verify()

> **verify**(`secretId`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<\{ \}\>

Defined in: [secret/index.js:97](https://github.com/chatbotkit/cbk-platform/blob/main/sdks/node/packages/sdk/src/secret/index.js#L97)

Verifies the secret.

#### Parameters

##### secretId

`string`

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<\{ \}\>
