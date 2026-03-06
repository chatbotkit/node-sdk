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
 * Completes a single agent iteration. Handles tool calls and streams events for
 * tool execution and completion.
 *
 * @param {Omit<ConversationCompleteRequest, 'functions' | 'limits'> & {
 *   client: ChatBotKit,
 *   tools?: Tools,
 *   abortSignal?: AbortSignal,
 * }} options
 * @returns {AsyncGenerator<ConversationCompleteStreamType | ToolCallStartEvent | ToolCallEndEvent | ToolCallErrorEvent, void, unknown>}
 */
export async function* complete(options) {
  const { client, tools, abortSignal, ...request } = options

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

      limits: {
        iterations: 1,
      },
    })
    .stream({ abortSignal })

  /** @type {Array<ToolCallEndEvent | ToolCallErrorEvent>} */
  const toolEventQueue = []

  /** @type {Array<Promise<void>>} */
  const runningToolPromises = []

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
    }
  }

  for await (const event of stream) {
    if (abortSignal?.aborted) {
      break
    }

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

        runningToolPromises.push(toolPromise)
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

  if (runningToolPromises.length > 0) {
    await Promise.allSettled(runningToolPromises)

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
 * The agent runs until the model calls the built-in `exit` tool, the
 * `maxIterations` limit is reached, or an `abortSignal` is triggered.
 *
 * ### Message injection
 *
 * The `messages` array is used directly (not copied), so you can push new
 * messages onto it at any point while the agent is running. They will be
 * included in the context at the start of the next iteration:
 *
 * ```js
 * const messages = [{ type: 'user', text: 'Perform the task.' }]
 *
 * const stream = execute({ client, messages, tools })
 *
 * // inject a user message or system notification mid-run:
 * messages.push({ type: 'user', text: 'Also handle edge case Y.' })
 * messages.push({ type: 'context', text: 'System: disk usage at 90%.' })
 * ```
 *
 * The agent also appends its own `bot` responses to the same array as each
 * iteration completes, so `messages` reflects the full conversation history.
 *
 * @param {Omit<ConversationCompleteRequest, 'functions' | 'limits'> & {
 *   client: ChatBotKit,
 *   tools?: Tools,
 *   maxIterations?: number,
 *   abortSignal?: AbortSignal,
 * }} options
 * @returns {AsyncGenerator<ConversationCompleteStreamType | ToolCallStartEvent | ToolCallEndEvent | ToolCallErrorEvent | IterationEvent | ExitEvent, void, unknown>}
 */
export async function* execute(options) {
  const {
    client,

    tools = {},

    maxIterations = 100,

    abortSignal,

    ...request
  } = options

  // @note use the caller's array directly so external pushes are visible at the
  // next iteration boundary without any additional injection mechanism

  const messages = request.messages || []

  let exitResult = null

  // Per-iteration AbortController that the hard abort tool can cancel to
  // kill running processes immediately. Recreated each iteration.
  /** @type {AbortController|null} */
  let internalAbort = null

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
    abort: {
      description:
        'Immediately abort the current task. Use this when the user explicitly asks you to stop, cancel, or abort what you are doing. Set hard to true to kill running processes immediately.',
      input: z.object({
        reason: z.string().optional().describe('Brief reason for aborting'),
        hard: z
          .boolean()
          .optional()
          .describe(
            'If true, immediately kill running processes. If false (default), finish the current operation gracefully.'
          ),
      }),
      handler: async (/** @type {any} */ input) => {
        const reason = input.reason || 'aborted by user request'

        exitResult = { code: 1, message: reason }

        if (input.hard && internalAbort) {
          internalAbort.abort(reason)
        }

        return {
          success: true,

          message: `Task aborted: ${reason}`,
        }
      },
    },
  }

  const allTools = { ...tools, ...systemTools }

  const systemInstruction = `
${options.extensions?.backstory || ''}

# Task Execution Guidelines

The goal is to complete the assigned task efficiently and effectively. Follow these guidelines:

1. **Plan First**: Use the 'plan' function to create a clear strategy before starting work
2. **Track Progress**: Regularly use the 'progress' function to update status and identify issues
3. **Use Tools**: Leverage available tools to accomplish each step of your plan
4. **Exit When Done**: Call the 'exit' function with code 0 when successful, or non-zero code if unable to complete
5. **Abort**: If the user asks you to stop, cancel, or abort, call the 'abort' function immediately. Use hard=true if processes are running that need to be killed right away.
6. **Be Autonomous**: Work through the task systematically without waiting for additional input
7. **Be Responsive**: If the user sends a new message while you are working, acknowledge it briefly and adjust your approach if needed. Always prioritize user input over your current plan.
`.trim()

  let iteration = 0

  while (iteration < maxIterations && exitResult === null) {
    if (abortSignal?.aborted) {
      exitResult = {
        code: 1,
        message: 'Task execution aborted',
      }

      break
    }

    iteration++

    yield { type: 'iteration', data: { iteration } }

    let lastEndReason = null

    // Create a per-iteration AbortController. Hard abort cancels this to kill
    // any running tool processes for this iteration only.
    internalAbort = new AbortController()

    // Propagate the caller's signal to the iteration controller.
    if (abortSignal?.aborted) {
      internalAbort.abort(abortSignal.reason)
    } else if (abortSignal) {
      const capturedAbort = internalAbort

      abortSignal.addEventListener(
        'abort',
        () => capturedAbort.abort(abortSignal.reason),
        { once: true }
      )
    }

    const iterSignal = internalAbort.signal

    for await (const event of complete({
      ...request,

      client,

      messages,

      tools: allTools,

      abortSignal: iterSignal,

      extensions: {
        ...options.extensions,

        backstory: systemInstruction,
      },
    })) {
      if (event.type === 'message') {
        messages.push(event.data)
      }

      // Capture the end reason from result events so the outer loop can
      // decide whether to continue iterating.
      if (event.type === 'result') {
        if (event.data.end.reason) {
          lastEndReason = event.data.end.reason
        }
      }

      yield event
    }

    if (exitResult) {
      break
    }

    // The API returns end.reason in the result event. When the reason is "stop"
    // the model finished naturally without pending tool calls — continuing
    // would produce empty iterations endlessly unless more messages are
    // injected, so we treat it as a successful completion.
    if (lastEndReason === 'stop') {
      exitResult = { code: 0 }

      break
    }
  }

  if (exitResult === null) {
    exitResult = {
      code: 1,
      message: `Task did not complete within ${maxIterations} iterations`,
    }
  }

  yield { type: 'exit', data: exitResult }
}
