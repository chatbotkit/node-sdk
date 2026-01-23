import { formatBlue } from './color.js'
import agent from './command/agent/index.js'
import command from './command/api/index.js'
import chat from './command/chat/index.js'
import run from './command/run/index.js'
import solution from './command/solution/index.js'

import { Argument, Command, Option } from 'commander'
import { readFileSync } from 'fs'
import { dirname, join } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))

/**
 * Get the CLI version from package.json.
 */
function getVersion() {
  try {
    // Try source structure first (src/)

    let pkgPath = join(__dirname, '..', 'package.json')
    let pkg = JSON.parse(readFileSync(pkgPath, 'utf-8'))

    if (pkg.version) {
      return pkg.version
    }
  } catch {
    // Ignore
  }

  try {
    // Try dist structure (dist/esm/)

    let pkgPath = join(__dirname, '..', '..', 'package.json')
    let pkg = JSON.parse(readFileSync(pkgPath, 'utf-8'))

    if (pkg.version) {
      return pkg.version
    }
  } catch {
    // Ignore
  }

  return 'unknown'
}

// Re-export commander utilities for scripts to build their own CLIs

export { Command, Option, Argument }

/**
 * Print a banner message to the console.
 *
 * @returns {void}
 */
function printBanner() {
  // eslint-disable-next-line no-console
  console.log(
    formatBlue(`
 .d8888b.  888888b.   888    d8P
d88P  Y88b 888  "88b  888   d8P
888    888 888  .88P  888  d8P
888        8888888K.  888d88K
888        888  "Y88b 8888888b
888    888 888    888 888  Y88b
Y88b  d88P 888   d88P 888   Y88b
 "Y8888P"  8888888P"  888    Y88b .ai
`)
  )
}

/**
 * The main entry point for the CLI.
 *
 * @param {string[]} [argv]
 * @returns {Promise<void>}
 */
export default async function cbk(argv = process.argv) {
  const program = new Command()

  program
    .name('cbk')
    .description('Command line tools for ChatBotKit')
    .version(getVersion(), '-v, --version', 'Display the CLI version')

  if (process.stdout.isTTY) {
    program.hook('preAction', () => {
      printBanner()
    })
  }

  program.addCommand(command)
  program.addCommand(agent)
  program.addCommand(chat)
  program.addCommand(run)
  program.addCommand(solution)

  program.parse(argv)
}
