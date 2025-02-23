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

[contact/task/v1.js:25](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/contact/task/v1.js#L25)

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

[contact/task/v1.js:29](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/contact/task/v1.js#L29)

___

### TaskListResponse

Ƭ **TaskListResponse**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `items` | [`TaskInstance`](contact_task_v1.md#taskinstance)[] |

#### Defined in

[contact/task/v1.js:31](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/contact/task/v1.js#L31)

___

### TaskListStreamItemType

Ƭ **TaskListStreamItemType**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `data` | [`TaskInstance`](contact_task_v1.md#taskinstance) |
| `type` | ``"item"`` |

#### Defined in

[contact/task/v1.js:36](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/contact/task/v1.js#L36)

___

### TaskListStreamType

Ƭ **TaskListStreamType**\<\>: [`TaskListStreamItemType`](contact_task_v1.md#taskliststreamitemtype)

#### Defined in

[contact/task/v1.js:38](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/contact/task/v1.js#L38)

___

### TaskOptions

Ƭ **TaskOptions**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `botId?` | `string` |
| `contactId?` | `string` |
| `description?` | `string` |
| `meta?` | [`Record`]( https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type )\<`string`, `any`\> |
| `name?` | `string` |
| `schedule?` | `string` |

#### Defined in

[contact/task/v1.js:19](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/contact/task/v1.js#L19)

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

[contact/task/v1.js:45](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/contact/task/v1.js#L45)
