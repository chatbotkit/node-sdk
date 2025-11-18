[@chatbotkit/sdk](../README.md) / [Modules](../modules.md) / [team](../modules/team.md) / TeamClient

# Class: TeamClient

[team](../modules/team.md).TeamClient

Team client.

## Hierarchy

- [`ChatBotKitClient`](client.ChatBotKitClient.md)

  ↳ **`TeamClient`**

## Table of contents

### Constructors

- [constructor](team.TeamClient.md#constructor)

### Methods

- [extend](team.TeamClient.md#extend)
- [list](team.TeamClient.md#list)

## Constructors

### constructor

• **new TeamClient**(`options`): [`TeamClient`](team.TeamClient.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`ChatBotKitClientOptions`](../interfaces/client.ChatBotKitClientOptions.md) |

#### Returns

[`TeamClient`](team.TeamClient.md)

#### Overrides

[ChatBotKitClient](client.ChatBotKitClient.md).[constructor](client.ChatBotKitClient.md#constructor)

#### Defined in

[team/index.js:17](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/team/index.js#L17)

## Methods

### extend

▸ **extend**(`extensionOptions`): [`TeamClient`](team.TeamClient.md)

Creates a new instance of the same client type with extended options.

This is useful when you need to create a client with modified configuration
(e.g., different endpoint, token, or headers) without affecting the original.

Note: This method creates a completely new instance rather than cloning,
which is necessary because private class fields cannot be copied.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `extensionOptions` | [`Partial`]( https://www.typescriptlang.org/docs/handbook/utility-types.html#partialtype )\<[`ChatBotKitClientOptions`](../interfaces/client.ChatBotKitClientOptions.md)\> | Options to merge with current options |

#### Returns

[`TeamClient`](team.TeamClient.md)

A new instance of the same client class with extended options

#### Inherited from

[ChatBotKitClient](client.ChatBotKitClient.md).[extend](client.ChatBotKitClient.md#extend)

#### Defined in

[client.js:382](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/client.js#L382)

___

### list

▸ **list**(`request?`): [`ResponsePromise`](client.ResponsePromise.md)\<{}, {}\>

Retrieves a list of all teams.

#### Parameters

| Name | Type |
| :------ | :------ |
| `request?` | [`TeamListRequest`](../modules/team_v1.md#teamlistrequest) |

#### Returns

[`ResponsePromise`](client.ResponsePromise.md)\<{}, {}\>

#### Defined in

[team/index.js:27](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/team/index.js#L27)
