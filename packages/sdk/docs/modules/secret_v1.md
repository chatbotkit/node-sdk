[@chatbotkit/sdk](../README.md) / [Modules](../modules.md) / secret/v1

# Module: secret/v1

## Table of contents

### Type Aliases

- [ChatBotKitClient](secret_v1.md#chatbotkitclient)
- [ResponsePromise](secret_v1.md#responsepromise)
- [SecretCreateRequest](secret_v1.md#secretcreaterequest)
- [SecretCreateRequestBody](secret_v1.md#secretcreaterequestbody)
- [SecretCreateResponse](secret_v1.md#secretcreateresponse)
- [SecretCreateResponseBody](secret_v1.md#secretcreateresponsebody)
- [SecretDeleteRequest](secret_v1.md#secretdeleterequest)
- [SecretDeleteRequestBody](secret_v1.md#secretdeleterequestbody)
- [SecretDeleteResponse](secret_v1.md#secretdeleteresponse)
- [SecretDeleteResponseBody](secret_v1.md#secretdeleteresponsebody)
- [SecretFetchResponse](secret_v1.md#secretfetchresponse)
- [SecretListRequest](secret_v1.md#secretlistrequest)
- [SecretListResponse](secret_v1.md#secretlistresponse)
- [SecretListStreamType](secret_v1.md#secretliststreamtype)
- [SecretRevokeRequest](secret_v1.md#secretrevokerequest)
- [SecretRevokeRequestBody](secret_v1.md#secretrevokerequestbody)
- [SecretRevokeResponse](secret_v1.md#secretrevokeresponse)
- [SecretRevokeResponseBody](secret_v1.md#secretrevokeresponsebody)
- [SecretUpdateRequest](secret_v1.md#secretupdaterequest)
- [SecretUpdateRequestBody](secret_v1.md#secretupdaterequestbody)
- [SecretUpdateResponse](secret_v1.md#secretupdateresponse)
- [SecretUpdateResponseBody](secret_v1.md#secretupdateresponsebody)

### Functions

- [createSecret](secret_v1.md#createsecret)
- [deleteSecret](secret_v1.md#deletesecret)
- [fetchSecret](secret_v1.md#fetchsecret)
- [listSecrets](secret_v1.md#listsecrets)
- [revokeSecret](secret_v1.md#revokesecret)
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

Ƭ **SecretCreateRequest**\<\>: [`SecretCreateRequestBody`](secret_v1.md#secretcreaterequestbody)

#### Defined in

[secret/v1.js:55](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/secret/v1.js#L55)

___

### SecretCreateRequestBody

Ƭ **SecretCreateRequestBody**\<\>: `operations`[``"createSecret"``][``"requestBody"``][``"content"``][``"application/json"``]

#### Defined in

[secret/v1.js:53](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/secret/v1.js#L53)

___

### SecretCreateResponse

Ƭ **SecretCreateResponse**\<\>: [`SecretCreateResponseBody`](secret_v1.md#secretcreateresponsebody)

#### Defined in

[secret/v1.js:59](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/secret/v1.js#L59)

___

### SecretCreateResponseBody

Ƭ **SecretCreateResponseBody**\<\>: `operations`[``"createSecret"``][``"responses"``][``"200"``][``"content"``][``"application/json"``]

#### Defined in

[secret/v1.js:57](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/secret/v1.js#L57)

___

### SecretDeleteRequest

Ƭ **SecretDeleteRequest**\<\>: [`SecretDeleteRequestBody`](secret_v1.md#secretdeleterequestbody)

#### Defined in

[secret/v1.js:110](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/secret/v1.js#L110)

___

### SecretDeleteRequestBody

Ƭ **SecretDeleteRequestBody**\<\>: `operations`[``"deleteSecret"``][``"requestBody"``][``"content"``][``"application/json"``]

#### Defined in

[secret/v1.js:108](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/secret/v1.js#L108)

___

### SecretDeleteResponse

Ƭ **SecretDeleteResponse**\<\>: [`SecretDeleteResponseBody`](secret_v1.md#secretdeleteresponsebody)

#### Defined in

[secret/v1.js:114](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/secret/v1.js#L114)

___

### SecretDeleteResponseBody

Ƭ **SecretDeleteResponseBody**\<\>: `operations`[``"deleteSecret"``][``"responses"``][``"200"``][``"content"``][``"application/json"``]

#### Defined in

[secret/v1.js:112](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/secret/v1.js#L112)

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

### SecretRevokeRequest

Ƭ **SecretRevokeRequest**\<\>: [`SecretRevokeRequestBody`](secret_v1.md#secretrevokerequestbody)

#### Defined in

[secret/v1.js:135](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/secret/v1.js#L135)

___

### SecretRevokeRequestBody

Ƭ **SecretRevokeRequestBody**\<\>: `operations`[``"revokeSecret"``][``"requestBody"``][``"content"``][``"application/json"``]

#### Defined in

[secret/v1.js:133](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/secret/v1.js#L133)

___

### SecretRevokeResponse

Ƭ **SecretRevokeResponse**\<\>: [`SecretRevokeResponseBody`](secret_v1.md#secretrevokeresponsebody)

#### Defined in

[secret/v1.js:139](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/secret/v1.js#L139)

___

### SecretRevokeResponseBody

Ƭ **SecretRevokeResponseBody**\<\>: `operations`[``"revokeSecret"``][``"responses"``][``"200"``][``"content"``][``"application/json"``]

#### Defined in

[secret/v1.js:137](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/secret/v1.js#L137)

___

### SecretUpdateRequest

Ƭ **SecretUpdateRequest**\<\>: [`SecretUpdateRequestBody`](secret_v1.md#secretupdaterequestbody)

#### Defined in

[secret/v1.js:82](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/secret/v1.js#L82)

___

### SecretUpdateRequestBody

Ƭ **SecretUpdateRequestBody**\<\>: `operations`[``"updateSecret"``][``"requestBody"``][``"content"``][``"application/json"``]

#### Defined in

[secret/v1.js:80](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/secret/v1.js#L80)

___

### SecretUpdateResponse

Ƭ **SecretUpdateResponse**\<\>: [`SecretUpdateResponseBody`](secret_v1.md#secretupdateresponsebody)

#### Defined in

[secret/v1.js:86](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/secret/v1.js#L86)

___

### SecretUpdateResponseBody

Ƭ **SecretUpdateResponseBody**\<\>: `operations`[``"updateSecret"``][``"responses"``][``"200"``][``"content"``][``"application/json"``]

#### Defined in

[secret/v1.js:84](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/secret/v1.js#L84)

## Functions

### createSecret

▸ **createSecret**(`client`, `request`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<{}\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`ChatBotKitClient`](../classes/client.ChatBotKitClient.md) |
| `request` | `Object` |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<{}\>

#### Defined in

[secret/v1.js:65](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/secret/v1.js#L65)

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

[secret/v1.js:120](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/secret/v1.js#L120)

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

### revokeSecret

▸ **revokeSecret**(`client`, `secretId`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<{}\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`ChatBotKitClient`](../classes/client.ChatBotKitClient.md) |
| `secretId` | `string` |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<{}\>

#### Defined in

[secret/v1.js:145](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/secret/v1.js#L145)

___

### updateSecret

▸ **updateSecret**(`client`, `secretId`, `request`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<{}\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`ChatBotKitClient`](../classes/client.ChatBotKitClient.md) |
| `secretId` | `string` |
| `request` | `Object` |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<{}\>

#### Defined in

[secret/v1.js:93](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/secret/v1.js#L93)
