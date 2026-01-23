/**
 * The `cbk run` command - executes JavaScript files with @chatbotkit/*
 * packages available without requiring local installation.
 *
 * Usage:
 *   cbk run script.js
 *   cbk run script.js --arg1 value1
 *   cbk run ./path/to/script.js
 *
 * The script can import any @chatbotkit/* package:
 *   import { ChatBotKit } from '@chatbotkit/sdk'
 *   import { complete } from '@chatbotkit/agent'
 */
import { CommandError, printError } from '../../output.js'

import { spawn } from 'child_process'
import { Command } from 'commander'
import { existsSync } from 'fs'
import { dirname, isAbsolute, join, resolve } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))

// Path to the loader module that registers our custom hooks
// From command/run/ we go up to src/ then into loader/

const loaderPath = join(__dirname, '..', '..', 'loader', 'index.js')

/**
 * Resolve a script path to an absolute path.
 *
 * @param {string} scriptPath - The script path (relative or absolute)
 * @returns {string} The absolute path to the script
 */
function resolveScriptPath(scriptPath) {
  if (isAbsolute(scriptPath)) {
    return scriptPath
  }

  return resolve(process.cwd(), scriptPath)
}

/**
 * Run a JavaScript file with @chatbotkit/* packages available.
 *
 * @param {string} scriptPath - Path to the script to run
 * @param {string[]} scriptArgs - Arguments to pass to the script
 * @returns {Promise<number>} The exit code of the script
 */
async function runScript(scriptPath, scriptArgs) {
  const absolutePath = resolveScriptPath(scriptPath)

  // Check if the file exists

  if (!existsSync(absolutePath)) {
    printError(new CommandError(`Script not found: ${scriptPath}`))
  }

  return new Promise((resolve) => {
    const child = spawn(
      process.execPath,
      [
        // Register our custom ESM loader hooks
        '--import',
        loaderPath,
        // The script to run
        absolutePath,
        // Arguments for the script
        ...scriptArgs,
      ],
      {
        stdio: 'inherit',
        env: {
          ...process.env,

          // Ensure the script can access CBK_API_KEY if set

          CBK_API_KEY:
            process.env.CBK_API_KEY || process.env.CHATBOTKIT_API_KEY,
        },
        cwd: process.cwd(),
      }
    )

    child.on('close', (code) => {
      resolve(code ?? 0)
    })

    child.on('error', (err) => {
      printError(new CommandError(`Failed to run script: ${err.message}`))
    })
  })
}

export const command = new Command()
  .name('run')
  .description('Run a JavaScript file with @chatbotkit/* packages available')
  .argument('<script>', 'Path to the JavaScript file to run')
  .argument('[args...]', 'Arguments to pass to the script')
  .helpOption(false) // Disable built-in help so it passes through to script
  .enablePositionalOptions() // Stop parsing options after first positional arg
  .passThroughOptions() // Options after <script> pass through to the script
  .allowUnknownOption(true)
  .allowExcessArguments(true)
  .addHelpText(
    'after',
    `
Examples:
  $ cbk run script.js
  $ cbk run ./scripts/deploy.js --env production
  $ cbk run analyze.js data.json

Available packages (no installation required):
  @chatbotkit/sdk     - Main SDK for ChatBotKit API
  @chatbotkit/agent   - Agent utilities for building AI agents
  @chatbotkit/fetch   - Fetch utilities
  @chatbotkit/cli     - CLI utilities (Command, Option, Argument)

Example script:
  import { ChatBotKit } from '@chatbotkit/sdk'
  import { Command } from '@chatbotkit/cli'

  const program = new Command()
    .option('-e, --env <env>', 'Environment', 'production')
    .parse()

  const client = new ChatBotKit({
    secret: process.env.CBK_API_KEY
  })

  console.log('Running in', program.opts().env)
`
  )
  .action(async (script, args) => {
    const exitCode = await runScript(script, args)

    process.exit(exitCode)
  })

export default command
