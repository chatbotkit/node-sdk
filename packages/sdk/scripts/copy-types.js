import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const rootDir = path.join(__dirname, '..')

/**
 * Recursively copy .d.ts files from src to types directory
 */
function copyDtsFiles(srcDir, destDir) {
  const entries = fs.readdirSync(srcDir, { withFileTypes: true })

  for (const entry of entries) {
    const srcPath = path.join(srcDir, entry.name)
    const destPath = path.join(destDir, entry.name)

    if (entry.isDirectory()) {
      if (['node_modules', 'dist'].includes(entry.name)) {
        continue
      }

      if (!fs.existsSync(destPath)) {
        fs.mkdirSync(destPath, { recursive: true })
      }

      copyDtsFiles(srcPath, destPath)
    } else if (entry.isFile() && entry.name.endsWith('.d.ts')) {
      fs.copyFileSync(srcPath, destPath)

      // eslint-disable-next-line no-console
      console.log(
        `Copied: ${path.relative(rootDir, srcPath)} -> ${path.relative(
          rootDir,
          destPath
        )}`
      )
    }
  }
}

const srcTypesDir = path.join(rootDir, 'src')
const destTypesDir = path.join(rootDir, 'types')

// eslint-disable-next-line no-console
console.log('Copying .d.ts files from src to types directory...')

copyDtsFiles(srcTypesDir, destTypesDir)

// eslint-disable-next-line no-console
console.log('Done!')
