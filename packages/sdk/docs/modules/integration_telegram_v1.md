[@chatbotkit/sdk](../README.md) / [Modules](../modules.md) / integration/telegram/v1

# Module: integration/telegram/v1

## Table of contents

### Type Aliases

- [ChatBotKitClient](integration_telegram_v1.md#chatbotkitclient)
- [ResponsePromise](integration_telegram_v1.md#responsepromise)
- [TelegramIntegrationCreateRequest](integration_telegram_v1.md#telegramintegrationcreaterequest)
- [TelegramIntegrationCreateRequestBody](integration_telegram_v1.md#telegramintegrationcreaterequestbody)
- [TelegramIntegrationCreateResponse](integration_telegram_v1.md#telegramintegrationcreateresponse)
- [TelegramIntegrationCreateResponseBody](integration_telegram_v1.md#telegramintegrationcreateresponsebody)
- [TelegramIntegrationDeleteRequest](integration_telegram_v1.md#telegramintegrationdeleterequest)
- [TelegramIntegrationDeleteRequestBody](integration_telegram_v1.md#telegramintegrationdeleterequestbody)
- [TelegramIntegrationDeleteResponse](integration_telegram_v1.md#telegramintegrationdeleteresponse)
- [TelegramIntegrationDeleteResponseBody](integration_telegram_v1.md#telegramintegrationdeleteresponsebody)
- [TelegramIntegrationFetchResponse](integration_telegram_v1.md#telegramintegrationfetchresponse)
- [TelegramIntegrationListRequest](integration_telegram_v1.md#telegramintegrationlistrequest)
- [TelegramIntegrationListResponse](integration_telegram_v1.md#telegramintegrationlistresponse)
- [TelegramIntegrationListStreamType](integration_telegram_v1.md#telegramintegrationliststreamtype)
- [TelegramIntegrationSetupRequest](integration_telegram_v1.md#telegramintegrationsetuprequest)
- [TelegramIntegrationSetupRequestBody](integration_telegram_v1.md#telegramintegrationsetuprequestbody)
- [TelegramIntegrationSetupResponse](integration_telegram_v1.md#telegramintegrationsetupresponse)
- [TelegramIntegrationSetupResponseBody](integration_telegram_v1.md#telegramintegrationsetupresponsebody)
- [TelegramIntegrationUpdateRequest](integration_telegram_v1.md#telegramintegrationupdaterequest)
- [TelegramIntegrationUpdateRequestBody](integration_telegram_v1.md#telegramintegrationupdaterequestbody)
- [TelegramIntegrationUpdateResponse](integration_telegram_v1.md#telegramintegrationupdateresponse)
- [TelegramIntegrationUpdateResponseBody](integration_telegram_v1.md#telegramintegrationupdateresponsebody)

### Functions

- [createTelegramIntegration](integration_telegram_v1.md#createtelegramintegration)
- [deleteTelegramIntegration](integration_telegram_v1.md#deletetelegramintegration)
- [fetchTelegramIntegration](integration_telegram_v1.md#fetchtelegramintegration)
- [listTelegramIntegrations](integration_telegram_v1.md#listtelegramintegrations)
- [setupTelegramIntegration](integration_telegram_v1.md#setuptelegramintegration)
- [updateTelegramIntegration](integration_telegram_v1.md#updatetelegramintegration)

## Type Aliases

### ChatBotKitClient

Ƭ **ChatBotKitClient**\<\>: [`client`](client.md)

#### Defined in

[integration/telegram/v1.js:2](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/telegram/v1.js#L2)

___

### ResponsePromise

Ƭ **ResponsePromise**\<`T`, `U`\>: [`client`](client.md)

#### Type parameters

| Name |
| :------ |
| `T` |
| `U` |

#### Defined in

[integration/telegram/v1.js:8](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/telegram/v1.js#L8)

___

### TelegramIntegrationCreateRequest

Ƭ **TelegramIntegrationCreateRequest**\<\>: [`TelegramIntegrationCreateRequestBody`](integration_telegram_v1.md#telegramintegrationcreaterequestbody)

#### Defined in

[integration/telegram/v1.js:55](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/telegram/v1.js#L55)

___

### TelegramIntegrationCreateRequestBody

Ƭ **TelegramIntegrationCreateRequestBody**\<\>: `operations`[``"createTelegramIntegration"``][``"requestBody"``][``"content"``][``"application/json"``]

#### Defined in

[integration/telegram/v1.js:53](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/telegram/v1.js#L53)

___

### TelegramIntegrationCreateResponse

Ƭ **TelegramIntegrationCreateResponse**\<\>: [`TelegramIntegrationCreateResponseBody`](integration_telegram_v1.md#telegramintegrationcreateresponsebody)

#### Defined in

[integration/telegram/v1.js:59](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/telegram/v1.js#L59)

___

### TelegramIntegrationCreateResponseBody

Ƭ **TelegramIntegrationCreateResponseBody**\<\>: `operations`[``"createTelegramIntegration"``][``"responses"``][``"200"``][``"content"``][``"application/json"``]

#### Defined in

[integration/telegram/v1.js:57](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/telegram/v1.js#L57)

___

### TelegramIntegrationDeleteRequest

Ƭ **TelegramIntegrationDeleteRequest**\<\>: [`TelegramIntegrationDeleteRequestBody`](integration_telegram_v1.md#telegramintegrationdeleterequestbody)

#### Defined in

[integration/telegram/v1.js:110](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/telegram/v1.js#L110)

___

### TelegramIntegrationDeleteRequestBody

Ƭ **TelegramIntegrationDeleteRequestBody**\<\>: `operations`[``"deleteTelegramIntegration"``][``"requestBody"``][``"content"``][``"application/json"``]

#### Defined in

[integration/telegram/v1.js:108](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/telegram/v1.js#L108)

___

### TelegramIntegrationDeleteResponse

Ƭ **TelegramIntegrationDeleteResponse**\<\>: [`TelegramIntegrationDeleteResponseBody`](integration_telegram_v1.md#telegramintegrationdeleteresponsebody)

#### Defined in

[integration/telegram/v1.js:114](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/telegram/v1.js#L114)

___

### TelegramIntegrationDeleteResponseBody

Ƭ **TelegramIntegrationDeleteResponseBody**\<\>: `operations`[``"deleteTelegramIntegration"``][``"responses"``][``"200"``][``"content"``][``"application/json"``]

#### Defined in

[integration/telegram/v1.js:112](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/telegram/v1.js#L112)

___

### TelegramIntegrationFetchResponse

Ƭ **TelegramIntegrationFetchResponse**\<\>: `operations`[``"fetchTelegramIntegration"``][``"responses"``][``"200"``][``"content"``][``"application/json"``]

#### Defined in

[integration/telegram/v1.js:37](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/telegram/v1.js#L37)

___

### TelegramIntegrationListRequest

Ƭ **TelegramIntegrationListRequest**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `cursor?` | `string` |
| `meta?` | [`Record`]( https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type )\<`string`, `string`\> |
| `order?` | ``"desc"`` \| ``"asc"`` |
| `take?` | `number` |

#### Defined in

[integration/telegram/v1.js:17](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/telegram/v1.js#L17)

___

### TelegramIntegrationListResponse

Ƭ **TelegramIntegrationListResponse**\<\>: `operations`[``"listTelegramIntegrations"``][``"responses"``][``"200"``][``"content"``][``"application/json"``]

#### Defined in

[integration/telegram/v1.js:19](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/telegram/v1.js#L19)

___

### TelegramIntegrationListStreamType

Ƭ **TelegramIntegrationListStreamType**\<\>: `operations`[``"listTelegramIntegrations"``][``"responses"``][``"200"``][``"content"``][``"application/jsonl"``]

#### Defined in

[integration/telegram/v1.js:21](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/telegram/v1.js#L21)

___

### TelegramIntegrationSetupRequest

Ƭ **TelegramIntegrationSetupRequest**\<\>: [`TelegramIntegrationSetupRequestBody`](integration_telegram_v1.md#telegramintegrationsetuprequestbody)

#### Defined in

[integration/telegram/v1.js:135](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/telegram/v1.js#L135)

___

### TelegramIntegrationSetupRequestBody

Ƭ **TelegramIntegrationSetupRequestBody**\<\>: `operations`[``"setupTelegramIntegration"``][``"requestBody"``][``"content"``][``"application/json"``]

#### Defined in

[integration/telegram/v1.js:133](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/telegram/v1.js#L133)

___

### TelegramIntegrationSetupResponse

Ƭ **TelegramIntegrationSetupResponse**\<\>: [`TelegramIntegrationSetupResponseBody`](integration_telegram_v1.md#telegramintegrationsetupresponsebody)

#### Defined in

[integration/telegram/v1.js:139](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/telegram/v1.js#L139)

___

### TelegramIntegrationSetupResponseBody

Ƭ **TelegramIntegrationSetupResponseBody**\<\>: `operations`[``"setupTelegramIntegration"``][``"responses"``][``"200"``][``"content"``][``"application/json"``]

#### Defined in

[integration/telegram/v1.js:137](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/telegram/v1.js#L137)

___

### TelegramIntegrationUpdateRequest

Ƭ **TelegramIntegrationUpdateRequest**\<\>: [`TelegramIntegrationUpdateRequestBody`](integration_telegram_v1.md#telegramintegrationupdaterequestbody)

#### Defined in

[integration/telegram/v1.js:82](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/telegram/v1.js#L82)

___

### TelegramIntegrationUpdateRequestBody

Ƭ **TelegramIntegrationUpdateRequestBody**\<\>: `operations`[``"updateTelegramIntegration"``][``"requestBody"``][``"content"``][``"application/json"``]

#### Defined in

[integration/telegram/v1.js:80](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/telegram/v1.js#L80)

___

### TelegramIntegrationUpdateResponse

Ƭ **TelegramIntegrationUpdateResponse**\<\>: [`TelegramIntegrationUpdateResponseBody`](integration_telegram_v1.md#telegramintegrationupdateresponsebody)

#### Defined in

[integration/telegram/v1.js:86](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/telegram/v1.js#L86)

___

### TelegramIntegrationUpdateResponseBody

Ƭ **TelegramIntegrationUpdateResponseBody**\<\>: `operations`[``"updateTelegramIntegration"``][``"responses"``][``"200"``][``"content"``][``"application/json"``]

#### Defined in

[integration/telegram/v1.js:84](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/telegram/v1.js#L84)

## Functions

### createTelegramIntegration

▸ **createTelegramIntegration**(`client`, `request`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<{}\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`ChatBotKitClient`](../classes/client.ChatBotKitClient.md) |
| `request` | `Object` |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<{}\>

#### Defined in

[integration/telegram/v1.js:65](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/telegram/v1.js#L65)

___

### deleteTelegramIntegration

▸ **deleteTelegramIntegration**(`client`, `telegramId`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<{}\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`ChatBotKitClient`](../classes/client.ChatBotKitClient.md) |
| `telegramId` | `string` |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<{}\>

#### Defined in

[integration/telegram/v1.js:120](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/telegram/v1.js#L120)

___

### fetchTelegramIntegration

▸ **fetchTelegramIntegration**(`client`, `telegramId`): [`ResponsePromise`](../classes/client.ResponsePromise.md)\<{}, `never`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`ChatBotKitClient`](../classes/client.ChatBotKitClient.md) |
| `telegramId` | `string` |

#### Returns

[`ResponsePromise`](../classes/client.ResponsePromise.md)\<{}, `never`\>

#### Defined in

[integration/telegram/v1.js:43](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/telegram/v1.js#L43)

___

### listTelegramIntegrations

▸ **listTelegramIntegrations**(`client`, `request?`): [`ResponsePromise`](../classes/client.ResponsePromise.md)\<{}, {}\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`ChatBotKitClient`](../classes/client.ChatBotKitClient.md) |
| `request?` | [`TelegramIntegrationListRequest`](integration_telegram_v1.md#telegramintegrationlistrequest) |

#### Returns

[`ResponsePromise`](../classes/client.ResponsePromise.md)\<{}, {}\>

#### Defined in

[integration/telegram/v1.js:27](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/telegram/v1.js#L27)

___

### setupTelegramIntegration

▸ **setupTelegramIntegration**(`client`, `telegramId`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<{}\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`ChatBotKitClient`](../classes/client.ChatBotKitClient.md) |
| `telegramId` | `string` |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<{}\>

#### Defined in

[integration/telegram/v1.js:145](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/telegram/v1.js#L145)

___

### updateTelegramIntegration

▸ **updateTelegramIntegration**(`client`, `telegramId`, `request`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<{}\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`ChatBotKitClient`](../classes/client.ChatBotKitClient.md) |
| `telegramId` | `string` |
| `request` | `Object` |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<{}\>

#### Defined in

[integration/telegram/v1.js:93](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/telegram/v1.js#L93)
