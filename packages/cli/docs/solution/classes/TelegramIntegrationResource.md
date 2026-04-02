[**@chatbotkit/cli**](../../README.md)

***

[@chatbotkit/cli](../../modules.md) / [solution](../README.md) / TelegramIntegrationResource

# Class: TelegramIntegrationResource

Defined in: [packages/cli/src/solution/index.js:882](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/cli/src/solution/index.js#L882)

Represents a telegram integration resource.

## Extends

- [`Resource`](Resource.md)

## Constructors

### Constructor

> **new TelegramIntegrationResource**(`config`): `TelegramIntegrationResource`

Defined in: [packages/cli/src/solution/index.js:630](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/cli/src/solution/index.js#L630)

#### Parameters

##### config

\{ `id?`: `string`; `properties?`: \{ \}; `slug?`: `string`; `type?`: `"blueprint"`; \} | \{ `id?`: `string`; `properties?`: \{ \}; `slug?`: `string`; `type?`: `"bot"`; \} | \{ `id?`: `string`; `properties?`: \{ \}; `slug?`: `string`; `type?`: `"dataset"`; \} | \{ `id?`: `string`; `properties?`: \{ \}; `slug?`: `string`; `type?`: `"file"`; \} | \{ `id?`: `string`; `properties?`: \{ \}; `slug?`: `string`; `type?`: `"secret"`; \} | \{ `id?`: `string`; `properties?`: \{ \}; `slug?`: `string`; `type?`: `"skillset"`; \} | \{ `id?`: `string`; `properties?`: \{ \}; `slug?`: `string`; `type?`: `"widgetIntegration"`; \} | \{ `id?`: `string`; `properties?`: \{ \}; `slug?`: `string`; `type?`: `"sitemapIntegration"`; \} | \{ `id?`: `string`; `properties?`: \{ \}; `slug?`: `string`; `type?`: `"slackIntegration"`; \} | \{ `id?`: `string`; `properties?`: \{ \}; `slug?`: `string`; `type?`: `"discordIntegration"`; \} | \{ `id?`: `string`; `properties?`: \{ \}; `slug?`: `string`; `type?`: `"telegramIntegration"`; \} | \{ `id?`: `string`; `properties?`: \{ \}; `slug?`: `string`; `type?`: `"whatsappIntegration"`; \} | \{ `id?`: `string`; `properties?`: \{ \}; `slug?`: `string`; `type?`: `"messengerIntegration"`; \} | \{ `id?`: `string`; `properties?`: \{ \}; `slug?`: `string`; `type?`: `"notionIntegration"`; \} | \{ `id?`: `string`; `properties?`: \{ \}; `slug?`: `string`; `type?`: `"emailIntegration"`; \} | \{ `id?`: `string`; `properties?`: \{ \}; `slug?`: `string`; `type?`: `"triggerIntegration"`; \} | \{ `id?`: `string`; `properties?`: \{ \}; `slug?`: `string`; `type?`: `"supportIntegration"`; \} | \{ `id?`: `string`; `properties?`: \{ \}; `slug?`: `string`; `type?`: `"extractIntegration"`; \} | \{ `id?`: `string`; `properties?`: \{ \}; `slug?`: `string`; `type?`: `"mcpserverIntegration"`; \} | \{ `id?`: `string`; `properties?`: \{ \}; `slug?`: `string`; `type?`: `"twilioIntegration"`; \}

#### Returns

`TelegramIntegrationResource`

#### Inherited from

[`Resource`](Resource.md).[`constructor`](Resource.md#constructor)

## Accessors

### baseClient

#### Get Signature

> **get** **baseClient**(): `ChatBotKit`

Defined in: [packages/cli/src/solution/index.js:678](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/cli/src/solution/index.js#L678)

##### Returns

`ChatBotKit`

#### Inherited from

[`Resource`](Resource.md).[`baseClient`](Resource.md#baseclient)

***

### client

#### Get Signature

> **get** **client**(): `TelegramIntegrationClient`

Defined in: [packages/cli/src/solution/index.js:887](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/cli/src/solution/index.js#L887)

##### Returns

`TelegramIntegrationClient`

#### Overrides

[`Resource`](Resource.md).[`client`](Resource.md#client)

***

### createProperties

#### Get Signature

> **get** **createProperties**(): [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `any`\>

Defined in: [packages/cli/src/solution/index.js:705](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/cli/src/solution/index.js#L705)

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

Defined in: [packages/cli/src/solution/index.js:671](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/cli/src/solution/index.js#L671)

##### Returns

`string`

#### Inherited from

[`Resource`](Resource.md).[`description`](Resource.md#description)

***

### id

#### Get Signature

> **get** **id**(): `string`

Defined in: [packages/cli/src/solution/index.js:657](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/cli/src/solution/index.js#L657)

##### Returns

`string`

#### Inherited from

[`Resource`](Resource.md).[`id`](Resource.md#id)

***

### name

#### Get Signature

> **get** **name**(): `string`

Defined in: [packages/cli/src/solution/index.js:664](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/cli/src/solution/index.js#L664)

##### Returns

`string`

#### Inherited from

[`Resource`](Resource.md).[`name`](Resource.md#name)

***

### slug

#### Get Signature

> **get** **slug**(): `string`

Defined in: [packages/cli/src/solution/index.js:644](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/cli/src/solution/index.js#L644)

##### Returns

`string`

#### Inherited from

[`Resource`](Resource.md).[`slug`](Resource.md#slug)

***

### type

#### Get Signature

> **get** **type**(): `string`

Defined in: [packages/cli/src/solution/index.js:637](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/cli/src/solution/index.js#L637)

##### Returns

`string`

#### Inherited from

[`Resource`](Resource.md).[`type`](Resource.md#type)

***

### updateProperties

#### Get Signature

> **get** **updateProperties**(): [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `any`\>

Defined in: [packages/cli/src/solution/index.js:715](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/cli/src/solution/index.js#L715)

Get the properties to use for update operations.
Override this method in subclasses to filter properties for updates.

##### Returns

[`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `any`\>

#### Inherited from

[`Resource`](Resource.md).[`updateProperties`](Resource.md#updateproperties)

## Methods

### sync()

> **sync**(): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`void`\>

Defined in: [packages/cli/src/solution/index.js:724](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/cli/src/solution/index.js#L724)

Sync the resource.

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`void`\>

#### Inherited from

[`Resource`](Resource.md).[`sync`](Resource.md#sync)
