[@chatbotkit/sdk](../README.md) / [Modules](../modules.md) / graphql/v1

# Module: graphql/v1

## Table of contents

### Type Aliases

- [ChatBotKitClient](graphql_v1.md#chatbotkitclient)
- [GraphqlRequest](graphql_v1.md#graphqlrequest)
- [GraphqlResponse](graphql_v1.md#graphqlresponse)

### Functions

- [call](graphql_v1.md#call)

## Type Aliases

### ChatBotKitClient

Ƭ **ChatBotKitClient**\<\>: [`client`](client.md)

#### Defined in

[graphql/v1.js:2](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/graphql/v1.js#L2)

___

### GraphqlRequest

Ƭ **GraphqlRequest**\<\>: `operations`[``"graphql"``][``"requestBody"``][``"content"``][``"application/json"``]

#### Defined in

[graphql/v1.js:6](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/graphql/v1.js#L6)

___

### GraphqlResponse

Ƭ **GraphqlResponse**\<\>: `operations`[``"graphql"``][``"responses"``][``"200"``][``"content"``][``"application/json"``]

#### Defined in

[graphql/v1.js:7](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/graphql/v1.js#L7)

## Functions

### call

▸ **call**(`client`, `body`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<{}\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`ChatBotKitClient`](../classes/client.ChatBotKitClient.md) |
| `body` | `Object` |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<{}\>

#### Defined in

[graphql/v1.js:15](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/graphql/v1.js#L15)
