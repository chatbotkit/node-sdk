[@chatbotkit/sdk](../README.md) / [Modules](../modules.md) / integration/extract/v1

# Module: integration/extract/v1

## Table of contents

### Type Aliases

- [ChatBotKitClient](integration_extract_v1.md#chatbotkitclient)
- [ExtractIntegrationCreateRequest](integration_extract_v1.md#extractintegrationcreaterequest)
- [ExtractIntegrationCreateRequestBody](integration_extract_v1.md#extractintegrationcreaterequestbody)
- [ExtractIntegrationCreateResponse](integration_extract_v1.md#extractintegrationcreateresponse)
- [ExtractIntegrationCreateResponseBody](integration_extract_v1.md#extractintegrationcreateresponsebody)
- [ExtractIntegrationDeleteRequest](integration_extract_v1.md#extractintegrationdeleterequest)
- [ExtractIntegrationDeleteRequestBody](integration_extract_v1.md#extractintegrationdeleterequestbody)
- [ExtractIntegrationDeleteResponse](integration_extract_v1.md#extractintegrationdeleteresponse)
- [ExtractIntegrationDeleteResponseBody](integration_extract_v1.md#extractintegrationdeleteresponsebody)
- [ExtractIntegrationFetchResponse](integration_extract_v1.md#extractintegrationfetchresponse)
- [ExtractIntegrationListRequest](integration_extract_v1.md#extractintegrationlistrequest)
- [ExtractIntegrationListResponse](integration_extract_v1.md#extractintegrationlistresponse)
- [ExtractIntegrationListStreamType](integration_extract_v1.md#extractintegrationliststreamtype)
- [ExtractIntegrationUpdateRequest](integration_extract_v1.md#extractintegrationupdaterequest)
- [ExtractIntegrationUpdateRequestBody](integration_extract_v1.md#extractintegrationupdaterequestbody)
- [ExtractIntegrationUpdateResponse](integration_extract_v1.md#extractintegrationupdateresponse)
- [ExtractIntegrationUpdateResponseBody](integration_extract_v1.md#extractintegrationupdateresponsebody)
- [ResponsePromise](integration_extract_v1.md#responsepromise)

### Functions

- [createExtractIntegration](integration_extract_v1.md#createextractintegration)
- [deleteExtractIntegration](integration_extract_v1.md#deleteextractintegration)
- [fetchExtractIntegration](integration_extract_v1.md#fetchextractintegration)
- [listExtractIntegrations](integration_extract_v1.md#listextractintegrations)
- [updateExtractIntegration](integration_extract_v1.md#updateextractintegration)

## Type Aliases

### ChatBotKitClient

Ƭ **ChatBotKitClient**\<\>: [`client`](client.md)

#### Defined in

[integration/extract/v1.js:2](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/extract/v1.js#L2)

___

### ExtractIntegrationCreateRequest

Ƭ **ExtractIntegrationCreateRequest**\<\>: [`ExtractIntegrationCreateRequestBody`](integration_extract_v1.md#extractintegrationcreaterequestbody)

#### Defined in

[integration/extract/v1.js:55](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/extract/v1.js#L55)

___

### ExtractIntegrationCreateRequestBody

Ƭ **ExtractIntegrationCreateRequestBody**\<\>: `operations`[``"createExtractIntegration"``][``"requestBody"``][``"content"``][``"application/json"``]

#### Defined in

[integration/extract/v1.js:53](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/extract/v1.js#L53)

___

### ExtractIntegrationCreateResponse

Ƭ **ExtractIntegrationCreateResponse**\<\>: [`ExtractIntegrationCreateResponseBody`](integration_extract_v1.md#extractintegrationcreateresponsebody)

#### Defined in

[integration/extract/v1.js:59](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/extract/v1.js#L59)

___

### ExtractIntegrationCreateResponseBody

Ƭ **ExtractIntegrationCreateResponseBody**\<\>: `operations`[``"createExtractIntegration"``][``"responses"``][``"200"``][``"content"``][``"application/json"``]

#### Defined in

[integration/extract/v1.js:57](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/extract/v1.js#L57)

___

### ExtractIntegrationDeleteRequest

Ƭ **ExtractIntegrationDeleteRequest**\<\>: [`ExtractIntegrationDeleteRequestBody`](integration_extract_v1.md#extractintegrationdeleterequestbody)

#### Defined in

[integration/extract/v1.js:110](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/extract/v1.js#L110)

___

### ExtractIntegrationDeleteRequestBody

Ƭ **ExtractIntegrationDeleteRequestBody**\<\>: `operations`[``"deleteExtractIntegration"``][``"requestBody"``][``"content"``][``"application/json"``]

#### Defined in

[integration/extract/v1.js:108](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/extract/v1.js#L108)

___

### ExtractIntegrationDeleteResponse

Ƭ **ExtractIntegrationDeleteResponse**\<\>: [`ExtractIntegrationDeleteResponseBody`](integration_extract_v1.md#extractintegrationdeleteresponsebody)

#### Defined in

[integration/extract/v1.js:114](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/extract/v1.js#L114)

___

### ExtractIntegrationDeleteResponseBody

Ƭ **ExtractIntegrationDeleteResponseBody**\<\>: `operations`[``"deleteExtractIntegration"``][``"responses"``][``"200"``][``"content"``][``"application/json"``]

#### Defined in

[integration/extract/v1.js:112](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/extract/v1.js#L112)

___

### ExtractIntegrationFetchResponse

Ƭ **ExtractIntegrationFetchResponse**\<\>: `operations`[``"fetchExtractIntegration"``][``"responses"``][``"200"``][``"content"``][``"application/json"``]

#### Defined in

[integration/extract/v1.js:37](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/extract/v1.js#L37)

___

### ExtractIntegrationListRequest

Ƭ **ExtractIntegrationListRequest**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `cursor?` | `string` |
| `meta?` | [`Record`]( https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type )\<`string`, `string`\> |
| `order?` | ``"desc"`` \| ``"asc"`` |
| `take?` | `number` |

#### Defined in

[integration/extract/v1.js:17](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/extract/v1.js#L17)

___

### ExtractIntegrationListResponse

Ƭ **ExtractIntegrationListResponse**\<\>: `operations`[``"listExtractIntegrations"``][``"responses"``][``"200"``][``"content"``][``"application/json"``]

#### Defined in

[integration/extract/v1.js:19](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/extract/v1.js#L19)

___

### ExtractIntegrationListStreamType

Ƭ **ExtractIntegrationListStreamType**\<\>: `operations`[``"listExtractIntegrations"``][``"responses"``][``"200"``][``"content"``][``"application/jsonl"``]

#### Defined in

[integration/extract/v1.js:21](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/extract/v1.js#L21)

___

### ExtractIntegrationUpdateRequest

Ƭ **ExtractIntegrationUpdateRequest**\<\>: [`ExtractIntegrationUpdateRequestBody`](integration_extract_v1.md#extractintegrationupdaterequestbody)

#### Defined in

[integration/extract/v1.js:82](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/extract/v1.js#L82)

___

### ExtractIntegrationUpdateRequestBody

Ƭ **ExtractIntegrationUpdateRequestBody**\<\>: `operations`[``"updateExtractIntegration"``][``"requestBody"``][``"content"``][``"application/json"``]

#### Defined in

[integration/extract/v1.js:80](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/extract/v1.js#L80)

___

### ExtractIntegrationUpdateResponse

Ƭ **ExtractIntegrationUpdateResponse**\<\>: [`ExtractIntegrationUpdateResponseBody`](integration_extract_v1.md#extractintegrationupdateresponsebody)

#### Defined in

[integration/extract/v1.js:86](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/extract/v1.js#L86)

___

### ExtractIntegrationUpdateResponseBody

Ƭ **ExtractIntegrationUpdateResponseBody**\<\>: `operations`[``"updateExtractIntegration"``][``"responses"``][``"200"``][``"content"``][``"application/json"``]

#### Defined in

[integration/extract/v1.js:84](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/extract/v1.js#L84)

___

### ResponsePromise

Ƭ **ResponsePromise**\<`T`, `U`\>: [`client`](client.md)

#### Type parameters

| Name |
| :------ |
| `T` |
| `U` |

#### Defined in

[integration/extract/v1.js:8](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/extract/v1.js#L8)

## Functions

### createExtractIntegration

▸ **createExtractIntegration**(`client`, `request`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<{}\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`ChatBotKitClient`](../classes/client.ChatBotKitClient.md) |
| `request` | `Object` |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<{}\>

#### Defined in

[integration/extract/v1.js:65](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/extract/v1.js#L65)

___

### deleteExtractIntegration

▸ **deleteExtractIntegration**(`client`, `extractId`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<{}\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`ChatBotKitClient`](../classes/client.ChatBotKitClient.md) |
| `extractId` | `string` |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<{}\>

#### Defined in

[integration/extract/v1.js:120](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/extract/v1.js#L120)

___

### fetchExtractIntegration

▸ **fetchExtractIntegration**(`client`, `extractId`): [`ResponsePromise`](../classes/client.ResponsePromise.md)\<{}, `never`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`ChatBotKitClient`](../classes/client.ChatBotKitClient.md) |
| `extractId` | `string` |

#### Returns

[`ResponsePromise`](../classes/client.ResponsePromise.md)\<{}, `never`\>

#### Defined in

[integration/extract/v1.js:43](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/extract/v1.js#L43)

___

### listExtractIntegrations

▸ **listExtractIntegrations**(`client`, `request?`): [`ResponsePromise`](../classes/client.ResponsePromise.md)\<{}, {}\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`ChatBotKitClient`](../classes/client.ChatBotKitClient.md) |
| `request?` | [`ExtractIntegrationListRequest`](integration_extract_v1.md#extractintegrationlistrequest) |

#### Returns

[`ResponsePromise`](../classes/client.ResponsePromise.md)\<{}, {}\>

#### Defined in

[integration/extract/v1.js:27](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/extract/v1.js#L27)

___

### updateExtractIntegration

▸ **updateExtractIntegration**(`client`, `extractId`, `request`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<{}\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`ChatBotKitClient`](../classes/client.ChatBotKitClient.md) |
| `extractId` | `string` |
| `request` | `Object` |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<{}\>

#### Defined in

[integration/extract/v1.js:93](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/extract/v1.js#L93)
