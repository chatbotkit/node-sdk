import { isValidElement } from 'react'

import { isAsyncGenerator } from '../utils/it.js'
import { stream } from '../utils/stream.js'
import { getRandomId } from '../utils/string.js'

/**
 * @typedef {import('react').ReactElement} ReactElement
 * @typedef {import('react').ReactNode} ReactNode
 */

/**
 * @typedef {Record<string,any>} BasicParametersSchema
 *
 * @typedef {{
 *   schema: BasicParametersSchema,
 *   validate(value: any): Promise<{valid: boolean, error?: Error}>
 * }} ValidatingParametersSchema
 */

/**
 * @typedef {{
 *   type: 'bot'|'user'|'context'|'instruction'|'backstory'|'activity',
 *   text: string,
 *   meta?: Record<string,any>
 * }} InputMessage
 */

/**
 * @typedef {() => AsyncGenerator<ReactNode>|ReactNode|Promise<ReactNode>} RenderFunction
 *
 * @typedef {any} HandlerArgs
 * @typedef {string|ReactElement|{text?: string, children?: ReactNode, render?: RenderFunction, result?: any}} HandlerResult
 *
 * @typedef {{
 *   name: string,
 *   description: string,
 *   parameters: BasicParametersSchema|ValidatingParametersSchema,
 *   handler?: (args: HandlerArgs) => Promise<HandlerResult>
 * }} InputFunction
 *
 * @typedef {Omit<import('@chatbotkit/sdk/conversation/v1.js').ConversationCompleteRequest,'messages'|'functions'> & {
 *   client: import('@chatbotkit/sdk').ConversationClient,
 *   messages: InputMessage[],
 *   functions?: (InputFunction|(() => InputFunction))[],
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

  // Convert all functions to objects if they are functions.

  /** @type {InputFunction[]|undefined} */
  const functionDefinitions = functions?.map((fn) => {
    if (typeof fn === 'function') {
      return fn()
    } else {
      return fn
    }
  })

  // Define a reference to the stream iterator.

  let it

  // If the iterator is undefined then we check if we have an activity request.

  if (!it) {
    const lastMessage = messages[messages.length - 1]

    if (lastMessage) {
      if (lastMessage.type === 'activity') {
        if (lastMessage.meta?.activity?.type === 'request') {
          messages.pop()

          it = [{ type: 'message', data: lastMessage }]
        }
      }
    }
  }

  // If the iterator is undefined then we create a new completion stream.

  if (!it) {
    it = client
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

        // Ensure that all functions are simple objects

        functions: functionDefinitions?.map(
          ({ name, description, parameters }) => {
            return {
              name,
              description,

              parameters: parameters.schema ? parameters.schema : parameters,
            }
          }
        ),
      })
      .stream()
  }

  // Hard bail if we don't have a stream iterator.

  if (!it) {
    throw new Error('No stream iterator')
  }

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

        const fn = functionDefinitions?.find((fn) => fn.name === name)

        if (fn && typeof fn.handler === 'function') {
          // If the function has a validating schema then use it

          if (fn.parameters.validate) {
            const { valid, error } = await fn.parameters.validate(args)

            if (!valid) {
              throw error || new Error('Invalid arguments')
            }
          }

          // Call the function and handle the output.

          const output = await fn.handler(args)

          let text
          let children
          let result
          let render

          if (typeof output === 'string') {
            text = undefined
            children = undefined
            render = undefined
            result = output
          } else if (isValidElement(output)) {
            text = ''
            children = output
            render = undefined
            result = undefined
          } else {
            if (typeof output?.text === 'string') {
              text = output.text
            }

            if (isValidElement(output?.children)) {
              children = output.children
            }

            if (typeof output?.render === 'function') {
              render = output.render
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
                text: text || '',
                children: children || undefined,
              },
            }
          } else if (text || render) {
            const result = await render?.()

            if (isAsyncGenerator(result)) {
              const id = getRandomId('tmp-')

              for await (const item of /** @type {AsyncGenerator<ReactNode>} */ (
                result
              )) {
                yield {
                  type: 'message',
                  data: {
                    id: id,
                    type: 'bot',
                    text: text || '',
                    children: item || undefined,
                  },
                }
              }
            } else {
              yield {
                type: 'message',
                data: {
                  type: 'bot',
                  text: text || '',
                  children: result || undefined,
                },
              }
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
