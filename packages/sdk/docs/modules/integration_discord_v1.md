[@chatbotkit/sdk](../README.md) / [Modules](../modules.md) / integration/discord/v1

# Module: integration/discord/v1

## Table of contents

### Type Aliases

- [ChatBotKitClient](integration_discord_v1.md#chatbotkitclient)
- [DiscordIntegrationCreateRequest](integration_discord_v1.md#discordintegrationcreaterequest)
- [DiscordIntegrationCreateRequestBody](integration_discord_v1.md#discordintegrationcreaterequestbody)
- [DiscordIntegrationCreateResponse](integration_discord_v1.md#discordintegrationcreateresponse)
- [DiscordIntegrationDeleteRequestBody](integration_discord_v1.md#discordintegrationdeleterequestbody)
- [DiscordIntegrationDeleteResponse](integration_discord_v1.md#discordintegrationdeleteresponse)
- [DiscordIntegrationFetchResponse](integration_discord_v1.md#discordintegrationfetchresponse)
- [DiscordIntegrationListRequest](integration_discord_v1.md#discordintegrationlistrequest)
- [DiscordIntegrationListResponse](integration_discord_v1.md#discordintegrationlistresponse)
- [DiscordIntegrationListStreamType](integration_discord_v1.md#discordintegrationliststreamtype)
- [DiscordIntegrationSetupRequestBody](integration_discord_v1.md#discordintegrationsetuprequestbody)
- [DiscordIntegrationSetupResponse](integration_discord_v1.md#discordintegrationsetupresponse)
- [DiscordIntegrationUpdateRequest](integration_discord_v1.md#discordintegrationupdaterequest)
- [DiscordIntegrationUpdateRequestBody](integration_discord_v1.md#discordintegrationupdaterequestbody)
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

Ƭ **DiscordIntegrationCreateRequest**\<\>: `Object`

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
| `model?` | [`model/v1`](model_v1.md) |
| `name?` | `string` |
| `publicKey?` | `string` |
| `sessionDuration?` | `number` |

#### Defined in

[integration/discord/v1.js:66](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/discord/v1.js#L66)

___

### DiscordIntegrationCreateRequestBody

Ƭ **DiscordIntegrationCreateRequestBody**\<\>: `operations`[``"createDiscordIntegration"``][``"requestBody"``][``"content"``][``"application/json"``]

#### Defined in

[integration/discord/v1.js:68](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/discord/v1.js#L68)

___

### DiscordIntegrationCreateResponse

Ƭ **DiscordIntegrationCreateResponse**\<\>: `operations`[``"createDiscordIntegration"``][``"responses"``][``"200"``][``"content"``][``"application/json"``]

#### Defined in

[integration/discord/v1.js:70](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/discord/v1.js#L70)

___

### DiscordIntegrationDeleteRequestBody

Ƭ **DiscordIntegrationDeleteRequestBody**\<\>: `operations`[``"deleteDiscordIntegration"``][``"requestBody"``][``"content"``][``"application/json"``]

#### Defined in

[integration/discord/v1.js:130](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/discord/v1.js#L130)

___

### DiscordIntegrationDeleteResponse

Ƭ **DiscordIntegrationDeleteResponse**\<\>: `operations`[``"deleteDiscordIntegration"``][``"responses"``][``"200"``][``"content"``][``"application/json"``]

#### Defined in

[integration/discord/v1.js:132](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/discord/v1.js#L132)

___

### DiscordIntegrationFetchResponse

Ƭ **DiscordIntegrationFetchResponse**\<\>: `operations`[``"fetchDiscordIntegration"``][``"responses"``][``"200"``][``"content"``][``"application/json"``]

#### Defined in

[integration/discord/v1.js:37](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/discord/v1.js#L37)

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

[integration/discord/v1.js:17](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/discord/v1.js#L17)

___

### DiscordIntegrationListResponse

Ƭ **DiscordIntegrationListResponse**\<\>: `operations`[``"listDiscordIntegrations"``][``"responses"``][``"200"``][``"content"``][``"application/json"``]

#### Defined in

[integration/discord/v1.js:19](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/discord/v1.js#L19)

___

### DiscordIntegrationListStreamType

Ƭ **DiscordIntegrationListStreamType**\<\>: `operations`[``"listDiscordIntegrations"``][``"responses"``][``"200"``][``"content"``][``"application/jsonl"``]

#### Defined in

[integration/discord/v1.js:21](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/discord/v1.js#L21)

___

### DiscordIntegrationSetupRequestBody

Ƭ **DiscordIntegrationSetupRequestBody**\<\>: `operations`[``"setupDiscordIntegration"``][``"requestBody"``][``"content"``][``"application/json"``]

#### Defined in

[integration/discord/v1.js:151](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/discord/v1.js#L151)

___

### DiscordIntegrationSetupResponse

Ƭ **DiscordIntegrationSetupResponse**\<\>: `operations`[``"setupDiscordIntegration"``][``"responses"``][``"200"``][``"content"``][``"application/json"``]

#### Defined in

[integration/discord/v1.js:153](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/discord/v1.js#L153)

___

### DiscordIntegrationUpdateRequest

Ƭ **DiscordIntegrationUpdateRequest**\<\>: `Object`

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
| `model?` | [`model/v1`](model_v1.md) |
| `name?` | `string` |
| `publicKey?` | `string` |
| `sessionDuration?` | `number` |

#### Defined in

[integration/discord/v1.js:104](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/discord/v1.js#L104)

___

### DiscordIntegrationUpdateRequestBody

Ƭ **DiscordIntegrationUpdateRequestBody**\<\>: `operations`[``"updateDiscordIntegration"``][``"requestBody"``][``"content"``][``"application/json"``]

#### Defined in

[integration/discord/v1.js:106](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/discord/v1.js#L106)

___

### DiscordIntegrationUpdateResponse

Ƭ **DiscordIntegrationUpdateResponse**\<\>: `operations`[``"updateDiscordIntegration"``][``"responses"``][``"200"``][``"content"``][``"application/json"``]

#### Defined in

[integration/discord/v1.js:108](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/discord/v1.js#L108)

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

▸ **createDiscordIntegration**(`client`, `request`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<{}\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`ChatBotKitClient`](../classes/client.ChatBotKitClient.md) |
| `request` | [`DiscordIntegrationCreateRequest`](integration_discord_v1.md#discordintegrationcreaterequest) |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<{}\>

#### Defined in

[integration/discord/v1.js:76](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/discord/v1.js#L76)

___

### deleteDiscordIntegration

▸ **deleteDiscordIntegration**(`client`, `discordId`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<{}\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`ChatBotKitClient`](../classes/client.ChatBotKitClient.md) |
| `discordId` | `string` |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<{}\>

#### Defined in

[integration/discord/v1.js:138](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/discord/v1.js#L138)

___

### fetchDiscordIntegration

▸ **fetchDiscordIntegration**(`client`, `discordId`): [`ResponsePromise`](../classes/client.ResponsePromise.md)\<{}, `never`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`ChatBotKitClient`](../classes/client.ChatBotKitClient.md) |
| `discordId` | `string` |

#### Returns

[`ResponsePromise`](../classes/client.ResponsePromise.md)\<{}, `never`\>

#### Defined in

[integration/discord/v1.js:43](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/discord/v1.js#L43)

___

### listDiscordIntegrations

▸ **listDiscordIntegrations**(`client`, `request?`): [`ResponsePromise`](../classes/client.ResponsePromise.md)\<{}, {}\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`ChatBotKitClient`](../classes/client.ChatBotKitClient.md) |
| `request?` | [`DiscordIntegrationListRequest`](integration_discord_v1.md#discordintegrationlistrequest) |

#### Returns

[`ResponsePromise`](../classes/client.ResponsePromise.md)\<{}, {}\>

#### Defined in

[integration/discord/v1.js:27](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/discord/v1.js#L27)

___

### setupDiscordIntegration

▸ **setupDiscordIntegration**(`client`, `discordId`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<{}\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`ChatBotKitClient`](../classes/client.ChatBotKitClient.md) |
| `discordId` | `string` |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<{}\>

#### Defined in

[integration/discord/v1.js:159](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/discord/v1.js#L159)

___

### updateDiscordIntegration

▸ **updateDiscordIntegration**(`client`, `discordId`, `request`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<{}\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`ChatBotKitClient`](../classes/client.ChatBotKitClient.md) |
| `discordId` | `string` |
| `request` | [`DiscordIntegrationUpdateRequest`](integration_discord_v1.md#discordintegrationupdaterequest) |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<{}\>

#### Defined in

[integration/discord/v1.js:115](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/discord/v1.js#L115)
