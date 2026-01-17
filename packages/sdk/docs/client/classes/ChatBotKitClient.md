[**@chatbotkit/sdk**](../../README.md)

***

[@chatbotkit/sdk](../../modules.md) / [client](../README.md) / ChatBotKitClient

# Class: ChatBotKitClient

Defined in: [client.js:294](https://github.com/chatbotkit/cbk-platform/blob/main/sdks/node/packages/sdk/src/client.js#L294)

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
- [`InstagramIntegrationClient`](../../integration/instagram/classes/InstagramIntegrationClient.md)
- [`McpServerIntegrationClient`](../../integration/mcpserver/classes/McpServerIntegrationClient.md)
- [`MessengerIntegrationClient`](../../integration/messenger/classes/MessengerIntegrationClient.md)
- [`NotionIntegrationClient`](../../integration/notion/classes/NotionIntegrationClient.md)
- [`SitemapIntegrationClient`](../../integration/sitemap/classes/SitemapIntegrationClient.md)
- [`SlackIntegrationClient`](../../integration/slack/classes/SlackIntegrationClient.md)
- [`SupportIntegrationClient`](../../integration/support/classes/SupportIntegrationClient.md)
- [`TelegramIntegrationClient`](../../integration/telegram/classes/TelegramIntegrationClient.md)
- [`TriggerIntegrationClient`](../../integration/trigger/classes/TriggerIntegrationClient.md)
- [`TwilioIntegrationClient`](../../integration/twilio/classes/TwilioIntegrationClient.md)
- [`WhatsAppIntegrationClient`](../../integration/whatsapp/classes/WhatsAppIntegrationClient.md)
- [`WidgetIntegrationClient`](../../integration/widget/classes/WidgetIntegrationClient.md)
- [`MagicClient`](../../magic/classes/MagicClient.md)
- [`MemoryClient`](../../memory/classes/MemoryClient.md)
- [`PartnerClient`](../../partner/classes/PartnerClient.md)
- [`PartnerUserClient`](../../partner/user/classes/PartnerUserClient.md)
- [`PartnerUserTokenClient`](../../partner/user/token/classes/PartnerUserTokenClient.md)
- [`PlatformAbilityClient`](../../platform/ability/classes/PlatformAbilityClient.md)
- [`PlatformActionClient`](../../platform/action/classes/PlatformActionClient.md)
- [`PlatformDocClient`](../../platform/doc/classes/PlatformDocClient.md)
- [`PlatformExampleClient`](../../platform/example/classes/PlatformExampleClient.md)
- [`PlatformClient`](../../platform/classes/PlatformClient.md)
- [`PlatformManualClient`](../../platform/manual/classes/PlatformManualClient.md)
- [`PlatformModelClient`](../../platform/model/classes/PlatformModelClient.md)
- [`PlatformReportClient`](../../platform/report/classes/PlatformReportClient.md)
- [`PlatformSecretClient`](../../platform/secret/classes/PlatformSecretClient.md)
- [`PlatformTutorialClient`](../../platform/tutorial/classes/PlatformTutorialClient.md)
- [`PolicyClient`](../../policy/classes/PolicyClient.md)
- [`PortalClient`](../../portal/classes/PortalClient.md)
- [`ReportClient`](../../report/classes/ReportClient.md)
- [`SecretClient`](../../secret/classes/SecretClient.md)
- [`SkillsetAbilityClient`](../../skillset/ability/classes/SkillsetAbilityClient.md)
- [`SkillsetClient`](../../skillset/classes/SkillsetClient.md)
- [`SpaceClient`](../../space/classes/SpaceClient.md)
- [`TaskClient`](../../task/classes/TaskClient.md)
- [`TeamClient`](../../team/classes/TeamClient.md)
- [`UsageClient`](../../usage/classes/UsageClient.md)
- [`UsageSeriesClient`](../../usage/series/classes/UsageSeriesClient.md)

## Constructors

### Constructor

> **new ChatBotKitClient**(`options`): `ChatBotKitClient`

Defined in: [client.js:337](https://github.com/chatbotkit/cbk-platform/blob/main/sdks/node/packages/sdk/src/client.js#L337)

#### Parameters

##### options

[`ChatBotKitClientOptions`](../interfaces/ChatBotKitClientOptions.md)

#### Returns

`ChatBotKitClient`

## Methods

### extend()

> **extend**(`extensionOptions`): `ChatBotKitClient`

Defined in: [client.js:382](https://github.com/chatbotkit/cbk-platform/blob/main/sdks/node/packages/sdk/src/client.js#L382)

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
