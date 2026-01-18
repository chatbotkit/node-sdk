import { prompt, select } from '@chatbotkit/cli/input'
import { print } from '@chatbotkit/cli/output'

import { Command } from 'commander'
import crypto from 'node:crypto'
import childProcess from 'node:child_process'
import fs from 'node:fs/promises'

/**
 * Available templates for creating a new CBK app
 */
const templates = [
  {
    value: 'template-nextjs-generative-ui-js',
    label: 'Next.js Generative UI (JavaScript)',
    description: 'A Next.js template with generative UI capabilities',
    repo: 'chatbotkit/template-nextjs-generative-ui-js',
    branch: 'main',
  },
  {
    value: 'template-nextjs-dashboard-js',
    label: 'Next.js Dashboard (JavaScript)',
    description: 'A Next.js dashboard template',
    repo: 'chatbotkit/template-nextjs-dashboard-js',
    branch: 'main',
  },
]

/**
 * @param {string} command
 * @returns {Promise<{ stdout: string, stderr: string }>}
 */
async function exec(command) {
  return new Promise((resolve, reject) => {
    const child = childProcess.exec(command, (error, stdout, stderr) => {
      if (error) {
        reject(error)
      } else {
        resolve({ stdout, stderr })
      }
    })

    child.stdout?.pipe(process.stdout)
    child.stderr?.pipe(process.stderr)
  })
}

/**
 * @returns {Promise<void>}
 */
export default async function cbk() {
  const program = new Command()

  program
    .name('create-cbk-app')
    .description('Command line tools for creating a new CBK app')
    .arguments('[app-name]')
    .option('-t, --template <template>', 'Template to use')
    .action(async (appName, options) => {
      if (!appName) {
        appName = await prompt('🚀 What is the name of your app? ')
      }

      appName = appName
        .toLowerCase()
        .replace(/[\s\W-]+/g, (/** @type {string} */ match) => {
          return match.includes('@') || match.includes('/') ? match : '-'
        })
        .trim()

      if (!appName) {
        print('🚨 App name is required!')

        process.exit(1)
      }

      // Get the directory name (last part after /) and strip any leading @
      let appDir = appName.split('/').pop()?.replace(/^@/, '') || ''

      // Validate appDir to prevent command injection
      if (!appDir || !/^[a-zA-Z0-9._-]+$/.test(appDir)) {
        print('🚨 Invalid app name! Only alphanumeric characters, hyphens, underscores, and dots are allowed.')

        process.exit(1)
      }

      // Select template
      let templateName = options.template

      if (!templateName) {
        templateName = await select('📦 Select a template:', templates)
      }

      // Validate template name
      const selectedTemplate = templates.find((t) => t.value === templateName)

      if (!selectedTemplate) {
        print(`🚨 Invalid template: ${templateName}`)
        print('Available templates:')
        templates.forEach((t) => print(`  - ${t.value}`))

        process.exit(1)
      }

      print(`\n📥 Downloading template: ${selectedTemplate.label}...`)

      // Download the template from the public GitHub repo
      {
        const tmpDir = crypto.randomUUID()
        const { repo, branch, value: repoName } = selectedTemplate

        // Download the template repo archive
        await exec(
          `wget -qO ${tmpDir}.zip https://github.com/${repo}/archive/refs/heads/${branch}.zip && ` +
            `unzip -q ${tmpDir}.zip -d ${tmpDir} && ` +
            `rm ${tmpDir}.zip && ` +
            `mv ${tmpDir}/${repoName}-${branch} ${appDir} && ` +
            `rm -rf ${tmpDir}`
        )
      }

      // Move .env.example file to .env.local
      {
        try {
          await fs.access(`${appDir}/.env.example`)
          await fs.rename(`${appDir}/.env.example`, `${appDir}/.env.local`)
        } catch {
          // .env.example doesn't exist, skip
        }
      }

      // Change the package name and version
      {
        const packageJson = JSON.parse(
          await fs.readFile(`${appDir}/package.json`, 'utf8')
        )

        packageJson.name = appName
        packageJson.version = '0.1.0'

        await fs.writeFile(
          `${appDir}/package.json`,
          JSON.stringify(packageJson, null, 2)
        )
      }

      // Print the next steps
      {
        print('')
        print('🚀 Your app is ready!')
        print('')
        print('Next steps:')
        print(`  cd ${appDir}`)
        print('  npm install')
        print('  # Set your CHATBOTKIT_API_SECRET in .env.local')
        print('  npm run dev')
      }
    })

  program.parse()
}
