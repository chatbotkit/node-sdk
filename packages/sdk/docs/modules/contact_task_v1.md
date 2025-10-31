[@chatbotkit/sdk](../README.md) / [Modules](../modules.md) / contact/task/v1

# Module: contact/task/v1

## Table of contents

### Type Aliases

- [ChatBotKitClient](contact_task_v1.md#chatbotkitclient)
- [ResponsePromise](contact_task_v1.md#responsepromise)
- [TaskListRequest](contact_task_v1.md#tasklistrequest)
- [TaskListResponse](contact_task_v1.md#tasklistresponse)
- [TaskListStreamType](contact_task_v1.md#taskliststreamtype)

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

[contact/task/v1.js:17](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/contact/task/v1.js#L17)

___

### TaskListResponse

Ƭ **TaskListResponse**\<\>: `operations`[``"listContactTasks"``][``"responses"``][``"200"``][``"content"``][``"application/json"``]

#### Defined in

[contact/task/v1.js:19](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/contact/task/v1.js#L19)

___

### TaskListStreamType

Ƭ **TaskListStreamType**\<\>: `operations`[``"listContactTasks"``][``"responses"``][``"200"``][``"content"``][``"application/jsonl"``]

#### Defined in

[contact/task/v1.js:21](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/contact/task/v1.js#L21)

## Functions

### listTasks

▸ **listTasks**(`client`, `contactId`, `request?`): [`ResponsePromise`](../classes/client.ResponsePromise.md)\<{}, {}\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`ChatBotKitClient`](../classes/client.ChatBotKitClient.md) |
| `contactId` | `string` |
| `request?` | [`TaskListRequest`](contact_task_v1.md#tasklistrequest) |

#### Returns

[`ResponsePromise`](../classes/client.ResponsePromise.md)\<{}, {}\>

#### Defined in

[contact/task/v1.js:28](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/contact/task/v1.js#L28)
