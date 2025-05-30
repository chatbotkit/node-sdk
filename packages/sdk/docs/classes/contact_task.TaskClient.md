[@chatbotkit/sdk](../README.md) / [Modules](../modules.md) / [contact/task](../modules/contact_task.md) / TaskClient

# Class: TaskClient

[contact/task](../modules/contact_task.md).TaskClient

Contact task client.

## Hierarchy

- [`ChatBotKitClient`](client.ChatBotKitClient.md)

  ↳ **`TaskClient`**

## Table of contents

### Constructors

- [constructor](contact_task.TaskClient.md#constructor)

### Methods

- [clientFetch](contact_task.TaskClient.md#clientfetch)
- [list](contact_task.TaskClient.md#list)

## Constructors

### constructor

• **new TaskClient**(`options`): [`TaskClient`](contact_task.TaskClient.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`ChatBotKitClientOptions`](../interfaces/client.ChatBotKitClientOptions.md) |

#### Returns

[`TaskClient`](contact_task.TaskClient.md)

#### Overrides

[ChatBotKitClient](client.ChatBotKitClient.md).[constructor](client.ChatBotKitClient.md#constructor)

#### Defined in

[contact/task/index.js:17](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/contact/task/index.js#L17)

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
| `options.fetchFn?` | `FetchFn` |
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

[client.js:330](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/client.js#L330)

___

### list

▸ **list**(`contactId`, `request?`): [`ResponsePromise`](client.ResponsePromise.md)\<[`TaskListResponse`](../modules/contact_task_v1.md#tasklistresponse), [`TaskListStreamItemType`](../modules/contact_task_v1.md#taskliststreamitemtype)\>

Retrieves a list of all contact tasks.

#### Parameters

| Name | Type |
| :------ | :------ |
| `contactId` | `string` |
| `request?` | [`TaskListRequest`](../modules/contact_task_v1.md#tasklistrequest) |

#### Returns

[`ResponsePromise`](client.ResponsePromise.md)\<[`TaskListResponse`](../modules/contact_task_v1.md#tasklistresponse), [`TaskListStreamItemType`](../modules/contact_task_v1.md#taskliststreamitemtype)\>

#### Defined in

[contact/task/index.js:28](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/contact/task/index.js#L28)
