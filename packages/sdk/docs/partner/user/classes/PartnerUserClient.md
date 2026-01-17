[**@chatbotkit/sdk**](../../../README.md)

***

[@chatbotkit/sdk](../../../modules.md) / [partner/user](../README.md) / PartnerUserClient

# Class: PartnerUserClient

Defined in: [partner/user/index.js:20](https://github.com/chatbotkit/cbk-platform/blob/main/sdks/node/packages/sdk/src/partner/user/index.js#L20)

Partner user client.

## Extends

- [`ChatBotKitClient`](../../../client/classes/ChatBotKitClient.md)

## Constructors

### Constructor

> **new PartnerUserClient**(`options`): `PartnerUserClient`

Defined in: [partner/user/index.js:24](https://github.com/chatbotkit/cbk-platform/blob/main/sdks/node/packages/sdk/src/partner/user/index.js#L24)

#### Parameters

##### options

[`ChatBotKitClientOptions`](../../../client/interfaces/ChatBotKitClientOptions.md)

#### Returns

`PartnerUserClient`

#### Overrides

[`ChatBotKitClient`](../../../client/classes/ChatBotKitClient.md).[`constructor`](../../../client/classes/ChatBotKitClient.md#constructor)

## Properties

### token

> **token**: [`PartnerUserTokenClient`](../token/classes/PartnerUserTokenClient.md)

Defined in: [partner/user/index.js:30](https://github.com/chatbotkit/cbk-platform/blob/main/sdks/node/packages/sdk/src/partner/user/index.js#L30)

## Methods

### create()

> **create**(`request`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<\{ \}\>

Defined in: [partner/user/index.js:59](https://github.com/chatbotkit/cbk-platform/blob/main/sdks/node/packages/sdk/src/partner/user/index.js#L59)

Creates a new user.

#### Parameters

##### request

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<\{ \}\>

***

### delete()

> **delete**(`userId`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<\{ \}\>

Defined in: [partner/user/index.js:80](https://github.com/chatbotkit/cbk-platform/blob/main/sdks/node/packages/sdk/src/partner/user/index.js#L80)

Deletes the user.

#### Parameters

##### userId

`string`

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<\{ \}\>

***

### extend()

> **extend**(`extensionOptions`): `PartnerUserClient`

Defined in: [client.js:382](https://github.com/chatbotkit/cbk-platform/blob/main/sdks/node/packages/sdk/src/client.js#L382)

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

`PartnerUserClient`

A new instance of the same client class with extended options

#### Inherited from

[`ChatBotKitClient`](../../../client/classes/ChatBotKitClient.md).[`extend`](../../../client/classes/ChatBotKitClient.md#extend)

***

### fetch()

> **fetch**(`userId`): [`ResponsePromise`](../../../client/classes/ResponsePromise.md)\<\{ \}, `never`\>

Defined in: [partner/user/index.js:49](https://github.com/chatbotkit/cbk-platform/blob/main/sdks/node/packages/sdk/src/partner/user/index.js#L49)

Fetches a user.

#### Parameters

##### userId

`string`

#### Returns

[`ResponsePromise`](../../../client/classes/ResponsePromise.md)\<\{ \}, `never`\>

***

### list()

> **list**(`request?`): [`ResponsePromise`](../../../client/classes/ResponsePromise.md)\<\{ \}, \{ \}\>

Defined in: [partner/user/index.js:39](https://github.com/chatbotkit/cbk-platform/blob/main/sdks/node/packages/sdk/src/partner/user/index.js#L39)

Retrieves a list of all users.

#### Parameters

##### request?

[`PartnerUserListRequest`](../v1/type-aliases/PartnerUserListRequest.md)

#### Returns

[`ResponsePromise`](../../../client/classes/ResponsePromise.md)\<\{ \}, \{ \}\>

***

### update()

> **update**(`userId`, `request`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<\{ \}\>

Defined in: [partner/user/index.js:70](https://github.com/chatbotkit/cbk-platform/blob/main/sdks/node/packages/sdk/src/partner/user/index.js#L70)

Updates the user.

#### Parameters

##### userId

`string`

##### request

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<\{ \}\>
