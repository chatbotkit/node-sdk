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

• **new PartnerClient**(`options`): [`PartnerClient`](partner.PartnerClient.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `ChatBotKitClientOptions` |

#### Returns

[`PartnerClient`](partner.PartnerClient.md)

#### Overrides

ChatBotKitClient.constructor

#### Defined in

[partner/index.js:8](https://github.com/chatbotkit/node-sdk/blob/d5a6097/packages/sdk/src/partner/index.js#L8)

## Properties

### secret

• **secret**: `string`

#### Inherited from

ChatBotKitClient.secret

#### Defined in

[client.js:187](https://github.com/chatbotkit/node-sdk/blob/d5a6097/packages/sdk/src/client.js#L187)

___

### url

• **url**: `URL`

#### Inherited from

ChatBotKitClient.url

#### Defined in

[client.js:189](https://github.com/chatbotkit/node-sdk/blob/d5a6097/packages/sdk/src/client.js#L189)

___

### user

• **user**: [`PartnerUserClient`](partner_user.PartnerUserClient.md)

#### Defined in

[partner/index.js:11](https://github.com/chatbotkit/node-sdk/blob/d5a6097/packages/sdk/src/partner/index.js#L11)

## Methods

### clientFetch

▸ **clientFetch**\<`T`, `U`\>(`path`, `options?`): `ResponsePromise`\<`T`, `U`\>

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
| `options.data?` | `Record`\<`string`, `any`\> |
| `options.file?` | `Object` |
| `options.file.data` | `string` \| `ArrayBuffer` |
| `options.file.name?` | `string` |
| `options.file.type?` | `string` |
| `options.query?` | `Record`\<`string`, `any`\> |

#### Returns

`ResponsePromise`\<`T`, `U`\>

#### Inherited from

ChatBotKitClient.clientFetch

#### Defined in

[client.js:206](https://github.com/chatbotkit/node-sdk/blob/d5a6097/packages/sdk/src/client.js#L206)
