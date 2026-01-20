import { getRUNAS_USERID, getSECRET } from '../../../../env.js'
import { print } from '../../../../output.js'

import { SkillsetAbilityClient } from '@chatbotkit/sdk/skillset/ability/index.js'

import { Command } from 'commander'

function getClient() {
  return new SkillsetAbilityClient({
    secret: getSECRET(),
    runAsUserId: getRUNAS_USERID(),
  })
}

export const abilityList = new Command()
  .name('list')
  .description('List abilities')
  .option('-s, --stream', 'Stream abilities')
  .argument('<skillsetId>', 'Skillset ID')
  .action(async (skillsetId, options) => {
    const { stream } = options

    const client = getClient()

    if (stream) {
      for await (const ability of client.list(skillsetId).stream()) {
        print(ability)
      }
    } else {
      const { items } = await client.list(skillsetId)

      for (const ability of items) {
        print(ability)
      }
    }
  })

export const abilityFetch = new Command()
  .name('fetch')
  .description('Fetch ability')
  .argument('<skillsetId>', 'Skillset ID')
  .argument('<abilityId>', 'Ability ID')
  .action(async (skillsetId, abilityId) => {
    const client = getClient()

    const ability = await client.fetch(skillsetId, abilityId)

    print(ability)
  })

export const abilityDelete = new Command()
  .name('delete')
  .description('Delete ability')
  .argument('<skillsetId>', 'Skillset ID')
  .argument('<abilityId>', 'Ability ID')
  .action(async (skillsetId, abilityId) => {
    const client = getClient()

    await client.delete(skillsetId, abilityId)
  })

export const abilityExport = new Command()
  .name('export')
  .description('Export abilities')
  .option('-s, --stream', 'Stream exports')
  .argument('<skillsetId>', 'Skillset ID')
  .action(async (skillsetId, options) => {
    const { stream } = options

    const client = getClient()

    if (stream) {
      for await (const ability of client.export(skillsetId).stream()) {
        print(ability)
      }
    } else {
      const result = await client.export(skillsetId)

      print(result)
    }
  })

/**
 * Commands registry - MUST include ALL SkillsetAbilityClient methods
 *
 * @todo enable types once we have more SDK clients implemented
 *
 * _satisfies {Partial<Record<keyof SkillsetAbilityClient, import('commander').Command>>}
 * _type {Record<keyof SkillsetAbilityClient, import('commander').Command>}
 */
const commands = {
  list: abilityList,
  fetch: abilityFetch,
  delete: abilityDelete,
  export: abilityExport,
}

export const command = new Command()
  .name('ability')
  .description('Ability tools for ChatBotKit')

for (const cmd of Object.values(commands)) {
  command.addCommand(cmd)
}

export default command
