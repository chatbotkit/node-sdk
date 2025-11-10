[@chatbotkit/sdk](../README.md) / [Modules](../modules.md) / contact/space/v1

# Module: contact/space/v1

## Table of contents

### Type Aliases

- [ChatBotKitClient](contact_space_v1.md#chatbotkitclient)
- [ResponsePromise](contact_space_v1.md#responsepromise)
- [SpaceListRequest](contact_space_v1.md#spacelistrequest)
- [SpaceListResponse](contact_space_v1.md#spacelistresponse)
- [SpaceListStreamType](contact_space_v1.md#spaceliststreamtype)

### Functions

- [listSpaces](contact_space_v1.md#listspaces)

## Type Aliases

### ChatBotKitClient

Ƭ **ChatBotKitClient**\<\>: [`client`](client.md)

#### Defined in

[contact/space/v1.js:2](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/contact/space/v1.js#L2)

___

### ResponsePromise

Ƭ **ResponsePromise**\<`T`, `U`\>: [`client`](client.md)

#### Type parameters

| Name |
| :------ |
| `T` |
| `U` |

#### Defined in

[contact/space/v1.js:8](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/contact/space/v1.js#L8)

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

[contact/space/v1.js:17](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/contact/space/v1.js#L17)

___

### SpaceListResponse

Ƭ **SpaceListResponse**\<\>: `operations`[``"listContactSpaces"``][``"responses"``][``"200"``][``"content"``][``"application/json"``]

#### Defined in

[contact/space/v1.js:19](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/contact/space/v1.js#L19)

___

### SpaceListStreamType

Ƭ **SpaceListStreamType**\<\>: `operations`[``"listContactSpaces"``][``"responses"``][``"200"``][``"content"``][``"application/jsonl"``]

#### Defined in

[contact/space/v1.js:21](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/contact/space/v1.js#L21)

## Functions

### listSpaces

▸ **listSpaces**(`client`, `contactId`, `request?`): [`ResponsePromise`](../classes/client.ResponsePromise.md)\<{}, {}\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`ChatBotKitClient`](../classes/client.ChatBotKitClient.md) |
| `contactId` | `string` |
| `request?` | [`SpaceListRequest`](contact_space_v1.md#spacelistrequest) |

#### Returns

[`ResponsePromise`](../classes/client.ResponsePromise.md)\<{}, {}\>

#### Defined in

[contact/space/v1.js:28](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/contact/space/v1.js#L28)
