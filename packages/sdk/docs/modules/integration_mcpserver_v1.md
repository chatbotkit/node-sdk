[@chatbotkit/sdk](../README.md) / [Modules](../modules.md) / integration/mcpserver/v1

# Module: integration/mcpserver/v1

## Table of contents

### Type Aliases

- [ChatBotKitClient](integration_mcpserver_v1.md#chatbotkitclient)
- [McpServerIntegrationCreateRequest](integration_mcpserver_v1.md#mcpserverintegrationcreaterequest)
- [McpServerIntegrationCreateRequestBody](integration_mcpserver_v1.md#mcpserverintegrationcreaterequestbody)
- [McpServerIntegrationCreateResponse](integration_mcpserver_v1.md#mcpserverintegrationcreateresponse)
- [McpServerIntegrationDeleteRequestBody](integration_mcpserver_v1.md#mcpserverintegrationdeleterequestbody)
- [McpServerIntegrationDeleteResponse](integration_mcpserver_v1.md#mcpserverintegrationdeleteresponse)
- [McpServerIntegrationFetchResponse](integration_mcpserver_v1.md#mcpserverintegrationfetchresponse)
- [McpServerIntegrationListRequest](integration_mcpserver_v1.md#mcpserverintegrationlistrequest)
- [McpServerIntegrationListResponse](integration_mcpserver_v1.md#mcpserverintegrationlistresponse)
- [McpServerIntegrationListStreamType](integration_mcpserver_v1.md#mcpserverintegrationliststreamtype)
- [McpServerIntegrationUpdateRequest](integration_mcpserver_v1.md#mcpserverintegrationupdaterequest)
- [McpServerIntegrationUpdateRequestBody](integration_mcpserver_v1.md#mcpserverintegrationupdaterequestbody)
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

Ƭ **McpServerIntegrationCreateRequest**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `blueprintId?` | `string` |
| `description?` | `string` |
| `meta?` | [`Record`]( https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type )\<`string`, `any`\> |
| `name?` | `string` |
| `skillsetId?` | `string` |

#### Defined in

[integration/mcpserver/v1.js:59](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/mcpserver/v1.js#L59)

___

### McpServerIntegrationCreateRequestBody

Ƭ **McpServerIntegrationCreateRequestBody**\<\>: `operations`[``"createMcpServerIntegration"``][``"requestBody"``][``"content"``][``"application/json"``]

#### Defined in

[integration/mcpserver/v1.js:61](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/mcpserver/v1.js#L61)

___

### McpServerIntegrationCreateResponse

Ƭ **McpServerIntegrationCreateResponse**\<\>: `operations`[``"createMcpServerIntegration"``][``"responses"``][``"200"``][``"content"``][``"application/json"``]

#### Defined in

[integration/mcpserver/v1.js:63](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/mcpserver/v1.js#L63)

___

### McpServerIntegrationDeleteRequestBody

Ƭ **McpServerIntegrationDeleteRequestBody**\<\>: `operations`[``"deleteMcpServerIntegration"``][``"requestBody"``][``"content"``][``"application/json"``]

#### Defined in

[integration/mcpserver/v1.js:116](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/mcpserver/v1.js#L116)

___

### McpServerIntegrationDeleteResponse

Ƭ **McpServerIntegrationDeleteResponse**\<\>: `operations`[``"deleteMcpServerIntegration"``][``"responses"``][``"200"``][``"content"``][``"application/json"``]

#### Defined in

[integration/mcpserver/v1.js:118](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/mcpserver/v1.js#L118)

___

### McpServerIntegrationFetchResponse

Ƭ **McpServerIntegrationFetchResponse**\<\>: `operations`[``"fetchMcpServerIntegration"``][``"responses"``][``"200"``][``"content"``][``"application/json"``]

#### Defined in

[integration/mcpserver/v1.js:37](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/mcpserver/v1.js#L37)

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

[integration/mcpserver/v1.js:17](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/mcpserver/v1.js#L17)

___

### McpServerIntegrationListResponse

Ƭ **McpServerIntegrationListResponse**\<\>: `operations`[``"listMcpServerIntegrations"``][``"responses"``][``"200"``][``"content"``][``"application/json"``]

#### Defined in

[integration/mcpserver/v1.js:19](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/mcpserver/v1.js#L19)

___

### McpServerIntegrationListStreamType

Ƭ **McpServerIntegrationListStreamType**\<\>: `operations`[``"listMcpServerIntegrations"``][``"responses"``][``"200"``][``"content"``][``"application/jsonl"``]

#### Defined in

[integration/mcpserver/v1.js:21](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/mcpserver/v1.js#L21)

___

### McpServerIntegrationUpdateRequest

Ƭ **McpServerIntegrationUpdateRequest**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `blueprintId?` | `string` |
| `description?` | `string` |
| `meta?` | [`Record`]( https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type )\<`string`, `any`\> |
| `name?` | `string` |
| `skillsetId?` | `string` |

#### Defined in

[integration/mcpserver/v1.js:90](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/mcpserver/v1.js#L90)

___

### McpServerIntegrationUpdateRequestBody

Ƭ **McpServerIntegrationUpdateRequestBody**\<\>: `operations`[``"updateMcpServerIntegration"``][``"requestBody"``][``"content"``][``"application/json"``]

#### Defined in

[integration/mcpserver/v1.js:92](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/mcpserver/v1.js#L92)

___

### McpServerIntegrationUpdateResponse

Ƭ **McpServerIntegrationUpdateResponse**\<\>: `operations`[``"updateMcpServerIntegration"``][``"responses"``][``"200"``][``"content"``][``"application/json"``]

#### Defined in

[integration/mcpserver/v1.js:94](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/mcpserver/v1.js#L94)

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

▸ **createMcpServerIntegration**(`client`, `request`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<{}\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`ChatBotKitClient`](../classes/client.ChatBotKitClient.md) |
| `request` | [`McpServerIntegrationCreateRequest`](integration_mcpserver_v1.md#mcpserverintegrationcreaterequest) |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<{}\>

#### Defined in

[integration/mcpserver/v1.js:69](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/mcpserver/v1.js#L69)

___

### deleteMcpServerIntegration

▸ **deleteMcpServerIntegration**(`client`, `mcpserverId`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<{}\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`ChatBotKitClient`](../classes/client.ChatBotKitClient.md) |
| `mcpserverId` | `string` |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<{}\>

#### Defined in

[integration/mcpserver/v1.js:124](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/mcpserver/v1.js#L124)

___

### fetchMcpServerIntegration

▸ **fetchMcpServerIntegration**(`client`, `mcpserverId`): [`ResponsePromise`](../classes/client.ResponsePromise.md)\<{}, `never`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`ChatBotKitClient`](../classes/client.ChatBotKitClient.md) |
| `mcpserverId` | `string` |

#### Returns

[`ResponsePromise`](../classes/client.ResponsePromise.md)\<{}, `never`\>

#### Defined in

[integration/mcpserver/v1.js:43](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/mcpserver/v1.js#L43)

___

### listMcpServerIntegrations

▸ **listMcpServerIntegrations**(`client`, `request?`): [`ResponsePromise`](../classes/client.ResponsePromise.md)\<{}, {}\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`ChatBotKitClient`](../classes/client.ChatBotKitClient.md) |
| `request?` | [`McpServerIntegrationListRequest`](integration_mcpserver_v1.md#mcpserverintegrationlistrequest) |

#### Returns

[`ResponsePromise`](../classes/client.ResponsePromise.md)\<{}, {}\>

#### Defined in

[integration/mcpserver/v1.js:27](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/mcpserver/v1.js#L27)

___

### updateMcpServerIntegration

▸ **updateMcpServerIntegration**(`client`, `mcpserverId`, `request`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<{}\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`ChatBotKitClient`](../classes/client.ChatBotKitClient.md) |
| `mcpserverId` | `string` |
| `request` | [`McpServerIntegrationUpdateRequest`](integration_mcpserver_v1.md#mcpserverintegrationupdaterequest) |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<{}\>

#### Defined in

[integration/mcpserver/v1.js:101](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/mcpserver/v1.js#L101)
