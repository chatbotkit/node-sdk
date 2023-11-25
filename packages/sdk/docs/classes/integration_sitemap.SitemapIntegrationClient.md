[@chatbotkit/sdk](../README.md) / [Modules](../modules.md) / [integration/sitemap](../modules/integration_sitemap.md) / SitemapIntegrationClient

# Class: SitemapIntegrationClient

[integration/sitemap](../modules/integration_sitemap.md).SitemapIntegrationClient

**`Template`**

**`Template`**

## Hierarchy

- [`ChatBotKitClient`](client.ChatBotKitClient.md)

  ↳ **`SitemapIntegrationClient`**

## Table of contents

### Constructors

- [constructor](integration_sitemap.SitemapIntegrationClient.md#constructor)

### Properties

- [endpoints](integration_sitemap.SitemapIntegrationClient.md#endpoints)
- [secret](integration_sitemap.SitemapIntegrationClient.md#secret)
- [url](integration_sitemap.SitemapIntegrationClient.md#url)

### Methods

- [clientFetch](integration_sitemap.SitemapIntegrationClient.md#clientfetch)
- [create](integration_sitemap.SitemapIntegrationClient.md#create)
- [delete](integration_sitemap.SitemapIntegrationClient.md#delete)
- [fetch](integration_sitemap.SitemapIntegrationClient.md#fetch)
- [list](integration_sitemap.SitemapIntegrationClient.md#list)
- [sync](integration_sitemap.SitemapIntegrationClient.md#sync)
- [update](integration_sitemap.SitemapIntegrationClient.md#update)

## Constructors

### constructor

• **new SitemapIntegrationClient**(`options`): [`SitemapIntegrationClient`](integration_sitemap.SitemapIntegrationClient.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`ChatBotKitClientOptions`](../modules/client.md#chatbotkitclientoptions) |

#### Returns

[`SitemapIntegrationClient`](integration_sitemap.SitemapIntegrationClient.md)

#### Overrides

[ChatBotKitClient](client.ChatBotKitClient.md).[constructor](client.ChatBotKitClient.md#constructor)

#### Defined in

[integration/sitemap/index.js:21](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/sitemap/index.js#L21)

## Properties

### endpoints

• **endpoints**: `Record`\<`string`, `string`\>

#### Inherited from

[ChatBotKitClient](client.ChatBotKitClient.md).[endpoints](client.ChatBotKitClient.md#endpoints)

#### Defined in

[client.js:201](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/client.js#L201)

___

### secret

• **secret**: `string`

#### Inherited from

[ChatBotKitClient](client.ChatBotKitClient.md).[secret](client.ChatBotKitClient.md#secret)

#### Defined in

[client.js:189](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/client.js#L189)

___

### url

• **url**: `URL`

#### Inherited from

[ChatBotKitClient](client.ChatBotKitClient.md).[url](client.ChatBotKitClient.md#url)

#### Defined in

[client.js:191](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/client.js#L191)

## Methods

### clientFetch

▸ **clientFetch**\<`T`, `U`\>(`path`, `options?`): [`ResponsePromise`](client.ResponsePromise.md)\<`T`, `U`\>

#### Type parameters

| Name |
| :------ |
| `T` |
| `U` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | `string` |
| `options?` | `Object` |
| `options.data?` | `Record`\<`string`, `any`\> |
| `options.file?` | `Object` |
| `options.file.data` | `string` \| `ArrayBuffer` |
| `options.file.name?` | `string` |
| `options.file.type?` | `string` |
| `options.query?` | `Record`\<`string`, `any`\> |

#### Returns

[`ResponsePromise`](client.ResponsePromise.md)\<`T`, `U`\>

#### Inherited from

[ChatBotKitClient](client.ChatBotKitClient.md).[clientFetch](client.ChatBotKitClient.md#clientfetch)

#### Defined in

[client.js:211](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/client.js#L211)

___

### create

▸ **create**(`request`): `Promise`\<[`SitemapIntegrationCreateResponse`](../modules/integration_sitemap_v1.md#sitemapintegrationcreateresponse)\>

Creates a new sitemap integration.

#### Parameters

| Name | Type |
| :------ | :------ |
| `request` | [`SitemapIntegrationCreateRequest`](../modules/integration_sitemap_v1.md#sitemapintegrationcreaterequest) |

#### Returns

`Promise`\<[`SitemapIntegrationCreateResponse`](../modules/integration_sitemap_v1.md#sitemapintegrationcreateresponse)\>

#### Defined in

[integration/sitemap/index.js:51](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/sitemap/index.js#L51)

___

### delete

▸ **delete**(`sitemapId`): `Promise`\<[`SitemapIntegrationDeleteResponse`](../modules/integration_sitemap_v1.md#sitemapintegrationdeleteresponse)\>

Deletes a sitemap integration.

#### Parameters

| Name | Type |
| :------ | :------ |
| `sitemapId` | `string` |

#### Returns

`Promise`\<[`SitemapIntegrationDeleteResponse`](../modules/integration_sitemap_v1.md#sitemapintegrationdeleteresponse)\>

#### Defined in

[integration/sitemap/index.js:72](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/sitemap/index.js#L72)

___

### fetch

▸ **fetch**(`sitemapId`): `Promise`\<[`SitemapIntegrationFetchResponse`](../modules/integration_sitemap_v1.md#sitemapintegrationfetchresponse)\>

Fetches a sitemap integration.

#### Parameters

| Name | Type |
| :------ | :------ |
| `sitemapId` | `string` |

#### Returns

`Promise`\<[`SitemapIntegrationFetchResponse`](../modules/integration_sitemap_v1.md#sitemapintegrationfetchresponse)\>

#### Defined in

[integration/sitemap/index.js:41](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/sitemap/index.js#L41)

___

### list

▸ **list**(`request?`): [`ResponsePromise`](client.ResponsePromise.md)\<[`SitemapIntegrationListResponse`](../modules/integration_sitemap_v1.md#sitemapintegrationlistresponse), [`SitemapIntegrationListStreamItem`](../modules/integration_sitemap_v1.md#sitemapintegrationliststreamitem)\>

Retrieves a list of all sitemap integrations.

#### Parameters

| Name | Type |
| :------ | :------ |
| `request?` | [`SitemapIntegrationListRequest`](../modules/integration_sitemap_v1.md#sitemapintegrationlistrequest) |

#### Returns

[`ResponsePromise`](client.ResponsePromise.md)\<[`SitemapIntegrationListResponse`](../modules/integration_sitemap_v1.md#sitemapintegrationlistresponse), [`SitemapIntegrationListStreamItem`](../modules/integration_sitemap_v1.md#sitemapintegrationliststreamitem)\>

#### Defined in

[integration/sitemap/index.js:31](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/sitemap/index.js#L31)

___

### sync

▸ **sync**(`sitemapId`): `Promise`\<[`SitemapIntegrationSyncResponse`](../modules/integration_sitemap_v1.md#sitemapintegrationsyncresponse)\>

Syncs a sitemap integration.

#### Parameters

| Name | Type |
| :------ | :------ |
| `sitemapId` | `string` |

#### Returns

`Promise`\<[`SitemapIntegrationSyncResponse`](../modules/integration_sitemap_v1.md#sitemapintegrationsyncresponse)\>

#### Defined in

[integration/sitemap/index.js:82](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/sitemap/index.js#L82)

___

### update

▸ **update**(`sitemapId`, `request`): `Promise`\<[`SitemapIntegrationUpdateResponse`](../modules/integration_sitemap_v1.md#sitemapintegrationupdateresponse)\>

Updates a sitemap integration.

#### Parameters

| Name | Type |
| :------ | :------ |
| `sitemapId` | `string` |
| `request` | [`SitemapIntegrationOptions`](../modules/integration_sitemap_v1.md#sitemapintegrationoptions) |

#### Returns

`Promise`\<[`SitemapIntegrationUpdateResponse`](../modules/integration_sitemap_v1.md#sitemapintegrationupdateresponse)\>

#### Defined in

[integration/sitemap/index.js:62](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/sitemap/index.js#L62)
