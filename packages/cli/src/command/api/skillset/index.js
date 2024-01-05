import { Command } from 'commander'
import { SkillsetClient } from '@chatbotkit/sdk/skillset/index.js'

import { print } from '../../../output.js'
import { getSECRET, getRUNAS_USERID } from '../../../env.js'

const client = new SkillsetClient({
  secret: getSECRET(),
  runAsUserId: getRUNAS_USERID(),
})

export const skillsetList = new Command()
  .name('list')
  .description('List skillsets')
  .option('-s, --stream', 'Stream skillsets')
  .action(async (str, options) => {
    const { stream } = options

    if (stream) {
      for await (const skillset of client.list().stream()) {
        print(skillset)
      }
    } else {
      const { items } = await client.list()

      for (const skillset of items) {
        print(skillset)
      }
    }
  })

export const skillsetFetch = new Command()
  .name('fetch')
  .description('Fetch skillset')
  .argument('<id>', 'Skillset ID')
  .action(async (id) => {
    const skillset = await client.fetch(id)

    print(skillset)
  })

export const skillsetDelete = new Command()
  .name('delete')
  .description('Delete skillset')
  .argument('<id>', 'Skillset ID')
  .action(async (id) => {
    await client.delete(id)
  })

export const command = new Command()
  .name('skillset')
  .description('Skillset tools for ChatBotKit')
  .addCommand(skillsetList)
  .addCommand(skillsetFetch)
  .addCommand(skillsetDelete)

export default command
