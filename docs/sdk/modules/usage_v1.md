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

Ƭ **ChatBotKitClient**\<\>: `ChatBotKitClient`

#### Defined in

[usage/v1.js:2](https://github.com/chatbotkit/node-sdk/blob/b5ebcd8/packages/sdk/src/usage/v1.js#L2)

___

### UsageFetchResponse

Ƭ **UsageFetchResponse**\<\>: [`UsageInstance`](usage_v1.md#usageinstance)

#### Defined in

[usage/v1.js:16](https://github.com/chatbotkit/node-sdk/blob/b5ebcd8/packages/sdk/src/usage/v1.js#L16)

___

### UsageInstance

Ƭ **UsageInstance**\<\>: {} & [`UsageOptions`](usage_v1.md#usageoptions)

#### Defined in

[usage/v1.js:12](https://github.com/chatbotkit/node-sdk/blob/b5ebcd8/packages/sdk/src/usage/v1.js#L12)

___

### UsageOptions

Ƭ **UsageOptions**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `conversations` | `number` |
| `tokens` | `number` |

#### Defined in

[usage/v1.js:9](https://github.com/chatbotkit/node-sdk/blob/b5ebcd8/packages/sdk/src/usage/v1.js#L9)

## Functions

### fetchUsage

▸ **fetchUsage**(`client`): `Promise`\<[`UsageOptions`](usage_v1.md#usageoptions)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | `ChatBotKitClient` |

#### Returns

`Promise`\<[`UsageOptions`](usage_v1.md#usageoptions)\>

#### Defined in

[usage/v1.js:21](https://github.com/chatbotkit/node-sdk/blob/b5ebcd8/packages/sdk/src/usage/v1.js#L21)
