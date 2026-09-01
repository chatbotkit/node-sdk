[**@chatbotkit/sdk**](../../README.md)

***

[@chatbotkit/sdk](../../modules.md) / [client](../README.md) / ChatBotKitClient

# Class: ChatBotKitClient

Defined in: [client.js:354](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/sdk/src/client.js#L354)

## Extended by

- [`BlueprintClient`](../../blueprint/classes/BlueprintClient.md)
- [`BotClient`](../../bot/classes/BotClient.md)
- [`BotSessionClient`](../../bot/session/classes/BotSessionClient.md)
- [`ChannelClient`](../../channel/classes/ChannelClient.md)
- [`ConversationClient`](../../contact/conversation/classes/ConversationClient.md)
- [`ContactClient`](../../contact/classes/ContactClient.md)
- [`SecretClient`](../../contact/secret/classes/SecretClient.md)
- [`SpaceClient`](../../contact/space/classes/SpaceClient.md)
- [`TaskClient`](../../contact/task/classes/TaskClient.md)
- [`ConversationAttachmentClient`](../../conversation/attachment/classes/ConversationAttachmentClient.md)
- [`ConversationClient`](../../conversation/classes/ConversationClient.md)
- [`ConversationMessageClient`](../../conversation/message/classes/ConversationMessageClient.md)
- [`ConversationSessionClient`](../../conversation/session/classes/ConversationSessionClient.md)
- [`DatasetFileClient`](../../dataset/file/classes/DatasetFileClient.md)
- [`DatasetClient`](../../dataset/classes/DatasetClient.md)
- [`DatasetRecordClient`](../../dataset/record/classes/DatasetRecordClient.md)
- [`EventClient`](../../event/classes/EventClient.md)
- [`EventLogClient`](../../event/log/classes/EventLogClient.md)
- [`FileClient`](../../file/classes/FileClient.md)
- [`GraphqlClient`](../../graphql/classes/GraphqlClient.md)
- [`ChatBotKit`](../../index/classes/ChatBotKit.md)
- [`DiscordIntegrationClient`](../../integration/discord/classes/DiscordIntegrationClient.md)
- [`EmailIntegrationClient`](../../integration/email/classes/EmailIntegrationClient.md)
- [`ExtractIntegrationClient`](../../integration/extract/classes/ExtractIntegrationClient.md)
- [`GooglechatIntegrationClient`](../../integration/googlechat/classes/GooglechatIntegrationClient.md)
- [`InstagramIntegrationClient`](../../integration/instagram/classes/InstagramIntegrationClient.md)
- [`McpServerIntegrationClient`](../../integration/mcpserver/classes/McpServerIntegrationClient.md)
- [`MessengerIntegrationClient`](../../integration/messenger/classes/MessengerIntegrationClient.md)
- [`MicrosoftteamsIntegrationClient`](../../integration/microsoftteams/classes/MicrosoftteamsIntegrationClient.md)
- [`NotionIntegrationClient`](../../integration/notion/classes/NotionIntegrationClient.md)
- [`SitemapIntegrationClient`](../../integration/sitemap/classes/SitemapIntegrationClient.md)
- [`SkillServerIntegrationClient`](../../integration/skillserver/classes/SkillServerIntegrationClient.md)
- [`SlackIntegrationClient`](../../integration/slack/classes/SlackIntegrationClient.md)
- [`SupportIntegrationClient`](../../integration/support/classes/SupportIntegrationClient.md)
- [`TelegramIntegrationClient`](../../integration/telegram/classes/TelegramIntegrationClient.md)
- [`TriggerIntegrationClient`](../../integration/trigger/classes/TriggerIntegrationClient.md)
- [`TwilioIntegrationClient`](../../integration/twilio/classes/TwilioIntegrationClient.md)
- [`WhatsAppIntegrationClient`](../../integration/whatsapp/classes/WhatsAppIntegrationClient.md)
- [`WidgetIntegrationClient`](../../integration/widget/classes/WidgetIntegrationClient.md)
- [`MagicClient`](../../magic/classes/MagicClient.md)
- [`MemoryClient`](../../memory/classes/MemoryClient.md)
- [`PlatformAbilityClient`](../../platform/ability/classes/PlatformAbilityClient.md)
- [`PlatformActionClient`](../../platform/action/classes/PlatformActionClient.md)
- [`PlatformExampleClient`](../../platform/example/classes/PlatformExampleClient.md)
- [`PlatformClient`](../../platform/classes/PlatformClient.md)
- [`PlatformModelClient`](../../platform/model/classes/PlatformModelClient.md)
- [`PlatformReportClient`](../../platform/report/classes/PlatformReportClient.md)
- [`PlatformSecretClient`](../../platform/secret/classes/PlatformSecretClient.md)
- [`PolicyClient`](../../policy/classes/PolicyClient.md)
- [`PortalClient`](../../portal/classes/PortalClient.md)
- [`SecretClient`](../../secret/classes/SecretClient.md)
- [`SkillsetAbilityClient`](../../skillset/ability/classes/SkillsetAbilityClient.md)
- [`SkillsetClient`](../../skillset/classes/SkillsetClient.md)
- [`SpaceClient`](../../space/classes/SpaceClient.md)
- [`SpaceSiteClient`](../../space/site/classes/SpaceSiteClient.md)
- [`SpaceStorageClient`](../../space/storage/classes/SpaceStorageClient.md)
- [`TaskExecutionClient`](../../task/execution/classes/TaskExecutionClient.md)
- [`TaskClient`](../../task/classes/TaskClient.md)
- [`TeamClient`](../../team/classes/TeamClient.md)
- [`UsageClient`](../../usage/classes/UsageClient.md)
- [`UsageSeriesClient`](../../usage/series/classes/UsageSeriesClient.md)
- [`UserContextClient`](../../user/context/classes/UserContextClient.md)
- [`UserClient`](../../user/classes/UserClient.md)
- [`UserSessionClient`](../../user/session/classes/UserSessionClient.md)
- [`UserTokenClient`](../../user/token/classes/UserTokenClient.md)

## Constructors

### Constructor

> **new ChatBotKitClient**(`options`): `ChatBotKitClient`

Defined in: [client.js:397](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/sdk/src/client.js#L397)

#### Parameters

##### options

[`ChatBotKitClientOptions`](../interfaces/ChatBotKitClientOptions.md)

#### Returns

`ChatBotKitClient`

## Methods

### clientProxy()

> **clientProxy**(`path`, `options?`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`Response`](https://developer.mozilla.org/docs/Web/API/Response)\>

Defined in: [client.js:646](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/sdk/src/client.js#L646)

Proxies a request and resolves the upstream `Response`. Successful and
upstream-error responses pass through untouched - streaming, binary and
large bodies are preserved (the body is never read on the success path).
The one exception is a CBK `authorization_required` signal, which is thrown
as an [AuthorizationRequiredError](AuthorizationRequiredError.md) carrying the `url` the user must
visit to authenticate.

#### Parameters

##### path

`string`

##### options?

###### buffer?

[`ArrayBuffer`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer)

###### endpoint?

`string`

###### external?

`boolean`

###### fetchFn?

[`FetchFunction`](../type-aliases/FetchFunction.md)

###### file?

\{ `data`: `string` \| [`ArrayBuffer`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer); `name?`: `string`; `type?`: `string`; \}

###### file.data

`string` \| [`ArrayBuffer`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer)

###### file.name?

`string`

###### file.type?

`string`

###### headers?

[`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `any`\>

###### method?

`string`

###### query?

[`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `any`\>

###### record?

[`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `any`\>

###### retries?

`number`

###### retryDelay?

`number`

###### retryTimeout?

`boolean`

###### timeout?

`number`

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`Response`](https://developer.mozilla.org/docs/Web/API/Response)\>

***

### extend()

> **extend**(`extensionOptions`): `ChatBotKitClient`

Defined in: [client.js:442](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/sdk/src/client.js#L442)

Creates a new instance of the same client type with extended options.

This is useful when you need to create a client with modified configuration
(e.g., different endpoint, token, or headers) without affecting the original.

Note: This method creates a completely new instance rather than cloning,
which is necessary because private class fields cannot be copied.

#### Parameters

##### extensionOptions

[`Partial`](https://www.typescriptlang.org/docs/handbook/utility-types.html#partialtype)\<[`ChatBotKitClientOptions`](../interfaces/ChatBotKitClientOptions.md)\>

Options to merge with current options

#### Returns

`ChatBotKitClient`

A new instance of the same client class with extended options
