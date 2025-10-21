[@chatbotkit/sdk](../README.md) / [Modules](../modules.md) / [integration/telegram](../modules/integration_telegram.md) / TelegramIntegrationClient

# Class: TelegramIntegrationClient

[integration/telegram](../modules/integration_telegram.md).TelegramIntegrationClient

**`Template`**

**`Template`**

## Hierarchy

- [`ChatBotKitClient`](client.ChatBotKitClient.md)

  ↳ **`TelegramIntegrationClient`**

## Table of contents

### Constructors

- [constructor](integration_telegram.TelegramIntegrationClient.md#constructor)

### Methods

- [clientFetch](integration_telegram.TelegramIntegrationClient.md#clientfetch)
- [create](integration_telegram.TelegramIntegrationClient.md#create)
- [delete](integration_telegram.TelegramIntegrationClient.md#delete)
- [fetch](integration_telegram.TelegramIntegrationClient.md#fetch)
- [list](integration_telegram.TelegramIntegrationClient.md#list)
- [setup](integration_telegram.TelegramIntegrationClient.md#setup)
- [update](integration_telegram.TelegramIntegrationClient.md#update)

## Constructors

### constructor

• **new TelegramIntegrationClient**(`options`): [`TelegramIntegrationClient`](integration_telegram.TelegramIntegrationClient.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`ChatBotKitClientOptions`](../interfaces/client.ChatBotKitClientOptions.md) |

#### Returns

[`TelegramIntegrationClient`](integration_telegram.TelegramIntegrationClient.md)

#### Overrides

[ChatBotKitClient](client.ChatBotKitClient.md).[constructor](client.ChatBotKitClient.md#constructor)

#### Defined in

[integration/telegram/index.js:21](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/telegram/index.js#L21)

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

Creates a new telegram integration.

#### Parameters

| Name | Type |
| :------ | :------ |
| `request` | [`TelegramIntegrationCreateRequest`](../modules/integration_telegram_v1.md#telegramintegrationcreaterequest) |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<{}\>

#### Defined in

[integration/telegram/index.js:51](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/telegram/index.js#L51)

___

### delete

▸ **delete**(`telegramId`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<{}\>

Deletes a telegram integration.

#### Parameters

| Name | Type |
| :------ | :------ |
| `telegramId` | `string` |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<{}\>

#### Defined in

[integration/telegram/index.js:72](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/telegram/index.js#L72)

___

### fetch

▸ **fetch**(`telegramId`): [`ResponsePromise`](client.ResponsePromise.md)\<{}, `never`\>

Fetches a telegram integration.

#### Parameters

| Name | Type |
| :------ | :------ |
| `telegramId` | `string` |

#### Returns

[`ResponsePromise`](client.ResponsePromise.md)\<{}, `never`\>

#### Defined in

[integration/telegram/index.js:41](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/telegram/index.js#L41)

___

### list

▸ **list**(`request?`): [`ResponsePromise`](client.ResponsePromise.md)\<{}, {}\>

Retrieves a list of all telegram integrations.

#### Parameters

| Name | Type |
| :------ | :------ |
| `request?` | [`TelegramIntegrationListRequest`](../modules/integration_telegram_v1.md#telegramintegrationlistrequest) |

#### Returns

[`ResponsePromise`](client.ResponsePromise.md)\<{}, {}\>

#### Defined in

[integration/telegram/index.js:31](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/telegram/index.js#L31)

___

### setup

▸ **setup**(`telegramId`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<{}\>

Setups a telegram integration.

#### Parameters

| Name | Type |
| :------ | :------ |
| `telegramId` | `string` |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<{}\>

#### Defined in

[integration/telegram/index.js:82](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/telegram/index.js#L82)

___

### update

▸ **update**(`telegramId`, `request`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<{}\>

Updates a telegram integration.

#### Parameters

| Name | Type |
| :------ | :------ |
| `telegramId` | `string` |
| `request` | [`TelegramIntegrationUpdateRequest`](../modules/integration_telegram_v1.md#telegramintegrationupdaterequest) |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<{}\>

#### Defined in

[integration/telegram/index.js:62](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/telegram/index.js#L62)
