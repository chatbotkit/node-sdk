import dotenv from 'dotenv'

import cbk from '../src/index.js'
import { printError } from '../src/output.js'

dotenv.config({
  // @ts-expect-error arrays are supported
  path: ['.env.local', '.env'],
})

cbk().catch(printError)
