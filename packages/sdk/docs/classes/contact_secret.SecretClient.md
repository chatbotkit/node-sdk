[@chatbotkit/sdk](../README.md) / [Modules](../modules.md) / [contact/secret](../modules/contact_secret.md) / SecretClient

# Class: SecretClient

[contact/secret](../modules/contact_secret.md).SecretClient

Contact secret client.

## Hierarchy

- [`ChatBotKitClient`](client.ChatBotKitClient.md)

  ↳ **`SecretClient`**

## Table of contents

### Constructors

- [constructor](contact_secret.SecretClient.md#constructor)

### Methods

- [authenticate](contact_secret.SecretClient.md#authenticate)
- [extend](contact_secret.SecretClient.md#extend)
- [list](contact_secret.SecretClient.md#list)
- [revoke](contact_secret.SecretClient.md#revoke)
- [verify](contact_secret.SecretClient.md#verify)

## Constructors

### constructor

• **new SecretClient**(`options`): [`SecretClient`](contact_secret.SecretClient.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`ChatBotKitClientOptions`](../interfaces/client.ChatBotKitClientOptions.md) |

#### Returns

[`SecretClient`](contact_secret.SecretClient.md)

#### Overrides

[ChatBotKitClient](client.ChatBotKitClient.md).[constructor](client.ChatBotKitClient.md#constructor)

#### Defined in

[contact/secret/index.js:22](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/contact/secret/index.js#L22)

## Methods

### authenticate

▸ **authenticate**(`contactId`, `secretId`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<{}\>

Authenticates the contact secret.

#### Parameters

| Name | Type |
| :------ | :------ |
| `contactId` | `string` |
| `secretId` | `string` |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<{}\>

#### Defined in

[contact/secret/index.js:66](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/contact/secret/index.js#L66)

___

### extend

▸ **extend**(`extensionOptions`): [`SecretClient`](contact_secret.SecretClient.md)

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

[`SecretClient`](contact_secret.SecretClient.md)

A new instance of the same client class with extended options

#### Inherited from

[ChatBotKitClient](client.ChatBotKitClient.md).[extend](client.ChatBotKitClient.md#extend)

#### Defined in

[client.js:382](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/client.js#L382)

___

### list

▸ **list**(`contactId`, `request?`): [`ResponsePromise`](client.ResponsePromise.md)\<{}, {}\>

Retrieves a list of all contact secrets.

#### Parameters

| Name | Type |
| :------ | :------ |
| `contactId` | `string` |
| `request?` | [`SecretListRequest`](../modules/contact_secret_v1.md#secretlistrequest) |

#### Returns

[`ResponsePromise`](client.ResponsePromise.md)\<{}, {}\>

#### Defined in

[contact/secret/index.js:33](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/contact/secret/index.js#L33)

___

### revoke

▸ **revoke**(`contactId`, `secretId`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<{}\>

Revokes the contact secret.

#### Parameters

| Name | Type |
| :------ | :------ |
| `contactId` | `string` |
| `secretId` | `string` |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<{}\>

#### Defined in

[contact/secret/index.js:44](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/contact/secret/index.js#L44)

___

### verify

▸ **verify**(`contactId`, `secretId`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<{}\>

Verifies the contact secret.

#### Parameters

| Name | Type |
| :------ | :------ |
| `contactId` | `string` |
| `secretId` | `string` |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<{}\>

#### Defined in

[contact/secret/index.js:55](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/contact/secret/index.js#L55)
