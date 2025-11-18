[@chatbotkit/sdk](../README.md) / [Modules](../modules.md) / [partner](../modules/partner.md) / PartnerClient

# Class: PartnerClient

[partner](../modules/partner.md).PartnerClient

Partner client.

## Hierarchy

- [`ChatBotKitClient`](client.ChatBotKitClient.md)

  ↳ **`PartnerClient`**

## Table of contents

### Constructors

- [constructor](partner.PartnerClient.md#constructor)

### Properties

- [user](partner.PartnerClient.md#user)

### Methods

- [extend](partner.PartnerClient.md#extend)

## Constructors

### constructor

• **new PartnerClient**(`options`): [`PartnerClient`](partner.PartnerClient.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`ChatBotKitClientOptions`](../interfaces/client.ChatBotKitClientOptions.md) |

#### Returns

[`PartnerClient`](partner.PartnerClient.md)

#### Overrides

[ChatBotKitClient](client.ChatBotKitClient.md).[constructor](client.ChatBotKitClient.md#constructor)

#### Defined in

[partner/index.js:11](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/partner/index.js#L11)

## Properties

### user

• **user**: [`PartnerUserClient`](partner_user.PartnerUserClient.md)

#### Defined in

[partner/index.js:17](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/partner/index.js#L17)

## Methods

### extend

▸ **extend**(`extensionOptions`): [`PartnerClient`](partner.PartnerClient.md)

Creates a new instance of the same client type with extended options.

This is useful when you need to create a client with modified configuration
(e.g., different endpoint, token, or headers) without affecting the original.

Note: This method creates a completely new instance rather than cloning,
which is necessary because private class fields cannot be copied.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `extensionOptions` | [`Partial`]( https://www.typescriptlang.org/docs/handbook/utility-types.html#partialtype )\<[`ChatBotKitClientOptions`](../interfaces/client.ChatBotKitClientOptions.md)\> | Options to merge with current options |

#### Returns

[`PartnerClient`](partner.PartnerClient.md)

A new instance of the same client class with extended options

#### Inherited from

[ChatBotKitClient](client.ChatBotKitClient.md).[extend](client.ChatBotKitClient.md#extend)

#### Defined in

[client.js:382](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/client.js#L382)
