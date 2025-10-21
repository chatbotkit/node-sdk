[@chatbotkit/sdk](../README.md) / [Modules](../modules.md) / task/v1

# Module: task/v1

## Table of contents

### Type Aliases

- [ChatBotKitClient](task_v1.md#chatbotkitclient)
- [ResponsePromise](task_v1.md#responsepromise)
- [TaskCreateRequest](task_v1.md#taskcreaterequest)
- [TaskCreateRequestBody](task_v1.md#taskcreaterequestbody)
- [TaskCreateResponse](task_v1.md#taskcreateresponse)
- [TaskDeleteRequestBody](task_v1.md#taskdeleterequestbody)
- [TaskDeleteResponse](task_v1.md#taskdeleteresponse)
- [TaskExportRequest](task_v1.md#taskexportrequest)
- [TaskExportStreamType](task_v1.md#taskexportstreamtype)
- [TaskFetchResponse](task_v1.md#taskfetchresponse)
- [TaskListRequest](task_v1.md#tasklistrequest)
- [TaskListResponse](task_v1.md#tasklistresponse)
- [TaskListStreamType](task_v1.md#taskliststreamtype)
- [TaskTriggerRequestBody](task_v1.md#tasktriggerrequestbody)
- [TaskTriggerResponse](task_v1.md#tasktriggerresponse)
- [TaskUpdateRequest](task_v1.md#taskupdaterequest)
- [TaskUpdateRequestBody](task_v1.md#taskupdaterequestbody)
- [TaskUpdateResponse](task_v1.md#taskupdateresponse)

### Functions

- [createTask](task_v1.md#createtask)
- [deleteTask](task_v1.md#deletetask)
- [exportTasks](task_v1.md#exporttasks)
- [fetchTask](task_v1.md#fetchtask)
- [listTasks](task_v1.md#listtasks)
- [triggerTask](task_v1.md#triggertask)
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

Ƭ **TaskCreateRequest**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `botId?` | `string` |
| `contactId?` | `string` |
| `description?` | `string` |
| `meta?` | [`Record`]( https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type )\<`string`, `any`\> |
| `name?` | `string` |
| `schedule?` | `string` |
| `sessionDuration?` | `number` |

#### Defined in

[task/v1.js:61](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/task/v1.js#L61)

___

### TaskCreateRequestBody

Ƭ **TaskCreateRequestBody**\<\>: `operations`[``"createTask"``][``"requestBody"``][``"content"``][``"application/json"``]

#### Defined in

[task/v1.js:63](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/task/v1.js#L63)

___

### TaskCreateResponse

Ƭ **TaskCreateResponse**\<\>: `operations`[``"createTask"``][``"responses"``][``"200"``][``"content"``][``"application/json"``]

#### Defined in

[task/v1.js:65](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/task/v1.js#L65)

___

### TaskDeleteRequestBody

Ƭ **TaskDeleteRequestBody**\<\>: `operations`[``"deleteTask"``][``"requestBody"``][``"content"``][``"application/json"``]

#### Defined in

[task/v1.js:120](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/task/v1.js#L120)

___

### TaskDeleteResponse

Ƭ **TaskDeleteResponse**\<\>: `operations`[``"deleteTask"``][``"responses"``][``"200"``][``"content"``][``"application/json"``]

#### Defined in

[task/v1.js:122](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/task/v1.js#L122)

___

### TaskExportRequest

Ƭ **TaskExportRequest**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `cursor?` | `string` |
| `order?` | ``"desc"`` \| ``"asc"`` |
| `take?` | `number` |

#### Defined in

[task/v1.js:166](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/task/v1.js#L166)

___

### TaskExportStreamType

Ƭ **TaskExportStreamType**\<\>: `operations`[``"exportTasks"``][``"responses"``][``"200"``][``"content"``][``"application/jsonl"``]

#### Defined in

[task/v1.js:168](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/task/v1.js#L168)

___

### TaskFetchResponse

Ƭ **TaskFetchResponse**\<\>: `operations`[``"fetchTask"``][``"responses"``][``"200"``][``"content"``][``"application/json"``]

#### Defined in

[task/v1.js:37](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/task/v1.js#L37)

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

[task/v1.js:17](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/task/v1.js#L17)

___

### TaskListResponse

Ƭ **TaskListResponse**\<\>: `operations`[``"listTasks"``][``"responses"``][``"200"``][``"content"``][``"application/json"``]

#### Defined in

[task/v1.js:19](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/task/v1.js#L19)

___

### TaskListStreamType

Ƭ **TaskListStreamType**\<\>: `operations`[``"listTasks"``][``"responses"``][``"200"``][``"content"``][``"application/jsonl"``]

#### Defined in

[task/v1.js:21](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/task/v1.js#L21)

___

### TaskTriggerRequestBody

Ƭ **TaskTriggerRequestBody**\<\>: `operations`[``"triggerTask"``][``"requestBody"``][``"content"``][``"application/json"``]

#### Defined in

[task/v1.js:141](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/task/v1.js#L141)

___

### TaskTriggerResponse

Ƭ **TaskTriggerResponse**\<\>: `operations`[``"triggerTask"``][``"responses"``][``"200"``][``"content"``][``"application/json"``]

#### Defined in

[task/v1.js:143](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/task/v1.js#L143)

___

### TaskUpdateRequest

Ƭ **TaskUpdateRequest**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `botId?` | `string` |
| `contactId?` | `string` |
| `description?` | `string` |
| `meta?` | [`Record`]( https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type )\<`string`, `any`\> |
| `name?` | `string` |
| `schedule?` | `string` |
| `sessionDuration?` | `number` |

#### Defined in

[task/v1.js:94](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/task/v1.js#L94)

___

### TaskUpdateRequestBody

Ƭ **TaskUpdateRequestBody**\<\>: `operations`[``"updateTask"``][``"requestBody"``][``"content"``][``"application/json"``]

#### Defined in

[task/v1.js:96](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/task/v1.js#L96)

___

### TaskUpdateResponse

Ƭ **TaskUpdateResponse**\<\>: `operations`[``"updateTask"``][``"responses"``][``"200"``][``"content"``][``"application/json"``]

#### Defined in

[task/v1.js:98](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/task/v1.js#L98)

## Functions

### createTask

▸ **createTask**(`client`, `request`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<{}\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`ChatBotKitClient`](../classes/client.ChatBotKitClient.md) |
| `request` | [`TaskCreateRequest`](task_v1.md#taskcreaterequest) |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<{}\>

#### Defined in

[task/v1.js:71](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/task/v1.js#L71)

___

### deleteTask

▸ **deleteTask**(`client`, `taskId`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<{}\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`ChatBotKitClient`](../classes/client.ChatBotKitClient.md) |
| `taskId` | `string` |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<{}\>

#### Defined in

[task/v1.js:128](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/task/v1.js#L128)

___

### exportTasks

▸ **exportTasks**(`client`, `request?`): [`ResponsePromise`](../classes/client.ResponsePromise.md)\<`never`, {}\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`ChatBotKitClient`](../classes/client.ChatBotKitClient.md) |
| `request?` | [`TaskExportRequest`](task_v1.md#taskexportrequest) |

#### Returns

[`ResponsePromise`](../classes/client.ResponsePromise.md)\<`never`, {}\>

#### Defined in

[task/v1.js:174](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/task/v1.js#L174)

___

### fetchTask

▸ **fetchTask**(`client`, `taskId`): [`ResponsePromise`](../classes/client.ResponsePromise.md)\<{}, `never`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`ChatBotKitClient`](../classes/client.ChatBotKitClient.md) |
| `taskId` | `string` |

#### Returns

[`ResponsePromise`](../classes/client.ResponsePromise.md)\<{}, `never`\>

#### Defined in

[task/v1.js:43](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/task/v1.js#L43)

___

### listTasks

▸ **listTasks**(`client`, `request?`): [`ResponsePromise`](../classes/client.ResponsePromise.md)\<{}, {}\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`ChatBotKitClient`](../classes/client.ChatBotKitClient.md) |
| `request?` | [`TaskListRequest`](task_v1.md#tasklistrequest) |

#### Returns

[`ResponsePromise`](../classes/client.ResponsePromise.md)\<{}, {}\>

#### Defined in

[task/v1.js:27](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/task/v1.js#L27)

___

### triggerTask

▸ **triggerTask**(`client`, `taskId`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<{}\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`ChatBotKitClient`](../classes/client.ChatBotKitClient.md) |
| `taskId` | `string` |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<{}\>

#### Defined in

[task/v1.js:149](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/task/v1.js#L149)

___

### updateTask

▸ **updateTask**(`client`, `taskId`, `request`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<{}\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`ChatBotKitClient`](../classes/client.ChatBotKitClient.md) |
| `taskId` | `string` |
| `request` | [`TaskUpdateRequest`](task_v1.md#taskupdaterequest) |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<{}\>

#### Defined in

[task/v1.js:105](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/task/v1.js#L105)
