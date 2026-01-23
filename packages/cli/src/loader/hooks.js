/**
 * ESM Loader Hooks for resolving @chatbotkit/* packages from the CLI's
 * node_modules. This allows scripts run via `cbk run` to import ChatBotKit
 * packages without having them installed locally.
 *
 * @see https://nodejs.org/api/module.html#customization-hooks
 */
import { existsSync, readFileSync } from 'fs'
import { dirname, join } from 'path'
import { fileURLToPath, pathToFileURL } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))

// The CLI's node_modules directory where @chatbotkit packages are installed

const cliRoot = join(__dirname, '..', '..')
const cliNodeModules = join(cliRoot, 'node_modules')

/**
 * Resolve a package's entry point by reading its package.json exports.
 *
 * @param {string} packagePath - Path to the package directory
 * @param {string} subpath - Subpath within the package (e.g., 'bot' for '@chatbotkit/sdk/bot')
 * @returns {string|null} The resolved file path or null if not found
 */
function resolvePackageExport(packagePath, subpath) {
  const packageJsonPath = join(packagePath, 'package.json')

  if (!existsSync(packageJsonPath)) {
    return null
  }

  try {
    const packageJson = JSON.parse(readFileSync(packageJsonPath, 'utf-8'))
    const exportKey = subpath ? './' + subpath : '.'

    // Check exports field
    if (packageJson.exports) {
      const exportEntry = packageJson.exports[exportKey]

      if (exportEntry) {
        // Handle different export formats

        let importPath

        if (typeof exportEntry === 'string') {
          importPath = exportEntry
        } else if (exportEntry.import) {
          importPath = exportEntry.import
        } else if (exportEntry.default) {
          importPath = exportEntry.default
        }

        if (importPath) {
          const resolved = join(packagePath, importPath)

          if (existsSync(resolved)) {
            return resolved
          }
        }
      }
    }

    // Fallback to main field for root import

    if (!subpath && packageJson.main) {
      const resolved = join(packagePath, packageJson.main)

      if (existsSync(resolved)) {
        return resolved
      }
    }

    // Fallback to index.js

    if (!subpath) {
      const indexPath = join(packagePath, 'index.js')

      if (existsSync(indexPath)) {
        return indexPath
      }
    }
  } catch {
    // Ignore JSON parse errors
  }

  return null
}

/**
 * Resolve hook - intercepts module resolution to redirect @chatbotkit/*
 * imports to the CLI's bundled packages.
 *
 * @param {string} specifier - The module specifier being resolved
 * @param {object} context - Resolution context
 * @param {Function} nextResolve - The next resolve function in the chain
 * @returns {Promise<{url: string, shortCircuit?: boolean}>}
 */
export async function resolve(specifier, context, nextResolve) {
  // Check if this is a @chatbotkit package import

  if (specifier.startsWith('@chatbotkit/')) {
    // Extract the package name (handles subpath imports like @chatbotkit/sdk/bot)

    const parts = specifier.split('/')
    const packageName = parts[0] + '/' + parts[1]
    const subpath = parts.slice(2).join('/')

    // Special case: @chatbotkit/cli is the CLI package itself (not in node_modules)

    if (packageName === '@chatbotkit/cli') {
      const resolved = resolvePackageExport(cliRoot, subpath)

      if (resolved) {
        return {
          url: pathToFileURL(resolved).href,
          shortCircuit: true,
        }
      }
    }

    // Build the path to the package in CLI's node_modules

    const packagePath = join(cliNodeModules, packageName)

    if (existsSync(packagePath)) {
      const resolved = resolvePackageExport(packagePath, subpath)

      if (resolved) {
        return {
          url: pathToFileURL(resolved).href,
          shortCircuit: true,
        }
      }
    }
  }

  // For all other imports, use the default resolution

  return nextResolve(specifier, context)
}
