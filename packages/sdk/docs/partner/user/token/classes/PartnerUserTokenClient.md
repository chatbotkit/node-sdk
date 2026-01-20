[**@chatbotkit/sdk**](../../../../README.md)

***

[@chatbotkit/sdk](../../../../modules.md) / [partner/user/token](../README.md) / PartnerUserTokenClient

# Class: PartnerUserTokenClient

Defined in: [partner/user/token/index.js:17](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/sdk/src/partner/user/token/index.js#L17)

Partner user token client.

## Extends

- [`ChatBotKitClient`](../../../../client/classes/ChatBotKitClient.md)

## Constructors

### Constructor

> **new PartnerUserTokenClient**(`options`): `PartnerUserTokenClient`

Defined in: [partner/user/token/index.js:21](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/sdk/src/partner/user/token/index.js#L21)

#### Parameters

##### options

[`ChatBotKitClientOptions`](../../../../client/interfaces/ChatBotKitClientOptions.md)

#### Returns

`PartnerUserTokenClient`

#### Overrides

[`ChatBotKitClient`](../../../../client/classes/ChatBotKitClient.md).[`constructor`](../../../../client/classes/ChatBotKitClient.md#constructor)

## Methods

### create()

> **create**(`userId`, `request`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<\{ \}\>

Defined in: [partner/user/token/index.js:43](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/sdk/src/partner/user/token/index.js#L43)

Creates a new user token.

#### Parameters

##### userId

`string`

##### request

[`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `never`\>

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<\{ \}\>

***

### delete()

> **delete**(`userId`, `tokenId`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<\{ \}\>

Defined in: [partner/user/token/index.js:54](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/sdk/src/partner/user/token/index.js#L54)

Deletes the user token.

#### Parameters

##### userId

`string`

##### tokenId

`string`

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<\{ \}\>

***

### extend()

> **extend**(`extensionOptions`): `PartnerUserTokenClient`

Defined in: [client.js:382](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/sdk/src/client.js#L382)

Creates a new instance of the same client type with extended options.

This is useful when you need to create a client with modified configuration
(e.g., different endpoint, token, or headers) without affecting the original.

Note: This method creates a completely new instance rather than cloning,
which is necessary because private class fields cannot be copied.

#### Parameters

##### extensionOptions

[`Partial`](https://www.typescriptlang.org/docs/handbook/utility-types.html#partialtype)\<[`ChatBotKitClientOptions`](../../../../client/interfaces/ChatBotKitClientOptions.md)\>

Options to merge with current options

#### Returns

`PartnerUserTokenClient`

A new instance of the same client class with extended options

#### Inherited from

[`ChatBotKitClient`](../../../../client/classes/ChatBotKitClient.md).[`extend`](../../../../client/classes/ChatBotKitClient.md#extend)

***

### list()

> **list**(`userId`, `request?`): [`ResponsePromise`](../../../../client/classes/ResponsePromise.md)\<\{ \}, \{ \}\>

Defined in: [partner/user/token/index.js:32](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/sdk/src/partner/user/token/index.js#L32)

Retrieves a list of all user tokens.

#### Parameters

##### userId

`string`

##### request?

[`PartnerUserTokenListRequest`](../v1/type-aliases/PartnerUserTokenListRequest.md)

#### Returns

[`ResponsePromise`](../../../../client/classes/ResponsePromise.md)\<\{ \}, \{ \}\>
