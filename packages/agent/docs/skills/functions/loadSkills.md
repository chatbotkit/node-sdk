[**@chatbotkit/agent**](../../README.md)

***

[@chatbotkit/agent](../../modules.md) / [skills](../README.md) / loadSkills

# Function: loadSkills()

> **loadSkills**(`directories`, `options?`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`SkillsResult`](../type-aliases/SkillsResult.md)\>

Defined in: [agent/src/skills.js:94](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/agent/src/skills.js#L94)

Loads skills from multiple directories.
Each directory should contain subdirectories with SKILL.md files.

## Parameters

### directories

`string`[]

Array of directory paths to scan for skills

### options?

Options for loading skills

#### watch?

`boolean`

## Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`SkillsResult`](../type-aliases/SkillsResult.md)\>
