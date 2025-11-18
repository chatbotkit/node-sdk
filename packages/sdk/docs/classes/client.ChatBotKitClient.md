[@chatbotkit/sdk](../README.md) / [Modules](../modules.md) / [client](../modules/client.md) / ChatBotKitClient

# Class: ChatBotKitClient

[client](../modules/client.md).ChatBotKitClient

## Hierarchy

- **`ChatBotKitClient`**

  ↳ [`BlueprintClient`](blueprint.BlueprintClient.md)

  ↳ [`BotClient`](bot.BotClient.md)

  ↳ [`BotSessionClient`](bot_session.BotSessionClient.md)

  ↳ [`ChannelClient`](channel.ChannelClient.md)

  ↳ [`ConversationClient`](contact_conversation.ConversationClient.md)

  ↳ [`ContactClient`](contact.ContactClient.md)

  ↳ [`SecretClient`](contact_secret.SecretClient.md)

  ↳ [`SpaceClient`](contact_space.SpaceClient.md)

  ↳ [`TaskClient`](contact_task.TaskClient.md)

  ↳ [`ConversationAttachmentClient`](conversation_attachment.ConversationAttachmentClient.md)

  ↳ [`ConversationClient`](conversation.ConversationClient.md)

  ↳ [`ConversationMessageClient`](conversation_message.ConversationMessageClient.md)

  ↳ [`ConversationSessionClient`](conversation_session.ConversationSessionClient.md)

  ↳ [`DatasetFileClient`](dataset_file.DatasetFileClient.md)

  ↳ [`DatasetClient`](dataset.DatasetClient.md)

  ↳ [`DatasetRecordClient`](dataset_record.DatasetRecordClient.md)

  ↳ [`FileClient`](file.FileClient.md)

  ↳ [`GraphqlClient`](graphql.GraphqlClient.md)

  ↳ [`DiscordIntegrationClient`](integration_discord.DiscordIntegrationClient.md)

  ↳ [`EmailIntegrationClient`](integration_email.EmailIntegrationClient.md)

  ↳ [`ExtractIntegrationClient`](integration_extract.ExtractIntegrationClient.md)

  ↳ [`McpServerIntegrationClient`](integration_mcpserver.McpServerIntegrationClient.md)

  ↳ [`MessengerIntegrationClient`](integration_messenger.MessengerIntegrationClient.md)

  ↳ [`NotionIntegrationClient`](integration_notion.NotionIntegrationClient.md)

  ↳ [`SitemapIntegrationClient`](integration_sitemap.SitemapIntegrationClient.md)

  ↳ [`SlackIntegrationClient`](integration_slack.SlackIntegrationClient.md)

  ↳ [`SupportIntegrationClient`](integration_support.SupportIntegrationClient.md)

  ↳ [`TelegramIntegrationClient`](integration_telegram.TelegramIntegrationClient.md)

  ↳ [`TriggerIntegrationClient`](integration_trigger.TriggerIntegrationClient.md)

  ↳ [`TwilioIntegrationClient`](integration_twilio.TwilioIntegrationClient.md)

  ↳ [`WhatsAppIntegrationClient`](integration_whatsapp.WhatsAppIntegrationClient.md)

  ↳ [`WidgetIntegrationClient`](integration_widget.WidgetIntegrationClient.md)

  ↳ [`MagicClient`](magic.MagicClient.md)

  ↳ [`MemoryClient`](memory.MemoryClient.md)

  ↳ [`PartnerClient`](partner.PartnerClient.md)

  ↳ [`PartnerUserClient`](partner_user.PartnerUserClient.md)

  ↳ [`PartnerUserTokenClient`](partner_user_token.PartnerUserTokenClient.md)

  ↳ [`PlatformAbilityClient`](platform_ability.PlatformAbilityClient.md)

  ↳ [`PlatformActionClient`](platform_action.PlatformActionClient.md)

  ↳ [`PlatformContentDocClient`](platform_content_doc.PlatformContentDocClient.md)

  ↳ [`PlatformContentClient`](platform_content.PlatformContentClient.md)

  ↳ [`PlatformContentManualClient`](platform_content_manual.PlatformContentManualClient.md)

  ↳ [`PlatformExampleClient`](platform_example.PlatformExampleClient.md)

  ↳ [`PlatformClient`](platform.PlatformClient.md)

  ↳ [`PlatformModelClient`](platform_model.PlatformModelClient.md)

  ↳ [`PlatformReportClient`](platform_report.PlatformReportClient.md)

  ↳ [`PlatformSecretClient`](platform_secret.PlatformSecretClient.md)

  ↳ [`PolicyClient`](policy.PolicyClient.md)

  ↳ [`PortalClient`](portal.PortalClient.md)

  ↳ [`ReportClient`](report.ReportClient.md)

  ↳ [`SecretClient`](secret.SecretClient.md)

  ↳ [`SkillsetAbilityClient`](skillset_ability.SkillsetAbilityClient.md)

  ↳ [`SkillsetClient`](skillset.SkillsetClient.md)

  ↳ [`SpaceClient`](space.SpaceClient.md)

  ↳ [`TaskClient`](task.TaskClient.md)

  ↳ [`TeamClient`](team.TeamClient.md)

  ↳ [`UsageClient`](usage.UsageClient.md)

  ↳ [`UsageSeriesClient`](usage_series.UsageSeriesClient.md)

## Table of contents

### Constructors

- [constructor](client.ChatBotKitClient.md#constructor)

### Methods

- [extend](client.ChatBotKitClient.md#extend)

## Constructors

### constructor

• **new ChatBotKitClient**(`options`): [`ChatBotKitClient`](client.ChatBotKitClient.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`ChatBotKitClientOptions`](../interfaces/client.ChatBotKitClientOptions.md) |

#### Returns

[`ChatBotKitClient`](client.ChatBotKitClient.md)

#### Defined in

[client.js:337](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/client.js#L337)

## Methods

### extend

▸ **extend**(`extensionOptions`): [`ChatBotKitClient`](client.ChatBotKitClient.md)

Creates a new instance of the same client type with extended options.

This is useful when you need to create a client with modified configuration
(e.g., different endpoint, token, or headers) without affecting the original.

Note: This method creates a completely new instance rather than cloning,
which is necessary because private class fields cannot be copied.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `extensionOptions` | [`Partial`]( https://www.typescriptlang.org/docs/handbook/utility-types.html#partialtype )\<[`ChatBotKitClientOptions`](../interfaces/client.ChatBotKitClientOptions.md)\> | Options to merge with current options |

#### Returns

[`ChatBotKitClient`](client.ChatBotKitClient.md)

A new instance of the same client class with extended options

#### Defined in

[client.js:382](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/client.js#L382)
