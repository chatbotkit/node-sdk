[@chatbotkit/sdk](../README.md) / [Modules](../modules.md) / skillset/ability/v1

# Module: skillset/ability/v1

## Table of contents

### Type Aliases

- [AbilityCreateRequest](skillset_ability_v1.md#abilitycreaterequest)
- [AbilityCreateResponse](skillset_ability_v1.md#abilitycreateresponse)
- [AbilityDeleteResponse](skillset_ability_v1.md#abilitydeleteresponse)
- [AbilityFetchResponse](skillset_ability_v1.md#abilityfetchresponse)
- [AbilityInstance](skillset_ability_v1.md#abilityinstance)
- [AbilityListResponse](skillset_ability_v1.md#abilitylistresponse)
- [AbilityListStreamItem](skillset_ability_v1.md#abilityliststreamitem)
- [AbilityListStreamType](skillset_ability_v1.md#abilityliststreamtype)
- [AbilityOptions](skillset_ability_v1.md#abilityoptions)
- [AbilityUpdateRequest](skillset_ability_v1.md#abilityupdaterequest)
- [AbilityUpdateResponse](skillset_ability_v1.md#abilityupdateresponse)
- [ChatBotKitClient](skillset_ability_v1.md#chatbotkitclient)

### Functions

- [abilityCreate](skillset_ability_v1.md#abilitycreate)
- [abilityDelete](skillset_ability_v1.md#abilitydelete)
- [abilityFetch](skillset_ability_v1.md#abilityfetch)
- [abilityList](skillset_ability_v1.md#abilitylist)
- [abilityUpdate](skillset_ability_v1.md#abilityupdate)

## Type Aliases

### AbilityCreateRequest

Ƭ **AbilityCreateRequest**<\>: [`AbilityOptions`](skillset_ability_v1.md#abilityoptions)

#### Defined in

[skillset/ability/v1.js:53](https://github.com/chatbotkit/node-sdk/blob/c325fd2/packages/sdk/src/skillset/ability/v1.js#L53)

___

### AbilityCreateResponse

Ƭ **AbilityCreateResponse**<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Defined in

[skillset/ability/v1.js:57](https://github.com/chatbotkit/node-sdk/blob/c325fd2/packages/sdk/src/skillset/ability/v1.js#L57)

___

### AbilityDeleteResponse

Ƭ **AbilityDeleteResponse**<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Defined in

[skillset/ability/v1.js:95](https://github.com/chatbotkit/node-sdk/blob/c325fd2/packages/sdk/src/skillset/ability/v1.js#L95)

___

### AbilityFetchResponse

Ƭ **AbilityFetchResponse**<\>: [`AbilityInstance`](skillset_ability_v1.md#abilityinstance)

#### Defined in

[skillset/ability/v1.js:39](https://github.com/chatbotkit/node-sdk/blob/c325fd2/packages/sdk/src/skillset/ability/v1.js#L39)

___

### AbilityInstance

Ƭ **AbilityInstance**<\>: { `createdAt`: `number` ; `id`: `string` ; `updatedAt`: `number`  } & [`AbilityOptions`](skillset_ability_v1.md#abilityoptions)

#### Defined in

[skillset/ability/v1.js:17](https://github.com/chatbotkit/node-sdk/blob/c325fd2/packages/sdk/src/skillset/ability/v1.js#L17)

___

### AbilityListResponse

Ƭ **AbilityListResponse**<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `items` | [`AbilityInstance`](skillset_ability_v1.md#abilityinstance)[] |

#### Defined in

[skillset/ability/v1.js:21](https://github.com/chatbotkit/node-sdk/blob/c325fd2/packages/sdk/src/skillset/ability/v1.js#L21)

___

### AbilityListStreamItem

Ƭ **AbilityListStreamItem**<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `data` | [`AbilityInstance`](skillset_ability_v1.md#abilityinstance) |
| `type` | ``"item"`` |

#### Defined in

[skillset/ability/v1.js:26](https://github.com/chatbotkit/node-sdk/blob/c325fd2/packages/sdk/src/skillset/ability/v1.js#L26)

___

### AbilityListStreamType

Ƭ **AbilityListStreamType**<\>: [`AbilityListStreamItem`](skillset_ability_v1.md#abilityliststreamitem)

#### Defined in

[skillset/ability/v1.js:28](https://github.com/chatbotkit/node-sdk/blob/c325fd2/packages/sdk/src/skillset/ability/v1.js#L28)

___

### AbilityOptions

Ƭ **AbilityOptions**<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `description` | `string` |
| `instruction` | `string` |
| `meta?` | `Record`<`string`, `any`\> |
| `name` | `string` |

#### Defined in

[skillset/ability/v1.js:11](https://github.com/chatbotkit/node-sdk/blob/c325fd2/packages/sdk/src/skillset/ability/v1.js#L11)

___

### AbilityUpdateRequest

Ƭ **AbilityUpdateRequest**<\>: [`AbilityOptions`](skillset_ability_v1.md#abilityoptions)

#### Defined in

[skillset/ability/v1.js:71](https://github.com/chatbotkit/node-sdk/blob/c325fd2/packages/sdk/src/skillset/ability/v1.js#L71)

___

### AbilityUpdateResponse

Ƭ **AbilityUpdateResponse**<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Defined in

[skillset/ability/v1.js:75](https://github.com/chatbotkit/node-sdk/blob/c325fd2/packages/sdk/src/skillset/ability/v1.js#L75)

___

### ChatBotKitClient

Ƭ **ChatBotKitClient**<\>: `ChatBotKitClient`

#### Defined in

[skillset/ability/v1.js:2](https://github.com/chatbotkit/node-sdk/blob/c325fd2/packages/sdk/src/skillset/ability/v1.js#L2)

## Functions

### abilityCreate

▸ **abilityCreate**(`client`, `skillsetId`, `request`): `Promise`<[`AbilityCreateResponse`](skillset_ability_v1.md#abilitycreateresponse)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | `ChatBotKitClient` |
| `skillsetId` | `string` |
| `request` | [`AbilityOptions`](skillset_ability_v1.md#abilityoptions) |

#### Returns

`Promise`<[`AbilityCreateResponse`](skillset_ability_v1.md#abilitycreateresponse)\>

#### Defined in

[skillset/ability/v1.js:64](https://github.com/chatbotkit/node-sdk/blob/c325fd2/packages/sdk/src/skillset/ability/v1.js#L64)

___

### abilityDelete

▸ **abilityDelete**(`client`, `skillsetId`, `abilityId`): `Promise`<[`AbilityDeleteResponse`](skillset_ability_v1.md#abilitydeleteresponse)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | `ChatBotKitClient` |
| `skillsetId` | `string` |
| `abilityId` | `string` |

#### Returns

`Promise`<[`AbilityDeleteResponse`](skillset_ability_v1.md#abilitydeleteresponse)\>

#### Defined in

[skillset/ability/v1.js:102](https://github.com/chatbotkit/node-sdk/blob/c325fd2/packages/sdk/src/skillset/ability/v1.js#L102)

___

### abilityFetch

▸ **abilityFetch**(`client`, `skillsetId`, `abilityId`): `Promise`<[`AbilityInstance`](skillset_ability_v1.md#abilityinstance)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | `ChatBotKitClient` |
| `skillsetId` | `string` |
| `abilityId` | `string` |

#### Returns

`Promise`<[`AbilityInstance`](skillset_ability_v1.md#abilityinstance)\>

#### Defined in

[skillset/ability/v1.js:46](https://github.com/chatbotkit/node-sdk/blob/c325fd2/packages/sdk/src/skillset/ability/v1.js#L46)

___

### abilityList

▸ **abilityList**(`client`, `skillsetId`): `ResponsePromise`<[`AbilityListResponse`](skillset_ability_v1.md#abilitylistresponse), [`AbilityListStreamItem`](skillset_ability_v1.md#abilityliststreamitem)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | `ChatBotKitClient` |
| `skillsetId` | `string` |

#### Returns

`ResponsePromise`<[`AbilityListResponse`](skillset_ability_v1.md#abilitylistresponse), [`AbilityListStreamItem`](skillset_ability_v1.md#abilityliststreamitem)\>

#### Defined in

[skillset/ability/v1.js:34](https://github.com/chatbotkit/node-sdk/blob/c325fd2/packages/sdk/src/skillset/ability/v1.js#L34)

___

### abilityUpdate

▸ **abilityUpdate**(`client`, `skillsetId`, `abilityId`, `request`): `Promise`<[`AbilityUpdateResponse`](skillset_ability_v1.md#abilityupdateresponse)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | `ChatBotKitClient` |
| `skillsetId` | `string` |
| `abilityId` | `string` |
| `request` | [`AbilityOptions`](skillset_ability_v1.md#abilityoptions) |

#### Returns

`Promise`<[`AbilityUpdateResponse`](skillset_ability_v1.md#abilityupdateresponse)\>

#### Defined in

[skillset/ability/v1.js:83](https://github.com/chatbotkit/node-sdk/blob/c325fd2/packages/sdk/src/skillset/ability/v1.js#L83)
