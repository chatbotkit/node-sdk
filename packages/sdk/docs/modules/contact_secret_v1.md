[@chatbotkit/sdk](../README.md) / [Modules](../modules.md) / contact/secret/v1

# Module: contact/secret/v1

## Table of contents

### Type Aliases

- [ChatBotKitClient](contact_secret_v1.md#chatbotkitclient)
- [ResponsePromise](contact_secret_v1.md#responsepromise)
- [SecretAuthenticateResponse](contact_secret_v1.md#secretauthenticateresponse)
- [SecretInstance](contact_secret_v1.md#secretinstance)
- [SecretListRequest](contact_secret_v1.md#secretlistrequest)
- [SecretListResponse](contact_secret_v1.md#secretlistresponse)
- [SecretListStreamItemType](contact_secret_v1.md#secretliststreamitemtype)
- [SecretListStreamType](contact_secret_v1.md#secretliststreamtype)
- [SecretOptions](contact_secret_v1.md#secretoptions)
- [SecretRevokeResponse](contact_secret_v1.md#secretrevokeresponse)
- [SecretVerifyResponse](contact_secret_v1.md#secretverifyresponse)

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

### SecretAuthenticateResponse

Ƭ **SecretAuthenticateResponse**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `id` | `string` |
| `url` | `string` |

#### Defined in

[contact/secret/v1.js:104](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/contact/secret/v1.js#L104)

___

### SecretInstance

Ƭ **SecretInstance**\<\>: [`SecretOptions`](contact_secret_v1.md#secretoptions) & \{ `createdAt`: `number` ; `id`: `string` ; `updatedAt`: `number`  }

#### Defined in

[contact/secret/v1.js:23](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/contact/secret/v1.js#L23)

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

[contact/secret/v1.js:27](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/contact/secret/v1.js#L27)

___

### SecretListResponse

Ƭ **SecretListResponse**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `items` | [`SecretInstance`](contact_secret_v1.md#secretinstance)[] |

#### Defined in

[contact/secret/v1.js:29](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/contact/secret/v1.js#L29)

___

### SecretListStreamItemType

Ƭ **SecretListStreamItemType**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `data` | [`SecretInstance`](contact_secret_v1.md#secretinstance) |
| `type` | ``"item"`` |

#### Defined in

[contact/secret/v1.js:34](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/contact/secret/v1.js#L34)

___

### SecretListStreamType

Ƭ **SecretListStreamType**\<\>: [`SecretListStreamItemType`](contact_secret_v1.md#secretliststreamitemtype)

#### Defined in

[contact/secret/v1.js:36](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/contact/secret/v1.js#L36)

___

### SecretOptions

Ƭ **SecretOptions**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `description?` | `string` |
| `meta?` | [`Record`]( https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type )\<`string`, `any`\> |
| `name?` | `string` |
| `type?` | `string` |

#### Defined in

[contact/secret/v1.js:17](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/contact/secret/v1.js#L17)

___

### SecretRevokeResponse

Ƭ **SecretRevokeResponse**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Defined in

[contact/secret/v1.js:57](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/contact/secret/v1.js#L57)

___

### SecretVerifyResponse

Ƭ **SecretVerifyResponse**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `action?` | \{ `type`: ``"authenticate"`` ; `url`: `string`  } |
| `action.type` | ``"authenticate"`` |
| `action.url` | `string` |
| `id` | `string` |
| `status` | ``"unauthenticated"`` \| ``"authenticated"`` |

#### Defined in

[contact/secret/v1.js:81](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/contact/secret/v1.js#L81)

## Functions

### authenticateSecret

▸ **authenticateSecret**(`client`, `contactId`, `secretId`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<[`SecretAuthenticateResponse`](contact_secret_v1.md#secretauthenticateresponse)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`ChatBotKitClient`](../classes/client.ChatBotKitClient.md) |
| `contactId` | `string` |
| `secretId` | `string` |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<[`SecretAuthenticateResponse`](contact_secret_v1.md#secretauthenticateresponse)\>

#### Defined in

[contact/secret/v1.js:111](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/contact/secret/v1.js#L111)

___

### listSecrets

▸ **listSecrets**(`client`, `contactId`, `request?`): [`ResponsePromise`](../classes/client.ResponsePromise.md)\<[`SecretListResponse`](contact_secret_v1.md#secretlistresponse), [`SecretListStreamItemType`](contact_secret_v1.md#secretliststreamitemtype)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`ChatBotKitClient`](../classes/client.ChatBotKitClient.md) |
| `contactId` | `string` |
| `request?` | [`SecretListRequest`](contact_secret_v1.md#secretlistrequest) |

#### Returns

[`ResponsePromise`](../classes/client.ResponsePromise.md)\<[`SecretListResponse`](contact_secret_v1.md#secretlistresponse), [`SecretListStreamItemType`](contact_secret_v1.md#secretliststreamitemtype)\>

#### Defined in

[contact/secret/v1.js:43](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/contact/secret/v1.js#L43)

___

### revokeSecret

▸ **revokeSecret**(`client`, `contactId`, `secretId`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<[`SecretRevokeResponse`](contact_secret_v1.md#secretrevokeresponse)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`ChatBotKitClient`](../classes/client.ChatBotKitClient.md) |
| `contactId` | `string` |
| `secretId` | `string` |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<[`SecretRevokeResponse`](contact_secret_v1.md#secretrevokeresponse)\>

#### Defined in

[contact/secret/v1.js:64](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/contact/secret/v1.js#L64)

___

### verifySecret

▸ **verifySecret**(`client`, `contactId`, `secretId`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<[`SecretVerifyResponse`](contact_secret_v1.md#secretverifyresponse)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`ChatBotKitClient`](../classes/client.ChatBotKitClient.md) |
| `contactId` | `string` |
| `secretId` | `string` |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<[`SecretVerifyResponse`](contact_secret_v1.md#secretverifyresponse)\>

#### Defined in

[contact/secret/v1.js:88](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/contact/secret/v1.js#L88)
