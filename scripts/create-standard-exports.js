/* eslint-disable no-console */
import fs from 'node:fs/promises'
import path from 'node:path'

async function gatherExports(
  dirPath,
  exports,
  sourceFiles,
  level = 0,
  rootDir = dirPath
) {
  const files = await fs.readdir(dirPath, { withFileTypes: true })

  for (const file of files) {
    const filePath = path.join(dirPath, file.name)

    const jsExt = '.js'
    const tsExt = '.ts'

    const isJs = filePath.endsWith(jsExt)
    const isTs = filePath.endsWith(tsExt) && !filePath.endsWith('.d.ts')

    const ext = isJs ? jsExt : isTs ? tsExt : null

    if (file.isDirectory()) {
      await gatherExports(filePath, exports, sourceFiles, level + 1, rootDir)
    } else if (ext) {
      const baseName = path.basename(filePath, ext)
      const fileName = path.join(dirPath, baseName)

      sourceFiles.push('./' + fileName + ext)

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

  const sourceFiles = []

  await gatherExports(path.join('src'), exports, sourceFiles)

  const packageFile = await fs.readFile('package.json')

  const packageStruct = JSON.parse(packageFile.toString())

  packageStruct.exports = exports
  packageStruct.exports['./package.json'] = './package.json'

  packageStruct.main = './src/index.js'
  packageStruct.types = './types/index.d.ts'

  delete packageStruct.files

  await fs.writeFile(
    'package.json',
    JSON.stringify(packageStruct, null, 2) + '\n'
  )

  const typedocFile = await fs.readFile('typedoc.json')

  const typedocStruct = JSON.parse(typedocFile.toString())

  typedocStruct.entryPoints = sourceFiles

  await fs.writeFile(
    'typedoc.json',
    JSON.stringify(typedocStruct, null, 2) + '\n'
  )
}

main()
