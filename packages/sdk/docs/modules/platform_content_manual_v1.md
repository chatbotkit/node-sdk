[@chatbotkit/sdk](../README.md) / [Modules](../modules.md) / platform/content/manual/v1

# Module: platform/content/manual/v1

## Table of contents

### Type Aliases

- [ChatBotKitClient](platform_content_manual_v1.md#chatbotkitclient)
- [PlatformContentManualFetchResponse](platform_content_manual_v1.md#platformcontentmanualfetchresponse)
- [PlatformContentManualListItem](platform_content_manual_v1.md#platformcontentmanuallistitem)
- [PlatformContentManualListRequest](platform_content_manual_v1.md#platformcontentmanuallistrequest)
- [PlatformContentManualListResponse](platform_content_manual_v1.md#platformcontentmanuallistresponse)
- [PlatformContentManualListStreamType](platform_content_manual_v1.md#platformcontentmanualliststreamtype)
- [ResponsePromise](platform_content_manual_v1.md#responsepromise)

### Functions

- [fetchPlatformContentManual](platform_content_manual_v1.md#fetchplatformcontentmanual)
- [listPlatformContentManuals](platform_content_manual_v1.md#listplatformcontentmanuals)

## Type Aliases

### ChatBotKitClient

Ƭ **ChatBotKitClient**\<\>: [`client`](client.md)

#### Defined in

[platform/content/manual/v1.js:2](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/platform/content/manual/v1.js#L2)

___

### PlatformContentManualFetchResponse

Ƭ **PlatformContentManualFetchResponse**\<\>: `operations`[``"fetchPlatformContentManual"``][``"responses"``][``"200"``][``"content"``][``"application/json"``]

#### Defined in

[platform/content/manual/v1.js:39](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/platform/content/manual/v1.js#L39)

___

### PlatformContentManualListItem

Ƭ **PlatformContentManualListItem**\<\>: [`PlatformContentManualListResponse`](platform_content_manual_v1.md#platformcontentmanuallistresponse)[``"items"``][`number`]

#### Defined in

[platform/content/manual/v1.js:21](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/platform/content/manual/v1.js#L21)

___

### PlatformContentManualListRequest

Ƭ **PlatformContentManualListRequest**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `cursor?` | `string` |
| `meta?` | [`Record`]( https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type )\<`string`, `string`\> |
| `order?` | ``"desc"`` \| ``"asc"`` |
| `take?` | `number` |

#### Defined in

[platform/content/manual/v1.js:17](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/platform/content/manual/v1.js#L17)

___

### PlatformContentManualListResponse

Ƭ **PlatformContentManualListResponse**\<\>: `operations`[``"listPlatformContentManuals"``][``"responses"``][``"200"``][``"content"``][``"application/json"``]

#### Defined in

[platform/content/manual/v1.js:19](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/platform/content/manual/v1.js#L19)

___

### PlatformContentManualListStreamType

Ƭ **PlatformContentManualListStreamType**\<\>: `operations`[``"listPlatformContentManuals"``][``"responses"``][``"200"``][``"content"``][``"application/jsonl"``]

#### Defined in

[platform/content/manual/v1.js:23](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/platform/content/manual/v1.js#L23)

___

### ResponsePromise

Ƭ **ResponsePromise**\<`T`, `U`\>: [`client`](client.md)

#### Type parameters

| Name |
| :------ |
| `T` |
| `U` |

#### Defined in

[platform/content/manual/v1.js:8](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/platform/content/manual/v1.js#L8)

## Functions

### fetchPlatformContentManual

▸ **fetchPlatformContentManual**(`client`, `manualId`): [`ResponsePromise`](../classes/client.ResponsePromise.md)\<{}, `never`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`ChatBotKitClient`](../classes/client.ChatBotKitClient.md) |
| `manualId` | `string` |

#### Returns

[`ResponsePromise`](../classes/client.ResponsePromise.md)\<{}, `never`\>

#### Defined in

[platform/content/manual/v1.js:45](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/platform/content/manual/v1.js#L45)

___

### listPlatformContentManuals

▸ **listPlatformContentManuals**(`client`, `request?`): [`ResponsePromise`](../classes/client.ResponsePromise.md)\<{}, {}\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`ChatBotKitClient`](../classes/client.ChatBotKitClient.md) |
| `request?` | [`PlatformContentManualListRequest`](platform_content_manual_v1.md#platformcontentmanuallistrequest) |

#### Returns

[`ResponsePromise`](../classes/client.ResponsePromise.md)\<{}, {}\>

#### Defined in

[platform/content/manual/v1.js:29](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/platform/content/manual/v1.js#L29)
