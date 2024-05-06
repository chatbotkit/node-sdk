[@chatbotkit/sdk](../README.md) / [Modules](../modules.md) / usage/v1

# Module: usage/v1

## Table of contents

### Type Aliases

- [ChatBotKitClient](usage_v1.md#chatbotkitclient)
- [UsageFetchResponse](usage_v1.md#usagefetchresponse)
- [UsageInstance](usage_v1.md#usageinstance)
- [UsageOptions](usage_v1.md#usageoptions)

### Functions

- [fetchUsage](usage_v1.md#fetchusage)

## Type Aliases

### ChatBotKitClient

Ƭ **ChatBotKitClient**\<\>: [`client`](client.md)

#### Defined in

[usage/v1.js:2](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/usage/v1.js#L2)

___

### UsageFetchResponse

Ƭ **UsageFetchResponse**\<\>: [`UsageInstance`](usage_v1.md#usageinstance) & {}

#### Defined in

[usage/v1.js:18](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/usage/v1.js#L18)

___

### UsageInstance

Ƭ **UsageInstance**\<\>: [`UsageOptions`](usage_v1.md#usageoptions) & {}

#### Defined in

[usage/v1.js:13](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/usage/v1.js#L13)

___

### UsageOptions

Ƭ **UsageOptions**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `conversations` | `number` |
| `messages` | `number` |
| `tokens` | `number` |

#### Defined in

[usage/v1.js:10](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/usage/v1.js#L10)

## Functions

### fetchUsage

▸ **fetchUsage**(`client`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<[`UsageOptions`](usage_v1.md#usageoptions)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`ChatBotKitClient`](../classes/client.ChatBotKitClient.md) |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<[`UsageOptions`](usage_v1.md#usageoptions)\>

#### Defined in

[usage/v1.js:23](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/usage/v1.js#L23)
