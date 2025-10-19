[@chatbotkit/sdk](../README.md) / [Modules](../modules.md) / [client](../modules/client.md) / ChatBotKitClient

# Class: ChatBotKitClient

[client](../modules/client.md).ChatBotKitClient

## Hierarchy

- **`ChatBotKitClient`**

  ↳ [`BlueprintClient`](blueprint.BlueprintClient.md)

  ↳ [`BotClient`](bot.BotClient.md)

  ↳ [`BotSessionClient`](bot_session.BotSessionClient.md)

  ↳ [`ConversationClient`](contact_conversation.ConversationClient.md)

  ↳ [`ContactClient`](contact.ContactClient.md)

  ↳ [`SecretClient`](contact_secret.SecretClient.md)

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

  ↳ [`MessengerIntegrationClient`](integration_messenger.MessengerIntegrationClient.md)

  ↳ [`NotionIntegrationClient`](integration_notion.NotionIntegrationClient.md)

  ↳ [`SitemapIntegrationClient`](integration_sitemap.SitemapIntegrationClient.md)

  ↳ [`SlackIntegrationClient`](integration_slack.SlackIntegrationClient.md)

  ↳ [`SupportIntegrationClient`](integration_support.SupportIntegrationClient.md)

  ↳ [`TelegramIntegrationClient`](integration_telegram.TelegramIntegrationClient.md)

  ↳ [`TriggerIntegrationClient`](integration_trigger.TriggerIntegrationClient.md)

  ↳ [`WhatsAppIntegrationClient`](integration_whatsapp.WhatsAppIntegrationClient.md)

  ↳ [`WidgetIntegrationClient`](integration_widget.WidgetIntegrationClient.md)

  ↳ [`MagicClient`](magic.MagicClient.md)

  ↳ [`PartnerClient`](partner.PartnerClient.md)

  ↳ [`PartnerUserClient`](partner_user.PartnerUserClient.md)

  ↳ [`PartnerUserTokenClient`](partner_user_token.PartnerUserTokenClient.md)

  ↳ [`PlatformAbilityClient`](platform_ability.PlatformAbilityClient.md)

  ↳ [`PlatformClient`](platform.PlatformClient.md)

  ↳ [`PlatformModelClient`](platform_model.PlatformModelClient.md)

  ↳ [`PlatformSecretClient`](platform_secret.PlatformSecretClient.md)

  ↳ [`SecretClient`](secret.SecretClient.md)

  ↳ [`SkillsetAbilityClient`](skillset_ability.SkillsetAbilityClient.md)

  ↳ [`SkillsetClient`](skillset.SkillsetClient.md)

  ↳ [`TaskClient`](task.TaskClient.md)

  ↳ [`UsageClient`](usage.UsageClient.md)

  ↳ [`UsageSeriesClient`](usage_series.UsageSeriesClient.md)

## Table of contents

### Constructors

- [constructor](client.ChatBotKitClient.md#constructor)

### Methods

- [clientFetch](client.ChatBotKitClient.md#clientfetch)

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

[client.js:277](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/client.js#L277)

## Methods

### clientFetch

▸ **clientFetch**\<`T`, `U`\>(`path`, `options?`): [`ResponsePromise`](client.ResponsePromise.md)\<`T`, `U`\>

#### Type parameters

| Name |
| :------ |
| `T` |
| `U` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | `string` |
| `options?` | `Object` |
| `options.buffer?` | [`ArrayBuffer`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer ) |
| `options.endpoint?` | `string` |
| `options.external?` | `boolean` |
| `options.fetchFn?` | [`FetchFunction`](../modules/client.md#fetchfunction) |
| `options.file?` | `Object` |
| `options.file.data` | `string` \| [`ArrayBuffer`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer ) |
| `options.file.name?` | `string` |
| `options.file.type?` | `string` |
| `options.headers?` | [`Record`]( https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type )\<`string`, `any`\> |
| `options.method?` | `string` |
| `options.query?` | [`Record`]( https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type )\<`string`, `any`\> |
| `options.record?` | [`Record`]( https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type )\<`string`, `any`\> |
| `options.retries?` | `number` |
| `options.retryDelay?` | `number` |
| `options.retryTimeout?` | `boolean` |
| `options.timeout?` | `number` |

#### Returns

[`ResponsePromise`](client.ResponsePromise.md)\<`T`, `U`\>

#### Defined in

[client.js:331](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/client.js#L331)
