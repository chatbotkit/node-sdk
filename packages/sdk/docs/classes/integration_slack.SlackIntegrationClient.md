[@chatbotkit/sdk](../README.md) / [Modules](../modules.md) / [integration/slack](../modules/integration_slack.md) / SlackIntegrationClient

# Class: SlackIntegrationClient

[integration/slack](../modules/integration_slack.md).SlackIntegrationClient

**`Template`**

**`Template`**

## Hierarchy

- [`ChatBotKitClient`](client.ChatBotKitClient.md)

  ↳ **`SlackIntegrationClient`**

## Table of contents

### Constructors

- [constructor](integration_slack.SlackIntegrationClient.md#constructor)

### Methods

- [clientFetch](integration_slack.SlackIntegrationClient.md#clientfetch)
- [create](integration_slack.SlackIntegrationClient.md#create)
- [delete](integration_slack.SlackIntegrationClient.md#delete)
- [fetch](integration_slack.SlackIntegrationClient.md#fetch)
- [list](integration_slack.SlackIntegrationClient.md#list)
- [setup](integration_slack.SlackIntegrationClient.md#setup)
- [update](integration_slack.SlackIntegrationClient.md#update)

## Constructors

### constructor

• **new SlackIntegrationClient**(`options`): [`SlackIntegrationClient`](integration_slack.SlackIntegrationClient.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`ChatBotKitClientOptions`](../interfaces/client.ChatBotKitClientOptions.md) |

#### Returns

[`SlackIntegrationClient`](integration_slack.SlackIntegrationClient.md)

#### Overrides

[ChatBotKitClient](client.ChatBotKitClient.md).[constructor](client.ChatBotKitClient.md#constructor)

#### Defined in

[integration/slack/index.js:21](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/slack/index.js#L21)

## Methods

### clientFetch

▸ **clientFetch**\<`T`, `U`\>(`path`, `options?`): [`ResponsePromise`](client.ResponsePromise.md)\<`T`, `U`\>

#### Type parameters

| Name |
| :------ |
| `T` |
| `U` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | `string` |
| `options?` | `Object` |
| `options.buffer?` | [`ArrayBuffer`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer ) |
| `options.endpoint?` | `string` |
| `options.external?` | `boolean` |
| `options.fetchFn?` | [`FetchFunction`](../modules/client.md#fetchfunction) |
| `options.file?` | `Object` |
| `options.file.data` | `string` \| [`ArrayBuffer`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer ) |
| `options.file.name?` | `string` |
| `options.file.type?` | `string` |
| `options.headers?` | [`Record`]( https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type )\<`string`, `any`\> |
| `options.method?` | `string` |
| `options.query?` | [`Record`]( https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type )\<`string`, `any`\> |
| `options.record?` | [`Record`]( https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type )\<`string`, `any`\> |
| `options.retries?` | `number` |
| `options.retryDelay?` | `number` |
| `options.retryTimeout?` | `boolean` |
| `options.timeout?` | `number` |

#### Returns

[`ResponsePromise`](client.ResponsePromise.md)\<`T`, `U`\>

#### Inherited from

[ChatBotKitClient](client.ChatBotKitClient.md).[clientFetch](client.ChatBotKitClient.md#clientfetch)

#### Defined in

[client.js:345](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/client.js#L345)

___

### create

▸ **create**(`request`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<[`SlackIntegrationCreateResponse`](../modules/integration_slack_v1.md#slackintegrationcreateresponse)\>

Creates a new slack integration.

#### Parameters

| Name | Type |
| :------ | :------ |
| `request` | [`SlackIntegrationCreateRequest`](../modules/integration_slack_v1.md#slackintegrationcreaterequest) |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<[`SlackIntegrationCreateResponse`](../modules/integration_slack_v1.md#slackintegrationcreateresponse)\>

#### Defined in

[integration/slack/index.js:51](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/slack/index.js#L51)

___

### delete

▸ **delete**(`slackId`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<[`SlackIntegrationDeleteResponse`](../modules/integration_slack_v1.md#slackintegrationdeleteresponse)\>

Deletes a slack integration.

#### Parameters

| Name | Type |
| :------ | :------ |
| `slackId` | `string` |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<[`SlackIntegrationDeleteResponse`](../modules/integration_slack_v1.md#slackintegrationdeleteresponse)\>

#### Defined in

[integration/slack/index.js:72](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/slack/index.js#L72)

___

### fetch

▸ **fetch**(`slackId`): [`ResponsePromise`](client.ResponsePromise.md)\<[`SlackIntegrationFetchResponse`](../modules/integration_slack_v1.md#slackintegrationfetchresponse), `never`\>

Fetches a slack integration.

#### Parameters

| Name | Type |
| :------ | :------ |
| `slackId` | `string` |

#### Returns

[`ResponsePromise`](client.ResponsePromise.md)\<[`SlackIntegrationFetchResponse`](../modules/integration_slack_v1.md#slackintegrationfetchresponse), `never`\>

#### Defined in

[integration/slack/index.js:41](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/slack/index.js#L41)

___

### list

▸ **list**(`request?`): [`ResponsePromise`](client.ResponsePromise.md)\<[`SlackIntegrationListResponse`](../modules/integration_slack_v1.md#slackintegrationlistresponse), [`SlackIntegrationListStreamItem`](../modules/integration_slack_v1.md#slackintegrationliststreamitem)\>

Retrieves a list of all slack integrations.

#### Parameters

| Name | Type |
| :------ | :------ |
| `request?` | [`SlackIntegrationListRequest`](../modules/integration_slack_v1.md#slackintegrationlistrequest) |

#### Returns

[`ResponsePromise`](client.ResponsePromise.md)\<[`SlackIntegrationListResponse`](../modules/integration_slack_v1.md#slackintegrationlistresponse), [`SlackIntegrationListStreamItem`](../modules/integration_slack_v1.md#slackintegrationliststreamitem)\>

#### Defined in

[integration/slack/index.js:31](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/slack/index.js#L31)

___

### setup

▸ **setup**(`slackId`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<[`SlackIntegrationSetupResponse`](../modules/integration_slack_v1.md#slackintegrationsetupresponse)\>

Setups a slack integration.

#### Parameters

| Name | Type |
| :------ | :------ |
| `slackId` | `string` |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<[`SlackIntegrationSetupResponse`](../modules/integration_slack_v1.md#slackintegrationsetupresponse)\>

#### Defined in

[integration/slack/index.js:82](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/slack/index.js#L82)

___

### update

▸ **update**(`slackId`, `request`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<[`SlackIntegrationUpdateResponse`](../modules/integration_slack_v1.md#slackintegrationupdateresponse)\>

Updates a slack integration.

#### Parameters

| Name | Type |
| :------ | :------ |
| `slackId` | `string` |
| `request` | [`SlackIntegrationUpdateRequest`](../modules/integration_slack_v1.md#slackintegrationupdaterequest) |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<[`SlackIntegrationUpdateResponse`](../modules/integration_slack_v1.md#slackintegrationupdateresponse)\>

#### Defined in

[integration/slack/index.js:62](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/slack/index.js#L62)
