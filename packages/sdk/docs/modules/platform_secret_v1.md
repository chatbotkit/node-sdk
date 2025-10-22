[@chatbotkit/sdk](../README.md) / [Modules](../modules.md) / platform/secret/v1

# Module: platform/secret/v1

## Table of contents

### Type Aliases

- [ChatBotKitClient](platform_secret_v1.md#chatbotkitclient)
- [PlatformSecretInstance](platform_secret_v1.md#platformsecretinstance)
- [PlatformSecretListRequest](platform_secret_v1.md#platformsecretlistrequest)
- [PlatformSecretListResponse](platform_secret_v1.md#platformsecretlistresponse)
- [PlatformSecretListStreamType](platform_secret_v1.md#platformsecretliststreamtype)
- [ResponsePromise](platform_secret_v1.md#responsepromise)

### Functions

- [listPlatformSecrets](platform_secret_v1.md#listplatformsecrets)

## Type Aliases

### ChatBotKitClient

Ƭ **ChatBotKitClient**\<\>: [`client`](client.md)

#### Defined in

[platform/secret/v1.js:2](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/platform/secret/v1.js#L2)

___

### PlatformSecretInstance

Ƭ **PlatformSecretInstance**\<\>: [`PlatformSecretListResponse`](platform_secret_v1.md#platformsecretlistresponse)[``"items"``][`number`]

#### Defined in

[platform/secret/v1.js:20](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/platform/secret/v1.js#L20)

___

### PlatformSecretListRequest

Ƭ **PlatformSecretListRequest**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `cursor?` | `string` |
| `order?` | ``"desc"`` \| ``"asc"`` |
| `take?` | `number` |

#### Defined in

[platform/secret/v1.js:16](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/platform/secret/v1.js#L16)

___

### PlatformSecretListResponse

Ƭ **PlatformSecretListResponse**\<\>: `operations`[``"listPlatformSecrets"``][``"responses"``][``"200"``][``"content"``][``"application/json"``]

#### Defined in

[platform/secret/v1.js:18](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/platform/secret/v1.js#L18)

___

### PlatformSecretListStreamType

Ƭ **PlatformSecretListStreamType**\<\>: `operations`[``"listPlatformSecrets"``][``"responses"``][``"200"``][``"content"``][``"application/jsonl"``]

#### Defined in

[platform/secret/v1.js:22](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/platform/secret/v1.js#L22)

___

### ResponsePromise

Ƭ **ResponsePromise**\<`T`, `U`\>: [`client`](client.md)

#### Type parameters

| Name |
| :------ |
| `T` |
| `U` |

#### Defined in

[platform/secret/v1.js:8](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/platform/secret/v1.js#L8)

## Functions

### listPlatformSecrets

▸ **listPlatformSecrets**(`client`, `request?`): [`ResponsePromise`](../classes/client.ResponsePromise.md)\<{}, {}\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`ChatBotKitClient`](../classes/client.ChatBotKitClient.md) |
| `request?` | [`PlatformSecretListRequest`](platform_secret_v1.md#platformsecretlistrequest) |

#### Returns

[`ResponsePromise`](../classes/client.ResponsePromise.md)\<{}, {}\>

#### Defined in

[platform/secret/v1.js:28](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/platform/secret/v1.js#L28)
