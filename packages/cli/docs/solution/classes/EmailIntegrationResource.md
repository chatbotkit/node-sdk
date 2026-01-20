[**@chatbotkit/cli**](../../README.md)

***

[@chatbotkit/cli](../../modules.md) / [solution](../README.md) / EmailIntegrationResource

# Class: EmailIntegrationResource

Defined in: [packages/cli/src/solution/index.js:920](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/cli/src/solution/index.js#L920)

Represents an email integration resource.

## Extends

- [`Resource`](Resource.md)

## Constructors

### Constructor

> **new EmailIntegrationResource**(`config`): `EmailIntegrationResource`

Defined in: [packages/cli/src/solution/index.js:616](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/cli/src/solution/index.js#L616)

#### Parameters

##### config

\{ `id?`: `string`; `properties?`: \{ \}; `slug?`: `string`; `type?`: `"blueprint"`; \} | \{ `id?`: `string`; `properties?`: \{ \}; `slug?`: `string`; `type?`: `"bot"`; \} | \{ `id?`: `string`; `properties?`: \{ \}; `slug?`: `string`; `type?`: `"dataset"`; \} | \{ `id?`: `string`; `properties?`: \{ \}; `slug?`: `string`; `type?`: `"file"`; \} | \{ `id?`: `string`; `properties?`: \{ \}; `slug?`: `string`; `type?`: `"secret"`; \} | \{ `id?`: `string`; `properties?`: \{ \}; `slug?`: `string`; `type?`: `"skillset"`; \} | \{ `id?`: `string`; `properties?`: \{ \}; `slug?`: `string`; `type?`: `"widgetIntegration"`; \} | \{ `id?`: `string`; `properties?`: \{ \}; `slug?`: `string`; `type?`: `"sitemapIntegration"`; \} | \{ `id?`: `string`; `properties?`: \{ \}; `slug?`: `string`; `type?`: `"slackIntegration"`; \} | \{ `id?`: `string`; `properties?`: \{ \}; `slug?`: `string`; `type?`: `"discordIntegration"`; \} | \{ `id?`: `string`; `properties?`: \{ \}; `slug?`: `string`; `type?`: `"telegramIntegration"`; \} | \{ `id?`: `string`; `properties?`: \{ \}; `slug?`: `string`; `type?`: `"whatsappIntegration"`; \} | \{ `id?`: `string`; `properties?`: \{ \}; `slug?`: `string`; `type?`: `"messengerIntegration"`; \} | \{ `id?`: `string`; `properties?`: \{ \}; `slug?`: `string`; `type?`: `"notionIntegration"`; \} | \{ `id?`: `string`; `properties?`: \{ \}; `slug?`: `string`; `type?`: `"emailIntegration"`; \} | \{ `id?`: `string`; `properties?`: \{ \}; `slug?`: `string`; `type?`: `"triggerIntegration"`; \} | \{ `id?`: `string`; `properties?`: \{ \}; `slug?`: `string`; `type?`: `"supportIntegration"`; \} | \{ `id?`: `string`; `properties?`: \{ \}; `slug?`: `string`; `type?`: `"extractIntegration"`; \} | \{ `id?`: `string`; `properties?`: \{ \}; `slug?`: `string`; `type?`: `"mcpserverIntegration"`; \} | \{ `id?`: `string`; `properties?`: \{ \}; `slug?`: `string`; `type?`: `"twilioIntegration"`; \}

#### Returns

`EmailIntegrationResource`

#### Inherited from

[`Resource`](Resource.md).[`constructor`](Resource.md#constructor)

## Accessors

### baseClient

#### Get Signature

> **get** **baseClient**(): `ChatBotKit`

Defined in: [packages/cli/src/solution/index.js:664](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/cli/src/solution/index.js#L664)

##### Returns

`ChatBotKit`

#### Inherited from

[`Resource`](Resource.md).[`baseClient`](Resource.md#baseclient)

***

### client

#### Get Signature

> **get** **client**(): `EmailIntegrationClient`

Defined in: [packages/cli/src/solution/index.js:925](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/cli/src/solution/index.js#L925)

##### Returns

`EmailIntegrationClient`

#### Overrides

[`Resource`](Resource.md).[`client`](Resource.md#client)

***

### createProperties

#### Get Signature

> **get** **createProperties**(): [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `any`\>

Defined in: [packages/cli/src/solution/index.js:691](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/cli/src/solution/index.js#L691)

Get the properties to use for create operations.
Override this method in subclasses to filter properties for creates.

##### Returns

[`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `any`\>

#### Inherited from

[`Resource`](Resource.md).[`createProperties`](Resource.md#createproperties)

***

### description

#### Get Signature

> **get** **description**(): `string`

Defined in: [packages/cli/src/solution/index.js:657](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/cli/src/solution/index.js#L657)

##### Returns

`string`

#### Inherited from

[`Resource`](Resource.md).[`description`](Resource.md#description)

***

### id

#### Get Signature

> **get** **id**(): `string`

Defined in: [packages/cli/src/solution/index.js:643](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/cli/src/solution/index.js#L643)

##### Returns

`string`

#### Inherited from

[`Resource`](Resource.md).[`id`](Resource.md#id)

***

### name

#### Get Signature

> **get** **name**(): `string`

Defined in: [packages/cli/src/solution/index.js:650](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/cli/src/solution/index.js#L650)

##### Returns

`string`

#### Inherited from

[`Resource`](Resource.md).[`name`](Resource.md#name)

***

### slug

#### Get Signature

> **get** **slug**(): `string`

Defined in: [packages/cli/src/solution/index.js:630](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/cli/src/solution/index.js#L630)

##### Returns

`string`

#### Inherited from

[`Resource`](Resource.md).[`slug`](Resource.md#slug)

***

### type

#### Get Signature

> **get** **type**(): `string`

Defined in: [packages/cli/src/solution/index.js:623](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/cli/src/solution/index.js#L623)

##### Returns

`string`

#### Inherited from

[`Resource`](Resource.md).[`type`](Resource.md#type)

***

### updateProperties

#### Get Signature

> **get** **updateProperties**(): [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `any`\>

Defined in: [packages/cli/src/solution/index.js:701](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/cli/src/solution/index.js#L701)

Get the properties to use for update operations.
Override this method in subclasses to filter properties for updates.

##### Returns

[`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `any`\>

#### Inherited from

[`Resource`](Resource.md).[`updateProperties`](Resource.md#updateproperties)

## Methods

### sync()

> **sync**(): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`void`\>

Defined in: [packages/cli/src/solution/index.js:710](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/cli/src/solution/index.js#L710)

Sync the resource.

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`void`\>

#### Inherited from

[`Resource`](Resource.md).[`sync`](Resource.md#sync)
