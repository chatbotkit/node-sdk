[@chatbotkit/sdk](../README.md) / [Modules](../modules.md) / integration/discord/v1

# Module: integration/discord/v1

## Table of contents

### Type Aliases

- [BotConfig](integration_discord_v1.md#botconfig)
- [BotRef](integration_discord_v1.md#botref)
- [BotRefOrConfig](integration_discord_v1.md#botreforconfig)
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

### BotConfig

Ƭ **BotConfig**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `backstory?` | `string` |
| `datasetId?` | `string` |
| `model?` | `string` |
| `moderation?` | `boolean` |
| `privacy?` | `boolean` |
| `skillsetId?` | `string` |

#### Defined in

[integration/discord/v1.js:25](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/discord/v1.js#L25)

___

### BotRef

Ƭ **BotRef**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `botId?` | `string` |

#### Defined in

[integration/discord/v1.js:16](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/discord/v1.js#L16)

___

### BotRefOrConfig

Ƭ **BotRefOrConfig**\<\>: [`BotRef`](integration_discord_v1.md#botref) \| [`BotConfig`](integration_discord_v1.md#botconfig)

#### Defined in

[integration/discord/v1.js:27](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/discord/v1.js#L27)

___

### ChatBotKitClient

Ƭ **ChatBotKitClient**\<\>: [`client`](client.md)

#### Defined in

[integration/discord/v1.js:4](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/discord/v1.js#L4)

___

### DiscordIntegrationCreateRequest

Ƭ **DiscordIntegrationCreateRequest**\<\>: [`DiscordIntegrationOptions`](integration_discord_v1.md#discordintegrationoptions) & \{ `model?`: [`model/v1`](model_v1.md)  }

#### Defined in

[integration/discord/v1.js:95](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/discord/v1.js#L95)

___

### DiscordIntegrationCreateResponse

Ƭ **DiscordIntegrationCreateResponse**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Defined in

[integration/discord/v1.js:99](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/discord/v1.js#L99)

___

### DiscordIntegrationDeleteResponse

Ƭ **DiscordIntegrationDeleteResponse**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Defined in

[integration/discord/v1.js:154](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/discord/v1.js#L154)

___

### DiscordIntegrationFetchResponse

Ƭ **DiscordIntegrationFetchResponse**\<\>: [`DiscordIntegrationInstance`](integration_discord_v1.md#discordintegrationinstance) & {}

#### Defined in

[integration/discord/v1.js:77](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/discord/v1.js#L77)

___

### DiscordIntegrationInstance

Ƭ **DiscordIntegrationInstance**\<\>: [`DiscordIntegrationOptions`](integration_discord_v1.md#discordintegrationoptions) & \{ `createdAt`: `number` ; `id`: `string` ; `updatedAt`: `number`  }

#### Defined in

[integration/discord/v1.js:45](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/discord/v1.js#L45)

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

[integration/discord/v1.js:49](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/discord/v1.js#L49)

___

### DiscordIntegrationListResponse

Ƭ **DiscordIntegrationListResponse**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `items` | [`DiscordIntegrationInstance`](integration_discord_v1.md#discordintegrationinstance)[] |

#### Defined in

[integration/discord/v1.js:51](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/discord/v1.js#L51)

___

### DiscordIntegrationListStreamItem

Ƭ **DiscordIntegrationListStreamItem**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `data` | [`DiscordIntegrationInstance`](integration_discord_v1.md#discordintegrationinstance) |
| `type` | ``"item"`` |

#### Defined in

[integration/discord/v1.js:56](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/discord/v1.js#L56)

___

### DiscordIntegrationListStreamType

Ƭ **DiscordIntegrationListStreamType**\<\>: [`DiscordIntegrationListStreamItem`](integration_discord_v1.md#discordintegrationliststreamitem)

#### Defined in

[integration/discord/v1.js:58](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/discord/v1.js#L58)

___

### DiscordIntegrationOptions

Ƭ **DiscordIntegrationOptions**\<\>: [`BotRefOrConfig`](integration_discord_v1.md#botreforconfig) & \{ `appId?`: `string` ; `botToken?`: `string` ; `contactCollection?`: `boolean` ; `description?`: `string` ; `handle?`: `string` ; `meta?`: [`Record`]( https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type )\<`string`, `any`\> ; `name?`: `string` ; `publicKey?`: `string` ; `sessionDuration?`: `number`  }

#### Defined in

[integration/discord/v1.js:39](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/discord/v1.js#L39)

___

### DiscordIntegrationSetupResponse

Ƭ **DiscordIntegrationSetupResponse**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Defined in

[integration/discord/v1.js:175](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/discord/v1.js#L175)

___

### DiscordIntegrationUpdateRequest

Ƭ **DiscordIntegrationUpdateRequest**\<\>: [`DiscordIntegrationOptions`](integration_discord_v1.md#discordintegrationoptions) & \{ `model?`: [`model/v1`](model_v1.md)  }

#### Defined in

[integration/discord/v1.js:124](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/discord/v1.js#L124)

___

### DiscordIntegrationUpdateResponse

Ƭ **DiscordIntegrationUpdateResponse**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Defined in

[integration/discord/v1.js:128](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/discord/v1.js#L128)

___

### ResponsePromise

Ƭ **ResponsePromise**\<`T`, `U`\>: [`client`](client.md)

#### Type parameters

| Name |
| :------ |
| `T` |
| `U` |

#### Defined in

[integration/discord/v1.js:10](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/discord/v1.js#L10)

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

[integration/discord/v1.js:105](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/discord/v1.js#L105)

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

[integration/discord/v1.js:160](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/discord/v1.js#L160)

___

### fetchDiscordIntegration

▸ **fetchDiscordIntegration**(`client`, `discordId`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<[`DiscordIntegrationFetchResponse`](integration_discord_v1.md#discordintegrationfetchresponse)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`ChatBotKitClient`](../classes/client.ChatBotKitClient.md) |
| `discordId` | `string` |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<[`DiscordIntegrationFetchResponse`](integration_discord_v1.md#discordintegrationfetchresponse)\>

#### Defined in

[integration/discord/v1.js:83](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/discord/v1.js#L83)

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

[integration/discord/v1.js:64](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/discord/v1.js#L64)

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

[integration/discord/v1.js:181](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/discord/v1.js#L181)

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

[integration/discord/v1.js:135](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/discord/v1.js#L135)
