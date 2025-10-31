[@chatbotkit/sdk](../README.md) / [Modules](../modules.md) / task/v1

# Module: task/v1

## Table of contents

### Type Aliases

- [ChatBotKitClient](task_v1.md#chatbotkitclient)
- [ResponsePromise](task_v1.md#responsepromise)
- [TaskCreateRequest](task_v1.md#taskcreaterequest)
- [TaskCreateRequestBody](task_v1.md#taskcreaterequestbody)
- [TaskCreateResponse](task_v1.md#taskcreateresponse)
- [TaskCreateResponseBody](task_v1.md#taskcreateresponsebody)
- [TaskDeleteRequest](task_v1.md#taskdeleterequest)
- [TaskDeleteRequestBody](task_v1.md#taskdeleterequestbody)
- [TaskDeleteResponse](task_v1.md#taskdeleteresponse)
- [TaskDeleteResponseBody](task_v1.md#taskdeleteresponsebody)
- [TaskExportRequest](task_v1.md#taskexportrequest)
- [TaskExportStreamType](task_v1.md#taskexportstreamtype)
- [TaskFetchResponse](task_v1.md#taskfetchresponse)
- [TaskListRequest](task_v1.md#tasklistrequest)
- [TaskListResponse](task_v1.md#tasklistresponse)
- [TaskListStreamType](task_v1.md#taskliststreamtype)
- [TaskTriggerRequest](task_v1.md#tasktriggerrequest)
- [TaskTriggerRequestBody](task_v1.md#tasktriggerrequestbody)
- [TaskTriggerResponse](task_v1.md#tasktriggerresponse)
- [TaskTriggerResponseBody](task_v1.md#tasktriggerresponsebody)
- [TaskUpdateRequest](task_v1.md#taskupdaterequest)
- [TaskUpdateRequestBody](task_v1.md#taskupdaterequestbody)
- [TaskUpdateResponse](task_v1.md#taskupdateresponse)
- [TaskUpdateResponseBody](task_v1.md#taskupdateresponsebody)

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

Ƭ **TaskCreateRequest**\<\>: [`TaskCreateRequestBody`](task_v1.md#taskcreaterequestbody)

#### Defined in

[task/v1.js:55](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/task/v1.js#L55)

___

### TaskCreateRequestBody

Ƭ **TaskCreateRequestBody**\<\>: `operations`[``"createTask"``][``"requestBody"``][``"content"``][``"application/json"``]

#### Defined in

[task/v1.js:53](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/task/v1.js#L53)

___

### TaskCreateResponse

Ƭ **TaskCreateResponse**\<\>: [`TaskCreateResponseBody`](task_v1.md#taskcreateresponsebody)

#### Defined in

[task/v1.js:59](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/task/v1.js#L59)

___

### TaskCreateResponseBody

Ƭ **TaskCreateResponseBody**\<\>: `operations`[``"createTask"``][``"responses"``][``"200"``][``"content"``][``"application/json"``]

#### Defined in

[task/v1.js:57](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/task/v1.js#L57)

___

### TaskDeleteRequest

Ƭ **TaskDeleteRequest**\<\>: [`TaskDeleteRequestBody`](task_v1.md#taskdeleterequestbody)

#### Defined in

[task/v1.js:110](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/task/v1.js#L110)

___

### TaskDeleteRequestBody

Ƭ **TaskDeleteRequestBody**\<\>: `operations`[``"deleteTask"``][``"requestBody"``][``"content"``][``"application/json"``]

#### Defined in

[task/v1.js:108](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/task/v1.js#L108)

___

### TaskDeleteResponse

Ƭ **TaskDeleteResponse**\<\>: [`TaskDeleteResponseBody`](task_v1.md#taskdeleteresponsebody)

#### Defined in

[task/v1.js:114](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/task/v1.js#L114)

___

### TaskDeleteResponseBody

Ƭ **TaskDeleteResponseBody**\<\>: `operations`[``"deleteTask"``][``"responses"``][``"200"``][``"content"``][``"application/json"``]

#### Defined in

[task/v1.js:112](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/task/v1.js#L112)

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

[task/v1.js:162](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/task/v1.js#L162)

___

### TaskExportStreamType

Ƭ **TaskExportStreamType**\<\>: `operations`[``"exportTasks"``][``"responses"``][``"200"``][``"content"``][``"application/jsonl"``]

#### Defined in

[task/v1.js:164](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/task/v1.js#L164)

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

### TaskTriggerRequest

Ƭ **TaskTriggerRequest**\<\>: [`TaskTriggerRequestBody`](task_v1.md#tasktriggerrequestbody)

#### Defined in

[task/v1.js:135](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/task/v1.js#L135)

___

### TaskTriggerRequestBody

Ƭ **TaskTriggerRequestBody**\<\>: `operations`[``"triggerTask"``][``"requestBody"``][``"content"``][``"application/json"``]

#### Defined in

[task/v1.js:133](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/task/v1.js#L133)

___

### TaskTriggerResponse

Ƭ **TaskTriggerResponse**\<\>: [`TaskTriggerResponseBody`](task_v1.md#tasktriggerresponsebody)

#### Defined in

[task/v1.js:139](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/task/v1.js#L139)

___

### TaskTriggerResponseBody

Ƭ **TaskTriggerResponseBody**\<\>: `operations`[``"triggerTask"``][``"responses"``][``"200"``][``"content"``][``"application/json"``]

#### Defined in

[task/v1.js:137](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/task/v1.js#L137)

___

### TaskUpdateRequest

Ƭ **TaskUpdateRequest**\<\>: [`TaskUpdateRequestBody`](task_v1.md#taskupdaterequestbody)

#### Defined in

[task/v1.js:82](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/task/v1.js#L82)

___

### TaskUpdateRequestBody

Ƭ **TaskUpdateRequestBody**\<\>: `operations`[``"updateTask"``][``"requestBody"``][``"content"``][``"application/json"``]

#### Defined in

[task/v1.js:80](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/task/v1.js#L80)

___

### TaskUpdateResponse

Ƭ **TaskUpdateResponse**\<\>: [`TaskUpdateResponseBody`](task_v1.md#taskupdateresponsebody)

#### Defined in

[task/v1.js:86](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/task/v1.js#L86)

___

### TaskUpdateResponseBody

Ƭ **TaskUpdateResponseBody**\<\>: `operations`[``"updateTask"``][``"responses"``][``"200"``][``"content"``][``"application/json"``]

#### Defined in

[task/v1.js:84](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/task/v1.js#L84)

## Functions

### createTask

▸ **createTask**(`client`, `request`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<{}\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`ChatBotKitClient`](../classes/client.ChatBotKitClient.md) |
| `request` | `Object` |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<{}\>

#### Defined in

[task/v1.js:65](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/task/v1.js#L65)

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

[task/v1.js:120](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/task/v1.js#L120)

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

[task/v1.js:170](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/task/v1.js#L170)

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

[task/v1.js:145](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/task/v1.js#L145)

___

### updateTask

▸ **updateTask**(`client`, `taskId`, `request`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<{}\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`ChatBotKitClient`](../classes/client.ChatBotKitClient.md) |
| `taskId` | `string` |
| `request` | `Object` |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<{}\>

#### Defined in

[task/v1.js:93](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/task/v1.js#L93)
