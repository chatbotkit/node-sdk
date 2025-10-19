[@chatbotkit/sdk](../README.md) / [Modules](../modules.md) / task/v1

# Module: task/v1

## Table of contents

### Type Aliases

- [ChatBotKitClient](task_v1.md#chatbotkitclient)
- [ResponsePromise](task_v1.md#responsepromise)
- [TaskCreateRequest](task_v1.md#taskcreaterequest)
- [TaskCreateResponse](task_v1.md#taskcreateresponse)
- [TaskDeleteResponse](task_v1.md#taskdeleteresponse)
- [TaskFetchResponse](task_v1.md#taskfetchresponse)
- [TaskInstance](task_v1.md#taskinstance)
- [TaskListRequest](task_v1.md#tasklistrequest)
- [TaskListResponse](task_v1.md#tasklistresponse)
- [TaskListStreamItemType](task_v1.md#taskliststreamitemtype)
- [TaskListStreamType](task_v1.md#taskliststreamtype)
- [TaskOptions](task_v1.md#taskoptions)
- [TaskUpdateRequest](task_v1.md#taskupdaterequest)
- [TaskUpdateResponse](task_v1.md#taskupdateresponse)

### Functions

- [createTask](task_v1.md#createtask)
- [deleteTask](task_v1.md#deletetask)
- [fetchTask](task_v1.md#fetchtask)
- [listTasks](task_v1.md#listtasks)
- [updateTask](task_v1.md#updatetask)

## Type Aliases

### ChatBotKitClient

Ƭ **ChatBotKitClient**\<\>: [`client`](client.md)

#### Defined in

[task/v1.js:2](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/task/v1.js#L2)

___

### ResponsePromise

Ƭ **ResponsePromise**\<`T`, `U`\>: [`client`](client.md)

#### Type parameters

| Name |
| :------ |
| `T` |
| `U` |

#### Defined in

[task/v1.js:8](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/task/v1.js#L8)

___

### TaskCreateRequest

Ƭ **TaskCreateRequest**\<\>: [`TaskOptions`](task_v1.md#taskoptions) & {}

#### Defined in

[task/v1.js:80](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/task/v1.js#L80)

___

### TaskCreateResponse

Ƭ **TaskCreateResponse**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Defined in

[task/v1.js:84](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/task/v1.js#L84)

___

### TaskDeleteResponse

Ƭ **TaskDeleteResponse**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Defined in

[task/v1.js:134](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/task/v1.js#L134)

___

### TaskFetchResponse

Ƭ **TaskFetchResponse**\<\>: [`TaskInstance`](task_v1.md#taskinstance) & {}

#### Defined in

[task/v1.js:62](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/task/v1.js#L62)

___

### TaskInstance

Ƭ **TaskInstance**\<\>: [`TaskOptions`](task_v1.md#taskoptions) & \{ `createdAt`: `number` ; `id`: `string` ; `updatedAt`: `number`  }

#### Defined in

[task/v1.js:25](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/task/v1.js#L25)

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

[task/v1.js:34](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/task/v1.js#L34)

___

### TaskListResponse

Ƭ **TaskListResponse**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `items` | [`TaskInstance`](task_v1.md#taskinstance)[] |

#### Defined in

[task/v1.js:36](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/task/v1.js#L36)

___

### TaskListStreamItemType

Ƭ **TaskListStreamItemType**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `data` | [`TaskInstance`](task_v1.md#taskinstance) |
| `type` | ``"item"`` |

#### Defined in

[task/v1.js:41](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/task/v1.js#L41)

___

### TaskListStreamType

Ƭ **TaskListStreamType**\<\>: [`TaskListStreamItemType`](task_v1.md#taskliststreamitemtype)

#### Defined in

[task/v1.js:43](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/task/v1.js#L43)

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

[task/v1.js:19](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/task/v1.js#L19)

___

### TaskUpdateRequest

Ƭ **TaskUpdateRequest**\<\>: [`TaskOptions`](task_v1.md#taskoptions) & {}

#### Defined in

[task/v1.js:106](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/task/v1.js#L106)

___

### TaskUpdateResponse

Ƭ **TaskUpdateResponse**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Defined in

[task/v1.js:110](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/task/v1.js#L110)

## Functions

### createTask

▸ **createTask**(`client`, `request`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<[`TaskCreateResponse`](task_v1.md#taskcreateresponse)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`ChatBotKitClient`](../classes/client.ChatBotKitClient.md) |
| `request` | [`TaskOptions`](task_v1.md#taskoptions) |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<[`TaskCreateResponse`](task_v1.md#taskcreateresponse)\>

#### Defined in

[task/v1.js:90](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/task/v1.js#L90)

___

### deleteTask

▸ **deleteTask**(`client`, `taskId`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<[`TaskDeleteResponse`](task_v1.md#taskdeleteresponse)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`ChatBotKitClient`](../classes/client.ChatBotKitClient.md) |
| `taskId` | `string` |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<[`TaskDeleteResponse`](task_v1.md#taskdeleteresponse)\>

#### Defined in

[task/v1.js:140](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/task/v1.js#L140)

___

### fetchTask

▸ **fetchTask**(`client`, `taskId`): [`ResponsePromise`](../classes/client.ResponsePromise.md)\<[`TaskFetchResponse`](task_v1.md#taskfetchresponse), `never`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`ChatBotKitClient`](../classes/client.ChatBotKitClient.md) |
| `taskId` | `string` |

#### Returns

[`ResponsePromise`](../classes/client.ResponsePromise.md)\<[`TaskFetchResponse`](task_v1.md#taskfetchresponse), `never`\>

#### Defined in

[task/v1.js:68](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/task/v1.js#L68)

___

### listTasks

▸ **listTasks**(`client`, `request?`): [`ResponsePromise`](../classes/client.ResponsePromise.md)\<[`TaskListResponse`](task_v1.md#tasklistresponse), [`TaskListStreamItemType`](task_v1.md#taskliststreamitemtype)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`ChatBotKitClient`](../classes/client.ChatBotKitClient.md) |
| `request?` | [`TaskListRequest`](task_v1.md#tasklistrequest) |

#### Returns

[`ResponsePromise`](../classes/client.ResponsePromise.md)\<[`TaskListResponse`](task_v1.md#tasklistresponse), [`TaskListStreamItemType`](task_v1.md#taskliststreamitemtype)\>

#### Defined in

[task/v1.js:49](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/task/v1.js#L49)

___

### updateTask

▸ **updateTask**(`client`, `taskId`, `request`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<[`TaskUpdateResponse`](task_v1.md#taskupdateresponse)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`ChatBotKitClient`](../classes/client.ChatBotKitClient.md) |
| `taskId` | `string` |
| `request` | [`TaskOptions`](task_v1.md#taskoptions) |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<[`TaskUpdateResponse`](task_v1.md#taskupdateresponse)\>

#### Defined in

[task/v1.js:117](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/task/v1.js#L117)
