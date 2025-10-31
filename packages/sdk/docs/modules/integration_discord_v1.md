[@chatbotkit/sdk](../README.md) / [Modules](../modules.md) / integration/discord/v1

# Module: integration/discord/v1

## Table of contents

### Type Aliases

- [ChatBotKitClient](integration_discord_v1.md#chatbotkitclient)
- [DiscordIntegrationCreateRequest](integration_discord_v1.md#discordintegrationcreaterequest)
- [DiscordIntegrationCreateRequestBody](integration_discord_v1.md#discordintegrationcreaterequestbody)
- [DiscordIntegrationCreateResponse](integration_discord_v1.md#discordintegrationcreateresponse)
- [DiscordIntegrationCreateResponseBody](integration_discord_v1.md#discordintegrationcreateresponsebody)
- [DiscordIntegrationDeleteRequest](integration_discord_v1.md#discordintegrationdeleterequest)
- [DiscordIntegrationDeleteRequestBody](integration_discord_v1.md#discordintegrationdeleterequestbody)
- [DiscordIntegrationDeleteResponse](integration_discord_v1.md#discordintegrationdeleteresponse)
- [DiscordIntegrationDeleteResponseBody](integration_discord_v1.md#discordintegrationdeleteresponsebody)
- [DiscordIntegrationFetchResponse](integration_discord_v1.md#discordintegrationfetchresponse)
- [DiscordIntegrationListRequest](integration_discord_v1.md#discordintegrationlistrequest)
- [DiscordIntegrationListResponse](integration_discord_v1.md#discordintegrationlistresponse)
- [DiscordIntegrationListStreamType](integration_discord_v1.md#discordintegrationliststreamtype)
- [DiscordIntegrationSetupRequest](integration_discord_v1.md#discordintegrationsetuprequest)
- [DiscordIntegrationSetupRequestBody](integration_discord_v1.md#discordintegrationsetuprequestbody)
- [DiscordIntegrationSetupResponse](integration_discord_v1.md#discordintegrationsetupresponse)
- [DiscordIntegrationSetupResponseBody](integration_discord_v1.md#discordintegrationsetupresponsebody)
- [DiscordIntegrationUpdateRequest](integration_discord_v1.md#discordintegrationupdaterequest)
- [DiscordIntegrationUpdateRequestBody](integration_discord_v1.md#discordintegrationupdaterequestbody)
- [DiscordIntegrationUpdateResponse](integration_discord_v1.md#discordintegrationupdateresponse)
- [DiscordIntegrationUpdateResponseBody](integration_discord_v1.md#discordintegrationupdateresponsebody)
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

Ƭ **DiscordIntegrationCreateRequest**\<\>: [`DiscordIntegrationCreateRequestBody`](integration_discord_v1.md#discordintegrationcreaterequestbody)

#### Defined in

[integration/discord/v1.js:55](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/discord/v1.js#L55)

___

### DiscordIntegrationCreateRequestBody

Ƭ **DiscordIntegrationCreateRequestBody**\<\>: `operations`[``"createDiscordIntegration"``][``"requestBody"``][``"content"``][``"application/json"``]

#### Defined in

[integration/discord/v1.js:53](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/discord/v1.js#L53)

___

### DiscordIntegrationCreateResponse

Ƭ **DiscordIntegrationCreateResponse**\<\>: [`DiscordIntegrationCreateResponseBody`](integration_discord_v1.md#discordintegrationcreateresponsebody)

#### Defined in

[integration/discord/v1.js:59](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/discord/v1.js#L59)

___

### DiscordIntegrationCreateResponseBody

Ƭ **DiscordIntegrationCreateResponseBody**\<\>: `operations`[``"createDiscordIntegration"``][``"responses"``][``"200"``][``"content"``][``"application/json"``]

#### Defined in

[integration/discord/v1.js:57](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/discord/v1.js#L57)

___

### DiscordIntegrationDeleteRequest

Ƭ **DiscordIntegrationDeleteRequest**\<\>: [`DiscordIntegrationDeleteRequestBody`](integration_discord_v1.md#discordintegrationdeleterequestbody)

#### Defined in

[integration/discord/v1.js:110](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/discord/v1.js#L110)

___

### DiscordIntegrationDeleteRequestBody

Ƭ **DiscordIntegrationDeleteRequestBody**\<\>: `operations`[``"deleteDiscordIntegration"``][``"requestBody"``][``"content"``][``"application/json"``]

#### Defined in

[integration/discord/v1.js:108](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/discord/v1.js#L108)

___

### DiscordIntegrationDeleteResponse

Ƭ **DiscordIntegrationDeleteResponse**\<\>: [`DiscordIntegrationDeleteResponseBody`](integration_discord_v1.md#discordintegrationdeleteresponsebody)

#### Defined in

[integration/discord/v1.js:114](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/discord/v1.js#L114)

___

### DiscordIntegrationDeleteResponseBody

Ƭ **DiscordIntegrationDeleteResponseBody**\<\>: `operations`[``"deleteDiscordIntegration"``][``"responses"``][``"200"``][``"content"``][``"application/json"``]

#### Defined in

[integration/discord/v1.js:112](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/discord/v1.js#L112)

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

### DiscordIntegrationSetupRequest

Ƭ **DiscordIntegrationSetupRequest**\<\>: [`DiscordIntegrationSetupRequestBody`](integration_discord_v1.md#discordintegrationsetuprequestbody)

#### Defined in

[integration/discord/v1.js:135](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/discord/v1.js#L135)

___

### DiscordIntegrationSetupRequestBody

Ƭ **DiscordIntegrationSetupRequestBody**\<\>: `operations`[``"setupDiscordIntegration"``][``"requestBody"``][``"content"``][``"application/json"``]

#### Defined in

[integration/discord/v1.js:133](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/discord/v1.js#L133)

___

### DiscordIntegrationSetupResponse

Ƭ **DiscordIntegrationSetupResponse**\<\>: [`DiscordIntegrationSetupResponseBody`](integration_discord_v1.md#discordintegrationsetupresponsebody)

#### Defined in

[integration/discord/v1.js:139](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/discord/v1.js#L139)

___

### DiscordIntegrationSetupResponseBody

Ƭ **DiscordIntegrationSetupResponseBody**\<\>: `operations`[``"setupDiscordIntegration"``][``"responses"``][``"200"``][``"content"``][``"application/json"``]

#### Defined in

[integration/discord/v1.js:137](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/discord/v1.js#L137)

___

### DiscordIntegrationUpdateRequest

Ƭ **DiscordIntegrationUpdateRequest**\<\>: [`DiscordIntegrationUpdateRequestBody`](integration_discord_v1.md#discordintegrationupdaterequestbody)

#### Defined in

[integration/discord/v1.js:82](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/discord/v1.js#L82)

___

### DiscordIntegrationUpdateRequestBody

Ƭ **DiscordIntegrationUpdateRequestBody**\<\>: `operations`[``"updateDiscordIntegration"``][``"requestBody"``][``"content"``][``"application/json"``]

#### Defined in

[integration/discord/v1.js:80](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/discord/v1.js#L80)

___

### DiscordIntegrationUpdateResponse

Ƭ **DiscordIntegrationUpdateResponse**\<\>: [`DiscordIntegrationUpdateResponseBody`](integration_discord_v1.md#discordintegrationupdateresponsebody)

#### Defined in

[integration/discord/v1.js:86](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/discord/v1.js#L86)

___

### DiscordIntegrationUpdateResponseBody

Ƭ **DiscordIntegrationUpdateResponseBody**\<\>: `operations`[``"updateDiscordIntegration"``][``"responses"``][``"200"``][``"content"``][``"application/json"``]

#### Defined in

[integration/discord/v1.js:84](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/discord/v1.js#L84)

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
| `request` | `Object` |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<{}\>

#### Defined in

[integration/discord/v1.js:65](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/discord/v1.js#L65)

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

[integration/discord/v1.js:120](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/discord/v1.js#L120)

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

[integration/discord/v1.js:145](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/discord/v1.js#L145)

___

### updateDiscordIntegration

▸ **updateDiscordIntegration**(`client`, `discordId`, `request`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<{}\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`ChatBotKitClient`](../classes/client.ChatBotKitClient.md) |
| `discordId` | `string` |
| `request` | `Object` |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<{}\>

#### Defined in

[integration/discord/v1.js:93](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/discord/v1.js#L93)
