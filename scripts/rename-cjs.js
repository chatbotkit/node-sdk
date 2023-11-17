/* eslint-disable no-console */

import path from 'path'
import fs from 'fs/promises'

async function* readDirFiles(dirPath, ext = '.js') {
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

  for await (const file of readDirFiles(dirPath, '.js')) {
    const oldPath = file
    const newPath = file.replace('.js', '.cjs')

    console.log(`* renaming ${oldPath} -> ${newPath}`)

    await fs.rename(oldPath, newPath)
  }
}

main()
