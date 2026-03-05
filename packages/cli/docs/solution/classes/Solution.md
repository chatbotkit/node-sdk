[**@chatbotkit/cli**](../../README.md)

***

[@chatbotkit/cli](../../modules.md) / [solution](../README.md) / Solution

# Class: Solution

Defined in: [sdks/node/packages/cli/src/solution/index.js:1011](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/cli/src/solution/index.js#L1011)

Represents a solution.

## Constructors

### Constructor

> **new Solution**(`config`): `Solution`

Defined in: [sdks/node/packages/cli/src/solution/index.js:1015](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/cli/src/solution/index.js#L1015)

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

Defined in: [sdks/node/packages/cli/src/solution/index.js:1022](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/cli/src/solution/index.js#L1022)

##### Returns

`ChatBotKit`

***

### blueprint

#### Get Signature

> **get** **blueprint**(): `object`

Defined in: [sdks/node/packages/cli/src/solution/index.js:1100](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/cli/src/solution/index.js#L1100)

##### Returns

`object`

***

### blueprints

#### Get Signature

> **get** **blueprints**(): [`BlueprintResource`](BlueprintResource.md)[]

Defined in: [sdks/node/packages/cli/src/solution/index.js:1091](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/cli/src/solution/index.js#L1091)

##### Returns

[`BlueprintResource`](BlueprintResource.md)[]

***

### bot

#### Get Signature

> **get** **bot**(): `object`

Defined in: [sdks/node/packages/cli/src/solution/index.js:1116](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/cli/src/solution/index.js#L1116)

##### Returns

`object`

***

### bots

#### Get Signature

> **get** **bots**(): [`BotResource`](BotResource.md)[]

Defined in: [sdks/node/packages/cli/src/solution/index.js:1107](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/cli/src/solution/index.js#L1107)

##### Returns

[`BotResource`](BotResource.md)[]

***

### dataset

#### Get Signature

> **get** **dataset**(): `object`

Defined in: [sdks/node/packages/cli/src/solution/index.js:1132](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/cli/src/solution/index.js#L1132)

##### Returns

`object`

***

### datasets

#### Get Signature

> **get** **datasets**(): [`DatasetResource`](DatasetResource.md)[]

Defined in: [sdks/node/packages/cli/src/solution/index.js:1123](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/cli/src/solution/index.js#L1123)

##### Returns

[`DatasetResource`](DatasetResource.md)[]

***

### discordIntegration

#### Get Signature

> **get** **discordIntegration**(): `object`

Defined in: [sdks/node/packages/cli/src/solution/index.js:1252](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/cli/src/solution/index.js#L1252)

##### Returns

`object`

***

### discordIntegrations

#### Get Signature

> **get** **discordIntegrations**(): [`DiscordIntegrationResource`](DiscordIntegrationResource.md)[]

Defined in: [sdks/node/packages/cli/src/solution/index.js:1241](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/cli/src/solution/index.js#L1241)

##### Returns

[`DiscordIntegrationResource`](DiscordIntegrationResource.md)[]

***

### emailIntegration

#### Get Signature

> **get** **emailIntegration**(): `object`

Defined in: [sdks/node/packages/cli/src/solution/index.js:1342](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/cli/src/solution/index.js#L1342)

##### Returns

`object`

***

### emailIntegrations

#### Get Signature

> **get** **emailIntegrations**(): [`EmailIntegrationResource`](EmailIntegrationResource.md)[]

Defined in: [sdks/node/packages/cli/src/solution/index.js:1331](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/cli/src/solution/index.js#L1331)

##### Returns

[`EmailIntegrationResource`](EmailIntegrationResource.md)[]

***

### extractIntegration

#### Get Signature

> **get** **extractIntegration**(): `object`

Defined in: [sdks/node/packages/cli/src/solution/index.js:1396](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/cli/src/solution/index.js#L1396)

##### Returns

`object`

***

### extractIntegrations

#### Get Signature

> **get** **extractIntegrations**(): [`ExtractIntegrationResource`](ExtractIntegrationResource.md)[]

Defined in: [sdks/node/packages/cli/src/solution/index.js:1385](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/cli/src/solution/index.js#L1385)

##### Returns

[`ExtractIntegrationResource`](ExtractIntegrationResource.md)[]

***

### file

#### Get Signature

> **get** **file**(): `object`

Defined in: [sdks/node/packages/cli/src/solution/index.js:1148](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/cli/src/solution/index.js#L1148)

##### Returns

`object`

***

### files

#### Get Signature

> **get** **files**(): [`FileResource`](FileResource.md)[]

Defined in: [sdks/node/packages/cli/src/solution/index.js:1139](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/cli/src/solution/index.js#L1139)

##### Returns

[`FileResource`](FileResource.md)[]

***

### mcpserverIntegration

#### Get Signature

> **get** **mcpserverIntegration**(): `object`

Defined in: [sdks/node/packages/cli/src/solution/index.js:1414](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/cli/src/solution/index.js#L1414)

##### Returns

`object`

***

### mcpserverIntegrations

#### Get Signature

> **get** **mcpserverIntegrations**(): [`McpServerIntegrationResource`](McpServerIntegrationResource.md)[]

Defined in: [sdks/node/packages/cli/src/solution/index.js:1403](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/cli/src/solution/index.js#L1403)

##### Returns

[`McpServerIntegrationResource`](McpServerIntegrationResource.md)[]

***

### messengerIntegration

#### Get Signature

> **get** **messengerIntegration**(): `object`

Defined in: [sdks/node/packages/cli/src/solution/index.js:1306](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/cli/src/solution/index.js#L1306)

##### Returns

`object`

***

### messengerIntegrations

#### Get Signature

> **get** **messengerIntegrations**(): [`MessengerIntegrationResource`](MessengerIntegrationResource.md)[]

Defined in: [sdks/node/packages/cli/src/solution/index.js:1295](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/cli/src/solution/index.js#L1295)

##### Returns

[`MessengerIntegrationResource`](MessengerIntegrationResource.md)[]

***

### notionIntegration

#### Get Signature

> **get** **notionIntegration**(): `object`

Defined in: [sdks/node/packages/cli/src/solution/index.js:1324](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/cli/src/solution/index.js#L1324)

##### Returns

`object`

***

### notionIntegrations

#### Get Signature

> **get** **notionIntegrations**(): [`NotionIntegrationResource`](NotionIntegrationResource.md)[]

Defined in: [sdks/node/packages/cli/src/solution/index.js:1313](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/cli/src/solution/index.js#L1313)

##### Returns

[`NotionIntegrationResource`](NotionIntegrationResource.md)[]

***

### resources

#### Get Signature

> **get** **resources**(): ([`BlueprintResource`](BlueprintResource.md) \| [`BotResource`](BotResource.md) \| [`DatasetResource`](DatasetResource.md) \| [`FileResource`](FileResource.md) \| [`SecretResource`](SecretResource.md) \| [`SkillsetResource`](SkillsetResource.md) \| [`WidgetIntegrationResource`](WidgetIntegrationResource.md) \| [`SitemapIntegrationResource`](SitemapIntegrationResource.md) \| [`SlackIntegrationResource`](SlackIntegrationResource.md) \| [`DiscordIntegrationResource`](DiscordIntegrationResource.md) \| [`TelegramIntegrationResource`](TelegramIntegrationResource.md) \| [`WhatsAppIntegrationResource`](WhatsAppIntegrationResource.md) \| [`MessengerIntegrationResource`](MessengerIntegrationResource.md) \| [`NotionIntegrationResource`](NotionIntegrationResource.md) \| [`EmailIntegrationResource`](EmailIntegrationResource.md) \| [`TriggerIntegrationResource`](TriggerIntegrationResource.md) \| [`SupportIntegrationResource`](SupportIntegrationResource.md) \| [`ExtractIntegrationResource`](ExtractIntegrationResource.md) \| [`McpServerIntegrationResource`](McpServerIntegrationResource.md) \| [`TwilioIntegrationResource`](TwilioIntegrationResource.md))[]

Defined in: [sdks/node/packages/cli/src/solution/index.js:1036](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/cli/src/solution/index.js#L1036)

Get the resources.

##### Returns

([`BlueprintResource`](BlueprintResource.md) \| [`BotResource`](BotResource.md) \| [`DatasetResource`](DatasetResource.md) \| [`FileResource`](FileResource.md) \| [`SecretResource`](SecretResource.md) \| [`SkillsetResource`](SkillsetResource.md) \| [`WidgetIntegrationResource`](WidgetIntegrationResource.md) \| [`SitemapIntegrationResource`](SitemapIntegrationResource.md) \| [`SlackIntegrationResource`](SlackIntegrationResource.md) \| [`DiscordIntegrationResource`](DiscordIntegrationResource.md) \| [`TelegramIntegrationResource`](TelegramIntegrationResource.md) \| [`WhatsAppIntegrationResource`](WhatsAppIntegrationResource.md) \| [`MessengerIntegrationResource`](MessengerIntegrationResource.md) \| [`NotionIntegrationResource`](NotionIntegrationResource.md) \| [`EmailIntegrationResource`](EmailIntegrationResource.md) \| [`TriggerIntegrationResource`](TriggerIntegrationResource.md) \| [`SupportIntegrationResource`](SupportIntegrationResource.md) \| [`ExtractIntegrationResource`](ExtractIntegrationResource.md) \| [`McpServerIntegrationResource`](McpServerIntegrationResource.md) \| [`TwilioIntegrationResource`](TwilioIntegrationResource.md))[]

***

### secret

#### Get Signature

> **get** **secret**(): `object`

Defined in: [sdks/node/packages/cli/src/solution/index.js:1164](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/cli/src/solution/index.js#L1164)

##### Returns

`object`

***

### secrets

#### Get Signature

> **get** **secrets**(): [`SecretResource`](SecretResource.md)[]

Defined in: [sdks/node/packages/cli/src/solution/index.js:1155](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/cli/src/solution/index.js#L1155)

##### Returns

[`SecretResource`](SecretResource.md)[]

***

### sitemapIntegration

#### Get Signature

> **get** **sitemapIntegration**(): `object`

Defined in: [sdks/node/packages/cli/src/solution/index.js:1216](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/cli/src/solution/index.js#L1216)

##### Returns

`object`

***

### sitemapIntegrations

#### Get Signature

> **get** **sitemapIntegrations**(): [`SitemapIntegrationResource`](SitemapIntegrationResource.md)[]

Defined in: [sdks/node/packages/cli/src/solution/index.js:1205](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/cli/src/solution/index.js#L1205)

##### Returns

[`SitemapIntegrationResource`](SitemapIntegrationResource.md)[]

***

### skillset

#### Get Signature

> **get** **skillset**(): `object`

Defined in: [sdks/node/packages/cli/src/solution/index.js:1180](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/cli/src/solution/index.js#L1180)

##### Returns

`object`

***

### skillsets

#### Get Signature

> **get** **skillsets**(): [`SkillsetResource`](SkillsetResource.md)[]

Defined in: [sdks/node/packages/cli/src/solution/index.js:1171](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/cli/src/solution/index.js#L1171)

##### Returns

[`SkillsetResource`](SkillsetResource.md)[]

***

### slackIntegration

#### Get Signature

> **get** **slackIntegration**(): `object`

Defined in: [sdks/node/packages/cli/src/solution/index.js:1234](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/cli/src/solution/index.js#L1234)

##### Returns

`object`

***

### slackIntegrations

#### Get Signature

> **get** **slackIntegrations**(): [`SlackIntegrationResource`](SlackIntegrationResource.md)[]

Defined in: [sdks/node/packages/cli/src/solution/index.js:1223](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/cli/src/solution/index.js#L1223)

##### Returns

[`SlackIntegrationResource`](SlackIntegrationResource.md)[]

***

### supportIntegration

#### Get Signature

> **get** **supportIntegration**(): `object`

Defined in: [sdks/node/packages/cli/src/solution/index.js:1378](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/cli/src/solution/index.js#L1378)

##### Returns

`object`

***

### supportIntegrations

#### Get Signature

> **get** **supportIntegrations**(): [`SupportIntegrationResource`](SupportIntegrationResource.md)[]

Defined in: [sdks/node/packages/cli/src/solution/index.js:1367](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/cli/src/solution/index.js#L1367)

##### Returns

[`SupportIntegrationResource`](SupportIntegrationResource.md)[]

***

### telegramIntegration

#### Get Signature

> **get** **telegramIntegration**(): `object`

Defined in: [sdks/node/packages/cli/src/solution/index.js:1270](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/cli/src/solution/index.js#L1270)

##### Returns

`object`

***

### telegramIntegrations

#### Get Signature

> **get** **telegramIntegrations**(): [`TelegramIntegrationResource`](TelegramIntegrationResource.md)[]

Defined in: [sdks/node/packages/cli/src/solution/index.js:1259](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/cli/src/solution/index.js#L1259)

##### Returns

[`TelegramIntegrationResource`](TelegramIntegrationResource.md)[]

***

### triggerIntegration

#### Get Signature

> **get** **triggerIntegration**(): `object`

Defined in: [sdks/node/packages/cli/src/solution/index.js:1360](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/cli/src/solution/index.js#L1360)

##### Returns

`object`

***

### triggerIntegrations

#### Get Signature

> **get** **triggerIntegrations**(): [`TriggerIntegrationResource`](TriggerIntegrationResource.md)[]

Defined in: [sdks/node/packages/cli/src/solution/index.js:1349](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/cli/src/solution/index.js#L1349)

##### Returns

[`TriggerIntegrationResource`](TriggerIntegrationResource.md)[]

***

### twilioIntegration

#### Get Signature

> **get** **twilioIntegration**(): `object`

Defined in: [sdks/node/packages/cli/src/solution/index.js:1432](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/cli/src/solution/index.js#L1432)

##### Returns

`object`

***

### twilioIntegrations

#### Get Signature

> **get** **twilioIntegrations**(): [`TwilioIntegrationResource`](TwilioIntegrationResource.md)[]

Defined in: [sdks/node/packages/cli/src/solution/index.js:1421](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/cli/src/solution/index.js#L1421)

##### Returns

[`TwilioIntegrationResource`](TwilioIntegrationResource.md)[]

***

### whatsappIntegration

#### Get Signature

> **get** **whatsappIntegration**(): `object`

Defined in: [sdks/node/packages/cli/src/solution/index.js:1288](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/cli/src/solution/index.js#L1288)

##### Returns

`object`

***

### whatsappIntegrations

#### Get Signature

> **get** **whatsappIntegrations**(): [`WhatsAppIntegrationResource`](WhatsAppIntegrationResource.md)[]

Defined in: [sdks/node/packages/cli/src/solution/index.js:1277](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/cli/src/solution/index.js#L1277)

##### Returns

[`WhatsAppIntegrationResource`](WhatsAppIntegrationResource.md)[]

***

### widgetIntegration

#### Get Signature

> **get** **widgetIntegration**(): `object`

Defined in: [sdks/node/packages/cli/src/solution/index.js:1198](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/cli/src/solution/index.js#L1198)

##### Returns

`object`

***

### widgetIntegrations

#### Get Signature

> **get** **widgetIntegrations**(): [`WidgetIntegrationResource`](WidgetIntegrationResource.md)[]

Defined in: [sdks/node/packages/cli/src/solution/index.js:1187](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/cli/src/solution/index.js#L1187)

##### Returns

[`WidgetIntegrationResource`](WidgetIntegrationResource.md)[]

## Methods

### sync()

> **sync**(): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`void`\>

Defined in: [sdks/node/packages/cli/src/solution/index.js:1441](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/cli/src/solution/index.js#L1441)

Sync the solution.

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`void`\>

***

### create()

> `static` **create**(`name`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`void`\>

Defined in: [sdks/node/packages/cli/src/solution/index.js:1467](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/cli/src/solution/index.js#L1467)

Creates a new solution.

#### Parameters

##### name

`string`

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`void`\>

***

### delete()

> `static` **delete**(`name`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`void`\>

Defined in: [sdks/node/packages/cli/src/solution/index.js:1492](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/cli/src/solution/index.js#L1492)

Deletes a solution.

#### Parameters

##### name

`string`

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`void`\>

***

### list()

> `static` **list**(): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`string`[]\>

Defined in: [sdks/node/packages/cli/src/solution/index.js:1451](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/cli/src/solution/index.js#L1451)

Lists solutions.

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`string`[]\>

***

### load()

> `static` **load**(`config`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`Solution`\>

Defined in: [sdks/node/packages/cli/src/solution/index.js:1509](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/cli/src/solution/index.js#L1509)

Loads a solution from a configuration object or a file.

#### Parameters

##### config

`string` | \{ `resources?`: (\{ `id?`: `string`; `properties?`: \{ \}; `slug?`: `string`; `type?`: `"blueprint"`; \} \| \{ `id?`: `string`; `properties?`: \{ \}; `slug?`: `string`; `type?`: `"bot"`; \} \| \{ `id?`: `string`; `properties?`: \{ \}; `slug?`: `string`; `type?`: `"dataset"`; \} \| \{ `id?`: `string`; `properties?`: \{ \}; `slug?`: `string`; `type?`: `"file"`; \} \| \{ `id?`: `string`; `properties?`: \{ \}; `slug?`: `string`; `type?`: `"secret"`; \} \| \{ `id?`: `string`; `properties?`: \{ \}; `slug?`: `string`; `type?`: `"skillset"`; \} \| \{ `id?`: `string`; `properties?`: \{ \}; `slug?`: `string`; `type?`: `"widgetIntegration"`; \} \| \{ `id?`: `string`; `properties?`: \{ \}; `slug?`: `string`; `type?`: `"sitemapIntegration"`; \} \| \{ `id?`: `string`; `properties?`: \{ \}; `slug?`: `string`; `type?`: `"slackIntegration"`; \} \| \{ `id?`: `string`; `properties?`: \{ \}; `slug?`: `string`; `type?`: `"discordIntegration"`; \} \| \{ `id?`: `string`; `properties?`: \{ \}; `slug?`: `string`; `type?`: `"telegramIntegration"`; \} \| \{ `id?`: `string`; `properties?`: \{ \}; `slug?`: `string`; `type?`: `"whatsappIntegration"`; \} \| \{ `id?`: `string`; `properties?`: \{ \}; `slug?`: `string`; `type?`: `"messengerIntegration"`; \} \| \{ `id?`: `string`; `properties?`: \{ \}; `slug?`: `string`; `type?`: `"notionIntegration"`; \} \| \{ `id?`: `string`; `properties?`: \{ \}; `slug?`: `string`; `type?`: `"emailIntegration"`; \} \| \{ `id?`: `string`; `properties?`: \{ \}; `slug?`: `string`; `type?`: `"triggerIntegration"`; \} \| \{ `id?`: `string`; `properties?`: \{ \}; `slug?`: `string`; `type?`: `"supportIntegration"`; \} \| \{ `id?`: `string`; `properties?`: \{ \}; `slug?`: `string`; `type?`: `"extractIntegration"`; \} \| \{ `id?`: `string`; `properties?`: \{ \}; `slug?`: `string`; `type?`: `"mcpserverIntegration"`; \} \| \{ `id?`: `string`; `properties?`: \{ \}; `slug?`: `string`; `type?`: `"twilioIntegration"`; \})[]; `version?`: `1`; \}

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`Solution`\>

***

### save()

> `static` **save**(`name`, `solution`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`void`\>

Defined in: [sdks/node/packages/cli/src/solution/index.js:1548](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/cli/src/solution/index.js#L1548)

Saves a solution to a file.

#### Parameters

##### name

`string`

##### solution

`Solution`

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`void`\>
