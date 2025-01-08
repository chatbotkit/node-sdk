[@chatbotkit/sdk](../README.md) / [Modules](../modules.md) / blueprint/v1

# Module: blueprint/v1

## Table of contents

### Type Aliases

- [BlueprintCloneResponse](blueprint_v1.md#blueprintcloneresponse)
- [BlueprintCreateRequest](blueprint_v1.md#blueprintcreaterequest)
- [BlueprintCreateResponse](blueprint_v1.md#blueprintcreateresponse)
- [BlueprintDeleteResponse](blueprint_v1.md#blueprintdeleteresponse)
- [BlueprintFetchResponse](blueprint_v1.md#blueprintfetchresponse)
- [BlueprintInstance](blueprint_v1.md#blueprintinstance)
- [BlueprintListRequest](blueprint_v1.md#blueprintlistrequest)
- [BlueprintListResponse](blueprint_v1.md#blueprintlistresponse)
- [BlueprintListStreamItemType](blueprint_v1.md#blueprintliststreamitemtype)
- [BlueprintListStreamType](blueprint_v1.md#blueprintliststreamtype)
- [BlueprintOptions](blueprint_v1.md#blueprintoptions)
- [BlueprintUpdateRequest](blueprint_v1.md#blueprintupdaterequest)
- [BlueprintUpdateResponse](blueprint_v1.md#blueprintupdateresponse)
- [ChatBotKitClient](blueprint_v1.md#chatbotkitclient)
- [ResponsePromise](blueprint_v1.md#responsepromise)

### Functions

- [cloneBlueprint](blueprint_v1.md#cloneblueprint)
- [createBlueprint](blueprint_v1.md#createblueprint)
- [deleteBlueprint](blueprint_v1.md#deleteblueprint)
- [fetchBlueprint](blueprint_v1.md#fetchblueprint)
- [listBlueprints](blueprint_v1.md#listblueprints)
- [updateBlueprint](blueprint_v1.md#updateblueprint)

## Type Aliases

### BlueprintCloneResponse

Ƭ **BlueprintCloneResponse**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Defined in

[blueprint/v1.js:147](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/blueprint/v1.js#L147)

___

### BlueprintCreateRequest

Ƭ **BlueprintCreateRequest**\<\>: [`BlueprintOptions`](blueprint_v1.md#blueprintoptions) & \{ `model?`: [`model/v1`](model_v1.md)  }

#### Defined in

[blueprint/v1.js:72](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/blueprint/v1.js#L72)

___

### BlueprintCreateResponse

Ƭ **BlueprintCreateResponse**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Defined in

[blueprint/v1.js:76](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/blueprint/v1.js#L76)

___

### BlueprintDeleteResponse

Ƭ **BlueprintDeleteResponse**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Defined in

[blueprint/v1.js:126](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/blueprint/v1.js#L126)

___

### BlueprintFetchResponse

Ƭ **BlueprintFetchResponse**\<\>: [`BlueprintInstance`](blueprint_v1.md#blueprintinstance) & {}

#### Defined in

[blueprint/v1.js:54](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/blueprint/v1.js#L54)

___

### BlueprintInstance

Ƭ **BlueprintInstance**\<\>: [`BlueprintOptions`](blueprint_v1.md#blueprintoptions) & \{ `createdAt`: `number` ; `id`: `string` ; `updatedAt`: `number`  }

#### Defined in

[blueprint/v1.js:22](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/blueprint/v1.js#L22)

___

### BlueprintListRequest

Ƭ **BlueprintListRequest**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `cursor?` | `string` |
| `meta?` | [`Record`]( https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type )\<`string`, `string`\> |
| `order?` | ``"desc"`` \| ``"asc"`` |
| `take?` | `number` |

#### Defined in

[blueprint/v1.js:26](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/blueprint/v1.js#L26)

___

### BlueprintListResponse

Ƭ **BlueprintListResponse**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `items` | [`BlueprintInstance`](blueprint_v1.md#blueprintinstance)[] |

#### Defined in

[blueprint/v1.js:28](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/blueprint/v1.js#L28)

___

### BlueprintListStreamItemType

Ƭ **BlueprintListStreamItemType**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `data` | [`BlueprintInstance`](blueprint_v1.md#blueprintinstance) |
| `type` | ``"item"`` |

#### Defined in

[blueprint/v1.js:33](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/blueprint/v1.js#L33)

___

### BlueprintListStreamType

Ƭ **BlueprintListStreamType**\<\>: [`BlueprintListStreamItemType`](blueprint_v1.md#blueprintliststreamitemtype)

#### Defined in

[blueprint/v1.js:35](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/blueprint/v1.js#L35)

___

### BlueprintOptions

Ƭ **BlueprintOptions**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `description?` | `string` |
| `meta?` | [`Record`]( https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type )\<`string`, `any`\> |
| `name?` | `string` |

#### Defined in

[blueprint/v1.js:16](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/blueprint/v1.js#L16)

___

### BlueprintUpdateRequest

Ƭ **BlueprintUpdateRequest**\<\>: [`BlueprintOptions`](blueprint_v1.md#blueprintoptions) & {}

#### Defined in

[blueprint/v1.js:98](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/blueprint/v1.js#L98)

___

### BlueprintUpdateResponse

Ƭ **BlueprintUpdateResponse**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Defined in

[blueprint/v1.js:102](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/blueprint/v1.js#L102)

___

### ChatBotKitClient

Ƭ **ChatBotKitClient**\<\>: [`client`](client.md)

#### Defined in

[blueprint/v1.js:2](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/blueprint/v1.js#L2)

___

### ResponsePromise

Ƭ **ResponsePromise**\<`T`, `U`\>: [`client`](client.md)

#### Type parameters

| Name |
| :------ |
| `T` |
| `U` |

#### Defined in

[blueprint/v1.js:8](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/blueprint/v1.js#L8)

## Functions

### cloneBlueprint

▸ **cloneBlueprint**(`client`, `blueprintId`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<[`BlueprintCloneResponse`](blueprint_v1.md#blueprintcloneresponse)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`ChatBotKitClient`](../classes/client.ChatBotKitClient.md) |
| `blueprintId` | `string` |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<[`BlueprintCloneResponse`](blueprint_v1.md#blueprintcloneresponse)\>

#### Defined in

[blueprint/v1.js:153](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/blueprint/v1.js#L153)

___

### createBlueprint

▸ **createBlueprint**(`client`, `request`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<[`BlueprintCreateResponse`](blueprint_v1.md#blueprintcreateresponse)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`ChatBotKitClient`](../classes/client.ChatBotKitClient.md) |
| `request` | [`BlueprintCreateRequest`](blueprint_v1.md#blueprintcreaterequest) |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<[`BlueprintCreateResponse`](blueprint_v1.md#blueprintcreateresponse)\>

#### Defined in

[blueprint/v1.js:82](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/blueprint/v1.js#L82)

___

### deleteBlueprint

▸ **deleteBlueprint**(`client`, `blueprintId`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<[`BlueprintDeleteResponse`](blueprint_v1.md#blueprintdeleteresponse)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`ChatBotKitClient`](../classes/client.ChatBotKitClient.md) |
| `blueprintId` | `string` |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<[`BlueprintDeleteResponse`](blueprint_v1.md#blueprintdeleteresponse)\>

#### Defined in

[blueprint/v1.js:132](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/blueprint/v1.js#L132)

___

### fetchBlueprint

▸ **fetchBlueprint**(`client`, `blueprintId`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<[`BlueprintFetchResponse`](blueprint_v1.md#blueprintfetchresponse)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`ChatBotKitClient`](../classes/client.ChatBotKitClient.md) |
| `blueprintId` | `string` |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<[`BlueprintFetchResponse`](blueprint_v1.md#blueprintfetchresponse)\>

#### Defined in

[blueprint/v1.js:60](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/blueprint/v1.js#L60)

___

### listBlueprints

▸ **listBlueprints**(`client`, `request?`): [`ResponsePromise`](../classes/client.ResponsePromise.md)\<[`BlueprintListResponse`](blueprint_v1.md#blueprintlistresponse), [`BlueprintListStreamItemType`](blueprint_v1.md#blueprintliststreamitemtype)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`ChatBotKitClient`](../classes/client.ChatBotKitClient.md) |
| `request?` | [`BlueprintListRequest`](blueprint_v1.md#blueprintlistrequest) |

#### Returns

[`ResponsePromise`](../classes/client.ResponsePromise.md)\<[`BlueprintListResponse`](blueprint_v1.md#blueprintlistresponse), [`BlueprintListStreamItemType`](blueprint_v1.md#blueprintliststreamitemtype)\>

#### Defined in

[blueprint/v1.js:41](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/blueprint/v1.js#L41)

___

### updateBlueprint

▸ **updateBlueprint**(`client`, `blueprintId`, `request`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<[`BlueprintUpdateResponse`](blueprint_v1.md#blueprintupdateresponse)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`ChatBotKitClient`](../classes/client.ChatBotKitClient.md) |
| `blueprintId` | `string` |
| `request` | [`BlueprintOptions`](blueprint_v1.md#blueprintoptions) |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<[`BlueprintUpdateResponse`](blueprint_v1.md#blueprintupdateresponse)\>

#### Defined in

[blueprint/v1.js:109](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/blueprint/v1.js#L109)
