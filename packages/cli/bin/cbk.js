import cbk from '../src/index.js'
import { printError } from '../src/output.js'

cbk().catch(printError)
