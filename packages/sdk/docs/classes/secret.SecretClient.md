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

- [clientFetch](secret.SecretClient.md#clientfetch)
- [create](secret.SecretClient.md#create)
- [delete](secret.SecretClient.md#delete)
- [fetch](secret.SecretClient.md#fetch)
- [list](secret.SecretClient.md#list)
- [revoke](secret.SecretClient.md#revoke)
- [update](secret.SecretClient.md#update)

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

[secret/index.js:24](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/secret/index.js#L24)

## Methods

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

[client.js:345](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/client.js#L345)

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

[secret/index.js:54](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/secret/index.js#L54)

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

[secret/index.js:75](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/secret/index.js#L75)

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

[secret/index.js:44](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/secret/index.js#L44)

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

[secret/index.js:34](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/secret/index.js#L34)

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

[secret/index.js:85](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/secret/index.js#L85)

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

[secret/index.js:65](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/secret/index.js#L65)
