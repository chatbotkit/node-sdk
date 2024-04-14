import { getRUNAS_USERID, getSECRET } from '../env.js'
import { CommandError } from '../output.js'

import ChatBotKit from '@chatbotkit/sdk'

import fs from 'fs/promises'
import path from 'path'
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
 * The schema for a basic resource configuration.
 */
export const BasicResourceConfigSchema = z.object({
  type: z.string(),
  slug: z.string().optional(),
  id: z.string().optional(),
  name: z.string(),
  description: z.string().optional(),
  properties: z.record(z.unknown()),
})

/**
 * The schema for a bot resource configuration.
 */
export const BotResourceConfigSchema = BasicResourceConfigSchema.extend({
  type: z.literal('bot'),
  properties: z.object({
    model: z.string().optional(),
    backstory: z.string().optional(),
    datasetId: z.string().optional(),
    skillsetId: z.string().optional(),
    moderation: z.boolean().optional(),
    privacy: z.boolean().optional(),
  }),
})

/**
 * The schema for a dataset resource configuration.
 */
export const DatasetResourceConfigSchema = BasicResourceConfigSchema.extend({
  type: z.literal('dataset'),
  properties: z.object({}),
})

/**
 * The schema for a skillset resource configuration.
 */
export const SkillsetResourceConfigSchema = BasicResourceConfigSchema.extend({
  type: z.literal('skillset'),
  properties: z.object({}),
})

/**
 * The schema for a widget integration resource configuration.
 */
export const WidgetIntegrationResourceConfigSchema =
  BasicResourceConfigSchema.extend({
    type: z.literal('widgetIntegration'),
    properties: z.object({}),
  })

/**
 * The schema for a sitemap integration resource configuration.
 */
export const SitemapIntegrationResourceConfigSchema =
  BasicResourceConfigSchema.extend({
    type: z.literal('sitemapIntegration'),
    properties: z.object({
      url: z.string().url(),
      datasetId: z.string(),
    }),
  })

/**
 * The schema for a resource configuration.
 */
export const ResourceConfigSchema = z.union([
  BotResourceConfigSchema,
  DatasetResourceConfigSchema,
  SkillsetResourceConfigSchema,
  WidgetIntegrationResourceConfigSchema,
  SitemapIntegrationResourceConfigSchema,
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
      this.config.name.toLowerCase().replace(/\W/g, '_').replace(/_+/g, '_')
    )
  }

  /**
   * @returns {string|undefined}
   */
  get id() {
    return this.config.id
  }

  /**
   * @returns {string}
   */
  get name() {
    return this.config.name
  }

  /**
   * @returns {string|undefined}
   */
  get description() {
    return this.config.description
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
   * Sync the resource.
   *
   * @returns {Promise<void>}
   */
  async sync() {
    if (this.config.id) {
      await this.client.update(this.config.id, {
        ...this.config.properties,

        name: this.config.name,
        description: this.config.description,
      })
    } else {
      const { id } = await this.client.create({
        ...this.config.properties,

        name: this.config.name,
        description: this.config.description,
      })

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
  // @ts-expect-error expected
  get client() {
    return this.baseClient.integration.sitemap
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
   * @returns {(BotResource|DatasetResource|SkillsetResource|WidgetIntegrationResource|SitemapIntegrationResource)[]}
   */
  get resources() {
    return this.config.resources.map((resource) => {
      if (resource.type === 'bot') {
        return new BotResource(resource)
      } else if (resource.type === 'dataset') {
        return new DatasetResource(resource)
      } else if (resource.type === 'skillset') {
        return new SkillsetResource(resource)
      } else if (resource.type === 'widgetIntegration') {
        return new WidgetIntegrationResource(resource)
      } else if (resource.type === 'sitemapIntegration') {
        return new SitemapIntegrationResource(resource)
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
