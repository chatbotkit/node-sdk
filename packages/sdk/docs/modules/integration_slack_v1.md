[@chatbotkit/sdk](../README.md) / [Modules](../modules.md) / integration/slack/v1

# Module: integration/slack/v1

## Table of contents

### Type Aliases

- [ChatBotKitClient](integration_slack_v1.md#chatbotkitclient)
- [ResponsePromise](integration_slack_v1.md#responsepromise)
- [SlackIntegrationCreateRequest](integration_slack_v1.md#slackintegrationcreaterequest)
- [SlackIntegrationCreateRequestBody](integration_slack_v1.md#slackintegrationcreaterequestbody)
- [SlackIntegrationCreateResponse](integration_slack_v1.md#slackintegrationcreateresponse)
- [SlackIntegrationCreateResponseBody](integration_slack_v1.md#slackintegrationcreateresponsebody)
- [SlackIntegrationDeleteRequest](integration_slack_v1.md#slackintegrationdeleterequest)
- [SlackIntegrationDeleteRequestBody](integration_slack_v1.md#slackintegrationdeleterequestbody)
- [SlackIntegrationDeleteResponse](integration_slack_v1.md#slackintegrationdeleteresponse)
- [SlackIntegrationDeleteResponseBody](integration_slack_v1.md#slackintegrationdeleteresponsebody)
- [SlackIntegrationFetchResponse](integration_slack_v1.md#slackintegrationfetchresponse)
- [SlackIntegrationListRequest](integration_slack_v1.md#slackintegrationlistrequest)
- [SlackIntegrationListResponse](integration_slack_v1.md#slackintegrationlistresponse)
- [SlackIntegrationListStreamType](integration_slack_v1.md#slackintegrationliststreamtype)
- [SlackIntegrationSetupRequest](integration_slack_v1.md#slackintegrationsetuprequest)
- [SlackIntegrationSetupRequestBody](integration_slack_v1.md#slackintegrationsetuprequestbody)
- [SlackIntegrationSetupResponse](integration_slack_v1.md#slackintegrationsetupresponse)
- [SlackIntegrationSetupResponseBody](integration_slack_v1.md#slackintegrationsetupresponsebody)
- [SlackIntegrationUpdateRequest](integration_slack_v1.md#slackintegrationupdaterequest)
- [SlackIntegrationUpdateRequestBody](integration_slack_v1.md#slackintegrationupdaterequestbody)
- [SlackIntegrationUpdateResponse](integration_slack_v1.md#slackintegrationupdateresponse)
- [SlackIntegrationUpdateResponseBody](integration_slack_v1.md#slackintegrationupdateresponsebody)

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

Ƭ **SlackIntegrationCreateRequest**\<\>: [`SlackIntegrationCreateRequestBody`](integration_slack_v1.md#slackintegrationcreaterequestbody)

#### Defined in

[integration/slack/v1.js:55](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/slack/v1.js#L55)

___

### SlackIntegrationCreateRequestBody

Ƭ **SlackIntegrationCreateRequestBody**\<\>: `operations`[``"createSlackIntegration"``][``"requestBody"``][``"content"``][``"application/json"``]

#### Defined in

[integration/slack/v1.js:53](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/slack/v1.js#L53)

___

### SlackIntegrationCreateResponse

Ƭ **SlackIntegrationCreateResponse**\<\>: [`SlackIntegrationCreateResponseBody`](integration_slack_v1.md#slackintegrationcreateresponsebody)

#### Defined in

[integration/slack/v1.js:59](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/slack/v1.js#L59)

___

### SlackIntegrationCreateResponseBody

Ƭ **SlackIntegrationCreateResponseBody**\<\>: `operations`[``"createSlackIntegration"``][``"responses"``][``"200"``][``"content"``][``"application/json"``]

#### Defined in

[integration/slack/v1.js:57](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/slack/v1.js#L57)

___

### SlackIntegrationDeleteRequest

Ƭ **SlackIntegrationDeleteRequest**\<\>: [`SlackIntegrationDeleteRequestBody`](integration_slack_v1.md#slackintegrationdeleterequestbody)

#### Defined in

[integration/slack/v1.js:110](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/slack/v1.js#L110)

___

### SlackIntegrationDeleteRequestBody

Ƭ **SlackIntegrationDeleteRequestBody**\<\>: `operations`[``"deleteSlackIntegration"``][``"requestBody"``][``"content"``][``"application/json"``]

#### Defined in

[integration/slack/v1.js:108](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/slack/v1.js#L108)

___

### SlackIntegrationDeleteResponse

Ƭ **SlackIntegrationDeleteResponse**\<\>: [`SlackIntegrationDeleteResponseBody`](integration_slack_v1.md#slackintegrationdeleteresponsebody)

#### Defined in

[integration/slack/v1.js:114](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/slack/v1.js#L114)

___

### SlackIntegrationDeleteResponseBody

Ƭ **SlackIntegrationDeleteResponseBody**\<\>: `operations`[``"deleteSlackIntegration"``][``"responses"``][``"200"``][``"content"``][``"application/json"``]

#### Defined in

[integration/slack/v1.js:112](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/slack/v1.js#L112)

___

### SlackIntegrationFetchResponse

Ƭ **SlackIntegrationFetchResponse**\<\>: `operations`[``"fetchSlackIntegration"``][``"responses"``][``"200"``][``"content"``][``"application/json"``]

#### Defined in

[integration/slack/v1.js:37](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/slack/v1.js#L37)

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

[integration/slack/v1.js:17](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/slack/v1.js#L17)

___

### SlackIntegrationListResponse

Ƭ **SlackIntegrationListResponse**\<\>: `operations`[``"listSlackIntegrations"``][``"responses"``][``"200"``][``"content"``][``"application/json"``]

#### Defined in

[integration/slack/v1.js:19](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/slack/v1.js#L19)

___

### SlackIntegrationListStreamType

Ƭ **SlackIntegrationListStreamType**\<\>: `operations`[``"listSlackIntegrations"``][``"responses"``][``"200"``][``"content"``][``"application/jsonl"``]

#### Defined in

[integration/slack/v1.js:21](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/slack/v1.js#L21)

___

### SlackIntegrationSetupRequest

Ƭ **SlackIntegrationSetupRequest**\<\>: [`SlackIntegrationSetupRequestBody`](integration_slack_v1.md#slackintegrationsetuprequestbody)

#### Defined in

[integration/slack/v1.js:135](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/slack/v1.js#L135)

___

### SlackIntegrationSetupRequestBody

Ƭ **SlackIntegrationSetupRequestBody**\<\>: `operations`[``"setupSlackIntegration"``][``"requestBody"``][``"content"``][``"application/json"``]

#### Defined in

[integration/slack/v1.js:133](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/slack/v1.js#L133)

___

### SlackIntegrationSetupResponse

Ƭ **SlackIntegrationSetupResponse**\<\>: [`SlackIntegrationSetupResponseBody`](integration_slack_v1.md#slackintegrationsetupresponsebody)

#### Defined in

[integration/slack/v1.js:139](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/slack/v1.js#L139)

___

### SlackIntegrationSetupResponseBody

Ƭ **SlackIntegrationSetupResponseBody**\<\>: `operations`[``"setupSlackIntegration"``][``"responses"``][``"200"``][``"content"``][``"application/json"``]

#### Defined in

[integration/slack/v1.js:137](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/slack/v1.js#L137)

___

### SlackIntegrationUpdateRequest

Ƭ **SlackIntegrationUpdateRequest**\<\>: [`SlackIntegrationUpdateRequestBody`](integration_slack_v1.md#slackintegrationupdaterequestbody)

#### Defined in

[integration/slack/v1.js:82](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/slack/v1.js#L82)

___

### SlackIntegrationUpdateRequestBody

Ƭ **SlackIntegrationUpdateRequestBody**\<\>: `operations`[``"updateSlackIntegration"``][``"requestBody"``][``"content"``][``"application/json"``]

#### Defined in

[integration/slack/v1.js:80](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/slack/v1.js#L80)

___

### SlackIntegrationUpdateResponse

Ƭ **SlackIntegrationUpdateResponse**\<\>: [`SlackIntegrationUpdateResponseBody`](integration_slack_v1.md#slackintegrationupdateresponsebody)

#### Defined in

[integration/slack/v1.js:86](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/slack/v1.js#L86)

___

### SlackIntegrationUpdateResponseBody

Ƭ **SlackIntegrationUpdateResponseBody**\<\>: `operations`[``"updateSlackIntegration"``][``"responses"``][``"200"``][``"content"``][``"application/json"``]

#### Defined in

[integration/slack/v1.js:84](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/slack/v1.js#L84)

## Functions

### createSlackIntegration

▸ **createSlackIntegration**(`client`, `request`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<{}\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`ChatBotKitClient`](../classes/client.ChatBotKitClient.md) |
| `request` | `Object` |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<{}\>

#### Defined in

[integration/slack/v1.js:65](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/slack/v1.js#L65)

___

### deleteSlackIntegration

▸ **deleteSlackIntegration**(`client`, `slackId`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<{}\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`ChatBotKitClient`](../classes/client.ChatBotKitClient.md) |
| `slackId` | `string` |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<{}\>

#### Defined in

[integration/slack/v1.js:120](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/slack/v1.js#L120)

___

### fetchSlackIntegration

▸ **fetchSlackIntegration**(`client`, `slackId`): [`ResponsePromise`](../classes/client.ResponsePromise.md)\<{}, `never`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`ChatBotKitClient`](../classes/client.ChatBotKitClient.md) |
| `slackId` | `string` |

#### Returns

[`ResponsePromise`](../classes/client.ResponsePromise.md)\<{}, `never`\>

#### Defined in

[integration/slack/v1.js:43](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/slack/v1.js#L43)

___

### listSlackIntegrations

▸ **listSlackIntegrations**(`client`, `request?`): [`ResponsePromise`](../classes/client.ResponsePromise.md)\<{}, {}\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`ChatBotKitClient`](../classes/client.ChatBotKitClient.md) |
| `request?` | [`SlackIntegrationListRequest`](integration_slack_v1.md#slackintegrationlistrequest) |

#### Returns

[`ResponsePromise`](../classes/client.ResponsePromise.md)\<{}, {}\>

#### Defined in

[integration/slack/v1.js:27](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/slack/v1.js#L27)

___

### setupSlackIntegration

▸ **setupSlackIntegration**(`client`, `slackId`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<{}\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`ChatBotKitClient`](../classes/client.ChatBotKitClient.md) |
| `slackId` | `string` |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<{}\>

#### Defined in

[integration/slack/v1.js:145](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/slack/v1.js#L145)

___

### updateSlackIntegration

▸ **updateSlackIntegration**(`client`, `slackId`, `request`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<{}\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`ChatBotKitClient`](../classes/client.ChatBotKitClient.md) |
| `slackId` | `string` |
| `request` | `Object` |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<{}\>

#### Defined in

[integration/slack/v1.js:93](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/slack/v1.js#L93)
