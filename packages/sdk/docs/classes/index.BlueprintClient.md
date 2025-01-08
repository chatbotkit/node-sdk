[@chatbotkit/sdk](../README.md) / [Modules](../modules.md) / [index](../modules/index.md) / BlueprintClient

# Class: BlueprintClient

[index](../modules/index.md).BlueprintClient

Blueprint client.

## Hierarchy

- [`ChatBotKitClient`](client.ChatBotKitClient.md)

  ↳ **`BlueprintClient`**

## Table of contents

### Constructors

- [constructor](index.BlueprintClient.md#constructor)

### Methods

- [clientFetch](index.BlueprintClient.md#clientfetch)
- [clone](index.BlueprintClient.md#clone)
- [create](index.BlueprintClient.md#create)
- [delete](index.BlueprintClient.md#delete)
- [fetch](index.BlueprintClient.md#fetch)
- [list](index.BlueprintClient.md#list)
- [update](index.BlueprintClient.md#update)

## Constructors

### constructor

• **new BlueprintClient**(`options`): [`BlueprintClient`](index.BlueprintClient.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`ChatBotKitClientOptions`](../interfaces/client.ChatBotKitClientOptions.md) |

#### Returns

[`BlueprintClient`](index.BlueprintClient.md)

#### Overrides

[ChatBotKitClient](client.ChatBotKitClient.md).[constructor](client.ChatBotKitClient.md#constructor)

#### Defined in

[blueprint/index.js:24](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/blueprint/index.js#L24)

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

[client.js:222](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/client.js#L222)

___

### clone

▸ **clone**(`blueprintId`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<`BlueprintCloneResponse`\>

Clones a blueprint.

#### Parameters

| Name | Type |
| :------ | :------ |
| `blueprintId` | `string` |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<`BlueprintCloneResponse`\>

#### Defined in

[blueprint/index.js:85](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/blueprint/index.js#L85)

___

### create

▸ **create**(`request`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<`BlueprintCreateResponse`\>

Creates a new blueprint.

#### Parameters

| Name | Type |
| :------ | :------ |
| `request` | `BlueprintCreateRequest` |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<`BlueprintCreateResponse`\>

#### Defined in

[blueprint/index.js:54](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/blueprint/index.js#L54)

___

### delete

▸ **delete**(`blueprintId`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<`BlueprintDeleteResponse`\>

Deletes the blueprint.

#### Parameters

| Name | Type |
| :------ | :------ |
| `blueprintId` | `string` |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<`BlueprintDeleteResponse`\>

#### Defined in

[blueprint/index.js:75](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/blueprint/index.js#L75)

___

### fetch

▸ **fetch**(`blueprintId`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<`BlueprintFetchResponse`\>

Fetches a blueprint.

#### Parameters

| Name | Type |
| :------ | :------ |
| `blueprintId` | `string` |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<`BlueprintFetchResponse`\>

#### Defined in

[blueprint/index.js:44](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/blueprint/index.js#L44)

___

### list

▸ **list**(`request?`): [`ResponsePromise`](client.ResponsePromise.md)\<`BlueprintListResponse`, `BlueprintListStreamItemType`\>

Retrieves a list of all blueprints.

#### Parameters

| Name | Type |
| :------ | :------ |
| `request?` | `BlueprintListRequest` |

#### Returns

[`ResponsePromise`](client.ResponsePromise.md)\<`BlueprintListResponse`, `BlueprintListStreamItemType`\>

#### Defined in

[blueprint/index.js:34](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/blueprint/index.js#L34)

___

### update

▸ **update**(`blueprintId`, `request`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<`BlueprintUpdateResponse`\>

Updates a blueprint.

#### Parameters

| Name | Type |
| :------ | :------ |
| `blueprintId` | `string` |
| `request` | `BlueprintOptions` |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<`BlueprintUpdateResponse`\>

#### Defined in

[blueprint/index.js:65](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/blueprint/index.js#L65)
