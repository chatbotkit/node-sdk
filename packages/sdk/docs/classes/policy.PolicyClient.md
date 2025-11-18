[@chatbotkit/sdk](../README.md) / [Modules](../modules.md) / [policy](../modules/policy.md) / PolicyClient

# Class: PolicyClient

[policy](../modules/policy.md).PolicyClient

Policy client.

## Hierarchy

- [`ChatBotKitClient`](client.ChatBotKitClient.md)

  ↳ **`PolicyClient`**

## Table of contents

### Constructors

- [constructor](policy.PolicyClient.md#constructor)

### Methods

- [create](policy.PolicyClient.md#create)
- [delete](policy.PolicyClient.md#delete)
- [extend](policy.PolicyClient.md#extend)
- [fetch](policy.PolicyClient.md#fetch)
- [list](policy.PolicyClient.md#list)
- [update](policy.PolicyClient.md#update)

## Constructors

### constructor

• **new PolicyClient**(`options`): [`PolicyClient`](policy.PolicyClient.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`ChatBotKitClientOptions`](../interfaces/client.ChatBotKitClientOptions.md) |

#### Returns

[`PolicyClient`](policy.PolicyClient.md)

#### Overrides

[ChatBotKitClient](client.ChatBotKitClient.md).[constructor](client.ChatBotKitClient.md#constructor)

#### Defined in

[policy/index.js:23](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/policy/index.js#L23)

## Methods

### create

▸ **create**(`request`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<{}\>

Creates a new policy.

#### Parameters

| Name | Type |
| :------ | :------ |
| `request` | `Object` |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<{}\>

#### Defined in

[policy/index.js:53](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/policy/index.js#L53)

___

### delete

▸ **delete**(`policyId`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<{}\>

Deletes the policy.

#### Parameters

| Name | Type |
| :------ | :------ |
| `policyId` | `string` |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<{}\>

#### Defined in

[policy/index.js:74](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/policy/index.js#L74)

___

### extend

▸ **extend**(`extensionOptions`): [`PolicyClient`](policy.PolicyClient.md)

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

[`PolicyClient`](policy.PolicyClient.md)

A new instance of the same client class with extended options

#### Inherited from

[ChatBotKitClient](client.ChatBotKitClient.md).[extend](client.ChatBotKitClient.md#extend)

#### Defined in

[client.js:382](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/client.js#L382)

___

### fetch

▸ **fetch**(`policyId`): [`ResponsePromise`](client.ResponsePromise.md)\<{}, `never`\>

Fetches a policy.

#### Parameters

| Name | Type |
| :------ | :------ |
| `policyId` | `string` |

#### Returns

[`ResponsePromise`](client.ResponsePromise.md)\<{}, `never`\>

#### Defined in

[policy/index.js:43](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/policy/index.js#L43)

___

### list

▸ **list**(`request?`): [`ResponsePromise`](client.ResponsePromise.md)\<{}, {}\>

Retrieves a list of all policies.

#### Parameters

| Name | Type |
| :------ | :------ |
| `request?` | [`PolicyListRequest`](../modules/policy_v1.md#policylistrequest) |

#### Returns

[`ResponsePromise`](client.ResponsePromise.md)\<{}, {}\>

#### Defined in

[policy/index.js:33](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/policy/index.js#L33)

___

### update

▸ **update**(`policyId`, `request`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<{}\>

Updates a policy.

#### Parameters

| Name | Type |
| :------ | :------ |
| `policyId` | `string` |
| `request` | `Object` |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<{}\>

#### Defined in

[policy/index.js:64](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/policy/index.js#L64)
