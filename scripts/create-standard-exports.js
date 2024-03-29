/* eslint-disable no-console */
import fs from 'node:fs/promises'
import path from 'node:path'

async function gatherExports(dirPath, exports, level = 0, rootDir = dirPath) {
  const files = await fs.readdir(dirPath, { withFileTypes: true })

  for (const file of files) {
    const filePath = path.join(dirPath, file.name)

    const ext = '.js'

    if (file.isDirectory()) {
      await gatherExports(filePath, exports, level + 1, rootDir)
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
        './' + fileName.slice(rootDir.length + 1),
        './' + fileName.slice(rootDir.length + 1) + '.js'
      )

      for (let exportPoint of exportPoints) {
        if (exportPoint === './') {
          exportPoint = '.'
        }

        exports[exportPoint] = {
          types: './' + fileName.replace('src', 'types') + '.d.ts',
          import: './' + fileName.replace('src', 'src') + '.js',
        }
      }
    }
  }
}

async function main() {
  const exports = {}

  await gatherExports(path.join('src'), exports)

  const packageFile = await fs.readFile('package.json')

  const packageStruct = JSON.parse(packageFile.toString())

  packageStruct.exports = exports
  packageStruct.exports['./package.json'] = './package.json'

  packageStruct.main = './src/index.js'
  packageStruct.types = './types/index.d.ts'

  await fs.writeFile(
    'package.json',
    JSON.stringify(packageStruct, null, 2) + '\n'
  )

  const typedocFile = await fs.readFile('typedoc.json')

  const typedocStruct = JSON.parse(typedocFile.toString())

  typedocStruct.entryPoints = Array.from(
    new Set(
      Object.values(exports)
        .map(({ ['import']: _import }) => _import)
        .filter((i) => !!i)
    )
  )

  await fs.writeFile(
    'typedoc.json',
    JSON.stringify(typedocStruct, null, 2) + '\n'
  )
}

main()
