import discord from './discord/index.js'
import email from './email/index.js'
import extract from './extract/index.js'
import instagram from './instagram/index.js'
import mcpserver from './mcpserver/index.js'
import messenger from './messenger/index.js'
import notion from './notion/index.js'
import sitemap from './sitemap/index.js'
import slack from './slack/index.js'
import support from './support/index.js'
import telegram from './telegram/index.js'
import trigger from './trigger/index.js'
import twilio from './twilio/index.js'
import whatsapp from './whatsapp/index.js'
import widget from './widget/index.js'

import { Command } from 'commander'

/**
 * Commands registry - MUST include ALL IntegrationClient clients
 *
 * @todo enable types once we have more SDK clients implemented
 *
 * _satisfies {Partial<Record<keyof IntegrationClient, import('commander').Command>>}
 * _type {Record<keyof IntegrationClient, import('commander').Command>}
 */
const commands = {
  widget,
  slack,
  discord,
  whatsapp,
  messenger,
  instagram,
  telegram,
  trigger,
  email,
  sitemap,
  notion,
  support,
  extract,
  mcpserver,
  twilio,
}

export const command = new Command()
  .name('integration')
  .description('Integration tools for ChatBotKit')

for (const cmd of Object.values(commands)) {
  command.addCommand(cmd)
}

export default command
