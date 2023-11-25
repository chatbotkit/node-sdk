[@chatbotkit/sdk](../README.md) / [Modules](../modules.md) / [partner](../modules/partner.md) / PartnerClient

# Class: PartnerClient

[partner](../modules/partner.md).PartnerClient

## Hierarchy

- [`ChatBotKitClient`](client.ChatBotKitClient.md)

  ↳ **`PartnerClient`**

## Table of contents

### Constructors

- [constructor](partner.PartnerClient.md#constructor)

### Properties

- [endpoints](partner.PartnerClient.md#endpoints)
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
| `options` | [`ChatBotKitClientOptions`](../modules/client.md#chatbotkitclientoptions) |

#### Returns

[`PartnerClient`](partner.PartnerClient.md)

#### Overrides

[ChatBotKitClient](client.ChatBotKitClient.md).[constructor](client.ChatBotKitClient.md#constructor)

#### Defined in

[partner/index.js:8](https://github.com/chatbotkit/node-sdk/blob/1a40caa/packages/sdk/src/partner/index.js#L8)

## Properties

### endpoints

• **endpoints**: `Record`\<`string`, `string`\>

#### Inherited from

[ChatBotKitClient](client.ChatBotKitClient.md).[endpoints](client.ChatBotKitClient.md#endpoints)

#### Defined in

[client.js:201](https://github.com/chatbotkit/node-sdk/blob/1a40caa/packages/sdk/src/client.js#L201)

___

### secret

• **secret**: `string`

#### Inherited from

[ChatBotKitClient](client.ChatBotKitClient.md).[secret](client.ChatBotKitClient.md#secret)

#### Defined in

[client.js:189](https://github.com/chatbotkit/node-sdk/blob/1a40caa/packages/sdk/src/client.js#L189)

___

### url

• **url**: `URL`

#### Inherited from

[ChatBotKitClient](client.ChatBotKitClient.md).[url](client.ChatBotKitClient.md#url)

#### Defined in

[client.js:191](https://github.com/chatbotkit/node-sdk/blob/1a40caa/packages/sdk/src/client.js#L191)

___

### user

• **user**: [`PartnerUserClient`](partner_user.PartnerUserClient.md)

#### Defined in

[partner/index.js:11](https://github.com/chatbotkit/node-sdk/blob/1a40caa/packages/sdk/src/partner/index.js#L11)

## Methods

### clientFetch

▸ **clientFetch**\<`T`, `U`\>(`path`, `options?`): [`ResponsePromise`](client.ResponsePromise.md)\<`T`, `U`\>

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

[`ResponsePromise`](client.ResponsePromise.md)\<`T`, `U`\>

#### Inherited from

[ChatBotKitClient](client.ChatBotKitClient.md).[clientFetch](client.ChatBotKitClient.md#clientfetch)

#### Defined in

[client.js:211](https://github.com/chatbotkit/node-sdk/blob/1a40caa/packages/sdk/src/client.js#L211)
