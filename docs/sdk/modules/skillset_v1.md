[@chatbotkit/sdk](../README.md) / [Modules](../modules.md) / skillset/v1

# Module: skillset/v1

## Table of contents

### Type Aliases

- [ChatBotKitClient](skillset_v1.md#chatbotkitclient)
- [SkillsetCreateRequest](skillset_v1.md#skillsetcreaterequest)
- [SkillsetCreateResponse](skillset_v1.md#skillsetcreateresponse)
- [SkillsetDeleteResponse](skillset_v1.md#skillsetdeleteresponse)
- [SkillsetFetchResponse](skillset_v1.md#skillsetfetchresponse)
- [SkillsetInstance](skillset_v1.md#skillsetinstance)
- [SkillsetListResponse](skillset_v1.md#skillsetlistresponse)
- [SkillsetListStreamItemType](skillset_v1.md#skillsetliststreamitemtype)
- [SkillsetListStreamType](skillset_v1.md#skillsetliststreamtype)
- [SkillsetOptions](skillset_v1.md#skillsetoptions)
- [SkillsetUpdateRequest](skillset_v1.md#skillsetupdaterequest)
- [SkillsetUpdateResponse](skillset_v1.md#skillsetupdateresponse)

### Functions

- [skillsetCreate](skillset_v1.md#skillsetcreate)
- [skillsetDelete](skillset_v1.md#skillsetdelete)
- [skillsetFetch](skillset_v1.md#skillsetfetch)
- [skillsetList](skillset_v1.md#skillsetlist)
- [skillsetUpdate](skillset_v1.md#skillsetupdate)

## Type Aliases

### ChatBotKitClient

Ƭ **ChatBotKitClient**<\>: `ChatBotKitClient`

#### Defined in

[skillset/v1.js:2](https://github.com/chatbotkit/node-sdk/blob/976a254/packages/sdk/src/skillset/v1.js#L2)

___

### SkillsetCreateRequest

Ƭ **SkillsetCreateRequest**<\>: [`SkillsetOptions`](skillset_v1.md#skillsetoptions)

#### Defined in

[skillset/v1.js:48](https://github.com/chatbotkit/node-sdk/blob/976a254/packages/sdk/src/skillset/v1.js#L48)

___

### SkillsetCreateResponse

Ƭ **SkillsetCreateResponse**<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Defined in

[skillset/v1.js:52](https://github.com/chatbotkit/node-sdk/blob/976a254/packages/sdk/src/skillset/v1.js#L52)

___

### SkillsetDeleteResponse

Ƭ **SkillsetDeleteResponse**<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Defined in

[skillset/v1.js:85](https://github.com/chatbotkit/node-sdk/blob/976a254/packages/sdk/src/skillset/v1.js#L85)

___

### SkillsetFetchResponse

Ƭ **SkillsetFetchResponse**<\>: [`SkillsetInstance`](skillset_v1.md#skillsetinstance)

#### Defined in

[skillset/v1.js:37](https://github.com/chatbotkit/node-sdk/blob/976a254/packages/sdk/src/skillset/v1.js#L37)

___

### SkillsetInstance

Ƭ **SkillsetInstance**<\>: { `createdAt`: `number` ; `id`: `string` ; `updatedAt`: `number`  } & [`SkillsetOptions`](skillset_v1.md#skillsetoptions)

#### Defined in

[skillset/v1.js:16](https://github.com/chatbotkit/node-sdk/blob/976a254/packages/sdk/src/skillset/v1.js#L16)

___

### SkillsetListResponse

Ƭ **SkillsetListResponse**<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `items` | [`SkillsetInstance`](skillset_v1.md#skillsetinstance)[] |

#### Defined in

[skillset/v1.js:20](https://github.com/chatbotkit/node-sdk/blob/976a254/packages/sdk/src/skillset/v1.js#L20)

___

### SkillsetListStreamItemType

Ƭ **SkillsetListStreamItemType**<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `data` | [`SkillsetInstance`](skillset_v1.md#skillsetinstance) |
| `type` | ``"item"`` |

#### Defined in

[skillset/v1.js:25](https://github.com/chatbotkit/node-sdk/blob/976a254/packages/sdk/src/skillset/v1.js#L25)

___

### SkillsetListStreamType

Ƭ **SkillsetListStreamType**<\>: [`SkillsetListStreamItemType`](skillset_v1.md#skillsetliststreamitemtype)

#### Defined in

[skillset/v1.js:27](https://github.com/chatbotkit/node-sdk/blob/976a254/packages/sdk/src/skillset/v1.js#L27)

___

### SkillsetOptions

Ƭ **SkillsetOptions**<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `description?` | `string` |
| `meta?` | `Record`<`string`, `any`\> |
| `name?` | `string` |

#### Defined in

[skillset/v1.js:10](https://github.com/chatbotkit/node-sdk/blob/976a254/packages/sdk/src/skillset/v1.js#L10)

___

### SkillsetUpdateRequest

Ƭ **SkillsetUpdateRequest**<\>: [`SkillsetOptions`](skillset_v1.md#skillsetoptions)

#### Defined in

[skillset/v1.js:65](https://github.com/chatbotkit/node-sdk/blob/976a254/packages/sdk/src/skillset/v1.js#L65)

___

### SkillsetUpdateResponse

Ƭ **SkillsetUpdateResponse**<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Defined in

[skillset/v1.js:69](https://github.com/chatbotkit/node-sdk/blob/976a254/packages/sdk/src/skillset/v1.js#L69)

## Functions

### skillsetCreate

▸ **skillsetCreate**(`client`, `request`): `Promise`<[`SkillsetCreateResponse`](skillset_v1.md#skillsetcreateresponse)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | `ChatBotKitClient` |
| `request` | [`SkillsetOptions`](skillset_v1.md#skillsetoptions) |

#### Returns

`Promise`<[`SkillsetCreateResponse`](skillset_v1.md#skillsetcreateresponse)\>

#### Defined in

[skillset/v1.js:58](https://github.com/chatbotkit/node-sdk/blob/976a254/packages/sdk/src/skillset/v1.js#L58)

___

### skillsetDelete

▸ **skillsetDelete**(`client`, `skillsetId`): `Promise`<[`SkillsetDeleteResponse`](skillset_v1.md#skillsetdeleteresponse)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | `ChatBotKitClient` |
| `skillsetId` | `string` |

#### Returns

`Promise`<[`SkillsetDeleteResponse`](skillset_v1.md#skillsetdeleteresponse)\>

#### Defined in

[skillset/v1.js:91](https://github.com/chatbotkit/node-sdk/blob/976a254/packages/sdk/src/skillset/v1.js#L91)

___

### skillsetFetch

▸ **skillsetFetch**(`client`, `skillsetId`): `Promise`<[`SkillsetInstance`](skillset_v1.md#skillsetinstance)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | `ChatBotKitClient` |
| `skillsetId` | `string` |

#### Returns

`Promise`<[`SkillsetInstance`](skillset_v1.md#skillsetinstance)\>

#### Defined in

[skillset/v1.js:43](https://github.com/chatbotkit/node-sdk/blob/976a254/packages/sdk/src/skillset/v1.js#L43)

___

### skillsetList

▸ **skillsetList**(`client`): `ResponsePromise`<[`SkillsetListResponse`](skillset_v1.md#skillsetlistresponse), [`SkillsetListStreamItemType`](skillset_v1.md#skillsetliststreamitemtype)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | `ChatBotKitClient` |

#### Returns

`ResponsePromise`<[`SkillsetListResponse`](skillset_v1.md#skillsetlistresponse), [`SkillsetListStreamItemType`](skillset_v1.md#skillsetliststreamitemtype)\>

#### Defined in

[skillset/v1.js:32](https://github.com/chatbotkit/node-sdk/blob/976a254/packages/sdk/src/skillset/v1.js#L32)

___

### skillsetUpdate

▸ **skillsetUpdate**(`client`, `skillsetId`, `request`): `Promise`<[`SkillsetUpdateResponse`](skillset_v1.md#skillsetupdateresponse)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | `ChatBotKitClient` |
| `skillsetId` | `string` |
| `request` | [`SkillsetOptions`](skillset_v1.md#skillsetoptions) |

#### Returns

`Promise`<[`SkillsetUpdateResponse`](skillset_v1.md#skillsetupdateresponse)\>

#### Defined in

[skillset/v1.js:76](https://github.com/chatbotkit/node-sdk/blob/976a254/packages/sdk/src/skillset/v1.js#L76)
