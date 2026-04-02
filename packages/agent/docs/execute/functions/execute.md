[**@chatbotkit/agent**](../../README.md)

***

[@chatbotkit/agent](../../modules.md) / [execute](../README.md) / execute

# Function: execute()

> **execute**(`options`): [`AsyncGenerator`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/AsyncGenerator)\<\{ \} \| \{ \} \| \{ \} \| \{ \} \| \{ \} \| \{ \} \| \{ \} \| \{ \} \| \{ \} \| \{ \} \| [`ToolCallStartEvent`](../type-aliases/ToolCallStartEvent.md) \| [`ToolCallEndEvent`](../type-aliases/ToolCallEndEvent.md) \| [`ToolCallErrorEvent`](../type-aliases/ToolCallErrorEvent.md) \| [`IterationEvent`](../type-aliases/IterationEvent.md) \| [`ExitEvent`](../type-aliases/ExitEvent.md), `void`, `unknown`\>

Defined in: [agent/src/execute.js:309](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/agent/src/execute.js#L309)

Execute an agent task in a loop until exit is called. Provides planning,
progress tracking, and controlled exit functionality.

The agent runs until the model calls the built-in `exit` tool, the
`maxIterations` limit is reached, or an `abortSignal` is triggered.

### Message injection

The `messages` array is used directly (not copied), so you can push new
messages onto it at any point while the agent is running. They will be
included in the context at the start of the next iteration:

```js
const messages = [{ type: 'user', text: 'Perform the task.' }]

const stream = execute({ client, messages, tools })

// inject a user message or system notification mid-run:
messages.push({ type: 'user', text: 'Also handle edge case Y.' })
messages.push({ type: 'context', text: 'System: disk usage at 90%.' })
```

The agent also appends its own `bot` responses to the same array as each
iteration completes, so `messages` reflects the full conversation history.

## Parameters

### options

[`Omit`](https://www.typescriptlang.org/docs/handbook/utility-types.html#omittype-keys)\<`object` & `object` \| [`Omit`](https://www.typescriptlang.org/docs/handbook/utility-types.html#omittype-keys)\<`object` & `object`, `"model"`\> & `object`, `"functions"` \| `"limits"`\> & `object`

## Returns

[`AsyncGenerator`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/AsyncGenerator)\<\{ \} \| \{ \} \| \{ \} \| \{ \} \| \{ \} \| \{ \} \| \{ \} \| \{ \} \| \{ \} \| \{ \} \| [`ToolCallStartEvent`](../type-aliases/ToolCallStartEvent.md) \| [`ToolCallEndEvent`](../type-aliases/ToolCallEndEvent.md) \| [`ToolCallErrorEvent`](../type-aliases/ToolCallErrorEvent.md) \| [`IterationEvent`](../type-aliases/IterationEvent.md) \| [`ExitEvent`](../type-aliases/ExitEvent.md), `void`, `unknown`\>
