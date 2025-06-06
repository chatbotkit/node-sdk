[@chatbotkit/sdk](../README.md) / [Modules](../modules.md) / integration/slack/v1

# Module: integration/slack/v1

## Table of contents

### Type Aliases

- [BotConfig](integration_slack_v1.md#botconfig)
- [BotRef](integration_slack_v1.md#botref)
- [BotRefOrConfig](integration_slack_v1.md#botreforconfig)
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

[integration/slack/v1.js:25](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/slack/v1.js#L25)

___

### BotRef

Ƭ **BotRef**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `botId?` | `string` |

#### Defined in

[integration/slack/v1.js:16](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/slack/v1.js#L16)

___

### BotRefOrConfig

Ƭ **BotRefOrConfig**\<\>: [`BotRef`](integration_slack_v1.md#botref) \| [`BotConfig`](integration_slack_v1.md#botconfig)

#### Defined in

[integration/slack/v1.js:27](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/slack/v1.js#L27)

___

### ChatBotKitClient

Ƭ **ChatBotKitClient**\<\>: [`client`](client.md)

#### Defined in

[integration/slack/v1.js:4](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/slack/v1.js#L4)

___

### ResponsePromise

Ƭ **ResponsePromise**\<`T`, `U`\>: [`client`](client.md)

#### Type parameters

| Name |
| :------ |
| `T` |
| `U` |

#### Defined in

[integration/slack/v1.js:10](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/slack/v1.js#L10)

___

### SlackIntegrationCreateRequest

Ƭ **SlackIntegrationCreateRequest**\<\>: [`SlackIntegrationOptions`](integration_slack_v1.md#slackintegrationoptions) & \{ `model?`: [`model/v1`](model_v1.md)  }

#### Defined in

[integration/slack/v1.js:95](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/slack/v1.js#L95)

___

### SlackIntegrationCreateResponse

Ƭ **SlackIntegrationCreateResponse**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Defined in

[integration/slack/v1.js:99](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/slack/v1.js#L99)

___

### SlackIntegrationDeleteResponse

Ƭ **SlackIntegrationDeleteResponse**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Defined in

[integration/slack/v1.js:154](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/slack/v1.js#L154)

___

### SlackIntegrationFetchResponse

Ƭ **SlackIntegrationFetchResponse**\<\>: [`SlackIntegrationInstance`](integration_slack_v1.md#slackintegrationinstance) & {}

#### Defined in

[integration/slack/v1.js:76](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/slack/v1.js#L76)

___

### SlackIntegrationInstance

Ƭ **SlackIntegrationInstance**\<\>: [`SlackIntegrationOptions`](integration_slack_v1.md#slackintegrationoptions) & \{ `createdAt`: `number` ; `id`: `string` ; `updatedAt`: `number`  }

#### Defined in

[integration/slack/v1.js:44](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/slack/v1.js#L44)

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

[integration/slack/v1.js:48](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/slack/v1.js#L48)

___

### SlackIntegrationListResponse

Ƭ **SlackIntegrationListResponse**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `items` | [`SlackIntegrationInstance`](integration_slack_v1.md#slackintegrationinstance)[] |

#### Defined in

[integration/slack/v1.js:50](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/slack/v1.js#L50)

___

### SlackIntegrationListStreamItem

Ƭ **SlackIntegrationListStreamItem**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `data` | [`SlackIntegrationInstance`](integration_slack_v1.md#slackintegrationinstance) |
| `type` | ``"item"`` |

#### Defined in

[integration/slack/v1.js:55](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/slack/v1.js#L55)

___

### SlackIntegrationListStreamType

Ƭ **SlackIntegrationListStreamType**\<\>: [`SlackIntegrationListStreamItem`](integration_slack_v1.md#slackintegrationliststreamitem)

#### Defined in

[integration/slack/v1.js:57](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/slack/v1.js#L57)

___

### SlackIntegrationOptions

Ƭ **SlackIntegrationOptions**\<\>: [`BotRefOrConfig`](integration_slack_v1.md#botreforconfig) & \{ `botToken?`: `string` ; `contactCollection?`: `boolean` ; `description?`: `string` ; `meta?`: [`Record`]( https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type )\<`string`, `any`\> ; `name?`: `string` ; `sessionDuration?`: `number` ; `signingSecret?`: `string` ; `visibleMessages?`: `number`  }

#### Defined in

[integration/slack/v1.js:38](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/slack/v1.js#L38)

___

### SlackIntegrationSetupResponse

Ƭ **SlackIntegrationSetupResponse**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Defined in

[integration/slack/v1.js:175](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/slack/v1.js#L175)

___

### SlackIntegrationUpdateRequest

Ƭ **SlackIntegrationUpdateRequest**\<\>: [`SlackIntegrationOptions`](integration_slack_v1.md#slackintegrationoptions) & \{ `model?`: [`model/v1`](model_v1.md)  }

#### Defined in

[integration/slack/v1.js:124](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/slack/v1.js#L124)

___

### SlackIntegrationUpdateResponse

Ƭ **SlackIntegrationUpdateResponse**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Defined in

[integration/slack/v1.js:128](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/slack/v1.js#L128)

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

[integration/slack/v1.js:105](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/slack/v1.js#L105)

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

[integration/slack/v1.js:160](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/slack/v1.js#L160)

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

[integration/slack/v1.js:82](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/slack/v1.js#L82)

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

[integration/slack/v1.js:63](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/slack/v1.js#L63)

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

[integration/slack/v1.js:181](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/slack/v1.js#L181)

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

[integration/slack/v1.js:135](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/slack/v1.js#L135)
