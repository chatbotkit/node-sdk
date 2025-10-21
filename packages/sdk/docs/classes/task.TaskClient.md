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
- [export](task.TaskClient.md#export)
- [fetch](task.TaskClient.md#fetch)
- [list](task.TaskClient.md#list)
- [trigger](task.TaskClient.md#trigger)
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

[task/index.js:25](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/task/index.js#L25)

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
| `options.fetchFn?` | [`FetchFunction`](../modules/client.md#fetchfunction) |
| `options.file?` | `Object` |
| `options.file.data` | `string` \| [`ArrayBuffer`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer ) |
| `options.file.name?` | `string` |
| `options.file.type?` | `string` |
| `options.headers?` | [`Record`]( https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type )\<`string`, `any`\> |
| `options.method?` | `string` |
| `options.query?` | [`Record`]( https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type )\<`string`, `any`\> |
| `options.record?` | [`Record`]( https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type )\<`string`, `any`\> |
| `options.retries?` | `number` |
| `options.retryDelay?` | `number` |
| `options.retryTimeout?` | `boolean` |
| `options.timeout?` | `number` |

#### Returns

[`ResponsePromise`](client.ResponsePromise.md)\<`T`, `U`\>

#### Inherited from

[ChatBotKitClient](client.ChatBotKitClient.md).[clientFetch](client.ChatBotKitClient.md#clientfetch)

#### Defined in

[client.js:345](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/client.js#L345)

___

### create

▸ **create**(`request`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<{}\>

Creates a new task.

#### Parameters

| Name | Type |
| :------ | :------ |
| `request` | [`TaskCreateRequest`](../modules/task_v1.md#taskcreaterequest) |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<{}\>

#### Defined in

[task/index.js:65](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/task/index.js#L65)

___

### delete

▸ **delete**(`taskId`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<{}\>

Deletes the task.

#### Parameters

| Name | Type |
| :------ | :------ |
| `taskId` | `string` |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<{}\>

#### Defined in

[task/index.js:86](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/task/index.js#L86)

___

### export

▸ **export**(`request?`): [`ResponsePromise`](client.ResponsePromise.md)\<`never`, {}\>

Exports tasks.

#### Parameters

| Name | Type |
| :------ | :------ |
| `request?` | [`TaskExportRequest`](../modules/task_v1.md#taskexportrequest) |

#### Returns

[`ResponsePromise`](client.ResponsePromise.md)\<`never`, {}\>

#### Defined in

[task/index.js:45](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/task/index.js#L45)

___

### fetch

▸ **fetch**(`taskId`): [`ResponsePromise`](client.ResponsePromise.md)\<{}, `never`\>

Fetches a task.

#### Parameters

| Name | Type |
| :------ | :------ |
| `taskId` | `string` |

#### Returns

[`ResponsePromise`](client.ResponsePromise.md)\<{}, `never`\>

#### Defined in

[task/index.js:55](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/task/index.js#L55)

___

### list

▸ **list**(`request?`): [`ResponsePromise`](client.ResponsePromise.md)\<{}, {}\>

Retrieves a list of all tasks.

#### Parameters

| Name | Type |
| :------ | :------ |
| `request?` | [`TaskListRequest`](../modules/task_v1.md#tasklistrequest) |

#### Returns

[`ResponsePromise`](client.ResponsePromise.md)\<{}, {}\>

#### Defined in

[task/index.js:35](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/task/index.js#L35)

___

### trigger

▸ **trigger**(`taskId`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<{}\>

Triggers a task.

#### Parameters

| Name | Type |
| :------ | :------ |
| `taskId` | `string` |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<{}\>

#### Defined in

[task/index.js:96](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/task/index.js#L96)

___

### update

▸ **update**(`taskId`, `request`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<{}\>

Updates a task.

#### Parameters

| Name | Type |
| :------ | :------ |
| `taskId` | `string` |
| `request` | [`TaskUpdateRequest`](../modules/task_v1.md#taskupdaterequest) |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<{}\>

#### Defined in

[task/index.js:76](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/task/index.js#L76)
