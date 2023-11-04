[@chatbotkit/sdk](../README.md) / [Modules](../modules.md) / [partner](../modules/partner.md) / PartnerClient

# Class: PartnerClient

[partner](../modules/partner.md).PartnerClient

## Hierarchy

- `ChatBotKitClient`

  ↳ **`PartnerClient`**

## Table of contents

### Constructors

- [constructor](partner.PartnerClient.md#constructor)

### Properties

- [secret](partner.PartnerClient.md#secret)
- [url](partner.PartnerClient.md#url)
- [user](partner.PartnerClient.md#user)

### Methods

- [clientFetch](partner.PartnerClient.md#clientfetch)

## Constructors

### constructor

• **new PartnerClient**(`options`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `ChatBotKitClientOptions` |

#### Overrides

ChatBotKitClient.constructor

#### Defined in

[partner/index.js:8](https://github.com/chatbotkit/node-sdk/blob/09ac200/packages/sdk/src/partner/index.js#L8)

## Properties

### secret

• **secret**: `string`

#### Inherited from

ChatBotKitClient.secret

#### Defined in

[client.js:182](https://github.com/chatbotkit/node-sdk/blob/09ac200/packages/sdk/src/client.js#L182)

___

### url

• **url**: `URL`

#### Inherited from

ChatBotKitClient.url

#### Defined in

[client.js:184](https://github.com/chatbotkit/node-sdk/blob/09ac200/packages/sdk/src/client.js#L184)

___

### user

• **user**: [`UserClient`](partner_user.UserClient.md)

#### Defined in

[partner/index.js:11](https://github.com/chatbotkit/node-sdk/blob/09ac200/packages/sdk/src/partner/index.js#L11)

## Methods

### clientFetch

▸ **clientFetch**<`T`, `U`\>(`path`, `options?`): `ResponsePromise`<`T`, `U`\>

#### Type parameters

| Name |
| :------ |
| `T` |
| `U` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | `string` |
| `options?` | `Object` |
| `options.data?` | `Record`<`string`, `any`\> |
| `options.file?` | `Object` |
| `options.file.data` | `string` \| `ArrayBuffer` |
| `options.file.name?` | `string` |
| `options.file.type?` | `string` |

#### Returns

`ResponsePromise`<`T`, `U`\>

#### Inherited from

ChatBotKitClient.clientFetch

#### Defined in

[client.js:201](https://github.com/chatbotkit/node-sdk/blob/09ac200/packages/sdk/src/client.js#L201)
