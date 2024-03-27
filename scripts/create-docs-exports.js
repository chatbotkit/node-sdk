/* eslint-disable no-console */
import childProcess from 'child_process'
import fs from 'fs/promises'
import path from 'path'

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

async function createJsonFromMarkdown(docsPath) {
  const filesJson = []

  async function readDirectory(directory) {
    const files = await fs.readdir(directory) // Now async
    for (const file of files) {
      const fullPath = path.join(directory, file)

      const ext = path.extname(fullPath)

      if (ext !== '.md') {
        continue
      }

      const stats = await fs.stat(fullPath)

      if (stats.isDirectory()) {
        await readDirectory(fullPath)
      } else {
        const content = await fs.readFile(fullPath, 'utf8')

        filesJson.push({
          path: fullPath,
          content: content,
        })
      }
    }
  }

  await readDirectory(docsPath)

  return filesJson
}

async function main() {
  console.log('* reading config')

  const { out } = JSON.parse(await fs.readFile('typedoc.json', 'utf8'))

  const tmpDir = Math.random().toString(32).slice(2)

  console.log('* generating docs')

  await exec(
    `npx typedoc --plugin typedoc-plugin-markdown --out ${tmpDir} --hideBreadcrumbs --hideInPageTOC --publicPath docs://`
  )

  console.log('* generating json')

  const json = await createJsonFromMarkdown(tmpDir)

  await fs.writeFile(path.join(out, 'docs.json'), JSON.stringify(json))

  console.log('* cleaning up')

  await exec(`rm -rf ${tmpDir}`)
}

main()
