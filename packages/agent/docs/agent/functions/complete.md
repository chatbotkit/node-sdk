[**@chatbotkit/agent**](../../README.md)

***

[@chatbotkit/agent](../../modules.md) / [agent](../README.md) / complete

# Function: complete()

> **complete**(`options`): [`AsyncGenerator`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/AsyncGenerator)\<\{ \} \| \{ \} \| \{ \} \| \{ \} \| \{ \} \| \{ \} \| \{ \} \| \{ \} \| \{ \} \| \{ \} \| [`ToolCallStartEvent`](../type-aliases/ToolCallStartEvent.md) \| [`ToolCallEndEvent`](../type-aliases/ToolCallEndEvent.md) \| [`ToolCallErrorEvent`](../type-aliases/ToolCallErrorEvent.md), `void`, `unknown`\>

Defined in: [agent/src/agent.js:80](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/agent/src/agent.js#L80)

Completes a single agent iteration. Handles tool calls and streams events for
tool execution and completion.

## Parameters

### options

[`Omit`](https://www.typescriptlang.org/docs/handbook/utility-types.html#omittype-keys)\<`object` & `object` \| [`Omit`](https://www.typescriptlang.org/docs/handbook/utility-types.html#omittype-keys)\<`object` & `object`, `"model"`\> & `object`, `"functions"` \| `"limits"`\> & `object`

## Returns

[`AsyncGenerator`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/AsyncGenerator)\<\{ \} \| \{ \} \| \{ \} \| \{ \} \| \{ \} \| \{ \} \| \{ \} \| \{ \} \| \{ \} \| \{ \} \| [`ToolCallStartEvent`](../type-aliases/ToolCallStartEvent.md) \| [`ToolCallEndEvent`](../type-aliases/ToolCallEndEvent.md) \| [`ToolCallErrorEvent`](../type-aliases/ToolCallErrorEvent.md), `void`, `unknown`\>
