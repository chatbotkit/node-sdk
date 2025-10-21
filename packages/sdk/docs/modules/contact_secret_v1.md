[@chatbotkit/sdk](../README.md) / [Modules](../modules.md) / contact/secret/v1

# Module: contact/secret/v1

## Table of contents

### Type Aliases

- [ChatBotKitClient](contact_secret_v1.md#chatbotkitclient)
- [ResponsePromise](contact_secret_v1.md#responsepromise)
- [SecretAuthenticateRequest](contact_secret_v1.md#secretauthenticaterequest)
- [SecretAuthenticateRequestBody](contact_secret_v1.md#secretauthenticaterequestbody)
- [SecretAuthenticateResponse](contact_secret_v1.md#secretauthenticateresponse)
- [SecretAuthenticateResponseBody](contact_secret_v1.md#secretauthenticateresponsebody)
- [SecretListRequest](contact_secret_v1.md#secretlistrequest)
- [SecretListResponse](contact_secret_v1.md#secretlistresponse)
- [SecretListStreamType](contact_secret_v1.md#secretliststreamtype)
- [SecretRevokeRequest](contact_secret_v1.md#secretrevokerequest)
- [SecretRevokeRequestBody](contact_secret_v1.md#secretrevokerequestbody)
- [SecretRevokeResponse](contact_secret_v1.md#secretrevokeresponse)
- [SecretRevokeResponseBody](contact_secret_v1.md#secretrevokeresponsebody)
- [SecretVerifyRequest](contact_secret_v1.md#secretverifyrequest)
- [SecretVerifyRequestBody](contact_secret_v1.md#secretverifyrequestbody)
- [SecretVerifyResponse](contact_secret_v1.md#secretverifyresponse)
- [SecretVerifyResponseBody](contact_secret_v1.md#secretverifyresponsebody)

### Functions

- [authenticateSecret](contact_secret_v1.md#authenticatesecret)
- [listSecrets](contact_secret_v1.md#listsecrets)
- [revokeSecret](contact_secret_v1.md#revokesecret)
- [verifySecret](contact_secret_v1.md#verifysecret)

## Type Aliases

### ChatBotKitClient

Ƭ **ChatBotKitClient**\<\>: [`client`](client.md)

#### Defined in

[contact/secret/v1.js:2](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/contact/secret/v1.js#L2)

___

### ResponsePromise

Ƭ **ResponsePromise**\<`T`, `U`\>: [`client`](client.md)

#### Type parameters

| Name |
| :------ |
| `T` |
| `U` |

#### Defined in

[contact/secret/v1.js:8](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/contact/secret/v1.js#L8)

___

### SecretAuthenticateRequest

Ƭ **SecretAuthenticateRequest**\<\>: [`SecretAuthenticateRequestBody`](contact_secret_v1.md#secretauthenticaterequestbody)

#### Defined in

[contact/secret/v1.js:92](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/contact/secret/v1.js#L92)

___

### SecretAuthenticateRequestBody

Ƭ **SecretAuthenticateRequestBody**\<\>: `operations`[``"authenticateContactSecret"``][``"requestBody"``][``"content"``][``"application/json"``]

#### Defined in

[contact/secret/v1.js:90](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/contact/secret/v1.js#L90)

___

### SecretAuthenticateResponse

Ƭ **SecretAuthenticateResponse**\<\>: [`SecretAuthenticateResponseBody`](contact_secret_v1.md#secretauthenticateresponsebody)

#### Defined in

[contact/secret/v1.js:96](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/contact/secret/v1.js#L96)

___

### SecretAuthenticateResponseBody

Ƭ **SecretAuthenticateResponseBody**\<\>: `operations`[``"authenticateContactSecret"``][``"responses"``][``"200"``][``"content"``][``"application/json"``]

#### Defined in

[contact/secret/v1.js:94](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/contact/secret/v1.js#L94)

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

[contact/secret/v1.js:17](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/contact/secret/v1.js#L17)

___

### SecretListResponse

Ƭ **SecretListResponse**\<\>: `operations`[``"listContactSecrets"``][``"responses"``][``"200"``][``"content"``][``"application/json"``]

#### Defined in

[contact/secret/v1.js:19](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/contact/secret/v1.js#L19)

___

### SecretListStreamType

Ƭ **SecretListStreamType**\<\>: `operations`[``"listContactSecrets"``][``"responses"``][``"200"``][``"content"``][``"application/jsonl"``]

#### Defined in

[contact/secret/v1.js:21](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/contact/secret/v1.js#L21)

___

### SecretRevokeRequest

Ƭ **SecretRevokeRequest**\<\>: [`SecretRevokeRequestBody`](contact_secret_v1.md#secretrevokerequestbody)

#### Defined in

[contact/secret/v1.js:40](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/contact/secret/v1.js#L40)

___

### SecretRevokeRequestBody

Ƭ **SecretRevokeRequestBody**\<\>: `operations`[``"revokeContactSecret"``][``"requestBody"``][``"content"``][``"application/json"``]

#### Defined in

[contact/secret/v1.js:38](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/contact/secret/v1.js#L38)

___

### SecretRevokeResponse

Ƭ **SecretRevokeResponse**\<\>: [`SecretRevokeResponseBody`](contact_secret_v1.md#secretrevokeresponsebody)

#### Defined in

[contact/secret/v1.js:44](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/contact/secret/v1.js#L44)

___

### SecretRevokeResponseBody

Ƭ **SecretRevokeResponseBody**\<\>: `operations`[``"revokeContactSecret"``][``"responses"``][``"200"``][``"content"``][``"application/json"``]

#### Defined in

[contact/secret/v1.js:42](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/contact/secret/v1.js#L42)

___

### SecretVerifyRequest

Ƭ **SecretVerifyRequest**\<\>: [`SecretVerifyRequestBody`](contact_secret_v1.md#secretverifyrequestbody)

#### Defined in

[contact/secret/v1.js:66](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/contact/secret/v1.js#L66)

___

### SecretVerifyRequestBody

Ƭ **SecretVerifyRequestBody**\<\>: `operations`[``"verifyContactSecret"``][``"requestBody"``][``"content"``][``"application/json"``]

#### Defined in

[contact/secret/v1.js:64](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/contact/secret/v1.js#L64)

___

### SecretVerifyResponse

Ƭ **SecretVerifyResponse**\<\>: [`SecretVerifyResponseBody`](contact_secret_v1.md#secretverifyresponsebody)

#### Defined in

[contact/secret/v1.js:70](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/contact/secret/v1.js#L70)

___

### SecretVerifyResponseBody

Ƭ **SecretVerifyResponseBody**\<\>: `operations`[``"verifyContactSecret"``][``"responses"``][``"200"``][``"content"``][``"application/json"``]

#### Defined in

[contact/secret/v1.js:68](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/contact/secret/v1.js#L68)

## Functions

### authenticateSecret

▸ **authenticateSecret**(`client`, `contactId`, `secretId`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<{}\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`ChatBotKitClient`](../classes/client.ChatBotKitClient.md) |
| `contactId` | `string` |
| `secretId` | `string` |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<{}\>

#### Defined in

[contact/secret/v1.js:103](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/contact/secret/v1.js#L103)

___

### listSecrets

▸ **listSecrets**(`client`, `contactId`, `request?`): [`ResponsePromise`](../classes/client.ResponsePromise.md)\<{}, {}\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`ChatBotKitClient`](../classes/client.ChatBotKitClient.md) |
| `contactId` | `string` |
| `request?` | [`SecretListRequest`](contact_secret_v1.md#secretlistrequest) |

#### Returns

[`ResponsePromise`](../classes/client.ResponsePromise.md)\<{}, {}\>

#### Defined in

[contact/secret/v1.js:28](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/contact/secret/v1.js#L28)

___

### revokeSecret

▸ **revokeSecret**(`client`, `contactId`, `secretId`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<{}\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`ChatBotKitClient`](../classes/client.ChatBotKitClient.md) |
| `contactId` | `string` |
| `secretId` | `string` |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<{}\>

#### Defined in

[contact/secret/v1.js:51](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/contact/secret/v1.js#L51)

___

### verifySecret

▸ **verifySecret**(`client`, `contactId`, `secretId`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<{}\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`ChatBotKitClient`](../classes/client.ChatBotKitClient.md) |
| `contactId` | `string` |
| `secretId` | `string` |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<{}\>

#### Defined in

[contact/secret/v1.js:77](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/contact/secret/v1.js#L77)
