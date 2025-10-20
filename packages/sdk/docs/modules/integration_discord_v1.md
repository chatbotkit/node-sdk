[@chatbotkit/sdk](../README.md) / [Modules](../modules.md) / integration/discord/v1

# Module: integration/discord/v1

## Table of contents

### Type Aliases

- [ChatBotKitClient](integration_discord_v1.md#chatbotkitclient)
- [DiscordIntegrationCreateRequest](integration_discord_v1.md#discordintegrationcreaterequest)
- [DiscordIntegrationCreateResponse](integration_discord_v1.md#discordintegrationcreateresponse)
- [DiscordIntegrationDeleteResponse](integration_discord_v1.md#discordintegrationdeleteresponse)
- [DiscordIntegrationFetchResponse](integration_discord_v1.md#discordintegrationfetchresponse)
- [DiscordIntegrationInstance](integration_discord_v1.md#discordintegrationinstance)
- [DiscordIntegrationListRequest](integration_discord_v1.md#discordintegrationlistrequest)
- [DiscordIntegrationListResponse](integration_discord_v1.md#discordintegrationlistresponse)
- [DiscordIntegrationListStreamItem](integration_discord_v1.md#discordintegrationliststreamitem)
- [DiscordIntegrationListStreamType](integration_discord_v1.md#discordintegrationliststreamtype)
- [DiscordIntegrationOptions](integration_discord_v1.md#discordintegrationoptions)
- [DiscordIntegrationSetupResponse](integration_discord_v1.md#discordintegrationsetupresponse)
- [DiscordIntegrationUpdateRequest](integration_discord_v1.md#discordintegrationupdaterequest)
- [DiscordIntegrationUpdateResponse](integration_discord_v1.md#discordintegrationupdateresponse)
- [ResponsePromise](integration_discord_v1.md#responsepromise)

### Functions

- [createDiscordIntegration](integration_discord_v1.md#creatediscordintegration)
- [deleteDiscordIntegration](integration_discord_v1.md#deletediscordintegration)
- [fetchDiscordIntegration](integration_discord_v1.md#fetchdiscordintegration)
- [listDiscordIntegrations](integration_discord_v1.md#listdiscordintegrations)
- [setupDiscordIntegration](integration_discord_v1.md#setupdiscordintegration)
- [updateDiscordIntegration](integration_discord_v1.md#updatediscordintegration)

## Type Aliases

### ChatBotKitClient

Ƭ **ChatBotKitClient**\<\>: [`client`](client.md)

#### Defined in

[integration/discord/v1.js:2](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/discord/v1.js#L2)

___

### DiscordIntegrationCreateRequest

Ƭ **DiscordIntegrationCreateRequest**\<\>: [`DiscordIntegrationOptions`](integration_discord_v1.md#discordintegrationoptions) & \{ `model?`: [`model/v1`](model_v1.md)  }

#### Defined in

[integration/discord/v1.js:86](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/discord/v1.js#L86)

___

### DiscordIntegrationCreateResponse

Ƭ **DiscordIntegrationCreateResponse**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Defined in

[integration/discord/v1.js:90](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/discord/v1.js#L90)

___

### DiscordIntegrationDeleteResponse

Ƭ **DiscordIntegrationDeleteResponse**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Defined in

[integration/discord/v1.js:141](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/discord/v1.js#L141)

___

### DiscordIntegrationFetchResponse

Ƭ **DiscordIntegrationFetchResponse**\<\>: [`DiscordIntegrationInstance`](integration_discord_v1.md#discordintegrationinstance) & {}

#### Defined in

[integration/discord/v1.js:67](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/discord/v1.js#L67)

___

### DiscordIntegrationInstance

Ƭ **DiscordIntegrationInstance**\<\>: [`DiscordIntegrationOptions`](integration_discord_v1.md#discordintegrationoptions) & \{ `createdAt`: `number` ; `id`: `string` ; `updatedAt`: `number`  }

#### Defined in

[integration/discord/v1.js:30](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/discord/v1.js#L30)

___

### DiscordIntegrationListRequest

Ƭ **DiscordIntegrationListRequest**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `cursor?` | `string` |
| `meta?` | [`Record`]( https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type )\<`string`, `string`\> |
| `order?` | ``"desc"`` \| ``"asc"`` |
| `take?` | `number` |

#### Defined in

[integration/discord/v1.js:39](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/discord/v1.js#L39)

___

### DiscordIntegrationListResponse

Ƭ **DiscordIntegrationListResponse**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `items` | [`DiscordIntegrationInstance`](integration_discord_v1.md#discordintegrationinstance)[] |

#### Defined in

[integration/discord/v1.js:41](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/discord/v1.js#L41)

___

### DiscordIntegrationListStreamItem

Ƭ **DiscordIntegrationListStreamItem**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `data` | [`DiscordIntegrationInstance`](integration_discord_v1.md#discordintegrationinstance) |
| `type` | ``"item"`` |

#### Defined in

[integration/discord/v1.js:46](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/discord/v1.js#L46)

___

### DiscordIntegrationListStreamType

Ƭ **DiscordIntegrationListStreamType**\<\>: [`DiscordIntegrationListStreamItem`](integration_discord_v1.md#discordintegrationliststreamitem)

#### Defined in

[integration/discord/v1.js:48](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/discord/v1.js#L48)

___

### DiscordIntegrationOptions

Ƭ **DiscordIntegrationOptions**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `appId?` | `string` |
| `blueprintId?` | `string` |
| `botId?` | `string` |
| `botToken?` | `string` |
| `contactCollection?` | `boolean` |
| `description?` | `string` |
| `handle?` | `string` |
| `meta?` | [`Record`]( https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type )\<`string`, `any`\> |
| `name?` | `string` |
| `publicKey?` | `string` |
| `sessionDuration?` | `number` |

#### Defined in

[integration/discord/v1.js:24](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/discord/v1.js#L24)

___

### DiscordIntegrationSetupResponse

Ƭ **DiscordIntegrationSetupResponse**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Defined in

[integration/discord/v1.js:162](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/discord/v1.js#L162)

___

### DiscordIntegrationUpdateRequest

Ƭ **DiscordIntegrationUpdateRequest**\<\>: [`DiscordIntegrationOptions`](integration_discord_v1.md#discordintegrationoptions) & \{ `model?`: [`model/v1`](model_v1.md)  }

#### Defined in

[integration/discord/v1.js:113](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/discord/v1.js#L113)

___

### DiscordIntegrationUpdateResponse

Ƭ **DiscordIntegrationUpdateResponse**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Defined in

[integration/discord/v1.js:117](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/discord/v1.js#L117)

___

### ResponsePromise

Ƭ **ResponsePromise**\<`T`, `U`\>: [`client`](client.md)

#### Type parameters

| Name |
| :------ |
| `T` |
| `U` |

#### Defined in

[integration/discord/v1.js:8](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/discord/v1.js#L8)

## Functions

### createDiscordIntegration

▸ **createDiscordIntegration**(`client`, `request`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<[`DiscordIntegrationCreateResponse`](integration_discord_v1.md#discordintegrationcreateresponse)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`ChatBotKitClient`](../classes/client.ChatBotKitClient.md) |
| `request` | [`DiscordIntegrationCreateRequest`](integration_discord_v1.md#discordintegrationcreaterequest) |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<[`DiscordIntegrationCreateResponse`](integration_discord_v1.md#discordintegrationcreateresponse)\>

#### Defined in

[integration/discord/v1.js:96](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/discord/v1.js#L96)

___

### deleteDiscordIntegration

▸ **deleteDiscordIntegration**(`client`, `discordId`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<[`DiscordIntegrationDeleteResponse`](integration_discord_v1.md#discordintegrationdeleteresponse)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`ChatBotKitClient`](../classes/client.ChatBotKitClient.md) |
| `discordId` | `string` |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<[`DiscordIntegrationDeleteResponse`](integration_discord_v1.md#discordintegrationdeleteresponse)\>

#### Defined in

[integration/discord/v1.js:147](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/discord/v1.js#L147)

___

### fetchDiscordIntegration

▸ **fetchDiscordIntegration**(`client`, `discordId`): [`ResponsePromise`](../classes/client.ResponsePromise.md)\<[`DiscordIntegrationFetchResponse`](integration_discord_v1.md#discordintegrationfetchresponse), `never`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`ChatBotKitClient`](../classes/client.ChatBotKitClient.md) |
| `discordId` | `string` |

#### Returns

[`ResponsePromise`](../classes/client.ResponsePromise.md)\<[`DiscordIntegrationFetchResponse`](integration_discord_v1.md#discordintegrationfetchresponse), `never`\>

#### Defined in

[integration/discord/v1.js:73](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/discord/v1.js#L73)

___

### listDiscordIntegrations

▸ **listDiscordIntegrations**(`client`, `request?`): [`ResponsePromise`](../classes/client.ResponsePromise.md)\<[`DiscordIntegrationListResponse`](integration_discord_v1.md#discordintegrationlistresponse), [`DiscordIntegrationListStreamItem`](integration_discord_v1.md#discordintegrationliststreamitem)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`ChatBotKitClient`](../classes/client.ChatBotKitClient.md) |
| `request?` | [`DiscordIntegrationListRequest`](integration_discord_v1.md#discordintegrationlistrequest) |

#### Returns

[`ResponsePromise`](../classes/client.ResponsePromise.md)\<[`DiscordIntegrationListResponse`](integration_discord_v1.md#discordintegrationlistresponse), [`DiscordIntegrationListStreamItem`](integration_discord_v1.md#discordintegrationliststreamitem)\>

#### Defined in

[integration/discord/v1.js:54](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/discord/v1.js#L54)

___

### setupDiscordIntegration

▸ **setupDiscordIntegration**(`client`, `discordId`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<[`DiscordIntegrationSetupResponse`](integration_discord_v1.md#discordintegrationsetupresponse)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`ChatBotKitClient`](../classes/client.ChatBotKitClient.md) |
| `discordId` | `string` |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<[`DiscordIntegrationSetupResponse`](integration_discord_v1.md#discordintegrationsetupresponse)\>

#### Defined in

[integration/discord/v1.js:168](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/discord/v1.js#L168)

___

### updateDiscordIntegration

▸ **updateDiscordIntegration**(`client`, `discordId`, `request`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<[`DiscordIntegrationUpdateResponse`](integration_discord_v1.md#discordintegrationupdateresponse)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`ChatBotKitClient`](../classes/client.ChatBotKitClient.md) |
| `discordId` | `string` |
| `request` | [`DiscordIntegrationUpdateRequest`](integration_discord_v1.md#discordintegrationupdaterequest) |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<[`DiscordIntegrationUpdateResponse`](integration_discord_v1.md#discordintegrationupdateresponse)\>

#### Defined in

[integration/discord/v1.js:124](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/discord/v1.js#L124)
