[@chatbotkit/sdk](../README.md) / [Modules](../modules.md) / graphql/v1

# Module: graphql/v1

## Table of contents

### Type Aliases

- [ChatBotKitClient](graphql_v1.md#chatbotkitclient)
- [GraphqlRequest](graphql_v1.md#graphqlrequest)
- [GraphqlResponse](graphql_v1.md#graphqlresponse)
- [ResponsePromise](graphql_v1.md#responsepromise)

### Functions

- [call](graphql_v1.md#call)

## Type Aliases

### ChatBotKitClient

Ƭ **ChatBotKitClient**\<\>: [`client`](client.md)

#### Defined in

[graphql/v1.js:2](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/graphql/v1.js#L2)

___

### GraphqlRequest

Ƭ **GraphqlRequest**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `operationName?` | `string` |
| `query` | `string` |
| `variables?` | \{ `[key: string]`: `unknown`;  } |

#### Defined in

[graphql/v1.js:18](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/graphql/v1.js#L18)

___

### GraphqlResponse

Ƭ **GraphqlResponse**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `data?` | \{ `[key: string]`: `unknown`;  } |
| `errors?` | \{ `message`: `string`  }[] |

#### Defined in

[graphql/v1.js:27](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/graphql/v1.js#L27)

___

### ResponsePromise

Ƭ **ResponsePromise**\<`T`, `U`\>: [`client`](client.md)

#### Type parameters

| Name |
| :------ |
| `T` |
| `U` |

#### Defined in

[graphql/v1.js:8](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/graphql/v1.js#L8)

## Functions

### call

▸ **call**(`client`, `body`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<[`GraphqlResponse`](graphql_v1.md#graphqlresponse)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`ChatBotKitClient`](../classes/client.ChatBotKitClient.md) |
| `body` | [`GraphqlRequest`](graphql_v1.md#graphqlrequest) |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<[`GraphqlResponse`](graphql_v1.md#graphqlresponse)\>

#### Defined in

[graphql/v1.js:35](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/graphql/v1.js#L35)
