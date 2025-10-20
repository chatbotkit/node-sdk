[@chatbotkit/sdk](../README.md) / [Modules](../modules.md) / team/v1

# Module: team/v1

## Table of contents

### Type Aliases

- [ChatBotKitClient](team_v1.md#chatbotkitclient)
- [ResponsePromise](team_v1.md#responsepromise)
- [TeamInstance](team_v1.md#teaminstance)
- [TeamListRequest](team_v1.md#teamlistrequest)
- [TeamListResponse](team_v1.md#teamlistresponse)
- [TeamListStreamItemType](team_v1.md#teamliststreamitemtype)
- [TeamListStreamType](team_v1.md#teamliststreamtype)
- [TeamOptions](team_v1.md#teamoptions)

### Functions

- [listTeams](team_v1.md#listteams)

## Type Aliases

### ChatBotKitClient

Ƭ **ChatBotKitClient**\<\>: [`client`](client.md)

#### Defined in

[team/v1.js:2](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/team/v1.js#L2)

___

### ResponsePromise

Ƭ **ResponsePromise**\<`T`, `U`\>: [`client`](client.md)

#### Type parameters

| Name |
| :------ |
| `T` |
| `U` |

#### Defined in

[team/v1.js:8](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/team/v1.js#L8)

___

### TeamInstance

Ƭ **TeamInstance**\<\>: [`TeamOptions`](team_v1.md#teamoptions) & \{ `createdAt`: `number` ; `id`: `string` ; `updatedAt`: `number`  }

#### Defined in

[team/v1.js:22](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/team/v1.js#L22)

___

### TeamListRequest

Ƭ **TeamListRequest**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `cursor?` | `string` |
| `meta?` | [`Record`]( https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type )\<`string`, `string`\> |
| `order?` | ``"desc"`` \| ``"asc"`` |
| `take?` | `number` |

#### Defined in

[team/v1.js:31](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/team/v1.js#L31)

___

### TeamListResponse

Ƭ **TeamListResponse**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `items` | [`TeamInstance`](team_v1.md#teaminstance)[] |

#### Defined in

[team/v1.js:33](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/team/v1.js#L33)

___

### TeamListStreamItemType

Ƭ **TeamListStreamItemType**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `data` | [`TeamInstance`](team_v1.md#teaminstance) |
| `type` | ``"item"`` |

#### Defined in

[team/v1.js:38](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/team/v1.js#L38)

___

### TeamListStreamType

Ƭ **TeamListStreamType**\<\>: [`TeamListStreamItemType`](team_v1.md#teamliststreamitemtype)

#### Defined in

[team/v1.js:40](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/team/v1.js#L40)

___

### TeamOptions

Ƭ **TeamOptions**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `description?` | `string` |
| `meta?` | [`Record`]( https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type )\<`string`, `any`\> |
| `name?` | `string` |

#### Defined in

[team/v1.js:16](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/team/v1.js#L16)

## Functions

### listTeams

▸ **listTeams**(`client`, `request?`): [`ResponsePromise`](../classes/client.ResponsePromise.md)\<[`TeamListResponse`](team_v1.md#teamlistresponse), [`TeamListStreamItemType`](team_v1.md#teamliststreamitemtype)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`ChatBotKitClient`](../classes/client.ChatBotKitClient.md) |
| `request?` | [`TeamListRequest`](team_v1.md#teamlistrequest) |

#### Returns

[`ResponsePromise`](../classes/client.ResponsePromise.md)\<[`TeamListResponse`](team_v1.md#teamlistresponse), [`TeamListStreamItemType`](team_v1.md#teamliststreamitemtype)\>

#### Defined in

[team/v1.js:46](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/team/v1.js#L46)
