[@chatbotkit/sdk](../README.md) / [Modules](../modules.md) / [partner/user](../modules/partner_user.md) / PartnerUserClient

# Class: PartnerUserClient

[partner/user](../modules/partner_user.md).PartnerUserClient

Partner user client.

## Hierarchy

- [`ChatBotKitClient`](client.ChatBotKitClient.md)

  ↳ **`PartnerUserClient`**

## Table of contents

### Constructors

- [constructor](partner_user.PartnerUserClient.md#constructor)

### Properties

- [token](partner_user.PartnerUserClient.md#token)

### Methods

- [create](partner_user.PartnerUserClient.md#create)
- [delete](partner_user.PartnerUserClient.md#delete)
- [extend](partner_user.PartnerUserClient.md#extend)
- [fetch](partner_user.PartnerUserClient.md#fetch)
- [list](partner_user.PartnerUserClient.md#list)
- [update](partner_user.PartnerUserClient.md#update)

## Constructors

### constructor

• **new PartnerUserClient**(`options`): [`PartnerUserClient`](partner_user.PartnerUserClient.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`ChatBotKitClientOptions`](../interfaces/client.ChatBotKitClientOptions.md) |

#### Returns

[`PartnerUserClient`](partner_user.PartnerUserClient.md)

#### Overrides

[ChatBotKitClient](client.ChatBotKitClient.md).[constructor](client.ChatBotKitClient.md#constructor)

#### Defined in

[partner/user/index.js:24](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/partner/user/index.js#L24)

## Properties

### token

• **token**: [`PartnerUserTokenClient`](partner_user_token.PartnerUserTokenClient.md)

#### Defined in

[partner/user/index.js:30](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/partner/user/index.js#L30)

## Methods

### create

▸ **create**(`request`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<{}\>

Creates a new user.

#### Parameters

| Name | Type |
| :------ | :------ |
| `request` | `Object` |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<{}\>

#### Defined in

[partner/user/index.js:59](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/partner/user/index.js#L59)

___

### delete

▸ **delete**(`userId`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<{}\>

Deletes the user.

#### Parameters

| Name | Type |
| :------ | :------ |
| `userId` | `string` |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<{}\>

#### Defined in

[partner/user/index.js:80](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/partner/user/index.js#L80)

___

### extend

▸ **extend**(`extensionOptions`): [`PartnerUserClient`](partner_user.PartnerUserClient.md)

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

[`PartnerUserClient`](partner_user.PartnerUserClient.md)

A new instance of the same client class with extended options

#### Inherited from

[ChatBotKitClient](client.ChatBotKitClient.md).[extend](client.ChatBotKitClient.md#extend)

#### Defined in

[client.js:382](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/client.js#L382)

___

### fetch

▸ **fetch**(`userId`): [`ResponsePromise`](client.ResponsePromise.md)\<{}, `never`\>

Fetches a user.

#### Parameters

| Name | Type |
| :------ | :------ |
| `userId` | `string` |

#### Returns

[`ResponsePromise`](client.ResponsePromise.md)\<{}, `never`\>

#### Defined in

[partner/user/index.js:49](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/partner/user/index.js#L49)

___

### list

▸ **list**(`request?`): [`ResponsePromise`](client.ResponsePromise.md)\<{}, {}\>

Retrieves a list of all users.

#### Parameters

| Name | Type |
| :------ | :------ |
| `request?` | [`PartnerUserListRequest`](../modules/partner_user_v1.md#partneruserlistrequest) |

#### Returns

[`ResponsePromise`](client.ResponsePromise.md)\<{}, {}\>

#### Defined in

[partner/user/index.js:39](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/partner/user/index.js#L39)

___

### update

▸ **update**(`userId`, `request`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<{}\>

Updates the user.

#### Parameters

| Name | Type |
| :------ | :------ |
| `userId` | `string` |
| `request` | `Object` |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<{}\>

#### Defined in

[partner/user/index.js:70](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/partner/user/index.js#L70)
