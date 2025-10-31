[@chatbotkit/sdk](../README.md) / [Modules](../modules.md) / integration/twilio/v1

# Module: integration/twilio/v1

## Table of contents

### Type Aliases

- [ChatBotKitClient](integration_twilio_v1.md#chatbotkitclient)
- [ResponsePromise](integration_twilio_v1.md#responsepromise)
- [TwilioIntegrationCreateRequest](integration_twilio_v1.md#twiliointegrationcreaterequest)
- [TwilioIntegrationCreateRequestBody](integration_twilio_v1.md#twiliointegrationcreaterequestbody)
- [TwilioIntegrationCreateResponse](integration_twilio_v1.md#twiliointegrationcreateresponse)
- [TwilioIntegrationCreateResponseBody](integration_twilio_v1.md#twiliointegrationcreateresponsebody)
- [TwilioIntegrationDeleteRequest](integration_twilio_v1.md#twiliointegrationdeleterequest)
- [TwilioIntegrationDeleteRequestBody](integration_twilio_v1.md#twiliointegrationdeleterequestbody)
- [TwilioIntegrationDeleteResponse](integration_twilio_v1.md#twiliointegrationdeleteresponse)
- [TwilioIntegrationDeleteResponseBody](integration_twilio_v1.md#twiliointegrationdeleteresponsebody)
- [TwilioIntegrationFetchResponse](integration_twilio_v1.md#twiliointegrationfetchresponse)
- [TwilioIntegrationListRequest](integration_twilio_v1.md#twiliointegrationlistrequest)
- [TwilioIntegrationListResponse](integration_twilio_v1.md#twiliointegrationlistresponse)
- [TwilioIntegrationListStreamType](integration_twilio_v1.md#twiliointegrationliststreamtype)
- [TwilioIntegrationSetupRequest](integration_twilio_v1.md#twiliointegrationsetuprequest)
- [TwilioIntegrationSetupRequestBody](integration_twilio_v1.md#twiliointegrationsetuprequestbody)
- [TwilioIntegrationSetupResponse](integration_twilio_v1.md#twiliointegrationsetupresponse)
- [TwilioIntegrationSetupResponseBody](integration_twilio_v1.md#twiliointegrationsetupresponsebody)
- [TwilioIntegrationUpdateRequest](integration_twilio_v1.md#twiliointegrationupdaterequest)
- [TwilioIntegrationUpdateRequestBody](integration_twilio_v1.md#twiliointegrationupdaterequestbody)
- [TwilioIntegrationUpdateResponse](integration_twilio_v1.md#twiliointegrationupdateresponse)
- [TwilioIntegrationUpdateResponseBody](integration_twilio_v1.md#twiliointegrationupdateresponsebody)

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

Ƭ **TwilioIntegrationCreateRequest**\<\>: [`TwilioIntegrationCreateRequestBody`](integration_twilio_v1.md#twiliointegrationcreaterequestbody)

#### Defined in

[integration/twilio/v1.js:55](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/twilio/v1.js#L55)

___

### TwilioIntegrationCreateRequestBody

Ƭ **TwilioIntegrationCreateRequestBody**\<\>: `operations`[``"createTwilioIntegration"``][``"requestBody"``][``"content"``][``"application/json"``]

#### Defined in

[integration/twilio/v1.js:53](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/twilio/v1.js#L53)

___

### TwilioIntegrationCreateResponse

Ƭ **TwilioIntegrationCreateResponse**\<\>: [`TwilioIntegrationCreateResponseBody`](integration_twilio_v1.md#twiliointegrationcreateresponsebody)

#### Defined in

[integration/twilio/v1.js:59](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/twilio/v1.js#L59)

___

### TwilioIntegrationCreateResponseBody

Ƭ **TwilioIntegrationCreateResponseBody**\<\>: `operations`[``"createTwilioIntegration"``][``"responses"``][``"200"``][``"content"``][``"application/json"``]

#### Defined in

[integration/twilio/v1.js:57](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/twilio/v1.js#L57)

___

### TwilioIntegrationDeleteRequest

Ƭ **TwilioIntegrationDeleteRequest**\<\>: [`TwilioIntegrationDeleteRequestBody`](integration_twilio_v1.md#twiliointegrationdeleterequestbody)

#### Defined in

[integration/twilio/v1.js:110](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/twilio/v1.js#L110)

___

### TwilioIntegrationDeleteRequestBody

Ƭ **TwilioIntegrationDeleteRequestBody**\<\>: `operations`[``"deleteTwilioIntegration"``][``"requestBody"``][``"content"``][``"application/json"``]

#### Defined in

[integration/twilio/v1.js:108](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/twilio/v1.js#L108)

___

### TwilioIntegrationDeleteResponse

Ƭ **TwilioIntegrationDeleteResponse**\<\>: [`TwilioIntegrationDeleteResponseBody`](integration_twilio_v1.md#twiliointegrationdeleteresponsebody)

#### Defined in

[integration/twilio/v1.js:114](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/twilio/v1.js#L114)

___

### TwilioIntegrationDeleteResponseBody

Ƭ **TwilioIntegrationDeleteResponseBody**\<\>: `operations`[``"deleteTwilioIntegration"``][``"responses"``][``"200"``][``"content"``][``"application/json"``]

#### Defined in

[integration/twilio/v1.js:112](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/twilio/v1.js#L112)

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

### TwilioIntegrationSetupRequest

Ƭ **TwilioIntegrationSetupRequest**\<\>: [`TwilioIntegrationSetupRequestBody`](integration_twilio_v1.md#twiliointegrationsetuprequestbody)

#### Defined in

[integration/twilio/v1.js:135](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/twilio/v1.js#L135)

___

### TwilioIntegrationSetupRequestBody

Ƭ **TwilioIntegrationSetupRequestBody**\<\>: `operations`[``"setupTwilioIntegration"``][``"requestBody"``][``"content"``][``"application/json"``]

#### Defined in

[integration/twilio/v1.js:133](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/twilio/v1.js#L133)

___

### TwilioIntegrationSetupResponse

Ƭ **TwilioIntegrationSetupResponse**\<\>: [`TwilioIntegrationSetupResponseBody`](integration_twilio_v1.md#twiliointegrationsetupresponsebody)

#### Defined in

[integration/twilio/v1.js:139](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/twilio/v1.js#L139)

___

### TwilioIntegrationSetupResponseBody

Ƭ **TwilioIntegrationSetupResponseBody**\<\>: `operations`[``"setupTwilioIntegration"``][``"responses"``][``"200"``][``"content"``][``"application/json"``]

#### Defined in

[integration/twilio/v1.js:137](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/twilio/v1.js#L137)

___

### TwilioIntegrationUpdateRequest

Ƭ **TwilioIntegrationUpdateRequest**\<\>: [`TwilioIntegrationUpdateRequestBody`](integration_twilio_v1.md#twiliointegrationupdaterequestbody)

#### Defined in

[integration/twilio/v1.js:82](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/twilio/v1.js#L82)

___

### TwilioIntegrationUpdateRequestBody

Ƭ **TwilioIntegrationUpdateRequestBody**\<\>: `operations`[``"updateTwilioIntegration"``][``"requestBody"``][``"content"``][``"application/json"``]

#### Defined in

[integration/twilio/v1.js:80](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/twilio/v1.js#L80)

___

### TwilioIntegrationUpdateResponse

Ƭ **TwilioIntegrationUpdateResponse**\<\>: [`TwilioIntegrationUpdateResponseBody`](integration_twilio_v1.md#twiliointegrationupdateresponsebody)

#### Defined in

[integration/twilio/v1.js:86](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/twilio/v1.js#L86)

___

### TwilioIntegrationUpdateResponseBody

Ƭ **TwilioIntegrationUpdateResponseBody**\<\>: `operations`[``"updateTwilioIntegration"``][``"responses"``][``"200"``][``"content"``][``"application/json"``]

#### Defined in

[integration/twilio/v1.js:84](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/twilio/v1.js#L84)

## Functions

### createTwilioIntegration

▸ **createTwilioIntegration**(`client`, `request`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<{}\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`ChatBotKitClient`](../classes/client.ChatBotKitClient.md) |
| `request` | `Object` |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<{}\>

#### Defined in

[integration/twilio/v1.js:65](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/twilio/v1.js#L65)

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

[integration/twilio/v1.js:120](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/twilio/v1.js#L120)

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

[integration/twilio/v1.js:145](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/twilio/v1.js#L145)

___

### updateTwilioIntegration

▸ **updateTwilioIntegration**(`client`, `twilioId`, `request`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<{}\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`ChatBotKitClient`](../classes/client.ChatBotKitClient.md) |
| `twilioId` | `string` |
| `request` | `Object` |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<{}\>

#### Defined in

[integration/twilio/v1.js:93](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/twilio/v1.js#L93)
