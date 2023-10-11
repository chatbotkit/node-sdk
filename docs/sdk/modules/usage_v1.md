[@chatbotkit/sdk](../README.md) / [Modules](../modules.md) / usage/v1

# Module: usage/v1

## Table of contents

### Type Aliases

- [ChatBotKitClient](usage_v1.md#chatbotkitclient)
- [UsageFetchResponse](usage_v1.md#usagefetchresponse)
- [UsageInstance](usage_v1.md#usageinstance)
- [UsageOptions](usage_v1.md#usageoptions)

### Functions

- [usageFetch](usage_v1.md#usagefetch)

## Type Aliases

### ChatBotKitClient

Ƭ **ChatBotKitClient**<\>: `ChatBotKitClient`

#### Defined in

[usage/v1.js:2](https://github.com/chatbotkit/node-sdk/blob/0fead0f/packages/sdk/src/usage/v1.js#L2)

___

### UsageFetchResponse

Ƭ **UsageFetchResponse**<\>: [`UsageInstance`](usage_v1.md#usageinstance)

#### Defined in

[usage/v1.js:20](https://github.com/chatbotkit/node-sdk/blob/0fead0f/packages/sdk/src/usage/v1.js#L20)

___

### UsageInstance

Ƭ **UsageInstance**<\>: { `createdAt`: `number` ; `id`: `string` ; `store`: `string` ; `updatedAt`: `number`  } & [`UsageOptions`](usage_v1.md#usageoptions)

#### Defined in

[usage/v1.js:16](https://github.com/chatbotkit/node-sdk/blob/0fead0f/packages/sdk/src/usage/v1.js#L16)

___

### UsageOptions

Ƭ **UsageOptions**<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `conversations` | `number` |
| `tokens` | `number` |

#### Defined in

[usage/v1.js:9](https://github.com/chatbotkit/node-sdk/blob/0fead0f/packages/sdk/src/usage/v1.js#L9)

## Functions

### usageFetch

▸ **usageFetch**(`client`): `Promise`<[`UsageInstance`](usage_v1.md#usageinstance)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | `ChatBotKitClient` |

#### Returns

`Promise`<[`UsageInstance`](usage_v1.md#usageinstance)\>

#### Defined in

[usage/v1.js:25](https://github.com/chatbotkit/node-sdk/blob/0fead0f/packages/sdk/src/usage/v1.js#L25)
