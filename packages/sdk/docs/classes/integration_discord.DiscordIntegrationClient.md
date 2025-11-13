[@chatbotkit/sdk](../README.md) / [Modules](../modules.md) / [integration/discord](../modules/integration_discord.md) / DiscordIntegrationClient

# Class: DiscordIntegrationClient

[integration/discord](../modules/integration_discord.md).DiscordIntegrationClient

**`Template`**

**`Template`**

## Hierarchy

- [`ChatBotKitClient`](client.ChatBotKitClient.md)

  ↳ **`DiscordIntegrationClient`**

## Table of contents

### Constructors

- [constructor](integration_discord.DiscordIntegrationClient.md#constructor)

### Methods

- [clientFetch](integration_discord.DiscordIntegrationClient.md#clientfetch)
- [create](integration_discord.DiscordIntegrationClient.md#create)
- [delete](integration_discord.DiscordIntegrationClient.md#delete)
- [fetch](integration_discord.DiscordIntegrationClient.md#fetch)
- [list](integration_discord.DiscordIntegrationClient.md#list)
- [setup](integration_discord.DiscordIntegrationClient.md#setup)
- [update](integration_discord.DiscordIntegrationClient.md#update)

## Constructors

### constructor

• **new DiscordIntegrationClient**(`options`): [`DiscordIntegrationClient`](integration_discord.DiscordIntegrationClient.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`ChatBotKitClientOptions`](../interfaces/client.ChatBotKitClientOptions.md) |

#### Returns

[`DiscordIntegrationClient`](integration_discord.DiscordIntegrationClient.md)

#### Overrides

[ChatBotKitClient](client.ChatBotKitClient.md).[constructor](client.ChatBotKitClient.md#constructor)

#### Defined in

[integration/discord/index.js:21](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/discord/index.js#L21)

## Methods

### clientFetch

▸ **clientFetch**\<`T`, `U`\>(`path`, `options?`): [`ResponsePromise`](client.ResponsePromise.md)\<`T`, `U`\>

#### Type parameters

| Name |
| :------ |
| `T` |
| `U` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | `string` |
| `options?` | `Object` |
| `options.buffer?` | [`ArrayBuffer`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer ) |
| `options.endpoint?` | `string` |
| `options.external?` | `boolean` |
| `options.fetchFn?` | [`FetchFunction`](../modules/client.md#fetchfunction) |
| `options.file?` | `Object` |
| `options.file.data` | `string` \| [`ArrayBuffer`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer ) |
| `options.file.name?` | `string` |
| `options.file.type?` | `string` |
| `options.headers?` | [`Record`]( https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type )\<`string`, `any`\> |
| `options.method?` | `string` |
| `options.query?` | [`Record`]( https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type )\<`string`, `any`\> |
| `options.record?` | [`Record`]( https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type )\<`string`, `any`\> |
| `options.retries?` | `number` |
| `options.retryDelay?` | `number` |
| `options.retryTimeout?` | `boolean` |
| `options.timeout?` | `number` |

#### Returns

[`ResponsePromise`](client.ResponsePromise.md)\<`T`, `U`\>

#### Inherited from

[ChatBotKitClient](client.ChatBotKitClient.md).[clientFetch](client.ChatBotKitClient.md#clientfetch)

#### Defined in

[client.js:390](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/client.js#L390)

___

### create

▸ **create**(`request`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<{}\>

Creates a new discord integration.

#### Parameters

| Name | Type |
| :------ | :------ |
| `request` | `Object` |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<{}\>

#### Defined in

[integration/discord/index.js:51](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/discord/index.js#L51)

___

### delete

▸ **delete**(`discordId`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<{}\>

Deletes a discord integration.

#### Parameters

| Name | Type |
| :------ | :------ |
| `discordId` | `string` |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<{}\>

#### Defined in

[integration/discord/index.js:72](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/discord/index.js#L72)

___

### fetch

▸ **fetch**(`discordId`): [`ResponsePromise`](client.ResponsePromise.md)\<{}, `never`\>

Fetches a discord integration.

#### Parameters

| Name | Type |
| :------ | :------ |
| `discordId` | `string` |

#### Returns

[`ResponsePromise`](client.ResponsePromise.md)\<{}, `never`\>

#### Defined in

[integration/discord/index.js:41](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/discord/index.js#L41)

___

### list

▸ **list**(`request?`): [`ResponsePromise`](client.ResponsePromise.md)\<{}, {}\>

Retrieves a list of all discord integrations.

#### Parameters

| Name | Type |
| :------ | :------ |
| `request?` | [`DiscordIntegrationListRequest`](../modules/integration_discord_v1.md#discordintegrationlistrequest) |

#### Returns

[`ResponsePromise`](client.ResponsePromise.md)\<{}, {}\>

#### Defined in

[integration/discord/index.js:31](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/discord/index.js#L31)

___

### setup

▸ **setup**(`discordId`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<{}\>

Setups a discord integration.

#### Parameters

| Name | Type |
| :------ | :------ |
| `discordId` | `string` |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<{}\>

#### Defined in

[integration/discord/index.js:82](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/discord/index.js#L82)

___

### update

▸ **update**(`discordId`, `request`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<{}\>

Updates a discord integration.

#### Parameters

| Name | Type |
| :------ | :------ |
| `discordId` | `string` |
| `request` | `Object` |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<{}\>

#### Defined in

[integration/discord/index.js:62](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/integration/discord/index.js#L62)
