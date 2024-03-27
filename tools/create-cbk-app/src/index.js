import { Command } from 'commander'

export default async function cbk() {
  const program = new Command()

  program
    .name('create-cbk-app')
    .description('Command line tools for creating a new CBK app')

  program.parse()
}
