[@chatbotkit/sdk](../README.md) / [Modules](../modules.md) / [client](../modules/client.md) / ChatBotKitClient

# Class: ChatBotKitClient

[client](../modules/client.md).ChatBotKitClient

## Hierarchy

- **`ChatBotKitClient`**

  ↳ [`BotClient`](bot.BotClient.md)

  ↳ [`BotSessionClient`](bot_session.BotSessionClient.md)

  ↳ [`ConversationClient`](conversation.ConversationClient.md)

  ↳ [`ConversationMessageClient`](conversation_message.ConversationMessageClient.md)

  ↳ [`ConversationSessionClient`](conversation_session.ConversationSessionClient.md)

  ↳ [`DatasetFileClient`](dataset_file.DatasetFileClient.md)

  ↳ [`DatasetClient`](dataset.DatasetClient.md)

  ↳ [`DatasetRecordClient`](dataset_record.DatasetRecordClient.md)

  ↳ [`FileClient`](file.FileClient.md)

  ↳ [`SitemapIntegrationClient`](integration_sitemap.SitemapIntegrationClient.md)

  ↳ [`WhatsAppIntegrationClient`](integration_whatsapp.WhatsAppIntegrationClient.md)

  ↳ [`MagicClient`](magic.MagicClient.md)

  ↳ [`PartnerClient`](partner.PartnerClient.md)

  ↳ [`PartnerUserClient`](partner_user.PartnerUserClient.md)

  ↳ [`PartnerUserTokenClient`](partner_user_token.PartnerUserTokenClient.md)

  ↳ [`SkillsetAbilityClient`](skillset_ability.SkillsetAbilityClient.md)

  ↳ [`SkillsetClient`](skillset.SkillsetClient.md)

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
| `options` | [`ChatBotKitClientOptions`](../modules/client.md#chatbotkitclientoptions) |

#### Returns

[`ChatBotKitClient`](client.ChatBotKitClient.md)

#### Defined in

[client.js:188](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/client.js#L188)

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
| `options.data?` | `Record`\<`string`, `any`\> |
| `options.file?` | `Object` |
| `options.file.data` | `string` \| `ArrayBuffer` |
| `options.file.name?` | `string` |
| `options.file.type?` | `string` |
| `options.query?` | `Record`\<`string`, `any`\> |

#### Returns

[`ResponsePromise`](client.ResponsePromise.md)\<`T`, `U`\>

#### Defined in

[client.js:211](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/client.js#L211)
