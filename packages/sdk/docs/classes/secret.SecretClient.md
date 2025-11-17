[@chatbotkit/sdk](../README.md) / [Modules](../modules.md) / [secret](../modules/secret.md) / SecretClient

# Class: SecretClient

[secret](../modules/secret.md).SecretClient

Secret client.

## Hierarchy

- [`ChatBotKitClient`](client.ChatBotKitClient.md)

  ↳ **`SecretClient`**

## Table of contents

### Constructors

- [constructor](secret.SecretClient.md#constructor)

### Methods

- [authenticate](secret.SecretClient.md#authenticate)
- [clientFetch](secret.SecretClient.md#clientfetch)
- [create](secret.SecretClient.md#create)
- [delete](secret.SecretClient.md#delete)
- [extend](secret.SecretClient.md#extend)
- [fetch](secret.SecretClient.md#fetch)
- [list](secret.SecretClient.md#list)
- [revoke](secret.SecretClient.md#revoke)
- [update](secret.SecretClient.md#update)
- [verify](secret.SecretClient.md#verify)

## Constructors

### constructor

• **new SecretClient**(`options`): [`SecretClient`](secret.SecretClient.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`ChatBotKitClientOptions`](../interfaces/client.ChatBotKitClientOptions.md) |

#### Returns

[`SecretClient`](secret.SecretClient.md)

#### Overrides

[ChatBotKitClient](client.ChatBotKitClient.md).[constructor](client.ChatBotKitClient.md#constructor)

#### Defined in

[secret/index.js:26](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/secret/index.js#L26)

## Methods

### authenticate

▸ **authenticate**(`secretId`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<{}\>

Authenticates the secret.

#### Parameters

| Name | Type |
| :------ | :------ |
| `secretId` | `string` |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<{}\>

#### Defined in

[secret/index.js:107](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/secret/index.js#L107)

___

### clientFetch

▸ **clientFetch**\<`T`, `U`\>(`path`, `options?`): [`ResponsePromise`](client.ResponsePromise.md)\<`T`, `U`\>

#### Type parameters

| Name |
| :------ |
| `T` |
| `U` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | `string` |
| `options?` | `Object` |
| `options.buffer?` | [`ArrayBuffer`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer ) |
| `options.endpoint?` | `string` |
| `options.external?` | `boolean` |
| `options.fetchFn?` | [`FetchFunction`](../modules/client.md#fetchfunction) |
| `options.file?` | `Object` |
| `options.file.data` | `string` \| [`ArrayBuffer`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer ) |
| `options.file.name?` | `string` |
| `options.file.type?` | `string` |
| `options.headers?` | [`Record`]( https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type )\<`string`, `any`\> |
| `options.method?` | `string` |
| `options.query?` | [`Record`]( https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type )\<`string`, `any`\> |
| `options.record?` | [`Record`]( https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type )\<`string`, `any`\> |
| `options.retries?` | `number` |
| `options.retryDelay?` | `number` |
| `options.retryTimeout?` | `boolean` |
| `options.timeout?` | `number` |

#### Returns

[`ResponsePromise`](client.ResponsePromise.md)\<`T`, `U`\>

#### Inherited from

[ChatBotKitClient](client.ChatBotKitClient.md).[clientFetch](client.ChatBotKitClient.md#clientfetch)

#### Defined in

[client.js:449](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/client.js#L449)

___

### create

▸ **create**(`request`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<{}\>

Creates a new secret.

#### Parameters

| Name | Type |
| :------ | :------ |
| `request` | `Object` |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<{}\>

#### Defined in

[secret/index.js:56](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/secret/index.js#L56)

___

### delete

▸ **delete**(`secretId`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<{}\>

Deletes the secret.

#### Parameters

| Name | Type |
| :------ | :------ |
| `secretId` | `string` |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<{}\>

#### Defined in

[secret/index.js:77](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/secret/index.js#L77)

___

### extend

▸ **extend**(`extensionOptions`): [`SecretClient`](secret.SecretClient.md)

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

[`SecretClient`](secret.SecretClient.md)

A new instance of the same client class with extended options

#### Inherited from

[ChatBotKitClient](client.ChatBotKitClient.md).[extend](client.ChatBotKitClient.md#extend)

#### Defined in

[client.js:382](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/client.js#L382)

___

### fetch

▸ **fetch**(`secretId`): [`ResponsePromise`](client.ResponsePromise.md)\<{}, `never`\>

Fetches a secret.

#### Parameters

| Name | Type |
| :------ | :------ |
| `secretId` | `string` |

#### Returns

[`ResponsePromise`](client.ResponsePromise.md)\<{}, `never`\>

#### Defined in

[secret/index.js:46](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/secret/index.js#L46)

___

### list

▸ **list**(`request?`): [`ResponsePromise`](client.ResponsePromise.md)\<{}, {}\>

Retrieves a list of all secrets.

#### Parameters

| Name | Type |
| :------ | :------ |
| `request?` | [`SecretListRequest`](../modules/secret_v1.md#secretlistrequest) |

#### Returns

[`ResponsePromise`](client.ResponsePromise.md)\<{}, {}\>

#### Defined in

[secret/index.js:36](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/secret/index.js#L36)

___

### revoke

▸ **revoke**(`secretId`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<{}\>

Revokes a secret.

#### Parameters

| Name | Type |
| :------ | :------ |
| `secretId` | `string` |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<{}\>

#### Defined in

[secret/index.js:87](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/secret/index.js#L87)

___

### update

▸ **update**(`secretId`, `request`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<{}\>

Updates a secret.

#### Parameters

| Name | Type |
| :------ | :------ |
| `secretId` | `string` |
| `request` | `Object` |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<{}\>

#### Defined in

[secret/index.js:67](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/secret/index.js#L67)

___

### verify

▸ **verify**(`secretId`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<{}\>

Verifies the secret.

#### Parameters

| Name | Type |
| :------ | :------ |
| `secretId` | `string` |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<{}\>

#### Defined in

[secret/index.js:97](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/secret/index.js#L97)
