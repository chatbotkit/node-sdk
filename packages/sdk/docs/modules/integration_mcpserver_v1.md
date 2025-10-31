[@chatbotkit/sdk](../README.md) / [Modules](../modules.md) / integration/mcpserver/v1

# Module: integration/mcpserver/v1

## Table of contents

### Type Aliases

- [ChatBotKitClient](integration_mcpserver_v1.md#chatbotkitclient)
- [McpServerIntegrationCreateRequest](integration_mcpserver_v1.md#mcpserverintegrationcreaterequest)
- [McpServerIntegrationCreateRequestBody](integration_mcpserver_v1.md#mcpserverintegrationcreaterequestbody)
- [McpServerIntegrationCreateResponse](integration_mcpserver_v1.md#mcpserverintegrationcreateresponse)
- [McpServerIntegrationCreateResponseBody](integration_mcpserver_v1.md#mcpserverintegrationcreateresponsebody)
- [McpServerIntegrationDeleteRequest](integration_mcpserver_v1.md#mcpserverintegrationdeleterequest)
- [McpServerIntegrationDeleteRequestBody](integration_mcpserver_v1.md#mcpserverintegrationdeleterequestbody)
- [McpServerIntegrationDeleteResponse](integration_mcpserver_v1.md#mcpserverintegrationdeleteresponse)
- [McpServerIntegrationDeleteResponseBody](integration_mcpserver_v1.md#mcpserverintegrationdeleteresponsebody)
- [McpServerIntegrationFetchResponse](integration_mcpserver_v1.md#mcpserverintegrationfetchresponse)
- [McpServerIntegrationListRequest](integration_mcpserver_v1.md#mcpserverintegrationlistrequest)
- [McpServerIntegrationListResponse](integration_mcpserver_v1.md#mcpserverintegrationlistresponse)
- [McpServerIntegrationListStreamType](integration_mcpserver_v1.md#mcpserverintegrationliststreamtype)
- [McpServerIntegrationUpdateRequest](integration_mcpserver_v1.md#mcpserverintegrationupdaterequest)
- [McpServerIntegrationUpdateRequestBody](integration_mcpserver_v1.md#mcpserverintegrationupdaterequestbody)
- [McpServerIntegrationUpdateResponse](integration_mcpserver_v1.md#mcpserverintegrationupdateresponse)
- [McpServerIntegrationUpdateResponseBody](integration_mcpserver_v1.md#mcpserverintegrationupdateresponsebody)
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

Ƭ **McpServerIntegrationCreateRequest**\<\>: [`McpServerIntegrationCreateRequestBody`](integration_mcpserver_v1.md#mcpserverintegrationcreaterequestbody)

#### Defined in

[integration/mcpserver/v1.js:55](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/mcpserver/v1.js#L55)

___

### McpServerIntegrationCreateRequestBody

Ƭ **McpServerIntegrationCreateRequestBody**\<\>: `operations`[``"createMcpServerIntegration"``][``"requestBody"``][``"content"``][``"application/json"``]

#### Defined in

[integration/mcpserver/v1.js:53](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/mcpserver/v1.js#L53)

___

### McpServerIntegrationCreateResponse

Ƭ **McpServerIntegrationCreateResponse**\<\>: [`McpServerIntegrationCreateResponseBody`](integration_mcpserver_v1.md#mcpserverintegrationcreateresponsebody)

#### Defined in

[integration/mcpserver/v1.js:59](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/mcpserver/v1.js#L59)

___

### McpServerIntegrationCreateResponseBody

Ƭ **McpServerIntegrationCreateResponseBody**\<\>: `operations`[``"createMcpServerIntegration"``][``"responses"``][``"200"``][``"content"``][``"application/json"``]

#### Defined in

[integration/mcpserver/v1.js:57](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/mcpserver/v1.js#L57)

___

### McpServerIntegrationDeleteRequest

Ƭ **McpServerIntegrationDeleteRequest**\<\>: [`McpServerIntegrationDeleteRequestBody`](integration_mcpserver_v1.md#mcpserverintegrationdeleterequestbody)

#### Defined in

[integration/mcpserver/v1.js:110](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/mcpserver/v1.js#L110)

___

### McpServerIntegrationDeleteRequestBody

Ƭ **McpServerIntegrationDeleteRequestBody**\<\>: `operations`[``"deleteMcpServerIntegration"``][``"requestBody"``][``"content"``][``"application/json"``]

#### Defined in

[integration/mcpserver/v1.js:108](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/mcpserver/v1.js#L108)

___

### McpServerIntegrationDeleteResponse

Ƭ **McpServerIntegrationDeleteResponse**\<\>: [`McpServerIntegrationDeleteResponseBody`](integration_mcpserver_v1.md#mcpserverintegrationdeleteresponsebody)

#### Defined in

[integration/mcpserver/v1.js:114](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/mcpserver/v1.js#L114)

___

### McpServerIntegrationDeleteResponseBody

Ƭ **McpServerIntegrationDeleteResponseBody**\<\>: `operations`[``"deleteMcpServerIntegration"``][``"responses"``][``"200"``][``"content"``][``"application/json"``]

#### Defined in

[integration/mcpserver/v1.js:112](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/mcpserver/v1.js#L112)

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

Ƭ **McpServerIntegrationUpdateRequest**\<\>: [`McpServerIntegrationUpdateRequestBody`](integration_mcpserver_v1.md#mcpserverintegrationupdaterequestbody)

#### Defined in

[integration/mcpserver/v1.js:82](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/mcpserver/v1.js#L82)

___

### McpServerIntegrationUpdateRequestBody

Ƭ **McpServerIntegrationUpdateRequestBody**\<\>: `operations`[``"updateMcpServerIntegration"``][``"requestBody"``][``"content"``][``"application/json"``]

#### Defined in

[integration/mcpserver/v1.js:80](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/mcpserver/v1.js#L80)

___

### McpServerIntegrationUpdateResponse

Ƭ **McpServerIntegrationUpdateResponse**\<\>: [`McpServerIntegrationUpdateResponseBody`](integration_mcpserver_v1.md#mcpserverintegrationupdateresponsebody)

#### Defined in

[integration/mcpserver/v1.js:86](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/mcpserver/v1.js#L86)

___

### McpServerIntegrationUpdateResponseBody

Ƭ **McpServerIntegrationUpdateResponseBody**\<\>: `operations`[``"updateMcpServerIntegration"``][``"responses"``][``"200"``][``"content"``][``"application/json"``]

#### Defined in

[integration/mcpserver/v1.js:84](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/mcpserver/v1.js#L84)

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
| `request` | `Object` |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<{}\>

#### Defined in

[integration/mcpserver/v1.js:65](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/mcpserver/v1.js#L65)

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

[integration/mcpserver/v1.js:120](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/mcpserver/v1.js#L120)

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
| `request` | `Object` |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<{}\>

#### Defined in

[integration/mcpserver/v1.js:93](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/mcpserver/v1.js#L93)
