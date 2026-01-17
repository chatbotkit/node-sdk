[**@chatbotkit/agent**](../../README.md)

***

[@chatbotkit/agent](../../modules.md) / [agent](../README.md) / execute

# Function: execute()

> **execute**(`options`): [`AsyncGenerator`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/AsyncGenerator)\<\{ \} \| \{ \} \| \{ \} \| \{ \} \| \{ \} \| \{ \} \| \{ \} \| \{ \} \| \{ \} \| \{ \} \| [`ToolCallStartEvent`](../type-aliases/ToolCallStartEvent.md) \| [`ToolCallEndEvent`](../type-aliases/ToolCallEndEvent.md) \| [`ToolCallErrorEvent`](../type-aliases/ToolCallErrorEvent.md) \| [`IterationEvent`](../type-aliases/IterationEvent.md) \| [`ExitEvent`](../type-aliases/ExitEvent.md), `void`, `unknown`\>

Defined in: [agent/src/agent.js:281](https://github.com/chatbotkit/cbk-platform/blob/main/sdks/node/packages/agent/src/agent.js#L281)

Execute an agent task in a loop until exit is called. Provides planning,
progress tracking, and controlled exit functionality.

## Parameters

### options

`object` & `object` \| [`Omit`](https://www.typescriptlang.org/docs/handbook/utility-types.html#omittype-keys)\<`object` & `object`, `"model"`\> & `object` & `object`

## Returns

[`AsyncGenerator`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/AsyncGenerator)\<\{ \} \| \{ \} \| \{ \} \| \{ \} \| \{ \} \| \{ \} \| \{ \} \| \{ \} \| \{ \} \| \{ \} \| [`ToolCallStartEvent`](../type-aliases/ToolCallStartEvent.md) \| [`ToolCallEndEvent`](../type-aliases/ToolCallEndEvent.md) \| [`ToolCallErrorEvent`](../type-aliases/ToolCallErrorEvent.md) \| [`IterationEvent`](../type-aliases/IterationEvent.md) \| [`ExitEvent`](../type-aliases/ExitEvent.md), `void`, `unknown`\>
