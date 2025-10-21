[@chatbotkit/sdk](../README.md) / [Modules](../modules.md) / integration/trigger/v1

# Module: integration/trigger/v1

## Table of contents

### Type Aliases

- [ChatBotKitClient](integration_trigger_v1.md#chatbotkitclient)
- [ResponsePromise](integration_trigger_v1.md#responsepromise)
- [TriggerIntegrationCreateRequest](integration_trigger_v1.md#triggerintegrationcreaterequest)
- [TriggerIntegrationCreateRequestBody](integration_trigger_v1.md#triggerintegrationcreaterequestbody)
- [TriggerIntegrationCreateResponse](integration_trigger_v1.md#triggerintegrationcreateresponse)
- [TriggerIntegrationCreateResponseBody](integration_trigger_v1.md#triggerintegrationcreateresponsebody)
- [TriggerIntegrationDeleteRequest](integration_trigger_v1.md#triggerintegrationdeleterequest)
- [TriggerIntegrationDeleteRequestBody](integration_trigger_v1.md#triggerintegrationdeleterequestbody)
- [TriggerIntegrationDeleteResponse](integration_trigger_v1.md#triggerintegrationdeleteresponse)
- [TriggerIntegrationDeleteResponseBody](integration_trigger_v1.md#triggerintegrationdeleteresponsebody)
- [TriggerIntegrationFetchResponse](integration_trigger_v1.md#triggerintegrationfetchresponse)
- [TriggerIntegrationInvokeRequest](integration_trigger_v1.md#triggerintegrationinvokerequest)
- [TriggerIntegrationInvokeRequestBody](integration_trigger_v1.md#triggerintegrationinvokerequestbody)
- [TriggerIntegrationInvokeResponse](integration_trigger_v1.md#triggerintegrationinvokeresponse)
- [TriggerIntegrationInvokeResponseBody](integration_trigger_v1.md#triggerintegrationinvokeresponsebody)
- [TriggerIntegrationListRequest](integration_trigger_v1.md#triggerintegrationlistrequest)
- [TriggerIntegrationListResponse](integration_trigger_v1.md#triggerintegrationlistresponse)
- [TriggerIntegrationListStreamType](integration_trigger_v1.md#triggerintegrationliststreamtype)
- [TriggerIntegrationSetupRequest](integration_trigger_v1.md#triggerintegrationsetuprequest)
- [TriggerIntegrationSetupRequestBody](integration_trigger_v1.md#triggerintegrationsetuprequestbody)
- [TriggerIntegrationSetupResponse](integration_trigger_v1.md#triggerintegrationsetupresponse)
- [TriggerIntegrationSetupResponseBody](integration_trigger_v1.md#triggerintegrationsetupresponsebody)
- [TriggerIntegrationUpdateRequest](integration_trigger_v1.md#triggerintegrationupdaterequest)
- [TriggerIntegrationUpdateRequestBody](integration_trigger_v1.md#triggerintegrationupdaterequestbody)
- [TriggerIntegrationUpdateResponse](integration_trigger_v1.md#triggerintegrationupdateresponse)
- [TriggerIntegrationUpdateResponseBody](integration_trigger_v1.md#triggerintegrationupdateresponsebody)

### Functions

- [createTriggerIntegration](integration_trigger_v1.md#createtriggerintegration)
- [deleteTriggerIntegration](integration_trigger_v1.md#deletetriggerintegration)
- [fetchTriggerIntegration](integration_trigger_v1.md#fetchtriggerintegration)
- [invokeTriggerIntegration](integration_trigger_v1.md#invoketriggerintegration)
- [listTriggerIntegrations](integration_trigger_v1.md#listtriggerintegrations)
- [setupTriggerIntegration](integration_trigger_v1.md#setuptriggerintegration)
- [updateTriggerIntegration](integration_trigger_v1.md#updatetriggerintegration)

## Type Aliases

### ChatBotKitClient

Ƭ **ChatBotKitClient**\<\>: [`client`](client.md)

#### Defined in

[integration/trigger/v1.js:2](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/trigger/v1.js#L2)

___

### ResponsePromise

Ƭ **ResponsePromise**\<`T`, `U`\>: [`client`](client.md)

#### Type parameters

| Name |
| :------ |
| `T` |
| `U` |

#### Defined in

[integration/trigger/v1.js:8](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/trigger/v1.js#L8)

___

### TriggerIntegrationCreateRequest

Ƭ **TriggerIntegrationCreateRequest**\<\>: [`TriggerIntegrationCreateRequestBody`](integration_trigger_v1.md#triggerintegrationcreaterequestbody)

#### Defined in

[integration/trigger/v1.js:55](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/trigger/v1.js#L55)

___

### TriggerIntegrationCreateRequestBody

Ƭ **TriggerIntegrationCreateRequestBody**\<\>: `operations`[``"createTriggerIntegration"``][``"requestBody"``][``"content"``][``"application/json"``]

#### Defined in

[integration/trigger/v1.js:53](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/trigger/v1.js#L53)

___

### TriggerIntegrationCreateResponse

Ƭ **TriggerIntegrationCreateResponse**\<\>: [`TriggerIntegrationCreateResponseBody`](integration_trigger_v1.md#triggerintegrationcreateresponsebody)

#### Defined in

[integration/trigger/v1.js:59](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/trigger/v1.js#L59)

___

### TriggerIntegrationCreateResponseBody

Ƭ **TriggerIntegrationCreateResponseBody**\<\>: `operations`[``"createTriggerIntegration"``][``"responses"``][``"200"``][``"content"``][``"application/json"``]

#### Defined in

[integration/trigger/v1.js:57](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/trigger/v1.js#L57)

___

### TriggerIntegrationDeleteRequest

Ƭ **TriggerIntegrationDeleteRequest**\<\>: [`TriggerIntegrationDeleteRequestBody`](integration_trigger_v1.md#triggerintegrationdeleterequestbody)

#### Defined in

[integration/trigger/v1.js:110](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/trigger/v1.js#L110)

___

### TriggerIntegrationDeleteRequestBody

Ƭ **TriggerIntegrationDeleteRequestBody**\<\>: `operations`[``"deleteTriggerIntegration"``][``"requestBody"``][``"content"``][``"application/json"``]

#### Defined in

[integration/trigger/v1.js:108](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/trigger/v1.js#L108)

___

### TriggerIntegrationDeleteResponse

Ƭ **TriggerIntegrationDeleteResponse**\<\>: [`TriggerIntegrationDeleteResponseBody`](integration_trigger_v1.md#triggerintegrationdeleteresponsebody)

#### Defined in

[integration/trigger/v1.js:114](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/trigger/v1.js#L114)

___

### TriggerIntegrationDeleteResponseBody

Ƭ **TriggerIntegrationDeleteResponseBody**\<\>: `operations`[``"deleteTriggerIntegration"``][``"responses"``][``"200"``][``"content"``][``"application/json"``]

#### Defined in

[integration/trigger/v1.js:112](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/trigger/v1.js#L112)

___

### TriggerIntegrationFetchResponse

Ƭ **TriggerIntegrationFetchResponse**\<\>: `operations`[``"fetchTriggerIntegration"``][``"responses"``][``"200"``][``"content"``][``"application/json"``]

#### Defined in

[integration/trigger/v1.js:37](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/trigger/v1.js#L37)

___

### TriggerIntegrationInvokeRequest

Ƭ **TriggerIntegrationInvokeRequest**\<\>: [`TriggerIntegrationInvokeRequestBody`](integration_trigger_v1.md#triggerintegrationinvokerequestbody)

#### Defined in

[integration/trigger/v1.js:160](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/trigger/v1.js#L160)

___

### TriggerIntegrationInvokeRequestBody

Ƭ **TriggerIntegrationInvokeRequestBody**\<\>: `operations`[``"invokeTriggerIntegration"``][``"requestBody"``][``"content"``][``"application/json"``]

#### Defined in

[integration/trigger/v1.js:158](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/trigger/v1.js#L158)

___

### TriggerIntegrationInvokeResponse

Ƭ **TriggerIntegrationInvokeResponse**\<\>: [`TriggerIntegrationInvokeResponseBody`](integration_trigger_v1.md#triggerintegrationinvokeresponsebody)

#### Defined in

[integration/trigger/v1.js:164](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/trigger/v1.js#L164)

___

### TriggerIntegrationInvokeResponseBody

Ƭ **TriggerIntegrationInvokeResponseBody**\<\>: `operations`[``"invokeTriggerIntegration"``][``"responses"``][``"200"``][``"content"``][``"application/json"``]

#### Defined in

[integration/trigger/v1.js:162](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/trigger/v1.js#L162)

___

### TriggerIntegrationListRequest

Ƭ **TriggerIntegrationListRequest**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `cursor?` | `string` |
| `meta?` | [`Record`]( https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type )\<`string`, `string`\> |
| `order?` | ``"desc"`` \| ``"asc"`` |
| `take?` | `number` |

#### Defined in

[integration/trigger/v1.js:17](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/trigger/v1.js#L17)

___

### TriggerIntegrationListResponse

Ƭ **TriggerIntegrationListResponse**\<\>: `operations`[``"listTriggerIntegrations"``][``"responses"``][``"200"``][``"content"``][``"application/json"``]

#### Defined in

[integration/trigger/v1.js:19](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/trigger/v1.js#L19)

___

### TriggerIntegrationListStreamType

Ƭ **TriggerIntegrationListStreamType**\<\>: `operations`[``"listTriggerIntegrations"``][``"responses"``][``"200"``][``"content"``][``"application/jsonl"``]

#### Defined in

[integration/trigger/v1.js:21](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/trigger/v1.js#L21)

___

### TriggerIntegrationSetupRequest

Ƭ **TriggerIntegrationSetupRequest**\<\>: [`TriggerIntegrationSetupRequestBody`](integration_trigger_v1.md#triggerintegrationsetuprequestbody)

#### Defined in

[integration/trigger/v1.js:135](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/trigger/v1.js#L135)

___

### TriggerIntegrationSetupRequestBody

Ƭ **TriggerIntegrationSetupRequestBody**\<\>: `operations`[``"setupTriggerIntegration"``][``"requestBody"``][``"content"``][``"application/json"``]

#### Defined in

[integration/trigger/v1.js:133](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/trigger/v1.js#L133)

___

### TriggerIntegrationSetupResponse

Ƭ **TriggerIntegrationSetupResponse**\<\>: [`TriggerIntegrationSetupResponseBody`](integration_trigger_v1.md#triggerintegrationsetupresponsebody)

#### Defined in

[integration/trigger/v1.js:139](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/trigger/v1.js#L139)

___

### TriggerIntegrationSetupResponseBody

Ƭ **TriggerIntegrationSetupResponseBody**\<\>: `operations`[``"setupTriggerIntegration"``][``"responses"``][``"200"``][``"content"``][``"application/json"``]

#### Defined in

[integration/trigger/v1.js:137](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/trigger/v1.js#L137)

___

### TriggerIntegrationUpdateRequest

Ƭ **TriggerIntegrationUpdateRequest**\<\>: [`TriggerIntegrationUpdateRequestBody`](integration_trigger_v1.md#triggerintegrationupdaterequestbody)

#### Defined in

[integration/trigger/v1.js:82](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/trigger/v1.js#L82)

___

### TriggerIntegrationUpdateRequestBody

Ƭ **TriggerIntegrationUpdateRequestBody**\<\>: `operations`[``"updateTriggerIntegration"``][``"requestBody"``][``"content"``][``"application/json"``]

#### Defined in

[integration/trigger/v1.js:80](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/trigger/v1.js#L80)

___

### TriggerIntegrationUpdateResponse

Ƭ **TriggerIntegrationUpdateResponse**\<\>: [`TriggerIntegrationUpdateResponseBody`](integration_trigger_v1.md#triggerintegrationupdateresponsebody)

#### Defined in

[integration/trigger/v1.js:86](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/trigger/v1.js#L86)

___

### TriggerIntegrationUpdateResponseBody

Ƭ **TriggerIntegrationUpdateResponseBody**\<\>: `operations`[``"updateTriggerIntegration"``][``"responses"``][``"200"``][``"content"``][``"application/json"``]

#### Defined in

[integration/trigger/v1.js:84](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/trigger/v1.js#L84)

## Functions

### createTriggerIntegration

▸ **createTriggerIntegration**(`client`, `request`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<{}\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`ChatBotKitClient`](../classes/client.ChatBotKitClient.md) |
| `request` | `Object` |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<{}\>

#### Defined in

[integration/trigger/v1.js:65](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/trigger/v1.js#L65)

___

### deleteTriggerIntegration

▸ **deleteTriggerIntegration**(`client`, `triggerId`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<{}\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`ChatBotKitClient`](../classes/client.ChatBotKitClient.md) |
| `triggerId` | `string` |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<{}\>

#### Defined in

[integration/trigger/v1.js:120](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/trigger/v1.js#L120)

___

### fetchTriggerIntegration

▸ **fetchTriggerIntegration**(`client`, `triggerId`): [`ResponsePromise`](../classes/client.ResponsePromise.md)\<{}, `never`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`ChatBotKitClient`](../classes/client.ChatBotKitClient.md) |
| `triggerId` | `string` |

#### Returns

[`ResponsePromise`](../classes/client.ResponsePromise.md)\<{}, `never`\>

#### Defined in

[integration/trigger/v1.js:43](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/trigger/v1.js#L43)

___

### invokeTriggerIntegration

▸ **invokeTriggerIntegration**(`client`, `triggerId`, `request`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<{}\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`ChatBotKitClient`](../classes/client.ChatBotKitClient.md) |
| `triggerId` | `string` |
| `request` | [`Record`]( https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type )\<`string`, `never`\> |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<{}\>

#### Defined in

[integration/trigger/v1.js:171](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/trigger/v1.js#L171)

___

### listTriggerIntegrations

▸ **listTriggerIntegrations**(`client`, `request?`): [`ResponsePromise`](../classes/client.ResponsePromise.md)\<{}, {}\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`ChatBotKitClient`](../classes/client.ChatBotKitClient.md) |
| `request?` | [`TriggerIntegrationListRequest`](integration_trigger_v1.md#triggerintegrationlistrequest) |

#### Returns

[`ResponsePromise`](../classes/client.ResponsePromise.md)\<{}, {}\>

#### Defined in

[integration/trigger/v1.js:27](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/trigger/v1.js#L27)

___

### setupTriggerIntegration

▸ **setupTriggerIntegration**(`client`, `triggerId`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<{}\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`ChatBotKitClient`](../classes/client.ChatBotKitClient.md) |
| `triggerId` | `string` |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<{}\>

#### Defined in

[integration/trigger/v1.js:145](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/trigger/v1.js#L145)

___

### updateTriggerIntegration

▸ **updateTriggerIntegration**(`client`, `triggerId`, `request`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<{}\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`ChatBotKitClient`](../classes/client.ChatBotKitClient.md) |
| `triggerId` | `string` |
| `request` | `Object` |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<{}\>

#### Defined in

[integration/trigger/v1.js:93](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/trigger/v1.js#L93)
