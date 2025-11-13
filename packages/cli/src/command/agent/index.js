import { getRUNAS_USERID, getSECRET } from '../../env.js'
import { Spinner } from '../../spinner.js'
import { getToolNames, getTools } from '../../tools.js'

import { complete } from '@chatbotkit/agent'
import { ChatBotKit } from '@chatbotkit/sdk'

import { Command, Option } from 'commander'

function getClient() {
  return new ChatBotKit({
    secret: getSECRET(),
    runAsUserId: getRUNAS_USERID(),
  })
}

export const command = new Command()
  .name('agent')
  .description('Run an agent as a background worker with a prompt')
  .addOption(new Option('-b, --bot <bot>', 'Bot id'))
  .addOption(new Option('-m, --model <model>', 'Model name'))
  .addOption(
    new Option(
      '-p, --prompt <prompt>',
      'The prompt to execute'
    ).makeOptionMandatory()
  )
  .addOption(
    new Option('-t, --tools <tools...>', 'Specific tools to enable').choices(
      getToolNames()
    )
  )
  .action(async (options) => {
    const client = getClient()

    /** @type {{type: 'user'|'bot', text: string}[]} */
    const messages = [{ type: 'user', text: options.prompt }]

    const tools = getTools(options.tools)

    const isInteractive = process.stdout.isTTY

    const spinner = isInteractive ? new Spinner('Processing...') : null

    if (spinner) {
      spinner.start()
    }

    let firstToken = true

    for await (const { type, data } of complete({
      client,
      botId: options.bot,
      model: options.model,
      messages,
      tools,
    })) {
      if (type === 'token') {
        if (firstToken) {
          if (spinner) {
            spinner.stop()
          }
          firstToken = false
        }

        process.stdout.write(data.token)
      } else if (type === 'result') {
        messages.push({ type: 'bot', text: data.text })
      }
    }

    if (spinner) {
      spinner.stop()
    }

    if (!firstToken) {
      process.stdout.write('\n')
    }
  })

export default command
