[@chatbotkit/sdk](../README.md) / [Modules](../modules.md) / integration/telegram/v1

# Module: integration/telegram/v1

## Table of contents

### Type Aliases

- [BotConfig](integration_telegram_v1.md#botconfig)
- [BotRef](integration_telegram_v1.md#botref)
- [BotRefOrConfig](integration_telegram_v1.md#botreforconfig)
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

### BotConfig

Ƭ **BotConfig**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `backstory?` | `string` |
| `datasetId?` | `string` |
| `model?` | `string` |
| `moderation?` | `boolean` |
| `privacy?` | `boolean` |
| `skillsetId?` | `string` |

#### Defined in

[integration/telegram/v1.js:25](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/telegram/v1.js#L25)

___

### BotRef

Ƭ **BotRef**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `botId?` | `string` |

#### Defined in

[integration/telegram/v1.js:16](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/telegram/v1.js#L16)

___

### BotRefOrConfig

Ƭ **BotRefOrConfig**\<\>: [`BotRef`](integration_telegram_v1.md#botref) \| [`BotConfig`](integration_telegram_v1.md#botconfig)

#### Defined in

[integration/telegram/v1.js:27](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/telegram/v1.js#L27)

___

### ChatBotKitClient

Ƭ **ChatBotKitClient**\<\>: [`client`](client.md)

#### Defined in

[integration/telegram/v1.js:4](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/telegram/v1.js#L4)

___

### ResponsePromise

Ƭ **ResponsePromise**\<`T`, `U`\>: [`client`](client.md)

#### Type parameters

| Name |
| :------ |
| `T` |
| `U` |

#### Defined in

[integration/telegram/v1.js:10](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/telegram/v1.js#L10)

___

### TelegramIntegrationCreateRequest

Ƭ **TelegramIntegrationCreateRequest**\<\>: [`TelegramIntegrationOptions`](integration_telegram_v1.md#telegramintegrationoptions) & \{ `model?`: [`model/v1`](model_v1.md)  }

#### Defined in

[integration/telegram/v1.js:91](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/telegram/v1.js#L91)

___

### TelegramIntegrationCreateResponse

Ƭ **TelegramIntegrationCreateResponse**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Defined in

[integration/telegram/v1.js:95](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/telegram/v1.js#L95)

___

### TelegramIntegrationDeleteResponse

Ƭ **TelegramIntegrationDeleteResponse**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Defined in

[integration/telegram/v1.js:150](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/telegram/v1.js#L150)

___

### TelegramIntegrationFetchResponse

Ƭ **TelegramIntegrationFetchResponse**\<\>: [`TelegramIntegrationInstance`](integration_telegram_v1.md#telegramintegrationinstance) & {}

#### Defined in

[integration/telegram/v1.js:73](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/telegram/v1.js#L73)

___

### TelegramIntegrationInstance

Ƭ **TelegramIntegrationInstance**\<\>: [`TelegramIntegrationOptions`](integration_telegram_v1.md#telegramintegrationoptions) & \{ `createdAt`: `number` ; `id`: `string` ; `updatedAt`: `number`  }

#### Defined in

[integration/telegram/v1.js:41](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/telegram/v1.js#L41)

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

[integration/telegram/v1.js:45](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/telegram/v1.js#L45)

___

### TelegramIntegrationListResponse

Ƭ **TelegramIntegrationListResponse**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `items` | [`TelegramIntegrationInstance`](integration_telegram_v1.md#telegramintegrationinstance)[] |

#### Defined in

[integration/telegram/v1.js:47](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/telegram/v1.js#L47)

___

### TelegramIntegrationListStreamItem

Ƭ **TelegramIntegrationListStreamItem**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `data` | [`TelegramIntegrationInstance`](integration_telegram_v1.md#telegramintegrationinstance) |
| `type` | ``"item"`` |

#### Defined in

[integration/telegram/v1.js:52](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/telegram/v1.js#L52)

___

### TelegramIntegrationListStreamType

Ƭ **TelegramIntegrationListStreamType**\<\>: [`TelegramIntegrationListStreamItem`](integration_telegram_v1.md#telegramintegrationliststreamitem)

#### Defined in

[integration/telegram/v1.js:54](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/telegram/v1.js#L54)

___

### TelegramIntegrationOptions

Ƭ **TelegramIntegrationOptions**\<\>: [`BotRefOrConfig`](integration_telegram_v1.md#botreforconfig) & \{ `botToken?`: `string` ; `description?`: `string` ; `meta?`: [`Record`]( https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type )\<`string`, `any`\> ; `name?`: `string` ; `sessionDuration?`: `number`  }

#### Defined in

[integration/telegram/v1.js:35](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/telegram/v1.js#L35)

___

### TelegramIntegrationSetupResponse

Ƭ **TelegramIntegrationSetupResponse**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Defined in

[integration/telegram/v1.js:171](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/telegram/v1.js#L171)

___

### TelegramIntegrationUpdateRequest

Ƭ **TelegramIntegrationUpdateRequest**\<\>: [`TelegramIntegrationOptions`](integration_telegram_v1.md#telegramintegrationoptions) & \{ `model?`: [`model/v1`](model_v1.md)  }

#### Defined in

[integration/telegram/v1.js:120](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/telegram/v1.js#L120)

___

### TelegramIntegrationUpdateResponse

Ƭ **TelegramIntegrationUpdateResponse**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Defined in

[integration/telegram/v1.js:124](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/telegram/v1.js#L124)

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

[integration/telegram/v1.js:101](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/telegram/v1.js#L101)

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

[integration/telegram/v1.js:156](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/telegram/v1.js#L156)

___

### fetchTelegramIntegration

▸ **fetchTelegramIntegration**(`client`, `telegramId`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<[`TelegramIntegrationFetchResponse`](integration_telegram_v1.md#telegramintegrationfetchresponse)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`ChatBotKitClient`](../classes/client.ChatBotKitClient.md) |
| `telegramId` | `string` |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<[`TelegramIntegrationFetchResponse`](integration_telegram_v1.md#telegramintegrationfetchresponse)\>

#### Defined in

[integration/telegram/v1.js:79](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/telegram/v1.js#L79)

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

[integration/telegram/v1.js:60](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/telegram/v1.js#L60)

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

[integration/telegram/v1.js:177](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/telegram/v1.js#L177)

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

[integration/telegram/v1.js:131](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/telegram/v1.js#L131)
