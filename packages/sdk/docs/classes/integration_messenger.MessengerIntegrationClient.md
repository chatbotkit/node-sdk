[@chatbotkit/sdk](../README.md) / [Modules](../modules.md) / [integration/messenger](../modules/integration_messenger.md) / MessengerIntegrationClient

# Class: MessengerIntegrationClient

[integration/messenger](../modules/integration_messenger.md).MessengerIntegrationClient

**`Template`**

**`Template`**

## Hierarchy

- [`ChatBotKitClient`](client.ChatBotKitClient.md)

  ↳ **`MessengerIntegrationClient`**

## Table of contents

### Constructors

- [constructor](integration_messenger.MessengerIntegrationClient.md#constructor)

### Methods

- [clientFetch](integration_messenger.MessengerIntegrationClient.md#clientfetch)
- [create](integration_messenger.MessengerIntegrationClient.md#create)
- [delete](integration_messenger.MessengerIntegrationClient.md#delete)
- [fetch](integration_messenger.MessengerIntegrationClient.md#fetch)
- [list](integration_messenger.MessengerIntegrationClient.md#list)
- [setup](integration_messenger.MessengerIntegrationClient.md#setup)
- [update](integration_messenger.MessengerIntegrationClient.md#update)

## Constructors

### constructor

• **new MessengerIntegrationClient**(`options`): [`MessengerIntegrationClient`](integration_messenger.MessengerIntegrationClient.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`ChatBotKitClientOptions`](../interfaces/client.ChatBotKitClientOptions.md) |

#### Returns

[`MessengerIntegrationClient`](integration_messenger.MessengerIntegrationClient.md)

#### Overrides

[ChatBotKitClient](client.ChatBotKitClient.md).[constructor](client.ChatBotKitClient.md#constructor)

#### Defined in

[integration/messenger/index.js:21](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/messenger/index.js#L21)

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

Creates a new messenger integration.

#### Parameters

| Name | Type |
| :------ | :------ |
| `request` | [`MessengerIntegrationCreateRequest`](../modules/integration_messenger_v1.md#messengerintegrationcreaterequest) |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<{}\>

#### Defined in

[integration/messenger/index.js:51](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/messenger/index.js#L51)

___

### delete

▸ **delete**(`messengerId`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<{}\>

Deletes a messenger integration.

#### Parameters

| Name | Type |
| :------ | :------ |
| `messengerId` | `string` |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<{}\>

#### Defined in

[integration/messenger/index.js:72](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/messenger/index.js#L72)

___

### fetch

▸ **fetch**(`messengerId`): [`ResponsePromise`](client.ResponsePromise.md)\<{}, `never`\>

Fetches a messenger integration.

#### Parameters

| Name | Type |
| :------ | :------ |
| `messengerId` | `string` |

#### Returns

[`ResponsePromise`](client.ResponsePromise.md)\<{}, `never`\>

#### Defined in

[integration/messenger/index.js:41](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/messenger/index.js#L41)

___

### list

▸ **list**(`request?`): [`ResponsePromise`](client.ResponsePromise.md)\<{}, {}\>

Retrieves a list of all messenger integrations.

#### Parameters

| Name | Type |
| :------ | :------ |
| `request?` | [`MessengerIntegrationListRequest`](../modules/integration_messenger_v1.md#messengerintegrationlistrequest) |

#### Returns

[`ResponsePromise`](client.ResponsePromise.md)\<{}, {}\>

#### Defined in

[integration/messenger/index.js:31](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/messenger/index.js#L31)

___

### setup

▸ **setup**(`messengerId`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<{}\>

Setups a messenger integration.

#### Parameters

| Name | Type |
| :------ | :------ |
| `messengerId` | `string` |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<{}\>

#### Defined in

[integration/messenger/index.js:82](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/messenger/index.js#L82)

___

### update

▸ **update**(`messengerId`, `request`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<{}\>

Updates a messenger integration.

#### Parameters

| Name | Type |
| :------ | :------ |
| `messengerId` | `string` |
| `request` | [`MessengerIntegrationUpdateRequest`](../modules/integration_messenger_v1.md#messengerintegrationupdaterequest) |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<{}\>

#### Defined in

[integration/messenger/index.js:62](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/messenger/index.js#L62)
