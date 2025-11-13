[@chatbotkit/sdk](../README.md) / [Modules](../modules.md) / [contact/space](../modules/contact_space.md) / SpaceClient

# Class: SpaceClient

[contact/space](../modules/contact_space.md).SpaceClient

Contact space client.

## Hierarchy

- [`ChatBotKitClient`](client.ChatBotKitClient.md)

  ↳ **`SpaceClient`**

## Table of contents

### Constructors

- [constructor](contact_space.SpaceClient.md#constructor)

### Methods

- [clientFetch](contact_space.SpaceClient.md#clientfetch)
- [list](contact_space.SpaceClient.md#list)

## Constructors

### constructor

• **new SpaceClient**(`options`): [`SpaceClient`](contact_space.SpaceClient.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`ChatBotKitClientOptions`](../interfaces/client.ChatBotKitClientOptions.md) |

#### Returns

[`SpaceClient`](contact_space.SpaceClient.md)

#### Overrides

[ChatBotKitClient](client.ChatBotKitClient.md).[constructor](client.ChatBotKitClient.md#constructor)

#### Defined in

[contact/space/index.js:17](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/contact/space/index.js#L17)

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

[client.js:390](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/client.js#L390)

___

### list

▸ **list**(`contactId`, `request?`): [`ResponsePromise`](client.ResponsePromise.md)\<{}, {}\>

Retrieves a list of all contact spaces.

#### Parameters

| Name | Type |
| :------ | :------ |
| `contactId` | `string` |
| `request?` | [`SpaceListRequest`](../modules/contact_space_v1.md#spacelistrequest) |

#### Returns

[`ResponsePromise`](client.ResponsePromise.md)\<{}, {}\>

#### Defined in

[contact/space/index.js:28](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/contact/space/index.js#L28)
