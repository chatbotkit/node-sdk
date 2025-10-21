[@chatbotkit/sdk](../README.md) / [Modules](../modules.md) / integration/twilio/v1

# Module: integration/twilio/v1

## Table of contents

### Type Aliases

- [ChatBotKitClient](integration_twilio_v1.md#chatbotkitclient)
- [ResponsePromise](integration_twilio_v1.md#responsepromise)
- [TwilioIntegrationCreateRequest](integration_twilio_v1.md#twiliointegrationcreaterequest)
- [TwilioIntegrationCreateRequestBody](integration_twilio_v1.md#twiliointegrationcreaterequestbody)
- [TwilioIntegrationCreateResponse](integration_twilio_v1.md#twiliointegrationcreateresponse)
- [TwilioIntegrationDeleteRequestBody](integration_twilio_v1.md#twiliointegrationdeleterequestbody)
- [TwilioIntegrationDeleteResponse](integration_twilio_v1.md#twiliointegrationdeleteresponse)
- [TwilioIntegrationFetchResponse](integration_twilio_v1.md#twiliointegrationfetchresponse)
- [TwilioIntegrationListRequest](integration_twilio_v1.md#twiliointegrationlistrequest)
- [TwilioIntegrationListResponse](integration_twilio_v1.md#twiliointegrationlistresponse)
- [TwilioIntegrationListStreamType](integration_twilio_v1.md#twiliointegrationliststreamtype)
- [TwilioIntegrationSetupRequestBody](integration_twilio_v1.md#twiliointegrationsetuprequestbody)
- [TwilioIntegrationSetupResponse](integration_twilio_v1.md#twiliointegrationsetupresponse)
- [TwilioIntegrationUpdateRequest](integration_twilio_v1.md#twiliointegrationupdaterequest)
- [TwilioIntegrationUpdateRequestBody](integration_twilio_v1.md#twiliointegrationupdaterequestbody)
- [TwilioIntegrationUpdateResponse](integration_twilio_v1.md#twiliointegrationupdateresponse)

### Functions

- [createTwilioIntegration](integration_twilio_v1.md#createtwiliointegration)
- [deleteTwilioIntegration](integration_twilio_v1.md#deletetwiliointegration)
- [fetchTwilioIntegration](integration_twilio_v1.md#fetchtwiliointegration)
- [listTwilioIntegrations](integration_twilio_v1.md#listtwiliointegrations)
- [setupTwilioIntegration](integration_twilio_v1.md#setuptwiliointegration)
- [updateTwilioIntegration](integration_twilio_v1.md#updatetwiliointegration)

## Type Aliases

### ChatBotKitClient

Ƭ **ChatBotKitClient**\<\>: [`client`](client.md)

#### Defined in

[integration/twilio/v1.js:2](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/twilio/v1.js#L2)

___

### ResponsePromise

Ƭ **ResponsePromise**\<`T`, `U`\>: [`client`](client.md)

#### Type parameters

| Name |
| :------ |
| `T` |
| `U` |

#### Defined in

[integration/twilio/v1.js:8](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/twilio/v1.js#L8)

___

### TwilioIntegrationCreateRequest

Ƭ **TwilioIntegrationCreateRequest**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `accountSid?` | `string` |
| `authToken?` | `string` |
| `blueprintId?` | `string` |
| `botId?` | `string` |
| `description?` | `string` |
| `meta?` | [`Record`]( https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type )\<`string`, `any`\> |
| `model?` | [`model/v1`](model_v1.md) |
| `name?` | `string` |
| `phoneNumber?` | `string` |
| `sessionDuration?` | `number` |

#### Defined in

[integration/twilio/v1.js:64](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/twilio/v1.js#L64)

___

### TwilioIntegrationCreateRequestBody

Ƭ **TwilioIntegrationCreateRequestBody**\<\>: `operations`[``"createTwilioIntegration"``][``"requestBody"``][``"content"``][``"application/json"``]

#### Defined in

[integration/twilio/v1.js:66](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/twilio/v1.js#L66)

___

### TwilioIntegrationCreateResponse

Ƭ **TwilioIntegrationCreateResponse**\<\>: `operations`[``"createTwilioIntegration"``][``"responses"``][``"200"``][``"content"``][``"application/json"``]

#### Defined in

[integration/twilio/v1.js:68](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/twilio/v1.js#L68)

___

### TwilioIntegrationDeleteRequestBody

Ƭ **TwilioIntegrationDeleteRequestBody**\<\>: `operations`[``"deleteTwilioIntegration"``][``"requestBody"``][``"content"``][``"application/json"``]

#### Defined in

[integration/twilio/v1.js:126](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/twilio/v1.js#L126)

___

### TwilioIntegrationDeleteResponse

Ƭ **TwilioIntegrationDeleteResponse**\<\>: `operations`[``"deleteTwilioIntegration"``][``"responses"``][``"200"``][``"content"``][``"application/json"``]

#### Defined in

[integration/twilio/v1.js:128](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/twilio/v1.js#L128)

___

### TwilioIntegrationFetchResponse

Ƭ **TwilioIntegrationFetchResponse**\<\>: `operations`[``"fetchTwilioIntegration"``][``"responses"``][``"200"``][``"content"``][``"application/json"``]

#### Defined in

[integration/twilio/v1.js:37](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/twilio/v1.js#L37)

___

### TwilioIntegrationListRequest

Ƭ **TwilioIntegrationListRequest**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `cursor?` | `string` |
| `meta?` | [`Record`]( https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type )\<`string`, `string`\> |
| `order?` | ``"desc"`` \| ``"asc"`` |
| `take?` | `number` |

#### Defined in

[integration/twilio/v1.js:17](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/twilio/v1.js#L17)

___

### TwilioIntegrationListResponse

Ƭ **TwilioIntegrationListResponse**\<\>: `operations`[``"listTwilioIntegrations"``][``"responses"``][``"200"``][``"content"``][``"application/json"``]

#### Defined in

[integration/twilio/v1.js:19](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/twilio/v1.js#L19)

___

### TwilioIntegrationListStreamType

Ƭ **TwilioIntegrationListStreamType**\<\>: `operations`[``"listTwilioIntegrations"``][``"responses"``][``"200"``][``"content"``][``"application/jsonl"``]

#### Defined in

[integration/twilio/v1.js:21](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/twilio/v1.js#L21)

___

### TwilioIntegrationSetupRequestBody

Ƭ **TwilioIntegrationSetupRequestBody**\<\>: `operations`[``"setupTwilioIntegration"``][``"requestBody"``][``"content"``][``"application/json"``]

#### Defined in

[integration/twilio/v1.js:147](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/twilio/v1.js#L147)

___

### TwilioIntegrationSetupResponse

Ƭ **TwilioIntegrationSetupResponse**\<\>: `operations`[``"setupTwilioIntegration"``][``"responses"``][``"200"``][``"content"``][``"application/json"``]

#### Defined in

[integration/twilio/v1.js:149](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/twilio/v1.js#L149)

___

### TwilioIntegrationUpdateRequest

Ƭ **TwilioIntegrationUpdateRequest**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `accountSid?` | `string` |
| `authToken?` | `string` |
| `blueprintId?` | `string` |
| `botId?` | `string` |
| `description?` | `string` |
| `meta?` | [`Record`]( https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type )\<`string`, `any`\> |
| `model?` | [`model/v1`](model_v1.md) |
| `name?` | `string` |
| `phoneNumber?` | `string` |
| `sessionDuration?` | `number` |

#### Defined in

[integration/twilio/v1.js:100](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/twilio/v1.js#L100)

___

### TwilioIntegrationUpdateRequestBody

Ƭ **TwilioIntegrationUpdateRequestBody**\<\>: `operations`[``"updateTwilioIntegration"``][``"requestBody"``][``"content"``][``"application/json"``]

#### Defined in

[integration/twilio/v1.js:102](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/twilio/v1.js#L102)

___

### TwilioIntegrationUpdateResponse

Ƭ **TwilioIntegrationUpdateResponse**\<\>: `operations`[``"updateTwilioIntegration"``][``"responses"``][``"200"``][``"content"``][``"application/json"``]

#### Defined in

[integration/twilio/v1.js:104](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/twilio/v1.js#L104)

## Functions

### createTwilioIntegration

▸ **createTwilioIntegration**(`client`, `request`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<{}\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`ChatBotKitClient`](../classes/client.ChatBotKitClient.md) |
| `request` | [`TwilioIntegrationCreateRequest`](integration_twilio_v1.md#twiliointegrationcreaterequest) |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<{}\>

#### Defined in

[integration/twilio/v1.js:74](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/twilio/v1.js#L74)

___

### deleteTwilioIntegration

▸ **deleteTwilioIntegration**(`client`, `twilioId`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<{}\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`ChatBotKitClient`](../classes/client.ChatBotKitClient.md) |
| `twilioId` | `string` |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<{}\>

#### Defined in

[integration/twilio/v1.js:134](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/twilio/v1.js#L134)

___

### fetchTwilioIntegration

▸ **fetchTwilioIntegration**(`client`, `twilioId`): [`ResponsePromise`](../classes/client.ResponsePromise.md)\<{}, `never`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`ChatBotKitClient`](../classes/client.ChatBotKitClient.md) |
| `twilioId` | `string` |

#### Returns

[`ResponsePromise`](../classes/client.ResponsePromise.md)\<{}, `never`\>

#### Defined in

[integration/twilio/v1.js:43](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/twilio/v1.js#L43)

___

### listTwilioIntegrations

▸ **listTwilioIntegrations**(`client`, `request?`): [`ResponsePromise`](../classes/client.ResponsePromise.md)\<{}, {}\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`ChatBotKitClient`](../classes/client.ChatBotKitClient.md) |
| `request?` | [`TwilioIntegrationListRequest`](integration_twilio_v1.md#twiliointegrationlistrequest) |

#### Returns

[`ResponsePromise`](../classes/client.ResponsePromise.md)\<{}, {}\>

#### Defined in

[integration/twilio/v1.js:27](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/twilio/v1.js#L27)

___

### setupTwilioIntegration

▸ **setupTwilioIntegration**(`client`, `twilioId`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<{}\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`ChatBotKitClient`](../classes/client.ChatBotKitClient.md) |
| `twilioId` | `string` |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<{}\>

#### Defined in

[integration/twilio/v1.js:155](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/twilio/v1.js#L155)

___

### updateTwilioIntegration

▸ **updateTwilioIntegration**(`client`, `twilioId`, `request`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<{}\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`ChatBotKitClient`](../classes/client.ChatBotKitClient.md) |
| `twilioId` | `string` |
| `request` | [`TwilioIntegrationUpdateRequest`](integration_twilio_v1.md#twiliointegrationupdaterequest) |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<{}\>

#### Defined in

[integration/twilio/v1.js:111](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/twilio/v1.js#L111)
