[@chatbotkit/sdk](../README.md) / [Modules](../modules.md) / channel/v1

# Module: channel/v1

## Table of contents

### Type Aliases

- [ChannelPublishRequest](channel_v1.md#channelpublishrequest)
- [ChannelPublishRequestBody](channel_v1.md#channelpublishrequestbody)
- [ChannelPublishResponse](channel_v1.md#channelpublishresponse)
- [ChannelPublishResponseBody](channel_v1.md#channelpublishresponsebody)
- [ChannelSubscribeRequest](channel_v1.md#channelsubscriberequest)
- [ChannelSubscribeRequestBody](channel_v1.md#channelsubscriberequestbody)
- [ChannelSubscribeResponseBody](channel_v1.md#channelsubscriberesponsebody)
- [ChannelSubscribeStreamType](channel_v1.md#channelsubscribestreamtype)
- [ChatBotKitClient](channel_v1.md#chatbotkitclient)
- [ResponsePromise](channel_v1.md#responsepromise)

### Functions

- [publishChannelMessage](channel_v1.md#publishchannelmessage)
- [subscribeChannelMessages](channel_v1.md#subscribechannelmessages)

## Type Aliases

### ChannelPublishRequest

Ƭ **ChannelPublishRequest**\<\>: [`ChannelPublishRequestBody`](channel_v1.md#channelpublishrequestbody)

#### Defined in

[channel/v1.js:14](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/channel/v1.js#L14)

___

### ChannelPublishRequestBody

Ƭ **ChannelPublishRequestBody**\<\>: `operations`[``"publishChannelMessage"``][``"requestBody"``][``"content"``][``"application/json"``]

#### Defined in

[channel/v1.js:12](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/channel/v1.js#L12)

___

### ChannelPublishResponse

Ƭ **ChannelPublishResponse**\<\>: [`ChannelPublishResponseBody`](channel_v1.md#channelpublishresponsebody)

#### Defined in

[channel/v1.js:18](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/channel/v1.js#L18)

___

### ChannelPublishResponseBody

Ƭ **ChannelPublishResponseBody**\<\>: `operations`[``"publishChannelMessage"``][``"responses"``][``"200"``][``"content"``][``"application/json"``]

#### Defined in

[channel/v1.js:16](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/channel/v1.js#L16)

___

### ChannelSubscribeRequest

Ƭ **ChannelSubscribeRequest**\<\>: [`ChannelSubscribeRequestBody`](channel_v1.md#channelsubscriberequestbody)

#### Defined in

[channel/v1.js:44](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/channel/v1.js#L44)

___

### ChannelSubscribeRequestBody

Ƭ **ChannelSubscribeRequestBody**\<\>: `operations`[``"subscribeChannelMessages"``][``"requestBody"``][``"content"``][``"application/json"``]

#### Defined in

[channel/v1.js:42](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/channel/v1.js#L42)

___

### ChannelSubscribeResponseBody

Ƭ **ChannelSubscribeResponseBody**\<\>: `operations`[``"subscribeChannelMessages"``][``"responses"``][``"200"``][``"content"``][``"application/jsonl"``]

#### Defined in

[channel/v1.js:46](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/channel/v1.js#L46)

___

### ChannelSubscribeStreamType

Ƭ **ChannelSubscribeStreamType**\<\>: [`ChannelSubscribeResponseBody`](channel_v1.md#channelsubscriberesponsebody)

#### Defined in

[channel/v1.js:48](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/channel/v1.js#L48)

___

### ChatBotKitClient

Ƭ **ChatBotKitClient**\<\>: [`client`](client.md)

#### Defined in

[channel/v1.js:2](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/channel/v1.js#L2)

___

### ResponsePromise

Ƭ **ResponsePromise**\<`T`, `U`\>: [`client`](client.md)

#### Type parameters

| Name |
| :------ |
| `T` |
| `U` |

#### Defined in

[channel/v1.js:8](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/channel/v1.js#L8)

## Functions

### publishChannelMessage

▸ **publishChannelMessage**(`client`, `channelId`, `request`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<{}\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`ChatBotKitClient`](../classes/client.ChatBotKitClient.md) |
| `channelId` | `string` |
| `request` | `Object` |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<{}\>

#### Defined in

[channel/v1.js:25](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/channel/v1.js#L25)

___

### subscribeChannelMessages

▸ **subscribeChannelMessages**(`client`, `channelId`, `request?`): [`ResponsePromise`](../classes/client.ResponsePromise.md)\<`never`, {}\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`ChatBotKitClient`](../classes/client.ChatBotKitClient.md) |
| `channelId` | `string` |
| `request?` | [`Record`]( https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type )\<`string`, `never`\> |

#### Returns

[`ResponsePromise`](../classes/client.ResponsePromise.md)\<`never`, {}\>

#### Defined in

[channel/v1.js:55](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/channel/v1.js#L55)
