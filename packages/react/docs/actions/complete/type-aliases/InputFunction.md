[**@chatbotkit/react**](../../../README.md)

***

[@chatbotkit/react](../../../modules.md) / [actions/complete](../README.md) / InputFunction

# Type Alias: InputFunction

> **InputFunction**\<\> = `object`

Defined in: [actions/complete.js:68](https://github.com/chatbotkit/node-sdk/blob/main/packages/react/src/actions/complete.js#L68)

## Type Parameters

## Type Declaration

### description

> **description**: `string`

### handler()?

> `optional` **handler**: (`args`, `options`) => [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`HandlerResult`](HandlerResult.md)\>

#### Parameters

##### args

[`HandlerArgs`](HandlerArgs.md)

##### options

[`HandlerOptions`](HandlerOptions.md)

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`HandlerResult`](HandlerResult.md)\>

### name

> **name**: `string`

### parameters

> **parameters**: [`BasicParametersSchema`](BasicParametersSchema.md) \| [`ValidatingParametersSchema`](ValidatingParametersSchema.md)
