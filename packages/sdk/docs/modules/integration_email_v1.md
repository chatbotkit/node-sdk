[@chatbotkit/sdk](../README.md) / [Modules](../modules.md) / integration/email/v1

# Module: integration/email/v1

## Table of contents

### Type Aliases

- [BotConfig](integration_email_v1.md#botconfig)
- [BotRef](integration_email_v1.md#botref)
- [BotRefOrConfig](integration_email_v1.md#botreforconfig)
- [ChatBotKitClient](integration_email_v1.md#chatbotkitclient)
- [EmailIntegrationCreateRequest](integration_email_v1.md#emailintegrationcreaterequest)
- [EmailIntegrationCreateResponse](integration_email_v1.md#emailintegrationcreateresponse)
- [EmailIntegrationDeleteResponse](integration_email_v1.md#emailintegrationdeleteresponse)
- [EmailIntegrationFetchResponse](integration_email_v1.md#emailintegrationfetchresponse)
- [EmailIntegrationInstance](integration_email_v1.md#emailintegrationinstance)
- [EmailIntegrationListRequest](integration_email_v1.md#emailintegrationlistrequest)
- [EmailIntegrationListResponse](integration_email_v1.md#emailintegrationlistresponse)
- [EmailIntegrationListStreamItem](integration_email_v1.md#emailintegrationliststreamitem)
- [EmailIntegrationListStreamType](integration_email_v1.md#emailintegrationliststreamtype)
- [EmailIntegrationOptions](integration_email_v1.md#emailintegrationoptions)
- [EmailIntegrationSetupResponse](integration_email_v1.md#emailintegrationsetupresponse)
- [EmailIntegrationUpdateRequest](integration_email_v1.md#emailintegrationupdaterequest)
- [EmailIntegrationUpdateResponse](integration_email_v1.md#emailintegrationupdateresponse)
- [ResponsePromise](integration_email_v1.md#responsepromise)

### Functions

- [createEmailIntegration](integration_email_v1.md#createemailintegration)
- [deleteEmailIntegration](integration_email_v1.md#deleteemailintegration)
- [fetchEmailIntegration](integration_email_v1.md#fetchemailintegration)
- [listEmailIntegrations](integration_email_v1.md#listemailintegrations)
- [setupEmailIntegration](integration_email_v1.md#setupemailintegration)
- [updateEmailIntegration](integration_email_v1.md#updateemailintegration)

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

[integration/email/v1.js:25](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/email/v1.js#L25)

___

### BotRef

Ƭ **BotRef**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `botId?` | `string` |

#### Defined in

[integration/email/v1.js:16](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/email/v1.js#L16)

___

### BotRefOrConfig

Ƭ **BotRefOrConfig**\<\>: [`BotRef`](integration_email_v1.md#botref) \| [`BotConfig`](integration_email_v1.md#botconfig)

#### Defined in

[integration/email/v1.js:27](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/email/v1.js#L27)

___

### ChatBotKitClient

Ƭ **ChatBotKitClient**\<\>: [`client`](client.md)

#### Defined in

[integration/email/v1.js:4](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/email/v1.js#L4)

___

### EmailIntegrationCreateRequest

Ƭ **EmailIntegrationCreateRequest**\<\>: [`EmailIntegrationOptions`](integration_email_v1.md#emailintegrationoptions) & \{ `model?`: [`model/v1`](model_v1.md)  }

#### Defined in

[integration/email/v1.js:92](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/email/v1.js#L92)

___

### EmailIntegrationCreateResponse

Ƭ **EmailIntegrationCreateResponse**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Defined in

[integration/email/v1.js:96](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/email/v1.js#L96)

___

### EmailIntegrationDeleteResponse

Ƭ **EmailIntegrationDeleteResponse**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Defined in

[integration/email/v1.js:151](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/email/v1.js#L151)

___

### EmailIntegrationFetchResponse

Ƭ **EmailIntegrationFetchResponse**\<\>: [`EmailIntegrationInstance`](integration_email_v1.md#emailintegrationinstance) & {}

#### Defined in

[integration/email/v1.js:73](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/email/v1.js#L73)

___

### EmailIntegrationInstance

Ƭ **EmailIntegrationInstance**\<\>: [`EmailIntegrationOptions`](integration_email_v1.md#emailintegrationoptions) & \{ `createdAt`: `number` ; `id`: `string` ; `updatedAt`: `number`  }

#### Defined in

[integration/email/v1.js:41](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/email/v1.js#L41)

___

### EmailIntegrationListRequest

Ƭ **EmailIntegrationListRequest**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `cursor?` | `string` |
| `meta?` | [`Record`]( https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type )\<`string`, `string`\> |
| `order?` | ``"desc"`` \| ``"asc"`` |
| `take?` | `number` |

#### Defined in

[integration/email/v1.js:45](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/email/v1.js#L45)

___

### EmailIntegrationListResponse

Ƭ **EmailIntegrationListResponse**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `items` | [`EmailIntegrationInstance`](integration_email_v1.md#emailintegrationinstance)[] |

#### Defined in

[integration/email/v1.js:47](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/email/v1.js#L47)

___

### EmailIntegrationListStreamItem

Ƭ **EmailIntegrationListStreamItem**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `data` | [`EmailIntegrationInstance`](integration_email_v1.md#emailintegrationinstance) |
| `type` | ``"item"`` |

#### Defined in

[integration/email/v1.js:52](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/email/v1.js#L52)

___

### EmailIntegrationListStreamType

Ƭ **EmailIntegrationListStreamType**\<\>: [`EmailIntegrationListStreamItem`](integration_email_v1.md#emailintegrationliststreamitem)

#### Defined in

[integration/email/v1.js:54](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/email/v1.js#L54)

___

### EmailIntegrationOptions

Ƭ **EmailIntegrationOptions**\<\>: [`BotRefOrConfig`](integration_email_v1.md#botreforconfig) & \{ `contactCollection?`: `boolean` ; `description?`: `string` ; `meta?`: [`Record`]( https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type )\<`string`, `any`\> ; `name?`: `string` ; `sessionDuration?`: `number`  }

#### Defined in

[integration/email/v1.js:35](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/email/v1.js#L35)

___

### EmailIntegrationSetupResponse

Ƭ **EmailIntegrationSetupResponse**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Defined in

[integration/email/v1.js:172](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/email/v1.js#L172)

___

### EmailIntegrationUpdateRequest

Ƭ **EmailIntegrationUpdateRequest**\<\>: [`EmailIntegrationOptions`](integration_email_v1.md#emailintegrationoptions) & \{ `model?`: [`model/v1`](model_v1.md)  }

#### Defined in

[integration/email/v1.js:121](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/email/v1.js#L121)

___

### EmailIntegrationUpdateResponse

Ƭ **EmailIntegrationUpdateResponse**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Defined in

[integration/email/v1.js:125](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/email/v1.js#L125)

___

### ResponsePromise

Ƭ **ResponsePromise**\<`T`, `U`\>: [`client`](client.md)

#### Type parameters

| Name |
| :------ |
| `T` |
| `U` |

#### Defined in

[integration/email/v1.js:10](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/email/v1.js#L10)

## Functions

### createEmailIntegration

▸ **createEmailIntegration**(`client`, `request`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<[`EmailIntegrationCreateResponse`](integration_email_v1.md#emailintegrationcreateresponse)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`ChatBotKitClient`](../classes/client.ChatBotKitClient.md) |
| `request` | [`EmailIntegrationCreateRequest`](integration_email_v1.md#emailintegrationcreaterequest) |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<[`EmailIntegrationCreateResponse`](integration_email_v1.md#emailintegrationcreateresponse)\>

#### Defined in

[integration/email/v1.js:102](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/email/v1.js#L102)

___

### deleteEmailIntegration

▸ **deleteEmailIntegration**(`client`, `emailId`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<[`EmailIntegrationDeleteResponse`](integration_email_v1.md#emailintegrationdeleteresponse)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`ChatBotKitClient`](../classes/client.ChatBotKitClient.md) |
| `emailId` | `string` |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<[`EmailIntegrationDeleteResponse`](integration_email_v1.md#emailintegrationdeleteresponse)\>

#### Defined in

[integration/email/v1.js:157](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/email/v1.js#L157)

___

### fetchEmailIntegration

▸ **fetchEmailIntegration**(`client`, `emailId`): [`ResponsePromise`](../classes/client.ResponsePromise.md)\<[`EmailIntegrationFetchResponse`](integration_email_v1.md#emailintegrationfetchresponse), `never`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`ChatBotKitClient`](../classes/client.ChatBotKitClient.md) |
| `emailId` | `string` |

#### Returns

[`ResponsePromise`](../classes/client.ResponsePromise.md)\<[`EmailIntegrationFetchResponse`](integration_email_v1.md#emailintegrationfetchresponse), `never`\>

#### Defined in

[integration/email/v1.js:79](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/email/v1.js#L79)

___

### listEmailIntegrations

▸ **listEmailIntegrations**(`client`, `request?`): [`ResponsePromise`](../classes/client.ResponsePromise.md)\<[`EmailIntegrationListResponse`](integration_email_v1.md#emailintegrationlistresponse), [`EmailIntegrationListStreamItem`](integration_email_v1.md#emailintegrationliststreamitem)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`ChatBotKitClient`](../classes/client.ChatBotKitClient.md) |
| `request?` | [`EmailIntegrationListRequest`](integration_email_v1.md#emailintegrationlistrequest) |

#### Returns

[`ResponsePromise`](../classes/client.ResponsePromise.md)\<[`EmailIntegrationListResponse`](integration_email_v1.md#emailintegrationlistresponse), [`EmailIntegrationListStreamItem`](integration_email_v1.md#emailintegrationliststreamitem)\>

#### Defined in

[integration/email/v1.js:60](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/email/v1.js#L60)

___

### setupEmailIntegration

▸ **setupEmailIntegration**(`client`, `emailId`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<[`EmailIntegrationSetupResponse`](integration_email_v1.md#emailintegrationsetupresponse)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`ChatBotKitClient`](../classes/client.ChatBotKitClient.md) |
| `emailId` | `string` |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<[`EmailIntegrationSetupResponse`](integration_email_v1.md#emailintegrationsetupresponse)\>

#### Defined in

[integration/email/v1.js:178](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/email/v1.js#L178)

___

### updateEmailIntegration

▸ **updateEmailIntegration**(`client`, `emailId`, `request`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<[`EmailIntegrationUpdateResponse`](integration_email_v1.md#emailintegrationupdateresponse)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`ChatBotKitClient`](../classes/client.ChatBotKitClient.md) |
| `emailId` | `string` |
| `request` | [`EmailIntegrationUpdateRequest`](integration_email_v1.md#emailintegrationupdaterequest) |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<[`EmailIntegrationUpdateResponse`](integration_email_v1.md#emailintegrationupdateresponse)\>

#### Defined in

[integration/email/v1.js:132](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/email/v1.js#L132)
