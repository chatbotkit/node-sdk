[**@chatbotkit/cli**](../../README.md)

***

[@chatbotkit/cli](../../modules.md) / [solution](../README.md) / Resource

# Class: Resource

Defined in: [packages/cli/src/solution/index.js:612](https://github.com/chatbotkit/node-sdk/blob/main/packages/cli/src/solution/index.js#L612)

Represents a resource.

## Extended by

- [`BlueprintResource`](BlueprintResource.md)
- [`BotResource`](BotResource.md)
- [`DatasetResource`](DatasetResource.md)
- [`FileResource`](FileResource.md)
- [`SecretResource`](SecretResource.md)
- [`SkillsetResource`](SkillsetResource.md)
- [`WidgetIntegrationResource`](WidgetIntegrationResource.md)
- [`SitemapIntegrationResource`](SitemapIntegrationResource.md)
- [`SlackIntegrationResource`](SlackIntegrationResource.md)
- [`DiscordIntegrationResource`](DiscordIntegrationResource.md)
- [`TelegramIntegrationResource`](TelegramIntegrationResource.md)
- [`WhatsAppIntegrationResource`](WhatsAppIntegrationResource.md)
- [`MessengerIntegrationResource`](MessengerIntegrationResource.md)
- [`NotionIntegrationResource`](NotionIntegrationResource.md)
- [`EmailIntegrationResource`](EmailIntegrationResource.md)
- [`TriggerIntegrationResource`](TriggerIntegrationResource.md)
- [`SupportIntegrationResource`](SupportIntegrationResource.md)
- [`ExtractIntegrationResource`](ExtractIntegrationResource.md)
- [`McpServerIntegrationResource`](McpServerIntegrationResource.md)
- [`TwilioIntegrationResource`](TwilioIntegrationResource.md)

## Constructors

### Constructor

> **new Resource**(`config`): `Resource`

Defined in: [packages/cli/src/solution/index.js:616](https://github.com/chatbotkit/node-sdk/blob/main/packages/cli/src/solution/index.js#L616)

#### Parameters

##### config

\{ `id?`: `string`; `properties?`: \{ \}; `slug?`: `string`; `type?`: `"blueprint"`; \} | \{ `id?`: `string`; `properties?`: \{ \}; `slug?`: `string`; `type?`: `"bot"`; \} | \{ `id?`: `string`; `properties?`: \{ \}; `slug?`: `string`; `type?`: `"dataset"`; \} | \{ `id?`: `string`; `properties?`: \{ \}; `slug?`: `string`; `type?`: `"file"`; \} | \{ `id?`: `string`; `properties?`: \{ \}; `slug?`: `string`; `type?`: `"secret"`; \} | \{ `id?`: `string`; `properties?`: \{ \}; `slug?`: `string`; `type?`: `"skillset"`; \} | \{ `id?`: `string`; `properties?`: \{ \}; `slug?`: `string`; `type?`: `"widgetIntegration"`; \} | \{ `id?`: `string`; `properties?`: \{ \}; `slug?`: `string`; `type?`: `"sitemapIntegration"`; \} | \{ `id?`: `string`; `properties?`: \{ \}; `slug?`: `string`; `type?`: `"slackIntegration"`; \} | \{ `id?`: `string`; `properties?`: \{ \}; `slug?`: `string`; `type?`: `"discordIntegration"`; \} | \{ `id?`: `string`; `properties?`: \{ \}; `slug?`: `string`; `type?`: `"telegramIntegration"`; \} | \{ `id?`: `string`; `properties?`: \{ \}; `slug?`: `string`; `type?`: `"whatsappIntegration"`; \} | \{ `id?`: `string`; `properties?`: \{ \}; `slug?`: `string`; `type?`: `"messengerIntegration"`; \} | \{ `id?`: `string`; `properties?`: \{ \}; `slug?`: `string`; `type?`: `"notionIntegration"`; \} | \{ `id?`: `string`; `properties?`: \{ \}; `slug?`: `string`; `type?`: `"emailIntegration"`; \} | \{ `id?`: `string`; `properties?`: \{ \}; `slug?`: `string`; `type?`: `"triggerIntegration"`; \} | \{ `id?`: `string`; `properties?`: \{ \}; `slug?`: `string`; `type?`: `"supportIntegration"`; \} | \{ `id?`: `string`; `properties?`: \{ \}; `slug?`: `string`; `type?`: `"extractIntegration"`; \} | \{ `id?`: `string`; `properties?`: \{ \}; `slug?`: `string`; `type?`: `"mcpserverIntegration"`; \} | \{ `id?`: `string`; `properties?`: \{ \}; `slug?`: `string`; `type?`: `"twilioIntegration"`; \}

#### Returns

`Resource`

## Accessors

### baseClient

#### Get Signature

> **get** **baseClient**(): `ChatBotKit`

Defined in: [packages/cli/src/solution/index.js:664](https://github.com/chatbotkit/node-sdk/blob/main/packages/cli/src/solution/index.js#L664)

##### Returns

`ChatBotKit`

***

### client

#### Get Signature

> **get** **client**(): `object`

Defined in: [packages/cli/src/solution/index.js:681](https://github.com/chatbotkit/node-sdk/blob/main/packages/cli/src/solution/index.js#L681)

Get the resource client.

##### Returns

`object`

###### create()

> **create**: (`properties`) => [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<\{ `id`: `string`; \}\>

###### Parameters

###### properties

[`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `any`\>

###### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<\{ `id`: `string`; \}\>

###### update()

> **update**: (`id`, `properties`) => [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<\{ `id`: `string`; \}\>

###### Parameters

###### id

`string`

###### properties

[`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `any`\>

###### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<\{ `id`: `string`; \}\>

***

### createProperties

#### Get Signature

> **get** **createProperties**(): [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `any`\>

Defined in: [packages/cli/src/solution/index.js:691](https://github.com/chatbotkit/node-sdk/blob/main/packages/cli/src/solution/index.js#L691)

Get the properties to use for create operations.
Override this method in subclasses to filter properties for creates.

##### Returns

[`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `any`\>

***

### description

#### Get Signature

> **get** **description**(): `string`

Defined in: [packages/cli/src/solution/index.js:657](https://github.com/chatbotkit/node-sdk/blob/main/packages/cli/src/solution/index.js#L657)

##### Returns

`string`

***

### id

#### Get Signature

> **get** **id**(): `string`

Defined in: [packages/cli/src/solution/index.js:643](https://github.com/chatbotkit/node-sdk/blob/main/packages/cli/src/solution/index.js#L643)

##### Returns

`string`

***

### name

#### Get Signature

> **get** **name**(): `string`

Defined in: [packages/cli/src/solution/index.js:650](https://github.com/chatbotkit/node-sdk/blob/main/packages/cli/src/solution/index.js#L650)

##### Returns

`string`

***

### slug

#### Get Signature

> **get** **slug**(): `string`

Defined in: [packages/cli/src/solution/index.js:630](https://github.com/chatbotkit/node-sdk/blob/main/packages/cli/src/solution/index.js#L630)

##### Returns

`string`

***

### type

#### Get Signature

> **get** **type**(): `string`

Defined in: [packages/cli/src/solution/index.js:623](https://github.com/chatbotkit/node-sdk/blob/main/packages/cli/src/solution/index.js#L623)

##### Returns

`string`

***

### updateProperties

#### Get Signature

> **get** **updateProperties**(): [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `any`\>

Defined in: [packages/cli/src/solution/index.js:701](https://github.com/chatbotkit/node-sdk/blob/main/packages/cli/src/solution/index.js#L701)

Get the properties to use for update operations.
Override this method in subclasses to filter properties for updates.

##### Returns

[`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `any`\>

## Methods

### sync()

> **sync**(): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`void`\>

Defined in: [packages/cli/src/solution/index.js:710](https://github.com/chatbotkit/node-sdk/blob/main/packages/cli/src/solution/index.js#L710)

Sync the resource.

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`void`\>
