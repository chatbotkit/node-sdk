[@chatbotkit/sdk](../README.md) / [Modules](../modules.md) / platform/action/v1

# Module: platform/action/v1

## Table of contents

### Type Aliases

- [ChatBotKitClient](platform_action_v1.md#chatbotkitclient)
- [PlatformActionListItem](platform_action_v1.md#platformactionlistitem)
- [PlatformActionListRequest](platform_action_v1.md#platformactionlistrequest)
- [PlatformActionListResponse](platform_action_v1.md#platformactionlistresponse)
- [PlatformActionListStreamType](platform_action_v1.md#platformactionliststreamtype)
- [ResponsePromise](platform_action_v1.md#responsepromise)

### Functions

- [listPlatformActions](platform_action_v1.md#listplatformactions)

## Type Aliases

### ChatBotKitClient

Ƭ **ChatBotKitClient**\<\>: [`client`](client.md)

#### Defined in

[platform/action/v1.js:2](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/platform/action/v1.js#L2)

___

### PlatformActionListItem

Ƭ **PlatformActionListItem**\<\>: [`PlatformActionListResponse`](platform_action_v1.md#platformactionlistresponse)[``"items"``][`number`]

#### Defined in

[platform/action/v1.js:21](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/platform/action/v1.js#L21)

___

### PlatformActionListRequest

Ƭ **PlatformActionListRequest**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `cursor?` | `string` |
| `meta?` | [`Record`]( https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type )\<`string`, `string`\> |
| `order?` | ``"desc"`` \| ``"asc"`` |
| `take?` | `number` |

#### Defined in

[platform/action/v1.js:17](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/platform/action/v1.js#L17)

___

### PlatformActionListResponse

Ƭ **PlatformActionListResponse**\<\>: `operations`[``"listPlatformActions"``][``"responses"``][``"200"``][``"content"``][``"application/json"``]

#### Defined in

[platform/action/v1.js:19](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/platform/action/v1.js#L19)

___

### PlatformActionListStreamType

Ƭ **PlatformActionListStreamType**\<\>: `operations`[``"listPlatformActions"``][``"responses"``][``"200"``][``"content"``][``"application/jsonl"``]

#### Defined in

[platform/action/v1.js:23](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/platform/action/v1.js#L23)

___

### ResponsePromise

Ƭ **ResponsePromise**\<`T`, `U`\>: [`client`](client.md)

#### Type parameters

| Name |
| :------ |
| `T` |
| `U` |

#### Defined in

[platform/action/v1.js:8](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/platform/action/v1.js#L8)

## Functions

### listPlatformActions

▸ **listPlatformActions**(`client`, `request?`): [`ResponsePromise`](../classes/client.ResponsePromise.md)\<{}, {}\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`ChatBotKitClient`](../classes/client.ChatBotKitClient.md) |
| `request?` | [`PlatformActionListRequest`](platform_action_v1.md#platformactionlistrequest) |

#### Returns

[`ResponsePromise`](../classes/client.ResponsePromise.md)\<{}, {}\>

#### Defined in

[platform/action/v1.js:29](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/platform/action/v1.js#L29)
