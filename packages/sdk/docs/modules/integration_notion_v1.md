[@chatbotkit/sdk](../README.md) / [Modules](../modules.md) / integration/notion/v1

# Module: integration/notion/v1

## Table of contents

### Type Aliases

- [ChatBotKitClient](integration_notion_v1.md#chatbotkitclient)
- [NotionInegrationInstance](integration_notion_v1.md#notioninegrationinstance)
- [NotionIntegrationCreateRequest](integration_notion_v1.md#notionintegrationcreaterequest)
- [NotionIntegrationCreateResponse](integration_notion_v1.md#notionintegrationcreateresponse)
- [NotionIntegrationDeleteResponse](integration_notion_v1.md#notionintegrationdeleteresponse)
- [NotionIntegrationFetchResponse](integration_notion_v1.md#notionintegrationfetchresponse)
- [NotionIntegrationListRequest](integration_notion_v1.md#notionintegrationlistrequest)
- [NotionIntegrationListResponse](integration_notion_v1.md#notionintegrationlistresponse)
- [NotionIntegrationListStreamItem](integration_notion_v1.md#notionintegrationliststreamitem)
- [NotionIntegrationListStreamType](integration_notion_v1.md#notionintegrationliststreamtype)
- [NotionIntegrationOptions](integration_notion_v1.md#notionintegrationoptions)
- [NotionIntegrationSyncResponse](integration_notion_v1.md#notionintegrationsyncresponse)
- [NotionIntegrationUpdateRequest](integration_notion_v1.md#notionintegrationupdaterequest)
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

### NotionInegrationInstance

Ƭ **NotionInegrationInstance**\<\>: [`NotionIntegrationOptions`](integration_notion_v1.md#notionintegrationoptions) & \{ `createdAt`: `number` ; `id`: `string` ; `updatedAt`: `number`  }

#### Defined in

[integration/notion/v1.js:26](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/notion/v1.js#L26)

___

### NotionIntegrationCreateRequest

Ƭ **NotionIntegrationCreateRequest**\<\>: [`NotionIntegrationOptions`](integration_notion_v1.md#notionintegrationoptions) & \{ `datasetId`: `string`  }

#### Defined in

[integration/notion/v1.js:80](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/notion/v1.js#L80)

___

### NotionIntegrationCreateResponse

Ƭ **NotionIntegrationCreateResponse**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Defined in

[integration/notion/v1.js:84](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/notion/v1.js#L84)

___

### NotionIntegrationDeleteResponse

Ƭ **NotionIntegrationDeleteResponse**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Defined in

[integration/notion/v1.js:134](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/notion/v1.js#L134)

___

### NotionIntegrationFetchResponse

Ƭ **NotionIntegrationFetchResponse**\<\>: [`NotionInegrationInstance`](integration_notion_v1.md#notioninegrationinstance) & {}

#### Defined in

[integration/notion/v1.js:63](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/notion/v1.js#L63)

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

[integration/notion/v1.js:35](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/notion/v1.js#L35)

___

### NotionIntegrationListResponse

Ƭ **NotionIntegrationListResponse**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `items` | [`NotionInegrationInstance`](integration_notion_v1.md#notioninegrationinstance)[] |

#### Defined in

[integration/notion/v1.js:37](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/notion/v1.js#L37)

___

### NotionIntegrationListStreamItem

Ƭ **NotionIntegrationListStreamItem**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `data` | [`NotionInegrationInstance`](integration_notion_v1.md#notioninegrationinstance) |
| `type` | ``"item"`` |

#### Defined in

[integration/notion/v1.js:42](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/notion/v1.js#L42)

___

### NotionIntegrationListStreamType

Ƭ **NotionIntegrationListStreamType**\<\>: [`NotionIntegrationListStreamItem`](integration_notion_v1.md#notionintegrationliststreamitem)

#### Defined in

[integration/notion/v1.js:44](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/notion/v1.js#L44)

___

### NotionIntegrationOptions

Ƭ **NotionIntegrationOptions**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `datasetId?` | `string` |
| `description?` | `string` |
| `expiresIn?` | `number` |
| `meta?` | [`Record`]( https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type )\<`string`, `any`\> |
| `name?` | `string` |
| `syncSchedule?` | `string` |
| `token?` | `string` |

#### Defined in

[integration/notion/v1.js:20](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/notion/v1.js#L20)

___

### NotionIntegrationSyncResponse

Ƭ **NotionIntegrationSyncResponse**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Defined in

[integration/notion/v1.js:155](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/notion/v1.js#L155)

___

### NotionIntegrationUpdateRequest

Ƭ **NotionIntegrationUpdateRequest**\<\>: [`NotionIntegrationOptions`](integration_notion_v1.md#notionintegrationoptions) & {}

#### Defined in

[integration/notion/v1.js:106](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/notion/v1.js#L106)

___

### NotionIntegrationUpdateResponse

Ƭ **NotionIntegrationUpdateResponse**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Defined in

[integration/notion/v1.js:110](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/notion/v1.js#L110)

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

▸ **createNotionIntegration**(`client`, `request`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<[`NotionIntegrationCreateResponse`](integration_notion_v1.md#notionintegrationcreateresponse)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`ChatBotKitClient`](../classes/client.ChatBotKitClient.md) |
| `request` | [`NotionIntegrationCreateRequest`](integration_notion_v1.md#notionintegrationcreaterequest) |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<[`NotionIntegrationCreateResponse`](integration_notion_v1.md#notionintegrationcreateresponse)\>

#### Defined in

[integration/notion/v1.js:90](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/notion/v1.js#L90)

___

### deleteNotionIntegration

▸ **deleteNotionIntegration**(`client`, `notionId`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<[`NotionIntegrationDeleteResponse`](integration_notion_v1.md#notionintegrationdeleteresponse)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`ChatBotKitClient`](../classes/client.ChatBotKitClient.md) |
| `notionId` | `string` |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<[`NotionIntegrationDeleteResponse`](integration_notion_v1.md#notionintegrationdeleteresponse)\>

#### Defined in

[integration/notion/v1.js:140](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/notion/v1.js#L140)

___

### fetchNotionIntegration

▸ **fetchNotionIntegration**(`client`, `notionId`): [`ResponsePromise`](../classes/client.ResponsePromise.md)\<[`NotionIntegrationFetchResponse`](integration_notion_v1.md#notionintegrationfetchresponse), `never`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`ChatBotKitClient`](../classes/client.ChatBotKitClient.md) |
| `notionId` | `string` |

#### Returns

[`ResponsePromise`](../classes/client.ResponsePromise.md)\<[`NotionIntegrationFetchResponse`](integration_notion_v1.md#notionintegrationfetchresponse), `never`\>

#### Defined in

[integration/notion/v1.js:69](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/notion/v1.js#L69)

___

### listNotionIntegrations

▸ **listNotionIntegrations**(`client`, `request?`): [`ResponsePromise`](../classes/client.ResponsePromise.md)\<[`NotionIntegrationListResponse`](integration_notion_v1.md#notionintegrationlistresponse), [`NotionIntegrationListStreamItem`](integration_notion_v1.md#notionintegrationliststreamitem)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`ChatBotKitClient`](../classes/client.ChatBotKitClient.md) |
| `request?` | [`NotionIntegrationListRequest`](integration_notion_v1.md#notionintegrationlistrequest) |

#### Returns

[`ResponsePromise`](../classes/client.ResponsePromise.md)\<[`NotionIntegrationListResponse`](integration_notion_v1.md#notionintegrationlistresponse), [`NotionIntegrationListStreamItem`](integration_notion_v1.md#notionintegrationliststreamitem)\>

#### Defined in

[integration/notion/v1.js:50](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/notion/v1.js#L50)

___

### syncNotionIntegration

▸ **syncNotionIntegration**(`client`, `notionId`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<[`NotionIntegrationSyncResponse`](integration_notion_v1.md#notionintegrationsyncresponse)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`ChatBotKitClient`](../classes/client.ChatBotKitClient.md) |
| `notionId` | `string` |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<[`NotionIntegrationSyncResponse`](integration_notion_v1.md#notionintegrationsyncresponse)\>

#### Defined in

[integration/notion/v1.js:161](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/notion/v1.js#L161)

___

### updateNotionIntegration

▸ **updateNotionIntegration**(`client`, `notionId`, `request`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<[`NotionIntegrationUpdateResponse`](integration_notion_v1.md#notionintegrationupdateresponse)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`ChatBotKitClient`](../classes/client.ChatBotKitClient.md) |
| `notionId` | `string` |
| `request` | [`NotionIntegrationOptions`](integration_notion_v1.md#notionintegrationoptions) |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<[`NotionIntegrationUpdateResponse`](integration_notion_v1.md#notionintegrationupdateresponse)\>

#### Defined in

[integration/notion/v1.js:117](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/notion/v1.js#L117)
