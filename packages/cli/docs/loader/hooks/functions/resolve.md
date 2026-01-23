[**@chatbotkit/cli**](../../../README.md)

***

[@chatbotkit/cli](../../../modules.md) / [loader/hooks](../README.md) / resolve

# Function: resolve()

> **resolve**(`specifier`, `context`, `nextResolve`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<\{ `shortCircuit?`: `boolean`; `url`: `string`; \}\>

Defined in: [packages/cli/src/loader/hooks.js:99](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/cli/src/loader/hooks.js#L99)

Resolve hook - intercepts module resolution to redirect @chatbotkit/*
imports to the CLI's bundled packages.

## Parameters

### specifier

`string`

The module specifier being resolved

### context

`any`

Resolution context

### nextResolve

[`Function`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Function)

The next resolve function in the chain

## Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<\{ `shortCircuit?`: `boolean`; `url`: `string`; \}\>
