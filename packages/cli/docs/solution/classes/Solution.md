[**@chatbotkit/cli**](../../README.md)

***

[@chatbotkit/cli](../../modules.md) / [solution](../README.md) / Solution

# Class: Solution

Defined in: [packages/cli/src/solution/index.js:998](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/cli/src/solution/index.js#L998)

Represents a solution.

## Constructors

### Constructor

> **new Solution**(`config`): `Solution`

Defined in: [packages/cli/src/solution/index.js:1002](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/cli/src/solution/index.js#L1002)

#### Parameters

##### config

###### resources?

(\{ `id?`: `string`; `properties?`: \{ \}; `slug?`: `string`; `type?`: `"blueprint"`; \} \| \{ `id?`: `string`; `properties?`: \{ \}; `slug?`: `string`; `type?`: `"bot"`; \} \| \{ `id?`: `string`; `properties?`: \{ \}; `slug?`: `string`; `type?`: `"dataset"`; \} \| \{ `id?`: `string`; `properties?`: \{ \}; `slug?`: `string`; `type?`: `"file"`; \} \| \{ `id?`: `string`; `properties?`: \{ \}; `slug?`: `string`; `type?`: `"secret"`; \} \| \{ `id?`: `string`; `properties?`: \{ \}; `slug?`: `string`; `type?`: `"skillset"`; \} \| \{ `id?`: `string`; `properties?`: \{ \}; `slug?`: `string`; `type?`: `"widgetIntegration"`; \} \| \{ `id?`: `string`; `properties?`: \{ \}; `slug?`: `string`; `type?`: `"sitemapIntegration"`; \} \| \{ `id?`: `string`; `properties?`: \{ \}; `slug?`: `string`; `type?`: `"slackIntegration"`; \} \| \{ `id?`: `string`; `properties?`: \{ \}; `slug?`: `string`; `type?`: `"discordIntegration"`; \} \| \{ `id?`: `string`; `properties?`: \{ \}; `slug?`: `string`; `type?`: `"telegramIntegration"`; \} \| \{ `id?`: `string`; `properties?`: \{ \}; `slug?`: `string`; `type?`: `"whatsappIntegration"`; \} \| \{ `id?`: `string`; `properties?`: \{ \}; `slug?`: `string`; `type?`: `"messengerIntegration"`; \} \| \{ `id?`: `string`; `properties?`: \{ \}; `slug?`: `string`; `type?`: `"notionIntegration"`; \} \| \{ `id?`: `string`; `properties?`: \{ \}; `slug?`: `string`; `type?`: `"emailIntegration"`; \} \| \{ `id?`: `string`; `properties?`: \{ \}; `slug?`: `string`; `type?`: `"triggerIntegration"`; \} \| \{ `id?`: `string`; `properties?`: \{ \}; `slug?`: `string`; `type?`: `"supportIntegration"`; \} \| \{ `id?`: `string`; `properties?`: \{ \}; `slug?`: `string`; `type?`: `"extractIntegration"`; \} \| \{ `id?`: `string`; `properties?`: \{ \}; `slug?`: `string`; `type?`: `"mcpserverIntegration"`; \} \| \{ `id?`: `string`; `properties?`: \{ \}; `slug?`: `string`; `type?`: `"twilioIntegration"`; \})[] = `...`

###### version?

`1` = `...`

#### Returns

`Solution`

## Accessors

### baseClient

#### Get Signature

> **get** **baseClient**(): `ChatBotKit`

Defined in: [packages/cli/src/solution/index.js:1009](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/cli/src/solution/index.js#L1009)

##### Returns

`ChatBotKit`

***

### blueprint

#### Get Signature

> **get** **blueprint**(): `object`

Defined in: [packages/cli/src/solution/index.js:1087](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/cli/src/solution/index.js#L1087)

##### Returns

`object`

***

### blueprints

#### Get Signature

> **get** **blueprints**(): [`BlueprintResource`](BlueprintResource.md)[]

Defined in: [packages/cli/src/solution/index.js:1078](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/cli/src/solution/index.js#L1078)

##### Returns

[`BlueprintResource`](BlueprintResource.md)[]

***

### bot

#### Get Signature

> **get** **bot**(): `object`

Defined in: [packages/cli/src/solution/index.js:1103](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/cli/src/solution/index.js#L1103)

##### Returns

`object`

***

### bots

#### Get Signature

> **get** **bots**(): [`BotResource`](BotResource.md)[]

Defined in: [packages/cli/src/solution/index.js:1094](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/cli/src/solution/index.js#L1094)

##### Returns

[`BotResource`](BotResource.md)[]

***

### dataset

#### Get Signature

> **get** **dataset**(): `object`

Defined in: [packages/cli/src/solution/index.js:1119](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/cli/src/solution/index.js#L1119)

##### Returns

`object`

***

### datasets

#### Get Signature

> **get** **datasets**(): [`DatasetResource`](DatasetResource.md)[]

Defined in: [packages/cli/src/solution/index.js:1110](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/cli/src/solution/index.js#L1110)

##### Returns

[`DatasetResource`](DatasetResource.md)[]

***

### discordIntegration

#### Get Signature

> **get** **discordIntegration**(): `object`

Defined in: [packages/cli/src/solution/index.js:1239](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/cli/src/solution/index.js#L1239)

##### Returns

`object`

***

### discordIntegrations

#### Get Signature

> **get** **discordIntegrations**(): [`DiscordIntegrationResource`](DiscordIntegrationResource.md)[]

Defined in: [packages/cli/src/solution/index.js:1228](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/cli/src/solution/index.js#L1228)

##### Returns

[`DiscordIntegrationResource`](DiscordIntegrationResource.md)[]

***

### emailIntegration

#### Get Signature

> **get** **emailIntegration**(): `object`

Defined in: [packages/cli/src/solution/index.js:1329](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/cli/src/solution/index.js#L1329)

##### Returns

`object`

***

### emailIntegrations

#### Get Signature

> **get** **emailIntegrations**(): [`EmailIntegrationResource`](EmailIntegrationResource.md)[]

Defined in: [packages/cli/src/solution/index.js:1318](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/cli/src/solution/index.js#L1318)

##### Returns

[`EmailIntegrationResource`](EmailIntegrationResource.md)[]

***

### extractIntegration

#### Get Signature

> **get** **extractIntegration**(): `object`

Defined in: [packages/cli/src/solution/index.js:1383](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/cli/src/solution/index.js#L1383)

##### Returns

`object`

***

### extractIntegrations

#### Get Signature

> **get** **extractIntegrations**(): [`ExtractIntegrationResource`](ExtractIntegrationResource.md)[]

Defined in: [packages/cli/src/solution/index.js:1372](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/cli/src/solution/index.js#L1372)

##### Returns

[`ExtractIntegrationResource`](ExtractIntegrationResource.md)[]

***

### file

#### Get Signature

> **get** **file**(): `object`

Defined in: [packages/cli/src/solution/index.js:1135](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/cli/src/solution/index.js#L1135)

##### Returns

`object`

***

### files

#### Get Signature

> **get** **files**(): [`FileResource`](FileResource.md)[]

Defined in: [packages/cli/src/solution/index.js:1126](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/cli/src/solution/index.js#L1126)

##### Returns

[`FileResource`](FileResource.md)[]

***

### mcpserverIntegration

#### Get Signature

> **get** **mcpserverIntegration**(): `object`

Defined in: [packages/cli/src/solution/index.js:1401](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/cli/src/solution/index.js#L1401)

##### Returns

`object`

***

### mcpserverIntegrations

#### Get Signature

> **get** **mcpserverIntegrations**(): [`McpServerIntegrationResource`](McpServerIntegrationResource.md)[]

Defined in: [packages/cli/src/solution/index.js:1390](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/cli/src/solution/index.js#L1390)

##### Returns

[`McpServerIntegrationResource`](McpServerIntegrationResource.md)[]

***

### messengerIntegration

#### Get Signature

> **get** **messengerIntegration**(): `object`

Defined in: [packages/cli/src/solution/index.js:1293](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/cli/src/solution/index.js#L1293)

##### Returns

`object`

***

### messengerIntegrations

#### Get Signature

> **get** **messengerIntegrations**(): [`MessengerIntegrationResource`](MessengerIntegrationResource.md)[]

Defined in: [packages/cli/src/solution/index.js:1282](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/cli/src/solution/index.js#L1282)

##### Returns

[`MessengerIntegrationResource`](MessengerIntegrationResource.md)[]

***

### notionIntegration

#### Get Signature

> **get** **notionIntegration**(): `object`

Defined in: [packages/cli/src/solution/index.js:1311](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/cli/src/solution/index.js#L1311)

##### Returns

`object`

***

### notionIntegrations

#### Get Signature

> **get** **notionIntegrations**(): [`NotionIntegrationResource`](NotionIntegrationResource.md)[]

Defined in: [packages/cli/src/solution/index.js:1300](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/cli/src/solution/index.js#L1300)

##### Returns

[`NotionIntegrationResource`](NotionIntegrationResource.md)[]

***

### resources

#### Get Signature

> **get** **resources**(): ([`BlueprintResource`](BlueprintResource.md) \| [`BotResource`](BotResource.md) \| [`DatasetResource`](DatasetResource.md) \| [`FileResource`](FileResource.md) \| [`SecretResource`](SecretResource.md) \| [`SkillsetResource`](SkillsetResource.md) \| [`WidgetIntegrationResource`](WidgetIntegrationResource.md) \| [`SitemapIntegrationResource`](SitemapIntegrationResource.md) \| [`SlackIntegrationResource`](SlackIntegrationResource.md) \| [`DiscordIntegrationResource`](DiscordIntegrationResource.md) \| [`TelegramIntegrationResource`](TelegramIntegrationResource.md) \| [`WhatsAppIntegrationResource`](WhatsAppIntegrationResource.md) \| [`MessengerIntegrationResource`](MessengerIntegrationResource.md) \| [`NotionIntegrationResource`](NotionIntegrationResource.md) \| [`EmailIntegrationResource`](EmailIntegrationResource.md) \| [`TriggerIntegrationResource`](TriggerIntegrationResource.md) \| [`SupportIntegrationResource`](SupportIntegrationResource.md) \| [`ExtractIntegrationResource`](ExtractIntegrationResource.md) \| [`McpServerIntegrationResource`](McpServerIntegrationResource.md) \| [`TwilioIntegrationResource`](TwilioIntegrationResource.md))[]

Defined in: [packages/cli/src/solution/index.js:1023](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/cli/src/solution/index.js#L1023)

Get the resources.

##### Returns

([`BlueprintResource`](BlueprintResource.md) \| [`BotResource`](BotResource.md) \| [`DatasetResource`](DatasetResource.md) \| [`FileResource`](FileResource.md) \| [`SecretResource`](SecretResource.md) \| [`SkillsetResource`](SkillsetResource.md) \| [`WidgetIntegrationResource`](WidgetIntegrationResource.md) \| [`SitemapIntegrationResource`](SitemapIntegrationResource.md) \| [`SlackIntegrationResource`](SlackIntegrationResource.md) \| [`DiscordIntegrationResource`](DiscordIntegrationResource.md) \| [`TelegramIntegrationResource`](TelegramIntegrationResource.md) \| [`WhatsAppIntegrationResource`](WhatsAppIntegrationResource.md) \| [`MessengerIntegrationResource`](MessengerIntegrationResource.md) \| [`NotionIntegrationResource`](NotionIntegrationResource.md) \| [`EmailIntegrationResource`](EmailIntegrationResource.md) \| [`TriggerIntegrationResource`](TriggerIntegrationResource.md) \| [`SupportIntegrationResource`](SupportIntegrationResource.md) \| [`ExtractIntegrationResource`](ExtractIntegrationResource.md) \| [`McpServerIntegrationResource`](McpServerIntegrationResource.md) \| [`TwilioIntegrationResource`](TwilioIntegrationResource.md))[]

***

### secret

#### Get Signature

> **get** **secret**(): `object`

Defined in: [packages/cli/src/solution/index.js:1151](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/cli/src/solution/index.js#L1151)

##### Returns

`object`

***

### secrets

#### Get Signature

> **get** **secrets**(): [`SecretResource`](SecretResource.md)[]

Defined in: [packages/cli/src/solution/index.js:1142](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/cli/src/solution/index.js#L1142)

##### Returns

[`SecretResource`](SecretResource.md)[]

***

### sitemapIntegration

#### Get Signature

> **get** **sitemapIntegration**(): `object`

Defined in: [packages/cli/src/solution/index.js:1203](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/cli/src/solution/index.js#L1203)

##### Returns

`object`

***

### sitemapIntegrations

#### Get Signature

> **get** **sitemapIntegrations**(): [`SitemapIntegrationResource`](SitemapIntegrationResource.md)[]

Defined in: [packages/cli/src/solution/index.js:1192](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/cli/src/solution/index.js#L1192)

##### Returns

[`SitemapIntegrationResource`](SitemapIntegrationResource.md)[]

***

### skillset

#### Get Signature

> **get** **skillset**(): `object`

Defined in: [packages/cli/src/solution/index.js:1167](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/cli/src/solution/index.js#L1167)

##### Returns

`object`

***

### skillsets

#### Get Signature

> **get** **skillsets**(): [`SkillsetResource`](SkillsetResource.md)[]

Defined in: [packages/cli/src/solution/index.js:1158](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/cli/src/solution/index.js#L1158)

##### Returns

[`SkillsetResource`](SkillsetResource.md)[]

***

### slackIntegration

#### Get Signature

> **get** **slackIntegration**(): `object`

Defined in: [packages/cli/src/solution/index.js:1221](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/cli/src/solution/index.js#L1221)

##### Returns

`object`

***

### slackIntegrations

#### Get Signature

> **get** **slackIntegrations**(): [`SlackIntegrationResource`](SlackIntegrationResource.md)[]

Defined in: [packages/cli/src/solution/index.js:1210](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/cli/src/solution/index.js#L1210)

##### Returns

[`SlackIntegrationResource`](SlackIntegrationResource.md)[]

***

### supportIntegration

#### Get Signature

> **get** **supportIntegration**(): `object`

Defined in: [packages/cli/src/solution/index.js:1365](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/cli/src/solution/index.js#L1365)

##### Returns

`object`

***

### supportIntegrations

#### Get Signature

> **get** **supportIntegrations**(): [`SupportIntegrationResource`](SupportIntegrationResource.md)[]

Defined in: [packages/cli/src/solution/index.js:1354](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/cli/src/solution/index.js#L1354)

##### Returns

[`SupportIntegrationResource`](SupportIntegrationResource.md)[]

***

### telegramIntegration

#### Get Signature

> **get** **telegramIntegration**(): `object`

Defined in: [packages/cli/src/solution/index.js:1257](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/cli/src/solution/index.js#L1257)

##### Returns

`object`

***

### telegramIntegrations

#### Get Signature

> **get** **telegramIntegrations**(): [`TelegramIntegrationResource`](TelegramIntegrationResource.md)[]

Defined in: [packages/cli/src/solution/index.js:1246](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/cli/src/solution/index.js#L1246)

##### Returns

[`TelegramIntegrationResource`](TelegramIntegrationResource.md)[]

***

### triggerIntegration

#### Get Signature

> **get** **triggerIntegration**(): `object`

Defined in: [packages/cli/src/solution/index.js:1347](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/cli/src/solution/index.js#L1347)

##### Returns

`object`

***

### triggerIntegrations

#### Get Signature

> **get** **triggerIntegrations**(): [`TriggerIntegrationResource`](TriggerIntegrationResource.md)[]

Defined in: [packages/cli/src/solution/index.js:1336](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/cli/src/solution/index.js#L1336)

##### Returns

[`TriggerIntegrationResource`](TriggerIntegrationResource.md)[]

***

### twilioIntegration

#### Get Signature

> **get** **twilioIntegration**(): `object`

Defined in: [packages/cli/src/solution/index.js:1419](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/cli/src/solution/index.js#L1419)

##### Returns

`object`

***

### twilioIntegrations

#### Get Signature

> **get** **twilioIntegrations**(): [`TwilioIntegrationResource`](TwilioIntegrationResource.md)[]

Defined in: [packages/cli/src/solution/index.js:1408](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/cli/src/solution/index.js#L1408)

##### Returns

[`TwilioIntegrationResource`](TwilioIntegrationResource.md)[]

***

### whatsappIntegration

#### Get Signature

> **get** **whatsappIntegration**(): `object`

Defined in: [packages/cli/src/solution/index.js:1275](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/cli/src/solution/index.js#L1275)

##### Returns

`object`

***

### whatsappIntegrations

#### Get Signature

> **get** **whatsappIntegrations**(): [`WhatsAppIntegrationResource`](WhatsAppIntegrationResource.md)[]

Defined in: [packages/cli/src/solution/index.js:1264](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/cli/src/solution/index.js#L1264)

##### Returns

[`WhatsAppIntegrationResource`](WhatsAppIntegrationResource.md)[]

***

### widgetIntegration

#### Get Signature

> **get** **widgetIntegration**(): `object`

Defined in: [packages/cli/src/solution/index.js:1185](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/cli/src/solution/index.js#L1185)

##### Returns

`object`

***

### widgetIntegrations

#### Get Signature

> **get** **widgetIntegrations**(): [`WidgetIntegrationResource`](WidgetIntegrationResource.md)[]

Defined in: [packages/cli/src/solution/index.js:1174](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/cli/src/solution/index.js#L1174)

##### Returns

[`WidgetIntegrationResource`](WidgetIntegrationResource.md)[]

## Methods

### sync()

> **sync**(): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`void`\>

Defined in: [packages/cli/src/solution/index.js:1428](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/cli/src/solution/index.js#L1428)

Sync the solution.

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`void`\>

***

### create()

> `static` **create**(`name`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`void`\>

Defined in: [packages/cli/src/solution/index.js:1454](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/cli/src/solution/index.js#L1454)

Creates a new solution.

#### Parameters

##### name

`string`

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`void`\>

***

### delete()

> `static` **delete**(`name`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`void`\>

Defined in: [packages/cli/src/solution/index.js:1479](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/cli/src/solution/index.js#L1479)

Deletes a solution.

#### Parameters

##### name

`string`

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`void`\>

***

### list()

> `static` **list**(): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`string`[]\>

Defined in: [packages/cli/src/solution/index.js:1438](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/cli/src/solution/index.js#L1438)

Lists solutions.

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`string`[]\>

***

### load()

> `static` **load**(`config`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`Solution`\>

Defined in: [packages/cli/src/solution/index.js:1496](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/cli/src/solution/index.js#L1496)

Loads a solution from a configuration object or a file.

#### Parameters

##### config

`string` | \{ `resources?`: (\{ `id?`: `string`; `properties?`: \{ \}; `slug?`: `string`; `type?`: `"blueprint"`; \} \| \{ `id?`: `string`; `properties?`: \{ \}; `slug?`: `string`; `type?`: `"bot"`; \} \| \{ `id?`: `string`; `properties?`: \{ \}; `slug?`: `string`; `type?`: `"dataset"`; \} \| \{ `id?`: `string`; `properties?`: \{ \}; `slug?`: `string`; `type?`: `"file"`; \} \| \{ `id?`: `string`; `properties?`: \{ \}; `slug?`: `string`; `type?`: `"secret"`; \} \| \{ `id?`: `string`; `properties?`: \{ \}; `slug?`: `string`; `type?`: `"skillset"`; \} \| \{ `id?`: `string`; `properties?`: \{ \}; `slug?`: `string`; `type?`: `"widgetIntegration"`; \} \| \{ `id?`: `string`; `properties?`: \{ \}; `slug?`: `string`; `type?`: `"sitemapIntegration"`; \} \| \{ `id?`: `string`; `properties?`: \{ \}; `slug?`: `string`; `type?`: `"slackIntegration"`; \} \| \{ `id?`: `string`; `properties?`: \{ \}; `slug?`: `string`; `type?`: `"discordIntegration"`; \} \| \{ `id?`: `string`; `properties?`: \{ \}; `slug?`: `string`; `type?`: `"telegramIntegration"`; \} \| \{ `id?`: `string`; `properties?`: \{ \}; `slug?`: `string`; `type?`: `"whatsappIntegration"`; \} \| \{ `id?`: `string`; `properties?`: \{ \}; `slug?`: `string`; `type?`: `"messengerIntegration"`; \} \| \{ `id?`: `string`; `properties?`: \{ \}; `slug?`: `string`; `type?`: `"notionIntegration"`; \} \| \{ `id?`: `string`; `properties?`: \{ \}; `slug?`: `string`; `type?`: `"emailIntegration"`; \} \| \{ `id?`: `string`; `properties?`: \{ \}; `slug?`: `string`; `type?`: `"triggerIntegration"`; \} \| \{ `id?`: `string`; `properties?`: \{ \}; `slug?`: `string`; `type?`: `"supportIntegration"`; \} \| \{ `id?`: `string`; `properties?`: \{ \}; `slug?`: `string`; `type?`: `"extractIntegration"`; \} \| \{ `id?`: `string`; `properties?`: \{ \}; `slug?`: `string`; `type?`: `"mcpserverIntegration"`; \} \| \{ `id?`: `string`; `properties?`: \{ \}; `slug?`: `string`; `type?`: `"twilioIntegration"`; \})[]; `version?`: `1`; \}

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`Solution`\>

***

### save()

> `static` **save**(`name`, `solution`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`void`\>

Defined in: [packages/cli/src/solution/index.js:1535](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/cli/src/solution/index.js#L1535)

Saves a solution to a file.

#### Parameters

##### name

`string`

##### solution

`Solution`

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`void`\>
