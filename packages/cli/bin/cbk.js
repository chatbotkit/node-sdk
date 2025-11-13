#!/usr/bin/env node
import dotenv from 'dotenv'

import cli from '@chatbotkit/cli'
import { printError } from '@chatbotkit/cli/output'

import { homedir } from 'os'
import { join } from 'path'

dotenv.config({
  path: ['.env.local', '.env', join(homedir(), '.cbk', 'env')],
})

process.on('unhandledRejection', printError)
process.on('uncaughtException', printError)

cli().catch(printError)
