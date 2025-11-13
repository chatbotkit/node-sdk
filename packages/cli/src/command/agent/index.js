import { getRUNAS_USERID, getSECRET } from '../../env.js'
import { Spinner } from '../../spinner.js'
import { getToolNames, getTools } from '../../tools.js'

import { execute } from '@chatbotkit/agent'
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

    const tools = getTools(options.tools)

    const isInteractive = process.stdout.isTTY

    const spinner = isInteractive ? new Spinner('Executing task...') : null

    if (spinner) {
      spinner.start()
    }

    let exitResult = null

    for await (const { type, data } of execute({
      client,
      botId: options.bot,
      model: options.model,
      messages: [{ type: 'user', text: options.prompt }],
      tools,
      maxIterations: 50,
    })) {
      if (type === 'iteration') {
        if (spinner) {
          spinner.setText(`Iteration ${data.iteration}...`)
        }

        if (!isInteractive) {
          process.stdout.write(`\n--- Iteration ${data.iteration} ---\n`)
        }
      } else if (type === 'token') {
        if (spinner && spinner.isSpinning) {
          spinner.stop()
        }

        if (!isInteractive) {
          process.stdout.write(data.token)
        }
      } else if (type === 'exit') {
        exitResult = data
      }
    }

    if (spinner) {
      spinner.stop()
    }

    if (exitResult) {
      if (exitResult.code === 0) {
        process.stdout.write(`\n✓ Task completed successfully\n`)

        if (exitResult.message) {
          process.stdout.write(`  ${exitResult.message}\n`)
        }
      } else {
        process.stderr.write(
          `\n✗ Task failed with exit code ${exitResult.code}\n`
        )

        if (exitResult.message) {
          process.stderr.write(`  ${exitResult.message}\n`)
        }
      }

      process.exit(exitResult.code)
    } else {
      process.stderr.write(`\n✗ Task ended without exit signal\n`)

      process.exit(1)
    }
  })

export default command
