[@chatbotkit/sdk](../README.md) / [Modules](../modules.md) / [index](../modules/index.md) / TeamClient

# Class: TeamClient

[index](../modules/index.md).TeamClient

Team client.

## Hierarchy

- [`ChatBotKitClient`](client.ChatBotKitClient.md)

  ↳ **`TeamClient`**

## Table of contents

### Constructors

- [constructor](index.TeamClient.md#constructor)

### Methods

- [clientFetch](index.TeamClient.md#clientfetch)
- [list](index.TeamClient.md#list)

## Constructors

### constructor

• **new TeamClient**(`options`): [`TeamClient`](index.TeamClient.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`ChatBotKitClientOptions`](../interfaces/client.ChatBotKitClientOptions.md) |

#### Returns

[`TeamClient`](index.TeamClient.md)

#### Overrides

[ChatBotKitClient](client.ChatBotKitClient.md).[constructor](client.ChatBotKitClient.md#constructor)

#### Defined in

[team/index.js:17](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/team/index.js#L17)

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

[client.js:331](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/client.js#L331)

___

### list

▸ **list**(`request?`): [`ResponsePromise`](client.ResponsePromise.md)\<`TeamListResponse`, `TeamListStreamItemType`\>

Retrieves a list of all teams.

#### Parameters

| Name | Type |
| :------ | :------ |
| `request?` | `TeamListRequest` |

#### Returns

[`ResponsePromise`](client.ResponsePromise.md)\<`TeamListResponse`, `TeamListStreamItemType`\>

#### Defined in

[team/index.js:27](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/team/index.js#L27)
