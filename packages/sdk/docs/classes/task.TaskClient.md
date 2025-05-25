[@chatbotkit/sdk](../README.md) / [Modules](../modules.md) / [task](../modules/task.md) / TaskClient

# Class: TaskClient

[task](../modules/task.md).TaskClient

Task client.

## Hierarchy

- [`ChatBotKitClient`](client.ChatBotKitClient.md)

  ↳ **`TaskClient`**

## Table of contents

### Constructors

- [constructor](task.TaskClient.md#constructor)

### Methods

- [clientFetch](task.TaskClient.md#clientfetch)
- [create](task.TaskClient.md#create)
- [delete](task.TaskClient.md#delete)
- [fetch](task.TaskClient.md#fetch)
- [list](task.TaskClient.md#list)
- [update](task.TaskClient.md#update)

## Constructors

### constructor

• **new TaskClient**(`options`): [`TaskClient`](task.TaskClient.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`ChatBotKitClientOptions`](../interfaces/client.ChatBotKitClientOptions.md) |

#### Returns

[`TaskClient`](task.TaskClient.md)

#### Overrides

[ChatBotKitClient](client.ChatBotKitClient.md).[constructor](client.ChatBotKitClient.md#constructor)

#### Defined in

[task/index.js:23](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/task/index.js#L23)

## Methods

### clientFetch

▸ **clientFetch**\<`T`, `U`\>(`path`, `options?`): [`ResponsePromise`](client.ResponsePromise.md)\<`T`, `U`\>

#### Type parameters

| Name |
| :------ |
| `T` |
| `U` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | `string` |
| `options?` | `Object` |
| `options.buffer?` | [`ArrayBuffer`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer ) |
| `options.endpoint?` | `string` |
| `options.external?` | `boolean` |
| `options.file?` | `Object` |
| `options.file.data` | `string` \| [`ArrayBuffer`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer ) |
| `options.file.name?` | `string` |
| `options.file.type?` | `string` |
| `options.headers?` | [`Record`]( https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type )\<`string`, `any`\> |
| `options.method?` | `string` |
| `options.query?` | [`Record`]( https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type )\<`string`, `any`\> |
| `options.record?` | [`Record`]( https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type )\<`string`, `any`\> |

#### Returns

[`ResponsePromise`](client.ResponsePromise.md)\<`T`, `U`\>

#### Inherited from

[ChatBotKitClient](client.ChatBotKitClient.md).[clientFetch](client.ChatBotKitClient.md#clientfetch)

#### Defined in

[client.js:260](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/client.js#L260)

___

### create

▸ **create**(`request`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<[`TaskCreateResponse`](../modules/task_v1.md#taskcreateresponse)\>

Creates a new task.

#### Parameters

| Name | Type |
| :------ | :------ |
| `request` | [`TaskOptions`](../modules/task_v1.md#taskoptions) |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<[`TaskCreateResponse`](../modules/task_v1.md#taskcreateresponse)\>

#### Defined in

[task/index.js:53](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/task/index.js#L53)

___

### delete

▸ **delete**(`taskId`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<[`TaskDeleteResponse`](../modules/task_v1.md#taskdeleteresponse)\>

Deletes the task.

#### Parameters

| Name | Type |
| :------ | :------ |
| `taskId` | `string` |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<[`TaskDeleteResponse`](../modules/task_v1.md#taskdeleteresponse)\>

#### Defined in

[task/index.js:74](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/task/index.js#L74)

___

### fetch

▸ **fetch**(`taskId`): [`ResponsePromise`](client.ResponsePromise.md)\<[`TaskFetchResponse`](../modules/task_v1.md#taskfetchresponse), `never`\>

Fetches a task.

#### Parameters

| Name | Type |
| :------ | :------ |
| `taskId` | `string` |

#### Returns

[`ResponsePromise`](client.ResponsePromise.md)\<[`TaskFetchResponse`](../modules/task_v1.md#taskfetchresponse), `never`\>

#### Defined in

[task/index.js:43](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/task/index.js#L43)

___

### list

▸ **list**(`request?`): [`ResponsePromise`](client.ResponsePromise.md)\<[`TaskListResponse`](../modules/task_v1.md#tasklistresponse), [`TaskListStreamItemType`](../modules/task_v1.md#taskliststreamitemtype)\>

Retrieves a list of all tasks.

#### Parameters

| Name | Type |
| :------ | :------ |
| `request?` | [`TaskListRequest`](../modules/task_v1.md#tasklistrequest) |

#### Returns

[`ResponsePromise`](client.ResponsePromise.md)\<[`TaskListResponse`](../modules/task_v1.md#tasklistresponse), [`TaskListStreamItemType`](../modules/task_v1.md#taskliststreamitemtype)\>

#### Defined in

[task/index.js:33](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/task/index.js#L33)

___

### update

▸ **update**(`taskId`, `request`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<[`TaskUpdateResponse`](../modules/task_v1.md#taskupdateresponse)\>

Updates a task.

#### Parameters

| Name | Type |
| :------ | :------ |
| `taskId` | `string` |
| `request` | [`TaskOptions`](../modules/task_v1.md#taskoptions) |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<[`TaskUpdateResponse`](../modules/task_v1.md#taskupdateresponse)\>

#### Defined in

[task/index.js:64](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/task/index.js#L64)
