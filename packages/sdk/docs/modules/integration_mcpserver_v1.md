[@chatbotkit/sdk](../README.md) / [Modules](../modules.md) / integration/mcpserver/v1

# Module: integration/mcpserver/v1

## Table of contents

### Type Aliases

- [ChatBotKitClient](integration_mcpserver_v1.md#chatbotkitclient)
- [McpServerIntegrationCreateRequest](integration_mcpserver_v1.md#mcpserverintegrationcreaterequest)
- [McpServerIntegrationCreateResponse](integration_mcpserver_v1.md#mcpserverintegrationcreateresponse)
- [McpServerIntegrationDeleteResponse](integration_mcpserver_v1.md#mcpserverintegrationdeleteresponse)
- [McpServerIntegrationFetchResponse](integration_mcpserver_v1.md#mcpserverintegrationfetchresponse)
- [McpServerIntegrationInstance](integration_mcpserver_v1.md#mcpserverintegrationinstance)
- [McpServerIntegrationListRequest](integration_mcpserver_v1.md#mcpserverintegrationlistrequest)
- [McpServerIntegrationListResponse](integration_mcpserver_v1.md#mcpserverintegrationlistresponse)
- [McpServerIntegrationListStreamItem](integration_mcpserver_v1.md#mcpserverintegrationliststreamitem)
- [McpServerIntegrationListStreamType](integration_mcpserver_v1.md#mcpserverintegrationliststreamtype)
- [McpServerIntegrationOptions](integration_mcpserver_v1.md#mcpserverintegrationoptions)
- [McpServerIntegrationUpdateRequest](integration_mcpserver_v1.md#mcpserverintegrationupdaterequest)
- [McpServerIntegrationUpdateResponse](integration_mcpserver_v1.md#mcpserverintegrationupdateresponse)
- [ResponsePromise](integration_mcpserver_v1.md#responsepromise)

### Functions

- [createMcpServerIntegration](integration_mcpserver_v1.md#createmcpserverintegration)
- [deleteMcpServerIntegration](integration_mcpserver_v1.md#deletemcpserverintegration)
- [fetchMcpServerIntegration](integration_mcpserver_v1.md#fetchmcpserverintegration)
- [listMcpServerIntegrations](integration_mcpserver_v1.md#listmcpserverintegrations)
- [updateMcpServerIntegration](integration_mcpserver_v1.md#updatemcpserverintegration)

## Type Aliases

### ChatBotKitClient

Ƭ **ChatBotKitClient**\<\>: [`client`](client.md)

#### Defined in

[integration/mcpserver/v1.js:2](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/mcpserver/v1.js#L2)

___

### McpServerIntegrationCreateRequest

Ƭ **McpServerIntegrationCreateRequest**\<\>: [`McpServerIntegrationOptions`](integration_mcpserver_v1.md#mcpserverintegrationoptions) & {}

#### Defined in

[integration/mcpserver/v1.js:79](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/mcpserver/v1.js#L79)

___

### McpServerIntegrationCreateResponse

Ƭ **McpServerIntegrationCreateResponse**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Defined in

[integration/mcpserver/v1.js:83](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/mcpserver/v1.js#L83)

___

### McpServerIntegrationDeleteResponse

Ƭ **McpServerIntegrationDeleteResponse**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Defined in

[integration/mcpserver/v1.js:133](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/mcpserver/v1.js#L133)

___

### McpServerIntegrationFetchResponse

Ƭ **McpServerIntegrationFetchResponse**\<\>: [`McpServerIntegrationInstance`](integration_mcpserver_v1.md#mcpserverintegrationinstance) & {}

#### Defined in

[integration/mcpserver/v1.js:61](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/mcpserver/v1.js#L61)

___

### McpServerIntegrationInstance

Ƭ **McpServerIntegrationInstance**\<\>: [`McpServerIntegrationOptions`](integration_mcpserver_v1.md#mcpserverintegrationoptions) & \{ `createdAt`: `number` ; `id`: `string` ; `updatedAt`: `number`  }

#### Defined in

[integration/mcpserver/v1.js:24](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/mcpserver/v1.js#L24)

___

### McpServerIntegrationListRequest

Ƭ **McpServerIntegrationListRequest**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `cursor?` | `string` |
| `meta?` | [`Record`]( https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type )\<`string`, `string`\> |
| `order?` | ``"desc"`` \| ``"asc"`` |
| `take?` | `number` |

#### Defined in

[integration/mcpserver/v1.js:33](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/mcpserver/v1.js#L33)

___

### McpServerIntegrationListResponse

Ƭ **McpServerIntegrationListResponse**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `items` | [`McpServerIntegrationInstance`](integration_mcpserver_v1.md#mcpserverintegrationinstance)[] |

#### Defined in

[integration/mcpserver/v1.js:35](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/mcpserver/v1.js#L35)

___

### McpServerIntegrationListStreamItem

Ƭ **McpServerIntegrationListStreamItem**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `data` | [`McpServerIntegrationInstance`](integration_mcpserver_v1.md#mcpserverintegrationinstance) |
| `type` | ``"item"`` |

#### Defined in

[integration/mcpserver/v1.js:40](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/mcpserver/v1.js#L40)

___

### McpServerIntegrationListStreamType

Ƭ **McpServerIntegrationListStreamType**\<\>: [`McpServerIntegrationListStreamItem`](integration_mcpserver_v1.md#mcpserverintegrationliststreamitem)

#### Defined in

[integration/mcpserver/v1.js:42](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/mcpserver/v1.js#L42)

___

### McpServerIntegrationOptions

Ƭ **McpServerIntegrationOptions**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `blueprintId?` | `string` |
| `description?` | `string` |
| `meta?` | [`Record`]( https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type )\<`string`, `any`\> |
| `name?` | `string` |
| `skillsetId?` | `string` |

#### Defined in

[integration/mcpserver/v1.js:18](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/mcpserver/v1.js#L18)

___

### McpServerIntegrationUpdateRequest

Ƭ **McpServerIntegrationUpdateRequest**\<\>: [`McpServerIntegrationOptions`](integration_mcpserver_v1.md#mcpserverintegrationoptions) & {}

#### Defined in

[integration/mcpserver/v1.js:105](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/mcpserver/v1.js#L105)

___

### McpServerIntegrationUpdateResponse

Ƭ **McpServerIntegrationUpdateResponse**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Defined in

[integration/mcpserver/v1.js:109](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/mcpserver/v1.js#L109)

___

### ResponsePromise

Ƭ **ResponsePromise**\<`T`, `U`\>: [`client`](client.md)

#### Type parameters

| Name |
| :------ |
| `T` |
| `U` |

#### Defined in

[integration/mcpserver/v1.js:8](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/mcpserver/v1.js#L8)

## Functions

### createMcpServerIntegration

▸ **createMcpServerIntegration**(`client`, `request`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<[`McpServerIntegrationCreateResponse`](integration_mcpserver_v1.md#mcpserverintegrationcreateresponse)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`ChatBotKitClient`](../classes/client.ChatBotKitClient.md) |
| `request` | [`McpServerIntegrationOptions`](integration_mcpserver_v1.md#mcpserverintegrationoptions) |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<[`McpServerIntegrationCreateResponse`](integration_mcpserver_v1.md#mcpserverintegrationcreateresponse)\>

#### Defined in

[integration/mcpserver/v1.js:89](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/mcpserver/v1.js#L89)

___

### deleteMcpServerIntegration

▸ **deleteMcpServerIntegration**(`client`, `mcpserverId`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<[`McpServerIntegrationDeleteResponse`](integration_mcpserver_v1.md#mcpserverintegrationdeleteresponse)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`ChatBotKitClient`](../classes/client.ChatBotKitClient.md) |
| `mcpserverId` | `string` |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<[`McpServerIntegrationDeleteResponse`](integration_mcpserver_v1.md#mcpserverintegrationdeleteresponse)\>

#### Defined in

[integration/mcpserver/v1.js:139](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/mcpserver/v1.js#L139)

___

### fetchMcpServerIntegration

▸ **fetchMcpServerIntegration**(`client`, `mcpserverId`): [`ResponsePromise`](../classes/client.ResponsePromise.md)\<[`McpServerIntegrationFetchResponse`](integration_mcpserver_v1.md#mcpserverintegrationfetchresponse), `never`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`ChatBotKitClient`](../classes/client.ChatBotKitClient.md) |
| `mcpserverId` | `string` |

#### Returns

[`ResponsePromise`](../classes/client.ResponsePromise.md)\<[`McpServerIntegrationFetchResponse`](integration_mcpserver_v1.md#mcpserverintegrationfetchresponse), `never`\>

#### Defined in

[integration/mcpserver/v1.js:67](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/mcpserver/v1.js#L67)

___

### listMcpServerIntegrations

▸ **listMcpServerIntegrations**(`client`, `request?`): [`ResponsePromise`](../classes/client.ResponsePromise.md)\<[`McpServerIntegrationListResponse`](integration_mcpserver_v1.md#mcpserverintegrationlistresponse), [`McpServerIntegrationListStreamItem`](integration_mcpserver_v1.md#mcpserverintegrationliststreamitem)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`ChatBotKitClient`](../classes/client.ChatBotKitClient.md) |
| `request?` | [`McpServerIntegrationListRequest`](integration_mcpserver_v1.md#mcpserverintegrationlistrequest) |

#### Returns

[`ResponsePromise`](../classes/client.ResponsePromise.md)\<[`McpServerIntegrationListResponse`](integration_mcpserver_v1.md#mcpserverintegrationlistresponse), [`McpServerIntegrationListStreamItem`](integration_mcpserver_v1.md#mcpserverintegrationliststreamitem)\>

#### Defined in

[integration/mcpserver/v1.js:48](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/mcpserver/v1.js#L48)

___

### updateMcpServerIntegration

▸ **updateMcpServerIntegration**(`client`, `mcpserverId`, `request`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<[`McpServerIntegrationUpdateResponse`](integration_mcpserver_v1.md#mcpserverintegrationupdateresponse)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`ChatBotKitClient`](../classes/client.ChatBotKitClient.md) |
| `mcpserverId` | `string` |
| `request` | [`McpServerIntegrationOptions`](integration_mcpserver_v1.md#mcpserverintegrationoptions) |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<[`McpServerIntegrationUpdateResponse`](integration_mcpserver_v1.md#mcpserverintegrationupdateresponse)\>

#### Defined in

[integration/mcpserver/v1.js:116](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/mcpserver/v1.js#L116)
