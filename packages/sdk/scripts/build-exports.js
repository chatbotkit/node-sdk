import path from 'node:path'
import fs from 'node:fs/promises'

async function buildExports(dirPath, exports) {
  const files = await fs.readdir(dirPath, { withFileTypes: true })

  for (const file of files) {
    const filePath = path.join(dirPath, file.name)

    if (file.isDirectory()) {
      await buildExports(filePath, exports)
    } else if (filePath.endsWith('.ts')) {
      const fileName = path.join(dirPath, path.basename(filePath, 'd.ts'))

      exports['./' + fileName.slice(9) + 'js'] = {
        require: {
          types: './' + fileName.replace('dist/esm', 'dist/cjs') + 'd.ts',
          default: './' + fileName.replace('dist/esm', 'dist/cjs') + 'cjs',
        },
        import: {
          types: './' + fileName + 'd.ts',
          default: './' + fileName + 'js',
        },
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
