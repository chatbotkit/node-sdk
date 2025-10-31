[@chatbotkit/sdk](../README.md) / [Modules](../modules.md) / integration/whatsapp/v1

# Module: integration/whatsapp/v1

## Table of contents

### Type Aliases

- [ChatBotKitClient](integration_whatsapp_v1.md#chatbotkitclient)
- [ResponsePromise](integration_whatsapp_v1.md#responsepromise)
- [WhatsAppIntegrationCreateRequest](integration_whatsapp_v1.md#whatsappintegrationcreaterequest)
- [WhatsAppIntegrationCreateRequestBody](integration_whatsapp_v1.md#whatsappintegrationcreaterequestbody)
- [WhatsAppIntegrationCreateResponse](integration_whatsapp_v1.md#whatsappintegrationcreateresponse)
- [WhatsAppIntegrationCreateResponseBody](integration_whatsapp_v1.md#whatsappintegrationcreateresponsebody)
- [WhatsAppIntegrationDeleteRequest](integration_whatsapp_v1.md#whatsappintegrationdeleterequest)
- [WhatsAppIntegrationDeleteRequestBody](integration_whatsapp_v1.md#whatsappintegrationdeleterequestbody)
- [WhatsAppIntegrationDeleteResponse](integration_whatsapp_v1.md#whatsappintegrationdeleteresponse)
- [WhatsAppIntegrationDeleteResponseBody](integration_whatsapp_v1.md#whatsappintegrationdeleteresponsebody)
- [WhatsAppIntegrationFetchResponse](integration_whatsapp_v1.md#whatsappintegrationfetchresponse)
- [WhatsAppIntegrationListRequest](integration_whatsapp_v1.md#whatsappintegrationlistrequest)
- [WhatsAppIntegrationListResponse](integration_whatsapp_v1.md#whatsappintegrationlistresponse)
- [WhatsAppIntegrationListStreamType](integration_whatsapp_v1.md#whatsappintegrationliststreamtype)
- [WhatsAppIntegrationSetupRequest](integration_whatsapp_v1.md#whatsappintegrationsetuprequest)
- [WhatsAppIntegrationSetupRequestBody](integration_whatsapp_v1.md#whatsappintegrationsetuprequestbody)
- [WhatsAppIntegrationSetupResponse](integration_whatsapp_v1.md#whatsappintegrationsetupresponse)
- [WhatsAppIntegrationSetupResponseBody](integration_whatsapp_v1.md#whatsappintegrationsetupresponsebody)
- [WhatsAppIntegrationUpdateRequest](integration_whatsapp_v1.md#whatsappintegrationupdaterequest)
- [WhatsAppIntegrationUpdateRequestBody](integration_whatsapp_v1.md#whatsappintegrationupdaterequestbody)
- [WhatsAppIntegrationUpdateResponse](integration_whatsapp_v1.md#whatsappintegrationupdateresponse)
- [WhatsAppIntegrationUpdateResponseBody](integration_whatsapp_v1.md#whatsappintegrationupdateresponsebody)

### Functions

- [createWhatsAppIntegration](integration_whatsapp_v1.md#createwhatsappintegration)
- [deleteWhatsAppIntegration](integration_whatsapp_v1.md#deletewhatsappintegration)
- [fetchWhatsAppIntegration](integration_whatsapp_v1.md#fetchwhatsappintegration)
- [listWhatsAppIntegrations](integration_whatsapp_v1.md#listwhatsappintegrations)
- [setupWhatsAppIntegration](integration_whatsapp_v1.md#setupwhatsappintegration)
- [updateWhatsAppIntegration](integration_whatsapp_v1.md#updatewhatsappintegration)

## Type Aliases

### ChatBotKitClient

Ƭ **ChatBotKitClient**\<\>: [`client`](client.md)

#### Defined in

[integration/whatsapp/v1.js:2](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/whatsapp/v1.js#L2)

___

### ResponsePromise

Ƭ **ResponsePromise**\<`T`, `U`\>: [`client`](client.md)

#### Type parameters

| Name |
| :------ |
| `T` |
| `U` |

#### Defined in

[integration/whatsapp/v1.js:8](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/whatsapp/v1.js#L8)

___

### WhatsAppIntegrationCreateRequest

Ƭ **WhatsAppIntegrationCreateRequest**\<\>: [`WhatsAppIntegrationCreateRequestBody`](integration_whatsapp_v1.md#whatsappintegrationcreaterequestbody)

#### Defined in

[integration/whatsapp/v1.js:55](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/whatsapp/v1.js#L55)

___

### WhatsAppIntegrationCreateRequestBody

Ƭ **WhatsAppIntegrationCreateRequestBody**\<\>: `operations`[``"createWhatsAppIntegration"``][``"requestBody"``][``"content"``][``"application/json"``]

#### Defined in

[integration/whatsapp/v1.js:53](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/whatsapp/v1.js#L53)

___

### WhatsAppIntegrationCreateResponse

Ƭ **WhatsAppIntegrationCreateResponse**\<\>: [`WhatsAppIntegrationCreateResponseBody`](integration_whatsapp_v1.md#whatsappintegrationcreateresponsebody)

#### Defined in

[integration/whatsapp/v1.js:59](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/whatsapp/v1.js#L59)

___

### WhatsAppIntegrationCreateResponseBody

Ƭ **WhatsAppIntegrationCreateResponseBody**\<\>: `operations`[``"createWhatsAppIntegration"``][``"responses"``][``"200"``][``"content"``][``"application/json"``]

#### Defined in

[integration/whatsapp/v1.js:57](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/whatsapp/v1.js#L57)

___

### WhatsAppIntegrationDeleteRequest

Ƭ **WhatsAppIntegrationDeleteRequest**\<\>: [`WhatsAppIntegrationDeleteRequestBody`](integration_whatsapp_v1.md#whatsappintegrationdeleterequestbody)

#### Defined in

[integration/whatsapp/v1.js:110](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/whatsapp/v1.js#L110)

___

### WhatsAppIntegrationDeleteRequestBody

Ƭ **WhatsAppIntegrationDeleteRequestBody**\<\>: `operations`[``"deleteWhatsAppIntegration"``][``"requestBody"``][``"content"``][``"application/json"``]

#### Defined in

[integration/whatsapp/v1.js:108](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/whatsapp/v1.js#L108)

___

### WhatsAppIntegrationDeleteResponse

Ƭ **WhatsAppIntegrationDeleteResponse**\<\>: [`WhatsAppIntegrationDeleteResponseBody`](integration_whatsapp_v1.md#whatsappintegrationdeleteresponsebody)

#### Defined in

[integration/whatsapp/v1.js:114](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/whatsapp/v1.js#L114)

___

### WhatsAppIntegrationDeleteResponseBody

Ƭ **WhatsAppIntegrationDeleteResponseBody**\<\>: `operations`[``"deleteWhatsAppIntegration"``][``"responses"``][``"200"``][``"content"``][``"application/json"``]

#### Defined in

[integration/whatsapp/v1.js:112](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/whatsapp/v1.js#L112)

___

### WhatsAppIntegrationFetchResponse

Ƭ **WhatsAppIntegrationFetchResponse**\<\>: `operations`[``"fetchWhatsAppIntegration"``][``"responses"``][``"200"``][``"content"``][``"application/json"``]

#### Defined in

[integration/whatsapp/v1.js:37](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/whatsapp/v1.js#L37)

___

### WhatsAppIntegrationListRequest

Ƭ **WhatsAppIntegrationListRequest**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `cursor?` | `string` |
| `meta?` | [`Record`]( https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type )\<`string`, `string`\> |
| `order?` | ``"desc"`` \| ``"asc"`` |
| `take?` | `number` |

#### Defined in

[integration/whatsapp/v1.js:17](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/whatsapp/v1.js#L17)

___

### WhatsAppIntegrationListResponse

Ƭ **WhatsAppIntegrationListResponse**\<\>: `operations`[``"listWhatsAppIntegrations"``][``"responses"``][``"200"``][``"content"``][``"application/json"``]

#### Defined in

[integration/whatsapp/v1.js:19](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/whatsapp/v1.js#L19)

___

### WhatsAppIntegrationListStreamType

Ƭ **WhatsAppIntegrationListStreamType**\<\>: `operations`[``"listWhatsAppIntegrations"``][``"responses"``][``"200"``][``"content"``][``"application/jsonl"``]

#### Defined in

[integration/whatsapp/v1.js:21](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/whatsapp/v1.js#L21)

___

### WhatsAppIntegrationSetupRequest

Ƭ **WhatsAppIntegrationSetupRequest**\<\>: [`WhatsAppIntegrationSetupRequestBody`](integration_whatsapp_v1.md#whatsappintegrationsetuprequestbody)

#### Defined in

[integration/whatsapp/v1.js:135](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/whatsapp/v1.js#L135)

___

### WhatsAppIntegrationSetupRequestBody

Ƭ **WhatsAppIntegrationSetupRequestBody**\<\>: `operations`[``"setupWhatsAppIntegration"``][``"requestBody"``][``"content"``][``"application/json"``]

#### Defined in

[integration/whatsapp/v1.js:133](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/whatsapp/v1.js#L133)

___

### WhatsAppIntegrationSetupResponse

Ƭ **WhatsAppIntegrationSetupResponse**\<\>: [`WhatsAppIntegrationSetupResponseBody`](integration_whatsapp_v1.md#whatsappintegrationsetupresponsebody)

#### Defined in

[integration/whatsapp/v1.js:139](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/whatsapp/v1.js#L139)

___

### WhatsAppIntegrationSetupResponseBody

Ƭ **WhatsAppIntegrationSetupResponseBody**\<\>: `operations`[``"setupWhatsAppIntegration"``][``"responses"``][``"200"``][``"content"``][``"application/json"``]

#### Defined in

[integration/whatsapp/v1.js:137](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/whatsapp/v1.js#L137)

___

### WhatsAppIntegrationUpdateRequest

Ƭ **WhatsAppIntegrationUpdateRequest**\<\>: [`WhatsAppIntegrationUpdateRequestBody`](integration_whatsapp_v1.md#whatsappintegrationupdaterequestbody)

#### Defined in

[integration/whatsapp/v1.js:82](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/whatsapp/v1.js#L82)

___

### WhatsAppIntegrationUpdateRequestBody

Ƭ **WhatsAppIntegrationUpdateRequestBody**\<\>: `operations`[``"updateWhatsAppIntegration"``][``"requestBody"``][``"content"``][``"application/json"``]

#### Defined in

[integration/whatsapp/v1.js:80](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/whatsapp/v1.js#L80)

___

### WhatsAppIntegrationUpdateResponse

Ƭ **WhatsAppIntegrationUpdateResponse**\<\>: [`WhatsAppIntegrationUpdateResponseBody`](integration_whatsapp_v1.md#whatsappintegrationupdateresponsebody)

#### Defined in

[integration/whatsapp/v1.js:86](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/whatsapp/v1.js#L86)

___

### WhatsAppIntegrationUpdateResponseBody

Ƭ **WhatsAppIntegrationUpdateResponseBody**\<\>: `operations`[``"updateWhatsAppIntegration"``][``"responses"``][``"200"``][``"content"``][``"application/json"``]

#### Defined in

[integration/whatsapp/v1.js:84](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/whatsapp/v1.js#L84)

## Functions

### createWhatsAppIntegration

▸ **createWhatsAppIntegration**(`client`, `request`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<{}\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`ChatBotKitClient`](../classes/client.ChatBotKitClient.md) |
| `request` | `Object` |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<{}\>

#### Defined in

[integration/whatsapp/v1.js:65](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/whatsapp/v1.js#L65)

___

### deleteWhatsAppIntegration

▸ **deleteWhatsAppIntegration**(`client`, `whatsappId`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<{}\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`ChatBotKitClient`](../classes/client.ChatBotKitClient.md) |
| `whatsappId` | `string` |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<{}\>

#### Defined in

[integration/whatsapp/v1.js:120](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/whatsapp/v1.js#L120)

___

### fetchWhatsAppIntegration

▸ **fetchWhatsAppIntegration**(`client`, `whatsappId`): [`ResponsePromise`](../classes/client.ResponsePromise.md)\<{}, `never`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`ChatBotKitClient`](../classes/client.ChatBotKitClient.md) |
| `whatsappId` | `string` |

#### Returns

[`ResponsePromise`](../classes/client.ResponsePromise.md)\<{}, `never`\>

#### Defined in

[integration/whatsapp/v1.js:43](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/whatsapp/v1.js#L43)

___

### listWhatsAppIntegrations

▸ **listWhatsAppIntegrations**(`client`, `request?`): [`ResponsePromise`](../classes/client.ResponsePromise.md)\<{}, {}\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`ChatBotKitClient`](../classes/client.ChatBotKitClient.md) |
| `request?` | [`WhatsAppIntegrationListRequest`](integration_whatsapp_v1.md#whatsappintegrationlistrequest) |

#### Returns

[`ResponsePromise`](../classes/client.ResponsePromise.md)\<{}, {}\>

#### Defined in

[integration/whatsapp/v1.js:27](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/whatsapp/v1.js#L27)

___

### setupWhatsAppIntegration

▸ **setupWhatsAppIntegration**(`client`, `whatsappId`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<{}\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`ChatBotKitClient`](../classes/client.ChatBotKitClient.md) |
| `whatsappId` | `string` |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<{}\>

#### Defined in

[integration/whatsapp/v1.js:145](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/whatsapp/v1.js#L145)

___

### updateWhatsAppIntegration

▸ **updateWhatsAppIntegration**(`client`, `whatsappId`, `request`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<{}\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`ChatBotKitClient`](../classes/client.ChatBotKitClient.md) |
| `whatsappId` | `string` |
| `request` | `Object` |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<{}\>

#### Defined in

[integration/whatsapp/v1.js:93](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/whatsapp/v1.js#L93)
