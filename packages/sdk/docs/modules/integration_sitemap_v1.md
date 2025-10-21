[@chatbotkit/sdk](../README.md) / [Modules](../modules.md) / integration/sitemap/v1

# Module: integration/sitemap/v1

## Table of contents

### Type Aliases

- [ChatBotKitClient](integration_sitemap_v1.md#chatbotkitclient)
- [ResponsePromise](integration_sitemap_v1.md#responsepromise)
- [SitemapIntegrationCreateRequest](integration_sitemap_v1.md#sitemapintegrationcreaterequest)
- [SitemapIntegrationCreateRequestBody](integration_sitemap_v1.md#sitemapintegrationcreaterequestbody)
- [SitemapIntegrationCreateResponse](integration_sitemap_v1.md#sitemapintegrationcreateresponse)
- [SitemapIntegrationDeleteRequestBody](integration_sitemap_v1.md#sitemapintegrationdeleterequestbody)
- [SitemapIntegrationDeleteResponse](integration_sitemap_v1.md#sitemapintegrationdeleteresponse)
- [SitemapIntegrationFetchResponse](integration_sitemap_v1.md#sitemapintegrationfetchresponse)
- [SitemapIntegrationListRequest](integration_sitemap_v1.md#sitemapintegrationlistrequest)
- [SitemapIntegrationListResponse](integration_sitemap_v1.md#sitemapintegrationlistresponse)
- [SitemapIntegrationListStreamType](integration_sitemap_v1.md#sitemapintegrationliststreamtype)
- [SitemapIntegrationSyncRequestBody](integration_sitemap_v1.md#sitemapintegrationsyncrequestbody)
- [SitemapIntegrationSyncResponse](integration_sitemap_v1.md#sitemapintegrationsyncresponse)
- [SitemapIntegrationUpdateRequest](integration_sitemap_v1.md#sitemapintegrationupdaterequest)
- [SitemapIntegrationUpdateRequestBody](integration_sitemap_v1.md#sitemapintegrationupdaterequestbody)
- [SitemapIntegrationUpdateResponse](integration_sitemap_v1.md#sitemapintegrationupdateresponse)

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

Ƭ **SitemapIntegrationCreateRequest**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `blueprintId?` | `string` |
| `datasetId` | `string` |
| `description?` | `string` |
| `expiresIn?` | `number` |
| `glob?` | `string` |
| `javascript?` | `boolean` |
| `meta?` | [`Record`]( https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type )\<`string`, `any`\> |
| `name?` | `string` |
| `selectors?` | `string` |
| `syncSchedule?` | `string` |
| `url?` | `string` |

#### Defined in

[integration/sitemap/v1.js:65](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/sitemap/v1.js#L65)

___

### SitemapIntegrationCreateRequestBody

Ƭ **SitemapIntegrationCreateRequestBody**\<\>: `operations`[``"createSitemapIntegration"``][``"requestBody"``][``"content"``][``"application/json"``]

#### Defined in

[integration/sitemap/v1.js:67](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/sitemap/v1.js#L67)

___

### SitemapIntegrationCreateResponse

Ƭ **SitemapIntegrationCreateResponse**\<\>: `operations`[``"createSitemapIntegration"``][``"responses"``][``"200"``][``"content"``][``"application/json"``]

#### Defined in

[integration/sitemap/v1.js:69](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/sitemap/v1.js#L69)

___

### SitemapIntegrationDeleteRequestBody

Ƭ **SitemapIntegrationDeleteRequestBody**\<\>: `operations`[``"deleteSitemapIntegration"``][``"requestBody"``][``"content"``][``"application/json"``]

#### Defined in

[integration/sitemap/v1.js:128](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/sitemap/v1.js#L128)

___

### SitemapIntegrationDeleteResponse

Ƭ **SitemapIntegrationDeleteResponse**\<\>: `operations`[``"deleteSitemapIntegration"``][``"responses"``][``"200"``][``"content"``][``"application/json"``]

#### Defined in

[integration/sitemap/v1.js:130](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/sitemap/v1.js#L130)

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

### SitemapIntegrationSyncRequestBody

Ƭ **SitemapIntegrationSyncRequestBody**\<\>: `operations`[``"syncSitemapIntegration"``][``"requestBody"``][``"content"``][``"application/json"``]

#### Defined in

[integration/sitemap/v1.js:149](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/sitemap/v1.js#L149)

___

### SitemapIntegrationSyncResponse

Ƭ **SitemapIntegrationSyncResponse**\<\>: `operations`[``"syncSitemapIntegration"``][``"responses"``][``"200"``][``"content"``][``"application/json"``]

#### Defined in

[integration/sitemap/v1.js:151](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/sitemap/v1.js#L151)

___

### SitemapIntegrationUpdateRequest

Ƭ **SitemapIntegrationUpdateRequest**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `blueprintId?` | `string` |
| `datasetId?` | `string` |
| `description?` | `string` |
| `expiresIn?` | `number` |
| `glob?` | `string` |
| `javascript?` | `boolean` |
| `meta?` | [`Record`]( https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type )\<`string`, `any`\> |
| `name?` | `string` |
| `selectors?` | `string` |
| `syncSchedule?` | `string` |
| `url?` | `string` |

#### Defined in

[integration/sitemap/v1.js:102](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/sitemap/v1.js#L102)

___

### SitemapIntegrationUpdateRequestBody

Ƭ **SitemapIntegrationUpdateRequestBody**\<\>: `operations`[``"updateSitemapIntegration"``][``"requestBody"``][``"content"``][``"application/json"``]

#### Defined in

[integration/sitemap/v1.js:104](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/sitemap/v1.js#L104)

___

### SitemapIntegrationUpdateResponse

Ƭ **SitemapIntegrationUpdateResponse**\<\>: `operations`[``"updateSitemapIntegration"``][``"responses"``][``"200"``][``"content"``][``"application/json"``]

#### Defined in

[integration/sitemap/v1.js:106](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/sitemap/v1.js#L106)

## Functions

### createSitemapIntegration

▸ **createSitemapIntegration**(`client`, `request`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<{}\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`ChatBotKitClient`](../classes/client.ChatBotKitClient.md) |
| `request` | [`SitemapIntegrationCreateRequest`](integration_sitemap_v1.md#sitemapintegrationcreaterequest) |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<{}\>

#### Defined in

[integration/sitemap/v1.js:75](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/sitemap/v1.js#L75)

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

[integration/sitemap/v1.js:136](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/sitemap/v1.js#L136)

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

[integration/sitemap/v1.js:157](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/sitemap/v1.js#L157)

___

### updateSitemapIntegration

▸ **updateSitemapIntegration**(`client`, `sitemapId`, `request`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<{}\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`ChatBotKitClient`](../classes/client.ChatBotKitClient.md) |
| `sitemapId` | `string` |
| `request` | [`SitemapIntegrationUpdateRequest`](integration_sitemap_v1.md#sitemapintegrationupdaterequest) |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<{}\>

#### Defined in

[integration/sitemap/v1.js:113](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/sitemap/v1.js#L113)
