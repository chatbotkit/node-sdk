[@chatbotkit/sdk](../README.md) / [Modules](../modules.md) / graphql/v1

# Module: graphql/v1

## Table of contents

### Type Aliases

- [ChatBotKitClient](graphql_v1.md#chatbotkitclient)
- [GraphqlRequest](graphql_v1.md#graphqlrequest)
- [GraphqlRequestBody](graphql_v1.md#graphqlrequestbody)
- [GraphqlResponse](graphql_v1.md#graphqlresponse)
- [GraphqlResponseBody](graphql_v1.md#graphqlresponsebody)
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

Ƭ **GraphqlRequest**\<\>: [`GraphqlRequestBody`](graphql_v1.md#graphqlrequestbody)

#### Defined in

[graphql/v1.js:14](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/graphql/v1.js#L14)

___

### GraphqlRequestBody

Ƭ **GraphqlRequestBody**\<\>: `operations`[``"graphql"``][``"requestBody"``][``"content"``][``"application/json"``]

#### Defined in

[graphql/v1.js:12](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/graphql/v1.js#L12)

___

### GraphqlResponse

Ƭ **GraphqlResponse**\<\>: [`GraphqlResponseBody`](graphql_v1.md#graphqlresponsebody)

#### Defined in

[graphql/v1.js:18](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/graphql/v1.js#L18)

___

### GraphqlResponseBody

Ƭ **GraphqlResponseBody**\<\>: `operations`[``"graphql"``][``"responses"``][``"200"``][``"content"``][``"application/json"``]

#### Defined in

[graphql/v1.js:16](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/graphql/v1.js#L16)

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

▸ **call**(`client`, `request`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<{}\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`ChatBotKitClient`](../classes/client.ChatBotKitClient.md) |
| `request` | `Object` |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<{}\>

#### Defined in

[graphql/v1.js:24](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/graphql/v1.js#L24)
