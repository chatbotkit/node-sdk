[@chatbotkit/sdk](../README.md) / [Modules](../modules.md) / integration/telegram/v1

# Module: integration/telegram/v1

## Table of contents

### Type Aliases

- [ChatBotKitClient](integration_telegram_v1.md#chatbotkitclient)
- [ResponsePromise](integration_telegram_v1.md#responsepromise)
- [TelegramIntegrationCreateRequest](integration_telegram_v1.md#telegramintegrationcreaterequest)
- [TelegramIntegrationCreateResponse](integration_telegram_v1.md#telegramintegrationcreateresponse)
- [TelegramIntegrationDeleteResponse](integration_telegram_v1.md#telegramintegrationdeleteresponse)
- [TelegramIntegrationFetchResponse](integration_telegram_v1.md#telegramintegrationfetchresponse)
- [TelegramIntegrationInstance](integration_telegram_v1.md#telegramintegrationinstance)
- [TelegramIntegrationListRequest](integration_telegram_v1.md#telegramintegrationlistrequest)
- [TelegramIntegrationListResponse](integration_telegram_v1.md#telegramintegrationlistresponse)
- [TelegramIntegrationListStreamItem](integration_telegram_v1.md#telegramintegrationliststreamitem)
- [TelegramIntegrationListStreamType](integration_telegram_v1.md#telegramintegrationliststreamtype)
- [TelegramIntegrationOptions](integration_telegram_v1.md#telegramintegrationoptions)
- [TelegramIntegrationSetupResponse](integration_telegram_v1.md#telegramintegrationsetupresponse)
- [TelegramIntegrationUpdateRequest](integration_telegram_v1.md#telegramintegrationupdaterequest)
- [TelegramIntegrationUpdateResponse](integration_telegram_v1.md#telegramintegrationupdateresponse)

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

Ƭ **TelegramIntegrationCreateRequest**\<\>: [`TelegramIntegrationOptions`](integration_telegram_v1.md#telegramintegrationoptions) & \{ `model?`: [`model/v1`](model_v1.md)  }

#### Defined in

[integration/telegram/v1.js:84](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/telegram/v1.js#L84)

___

### TelegramIntegrationCreateResponse

Ƭ **TelegramIntegrationCreateResponse**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Defined in

[integration/telegram/v1.js:88](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/telegram/v1.js#L88)

___

### TelegramIntegrationDeleteResponse

Ƭ **TelegramIntegrationDeleteResponse**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Defined in

[integration/telegram/v1.js:139](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/telegram/v1.js#L139)

___

### TelegramIntegrationFetchResponse

Ƭ **TelegramIntegrationFetchResponse**\<\>: [`TelegramIntegrationInstance`](integration_telegram_v1.md#telegramintegrationinstance) & {}

#### Defined in

[integration/telegram/v1.js:65](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/telegram/v1.js#L65)

___

### TelegramIntegrationInstance

Ƭ **TelegramIntegrationInstance**\<\>: [`TelegramIntegrationOptions`](integration_telegram_v1.md#telegramintegrationoptions) & \{ `createdAt`: `number` ; `id`: `string` ; `updatedAt`: `number`  }

#### Defined in

[integration/telegram/v1.js:28](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/telegram/v1.js#L28)

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

[integration/telegram/v1.js:37](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/telegram/v1.js#L37)

___

### TelegramIntegrationListResponse

Ƭ **TelegramIntegrationListResponse**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `items` | [`TelegramIntegrationInstance`](integration_telegram_v1.md#telegramintegrationinstance)[] |

#### Defined in

[integration/telegram/v1.js:39](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/telegram/v1.js#L39)

___

### TelegramIntegrationListStreamItem

Ƭ **TelegramIntegrationListStreamItem**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `data` | [`TelegramIntegrationInstance`](integration_telegram_v1.md#telegramintegrationinstance) |
| `type` | ``"item"`` |

#### Defined in

[integration/telegram/v1.js:44](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/telegram/v1.js#L44)

___

### TelegramIntegrationListStreamType

Ƭ **TelegramIntegrationListStreamType**\<\>: [`TelegramIntegrationListStreamItem`](integration_telegram_v1.md#telegramintegrationliststreamitem)

#### Defined in

[integration/telegram/v1.js:46](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/telegram/v1.js#L46)

___

### TelegramIntegrationOptions

Ƭ **TelegramIntegrationOptions**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `attachments?` | `boolean` |
| `blueprintId?` | `string` |
| `botId?` | `string` |
| `botToken?` | `string` |
| `contactCollection?` | `boolean` |
| `description?` | `string` |
| `meta?` | [`Record`]( https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type )\<`string`, `any`\> |
| `name?` | `string` |
| `sessionDuration?` | `number` |

#### Defined in

[integration/telegram/v1.js:22](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/telegram/v1.js#L22)

___

### TelegramIntegrationSetupResponse

Ƭ **TelegramIntegrationSetupResponse**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Defined in

[integration/telegram/v1.js:160](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/telegram/v1.js#L160)

___

### TelegramIntegrationUpdateRequest

Ƭ **TelegramIntegrationUpdateRequest**\<\>: [`TelegramIntegrationOptions`](integration_telegram_v1.md#telegramintegrationoptions) & \{ `model?`: [`model/v1`](model_v1.md)  }

#### Defined in

[integration/telegram/v1.js:111](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/telegram/v1.js#L111)

___

### TelegramIntegrationUpdateResponse

Ƭ **TelegramIntegrationUpdateResponse**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Defined in

[integration/telegram/v1.js:115](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/telegram/v1.js#L115)

## Functions

### createTelegramIntegration

▸ **createTelegramIntegration**(`client`, `request`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<[`TelegramIntegrationCreateResponse`](integration_telegram_v1.md#telegramintegrationcreateresponse)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`ChatBotKitClient`](../classes/client.ChatBotKitClient.md) |
| `request` | [`TelegramIntegrationCreateRequest`](integration_telegram_v1.md#telegramintegrationcreaterequest) |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<[`TelegramIntegrationCreateResponse`](integration_telegram_v1.md#telegramintegrationcreateresponse)\>

#### Defined in

[integration/telegram/v1.js:94](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/telegram/v1.js#L94)

___

### deleteTelegramIntegration

▸ **deleteTelegramIntegration**(`client`, `telegramId`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<[`TelegramIntegrationDeleteResponse`](integration_telegram_v1.md#telegramintegrationdeleteresponse)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`ChatBotKitClient`](../classes/client.ChatBotKitClient.md) |
| `telegramId` | `string` |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<[`TelegramIntegrationDeleteResponse`](integration_telegram_v1.md#telegramintegrationdeleteresponse)\>

#### Defined in

[integration/telegram/v1.js:145](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/telegram/v1.js#L145)

___

### fetchTelegramIntegration

▸ **fetchTelegramIntegration**(`client`, `telegramId`): [`ResponsePromise`](../classes/client.ResponsePromise.md)\<[`TelegramIntegrationFetchResponse`](integration_telegram_v1.md#telegramintegrationfetchresponse), `never`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`ChatBotKitClient`](../classes/client.ChatBotKitClient.md) |
| `telegramId` | `string` |

#### Returns

[`ResponsePromise`](../classes/client.ResponsePromise.md)\<[`TelegramIntegrationFetchResponse`](integration_telegram_v1.md#telegramintegrationfetchresponse), `never`\>

#### Defined in

[integration/telegram/v1.js:71](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/telegram/v1.js#L71)

___

### listTelegramIntegrations

▸ **listTelegramIntegrations**(`client`, `request?`): [`ResponsePromise`](../classes/client.ResponsePromise.md)\<[`TelegramIntegrationListResponse`](integration_telegram_v1.md#telegramintegrationlistresponse), [`TelegramIntegrationListStreamItem`](integration_telegram_v1.md#telegramintegrationliststreamitem)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`ChatBotKitClient`](../classes/client.ChatBotKitClient.md) |
| `request?` | [`TelegramIntegrationListRequest`](integration_telegram_v1.md#telegramintegrationlistrequest) |

#### Returns

[`ResponsePromise`](../classes/client.ResponsePromise.md)\<[`TelegramIntegrationListResponse`](integration_telegram_v1.md#telegramintegrationlistresponse), [`TelegramIntegrationListStreamItem`](integration_telegram_v1.md#telegramintegrationliststreamitem)\>

#### Defined in

[integration/telegram/v1.js:52](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/telegram/v1.js#L52)

___

### setupTelegramIntegration

▸ **setupTelegramIntegration**(`client`, `telegramId`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<[`TelegramIntegrationSetupResponse`](integration_telegram_v1.md#telegramintegrationsetupresponse)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`ChatBotKitClient`](../classes/client.ChatBotKitClient.md) |
| `telegramId` | `string` |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<[`TelegramIntegrationSetupResponse`](integration_telegram_v1.md#telegramintegrationsetupresponse)\>

#### Defined in

[integration/telegram/v1.js:166](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/telegram/v1.js#L166)

___

### updateTelegramIntegration

▸ **updateTelegramIntegration**(`client`, `telegramId`, `request`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<[`TelegramIntegrationUpdateResponse`](integration_telegram_v1.md#telegramintegrationupdateresponse)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`ChatBotKitClient`](../classes/client.ChatBotKitClient.md) |
| `telegramId` | `string` |
| `request` | [`TelegramIntegrationUpdateRequest`](integration_telegram_v1.md#telegramintegrationupdaterequest) |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<[`TelegramIntegrationUpdateResponse`](integration_telegram_v1.md#telegramintegrationupdateresponse)\>

#### Defined in

[integration/telegram/v1.js:122](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/telegram/v1.js#L122)
