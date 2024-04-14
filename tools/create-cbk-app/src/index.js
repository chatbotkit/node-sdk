import { prompt } from '@chatbotkit/cli/input'
import { print } from '@chatbotkit/cli/output'

import childProcess from 'child_process'
import { Command } from 'commander'
import fs from 'fs/promises'

async function exec(command) {
  return new Promise((resolve, reject) => {
    const child = childProcess.exec(command, (error, stdout, stderr) => {
      if (error) {
        reject(error)
      } else {
        resolve({ stdout, stderr })
      }
    })

    child.stdout.pipe(process.stdout)
    child.stderr.pipe(process.stderr)
  })
}

export default async function cbk() {
  const program = new Command()

  program
    .name('create-cbk-app')
    .description('Command line tools for creating a new CBK app')
    .arguments('[app-name]')
    .action(async (appName) => {
      if (!appName) {
        appName = await prompt('🚀 What is the name of your app? ')
      }

      appName = appName
        .toLowerCase()
        .replace(/[\s\W-]+/g, (match) => {
          return match.includes('@') || match.includes('/') ? match : '-'
        })
        .trim()

      if (!appName) {
        print('🚨 App name is required!')

        process.exit(1)
      }

      const appDir = appName.split('/').pop()

      const templates = {
        nextjs: 'chatbotkit/template-nextjs-generative-ui-js',
      }

      const repo = templates['nextjs']

      // Download the template
      {
        const tmpDir = Math.random().toString(32).slice(2)

        await exec(
          `wget -qO ${tmpDir}.zip https://github.com/${repo}/archive/refs/heads/main.zip && unzip ${tmpDir}.zip -d ${tmpDir} && rm ${tmpDir}.zip && mv ${tmpDir}/* ${appDir} && rm -rf ${tmpDir}`
        )
      }

      // Move .env.example file to .env.local
      {
        await exec(`mv ${appDir}/.env.example ${appDir}/.env.local`)
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
        print('🚀 Your app is ready!')
      }
    })

  program.parse()
}
