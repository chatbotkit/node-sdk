[**@chatbotkit/cli**](../../README.md)

***

[@chatbotkit/cli](../../modules.md) / [solution](../README.md) / Solution

# Class: Solution

Defined in: [packages/cli/src/solution/index.js:1012](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/cli/src/solution/index.js#L1012)

Represents a solution.

## Constructors

### Constructor

> **new Solution**(`config`): `Solution`

Defined in: [packages/cli/src/solution/index.js:1016](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/cli/src/solution/index.js#L1016)

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

Defined in: [packages/cli/src/solution/index.js:1023](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/cli/src/solution/index.js#L1023)

##### Returns

`ChatBotKit`

***

### blueprint

#### Get Signature

> **get** **blueprint**(): `object`

Defined in: [packages/cli/src/solution/index.js:1101](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/cli/src/solution/index.js#L1101)

##### Returns

`object`

***

### blueprints

#### Get Signature

> **get** **blueprints**(): [`BlueprintResource`](BlueprintResource.md)[]

Defined in: [packages/cli/src/solution/index.js:1092](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/cli/src/solution/index.js#L1092)

##### Returns

[`BlueprintResource`](BlueprintResource.md)[]

***

### bot

#### Get Signature

> **get** **bot**(): `object`

Defined in: [packages/cli/src/solution/index.js:1117](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/cli/src/solution/index.js#L1117)

##### Returns

`object`

***

### bots

#### Get Signature

> **get** **bots**(): [`BotResource`](BotResource.md)[]

Defined in: [packages/cli/src/solution/index.js:1108](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/cli/src/solution/index.js#L1108)

##### Returns

[`BotResource`](BotResource.md)[]

***

### dataset

#### Get Signature

> **get** **dataset**(): `object`

Defined in: [packages/cli/src/solution/index.js:1133](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/cli/src/solution/index.js#L1133)

##### Returns

`object`

***

### datasets

#### Get Signature

> **get** **datasets**(): [`DatasetResource`](DatasetResource.md)[]

Defined in: [packages/cli/src/solution/index.js:1124](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/cli/src/solution/index.js#L1124)

##### Returns

[`DatasetResource`](DatasetResource.md)[]

***

### discordIntegration

#### Get Signature

> **get** **discordIntegration**(): `object`

Defined in: [packages/cli/src/solution/index.js:1253](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/cli/src/solution/index.js#L1253)

##### Returns

`object`

***

### discordIntegrations

#### Get Signature

> **get** **discordIntegrations**(): [`DiscordIntegrationResource`](DiscordIntegrationResource.md)[]

Defined in: [packages/cli/src/solution/index.js:1242](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/cli/src/solution/index.js#L1242)

##### Returns

[`DiscordIntegrationResource`](DiscordIntegrationResource.md)[]

***

### emailIntegration

#### Get Signature

> **get** **emailIntegration**(): `object`

Defined in: [packages/cli/src/solution/index.js:1343](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/cli/src/solution/index.js#L1343)

##### Returns

`object`

***

### emailIntegrations

#### Get Signature

> **get** **emailIntegrations**(): [`EmailIntegrationResource`](EmailIntegrationResource.md)[]

Defined in: [packages/cli/src/solution/index.js:1332](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/cli/src/solution/index.js#L1332)

##### Returns

[`EmailIntegrationResource`](EmailIntegrationResource.md)[]

***

### extractIntegration

#### Get Signature

> **get** **extractIntegration**(): `object`

Defined in: [packages/cli/src/solution/index.js:1397](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/cli/src/solution/index.js#L1397)

##### Returns

`object`

***

### extractIntegrations

#### Get Signature

> **get** **extractIntegrations**(): [`ExtractIntegrationResource`](ExtractIntegrationResource.md)[]

Defined in: [packages/cli/src/solution/index.js:1386](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/cli/src/solution/index.js#L1386)

##### Returns

[`ExtractIntegrationResource`](ExtractIntegrationResource.md)[]

***

### file

#### Get Signature

> **get** **file**(): `object`

Defined in: [packages/cli/src/solution/index.js:1149](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/cli/src/solution/index.js#L1149)

##### Returns

`object`

***

### files

#### Get Signature

> **get** **files**(): [`FileResource`](FileResource.md)[]

Defined in: [packages/cli/src/solution/index.js:1140](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/cli/src/solution/index.js#L1140)

##### Returns

[`FileResource`](FileResource.md)[]

***

### mcpserverIntegration

#### Get Signature

> **get** **mcpserverIntegration**(): `object`

Defined in: [packages/cli/src/solution/index.js:1415](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/cli/src/solution/index.js#L1415)

##### Returns

`object`

***

### mcpserverIntegrations

#### Get Signature

> **get** **mcpserverIntegrations**(): [`McpServerIntegrationResource`](McpServerIntegrationResource.md)[]

Defined in: [packages/cli/src/solution/index.js:1404](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/cli/src/solution/index.js#L1404)

##### Returns

[`McpServerIntegrationResource`](McpServerIntegrationResource.md)[]

***

### messengerIntegration

#### Get Signature

> **get** **messengerIntegration**(): `object`

Defined in: [packages/cli/src/solution/index.js:1307](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/cli/src/solution/index.js#L1307)

##### Returns

`object`

***

### messengerIntegrations

#### Get Signature

> **get** **messengerIntegrations**(): [`MessengerIntegrationResource`](MessengerIntegrationResource.md)[]

Defined in: [packages/cli/src/solution/index.js:1296](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/cli/src/solution/index.js#L1296)

##### Returns

[`MessengerIntegrationResource`](MessengerIntegrationResource.md)[]

***

### notionIntegration

#### Get Signature

> **get** **notionIntegration**(): `object`

Defined in: [packages/cli/src/solution/index.js:1325](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/cli/src/solution/index.js#L1325)

##### Returns

`object`

***

### notionIntegrations

#### Get Signature

> **get** **notionIntegrations**(): [`NotionIntegrationResource`](NotionIntegrationResource.md)[]

Defined in: [packages/cli/src/solution/index.js:1314](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/cli/src/solution/index.js#L1314)

##### Returns

[`NotionIntegrationResource`](NotionIntegrationResource.md)[]

***

### resources

#### Get Signature

> **get** **resources**(): ([`BlueprintResource`](BlueprintResource.md) \| [`BotResource`](BotResource.md) \| [`DatasetResource`](DatasetResource.md) \| [`FileResource`](FileResource.md) \| [`SecretResource`](SecretResource.md) \| [`SkillsetResource`](SkillsetResource.md) \| [`WidgetIntegrationResource`](WidgetIntegrationResource.md) \| [`SitemapIntegrationResource`](SitemapIntegrationResource.md) \| [`SlackIntegrationResource`](SlackIntegrationResource.md) \| [`DiscordIntegrationResource`](DiscordIntegrationResource.md) \| [`TelegramIntegrationResource`](TelegramIntegrationResource.md) \| [`WhatsAppIntegrationResource`](WhatsAppIntegrationResource.md) \| [`MessengerIntegrationResource`](MessengerIntegrationResource.md) \| [`NotionIntegrationResource`](NotionIntegrationResource.md) \| [`EmailIntegrationResource`](EmailIntegrationResource.md) \| [`TriggerIntegrationResource`](TriggerIntegrationResource.md) \| [`SupportIntegrationResource`](SupportIntegrationResource.md) \| [`ExtractIntegrationResource`](ExtractIntegrationResource.md) \| [`McpServerIntegrationResource`](McpServerIntegrationResource.md) \| [`TwilioIntegrationResource`](TwilioIntegrationResource.md))[]

Defined in: [packages/cli/src/solution/index.js:1037](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/cli/src/solution/index.js#L1037)

Get the resources.

##### Returns

([`BlueprintResource`](BlueprintResource.md) \| [`BotResource`](BotResource.md) \| [`DatasetResource`](DatasetResource.md) \| [`FileResource`](FileResource.md) \| [`SecretResource`](SecretResource.md) \| [`SkillsetResource`](SkillsetResource.md) \| [`WidgetIntegrationResource`](WidgetIntegrationResource.md) \| [`SitemapIntegrationResource`](SitemapIntegrationResource.md) \| [`SlackIntegrationResource`](SlackIntegrationResource.md) \| [`DiscordIntegrationResource`](DiscordIntegrationResource.md) \| [`TelegramIntegrationResource`](TelegramIntegrationResource.md) \| [`WhatsAppIntegrationResource`](WhatsAppIntegrationResource.md) \| [`MessengerIntegrationResource`](MessengerIntegrationResource.md) \| [`NotionIntegrationResource`](NotionIntegrationResource.md) \| [`EmailIntegrationResource`](EmailIntegrationResource.md) \| [`TriggerIntegrationResource`](TriggerIntegrationResource.md) \| [`SupportIntegrationResource`](SupportIntegrationResource.md) \| [`ExtractIntegrationResource`](ExtractIntegrationResource.md) \| [`McpServerIntegrationResource`](McpServerIntegrationResource.md) \| [`TwilioIntegrationResource`](TwilioIntegrationResource.md))[]

***

### secret

#### Get Signature

> **get** **secret**(): `object`

Defined in: [packages/cli/src/solution/index.js:1165](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/cli/src/solution/index.js#L1165)

##### Returns

`object`

***

### secrets

#### Get Signature

> **get** **secrets**(): [`SecretResource`](SecretResource.md)[]

Defined in: [packages/cli/src/solution/index.js:1156](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/cli/src/solution/index.js#L1156)

##### Returns

[`SecretResource`](SecretResource.md)[]

***

### sitemapIntegration

#### Get Signature

> **get** **sitemapIntegration**(): `object`

Defined in: [packages/cli/src/solution/index.js:1217](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/cli/src/solution/index.js#L1217)

##### Returns

`object`

***

### sitemapIntegrations

#### Get Signature

> **get** **sitemapIntegrations**(): [`SitemapIntegrationResource`](SitemapIntegrationResource.md)[]

Defined in: [packages/cli/src/solution/index.js:1206](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/cli/src/solution/index.js#L1206)

##### Returns

[`SitemapIntegrationResource`](SitemapIntegrationResource.md)[]

***

### skillset

#### Get Signature

> **get** **skillset**(): `object`

Defined in: [packages/cli/src/solution/index.js:1181](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/cli/src/solution/index.js#L1181)

##### Returns

`object`

***

### skillsets

#### Get Signature

> **get** **skillsets**(): [`SkillsetResource`](SkillsetResource.md)[]

Defined in: [packages/cli/src/solution/index.js:1172](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/cli/src/solution/index.js#L1172)

##### Returns

[`SkillsetResource`](SkillsetResource.md)[]

***

### slackIntegration

#### Get Signature

> **get** **slackIntegration**(): `object`

Defined in: [packages/cli/src/solution/index.js:1235](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/cli/src/solution/index.js#L1235)

##### Returns

`object`

***

### slackIntegrations

#### Get Signature

> **get** **slackIntegrations**(): [`SlackIntegrationResource`](SlackIntegrationResource.md)[]

Defined in: [packages/cli/src/solution/index.js:1224](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/cli/src/solution/index.js#L1224)

##### Returns

[`SlackIntegrationResource`](SlackIntegrationResource.md)[]

***

### supportIntegration

#### Get Signature

> **get** **supportIntegration**(): `object`

Defined in: [packages/cli/src/solution/index.js:1379](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/cli/src/solution/index.js#L1379)

##### Returns

`object`

***

### supportIntegrations

#### Get Signature

> **get** **supportIntegrations**(): [`SupportIntegrationResource`](SupportIntegrationResource.md)[]

Defined in: [packages/cli/src/solution/index.js:1368](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/cli/src/solution/index.js#L1368)

##### Returns

[`SupportIntegrationResource`](SupportIntegrationResource.md)[]

***

### telegramIntegration

#### Get Signature

> **get** **telegramIntegration**(): `object`

Defined in: [packages/cli/src/solution/index.js:1271](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/cli/src/solution/index.js#L1271)

##### Returns

`object`

***

### telegramIntegrations

#### Get Signature

> **get** **telegramIntegrations**(): [`TelegramIntegrationResource`](TelegramIntegrationResource.md)[]

Defined in: [packages/cli/src/solution/index.js:1260](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/cli/src/solution/index.js#L1260)

##### Returns

[`TelegramIntegrationResource`](TelegramIntegrationResource.md)[]

***

### triggerIntegration

#### Get Signature

> **get** **triggerIntegration**(): `object`

Defined in: [packages/cli/src/solution/index.js:1361](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/cli/src/solution/index.js#L1361)

##### Returns

`object`

***

### triggerIntegrations

#### Get Signature

> **get** **triggerIntegrations**(): [`TriggerIntegrationResource`](TriggerIntegrationResource.md)[]

Defined in: [packages/cli/src/solution/index.js:1350](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/cli/src/solution/index.js#L1350)

##### Returns

[`TriggerIntegrationResource`](TriggerIntegrationResource.md)[]

***

### twilioIntegration

#### Get Signature

> **get** **twilioIntegration**(): `object`

Defined in: [packages/cli/src/solution/index.js:1433](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/cli/src/solution/index.js#L1433)

##### Returns

`object`

***

### twilioIntegrations

#### Get Signature

> **get** **twilioIntegrations**(): [`TwilioIntegrationResource`](TwilioIntegrationResource.md)[]

Defined in: [packages/cli/src/solution/index.js:1422](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/cli/src/solution/index.js#L1422)

##### Returns

[`TwilioIntegrationResource`](TwilioIntegrationResource.md)[]

***

### whatsappIntegration

#### Get Signature

> **get** **whatsappIntegration**(): `object`

Defined in: [packages/cli/src/solution/index.js:1289](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/cli/src/solution/index.js#L1289)

##### Returns

`object`

***

### whatsappIntegrations

#### Get Signature

> **get** **whatsappIntegrations**(): [`WhatsAppIntegrationResource`](WhatsAppIntegrationResource.md)[]

Defined in: [packages/cli/src/solution/index.js:1278](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/cli/src/solution/index.js#L1278)

##### Returns

[`WhatsAppIntegrationResource`](WhatsAppIntegrationResource.md)[]

***

### widgetIntegration

#### Get Signature

> **get** **widgetIntegration**(): `object`

Defined in: [packages/cli/src/solution/index.js:1199](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/cli/src/solution/index.js#L1199)

##### Returns

`object`

***

### widgetIntegrations

#### Get Signature

> **get** **widgetIntegrations**(): [`WidgetIntegrationResource`](WidgetIntegrationResource.md)[]

Defined in: [packages/cli/src/solution/index.js:1188](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/cli/src/solution/index.js#L1188)

##### Returns

[`WidgetIntegrationResource`](WidgetIntegrationResource.md)[]

## Methods

### sync()

> **sync**(): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`void`\>

Defined in: [packages/cli/src/solution/index.js:1442](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/cli/src/solution/index.js#L1442)

Sync the solution.

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`void`\>

***

### create()

> `static` **create**(`name`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`void`\>

Defined in: [packages/cli/src/solution/index.js:1468](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/cli/src/solution/index.js#L1468)

Creates a new solution.

#### Parameters

##### name

`string`

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`void`\>

***

### delete()

> `static` **delete**(`name`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`void`\>

Defined in: [packages/cli/src/solution/index.js:1493](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/cli/src/solution/index.js#L1493)

Deletes a solution.

#### Parameters

##### name

`string`

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`void`\>

***

### list()

> `static` **list**(): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`string`[]\>

Defined in: [packages/cli/src/solution/index.js:1452](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/cli/src/solution/index.js#L1452)

Lists solutions.

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`string`[]\>

***

### load()

> `static` **load**(`config`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`Solution`\>

Defined in: [packages/cli/src/solution/index.js:1510](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/cli/src/solution/index.js#L1510)

Loads a solution from a configuration object or a file.

#### Parameters

##### config

`string` | \{ `resources?`: (\{ `id?`: `string`; `properties?`: \{ \}; `slug?`: `string`; `type?`: `"blueprint"`; \} \| \{ `id?`: `string`; `properties?`: \{ \}; `slug?`: `string`; `type?`: `"bot"`; \} \| \{ `id?`: `string`; `properties?`: \{ \}; `slug?`: `string`; `type?`: `"dataset"`; \} \| \{ `id?`: `string`; `properties?`: \{ \}; `slug?`: `string`; `type?`: `"file"`; \} \| \{ `id?`: `string`; `properties?`: \{ \}; `slug?`: `string`; `type?`: `"secret"`; \} \| \{ `id?`: `string`; `properties?`: \{ \}; `slug?`: `string`; `type?`: `"skillset"`; \} \| \{ `id?`: `string`; `properties?`: \{ \}; `slug?`: `string`; `type?`: `"widgetIntegration"`; \} \| \{ `id?`: `string`; `properties?`: \{ \}; `slug?`: `string`; `type?`: `"sitemapIntegration"`; \} \| \{ `id?`: `string`; `properties?`: \{ \}; `slug?`: `string`; `type?`: `"slackIntegration"`; \} \| \{ `id?`: `string`; `properties?`: \{ \}; `slug?`: `string`; `type?`: `"discordIntegration"`; \} \| \{ `id?`: `string`; `properties?`: \{ \}; `slug?`: `string`; `type?`: `"telegramIntegration"`; \} \| \{ `id?`: `string`; `properties?`: \{ \}; `slug?`: `string`; `type?`: `"whatsappIntegration"`; \} \| \{ `id?`: `string`; `properties?`: \{ \}; `slug?`: `string`; `type?`: `"messengerIntegration"`; \} \| \{ `id?`: `string`; `properties?`: \{ \}; `slug?`: `string`; `type?`: `"notionIntegration"`; \} \| \{ `id?`: `string`; `properties?`: \{ \}; `slug?`: `string`; `type?`: `"emailIntegration"`; \} \| \{ `id?`: `string`; `properties?`: \{ \}; `slug?`: `string`; `type?`: `"triggerIntegration"`; \} \| \{ `id?`: `string`; `properties?`: \{ \}; `slug?`: `string`; `type?`: `"supportIntegration"`; \} \| \{ `id?`: `string`; `properties?`: \{ \}; `slug?`: `string`; `type?`: `"extractIntegration"`; \} \| \{ `id?`: `string`; `properties?`: \{ \}; `slug?`: `string`; `type?`: `"mcpserverIntegration"`; \} \| \{ `id?`: `string`; `properties?`: \{ \}; `slug?`: `string`; `type?`: `"twilioIntegration"`; \})[]; `version?`: `1`; \}

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`Solution`\>

***

### save()

> `static` **save**(`name`, `solution`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`void`\>

Defined in: [packages/cli/src/solution/index.js:1549](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/cli/src/solution/index.js#L1549)

Saves a solution to a file.

#### Parameters

##### name

`string`

##### solution

`Solution`

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`void`\>
