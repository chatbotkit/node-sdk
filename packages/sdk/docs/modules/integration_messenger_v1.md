[@chatbotkit/sdk](../README.md) / [Modules](../modules.md) / integration/messenger/v1

# Module: integration/messenger/v1

## Table of contents

### Type Aliases

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

### ChatBotKitClient

Ƭ **ChatBotKitClient**\<\>: [`client`](client.md)

#### Defined in

[integration/messenger/v1.js:2](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/messenger/v1.js#L2)

___

### MessengerIntegrationCreateRequest

Ƭ **MessengerIntegrationCreateRequest**\<\>: [`MessengerIntegrationOptions`](integration_messenger_v1.md#messengerintegrationoptions) & \{ `model?`: [`model/v1`](model_v1.md)  }

#### Defined in

[integration/messenger/v1.js:84](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/messenger/v1.js#L84)

___

### MessengerIntegrationCreateResponse

Ƭ **MessengerIntegrationCreateResponse**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Defined in

[integration/messenger/v1.js:88](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/messenger/v1.js#L88)

___

### MessengerIntegrationDeleteResponse

Ƭ **MessengerIntegrationDeleteResponse**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Defined in

[integration/messenger/v1.js:139](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/messenger/v1.js#L139)

___

### MessengerIntegrationFetchResponse

Ƭ **MessengerIntegrationFetchResponse**\<\>: [`MessengerIntegrationInstance`](integration_messenger_v1.md#messengerintegrationinstance) & {}

#### Defined in

[integration/messenger/v1.js:65](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/messenger/v1.js#L65)

___

### MessengerIntegrationInstance

Ƭ **MessengerIntegrationInstance**\<\>: [`MessengerIntegrationOptions`](integration_messenger_v1.md#messengerintegrationoptions) & \{ `createdAt`: `number` ; `id`: `string` ; `updatedAt`: `number` ; `verifyToken`: `string`  }

#### Defined in

[integration/messenger/v1.js:28](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/messenger/v1.js#L28)

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

[integration/messenger/v1.js:37](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/messenger/v1.js#L37)

___

### MessengerIntegrationListResponse

Ƭ **MessengerIntegrationListResponse**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `items` | [`MessengerIntegrationInstance`](integration_messenger_v1.md#messengerintegrationinstance)[] |

#### Defined in

[integration/messenger/v1.js:39](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/messenger/v1.js#L39)

___

### MessengerIntegrationListStreamItem

Ƭ **MessengerIntegrationListStreamItem**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `data` | [`MessengerIntegrationInstance`](integration_messenger_v1.md#messengerintegrationinstance) |
| `type` | ``"item"`` |

#### Defined in

[integration/messenger/v1.js:44](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/messenger/v1.js#L44)

___

### MessengerIntegrationListStreamType

Ƭ **MessengerIntegrationListStreamType**\<\>: [`MessengerIntegrationListStreamItem`](integration_messenger_v1.md#messengerintegrationliststreamitem)

#### Defined in

[integration/messenger/v1.js:46](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/messenger/v1.js#L46)

___

### MessengerIntegrationOptions

Ƭ **MessengerIntegrationOptions**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `accessToken?` | `string` |
| `attachments?` | `boolean` |
| `botId?` | `string` |
| `contactCollection?` | `boolean` |
| `description?` | `string` |
| `meta?` | [`Record`]( https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type )\<`string`, `any`\> |
| `name?` | `string` |
| `sessionDuration?` | `number` |

#### Defined in

[integration/messenger/v1.js:21](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/messenger/v1.js#L21)

___

### MessengerIntegrationSetupResponse

Ƭ **MessengerIntegrationSetupResponse**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Defined in

[integration/messenger/v1.js:160](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/messenger/v1.js#L160)

___

### MessengerIntegrationUpdateRequest

Ƭ **MessengerIntegrationUpdateRequest**\<\>: [`MessengerIntegrationOptions`](integration_messenger_v1.md#messengerintegrationoptions) & \{ `model?`: [`model/v1`](model_v1.md)  }

#### Defined in

[integration/messenger/v1.js:111](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/messenger/v1.js#L111)

___

### MessengerIntegrationUpdateResponse

Ƭ **MessengerIntegrationUpdateResponse**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Defined in

[integration/messenger/v1.js:115](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/messenger/v1.js#L115)

___

### ResponsePromise

Ƭ **ResponsePromise**\<`T`, `U`\>: [`client`](client.md)

#### Type parameters

| Name |
| :------ |
| `T` |
| `U` |

#### Defined in

[integration/messenger/v1.js:8](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/messenger/v1.js#L8)

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

[integration/messenger/v1.js:94](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/messenger/v1.js#L94)

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

[integration/messenger/v1.js:145](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/messenger/v1.js#L145)

___

### fetchMessengerIntegration

▸ **fetchMessengerIntegration**(`client`, `messengerId`): [`ResponsePromise`](../classes/client.ResponsePromise.md)\<[`MessengerIntegrationFetchResponse`](integration_messenger_v1.md#messengerintegrationfetchresponse), `never`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`ChatBotKitClient`](../classes/client.ChatBotKitClient.md) |
| `messengerId` | `string` |

#### Returns

[`ResponsePromise`](../classes/client.ResponsePromise.md)\<[`MessengerIntegrationFetchResponse`](integration_messenger_v1.md#messengerintegrationfetchresponse), `never`\>

#### Defined in

[integration/messenger/v1.js:71](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/messenger/v1.js#L71)

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

[integration/messenger/v1.js:52](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/messenger/v1.js#L52)

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

[integration/messenger/v1.js:166](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/messenger/v1.js#L166)

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

[integration/messenger/v1.js:122](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/messenger/v1.js#L122)
