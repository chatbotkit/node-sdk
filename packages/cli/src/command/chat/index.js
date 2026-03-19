import { getRUNAS_USERID, getSECRET } from '../../env.js'
import { Spinner } from '../../spinner.js'
import { getToolNames, getTools } from '../../tools.js'

import {
  createSkillsFeature,
  execute,
  loadAgent,
  loadSkills,
} from '@chatbotkit/agent'
import { ChatBotKit } from '@chatbotkit/sdk'

import { Command, Option } from 'commander'
import readline from 'readline/promises'

function getClient() {
  return new ChatBotKit({
    secret: getSECRET(),
    runAsUserId: getRUNAS_USERID(),
  })
}

export const command = new Command()
  .name('chat')
  .description('Start a chat session')
  .addOption(
    new Option('-a, --agent <agent>', 'Path to an agent markdown file')
  )
  .addOption(new Option('-b, --bot <bot>', 'Bot id'))
  .addOption(new Option('-m, --model <model>', 'Model name'))
  .addOption(new Option('--skillset <skillset>', 'Skillset id'))
  .addOption(new Option('--dataset <dataset>', 'Dataset id'))
  .addOption(
    new Option('-t, --tools <tools...>', 'Specific tools to enable').choices(
      getToolNames()
    )
  )
  .addOption(
    new Option('-s, --skills <dirs...>', 'Directories to load skills from')
  )
  .addOption(new Option('-d, --debug', 'Print raw stream items to stderr'))
  .action(async (options) => {
    const client = getClient()

    const agent = options.agent ? await loadAgent(options.agent) : null

    const { skills, close: closeSkills } = options.skills
      ? await loadSkills(options.skills, { watch: true })
      : { skills: [], close: () => {} }

    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    })

    // Ctrl+D: exit gracefully
    rl.on('close', () => {
      process.stdout.write('\n')

      closeSkills()

      process.exit(0)
    })

    /** @type {import('@chatbotkit/sdk/conversation/v1').Message[]} */
    const messages = []

    const tools = getTools(options.tools)

    const colors = {
      reset: '\x1b[0m',
      bold: '\x1b[1m',
      cyan: '\x1b[36m',
      green: '\x1b[32m',
      dim: '\x1b[2m',
      gray: '\x1b[90m',
    }

    // Print meta info + shortcuts banner

    const effectiveBot = options.bot || agent?.botId
    const effectiveModel = options.model ?? agent?.model
    const effectiveSkillset = options.skillset ?? agent?.skillsetId
    const effectiveDataset = options.dataset ?? agent?.datasetId
    const effectiveSkills = options.skills

    const metaLines = []

    if (agent?.name) {
      metaLines.push(`agent      ${agent.name}`)
    }
    if (effectiveBot) {
      metaLines.push(`bot        ${effectiveBot}`)
    }
    if (effectiveModel) {
      metaLines.push(`model      ${effectiveModel}`)
    }
    if (effectiveSkillset) {
      metaLines.push(`skillset   ${effectiveSkillset}`)
    }
    if (effectiveDataset) {
      metaLines.push(`dataset    ${effectiveDataset}`)
    }
    if (effectiveSkills) {
      metaLines.push(`skills     ${effectiveSkills.join(', ')}`)
    }

    if (metaLines.length > 0) {
      process.stdout.write('\n')
      for (const line of metaLines) {
        process.stdout.write(`${colors.gray}  ${line}${colors.reset}\n`)
      }
    }

    process.stdout.write(
      `\n${colors.gray}  shortcuts  Ctrl+C re-prompt · Ctrl+C×2 abort response · Ctrl+D exit${colors.reset}\n`
    )

    /** @type {AbortController | null} */
    let agentAbort = null

    /** @type {AbortController | null} */
    let promptAbort = null

    let sigintCount = 0

    // Ctrl+C: cancel agent run on second press; re-prompt when at the input
    // prompt

    rl.on('SIGINT', () => {
      if (agentAbort) {
        sigintCount++

        if (sigintCount === 1) {
          process.stdout.write(
            `\n  ${colors.dim}(Press Ctrl+C again to cancel)${colors.reset}\n`
          )
        } else {
          sigintCount = 0
          agentAbort.abort()
        }
      } else {
        process.stdout.write('^C\n')
        promptAbort?.abort()
      }
    })

    for (;;) {
      process.stdout.write('\n')

      promptAbort = new AbortController()

      let text

      try {
        text = await rl.question(
          `${colors.cyan}●${colors.reset} ${colors.bold}You${colors.reset}\n\n> `,
          { signal: promptAbort.signal }
        )
      } catch {
        // Ctrl+C at the prompt - re-prompt
        continue
      } finally {
        promptAbort = null
      }

      text = text?.trim()

      if (!text) {
        continue
      }

      messages.push({ type: 'user', text: text })

      process.stdout.write(
        `\n${colors.green}●${colors.reset} ${colors.bold}Assistant${colors.reset}\n\n  `
      )

      const spinner = new Spinner('')

      if (!options.debug) {
        spinner.start()
      }

      let firstToken = true

      sigintCount = 0
      agentAbort = new AbortController()

      try {
        for await (const item of execute({
          client,

          ...(options.bot
            ? { botId: options.bot }
            : agent?.botId
            ? { botId: agent.botId }
            : { model: options.model ?? agent?.model }),

          ...(agent?.backstory ? { backstory: agent.backstory } : {}),

          ...(options.skillset ?? agent?.skillsetId
            ? { skillsetId: options.skillset ?? agent?.skillsetId }
            : {}),

          ...(options.dataset ?? agent?.datasetId
            ? { datasetId: options.dataset ?? agent?.datasetId }
            : {}),

          messages,
          tools,

          abortSignal: agentAbort.signal,

          ...(skills.length > 0
            ? { extensions: { features: [createSkillsFeature(skills)] } }
            : {}),
        })) {
          const { type, data } = item

          if (options.debug) {
            process.stderr.write(
              `${colors.dim}[debug] ${JSON.stringify(item)}${colors.reset}\n`
            )
          } else if (type === 'token') {
            if (firstToken) {
              spinner.stop()

              firstToken = false
            }

            process.stdout.write(data.token)
          }

          if (type === 'message') {
            messages.push(data)
          }
        }
      } catch {
        // aborted - fall through to re-prompt
      } finally {
        agentAbort = null
      }

      if (!options.debug) {
        spinner.stop()
      }

      process.stdout.write('\n')
    }
  })

export default command
