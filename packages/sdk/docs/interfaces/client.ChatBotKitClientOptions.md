[@chatbotkit/sdk](../README.md) / [Modules](../modules.md) / [client](../modules/client.md) / ChatBotKitClientOptions

# Interface: ChatBotKitClientOptions\<\>

[client](../modules/client.md).ChatBotKitClientOptions

## Table of contents

### Properties

- [endpoints](client.ChatBotKitClientOptions.md#endpoints)
- [host](client.ChatBotKitClientOptions.md#host)
- [protocol](client.ChatBotKitClientOptions.md#protocol)
- [runAsChildUserEmail](client.ChatBotKitClientOptions.md#runaschilduseremail)
- [runAsUserId](client.ChatBotKitClientOptions.md#runasuserid)
- [secret](client.ChatBotKitClientOptions.md#secret)

## Properties

### endpoints

• **endpoints**: [`Record`]( https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type )\<`string`, `string`\>

An optional map of endpoints to override

#### Defined in

[client.js:206](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/client.js#L206)

___

### host

• **host**: `string`

An optional hostname to use for the API

#### Defined in

[client.js:204](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/client.js#L204)

___

### protocol

• **protocol**: ``"http:"`` \| ``"https:"``

An optional protocol to use for the API

#### Defined in

[client.js:205](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/client.js#L205)

___

### runAsChildUserEmail

• **runAsChildUserEmail**: `string`

An optional child user email to run as (experimental)

#### Defined in

[client.js:208](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/client.js#L208)

___

### runAsUserId

• **runAsUserId**: `string`

An optional user ID to run as

#### Defined in

[client.js:207](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/client.js#L207)

___

### secret

• **secret**: `string`

A token to authenticate with the API

#### Defined in

[client.js:203](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/client.js#L203)
