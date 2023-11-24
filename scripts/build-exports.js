/* eslint-disable no-console */

import path from 'node:path'
import fs from 'node:fs/promises'

async function gatherExports(dirPath, exports, level = 0, rootDir = dirPath) {
  const files = await fs.readdir(dirPath, { withFileTypes: true })

  for (const file of files) {
    const filePath = path.join(dirPath, file.name)

    const ext = '.d.ts'

    if (file.isDirectory()) {
      await gatherExports(filePath, exports, level + 1)
    } else if (filePath.endsWith(ext)) {
      const baseName = path.basename(filePath, ext)
      const fileName = path.join(dirPath, baseName)

      const exportPoints = []

      if (baseName === 'index') {
        exportPoints.push(
          './' + fileName.slice(rootDir.length + 1, -('index'.length + 1))
        )
      }

      exportPoints.push(
        './' + fileName.slice(rootDir + 1),
        './' + fileName.slice(rootDir + 1) + '.js'
      )

      for (let exportPoint of exportPoints) {
        if (exportPoint === './') {
          exportPoint = '.'
        }

        exports[exportPoint] = {
          require: {
            types: './' + fileName.replace('dist/esm', 'dist/cjs') + '.d.ts',
            default: './' + fileName.replace('dist/esm', 'dist/cjs') + '.cjs',
          },
          import: {
            types: './' + fileName + '.d.ts',
            default: './' + fileName + '.js',
          },
        }
      }
    }
  }
}

async function main() {
  const exports = {}

  await gatherExports(path.join('dist', 'esm'), exports)

  const packageFile = await fs.readFile('package.json')

  const packageStruct = JSON.parse(packageFile.toString())

  packageStruct.exports = exports

  packageStruct.main = './dist/esm/index.js'

  await fs.writeFile(
    'package.json',
    JSON.stringify(packageStruct, null, 2) + '\n'
  )
}

main()
