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

[integration/discord/v1.js:85](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/discord/v1.js#L85)

___

### DiscordIntegrationCreateResponse

Ƭ **DiscordIntegrationCreateResponse**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Defined in

[integration/discord/v1.js:89](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/discord/v1.js#L89)

___

### DiscordIntegrationDeleteResponse

Ƭ **DiscordIntegrationDeleteResponse**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Defined in

[integration/discord/v1.js:140](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/discord/v1.js#L140)

___

### DiscordIntegrationFetchResponse

Ƭ **DiscordIntegrationFetchResponse**\<\>: [`DiscordIntegrationInstance`](integration_discord_v1.md#discordintegrationinstance) & {}

#### Defined in

[integration/discord/v1.js:66](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/discord/v1.js#L66)

___

### DiscordIntegrationInstance

Ƭ **DiscordIntegrationInstance**\<\>: [`DiscordIntegrationOptions`](integration_discord_v1.md#discordintegrationoptions) & \{ `createdAt`: `number` ; `id`: `string` ; `updatedAt`: `number`  }

#### Defined in

[integration/discord/v1.js:29](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/discord/v1.js#L29)

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

[integration/discord/v1.js:38](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/discord/v1.js#L38)

___

### DiscordIntegrationListResponse

Ƭ **DiscordIntegrationListResponse**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `items` | [`DiscordIntegrationInstance`](integration_discord_v1.md#discordintegrationinstance)[] |

#### Defined in

[integration/discord/v1.js:40](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/discord/v1.js#L40)

___

### DiscordIntegrationListStreamItem

Ƭ **DiscordIntegrationListStreamItem**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `data` | [`DiscordIntegrationInstance`](integration_discord_v1.md#discordintegrationinstance) |
| `type` | ``"item"`` |

#### Defined in

[integration/discord/v1.js:45](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/discord/v1.js#L45)

___

### DiscordIntegrationListStreamType

Ƭ **DiscordIntegrationListStreamType**\<\>: [`DiscordIntegrationListStreamItem`](integration_discord_v1.md#discordintegrationliststreamitem)

#### Defined in

[integration/discord/v1.js:47](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/discord/v1.js#L47)

___

### DiscordIntegrationOptions

Ƭ **DiscordIntegrationOptions**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `appId?` | `string` |
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

[integration/discord/v1.js:23](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/discord/v1.js#L23)

___

### DiscordIntegrationSetupResponse

Ƭ **DiscordIntegrationSetupResponse**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Defined in

[integration/discord/v1.js:161](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/discord/v1.js#L161)

___

### DiscordIntegrationUpdateRequest

Ƭ **DiscordIntegrationUpdateRequest**\<\>: [`DiscordIntegrationOptions`](integration_discord_v1.md#discordintegrationoptions) & \{ `model?`: [`model/v1`](model_v1.md)  }

#### Defined in

[integration/discord/v1.js:112](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/discord/v1.js#L112)

___

### DiscordIntegrationUpdateResponse

Ƭ **DiscordIntegrationUpdateResponse**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Defined in

[integration/discord/v1.js:116](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/discord/v1.js#L116)

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

[integration/discord/v1.js:95](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/discord/v1.js#L95)

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

[integration/discord/v1.js:146](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/discord/v1.js#L146)

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

[integration/discord/v1.js:72](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/discord/v1.js#L72)

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

[integration/discord/v1.js:53](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/discord/v1.js#L53)

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

[integration/discord/v1.js:167](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/discord/v1.js#L167)

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

[integration/discord/v1.js:123](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/discord/v1.js#L123)
