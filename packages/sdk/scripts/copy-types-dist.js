import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const rootDir = path.join(__dirname, '..')

/**
 * Recursively copy .d.ts files from src/types to dist directories
 */
function copyTypeFiles(srcDir, destDirs, relativePath = '') {
  const currentSrcDir = path.join(srcDir, relativePath)

  if (!fs.existsSync(currentSrcDir)) {
    return
  }

  const entries = fs.readdirSync(currentSrcDir, { withFileTypes: true })

  for (const entry of entries) {
    const relativeEntryPath = path.join(relativePath, entry.name)
    const srcPath = path.join(srcDir, relativeEntryPath)

    if (entry.isDirectory()) {
      // Recursively process subdirectories
      copyTypeFiles(srcDir, destDirs, relativeEntryPath)
    } else if (entry.isFile() && entry.name.endsWith('.d.ts')) {
      // Copy .d.ts files to all destination directories
      for (const destDir of destDirs) {
        const destPath = path.join(destDir, relativeEntryPath)
        const destDirPath = path.dirname(destPath)

        // Create destination directory if it doesn't exist
        if (!fs.existsSync(destDirPath)) {
          fs.mkdirSync(destDirPath, { recursive: true })
        }

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
}

const srcTypesDir = path.join(rootDir, 'src', 'types')
const destDirs = [
  path.join(rootDir, 'dist', 'esm', 'types'),
  path.join(rootDir, 'dist', 'cjs', 'types'),
]

// eslint-disable-next-line no-console
console.log('Copying .d.ts files from src/types to dist directories...')

copyTypeFiles(srcTypesDir, destDirs)

// eslint-disable-next-line no-console
console.log('Done!')
