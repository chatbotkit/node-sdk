/* eslint-disable no-console */

import path from 'node:path'
import fs from 'node:fs/promises'

async function buildExports(dirPath, exports, level = 0) {
  const files = await fs.readdir(dirPath, { withFileTypes: true })

  for (const file of files) {
    const filePath = path.join(dirPath, file.name)

    if (file.isDirectory()) {
      await buildExports(filePath, exports, level + 1)
    } else if (filePath.endsWith('.ts')) {
      const baseName = path.basename(filePath, '.d.ts')
      const fileName = path.join(dirPath, baseName)

      const exportPoints = []

      if (baseName === 'index') {
        exportPoints.push('./' + fileName.slice(9, -6))
      }

      exportPoints.push(
        './' + fileName.slice(9),
        './' + fileName.slice(9) + '.js'
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

  await buildExports(path.join('dist', 'esm'), exports)

  const packageFile = await fs.readFile('package.json')

  const packageStruct = JSON.parse(packageFile.toString())

  packageStruct.exports = exports

  await fs.writeFile(
    'package.json',
    JSON.stringify(packageStruct, null, 2) + '\n'
  )
}

main()
