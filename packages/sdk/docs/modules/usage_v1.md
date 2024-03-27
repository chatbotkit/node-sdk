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

[usage/v1.js:17](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/usage/v1.js#L17)

___

### UsageInstance

Ƭ **UsageInstance**\<\>: [`UsageOptions`](usage_v1.md#usageoptions) & {}

#### Defined in

[usage/v1.js:12](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/usage/v1.js#L12)

___

### UsageOptions

Ƭ **UsageOptions**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `conversations` | `number` |
| `tokens` | `number` |

#### Defined in

[usage/v1.js:9](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/usage/v1.js#L9)

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

[usage/v1.js:22](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/usage/v1.js#L22)
