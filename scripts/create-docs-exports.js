/* eslint-disable no-console */
import childProcess from 'child_process'
import fs from 'node:fs/promises'
import path from 'node:path'

async function exec(command) {
  return new Promise((resolve, reject) => {
    const child = childProcess.exec(command, (error, stdout, stderr) => {
      if (error) {
        reject(error)
      } else {
        resolve({ stdout, stderr })
      }
    })

    child.stdout.pipe(process.stdout)
    child.stderr.pipe(process.stderr)
  })
}

async function createDocsJsonFromMarkdown(docsPath) {
  const filesJson = []

  async function readDirectory(directory) {
    const files = await fs.readdir(directory) // Now async
    for (const file of files) {
      const fullPath = path.join(directory, file)

      const stats = await fs.stat(fullPath)

      if (stats.isDirectory()) {
        await readDirectory(fullPath)
      } else {
        const ext = path.extname(fullPath)

        if (ext !== '.md') {
          continue
        }

        const content = await fs.readFile(fullPath, 'utf8')

        filesJson.push({
          path: fullPath.split('/').slice(1).join('/'),
          content: content,
        })
      }
    }
  }

  await readDirectory(docsPath)

  return filesJson
}

async function createLlmsTxtFromMarkdown(docsPath) {
  const tree = {}
  const excludedFolders = ['type-aliases']

  async function readDirectory(directory) {
    const files = await fs.readdir(directory)
    for (const file of files) {
      const fullPath = path.join(directory, file)

      const stats = await fs.stat(fullPath)

      if (stats.isDirectory()) {
        if (excludedFolders.includes(file)) {
          continue
        }
        await readDirectory(fullPath)
      } else {
        const ext = path.extname(fullPath)

        if (ext !== '.md') {
          continue
        }

        const relativePath = fullPath.split('/').slice(1).join('/')
        const parts = relativePath.split('/')

        let current = tree
        for (let i = 0; i < parts.length; i++) {
          const part = parts[i]
          if (i === parts.length - 1) {
            // @note leaf nodes store the full path for linking
            current[part] = relativePath
          } else {
            if (!current[part]) {
              current[part] = {}
            }
            current = current[part]
          }
        }
      }
    }
  }

  await readDirectory(docsPath)

  function buildTreeString(obj, indent = 0) {
    const lines = []
    const prefix = '  '.repeat(indent)

    for (const key of Object.keys(obj).sort()) {
      if (typeof obj[key] === 'string') {
        lines.push(`${prefix}${key}`)
      } else {
        lines.push(`${prefix}${key}/`)
        lines.push(buildTreeString(obj[key], indent + 1))
      }
    }

    return lines.join('\n')
  }

  let markdown = `# ChatBotKit SDK Documentation

The ChatBotKit is a conversational AI development framework that enables developers to build, deploy, and manage intelligent agents across various platforms.

## Base URL

https://chatbotkit.github.io/node-sdk/markdown/

**NOTE:** Use the base URL above to construct links to specific documentation files.

Consider the following directory structure:

@chatbotkit/
  agent/
    agent/
      functions/
        execute.md

The corresponding URL for execute.md would be:

https://chatbotkit.github.io/node-sdk/markdown/@chatbotkit/agent/agent/functions/execute.md

## Docs`

  markdown += '\n\n' + buildTreeString(tree)

  return markdown
}

async function main() {
  console.log('* reading config')

  const { outputs } = JSON.parse(await fs.readFile('typedoc.json', 'utf8'))

  const out = outputs.find((o) => o.name === 'html').path

  const tmpDir = Math.random().toString(32).slice(2)

  console.log('* generating docs')

  await exec(
    `npx typedoc --options typedoc.json --plugin typedoc-plugin-markdown --out ${tmpDir} --hideBreadcrumbs --publicPath docs://`
  )

  console.log('* generating json')

  const docsJson = await createDocsJsonFromMarkdown(tmpDir)

  await fs.writeFile(
    path.join(out, 'docs.json'),
    JSON.stringify(docsJson, null, 2)
  )

  console.log('* generating llms.txt')

  const llmsTxt = await createLlmsTxtFromMarkdown(tmpDir)

  await fs.writeFile(path.join(out, 'llms.txt'), llmsTxt)

  console.log('* cleaning up')

  await exec(`rm -rf ${tmpDir}`)
}

main()
