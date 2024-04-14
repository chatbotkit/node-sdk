#!/usr/bin/env node
import dotenv from 'dotenv'

import cli from '@chatbotkit/cli'
import { printError } from '@chatbotkit/cli/output'

dotenv.config({
  // @ts-expect-error arrays are supported
  path: ['.env.local', '.env'],
})

cli().catch(printError)
