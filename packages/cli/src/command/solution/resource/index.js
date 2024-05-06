import { confirm } from '../../../input.js'
import { CommandError } from '../../../output.js'
import { getSolutionFileName } from '../../../solution/index.js'

import { Command } from 'commander'
import fs from 'node:fs/promises'
import path from 'node:path'

export const resourceCreate = new Command()
  .name('create')
  .description('Create a new resource')
  .argument('<name>', 'The name of the resource')
  .action(async (name) => {
    await fs.mkdir('.chatbotkit/resources', { recursive: true })

    const fileName = getSolutionFileName(name)
    const filePath = path.join('.chatbotkit', 'resources', fileName)

    if (await fs.stat(filePath).catch(() => null)) {
      throw new CommandError(`Resource ${fileName} already exists`)
    }

    await fs.writeFile(filePath, JSON.stringify({}))
  })

export const resourceDelete = new Command()
  .name('delete')
  .description('Delete a resource')
  .argument('<name>', 'The name of the resource')
  .action(async (name) => {
    const fileName = getSolutionFileName(name)
    const filePath = path.join('.chatbotkit', 'resources', fileName)

    if (!(await fs.stat(filePath).catch(() => null))) {
      throw new CommandError(`Resource ${fileName} does not exist`)
    }

    if (
      !(await confirm(`Are you sure you want to delete resource ${fileName}?`))
    ) {
      return
    }

    await fs.unlink(filePath)
  })

export const command = new Command()
  .name('resource')
  .description('Manage ChatBotKit solution resources')
  .addCommand(resourceCreate)
  .addCommand(resourceDelete)

export default command
