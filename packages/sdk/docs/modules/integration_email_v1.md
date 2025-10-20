[@chatbotkit/sdk](../README.md) / [Modules](../modules.md) / integration/email/v1

# Module: integration/email/v1

## Table of contents

### Type Aliases

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

### ChatBotKitClient

Ƭ **ChatBotKitClient**\<\>: [`client`](client.md)

#### Defined in

[integration/email/v1.js:2](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/email/v1.js#L2)

___

### EmailIntegrationCreateRequest

Ƭ **EmailIntegrationCreateRequest**\<\>: [`EmailIntegrationOptions`](integration_email_v1.md#emailintegrationoptions) & \{ `model?`: [`model/v1`](model_v1.md)  }

#### Defined in

[integration/email/v1.js:82](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/email/v1.js#L82)

___

### EmailIntegrationCreateResponse

Ƭ **EmailIntegrationCreateResponse**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Defined in

[integration/email/v1.js:86](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/email/v1.js#L86)

___

### EmailIntegrationDeleteResponse

Ƭ **EmailIntegrationDeleteResponse**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Defined in

[integration/email/v1.js:137](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/email/v1.js#L137)

___

### EmailIntegrationFetchResponse

Ƭ **EmailIntegrationFetchResponse**\<\>: [`EmailIntegrationInstance`](integration_email_v1.md#emailintegrationinstance) & {}

#### Defined in

[integration/email/v1.js:63](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/email/v1.js#L63)

___

### EmailIntegrationInstance

Ƭ **EmailIntegrationInstance**\<\>: [`EmailIntegrationOptions`](integration_email_v1.md#emailintegrationoptions) & \{ `createdAt`: `number` ; `id`: `string` ; `updatedAt`: `number`  }

#### Defined in

[integration/email/v1.js:26](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/email/v1.js#L26)

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

[integration/email/v1.js:35](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/email/v1.js#L35)

___

### EmailIntegrationListResponse

Ƭ **EmailIntegrationListResponse**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `items` | [`EmailIntegrationInstance`](integration_email_v1.md#emailintegrationinstance)[] |

#### Defined in

[integration/email/v1.js:37](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/email/v1.js#L37)

___

### EmailIntegrationListStreamItem

Ƭ **EmailIntegrationListStreamItem**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `data` | [`EmailIntegrationInstance`](integration_email_v1.md#emailintegrationinstance) |
| `type` | ``"item"`` |

#### Defined in

[integration/email/v1.js:42](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/email/v1.js#L42)

___

### EmailIntegrationListStreamType

Ƭ **EmailIntegrationListStreamType**\<\>: [`EmailIntegrationListStreamItem`](integration_email_v1.md#emailintegrationliststreamitem)

#### Defined in

[integration/email/v1.js:44](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/email/v1.js#L44)

___

### EmailIntegrationOptions

Ƭ **EmailIntegrationOptions**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `blueprintId?` | `string` |
| `botId?` | `string` |
| `contactCollection?` | `boolean` |
| `description?` | `string` |
| `meta?` | [`Record`]( https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type )\<`string`, `any`\> |
| `name?` | `string` |
| `sessionDuration?` | `number` |

#### Defined in

[integration/email/v1.js:20](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/email/v1.js#L20)

___

### EmailIntegrationSetupResponse

Ƭ **EmailIntegrationSetupResponse**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Defined in

[integration/email/v1.js:158](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/email/v1.js#L158)

___

### EmailIntegrationUpdateRequest

Ƭ **EmailIntegrationUpdateRequest**\<\>: [`EmailIntegrationOptions`](integration_email_v1.md#emailintegrationoptions) & \{ `model?`: [`model/v1`](model_v1.md)  }

#### Defined in

[integration/email/v1.js:109](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/email/v1.js#L109)

___

### EmailIntegrationUpdateResponse

Ƭ **EmailIntegrationUpdateResponse**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Defined in

[integration/email/v1.js:113](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/email/v1.js#L113)

___

### ResponsePromise

Ƭ **ResponsePromise**\<`T`, `U`\>: [`client`](client.md)

#### Type parameters

| Name |
| :------ |
| `T` |
| `U` |

#### Defined in

[integration/email/v1.js:8](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/email/v1.js#L8)

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

[integration/email/v1.js:92](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/email/v1.js#L92)

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

[integration/email/v1.js:143](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/email/v1.js#L143)

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

[integration/email/v1.js:69](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/email/v1.js#L69)

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

[integration/email/v1.js:50](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/email/v1.js#L50)

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

[integration/email/v1.js:164](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/email/v1.js#L164)

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

[integration/email/v1.js:120](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/email/v1.js#L120)
