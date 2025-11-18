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

- [create](integration_slack.SlackIntegrationClient.md#create)
- [delete](integration_slack.SlackIntegrationClient.md#delete)
- [extend](integration_slack.SlackIntegrationClient.md#extend)
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

### create

▸ **create**(`request`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<{}\>

Creates a new slack integration.

#### Parameters

| Name | Type |
| :------ | :------ |
| `request` | `Object` |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<{}\>

#### Defined in

[integration/slack/index.js:51](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/slack/index.js#L51)

___

### delete

▸ **delete**(`slackId`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<{}\>

Deletes a slack integration.

#### Parameters

| Name | Type |
| :------ | :------ |
| `slackId` | `string` |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<{}\>

#### Defined in

[integration/slack/index.js:72](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/slack/index.js#L72)

___

### extend

▸ **extend**(`extensionOptions`): [`SlackIntegrationClient`](integration_slack.SlackIntegrationClient.md)

Creates a new instance of the same client type with extended options.

This is useful when you need to create a client with modified configuration
(e.g., different endpoint, token, or headers) without affecting the original.

Note: This method creates a completely new instance rather than cloning,
which is necessary because private class fields cannot be copied.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `extensionOptions` | [`Partial`]( https://www.typescriptlang.org/docs/handbook/utility-types.html#partialtype )\<[`ChatBotKitClientOptions`](../interfaces/client.ChatBotKitClientOptions.md)\> | Options to merge with current options |

#### Returns

[`SlackIntegrationClient`](integration_slack.SlackIntegrationClient.md)

A new instance of the same client class with extended options

#### Inherited from

[ChatBotKitClient](client.ChatBotKitClient.md).[extend](client.ChatBotKitClient.md#extend)

#### Defined in

[client.js:382](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/client.js#L382)

___

### fetch

▸ **fetch**(`slackId`): [`ResponsePromise`](client.ResponsePromise.md)\<{}, `never`\>

Fetches a slack integration.

#### Parameters

| Name | Type |
| :------ | :------ |
| `slackId` | `string` |

#### Returns

[`ResponsePromise`](client.ResponsePromise.md)\<{}, `never`\>

#### Defined in

[integration/slack/index.js:41](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/slack/index.js#L41)

___

### list

▸ **list**(`request?`): [`ResponsePromise`](client.ResponsePromise.md)\<{}, {}\>

Retrieves a list of all slack integrations.

#### Parameters

| Name | Type |
| :------ | :------ |
| `request?` | [`SlackIntegrationListRequest`](../modules/integration_slack_v1.md#slackintegrationlistrequest) |

#### Returns

[`ResponsePromise`](client.ResponsePromise.md)\<{}, {}\>

#### Defined in

[integration/slack/index.js:31](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/slack/index.js#L31)

___

### setup

▸ **setup**(`slackId`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<{}\>

Setups a slack integration.

#### Parameters

| Name | Type |
| :------ | :------ |
| `slackId` | `string` |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<{}\>

#### Defined in

[integration/slack/index.js:82](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/slack/index.js#L82)

___

### update

▸ **update**(`slackId`, `request`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<{}\>

Updates a slack integration.

#### Parameters

| Name | Type |
| :------ | :------ |
| `slackId` | `string` |
| `request` | `Object` |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<{}\>

#### Defined in

[integration/slack/index.js:62](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/slack/index.js#L62)
