/**
 * This file is auto-generated. Do not edit manually.
 * Generated from report registry schemas.
 */

export type ReportId = 'cm7k3m5n8k000008jq7h9e5b1a' | 'clr3m5n8k000008jq7h9e5b1a' | 'clr3m5n8k000108jq3c4d7f2b' | 'clr3m5n8k000208jq8e5f6g3c' | 'clr3m5n8k000308jq1h7i8j4d' | 'clr3m5n8k000408jq9i8j9k5e' | 'clr3m5n8k000508jq2j9k0l6f' | 'clr3m5n8k000608jq3k0l1m7g' | 'clr3m5n8k000708jq4l1m2n8h' | 'clr3m5n8k000808jq5m2n3o9i' | 'clr3m5n8k000908jq6n3o4p0j' | 'clr3m5n8k000a08jq7o4p5q1k' | 'clr3m5n8k000b08jq8p5q6r2l' | 'clr3m5n8k000c08jq9q6r7s3m' | 'clr3m5n8k000d08jqar7s8t4n' | 'clr3m5n8k000e08jqbs0t1u5o' | 'clr3m5n8k000f08jqcs1u2v6p' | 'clr3m5n8k000g08jqdt1u2v7q' | 'clr3m5n8k000h08jqeu2v3w8r' | 'clr3m5n8k000i08jqfv3w4x9s' | 'clr3m5n8k000j08jqgw4x5y0t' | 'gpv2an25fuhe2k6v6ckv85v8' | 'pov1s2k3l4m5n6o7p8q9r0sov'

export interface ReportMetadata {
  id: string
  name: string
  description: string
  createdAt: string
  updatedAt: string
}

export interface ReportRegistry {
  'cm7k3m5n8k000008jq7h9e5b1a': {
    name: string
    description: string
    input: DatasetRecordsInput
    output: DatasetRecordsOutput
  }
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
  'clr3m5n8k000d08jqar7s8t4n': {
    name: string
    description: string
    input: ComprehensiveOverviewInput
    output: ComprehensiveOverviewOutput
  }
  'clr3m5n8k000e08jqbs0t1u5o': {
    name: string
    description: string
    input: BotStatsInput
    output: BotStatsOutput
  }
  'clr3m5n8k000f08jqcs1u2v6p': {
    name: string
    description: string
    input: AlertsInput
    output: AlertsOutput
  }
  'clr3m5n8k000g08jqdt1u2v7q': {
    name: string
    description: string
    input: BotPerformanceInput
    output: BotPerformanceOutput
  }
  'clr3m5n8k000h08jqeu2v3w8r': {
    name: string
    description: string
    input: BotConversationQualityInput
    output: BotConversationQualityOutput
  }
  'clr3m5n8k000i08jqfv3w4x9s': {
    name: string
    description: string
    input: BotAlertsInput
    output: BotAlertsOutput
  }
  'clr3m5n8k000j08jqgw4x5y0t': {
    name: string
    description: string
    input: BotNegativeFeedbackInput
    output: BotNegativeFeedbackOutput
  }
  'gpv2an25fuhe2k6v6ckv85v8': {
    name: string
    description: string
    input: ComprehensiveAnalyticsInput
    output: ComprehensiveAnalyticsOutput
  }
  'pov1s2k3l4m5n6o7p8q9r0sov': {
    name: string
    description: string
    input: PlatformOverviewInput
    output: PlatformOverviewOutput
  }
}

// Input and Output Types for each report
export type DatasetRecordsInput = {
  datasetIds: string[]
}

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

export type ComprehensiveOverviewInput = {
  periodDays?: number
}

export type BotStatsInput = {
  botId: string
  periodDays?: number
}

export type AlertsInput = {
  periodDays?: number
}

export type BotPerformanceInput = {
  botId: string
  periodDays?: number
}

export type BotConversationQualityInput = {
  botId: string
  periodDays?: number
}

export type BotAlertsInput = {
  botId: string
  periodDays?: number
}

export type BotNegativeFeedbackInput = {
  botId: string
  periodDays?: number
  limit?: number
}

export type ComprehensiveAnalyticsInput = {
  periodDays?: number
}

export type PlatformOverviewInput = {
  periodDays?: number
  topBotsLimit?: number
  recentWorkLimit?: number
}

export type DatasetRecordsOutput = {
  totalRecords: number
  breakdown: { datasetId: string; records: number }[]
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

export type ComprehensiveOverviewOutput = {
  data: { title: string; description: string; value: number; change?: number; period: string; details?: { metric?: { title: string; description: string; value: number; change?: number; period: string }; chart?: { type: string; data: { date: string; total: number; thumbsUp?: number; thumbsDown?: number }[] }; list?: { id: string; icon?: string; name: string; description: string; createdAt?: string; tags?: unknown[] }[] } }[]
}

export type BotStatsOutput = {
  totalConversations: number
  totalMessages: number
  totalTokens: number
  totalRatings: number
  thumbsUp: number
  thumbsDown: number
  sentimentSignal: string
  period: string
}

export type AlertsOutput = {
  alerts: { type: string; severity: string; title: string; message: string; metric?: { current: number; baseline?: number; percentage?: number } }[]
  summary: { totalAlerts: number; criticalCount: number; warningCount: number; infoCount: number }
  period: string
}

export type BotPerformanceOutput = {
  conversations: { current: number; previous: number; change: number; breakdown: { date: string; total: number }[] }
  messages: { current: number; previous: number; change: number; breakdown: { date: string; total: number }[] }
  tokens: { current: number; previous: number; change: number; breakdown: { date: string; total: number }[] }
  ratings: { thumbsUp: number; thumbsDown: number; total: number; change: number; sentimentSignal: string; breakdown: { date: string; total: number; thumbsUp: number; thumbsDown: number }[] }
  period: string
}

export type BotConversationQualityOutput = {
  avgMessagesPerConversation: { user: number; bot: number; activity: number }
  conversationDepth: { singleTurn: number; short: number; medium: number; long: number }
  totalConversations: number
  abandonmentRate: number
  avgTokensPerConversation: number
  avgTokensPerMessage: number
  topActions: { type: string; name: string; count: number }[]
  period: string
}

export type BotAlertsOutput = {
  alerts: { type: string; severity: string; title: string; message: string; metric?: { current: number; baseline?: number; percentage?: number } }[]
  summary: { totalAlerts: number; criticalCount: number; warningCount: number; infoCount: number }
  period: string
}

export type BotNegativeFeedbackOutput = {
  items: { id: string; value: number; reason: unknown; conversationId: unknown; messageId: unknown; contactId: unknown; contactName: unknown; createdAt: string }[]
  total: number
  thumbsDown: number
  thumbsUp: number
  period: string
}

export type ComprehensiveAnalyticsOutput = {
  data: { title: string; description: string; value: number; change?: number; period: string; details?: { metric?: { title: string; description: string; value: number; change?: number; period: string }; chart?: { type: string; data: { date: string; total: number; thumbsUp?: number; thumbsDown?: number }[] }; list?: { id: string; icon?: string; name: string; description: string; createdAt?: string; tags?: unknown[] }[] } }[]
}

export type PlatformOverviewOutput = {
  period: string
  rangeLabel: string
  resources: { blueprints: { value: number; change: number }; portals: { value: number; change: number }; bots: { value: number; change: number } }
  tokens: { value: number; change: number; breakdown: { date: string; total: number }[] }
  conversations: { value: number; change: number; breakdown: { date: string; total: number }[] }
  messages: { value: number; change: number; breakdown: { date: string; total: number }[] }
  negativeRatings: { value: number; change: number; breakdown: { date: string; total: number }[] }
  positiveRatings: { value: number; change: number }
  topBots: { id: string; name: string; tokens: number; conversations: number; thumbsUp: number; thumbsDown: number; thumbsUpRate: unknown; sparkline: number[] }[]
  recentWork: { id: string; kind: string; name: unknown; link: string; createdAt: string }[]
}

// Mapping report IDs to their input/output types
export type ReportInputTypes = {
  'cm7k3m5n8k000008jq7h9e5b1a': DatasetRecordsInput
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
  'clr3m5n8k000d08jqar7s8t4n': ComprehensiveOverviewInput
  'clr3m5n8k000e08jqbs0t1u5o': BotStatsInput
  'clr3m5n8k000f08jqcs1u2v6p': AlertsInput
  'clr3m5n8k000g08jqdt1u2v7q': BotPerformanceInput
  'clr3m5n8k000h08jqeu2v3w8r': BotConversationQualityInput
  'clr3m5n8k000i08jqfv3w4x9s': BotAlertsInput
  'clr3m5n8k000j08jqgw4x5y0t': BotNegativeFeedbackInput
  'gpv2an25fuhe2k6v6ckv85v8': ComprehensiveAnalyticsInput
  'pov1s2k3l4m5n6o7p8q9r0sov': PlatformOverviewInput
}

export type ReportOutputTypes = {
  'cm7k3m5n8k000008jq7h9e5b1a': DatasetRecordsOutput
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
  'clr3m5n8k000d08jqar7s8t4n': ComprehensiveOverviewOutput
  'clr3m5n8k000e08jqbs0t1u5o': BotStatsOutput
  'clr3m5n8k000f08jqcs1u2v6p': AlertsOutput
  'clr3m5n8k000g08jqdt1u2v7q': BotPerformanceOutput
  'clr3m5n8k000h08jqeu2v3w8r': BotConversationQualityOutput
  'clr3m5n8k000i08jqfv3w4x9s': BotAlertsOutput
  'clr3m5n8k000j08jqgw4x5y0t': BotNegativeFeedbackOutput
  'gpv2an25fuhe2k6v6ckv85v8': ComprehensiveAnalyticsOutput
  'pov1s2k3l4m5n6o7p8q9r0sov': PlatformOverviewOutput
}

// Helper type to get input type by report ID
export type GetReportInput<T extends ReportId> = ReportInputTypes[T]

// Helper type to get output type by report ID
export type GetReportOutput<T extends ReportId> = ReportOutputTypes[T]
