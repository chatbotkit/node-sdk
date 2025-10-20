[@chatbotkit/sdk](../README.md) / [Modules](../modules.md) / [platform/example](../modules/platform_example.md) / PlatformExampleClient

# Class: PlatformExampleClient

[platform/example](../modules/platform_example.md).PlatformExampleClient

Platform example client.

## Hierarchy

- [`ChatBotKitClient`](client.ChatBotKitClient.md)

  ↳ **`PlatformExampleClient`**

## Table of contents

### Constructors

- [constructor](platform_example.PlatformExampleClient.md#constructor)

### Methods

- [clientFetch](platform_example.PlatformExampleClient.md#clientfetch)
- [clone](platform_example.PlatformExampleClient.md#clone)
- [fetch](platform_example.PlatformExampleClient.md#fetch)
- [list](platform_example.PlatformExampleClient.md#list)
- [search](platform_example.PlatformExampleClient.md#search)

## Constructors

### constructor

• **new PlatformExampleClient**(`options`): [`PlatformExampleClient`](platform_example.PlatformExampleClient.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`ChatBotKitClientOptions`](../interfaces/client.ChatBotKitClientOptions.md) |

#### Returns

[`PlatformExampleClient`](platform_example.PlatformExampleClient.md)

#### Overrides

[ChatBotKitClient](client.ChatBotKitClient.md).[constructor](client.ChatBotKitClient.md#constructor)

#### Defined in

[platform/example/index.js:22](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/platform/example/index.js#L22)

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

### clone

▸ **clone**(`exampleId`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<[`PlatformExampleCloneResponse`](../modules/platform_example_v1.md#platformexamplecloneresponse)\>

Clones a platform example.

#### Parameters

| Name | Type |
| :------ | :------ |
| `exampleId` | `string` |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<[`PlatformExampleCloneResponse`](../modules/platform_example_v1.md#platformexamplecloneresponse)\>

#### Defined in

[platform/example/index.js:62](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/platform/example/index.js#L62)

___

### fetch

▸ **fetch**(`exampleId`): [`ResponsePromise`](client.ResponsePromise.md)\<[`PlatformExampleInstance`](../modules/platform_example_v1.md#platformexampleinstance), `never`\>

Fetches a platform example.

#### Parameters

| Name | Type |
| :------ | :------ |
| `exampleId` | `string` |

#### Returns

[`ResponsePromise`](client.ResponsePromise.md)\<[`PlatformExampleInstance`](../modules/platform_example_v1.md#platformexampleinstance), `never`\>

#### Defined in

[platform/example/index.js:42](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/platform/example/index.js#L42)

___

### list

▸ **list**(`request?`): [`ResponsePromise`](client.ResponsePromise.md)\<[`PlatformExampleListResponse`](../modules/platform_example_v1.md#platformexamplelistresponse), [`PlatformExampleListStreamItemType`](../modules/platform_example_v1.md#platformexampleliststreamitemtype)\>

Retrieves a list of all platform examples.

#### Parameters

| Name | Type |
| :------ | :------ |
| `request?` | [`PlatformExampleListRequest`](../modules/platform_example_v1.md#platformexamplelistrequest) |

#### Returns

[`ResponsePromise`](client.ResponsePromise.md)\<[`PlatformExampleListResponse`](../modules/platform_example_v1.md#platformexamplelistresponse), [`PlatformExampleListStreamItemType`](../modules/platform_example_v1.md#platformexampleliststreamitemtype)\>

#### Defined in

[platform/example/index.js:32](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/platform/example/index.js#L32)

___

### search

▸ **search**(`request`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<[`PlatformExampleSearchResponse`](../modules/platform_example_v1.md#platformexamplesearchresponse)\>

Searches platform examples.

#### Parameters

| Name | Type |
| :------ | :------ |
| `request` | [`PlatformExampleSearchRequest`](../modules/platform_example_v1.md#platformexamplesearchrequest) |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<[`PlatformExampleSearchResponse`](../modules/platform_example_v1.md#platformexamplesearchresponse)\>

#### Defined in

[platform/example/index.js:52](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/platform/example/index.js#L52)
