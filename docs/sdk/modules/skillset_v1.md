[@chatbotkit/sdk](../README.md) / [Modules](../modules.md) / skillset/v1

# Module: skillset/v1

## Table of contents

### Type Aliases

- [ChatBotKitClient](skillset_v1.md#chatbotkitclient)
- [SkillsetCreateRequest](skillset_v1.md#skillsetcreaterequest)
- [SkillsetCreateResponse](skillset_v1.md#skillsetcreateresponse)
- [SkillsetDeleteResponse](skillset_v1.md#skillsetdeleteresponse)
- [SkillsetFetchResponse](skillset_v1.md#skillsetfetchresponse)
- [SkillsetListResponse](skillset_v1.md#skillsetlistresponse)
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

[skillset/v1.js:2](https://github.com/chatbotkit/node-sdk/blob/f805d5d/packages/sdk/src/skillset/v1.js#L2)

___

### SkillsetCreateRequest

Ƭ **SkillsetCreateRequest**<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `description?` | `string` |
| `name?` | `string` |

#### Defined in

[skillset/v1.js:38](https://github.com/chatbotkit/node-sdk/blob/f805d5d/packages/sdk/src/skillset/v1.js#L38)

___

### SkillsetCreateResponse

Ƭ **SkillsetCreateResponse**<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Defined in

[skillset/v1.js:42](https://github.com/chatbotkit/node-sdk/blob/f805d5d/packages/sdk/src/skillset/v1.js#L42)

___

### SkillsetDeleteResponse

Ƭ **SkillsetDeleteResponse**<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Defined in

[skillset/v1.js:78](https://github.com/chatbotkit/node-sdk/blob/f805d5d/packages/sdk/src/skillset/v1.js#L78)

___

### SkillsetFetchResponse

Ƭ **SkillsetFetchResponse**<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `createdAt` | `number` |
| `description?` | `string` |
| `id` | `string` |
| `name?` | `string` |
| `updatedAt` | `number` |

#### Defined in

[skillset/v1.js:24](https://github.com/chatbotkit/node-sdk/blob/f805d5d/packages/sdk/src/skillset/v1.js#L24)

___

### SkillsetListResponse

Ƭ **SkillsetListResponse**<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Defined in

[skillset/v1.js:8](https://github.com/chatbotkit/node-sdk/blob/f805d5d/packages/sdk/src/skillset/v1.js#L8)

___

### SkillsetUpdateRequest

Ƭ **SkillsetUpdateRequest**<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `description?` | `string` |
| `name?` | `string` |

#### Defined in

[skillset/v1.js:58](https://github.com/chatbotkit/node-sdk/blob/f805d5d/packages/sdk/src/skillset/v1.js#L58)

___

### SkillsetUpdateResponse

Ƭ **SkillsetUpdateResponse**<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Defined in

[skillset/v1.js:62](https://github.com/chatbotkit/node-sdk/blob/f805d5d/packages/sdk/src/skillset/v1.js#L62)

## Functions

### skillsetCreate

▸ **skillsetCreate**(`client`, `request`): `Promise`<[`SkillsetCreateResponse`](skillset_v1.md#skillsetcreateresponse)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | `ChatBotKitClient` |
| `request` | [`SkillsetCreateRequest`](skillset_v1.md#skillsetcreaterequest) |

#### Returns

`Promise`<[`SkillsetCreateResponse`](skillset_v1.md#skillsetcreateresponse)\>

#### Defined in

[skillset/v1.js:48](https://github.com/chatbotkit/node-sdk/blob/f805d5d/packages/sdk/src/skillset/v1.js#L48)

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

[skillset/v1.js:84](https://github.com/chatbotkit/node-sdk/blob/f805d5d/packages/sdk/src/skillset/v1.js#L84)

___

### skillsetFetch

▸ **skillsetFetch**(`client`, `skillsetId`): `Promise`<[`SkillsetFetchResponse`](skillset_v1.md#skillsetfetchresponse)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | `ChatBotKitClient` |
| `skillsetId` | `string` |

#### Returns

`Promise`<[`SkillsetFetchResponse`](skillset_v1.md#skillsetfetchresponse)\>

#### Defined in

[skillset/v1.js:30](https://github.com/chatbotkit/node-sdk/blob/f805d5d/packages/sdk/src/skillset/v1.js#L30)

___

### skillsetList

▸ **skillsetList**(`client`): `Promise`<[`SkillsetListResponse`](skillset_v1.md#skillsetlistresponse)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | `ChatBotKitClient` |

#### Returns

`Promise`<[`SkillsetListResponse`](skillset_v1.md#skillsetlistresponse)\>

#### Defined in

[skillset/v1.js:13](https://github.com/chatbotkit/node-sdk/blob/f805d5d/packages/sdk/src/skillset/v1.js#L13)

___

### skillsetUpdate

▸ **skillsetUpdate**(`client`, `skillsetId`, `request`): `Promise`<[`SkillsetUpdateResponse`](skillset_v1.md#skillsetupdateresponse)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | `ChatBotKitClient` |
| `skillsetId` | `string` |
| `request` | [`SkillsetUpdateRequest`](skillset_v1.md#skillsetupdaterequest) |

#### Returns

`Promise`<[`SkillsetUpdateResponse`](skillset_v1.md#skillsetupdateresponse)\>

#### Defined in

[skillset/v1.js:69](https://github.com/chatbotkit/node-sdk/blob/f805d5d/packages/sdk/src/skillset/v1.js#L69)
