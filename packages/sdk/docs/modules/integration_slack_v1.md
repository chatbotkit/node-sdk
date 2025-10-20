[@chatbotkit/sdk](../README.md) / [Modules](../modules.md) / integration/slack/v1

# Module: integration/slack/v1

## Table of contents

### Type Aliases

- [ChatBotKitClient](integration_slack_v1.md#chatbotkitclient)
- [ResponsePromise](integration_slack_v1.md#responsepromise)
- [SlackIntegrationCreateRequest](integration_slack_v1.md#slackintegrationcreaterequest)
- [SlackIntegrationCreateResponse](integration_slack_v1.md#slackintegrationcreateresponse)
- [SlackIntegrationDeleteResponse](integration_slack_v1.md#slackintegrationdeleteresponse)
- [SlackIntegrationFetchResponse](integration_slack_v1.md#slackintegrationfetchresponse)
- [SlackIntegrationInstance](integration_slack_v1.md#slackintegrationinstance)
- [SlackIntegrationListRequest](integration_slack_v1.md#slackintegrationlistrequest)
- [SlackIntegrationListResponse](integration_slack_v1.md#slackintegrationlistresponse)
- [SlackIntegrationListStreamItem](integration_slack_v1.md#slackintegrationliststreamitem)
- [SlackIntegrationListStreamType](integration_slack_v1.md#slackintegrationliststreamtype)
- [SlackIntegrationOptions](integration_slack_v1.md#slackintegrationoptions)
- [SlackIntegrationSetupResponse](integration_slack_v1.md#slackintegrationsetupresponse)
- [SlackIntegrationUpdateRequest](integration_slack_v1.md#slackintegrationupdaterequest)
- [SlackIntegrationUpdateResponse](integration_slack_v1.md#slackintegrationupdateresponse)

### Functions

- [createSlackIntegration](integration_slack_v1.md#createslackintegration)
- [deleteSlackIntegration](integration_slack_v1.md#deleteslackintegration)
- [fetchSlackIntegration](integration_slack_v1.md#fetchslackintegration)
- [listSlackIntegrations](integration_slack_v1.md#listslackintegrations)
- [setupSlackIntegration](integration_slack_v1.md#setupslackintegration)
- [updateSlackIntegration](integration_slack_v1.md#updateslackintegration)

## Type Aliases

### ChatBotKitClient

Ƭ **ChatBotKitClient**\<\>: [`client`](client.md)

#### Defined in

[integration/slack/v1.js:2](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/slack/v1.js#L2)

___

### ResponsePromise

Ƭ **ResponsePromise**\<`T`, `U`\>: [`client`](client.md)

#### Type parameters

| Name |
| :------ |
| `T` |
| `U` |

#### Defined in

[integration/slack/v1.js:8](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/slack/v1.js#L8)

___

### SlackIntegrationCreateRequest

Ƭ **SlackIntegrationCreateRequest**\<\>: [`SlackIntegrationOptions`](integration_slack_v1.md#slackintegrationoptions) & \{ `model?`: [`model/v1`](model_v1.md)  }

#### Defined in

[integration/slack/v1.js:85](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/slack/v1.js#L85)

___

### SlackIntegrationCreateResponse

Ƭ **SlackIntegrationCreateResponse**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Defined in

[integration/slack/v1.js:89](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/slack/v1.js#L89)

___

### SlackIntegrationDeleteResponse

Ƭ **SlackIntegrationDeleteResponse**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Defined in

[integration/slack/v1.js:140](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/slack/v1.js#L140)

___

### SlackIntegrationFetchResponse

Ƭ **SlackIntegrationFetchResponse**\<\>: [`SlackIntegrationInstance`](integration_slack_v1.md#slackintegrationinstance) & {}

#### Defined in

[integration/slack/v1.js:66](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/slack/v1.js#L66)

___

### SlackIntegrationInstance

Ƭ **SlackIntegrationInstance**\<\>: [`SlackIntegrationOptions`](integration_slack_v1.md#slackintegrationoptions) & \{ `createdAt`: `number` ; `id`: `string` ; `updatedAt`: `number`  }

#### Defined in

[integration/slack/v1.js:29](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/slack/v1.js#L29)

___

### SlackIntegrationListRequest

Ƭ **SlackIntegrationListRequest**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `cursor?` | `string` |
| `meta?` | [`Record`]( https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type )\<`string`, `string`\> |
| `order?` | ``"desc"`` \| ``"asc"`` |
| `take?` | `number` |

#### Defined in

[integration/slack/v1.js:38](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/slack/v1.js#L38)

___

### SlackIntegrationListResponse

Ƭ **SlackIntegrationListResponse**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `items` | [`SlackIntegrationInstance`](integration_slack_v1.md#slackintegrationinstance)[] |

#### Defined in

[integration/slack/v1.js:40](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/slack/v1.js#L40)

___

### SlackIntegrationListStreamItem

Ƭ **SlackIntegrationListStreamItem**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `data` | [`SlackIntegrationInstance`](integration_slack_v1.md#slackintegrationinstance) |
| `type` | ``"item"`` |

#### Defined in

[integration/slack/v1.js:45](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/slack/v1.js#L45)

___

### SlackIntegrationListStreamType

Ƭ **SlackIntegrationListStreamType**\<\>: [`SlackIntegrationListStreamItem`](integration_slack_v1.md#slackintegrationliststreamitem)

#### Defined in

[integration/slack/v1.js:47](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/slack/v1.js#L47)

___

### SlackIntegrationOptions

Ƭ **SlackIntegrationOptions**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `blueprintId?` | `string` |
| `botId?` | `string` |
| `botToken?` | `string` |
| `contactCollection?` | `boolean` |
| `description?` | `string` |
| `meta?` | [`Record`]( https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type )\<`string`, `any`\> |
| `name?` | `string` |
| `sessionDuration?` | `number` |
| `signingSecret?` | `string` |
| `visibleMessages?` | `number` |

#### Defined in

[integration/slack/v1.js:23](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/slack/v1.js#L23)

___

### SlackIntegrationSetupResponse

Ƭ **SlackIntegrationSetupResponse**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Defined in

[integration/slack/v1.js:161](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/slack/v1.js#L161)

___

### SlackIntegrationUpdateRequest

Ƭ **SlackIntegrationUpdateRequest**\<\>: [`SlackIntegrationOptions`](integration_slack_v1.md#slackintegrationoptions) & \{ `model?`: [`model/v1`](model_v1.md)  }

#### Defined in

[integration/slack/v1.js:112](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/slack/v1.js#L112)

___

### SlackIntegrationUpdateResponse

Ƭ **SlackIntegrationUpdateResponse**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Defined in

[integration/slack/v1.js:116](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/slack/v1.js#L116)

## Functions

### createSlackIntegration

▸ **createSlackIntegration**(`client`, `request`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<[`SlackIntegrationCreateResponse`](integration_slack_v1.md#slackintegrationcreateresponse)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`ChatBotKitClient`](../classes/client.ChatBotKitClient.md) |
| `request` | [`SlackIntegrationCreateRequest`](integration_slack_v1.md#slackintegrationcreaterequest) |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<[`SlackIntegrationCreateResponse`](integration_slack_v1.md#slackintegrationcreateresponse)\>

#### Defined in

[integration/slack/v1.js:95](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/slack/v1.js#L95)

___

### deleteSlackIntegration

▸ **deleteSlackIntegration**(`client`, `slackId`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<[`SlackIntegrationDeleteResponse`](integration_slack_v1.md#slackintegrationdeleteresponse)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`ChatBotKitClient`](../classes/client.ChatBotKitClient.md) |
| `slackId` | `string` |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<[`SlackIntegrationDeleteResponse`](integration_slack_v1.md#slackintegrationdeleteresponse)\>

#### Defined in

[integration/slack/v1.js:146](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/slack/v1.js#L146)

___

### fetchSlackIntegration

▸ **fetchSlackIntegration**(`client`, `slackId`): [`ResponsePromise`](../classes/client.ResponsePromise.md)\<[`SlackIntegrationFetchResponse`](integration_slack_v1.md#slackintegrationfetchresponse), `never`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`ChatBotKitClient`](../classes/client.ChatBotKitClient.md) |
| `slackId` | `string` |

#### Returns

[`ResponsePromise`](../classes/client.ResponsePromise.md)\<[`SlackIntegrationFetchResponse`](integration_slack_v1.md#slackintegrationfetchresponse), `never`\>

#### Defined in

[integration/slack/v1.js:72](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/slack/v1.js#L72)

___

### listSlackIntegrations

▸ **listSlackIntegrations**(`client`, `request?`): [`ResponsePromise`](../classes/client.ResponsePromise.md)\<[`SlackIntegrationListResponse`](integration_slack_v1.md#slackintegrationlistresponse), [`SlackIntegrationListStreamItem`](integration_slack_v1.md#slackintegrationliststreamitem)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`ChatBotKitClient`](../classes/client.ChatBotKitClient.md) |
| `request?` | [`SlackIntegrationListRequest`](integration_slack_v1.md#slackintegrationlistrequest) |

#### Returns

[`ResponsePromise`](../classes/client.ResponsePromise.md)\<[`SlackIntegrationListResponse`](integration_slack_v1.md#slackintegrationlistresponse), [`SlackIntegrationListStreamItem`](integration_slack_v1.md#slackintegrationliststreamitem)\>

#### Defined in

[integration/slack/v1.js:53](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/slack/v1.js#L53)

___

### setupSlackIntegration

▸ **setupSlackIntegration**(`client`, `slackId`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<[`SlackIntegrationSetupResponse`](integration_slack_v1.md#slackintegrationsetupresponse)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`ChatBotKitClient`](../classes/client.ChatBotKitClient.md) |
| `slackId` | `string` |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<[`SlackIntegrationSetupResponse`](integration_slack_v1.md#slackintegrationsetupresponse)\>

#### Defined in

[integration/slack/v1.js:167](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/slack/v1.js#L167)

___

### updateSlackIntegration

▸ **updateSlackIntegration**(`client`, `slackId`, `request`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<[`SlackIntegrationUpdateResponse`](integration_slack_v1.md#slackintegrationupdateresponse)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`ChatBotKitClient`](../classes/client.ChatBotKitClient.md) |
| `slackId` | `string` |
| `request` | [`SlackIntegrationUpdateRequest`](integration_slack_v1.md#slackintegrationupdaterequest) |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<[`SlackIntegrationUpdateResponse`](integration_slack_v1.md#slackintegrationupdateresponse)\>

#### Defined in

[integration/slack/v1.js:123](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/slack/v1.js#L123)
