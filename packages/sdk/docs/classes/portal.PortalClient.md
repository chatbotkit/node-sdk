[@chatbotkit/sdk](../README.md) / [Modules](../modules.md) / [portal](../modules/portal.md) / PortalClient

# Class: PortalClient

[portal](../modules/portal.md).PortalClient

Portal client.

## Hierarchy

- [`ChatBotKitClient`](client.ChatBotKitClient.md)

  ↳ **`PortalClient`**

## Table of contents

### Constructors

- [constructor](portal.PortalClient.md#constructor)

### Methods

- [create](portal.PortalClient.md#create)
- [delete](portal.PortalClient.md#delete)
- [extend](portal.PortalClient.md#extend)
- [fetch](portal.PortalClient.md#fetch)
- [list](portal.PortalClient.md#list)
- [update](portal.PortalClient.md#update)

## Constructors

### constructor

• **new PortalClient**(`options`): [`PortalClient`](portal.PortalClient.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`ChatBotKitClientOptions`](../interfaces/client.ChatBotKitClientOptions.md) |

#### Returns

[`PortalClient`](portal.PortalClient.md)

#### Overrides

[ChatBotKitClient](client.ChatBotKitClient.md).[constructor](client.ChatBotKitClient.md#constructor)

#### Defined in

[portal/index.js:23](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/portal/index.js#L23)

## Methods

### create

▸ **create**(`request`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<{}\>

Creates a new portal.

#### Parameters

| Name | Type |
| :------ | :------ |
| `request` | `Object` |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<{}\>

#### Defined in

[portal/index.js:53](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/portal/index.js#L53)

___

### delete

▸ **delete**(`portalId`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<{}\>

Deletes the portal.

#### Parameters

| Name | Type |
| :------ | :------ |
| `portalId` | `string` |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<{}\>

#### Defined in

[portal/index.js:74](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/portal/index.js#L74)

___

### extend

▸ **extend**(`extensionOptions`): [`PortalClient`](portal.PortalClient.md)

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

[`PortalClient`](portal.PortalClient.md)

A new instance of the same client class with extended options

#### Inherited from

[ChatBotKitClient](client.ChatBotKitClient.md).[extend](client.ChatBotKitClient.md#extend)

#### Defined in

[client.js:382](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/client.js#L382)

___

### fetch

▸ **fetch**(`portalId`): [`ResponsePromise`](client.ResponsePromise.md)\<{}, `never`\>

Fetches a portal.

#### Parameters

| Name | Type |
| :------ | :------ |
| `portalId` | `string` |

#### Returns

[`ResponsePromise`](client.ResponsePromise.md)\<{}, `never`\>

#### Defined in

[portal/index.js:43](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/portal/index.js#L43)

___

### list

▸ **list**(`request?`): [`ResponsePromise`](client.ResponsePromise.md)\<{}, {}\>

Retrieves a list of all portals.

#### Parameters

| Name | Type |
| :------ | :------ |
| `request?` | [`PortalListRequest`](../modules/portal_v1.md#portallistrequest) |

#### Returns

[`ResponsePromise`](client.ResponsePromise.md)\<{}, {}\>

#### Defined in

[portal/index.js:33](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/portal/index.js#L33)

___

### update

▸ **update**(`portalId`, `request`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<{}\>

Updates a portal.

#### Parameters

| Name | Type |
| :------ | :------ |
| `portalId` | `string` |
| `request` | `Object` |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<{}\>

#### Defined in

[portal/index.js:64](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/portal/index.js#L64)
