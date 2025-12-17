import { z } from 'zod'
import { zodToJsonSchema } from 'zod-to-json-schema'

/**
 * @typedef {import('zod').ZodObject<any>} ZodObject
 */

/**
 * @typedef {import('@chatbotkit/sdk').ChatBotKit} ChatBotKit
 * @typedef {import('@chatbotkit/sdk/conversation/v1').ConversationCompleteRequest} ConversationCompleteRequest
 * @typedef {import('@chatbotkit/sdk/conversation/v1').ConversationCompleteStreamType} ConversationCompleteStreamType
 */

/**
 * @template {ZodObject} T
 * @typedef {{
 *   description: string,
 *   input?: T,
 *   handler: (input: any) => Promise<any>
 * }} ToolDefinition
 */

/**
 * @typedef {Record<string, ToolDefinition<ZodObject>>} Tools
 */

/**
 * @typedef {{
 *   code: number,
 *   message?: string
 * }} ExitResult
 */

/**
 * @typedef {{
 *   type: 'toolCallStart',
 *   data: { name: string, args: any }
 * }} ToolCallStartEvent
 */

/**
 * @typedef {{
 *   type: 'toolCallEnd',
 *   data: { name: string, result: any }
 * }} ToolCallEndEvent
 */

/**
 * @typedef {{
 *   type: 'toolCallError',
 *   data: { name: string, error: string }
 * }} ToolCallErrorEvent
 */

/**
 * @typedef {{
 *   type: 'iteration',
 *   data: { iteration: number }
 * }} IterationEvent
 */

/**
 * @typedef {{
 *   type: 'exit',
 *   data: ExitResult
 * }} ExitEvent
 */

/**
 * Agent complete generator function.
 *
 * @param {ConversationCompleteRequest & {
 *   client: ChatBotKit,
 *   tools?: Tools
 * }} options
 * @returns {AsyncGenerator<ConversationCompleteStreamType | ToolCallStartEvent | ToolCallEndEvent | ToolCallErrorEvent, void, unknown>}
 */
export async function* complete(options) {
  const { client, tools, ...request } = options

  const channelToTool = new Map()

  const functions = tools
    ? Object.entries(tools).map(([name, tool]) => {
        const randomSuffix = Math.random().toString(36).substring(2, 15)

        const channel = `${name}_${randomSuffix}`.padEnd(16, '0')

        channelToTool.set(channel, { name, tool })

        if (!tool.input) {
          return {
            name,
            description: tool.description,
            parameters:
              /** @type {{ type: 'object', properties: Record<string, unknown>, required?: string[] }} */ ({
                type: 'object',
                properties: {},
              }),
            result: {
              channel,
            },
          }
        }

        const schema = /** @type {any} */ (
          zodToJsonSchema(tool.input, { target: 'openApi3' })
        )

        const parameters = {
          type: 'object',
          properties: schema.properties || {},
          ...(schema.required && schema.required.length > 0
            ? { required: schema.required }
            : {}),
        }

        return {
          name,
          description: tool.description,
          parameters:
            /** @type {{ type: 'object', properties: Record<string, unknown>, required?: string[] }} */ (
              parameters
            ),
          result: {
            channel,
          },
        }
      })
    : undefined

  const stream = client.conversation
    .complete(null, {
      ...request,

      functions,
    })
    .stream()

  /** @type {Array<ToolCallEndEvent | ToolCallErrorEvent>} */
  const toolEventQueue = []

  const runningTools = new Set()

  /**
   * Execute a tool asynchronously without blocking the event stream
   *
   * @param {string} channel
   * @param {string} name
   * @param {any} tool
   * @param {any} args
   */
  const executeToolAsync = async (channel, name, tool, args) => {
    try {
      let parsedArgs = args

      if (tool.input) {
        const parseResult = tool.input.safeParse(args)

        if (!parseResult.success) {
          const errorMsg = `Invalid arguments: ${parseResult.error.message}`

          toolEventQueue.push({
            type: 'toolCallError',
            data: { name, error: errorMsg },
          })

          await client.channel.publish(String(channel), {
            message: { error: errorMsg },
          })

          return
        }

        parsedArgs = parseResult.data
      }

      const result = await tool.handler(parsedArgs)

      toolEventQueue.push({
        type: 'toolCallEnd',
        data: { name, result },
      })

      await client.channel.publish(String(channel), {
        message: { data: result },
      })
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : 'Unknown error occurred'

      toolEventQueue.push({
        type: 'toolCallError',
        data: { name, error: errorMessage },
      })

      await client.channel.publish(String(channel), {
        message: { error: errorMessage },
      })
    } finally {
      runningTools.delete(channel)
    }
  }

  for await (const event of stream) {
    while (toolEventQueue.length > 0) {
      const toolEvent = toolEventQueue.shift()

      if (toolEvent) {
        yield toolEvent
      }
    }

    if (
      event.type === 'waitForChannelMessageBegin' &&
      event.data &&
      'channel' in event.data &&
      'function' in event.data
    ) {
      const channel = /** @type {string} */ (event.data.channel)
      const args = /** @type {any} */ (event.data.function).args

      const toolInfo = channelToTool.get(String(channel))

      if (toolInfo) {
        const { name, tool } = toolInfo

        yield {
          type: 'toolCallStart',
          data: {
            name,
            args,
          },
        }

        const toolPromise = executeToolAsync(channel, name, tool, args)

        runningTools.add(channel)

        toolPromise.catch(() => {
          // @note errors are already handled in executeToolAsync
        })
      }
    }

    yield event
  }

  while (toolEventQueue.length > 0) {
    const toolEvent = toolEventQueue.shift()

    if (toolEvent) {
      yield toolEvent
    }
  }

  while (runningTools.size > 0) {
    await new Promise((resolve) => setTimeout(resolve, 10))

    while (toolEventQueue.length > 0) {
      const toolEvent = toolEventQueue.shift()

      if (toolEvent) {
        yield toolEvent
      }
    }
  }
}

/**
 * Execute an agent task in a loop until exit is called. Provides planning,
 * progress tracking, and controlled exit functionality.
 *
 * @param {ConversationCompleteRequest & {
 *   client: ChatBotKit,
 *   tools?: Tools,
 *   maxIterations?: number
 * }} options
 * @returns {AsyncGenerator<ConversationCompleteStreamType | ToolCallStartEvent | ToolCallEndEvent | ToolCallErrorEvent | IterationEvent | ExitEvent, void, unknown>}
 */
export async function* execute(options) {
  const {
    client,

    tools = {},

    maxIterations = 50,

    ...request
  } = options

  const messages = [...(request.messages || [])]

  let exitResult = null

  const systemTools = {
    plan: {
      description:
        'Create or update a plan for approaching the task. Break down the task into clear, actionable steps. Use this at the start and whenever you need to revise your approach.',
      input: z.object({
        steps: z
          .array(z.string())
          .describe('Array of step descriptions in order of execution'),
        rationale: z
          .string()
          .optional()
          .describe('Brief explanation of the plan approach'),
      }),
      handler: async (/** @type {any} */ input) => {
        return {
          success: true,

          message: `Plan created with ${input.steps.length} steps${
            input.rationale ? ': ' + input.rationale : ''
          }`,
        }
      },
    },
    progress: {
      description:
        'Update progress on the current task. Use this to track completed steps, report current status, and identify blockers.',
      input: z.object({
        completed: z
          .array(z.string())
          .optional()
          .describe('Steps that have been completed'),
        current: z.string().optional().describe('Current step being worked on'),
        blockers: z
          .array(z.string())
          .optional()
          .describe('Any issues preventing progress'),
        nextSteps: z
          .array(z.string())
          .optional()
          .describe('Next actions to take'),
      }),
      handler: async (/** @type {any} */ input) => {
        return {
          success: true,

          message: 'Progress updated',

          ...input,
        }
      },
    },
    exit: {
      description:
        'Exit the task execution with a status code and optional message. Status code 0 indicates success, non-zero indicates failure. Use this when all the tasks are complete or cannot proceed.',
      input: z.object({
        code: z
          .number()
          .int()
          .min(0)
          .max(255)
          .describe('Exit status code (0 = success, non-zero = failure)'),
        message: z
          .string()
          .optional()
          .describe('Optional message explaining the exit reason'),
      }),
      handler: async (/** @type {any} */ input) => {
        exitResult = { code: input.code, message: input.message }

        return {
          success: true,

          message: `Task exiting with code ${input.code}${
            input.message ? ': ' + input.message : ''
          }`,
        }
      },
    },
  }

  const allTools = { ...systemTools, ...tools }

  const systemInstruction = `
${options.extensions?.backstory || ''}

# Task Execution Guidelines

The goal is to complete the assigned task efficiently and effectively. Follow these guidelines:

1. **Plan First**: Use the 'plan' function to create a clear strategy before starting work
2. **Track Progress**: Regularly use the 'progress' function to update status and identify issues
3. **Use Tools**: Leverage available tools to accomplish each step of your plan
4. **Exit When Done**: Call the 'exit' function with code 0 when successful, or non-zero code if unable to complete
5. **Be Autonomous**: Work through the task systematically without waiting for additional input
`.trim()

  let iteration = 0

  while (iteration < maxIterations && exitResult === null) {
    iteration++

    yield { type: 'iteration', data: { iteration } }

    for await (const event of complete({
      ...request,

      client,

      messages,

      tools: allTools,

      extensions: {
        ...options.extensions,

        backstory: systemInstruction,
      },
    })) {
      yield event
    }

    if (exitResult) {
      break
    }

    messages.push({
      type: 'user',
      text: 'Continue with the next step of your plan. If all steps are complete, call exit with the appropriate status code.',
    })
  }

  if (exitResult === null) {
    exitResult = {
      code: 1,
      message: `Task did not complete within ${maxIterations} iterations`,
    }
  }

  yield { type: 'exit', data: exitResult }
}
