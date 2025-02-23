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
| `options.endpoint?` | `string` |
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

[client.js:251](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/client.js#L251)

___

### create

▸ **create**(`request`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<[`SecretCreateResponse`](../modules/secret_v1.md#secretcreateresponse)\>

Creates a new secret.

#### Parameters

| Name | Type |
| :------ | :------ |
| `request` | [`SecretOptions`](../modules/secret_v1.md#secretoptions) |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<[`SecretCreateResponse`](../modules/secret_v1.md#secretcreateresponse)\>

#### Defined in

[secret/index.js:53](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/secret/index.js#L53)

___

### delete

▸ **delete**(`secretId`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<[`SecretDeleteResponse`](../modules/secret_v1.md#secretdeleteresponse)\>

Deletes the secret.

#### Parameters

| Name | Type |
| :------ | :------ |
| `secretId` | `string` |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<[`SecretDeleteResponse`](../modules/secret_v1.md#secretdeleteresponse)\>

#### Defined in

[secret/index.js:74](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/secret/index.js#L74)

___

### fetch

▸ **fetch**(`secretId`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<[`SecretFetchResponse`](../modules/secret_v1.md#secretfetchresponse)\>

Fetches a secret.

#### Parameters

| Name | Type |
| :------ | :------ |
| `secretId` | `string` |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<[`SecretFetchResponse`](../modules/secret_v1.md#secretfetchresponse)\>

#### Defined in

[secret/index.js:43](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/secret/index.js#L43)

___

### list

▸ **list**(`request?`): [`ResponsePromise`](client.ResponsePromise.md)\<[`SecretListResponse`](../modules/secret_v1.md#secretlistresponse), [`SecretListStreamItemType`](../modules/secret_v1.md#secretliststreamitemtype)\>

Retrieves a list of all secrets.

#### Parameters

| Name | Type |
| :------ | :------ |
| `request?` | [`SecretListRequest`](../modules/secret_v1.md#secretlistrequest) |

#### Returns

[`ResponsePromise`](client.ResponsePromise.md)\<[`SecretListResponse`](../modules/secret_v1.md#secretlistresponse), [`SecretListStreamItemType`](../modules/secret_v1.md#secretliststreamitemtype)\>

#### Defined in

[secret/index.js:33](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/secret/index.js#L33)

___

### update

▸ **update**(`secretId`, `request`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<[`SecretUpdateResponse`](../modules/secret_v1.md#secretupdateresponse)\>

Updates a secret.

#### Parameters

| Name | Type |
| :------ | :------ |
| `secretId` | `string` |
| `request` | [`SecretOptions`](../modules/secret_v1.md#secretoptions) |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<[`SecretUpdateResponse`](../modules/secret_v1.md#secretupdateresponse)\>

#### Defined in

[secret/index.js:64](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/secret/index.js#L64)
