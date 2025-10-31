[@chatbotkit/sdk](../README.md) / [Modules](../modules.md) / [partner/user/token](../modules/partner_user_token.md) / PartnerUserTokenClient

# Class: PartnerUserTokenClient

[partner/user/token](../modules/partner_user_token.md).PartnerUserTokenClient

Partner user token client.

## Hierarchy

- [`ChatBotKitClient`](client.ChatBotKitClient.md)

  ↳ **`PartnerUserTokenClient`**

## Table of contents

### Constructors

- [constructor](partner_user_token.PartnerUserTokenClient.md#constructor)

### Methods

- [clientFetch](partner_user_token.PartnerUserTokenClient.md#clientfetch)
- [create](partner_user_token.PartnerUserTokenClient.md#create)
- [delete](partner_user_token.PartnerUserTokenClient.md#delete)
- [list](partner_user_token.PartnerUserTokenClient.md#list)

## Constructors

### constructor

• **new PartnerUserTokenClient**(`options`): [`PartnerUserTokenClient`](partner_user_token.PartnerUserTokenClient.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`ChatBotKitClientOptions`](../interfaces/client.ChatBotKitClientOptions.md) |

#### Returns

[`PartnerUserTokenClient`](partner_user_token.PartnerUserTokenClient.md)

#### Overrides

[ChatBotKitClient](client.ChatBotKitClient.md).[constructor](client.ChatBotKitClient.md#constructor)

#### Defined in

[partner/user/token/index.js:21](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/partner/user/token/index.js#L21)

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

[client.js:351](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/client.js#L351)

___

### create

▸ **create**(`userId`, `request`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<{}\>

Creates a new user token.

#### Parameters

| Name | Type |
| :------ | :------ |
| `userId` | `string` |
| `request` | [`Record`]( https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type )\<`string`, `never`\> |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<{}\>

#### Defined in

[partner/user/token/index.js:43](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/partner/user/token/index.js#L43)

___

### delete

▸ **delete**(`userId`, `tokenId`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<{}\>

Deletes the user token.

#### Parameters

| Name | Type |
| :------ | :------ |
| `userId` | `string` |
| `tokenId` | `string` |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<{}\>

#### Defined in

[partner/user/token/index.js:54](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/partner/user/token/index.js#L54)

___

### list

▸ **list**(`userId`, `request?`): [`ResponsePromise`](client.ResponsePromise.md)\<{}, {}\>

Retrieves a list of all user tokens.

#### Parameters

| Name | Type |
| :------ | :------ |
| `userId` | `string` |
| `request?` | [`PartnerUserTokenListRequest`](../modules/partner_user_token_v1.md#partnerusertokenlistrequest) |

#### Returns

[`ResponsePromise`](client.ResponsePromise.md)\<{}, {}\>

#### Defined in

[partner/user/token/index.js:32](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/partner/user/token/index.js#L32)
