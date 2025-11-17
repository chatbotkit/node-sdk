[@chatbotkit/sdk](../README.md) / [Modules](../modules.md) / [integration/twilio](../modules/integration_twilio.md) / TwilioIntegrationClient

# Class: TwilioIntegrationClient

[integration/twilio](../modules/integration_twilio.md).TwilioIntegrationClient

**`Template`**

**`Template`**

## Hierarchy

- [`ChatBotKitClient`](client.ChatBotKitClient.md)

  ↳ **`TwilioIntegrationClient`**

## Table of contents

### Constructors

- [constructor](integration_twilio.TwilioIntegrationClient.md#constructor)

### Methods

- [clientFetch](integration_twilio.TwilioIntegrationClient.md#clientfetch)
- [create](integration_twilio.TwilioIntegrationClient.md#create)
- [delete](integration_twilio.TwilioIntegrationClient.md#delete)
- [extend](integration_twilio.TwilioIntegrationClient.md#extend)
- [fetch](integration_twilio.TwilioIntegrationClient.md#fetch)
- [list](integration_twilio.TwilioIntegrationClient.md#list)
- [setup](integration_twilio.TwilioIntegrationClient.md#setup)
- [update](integration_twilio.TwilioIntegrationClient.md#update)

## Constructors

### constructor

• **new TwilioIntegrationClient**(`options`): [`TwilioIntegrationClient`](integration_twilio.TwilioIntegrationClient.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`ChatBotKitClientOptions`](../interfaces/client.ChatBotKitClientOptions.md) |

#### Returns

[`TwilioIntegrationClient`](integration_twilio.TwilioIntegrationClient.md)

#### Overrides

[ChatBotKitClient](client.ChatBotKitClient.md).[constructor](client.ChatBotKitClient.md#constructor)

#### Defined in

[integration/twilio/index.js:21](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/twilio/index.js#L21)

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

[client.js:449](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/client.js#L449)

___

### create

▸ **create**(`request`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<{}\>

Creates a new twilio integration.

#### Parameters

| Name | Type |
| :------ | :------ |
| `request` | `Object` |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<{}\>

#### Defined in

[integration/twilio/index.js:51](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/twilio/index.js#L51)

___

### delete

▸ **delete**(`twilioId`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<{}\>

Deletes a twilio integration.

#### Parameters

| Name | Type |
| :------ | :------ |
| `twilioId` | `string` |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<{}\>

#### Defined in

[integration/twilio/index.js:72](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/twilio/index.js#L72)

___

### extend

▸ **extend**(`extensionOptions`): [`TwilioIntegrationClient`](integration_twilio.TwilioIntegrationClient.md)

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

[`TwilioIntegrationClient`](integration_twilio.TwilioIntegrationClient.md)

A new instance of the same client class with extended options

#### Inherited from

[ChatBotKitClient](client.ChatBotKitClient.md).[extend](client.ChatBotKitClient.md#extend)

#### Defined in

[client.js:382](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/client.js#L382)

___

### fetch

▸ **fetch**(`twilioId`): [`ResponsePromise`](client.ResponsePromise.md)\<{}, `never`\>

Fetches a twilio integration.

#### Parameters

| Name | Type |
| :------ | :------ |
| `twilioId` | `string` |

#### Returns

[`ResponsePromise`](client.ResponsePromise.md)\<{}, `never`\>

#### Defined in

[integration/twilio/index.js:41](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/twilio/index.js#L41)

___

### list

▸ **list**(`request?`): [`ResponsePromise`](client.ResponsePromise.md)\<{}, {}\>

Retrieves a list of all twilio integrations.

#### Parameters

| Name | Type |
| :------ | :------ |
| `request?` | [`TwilioIntegrationListRequest`](../modules/integration_twilio_v1.md#twiliointegrationlistrequest) |

#### Returns

[`ResponsePromise`](client.ResponsePromise.md)\<{}, {}\>

#### Defined in

[integration/twilio/index.js:31](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/twilio/index.js#L31)

___

### setup

▸ **setup**(`twilioId`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<{}\>

Sets up a twilio integration.

#### Parameters

| Name | Type |
| :------ | :------ |
| `twilioId` | `string` |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<{}\>

#### Defined in

[integration/twilio/index.js:82](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/twilio/index.js#L82)

___

### update

▸ **update**(`twilioId`, `request`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<{}\>

Updates a twilio integration.

#### Parameters

| Name | Type |
| :------ | :------ |
| `twilioId` | `string` |
| `request` | `Object` |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<{}\>

#### Defined in

[integration/twilio/index.js:62](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/twilio/index.js#L62)
