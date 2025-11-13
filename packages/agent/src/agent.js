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
 * Agent complete generator function.
 *
 * @param {ConversationCompleteRequest & { client: ChatBotKit, tools?: Tools }} options
 * @returns {AsyncGenerator<ConversationCompleteStreamType, void, unknown>}
 */
export async function* complete(options) {
  const { client, tools, ...request } = options

  // Create a map of channel to tool info for quick lookup
  const channelToTool = new Map()

  const functions = tools
    ? Object.entries(tools).map(([name, tool]) => {
        const randomSuffix = Math.random().toString(36).substring(2, 15)
        const channel = `${name}_${randomSuffix}`.padEnd(16, '0')

        // Store the mapping for later use
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

        // Extract only the properties needed by the API
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

  for await (const event of stream) {
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
        const { tool } = toolInfo

        try {
          let parsedArgs = args

          if (tool.input) {
            const parseResult = tool.input.safeParse(args)

            if (!parseResult.success) {
              await client.channel.publish(String(channel), {
                message: JSON.stringify({
                  error: `Invalid arguments: ${parseResult.error.message}`,
                }),
              })

              continue
            }

            parsedArgs = parseResult.data
          }

          const result = await tool.handler(parsedArgs)

          await client.channel.publish(String(channel), {
            message: JSON.stringify({ data: result }),
          })
        } catch (error) {
          await client.channel.publish(String(channel), {
            message: JSON.stringify({
              error:
                error instanceof Error
                  ? error.message
                  : 'Unknown error occurred',
            }),
          })
        }
      }
    }

    yield event
  }
}
