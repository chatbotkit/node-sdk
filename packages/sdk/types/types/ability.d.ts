/**
 * This file is auto-generated. Do not edit manually.
 * Generated from the CBK ability catalogue.
 */

// --- Ability Names ---

export type CbkAbilityName = 'abort'
  | 'abort[failure]'
  | 'abort[success]'
  | 'agent/execute'
  | 'agent/task/evaluate'
  | 'agent/task/plan'
  | 'attachment/read'
  | 'blueprint/note/list'
  | 'blueprint/resource/list'
  | 'bot/ask'
  | 'bot/ask[by-id]'
  | 'bot/ask[multi]'
  | 'bot/backstory/read'
  | 'bot/backstory/read[by-id]'
  | 'bot/backstory/write'
  | 'bot/backstory/write[by-id]'
  | 'bot/call'
  | 'bot/call[by-id]'
  | 'bot/call[multi]'
  | 'bot/list'
  | 'browser/dispatch'
  | 'conversation/fetch[bot][by-id]'
  | 'conversation/fetch[by-id]'
  | 'conversation/fetch[contact][by-id]'
  | 'conversation/list'
  | 'conversation/list[bot]'
  | 'conversation/list[contact]'
  | 'conversation/mcp/install[url]'
  | 'conversation/mcp/uninstall[url]'
  | 'conversation/search'
  | 'conversation/search[bot]'
  | 'conversation/search[contact]'
  | 'conversation/skillset/install[by-id]'
  | 'conversation/skillset/uninstall[by-id]'
  | 'dataset/create'
  | 'dataset/file/create[url]'
  | 'dataset/list'
  | 'dataset/record/create'
  | 'dataset/search'
  | 'discord/conversation/start[by-id]'
  | 'email/conversation/start[by-id]'
  | 'email/send'
  | 'example/fetch/api/get'
  | 'example/fetch/api/post'
  | 'example/fetch/api/post[params]'
  | 'fetch/metadata'
  | 'fetch/request'
  | 'fetch/request[with-auth]'
  | 'fetch/text/get'
  | 'file/append'
  | 'file/append[by-id]'
  | 'file/prepend'
  | 'file/prepend[by-id]'
  | 'file/read'
  | 'file/read[by-id]'
  | 'file/replace'
  | 'file/replace[by-id]'
  | 'file/rw'
  | 'file/rw[by-id]'
  | 'file/sql'
  | 'file/sql[by-id]'
  | 'file/write'
  | 'file/write[by-id]'
  | 'git/file/fetch'
  | 'git/tree/fetch'
  | 'graphql[cbk]'
  | 'image/generate'
  | 'image/generate[gemini-2.5-flash-image]'
  | 'image/generate[gemini-3.1-flash-image]'
  | 'image/generate[gpt-image-1.5]'
  | 'image/generate[gpt-image-1]'
  | 'image/generate[gpt-image-2]'
  | 'image/modify'
  | 'image/modify[gemini-2.5-flash-image]'
  | 'image/modify[gemini-3.1-flash-image]'
  | 'image/modify[gpt-image-1.5]'
  | 'image/modify[gpt-image-1]'
  | 'image/modify[gpt-image-2]'
  | 'listen/transcribe'
  | 'math/evaluate'
  | 'memory/create'
  | 'memory/create[bot]'
  | 'memory/create[contact]'
  | 'memory/delete[bot][by-id]'
  | 'memory/delete[by-id]'
  | 'memory/delete[contact][by-id]'
  | 'memory/list'
  | 'memory/list[bot]'
  | 'memory/list[contact]'
  | 'memory/search'
  | 'memory/search[bot]'
  | 'memory/search[contact]'
  | 'memory/update[bot][by-id]'
  | 'memory/update[by-id]'
  | 'memory/update[contact][by-id]'
  | 'mock/api[create]'
  | 'mock/api[delete]'
  | 'mock/api[list]'
  | 'mock/api[update]'
  | 'mock/api/[search]'
  | 'mock/dataset'
  | 'mock/sql'
  | 'pack/bot/reprogramming'
  | 'pack/cbk/space/skills'
  | 'pack/cbk/space/storage'
  | 'pack/cbk/space/storage[read-only]'
  | 'pack/file'
  | 'pack/file[by-id]'
  | 'pack/rating'
  | 'pack/rating[by-bot-id]'
  | 'pack/rating[contact]'
  | 'pack/rating[contact][by-bot-id]'
  | 'pack/shell'
  | 'pack/task'
  | 'pack/task[by-bot-id]'
  | 'pack/task[contact]'
  | 'pack/task[contact][by-bot-id]'
  | 'rating/create'
  | 'rating/create[by-bot-id]'
  | 'rating/create[contact]'
  | 'rating/create[contact][by-bot-id]'
  | 'rating/delete'
  | 'rating/delete[by-bot-id]'
  | 'rating/delete[contact]'
  | 'rating/delete[contact][by-bot-id]'
  | 'rating/fetch'
  | 'rating/fetch[by-bot-id]'
  | 'rating/fetch[contact]'
  | 'rating/fetch[contact][by-bot-id]'
  | 'rating/list'
  | 'rating/list[by-bot-id]'
  | 'rating/list[contact]'
  | 'rating/list[contact][by-bot-id]'
  | 'search/images'
  | 'search/news'
  | 'search/videos'
  | 'search/web'
  | 'shell/eval/node'
  | 'shell/eval/python'
  | 'shell/exec'
  | 'shell/exec/node'
  | 'shell/exec/python'
  | 'shell/import'
  | 'shell/read'
  | 'shell/rw'
  | 'shell/skillset/install[by-id]'
  | 'shell/write'
  | 'slack/conversation/start[by-id]'
  | 'space/create'
  | 'space/create[contact]'
  | 'space/delete[by-id]'
  | 'space/delete[contact][by-id]'
  | 'space/fetch[by-id]'
  | 'space/fetch[contact][by-id]'
  | 'space/list'
  | 'space/list[contact]'
  | 'space/skill/create'
  | 'space/skill/create[by-id]'
  | 'space/skill/list'
  | 'space/skill/list[by-id]'
  | 'space/skill/read'
  | 'space/skill/read[by-id]'
  | 'space/storage/copy'
  | 'space/storage/copy[by-id]'
  | 'space/storage/delete'
  | 'space/storage/delete[by-id]'
  | 'space/storage/import'
  | 'space/storage/import[by-id]'
  | 'space/storage/link'
  | 'space/storage/link[by-id]'
  | 'space/storage/list'
  | 'space/storage/list[by-id]'
  | 'space/storage/move'
  | 'space/storage/move[by-id]'
  | 'space/storage/read'
  | 'space/storage/read[by-id]'
  | 'space/storage/rw'
  | 'space/storage/rw[by-id]'
  | 'space/storage/search'
  | 'space/storage/search[by-id]'
  | 'space/storage/write'
  | 'space/storage/write[by-id]'
  | 'space/update[by-id]'
  | 'space/update[contact][by-id]'
  | 'task/create'
  | 'task/create[by-bot-id]'
  | 'task/create[contact]'
  | 'task/create[contact][by-bot-id]'
  | 'task/delete'
  | 'task/delete[by-bot-id]'
  | 'task/delete[contact]'
  | 'task/delete[contact][by-bot-id]'
  | 'task/fetch'
  | 'task/fetch[by-bot-id]'
  | 'task/fetch[contact]'
  | 'task/fetch[contact][by-bot-id]'
  | 'task/list'
  | 'task/list[by-bot-id]'
  | 'task/list[contact]'
  | 'task/list[contact][by-bot-id]'
  | 'task/run'
  | 'task/run[by-bot-id]'
  | 'task/run[contact]'
  | 'task/run[contact][by-bot-id]'
  | 'task/update'
  | 'task/update[by-bot-id]'
  | 'task/update[contact]'
  | 'task/update[contact][by-bot-id]'
  | 'telegram/conversation/start[by-id]'
  | 'text/article/generate'
  | 'text/email/generate'
  | 'text/generate'
  | 'text/summarize'
  | 'text/translate'
  | 'time/now'
  | 'todo/manage'
  | 'todo/read'
  | 'todo/write'
  | 'url/graphql'
  | 'url/sql'
  | 'view/describe'
  | 'whatsapp/conversation/start[by-id]'

// --- Ability Metadata ---

export interface CbkAbilityMetadata {
  name: string
  description: string
  tags: string[]
}

// --- Ability Parameters ---

export type AbortParameters = {
 /** a very short reason for the abort, e.g. "task succeeded", "task failed", etc */
  reason: string
}

export type AbortFailureParameters = {
 /** a very short reason for the abort, e.g. "task failed", "task aborted", etc */
  reason: string
}

export type AbortSuccessParameters = {
 /** a very short reason for the abort, e.g. "task succeeded", "task completed", etc */
  reason: string
}

export type AgentExecuteParameters = {
 /** the role and personality of the executor */
  backstory: string
 /** the model to use */
  '@model'?: string
 /** instructions for the task execution */
  '@instructions'?: string
 /** optional timeout in milliseconds */
  timeout?: number
}

export type AgentTaskEvaluateParameters = {
 /** the role and personality of the evaluator */
  '@backstory': string
 /** the model to use */
  '@model'?: string
 /** instructions for the evaluation */
  '@instructions'?: string
 /** optional timeout in milliseconds */
  timeout?: number
}

export type AgentTaskPlanParameters = {
 /** the role and personality of the planner */
  '@backstory': string
 /** the model to use */
  '@model'?: string
 /** instructions for the task plan */
  '@instructions'?: string
 /** optional timeout in milliseconds */
  timeout?: number
}

export type AttachmentReadParameters = {
 /** the attachment name to read */
  name: string
}

export type BlueprintNoteListParameters = Record<string, never>

export type BlueprintResourceListParameters = {
 /** optional resource type to filter by */
  type?: string
}

export type BotAskParameters = {
 /** the question to ask the bot */
  question: string
 /** optional timeout in milliseconds */
  timeout?: number
}

export type BotAskByIdParameters = {
 /** the bot ID */
  botId: string
 /** the question to ask the bot */
  question: string
 /** optional timeout in milliseconds */
  timeout?: number
}

export type BotAskMultiParameters = {
 /** comma-separated list of bot IDs to ask */
  ids: string
 /** the question to ask the bots */
  question: string
 /** optional timeout in milliseconds */
  timeout?: number
}

export type BotBackstoryReadParameters = Record<string, never>

export type BotBackstoryReadByIdParameters = {
 /** the bot ID */
  botId: string
}

export type BotBackstoryWriteParameters = {
 /** the new backstory content for the bot */
  content: string
}

export type BotBackstoryWriteByIdParameters = {
 /** the bot ID */
  botId: string
 /** the new backstory content for the bot */
  content: string
}

export type BotCallParameters = {
 /** detailed description of the action to be performed */
  action: string
 /** optional timeout in milliseconds */
  timeout?: number
}

export type BotCallByIdParameters = {
 /** the bot ID */
  botId: string
 /** detailed description of the action to be performed */
  action: string
 /** optional timeout in milliseconds */
  timeout?: number
}

export type BotCallMultiParameters = {
 /** comma-separated list of bot IDs to call */
  ids: string
 /** detailed description of the action to be performed */
  action: string
 /** optional timeout in milliseconds */
  timeout?: number
}

export type BotListParameters = {
 /** optional limit on the number of bots to return */
  take?: number
}

export type BrowserDispatchParameters = {
 /** the task to perform in the browser */
  task: string
 /** optional URL of the page to dispatch the action */
  url?: string
 /** timeout in milliseconds */
  timeout?: number
}

export type ConversationFetchBotByIdParameters = {
 /** the ID of the conversation to fetch */
  conversationId: string
}

export type ConversationFetchByIdParameters = {
 /** the ID of the conversation to fetch */
  conversationId: string
}

export type ConversationFetchContactByIdParameters = {
 /** the ID of the conversation to fetch */
  conversationId: string
}

export type ConversationListParameters = Record<string, never>

export type ConversationListBotParameters = Record<string, never>

export type ConversationListContactParameters = Record<string, never>

export type ConversationMcpInstallUrlParameters = {
 /** the remote MCP URL */
  url: string
}

export type ConversationMcpUninstallUrlParameters = {
 /** the remote MCP URL to uninstall */
  url: string
}

export type ConversationSearchParameters = {
 /** the search query to find conversations */
  query: string
}

export type ConversationSearchBotParameters = {
 /** the search query to find conversations */
  query: string
}

export type ConversationSearchContactParameters = {
 /** the search query to find conversations */
  query: string
}

export type ConversationSkillsetInstallByIdParameters = {
 /** the skillset ID to install */
  skillsetId: string
}

export type ConversationSkillsetUninstallByIdParameters = {
 /** the skillset ID to uninstall */
  skillsetId: string
}

export type DatasetCreateParameters = {
 /** the name of the dataset */
  name: string
}

export type DatasetFileCreateUrlParameters = {
 /** the dataset Id that you want to add the file to */
  datasetId: string
 /** the URL of the file to add */
  url: string
}

export type DatasetListParameters = Record<string, never>

export type DatasetRecordCreateParameters = {
 /** the dataset Id that you want to create a record in */
  datasetId: string
 /** the record to create */
  record: string
}

export type DatasetSearchParameters = {
 /** the dataset Id that you want to search */
  datasetId: string
 /** search query */
  query: string
}

export type DiscordConversationStartByIdParameters = {
 /** The ID of the Discord integration to use */
  discordIntegrationId: string
 /** The Discord channel ID to send the message to */
  channelId: string
 /** The initial message text to send to start the conversation */
  text: string
 /** Optional context about the recipient or conversation, typically generated by the agent */
  context?: string
}

export type EmailConversationStartByIdParameters = {
 /** The ID of the email integration to use */
  emailIntegrationId: string
 /** The recipient email address to send to */
  email: string
 /** The subject line of the email */
  subject: string
 /** The initial message text to send to start the conversation */
  text: string
 /** Optional context about the recipient or conversation, which will be used to inform how to proceed with the conversation */
  context?: string
}

export type EmailSendParameters = {
 /** recipient's email address */
  to: string
 /** the email subject */
  subject?: string
 /** the content of the email in markdown format */
  content: string
}

export type ExampleFetchApiGetParameters = Record<string, never>

export type ExampleFetchApiPostParameters = Record<string, never>

export type ExampleFetchApiPostParamsParameters = {
 /** The description of param1 */
  param1: string
 /** The description of param2 */
  param2: string
}

export type FetchMetadataParameters = {
 /** the url of the page to fetch, including https:// prefix */
  url: string
}

export type FetchRequestParameters = {
 /** the HTTP method to use (GET, POST, PUT, DELETE, PATCH, HEAD, OPTIONS) */
  method: string
 /** the full URL to make the request to */
  url: string
 /** the content type header (e.g., application/json, text/plain) */
  contentType?: string
 /** the request body as text - for POST, PUT, PATCH requests */
  body?: string
}

export type FetchRequestWithAuthParameters = {
 /** the HTTP method to use (GET, POST, PUT, DELETE, PATCH, HEAD, OPTIONS) */
  method: string
 /** the full URL to make the request to */
  url: string
 /** the content type header (e.g., application/json, text/plain) */
  contentType?: string
 /** the request body as text - for POST, PUT, PATCH requests */
  body?: string
}

export type FetchTextGetParameters = {
 /** the url of the page to fetch, including https:// prefix */
  url: string
}

export type FileAppendParameters = {
 /** content to append to the file */
  content: string
}

export type FileAppendByIdParameters = {
 /** the file Id that you want to append to */
  fileId: string
 /** content to append to the file */
  content: string
}

export type FilePrependParameters = {
 /** content to prepend to the file */
  content: string
}

export type FilePrependByIdParameters = {
 /** the file Id that you want to prepend to */
  fileId: string
 /** content to prepend to the file */
  content: string
}

export type FileReadParameters = {
 /** the line number to start reading from (1-indexed, line 1 is the first line) */
  startLine: number
 /** the line number to end reading at, inclusive (1-indexed). Prefer reading at least 100 lines or more per request to minimize round trips */
  endLine: number
}

export type FileReadByIdParameters = {
 /** the file Id that you want to read */
  fileId: string
 /** the line number to start reading from (1-indexed, line 1 is the first line) */
  startLine?: number
 /** the line number to end reading at, inclusive (1-indexed). Prefer reading at least 100 lines or more per request to minimize round trips */
  endLine?: number
}

export type FileReplaceParameters = {
 /** text to search for */
  search: string
 /** text to replace with */
  replace: string
 /** number of occurrences to replace (optional, replaces all if not specified) */
  count: number
}

export type FileReplaceByIdParameters = {
 /** the file Id that you want to replace in */
  fileId: string
 /** text to search for */
  search: string
 /** text to replace with */
  replace: string
 /** number of occurrences to replace (optional, replaces all if not specified) */
  count: number
}

export type FileRwParameters = {
 /** 'operation mode: "read" to read content, "write" to write content' */
  mode: string
 /** content to write (required for write mode) */
  content?: string
 /** 'the line number to start from (1-indexed). For read: where to start reading. For write: where to start writing.' */
  startLine?: number
 /** 'the line number to end at, inclusive (1-indexed). For read: where to stop reading. For write: range to replace.' */
  endLine?: number
}

export type FileRwByIdParameters = {
 /** the file Id that you want to read from or write to */
  fileId: string
 /** 'operation mode: "read" to read content, "write" to write content' */
  mode: string
 /** content to write (required for write mode) */
  content?: string
 /** 'the line number to start from (1-indexed). For read: where to start reading. For write: where to start writing.' */
  startLine?: number
 /** 'the line number to end at, inclusive (1-indexed). For read: where to stop reading. For write: range to replace.' */
  endLine?: number
}

export type FileSqlParameters = {
 /** the SQL query to execute for table "table1" */
  sql: string
}

export type FileSqlByIdParameters = {
 /** the SQL query to execute */
  sql: string
 /** the file ID for the "table1" table where to load the data from */
  table1_fileId: string
}

export type FileWriteParameters = {
 /** content to write to the file */
  content: string
 /** the line number to start writing at (1-indexed). If only startLine is provided, content is inserted before this line. If both startLine and endLine are provided, lines in that range are replaced. */
  startLine?: number
 /** the line number to end writing at, inclusive (1-indexed). Used with startLine to replace a range of lines. */
  endLine?: number
}

export type FileWriteByIdParameters = {
 /** the file Id that you want to write to */
  fileId: string
 /** content to write to the file */
  content: string
 /** the line number to start writing at (1-indexed). If only startLine is provided, content is inserted before this line. If both startLine and endLine are provided, lines in that range are replaced. */
  startLine?: number
 /** the line number to end writing at, inclusive (1-indexed). Used with startLine to replace a range of lines. */
  endLine?: number
}

export type GitFileFetchParameters = {
 /** Git repository URL */
  url: string
 /** Git reference (branch, tag, or commit SHA) */
  ref: string
 /** Path to the file within the repository */
  filePath: string
}

export type GitTreeFetchParameters = {
 /** Git repository URL */
  url: string
 /** Git reference (branch, tag, or commit SHA) */
  ref: string
 /** Path to the subtree within the repository */
  path: string
 /** Pattern to exclude from the subtree */
  pattern: string
}

export type GraphqlCbkParameters = {
 /** the GraphQL query to execute */
  query: string
 /** optional GraphQL query variables in JSON format */
  variables?: string
}

export type ImageGenerateParameters = {
 /** the prompt to use for image generation */
  prompt: string
 /** the image model to use */
  model: string
}

export type ImageGenerateGemini25FlashImageParameters = {
 /** the prompt to use for image generation */
  prompt: string
 /** detailed directions how to generate the image */
  directions?: string
}

export type ImageGenerateGemini31FlashImageParameters = {
 /** the prompt to use for image generation */
  prompt: string
 /** detailed directions how to generate the image */
  directions?: string
}

export type ImageGenerateGptImage15Parameters = {
 /** the prompt to use for image generation */
  prompt: string
 /** detailed directions how to generate the image */
  directions?: string
}

export type ImageGenerateGptImage1Parameters = {
 /** the prompt to use for image generation */
  prompt: string
 /** detailed directions how to generate the image */
  directions?: string
}

export type ImageGenerateGptImage2Parameters = {
 /** the prompt to use for image generation */
  prompt: string
 /** detailed directions how to generate the image */
  directions?: string
}

export type ImageModifyParameters = {
 /** the prompt to use for image generation */
  prompt: string
 /** the URL of the image to edit */
  image_url: string
 /** the image model to use */
  model: string
}

export type ImageModifyGemini25FlashImageParameters = {
 /** the prompt to use for image generation */
  prompt: string
 /** detailed directions how to modify the image */
  directions?: string
 /** the URL of the image to edit */
  image_url: string
}

export type ImageModifyGemini31FlashImageParameters = {
 /** the prompt to use for image generation */
  prompt: string
 /** detailed directions how to modify the image */
  directions?: string
 /** the URL of the image to edit */
  image_url: string
}

export type ImageModifyGptImage15Parameters = {
 /** the prompt to use for image generation */
  prompt: string
 /** detailed directions how to modify the image */
  directions?: string
 /** the URL of the image to edit */
  image_url: string
}

export type ImageModifyGptImage1Parameters = {
 /** the prompt to use for image generation */
  prompt: string
 /** detailed directions how to modify the image */
  directions?: string
 /** the URL of the image to edit */
  image_url: string
}

export type ImageModifyGptImage2Parameters = {
 /** the prompt to use for image generation */
  prompt: string
 /** detailed directions how to modify the image */
  directions?: string
 /** the URL of the image to edit */
  image_url: string
}

export type ListenTranscribeParameters = {
 /** directions how to describe an image */
  directions?: string
 /** the URL of the audio file to transcribe */
  audio_url: string
}

export type MathEvaluateParameters = {
 /** the math expression to evaluate */
  expression: string
}

export type MemoryCreateParameters = {
 /** the content of the memory to create */
  content: string
}

export type MemoryCreateBotParameters = {
 /** the content of the memory to create */
  content: string
}

export type MemoryCreateContactParameters = {
 /** the content of the memory to create */
  content: string
}

export type MemoryDeleteBotByIdParameters = {
 /** the ID of the memory to delete */
  memoryId: string
}

export type MemoryDeleteByIdParameters = {
 /** the ID of the memory to delete */
  memoryId: string
}

export type MemoryDeleteContactByIdParameters = {
 /** the ID of the memory to delete */
  memoryId: string
}

export type MemoryListParameters = Record<string, never>

export type MemoryListBotParameters = Record<string, never>

export type MemoryListContactParameters = Record<string, never>

export type MemorySearchParameters = {
 /** the search query */
  query: string
}

export type MemorySearchBotParameters = {
 /** the search query */
  query: string
}

export type MemorySearchContactParameters = {
 /** the search query */
  query: string
}

export type MemoryUpdateBotByIdParameters = {
 /** the ID of the memory to update */
  memoryId: string
 /** the updated content of the memory */
  content: string
}

export type MemoryUpdateByIdParameters = {
 /** the ID of the memory to update */
  memoryId: string
 /** the updated content of the memory */
  content: string
}

export type MemoryUpdateContactByIdParameters = {
 /** the ID of the memory to update */
  memoryId: string
 /** the updated content of the memory */
  content: string
}

export type MockApiCreateParameters = {
 /** a made up request body in json format that matches the method name and description */
  body?: string
}

export type MockApiDeleteParameters = {
 /** the ID of the resource to delete */
  id?: string
}

export type MockApiListParameters = Record<string, never>

export type MockApiUpdateParameters = {
 /** the ID of the resource to update */
  id?: string
 /** a made up request body in json format that matches the method name and description */
  body?: string
}

export type MockApiSearchParameters = {
 /** a made up search query that matches the method name and description */
  query: string
}

export type MockDatasetParameters = {
 /** a made up search query that matches the method name and description */
  query: string
}

export type MockSqlParameters = {
 /** a made up sql query to execute that matches the method name and description */
  query: string
}

export type PackBotReprogrammingParameters = Record<string, never>

export type PackCbkSpaceSkillsParameters = Record<string, never>

export type PackCbkSpaceStorageParameters = Record<string, never>

export type PackCbkSpaceStorageReadOnlyParameters = Record<string, never>

export type PackFileParameters = Record<string, never>

export type PackFileByIdParameters = Record<string, never>

export type PackRatingParameters = Record<string, never>

export type PackRatingByBotIdParameters = Record<string, never>

export type PackRatingContactParameters = Record<string, never>

export type PackRatingContactByBotIdParameters = Record<string, never>

export type PackShellParameters = Record<string, never>

export type PackTaskParameters = Record<string, never>

export type PackTaskByBotIdParameters = Record<string, never>

export type PackTaskContactParameters = Record<string, never>

export type PackTaskContactByBotIdParameters = Record<string, never>

export type RatingCreateParameters = {
 /** optional name of the rating */
  name?: string
 /** optional description of the rating */
  description?: string
 /** the numeric rating value */
  value: number
 /** optional reason for the rating */
  reason?: string
 /** optional conversation ID to associate with the rating */
  conversationId?: string
 /** optional message ID to associate with the rating */
  messageId?: string
}

export type RatingCreateByBotIdParameters = {
 /** optional bot ID to assign */
  botId?: string
 /** optional name of the rating */
  name?: string
 /** optional description of the rating */
  description?: string
 /** the numeric rating value */
  value: number
 /** optional reason for the rating */
  reason?: string
 /** optional conversation ID to associate with the rating */
  conversationId?: string
 /** optional message ID to associate with the rating */
  messageId?: string
}

export type RatingCreateContactParameters = {
 /** optional name of the rating */
  name?: string
 /** optional description of the rating */
  description?: string
 /** the numeric rating value */
  value: number
 /** optional reason for the rating */
  reason?: string
 /** optional conversation ID to associate with the rating */
  conversationId?: string
 /** optional message ID to associate with the rating */
  messageId?: string
}

export type RatingCreateContactByBotIdParameters = {
 /** optional bot ID to assign */
  botId?: string
 /** optional name of the rating */
  name?: string
 /** optional description of the rating */
  description?: string
 /** the numeric rating value */
  value: number
 /** optional reason for the rating */
  reason?: string
 /** optional conversation ID to associate with the rating */
  conversationId?: string
 /** optional message ID to associate with the rating */
  messageId?: string
}

export type RatingDeleteParameters = {
 /** the ID of the rating to delete */
  ratingId: string
}

export type RatingDeleteByBotIdParameters = {
 /** optional bot ID to scope by */
  botId: string
 /** the ID of the rating to delete */
  ratingId: string
}

export type RatingDeleteContactParameters = {
 /** the ID of the rating to delete */
  ratingId: string
}

export type RatingDeleteContactByBotIdParameters = {
 /** optional bot ID to scope by */
  botId: string
 /** the ID of the rating to delete */
  ratingId: string
}

export type RatingFetchParameters = {
 /** the ID of the rating to fetch */
  ratingId: string
}

export type RatingFetchByBotIdParameters = {
 /** optional bot ID to scope by */
  botId: string
 /** the ID of the rating to fetch */
  ratingId: string
}

export type RatingFetchContactParameters = {
 /** the ID of the rating to fetch */
  ratingId: string
}

export type RatingFetchContactByBotIdParameters = {
 /** optional bot ID to scope by */
  botId: string
 /** the ID of the rating to fetch */
  ratingId: string
}

export type RatingListParameters = {
 /** optional rating value to filter by */
  value?: number
}

export type RatingListByBotIdParameters = {
 /** optional bot ID to scope by */
  botId: string
 /** optional rating value to filter by */
  value?: number
}

export type RatingListContactParameters = {
 /** optional rating value to filter by */
  value?: number
}

export type RatingListContactByBotIdParameters = {
 /** optional bot ID to scope by */
  botId: string
 /** optional rating value to filter by */
  value?: number
}

export type SearchImagesParameters = {
 /** search query */
  query: string
}

export type SearchNewsParameters = {
 /** search query */
  query: string
}

export type SearchVideosParameters = {
 /** search query */
  query: string
}

export type SearchWebParameters = {
 /** search query */
  query: string
}

export type ShellEvalNodeParameters = {
 /** the JavaScript code to evaluate */
  code: string
 /** timeout in milliseconds (max 300000ms/5min) */
  timeout?: number
}

export type ShellEvalPythonParameters = {
 /** the Python code to evaluate */
  code: string
 /** timeout in milliseconds (max 300000ms/5min) */
  timeout?: number
}

export type ShellExecParameters = {
 /** the bash shell command or script */
  command: string
 /** timeout in milliseconds (max 300000ms/5min) */
  timeout?: number
}

export type ShellExecNodeParameters = {
 /** the Node.js script content */
  script: string
 /** timeout in milliseconds (max 300000ms/5min) */
  timeout?: number
}

export type ShellExecPythonParameters = {
 /** the Python script content */
  script: string
 /** timeout in milliseconds (max 300000ms/5min) */
  timeout?: number
}

export type ShellImportParameters = {
 /** the URL to import data from (must be http or https) */
  url: string
 /** the destination path in the shell sandbox */
  path: string
}

export type ShellReadParameters = {
 /** absolute path to the file to read */
  path: string
 /** the line number to start reading from (1-indexed, line 1 is the first line) */
  startLine: number
 /** the line number to end reading at, inclusive (1-indexed). Prefer reading at least 100 lines or more per request to minimize round trips */
  endLine: number
}

export type ShellRwParameters = {
 /** absolute path to the file to read from or write to */
  path: string
 /** 'operation mode: "read" to read content, "write" to write content' */
  mode: string
 /** content to write (required for write mode) */
  content?: string
 /** 'the line number to start from (1-indexed). For read: where to start reading. For write: where to start writing.' */
  startLine?: number
 /** 'the line number to end at, inclusive (1-indexed). For read: where to stop reading. For write: range to replace.' */
  endLine?: number
}

export type ShellSkillsetInstallByIdParameters = {
 /** the ID of the skillset to install */
  skillsetId: string
}

export type ShellWriteParameters = {
 /** absolute path to the file to write to */
  path: string
 /** the content to write to the file */
  content: string
 /** the line number to start writing at (1-indexed). If only startLine is provided, content is inserted before this line. If both startLine and endLine are provided, lines in that range are replaced. */
  startLine?: number
 /** the line number to end writing at, inclusive (1-indexed). Used with startLine to replace a range of lines. */
  endLine?: number
}

export type SlackConversationStartByIdParameters = {
 /** The ID of the Slack integration to use */
  slackIntegrationId: string
 /** 'The Slack channel or user to send to. Supports: channel IDs (C01234567), DM IDs (D01234567), #channel-name, or @username' */
  channel: string
 /** The initial message text to send to start the conversation */
  text: string
 /** Optional context about the recipient or conversation, typically generated by the agent */
  context?: string
}

export type SpaceCreateParameters = {
 /** the name of the space */
  name: string
 /** an optional description of the space */
  description?: string
}

export type SpaceCreateContactParameters = {
 /** the name of the space */
  name: string
 /** an optional description of the space */
  description?: string
}

export type SpaceDeleteByIdParameters = {
 /** the ID of the space to delete */
  spaceId: string
}

export type SpaceDeleteContactByIdParameters = {
 /** the ID of the space to delete */
  spaceId: string
}

export type SpaceFetchByIdParameters = {
 /** the ID of the space to fetch */
  spaceId: string
}

export type SpaceFetchContactByIdParameters = {
 /** the ID of the space to fetch */
  spaceId: string
}

export type SpaceListParameters = Record<string, never>

export type SpaceListContactParameters = Record<string, never>

export type SpaceSkillCreateParameters = {
 /** Lowercase kebab-case slug for the skill, used as the directory name under .skills/ */
  slug: string
 /** The display name of the skill */
  name: string
 /** A short description of what the skill does */
  description: string
 /** The main body content of the skill */
  content: string
}

export type SpaceSkillCreateByIdParameters = {
 /** The ID of the space to create the skill(s) in */
  spaceId: string
 /** Lowercase kebab-case slug for the skill, used as the directory name under .skills/ */
  slug: string
 /** The display name of the skill */
  name: string
 /** A short description of what the skill does */
  description: string
 /** The main body content of the skill */
  content: string
}

export type SpaceSkillListParameters = Record<string, never>

export type SpaceSkillListByIdParameters = {
 /** The ID of the space to list skills from */
  spaceId: string
}

export type SpaceSkillReadParameters = {
 /** Path to a SKILL.md file, as returned by the list ability */
  path: string
}

export type SpaceSkillReadByIdParameters = {
 /** The ID of the space to read skills from */
  spaceId: string
 /** Path to a SKILL.md file, as returned by the list ability */
  path: string
}

export type SpaceStorageCopyParameters = {
 /** the path to the file to copy */
  path: string
 /** the destination path for the copied file */
  destinationPath: string
}

export type SpaceStorageCopyByIdParameters = {
 /** the ID of the space to copy files in */
  spaceId: string
 /** the path to the file to copy */
  path: string
 /** the destination path for the copied file */
  destinationPath: string
}

export type SpaceStorageDeleteParameters = {
 /** the path to the file to delete */
  path: string
}

export type SpaceStorageDeleteByIdParameters = {
 /** the ID of the space to delete files from */
  spaceId: string
 /** the path to the file to delete */
  path: string
}

export type SpaceStorageImportParameters = {
 /** the URL to import from */
  url: string
 /** the destination path in the space storage */
  path: string
}

export type SpaceStorageImportByIdParameters = {
 /** the ID of the space to import into */
  spaceId: string
 /** the URL to import from */
  url: string
 /** the destination path in the space storage */
  path: string
}

export type SpaceStorageLinkParameters = {
 /** the path to the file to get a link for */
  path: string
}

export type SpaceStorageLinkByIdParameters = {
 /** the ID of the space */
  spaceId: string
 /** the path to the file to get a link for */
  path: string
}

export type SpaceStorageListParameters = {
 /** optional directory path to list files from */
  path?: string
 /** whether to list files recursively */
  recursive?: boolean
}

export type SpaceStorageListByIdParameters = {
 /** the ID of the space to list files from */
  spaceId: string
 /** optional directory path to list files from */
  path?: string
 /** whether to list files recursively */
  recursive?: boolean
}

export type SpaceStorageMoveParameters = {
 /** the path to the file to move */
  path: string
 /** the destination path for the file */
  destinationPath: string
}

export type SpaceStorageMoveByIdParameters = {
 /** the ID of the space to move files in */
  spaceId: string
 /** the path to the file to move */
  path: string
 /** the destination path for the file */
  destinationPath: string
}

export type SpaceStorageReadParameters = {
 /** absolute path to the file to read */
  path: string
 /** the line number to start reading from (1-indexed, line 1 is the first line) */
  startLine?: number
 /** the line number to end reading at, inclusive (1-indexed). Prefer reading at least 100 lines or more per request to minimize round trips */
  endLine?: number
}

export type SpaceStorageReadByIdParameters = {
 /** the ID of the space to read files from */
  spaceId: string
 /** the path to the file to read */
  path: string
 /** the line number to start reading from (1-indexed, line 1 is the first line) */
  startLine?: number
 /** the line number to end reading at, inclusive (1-indexed). Prefer reading at least 100 lines or more per request to minimize round trips */
  endLine?: number
}

export type SpaceStorageRwParameters = {
 /** the path to the file to read or write */
  path: string
 /** 'the mode: "read" to read file contents, "write" to write content' */
  mode: string
 /** the content to write to the file (required for write mode) */
  content?: string
 /** the line number to start at (1-indexed). For read mode, limits the output. For write mode with only startLine, content is inserted before this line. For write mode with both startLine and endLine, lines in that range are replaced. */
  startLine?: number
 /** the line number to end at, inclusive (1-indexed). For read mode, limits the output. For write mode, used with startLine to replace a range of lines. */
  endLine?: number
}

export type SpaceStorageRwByIdParameters = {
 /** the ID of the space to read or write files in */
  spaceId: string
 /** the path to the file to read or write */
  path: string
 /** 'the mode: "read" to read file contents, "write" to write content' */
  mode: string
 /** the content to write to the file (required for write mode) */
  content?: string
 /** the line number to start at (1-indexed). For read mode, limits the output. For write mode with only startLine, content is inserted before this line. For write mode with both startLine and endLine, lines in that range are replaced. */
  startLine?: number
 /** the line number to end at, inclusive (1-indexed). For read mode, limits the output. For write mode, used with startLine to replace a range of lines. */
  endLine?: number
}

export type SpaceStorageSearchParameters = {
 /** the search query */
  query: string
}

export type SpaceStorageSearchByIdParameters = {
 /** the ID of the space to search files in */
  spaceId: string
 /** the search query */
  query: string
}

export type SpaceStorageWriteParameters = {
 /** absolute path to the file to write */
  path: string
 /** the content to write to the file */
  content: string
 /** the line number to start writing at (1-indexed). If only startLine is provided, content is inserted before this line. If both startLine and endLine are provided, lines in that range are replaced. */
  startLine?: number
 /** the line number to end writing at, inclusive (1-indexed). Used with startLine to replace a range of lines. */
  endLine?: number
}

export type SpaceStorageWriteByIdParameters = {
 /** the ID of the space to write files to */
  spaceId: string
 /** the path to the file to write */
  path: string
 /** the content to write to the file */
  content: string
 /** the line number to start writing at (1-indexed). If only startLine is provided, content is inserted before this line. If both startLine and endLine are provided, lines in that range are replaced. */
  startLine?: number
 /** the line number to end writing at, inclusive (1-indexed). Used with startLine to replace a range of lines. */
  endLine?: number
}

export type SpaceUpdateByIdParameters = {
 /** the ID of the space to update */
  spaceId: string
 /** the updated name of the space */
  name?: string
 /** the updated description of the space */
  description?: string
}

export type SpaceUpdateContactByIdParameters = {
 /** the ID of the space to update */
  spaceId: string
 /** the updated name of the space */
  name?: string
 /** the updated description of the space */
  description?: string
}

export type TaskCreateParameters = {
 /** the name of the task */
  name: string
 /** a detailed description that captures all the necessary information to complete the task */
  description: string
 /** optional schedule - now, 2027-12-31T23:59:59, quarterhourly, halfhourly, hourly, daily, weekly, monthly, 0 0 * * * */
  schedule?: string
}

export type TaskCreateByBotIdParameters = {
 /** optional bot ID to assign */
  botId?: string
 /** the name of the task */
  name: string
 /** a detailed description that captures all the necessary information to complete the task */
  description: string
 /** optional schedule - now, 2027-12-31T23:59:59, quarterhourly, halfhourly, hourly, daily, weekly, monthly, 0 0 * * * */
  schedule?: string
}

export type TaskCreateContactParameters = {
 /** the name of the task */
  name: string
 /** a detailed description that captures all the necessary information to complete the task */
  description: string
 /** optional schedule - now, 2027-12-31T23:59:59, quarterhourly, halfhourly, hourly, daily, weekly, monthly, 0 0 * * * */
  schedule?: string
}

export type TaskCreateContactByBotIdParameters = {
 /** optional bot ID to assign */
  botId?: string
 /** the name of the task */
  name: string
 /** a detailed description that captures all the necessary information to complete the task */
  description: string
 /** optional schedule - now, 2027-12-31T23:59:59, quarterhourly, halfhourly, hourly, daily, weekly, monthly, 0 0 * * * */
  schedule?: string
}

export type TaskDeleteParameters = {
 /** the ID of the task to delete */
  taskId: string
}

export type TaskDeleteByBotIdParameters = {
 /** optional bot ID to scope by */
  botId: string
 /** the ID of the task to delete */
  taskId: string
}

export type TaskDeleteContactParameters = {
 /** the ID of the task to delete */
  taskId: string
}

export type TaskDeleteContactByBotIdParameters = {
 /** optional bot ID to scope by */
  botId: string
 /** the ID of the task to delete */
  taskId: string
}

export type TaskFetchParameters = {
 /** the ID of the task to fetch */
  taskId: string
}

export type TaskFetchByBotIdParameters = {
 /** optional bot ID to scope by */
  botId: string
 /** the ID of the task to fetch */
  taskId: string
}

export type TaskFetchContactParameters = {
 /** the ID of the task to fetch */
  taskId: string
}

export type TaskFetchContactByBotIdParameters = {
 /** optional bot ID to scope by */
  botId: string
 /** the ID of the task to fetch */
  taskId: string
}

export type TaskListParameters = Record<string, never>

export type TaskListByBotIdParameters = {
 /** optional bot ID to scope by */
  botId: string
}

export type TaskListContactParameters = Record<string, never>

export type TaskListContactByBotIdParameters = {
 /** optional bot ID to scope by */
  botId: string
}

export type TaskRunParameters = {
 /** the ID of the task to run */
  taskId: string
}

export type TaskRunByBotIdParameters = {
 /** optional bot ID to scope by */
  botId: string
 /** the ID of the task to run */
  taskId: string
}

export type TaskRunContactParameters = {
 /** the ID of the task to run */
  taskId: string
}

export type TaskRunContactByBotIdParameters = {
 /** optional bot ID to scope by */
  botId: string
 /** the ID of the task to run */
  taskId: string
}

export type TaskUpdateParameters = {
 /** the ID of the task to update */
  taskId: string
 /** the updated name of the task */
  name: string
 /** an updated detailed description that captures all the necessary information to complete the task */
  description: string
 /** optional schedule - now, 2027-12-31T23:59:59, quarterhourly, halfhourly, hourly, daily, weekly, monthly, 0 0 * * * */
  schedule?: string
}

export type TaskUpdateByBotIdParameters = {
 /** optional bot ID to scope by */
  botId: string
 /** the ID of the task to update */
  taskId: string
 /** the updated name of the task */
  name: string
 /** an updated detailed description that captures all the necessary information to complete the task */
  description: string
 /** optional schedule - now, 2027-12-31T23:59:59, quarterhourly, halfhourly, hourly, daily, weekly, monthly, 0 0 * * * */
  schedule?: string
}

export type TaskUpdateContactParameters = {
 /** the ID of the task to update */
  taskId: string
 /** the updated name of the task */
  name: string
 /** an updated detailed description that captures all the necessary information to complete the task */
  description: string
 /** optional schedule - now, 2027-12-31T23:59:59, quarterhourly, halfhourly, hourly, daily, weekly, monthly, 0 0 * * * */
  schedule?: string
}

export type TaskUpdateContactByBotIdParameters = {
 /** optional bot ID to scope by */
  botId: string
 /** the ID of the task to update */
  taskId: string
 /** the updated name of the task */
  name: string
 /** an updated detailed description that captures all the necessary information to complete the task */
  description: string
 /** optional schedule - now, 2027-12-31T23:59:59, quarterhourly, halfhourly, hourly, daily, weekly, monthly, 0 0 * * * */
  schedule?: string
}

export type TelegramConversationStartByIdParameters = {
 /** The ID of the Telegram integration to use */
  telegramIntegrationId: string
 /** The Telegram chat ID to send the message to. This can be a user ID, group chat ID, or channel ID */
  chatId: string
 /** The initial message text to send to start the conversation */
  text: string
 /** Optional context about the recipient or conversation, typically generated by the agent */
  context?: string
}

export type TextArticleGenerateParameters = {
 /** additional directions how to generate the article */
  directions?: string
 /** the topic of the article */
  topic: string
 /** the source to use for the article generation */
  source: string
}

export type TextEmailGenerateParameters = {
 /** optional directions how to generate the email */
  directions?: string
 /** the source to use for email generation */
  source: string
}

export type TextGenerateParameters = {
 /** optional directions how to generate the text */
  directions?: string
 /** the source to use for text generation */
  source: string
}

export type TextSummarizeParameters = {
 /** optional directions how to summarize the text */
  directions?: string
 /** the source text to summarize */
  source: string
}

export type TextTranslateParameters = {
 /** optional directions how to translate the text */
  directions?: string
 /** the source text to translate */
  source: string
}

export type TimeNowParameters = {
 /** optional IANA timezone such as UTC, America/New_York, or Europe/London */
  timezone?: string
 /** 'optional output format: datetime, date, time, iso, or unix' */
  format?: string
}

export type TodoManageParameters = {
 /** 'the operation to perform: read to retrieve todos, write to replace the entire list' */
  operation: string
 /** unique identifier for the todo */
  id: number
 /** concise action-oriented todo label (3-7 words) */
  title: string
 /** 'not-started: not begun | in-progress: currently working | completed: finished' */
  status: string
}

export type TodoReadParameters = Record<string, never>

export type TodoWriteParameters = {
 /** unique identifier for the todo (sequential numbers) */
  id: number
 /** concise action-oriented todo label (3-7 words) */
  title: string
 /** the current status of the todo */
  status: string
}

export type UrlGraphqlParameters = {
 /** the GraphQL endpoint URL */
  endpoint: string
 /** the GraphQL query to execute */
  query: string
 /** optional GraphQL query variables in JSON format */
  variables?: string
}

export type UrlSqlParameters = {
 /** the SQL query to execute for table "table1" */
  sql: string
 /** the url for the "table1" table where to load the data from */
  table1_url: string
}

export type ViewDescribeParameters = {
 /** directions how to describe an image */
  directions?: string
 /** The URL of the image */
  image_url?: string
}

export type WhatsappConversationStartByIdParameters = {
 /** The ID of the WhatsApp integration to use */
  whatsappIntegrationId: string
 /** The recipient phone number in international format (e.g. 14155238886) */
  to: string
 /** The initial message text to send to start the conversation */
  text: string
 /** Optional context about the recipient or conversation, typically generated by the agent */
  context?: string
}

// --- Ability Registry ---

export interface CbkAbilityRegistry {
  'abort': {
    name: 'Abort Operation'
    description: 'Abort the current operation'
    parameters: AbortParameters
  }
  'abort[failure]': {
    name: 'Failure'
    description: 'Exit the current operation by marking the current operation as failure - must be called as the last operation if an unrecoverable error is encountered'
    parameters: AbortFailureParameters
  }
  'abort[success]': {
    name: 'Success'
    description: 'Exit the current operation by marking the current operation as successful - must be called as the last operation once all tasks are completed'
    parameters: AbortSuccessParameters
  }
  'agent/execute': {
    name: 'Execute Task'
    description: 'Execute a task using an agent'
    parameters: AgentExecuteParameters
  }
  'agent/task/evaluate': {
    name: 'Evaluate Task Execution'
    description: 'Evaluate how well a task was executed by an agent'
    parameters: AgentTaskEvaluateParameters
  }
  'agent/task/plan': {
    name: 'Plan Task Execution'
    description: 'Plan how a task should be executed by an agent'
    parameters: AgentTaskPlanParameters
  }
  'attachment/read': {
    name: 'Read Attachment'
    description: 'Read and extract content from uploaded file attachments. For text-based files, extracts and returns the text content. For image files (png, jpg, jpeg, gif, webp, bmp, tiff, svg), analyzes the image using vision capabilities. Locate the corresponding tool call for the attachment information. Does not support audio or video files.'
    parameters: AttachmentReadParameters
  }
  'blueprint/note/list': {
    name: 'List Current Blueprint Notes'
    description: 'List the notes stored in the current blueprint'
    parameters: BlueprintNoteListParameters
  }
  'blueprint/resource/list': {
    name: 'List Current Blueprint Resources'
    description: 'List the resources available in the current blueprint'
    parameters: BlueprintResourceListParameters
  }
  'bot/ask': {
    name: 'Ask Bot'
    description: 'Ask another bot a question'
    parameters: BotAskParameters
  }
  'bot/ask[by-id]': {
    name: 'Ask Bot'
    description: 'Ask another bot a question'
    parameters: BotAskByIdParameters
  }
  'bot/ask[multi]': {
    name: 'Ask Multiple Bots'
    description: 'Ask multiple bots a question'
    parameters: BotAskMultiParameters
  }
  'bot/backstory/read': {
    name: 'Read Bot Backstory'
    description: 'Read the backstory of a connected bot'
    parameters: BotBackstoryReadParameters
  }
  'bot/backstory/read[by-id]': {
    name: 'Read Bot Backstory'
    description: 'Read the backstory of a bot by ID'
    parameters: BotBackstoryReadByIdParameters
  }
  'bot/backstory/write': {
    name: 'Write Bot Backstory'
    description: 'Write the backstory of a connected bot'
    parameters: BotBackstoryWriteParameters
  }
  'bot/backstory/write[by-id]': {
    name: 'Write Bot Backstory'
    description: 'Write the backstory of a bot by ID'
    parameters: BotBackstoryWriteByIdParameters
  }
  'bot/call': {
    name: 'Call Bot'
    description: 'Call another bot to perform an action'
    parameters: BotCallParameters
  }
  'bot/call[by-id]': {
    name: 'Call Bot'
    description: 'Call another bot to perform an action'
    parameters: BotCallByIdParameters
  }
  'bot/call[multi]': {
    name: 'Call Multiple Bots'
    description: 'Call multiple bots to perform an action'
    parameters: BotCallMultiParameters
  }
  'bot/list': {
    name: 'List Bots'
    description: 'List all available bots for the current user account'
    parameters: BotListParameters
  }
  'browser/dispatch': {
    name: 'Dispatch Browser Task'
    description: 'Dispatch a specific task within a live web browser.'
    parameters: BrowserDispatchParameters
  }
  'conversation/fetch[bot][by-id]': {
    name: 'Fetch Conversation'
    description: 'Fetch details of a specific conversation'
    parameters: ConversationFetchBotByIdParameters
  }
  'conversation/fetch[by-id]': {
    name: 'Fetch Conversation'
    description: 'Fetch details of a specific conversation'
    parameters: ConversationFetchByIdParameters
  }
  'conversation/fetch[contact][by-id]': {
    name: 'Fetch Conversation'
    description: 'Fetch details of a specific conversation'
    parameters: ConversationFetchContactByIdParameters
  }
  'conversation/list': {
    name: 'List Conversations'
    description: 'List all conversations'
    parameters: ConversationListParameters
  }
  'conversation/list[bot]': {
    name: 'List Conversations'
    description: 'List all conversations'
    parameters: ConversationListBotParameters
  }
  'conversation/list[contact]': {
    name: 'List Conversations'
    description: 'List all conversations'
    parameters: ConversationListContactParameters
  }
  'conversation/mcp/install[url]': {
    name: 'Install MCP'
    description: 'Bring MCP (model context protocol) functions into context'
    parameters: ConversationMcpInstallUrlParameters
  }
  'conversation/mcp/uninstall[url]': {
    name: 'Uninstall MCP'
    description: 'Remove MCP (model context protocol) functions from context'
    parameters: ConversationMcpUninstallUrlParameters
  }
  'conversation/search': {
    name: 'Search Conversations'
    description: 'Search conversations by query'
    parameters: ConversationSearchParameters
  }
  'conversation/search[bot]': {
    name: 'Search Conversations'
    description: 'Search conversations by query'
    parameters: ConversationSearchBotParameters
  }
  'conversation/search[contact]': {
    name: 'Search Conversations'
    description: 'Search conversations by query'
    parameters: ConversationSearchContactParameters
  }
  'conversation/skillset/install[by-id]': {
    name: 'Install Skillset'
    description: 'Bring a skillset into context by its ID'
    parameters: ConversationSkillsetInstallByIdParameters
  }
  'conversation/skillset/uninstall[by-id]': {
    name: 'Uninstall Skillset'
    description: 'Remove a skillset from context by its ID'
    parameters: ConversationSkillsetUninstallByIdParameters
  }
  'dataset/create': {
    name: 'Create Dataset'
    description: 'Create a new dataset'
    parameters: DatasetCreateParameters
  }
  'dataset/file/create[url]': {
    name: 'Add File to Dataset'
    description: 'Creates and synchronizes a file in a dataset from a URL source.'
    parameters: DatasetFileCreateUrlParameters
  }
  'dataset/list': {
    name: 'List Datasets'
    description: 'Retrieve a list of datasets associated with the user'
    parameters: DatasetListParameters
  }
  'dataset/record/create': {
    name: 'Create Dataset Record'
    description: 'Create a new record in a dataset'
    parameters: DatasetRecordCreateParameters
  }
  'dataset/search': {
    name: 'Search Dataset'
    description: 'Search a dataset for specific keywords or filters'
    parameters: DatasetSearchParameters
  }
  'discord/conversation/start[by-id]': {
    name: 'Start Discord Conversation'
    description: 'Initiates a new conversation by sending a message to a Discord channel.'
    parameters: DiscordConversationStartByIdParameters
  }
  'email/conversation/start[by-id]': {
    name: 'Start Email Conversation'
    description: 'Initiates a new conversation by sending an email to a recipient.'
    parameters: EmailConversationStartByIdParameters
  }
  'email/send': {
    name: 'Send Email'
    description: 'Compose and send an email using the provided content in markdown format'
    parameters: EmailSendParameters
  }
  'example/fetch/api/get': {
    name: 'Fetch Web API'
    description: 'Fetch data from a web API using a URL and optional parameters'
    parameters: ExampleFetchApiGetParameters
  }
  'example/fetch/api/post': {
    name: 'Post Data to Web API'
    description: 'Post data to a web API using a URL and JSON payload'
    parameters: ExampleFetchApiPostParameters
  }
  'example/fetch/api/post[params]': {
    name: 'Post Data to Web API with Parameters'
    description: 'Post data to a web API using a URL and form parameters'
    parameters: ExampleFetchApiPostParamsParameters
  }
  'fetch/metadata': {
    name: 'Fetch Metadata'
    description: 'Fetch the title, description, keywords, icon and other metadata of a web page'
    parameters: FetchMetadataParameters
  }
  'fetch/request': {
    name: 'Custom HTTP Request (Public)'
    description: 'Make a custom HTTP request to a public API without authentication. Full control over method, URL, headers, and body.'
    parameters: FetchRequestParameters
  }
  'fetch/request[with-auth]': {
    name: 'Custom HTTP Request'
    description: 'Make a custom HTTP request with full control over method, URL, headers, and body. Use this for any API that requires specific HTTP configurations.'
    parameters: FetchRequestWithAuthParameters
  }
  'fetch/text/get': {
    name: 'Fetch Web Page'
    description: 'Fetch the content of a web page using a URL and convert it to text'
    parameters: FetchTextGetParameters
  }
  'file/append': {
    name: 'Append to File'
    description: 'Append content to a file'
    parameters: FileAppendParameters
  }
  'file/append[by-id]': {
    name: 'Append to File'
    description: 'Append content to a file'
    parameters: FileAppendByIdParameters
  }
  'file/prepend': {
    name: 'Prepend to File'
    description: 'Prepend content to a file'
    parameters: FilePrependParameters
  }
  'file/prepend[by-id]': {
    name: 'Prepend to File'
    description: 'Prepend content to a file'
    parameters: FilePrependByIdParameters
  }
  'file/read': {
    name: 'Read File'
    description: 'Read the content of a file. Supports optional line range to read specific sections. For efficiency, prefer reading larger chunks rather than many small sequential reads.'
    parameters: FileReadParameters
  }
  'file/read[by-id]': {
    name: 'Read File'
    description: 'Read the content of a file. Supports optional line range to read specific sections. For efficiency, prefer reading larger chunks rather than many small sequential reads.'
    parameters: FileReadByIdParameters
  }
  'file/replace': {
    name: 'Replace in File'
    description: 'Replace text in a file'
    parameters: FileReplaceParameters
  }
  'file/replace[by-id]': {
    name: 'Replace in File'
    description: 'Replace text in a file'
    parameters: FileReplaceByIdParameters
  }
  'file/rw': {
    name: 'Read/Write File'
    description: 'Read or write file content with a single combined operation. Use mode "read" to read content, or mode "write" to write content. Supports optional line ranges for both modes.'
    parameters: FileRwParameters
  }
  'file/rw[by-id]': {
    name: 'Read/Write File'
    description: 'Read or write file content with a single combined operation. Use mode "read" to read content, or mode "write" to write content. Supports optional line ranges for both modes.'
    parameters: FileRwByIdParameters
  }
  'file/sql': {
    name: 'Query File with SQL'
    description: 'Execute SQL queries on structured data files (CSV, Excel, JSON) to filter, aggregate, and analyze data.'
    parameters: FileSqlParameters
  }
  'file/sql[by-id]': {
    name: 'Query File with SQL'
    description: 'Execute SQL queries on structured data files (CSV, Excel, JSON) to filter, aggregate, and analyze data.'
    parameters: FileSqlByIdParameters
  }
  'file/write': {
    name: 'Write File'
    description: 'Write content to a file. Without line parameters, overwrites the entire file. With startLine only, inserts before that line. With startLine and endLine, replaces that range.'
    parameters: FileWriteParameters
  }
  'file/write[by-id]': {
    name: 'Write File'
    description: 'Write content to a file. Without line parameters, overwrites the entire file. With startLine only, inserts before that line. With startLine and endLine, replaces that range.'
    parameters: FileWriteByIdParameters
  }
  'git/file/fetch': {
    name: 'Fetch Git File'
    description: 'Fetches a file from a Git repository at a specific reference.'
    parameters: GitFileFetchParameters
  }
  'git/tree/fetch': {
    name: 'Fetch Git Tree'
    description: 'Fetches all files from a directory in a Git repository at a specific reference.'
    parameters: GitTreeFetchParameters
  }
  'graphql[cbk]': {
    name: 'Execute GraphQL Query'
    description: 'Execute a graphql query against ChatBotKit platform services'
    parameters: GraphqlCbkParameters
  }
  'image/generate': {
    name: 'Generate Image'
    description: 'Generate an image from the provided input prompt.'
    parameters: ImageGenerateParameters
  }
  'image/generate[gemini-2.5-flash-image]': {
    name: 'Generate Image'
    description: 'Generate an image using the Gemini 2.5 Flash Image model (also known as "Nano Banana") with state-of-the-art contextual understanding.'
    parameters: ImageGenerateGemini25FlashImageParameters
  }
  'image/generate[gemini-3.1-flash-image]': {
    name: 'Generate Image'
    description: 'Generate an image using the Gemini 3.1 Flash Image model with Pro-level visual quality at Flash speed.'
    parameters: ImageGenerateGemini31FlashImageParameters
  }
  'image/generate[gpt-image-1.5]': {
    name: 'Generate Image'
    description: 'Generate an image using the GPT Image 1.5 model with enhanced quality and fidelity.'
    parameters: ImageGenerateGptImage15Parameters
  }
  'image/generate[gpt-image-1]': {
    name: 'Generate Image'
    description: 'Generate an image from the provided input prompt.'
    parameters: ImageGenerateGptImage1Parameters
  }
  'image/generate[gpt-image-2]': {
    name: 'Generate Image'
    description: 'Generate an image using the GPT Image 2 model with OpenAI\'s latest image generation capabilities.'
    parameters: ImageGenerateGptImage2Parameters
  }
  'image/modify': {
    name: 'Modify Image'
    description: 'Create a new image from previous input images and a provided input prompt.'
    parameters: ImageModifyParameters
  }
  'image/modify[gemini-2.5-flash-image]': {
    name: 'Modify Image'
    description: 'Create a new image from previous input images using the Gemini 2.5 Flash Image model (also known as "Nano Banana").'
    parameters: ImageModifyGemini25FlashImageParameters
  }
  'image/modify[gemini-3.1-flash-image]': {
    name: 'Modify Image'
    description: 'Create a new image from previous input images using the Gemini 3.1 Flash Image model.'
    parameters: ImageModifyGemini31FlashImageParameters
  }
  'image/modify[gpt-image-1.5]': {
    name: 'Modify Image'
    description: 'Create a new image from previous input images using the GPT Image 1.5 model.'
    parameters: ImageModifyGptImage15Parameters
  }
  'image/modify[gpt-image-1]': {
    name: 'Modify Image'
    description: 'Create a new image from previous input images and a provided input prompt.'
    parameters: ImageModifyGptImage1Parameters
  }
  'image/modify[gpt-image-2]': {
    name: 'Modify Image'
    description: 'Create a new image from previous input images using the GPT Image 2 model.'
    parameters: ImageModifyGptImage2Parameters
  }
  'listen/transcribe': {
    name: 'Transcribe Audio'
    description: 'Transcribe the content of an audio URL'
    parameters: ListenTranscribeParameters
  }
  'math/evaluate': {
    name: 'Evaluate Math Expression'
    description: 'Evaluate a math expression'
    parameters: MathEvaluateParameters
  }
  'memory/create': {
    name: 'Create Memory'
    description: 'Create a new memory using the provided content'
    parameters: MemoryCreateParameters
  }
  'memory/create[bot]': {
    name: 'Create Memory'
    description: 'Create a new memory using the provided content'
    parameters: MemoryCreateBotParameters
  }
  'memory/create[contact]': {
    name: 'Create Memory'
    description: 'Create a new memory using the provided content'
    parameters: MemoryCreateContactParameters
  }
  'memory/delete[bot][by-id]': {
    name: 'Delete Memory'
    description: 'Delete an existing memory'
    parameters: MemoryDeleteBotByIdParameters
  }
  'memory/delete[by-id]': {
    name: 'Delete Memory'
    description: 'Delete an existing memory'
    parameters: MemoryDeleteByIdParameters
  }
  'memory/delete[contact][by-id]': {
    name: 'Delete Memory'
    description: 'Delete an existing memory'
    parameters: MemoryDeleteContactByIdParameters
  }
  'memory/list': {
    name: 'List Memories'
    description: 'List the most recent memories'
    parameters: MemoryListParameters
  }
  'memory/list[bot]': {
    name: 'List Memories'
    description: 'List the most recent memories'
    parameters: MemoryListBotParameters
  }
  'memory/list[contact]': {
    name: 'List Memories'
    description: 'List the most recent memories'
    parameters: MemoryListContactParameters
  }
  'memory/search': {
    name: 'Search Memories'
    description: 'Search memories using specific search terms'
    parameters: MemorySearchParameters
  }
  'memory/search[bot]': {
    name: 'Search Memories'
    description: 'Search memories using specific search terms'
    parameters: MemorySearchBotParameters
  }
  'memory/search[contact]': {
    name: 'Search Memories'
    description: 'Search memories using specific search terms'
    parameters: MemorySearchContactParameters
  }
  'memory/update[bot][by-id]': {
    name: 'Update Memory'
    description: 'Update an existing memory using the provided content'
    parameters: MemoryUpdateBotByIdParameters
  }
  'memory/update[by-id]': {
    name: 'Update Memory'
    description: 'Update an existing memory using the provided content'
    parameters: MemoryUpdateByIdParameters
  }
  'memory/update[contact][by-id]': {
    name: 'Update Memory'
    description: 'Update an existing memory using the provided content'
    parameters: MemoryUpdateContactByIdParameters
  }
  'mock/api[create]': {
    name: 'API Create'
    description: 'Create a new resource'
    parameters: MockApiCreateParameters
  }
  'mock/api[delete]': {
    name: 'API Delete'
    description: 'Delete an existing resource'
    parameters: MockApiDeleteParameters
  }
  'mock/api[list]': {
    name: 'API List'
    description: 'List resources from an API endpoint'
    parameters: MockApiListParameters
  }
  'mock/api[update]': {
    name: 'API Update'
    description: 'Update an existing resource'
    parameters: MockApiUpdateParameters
  }
  'mock/api/[search]': {
    name: 'API Search'
    description: 'Search resources from an API endpoint'
    parameters: MockApiSearchParameters
  }
  'mock/dataset': {
    name: 'Query Dataset'
    description: 'Query a dataset using specific terms'
    parameters: MockDatasetParameters
  }
  'mock/sql': {
    name: 'Query Database'
    description: 'Query a database using SQL'
    parameters: MockSqlParameters
  }
  'pack/bot/reprogramming': {
    name: 'Install Bot Reprogramming Tools'
    description: 'Installs bot backstory read and write tools into the conversation. You can read the current backstory of the connected bot and overwrite it with new content.'
    parameters: PackBotReprogrammingParameters
  }
  'pack/cbk/space/skills': {
    name: 'Install Space Skills Tools'
    description: 'Installs space skills tools into the conversation. You can list available skills and read their full content from the linked space.'
    parameters: PackCbkSpaceSkillsParameters
  }
  'pack/cbk/space/storage': {
    name: 'Install Space Storage Tools'
    description: 'Installs space storage tools into the conversation. You can list, read, write, delete, move, copy, search, import, and link files in the linked space.'
    parameters: PackCbkSpaceStorageParameters
  }
  'pack/cbk/space/storage[read-only]': {
    name: 'Install Space Storage Read-Only Tools'
    description: 'Installs read-only space storage tools into the conversation. You can list, read, search, and link files in the linked space without modification.'
    parameters: PackCbkSpaceStorageReadOnlyParameters
  }
  'pack/file': {
    name: 'Install File Tools'
    description: 'Installs tools to read, write, prepend, append, and replace content in the specified file.'
    parameters: PackFileParameters
  }
  'pack/file[by-id]': {
    name: 'Install File Tools'
    description: 'Installs file tools into the conversation to read, write, prepend, append, and replace content in files by specifying the file ID.'
    parameters: PackFileByIdParameters
  }
  'pack/rating': {
    name: 'Install Rating Tools'
    description: 'Installs rating tools scoped to the connected bot. You can list, create, fetch, and delete ratings.'
    parameters: PackRatingParameters
  }
  'pack/rating[by-bot-id]': {
    name: 'Install Rating Tools'
    description: 'Installs rating tools with dynamic bot scoping so ratings can be managed across accessible bots.'
    parameters: PackRatingByBotIdParameters
  }
  'pack/rating[contact]': {
    name: 'Install Contact Rating Tools'
    description: 'Installs rating tools scoped to the current contact and connected bot. Each contact can only access their own ratings.'
    parameters: PackRatingContactParameters
  }
  'pack/rating[contact][by-bot-id]': {
    name: 'Install Contact Rating Tools'
    description: 'Installs contact rating tools with dynamic bot scoping so a contact can work across accessible bots.'
    parameters: PackRatingContactByBotIdParameters
  }
  'pack/shell': {
    name: 'Install Shell Tools'
    description: 'Installs shell tools into the conversation to execute commands and scripts.'
    parameters: PackShellParameters
  }
  'pack/task': {
    name: 'Install Task Management Tools'
    description: 'Installs all task management tools scoped to the connected bot. You can list, create, fetch, update, delete, and run tasks.'
    parameters: PackTaskParameters
  }
  'pack/task[by-bot-id]': {
    name: 'Install Task Management Tools'
    description: 'Installs all task management tools with dynamic bot scoping. You can manage tasks across any bot by specifying the bot ID.'
    parameters: PackTaskByBotIdParameters
  }
  'pack/task[contact]': {
    name: 'Install Contact Task Management Tools'
    description: 'Installs task management tools scoped to the current contact and connected bot. Each contact can only see and manage their own tasks.'
    parameters: PackTaskContactParameters
  }
  'pack/task[contact][by-bot-id]': {
    name: 'Install Contact Task Management Tools'
    description: 'Installs task management tools scoped to the current contact with dynamic bot scoping. Each contact can only see and manage their own tasks across any bot.'
    parameters: PackTaskContactByBotIdParameters
  }
  'rating/create': {
    name: 'Create Rating'
    description: 'Create a rating for the connected bot'
    parameters: RatingCreateParameters
  }
  'rating/create[by-bot-id]': {
    name: 'Create Rating'
    description: 'Create a rating with optional bot assignment'
    parameters: RatingCreateByBotIdParameters
  }
  'rating/create[contact]': {
    name: 'Create Contact Rating'
    description: 'Create a rating for the current contact and connected bot'
    parameters: RatingCreateContactParameters
  }
  'rating/create[contact][by-bot-id]': {
    name: 'Create Contact Rating'
    description: 'Create a contact rating with optional bot assignment'
    parameters: RatingCreateContactByBotIdParameters
  }
  'rating/delete': {
    name: 'Delete Rating'
    description: 'Delete a rating scoped to the connected bot'
    parameters: RatingDeleteParameters
  }
  'rating/delete[by-bot-id]': {
    name: 'Delete Rating'
    description: 'Delete a rating with optional bot scoping'
    parameters: RatingDeleteByBotIdParameters
  }
  'rating/delete[contact]': {
    name: 'Delete Contact Rating'
    description: 'Delete a rating for the current contact and connected bot'
    parameters: RatingDeleteContactParameters
  }
  'rating/delete[contact][by-bot-id]': {
    name: 'Delete Contact Rating'
    description: 'Delete a contact rating with optional bot scoping'
    parameters: RatingDeleteContactByBotIdParameters
  }
  'rating/fetch': {
    name: 'Fetch Rating'
    description: 'Fetch a rating scoped to the connected bot'
    parameters: RatingFetchParameters
  }
  'rating/fetch[by-bot-id]': {
    name: 'Fetch Rating'
    description: 'Fetch a rating with optional bot scoping'
    parameters: RatingFetchByBotIdParameters
  }
  'rating/fetch[contact]': {
    name: 'Fetch Contact Rating'
    description: 'Fetch a rating for the current contact and connected bot'
    parameters: RatingFetchContactParameters
  }
  'rating/fetch[contact][by-bot-id]': {
    name: 'Fetch Contact Rating'
    description: 'Fetch a contact rating with optional bot scoping'
    parameters: RatingFetchContactByBotIdParameters
  }
  'rating/list': {
    name: 'List Ratings'
    description: 'List ratings scoped to the connected bot'
    parameters: RatingListParameters
  }
  'rating/list[by-bot-id]': {
    name: 'List Ratings'
    description: 'List ratings with optional bot scoping'
    parameters: RatingListByBotIdParameters
  }
  'rating/list[contact]': {
    name: 'List Contact Ratings'
    description: 'List ratings for the current contact and connected bot'
    parameters: RatingListContactParameters
  }
  'rating/list[contact][by-bot-id]': {
    name: 'List Contact Ratings'
    description: 'List contact ratings with optional bot scoping'
    parameters: RatingListContactByBotIdParameters
  }
  'search/images': {
    name: 'Search Images'
    description: 'Search the web for images based on specific keywords'
    parameters: SearchImagesParameters
  }
  'search/news': {
    name: 'Search News'
    description: 'Search the web for news articles based on specific keywords'
    parameters: SearchNewsParameters
  }
  'search/videos': {
    name: 'Search Videos'
    description: 'Search the web for videos based on specific keywords'
    parameters: SearchVideosParameters
  }
  'search/web': {
    name: 'Search Web'
    description: 'Search the web for specific keywords'
    parameters: SearchWebParameters
  }
  'shell/eval/node': {
    name: 'Evaluate Node.js Code'
    description: 'Evaluate JavaScript code using a code interpreter (node.js)'
    parameters: ShellEvalNodeParameters
  }
  'shell/eval/python': {
    name: 'Evaluate Python Code'
    description: 'Evaluate Python code using a code interpreter (python3)'
    parameters: ShellEvalPythonParameters
  }
  'shell/exec': {
    name: 'Execute Shell Command'
    description: 'Execute a shell command or script'
    parameters: ShellExecParameters
  }
  'shell/exec/node': {
    name: 'Execute Node.js Script'
    description: 'Execute a Node.js script'
    parameters: ShellExecNodeParameters
  }
  'shell/exec/python': {
    name: 'Execute Python Script'
    description: 'Execute a Python script'
    parameters: ShellExecPythonParameters
  }
  'shell/import': {
    name: 'Import URL to Shell Environment'
    description: 'Import data from a URL and save it to a file in the shell environment. Supports HTTP/HTTPS URLs and can handle both text and binary content.'
    parameters: ShellImportParameters
  }
  'shell/read': {
    name: 'Read File from Shell Environment'
    description: 'Read the content of a file in a shell environment. Supports optional line range to read specific sections. For efficiency, prefer reading larger chunks rather than many small sequential reads. Supports parallel reads of different sections when needed upfront.'
    parameters: ShellReadParameters
  }
  'shell/rw': {
    name: 'Read/Write File in Shell Environment'
    description: 'Read or write file content in a shell environment with a single combined operation. Use mode "read" to read content, or mode "write" to write content. Supports optional line ranges for both modes.'
    parameters: ShellRwParameters
  }
  'shell/skillset/install[by-id]': {
    name: 'Install Skillset as Shell Command'
    description: 'Install a skillset as an executable shell command in the sandbox environment. The skillset abilities become available as subcommands.'
    parameters: ShellSkillsetInstallByIdParameters
  }
  'shell/write': {
    name: 'Write File in Shell Environment'
    description: 'Write content to a file in a shell environment. Without line parameters, overwrites the entire file. With startLine only, inserts before that line. With startLine and endLine, replaces that range.'
    parameters: ShellWriteParameters
  }
  'slack/conversation/start[by-id]': {
    name: 'Start Slack Conversation'
    description: 'Initiates a new conversation by sending a message to a Slack channel or direct message.'
    parameters: SlackConversationStartByIdParameters
  }
  'space/create': {
    name: 'Create Space'
    description: 'Create a new space'
    parameters: SpaceCreateParameters
  }
  'space/create[contact]': {
    name: 'Create Space'
    description: 'Create a new space'
    parameters: SpaceCreateContactParameters
  }
  'space/delete[by-id]': {
    name: 'Delete Space'
    description: 'Delete an existing space'
    parameters: SpaceDeleteByIdParameters
  }
  'space/delete[contact][by-id]': {
    name: 'Delete Space'
    description: 'Delete an existing space'
    parameters: SpaceDeleteContactByIdParameters
  }
  'space/fetch[by-id]': {
    name: 'Fetch Space'
    description: 'Fetch details of a specific space'
    parameters: SpaceFetchByIdParameters
  }
  'space/fetch[contact][by-id]': {
    name: 'Fetch Space'
    description: 'Fetch details of a specific space'
    parameters: SpaceFetchContactByIdParameters
  }
  'space/list': {
    name: 'List Spaces'
    description: 'List all spaces'
    parameters: SpaceListParameters
  }
  'space/list[contact]': {
    name: 'List Spaces'
    description: 'List all spaces'
    parameters: SpaceListContactParameters
  }
  'space/skill/create': {
    name: 'Create Space Skills'
    description: 'Creates one or more skills in the linked space under the .skills directory. Each skill is stored as a SKILL.md file with frontmatter containing the name and description.'
    parameters: SpaceSkillCreateParameters
  }
  'space/skill/create[by-id]': {
    name: 'Create Space Skills'
    description: 'Creates one or more skills in the specified space under the .skills directory. Each skill is stored as a SKILL.md file with frontmatter containing the name and description.'
    parameters: SpaceSkillCreateByIdParameters
  }
  'space/skill/list': {
    name: 'List Space Skills'
    description: 'Lists all available skills in the linked space by scanning .skills, .github/skills, and .claude/skills directories. Returns the name, description, and path for each skill found.'
    parameters: SpaceSkillListParameters
  }
  'space/skill/list[by-id]': {
    name: 'List Space Skills'
    description: 'Lists all available skills in the space by scanning .skills, .github/skills, and .claude/skills directories. Returns the name, description, and path for each skill found.'
    parameters: SpaceSkillListByIdParameters
  }
  'space/skill/read': {
    name: 'Read Space Skills'
    description: 'Reads the full content of one or more skill files from the linked space by their paths. Use the list ability first to discover available skill paths.'
    parameters: SpaceSkillReadParameters
  }
  'space/skill/read[by-id]': {
    name: 'Read Space Skills'
    description: 'Reads the full content of one or more skill files from the space by their paths. Use the list ability first to discover available skill paths.'
    parameters: SpaceSkillReadByIdParameters
  }
  'space/storage/copy': {
    name: 'Copy Space Storage File'
    description: 'Copy a file to another location in a specific space directory'
    parameters: SpaceStorageCopyParameters
  }
  'space/storage/copy[by-id]': {
    name: 'Copy Space Storage File'
    description: 'Copy a file to another location in a specific space directory'
    parameters: SpaceStorageCopyByIdParameters
  }
  'space/storage/delete': {
    name: 'Delete Space Storage File'
    description: 'Delete a file in a specific space directory'
    parameters: SpaceStorageDeleteParameters
  }
  'space/storage/delete[by-id]': {
    name: 'Delete Space Storage File'
    description: 'Delete a file in a specific space directory'
    parameters: SpaceStorageDeleteByIdParameters
  }
  'space/storage/import': {
    name: 'Import URL to Space Storage'
    description: 'Import a file from a URL into space storage'
    parameters: SpaceStorageImportParameters
  }
  'space/storage/import[by-id]': {
    name: 'Import URL to Space Storage'
    description: 'Import a file from a URL into space storage'
    parameters: SpaceStorageImportByIdParameters
  }
  'space/storage/link': {
    name: 'Get Space Storage File Link'
    description: 'Get a public link (presigned URL) to access a file in space storage'
    parameters: SpaceStorageLinkParameters
  }
  'space/storage/link[by-id]': {
    name: 'Get Space Storage File Link'
    description: 'Get a public link (presigned URL) to access a file in space storage'
    parameters: SpaceStorageLinkByIdParameters
  }
  'space/storage/list': {
    name: 'List Space Storage Files'
    description: 'List all files in a specific space directory'
    parameters: SpaceStorageListParameters
  }
  'space/storage/list[by-id]': {
    name: 'List Space Storage Files'
    description: 'List all files in a specific space directory'
    parameters: SpaceStorageListByIdParameters
  }
  'space/storage/move': {
    name: 'Move Space Storage File'
    description: 'Move or rename a file in a specific space directory'
    parameters: SpaceStorageMoveParameters
  }
  'space/storage/move[by-id]': {
    name: 'Move Space Storage File'
    description: 'Move or rename a file in a specific space directory'
    parameters: SpaceStorageMoveByIdParameters
  }
  'space/storage/read': {
    name: 'Read Space Storage File'
    description: 'Read the content of a file in a specific space directory. Supports optional line range to read specific sections. For efficiency, prefer reading larger chunks rather than many small sequential reads.'
    parameters: SpaceStorageReadParameters
  }
  'space/storage/read[by-id]': {
    name: 'Read Space Storage File'
    description: 'Read the content of a file in a specific space directory. Supports optional line range to read specific sections. For efficiency, prefer reading larger chunks rather than many small sequential reads.'
    parameters: SpaceStorageReadByIdParameters
  }
  'space/storage/rw': {
    name: 'Read/Write Space Storage File'
    description: 'Read or write content to a file in the space storage. Use mode "read" to read file contents, or mode "write" to write content. For write mode, without line parameters overwrites the entire file, with startLine only inserts before that line, with startLine and endLine replaces that range.'
    parameters: SpaceStorageRwParameters
  }
  'space/storage/rw[by-id]': {
    name: 'Read/Write Space Storage File'
    description: 'Read or write content to a file in a specific space. Use mode "read" to read file contents, or mode "write" to write content. For write mode, without line parameters overwrites the entire file, with startLine only inserts before that line, with startLine and endLine replaces that range.'
    parameters: SpaceStorageRwByIdParameters
  }
  'space/storage/search': {
    name: 'Search Space Storage Files'
    description: 'Search files in a specific space directory using specific terms'
    parameters: SpaceStorageSearchParameters
  }
  'space/storage/search[by-id]': {
    name: 'Search Space Storage Files'
    description: 'Search files in a specific space directory using specific terms'
    parameters: SpaceStorageSearchByIdParameters
  }
  'space/storage/write': {
    name: 'Write Space Storage File'
    description: 'Write content to a file in a specific space directory. Without line parameters, overwrites the entire file. With startLine only, inserts before that line. With startLine and endLine, replaces that range.'
    parameters: SpaceStorageWriteParameters
  }
  'space/storage/write[by-id]': {
    name: 'Write Space Storage File'
    description: 'Write content to a file in a specific space directory. Without line parameters, overwrites the entire file. With startLine only, inserts before that line. With startLine and endLine, replaces that range.'
    parameters: SpaceStorageWriteByIdParameters
  }
  'space/update[by-id]': {
    name: 'Update Space'
    description: 'Update an existing space'
    parameters: SpaceUpdateByIdParameters
  }
  'space/update[contact][by-id]': {
    name: 'Update Space'
    description: 'Update an existing space'
    parameters: SpaceUpdateContactByIdParameters
  }
  'task/create': {
    name: 'Create Task'
    description: 'Create a task using details provided'
    parameters: TaskCreateParameters
  }
  'task/create[by-bot-id]': {
    name: 'Create Task'
    description: 'Create a task using details provided'
    parameters: TaskCreateByBotIdParameters
  }
  'task/create[contact]': {
    name: 'Create Task'
    description: 'Create a task using details provided'
    parameters: TaskCreateContactParameters
  }
  'task/create[contact][by-bot-id]': {
    name: 'Create Task'
    description: 'Create a task using details provided'
    parameters: TaskCreateContactByBotIdParameters
  }
  'task/delete': {
    name: 'Delete Task'
    description: 'Delete an existing task'
    parameters: TaskDeleteParameters
  }
  'task/delete[by-bot-id]': {
    name: 'Delete Task'
    description: 'Delete an existing task'
    parameters: TaskDeleteByBotIdParameters
  }
  'task/delete[contact]': {
    name: 'Delete Task'
    description: 'Delete an existing task'
    parameters: TaskDeleteContactParameters
  }
  'task/delete[contact][by-bot-id]': {
    name: 'Delete Task'
    description: 'Delete an existing task'
    parameters: TaskDeleteContactByBotIdParameters
  }
  'task/fetch': {
    name: 'Fetch Task'
    description: 'Fetch details of a specific task'
    parameters: TaskFetchParameters
  }
  'task/fetch[by-bot-id]': {
    name: 'Fetch Task'
    description: 'Fetch details of a specific task'
    parameters: TaskFetchByBotIdParameters
  }
  'task/fetch[contact]': {
    name: 'Fetch Task'
    description: 'Fetch details of a specific task'
    parameters: TaskFetchContactParameters
  }
  'task/fetch[contact][by-bot-id]': {
    name: 'Fetch Task'
    description: 'Fetch details of a specific task'
    parameters: TaskFetchContactByBotIdParameters
  }
  'task/list': {
    name: 'List Tasks'
    description: 'List scheduled and one-time tasks'
    parameters: TaskListParameters
  }
  'task/list[by-bot-id]': {
    name: 'List Tasks'
    description: 'List scheduled and one-time tasks'
    parameters: TaskListByBotIdParameters
  }
  'task/list[contact]': {
    name: 'List Tasks'
    description: 'List scheduled and one-time tasks'
    parameters: TaskListContactParameters
  }
  'task/list[contact][by-bot-id]': {
    name: 'List Tasks'
    description: 'List scheduled and one-time tasks'
    parameters: TaskListContactByBotIdParameters
  }
  'task/run': {
    name: 'Run Task'
    description: 'Perform a single run of a task using the provided task ID'
    parameters: TaskRunParameters
  }
  'task/run[by-bot-id]': {
    name: 'Run Task'
    description: 'Perform a single run of a task using the provided task ID'
    parameters: TaskRunByBotIdParameters
  }
  'task/run[contact]': {
    name: 'Run Task'
    description: 'Perform a single run of a task using the provided task ID'
    parameters: TaskRunContactParameters
  }
  'task/run[contact][by-bot-id]': {
    name: 'Run Task'
    description: 'Perform a single run of a task using the provided task ID'
    parameters: TaskRunContactByBotIdParameters
  }
  'task/update': {
    name: 'Update Task'
    description: 'Update an existing task or to-do item'
    parameters: TaskUpdateParameters
  }
  'task/update[by-bot-id]': {
    name: 'Update Task'
    description: 'Update an existing task or to-do item'
    parameters: TaskUpdateByBotIdParameters
  }
  'task/update[contact]': {
    name: 'Update Task'
    description: 'Update an existing task or to-do item'
    parameters: TaskUpdateContactParameters
  }
  'task/update[contact][by-bot-id]': {
    name: 'Update Task'
    description: 'Update an existing task or to-do item'
    parameters: TaskUpdateContactByBotIdParameters
  }
  'telegram/conversation/start[by-id]': {
    name: 'Start Telegram Conversation'
    description: 'Initiates a new conversation by sending a message to a Telegram chat.'
    parameters: TelegramConversationStartByIdParameters
  }
  'text/article/generate': {
    name: 'Generate Article'
    description: 'Generate an article on the provided topic and source text'
    parameters: TextArticleGenerateParameters
  }
  'text/email/generate': {
    name: 'Generate Email'
    description: 'Generate an email based on the provided source text'
    parameters: TextEmailGenerateParameters
  }
  'text/generate': {
    name: 'Generate Text'
    description: 'Generate text based on the provided source text'
    parameters: TextGenerateParameters
  }
  'text/summarize': {
    name: 'Summarize Text'
    description: 'Summarize the content of a text'
    parameters: TextSummarizeParameters
  }
  'text/translate': {
    name: 'Translate Text'
    description: 'Translate text from one language to another'
    parameters: TextTranslateParameters
  }
  'time/now': {
    name: 'Get Current Date And Time'
    description: 'Get the current date and time in one requested format, with optional timezone override.'
    parameters: TimeNowParameters
  }
  'todo/manage': {
    name: 'Manage Todo List'
    description: 'Manage a structured todo list to track progress and plan tasks. Use read to retrieve the current list, write to replace it entirely.'
    parameters: TodoManageParameters
  }
  'todo/read': {
    name: 'Read Todo List'
    description: 'Retrieve the current todo list'
    parameters: TodoReadParameters
  }
  'todo/write': {
    name: 'Write Todo List'
    description: 'Replace the entire todo list with a new set of items. Always provide the complete list.'
    parameters: TodoWriteParameters
  }
  'url/graphql': {
    name: 'Execute GraphQL Query'
    description: 'Execute a graphql query on a remote GraphQL endpoint'
    parameters: UrlGraphqlParameters
  }
  'url/sql': {
    name: 'Execute File SQL Query'
    description: 'Execute SQL queries on structured data files (CSV, Excel, JSON) to filter, aggregate, and analyze data.'
    parameters: UrlSqlParameters
  }
  'view/describe': {
    name: 'Describe Image'
    description: 'Describe the content of an image URL'
    parameters: ViewDescribeParameters
  }
  'whatsapp/conversation/start[by-id]': {
    name: 'Start WhatsApp Conversation'
    description: 'Initiates a new conversation by sending a message to a WhatsApp user.'
    parameters: WhatsappConversationStartByIdParameters
  }
}

// --- Helper Types ---

export type CbkAbilityParameters<T extends CbkAbilityName> = CbkAbilityRegistry[T]['parameters']
