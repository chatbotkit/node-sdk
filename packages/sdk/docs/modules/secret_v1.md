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

Ƭ **SecretCreateRequest**\<\>: [`SecretOptions`](secret_v1.md#secretoptions) & \{ `model?`: [`model/v1`](model_v1.md)  }

#### Defined in

[secret/v1.js:74](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/secret/v1.js#L74)

___

### SecretCreateResponse

Ƭ **SecretCreateResponse**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Defined in

[secret/v1.js:78](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/secret/v1.js#L78)

___

### SecretDeleteResponse

Ƭ **SecretDeleteResponse**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Defined in

[secret/v1.js:129](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/secret/v1.js#L129)

___

### SecretFetchResponse

Ƭ **SecretFetchResponse**\<\>: [`SecretInstance`](secret_v1.md#secretinstance) & {}

#### Defined in

[secret/v1.js:56](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/secret/v1.js#L56)

___

### SecretInstance

Ƭ **SecretInstance**\<\>: [`SecretOptions`](secret_v1.md#secretoptions) & \{ `createdAt`: `number` ; `id`: `string` ; `updatedAt`: `number`  }

#### Defined in

[secret/v1.js:24](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/secret/v1.js#L24)

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

[secret/v1.js:28](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/secret/v1.js#L28)

___

### SecretListResponse

Ƭ **SecretListResponse**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `items` | [`SecretInstance`](secret_v1.md#secretinstance)[] |

#### Defined in

[secret/v1.js:30](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/secret/v1.js#L30)

___

### SecretListStreamItemType

Ƭ **SecretListStreamItemType**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `data` | [`SecretInstance`](secret_v1.md#secretinstance) |
| `type` | ``"item"`` |

#### Defined in

[secret/v1.js:35](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/secret/v1.js#L35)

___

### SecretListStreamType

Ƭ **SecretListStreamType**\<\>: [`SecretListStreamItemType`](secret_v1.md#secretliststreamitemtype)

#### Defined in

[secret/v1.js:37](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/secret/v1.js#L37)

___

### SecretOptions

Ƭ **SecretOptions**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `description?` | `string` |
| `meta?` | [`Record`]( https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type )\<`string`, `any`\> |
| `name?` | `string` |
| `type?` | ``"bearer"`` \| ``"plain"`` \| ``"basic"`` |
| `value?` | `string` |

#### Defined in

[secret/v1.js:18](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/secret/v1.js#L18)

___

### SecretUpdateRequest

Ƭ **SecretUpdateRequest**\<\>: [`SecretOptions`](secret_v1.md#secretoptions) & \{ `model?`: [`model/v1`](model_v1.md)  }

#### Defined in

[secret/v1.js:101](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/secret/v1.js#L101)

___

### SecretUpdateResponse

Ƭ **SecretUpdateResponse**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Defined in

[secret/v1.js:105](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/secret/v1.js#L105)

## Functions

### createSecret

▸ **createSecret**(`client`, `request`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<[`SecretCreateResponse`](secret_v1.md#secretcreateresponse)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`ChatBotKitClient`](../classes/client.ChatBotKitClient.md) |
| `request` | [`SecretCreateRequest`](secret_v1.md#secretcreaterequest) |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<[`SecretCreateResponse`](secret_v1.md#secretcreateresponse)\>

#### Defined in

[secret/v1.js:84](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/secret/v1.js#L84)

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

[secret/v1.js:135](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/secret/v1.js#L135)

___

### fetchSecret

▸ **fetchSecret**(`client`, `secretId`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<[`SecretFetchResponse`](secret_v1.md#secretfetchresponse)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`ChatBotKitClient`](../classes/client.ChatBotKitClient.md) |
| `secretId` | `string` |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<[`SecretFetchResponse`](secret_v1.md#secretfetchresponse)\>

#### Defined in

[secret/v1.js:62](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/secret/v1.js#L62)

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

[secret/v1.js:43](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/secret/v1.js#L43)

___

### updateSecret

▸ **updateSecret**(`client`, `secretId`, `request`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<[`SecretUpdateResponse`](secret_v1.md#secretupdateresponse)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`ChatBotKitClient`](../classes/client.ChatBotKitClient.md) |
| `secretId` | `string` |
| `request` | [`SecretUpdateRequest`](secret_v1.md#secretupdaterequest) |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<[`SecretUpdateResponse`](secret_v1.md#secretupdateresponse)\>

#### Defined in

[secret/v1.js:112](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/secret/v1.js#L112)
