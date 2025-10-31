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

- [clientFetch](policy.PolicyClient.md#clientfetch)
- [create](policy.PolicyClient.md#create)
- [delete](policy.PolicyClient.md#delete)
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

[client.js:345](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/client.js#L345)

___

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
