[@chatbotkit/sdk](../README.md) / [Modules](../modules.md) / [space](../modules/space.md) / SpaceClient

# Class: SpaceClient

[space](../modules/space.md).SpaceClient

Space client.

## Hierarchy

- [`ChatBotKitClient`](client.ChatBotKitClient.md)

  ↳ **`SpaceClient`**

## Table of contents

### Constructors

- [constructor](space.SpaceClient.md#constructor)

### Methods

- [clientFetch](space.SpaceClient.md#clientfetch)
- [create](space.SpaceClient.md#create)
- [delete](space.SpaceClient.md#delete)
- [fetch](space.SpaceClient.md#fetch)
- [list](space.SpaceClient.md#list)
- [update](space.SpaceClient.md#update)

## Constructors

### constructor

• **new SpaceClient**(`options`): [`SpaceClient`](space.SpaceClient.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`ChatBotKitClientOptions`](../interfaces/client.ChatBotKitClientOptions.md) |

#### Returns

[`SpaceClient`](space.SpaceClient.md)

#### Overrides

[ChatBotKitClient](client.ChatBotKitClient.md).[constructor](client.ChatBotKitClient.md#constructor)

#### Defined in

[space/index.js:23](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/space/index.js#L23)

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

### create

▸ **create**(`request`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<{}\>

Creates a new space.

#### Parameters

| Name | Type |
| :------ | :------ |
| `request` | `Object` |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<{}\>

#### Defined in

[space/index.js:53](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/space/index.js#L53)

___

### delete

▸ **delete**(`spaceId`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<[`SpaceDeleteResponse`](../modules/space_v1.md#spacedeleteresponse)\>

Deletes the space.

#### Parameters

| Name | Type |
| :------ | :------ |
| `spaceId` | `string` |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<[`SpaceDeleteResponse`](../modules/space_v1.md#spacedeleteresponse)\>

#### Defined in

[space/index.js:74](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/space/index.js#L74)

___

### fetch

▸ **fetch**(`spaceId`): [`ResponsePromise`](client.ResponsePromise.md)\<{}, `never`\>

Fetches a space.

#### Parameters

| Name | Type |
| :------ | :------ |
| `spaceId` | `string` |

#### Returns

[`ResponsePromise`](client.ResponsePromise.md)\<{}, `never`\>

#### Defined in

[space/index.js:43](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/space/index.js#L43)

___

### list

▸ **list**(`request?`): [`ResponsePromise`](client.ResponsePromise.md)\<{}, {}\>

Retrieves a list of all spaces.

#### Parameters

| Name | Type |
| :------ | :------ |
| `request?` | [`SpaceListRequest`](../modules/space_v1.md#spacelistrequest) |

#### Returns

[`ResponsePromise`](client.ResponsePromise.md)\<{}, {}\>

#### Defined in

[space/index.js:33](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/space/index.js#L33)

___

### update

▸ **update**(`spaceId`, `request`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<{}\>

Updates a space.

#### Parameters

| Name | Type |
| :------ | :------ |
| `spaceId` | `string` |
| `request` | `Object` |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<{}\>

#### Defined in

[space/index.js:64](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/space/index.js#L64)
