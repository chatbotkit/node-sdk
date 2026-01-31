[![Follow on Twitter](https://img.shields.io/twitter/follow/chatbotkit.svg?logo=twitter)](https://twitter.com/chatbotkit)
[![ChatBotKit](https://img.shields.io/badge/credits-ChatBotKit-blue.svg)](https://chatbotkit.com)
[![CBK.AI](https://img.shields.io/badge/credits-CBK.AI-blue.svg)](https://cbk.ai)
[![NPM](https://img.shields.io/npm/v/@chatbotkit/agent.svg)](https://www.npmjs.com/package/@chatbotkit/agent)
[![Email](https://img.shields.io/badge/Email-Support-blue?logo=mail.ru)](mailto:support@chatbotkit.com)
[![Discord](https://img.shields.io/badge/Discord-Support-blue?logo=discord)](https://go.cbk.ai/discord)

# ChatBotKit Agent SDK

Build autonomous AI agents that can use custom tools and execute complex tasks with the full power of the ChatBotKit platform.

## Why ChatBotKit?

**Build lighter, future-proof AI agents.** When you build with ChatBotKit, the heavy lifting happens on our servers—not in your application. This architectural advantage delivers:

- 🪶 **Lightweight Agents**: Your agents stay lean because complex AI processing, model orchestration, and tool execution happen server-side. Less code in your app means faster load times and simpler maintenance.

- 🛡️ **Robust & Streamlined**: Server-side processing provides a more reliable experience with built-in error handling, automatic retries, and consistent behavior across all platforms.

- 🔄 **Backward & Forward Compatible**: As AI technology evolves—new models, new capabilities, new paradigms—your agents automatically benefit. No code changes required on your end.

- 🔮 **Future-Proof**: Agents you build today will remain capable tomorrow. When we add support for new AI models or capabilities, your existing agents gain those powers without any updates to your codebase.

This means you can focus on building great user experiences while ChatBotKit handles the complexity of the ever-changing AI landscape.

## Installation

```bash
npm install @chatbotkit/agent @chatbotkit/sdk
```

## Features

### Tool Integration

Define custom tools with type-safe inputs using Zod schemas. Tools are automatically exposed to the AI agent with proper validation and error handling.

### Platform Capabilities

Agents run with complete ChatBotKit platform integration:

- Access to configured integrations and 3rd-party services
- Authenticated sessions with external APIs
- Dataset connections and skillsets
- Custom abilities and functions

### Execution Modes

- **`complete`** - Stream agent responses with tool execution
- **`execute`** - Run agents with built-in planning, progress tracking, and controlled exit

## Usage

### Advanced Example: Local Development Monitor with Remote Sync

Build agents that watch your local development environment and sync insights to remote platforms:

```javascript
import { execute } from '@chatbotkit/agent'
import { ChatBotKit } from '@chatbotkit/sdk'

import { exec } from 'child_process'
import { promisify } from 'util'
import { z } from 'zod'

const execAsync = promisify(exec)

const client = new ChatBotKit({ secret: process.env.CHATBOTKIT_API_TOKEN })

const localTools = {
  analyzeGitDiff: {
    description: 'Get detailed git diff for uncommitted changes',
    input: z.object({
      staged: z.boolean().default(false),
    }),
    handler: async ({ staged }) => {
      const cmd = staged ? 'git diff --cached' : 'git diff'
      const { stdout } = await execAsync(cmd)
      return { diff: stdout, lines: stdout.split('\n').length }
    },
  },
  getProcessMetrics: {
    description: 'Get local system metrics (CPU, memory, running processes)',
    input: z.object({}),
    handler: async () => {
      const { stdout } = await execAsync('ps aux --sort=-%mem | head -10')
      return { topProcesses: stdout }
    },
  },
  scanDependencies: {
    description: 'Scan local node_modules for vulnerabilities and size',
    input: z.object({
      directory: z.string().default('./node_modules'),
    }),
    handler: async ({ directory }) => {
      const { stdout: auditResult } = await execAsync('npm audit --json')
      const { stdout: sizeResult } = await execAsync(`du -sh ${directory}`)
      return { audit: JSON.parse(auditResult), size: sizeResult.trim() }
    },
  },
}

// The agent has access to ChatBotKit's remote integrations:
// - Jira: Create tickets for critical issues found locally
// - Slack: Alert team about deployment readiness
// - Linear: Track technical debt discovered in code
// - Google Sheets: Log build metrics over time
// - Custom datasets: Match local code patterns against best practices

const stream = execute({
  client,
  tools: localTools,
  model: 'claude-4.5',

  messages: [
    {
      type: 'user',
      text: `Monitor my local development: check git changes, scan \
dependencies for vulnerabilities, analyze system resources. If you find \
critical security issues, create a Jira ticket. Track dependency sizes in our \
Google Sheet. Alert #deploys Slack channel when everything looks ready for \
production.`,
    },
  ],

  maxIterations: 25,
})

for await (const event of stream) {
  if (event.type === 'token') {
    process.stdout.write(event.data.token)
  } else if (event.type === 'iteration') {
    console.log(`\n[Iteration ${event.data.iteration}]`)
  } else if (event.type === 'exit') {
    console.log(`\n✓ ${event.data.message}`)
  }
}
```

**Why this is powerful:**

The agent bridges local-only operations with remote collaboration:

1. **Monitors local state** - Git changes, processes, file system (can't be done remotely)
2. **Analyzes dependencies** - Scans your actual node_modules directory
3. **Creates Jira tickets** - Via ChatBotKit's Jira integration (no API setup!)
4. **Updates Google Sheets** - Logs metrics automatically (OAuth handled by ChatBotKit)
5. **Sends Slack alerts** - Team notifications (authenticated via ChatBotKit)

ChatBotKit handles all remote authentication, rate limiting, and API complexity - you focus on building tools for local development insights that get automatically synced to your team's collaboration platforms.

### Simple Tool Definition

```javascript
import { complete } from '@chatbotkit/agent'
import { ChatBotKit } from '@chatbotkit/sdk'

import { z } from 'zod'

const client = new ChatBotKit({ secret: process.env.CHATBOTKIT_API_TOKEN })

const tools = {
  calculateSum: {
    description: 'Add two numbers together',
    input: z.object({
      a: z.number(),
      b: z.number(),
    }),
    handler: async ({ a, b }) => ({ result: a + b }),
  },
}

const stream = complete({
  client,
  tools,
  model: 'gpt-4o',
  messages: [{ type: 'user', text: 'What is 234 plus 567?' }],
})

for await (const chunk of stream) {
  if (chunk.type === 'token') {
    process.stdout.write(chunk.data.token)
  }
}
```

### Built-in System Tools

The `execute` mode provides system tools for task management:

- **`plan`** - Create or update task execution plan
- **`progress`** - Track completion status and blockers
- **`exit`** - Signal task completion with status code

### Skills Loading

Load skills from local directories and pass them as a feature to the agent. Skills are defined using `SKILL.md` files with front matter containing name and description.

```javascript
import { execute, loadSkills, createSkillsFeature } from '@chatbotkit/agent'
import { ChatBotKit } from '@chatbotkit/sdk'

const client = new ChatBotKit({ secret: process.env.CHATBOTKIT_API_TOKEN })

// Load skills from directories
const skillsResult = await loadSkills(['./skills'], { watch: true })

// Create the skills feature for the API
const skillsFeature = createSkillsFeature(skillsResult.skills)

const stream = execute({
  client,
  model: 'gpt-4o',
  messages: [{ type: 'user', text: 'Help me with my task' }],
  extensions: {
    features: [skillsFeature],
  },
})

for await (const event of stream) {
  // Handle events
}

// Clean up when done
skillsResult.close()
```

#### SKILL.md Format

Create a `SKILL.md` file in each skill directory:

```markdown
---
name: My Skill
description: A brief description of what this skill does
---

# My Skill

Additional documentation for the skill...
```

#### Skills API

- **`loadSkills(directories, options)`** - Load skills from directories containing SKILL.md files
- **`createSkillsFeature(skills)`** - Create a feature configuration for the API

## Documentation

For comprehensive information about the ChatBotKit Agent SDK, including detailed documentation on its functionalities, helper methods, and configuration options, please visit our [type documentation page](https://chatbotkit.github.io/node-sdk/modules/_chatbotkit_agent.html).

## Contributing

If you find a bug or would like to contribute to the ChatBotKit SDK, please open an issue or submit a pull request on the [official GitHub repository](https://github.com/chatbotkit/node-sdk).
