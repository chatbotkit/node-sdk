[@chatbotkit/sdk](../README.md) / [Modules](../modules.md) / [integration](../modules/integration.md) / IntegrationClient

# Class: IntegrationClient

[integration](../modules/integration.md).IntegrationClient

## Hierarchy

- `ChatBotKitClient`

  ↳ **`IntegrationClient`**

## Table of contents

### Constructors

- [constructor](integration.IntegrationClient.md#constructor)

### Properties

- [secret](integration.IntegrationClient.md#secret)
- [sitemap](integration.IntegrationClient.md#sitemap)
- [url](integration.IntegrationClient.md#url)
- [whatsapp](integration.IntegrationClient.md#whatsapp)

### Methods

- [clientFetch](integration.IntegrationClient.md#clientfetch)

## Constructors

### constructor

• **new IntegrationClient**(`options`): [`IntegrationClient`](integration.IntegrationClient.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `ChatBotKitClientOptions` |

#### Returns

[`IntegrationClient`](integration.IntegrationClient.md)

#### Overrides

ChatBotKitClient.constructor

#### Defined in

[integration/index.js:9](https://github.com/chatbotkit/node-sdk/blob/b5ebcd8/packages/sdk/src/integration/index.js#L9)

## Properties

### secret

• **secret**: `string`

#### Inherited from

ChatBotKitClient.secret

#### Defined in

[client.js:187](https://github.com/chatbotkit/node-sdk/blob/b5ebcd8/packages/sdk/src/client.js#L187)

___

### sitemap

• **sitemap**: [`SitemapIntegrationClient`](integration_sitemap.SitemapIntegrationClient.md)

#### Defined in

[integration/index.js:12](https://github.com/chatbotkit/node-sdk/blob/b5ebcd8/packages/sdk/src/integration/index.js#L12)

___

### url

• **url**: `URL`

#### Inherited from

ChatBotKitClient.url

#### Defined in

[client.js:189](https://github.com/chatbotkit/node-sdk/blob/b5ebcd8/packages/sdk/src/client.js#L189)

___

### whatsapp

• **whatsapp**: [`WhatsAppIntegrationClient`](integration_whatsapp.WhatsAppIntegrationClient.md)

#### Defined in

[integration/index.js:13](https://github.com/chatbotkit/node-sdk/blob/b5ebcd8/packages/sdk/src/integration/index.js#L13)

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

[client.js:206](https://github.com/chatbotkit/node-sdk/blob/b5ebcd8/packages/sdk/src/client.js#L206)
