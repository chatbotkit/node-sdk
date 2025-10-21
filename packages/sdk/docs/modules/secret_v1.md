[@chatbotkit/sdk](../README.md) / [Modules](../modules.md) / secret/v1

# Module: secret/v1

## Table of contents

### Type Aliases

- [ChatBotKitClient](secret_v1.md#chatbotkitclient)
- [ResponsePromise](secret_v1.md#responsepromise)
- [SecretCreateRequest](secret_v1.md#secretcreaterequest)
- [SecretCreateRequestBody](secret_v1.md#secretcreaterequestbody)
- [SecretCreateResponse](secret_v1.md#secretcreateresponse)
- [SecretDeleteRequestBody](secret_v1.md#secretdeleterequestbody)
- [SecretDeleteResponse](secret_v1.md#secretdeleteresponse)
- [SecretFetchResponse](secret_v1.md#secretfetchresponse)
- [SecretListRequest](secret_v1.md#secretlistrequest)
- [SecretListResponse](secret_v1.md#secretlistresponse)
- [SecretListStreamType](secret_v1.md#secretliststreamtype)
- [SecretUpdateRequest](secret_v1.md#secretupdaterequest)
- [SecretUpdateRequestBody](secret_v1.md#secretupdaterequestbody)
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

Ƭ **SecretCreateRequest**\<\>: `Object`

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

[secret/v1.js:63](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/secret/v1.js#L63)

___

### SecretCreateRequestBody

Ƭ **SecretCreateRequestBody**\<\>: `operations`[``"createSecret"``][``"requestBody"``][``"content"``][``"application/json"``]

#### Defined in

[secret/v1.js:65](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/secret/v1.js#L65)

___

### SecretCreateResponse

Ƭ **SecretCreateResponse**\<\>: `operations`[``"createSecret"``][``"responses"``][``"200"``][``"content"``][``"application/json"``]

#### Defined in

[secret/v1.js:67](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/secret/v1.js#L67)

___

### SecretDeleteRequestBody

Ƭ **SecretDeleteRequestBody**\<\>: `operations`[``"deleteSecret"``][``"requestBody"``][``"content"``][``"application/json"``]

#### Defined in

[secret/v1.js:124](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/secret/v1.js#L124)

___

### SecretDeleteResponse

Ƭ **SecretDeleteResponse**\<\>: `operations`[``"deleteSecret"``][``"responses"``][``"200"``][``"content"``][``"application/json"``]

#### Defined in

[secret/v1.js:126](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/secret/v1.js#L126)

___

### SecretFetchResponse

Ƭ **SecretFetchResponse**\<\>: `operations`[``"fetchSecret"``][``"responses"``][``"200"``][``"content"``][``"application/json"``]

#### Defined in

[secret/v1.js:37](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/secret/v1.js#L37)

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

[secret/v1.js:17](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/secret/v1.js#L17)

___

### SecretListResponse

Ƭ **SecretListResponse**\<\>: `operations`[``"listSecrets"``][``"responses"``][``"200"``][``"content"``][``"application/json"``]

#### Defined in

[secret/v1.js:19](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/secret/v1.js#L19)

___

### SecretListStreamType

Ƭ **SecretListStreamType**\<\>: `operations`[``"listSecrets"``][``"responses"``][``"200"``][``"content"``][``"application/jsonl"``]

#### Defined in

[secret/v1.js:21](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/secret/v1.js#L21)

___

### SecretUpdateRequest

Ƭ **SecretUpdateRequest**\<\>: `Object`

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

[secret/v1.js:98](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/secret/v1.js#L98)

___

### SecretUpdateRequestBody

Ƭ **SecretUpdateRequestBody**\<\>: `operations`[``"updateSecret"``][``"requestBody"``][``"content"``][``"application/json"``]

#### Defined in

[secret/v1.js:100](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/secret/v1.js#L100)

___

### SecretUpdateResponse

Ƭ **SecretUpdateResponse**\<\>: `operations`[``"updateSecret"``][``"responses"``][``"200"``][``"content"``][``"application/json"``]

#### Defined in

[secret/v1.js:102](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/secret/v1.js#L102)

## Functions

### createSecret

▸ **createSecret**(`client`, `request`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<{}\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`ChatBotKitClient`](../classes/client.ChatBotKitClient.md) |
| `request` | [`SecretCreateRequest`](secret_v1.md#secretcreaterequest) |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<{}\>

#### Defined in

[secret/v1.js:73](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/secret/v1.js#L73)

___

### deleteSecret

▸ **deleteSecret**(`client`, `secretId`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<{}\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`ChatBotKitClient`](../classes/client.ChatBotKitClient.md) |
| `secretId` | `string` |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<{}\>

#### Defined in

[secret/v1.js:132](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/secret/v1.js#L132)

___

### fetchSecret

▸ **fetchSecret**(`client`, `secretId`): [`ResponsePromise`](../classes/client.ResponsePromise.md)\<{}, `never`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`ChatBotKitClient`](../classes/client.ChatBotKitClient.md) |
| `secretId` | `string` |

#### Returns

[`ResponsePromise`](../classes/client.ResponsePromise.md)\<{}, `never`\>

#### Defined in

[secret/v1.js:43](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/secret/v1.js#L43)

___

### listSecrets

▸ **listSecrets**(`client`, `request?`): [`ResponsePromise`](../classes/client.ResponsePromise.md)\<{}, {}\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`ChatBotKitClient`](../classes/client.ChatBotKitClient.md) |
| `request?` | [`SecretListRequest`](secret_v1.md#secretlistrequest) |

#### Returns

[`ResponsePromise`](../classes/client.ResponsePromise.md)\<{}, {}\>

#### Defined in

[secret/v1.js:27](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/secret/v1.js#L27)

___

### updateSecret

▸ **updateSecret**(`client`, `secretId`, `request`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<{}\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`ChatBotKitClient`](../classes/client.ChatBotKitClient.md) |
| `secretId` | `string` |
| `request` | [`SecretUpdateRequest`](secret_v1.md#secretupdaterequest) |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<{}\>

#### Defined in

[secret/v1.js:109](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/secret/v1.js#L109)
