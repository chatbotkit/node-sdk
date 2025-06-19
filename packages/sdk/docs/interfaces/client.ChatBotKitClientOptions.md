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

[client.js:260](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/client.js#L260)

___

### fetchFn

• **fetchFn**: [`FetchFunction`](../modules/client.md#fetchfunction)

An optional fetch implementation function to use instead

#### Defined in

[client.js:269](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/client.js#L269)

___

### headers

• **headers**: [`Record`]( https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type )\<`string`, `string`\>

An optional map of headers to add to the request

#### Defined in

[client.js:264](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/client.js#L264)

___

### host

• **host**: `string`

An optional hostname to use for the API

#### Defined in

[client.js:258](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/client.js#L258)

___

### protocol

• **protocol**: ``"http:"`` \| ``"https:"``

An optional protocol to use for the API

#### Defined in

[client.js:259](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/client.js#L259)

___

### retries

• **retries**: `number`

An optional number of retries for the request

#### Defined in

[client.js:266](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/client.js#L266)

___

### retryDelay

• **retryDelay**: `number`

An optional delay in milliseconds between retries

#### Defined in

[client.js:267](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/client.js#L267)

___

### retryTimeout

• **retryTimeout**: `boolean`

An optional flag to retry on timeout errors

#### Defined in

[client.js:268](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/client.js#L268)

___

### runAsChildUserEmail

• **runAsChildUserEmail**: `string`

An optional child user email to run as (experimental)

#### Defined in

[client.js:262](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/client.js#L262)

___

### runAsUserId

• **runAsUserId**: `string`

An optional user ID to run as

#### Defined in

[client.js:261](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/client.js#L261)

___

### secret

• **secret**: `string`

A token to authenticate with the API

#### Defined in

[client.js:257](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/client.js#L257)

___

### timeout

• **timeout**: `number`

An optional timeout in milliseconds for the request

#### Defined in

[client.js:265](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/client.js#L265)

___

### timezone

• **timezone**: `string`

An optional timezone to use for the API

#### Defined in

[client.js:263](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/client.js#L263)
