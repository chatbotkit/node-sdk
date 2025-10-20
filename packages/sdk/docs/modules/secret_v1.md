[@chatbotkit/sdk](../README.md) / [Modules](../modules.md) / secret/v1

# Module: secret/v1

## Table of contents

### Type Aliases

- [ChatBotKitClient](secret_v1.md#chatbotkitclient)
- [ResponsePromise](secret_v1.md#responsepromise)
- [SecretCreateRequest](secret_v1.md#secretcreaterequest)
- [SecretCreateResponse](secret_v1.md#secretcreateresponse)
- [SecretDeleteResponse](secret_v1.md#secretdeleteresponse)
- [SecretFetchResponse](secret_v1.md#secretfetchresponse)
- [SecretInstance](secret_v1.md#secretinstance)
- [SecretListRequest](secret_v1.md#secretlistrequest)
- [SecretListResponse](secret_v1.md#secretlistresponse)
- [SecretListStreamItemType](secret_v1.md#secretliststreamitemtype)
- [SecretListStreamType](secret_v1.md#secretliststreamtype)
- [SecretOptions](secret_v1.md#secretoptions)
- [SecretUpdateRequest](secret_v1.md#secretupdaterequest)
- [SecretUpdateResponse](secret_v1.md#secretupdateresponse)

### Functions

- [createSecret](secret_v1.md#createsecret)
- [deleteSecret](secret_v1.md#deletesecret)
- [fetchSecret](secret_v1.md#fetchsecret)
- [listSecrets](secret_v1.md#listsecrets)
- [updateSecret](secret_v1.md#updatesecret)

## Type Aliases

### ChatBotKitClient

Ƭ **ChatBotKitClient**\<\>: [`client`](client.md)

#### Defined in

[secret/v1.js:2](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/secret/v1.js#L2)

___

### ResponsePromise

Ƭ **ResponsePromise**\<`T`, `U`\>: [`client`](client.md)

#### Type parameters

| Name |
| :------ |
| `T` |
| `U` |

#### Defined in

[secret/v1.js:8](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/secret/v1.js#L8)

___

### SecretCreateRequest

Ƭ **SecretCreateRequest**\<\>: [`SecretOptions`](secret_v1.md#secretoptions) & {}

#### Defined in

[secret/v1.js:83](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/secret/v1.js#L83)

___

### SecretCreateResponse

Ƭ **SecretCreateResponse**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Defined in

[secret/v1.js:87](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/secret/v1.js#L87)

___

### SecretDeleteResponse

Ƭ **SecretDeleteResponse**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Defined in

[secret/v1.js:137](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/secret/v1.js#L137)

___

### SecretFetchResponse

Ƭ **SecretFetchResponse**\<\>: [`SecretInstance`](secret_v1.md#secretinstance) & {}

#### Defined in

[secret/v1.js:65](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/secret/v1.js#L65)

___

### SecretInstance

Ƭ **SecretInstance**\<\>: [`SecretOptions`](secret_v1.md#secretoptions) & \{ `createdAt`: `number` ; `id`: `string` ; `updatedAt`: `number`  }

#### Defined in

[secret/v1.js:28](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/secret/v1.js#L28)

___

### SecretListRequest

Ƭ **SecretListRequest**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `cursor?` | `string` |
| `meta?` | [`Record`]( https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type )\<`string`, `string`\> |
| `order?` | ``"desc"`` \| ``"asc"`` |
| `take?` | `number` |

#### Defined in

[secret/v1.js:37](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/secret/v1.js#L37)

___

### SecretListResponse

Ƭ **SecretListResponse**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `items` | [`SecretInstance`](secret_v1.md#secretinstance)[] |

#### Defined in

[secret/v1.js:39](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/secret/v1.js#L39)

___

### SecretListStreamItemType

Ƭ **SecretListStreamItemType**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `data` | [`SecretInstance`](secret_v1.md#secretinstance) |
| `type` | ``"item"`` |

#### Defined in

[secret/v1.js:44](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/secret/v1.js#L44)

___

### SecretListStreamType

Ƭ **SecretListStreamType**\<\>: [`SecretListStreamItemType`](secret_v1.md#secretliststreamitemtype)

#### Defined in

[secret/v1.js:46](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/secret/v1.js#L46)

___

### SecretOptions

Ƭ **SecretOptions**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `blueprintId?` | `string` |
| `config?` | [`Record`]( https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type )\<`string`, `any`\> |
| `description?` | `string` |
| `kind?` | ``"shared"`` \| ``"personal"`` |
| `meta?` | [`Record`]( https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type )\<`string`, `any`\> |
| `name?` | `string` |
| `type?` | ``"plain"`` \| ``"basic"`` \| ``"bearer"`` \| ``"oauth"`` \| ``"template"`` \| ``"reference"`` |
| `value?` | `string` |
| `visibility?` | ``"private"`` \| ``"protected"`` \| ``"public"`` |

#### Defined in

[secret/v1.js:22](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/secret/v1.js#L22)

___

### SecretUpdateRequest

Ƭ **SecretUpdateRequest**\<\>: [`SecretOptions`](secret_v1.md#secretoptions) & {}

#### Defined in

[secret/v1.js:109](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/secret/v1.js#L109)

___

### SecretUpdateResponse

Ƭ **SecretUpdateResponse**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Defined in

[secret/v1.js:113](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/secret/v1.js#L113)

## Functions

### createSecret

▸ **createSecret**(`client`, `request`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<[`SecretCreateResponse`](secret_v1.md#secretcreateresponse)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`ChatBotKitClient`](../classes/client.ChatBotKitClient.md) |
| `request` | [`SecretOptions`](secret_v1.md#secretoptions) |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<[`SecretCreateResponse`](secret_v1.md#secretcreateresponse)\>

#### Defined in

[secret/v1.js:93](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/secret/v1.js#L93)

___

### deleteSecret

▸ **deleteSecret**(`client`, `secretId`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<[`SecretDeleteResponse`](secret_v1.md#secretdeleteresponse)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`ChatBotKitClient`](../classes/client.ChatBotKitClient.md) |
| `secretId` | `string` |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<[`SecretDeleteResponse`](secret_v1.md#secretdeleteresponse)\>

#### Defined in

[secret/v1.js:143](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/secret/v1.js#L143)

___

### fetchSecret

▸ **fetchSecret**(`client`, `secretId`): [`ResponsePromise`](../classes/client.ResponsePromise.md)\<[`SecretFetchResponse`](secret_v1.md#secretfetchresponse), `never`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`ChatBotKitClient`](../classes/client.ChatBotKitClient.md) |
| `secretId` | `string` |

#### Returns

[`ResponsePromise`](../classes/client.ResponsePromise.md)\<[`SecretFetchResponse`](secret_v1.md#secretfetchresponse), `never`\>

#### Defined in

[secret/v1.js:71](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/secret/v1.js#L71)

___

### listSecrets

▸ **listSecrets**(`client`, `request?`): [`ResponsePromise`](../classes/client.ResponsePromise.md)\<[`SecretListResponse`](secret_v1.md#secretlistresponse), [`SecretListStreamItemType`](secret_v1.md#secretliststreamitemtype)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`ChatBotKitClient`](../classes/client.ChatBotKitClient.md) |
| `request?` | [`SecretListRequest`](secret_v1.md#secretlistrequest) |

#### Returns

[`ResponsePromise`](../classes/client.ResponsePromise.md)\<[`SecretListResponse`](secret_v1.md#secretlistresponse), [`SecretListStreamItemType`](secret_v1.md#secretliststreamitemtype)\>

#### Defined in

[secret/v1.js:52](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/secret/v1.js#L52)

___

### updateSecret

▸ **updateSecret**(`client`, `secretId`, `request`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<[`SecretUpdateResponse`](secret_v1.md#secretupdateresponse)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`ChatBotKitClient`](../classes/client.ChatBotKitClient.md) |
| `secretId` | `string` |
| `request` | [`SecretOptions`](secret_v1.md#secretoptions) |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<[`SecretUpdateResponse`](secret_v1.md#secretupdateresponse)\>

#### Defined in

[secret/v1.js:120](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/secret/v1.js#L120)
