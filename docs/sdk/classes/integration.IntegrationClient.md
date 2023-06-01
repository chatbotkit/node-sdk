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

[integration/index.js:8](https://github.com/chatbotkit/node-sdk/blob/2d607d3/packages/sdk/src/integration/index.js#L8)

## Properties

### secret

• **secret**: `string`

#### Inherited from

ChatBotKitClient.secret

#### Defined in

[client.js:135](https://github.com/chatbotkit/node-sdk/blob/2d607d3/packages/sdk/src/client.js#L135)

___

### sitemap

• **sitemap**: [`SitemapClient`](integration_sitemap.SitemapClient.md)

#### Defined in

[integration/index.js:11](https://github.com/chatbotkit/node-sdk/blob/2d607d3/packages/sdk/src/integration/index.js#L11)

___

### url

• **url**: `URL`

#### Inherited from

ChatBotKitClient.url

#### Defined in

[client.js:137](https://github.com/chatbotkit/node-sdk/blob/2d607d3/packages/sdk/src/client.js#L137)

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

#### Returns

`ResponsePromise`<`T`, `U`\>

#### Inherited from

ChatBotKitClient.clientFetch

#### Defined in

[client.js:154](https://github.com/chatbotkit/node-sdk/blob/2d607d3/packages/sdk/src/client.js#L154)
