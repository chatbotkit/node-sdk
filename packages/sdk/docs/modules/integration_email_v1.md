[@chatbotkit/sdk](../README.md) / [Modules](../modules.md) / integration/email/v1

# Module: integration/email/v1

## Table of contents

### Type Aliases

- [ChatBotKitClient](integration_email_v1.md#chatbotkitclient)
- [EmailIntegrationCreateRequest](integration_email_v1.md#emailintegrationcreaterequest)
- [EmailIntegrationCreateRequestBody](integration_email_v1.md#emailintegrationcreaterequestbody)
- [EmailIntegrationCreateResponse](integration_email_v1.md#emailintegrationcreateresponse)
- [EmailIntegrationDeleteRequestBody](integration_email_v1.md#emailintegrationdeleterequestbody)
- [EmailIntegrationDeleteResponse](integration_email_v1.md#emailintegrationdeleteresponse)
- [EmailIntegrationFetchResponse](integration_email_v1.md#emailintegrationfetchresponse)
- [EmailIntegrationListRequest](integration_email_v1.md#emailintegrationlistrequest)
- [EmailIntegrationListResponse](integration_email_v1.md#emailintegrationlistresponse)
- [EmailIntegrationListStreamType](integration_email_v1.md#emailintegrationliststreamtype)
- [EmailIntegrationSetupRequestBody](integration_email_v1.md#emailintegrationsetuprequestbody)
- [EmailIntegrationSetupResponse](integration_email_v1.md#emailintegrationsetupresponse)
- [EmailIntegrationUpdateRequest](integration_email_v1.md#emailintegrationupdaterequest)
- [EmailIntegrationUpdateRequestBody](integration_email_v1.md#emailintegrationupdaterequestbody)
- [EmailIntegrationUpdateResponse](integration_email_v1.md#emailintegrationupdateresponse)
- [ResponsePromise](integration_email_v1.md#responsepromise)

### Functions

- [createEmailIntegration](integration_email_v1.md#createemailintegration)
- [deleteEmailIntegration](integration_email_v1.md#deleteemailintegration)
- [fetchEmailIntegration](integration_email_v1.md#fetchemailintegration)
- [listEmailIntegrations](integration_email_v1.md#listemailintegrations)
- [setupEmailIntegration](integration_email_v1.md#setupemailintegration)
- [updateEmailIntegration](integration_email_v1.md#updateemailintegration)

## Type Aliases

### ChatBotKitClient

Ƭ **ChatBotKitClient**\<\>: [`client`](client.md)

#### Defined in

[integration/email/v1.js:2](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/email/v1.js#L2)

___

### EmailIntegrationCreateRequest

Ƭ **EmailIntegrationCreateRequest**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `blueprintId?` | `string` |
| `botId?` | `string` |
| `contactCollection?` | `boolean` |
| `description?` | `string` |
| `meta?` | [`Record`]( https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type )\<`string`, `any`\> |
| `model?` | [`model/v1`](model_v1.md) |
| `name?` | `string` |
| `sessionDuration?` | `number` |

#### Defined in

[integration/email/v1.js:62](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/email/v1.js#L62)

___

### EmailIntegrationCreateRequestBody

Ƭ **EmailIntegrationCreateRequestBody**\<\>: `operations`[``"createEmailIntegration"``][``"requestBody"``][``"content"``][``"application/json"``]

#### Defined in

[integration/email/v1.js:64](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/email/v1.js#L64)

___

### EmailIntegrationCreateResponse

Ƭ **EmailIntegrationCreateResponse**\<\>: `operations`[``"createEmailIntegration"``][``"responses"``][``"200"``][``"content"``][``"application/json"``]

#### Defined in

[integration/email/v1.js:66](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/email/v1.js#L66)

___

### EmailIntegrationDeleteRequestBody

Ƭ **EmailIntegrationDeleteRequestBody**\<\>: `operations`[``"deleteEmailIntegration"``][``"requestBody"``][``"content"``][``"application/json"``]

#### Defined in

[integration/email/v1.js:122](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/email/v1.js#L122)

___

### EmailIntegrationDeleteResponse

Ƭ **EmailIntegrationDeleteResponse**\<\>: `operations`[``"deleteEmailIntegration"``][``"responses"``][``"200"``][``"content"``][``"application/json"``]

#### Defined in

[integration/email/v1.js:124](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/email/v1.js#L124)

___

### EmailIntegrationFetchResponse

Ƭ **EmailIntegrationFetchResponse**\<\>: `operations`[``"fetchEmailIntegration"``][``"responses"``][``"200"``][``"content"``][``"application/json"``]

#### Defined in

[integration/email/v1.js:37](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/email/v1.js#L37)

___

### EmailIntegrationListRequest

Ƭ **EmailIntegrationListRequest**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `cursor?` | `string` |
| `meta?` | [`Record`]( https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type )\<`string`, `string`\> |
| `order?` | ``"desc"`` \| ``"asc"`` |
| `take?` | `number` |

#### Defined in

[integration/email/v1.js:17](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/email/v1.js#L17)

___

### EmailIntegrationListResponse

Ƭ **EmailIntegrationListResponse**\<\>: `operations`[``"listEmailIntegrations"``][``"responses"``][``"200"``][``"content"``][``"application/json"``]

#### Defined in

[integration/email/v1.js:19](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/email/v1.js#L19)

___

### EmailIntegrationListStreamType

Ƭ **EmailIntegrationListStreamType**\<\>: `operations`[``"listEmailIntegrations"``][``"responses"``][``"200"``][``"content"``][``"application/jsonl"``]

#### Defined in

[integration/email/v1.js:21](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/email/v1.js#L21)

___

### EmailIntegrationSetupRequestBody

Ƭ **EmailIntegrationSetupRequestBody**\<\>: `operations`[``"setupEmailIntegration"``][``"requestBody"``][``"content"``][``"application/json"``]

#### Defined in

[integration/email/v1.js:143](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/email/v1.js#L143)

___

### EmailIntegrationSetupResponse

Ƭ **EmailIntegrationSetupResponse**\<\>: `operations`[``"setupEmailIntegration"``][``"responses"``][``"200"``][``"content"``][``"application/json"``]

#### Defined in

[integration/email/v1.js:145](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/email/v1.js#L145)

___

### EmailIntegrationUpdateRequest

Ƭ **EmailIntegrationUpdateRequest**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `blueprintId?` | `string` |
| `botId?` | `string` |
| `contactCollection?` | `boolean` |
| `description?` | `string` |
| `meta?` | [`Record`]( https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type )\<`string`, `any`\> |
| `model?` | [`model/v1`](model_v1.md) |
| `name?` | `string` |
| `sessionDuration?` | `number` |

#### Defined in

[integration/email/v1.js:96](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/email/v1.js#L96)

___

### EmailIntegrationUpdateRequestBody

Ƭ **EmailIntegrationUpdateRequestBody**\<\>: `operations`[``"updateEmailIntegration"``][``"requestBody"``][``"content"``][``"application/json"``]

#### Defined in

[integration/email/v1.js:98](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/email/v1.js#L98)

___

### EmailIntegrationUpdateResponse

Ƭ **EmailIntegrationUpdateResponse**\<\>: `operations`[``"updateEmailIntegration"``][``"responses"``][``"200"``][``"content"``][``"application/json"``]

#### Defined in

[integration/email/v1.js:100](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/email/v1.js#L100)

___

### ResponsePromise

Ƭ **ResponsePromise**\<`T`, `U`\>: [`client`](client.md)

#### Type parameters

| Name |
| :------ |
| `T` |
| `U` |

#### Defined in

[integration/email/v1.js:8](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/email/v1.js#L8)

## Functions

### createEmailIntegration

▸ **createEmailIntegration**(`client`, `request`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<{}\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`ChatBotKitClient`](../classes/client.ChatBotKitClient.md) |
| `request` | [`EmailIntegrationCreateRequest`](integration_email_v1.md#emailintegrationcreaterequest) |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<{}\>

#### Defined in

[integration/email/v1.js:72](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/email/v1.js#L72)

___

### deleteEmailIntegration

▸ **deleteEmailIntegration**(`client`, `emailId`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<{}\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`ChatBotKitClient`](../classes/client.ChatBotKitClient.md) |
| `emailId` | `string` |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<{}\>

#### Defined in

[integration/email/v1.js:130](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/email/v1.js#L130)

___

### fetchEmailIntegration

▸ **fetchEmailIntegration**(`client`, `emailId`): [`ResponsePromise`](../classes/client.ResponsePromise.md)\<{}, `never`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`ChatBotKitClient`](../classes/client.ChatBotKitClient.md) |
| `emailId` | `string` |

#### Returns

[`ResponsePromise`](../classes/client.ResponsePromise.md)\<{}, `never`\>

#### Defined in

[integration/email/v1.js:43](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/email/v1.js#L43)

___

### listEmailIntegrations

▸ **listEmailIntegrations**(`client`, `request?`): [`ResponsePromise`](../classes/client.ResponsePromise.md)\<{}, {}\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`ChatBotKitClient`](../classes/client.ChatBotKitClient.md) |
| `request?` | [`EmailIntegrationListRequest`](integration_email_v1.md#emailintegrationlistrequest) |

#### Returns

[`ResponsePromise`](../classes/client.ResponsePromise.md)\<{}, {}\>

#### Defined in

[integration/email/v1.js:27](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/email/v1.js#L27)

___

### setupEmailIntegration

▸ **setupEmailIntegration**(`client`, `emailId`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<{}\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`ChatBotKitClient`](../classes/client.ChatBotKitClient.md) |
| `emailId` | `string` |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<{}\>

#### Defined in

[integration/email/v1.js:151](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/email/v1.js#L151)

___

### updateEmailIntegration

▸ **updateEmailIntegration**(`client`, `emailId`, `request`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<{}\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`ChatBotKitClient`](../classes/client.ChatBotKitClient.md) |
| `emailId` | `string` |
| `request` | [`EmailIntegrationUpdateRequest`](integration_email_v1.md#emailintegrationupdaterequest) |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<{}\>

#### Defined in

[integration/email/v1.js:107](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/email/v1.js#L107)
