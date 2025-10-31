[@chatbotkit/sdk](../README.md) / [Modules](../modules.md) / [client](../modules/client.md) / ChatBotKitClientOptions

# Interface: ChatBotKitClientOptions\<\>

[client](../modules/client.md).ChatBotKitClientOptions

## Table of contents

### Properties

- [endpoints](client.ChatBotKitClientOptions.md#endpoints)
- [fetchFn](client.ChatBotKitClientOptions.md#fetchfn)
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

[client.js:281](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/client.js#L281)

___

### fetchFn

• **fetchFn**: [`FetchFunction`](../modules/client.md#fetchfunction)

An optional fetch implementation function to use instead

#### Defined in

[client.js:290](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/client.js#L290)

___

### headers

• **headers**: [`Record`]( https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type )\<`string`, `string`\>

An optional map of headers to add to the request

#### Defined in

[client.js:285](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/client.js#L285)

___

### host

• **host**: `string`

An optional hostname to use for the API

#### Defined in

[client.js:279](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/client.js#L279)

___

### protocol

• **protocol**: ``"http:"`` \| ``"https:"``

An optional protocol to use for the API

#### Defined in

[client.js:280](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/client.js#L280)

___

### retries

• **retries**: `number`

An optional number of retries for the request

#### Defined in

[client.js:287](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/client.js#L287)

___

### retryDelay

• **retryDelay**: `number`

An optional delay in milliseconds between retries

#### Defined in

[client.js:288](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/client.js#L288)

___

### retryTimeout

• **retryTimeout**: `boolean`

An optional flag to retry on timeout errors

#### Defined in

[client.js:289](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/client.js#L289)

___

### runAsChildUserEmail

• **runAsChildUserEmail**: `string`

An optional child user email to run as (experimental)

#### Defined in

[client.js:283](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/client.js#L283)

___

### runAsUserId

• **runAsUserId**: `string`

An optional user ID to run as

#### Defined in

[client.js:282](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/client.js#L282)

___

### secret

• **secret**: `string`

A token to authenticate with the API

#### Defined in

[client.js:278](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/client.js#L278)

___

### timeout

• **timeout**: `number`

An optional timeout in milliseconds for the request

#### Defined in

[client.js:286](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/client.js#L286)

___

### timezone

• **timezone**: `string`

An optional timezone to use for the API

#### Defined in

[client.js:284](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/client.js#L284)
