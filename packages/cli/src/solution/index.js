import { getRUNAS_USERID, getSECRET } from '../env.js'
import { CommandError } from '../output.js'

import ChatBotKit from '@chatbotkit/sdk'

import fs from 'node:fs/promises'
import path from 'node:path'
import { z } from 'zod'

/**
 * @internal
 * @returns {string}
 */
export function getSolutionFolderPath() {
  const folderPath = path.join('.chatbotkit', 'solutions')

  return folderPath
}

/**
 * @internal
 * @param {string} name
 * @returns {string}
 */
export function getSolutionFileName(name) {
  const fileName =
    name.toLowerCase().replace(/\W/g, '_').replace(/_+/g, '_') + '.json'

  return fileName
}

/**
 * @internal
 * @param {string} name
 * @returns {string}
 */
export function getSolutionFilePath(name) {
  const fileName = getSolutionFileName(name)
  const filePath = path.join(getSolutionFolderPath(), fileName)

  return filePath
}

/**
 * @internal
 * @param {string} name
 * @returns {{ fileName: string, filePath: string }}
 */
export function getSolutionFileNameAndPath(name) {
  const fileName = getSolutionFileName(name)
  const filePath = getSolutionFilePath(name)

  return { fileName, filePath }
}

/**
 * @internal
 * @param {any} value
 * @returns {any}
 */
export function replaceEnvVars(value) {
  if (!value) {
    return value
  }

  if (typeof value === 'string') {
    return value.replace(/\${env\.([A-Z_]+)}/g, (_, name) => {
      const envValue = process.env[name]

      if (envValue === undefined) {
        throw new CommandError(`Environment variable ${name} is not set`)
      }

      return envValue
    })
  }

  if (Array.isArray(value)) {
    return value.map(replaceEnvVars)
  }

  if (typeof value === 'object') {
    return Object.fromEntries(
      Object.entries(value).map(([key, value]) => [key, replaceEnvVars(value)])
    )
  }

  return value
}

/**
 * @template T
 * @typedef {{
 *   [K in keyof T]-?: undefined extends T[K]
 *   ? z.ZodOptional<z.ZodType<Exclude<T[K], undefined>>>
 *   : z.ZodType<T[K]>
 * }} ZodSchemaFor
 */

/**
 * The schema for a basic resource configuration.
 */
export const BasicResourceConfigSchema = z.object({
  slug: z.string().optional(),
  id: z.string().optional(),
})

/**
 * @typedef {{
 *   slug: z.ZodOptional<z.ZodString>,
 *   id: z.ZodOptional<z.ZodString>,
 * }} BasicResourceConfigSchemaFields
 */

/**
 * @template T
 * @template U
 * @typedef {z.ZodObject<BasicResourceConfigSchemaFields & {
 *   type: z.ZodLiteral<T>,
 *   properties: z.ZodObject<ZodSchemaFor<U>>
 * }>} ResourceConfigSchemaFor
 */

/**
 * The schema for a bot resource configuration.
 *
 * @type {ResourceConfigSchemaFor<'bot', import('@chatbotkit/sdk/bot/v1').BotCreateRequest>}
 */
export const BotResourceConfigSchema = BasicResourceConfigSchema.extend({
  type: z.literal('bot'),
  properties: z.object({
    name: z.string().optional(),
    description: z.string().optional(),
    meta: z.record(z.unknown()).optional(),
    model: z.string().optional(),
    backstory: z.string().optional(),
    datasetId: z.string().optional(),
    skillsetId: z.string().optional(),
    moderation: z.boolean().optional(),
    privacy: z.boolean().optional(),
    blueprintId: z.string().optional(),
    visibility: z.enum(['private', 'protected', 'public']).optional(),
  }),
})

/**
 * The schema for a dataset resource configuration.
 *
 * @type {ResourceConfigSchemaFor<'dataset', import('@chatbotkit/sdk/dataset/v1').DatasetCreateRequest>}
 */
export const DatasetResourceConfigSchema = BasicResourceConfigSchema.extend({
  type: z.literal('dataset'),
  properties: z.object({
    name: z.string().optional(),
    description: z.string().optional(),
    meta: z.record(z.unknown()).optional(),
    blueprintId: z.string().optional(),
    store: z.string().optional(),
    reranker: z.string().optional(),
    recordMaxTokens: z.number().optional(),
    searchMinScore: z.number().optional(),
    searchMaxRecords: z.number().optional(),
    searchMaxTokens: z.number().optional(),
    matchInstruction: z.string().optional(),
    mismatchInstruction: z.string().optional(),
    separators: z.string().optional(),
    visibility: z.enum(['private', 'protected', 'public']).optional(),
  }),
})

/**
 * The schema for a file resource configuration.
 *
 * @type {ResourceConfigSchemaFor<'file', import('@chatbotkit/sdk/file/v1').FileCreateRequest>}
 */
export const FileResourceConfigSchema = BasicResourceConfigSchema.extend({
  type: z.literal('file'),
  properties: z.object({
    name: z.string().optional(),
    description: z.string().optional(),
    meta: z.record(z.unknown()).optional(),
    blueprintId: z.string().optional(),
    visibility: z.enum(['private', 'protected', 'public']).optional(),
  }),
})

/**
 * The schema for a secret resource configuration.
 *
 * @type {ResourceConfigSchemaFor<'secret', import('@chatbotkit/sdk/secret/v1').SecretCreateRequest>}
 */
export const SecretResourceConfigSchema = BasicResourceConfigSchema.extend({
  type: z.literal('secret'),
  properties: z.object({
    name: z.string().optional(),
    description: z.string().optional(),
    meta: z.record(z.unknown()).optional(),
    blueprintId: z.string().optional(),
    kind: z.enum(['shared', 'personal']).optional(),
    type: z
      .enum(['plain', 'basic', 'bearer', 'oauth', 'template', 'reference'])
      .optional(),
    value: z.string().optional(),
    config: z.record(z.unknown()).optional(),
    visibility: z.enum(['private', 'protected', 'public']).optional(),
  }),
})

/**
 * The schema for a skillset resource configuration.
 *
 * @type {ResourceConfigSchemaFor<'skillset', import('@chatbotkit/sdk/skillset/v1').SkillsetCreateRequest>}
 */
export const SkillsetResourceConfigSchema = BasicResourceConfigSchema.extend({
  type: z.literal('skillset'),
  properties: z.object({
    name: z.string().optional(),
    description: z.string().optional(),
    meta: z.record(z.unknown()).optional(),
    blueprintId: z.string().optional(),
    visibility: z.enum(['private', 'protected', 'public']).optional(),
  }),
})

/**
 * The schema for a widget integration resource configuration.
 *
 * @type {ResourceConfigSchemaFor<'widgetIntegration', import('@chatbotkit/sdk/integration/widget/v1').WidgetIntegrationCreateRequest>}
 */
export const WidgetIntegrationResourceConfigSchema =
  BasicResourceConfigSchema.extend({
    type: z.literal('widgetIntegration'),
    properties: z.object({
      name: z.string().optional(),
      description: z.string().optional(),
      meta: z.record(z.unknown()).optional(),
      blueprintId: z.string().optional(),
      botId: z.string().optional(),
      theme: z.string().optional(),
      layout: z.string().optional(),
      title: z.string().optional(),
      intro: z.string().optional(),
      initial: z.string().optional(),
      placeholder: z.string().optional(),
      origin: z.string().optional(),
      sessionDuration: z.number().optional(),
      language: z.string().optional(),
      plugins: z.string().optional(),
      stream: z.boolean().optional(),
      verbose: z.boolean().optional(),
      tools: z.boolean().optional(),
      unfurl: z.boolean().optional(),
      math: z.boolean().optional(),
      carousel: z.boolean().optional(),
      form: z.boolean().optional(),
      attachments: z.boolean().optional(),
      autoScroll: z.boolean().optional(),
      startFirst: z.boolean().optional(),
      contactCollection: z.boolean().optional(),
      exportConversation: z.boolean().optional(),
      restartConversation: z.boolean().optional(),
      maximize: z.boolean().optional(),
      messagePeek: z.boolean().optional(),
      voiceIn: z.boolean().optional(),
      voiceOut: z.boolean().optional(),
      poweredBy: z.boolean().optional(),
    }),
  })

/**
 * The schema for a sitemap integration resource configuration.
 *
 * @type {ResourceConfigSchemaFor<'sitemapIntegration', import('@chatbotkit/sdk/integration/sitemap/v1').SitemapIntegrationCreateRequest>}
 */
export const SitemapIntegrationResourceConfigSchema =
  BasicResourceConfigSchema.extend({
    type: z.literal('sitemapIntegration'),
    properties: z.object({
      name: z.string().optional(),
      description: z.string().optional(),
      meta: z.record(z.unknown()).optional(),
      url: z.string().optional(),
      glob: z.string().optional(),
      datasetId: z.string().optional(),
      blueprintId: z.string().optional(),
      selectors: z.string().optional(),
      expiresIn: z.number().optional(),
      javascript: z.boolean().optional(),
      syncSchedule: z.string().optional(),
    }),
  })

/**
 * The schema for a slack integration resource configuration.
 *
 * @type {ResourceConfigSchemaFor<'slackIntegration', import('@chatbotkit/sdk/integration/slack/v1').SlackIntegrationCreateRequest>}
 */
export const SlackIntegrationResourceConfigSchema =
  BasicResourceConfigSchema.extend({
    type: z.literal('slackIntegration'),
    properties: z.object({
      name: z.string().optional(),
      description: z.string().optional(),
      meta: z.record(z.unknown()).optional(),
      blueprintId: z.string().optional(),
      botId: z.string().optional(),
      signingSecret: z.string().optional(),
      botToken: z.string().optional(),
      userToken: z.string().optional(),
      contactCollection: z.boolean().optional(),
      sessionDuration: z.number().optional(),
      attachments: z.boolean().optional(),
      references: z.boolean().optional(),
      ratings: z.boolean().optional(),
      visibleMessages: z.number().optional(),
      autoRespond: z.string().optional(),
    }),
  })

/**
 * The schema for a discord integration resource configuration.
 *
 * @type {ResourceConfigSchemaFor<'discordIntegration', import('@chatbotkit/sdk/integration/discord/v1').DiscordIntegrationCreateRequest>}
 */
export const DiscordIntegrationResourceConfigSchema =
  BasicResourceConfigSchema.extend({
    type: z.literal('discordIntegration'),
    properties: z.object({
      name: z.string().optional(),
      description: z.string().optional(),
      meta: z.record(z.unknown()).optional(),
      blueprintId: z.string().optional(),
      botId: z.string().optional(),
      appId: z.string().optional(),
      botToken: z.string().optional(),
      publicKey: z.string().optional(),
      handle: z.string().optional(),
      ephemeral: z.boolean().optional(),
      contactCollection: z.boolean().optional(),
      sessionDuration: z.number().optional(),
      attachments: z.boolean().optional(),
      stream: z.boolean().optional(),
    }),
  })

/**
 * The schema for a telegram integration resource configuration.
 *
 * @type {ResourceConfigSchemaFor<'telegramIntegration', import('@chatbotkit/sdk/integration/telegram/v1').TelegramIntegrationCreateRequest>}
 */
export const TelegramIntegrationResourceConfigSchema =
  BasicResourceConfigSchema.extend({
    type: z.literal('telegramIntegration'),
    properties: z.object({
      name: z.string().optional(),
      description: z.string().optional(),
      meta: z.record(z.unknown()).optional(),
      blueprintId: z.string().optional(),
      botId: z.string().optional(),
      botToken: z.string().optional(),
      contactCollection: z.boolean().optional(),
      sessionDuration: z.number().optional(),
      attachments: z.boolean().optional(),
    }),
  })

/**
 * The schema for a whatsapp integration resource configuration.
 *
 * @type {ResourceConfigSchemaFor<'whatsappIntegration', import('@chatbotkit/sdk/integration/whatsapp/v1').WhatsAppIntegrationCreateRequest>}
 */
export const WhatsAppIntegrationResourceConfigSchema =
  BasicResourceConfigSchema.extend({
    type: z.literal('whatsappIntegration'),
    properties: z.object({
      name: z.string().optional(),
      description: z.string().optional(),
      meta: z.record(z.unknown()).optional(),
      blueprintId: z.string().optional(),
      botId: z.string().optional(),
      phoneNumberId: z.string().optional(),
      accessToken: z.string().optional(),
      contactCollection: z.boolean().optional(),
      sessionDuration: z.number().optional(),
      attachments: z.boolean().optional(),
    }),
  })

/**
 * The schema for a messenger integration resource configuration.
 *
 * @type {ResourceConfigSchemaFor<'messengerIntegration', import('@chatbotkit/sdk/integration/messenger/v1').MessengerIntegrationCreateRequest>}
 */
export const MessengerIntegrationResourceConfigSchema =
  BasicResourceConfigSchema.extend({
    type: z.literal('messengerIntegration'),
    properties: z.object({
      name: z.string().optional(),
      description: z.string().optional(),
      meta: z.record(z.unknown()).optional(),
      blueprintId: z.string().optional(),
      botId: z.string().optional(),
      accessToken: z.string().optional(),
      contactCollection: z.boolean().optional(),
      sessionDuration: z.number().optional(),
      attachments: z.boolean().optional(),
    }),
  })

/**
 * The schema for a notion integration resource configuration.
 *
 * @type {ResourceConfigSchemaFor<'notionIntegration', import('@chatbotkit/sdk/integration/notion/v1').NotionIntegrationCreateRequest>}
 */
export const NotionIntegrationResourceConfigSchema =
  BasicResourceConfigSchema.extend({
    type: z.literal('notionIntegration'),
    properties: z.object({
      name: z.string().optional(),
      description: z.string().optional(),
      meta: z.record(z.unknown()).optional(),
      blueprintId: z.string().optional(),
      datasetId: z.string().optional(),
      token: z.string().optional(),
      syncSchedule: z.string().optional(),
      expiresIn: z.number().optional(),
    }),
  })

/**
 * The schema for an email integration resource configuration.
 *
 * @type {ResourceConfigSchemaFor<'emailIntegration', import('@chatbotkit/sdk/integration/email/v1').EmailIntegrationCreateRequest>}
 */
export const EmailIntegrationResourceConfigSchema =
  BasicResourceConfigSchema.extend({
    type: z.literal('emailIntegration'),
    properties: z.object({
      name: z.string().optional(),
      description: z.string().optional(),
      meta: z.record(z.unknown()).optional(),
      blueprintId: z.string().optional(),
      botId: z.string().optional(),
      contactCollection: z.boolean().optional(),
      sessionDuration: z.number().optional(),
      attachments: z.boolean().optional(),
    }),
  })

/**
 * The schema for a trigger integration resource configuration.
 *
 * @type {ResourceConfigSchemaFor<'triggerIntegration', import('@chatbotkit/sdk/integration/trigger/v1').TriggerIntegrationCreateRequest>}
 */
export const TriggerIntegrationResourceConfigSchema =
  BasicResourceConfigSchema.extend({
    type: z.literal('triggerIntegration'),
    properties: z.object({
      name: z.string().optional(),
      description: z.string().optional(),
      meta: z.record(z.unknown()).optional(),
      blueprintId: z.string().optional(),
      botId: z.string().optional(),
      authenticate: z.boolean().optional(),
      triggerSchedule: z
        .enum([
          'never',
          'quarterhourly',
          'halfhourly',
          'hourly',
          'daily',
          'weekly',
          'monthly',
        ])
        .optional(),
      sessionDuration: z.number().optional(),
    }),
  })

/**
 * The schema for a support integration resource configuration.
 *
 * @type {ResourceConfigSchemaFor<'supportIntegration', import('@chatbotkit/sdk/integration/support/v1').SupportIntegrationCreateRequest>}
 */
export const SupportIntegrationResourceConfigSchema =
  BasicResourceConfigSchema.extend({
    type: z.literal('supportIntegration'),
    properties: z.object({
      name: z.string().optional(),
      description: z.string().optional(),
      meta: z.record(z.unknown()).optional(),
      blueprintId: z.string().optional(),
      botId: z.string().optional(),
      email: z.string().optional(),
      trigger: z.string().optional(),
    }),
  })

/**
 * The schema for an extract integration resource configuration.
 *
 * @type {ResourceConfigSchemaFor<'extractIntegration', import('@chatbotkit/sdk/integration/extract/v1').ExtractIntegrationCreateRequest>}
 */
export const ExtractIntegrationResourceConfigSchema =
  BasicResourceConfigSchema.extend({
    type: z.literal('extractIntegration'),
    properties: z.object({
      name: z.string().optional(),
      description: z.string().optional(),
      meta: z.record(z.unknown()).optional(),
      blueprintId: z.string().optional(),
      botId: z.string().optional(),
      schema: z.record(z.unknown()).optional(),
      request: z.string().optional(),
      trigger: z.string().optional(),
    }),
  })

/**
 * The schema for a mcpserver integration resource configuration.
 *
 * @type {ResourceConfigSchemaFor<'mcpserverIntegration', import('@chatbotkit/sdk/integration/mcpserver/v1').McpServerIntegrationCreateRequest>}
 */
export const McpServerIntegrationResourceConfigSchema =
  BasicResourceConfigSchema.extend({
    type: z.literal('mcpserverIntegration'),
    properties: z.object({
      name: z.string().optional(),
      description: z.string().optional(),
      meta: z.record(z.unknown()).optional(),
      blueprintId: z.string().optional(),
      skillsetId: z.string().optional(),
    }),
  })

/**
 * The schema for a twilio integration resource configuration.
 *
 * @type {ResourceConfigSchemaFor<'twilioIntegration', import('@chatbotkit/sdk/integration/twilio/v1').TwilioIntegrationCreateRequest>}
 */
export const TwilioIntegrationResourceConfigSchema =
  BasicResourceConfigSchema.extend({
    type: z.literal('twilioIntegration'),
    properties: z.object({
      name: z.string().optional(),
      description: z.string().optional(),
      meta: z.record(z.unknown()).optional(),
      blueprintId: z.string().optional(),
      botId: z.string().optional(),
      contactCollection: z.boolean().optional(),
      sessionDuration: z.number().optional(),
    }),
  })

/**
 * The schema for a resource configuration.
 */
export const ResourceConfigSchema = z.union([
  BotResourceConfigSchema,
  DatasetResourceConfigSchema,
  FileResourceConfigSchema,
  SecretResourceConfigSchema,
  SkillsetResourceConfigSchema,
  WidgetIntegrationResourceConfigSchema,
  SitemapIntegrationResourceConfigSchema,
  SlackIntegrationResourceConfigSchema,
  DiscordIntegrationResourceConfigSchema,
  TelegramIntegrationResourceConfigSchema,
  WhatsAppIntegrationResourceConfigSchema,
  MessengerIntegrationResourceConfigSchema,
  NotionIntegrationResourceConfigSchema,
  EmailIntegrationResourceConfigSchema,
  TriggerIntegrationResourceConfigSchema,
  SupportIntegrationResourceConfigSchema,
  ExtractIntegrationResourceConfigSchema,
  McpServerIntegrationResourceConfigSchema,
  TwilioIntegrationResourceConfigSchema,
])

/**
 * The schema for a solution configuration.
 */
export const SolutionConfigSchema = z.object({
  version: z.literal(1),
  resources: z.array(ResourceConfigSchema),
})

/**
 * @typedef {z.infer<typeof SolutionConfigSchema>} SolutionConfig
 * @typedef {z.infer<typeof ResourceConfigSchema>} ResourceConfig
 */

/**
 * Represents a resource.
 */
export class Resource {
  /**
   * @param {ResourceConfig} config
   */
  constructor(config) {
    this.config = config
  }

  /**
   * @returns {string}
   */
  get type() {
    return this.config.type
  }

  /**
   * @returns {string}
   */
  get slug() {
    return (
      this.config.slug ??
      (this.config.properties.name || 'unnamed')
        .toLowerCase()
        .replace(/\W/g, '_')
        .replace(/_+/g, '_')
    )
  }

  /**
   * @returns {string|undefined}
   */
  get id() {
    return this.config.id
  }

  /**
   * @returns {string|undefined}
   */
  get name() {
    return this.config.properties.name
  }

  /**
   * @returns {string|undefined}
   */
  get description() {
    return this.config.properties.description
  }

  /**
   * @returns {import('@chatbotkit/sdk').ChatBotKit}
   */
  get baseClient() {
    const client = new ChatBotKit({
      secret: getSECRET(),
      runAsUserId: getRUNAS_USERID(),
    })

    return client
  }

  /**
   * Get the resource client.
   *
   * @returns {{
   *   create: (properties: Record<string,any>) => Promise<{id: string}>,
   *   update: (id: string, properties: Record<string,any>) => Promise<{id: string}>
   * }}
   */
  get client() {
    throw new Error('Not implemented')
  }

  /**
   * Get the properties to use for create operations.
   * Override this method in subclasses to filter properties for creates.
   *
   * @returns {Record<string, any>}
   */
  get createProperties() {
    return this.config.properties
  }

  /**
   * Get the properties to use for update operations.
   * Override this method in subclasses to filter properties for updates.
   *
   * @returns {Record<string, any>}
   */
  get updateProperties() {
    return this.config.properties
  }

  /**
   * Sync the resource.
   *
   * @returns {Promise<void>}
   */
  async sync() {
    if (this.config.id) {
      await this.client.update(this.config.id, this.updateProperties)
    } else {
      const { id } = await this.client.create(this.createProperties)

      this.config.id = id
    }
  }
}

/**
 * Represents a bot resource.
 */
export class BotResource extends Resource {
  /**
   * @override
   * @returns {import('@chatbotkit/sdk').BotClient}
   */
  get client() {
    return this.baseClient.bot
  }
}

/**
 * Represents a dataset resource.
 */
export class DatasetResource extends Resource {
  /**
   * @override
   * @returns {import('@chatbotkit/sdk').DatasetClient}
   */
  get client() {
    return this.baseClient.dataset
  }

  /**
   * @override
   * @returns {import('@chatbotkit/sdk/dataset/v1').DatasetUpdateRequest}
   */
  get updateProperties() {
    // @note dataset updates only support a subset of create properties - store
    // cannot be changed after creation

    const updateSchema = DatasetResourceConfigSchema.shape.properties.omit({
      store: true,
    })

    return updateSchema.parse(this.config.properties)
  }
}

/**
 * Represents a file resource.
 */
export class FileResource extends Resource {
  /**
   * @override
   * @returns {import('@chatbotkit/sdk').FileClient}
   */
  get client() {
    return this.baseClient.file
  }
}

/**
 * Represents a secret resource.
 */
export class SecretResource extends Resource {
  /**
   * @override
   * @returns {import('@chatbotkit/sdk').SecretClient}
   */
  get client() {
    return this.baseClient.secret
  }
}

/**
 * Represents a skillset resource.
 */
export class SkillsetResource extends Resource {
  /**
   * @override
   * @returns {import('@chatbotkit/sdk').SkillsetClient}
   */
  get client() {
    return this.baseClient.skillset
  }
}

/**
 * Represents a widget integration resource.
 */
export class WidgetIntegrationResource extends Resource {
  /**
   * @override
   * @returns {import('@chatbotkit/sdk/integration/widget').WidgetIntegrationClient}
   */
  get client() {
    return this.baseClient.integration.widget
  }
}

/**
 * Represents a sitemap integration resource.
 */
export class SitemapIntegrationResource extends Resource {
  /**
   * @returns {import('@chatbotkit/sdk/integration/sitemap').SitemapIntegrationClient}
   */
  get client() {
    return this.baseClient.integration.sitemap
  }
}

/**
 * Represents a slack integration resource.
 */
export class SlackIntegrationResource extends Resource {
  /**
   * @override
   * @returns {import('@chatbotkit/sdk/integration/slack').SlackIntegrationClient}
   */
  get client() {
    return this.baseClient.integration.slack
  }
}

/**
 * Represents a discord integration resource.
 */
export class DiscordIntegrationResource extends Resource {
  /**
   * @override
   * @returns {import('@chatbotkit/sdk/integration/discord').DiscordIntegrationClient}
   */
  get client() {
    return this.baseClient.integration.discord
  }
}

/**
 * Represents a telegram integration resource.
 */
export class TelegramIntegrationResource extends Resource {
  /**
   * @override
   * @returns {import('@chatbotkit/sdk/integration/telegram').TelegramIntegrationClient}
   */
  get client() {
    return this.baseClient.integration.telegram
  }
}

/**
 * Represents a whatsapp integration resource.
 */
export class WhatsAppIntegrationResource extends Resource {
  /**
   * @override
   * @returns {import('@chatbotkit/sdk/integration/whatsapp').WhatsAppIntegrationClient}
   */
  get client() {
    return this.baseClient.integration.whatsapp
  }
}

/**
 * Represents a messenger integration resource.
 */
export class MessengerIntegrationResource extends Resource {
  /**
   * @override
   * @returns {import('@chatbotkit/sdk/integration/messenger').MessengerIntegrationClient}
   */
  get client() {
    return this.baseClient.integration.messenger
  }
}

/**
 * Represents a notion integration resource.
 */
export class NotionIntegrationResource extends Resource {
  /**
   * @override
   * @returns {import('@chatbotkit/sdk/integration/notion').NotionIntegrationClient}
   */
  get client() {
    return this.baseClient.integration.notion
  }
}

/**
 * Represents an email integration resource.
 */
export class EmailIntegrationResource extends Resource {
  /**
   * @override
   * @returns {import('@chatbotkit/sdk/integration/email').EmailIntegrationClient}
   */
  get client() {
    return this.baseClient.integration.email
  }
}

/**
 * Represents a trigger integration resource.
 */
export class TriggerIntegrationResource extends Resource {
  /**
   * @override
   * @returns {import('@chatbotkit/sdk/integration/trigger').TriggerIntegrationClient}
   */
  get client() {
    return this.baseClient.integration.trigger
  }
}

/**
 * Represents a support integration resource.
 */
export class SupportIntegrationResource extends Resource {
  /**
   * @override
   * @returns {import('@chatbotkit/sdk/integration/support').SupportIntegrationClient}
   */
  get client() {
    return this.baseClient.integration.support
  }
}

/**
 * Represents an extract integration resource.
 */
export class ExtractIntegrationResource extends Resource {
  /**
   * @override
   * @returns {import('@chatbotkit/sdk/integration/extract').ExtractIntegrationClient}
   */
  get client() {
    return this.baseClient.integration.extract
  }
}

/**
 * Represents a mcpserver integration resource.
 */
export class McpServerIntegrationResource extends Resource {
  /**
   * @override
   * @returns {import('@chatbotkit/sdk/integration/mcpserver').McpServerIntegrationClient}
   */
  get client() {
    return this.baseClient.integration.mcpserver
  }
}

/**
 * Represents a twilio integration resource.
 */
export class TwilioIntegrationResource extends Resource {
  /**
   * @override
   * @returns {import('@chatbotkit/sdk/integration/twilio').TwilioIntegrationClient}
   */
  get client() {
    return this.baseClient.integration.twilio
  }
}

/**
 * Represents a solution.
 */
export class Solution {
  /**
   * @param {SolutionConfig} config
   */
  constructor(config) {
    this.config = config
  }

  /**
   * @returns {import('@chatbotkit/sdk').ChatBotKit}
   */
  get baseClient() {
    const client = new ChatBotKit({
      secret: getSECRET(),
      runAsUserId: getRUNAS_USERID(),
    })

    return client
  }

  /**
   * Get the resources.
   *
   * @returns {(BotResource|DatasetResource|FileResource|SecretResource|SkillsetResource|WidgetIntegrationResource|SitemapIntegrationResource|SlackIntegrationResource|DiscordIntegrationResource|TelegramIntegrationResource|WhatsAppIntegrationResource|MessengerIntegrationResource|NotionIntegrationResource|EmailIntegrationResource|TriggerIntegrationResource|SupportIntegrationResource|ExtractIntegrationResource|McpServerIntegrationResource|TwilioIntegrationResource)[]}
   */
  get resources() {
    return this.config.resources.map((resource) => {
      if (resource.type === 'bot') {
        return new BotResource(resource)
      } else if (resource.type === 'dataset') {
        return new DatasetResource(resource)
      } else if (resource.type === 'file') {
        return new FileResource(resource)
      } else if (resource.type === 'secret') {
        return new SecretResource(resource)
      } else if (resource.type === 'skillset') {
        return new SkillsetResource(resource)
      } else if (resource.type === 'widgetIntegration') {
        return new WidgetIntegrationResource(resource)
      } else if (resource.type === 'sitemapIntegration') {
        return new SitemapIntegrationResource(resource)
      } else if (resource.type === 'slackIntegration') {
        return new SlackIntegrationResource(resource)
      } else if (resource.type === 'discordIntegration') {
        return new DiscordIntegrationResource(resource)
      } else if (resource.type === 'telegramIntegration') {
        return new TelegramIntegrationResource(resource)
      } else if (resource.type === 'whatsappIntegration') {
        return new WhatsAppIntegrationResource(resource)
      } else if (resource.type === 'messengerIntegration') {
        return new MessengerIntegrationResource(resource)
      } else if (resource.type === 'notionIntegration') {
        return new NotionIntegrationResource(resource)
      } else if (resource.type === 'emailIntegration') {
        return new EmailIntegrationResource(resource)
      } else if (resource.type === 'triggerIntegration') {
        return new TriggerIntegrationResource(resource)
      } else if (resource.type === 'supportIntegration') {
        return new SupportIntegrationResource(resource)
      } else if (resource.type === 'extractIntegration') {
        return new ExtractIntegrationResource(resource)
      } else if (resource.type === 'mcpserverIntegration') {
        return new McpServerIntegrationResource(resource)
      } else if (resource.type === 'twilioIntegration') {
        return new TwilioIntegrationResource(resource)
      } else {
        // @ts-expect-error expected
        throw new Error(`Unknown resource type: ${resource.type}`) // @todo find out why this is not type checking correctly
      }
    })
  }

  /**
   * @returns {BotResource[]}
   */
  get bots() {
    return /** @type {BotResource[]}*/ (
      this.resources.filter((resource) => resource instanceof BotResource)
    )
  }

  /**
   * @returns {{[key: string]: BotResource|undefined}}
   */
  get bot() {
    return getArrayBackedObject(this.bots)
  }

  /**
   * @returns {DatasetResource[]}
   */
  get datasets() {
    return /** @type {DatasetResource[]} */ (
      this.resources.filter((resource) => resource instanceof DatasetResource)
    )
  }

  /**
   * @returns {{[key: string]: DatasetResource|undefined}}
   */
  get dataset() {
    return getArrayBackedObject(this.datasets)
  }

  /**
   * @returns {FileResource[]}
   */
  get files() {
    return /** @type {FileResource[]} */ (
      this.resources.filter((resource) => resource instanceof FileResource)
    )
  }

  /**
   * @returns {{[key: string]: FileResource|undefined}}
   */
  get file() {
    return getArrayBackedObject(this.files)
  }

  /**
   * @returns {SecretResource[]}
   */
  get secrets() {
    return /** @type {SecretResource[]} */ (
      this.resources.filter((resource) => resource instanceof SecretResource)
    )
  }

  /**
   * @returns {{[key: string]: SecretResource|undefined}}
   */
  get secret() {
    return getArrayBackedObject(this.secrets)
  }

  /**
   * @returns {SkillsetResource[]}
   */
  get skillsets() {
    return /** @type {SkillsetResource[]} */ (
      this.resources.filter((resource) => resource instanceof SkillsetResource)
    )
  }

  /**
   * @returns {{[key: string]: SkillsetResource|undefined}}
   */
  get skillset() {
    return getArrayBackedObject(this.skillsets)
  }

  /**
   * @returns {WidgetIntegrationResource[]}
   */
  get widgetIntegrations() {
    return /** @type {WidgetIntegrationResource[]} */ (
      this.resources.filter(
        (resource) => resource instanceof WidgetIntegrationResource
      )
    )
  }

  /**
   * @returns {{[key: string]: WidgetIntegrationResource|undefined}}
   */
  get widgetIntegration() {
    return getArrayBackedObject(this.widgetIntegrations)
  }

  /**
   * @returns {SitemapIntegrationResource[]}
   */
  get sitemapIntegrations() {
    return /** @type {SitemapIntegrationResource[]} */ (
      this.resources.filter(
        (resource) => resource instanceof SitemapIntegrationResource
      )
    )
  }

  /**
   * @returns {{[key: string]: SitemapIntegrationResource|undefined}}
   */
  get sitemapIntegration() {
    return getArrayBackedObject(this.sitemapIntegrations)
  }

  /**
   * @returns {SlackIntegrationResource[]}
   */
  get slackIntegrations() {
    return /** @type {SlackIntegrationResource[]} */ (
      this.resources.filter(
        (resource) => resource instanceof SlackIntegrationResource
      )
    )
  }

  /**
   * @returns {{[key: string]: SlackIntegrationResource|undefined}}
   */
  get slackIntegration() {
    return getArrayBackedObject(this.slackIntegrations)
  }

  /**
   * @returns {DiscordIntegrationResource[]}
   */
  get discordIntegrations() {
    return /** @type {DiscordIntegrationResource[]} */ (
      this.resources.filter(
        (resource) => resource instanceof DiscordIntegrationResource
      )
    )
  }

  /**
   * @returns {{[key: string]: DiscordIntegrationResource|undefined}}
   */
  get discordIntegration() {
    return getArrayBackedObject(this.discordIntegrations)
  }

  /**
   * @returns {TelegramIntegrationResource[]}
   */
  get telegramIntegrations() {
    return /** @type {TelegramIntegrationResource[]} */ (
      this.resources.filter(
        (resource) => resource instanceof TelegramIntegrationResource
      )
    )
  }

  /**
   * @returns {{[key: string]: TelegramIntegrationResource|undefined}}
   */
  get telegramIntegration() {
    return getArrayBackedObject(this.telegramIntegrations)
  }

  /**
   * @returns {WhatsAppIntegrationResource[]}
   */
  get whatsappIntegrations() {
    return /** @type {WhatsAppIntegrationResource[]} */ (
      this.resources.filter(
        (resource) => resource instanceof WhatsAppIntegrationResource
      )
    )
  }

  /**
   * @returns {{[key: string]: WhatsAppIntegrationResource|undefined}}
   */
  get whatsappIntegration() {
    return getArrayBackedObject(this.whatsappIntegrations)
  }

  /**
   * @returns {MessengerIntegrationResource[]}
   */
  get messengerIntegrations() {
    return /** @type {MessengerIntegrationResource[]} */ (
      this.resources.filter(
        (resource) => resource instanceof MessengerIntegrationResource
      )
    )
  }

  /**
   * @returns {{[key: string]: MessengerIntegrationResource|undefined}}
   */
  get messengerIntegration() {
    return getArrayBackedObject(this.messengerIntegrations)
  }

  /**
   * @returns {NotionIntegrationResource[]}
   */
  get notionIntegrations() {
    return /** @type {NotionIntegrationResource[]} */ (
      this.resources.filter(
        (resource) => resource instanceof NotionIntegrationResource
      )
    )
  }

  /**
   * @returns {{[key: string]: NotionIntegrationResource|undefined}}
   */
  get notionIntegration() {
    return getArrayBackedObject(this.notionIntegrations)
  }

  /**
   * @returns {EmailIntegrationResource[]}
   */
  get emailIntegrations() {
    return /** @type {EmailIntegrationResource[]} */ (
      this.resources.filter(
        (resource) => resource instanceof EmailIntegrationResource
      )
    )
  }

  /**
   * @returns {{[key: string]: EmailIntegrationResource|undefined}}
   */
  get emailIntegration() {
    return getArrayBackedObject(this.emailIntegrations)
  }

  /**
   * @returns {TriggerIntegrationResource[]}
   */
  get triggerIntegrations() {
    return /** @type {TriggerIntegrationResource[]} */ (
      this.resources.filter(
        (resource) => resource instanceof TriggerIntegrationResource
      )
    )
  }

  /**
   * @returns {{[key: string]: TriggerIntegrationResource|undefined}}
   */
  get triggerIntegration() {
    return getArrayBackedObject(this.triggerIntegrations)
  }

  /**
   * @returns {SupportIntegrationResource[]}
   */
  get supportIntegrations() {
    return /** @type {SupportIntegrationResource[]} */ (
      this.resources.filter(
        (resource) => resource instanceof SupportIntegrationResource
      )
    )
  }

  /**
   * @returns {{[key: string]: SupportIntegrationResource|undefined}}
   */
  get supportIntegration() {
    return getArrayBackedObject(this.supportIntegrations)
  }

  /**
   * @returns {ExtractIntegrationResource[]}
   */
  get extractIntegrations() {
    return /** @type {ExtractIntegrationResource[]} */ (
      this.resources.filter(
        (resource) => resource instanceof ExtractIntegrationResource
      )
    )
  }

  /**
   * @returns {{[key: string]: ExtractIntegrationResource|undefined}}
   */
  get extractIntegration() {
    return getArrayBackedObject(this.extractIntegrations)
  }

  /**
   * @returns {McpServerIntegrationResource[]}
   */
  get mcpserverIntegrations() {
    return /** @type {McpServerIntegrationResource[]} */ (
      this.resources.filter(
        (resource) => resource instanceof McpServerIntegrationResource
      )
    )
  }

  /**
   * @returns {{[key: string]: McpServerIntegrationResource|undefined}}
   */
  get mcpserverIntegration() {
    return getArrayBackedObject(this.mcpserverIntegrations)
  }

  /**
   * @returns {TwilioIntegrationResource[]}
   */
  get twilioIntegrations() {
    return /** @type {TwilioIntegrationResource[]} */ (
      this.resources.filter(
        (resource) => resource instanceof TwilioIntegrationResource
      )
    )
  }

  /**
   * @returns {{[key: string]: TwilioIntegrationResource|undefined}}
   */
  get twilioIntegration() {
    return getArrayBackedObject(this.twilioIntegrations)
  }

  /**
   * Sync the solution.
   *
   * @returns {Promise<void>}
   */
  async sync() {
    await Promise.all(this.resources.map((resource) => resource.sync()))
  }
}

/**
 * Lists solutions.
 *
 * @returns {Promise<string[]>}
 */
Solution.list = async function () {
  await fs.mkdir(getSolutionFolderPath(), { recursive: true })

  const files = await fs.readdir('.chatbotkit/solutions')

  return files
    .filter((file) => file.endsWith('.json'))
    .map((file) => file.replace(/\.json$/, ''))
}

/**
 * Creates a new solution.
 *
 * @param {string} name
 * @returns {Promise<void>}
 */
Solution.create = async function (name) {
  await fs.mkdir('.chatbotkit/solutions', { recursive: true })

  const fileName = getSolutionFileName(name)
  const filePath = getSolutionFilePath(name)

  if (await fs.stat(filePath).catch(() => null)) {
    throw new CommandError(`Solution ${fileName} already exists`)
  }

  /** * @type {SolutionConfig} */
  const config = {
    version: 1,
    resources: [],
  }

  await fs.writeFile(filePath, JSON.stringify(config, null, 2))
}

/**
 * Deletes a solution.
 *
 * @param {string} name
 * @returns {Promise<void>}
 */
Solution.delete = async function (name) {
  const fileName = getSolutionFileName(name)
  const filePath = getSolutionFilePath(name)

  if (!(await fs.stat(filePath).catch(() => null))) {
    throw new CommandError(`Solution ${fileName} does not exist`)
  }

  await fs.unlink(filePath)
}

/**
 * Loads a solution from a configuration object or a file.
 *
 * @param {string|SolutionConfig} config
 * @returns {Promise<Solution>}
 */
Solution.load = async function (config) {
  let solutionConfig

  if (typeof config === 'string') {
    const { fileName, filePath } = getSolutionFileNameAndPath(config)

    if (!(await fs.stat(filePath).catch(() => null))) {
      throw new CommandError(`Solution ${fileName} does not exist`)
    }

    try {
      solutionConfig = JSON.parse(await fs.readFile(filePath, 'utf8'))
    } catch (error) {
      throw new CommandError(
        `Failed to load solution ${fileName}: ${error.message}`
      )
    }
  } else {
    solutionConfig = config
  }

  const parsedConfig = SolutionConfigSchema.safeParse(solutionConfig)

  if (!parsedConfig.success) {
    throw new CommandError(`Invalid solution configuration`)
  }

  parsedConfig.data = replaceEnvVars(parsedConfig.data)

  return new Solution(parsedConfig.data)
}

/**
 * Saves a solution to a file.
 *
 * @param {string} name
 * @param {Solution} solution
 * @returns {Promise<void>}
 */
Solution.save = async function (name, solution) {
  const filePath = getSolutionFilePath(name)

  await fs.writeFile(filePath, JSON.stringify(solution.config, null, 2))
}

/**
 * @internal
 * @template T
 */
export class ArrayBackedObject {
  /**
   * @param {T[]} array
   */
  constructor(array) {
    /** @type {T[]} */
    this.array = array

    return new Proxy(this, {
      /**
       * @param {ArrayBackedObject<T>} target
       * @param {string} property
       * @returns {T|undefined}
       */
      get: (target, property) => {
        const item = target.array.find(
          (item) =>
            /** @type {{slug?: string}|undefined} */ (item)?.slug === property
        )

        if (item) {
          return item
        }

        return undefined
      },
    })
  }
}

/**
 * @template T
 * @param {T[]} array
 * @returns {{[key: string]: T|undefined}}
 */
export function getArrayBackedObject(array) {
  // @ts-expect-error this is not a type error, we simply want to force the type
  return new ArrayBackedObject(array)
}
