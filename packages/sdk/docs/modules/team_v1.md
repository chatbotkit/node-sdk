[@chatbotkit/sdk](../README.md) / [Modules](../modules.md) / team/v1

# Module: team/v1

## Table of contents

### Type Aliases

- [ChatBotKitClient](team_v1.md#chatbotkitclient)
- [ResponsePromise](team_v1.md#responsepromise)
- [TeamListRequest](team_v1.md#teamlistrequest)
- [TeamListResponse](team_v1.md#teamlistresponse)
- [TeamListStreamType](team_v1.md#teamliststreamtype)

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

[team/v1.js:17](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/team/v1.js#L17)

___

### TeamListResponse

Ƭ **TeamListResponse**\<\>: `operations`[``"listTeams"``][``"responses"``][``"200"``][``"content"``][``"application/json"``]

#### Defined in

[team/v1.js:19](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/team/v1.js#L19)

___

### TeamListStreamType

Ƭ **TeamListStreamType**\<\>: `operations`[``"listTeams"``][``"responses"``][``"200"``][``"content"``][``"application/jsonl"``]

#### Defined in

[team/v1.js:21](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/team/v1.js#L21)

## Functions

### listTeams

▸ **listTeams**(`client`, `request?`): [`ResponsePromise`](../classes/client.ResponsePromise.md)\<{}, {}\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`ChatBotKitClient`](../classes/client.ChatBotKitClient.md) |
| `request?` | [`TeamListRequest`](team_v1.md#teamlistrequest) |

#### Returns

[`ResponsePromise`](../classes/client.ResponsePromise.md)\<{}, {}\>

#### Defined in

[team/v1.js:27](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/team/v1.js#L27)
