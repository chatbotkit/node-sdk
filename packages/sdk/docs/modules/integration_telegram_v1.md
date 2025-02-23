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

[integration/telegram/v1.js:94](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/telegram/v1.js#L94)

___

### TelegramIntegrationCreateResponse

Ƭ **TelegramIntegrationCreateResponse**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Defined in

[integration/telegram/v1.js:98](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/telegram/v1.js#L98)

___

### TelegramIntegrationDeleteResponse

Ƭ **TelegramIntegrationDeleteResponse**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Defined in

[integration/telegram/v1.js:153](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/telegram/v1.js#L153)

___

### TelegramIntegrationFetchResponse

Ƭ **TelegramIntegrationFetchResponse**\<\>: [`TelegramIntegrationInstance`](integration_telegram_v1.md#telegramintegrationinstance) & {}

#### Defined in

[integration/telegram/v1.js:75](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/telegram/v1.js#L75)

___

### TelegramIntegrationInstance

Ƭ **TelegramIntegrationInstance**\<\>: [`TelegramIntegrationOptions`](integration_telegram_v1.md#telegramintegrationoptions) & \{ `createdAt`: `number` ; `id`: `string` ; `updatedAt`: `number`  }

#### Defined in

[integration/telegram/v1.js:43](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/telegram/v1.js#L43)

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

[integration/telegram/v1.js:47](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/telegram/v1.js#L47)

___

### TelegramIntegrationListResponse

Ƭ **TelegramIntegrationListResponse**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `items` | [`TelegramIntegrationInstance`](integration_telegram_v1.md#telegramintegrationinstance)[] |

#### Defined in

[integration/telegram/v1.js:49](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/telegram/v1.js#L49)

___

### TelegramIntegrationListStreamItem

Ƭ **TelegramIntegrationListStreamItem**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `data` | [`TelegramIntegrationInstance`](integration_telegram_v1.md#telegramintegrationinstance) |
| `type` | ``"item"`` |

#### Defined in

[integration/telegram/v1.js:54](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/telegram/v1.js#L54)

___

### TelegramIntegrationListStreamType

Ƭ **TelegramIntegrationListStreamType**\<\>: [`TelegramIntegrationListStreamItem`](integration_telegram_v1.md#telegramintegrationliststreamitem)

#### Defined in

[integration/telegram/v1.js:56](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/telegram/v1.js#L56)

___

### TelegramIntegrationOptions

Ƭ **TelegramIntegrationOptions**\<\>: [`BotRefOrConfig`](integration_telegram_v1.md#botreforconfig) & \{ `attachments?`: `boolean` ; `botToken?`: `string` ; `contactCollection?`: `boolean` ; `description?`: `string` ; `meta?`: [`Record`]( https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type )\<`string`, `any`\> ; `name?`: `string` ; `sessionDuration?`: `number`  }

#### Defined in

[integration/telegram/v1.js:37](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/telegram/v1.js#L37)

___

### TelegramIntegrationSetupResponse

Ƭ **TelegramIntegrationSetupResponse**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Defined in

[integration/telegram/v1.js:174](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/telegram/v1.js#L174)

___

### TelegramIntegrationUpdateRequest

Ƭ **TelegramIntegrationUpdateRequest**\<\>: [`TelegramIntegrationOptions`](integration_telegram_v1.md#telegramintegrationoptions) & \{ `model?`: [`model/v1`](model_v1.md)  }

#### Defined in

[integration/telegram/v1.js:123](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/telegram/v1.js#L123)

___

### TelegramIntegrationUpdateResponse

Ƭ **TelegramIntegrationUpdateResponse**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Defined in

[integration/telegram/v1.js:127](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/telegram/v1.js#L127)

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

[integration/telegram/v1.js:104](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/telegram/v1.js#L104)

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

[integration/telegram/v1.js:159](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/telegram/v1.js#L159)

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

[integration/telegram/v1.js:81](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/telegram/v1.js#L81)

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

[integration/telegram/v1.js:62](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/telegram/v1.js#L62)

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

[integration/telegram/v1.js:180](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/telegram/v1.js#L180)

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

[integration/telegram/v1.js:134](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/telegram/v1.js#L134)
