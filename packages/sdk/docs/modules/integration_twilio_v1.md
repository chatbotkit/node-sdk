[@chatbotkit/sdk](../README.md) / [Modules](../modules.md) / integration/twilio/v1

# Module: integration/twilio/v1

## Table of contents

### Type Aliases

- [ChatBotKitClient](integration_twilio_v1.md#chatbotkitclient)
- [ResponsePromise](integration_twilio_v1.md#responsepromise)
- [TwilioIntegrationCreateRequest](integration_twilio_v1.md#twiliointegrationcreaterequest)
- [TwilioIntegrationCreateResponse](integration_twilio_v1.md#twiliointegrationcreateresponse)
- [TwilioIntegrationDeleteResponse](integration_twilio_v1.md#twiliointegrationdeleteresponse)
- [TwilioIntegrationFetchResponse](integration_twilio_v1.md#twiliointegrationfetchresponse)
- [TwilioIntegrationInstance](integration_twilio_v1.md#twiliointegrationinstance)
- [TwilioIntegrationListRequest](integration_twilio_v1.md#twiliointegrationlistrequest)
- [TwilioIntegrationListResponse](integration_twilio_v1.md#twiliointegrationlistresponse)
- [TwilioIntegrationListStreamItem](integration_twilio_v1.md#twiliointegrationliststreamitem)
- [TwilioIntegrationListStreamType](integration_twilio_v1.md#twiliointegrationliststreamtype)
- [TwilioIntegrationOptions](integration_twilio_v1.md#twiliointegrationoptions)
- [TwilioIntegrationSetupResponse](integration_twilio_v1.md#twiliointegrationsetupresponse)
- [TwilioIntegrationUpdateRequest](integration_twilio_v1.md#twiliointegrationupdaterequest)
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

Ƭ **TwilioIntegrationCreateRequest**\<\>: [`TwilioIntegrationOptions`](integration_twilio_v1.md#twiliointegrationoptions) & \{ `model?`: [`model/v1`](model_v1.md)  }

#### Defined in

[integration/twilio/v1.js:81](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/twilio/v1.js#L81)

___

### TwilioIntegrationCreateResponse

Ƭ **TwilioIntegrationCreateResponse**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Defined in

[integration/twilio/v1.js:85](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/twilio/v1.js#L85)

___

### TwilioIntegrationDeleteResponse

Ƭ **TwilioIntegrationDeleteResponse**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Defined in

[integration/twilio/v1.js:136](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/twilio/v1.js#L136)

___

### TwilioIntegrationFetchResponse

Ƭ **TwilioIntegrationFetchResponse**\<\>: [`TwilioIntegrationInstance`](integration_twilio_v1.md#twiliointegrationinstance) & {}

#### Defined in

[integration/twilio/v1.js:62](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/twilio/v1.js#L62)

___

### TwilioIntegrationInstance

Ƭ **TwilioIntegrationInstance**\<\>: [`TwilioIntegrationOptions`](integration_twilio_v1.md#twiliointegrationoptions) & \{ `createdAt`: `number` ; `id`: `string` ; `updatedAt`: `number`  }

#### Defined in

[integration/twilio/v1.js:25](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/twilio/v1.js#L25)

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

[integration/twilio/v1.js:34](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/twilio/v1.js#L34)

___

### TwilioIntegrationListResponse

Ƭ **TwilioIntegrationListResponse**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `items` | [`TwilioIntegrationInstance`](integration_twilio_v1.md#twiliointegrationinstance)[] |

#### Defined in

[integration/twilio/v1.js:36](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/twilio/v1.js#L36)

___

### TwilioIntegrationListStreamItem

Ƭ **TwilioIntegrationListStreamItem**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `data` | [`TwilioIntegrationInstance`](integration_twilio_v1.md#twiliointegrationinstance) |
| `type` | ``"item"`` |

#### Defined in

[integration/twilio/v1.js:41](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/twilio/v1.js#L41)

___

### TwilioIntegrationListStreamType

Ƭ **TwilioIntegrationListStreamType**\<\>: [`TwilioIntegrationListStreamItem`](integration_twilio_v1.md#twiliointegrationliststreamitem)

#### Defined in

[integration/twilio/v1.js:43](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/twilio/v1.js#L43)

___

### TwilioIntegrationOptions

Ƭ **TwilioIntegrationOptions**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `botId?` | `string` |
| `contactCollection?` | `boolean` |
| `description?` | `string` |
| `meta?` | [`Record`]( https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type )\<`string`, `any`\> |
| `name?` | `string` |
| `sessionDuration?` | `number` |

#### Defined in

[integration/twilio/v1.js:19](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/twilio/v1.js#L19)

___

### TwilioIntegrationSetupResponse

Ƭ **TwilioIntegrationSetupResponse**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Defined in

[integration/twilio/v1.js:157](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/twilio/v1.js#L157)

___

### TwilioIntegrationUpdateRequest

Ƭ **TwilioIntegrationUpdateRequest**\<\>: [`TwilioIntegrationOptions`](integration_twilio_v1.md#twiliointegrationoptions) & \{ `model?`: [`model/v1`](model_v1.md)  }

#### Defined in

[integration/twilio/v1.js:108](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/twilio/v1.js#L108)

___

### TwilioIntegrationUpdateResponse

Ƭ **TwilioIntegrationUpdateResponse**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Defined in

[integration/twilio/v1.js:112](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/twilio/v1.js#L112)

## Functions

### createTwilioIntegration

▸ **createTwilioIntegration**(`client`, `request`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<[`TwilioIntegrationCreateResponse`](integration_twilio_v1.md#twiliointegrationcreateresponse)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`ChatBotKitClient`](../classes/client.ChatBotKitClient.md) |
| `request` | [`TwilioIntegrationCreateRequest`](integration_twilio_v1.md#twiliointegrationcreaterequest) |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<[`TwilioIntegrationCreateResponse`](integration_twilio_v1.md#twiliointegrationcreateresponse)\>

#### Defined in

[integration/twilio/v1.js:91](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/twilio/v1.js#L91)

___

### deleteTwilioIntegration

▸ **deleteTwilioIntegration**(`client`, `twilioId`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<[`TwilioIntegrationDeleteResponse`](integration_twilio_v1.md#twiliointegrationdeleteresponse)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`ChatBotKitClient`](../classes/client.ChatBotKitClient.md) |
| `twilioId` | `string` |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<[`TwilioIntegrationDeleteResponse`](integration_twilio_v1.md#twiliointegrationdeleteresponse)\>

#### Defined in

[integration/twilio/v1.js:142](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/twilio/v1.js#L142)

___

### fetchTwilioIntegration

▸ **fetchTwilioIntegration**(`client`, `twilioId`): [`ResponsePromise`](../classes/client.ResponsePromise.md)\<[`TwilioIntegrationFetchResponse`](integration_twilio_v1.md#twiliointegrationfetchresponse), `never`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`ChatBotKitClient`](../classes/client.ChatBotKitClient.md) |
| `twilioId` | `string` |

#### Returns

[`ResponsePromise`](../classes/client.ResponsePromise.md)\<[`TwilioIntegrationFetchResponse`](integration_twilio_v1.md#twiliointegrationfetchresponse), `never`\>

#### Defined in

[integration/twilio/v1.js:68](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/twilio/v1.js#L68)

___

### listTwilioIntegrations

▸ **listTwilioIntegrations**(`client`, `request?`): [`ResponsePromise`](../classes/client.ResponsePromise.md)\<[`TwilioIntegrationListResponse`](integration_twilio_v1.md#twiliointegrationlistresponse), [`TwilioIntegrationListStreamItem`](integration_twilio_v1.md#twiliointegrationliststreamitem)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`ChatBotKitClient`](../classes/client.ChatBotKitClient.md) |
| `request?` | [`TwilioIntegrationListRequest`](integration_twilio_v1.md#twiliointegrationlistrequest) |

#### Returns

[`ResponsePromise`](../classes/client.ResponsePromise.md)\<[`TwilioIntegrationListResponse`](integration_twilio_v1.md#twiliointegrationlistresponse), [`TwilioIntegrationListStreamItem`](integration_twilio_v1.md#twiliointegrationliststreamitem)\>

#### Defined in

[integration/twilio/v1.js:49](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/twilio/v1.js#L49)

___

### setupTwilioIntegration

▸ **setupTwilioIntegration**(`client`, `twilioId`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<[`TwilioIntegrationSetupResponse`](integration_twilio_v1.md#twiliointegrationsetupresponse)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`ChatBotKitClient`](../classes/client.ChatBotKitClient.md) |
| `twilioId` | `string` |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<[`TwilioIntegrationSetupResponse`](integration_twilio_v1.md#twiliointegrationsetupresponse)\>

#### Defined in

[integration/twilio/v1.js:163](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/twilio/v1.js#L163)

___

### updateTwilioIntegration

▸ **updateTwilioIntegration**(`client`, `twilioId`, `request`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<[`TwilioIntegrationUpdateResponse`](integration_twilio_v1.md#twiliointegrationupdateresponse)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`ChatBotKitClient`](../classes/client.ChatBotKitClient.md) |
| `twilioId` | `string` |
| `request` | [`TwilioIntegrationUpdateRequest`](integration_twilio_v1.md#twiliointegrationupdaterequest) |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<[`TwilioIntegrationUpdateResponse`](integration_twilio_v1.md#twiliointegrationupdateresponse)\>

#### Defined in

[integration/twilio/v1.js:119](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/twilio/v1.js#L119)
