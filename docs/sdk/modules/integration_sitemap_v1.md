[@chatbotkit/sdk](../README.md) / [Modules](../modules.md) / integration/sitemap/v1

# Module: integration/sitemap/v1

## Table of contents

### Type Aliases

- [ChatBotKitClient](integration_sitemap_v1.md#chatbotkitclient)
- [SitemapCreateRequest](integration_sitemap_v1.md#sitemapcreaterequest)
- [SitemapCreateResponse](integration_sitemap_v1.md#sitemapcreateresponse)
- [SitemapDeleteResponse](integration_sitemap_v1.md#sitemapdeleteresponse)
- [SitemapFetchResponse](integration_sitemap_v1.md#sitemapfetchresponse)
- [SitemapInstance](integration_sitemap_v1.md#sitemapinstance)
- [SitemapListResponse](integration_sitemap_v1.md#sitemaplistresponse)
- [SitemapListStreamItem](integration_sitemap_v1.md#sitemapliststreamitem)
- [SitemapListStreamType](integration_sitemap_v1.md#sitemapliststreamtype)
- [SitemapOptions](integration_sitemap_v1.md#sitemapoptions)
- [SitemapSyncResponse](integration_sitemap_v1.md#sitemapsyncresponse)
- [SitemapUpdateRequest](integration_sitemap_v1.md#sitemapupdaterequest)
- [SitemapUpdateResponse](integration_sitemap_v1.md#sitemapupdateresponse)

### Functions

- [sitemapCreate](integration_sitemap_v1.md#sitemapcreate)
- [sitemapDelete](integration_sitemap_v1.md#sitemapdelete)
- [sitemapFetch](integration_sitemap_v1.md#sitemapfetch)
- [sitemapList](integration_sitemap_v1.md#sitemaplist)
- [sitemapSync](integration_sitemap_v1.md#sitemapsync)
- [sitemapUpdate](integration_sitemap_v1.md#sitemapupdate)

## Type Aliases

### ChatBotKitClient

Ƭ **ChatBotKitClient**<\>: `ChatBotKitClient`

#### Defined in

[integration/sitemap/v1.js:2](https://github.com/chatbotkit/node-sdk/blob/09ac200/packages/sdk/src/integration/sitemap/v1.js#L2)

___

### SitemapCreateRequest

Ƭ **SitemapCreateRequest**<\>: [`SitemapOptions`](integration_sitemap_v1.md#sitemapoptions)

#### Defined in

[integration/sitemap/v1.js:64](https://github.com/chatbotkit/node-sdk/blob/09ac200/packages/sdk/src/integration/sitemap/v1.js#L64)

___

### SitemapCreateResponse

Ƭ **SitemapCreateResponse**<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Defined in

[integration/sitemap/v1.js:68](https://github.com/chatbotkit/node-sdk/blob/09ac200/packages/sdk/src/integration/sitemap/v1.js#L68)

___

### SitemapDeleteResponse

Ƭ **SitemapDeleteResponse**<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Defined in

[integration/sitemap/v1.js:105](https://github.com/chatbotkit/node-sdk/blob/09ac200/packages/sdk/src/integration/sitemap/v1.js#L105)

___

### SitemapFetchResponse

Ƭ **SitemapFetchResponse**<\>: [`SitemapInstance`](integration_sitemap_v1.md#sitemapinstance)

#### Defined in

[integration/sitemap/v1.js:51](https://github.com/chatbotkit/node-sdk/blob/09ac200/packages/sdk/src/integration/sitemap/v1.js#L51)

___

### SitemapInstance

Ƭ **SitemapInstance**<\>: { `createdAt`: `number` ; `id`: `string` ; `updatedAt`: `number`  } & [`SitemapOptions`](integration_sitemap_v1.md#sitemapoptions)

#### Defined in

[integration/sitemap/v1.js:23](https://github.com/chatbotkit/node-sdk/blob/09ac200/packages/sdk/src/integration/sitemap/v1.js#L23)

___

### SitemapListResponse

Ƭ **SitemapListResponse**<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `items` | [`SitemapInstance`](integration_sitemap_v1.md#sitemapinstance)[] |

#### Defined in

[integration/sitemap/v1.js:27](https://github.com/chatbotkit/node-sdk/blob/09ac200/packages/sdk/src/integration/sitemap/v1.js#L27)

___

### SitemapListStreamItem

Ƭ **SitemapListStreamItem**<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `data` | [`SitemapInstance`](integration_sitemap_v1.md#sitemapinstance) |
| `type` | ``"item"`` |

#### Defined in

[integration/sitemap/v1.js:32](https://github.com/chatbotkit/node-sdk/blob/09ac200/packages/sdk/src/integration/sitemap/v1.js#L32)

___

### SitemapListStreamType

Ƭ **SitemapListStreamType**<\>: [`SitemapListStreamItem`](integration_sitemap_v1.md#sitemapliststreamitem)

#### Defined in

[integration/sitemap/v1.js:34](https://github.com/chatbotkit/node-sdk/blob/09ac200/packages/sdk/src/integration/sitemap/v1.js#L34)

___

### SitemapOptions

Ƭ **SitemapOptions**<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `datasetId?` | `string` |
| `description?` | `string` |
| `expiresIn?` | `number` |
| `glob?` | `string` |
| `javascript?` | `boolean` |
| `meta?` | `Record`<`string`, `any`\> |
| `name?` | `string` |
| `selectors?` | `string` |
| `syncSchedule` | `string` |
| `url?` | `string` |

#### Defined in

[integration/sitemap/v1.js:17](https://github.com/chatbotkit/node-sdk/blob/09ac200/packages/sdk/src/integration/sitemap/v1.js#L17)

___

### SitemapSyncResponse

Ƭ **SitemapSyncResponse**<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Defined in

[integration/sitemap/v1.js:122](https://github.com/chatbotkit/node-sdk/blob/09ac200/packages/sdk/src/integration/sitemap/v1.js#L122)

___

### SitemapUpdateRequest

Ƭ **SitemapUpdateRequest**<\>: [`SitemapOptions`](integration_sitemap_v1.md#sitemapoptions)

#### Defined in

[integration/sitemap/v1.js:83](https://github.com/chatbotkit/node-sdk/blob/09ac200/packages/sdk/src/integration/sitemap/v1.js#L83)

___

### SitemapUpdateResponse

Ƭ **SitemapUpdateResponse**<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Defined in

[integration/sitemap/v1.js:87](https://github.com/chatbotkit/node-sdk/blob/09ac200/packages/sdk/src/integration/sitemap/v1.js#L87)

## Functions

### sitemapCreate

▸ **sitemapCreate**(`client`, `request`): `Promise`<[`SitemapCreateResponse`](integration_sitemap_v1.md#sitemapcreateresponse)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | `ChatBotKitClient` |
| `request` | [`SitemapOptions`](integration_sitemap_v1.md#sitemapoptions) |

#### Returns

`Promise`<[`SitemapCreateResponse`](integration_sitemap_v1.md#sitemapcreateresponse)\>

#### Defined in

[integration/sitemap/v1.js:74](https://github.com/chatbotkit/node-sdk/blob/09ac200/packages/sdk/src/integration/sitemap/v1.js#L74)

___

### sitemapDelete

▸ **sitemapDelete**(`client`, `sitemapId`): `Promise`<[`SitemapDeleteResponse`](integration_sitemap_v1.md#sitemapdeleteresponse)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | `ChatBotKitClient` |
| `sitemapId` | `string` |

#### Returns

`Promise`<[`SitemapDeleteResponse`](integration_sitemap_v1.md#sitemapdeleteresponse)\>

#### Defined in

[integration/sitemap/v1.js:111](https://github.com/chatbotkit/node-sdk/blob/09ac200/packages/sdk/src/integration/sitemap/v1.js#L111)

___

### sitemapFetch

▸ **sitemapFetch**(`client`, `sitemapId`): `Promise`<[`SitemapInstance`](integration_sitemap_v1.md#sitemapinstance)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | `ChatBotKitClient` |
| `sitemapId` | `string` |

#### Returns

`Promise`<[`SitemapInstance`](integration_sitemap_v1.md#sitemapinstance)\>

#### Defined in

[integration/sitemap/v1.js:57](https://github.com/chatbotkit/node-sdk/blob/09ac200/packages/sdk/src/integration/sitemap/v1.js#L57)

___

### sitemapList

▸ **sitemapList**(`client`, `cursor?`): `ResponsePromise`<[`SitemapListResponse`](integration_sitemap_v1.md#sitemaplistresponse), [`SitemapListStreamItem`](integration_sitemap_v1.md#sitemapliststreamitem)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | `ChatBotKitClient` |
| `cursor?` | `string` |

#### Returns

`ResponsePromise`<[`SitemapListResponse`](integration_sitemap_v1.md#sitemaplistresponse), [`SitemapListStreamItem`](integration_sitemap_v1.md#sitemapliststreamitem)\>

#### Defined in

[integration/sitemap/v1.js:40](https://github.com/chatbotkit/node-sdk/blob/09ac200/packages/sdk/src/integration/sitemap/v1.js#L40)

___

### sitemapSync

▸ **sitemapSync**(`client`, `sitemapId`): `Promise`<[`SitemapSyncResponse`](integration_sitemap_v1.md#sitemapsyncresponse)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | `ChatBotKitClient` |
| `sitemapId` | `string` |

#### Returns

`Promise`<[`SitemapSyncResponse`](integration_sitemap_v1.md#sitemapsyncresponse)\>

#### Defined in

[integration/sitemap/v1.js:128](https://github.com/chatbotkit/node-sdk/blob/09ac200/packages/sdk/src/integration/sitemap/v1.js#L128)

___

### sitemapUpdate

▸ **sitemapUpdate**(`client`, `sitemapId`, `request`): `Promise`<[`SitemapUpdateResponse`](integration_sitemap_v1.md#sitemapupdateresponse)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | `ChatBotKitClient` |
| `sitemapId` | `string` |
| `request` | [`SitemapOptions`](integration_sitemap_v1.md#sitemapoptions) |

#### Returns

`Promise`<[`SitemapUpdateResponse`](integration_sitemap_v1.md#sitemapupdateresponse)\>

#### Defined in

[integration/sitemap/v1.js:94](https://github.com/chatbotkit/node-sdk/blob/09ac200/packages/sdk/src/integration/sitemap/v1.js#L94)
