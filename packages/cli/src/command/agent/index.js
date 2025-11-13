import { getRUNAS_USERID, getSECRET } from '../../env.js'
import { print, printError } from '../../output.js'
import { Spinner } from '../../spinner.js'
import { getToolNames, getTools } from '../../tools.js'

import { execute } from '@chatbotkit/agent'
import { ChatBotKit } from '@chatbotkit/sdk'

import { Command, Option } from 'commander'
import { existsSync, readFileSync } from 'fs'
import { resolve } from 'path'

/**
 * Manages output state to avoid mixed raw and structured output
 */
class OutputManager {
  constructor() {
    this.lastOutputWasRaw = false
    this.lastOutputWasStructured = false
    this.hasRawOutput = false
    this.lastChar = ''
  }

  /**
   * Write raw text (like tokens) directly to stdout
   *
   * @param {string} text
   */
  writeRaw(text) {
    if (this.lastOutputWasStructured) {
      process.stdout.write('\n')

      this.lastOutputWasStructured = false
    }

    process.stdout.write(text)

    this.lastOutputWasRaw = true
    this.hasRawOutput = true

    if (text.length > 0) {
      this.lastChar = text[text.length - 1]
    }
  }

  /**
   * Add appropriate newlines based on what was written last
   */
  addNewlinesIfNeeded() {
    if (!this.lastOutputWasRaw) {
      return
    }

    if (this.lastChar === '\n') {
      process.stdout.write('\n')
    } else {
      process.stdout.write('\n\n')
    }

    this.lastOutputWasRaw = false
  }

  /**
   * Print structured data, adding newlines if needed after raw output
   *
   * @param {object} data
   */
  printStructured(data) {
    this.addNewlinesIfNeeded()

    print(data)

    this.lastOutputWasStructured = true
  }

  /**
   * Reset state (e.g., at iteration boundaries)
   */
  reset() {
    this.lastOutputWasRaw = false
    this.lastOutputWasStructured = false
    this.hasRawOutput = false
    this.lastChar = ''
  }

  /**
   * Check if we've had any raw output
   */
  hadRawOutput() {
    return this.hasRawOutput
  }

  /**
   * Write a line of text, handling newlines appropriately
   *
   * @param {string} text
   */
  writeLine(text) {
    this.addNewlinesIfNeeded()

    // eslint-disable-next-line no-console
    console.log(text)

    this.lastOutputWasStructured = true
  }
}

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

    const output = new OutputManager()

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

          const iterationNum = data.iteration - 1

          output.writeLine(`╭─ Iteration ${iterationNum} ─╮`)

          spinner.start()
        } else {
          output.printStructured({ iteration: data.iteration - 1 })
        }

        output.reset()

        hasOutput = false
      } else if (type === 'toolCallStart') {
        if (spinner && spinner.isSpinning) {
          spinner.stop()
        }

        output.printStructured({
          tool: data.name,
          status: 'running',
          args: data.args,
        })

        if (spinner) {
          spinner.start()
        }
      } else if (type === 'toolCallEnd') {
        if (spinner && spinner.isSpinning) {
          spinner.stop()
        }

        output.printStructured({
          tool: data.name,
          status: 'completed',
          result: data.result,
        })

        if (spinner) {
          spinner.start()
        }
      } else if (type === 'toolCallError') {
        if (spinner && spinner.isSpinning) {
          spinner.stop()
        }

        output.printStructured({
          tool: data.name,
          status: 'error',
          error: data.error,
        })

        if (spinner) {
          spinner.start()
        }
      } else if (type === 'token') {
        if (spinner && spinner.isSpinning) {
          spinner.stop()
        }

        if (!hasOutput && isInteractive) {
          output.writeRaw('> ')

          hasOutput = true
        }

        output.writeRaw(data.token.replace(/\n/gm, '\n> '))
      } else if (type === 'exit') {
        exitResult = data

        if (spinner && spinner.isSpinning) {
          spinner.stop()
        }
      }
    }

    if (spinner && spinner.isSpinning) {
      spinner.stop()
    }

    if (exitResult) {
      output.printStructured({
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
