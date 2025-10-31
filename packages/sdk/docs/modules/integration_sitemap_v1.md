[@chatbotkit/sdk](../README.md) / [Modules](../modules.md) / integration/sitemap/v1

# Module: integration/sitemap/v1

## Table of contents

### Type Aliases

- [ChatBotKitClient](integration_sitemap_v1.md#chatbotkitclient)
- [ResponsePromise](integration_sitemap_v1.md#responsepromise)
- [SitemapIntegrationCreateRequest](integration_sitemap_v1.md#sitemapintegrationcreaterequest)
- [SitemapIntegrationCreateRequestBody](integration_sitemap_v1.md#sitemapintegrationcreaterequestbody)
- [SitemapIntegrationCreateResponse](integration_sitemap_v1.md#sitemapintegrationcreateresponse)
- [SitemapIntegrationCreateResponseBody](integration_sitemap_v1.md#sitemapintegrationcreateresponsebody)
- [SitemapIntegrationDeleteRequest](integration_sitemap_v1.md#sitemapintegrationdeleterequest)
- [SitemapIntegrationDeleteRequestBody](integration_sitemap_v1.md#sitemapintegrationdeleterequestbody)
- [SitemapIntegrationDeleteResponse](integration_sitemap_v1.md#sitemapintegrationdeleteresponse)
- [SitemapIntegrationDeleteResponseBody](integration_sitemap_v1.md#sitemapintegrationdeleteresponsebody)
- [SitemapIntegrationFetchResponse](integration_sitemap_v1.md#sitemapintegrationfetchresponse)
- [SitemapIntegrationListRequest](integration_sitemap_v1.md#sitemapintegrationlistrequest)
- [SitemapIntegrationListResponse](integration_sitemap_v1.md#sitemapintegrationlistresponse)
- [SitemapIntegrationListStreamType](integration_sitemap_v1.md#sitemapintegrationliststreamtype)
- [SitemapIntegrationSyncRequest](integration_sitemap_v1.md#sitemapintegrationsyncrequest)
- [SitemapIntegrationSyncRequestBody](integration_sitemap_v1.md#sitemapintegrationsyncrequestbody)
- [SitemapIntegrationSyncResponse](integration_sitemap_v1.md#sitemapintegrationsyncresponse)
- [SitemapIntegrationSyncResponseBody](integration_sitemap_v1.md#sitemapintegrationsyncresponsebody)
- [SitemapIntegrationUpdateRequest](integration_sitemap_v1.md#sitemapintegrationupdaterequest)
- [SitemapIntegrationUpdateRequestBody](integration_sitemap_v1.md#sitemapintegrationupdaterequestbody)
- [SitemapIntegrationUpdateResponse](integration_sitemap_v1.md#sitemapintegrationupdateresponse)
- [SitemapIntegrationUpdateResponseBody](integration_sitemap_v1.md#sitemapintegrationupdateresponsebody)

### Functions

- [createSitemapIntegration](integration_sitemap_v1.md#createsitemapintegration)
- [deleteSitemapIntegration](integration_sitemap_v1.md#deletesitemapintegration)
- [fetchSitemapIntegration](integration_sitemap_v1.md#fetchsitemapintegration)
- [listSitemapIntegrations](integration_sitemap_v1.md#listsitemapintegrations)
- [syncSitemapIntegration](integration_sitemap_v1.md#syncsitemapintegration)
- [updateSitemapIntegration](integration_sitemap_v1.md#updatesitemapintegration)

## Type Aliases

### ChatBotKitClient

Ƭ **ChatBotKitClient**\<\>: [`client`](client.md)

#### Defined in

[integration/sitemap/v1.js:2](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/sitemap/v1.js#L2)

___

### ResponsePromise

Ƭ **ResponsePromise**\<`T`, `U`\>: [`client`](client.md)

#### Type parameters

| Name |
| :------ |
| `T` |
| `U` |

#### Defined in

[integration/sitemap/v1.js:8](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/sitemap/v1.js#L8)

___

### SitemapIntegrationCreateRequest

Ƭ **SitemapIntegrationCreateRequest**\<\>: [`SitemapIntegrationCreateRequestBody`](integration_sitemap_v1.md#sitemapintegrationcreaterequestbody)

#### Defined in

[integration/sitemap/v1.js:55](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/sitemap/v1.js#L55)

___

### SitemapIntegrationCreateRequestBody

Ƭ **SitemapIntegrationCreateRequestBody**\<\>: `operations`[``"createSitemapIntegration"``][``"requestBody"``][``"content"``][``"application/json"``]

#### Defined in

[integration/sitemap/v1.js:53](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/sitemap/v1.js#L53)

___

### SitemapIntegrationCreateResponse

Ƭ **SitemapIntegrationCreateResponse**\<\>: [`SitemapIntegrationCreateResponseBody`](integration_sitemap_v1.md#sitemapintegrationcreateresponsebody)

#### Defined in

[integration/sitemap/v1.js:59](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/sitemap/v1.js#L59)

___

### SitemapIntegrationCreateResponseBody

Ƭ **SitemapIntegrationCreateResponseBody**\<\>: `operations`[``"createSitemapIntegration"``][``"responses"``][``"200"``][``"content"``][``"application/json"``]

#### Defined in

[integration/sitemap/v1.js:57](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/sitemap/v1.js#L57)

___

### SitemapIntegrationDeleteRequest

Ƭ **SitemapIntegrationDeleteRequest**\<\>: [`SitemapIntegrationDeleteRequestBody`](integration_sitemap_v1.md#sitemapintegrationdeleterequestbody)

#### Defined in

[integration/sitemap/v1.js:110](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/sitemap/v1.js#L110)

___

### SitemapIntegrationDeleteRequestBody

Ƭ **SitemapIntegrationDeleteRequestBody**\<\>: `operations`[``"deleteSitemapIntegration"``][``"requestBody"``][``"content"``][``"application/json"``]

#### Defined in

[integration/sitemap/v1.js:108](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/sitemap/v1.js#L108)

___

### SitemapIntegrationDeleteResponse

Ƭ **SitemapIntegrationDeleteResponse**\<\>: [`SitemapIntegrationDeleteResponseBody`](integration_sitemap_v1.md#sitemapintegrationdeleteresponsebody)

#### Defined in

[integration/sitemap/v1.js:114](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/sitemap/v1.js#L114)

___

### SitemapIntegrationDeleteResponseBody

Ƭ **SitemapIntegrationDeleteResponseBody**\<\>: `operations`[``"deleteSitemapIntegration"``][``"responses"``][``"200"``][``"content"``][``"application/json"``]

#### Defined in

[integration/sitemap/v1.js:112](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/sitemap/v1.js#L112)

___

### SitemapIntegrationFetchResponse

Ƭ **SitemapIntegrationFetchResponse**\<\>: `operations`[``"fetchSitemapIntegration"``][``"responses"``][``"200"``][``"content"``][``"application/json"``]

#### Defined in

[integration/sitemap/v1.js:37](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/sitemap/v1.js#L37)

___

### SitemapIntegrationListRequest

Ƭ **SitemapIntegrationListRequest**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `cursor?` | `string` |
| `meta?` | [`Record`]( https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type )\<`string`, `string`\> |
| `order?` | ``"desc"`` \| ``"asc"`` |
| `take?` | `number` |

#### Defined in

[integration/sitemap/v1.js:17](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/sitemap/v1.js#L17)

___

### SitemapIntegrationListResponse

Ƭ **SitemapIntegrationListResponse**\<\>: `operations`[``"listSitemapIntegrations"``][``"responses"``][``"200"``][``"content"``][``"application/json"``]

#### Defined in

[integration/sitemap/v1.js:19](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/sitemap/v1.js#L19)

___

### SitemapIntegrationListStreamType

Ƭ **SitemapIntegrationListStreamType**\<\>: `operations`[``"listSitemapIntegrations"``][``"responses"``][``"200"``][``"content"``][``"application/jsonl"``]

#### Defined in

[integration/sitemap/v1.js:21](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/sitemap/v1.js#L21)

___

### SitemapIntegrationSyncRequest

Ƭ **SitemapIntegrationSyncRequest**\<\>: [`SitemapIntegrationSyncRequestBody`](integration_sitemap_v1.md#sitemapintegrationsyncrequestbody)

#### Defined in

[integration/sitemap/v1.js:135](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/sitemap/v1.js#L135)

___

### SitemapIntegrationSyncRequestBody

Ƭ **SitemapIntegrationSyncRequestBody**\<\>: `operations`[``"syncSitemapIntegration"``][``"requestBody"``][``"content"``][``"application/json"``]

#### Defined in

[integration/sitemap/v1.js:133](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/sitemap/v1.js#L133)

___

### SitemapIntegrationSyncResponse

Ƭ **SitemapIntegrationSyncResponse**\<\>: [`SitemapIntegrationSyncResponseBody`](integration_sitemap_v1.md#sitemapintegrationsyncresponsebody)

#### Defined in

[integration/sitemap/v1.js:139](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/sitemap/v1.js#L139)

___

### SitemapIntegrationSyncResponseBody

Ƭ **SitemapIntegrationSyncResponseBody**\<\>: `operations`[``"syncSitemapIntegration"``][``"responses"``][``"200"``][``"content"``][``"application/json"``]

#### Defined in

[integration/sitemap/v1.js:137](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/sitemap/v1.js#L137)

___

### SitemapIntegrationUpdateRequest

Ƭ **SitemapIntegrationUpdateRequest**\<\>: [`SitemapIntegrationUpdateRequestBody`](integration_sitemap_v1.md#sitemapintegrationupdaterequestbody)

#### Defined in

[integration/sitemap/v1.js:82](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/sitemap/v1.js#L82)

___

### SitemapIntegrationUpdateRequestBody

Ƭ **SitemapIntegrationUpdateRequestBody**\<\>: `operations`[``"updateSitemapIntegration"``][``"requestBody"``][``"content"``][``"application/json"``]

#### Defined in

[integration/sitemap/v1.js:80](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/sitemap/v1.js#L80)

___

### SitemapIntegrationUpdateResponse

Ƭ **SitemapIntegrationUpdateResponse**\<\>: [`SitemapIntegrationUpdateResponseBody`](integration_sitemap_v1.md#sitemapintegrationupdateresponsebody)

#### Defined in

[integration/sitemap/v1.js:86](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/sitemap/v1.js#L86)

___

### SitemapIntegrationUpdateResponseBody

Ƭ **SitemapIntegrationUpdateResponseBody**\<\>: `operations`[``"updateSitemapIntegration"``][``"responses"``][``"200"``][``"content"``][``"application/json"``]

#### Defined in

[integration/sitemap/v1.js:84](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/sitemap/v1.js#L84)

## Functions

### createSitemapIntegration

▸ **createSitemapIntegration**(`client`, `request`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<{}\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`ChatBotKitClient`](../classes/client.ChatBotKitClient.md) |
| `request` | `Object` |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<{}\>

#### Defined in

[integration/sitemap/v1.js:65](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/sitemap/v1.js#L65)

___

### deleteSitemapIntegration

▸ **deleteSitemapIntegration**(`client`, `sitemapId`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<{}\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`ChatBotKitClient`](../classes/client.ChatBotKitClient.md) |
| `sitemapId` | `string` |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<{}\>

#### Defined in

[integration/sitemap/v1.js:120](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/sitemap/v1.js#L120)

___

### fetchSitemapIntegration

▸ **fetchSitemapIntegration**(`client`, `sitemapId`): [`ResponsePromise`](../classes/client.ResponsePromise.md)\<{}, `never`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`ChatBotKitClient`](../classes/client.ChatBotKitClient.md) |
| `sitemapId` | `string` |

#### Returns

[`ResponsePromise`](../classes/client.ResponsePromise.md)\<{}, `never`\>

#### Defined in

[integration/sitemap/v1.js:43](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/sitemap/v1.js#L43)

___

### listSitemapIntegrations

▸ **listSitemapIntegrations**(`client`, `request?`): [`ResponsePromise`](../classes/client.ResponsePromise.md)\<{}, {}\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`ChatBotKitClient`](../classes/client.ChatBotKitClient.md) |
| `request?` | [`SitemapIntegrationListRequest`](integration_sitemap_v1.md#sitemapintegrationlistrequest) |

#### Returns

[`ResponsePromise`](../classes/client.ResponsePromise.md)\<{}, {}\>

#### Defined in

[integration/sitemap/v1.js:27](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/sitemap/v1.js#L27)

___

### syncSitemapIntegration

▸ **syncSitemapIntegration**(`client`, `sitemapId`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<{}\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`ChatBotKitClient`](../classes/client.ChatBotKitClient.md) |
| `sitemapId` | `string` |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<{}\>

#### Defined in

[integration/sitemap/v1.js:145](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/sitemap/v1.js#L145)

___

### updateSitemapIntegration

▸ **updateSitemapIntegration**(`client`, `sitemapId`, `request`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<{}\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`ChatBotKitClient`](../classes/client.ChatBotKitClient.md) |
| `sitemapId` | `string` |
| `request` | `Object` |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<{}\>

#### Defined in

[integration/sitemap/v1.js:93](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/sitemap/v1.js#L93)
