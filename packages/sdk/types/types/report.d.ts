/**
 * This file is auto-generated. Do not edit manually.
 * Generated from report registry schemas.
 */

export type ReportId = 'clr3m5n8k000008jq7h9e5b1a' | 'clr3m5n8k000108jq3c4d7f2b' | 'clr3m5n8k000208jq8e5f6g3c' | 'clr3m5n8k000308jq1h7i8j4d' | 'clr3m5n8k000408jq9i8j9k5e' | 'clr3m5n8k000508jq2j9k0l6f' | 'clr3m5n8k000608jq3k0l1m7g' | 'clr3m5n8k000708jq4l1m2n8h' | 'clr3m5n8k000808jq5m2n3o9i' | 'clr3m5n8k000908jq6n3o4p0j' | 'clr3m5n8k000a08jq7o4p5q1k' | 'clr3m5n8k000b08jq8p5q6r2l' | 'clr3m5n8k000c08jq9q6r7s3m'

export interface ReportMetadata {
  id: string
  name: string
  description: string
  createdAt: string
  updatedAt: string
}

export interface ReportRegistry {
  'clr3m5n8k000008jq7h9e5b1a': {
    name: string
    description: string
    input: TotalRatingsInput
    output: TotalRatingsOutput
  }
  'clr3m5n8k000108jq3c4d7f2b': {
    name: string
    description: string
    input: ThumbsUpInput
    output: ThumbsUpOutput
  }
  'clr3m5n8k000208jq8e5f6g3c': {
    name: string
    description: string
    input: ThumbsDownInput
    output: ThumbsDownOutput
  }
  'clr3m5n8k000308jq1h7i8j4d': {
    name: string
    description: string
    input: TotalContactsInput
    output: TotalContactsOutput
  }
  'clr3m5n8k000408jq9i8j9k5e': {
    name: string
    description: string
    input: ActiveContactsInput
    output: ActiveContactsOutput
  }
  'clr3m5n8k000508jq2j9k0l6f': {
    name: string
    description: string
    input: TotalConversationsInput
    output: TotalConversationsOutput
  }
  'clr3m5n8k000608jq3k0l1m7g': {
    name: string
    description: string
    input: TotalMessagesInput
    output: TotalMessagesOutput
  }
  'clr3m5n8k000708jq4l1m2n8h': {
    name: string
    description: string
    input: UserMessagesInput
    output: UserMessagesOutput
  }
  'clr3m5n8k000808jq5m2n3o9i': {
    name: string
    description: string
    input: BotMessagesInput
    output: BotMessagesOutput
  }
  'clr3m5n8k000908jq6n3o4p0j': {
    name: string
    description: string
    input: ActivityMessagesInput
    output: ActivityMessagesOutput
  }
  'clr3m5n8k000a08jq7o4p5q1k': {
    name: string
    description: string
    input: AverageUserMessagesPerConversationInput
    output: AverageUserMessagesPerConversationOutput
  }
  'clr3m5n8k000b08jq8p5q6r2l': {
    name: string
    description: string
    input: AverageBotMessagesPerConversationInput
    output: AverageBotMessagesPerConversationOutput
  }
  'clr3m5n8k000c08jq9q6r7s3m': {
    name: string
    description: string
    input: AverageActionsPerConversationInput
    output: AverageActionsPerConversationOutput
  }
}

// Input and Output Types for each report
export type TotalRatingsInput = {
  periodDays?: number
}

export type ThumbsUpInput = {
  periodDays?: number
}

export type ThumbsDownInput = {
  periodDays?: number
}

export type TotalContactsInput = {
  userId: string
}

export type ActiveContactsInput = {
  periodDays?: number
}

export type TotalConversationsInput = {
  periodDays?: number
}

export type TotalMessagesInput = {
  periodDays?: number
}

export type UserMessagesInput = {
  periodDays?: number
}

export type BotMessagesInput = {
  periodDays?: number
}

export type ActivityMessagesInput = {
  periodDays?: number
}

export type AverageUserMessagesPerConversationInput = {
  periodDays?: number
}

export type AverageBotMessagesPerConversationInput = {
  periodDays?: number
}

export type AverageActionsPerConversationInput = {
  periodDays?: number
}

export type TotalRatingsOutput = {
  value: number
  change?: number
  period: string
  breakdown?: { date: string; total: number }[]
  thumbsUp?: number
  thumbsDown?: number
}

export type ThumbsUpOutput = {
  value: number
  change?: number
  period: string
  breakdown?: { date: string; total: number }[]
}

export type ThumbsDownOutput = {
  value: number
  change?: number
  period: string
  breakdown?: { date: string; total: number }[]
}

export type TotalContactsOutput = {
  value: number
  period: string
}

export type ActiveContactsOutput = {
  value: number
  change?: number
  period: string
  breakdown?: { date: string; total: number }[]
}

export type TotalConversationsOutput = {
  value: number
  change?: number
  period: string
  breakdown?: { date: string; total: number }[]
}

export type TotalMessagesOutput = {
  value: number
  change?: number
  period: string
  breakdown?: { date: string; total: number }[]
}

export type UserMessagesOutput = {
  value: number
  change?: number
  period: string
  breakdown?: { date: string; total: number }[]
}

export type BotMessagesOutput = {
  value: number
  change?: number
  period: string
  breakdown?: { date: string; total: number }[]
}

export type ActivityMessagesOutput = {
  value: number
  change?: number
  period: string
  breakdown?: { date: string; total: number }[]
}

export type AverageUserMessagesPerConversationOutput = {
  value: number
  period: string
}

export type AverageBotMessagesPerConversationOutput = {
  value: number
  period: string
}

export type AverageActionsPerConversationOutput = {
  value: number
  period: string
}

// Mapping report IDs to their input/output types
export type ReportInputTypes = {
  'clr3m5n8k000008jq7h9e5b1a': TotalRatingsInput
  'clr3m5n8k000108jq3c4d7f2b': ThumbsUpInput
  'clr3m5n8k000208jq8e5f6g3c': ThumbsDownInput
  'clr3m5n8k000308jq1h7i8j4d': TotalContactsInput
  'clr3m5n8k000408jq9i8j9k5e': ActiveContactsInput
  'clr3m5n8k000508jq2j9k0l6f': TotalConversationsInput
  'clr3m5n8k000608jq3k0l1m7g': TotalMessagesInput
  'clr3m5n8k000708jq4l1m2n8h': UserMessagesInput
  'clr3m5n8k000808jq5m2n3o9i': BotMessagesInput
  'clr3m5n8k000908jq6n3o4p0j': ActivityMessagesInput
  'clr3m5n8k000a08jq7o4p5q1k': AverageUserMessagesPerConversationInput
  'clr3m5n8k000b08jq8p5q6r2l': AverageBotMessagesPerConversationInput
  'clr3m5n8k000c08jq9q6r7s3m': AverageActionsPerConversationInput
}

export type ReportOutputTypes = {
  'clr3m5n8k000008jq7h9e5b1a': TotalRatingsOutput
  'clr3m5n8k000108jq3c4d7f2b': ThumbsUpOutput
  'clr3m5n8k000208jq8e5f6g3c': ThumbsDownOutput
  'clr3m5n8k000308jq1h7i8j4d': TotalContactsOutput
  'clr3m5n8k000408jq9i8j9k5e': ActiveContactsOutput
  'clr3m5n8k000508jq2j9k0l6f': TotalConversationsOutput
  'clr3m5n8k000608jq3k0l1m7g': TotalMessagesOutput
  'clr3m5n8k000708jq4l1m2n8h': UserMessagesOutput
  'clr3m5n8k000808jq5m2n3o9i': BotMessagesOutput
  'clr3m5n8k000908jq6n3o4p0j': ActivityMessagesOutput
  'clr3m5n8k000a08jq7o4p5q1k': AverageUserMessagesPerConversationOutput
  'clr3m5n8k000b08jq8p5q6r2l': AverageBotMessagesPerConversationOutput
  'clr3m5n8k000c08jq9q6r7s3m': AverageActionsPerConversationOutput
}

// Helper type to get input type by report ID
export type GetReportInput<T extends ReportId> = ReportInputTypes[T]

// Helper type to get output type by report ID
export type GetReportOutput<T extends ReportId> = ReportOutputTypes[T]
