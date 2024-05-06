export interface BotRef {
  botId?: string
}

export interface BotConfig {
  backstory?: string
  model?: string
  datasetId?: string
  skillsetId?: string
  privacy?: boolean
  moderation?: boolean
}

export type BotRefOrConfig = BotRef | BotConfig
