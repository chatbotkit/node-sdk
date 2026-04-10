[**@chatbotkit/agent**](../../README.md)

***

[@chatbotkit/agent](../../modules.md) / [execute](../README.md) / complete

# Function: complete()

> **complete**(`options`): [`AsyncGenerator`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/AsyncGenerator)\<\{ \} \| \{ \} \| \{ \} \| \{ \} \| \{ \} \| \{ \} \| \{ \} \| \{ \} \| \{ \} \| \{ \} \| \{ \} \| \{ \} \| \{ \} \| \{ \} \| \{ \} \| \{ \} \| \{ \} \| \{ \} \| \{ \} \| \{ \} \| [`ToolCallStartEvent`](../type-aliases/ToolCallStartEvent.md) \| [`ToolCallEndEvent`](../type-aliases/ToolCallEndEvent.md) \| [`ToolCallErrorEvent`](../type-aliases/ToolCallErrorEvent.md), `void`, `unknown`\>

Defined in: [agent/src/execute.js:118](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/agent/src/execute.js#L118)

Completes a single agent iteration. Handles tool calls and streams events for
tool execution and completion.

## Parameters

### options

[`CompleteOptions`](../type-aliases/CompleteOptions.md)

## Returns

[`AsyncGenerator`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/AsyncGenerator)\<\{ \} \| \{ \} \| \{ \} \| \{ \} \| \{ \} \| \{ \} \| \{ \} \| \{ \} \| \{ \} \| \{ \} \| \{ \} \| \{ \} \| \{ \} \| \{ \} \| \{ \} \| \{ \} \| \{ \} \| \{ \} \| \{ \} \| \{ \} \| [`ToolCallStartEvent`](../type-aliases/ToolCallStartEvent.md) \| [`ToolCallEndEvent`](../type-aliases/ToolCallEndEvent.md) \| [`ToolCallErrorEvent`](../type-aliases/ToolCallErrorEvent.md), `void`, `unknown`\>
