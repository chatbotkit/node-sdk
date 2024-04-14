#!/usr/bin/env node
import { printError } from '@chatbotkit/cli/output'

import cli from 'create-cbk-app'

cli().catch(printError)
