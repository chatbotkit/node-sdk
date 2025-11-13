import { getRUNAS_USERID, getSECRET } from '../../env.js'
import { print, printError } from '../../output.js'
import { Spinner } from '../../spinner.js'
import { getToolNames, getTools } from '../../tools.js'

import { execute } from '@chatbotkit/agent'
import { ChatBotKit } from '@chatbotkit/sdk'

import { Command, Option } from 'commander'
import { existsSync, readFileSync } from 'fs'
import { resolve } from 'path'

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
      'The prompt to execute (or path to a file containing the prompt)'
    ).makeOptionMandatory()
  )
  .addOption(
    new Option('-t, --tools <tools...>', 'Specific tools to enable').choices(
      getToolNames()
    )
  )
  .addOption(
    new Option(
      '-i, --max-iterations <maxIterations>',
      'Maximum number of iterations'
    )
      .default(50)
      .argParser((value) => parseInt(value, 10))
  )
  .action(async (options) => {
    const client = getClient()

    const tools = getTools(options.tools)

    let prompt = options.prompt
    {
      const filePath = resolve(process.cwd(), options.prompt)

      if (existsSync(filePath)) {
        try {
          prompt = readFileSync(filePath, 'utf-8')
        } catch (error) {
          printError(error)
        }
      }
    }

    const isInteractive = process.stdout.isTTY

    const spinner = isInteractive ? new Spinner() : null

    let exitResult = null
    let hasOutput = false

    for await (const { type, data } of execute({
      client,
      botId: options.bot,
      model: options.model,
      messages: [{ type: 'user', text: prompt }],
      tools,
      maxIterations: options.maxIterations,
    })) {
      if (type === 'iteration') {
        if (spinner) {
          if (spinner.isSpinning) {
            spinner.stop()
          }

          // eslint-disable-next-line no-console
          console.log(`[Iteration ${data.iteration}]`)

          spinner.start()
        } else {
          print({ iteration: data.iteration })
        }

        hasOutput = false
      } else if (type === 'token') {
        if (spinner && spinner.isSpinning) {
          spinner.stop()
        }

        if (!hasOutput && isInteractive) {
          process.stdout.write('> ')

          hasOutput = true
        }

        process.stdout.write(data.token)
      } else if (type === 'exit') {
        exitResult = data
      }
    }

    if (spinner && spinner.isSpinning) {
      spinner.stop()
    }

    // Add newline after token output before printing status
    process.stdout.write('\n\n')

    if (exitResult) {
      print({
        status: exitResult.code === 0 ? 'success' : 'failed',

        exitCode: exitResult.code,
        ...(exitResult.message && { message: exitResult.message }),
      })

      process.exit(exitResult.code)
    } else {
      printError(new Error('Task ended without exit signal'))
    }
  })

export default command
