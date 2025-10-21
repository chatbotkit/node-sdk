[@chatbotkit/sdk](../README.md) / [Modules](../modules.md) / integration/notion/v1

# Module: integration/notion/v1

## Table of contents

### Type Aliases

- [ChatBotKitClient](integration_notion_v1.md#chatbotkitclient)
- [NotionIntegrationCreateRequest](integration_notion_v1.md#notionintegrationcreaterequest)
- [NotionIntegrationCreateRequestBody](integration_notion_v1.md#notionintegrationcreaterequestbody)
- [NotionIntegrationCreateResponse](integration_notion_v1.md#notionintegrationcreateresponse)
- [NotionIntegrationCreateResponseBody](integration_notion_v1.md#notionintegrationcreateresponsebody)
- [NotionIntegrationDeleteRequest](integration_notion_v1.md#notionintegrationdeleterequest)
- [NotionIntegrationDeleteRequestBody](integration_notion_v1.md#notionintegrationdeleterequestbody)
- [NotionIntegrationDeleteResponse](integration_notion_v1.md#notionintegrationdeleteresponse)
- [NotionIntegrationDeleteResponseBody](integration_notion_v1.md#notionintegrationdeleteresponsebody)
- [NotionIntegrationFetchResponse](integration_notion_v1.md#notionintegrationfetchresponse)
- [NotionIntegrationListRequest](integration_notion_v1.md#notionintegrationlistrequest)
- [NotionIntegrationListResponse](integration_notion_v1.md#notionintegrationlistresponse)
- [NotionIntegrationListStreamType](integration_notion_v1.md#notionintegrationliststreamtype)
- [NotionIntegrationSyncRequest](integration_notion_v1.md#notionintegrationsyncrequest)
- [NotionIntegrationSyncRequestBody](integration_notion_v1.md#notionintegrationsyncrequestbody)
- [NotionIntegrationSyncResponse](integration_notion_v1.md#notionintegrationsyncresponse)
- [NotionIntegrationSyncResponseBody](integration_notion_v1.md#notionintegrationsyncresponsebody)
- [NotionIntegrationUpdateRequest](integration_notion_v1.md#notionintegrationupdaterequest)
- [NotionIntegrationUpdateRequestBody](integration_notion_v1.md#notionintegrationupdaterequestbody)
- [NotionIntegrationUpdateResponse](integration_notion_v1.md#notionintegrationupdateresponse)
- [NotionIntegrationUpdateResponseBody](integration_notion_v1.md#notionintegrationupdateresponsebody)
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

Ƭ **NotionIntegrationCreateRequest**\<\>: [`NotionIntegrationCreateRequestBody`](integration_notion_v1.md#notionintegrationcreaterequestbody)

#### Defined in

[integration/notion/v1.js:55](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/notion/v1.js#L55)

___

### NotionIntegrationCreateRequestBody

Ƭ **NotionIntegrationCreateRequestBody**\<\>: `operations`[``"createNotionIntegration"``][``"requestBody"``][``"content"``][``"application/json"``]

#### Defined in

[integration/notion/v1.js:53](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/notion/v1.js#L53)

___

### NotionIntegrationCreateResponse

Ƭ **NotionIntegrationCreateResponse**\<\>: [`NotionIntegrationCreateResponseBody`](integration_notion_v1.md#notionintegrationcreateresponsebody)

#### Defined in

[integration/notion/v1.js:59](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/notion/v1.js#L59)

___

### NotionIntegrationCreateResponseBody

Ƭ **NotionIntegrationCreateResponseBody**\<\>: `operations`[``"createNotionIntegration"``][``"responses"``][``"200"``][``"content"``][``"application/json"``]

#### Defined in

[integration/notion/v1.js:57](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/notion/v1.js#L57)

___

### NotionIntegrationDeleteRequest

Ƭ **NotionIntegrationDeleteRequest**\<\>: [`NotionIntegrationDeleteRequestBody`](integration_notion_v1.md#notionintegrationdeleterequestbody)

#### Defined in

[integration/notion/v1.js:110](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/notion/v1.js#L110)

___

### NotionIntegrationDeleteRequestBody

Ƭ **NotionIntegrationDeleteRequestBody**\<\>: `operations`[``"deleteNotionIntegration"``][``"requestBody"``][``"content"``][``"application/json"``]

#### Defined in

[integration/notion/v1.js:108](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/notion/v1.js#L108)

___

### NotionIntegrationDeleteResponse

Ƭ **NotionIntegrationDeleteResponse**\<\>: [`NotionIntegrationDeleteResponseBody`](integration_notion_v1.md#notionintegrationdeleteresponsebody)

#### Defined in

[integration/notion/v1.js:114](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/notion/v1.js#L114)

___

### NotionIntegrationDeleteResponseBody

Ƭ **NotionIntegrationDeleteResponseBody**\<\>: `operations`[``"deleteNotionIntegration"``][``"responses"``][``"200"``][``"content"``][``"application/json"``]

#### Defined in

[integration/notion/v1.js:112](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/notion/v1.js#L112)

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

### NotionIntegrationSyncRequest

Ƭ **NotionIntegrationSyncRequest**\<\>: [`NotionIntegrationSyncRequestBody`](integration_notion_v1.md#notionintegrationsyncrequestbody)

#### Defined in

[integration/notion/v1.js:135](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/notion/v1.js#L135)

___

### NotionIntegrationSyncRequestBody

Ƭ **NotionIntegrationSyncRequestBody**\<\>: `operations`[``"syncNotionIntegration"``][``"requestBody"``][``"content"``][``"application/json"``]

#### Defined in

[integration/notion/v1.js:133](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/notion/v1.js#L133)

___

### NotionIntegrationSyncResponse

Ƭ **NotionIntegrationSyncResponse**\<\>: [`NotionIntegrationSyncResponseBody`](integration_notion_v1.md#notionintegrationsyncresponsebody)

#### Defined in

[integration/notion/v1.js:139](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/notion/v1.js#L139)

___

### NotionIntegrationSyncResponseBody

Ƭ **NotionIntegrationSyncResponseBody**\<\>: `operations`[``"syncNotionIntegration"``][``"responses"``][``"200"``][``"content"``][``"application/json"``]

#### Defined in

[integration/notion/v1.js:137](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/notion/v1.js#L137)

___

### NotionIntegrationUpdateRequest

Ƭ **NotionIntegrationUpdateRequest**\<\>: [`NotionIntegrationUpdateRequestBody`](integration_notion_v1.md#notionintegrationupdaterequestbody)

#### Defined in

[integration/notion/v1.js:82](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/notion/v1.js#L82)

___

### NotionIntegrationUpdateRequestBody

Ƭ **NotionIntegrationUpdateRequestBody**\<\>: `operations`[``"updateNotionIntegration"``][``"requestBody"``][``"content"``][``"application/json"``]

#### Defined in

[integration/notion/v1.js:80](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/notion/v1.js#L80)

___

### NotionIntegrationUpdateResponse

Ƭ **NotionIntegrationUpdateResponse**\<\>: [`NotionIntegrationUpdateResponseBody`](integration_notion_v1.md#notionintegrationupdateresponsebody)

#### Defined in

[integration/notion/v1.js:86](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/notion/v1.js#L86)

___

### NotionIntegrationUpdateResponseBody

Ƭ **NotionIntegrationUpdateResponseBody**\<\>: `operations`[``"updateNotionIntegration"``][``"responses"``][``"200"``][``"content"``][``"application/json"``]

#### Defined in

[integration/notion/v1.js:84](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/notion/v1.js#L84)

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
| `request` | `Object` |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<{}\>

#### Defined in

[integration/notion/v1.js:65](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/notion/v1.js#L65)

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

[integration/notion/v1.js:120](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/notion/v1.js#L120)

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

[integration/notion/v1.js:145](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/notion/v1.js#L145)

___

### updateNotionIntegration

▸ **updateNotionIntegration**(`client`, `notionId`, `request`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<{}\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`ChatBotKitClient`](../classes/client.ChatBotKitClient.md) |
| `notionId` | `string` |
| `request` | `Object` |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<{}\>

#### Defined in

[integration/notion/v1.js:93](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/notion/v1.js#L93)
