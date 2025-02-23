[@chatbotkit/sdk](../README.md) / [Modules](../modules.md) / usage/v1

# Module: usage/v1

## Table of contents

### Type Aliases

- [ChatBotKitClient](usage_v1.md#chatbotkitclient)
- [ResponsePromise](usage_v1.md#responsepromise)
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

### ResponsePromise

Ƭ **ResponsePromise**\<`T`, `U`\>: [`client`](client.md)

#### Type parameters

| Name |
| :------ |
| `T` |
| `U` |

#### Defined in

[usage/v1.js:8](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/usage/v1.js#L8)

___

### UsageFetchResponse

Ƭ **UsageFetchResponse**\<\>: [`UsageInstance`](usage_v1.md#usageinstance) & {}

#### Defined in

[usage/v1.js:32](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/usage/v1.js#L32)

___

### UsageInstance

Ƭ **UsageInstance**\<\>: [`UsageOptions`](usage_v1.md#usageoptions) & {}

#### Defined in

[usage/v1.js:27](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/usage/v1.js#L27)

___

### UsageOptions

Ƭ **UsageOptions**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `conversations` | `number` |
| `database` | \{ `abilities`: `number` ; `datasets`: `number` ; `files`: `number` ; `records`: `number` ; `skillsets`: `number` ; `users`: `number`  } |
| `database.abilities` | `number` |
| `database.datasets` | `number` |
| `database.files` | `number` |
| `database.records` | `number` |
| `database.skillsets` | `number` |
| `database.users` | `number` |
| `messages` | `number` |
| `tokens` | `number` |

#### Defined in

[usage/v1.js:24](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/usage/v1.js#L24)

## Functions

### fetchUsage

▸ **fetchUsage**(`client`): [`ResponsePromise`](../classes/client.ResponsePromise.md)\<[`UsageOptions`](usage_v1.md#usageoptions), `never`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`ChatBotKitClient`](../classes/client.ChatBotKitClient.md) |

#### Returns

[`ResponsePromise`](../classes/client.ResponsePromise.md)\<[`UsageOptions`](usage_v1.md#usageoptions), `never`\>

#### Defined in

[usage/v1.js:37](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/usage/v1.js#L37)
