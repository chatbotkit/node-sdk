/**
 * ESM Loader Registration
 *
 * This module registers the custom hooks for resolving @chatbotkit/* packages.
 * It's used with: node --import @chatbotkit/cli/loader script.js
 */
import { register } from 'node:module'
import { dirname, join } from 'path'
import { fileURLToPath, pathToFileURL } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const hooksPath = join(__dirname, 'hooks.js')

register(pathToFileURL(hooksPath).href, import.meta.url)
