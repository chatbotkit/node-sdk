[@chatbotkit/sdk](../README.md) / [Modules](../modules.md) / integration/sitemap/v1

# Module: integration/sitemap/v1

## Table of contents

### Type Aliases

- [ChatBotKitClient](integration_sitemap_v1.md#chatbotkitclient)
- [ResponsePromise](integration_sitemap_v1.md#responsepromise)
- [SitemapInegrationInstance](integration_sitemap_v1.md#sitemapinegrationinstance)
- [SitemapIntegrationCreateRequest](integration_sitemap_v1.md#sitemapintegrationcreaterequest)
- [SitemapIntegrationCreateResponse](integration_sitemap_v1.md#sitemapintegrationcreateresponse)
- [SitemapIntegrationDeleteResponse](integration_sitemap_v1.md#sitemapintegrationdeleteresponse)
- [SitemapIntegrationFetchResponse](integration_sitemap_v1.md#sitemapintegrationfetchresponse)
- [SitemapIntegrationListRequest](integration_sitemap_v1.md#sitemapintegrationlistrequest)
- [SitemapIntegrationListResponse](integration_sitemap_v1.md#sitemapintegrationlistresponse)
- [SitemapIntegrationListStreamItem](integration_sitemap_v1.md#sitemapintegrationliststreamitem)
- [SitemapIntegrationListStreamType](integration_sitemap_v1.md#sitemapintegrationliststreamtype)
- [SitemapIntegrationOptions](integration_sitemap_v1.md#sitemapintegrationoptions)
- [SitemapIntegrationSyncResponse](integration_sitemap_v1.md#sitemapintegrationsyncresponse)
- [SitemapIntegrationUpdateRequest](integration_sitemap_v1.md#sitemapintegrationupdaterequest)
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

### SitemapInegrationInstance

Ƭ **SitemapInegrationInstance**\<\>: [`SitemapIntegrationOptions`](integration_sitemap_v1.md#sitemapintegrationoptions) & \{ `createdAt`: `number` ; `id`: `string` ; `updatedAt`: `number`  }

#### Defined in

[integration/sitemap/v1.js:29](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/sitemap/v1.js#L29)

___

### SitemapIntegrationCreateRequest

Ƭ **SitemapIntegrationCreateRequest**\<\>: [`SitemapIntegrationOptions`](integration_sitemap_v1.md#sitemapintegrationoptions) & \{ `datasetId`: `string`  }

#### Defined in

[integration/sitemap/v1.js:78](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/sitemap/v1.js#L78)

___

### SitemapIntegrationCreateResponse

Ƭ **SitemapIntegrationCreateResponse**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Defined in

[integration/sitemap/v1.js:82](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/sitemap/v1.js#L82)

___

### SitemapIntegrationDeleteResponse

Ƭ **SitemapIntegrationDeleteResponse**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Defined in

[integration/sitemap/v1.js:132](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/sitemap/v1.js#L132)

___

### SitemapIntegrationFetchResponse

Ƭ **SitemapIntegrationFetchResponse**\<\>: [`SitemapInegrationInstance`](integration_sitemap_v1.md#sitemapinegrationinstance) & {}

#### Defined in

[integration/sitemap/v1.js:61](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/sitemap/v1.js#L61)

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

[integration/sitemap/v1.js:33](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/sitemap/v1.js#L33)

___

### SitemapIntegrationListResponse

Ƭ **SitemapIntegrationListResponse**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `items` | [`SitemapInegrationInstance`](integration_sitemap_v1.md#sitemapinegrationinstance)[] |

#### Defined in

[integration/sitemap/v1.js:35](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/sitemap/v1.js#L35)

___

### SitemapIntegrationListStreamItem

Ƭ **SitemapIntegrationListStreamItem**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `data` | [`SitemapInegrationInstance`](integration_sitemap_v1.md#sitemapinegrationinstance) |
| `type` | ``"item"`` |

#### Defined in

[integration/sitemap/v1.js:40](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/sitemap/v1.js#L40)

___

### SitemapIntegrationListStreamType

Ƭ **SitemapIntegrationListStreamType**\<\>: [`SitemapIntegrationListStreamItem`](integration_sitemap_v1.md#sitemapintegrationliststreamitem)

#### Defined in

[integration/sitemap/v1.js:42](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/sitemap/v1.js#L42)

___

### SitemapIntegrationOptions

Ƭ **SitemapIntegrationOptions**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
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

[integration/sitemap/v1.js:23](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/sitemap/v1.js#L23)

___

### SitemapIntegrationSyncResponse

Ƭ **SitemapIntegrationSyncResponse**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Defined in

[integration/sitemap/v1.js:153](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/sitemap/v1.js#L153)

___

### SitemapIntegrationUpdateRequest

Ƭ **SitemapIntegrationUpdateRequest**\<\>: [`SitemapIntegrationOptions`](integration_sitemap_v1.md#sitemapintegrationoptions) & {}

#### Defined in

[integration/sitemap/v1.js:104](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/sitemap/v1.js#L104)

___

### SitemapIntegrationUpdateResponse

Ƭ **SitemapIntegrationUpdateResponse**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Defined in

[integration/sitemap/v1.js:108](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/sitemap/v1.js#L108)

## Functions

### createSitemapIntegration

▸ **createSitemapIntegration**(`client`, `request`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<[`SitemapIntegrationCreateResponse`](integration_sitemap_v1.md#sitemapintegrationcreateresponse)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`ChatBotKitClient`](../classes/client.ChatBotKitClient.md) |
| `request` | [`SitemapIntegrationCreateRequest`](integration_sitemap_v1.md#sitemapintegrationcreaterequest) |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<[`SitemapIntegrationCreateResponse`](integration_sitemap_v1.md#sitemapintegrationcreateresponse)\>

#### Defined in

[integration/sitemap/v1.js:88](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/sitemap/v1.js#L88)

___

### deleteSitemapIntegration

▸ **deleteSitemapIntegration**(`client`, `sitemapId`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<[`SitemapIntegrationDeleteResponse`](integration_sitemap_v1.md#sitemapintegrationdeleteresponse)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`ChatBotKitClient`](../classes/client.ChatBotKitClient.md) |
| `sitemapId` | `string` |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<[`SitemapIntegrationDeleteResponse`](integration_sitemap_v1.md#sitemapintegrationdeleteresponse)\>

#### Defined in

[integration/sitemap/v1.js:138](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/sitemap/v1.js#L138)

___

### fetchSitemapIntegration

▸ **fetchSitemapIntegration**(`client`, `sitemapId`): [`ResponsePromise`](../classes/client.ResponsePromise.md)\<[`SitemapIntegrationFetchResponse`](integration_sitemap_v1.md#sitemapintegrationfetchresponse), `never`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`ChatBotKitClient`](../classes/client.ChatBotKitClient.md) |
| `sitemapId` | `string` |

#### Returns

[`ResponsePromise`](../classes/client.ResponsePromise.md)\<[`SitemapIntegrationFetchResponse`](integration_sitemap_v1.md#sitemapintegrationfetchresponse), `never`\>

#### Defined in

[integration/sitemap/v1.js:67](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/sitemap/v1.js#L67)

___

### listSitemapIntegrations

▸ **listSitemapIntegrations**(`client`, `request?`): [`ResponsePromise`](../classes/client.ResponsePromise.md)\<[`SitemapIntegrationListResponse`](integration_sitemap_v1.md#sitemapintegrationlistresponse), [`SitemapIntegrationListStreamItem`](integration_sitemap_v1.md#sitemapintegrationliststreamitem)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`ChatBotKitClient`](../classes/client.ChatBotKitClient.md) |
| `request?` | [`SitemapIntegrationListRequest`](integration_sitemap_v1.md#sitemapintegrationlistrequest) |

#### Returns

[`ResponsePromise`](../classes/client.ResponsePromise.md)\<[`SitemapIntegrationListResponse`](integration_sitemap_v1.md#sitemapintegrationlistresponse), [`SitemapIntegrationListStreamItem`](integration_sitemap_v1.md#sitemapintegrationliststreamitem)\>

#### Defined in

[integration/sitemap/v1.js:48](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/sitemap/v1.js#L48)

___

### syncSitemapIntegration

▸ **syncSitemapIntegration**(`client`, `sitemapId`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<[`SitemapIntegrationSyncResponse`](integration_sitemap_v1.md#sitemapintegrationsyncresponse)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`ChatBotKitClient`](../classes/client.ChatBotKitClient.md) |
| `sitemapId` | `string` |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<[`SitemapIntegrationSyncResponse`](integration_sitemap_v1.md#sitemapintegrationsyncresponse)\>

#### Defined in

[integration/sitemap/v1.js:159](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/sitemap/v1.js#L159)

___

### updateSitemapIntegration

▸ **updateSitemapIntegration**(`client`, `sitemapId`, `request`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<[`SitemapIntegrationUpdateResponse`](integration_sitemap_v1.md#sitemapintegrationupdateresponse)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`ChatBotKitClient`](../classes/client.ChatBotKitClient.md) |
| `sitemapId` | `string` |
| `request` | [`SitemapIntegrationOptions`](integration_sitemap_v1.md#sitemapintegrationoptions) |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<[`SitemapIntegrationUpdateResponse`](integration_sitemap_v1.md#sitemapintegrationupdateresponse)\>

#### Defined in

[integration/sitemap/v1.js:115](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/sitemap/v1.js#L115)
