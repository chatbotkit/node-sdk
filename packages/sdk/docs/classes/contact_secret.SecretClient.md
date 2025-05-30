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
- [clientFetch](contact_secret.SecretClient.md#clientfetch)
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

▸ **authenticate**(`contactId`, `secretId`): [`ResponsePromise`](client.ResponsePromise.md)\<[`SecretAuthenticateResponse`](../modules/contact_secret_v1.md#secretauthenticateresponse), `never`\>

Authenticates the contact secret.

#### Parameters

| Name | Type |
| :------ | :------ |
| `contactId` | `string` |
| `secretId` | `string` |

#### Returns

[`ResponsePromise`](client.ResponsePromise.md)\<[`SecretAuthenticateResponse`](../modules/contact_secret_v1.md#secretauthenticateresponse), `never`\>

#### Defined in

[contact/secret/index.js:66](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/contact/secret/index.js#L66)

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
| `options.fetchFn?` | `FetchFn` |
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

[client.js:330](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/client.js#L330)

___

### list

▸ **list**(`contactId`, `request?`): [`ResponsePromise`](client.ResponsePromise.md)\<[`SecretListResponse`](../modules/contact_secret_v1.md#secretlistresponse), [`SecretListStreamItemType`](../modules/contact_secret_v1.md#secretliststreamitemtype)\>

Retrieves a list of all contact secrets.

#### Parameters

| Name | Type |
| :------ | :------ |
| `contactId` | `string` |
| `request?` | [`SecretListRequest`](../modules/contact_secret_v1.md#secretlistrequest) |

#### Returns

[`ResponsePromise`](client.ResponsePromise.md)\<[`SecretListResponse`](../modules/contact_secret_v1.md#secretlistresponse), [`SecretListStreamItemType`](../modules/contact_secret_v1.md#secretliststreamitemtype)\>

#### Defined in

[contact/secret/index.js:33](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/contact/secret/index.js#L33)

___

### revoke

▸ **revoke**(`contactId`, `secretId`): [`ResponsePromise`](client.ResponsePromise.md)\<[`SecretRevokeResponse`](../modules/contact_secret_v1.md#secretrevokeresponse), `never`\>

Revokes the contact secret.

#### Parameters

| Name | Type |
| :------ | :------ |
| `contactId` | `string` |
| `secretId` | `string` |

#### Returns

[`ResponsePromise`](client.ResponsePromise.md)\<[`SecretRevokeResponse`](../modules/contact_secret_v1.md#secretrevokeresponse), `never`\>

#### Defined in

[contact/secret/index.js:44](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/contact/secret/index.js#L44)

___

### verify

▸ **verify**(`contactId`, `secretId`): [`ResponsePromise`](client.ResponsePromise.md)\<[`SecretVerifyResponse`](../modules/contact_secret_v1.md#secretverifyresponse), `never`\>

Verifies the contact secret.

#### Parameters

| Name | Type |
| :------ | :------ |
| `contactId` | `string` |
| `secretId` | `string` |

#### Returns

[`ResponsePromise`](client.ResponsePromise.md)\<[`SecretVerifyResponse`](../modules/contact_secret_v1.md#secretverifyresponse), `never`\>

#### Defined in

[contact/secret/index.js:55](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/contact/secret/index.js#L55)
