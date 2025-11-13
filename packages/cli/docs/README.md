@chatbotkit/cli / [Modules](modules.md)

[![Follow on Twitter](https://img.shields.io/twitter/follow/chatbotkit.svg?logo=twitter)](https://twitter.com/chatbotkit)
[![ChatBotKit](https://img.shields.io/badge/credits-ChatBotKit-blue.svg)](https://chatbotkit.com)
[![CBK.AI](https://img.shields.io/badge/credits-CBK.AI-blue.svg)](https://cbk.ai)
[![NPM](https://img.shields.io/npm/v/@chatbotkit/cli.svg)](https://www.npmjs.com/package/@chatbotkit/cli)
[![Email](https://img.shields.io/badge/Email-Support-blue?logo=mail.ru)](mailto:support@chatbotkit.com)
[![Discord](https://img.shields.io/badge/Discord-Support-blue?logo=discord)](https://go.cbk.ai/discord)

# ChatBotKit CLI

A powerful command-line interface for ChatBotKit that provides both API management commands and an autonomous AI agent mode for interactive development tasks.

## Installation

Install globally via npm:

```bash
npm install --global @chatbotkit/cli
```

## Authentication

Set your ChatBotKit API token as an environment variable:

```bash
export CHATBOTKIT_API_TOKEN=<your token here>
```

### Environment Configuration

The CLI automatically loads environment variables from the following locations (in order of precedence):

1. `.env.local` - Project-specific local configuration (current directory)
2. `.env` - Project configuration (current directory)
3. `~/.cbk/env` - Global user configuration (home directory fallback)

This allows you to store your API token globally in `~/.cbk/env` for convenience, while still being able to override it per-project using local `.env` files.

**Example `~/.cbk/env` file:**

```bash
CHATBOTKIT_API_TOKEN=your_token_here
```

## Features

### API Commands

Manage ChatBotKit resources directly from the command line:

```bash
cbk api conversation list
cbk api bot list
```

Use `cbk --help` to see all available commands.

### Agent Mode

Run an autonomous AI agent that can execute tasks with local file system and command access, while leveraging the full power of the ChatBotKit platform.

```bash
cbk agent -p "Create a new file and write hello world to it"
```

**Local Tools:**

- `read` - Read file contents
- `write` - Write content to a file
- `edit` - Replace exact string occurrences (single match only)
- `find` - Search for files using glob patterns
- `exec` - Execute shell commands

**Platform Integration:**

The agent runs with complete ChatBotKit platform capabilities, including:

- Access to all configured integrations and 3rd-party services
- Authenticated sessions with external APIs
- Dataset connections and skillsets
- Custom abilities and functions

This means your agent can interact with your local development environment while seamlessly accessing any ChatBotKit resources you've configured.

**Agent Options:**

- `-p, --prompt <text>` - Task to execute
- `-t, --tools <names>` - Comma-separated list of tools to enable (defaults to all standard tools)
- `-m, --model <name>` - AI model to use

**Example:**

```bash
# Run agent with specific tools only
cbk agent -t read,write -p "Read package.json and create a backup"

# Use custom timeout for long-running commands
cbk agent -p "Run tests with 60 second timeout" -m gpt-5
```

## Documentation

For comprehensive information about the ChatBotKit CLI SDK, including detailed documentation on its functionalities, helper methods, and configuration options, please visit our [type documentation page](https://chatbotkit.github.io/node-sdk/modules/_chatbotkit_cli.html).

## Contributing

If you find a bug or would like to contribute to the ChatBotKit SDK, please open an issue or submit a pull request on the [official GitHub repository](https://github.com/chatbotkit/node-sdk).
