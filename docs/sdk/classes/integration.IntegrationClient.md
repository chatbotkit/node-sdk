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

### Methods

- [clientFetch](integration.IntegrationClient.md#clientfetch)

## Constructors

### constructor

• **new IntegrationClient**(`options`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `ChatBotKitClientOptions` |

#### Overrides

ChatBotKitClient.constructor

#### Defined in

[integration/index.js:8](https://github.com/chatbotkit/node-sdk/blob/832c43e/packages/sdk/src/integration/index.js#L8)

## Properties

### secret

• **secret**: `string`

#### Inherited from

ChatBotKitClient.secret

#### Defined in

[client.js:155](https://github.com/chatbotkit/node-sdk/blob/832c43e/packages/sdk/src/client.js#L155)

___

### sitemap

• **sitemap**: [`SitemapClient`](integration_sitemap.SitemapClient.md)

#### Defined in

[integration/index.js:11](https://github.com/chatbotkit/node-sdk/blob/832c43e/packages/sdk/src/integration/index.js#L11)

___

### url

• **url**: `URL`

#### Inherited from

ChatBotKitClient.url

#### Defined in

[client.js:157](https://github.com/chatbotkit/node-sdk/blob/832c43e/packages/sdk/src/client.js#L157)

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

[client.js:174](https://github.com/chatbotkit/node-sdk/blob/832c43e/packages/sdk/src/client.js#L174)
