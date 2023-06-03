[@chatbotkit/sdk](../README.md) / [Modules](../modules.md) / [integration/sitemap](../modules/integration_sitemap.md) / SitemapClient

# Class: SitemapClient

[integration/sitemap](../modules/integration_sitemap.md).SitemapClient

## Hierarchy

- `ChatBotKitClient`

  ↳ **`SitemapClient`**

## Table of contents

### Constructors

- [constructor](integration_sitemap.SitemapClient.md#constructor)

### Properties

- [secret](integration_sitemap.SitemapClient.md#secret)
- [url](integration_sitemap.SitemapClient.md#url)

### Methods

- [clientFetch](integration_sitemap.SitemapClient.md#clientfetch)
- [create](integration_sitemap.SitemapClient.md#create)
- [delete](integration_sitemap.SitemapClient.md#delete)
- [fetch](integration_sitemap.SitemapClient.md#fetch)
- [list](integration_sitemap.SitemapClient.md#list)
- [sync](integration_sitemap.SitemapClient.md#sync)
- [update](integration_sitemap.SitemapClient.md#update)

## Constructors

### constructor

• **new SitemapClient**(`options`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `ChatBotKitClientOptions` |

#### Overrides

ChatBotKitClient.constructor

#### Defined in

[integration/sitemap/index.js:15](https://github.com/chatbotkit/node-sdk/blob/180c15b/packages/sdk/src/integration/sitemap/index.js#L15)

## Properties

### secret

• **secret**: `string`

#### Inherited from

ChatBotKitClient.secret

#### Defined in

[client.js:135](https://github.com/chatbotkit/node-sdk/blob/180c15b/packages/sdk/src/client.js#L135)

___

### url

• **url**: `URL`

#### Inherited from

ChatBotKitClient.url

#### Defined in

[client.js:137](https://github.com/chatbotkit/node-sdk/blob/180c15b/packages/sdk/src/client.js#L137)

## Methods

### clientFetch

▸ **clientFetch**<`T`, `U`\>(`path`, `options?`): `ResponsePromise`<`T`, `U`\>

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
| `options.data?` | `Record`<`string`, `any`\> |

#### Returns

`ResponsePromise`<`T`, `U`\>

#### Inherited from

ChatBotKitClient.clientFetch

#### Defined in

[client.js:154](https://github.com/chatbotkit/node-sdk/blob/180c15b/packages/sdk/src/client.js#L154)

___

### create

▸ **create**(`request`): `Promise`<[`SitemapCreateResponse`](../modules/integration_sitemap_v1.md#sitemapcreateresponse)\>

Creates a new sitemap.

#### Parameters

| Name | Type |
| :------ | :------ |
| `request` | [`SitemapOptions`](../modules/integration_sitemap_v1.md#sitemapoptions) |

#### Returns

`Promise`<[`SitemapCreateResponse`](../modules/integration_sitemap_v1.md#sitemapcreateresponse)\>

#### Defined in

[integration/sitemap/index.js:40](https://github.com/chatbotkit/node-sdk/blob/180c15b/packages/sdk/src/integration/sitemap/index.js#L40)

___

### delete

▸ **delete**(`sitemapId`): `Promise`<[`SitemapDeleteResponse`](../modules/integration_sitemap_v1.md#sitemapdeleteresponse)\>

Deletes the sitemap.

#### Parameters

| Name | Type |
| :------ | :------ |
| `sitemapId` | `string` |

#### Returns

`Promise`<[`SitemapDeleteResponse`](../modules/integration_sitemap_v1.md#sitemapdeleteresponse)\>

#### Defined in

[integration/sitemap/index.js:59](https://github.com/chatbotkit/node-sdk/blob/180c15b/packages/sdk/src/integration/sitemap/index.js#L59)

___

### fetch

▸ **fetch**(`sitemapId`): `Promise`<[`SitemapInstance`](../modules/integration_sitemap_v1.md#sitemapinstance)\>

Fetches a sitemap.

#### Parameters

| Name | Type |
| :------ | :------ |
| `sitemapId` | `string` |

#### Returns

`Promise`<[`SitemapInstance`](../modules/integration_sitemap_v1.md#sitemapinstance)\>

#### Defined in

[integration/sitemap/index.js:31](https://github.com/chatbotkit/node-sdk/blob/180c15b/packages/sdk/src/integration/sitemap/index.js#L31)

___

### list

▸ **list**(): `ResponsePromise`<[`SitemapInstance`](../modules/integration_sitemap_v1.md#sitemapinstance), [`SitemapListStreamItem`](../modules/integration_sitemap_v1.md#sitemapliststreamitem)\>

Retrieves a list of all existing sitemaps associated with this client.

#### Returns

`ResponsePromise`<[`SitemapInstance`](../modules/integration_sitemap_v1.md#sitemapinstance), [`SitemapListStreamItem`](../modules/integration_sitemap_v1.md#sitemapliststreamitem)\>

#### Defined in

[integration/sitemap/index.js:22](https://github.com/chatbotkit/node-sdk/blob/180c15b/packages/sdk/src/integration/sitemap/index.js#L22)

___

### sync

▸ **sync**(`sitemapId`): `Promise`<[`SitemapSyncResponse`](../modules/integration_sitemap_v1.md#sitemapsyncresponse)\>

Syncs the sitemap.

#### Parameters

| Name | Type |
| :------ | :------ |
| `sitemapId` | `string` |

#### Returns

`Promise`<[`SitemapSyncResponse`](../modules/integration_sitemap_v1.md#sitemapsyncresponse)\>

#### Defined in

[integration/sitemap/index.js:68](https://github.com/chatbotkit/node-sdk/blob/180c15b/packages/sdk/src/integration/sitemap/index.js#L68)

___

### update

▸ **update**(`sitemapId`, `request`): `Promise`<[`SitemapUpdateResponse`](../modules/integration_sitemap_v1.md#sitemapupdateresponse)\>

Updates a new sitemap.

#### Parameters

| Name | Type |
| :------ | :------ |
| `sitemapId` | `string` |
| `request` | [`SitemapOptions`](../modules/integration_sitemap_v1.md#sitemapoptions) |

#### Returns

`Promise`<[`SitemapUpdateResponse`](../modules/integration_sitemap_v1.md#sitemapupdateresponse)\>

#### Defined in

[integration/sitemap/index.js:50](https://github.com/chatbotkit/node-sdk/blob/180c15b/packages/sdk/src/integration/sitemap/index.js#L50)
