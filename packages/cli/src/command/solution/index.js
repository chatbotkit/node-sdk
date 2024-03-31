import { confirm } from '../../input.js'
import { print } from '../../output.js'
import { Solution, getSolutionFileName } from '../../solution/index.js'
import resource from './resource/index.js'

import { Command } from 'commander'

export const solutionList = new Command()
  .name('list')
  .description('List solutions')
  .action(async () => {
    for (const name of await Solution.list()) {
      print({ name })
    }
  })

export const solutionCreate = new Command()
  .name('create')
  .description('Create a new solution')
  .argument('<name>', 'The name of the solution')
  .action(async (name) => {
    await Solution.create(name)
  })

export const solutionDelete = new Command()
  .name('delete')
  .description('Delete a solution')
  .argument('<name>', 'The name of the solution')
  .action(async (name) => {
    const fileName = getSolutionFileName(name)

    if (
      !(await confirm(`Are you sure you want to delete solution ${fileName}?`))
    ) {
      return
    }

    await Solution.delete(name)
  })

export const solutionSync = new Command()
  .name('sync')
  .description('Sync a solution')
  .argument('<name>', 'The name of the solution')
  .action(async (name) => {
    const solution = await Solution.load(name)

    await solution.sync()
  })

export const command = new Command()
  .name('solution')
  .description('Manage ChatBotKit solutions')
  .addCommand(solutionList)
  .addCommand(solutionCreate)
  .addCommand(solutionDelete)
  .addCommand(solutionSync)
  .addCommand(resource)

export default command
