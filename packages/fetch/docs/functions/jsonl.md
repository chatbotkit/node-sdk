[**@chatbotkit/fetch**](../README.md)

***

[@chatbotkit/fetch](../globals.md) / jsonl

# Function: jsonl()

> **jsonl**(`body`): [`AsyncGenerator`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/AsyncGenerator)\<[`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `any`\>, `any`, `any`\>

Defined in: [packages/fetch/src/index.js:423](https://github.com/chatbotkit/node-sdk/blob/main/packages/fetch/src/index.js#L423)

Expose a JSONL stream as an async iterable.

## Parameters

### body

[`ReadableStream`](https://developer.mozilla.org/docs/Web/API/ReadableStream)\<[`Uint8Array`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Uint8Array)\<`ArrayBufferLike`\>\> & `object`

## Returns

[`AsyncGenerator`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/AsyncGenerator)\<[`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `any`\>, `any`, `any`\>
