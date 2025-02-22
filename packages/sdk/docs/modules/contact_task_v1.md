[@chatbotkit/sdk](../README.md) / [Modules](../modules.md) / contact/task/v1

# Module: contact/task/v1

## Table of contents

### Type Aliases

- [ChatBotKitClient](contact_task_v1.md#chatbotkitclient)
- [ResponsePromise](contact_task_v1.md#responsepromise)
- [TaskInstance](contact_task_v1.md#taskinstance)
- [TaskListRequest](contact_task_v1.md#tasklistrequest)
- [TaskListResponse](contact_task_v1.md#tasklistresponse)
- [TaskListStreamItemType](contact_task_v1.md#taskliststreamitemtype)
- [TaskListStreamType](contact_task_v1.md#taskliststreamtype)
- [TaskOptions](contact_task_v1.md#taskoptions)

### Functions

- [listTasks](contact_task_v1.md#listtasks)

## Type Aliases

### ChatBotKitClient

Ƭ **ChatBotKitClient**\<\>: [`client`](client.md)

#### Defined in

[contact/task/v1.js:2](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/contact/task/v1.js#L2)

___

### ResponsePromise

Ƭ **ResponsePromise**\<`T`, `U`\>: [`client`](client.md)

#### Type parameters

| Name |
| :------ |
| `T` |
| `U` |

#### Defined in

[contact/task/v1.js:8](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/contact/task/v1.js#L8)

___

### TaskInstance

Ƭ **TaskInstance**\<\>: [`TaskOptions`](contact_task_v1.md#taskoptions) & \{ `createdAt`: `number` ; `id`: `string` ; `updatedAt`: `number`  }

#### Defined in

[contact/task/v1.js:24](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/contact/task/v1.js#L24)

___

### TaskListRequest

Ƭ **TaskListRequest**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `cursor?` | `string` |
| `meta?` | [`Record`]( https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type )\<`string`, `string`\> |
| `order?` | ``"desc"`` \| ``"asc"`` |
| `take?` | `number` |

#### Defined in

[contact/task/v1.js:28](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/contact/task/v1.js#L28)

___

### TaskListResponse

Ƭ **TaskListResponse**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `items` | [`TaskInstance`](contact_task_v1.md#taskinstance)[] |

#### Defined in

[contact/task/v1.js:30](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/contact/task/v1.js#L30)

___

### TaskListStreamItemType

Ƭ **TaskListStreamItemType**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `data` | [`TaskInstance`](contact_task_v1.md#taskinstance) |
| `type` | ``"item"`` |

#### Defined in

[contact/task/v1.js:35](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/contact/task/v1.js#L35)

___

### TaskListStreamType

Ƭ **TaskListStreamType**\<\>: [`TaskListStreamItemType`](contact_task_v1.md#taskliststreamitemtype)

#### Defined in

[contact/task/v1.js:37](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/contact/task/v1.js#L37)

___

### TaskOptions

Ƭ **TaskOptions**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `botId?` | `string` |
| `description?` | `string` |
| `meta?` | [`Record`]( https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type )\<`string`, `any`\> |
| `name?` | `string` |
| `schedule?` | `string` |

#### Defined in

[contact/task/v1.js:18](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/contact/task/v1.js#L18)

## Functions

### listTasks

▸ **listTasks**(`client`, `contactId`, `request?`): [`ResponsePromise`](../classes/client.ResponsePromise.md)\<[`TaskListResponse`](contact_task_v1.md#tasklistresponse), [`TaskListStreamItemType`](contact_task_v1.md#taskliststreamitemtype)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`ChatBotKitClient`](../classes/client.ChatBotKitClient.md) |
| `contactId` | `string` |
| `request?` | [`TaskListRequest`](contact_task_v1.md#tasklistrequest) |

#### Returns

[`ResponsePromise`](../classes/client.ResponsePromise.md)\<[`TaskListResponse`](contact_task_v1.md#tasklistresponse), [`TaskListStreamItemType`](contact_task_v1.md#taskliststreamitemtype)\>

#### Defined in

[contact/task/v1.js:44](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/contact/task/v1.js#L44)
