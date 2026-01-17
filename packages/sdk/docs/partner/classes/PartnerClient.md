[**@chatbotkit/sdk**](../../README.md)

***

[@chatbotkit/sdk](../../modules.md) / [partner](../README.md) / PartnerClient

# Class: PartnerClient

Defined in: [partner/index.js:7](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/partner/index.js#L7)

Partner client.

## Extends

- [`ChatBotKitClient`](../../client/classes/ChatBotKitClient.md)

## Constructors

### Constructor

> **new PartnerClient**(`options`): `PartnerClient`

Defined in: [partner/index.js:11](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/partner/index.js#L11)

#### Parameters

##### options

[`ChatBotKitClientOptions`](../../client/interfaces/ChatBotKitClientOptions.md)

#### Returns

`PartnerClient`

#### Overrides

[`ChatBotKitClient`](../../client/classes/ChatBotKitClient.md).[`constructor`](../../client/classes/ChatBotKitClient.md#constructor)

## Properties

### user

> **user**: [`PartnerUserClient`](../user/classes/PartnerUserClient.md)

Defined in: [partner/index.js:17](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/partner/index.js#L17)

## Methods

### extend()

> **extend**(`extensionOptions`): `PartnerClient`

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

`PartnerClient`

A new instance of the same client class with extended options

#### Inherited from

[`ChatBotKitClient`](../../client/classes/ChatBotKitClient.md).[`extend`](../../client/classes/ChatBotKitClient.md#extend)
