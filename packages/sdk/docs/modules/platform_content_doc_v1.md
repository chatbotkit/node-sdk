[@chatbotkit/sdk](../README.md) / [Modules](../modules.md) / platform/content/doc/v1

# Module: platform/content/doc/v1

## Table of contents

### Type Aliases

- [ChatBotKitClient](platform_content_doc_v1.md#chatbotkitclient)
- [PlatformContentDocFetchResponse](platform_content_doc_v1.md#platformcontentdocfetchresponse)
- [PlatformContentDocListItem](platform_content_doc_v1.md#platformcontentdoclistitem)
- [PlatformContentDocListRequest](platform_content_doc_v1.md#platformcontentdoclistrequest)
- [PlatformContentDocListResponse](platform_content_doc_v1.md#platformcontentdoclistresponse)
- [PlatformContentDocListStreamType](platform_content_doc_v1.md#platformcontentdocliststreamtype)
- [ResponsePromise](platform_content_doc_v1.md#responsepromise)

### Functions

- [fetchPlatformContentDoc](platform_content_doc_v1.md#fetchplatformcontentdoc)
- [listPlatformContentDocs](platform_content_doc_v1.md#listplatformcontentdocs)

## Type Aliases

### ChatBotKitClient

Ƭ **ChatBotKitClient**\<\>: [`client`](client.md)

#### Defined in

platform/content/doc/v1.js:2

___

### PlatformContentDocFetchResponse

Ƭ **PlatformContentDocFetchResponse**\<\>: `operations`[``"fetchPlatformContentDoc"``][``"responses"``][``"200"``][``"content"``][``"application/json"``]

#### Defined in

platform/content/doc/v1.js:39

___

### PlatformContentDocListItem

Ƭ **PlatformContentDocListItem**\<\>: [`PlatformContentDocListResponse`](platform_content_doc_v1.md#platformcontentdoclistresponse)[``"items"``][`number`]

#### Defined in

platform/content/doc/v1.js:21

___

### PlatformContentDocListRequest

Ƭ **PlatformContentDocListRequest**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `cursor?` | `string` |
| `meta?` | [`Record`]( https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type )\<`string`, `string`\> |
| `order?` | ``"desc"`` \| ``"asc"`` |
| `take?` | `number` |

#### Defined in

platform/content/doc/v1.js:17

___

### PlatformContentDocListResponse

Ƭ **PlatformContentDocListResponse**\<\>: `operations`[``"listPlatformContentDocs"``][``"responses"``][``"200"``][``"content"``][``"application/json"``]

#### Defined in

platform/content/doc/v1.js:19

___

### PlatformContentDocListStreamType

Ƭ **PlatformContentDocListStreamType**\<\>: `operations`[``"listPlatformContentDocs"``][``"responses"``][``"200"``][``"content"``][``"application/jsonl"``]

#### Defined in

platform/content/doc/v1.js:23

___

### ResponsePromise

Ƭ **ResponsePromise**\<`T`, `U`\>: [`client`](client.md)

#### Type parameters

| Name |
| :------ |
| `T` |
| `U` |

#### Defined in

platform/content/doc/v1.js:8

## Functions

### fetchPlatformContentDoc

▸ **fetchPlatformContentDoc**(`client`, `docId`): [`ResponsePromise`](../classes/client.ResponsePromise.md)\<{}, `never`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`ChatBotKitClient`](../classes/client.ChatBotKitClient.md) |
| `docId` | `string` |

#### Returns

[`ResponsePromise`](../classes/client.ResponsePromise.md)\<{}, `never`\>

#### Defined in

platform/content/doc/v1.js:45

___

### listPlatformContentDocs

▸ **listPlatformContentDocs**(`client`, `request?`): [`ResponsePromise`](../classes/client.ResponsePromise.md)\<{}, {}\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`ChatBotKitClient`](../classes/client.ChatBotKitClient.md) |
| `request?` | [`PlatformContentDocListRequest`](platform_content_doc_v1.md#platformcontentdoclistrequest) |

#### Returns

[`ResponsePromise`](../classes/client.ResponsePromise.md)\<{}, {}\>

#### Defined in

platform/content/doc/v1.js:29
