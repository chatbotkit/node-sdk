[@chatbotkit/sdk](../README.md) / [Modules](../modules.md) / [integration/mcpserver](../modules/integration_mcpserver.md) / McpServerIntegrationClient

# Class: McpServerIntegrationClient

[integration/mcpserver](../modules/integration_mcpserver.md).McpServerIntegrationClient

**`Template`**

**`Template`**

## Hierarchy

- [`ChatBotKitClient`](client.ChatBotKitClient.md)

  ↳ **`McpServerIntegrationClient`**

## Table of contents

### Constructors

- [constructor](integration_mcpserver.McpServerIntegrationClient.md#constructor)

### Methods

- [create](integration_mcpserver.McpServerIntegrationClient.md#create)
- [delete](integration_mcpserver.McpServerIntegrationClient.md#delete)
- [extend](integration_mcpserver.McpServerIntegrationClient.md#extend)
- [fetch](integration_mcpserver.McpServerIntegrationClient.md#fetch)
- [list](integration_mcpserver.McpServerIntegrationClient.md#list)
- [update](integration_mcpserver.McpServerIntegrationClient.md#update)

## Constructors

### constructor

• **new McpServerIntegrationClient**(`options`): [`McpServerIntegrationClient`](integration_mcpserver.McpServerIntegrationClient.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`ChatBotKitClientOptions`](../interfaces/client.ChatBotKitClientOptions.md) |

#### Returns

[`McpServerIntegrationClient`](integration_mcpserver.McpServerIntegrationClient.md)

#### Overrides

[ChatBotKitClient](client.ChatBotKitClient.md).[constructor](client.ChatBotKitClient.md#constructor)

#### Defined in

[integration/mcpserver/index.js:20](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/mcpserver/index.js#L20)

## Methods

### create

▸ **create**(`request`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<{}\>

Creates a new mcpserver integration.

#### Parameters

| Name | Type |
| :------ | :------ |
| `request` | `Object` |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<{}\>

#### Defined in

[integration/mcpserver/index.js:50](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/mcpserver/index.js#L50)

___

### delete

▸ **delete**(`mcpserverId`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<{}\>

Deletes a mcpserver integration.

#### Parameters

| Name | Type |
| :------ | :------ |
| `mcpserverId` | `string` |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<{}\>

#### Defined in

[integration/mcpserver/index.js:71](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/mcpserver/index.js#L71)

___

### extend

▸ **extend**(`extensionOptions`): [`McpServerIntegrationClient`](integration_mcpserver.McpServerIntegrationClient.md)

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

[`McpServerIntegrationClient`](integration_mcpserver.McpServerIntegrationClient.md)

A new instance of the same client class with extended options

#### Inherited from

[ChatBotKitClient](client.ChatBotKitClient.md).[extend](client.ChatBotKitClient.md#extend)

#### Defined in

[client.js:382](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/client.js#L382)

___

### fetch

▸ **fetch**(`mcpserverId`): [`ResponsePromise`](client.ResponsePromise.md)\<{}, `never`\>

Fetches a mcpserver integration.

#### Parameters

| Name | Type |
| :------ | :------ |
| `mcpserverId` | `string` |

#### Returns

[`ResponsePromise`](client.ResponsePromise.md)\<{}, `never`\>

#### Defined in

[integration/mcpserver/index.js:40](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/mcpserver/index.js#L40)

___

### list

▸ **list**(`request?`): [`ResponsePromise`](client.ResponsePromise.md)\<{}, {}\>

Retrieves a list of all mcpserver integrations.

#### Parameters

| Name | Type |
| :------ | :------ |
| `request?` | [`McpServerIntegrationListRequest`](../modules/integration_mcpserver_v1.md#mcpserverintegrationlistrequest) |

#### Returns

[`ResponsePromise`](client.ResponsePromise.md)\<{}, {}\>

#### Defined in

[integration/mcpserver/index.js:30](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/mcpserver/index.js#L30)

___

### update

▸ **update**(`mcpserverId`, `request`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<{}\>

Updates a mcpserver integration.

#### Parameters

| Name | Type |
| :------ | :------ |
| `mcpserverId` | `string` |
| `request` | `Object` |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<{}\>

#### Defined in

[integration/mcpserver/index.js:61](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/mcpserver/index.js#L61)
