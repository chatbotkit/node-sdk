[@chatbotkit/sdk](../README.md) / [Modules](../modules.md) / [blueprint](../modules/blueprint.md) / BlueprintClient

# Class: BlueprintClient

[blueprint](../modules/blueprint.md).BlueprintClient

Blueprint client.

## Hierarchy

- [`ChatBotKitClient`](client.ChatBotKitClient.md)

  ↳ **`BlueprintClient`**

## Table of contents

### Constructors

- [constructor](blueprint.BlueprintClient.md#constructor)

### Methods

- [clientFetch](blueprint.BlueprintClient.md#clientfetch)
- [clone](blueprint.BlueprintClient.md#clone)
- [create](blueprint.BlueprintClient.md#create)
- [delete](blueprint.BlueprintClient.md#delete)
- [fetch](blueprint.BlueprintClient.md#fetch)
- [list](blueprint.BlueprintClient.md#list)
- [update](blueprint.BlueprintClient.md#update)

## Constructors

### constructor

• **new BlueprintClient**(`options`): [`BlueprintClient`](blueprint.BlueprintClient.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`ChatBotKitClientOptions`](../interfaces/client.ChatBotKitClientOptions.md) |

#### Returns

[`BlueprintClient`](blueprint.BlueprintClient.md)

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

[client.js:254](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/client.js#L254)

___

### clone

▸ **clone**(`blueprintId`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<[`BlueprintCloneResponse`](../modules/blueprint_v1.md#blueprintcloneresponse)\>

Clones a blueprint.

#### Parameters

| Name | Type |
| :------ | :------ |
| `blueprintId` | `string` |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<[`BlueprintCloneResponse`](../modules/blueprint_v1.md#blueprintcloneresponse)\>

#### Defined in

[blueprint/index.js:85](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/blueprint/index.js#L85)

___

### create

▸ **create**(`request`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<[`BlueprintCreateResponse`](../modules/blueprint_v1.md#blueprintcreateresponse)\>

Creates a new blueprint.

#### Parameters

| Name | Type |
| :------ | :------ |
| `request` | [`BlueprintOptions`](../modules/blueprint_v1.md#blueprintoptions) |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<[`BlueprintCreateResponse`](../modules/blueprint_v1.md#blueprintcreateresponse)\>

#### Defined in

[blueprint/index.js:54](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/blueprint/index.js#L54)

___

### delete

▸ **delete**(`blueprintId`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<[`BlueprintDeleteResponse`](../modules/blueprint_v1.md#blueprintdeleteresponse)\>

Deletes the blueprint.

#### Parameters

| Name | Type |
| :------ | :------ |
| `blueprintId` | `string` |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<[`BlueprintDeleteResponse`](../modules/blueprint_v1.md#blueprintdeleteresponse)\>

#### Defined in

[blueprint/index.js:75](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/blueprint/index.js#L75)

___

### fetch

▸ **fetch**(`blueprintId`): [`ResponsePromise`](client.ResponsePromise.md)\<[`BlueprintFetchResponse`](../modules/blueprint_v1.md#blueprintfetchresponse), `never`\>

Fetches a blueprint.

#### Parameters

| Name | Type |
| :------ | :------ |
| `blueprintId` | `string` |

#### Returns

[`ResponsePromise`](client.ResponsePromise.md)\<[`BlueprintFetchResponse`](../modules/blueprint_v1.md#blueprintfetchresponse), `never`\>

#### Defined in

[blueprint/index.js:44](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/blueprint/index.js#L44)

___

### list

▸ **list**(`request?`): [`ResponsePromise`](client.ResponsePromise.md)\<[`BlueprintListResponse`](../modules/blueprint_v1.md#blueprintlistresponse), [`BlueprintListStreamItemType`](../modules/blueprint_v1.md#blueprintliststreamitemtype)\>

Retrieves a list of all blueprints.

#### Parameters

| Name | Type |
| :------ | :------ |
| `request?` | [`BlueprintListRequest`](../modules/blueprint_v1.md#blueprintlistrequest) |

#### Returns

[`ResponsePromise`](client.ResponsePromise.md)\<[`BlueprintListResponse`](../modules/blueprint_v1.md#blueprintlistresponse), [`BlueprintListStreamItemType`](../modules/blueprint_v1.md#blueprintliststreamitemtype)\>

#### Defined in

[blueprint/index.js:34](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/blueprint/index.js#L34)

___

### update

▸ **update**(`blueprintId`, `request`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<[`BlueprintUpdateResponse`](../modules/blueprint_v1.md#blueprintupdateresponse)\>

Updates a blueprint.

#### Parameters

| Name | Type |
| :------ | :------ |
| `blueprintId` | `string` |
| `request` | [`BlueprintOptions`](../modules/blueprint_v1.md#blueprintoptions) |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<[`BlueprintUpdateResponse`](../modules/blueprint_v1.md#blueprintupdateresponse)\>

#### Defined in

[blueprint/index.js:65](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/blueprint/index.js#L65)
