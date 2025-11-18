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

- [extend](contact_task.TaskClient.md#extend)
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

### extend

▸ **extend**(`extensionOptions`): [`TaskClient`](contact_task.TaskClient.md)

Creates a new instance of the same client type with extended options.

This is useful when you need to create a client with modified configuration
(e.g., different endpoint, token, or headers) without affecting the original.

Note: This method creates a completely new instance rather than cloning,
which is necessary because private class fields cannot be copied.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `extensionOptions` | [`Partial`]( https://www.typescriptlang.org/docs/handbook/utility-types.html#partialtype )\<[`ChatBotKitClientOptions`](../interfaces/client.ChatBotKitClientOptions.md)\> | Options to merge with current options |

#### Returns

[`TaskClient`](contact_task.TaskClient.md)

A new instance of the same client class with extended options

#### Inherited from

[ChatBotKitClient](client.ChatBotKitClient.md).[extend](client.ChatBotKitClient.md#extend)

#### Defined in

[client.js:382](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/client.js#L382)

___

### list

▸ **list**(`contactId`, `request?`): [`ResponsePromise`](client.ResponsePromise.md)\<{}, {}\>

Retrieves a list of all contact tasks.

#### Parameters

| Name | Type |
| :------ | :------ |
| `contactId` | `string` |
| `request?` | [`TaskListRequest`](../modules/contact_task_v1.md#tasklistrequest) |

#### Returns

[`ResponsePromise`](client.ResponsePromise.md)\<{}, {}\>

#### Defined in

[contact/task/index.js:28](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/contact/task/index.js#L28)
