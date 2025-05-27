[@chatbotkit/sdk](../README.md) / [Modules](../modules.md) / [client](../modules/client.md) / ChatBotKitClientOptions

# Interface: ChatBotKitClientOptions\<\>

[client](../modules/client.md).ChatBotKitClientOptions

## Table of contents

### Properties

- [endpoints](client.ChatBotKitClientOptions.md#endpoints)
- [headers](client.ChatBotKitClientOptions.md#headers)
- [host](client.ChatBotKitClientOptions.md#host)
- [protocol](client.ChatBotKitClientOptions.md#protocol)
- [retries](client.ChatBotKitClientOptions.md#retries)
- [retryDelay](client.ChatBotKitClientOptions.md#retrydelay)
- [retryTimeout](client.ChatBotKitClientOptions.md#retrytimeout)
- [runAsChildUserEmail](client.ChatBotKitClientOptions.md#runaschilduseremail)
- [runAsUserId](client.ChatBotKitClientOptions.md#runasuserid)
- [secret](client.ChatBotKitClientOptions.md#secret)
- [timeout](client.ChatBotKitClientOptions.md#timeout)
- [timezone](client.ChatBotKitClientOptions.md#timezone)

## Properties

### endpoints

• **endpoints**: [`Record`]( https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type )\<`string`, `string`\>

An optional map of endpoints to override

#### Defined in

[client.js:242](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/client.js#L242)

___

### headers

• **headers**: [`Record`]( https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type )\<`string`, `string`\>

An optional map of headers to add to the request

#### Defined in

[client.js:246](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/client.js#L246)

___

### host

• **host**: `string`

An optional hostname to use for the API

#### Defined in

[client.js:240](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/client.js#L240)

___

### protocol

• **protocol**: ``"http:"`` \| ``"https:"``

An optional protocol to use for the API

#### Defined in

[client.js:241](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/client.js#L241)

___

### retries

• **retries**: `number`

An optional number of retries for the request

#### Defined in

[client.js:248](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/client.js#L248)

___

### retryDelay

• **retryDelay**: `number`

An optional delay in milliseconds between retries

#### Defined in

[client.js:249](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/client.js#L249)

___

### retryTimeout

• **retryTimeout**: `boolean`

An optional flag to retry on timeout errors

#### Defined in

[client.js:250](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/client.js#L250)

___

### runAsChildUserEmail

• **runAsChildUserEmail**: `string`

An optional child user email to run as (experimental)

#### Defined in

[client.js:244](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/client.js#L244)

___

### runAsUserId

• **runAsUserId**: `string`

An optional user ID to run as

#### Defined in

[client.js:243](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/client.js#L243)

___

### secret

• **secret**: `string`

A token to authenticate with the API

#### Defined in

[client.js:239](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/client.js#L239)

___

### timeout

• **timeout**: `number`

An optional timeout in milliseconds for the request

#### Defined in

[client.js:247](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/client.js#L247)

___

### timezone

• **timezone**: `string`

An optional timezone to use for the API

#### Defined in

[client.js:245](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/client.js#L245)
