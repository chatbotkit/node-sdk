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

[integration/sitemap/index.js:15](https://github.com/chatbotkit/node-sdk/blob/0fead0f/packages/sdk/src/integration/sitemap/index.js#L15)

## Properties

### secret

• **secret**: `string`

#### Inherited from

ChatBotKitClient.secret

#### Defined in

[client.js:182](https://github.com/chatbotkit/node-sdk/blob/0fead0f/packages/sdk/src/client.js#L182)

___

### url

• **url**: `URL`

#### Inherited from

ChatBotKitClient.url

#### Defined in

[client.js:184](https://github.com/chatbotkit/node-sdk/blob/0fead0f/packages/sdk/src/client.js#L184)

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
| `options.file?` | `Object` |
| `options.file.data` | `string` \| `ArrayBuffer` |
| `options.file.name?` | `string` |
| `options.file.type?` | `string` |

#### Returns

`ResponsePromise`<`T`, `U`\>

#### Inherited from

ChatBotKitClient.clientFetch

#### Defined in

[client.js:201](https://github.com/chatbotkit/node-sdk/blob/0fead0f/packages/sdk/src/client.js#L201)

___

### create

▸ **create**(`request`): `Promise`<[`SitemapCreateResponse`](../modules/integration_sitemap_v1.md#sitemapcreateresponse)\>

Creates a new sitemap integration.

#### Parameters

| Name | Type |
| :------ | :------ |
| `request` | [`SitemapOptions`](../modules/integration_sitemap_v1.md#sitemapoptions) |

#### Returns

`Promise`<[`SitemapCreateResponse`](../modules/integration_sitemap_v1.md#sitemapcreateresponse)\>

#### Defined in

[integration/sitemap/index.js:45](https://github.com/chatbotkit/node-sdk/blob/0fead0f/packages/sdk/src/integration/sitemap/index.js#L45)

___

### delete

▸ **delete**(`sitemapId`): `Promise`<[`SitemapDeleteResponse`](../modules/integration_sitemap_v1.md#sitemapdeleteresponse)\>

Deletes a sitemap integration.

#### Parameters

| Name | Type |
| :------ | :------ |
| `sitemapId` | `string` |

#### Returns

`Promise`<[`SitemapDeleteResponse`](../modules/integration_sitemap_v1.md#sitemapdeleteresponse)\>

#### Defined in

[integration/sitemap/index.js:66](https://github.com/chatbotkit/node-sdk/blob/0fead0f/packages/sdk/src/integration/sitemap/index.js#L66)

___

### fetch

▸ **fetch**(`sitemapId`): `Promise`<[`SitemapInstance`](../modules/integration_sitemap_v1.md#sitemapinstance)\>

Fetches a sitemap integration.

#### Parameters

| Name | Type |
| :------ | :------ |
| `sitemapId` | `string` |

#### Returns

`Promise`<[`SitemapInstance`](../modules/integration_sitemap_v1.md#sitemapinstance)\>

#### Defined in

[integration/sitemap/index.js:35](https://github.com/chatbotkit/node-sdk/blob/0fead0f/packages/sdk/src/integration/sitemap/index.js#L35)

___

### list

▸ **list**(`cursor?`): `ResponsePromise`<[`SitemapListResponse`](../modules/integration_sitemap_v1.md#sitemaplistresponse), [`SitemapListStreamItem`](../modules/integration_sitemap_v1.md#sitemapliststreamitem)\>

Retrieves a list of all existing sitemap integrations associated with this client.

#### Parameters

| Name | Type |
| :------ | :------ |
| `cursor?` | `string` |

#### Returns

`ResponsePromise`<[`SitemapListResponse`](../modules/integration_sitemap_v1.md#sitemaplistresponse), [`SitemapListStreamItem`](../modules/integration_sitemap_v1.md#sitemapliststreamitem)\>

#### Defined in

[integration/sitemap/index.js:25](https://github.com/chatbotkit/node-sdk/blob/0fead0f/packages/sdk/src/integration/sitemap/index.js#L25)

___

### sync

▸ **sync**(`sitemapId`): `Promise`<[`SitemapSyncResponse`](../modules/integration_sitemap_v1.md#sitemapsyncresponse)\>

Syncs a sitemap integration.

#### Parameters

| Name | Type |
| :------ | :------ |
| `sitemapId` | `string` |

#### Returns

`Promise`<[`SitemapSyncResponse`](../modules/integration_sitemap_v1.md#sitemapsyncresponse)\>

#### Defined in

[integration/sitemap/index.js:76](https://github.com/chatbotkit/node-sdk/blob/0fead0f/packages/sdk/src/integration/sitemap/index.js#L76)

___

### update

▸ **update**(`sitemapId`, `request`): `Promise`<[`SitemapUpdateResponse`](../modules/integration_sitemap_v1.md#sitemapupdateresponse)\>

Updates a sitemap integration.

#### Parameters

| Name | Type |
| :------ | :------ |
| `sitemapId` | `string` |
| `request` | [`SitemapOptions`](../modules/integration_sitemap_v1.md#sitemapoptions) |

#### Returns

`Promise`<[`SitemapUpdateResponse`](../modules/integration_sitemap_v1.md#sitemapupdateresponse)\>

#### Defined in

[integration/sitemap/index.js:56](https://github.com/chatbotkit/node-sdk/blob/0fead0f/packages/sdk/src/integration/sitemap/index.js#L56)
