[**@chatbotkit/cli**](../../README.md)

***

[@chatbotkit/cli](../../modules.md) / [solution](../README.md) / Solution

# Class: Solution

Defined in: [packages/cli/src/solution/index.js:1004](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/cli/src/solution/index.js#L1004)

Represents a solution.

## Constructors

### Constructor

> **new Solution**(`config`): `Solution`

Defined in: [packages/cli/src/solution/index.js:1008](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/cli/src/solution/index.js#L1008)

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

Defined in: [packages/cli/src/solution/index.js:1015](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/cli/src/solution/index.js#L1015)

##### Returns

`ChatBotKit`

***

### blueprint

#### Get Signature

> **get** **blueprint**(): `object`

Defined in: [packages/cli/src/solution/index.js:1093](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/cli/src/solution/index.js#L1093)

##### Returns

`object`

***

### blueprints

#### Get Signature

> **get** **blueprints**(): [`BlueprintResource`](BlueprintResource.md)[]

Defined in: [packages/cli/src/solution/index.js:1084](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/cli/src/solution/index.js#L1084)

##### Returns

[`BlueprintResource`](BlueprintResource.md)[]

***

### bot

#### Get Signature

> **get** **bot**(): `object`

Defined in: [packages/cli/src/solution/index.js:1109](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/cli/src/solution/index.js#L1109)

##### Returns

`object`

***

### bots

#### Get Signature

> **get** **bots**(): [`BotResource`](BotResource.md)[]

Defined in: [packages/cli/src/solution/index.js:1100](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/cli/src/solution/index.js#L1100)

##### Returns

[`BotResource`](BotResource.md)[]

***

### dataset

#### Get Signature

> **get** **dataset**(): `object`

Defined in: [packages/cli/src/solution/index.js:1125](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/cli/src/solution/index.js#L1125)

##### Returns

`object`

***

### datasets

#### Get Signature

> **get** **datasets**(): [`DatasetResource`](DatasetResource.md)[]

Defined in: [packages/cli/src/solution/index.js:1116](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/cli/src/solution/index.js#L1116)

##### Returns

[`DatasetResource`](DatasetResource.md)[]

***

### discordIntegration

#### Get Signature

> **get** **discordIntegration**(): `object`

Defined in: [packages/cli/src/solution/index.js:1245](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/cli/src/solution/index.js#L1245)

##### Returns

`object`

***

### discordIntegrations

#### Get Signature

> **get** **discordIntegrations**(): [`DiscordIntegrationResource`](DiscordIntegrationResource.md)[]

Defined in: [packages/cli/src/solution/index.js:1234](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/cli/src/solution/index.js#L1234)

##### Returns

[`DiscordIntegrationResource`](DiscordIntegrationResource.md)[]

***

### emailIntegration

#### Get Signature

> **get** **emailIntegration**(): `object`

Defined in: [packages/cli/src/solution/index.js:1335](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/cli/src/solution/index.js#L1335)

##### Returns

`object`

***

### emailIntegrations

#### Get Signature

> **get** **emailIntegrations**(): [`EmailIntegrationResource`](EmailIntegrationResource.md)[]

Defined in: [packages/cli/src/solution/index.js:1324](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/cli/src/solution/index.js#L1324)

##### Returns

[`EmailIntegrationResource`](EmailIntegrationResource.md)[]

***

### extractIntegration

#### Get Signature

> **get** **extractIntegration**(): `object`

Defined in: [packages/cli/src/solution/index.js:1389](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/cli/src/solution/index.js#L1389)

##### Returns

`object`

***

### extractIntegrations

#### Get Signature

> **get** **extractIntegrations**(): [`ExtractIntegrationResource`](ExtractIntegrationResource.md)[]

Defined in: [packages/cli/src/solution/index.js:1378](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/cli/src/solution/index.js#L1378)

##### Returns

[`ExtractIntegrationResource`](ExtractIntegrationResource.md)[]

***

### file

#### Get Signature

> **get** **file**(): `object`

Defined in: [packages/cli/src/solution/index.js:1141](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/cli/src/solution/index.js#L1141)

##### Returns

`object`

***

### files

#### Get Signature

> **get** **files**(): [`FileResource`](FileResource.md)[]

Defined in: [packages/cli/src/solution/index.js:1132](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/cli/src/solution/index.js#L1132)

##### Returns

[`FileResource`](FileResource.md)[]

***

### mcpserverIntegration

#### Get Signature

> **get** **mcpserverIntegration**(): `object`

Defined in: [packages/cli/src/solution/index.js:1407](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/cli/src/solution/index.js#L1407)

##### Returns

`object`

***

### mcpserverIntegrations

#### Get Signature

> **get** **mcpserverIntegrations**(): [`McpServerIntegrationResource`](McpServerIntegrationResource.md)[]

Defined in: [packages/cli/src/solution/index.js:1396](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/cli/src/solution/index.js#L1396)

##### Returns

[`McpServerIntegrationResource`](McpServerIntegrationResource.md)[]

***

### messengerIntegration

#### Get Signature

> **get** **messengerIntegration**(): `object`

Defined in: [packages/cli/src/solution/index.js:1299](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/cli/src/solution/index.js#L1299)

##### Returns

`object`

***

### messengerIntegrations

#### Get Signature

> **get** **messengerIntegrations**(): [`MessengerIntegrationResource`](MessengerIntegrationResource.md)[]

Defined in: [packages/cli/src/solution/index.js:1288](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/cli/src/solution/index.js#L1288)

##### Returns

[`MessengerIntegrationResource`](MessengerIntegrationResource.md)[]

***

### notionIntegration

#### Get Signature

> **get** **notionIntegration**(): `object`

Defined in: [packages/cli/src/solution/index.js:1317](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/cli/src/solution/index.js#L1317)

##### Returns

`object`

***

### notionIntegrations

#### Get Signature

> **get** **notionIntegrations**(): [`NotionIntegrationResource`](NotionIntegrationResource.md)[]

Defined in: [packages/cli/src/solution/index.js:1306](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/cli/src/solution/index.js#L1306)

##### Returns

[`NotionIntegrationResource`](NotionIntegrationResource.md)[]

***

### resources

#### Get Signature

> **get** **resources**(): ([`BlueprintResource`](BlueprintResource.md) \| [`BotResource`](BotResource.md) \| [`DatasetResource`](DatasetResource.md) \| [`FileResource`](FileResource.md) \| [`SecretResource`](SecretResource.md) \| [`SkillsetResource`](SkillsetResource.md) \| [`WidgetIntegrationResource`](WidgetIntegrationResource.md) \| [`SitemapIntegrationResource`](SitemapIntegrationResource.md) \| [`SlackIntegrationResource`](SlackIntegrationResource.md) \| [`DiscordIntegrationResource`](DiscordIntegrationResource.md) \| [`TelegramIntegrationResource`](TelegramIntegrationResource.md) \| [`WhatsAppIntegrationResource`](WhatsAppIntegrationResource.md) \| [`MessengerIntegrationResource`](MessengerIntegrationResource.md) \| [`NotionIntegrationResource`](NotionIntegrationResource.md) \| [`EmailIntegrationResource`](EmailIntegrationResource.md) \| [`TriggerIntegrationResource`](TriggerIntegrationResource.md) \| [`SupportIntegrationResource`](SupportIntegrationResource.md) \| [`ExtractIntegrationResource`](ExtractIntegrationResource.md) \| [`McpServerIntegrationResource`](McpServerIntegrationResource.md) \| [`TwilioIntegrationResource`](TwilioIntegrationResource.md))[]

Defined in: [packages/cli/src/solution/index.js:1029](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/cli/src/solution/index.js#L1029)

Get the resources.

##### Returns

([`BlueprintResource`](BlueprintResource.md) \| [`BotResource`](BotResource.md) \| [`DatasetResource`](DatasetResource.md) \| [`FileResource`](FileResource.md) \| [`SecretResource`](SecretResource.md) \| [`SkillsetResource`](SkillsetResource.md) \| [`WidgetIntegrationResource`](WidgetIntegrationResource.md) \| [`SitemapIntegrationResource`](SitemapIntegrationResource.md) \| [`SlackIntegrationResource`](SlackIntegrationResource.md) \| [`DiscordIntegrationResource`](DiscordIntegrationResource.md) \| [`TelegramIntegrationResource`](TelegramIntegrationResource.md) \| [`WhatsAppIntegrationResource`](WhatsAppIntegrationResource.md) \| [`MessengerIntegrationResource`](MessengerIntegrationResource.md) \| [`NotionIntegrationResource`](NotionIntegrationResource.md) \| [`EmailIntegrationResource`](EmailIntegrationResource.md) \| [`TriggerIntegrationResource`](TriggerIntegrationResource.md) \| [`SupportIntegrationResource`](SupportIntegrationResource.md) \| [`ExtractIntegrationResource`](ExtractIntegrationResource.md) \| [`McpServerIntegrationResource`](McpServerIntegrationResource.md) \| [`TwilioIntegrationResource`](TwilioIntegrationResource.md))[]

***

### secret

#### Get Signature

> **get** **secret**(): `object`

Defined in: [packages/cli/src/solution/index.js:1157](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/cli/src/solution/index.js#L1157)

##### Returns

`object`

***

### secrets

#### Get Signature

> **get** **secrets**(): [`SecretResource`](SecretResource.md)[]

Defined in: [packages/cli/src/solution/index.js:1148](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/cli/src/solution/index.js#L1148)

##### Returns

[`SecretResource`](SecretResource.md)[]

***

### sitemapIntegration

#### Get Signature

> **get** **sitemapIntegration**(): `object`

Defined in: [packages/cli/src/solution/index.js:1209](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/cli/src/solution/index.js#L1209)

##### Returns

`object`

***

### sitemapIntegrations

#### Get Signature

> **get** **sitemapIntegrations**(): [`SitemapIntegrationResource`](SitemapIntegrationResource.md)[]

Defined in: [packages/cli/src/solution/index.js:1198](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/cli/src/solution/index.js#L1198)

##### Returns

[`SitemapIntegrationResource`](SitemapIntegrationResource.md)[]

***

### skillset

#### Get Signature

> **get** **skillset**(): `object`

Defined in: [packages/cli/src/solution/index.js:1173](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/cli/src/solution/index.js#L1173)

##### Returns

`object`

***

### skillsets

#### Get Signature

> **get** **skillsets**(): [`SkillsetResource`](SkillsetResource.md)[]

Defined in: [packages/cli/src/solution/index.js:1164](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/cli/src/solution/index.js#L1164)

##### Returns

[`SkillsetResource`](SkillsetResource.md)[]

***

### slackIntegration

#### Get Signature

> **get** **slackIntegration**(): `object`

Defined in: [packages/cli/src/solution/index.js:1227](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/cli/src/solution/index.js#L1227)

##### Returns

`object`

***

### slackIntegrations

#### Get Signature

> **get** **slackIntegrations**(): [`SlackIntegrationResource`](SlackIntegrationResource.md)[]

Defined in: [packages/cli/src/solution/index.js:1216](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/cli/src/solution/index.js#L1216)

##### Returns

[`SlackIntegrationResource`](SlackIntegrationResource.md)[]

***

### supportIntegration

#### Get Signature

> **get** **supportIntegration**(): `object`

Defined in: [packages/cli/src/solution/index.js:1371](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/cli/src/solution/index.js#L1371)

##### Returns

`object`

***

### supportIntegrations

#### Get Signature

> **get** **supportIntegrations**(): [`SupportIntegrationResource`](SupportIntegrationResource.md)[]

Defined in: [packages/cli/src/solution/index.js:1360](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/cli/src/solution/index.js#L1360)

##### Returns

[`SupportIntegrationResource`](SupportIntegrationResource.md)[]

***

### telegramIntegration

#### Get Signature

> **get** **telegramIntegration**(): `object`

Defined in: [packages/cli/src/solution/index.js:1263](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/cli/src/solution/index.js#L1263)

##### Returns

`object`

***

### telegramIntegrations

#### Get Signature

> **get** **telegramIntegrations**(): [`TelegramIntegrationResource`](TelegramIntegrationResource.md)[]

Defined in: [packages/cli/src/solution/index.js:1252](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/cli/src/solution/index.js#L1252)

##### Returns

[`TelegramIntegrationResource`](TelegramIntegrationResource.md)[]

***

### triggerIntegration

#### Get Signature

> **get** **triggerIntegration**(): `object`

Defined in: [packages/cli/src/solution/index.js:1353](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/cli/src/solution/index.js#L1353)

##### Returns

`object`

***

### triggerIntegrations

#### Get Signature

> **get** **triggerIntegrations**(): [`TriggerIntegrationResource`](TriggerIntegrationResource.md)[]

Defined in: [packages/cli/src/solution/index.js:1342](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/cli/src/solution/index.js#L1342)

##### Returns

[`TriggerIntegrationResource`](TriggerIntegrationResource.md)[]

***

### twilioIntegration

#### Get Signature

> **get** **twilioIntegration**(): `object`

Defined in: [packages/cli/src/solution/index.js:1425](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/cli/src/solution/index.js#L1425)

##### Returns

`object`

***

### twilioIntegrations

#### Get Signature

> **get** **twilioIntegrations**(): [`TwilioIntegrationResource`](TwilioIntegrationResource.md)[]

Defined in: [packages/cli/src/solution/index.js:1414](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/cli/src/solution/index.js#L1414)

##### Returns

[`TwilioIntegrationResource`](TwilioIntegrationResource.md)[]

***

### whatsappIntegration

#### Get Signature

> **get** **whatsappIntegration**(): `object`

Defined in: [packages/cli/src/solution/index.js:1281](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/cli/src/solution/index.js#L1281)

##### Returns

`object`

***

### whatsappIntegrations

#### Get Signature

> **get** **whatsappIntegrations**(): [`WhatsAppIntegrationResource`](WhatsAppIntegrationResource.md)[]

Defined in: [packages/cli/src/solution/index.js:1270](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/cli/src/solution/index.js#L1270)

##### Returns

[`WhatsAppIntegrationResource`](WhatsAppIntegrationResource.md)[]

***

### widgetIntegration

#### Get Signature

> **get** **widgetIntegration**(): `object`

Defined in: [packages/cli/src/solution/index.js:1191](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/cli/src/solution/index.js#L1191)

##### Returns

`object`

***

### widgetIntegrations

#### Get Signature

> **get** **widgetIntegrations**(): [`WidgetIntegrationResource`](WidgetIntegrationResource.md)[]

Defined in: [packages/cli/src/solution/index.js:1180](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/cli/src/solution/index.js#L1180)

##### Returns

[`WidgetIntegrationResource`](WidgetIntegrationResource.md)[]

## Methods

### sync()

> **sync**(): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`void`\>

Defined in: [packages/cli/src/solution/index.js:1434](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/cli/src/solution/index.js#L1434)

Sync the solution.

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`void`\>

***

### create()

> `static` **create**(`name`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`void`\>

Defined in: [packages/cli/src/solution/index.js:1460](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/cli/src/solution/index.js#L1460)

Creates a new solution.

#### Parameters

##### name

`string`

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`void`\>

***

### delete()

> `static` **delete**(`name`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`void`\>

Defined in: [packages/cli/src/solution/index.js:1485](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/cli/src/solution/index.js#L1485)

Deletes a solution.

#### Parameters

##### name

`string`

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`void`\>

***

### list()

> `static` **list**(): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`string`[]\>

Defined in: [packages/cli/src/solution/index.js:1444](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/cli/src/solution/index.js#L1444)

Lists solutions.

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`string`[]\>

***

### load()

> `static` **load**(`config`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`Solution`\>

Defined in: [packages/cli/src/solution/index.js:1502](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/cli/src/solution/index.js#L1502)

Loads a solution from a configuration object or a file.

#### Parameters

##### config

`string` | \{ `resources?`: (\{ `id?`: `string`; `properties?`: \{ \}; `slug?`: `string`; `type?`: `"blueprint"`; \} \| \{ `id?`: `string`; `properties?`: \{ \}; `slug?`: `string`; `type?`: `"bot"`; \} \| \{ `id?`: `string`; `properties?`: \{ \}; `slug?`: `string`; `type?`: `"dataset"`; \} \| \{ `id?`: `string`; `properties?`: \{ \}; `slug?`: `string`; `type?`: `"file"`; \} \| \{ `id?`: `string`; `properties?`: \{ \}; `slug?`: `string`; `type?`: `"secret"`; \} \| \{ `id?`: `string`; `properties?`: \{ \}; `slug?`: `string`; `type?`: `"skillset"`; \} \| \{ `id?`: `string`; `properties?`: \{ \}; `slug?`: `string`; `type?`: `"widgetIntegration"`; \} \| \{ `id?`: `string`; `properties?`: \{ \}; `slug?`: `string`; `type?`: `"sitemapIntegration"`; \} \| \{ `id?`: `string`; `properties?`: \{ \}; `slug?`: `string`; `type?`: `"slackIntegration"`; \} \| \{ `id?`: `string`; `properties?`: \{ \}; `slug?`: `string`; `type?`: `"discordIntegration"`; \} \| \{ `id?`: `string`; `properties?`: \{ \}; `slug?`: `string`; `type?`: `"telegramIntegration"`; \} \| \{ `id?`: `string`; `properties?`: \{ \}; `slug?`: `string`; `type?`: `"whatsappIntegration"`; \} \| \{ `id?`: `string`; `properties?`: \{ \}; `slug?`: `string`; `type?`: `"messengerIntegration"`; \} \| \{ `id?`: `string`; `properties?`: \{ \}; `slug?`: `string`; `type?`: `"notionIntegration"`; \} \| \{ `id?`: `string`; `properties?`: \{ \}; `slug?`: `string`; `type?`: `"emailIntegration"`; \} \| \{ `id?`: `string`; `properties?`: \{ \}; `slug?`: `string`; `type?`: `"triggerIntegration"`; \} \| \{ `id?`: `string`; `properties?`: \{ \}; `slug?`: `string`; `type?`: `"supportIntegration"`; \} \| \{ `id?`: `string`; `properties?`: \{ \}; `slug?`: `string`; `type?`: `"extractIntegration"`; \} \| \{ `id?`: `string`; `properties?`: \{ \}; `slug?`: `string`; `type?`: `"mcpserverIntegration"`; \} \| \{ `id?`: `string`; `properties?`: \{ \}; `slug?`: `string`; `type?`: `"twilioIntegration"`; \})[]; `version?`: `1`; \}

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`Solution`\>

***

### save()

> `static` **save**(`name`, `solution`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`void`\>

Defined in: [packages/cli/src/solution/index.js:1541](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/cli/src/solution/index.js#L1541)

Saves a solution to a file.

#### Parameters

##### name

`string`

##### solution

`Solution`

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`void`\>
