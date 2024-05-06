[@chatbotkit/sdk](../README.md) / [Modules](../modules.md) / integration/messenger/v1

# Module: integration/messenger/v1

## Table of contents

### Type Aliases

- [BotConfig](integration_messenger_v1.md#botconfig)
- [BotRef](integration_messenger_v1.md#botref)
- [BotRefOrConfig](integration_messenger_v1.md#botreforconfig)
- [ChatBotKitClient](integration_messenger_v1.md#chatbotkitclient)
- [MessengerIntegrationCreateRequest](integration_messenger_v1.md#messengerintegrationcreaterequest)
- [MessengerIntegrationCreateResponse](integration_messenger_v1.md#messengerintegrationcreateresponse)
- [MessengerIntegrationDeleteResponse](integration_messenger_v1.md#messengerintegrationdeleteresponse)
- [MessengerIntegrationFetchResponse](integration_messenger_v1.md#messengerintegrationfetchresponse)
- [MessengerIntegrationInstance](integration_messenger_v1.md#messengerintegrationinstance)
- [MessengerIntegrationListRequest](integration_messenger_v1.md#messengerintegrationlistrequest)
- [MessengerIntegrationListResponse](integration_messenger_v1.md#messengerintegrationlistresponse)
- [MessengerIntegrationListStreamItem](integration_messenger_v1.md#messengerintegrationliststreamitem)
- [MessengerIntegrationListStreamType](integration_messenger_v1.md#messengerintegrationliststreamtype)
- [MessengerIntegrationOptions](integration_messenger_v1.md#messengerintegrationoptions)
- [MessengerIntegrationSetupResponse](integration_messenger_v1.md#messengerintegrationsetupresponse)
- [MessengerIntegrationUpdateRequest](integration_messenger_v1.md#messengerintegrationupdaterequest)
- [MessengerIntegrationUpdateResponse](integration_messenger_v1.md#messengerintegrationupdateresponse)
- [ResponsePromise](integration_messenger_v1.md#responsepromise)

### Functions

- [createMessengerIntegration](integration_messenger_v1.md#createmessengerintegration)
- [deleteMessengerIntegration](integration_messenger_v1.md#deletemessengerintegration)
- [fetchMessengerIntegration](integration_messenger_v1.md#fetchmessengerintegration)
- [listMessengerIntegrations](integration_messenger_v1.md#listmessengerintegrations)
- [setupMessengerIntegration](integration_messenger_v1.md#setupmessengerintegration)
- [updateMessengerIntegration](integration_messenger_v1.md#updatemessengerintegration)

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

[integration/messenger/v1.js:25](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/messenger/v1.js#L25)

___

### BotRef

Ƭ **BotRef**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `botId?` | `string` |

#### Defined in

[integration/messenger/v1.js:16](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/messenger/v1.js#L16)

___

### BotRefOrConfig

Ƭ **BotRefOrConfig**\<\>: [`BotRef`](integration_messenger_v1.md#botref) \| [`BotConfig`](integration_messenger_v1.md#botconfig)

#### Defined in

[integration/messenger/v1.js:27](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/messenger/v1.js#L27)

___

### ChatBotKitClient

Ƭ **ChatBotKitClient**\<\>: [`client`](client.md)

#### Defined in

[integration/messenger/v1.js:4](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/messenger/v1.js#L4)

___

### MessengerIntegrationCreateRequest

Ƭ **MessengerIntegrationCreateRequest**\<\>: [`MessengerIntegrationOptions`](integration_messenger_v1.md#messengerintegrationoptions) & \{ `model?`: [`model/v1`](model_v1.md)  }

#### Defined in

[integration/messenger/v1.js:92](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/messenger/v1.js#L92)

___

### MessengerIntegrationCreateResponse

Ƭ **MessengerIntegrationCreateResponse**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Defined in

[integration/messenger/v1.js:96](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/messenger/v1.js#L96)

___

### MessengerIntegrationDeleteResponse

Ƭ **MessengerIntegrationDeleteResponse**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Defined in

[integration/messenger/v1.js:151](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/messenger/v1.js#L151)

___

### MessengerIntegrationFetchResponse

Ƭ **MessengerIntegrationFetchResponse**\<\>: [`MessengerIntegrationInstance`](integration_messenger_v1.md#messengerintegrationinstance) & {}

#### Defined in

[integration/messenger/v1.js:74](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/messenger/v1.js#L74)

___

### MessengerIntegrationInstance

Ƭ **MessengerIntegrationInstance**\<\>: [`MessengerIntegrationOptions`](integration_messenger_v1.md#messengerintegrationoptions) & \{ `createdAt`: `number` ; `id`: `string` ; `updatedAt`: `number` ; `verifyToken`: `string`  }

#### Defined in

[integration/messenger/v1.js:42](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/messenger/v1.js#L42)

___

### MessengerIntegrationListRequest

Ƭ **MessengerIntegrationListRequest**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `cursor?` | `string` |
| `meta?` | [`Record`]( https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type )\<`string`, `string`\> |
| `order?` | ``"desc"`` \| ``"asc"`` |
| `take?` | `number` |

#### Defined in

[integration/messenger/v1.js:46](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/messenger/v1.js#L46)

___

### MessengerIntegrationListResponse

Ƭ **MessengerIntegrationListResponse**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `items` | [`MessengerIntegrationInstance`](integration_messenger_v1.md#messengerintegrationinstance)[] |

#### Defined in

[integration/messenger/v1.js:48](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/messenger/v1.js#L48)

___

### MessengerIntegrationListStreamItem

Ƭ **MessengerIntegrationListStreamItem**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `data` | [`MessengerIntegrationInstance`](integration_messenger_v1.md#messengerintegrationinstance) |
| `type` | ``"item"`` |

#### Defined in

[integration/messenger/v1.js:53](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/messenger/v1.js#L53)

___

### MessengerIntegrationListStreamType

Ƭ **MessengerIntegrationListStreamType**\<\>: [`MessengerIntegrationListStreamItem`](integration_messenger_v1.md#messengerintegrationliststreamitem)

#### Defined in

[integration/messenger/v1.js:55](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/messenger/v1.js#L55)

___

### MessengerIntegrationOptions

Ƭ **MessengerIntegrationOptions**\<\>: [`BotRefOrConfig`](integration_messenger_v1.md#botreforconfig) & \{ `accessToken?`: `string` ; `description?`: `string` ; `meta?`: [`Record`]( https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type )\<`string`, `any`\> ; `name?`: `string` ; `sessionDuration?`: `number`  }

#### Defined in

[integration/messenger/v1.js:35](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/messenger/v1.js#L35)

___

### MessengerIntegrationSetupResponse

Ƭ **MessengerIntegrationSetupResponse**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Defined in

[integration/messenger/v1.js:172](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/messenger/v1.js#L172)

___

### MessengerIntegrationUpdateRequest

Ƭ **MessengerIntegrationUpdateRequest**\<\>: [`MessengerIntegrationOptions`](integration_messenger_v1.md#messengerintegrationoptions) & \{ `model?`: [`model/v1`](model_v1.md)  }

#### Defined in

[integration/messenger/v1.js:121](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/messenger/v1.js#L121)

___

### MessengerIntegrationUpdateResponse

Ƭ **MessengerIntegrationUpdateResponse**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Defined in

[integration/messenger/v1.js:125](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/messenger/v1.js#L125)

___

### ResponsePromise

Ƭ **ResponsePromise**\<`T`, `U`\>: [`client`](client.md)

#### Type parameters

| Name |
| :------ |
| `T` |
| `U` |

#### Defined in

[integration/messenger/v1.js:10](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/messenger/v1.js#L10)

## Functions

### createMessengerIntegration

▸ **createMessengerIntegration**(`client`, `request`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<[`MessengerIntegrationCreateResponse`](integration_messenger_v1.md#messengerintegrationcreateresponse)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`ChatBotKitClient`](../classes/client.ChatBotKitClient.md) |
| `request` | [`MessengerIntegrationCreateRequest`](integration_messenger_v1.md#messengerintegrationcreaterequest) |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<[`MessengerIntegrationCreateResponse`](integration_messenger_v1.md#messengerintegrationcreateresponse)\>

#### Defined in

[integration/messenger/v1.js:102](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/messenger/v1.js#L102)

___

### deleteMessengerIntegration

▸ **deleteMessengerIntegration**(`client`, `messengerId`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<[`MessengerIntegrationDeleteResponse`](integration_messenger_v1.md#messengerintegrationdeleteresponse)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`ChatBotKitClient`](../classes/client.ChatBotKitClient.md) |
| `messengerId` | `string` |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<[`MessengerIntegrationDeleteResponse`](integration_messenger_v1.md#messengerintegrationdeleteresponse)\>

#### Defined in

[integration/messenger/v1.js:157](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/messenger/v1.js#L157)

___

### fetchMessengerIntegration

▸ **fetchMessengerIntegration**(`client`, `messengerId`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<[`MessengerIntegrationFetchResponse`](integration_messenger_v1.md#messengerintegrationfetchresponse)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`ChatBotKitClient`](../classes/client.ChatBotKitClient.md) |
| `messengerId` | `string` |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<[`MessengerIntegrationFetchResponse`](integration_messenger_v1.md#messengerintegrationfetchresponse)\>

#### Defined in

[integration/messenger/v1.js:80](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/messenger/v1.js#L80)

___

### listMessengerIntegrations

▸ **listMessengerIntegrations**(`client`, `request?`): [`ResponsePromise`](../classes/client.ResponsePromise.md)\<[`MessengerIntegrationListResponse`](integration_messenger_v1.md#messengerintegrationlistresponse), [`MessengerIntegrationListStreamItem`](integration_messenger_v1.md#messengerintegrationliststreamitem)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`ChatBotKitClient`](../classes/client.ChatBotKitClient.md) |
| `request?` | [`MessengerIntegrationListRequest`](integration_messenger_v1.md#messengerintegrationlistrequest) |

#### Returns

[`ResponsePromise`](../classes/client.ResponsePromise.md)\<[`MessengerIntegrationListResponse`](integration_messenger_v1.md#messengerintegrationlistresponse), [`MessengerIntegrationListStreamItem`](integration_messenger_v1.md#messengerintegrationliststreamitem)\>

#### Defined in

[integration/messenger/v1.js:61](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/messenger/v1.js#L61)

___

### setupMessengerIntegration

▸ **setupMessengerIntegration**(`client`, `messengerId`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<[`MessengerIntegrationSetupResponse`](integration_messenger_v1.md#messengerintegrationsetupresponse)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`ChatBotKitClient`](../classes/client.ChatBotKitClient.md) |
| `messengerId` | `string` |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<[`MessengerIntegrationSetupResponse`](integration_messenger_v1.md#messengerintegrationsetupresponse)\>

#### Defined in

[integration/messenger/v1.js:178](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/messenger/v1.js#L178)

___

### updateMessengerIntegration

▸ **updateMessengerIntegration**(`client`, `messengerId`, `request`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<[`MessengerIntegrationUpdateResponse`](integration_messenger_v1.md#messengerintegrationupdateresponse)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`ChatBotKitClient`](../classes/client.ChatBotKitClient.md) |
| `messengerId` | `string` |
| `request` | [`MessengerIntegrationUpdateRequest`](integration_messenger_v1.md#messengerintegrationupdaterequest) |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<[`MessengerIntegrationUpdateResponse`](integration_messenger_v1.md#messengerintegrationupdateresponse)\>

#### Defined in

[integration/messenger/v1.js:132](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/messenger/v1.js#L132)
