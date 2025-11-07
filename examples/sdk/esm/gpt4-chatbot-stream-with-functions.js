import * as dotenv from 'dotenv'

import { ConversationClient } from '@chatbotkit/sdk/conversation/index.js'

import readline from 'node:readline/promises'

dotenv.config()

/**
 * The following example demonstrates how to use the `ConversationClient` to
 * create a chatbot that can interact with the user and execute functions. For
 * this we need to manage the messages and the functions that the chatbot can
 * execute. This is done with the help of activity messages that are sent by the
 * chatbot to the user and vice versa.
 *
 * This is a more elaborate example. In practice, the ChatBotKit SDK can be used
 * to achieve the same result with less code.
 */
async function main() {
  const client = new ConversationClient({
    secret: process.env.CHATBOTKIT_API_SECRET,
  })

  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  })

  const functions = [
    {
      name: 'getName',
      description: 'Gets the name of the authenticated user.',
      parameters: {},
      handler: async () => {
        return 'Bob'
      },
    },
  ]

  /** @type {{type: 'user'|'bot'|'reasoning'|'activity'|'context'|'instruction'|'backstory', text: string, meta?: Record<string,any>}[]} */
  const messages = []

  for (;;) {
    const user = await rl.question('user: ')

    messages.push({ type: 'user', text: user })

    process.stdout.write('bot: ')

    /**
     * The complete function is a recursive function that sends the messages to
     * the chatbot and waits for the response. If the response is an activity
     * message with a function name, the function is executed and the response
     * is sent back to the chatbot. This process continues until the chatbot
     * does not send any more messages.
     */
    const complete = async (maxRecursion = 3) => {
      if (maxRecursion <= 0) {
        return
      }

      for await (const { type, data } of client
        .complete(null, {
          model: 'gpt-4',
          messages,
          functions: functions.map(({ name, description, parameters }) => {
            return {
              name,
              description,
              parameters,
            }
          }),
        })
        .stream()) {
        if (type === 'token') {
          process.stdout.write(data.token)
        } else if (type === 'message') {
          const message = data

          messages.push(message)

          // @ts-expect-error meta is unknown
          if (message.meta?.activity?.type === 'request') {
            // @ts-expect-error meta is unknown
            const name = message.meta.activity.function?.name
            // @ts-expect-error meta is unknown
            const args = message.meta.activity.function?.arguments

            const fn = functions.find((fn) => fn.name === name)

            if (fn) {
              const result = await fn.handler()

              messages.push({
                type: 'activity',
                text: '',
                meta: {
                  activity: {
                    type: 'response',
                    function: { name, arguments: args, result },
                  },
                },
              })

              await complete(maxRecursion - 1)
            }
          }
        }
      }
    }

    await complete()

    process.stdout.write('\n')
  }
}

main()
