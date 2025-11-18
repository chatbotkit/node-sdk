[**@chatbotkit/sdk**](../../README.md)

***

[@chatbotkit/sdk](../../modules.md) / [policy](../README.md) / PolicyClient

# Class: PolicyClient

Defined in: [policy/index.js:19](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/policy/index.js#L19)

Policy client.

## Extends

- [`ChatBotKitClient`](../../client/classes/ChatBotKitClient.md)

## Constructors

### Constructor

> **new PolicyClient**(`options`): `PolicyClient`

Defined in: [policy/index.js:23](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/policy/index.js#L23)

#### Parameters

##### options

[`ChatBotKitClientOptions`](../../client/interfaces/ChatBotKitClientOptions.md)

#### Returns

`PolicyClient`

#### Overrides

[`ChatBotKitClient`](../../client/classes/ChatBotKitClient.md).[`constructor`](../../client/classes/ChatBotKitClient.md#constructor)

## Methods

### create()

> **create**(`request`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<\{ \}\>

Defined in: [policy/index.js:53](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/policy/index.js#L53)

Creates a new policy.

#### Parameters

##### request

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<\{ \}\>

***

### delete()

> **delete**(`policyId`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<\{ \}\>

Defined in: [policy/index.js:74](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/policy/index.js#L74)

Deletes the policy.

#### Parameters

##### policyId

`string`

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<\{ \}\>

***

### extend()

> **extend**(`extensionOptions`): `PolicyClient`

Defined in: [client.js:382](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/client.js#L382)

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

`PolicyClient`

A new instance of the same client class with extended options

#### Inherited from

[`ChatBotKitClient`](../../client/classes/ChatBotKitClient.md).[`extend`](../../client/classes/ChatBotKitClient.md#extend)

***

### fetch()

> **fetch**(`policyId`): [`ResponsePromise`](../../client/classes/ResponsePromise.md)\<\{ \}, `never`\>

Defined in: [policy/index.js:43](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/policy/index.js#L43)

Fetches a policy.

#### Parameters

##### policyId

`string`

#### Returns

[`ResponsePromise`](../../client/classes/ResponsePromise.md)\<\{ \}, `never`\>

***

### list()

> **list**(`request?`): [`ResponsePromise`](../../client/classes/ResponsePromise.md)\<\{ \}, \{ \}\>

Defined in: [policy/index.js:33](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/policy/index.js#L33)

Retrieves a list of all policies.

#### Parameters

##### request?

[`PolicyListRequest`](../v1/type-aliases/PolicyListRequest.md)

#### Returns

[`ResponsePromise`](../../client/classes/ResponsePromise.md)\<\{ \}, \{ \}\>

***

### update()

> **update**(`policyId`, `request`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<\{ \}\>

Defined in: [policy/index.js:64](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/policy/index.js#L64)

Updates a policy.

#### Parameters

##### policyId

`string`

##### request

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<\{ \}\>
