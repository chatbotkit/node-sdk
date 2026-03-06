[**@chatbotkit/agent**](../../README.md)

***

[@chatbotkit/agent](../../modules.md) / [agent](../README.md) / loadAgent

# Function: loadAgent()

> **loadAgent**(`filePath`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`AgentDefinition`](../type-aliases/AgentDefinition.md)\>

Defined in: [agent/src/agent.js:57](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/agent/src/agent.js#L57)

Loads an agent definition from a markdown file. The file may contain an
optional YAML front matter block with `backstory`, `model`, `name`, and
`description` fields. The markdown body is appended to `backstory` (if any)
to form the final backstory string.

## Parameters

### filePath

`string`

Path to the agent markdown file (absolute or relative to cwd)

## Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`AgentDefinition`](../type-aliases/AgentDefinition.md)\>
