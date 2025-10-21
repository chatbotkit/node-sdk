[@chatbotkit/sdk](../README.md) / [Modules](../modules.md) / usage/v1

# Module: usage/v1

## Table of contents

### Type Aliases

- [ChatBotKitClient](usage_v1.md#chatbotkitclient)
- [ResponsePromise](usage_v1.md#responsepromise)
- [UsageFetchResponse](usage_v1.md#usagefetchresponse)

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

Ƭ **UsageFetchResponse**\<\>: `operations`[``"fetchUsage"``][``"responses"``][``"200"``][``"content"``][``"application/json"``]

#### Defined in

[usage/v1.js:12](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/usage/v1.js#L12)

## Functions

### fetchUsage

▸ **fetchUsage**(`client`): [`ResponsePromise`](../classes/client.ResponsePromise.md)\<{}, `never`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`ChatBotKitClient`](../classes/client.ChatBotKitClient.md) |

#### Returns

[`ResponsePromise`](../classes/client.ResponsePromise.md)\<{}, `never`\>

#### Defined in

[usage/v1.js:17](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/usage/v1.js#L17)
