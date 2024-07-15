[@chatbotkit/sdk](../README.md) / [Modules](../modules.md) / [index](../modules/index.md) / SecretClient

# Class: SecretClient

[index](../modules/index.md).SecretClient

Secret client.

## Hierarchy

- [`ChatBotKitClient`](client.ChatBotKitClient.md)

  ↳ **`SecretClient`**

## Table of contents

### Constructors

- [constructor](index.SecretClient.md#constructor)

### Methods

- [clientFetch](index.SecretClient.md#clientfetch)
- [create](index.SecretClient.md#create)
- [delete](index.SecretClient.md#delete)
- [fetch](index.SecretClient.md#fetch)
- [list](index.SecretClient.md#list)
- [update](index.SecretClient.md#update)

## Constructors

### constructor

• **new SecretClient**(`options`): [`SecretClient`](index.SecretClient.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`ChatBotKitClientOptions`](../interfaces/client.ChatBotKitClientOptions.md) |

#### Returns

[`SecretClient`](index.SecretClient.md)

#### Overrides

[ChatBotKitClient](client.ChatBotKitClient.md).[constructor](client.ChatBotKitClient.md#constructor)

#### Defined in

[secret/index.js:23](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/secret/index.js#L23)

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
| `options.external?` | `boolean` |
| `options.file?` | `Object` |
| `options.file.data` | `string` \| [`ArrayBuffer`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer ) |
| `options.file.name?` | `string` |
| `options.file.type?` | `string` |
| `options.headers?` | [`Record`]( https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type )\<`string`, `any`\> |
| `options.method?` | `string` |
| `options.query?` | [`Record`]( https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type )\<`string`, `any`\> |
| `options.record?` | [`Record`]( https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type )\<`string`, `any`\> |

#### Returns

[`ResponsePromise`](client.ResponsePromise.md)\<`T`, `U`\>

#### Inherited from

[ChatBotKitClient](client.ChatBotKitClient.md).[clientFetch](client.ChatBotKitClient.md#clientfetch)

#### Defined in

[client.js:219](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/client.js#L219)

___

### create

▸ **create**(`request`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<`SecretCreateResponse`\>

Creates a new secret.

#### Parameters

| Name | Type |
| :------ | :------ |
| `request` | `SecretCreateRequest` |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<`SecretCreateResponse`\>

#### Defined in

[secret/index.js:53](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/secret/index.js#L53)

___

### delete

▸ **delete**(`secretId`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<`SecretDeleteResponse`\>

Deletes the secret.

#### Parameters

| Name | Type |
| :------ | :------ |
| `secretId` | `string` |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<`SecretDeleteResponse`\>

#### Defined in

[secret/index.js:74](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/secret/index.js#L74)

___

### fetch

▸ **fetch**(`secretId`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<`SecretFetchResponse`\>

Fetches a secret.

#### Parameters

| Name | Type |
| :------ | :------ |
| `secretId` | `string` |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<`SecretFetchResponse`\>

#### Defined in

[secret/index.js:43](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/secret/index.js#L43)

___

### list

▸ **list**(`request?`): [`ResponsePromise`](client.ResponsePromise.md)\<`SecretListResponse`, `SecretListStreamItemType`\>

Retrieves a list of all secrets.

#### Parameters

| Name | Type |
| :------ | :------ |
| `request?` | `SecretListRequest` |

#### Returns

[`ResponsePromise`](client.ResponsePromise.md)\<`SecretListResponse`, `SecretListStreamItemType`\>

#### Defined in

[secret/index.js:33](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/secret/index.js#L33)

___

### update

▸ **update**(`secretId`, `request`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<`SecretUpdateResponse`\>

Updates a secret.

#### Parameters

| Name | Type |
| :------ | :------ |
| `secretId` | `string` |
| `request` | `SecretUpdateRequest` |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<`SecretUpdateResponse`\>

#### Defined in

[secret/index.js:64](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/secret/index.js#L64)
