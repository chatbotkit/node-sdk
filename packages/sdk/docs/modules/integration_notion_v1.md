[@chatbotkit/sdk](../README.md) / [Modules](../modules.md) / integration/notion/v1

# Module: integration/notion/v1

## Table of contents

### Type Aliases

- [ChatBotKitClient](integration_notion_v1.md#chatbotkitclient)
- [NotionIntegrationCreateRequest](integration_notion_v1.md#notionintegrationcreaterequest)
- [NotionIntegrationCreateRequestBody](integration_notion_v1.md#notionintegrationcreaterequestbody)
- [NotionIntegrationCreateResponse](integration_notion_v1.md#notionintegrationcreateresponse)
- [NotionIntegrationDeleteRequestBody](integration_notion_v1.md#notionintegrationdeleterequestbody)
- [NotionIntegrationDeleteResponse](integration_notion_v1.md#notionintegrationdeleteresponse)
- [NotionIntegrationFetchResponse](integration_notion_v1.md#notionintegrationfetchresponse)
- [NotionIntegrationListRequest](integration_notion_v1.md#notionintegrationlistrequest)
- [NotionIntegrationListResponse](integration_notion_v1.md#notionintegrationlistresponse)
- [NotionIntegrationListStreamType](integration_notion_v1.md#notionintegrationliststreamtype)
- [NotionIntegrationSyncRequestBody](integration_notion_v1.md#notionintegrationsyncrequestbody)
- [NotionIntegrationSyncResponse](integration_notion_v1.md#notionintegrationsyncresponse)
- [NotionIntegrationUpdateRequest](integration_notion_v1.md#notionintegrationupdaterequest)
- [NotionIntegrationUpdateRequestBody](integration_notion_v1.md#notionintegrationupdaterequestbody)
- [NotionIntegrationUpdateResponse](integration_notion_v1.md#notionintegrationupdateresponse)
- [ResponsePromise](integration_notion_v1.md#responsepromise)

### Functions

- [createNotionIntegration](integration_notion_v1.md#createnotionintegration)
- [deleteNotionIntegration](integration_notion_v1.md#deletenotionintegration)
- [fetchNotionIntegration](integration_notion_v1.md#fetchnotionintegration)
- [listNotionIntegrations](integration_notion_v1.md#listnotionintegrations)
- [syncNotionIntegration](integration_notion_v1.md#syncnotionintegration)
- [updateNotionIntegration](integration_notion_v1.md#updatenotionintegration)

## Type Aliases

### ChatBotKitClient

Ƭ **ChatBotKitClient**\<\>: [`client`](client.md)

#### Defined in

[integration/notion/v1.js:2](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/notion/v1.js#L2)

___

### NotionIntegrationCreateRequest

Ƭ **NotionIntegrationCreateRequest**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `blueprintId?` | `string` |
| `datasetId` | `string` |
| `description?` | `string` |
| `expiresIn?` | `number` |
| `meta?` | [`Record`]( https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type )\<`string`, `any`\> |
| `name?` | `string` |
| `syncSchedule?` | `string` |
| `token?` | `string` |

#### Defined in

[integration/notion/v1.js:62](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/notion/v1.js#L62)

___

### NotionIntegrationCreateRequestBody

Ƭ **NotionIntegrationCreateRequestBody**\<\>: `operations`[``"createNotionIntegration"``][``"requestBody"``][``"content"``][``"application/json"``]

#### Defined in

[integration/notion/v1.js:64](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/notion/v1.js#L64)

___

### NotionIntegrationCreateResponse

Ƭ **NotionIntegrationCreateResponse**\<\>: `operations`[``"createNotionIntegration"``][``"responses"``][``"200"``][``"content"``][``"application/json"``]

#### Defined in

[integration/notion/v1.js:66](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/notion/v1.js#L66)

___

### NotionIntegrationDeleteRequestBody

Ƭ **NotionIntegrationDeleteRequestBody**\<\>: `operations`[``"deleteNotionIntegration"``][``"requestBody"``][``"content"``][``"application/json"``]

#### Defined in

[integration/notion/v1.js:122](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/notion/v1.js#L122)

___

### NotionIntegrationDeleteResponse

Ƭ **NotionIntegrationDeleteResponse**\<\>: `operations`[``"deleteNotionIntegration"``][``"responses"``][``"200"``][``"content"``][``"application/json"``]

#### Defined in

[integration/notion/v1.js:124](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/notion/v1.js#L124)

___

### NotionIntegrationFetchResponse

Ƭ **NotionIntegrationFetchResponse**\<\>: `operations`[``"fetchNotionIntegration"``][``"responses"``][``"200"``][``"content"``][``"application/json"``]

#### Defined in

[integration/notion/v1.js:37](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/notion/v1.js#L37)

___

### NotionIntegrationListRequest

Ƭ **NotionIntegrationListRequest**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `cursor?` | `string` |
| `meta?` | [`Record`]( https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type )\<`string`, `string`\> |
| `order?` | ``"desc"`` \| ``"asc"`` |
| `take?` | `number` |

#### Defined in

[integration/notion/v1.js:17](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/notion/v1.js#L17)

___

### NotionIntegrationListResponse

Ƭ **NotionIntegrationListResponse**\<\>: `operations`[``"listNotionIntegrations"``][``"responses"``][``"200"``][``"content"``][``"application/json"``]

#### Defined in

[integration/notion/v1.js:19](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/notion/v1.js#L19)

___

### NotionIntegrationListStreamType

Ƭ **NotionIntegrationListStreamType**\<\>: `operations`[``"listNotionIntegrations"``][``"responses"``][``"200"``][``"content"``][``"application/jsonl"``]

#### Defined in

[integration/notion/v1.js:21](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/notion/v1.js#L21)

___

### NotionIntegrationSyncRequestBody

Ƭ **NotionIntegrationSyncRequestBody**\<\>: `operations`[``"syncNotionIntegration"``][``"requestBody"``][``"content"``][``"application/json"``]

#### Defined in

[integration/notion/v1.js:143](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/notion/v1.js#L143)

___

### NotionIntegrationSyncResponse

Ƭ **NotionIntegrationSyncResponse**\<\>: `operations`[``"syncNotionIntegration"``][``"responses"``][``"200"``][``"content"``][``"application/json"``]

#### Defined in

[integration/notion/v1.js:145](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/notion/v1.js#L145)

___

### NotionIntegrationUpdateRequest

Ƭ **NotionIntegrationUpdateRequest**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `blueprintId?` | `string` |
| `datasetId?` | `string` |
| `description?` | `string` |
| `expiresIn?` | `number` |
| `meta?` | [`Record`]( https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type )\<`string`, `any`\> |
| `name?` | `string` |
| `syncSchedule?` | `string` |
| `token?` | `string` |

#### Defined in

[integration/notion/v1.js:96](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/notion/v1.js#L96)

___

### NotionIntegrationUpdateRequestBody

Ƭ **NotionIntegrationUpdateRequestBody**\<\>: `operations`[``"updateNotionIntegration"``][``"requestBody"``][``"content"``][``"application/json"``]

#### Defined in

[integration/notion/v1.js:98](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/notion/v1.js#L98)

___

### NotionIntegrationUpdateResponse

Ƭ **NotionIntegrationUpdateResponse**\<\>: `operations`[``"updateNotionIntegration"``][``"responses"``][``"200"``][``"content"``][``"application/json"``]

#### Defined in

[integration/notion/v1.js:100](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/notion/v1.js#L100)

___

### ResponsePromise

Ƭ **ResponsePromise**\<`T`, `U`\>: [`client`](client.md)

#### Type parameters

| Name |
| :------ |
| `T` |
| `U` |

#### Defined in

[integration/notion/v1.js:8](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/notion/v1.js#L8)

## Functions

### createNotionIntegration

▸ **createNotionIntegration**(`client`, `request`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<{}\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`ChatBotKitClient`](../classes/client.ChatBotKitClient.md) |
| `request` | [`NotionIntegrationCreateRequest`](integration_notion_v1.md#notionintegrationcreaterequest) |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<{}\>

#### Defined in

[integration/notion/v1.js:72](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/notion/v1.js#L72)

___

### deleteNotionIntegration

▸ **deleteNotionIntegration**(`client`, `notionId`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<{}\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`ChatBotKitClient`](../classes/client.ChatBotKitClient.md) |
| `notionId` | `string` |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<{}\>

#### Defined in

[integration/notion/v1.js:130](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/notion/v1.js#L130)

___

### fetchNotionIntegration

▸ **fetchNotionIntegration**(`client`, `notionId`): [`ResponsePromise`](../classes/client.ResponsePromise.md)\<{}, `never`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`ChatBotKitClient`](../classes/client.ChatBotKitClient.md) |
| `notionId` | `string` |

#### Returns

[`ResponsePromise`](../classes/client.ResponsePromise.md)\<{}, `never`\>

#### Defined in

[integration/notion/v1.js:43](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/notion/v1.js#L43)

___

### listNotionIntegrations

▸ **listNotionIntegrations**(`client`, `request?`): [`ResponsePromise`](../classes/client.ResponsePromise.md)\<{}, {}\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`ChatBotKitClient`](../classes/client.ChatBotKitClient.md) |
| `request?` | [`NotionIntegrationListRequest`](integration_notion_v1.md#notionintegrationlistrequest) |

#### Returns

[`ResponsePromise`](../classes/client.ResponsePromise.md)\<{}, {}\>

#### Defined in

[integration/notion/v1.js:27](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/notion/v1.js#L27)

___

### syncNotionIntegration

▸ **syncNotionIntegration**(`client`, `notionId`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<{}\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`ChatBotKitClient`](../classes/client.ChatBotKitClient.md) |
| `notionId` | `string` |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<{}\>

#### Defined in

[integration/notion/v1.js:151](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/notion/v1.js#L151)

___

### updateNotionIntegration

▸ **updateNotionIntegration**(`client`, `notionId`, `request`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<{}\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`ChatBotKitClient`](../classes/client.ChatBotKitClient.md) |
| `notionId` | `string` |
| `request` | [`NotionIntegrationUpdateRequest`](integration_notion_v1.md#notionintegrationupdaterequest) |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<{}\>

#### Defined in

[integration/notion/v1.js:107](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/notion/v1.js#L107)
