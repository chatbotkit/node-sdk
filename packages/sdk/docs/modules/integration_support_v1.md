[@chatbotkit/sdk](../README.md) / [Modules](../modules.md) / integration/support/v1

# Module: integration/support/v1

## Table of contents

### Type Aliases

- [ChatBotKitClient](integration_support_v1.md#chatbotkitclient)
- [ResponsePromise](integration_support_v1.md#responsepromise)
- [SupportIntegrationCreateRequest](integration_support_v1.md#supportintegrationcreaterequest)
- [SupportIntegrationCreateRequestBody](integration_support_v1.md#supportintegrationcreaterequestbody)
- [SupportIntegrationCreateResponse](integration_support_v1.md#supportintegrationcreateresponse)
- [SupportIntegrationCreateResponseBody](integration_support_v1.md#supportintegrationcreateresponsebody)
- [SupportIntegrationDeleteRequest](integration_support_v1.md#supportintegrationdeleterequest)
- [SupportIntegrationDeleteRequestBody](integration_support_v1.md#supportintegrationdeleterequestbody)
- [SupportIntegrationDeleteResponse](integration_support_v1.md#supportintegrationdeleteresponse)
- [SupportIntegrationDeleteResponseBody](integration_support_v1.md#supportintegrationdeleteresponsebody)
- [SupportIntegrationFetchResponse](integration_support_v1.md#supportintegrationfetchresponse)
- [SupportIntegrationListRequest](integration_support_v1.md#supportintegrationlistrequest)
- [SupportIntegrationListResponse](integration_support_v1.md#supportintegrationlistresponse)
- [SupportIntegrationListStreamType](integration_support_v1.md#supportintegrationliststreamtype)
- [SupportIntegrationUpdateRequest](integration_support_v1.md#supportintegrationupdaterequest)
- [SupportIntegrationUpdateRequestBody](integration_support_v1.md#supportintegrationupdaterequestbody)
- [SupportIntegrationUpdateResponse](integration_support_v1.md#supportintegrationupdateresponse)
- [SupportIntegrationUpdateResponseBody](integration_support_v1.md#supportintegrationupdateresponsebody)

### Functions

- [createSupportIntegration](integration_support_v1.md#createsupportintegration)
- [deleteSupportIntegration](integration_support_v1.md#deletesupportintegration)
- [fetchSupportIntegration](integration_support_v1.md#fetchsupportintegration)
- [listSupportIntegrations](integration_support_v1.md#listsupportintegrations)
- [updateSupportIntegration](integration_support_v1.md#updatesupportintegration)

## Type Aliases

### ChatBotKitClient

Ƭ **ChatBotKitClient**\<\>: [`client`](client.md)

#### Defined in

[integration/support/v1.js:2](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/support/v1.js#L2)

___

### ResponsePromise

Ƭ **ResponsePromise**\<`T`, `U`\>: [`client`](client.md)

#### Type parameters

| Name |
| :------ |
| `T` |
| `U` |

#### Defined in

[integration/support/v1.js:8](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/support/v1.js#L8)

___

### SupportIntegrationCreateRequest

Ƭ **SupportIntegrationCreateRequest**\<\>: [`SupportIntegrationCreateRequestBody`](integration_support_v1.md#supportintegrationcreaterequestbody)

#### Defined in

[integration/support/v1.js:55](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/support/v1.js#L55)

___

### SupportIntegrationCreateRequestBody

Ƭ **SupportIntegrationCreateRequestBody**\<\>: `operations`[``"createSupportIntegration"``][``"requestBody"``][``"content"``][``"application/json"``]

#### Defined in

[integration/support/v1.js:53](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/support/v1.js#L53)

___

### SupportIntegrationCreateResponse

Ƭ **SupportIntegrationCreateResponse**\<\>: [`SupportIntegrationCreateResponseBody`](integration_support_v1.md#supportintegrationcreateresponsebody)

#### Defined in

[integration/support/v1.js:59](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/support/v1.js#L59)

___

### SupportIntegrationCreateResponseBody

Ƭ **SupportIntegrationCreateResponseBody**\<\>: `operations`[``"createSupportIntegration"``][``"responses"``][``"200"``][``"content"``][``"application/json"``]

#### Defined in

[integration/support/v1.js:57](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/support/v1.js#L57)

___

### SupportIntegrationDeleteRequest

Ƭ **SupportIntegrationDeleteRequest**\<\>: [`SupportIntegrationDeleteRequestBody`](integration_support_v1.md#supportintegrationdeleterequestbody)

#### Defined in

[integration/support/v1.js:110](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/support/v1.js#L110)

___

### SupportIntegrationDeleteRequestBody

Ƭ **SupportIntegrationDeleteRequestBody**\<\>: `operations`[``"deleteSupportIntegration"``][``"requestBody"``][``"content"``][``"application/json"``]

#### Defined in

[integration/support/v1.js:108](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/support/v1.js#L108)

___

### SupportIntegrationDeleteResponse

Ƭ **SupportIntegrationDeleteResponse**\<\>: [`SupportIntegrationDeleteResponseBody`](integration_support_v1.md#supportintegrationdeleteresponsebody)

#### Defined in

[integration/support/v1.js:114](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/support/v1.js#L114)

___

### SupportIntegrationDeleteResponseBody

Ƭ **SupportIntegrationDeleteResponseBody**\<\>: `operations`[``"deleteSupportIntegration"``][``"responses"``][``"200"``][``"content"``][``"application/json"``]

#### Defined in

[integration/support/v1.js:112](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/support/v1.js#L112)

___

### SupportIntegrationFetchResponse

Ƭ **SupportIntegrationFetchResponse**\<\>: `operations`[``"fetchSupportIntegration"``][``"responses"``][``"200"``][``"content"``][``"application/json"``]

#### Defined in

[integration/support/v1.js:37](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/support/v1.js#L37)

___

### SupportIntegrationListRequest

Ƭ **SupportIntegrationListRequest**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `cursor?` | `string` |
| `meta?` | [`Record`]( https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type )\<`string`, `string`\> |
| `order?` | ``"desc"`` \| ``"asc"`` |
| `take?` | `number` |

#### Defined in

[integration/support/v1.js:17](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/support/v1.js#L17)

___

### SupportIntegrationListResponse

Ƭ **SupportIntegrationListResponse**\<\>: `operations`[``"listSupportIntegrations"``][``"responses"``][``"200"``][``"content"``][``"application/json"``]

#### Defined in

[integration/support/v1.js:19](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/support/v1.js#L19)

___

### SupportIntegrationListStreamType

Ƭ **SupportIntegrationListStreamType**\<\>: `operations`[``"listSupportIntegrations"``][``"responses"``][``"200"``][``"content"``][``"application/jsonl"``]

#### Defined in

[integration/support/v1.js:21](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/support/v1.js#L21)

___

### SupportIntegrationUpdateRequest

Ƭ **SupportIntegrationUpdateRequest**\<\>: [`SupportIntegrationUpdateRequestBody`](integration_support_v1.md#supportintegrationupdaterequestbody)

#### Defined in

[integration/support/v1.js:82](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/support/v1.js#L82)

___

### SupportIntegrationUpdateRequestBody

Ƭ **SupportIntegrationUpdateRequestBody**\<\>: `operations`[``"updateSupportIntegration"``][``"requestBody"``][``"content"``][``"application/json"``]

#### Defined in

[integration/support/v1.js:80](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/support/v1.js#L80)

___

### SupportIntegrationUpdateResponse

Ƭ **SupportIntegrationUpdateResponse**\<\>: [`SupportIntegrationUpdateResponseBody`](integration_support_v1.md#supportintegrationupdateresponsebody)

#### Defined in

[integration/support/v1.js:86](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/support/v1.js#L86)

___

### SupportIntegrationUpdateResponseBody

Ƭ **SupportIntegrationUpdateResponseBody**\<\>: `operations`[``"updateSupportIntegration"``][``"responses"``][``"200"``][``"content"``][``"application/json"``]

#### Defined in

[integration/support/v1.js:84](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/support/v1.js#L84)

## Functions

### createSupportIntegration

▸ **createSupportIntegration**(`client`, `request`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<{}\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`ChatBotKitClient`](../classes/client.ChatBotKitClient.md) |
| `request` | `Object` |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<{}\>

#### Defined in

[integration/support/v1.js:65](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/support/v1.js#L65)

___

### deleteSupportIntegration

▸ **deleteSupportIntegration**(`client`, `supportId`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<{}\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`ChatBotKitClient`](../classes/client.ChatBotKitClient.md) |
| `supportId` | `string` |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<{}\>

#### Defined in

[integration/support/v1.js:120](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/support/v1.js#L120)

___

### fetchSupportIntegration

▸ **fetchSupportIntegration**(`client`, `supportId`): [`ResponsePromise`](../classes/client.ResponsePromise.md)\<{}, `never`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`ChatBotKitClient`](../classes/client.ChatBotKitClient.md) |
| `supportId` | `string` |

#### Returns

[`ResponsePromise`](../classes/client.ResponsePromise.md)\<{}, `never`\>

#### Defined in

[integration/support/v1.js:43](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/support/v1.js#L43)

___

### listSupportIntegrations

▸ **listSupportIntegrations**(`client`, `request?`): [`ResponsePromise`](../classes/client.ResponsePromise.md)\<{}, {}\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`ChatBotKitClient`](../classes/client.ChatBotKitClient.md) |
| `request?` | [`SupportIntegrationListRequest`](integration_support_v1.md#supportintegrationlistrequest) |

#### Returns

[`ResponsePromise`](../classes/client.ResponsePromise.md)\<{}, {}\>

#### Defined in

[integration/support/v1.js:27](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/support/v1.js#L27)

___

### updateSupportIntegration

▸ **updateSupportIntegration**(`client`, `supportId`, `request`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<{}\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`ChatBotKitClient`](../classes/client.ChatBotKitClient.md) |
| `supportId` | `string` |
| `request` | `Object` |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<{}\>

#### Defined in

[integration/support/v1.js:93](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/support/v1.js#L93)
