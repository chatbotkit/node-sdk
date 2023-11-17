/* eslint-disable no-console */

import path from 'path'
import fs from 'fs/promises'

async function* readDirFiles(dirPath, ext = '.cjs') {
  const files = await fs.readdir(dirPath)

  for (const file of files) {
    const fullPath = path.join(dirPath, file)
    const stat = await fs.stat(fullPath)

    if (stat.isDirectory()) {
      yield* readDirFiles(fullPath)
    } else if (path.extname(file) === ext) {
      yield fullPath
    }
  }
}

async function main() {
  const dirPath = './dist/cjs'

  for await (const file of readDirFiles(dirPath, '.cjs')) {
    console.log(`* rewriting ${file}`)

    const content = await fs.readFile(file, 'utf-8')
    const newContent = content
      .replace(/require\("(.*).js"\)/g, 'require("$1.cjs")')
      .replace(/import\('(.*)\.js'\)/g, "import('$1.cjs')")

    await fs.writeFile(file, newContent)
  }
}

main()
