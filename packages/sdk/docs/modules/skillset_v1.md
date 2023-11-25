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

[skillset/v1.js:2](https://github.com/chatbotkit/node-sdk/blob/1a40caa/packages/sdk/src/skillset/v1.js#L2)

___

### ResponsePromise

Ƭ **ResponsePromise**\<`T`, `U`\>: [`client`](client.md)

#### Type parameters

| Name |
| :------ |
| `T` |
| `U` |

#### Defined in

[skillset/v1.js:8](https://github.com/chatbotkit/node-sdk/blob/1a40caa/packages/sdk/src/skillset/v1.js#L8)

___

### SkillsetCreateRequest

Ƭ **SkillsetCreateRequest**\<\>: [`SkillsetOptions`](skillset_v1.md#skillsetoptions) & {}

#### Defined in

[skillset/v1.js:71](https://github.com/chatbotkit/node-sdk/blob/1a40caa/packages/sdk/src/skillset/v1.js#L71)

___

### SkillsetCreateResponse

Ƭ **SkillsetCreateResponse**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Defined in

[skillset/v1.js:75](https://github.com/chatbotkit/node-sdk/blob/1a40caa/packages/sdk/src/skillset/v1.js#L75)

___

### SkillsetDeleteResponse

Ƭ **SkillsetDeleteResponse**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Defined in

[skillset/v1.js:121](https://github.com/chatbotkit/node-sdk/blob/1a40caa/packages/sdk/src/skillset/v1.js#L121)

___

### SkillsetFetchResponse

Ƭ **SkillsetFetchResponse**\<\>: [`SkillsetInstance`](skillset_v1.md#skillsetinstance) & {}

#### Defined in

[skillset/v1.js:54](https://github.com/chatbotkit/node-sdk/blob/1a40caa/packages/sdk/src/skillset/v1.js#L54)

___

### SkillsetInstance

Ƭ **SkillsetInstance**\<\>: [`SkillsetOptions`](skillset_v1.md#skillsetoptions) & \{ `createdAt`: `number` ; `id`: `string` ; `updatedAt`: `number`  }

#### Defined in

[skillset/v1.js:22](https://github.com/chatbotkit/node-sdk/blob/1a40caa/packages/sdk/src/skillset/v1.js#L22)

___

### SkillsetListRequest

Ƭ **SkillsetListRequest**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `cursor?` | `string` |
| `meta?` | `Record`\<`string`, `string`\> |
| `take?` | `number` |

#### Defined in

[skillset/v1.js:26](https://github.com/chatbotkit/node-sdk/blob/1a40caa/packages/sdk/src/skillset/v1.js#L26)

___

### SkillsetListResponse

Ƭ **SkillsetListResponse**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `items` | [`SkillsetInstance`](skillset_v1.md#skillsetinstance)[] |

#### Defined in

[skillset/v1.js:28](https://github.com/chatbotkit/node-sdk/blob/1a40caa/packages/sdk/src/skillset/v1.js#L28)

___

### SkillsetListStreamItemType

Ƭ **SkillsetListStreamItemType**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `data` | [`SkillsetInstance`](skillset_v1.md#skillsetinstance) |
| `type` | ``"item"`` |

#### Defined in

[skillset/v1.js:33](https://github.com/chatbotkit/node-sdk/blob/1a40caa/packages/sdk/src/skillset/v1.js#L33)

___

### SkillsetListStreamType

Ƭ **SkillsetListStreamType**\<\>: [`SkillsetListStreamItemType`](skillset_v1.md#skillsetliststreamitemtype)

#### Defined in

[skillset/v1.js:35](https://github.com/chatbotkit/node-sdk/blob/1a40caa/packages/sdk/src/skillset/v1.js#L35)

___

### SkillsetOptions

Ƭ **SkillsetOptions**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `description?` | `string` |
| `meta?` | `Record`\<`string`, `any`\> |
| `name?` | `string` |

#### Defined in

[skillset/v1.js:16](https://github.com/chatbotkit/node-sdk/blob/1a40caa/packages/sdk/src/skillset/v1.js#L16)

___

### SkillsetUpdateRequest

Ƭ **SkillsetUpdateRequest**\<\>: [`SkillsetOptions`](skillset_v1.md#skillsetoptions) & {}

#### Defined in

[skillset/v1.js:95](https://github.com/chatbotkit/node-sdk/blob/1a40caa/packages/sdk/src/skillset/v1.js#L95)

___

### SkillsetUpdateResponse

Ƭ **SkillsetUpdateResponse**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Defined in

[skillset/v1.js:99](https://github.com/chatbotkit/node-sdk/blob/1a40caa/packages/sdk/src/skillset/v1.js#L99)

## Functions

### createSkillset

▸ **createSkillset**(`client`, `request`): `Promise`\<[`SkillsetCreateResponse`](skillset_v1.md#skillsetcreateresponse)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`ChatBotKitClient`](../classes/client.ChatBotKitClient.md) |
| `request` | [`SkillsetOptions`](skillset_v1.md#skillsetoptions) |

#### Returns

`Promise`\<[`SkillsetCreateResponse`](skillset_v1.md#skillsetcreateresponse)\>

#### Defined in

[skillset/v1.js:81](https://github.com/chatbotkit/node-sdk/blob/1a40caa/packages/sdk/src/skillset/v1.js#L81)

___

### deleteSkillset

▸ **deleteSkillset**(`client`, `skillsetId`): `Promise`\<[`SkillsetDeleteResponse`](skillset_v1.md#skillsetdeleteresponse)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`ChatBotKitClient`](../classes/client.ChatBotKitClient.md) |
| `skillsetId` | `string` |

#### Returns

`Promise`\<[`SkillsetDeleteResponse`](skillset_v1.md#skillsetdeleteresponse)\>

#### Defined in

[skillset/v1.js:127](https://github.com/chatbotkit/node-sdk/blob/1a40caa/packages/sdk/src/skillset/v1.js#L127)

___

### fetchSkillset

▸ **fetchSkillset**(`client`, `skillsetId`): `Promise`\<[`SkillsetFetchResponse`](skillset_v1.md#skillsetfetchresponse)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`ChatBotKitClient`](../classes/client.ChatBotKitClient.md) |
| `skillsetId` | `string` |

#### Returns

`Promise`\<[`SkillsetFetchResponse`](skillset_v1.md#skillsetfetchresponse)\>

#### Defined in

[skillset/v1.js:60](https://github.com/chatbotkit/node-sdk/blob/1a40caa/packages/sdk/src/skillset/v1.js#L60)

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

[skillset/v1.js:41](https://github.com/chatbotkit/node-sdk/blob/1a40caa/packages/sdk/src/skillset/v1.js#L41)

___

### updateSkillset

▸ **updateSkillset**(`client`, `skillsetId`, `request`): `Promise`\<[`SkillsetUpdateResponse`](skillset_v1.md#skillsetupdateresponse)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`ChatBotKitClient`](../classes/client.ChatBotKitClient.md) |
| `skillsetId` | `string` |
| `request` | [`SkillsetOptions`](skillset_v1.md#skillsetoptions) |

#### Returns

`Promise`\<[`SkillsetUpdateResponse`](skillset_v1.md#skillsetupdateresponse)\>

#### Defined in

[skillset/v1.js:106](https://github.com/chatbotkit/node-sdk/blob/1a40caa/packages/sdk/src/skillset/v1.js#L106)
