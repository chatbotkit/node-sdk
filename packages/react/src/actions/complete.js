import { isValidElement } from 'react'

import { stream } from '../utils/stream.js'

/**
 * @typedef {{
 *   type: 'bot'|'user'|'context'|'instruction'|'backstory'|'activity',
 *   text: string,
 *   meta?: Record<string,any>
 * }} InputMessage
 *
 * @typedef {{
 *   name: string,
 *   description: string,
 *   parameters: Record<string,any>,
 *   handler?: (args: any) => Promise<string|import('react').ReactElement|{text?: string, children?: import('react').ReactElement, result?: any}>
 * }} InputFunction
 *
 * @typedef {Omit<import('@chatbotkit/sdk/conversation/v1.js').ConversationCompleteRequest,'messages'|'unstable'> & {
 *   client: import('@chatbotkit/sdk').ConversationClient,
 *   messages: InputMessage[],
 *   functions?: InputFunction[],
 *   maxRecusion?: number
 * }} Options
 */

/**
 * The complete function will take a list of messages and optional functions and
 * return a generator that will yield various events. The function also handles
 * the current message state as well as correctly handling function calls.
 *
 * @param {Options} options
 * @returns {any}
 */
async function* complete({
  client,

  messages,
  functions,

  maxRecusion = 3,

  ...options
}) {
  // Bail out if we have reached the maximum recusion depth.

  if (maxRecusion <= 0) {
    return
  }

  // Clone the messages array to ensure that we don't mutate the original array.

  messages = messages.slice(0)

  // Create a new conversation client instance and start the stream.

  const it = client
    .complete(null, {
      ...options,

      // Ensure that all messages are simple objects

      messages: messages.map(({ type, text, meta }) => {
        return {
          type,
          text,
          meta,
        }
      }),

      // For now function calling is unstable

      unstable: {
        // Ensure that all functions are simple objects

        functions: functions?.map(({ name, description, parameters }) => {
          return {
            name,
            description,
            parameters,
          }
        }),
      },
    })
    .stream()

  // Iterate over the stream and handle each item.

  for await (const item of it) {
    // By default all items are yielded.

    yield item

    // Handle items based on their type.

    const { type, data } = item

    if (type === 'message') {
      const message = data

      // Messages are pushed to the messages array because they might be used
      // in subsequent function calls.

      messages.push(message)

      // If the message is an activity and it is a request then we will try to
      // find the function and call it.

      if (message.meta?.activity?.type === 'request') {
        const name = message.meta.activity.function?.name
        const args = message.meta.activity.function?.arguments

        const fn = functions?.find((fn) => fn.name === name)

        if (fn && typeof fn.handler === 'function') {
          // Call the function and handle the output.

          const output = await fn.handler(args)

          let text
          let children
          let result

          if (typeof output === 'string') {
            text = undefined
            children = undefined
            result = output
          } else if (isValidElement(output)) {
            text = ''
            children = output
            result = undefined
          } else {
            if (typeof output?.text === 'string') {
              text = output.text
            }

            if (isValidElement(output?.children)) {
              children = output.children
            }

            if (output?.result) {
              result = output.result
            }
          }

          // If the function has text or children then we will yield a message.

          if (text || children) {
            yield {
              type: 'message',
              data: {
                type: 'bot',
                text: text ? text : '',
                children: children ? <>{children}</> : undefined,
              },
            }
          }

          // If the function has a result then we create an activity response.

          if (result) {
            /** @type {InputMessage} */
            const activityMessage = {
              type: 'activity',
              text: '',
              meta: {
                activity: {
                  type: 'response',
                  function: {
                    name,
                    arguments: args,
                    result: JSON.stringify(result),
                  },
                },
              },
            }

            yield { type: 'message', data: activityMessage }

            messages.push(activityMessage)

            // Recursively call the complete function to handle the response.

            yield* complete({
              ...options,

              client,

              messages,
              functions,

              maxRecusion: maxRecusion - 1,
            })
          }
        }
      }
    }
  }
}

/**
 * A wrapper around the complete function that will return a generator that will
 * yield various events. Similarly to the complete function it will handle the
 * current message state as well as correctly handling function calls.
 * 
 * @param {Options} options
 * @returns {import('../utils/stream.js').StreamResult}
 */
export function streamComplete(options) {
  return stream(complete(options))
}

export default complete
