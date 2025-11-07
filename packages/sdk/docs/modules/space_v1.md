[@chatbotkit/sdk](../README.md) / [Modules](../modules.md) / space/v1

# Module: space/v1

## Table of contents

### Type Aliases

- [ChatBotKitClient](space_v1.md#chatbotkitclient)
- [ResponsePromise](space_v1.md#responsepromise)
- [SpaceCreateRequest](space_v1.md#spacecreaterequest)
- [SpaceCreateRequestBody](space_v1.md#spacecreaterequestbody)
- [SpaceCreateResponse](space_v1.md#spacecreateresponse)
- [SpaceCreateResponseBody](space_v1.md#spacecreateresponsebody)
- [SpaceDeleteRequest](space_v1.md#spacedeleterequest)
- [SpaceDeleteResponse](space_v1.md#spacedeleteresponse)
- [SpaceFetchResponse](space_v1.md#spacefetchresponse)
- [SpaceListRequest](space_v1.md#spacelistrequest)
- [SpaceListResponse](space_v1.md#spacelistresponse)
- [SpaceListStreamType](space_v1.md#spaceliststreamtype)
- [SpaceUpdateRequest](space_v1.md#spaceupdaterequest)
- [SpaceUpdateRequestBody](space_v1.md#spaceupdaterequestbody)
- [SpaceUpdateResponse](space_v1.md#spaceupdateresponse)
- [SpaceUpdateResponseBody](space_v1.md#spaceupdateresponsebody)

### Functions

- [createSpace](space_v1.md#createspace)
- [deleteSpace](space_v1.md#deletespace)
- [fetchSpace](space_v1.md#fetchspace)
- [listSpaces](space_v1.md#listspaces)
- [updateSpace](space_v1.md#updatespace)

## Type Aliases

### ChatBotKitClient

Ƭ **ChatBotKitClient**\<\>: [`client`](client.md)

#### Defined in

[space/v1.js:2](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/space/v1.js#L2)

___

### ResponsePromise

Ƭ **ResponsePromise**\<`T`, `U`\>: [`client`](client.md)

#### Type parameters

| Name |
| :------ |
| `T` |
| `U` |

#### Defined in

[space/v1.js:8](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/space/v1.js#L8)

___

### SpaceCreateRequest

Ƭ **SpaceCreateRequest**\<\>: [`SpaceCreateRequestBody`](space_v1.md#spacecreaterequestbody)

#### Defined in

[space/v1.js:55](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/space/v1.js#L55)

___

### SpaceCreateRequestBody

Ƭ **SpaceCreateRequestBody**\<\>: `operations`[``"createSpace"``][``"requestBody"``][``"content"``][``"application/json"``]

#### Defined in

[space/v1.js:53](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/space/v1.js#L53)

___

### SpaceCreateResponse

Ƭ **SpaceCreateResponse**\<\>: [`SpaceCreateResponseBody`](space_v1.md#spacecreateresponsebody)

#### Defined in

[space/v1.js:59](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/space/v1.js#L59)

___

### SpaceCreateResponseBody

Ƭ **SpaceCreateResponseBody**\<\>: `operations`[``"createSpace"``][``"responses"``][``"200"``][``"content"``][``"application/json"``]

#### Defined in

[space/v1.js:57](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/space/v1.js#L57)

___

### SpaceDeleteRequest

Ƭ **SpaceDeleteRequest**\<\>: `Object`

#### Defined in

[space/v1.js:108](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/space/v1.js#L108)

___

### SpaceDeleteResponse

Ƭ **SpaceDeleteResponse**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Defined in

[space/v1.js:110](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/space/v1.js#L110)

___

### SpaceFetchResponse

Ƭ **SpaceFetchResponse**\<\>: `operations`[``"fetchSpace"``][``"responses"``][``"200"``][``"content"``][``"application/json"``]

#### Defined in

[space/v1.js:37](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/space/v1.js#L37)

___

### SpaceListRequest

Ƭ **SpaceListRequest**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `cursor?` | `string` |
| `meta?` | [`Record`]( https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type )\<`string`, `string`\> |
| `order?` | ``"desc"`` \| ``"asc"`` |
| `take?` | `number` |

#### Defined in

[space/v1.js:17](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/space/v1.js#L17)

___

### SpaceListResponse

Ƭ **SpaceListResponse**\<\>: `operations`[``"listSpaces"``][``"responses"``][``"200"``][``"content"``][``"application/json"``]

#### Defined in

[space/v1.js:19](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/space/v1.js#L19)

___

### SpaceListStreamType

Ƭ **SpaceListStreamType**\<\>: `operations`[``"listSpaces"``][``"responses"``][``"200"``][``"content"``][``"application/jsonl"``]

#### Defined in

[space/v1.js:21](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/space/v1.js#L21)

___

### SpaceUpdateRequest

Ƭ **SpaceUpdateRequest**\<\>: [`SpaceUpdateRequestBody`](space_v1.md#spaceupdaterequestbody)

#### Defined in

[space/v1.js:82](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/space/v1.js#L82)

___

### SpaceUpdateRequestBody

Ƭ **SpaceUpdateRequestBody**\<\>: `operations`[``"updateSpace"``][``"requestBody"``][``"content"``][``"application/json"``]

#### Defined in

[space/v1.js:80](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/space/v1.js#L80)

___

### SpaceUpdateResponse

Ƭ **SpaceUpdateResponse**\<\>: [`SpaceUpdateResponseBody`](space_v1.md#spaceupdateresponsebody)

#### Defined in

[space/v1.js:86](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/space/v1.js#L86)

___

### SpaceUpdateResponseBody

Ƭ **SpaceUpdateResponseBody**\<\>: `operations`[``"updateSpace"``][``"responses"``][``"200"``][``"content"``][``"application/json"``]

#### Defined in

[space/v1.js:84](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/space/v1.js#L84)

## Functions

### createSpace

▸ **createSpace**(`client`, `request`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<{}\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`ChatBotKitClient`](../classes/client.ChatBotKitClient.md) |
| `request` | `Object` |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<{}\>

#### Defined in

[space/v1.js:65](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/space/v1.js#L65)

___

### deleteSpace

▸ **deleteSpace**(`client`, `spaceId`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<[`SpaceDeleteResponse`](space_v1.md#spacedeleteresponse)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`ChatBotKitClient`](../classes/client.ChatBotKitClient.md) |
| `spaceId` | `string` |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<[`SpaceDeleteResponse`](space_v1.md#spacedeleteresponse)\>

#### Defined in

[space/v1.js:116](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/space/v1.js#L116)

___

### fetchSpace

▸ **fetchSpace**(`client`, `spaceId`): [`ResponsePromise`](../classes/client.ResponsePromise.md)\<{}, `never`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`ChatBotKitClient`](../classes/client.ChatBotKitClient.md) |
| `spaceId` | `string` |

#### Returns

[`ResponsePromise`](../classes/client.ResponsePromise.md)\<{}, `never`\>

#### Defined in

[space/v1.js:43](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/space/v1.js#L43)

___

### listSpaces

▸ **listSpaces**(`client`, `request?`): [`ResponsePromise`](../classes/client.ResponsePromise.md)\<{}, {}\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`ChatBotKitClient`](../classes/client.ChatBotKitClient.md) |
| `request?` | [`SpaceListRequest`](space_v1.md#spacelistrequest) |

#### Returns

[`ResponsePromise`](../classes/client.ResponsePromise.md)\<{}, {}\>

#### Defined in

[space/v1.js:27](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/space/v1.js#L27)

___

### updateSpace

▸ **updateSpace**(`client`, `spaceId`, `request`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<{}\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`ChatBotKitClient`](../classes/client.ChatBotKitClient.md) |
| `spaceId` | `string` |
| `request` | `Object` |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<{}\>

#### Defined in

[space/v1.js:93](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/space/v1.js#L93)
