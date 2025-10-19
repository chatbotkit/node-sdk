[@chatbotkit/sdk](../README.md) / [Modules](../modules.md) / skillset/v1

# Module: skillset/v1

## Table of contents

### Type Aliases

- [ChatBotKitClient](skillset_v1.md#chatbotkitclient)
- [ResponsePromise](skillset_v1.md#responsepromise)
- [SkillsetCreateRequest](skillset_v1.md#skillsetcreaterequest)
- [SkillsetCreateResponse](skillset_v1.md#skillsetcreateresponse)
- [SkillsetDeleteResponse](skillset_v1.md#skillsetdeleteresponse)
- [SkillsetFetchResponse](skillset_v1.md#skillsetfetchresponse)
- [SkillsetInstance](skillset_v1.md#skillsetinstance)
- [SkillsetListRequest](skillset_v1.md#skillsetlistrequest)
- [SkillsetListResponse](skillset_v1.md#skillsetlistresponse)
- [SkillsetListStreamItemType](skillset_v1.md#skillsetliststreamitemtype)
- [SkillsetListStreamType](skillset_v1.md#skillsetliststreamtype)
- [SkillsetOptions](skillset_v1.md#skillsetoptions)
- [SkillsetUpdateRequest](skillset_v1.md#skillsetupdaterequest)
- [SkillsetUpdateResponse](skillset_v1.md#skillsetupdateresponse)

### Functions

- [createSkillset](skillset_v1.md#createskillset)
- [deleteSkillset](skillset_v1.md#deleteskillset)
- [fetchSkillset](skillset_v1.md#fetchskillset)
- [listSkillsets](skillset_v1.md#listskillsets)
- [updateSkillset](skillset_v1.md#updateskillset)

## Type Aliases

### ChatBotKitClient

Ƭ **ChatBotKitClient**\<\>: [`client`](client.md)

#### Defined in

[skillset/v1.js:2](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/skillset/v1.js#L2)

___

### ResponsePromise

Ƭ **ResponsePromise**\<`T`, `U`\>: [`client`](client.md)

#### Type parameters

| Name |
| :------ |
| `T` |
| `U` |

#### Defined in

[skillset/v1.js:8](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/skillset/v1.js#L8)

___

### SkillsetCreateRequest

Ƭ **SkillsetCreateRequest**\<\>: [`SkillsetOptions`](skillset_v1.md#skillsetoptions) & {}

#### Defined in

[skillset/v1.js:78](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/skillset/v1.js#L78)

___

### SkillsetCreateResponse

Ƭ **SkillsetCreateResponse**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Defined in

[skillset/v1.js:82](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/skillset/v1.js#L82)

___

### SkillsetDeleteResponse

Ƭ **SkillsetDeleteResponse**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Defined in

[skillset/v1.js:132](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/skillset/v1.js#L132)

___

### SkillsetFetchResponse

Ƭ **SkillsetFetchResponse**\<\>: [`SkillsetInstance`](skillset_v1.md#skillsetinstance) & {}

#### Defined in

[skillset/v1.js:60](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/skillset/v1.js#L60)

___

### SkillsetInstance

Ƭ **SkillsetInstance**\<\>: [`SkillsetOptions`](skillset_v1.md#skillsetoptions) & \{ `createdAt`: `number` ; `id`: `string` ; `updatedAt`: `number`  }

#### Defined in

[skillset/v1.js:23](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/skillset/v1.js#L23)

___

### SkillsetListRequest

Ƭ **SkillsetListRequest**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `cursor?` | `string` |
| `meta?` | [`Record`]( https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type )\<`string`, `string`\> |
| `order?` | ``"desc"`` \| ``"asc"`` |
| `take?` | `number` |

#### Defined in

[skillset/v1.js:32](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/skillset/v1.js#L32)

___

### SkillsetListResponse

Ƭ **SkillsetListResponse**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `items` | [`SkillsetInstance`](skillset_v1.md#skillsetinstance)[] |

#### Defined in

[skillset/v1.js:34](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/skillset/v1.js#L34)

___

### SkillsetListStreamItemType

Ƭ **SkillsetListStreamItemType**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `data` | [`SkillsetInstance`](skillset_v1.md#skillsetinstance) |
| `type` | ``"item"`` |

#### Defined in

[skillset/v1.js:39](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/skillset/v1.js#L39)

___

### SkillsetListStreamType

Ƭ **SkillsetListStreamType**\<\>: [`SkillsetListStreamItemType`](skillset_v1.md#skillsetliststreamitemtype)

#### Defined in

[skillset/v1.js:41](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/skillset/v1.js#L41)

___

### SkillsetOptions

Ƭ **SkillsetOptions**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `description?` | `string` |
| `meta?` | [`Record`]( https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type )\<`string`, `any`\> |
| `name?` | `string` |
| `visibility?` | ``"private"`` \| ``"protected"`` \| ``"public"`` |

#### Defined in

[skillset/v1.js:17](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/skillset/v1.js#L17)

___

### SkillsetUpdateRequest

Ƭ **SkillsetUpdateRequest**\<\>: [`SkillsetOptions`](skillset_v1.md#skillsetoptions) & {}

#### Defined in

[skillset/v1.js:104](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/skillset/v1.js#L104)

___

### SkillsetUpdateResponse

Ƭ **SkillsetUpdateResponse**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Defined in

[skillset/v1.js:108](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/skillset/v1.js#L108)

## Functions

### createSkillset

▸ **createSkillset**(`client`, `request`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<[`SkillsetCreateResponse`](skillset_v1.md#skillsetcreateresponse)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`ChatBotKitClient`](../classes/client.ChatBotKitClient.md) |
| `request` | [`SkillsetOptions`](skillset_v1.md#skillsetoptions) |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<[`SkillsetCreateResponse`](skillset_v1.md#skillsetcreateresponse)\>

#### Defined in

[skillset/v1.js:88](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/skillset/v1.js#L88)

___

### deleteSkillset

▸ **deleteSkillset**(`client`, `skillsetId`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<[`SkillsetDeleteResponse`](skillset_v1.md#skillsetdeleteresponse)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`ChatBotKitClient`](../classes/client.ChatBotKitClient.md) |
| `skillsetId` | `string` |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<[`SkillsetDeleteResponse`](skillset_v1.md#skillsetdeleteresponse)\>

#### Defined in

[skillset/v1.js:138](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/skillset/v1.js#L138)

___

### fetchSkillset

▸ **fetchSkillset**(`client`, `skillsetId`): [`ResponsePromise`](../classes/client.ResponsePromise.md)\<[`SkillsetFetchResponse`](skillset_v1.md#skillsetfetchresponse), `never`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`ChatBotKitClient`](../classes/client.ChatBotKitClient.md) |
| `skillsetId` | `string` |

#### Returns

[`ResponsePromise`](../classes/client.ResponsePromise.md)\<[`SkillsetFetchResponse`](skillset_v1.md#skillsetfetchresponse), `never`\>

#### Defined in

[skillset/v1.js:66](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/skillset/v1.js#L66)

___

### listSkillsets

▸ **listSkillsets**(`client`, `request?`): [`ResponsePromise`](../classes/client.ResponsePromise.md)\<[`SkillsetListResponse`](skillset_v1.md#skillsetlistresponse), [`SkillsetListStreamItemType`](skillset_v1.md#skillsetliststreamitemtype)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`ChatBotKitClient`](../classes/client.ChatBotKitClient.md) |
| `request?` | [`SkillsetListRequest`](skillset_v1.md#skillsetlistrequest) |

#### Returns

[`ResponsePromise`](../classes/client.ResponsePromise.md)\<[`SkillsetListResponse`](skillset_v1.md#skillsetlistresponse), [`SkillsetListStreamItemType`](skillset_v1.md#skillsetliststreamitemtype)\>

#### Defined in

[skillset/v1.js:47](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/skillset/v1.js#L47)

___

### updateSkillset

▸ **updateSkillset**(`client`, `skillsetId`, `request`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<[`SkillsetUpdateResponse`](skillset_v1.md#skillsetupdateresponse)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`ChatBotKitClient`](../classes/client.ChatBotKitClient.md) |
| `skillsetId` | `string` |
| `request` | [`SkillsetOptions`](skillset_v1.md#skillsetoptions) |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<[`SkillsetUpdateResponse`](skillset_v1.md#skillsetupdateresponse)\>

#### Defined in

[skillset/v1.js:115](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/skillset/v1.js#L115)
