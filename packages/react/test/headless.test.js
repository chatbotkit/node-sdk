import assert from 'node:assert/strict'
import fs from 'node:fs'
import path from 'node:path'
import { describe, it } from 'node:test'
import { fileURLToPath } from 'node:url'

const packageDir = path.resolve(
  path.dirname(fileURLToPath(import.meta.url)),
  '..'
)
const packagesDir = path.resolve(packageDir, '..')

const workspacePackages = {
  '@chatbotkit/react': path.join(packagesDir, 'react', 'src'),
  '@chatbotkit/sdk': path.join(packagesDir, 'sdk', 'src'),
  '@chatbotkit/fetch': path.join(packagesDir, 'fetch', 'src'),
}

const importPattern =
  /(?:^|[\s;])(?:import|export)\s+(?:[^'"]*?\s+from\s+)?['"]([^'"]+)['"]|import\(\s*['"]([^'"]+)['"]\s*\)/g

/**
 * @param {string} file
 */
function resolveFile(file) {
  for (const candidate of [file, `${file}.js`, path.join(file, 'index.js')]) {
    if (fs.existsSync(candidate) && fs.statSync(candidate).isFile()) {
      return candidate
    }
  }

  throw new Error(`Cannot resolve ${file}`)
}

/**
 * @param {string} specifier
 * @param {string} fromFile
 */
function resolveSpecifier(specifier, fromFile) {
  if (specifier.startsWith('.')) {
    return resolveFile(path.resolve(path.dirname(fromFile), specifier))
  }

  for (const [name, srcDir] of Object.entries(workspacePackages)) {
    if (specifier === name) {
      return resolveFile(path.join(srcDir, 'index.js'))
    }

    if (specifier.startsWith(`${name}/`)) {
      return resolveFile(path.join(srcDir, specifier.slice(name.length + 1)))
    }
  }

  return null
}

/**
 * @param {string} source
 */
function stripComments(source) {
  return source.replace(/\/\*[\s\S]*?\*\//g, '').replace(/^\s*\/\/.*$/gm, '')
}

/**
 * @param {string} entry
 */
function collectGraph(entry) {
  const files = new Set()
  const external = new Set()

  const queue = [entry]

  while (queue.length) {
    const file = /** @type {string} */ (queue.shift())

    if (files.has(file)) {
      continue
    }

    files.add(file)

    const source = stripComments(fs.readFileSync(file, 'utf8'))

    for (const match of source.matchAll(importPattern)) {
      const specifier = match[1] || match[2]

      const resolved = resolveSpecifier(specifier, file)

      if (resolved) {
        queue.push(resolved)
      } else {
        external.add(specifier)
      }
    }
  }

  return { files, external }
}

const headlessEntry = path.join(packageDir, 'src', 'headless.js')

describe('@chatbotkit/react/headless', () => {
  it('is exported by the package', () => {
    const pkg = JSON.parse(
      fs.readFileSync(path.join(packageDir, 'package.json'), 'utf8')
    )

    assert.deepEqual(pkg.exports['./headless'], {
      types: './types/headless.d.ts',
      import: './src/headless.js',
    })

    assert.equal(pkg.peerDependenciesMeta?.['react-dom']?.optional, true)
    assert.equal(pkg.peerDependenciesMeta?.['react-markdown']?.optional, true)
  })

  it('exports the conversation manager hooks and context', () => {
    const source = fs.readFileSync(headlessEntry, 'utf8')

    for (const name of [
      'ConversationContext',
      'ConversationManager',
      'useConversationManager',
      'useConversationManagerState',
      'useConversationManagerStateReducer',
      'useConversationManagerRemote',
    ]) {
      assert.match(source, new RegExp(`\\b${name}\\b`))
    }
  })

  it('imports only react and platform-neutral modules', () => {
    const { files, external } = collectGraph(headlessEntry)

    assert.deepEqual([...external].sort(), ['react'])

    for (const file of files) {
      const relative = path.relative(packagesDir, file)

      assert.doesNotMatch(
        relative,
        /^react\/src\/components\/(AutoScroller|AutoTextarea|ChatInput|ChatMessage|ChatMessages)\.js$/
      )

      assert.doesNotMatch(relative, /useDOMQuerySelector|useWidgetInstance/)

      const source = stripComments(fs.readFileSync(file, 'utf8'))

      assert.doesNotMatch(
        source,
        /\bdocument\.|\bwindow\.|ResizeObserver|scrollIntoView|querySelector/,
        relative
      )
    }
  })
})
