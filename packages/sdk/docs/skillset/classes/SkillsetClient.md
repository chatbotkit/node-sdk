[**@chatbotkit/sdk**](../../README.md)

***

[@chatbotkit/sdk](../../modules.md) / [skillset](../README.md) / SkillsetClient

# Class: SkillsetClient

Defined in: [skillset/index.js:20](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/skillset/index.js#L20)

Skillset client.

## Extends

- [`ChatBotKitClient`](../../client/classes/ChatBotKitClient.md)

## Constructors

### Constructor

> **new SkillsetClient**(`options`): `SkillsetClient`

Defined in: [skillset/index.js:24](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/skillset/index.js#L24)

#### Parameters

##### options

[`ChatBotKitClientOptions`](../../client/interfaces/ChatBotKitClientOptions.md)

#### Returns

`SkillsetClient`

#### Overrides

[`ChatBotKitClient`](../../client/classes/ChatBotKitClient.md).[`constructor`](../../client/classes/ChatBotKitClient.md#constructor)

## Properties

### ability

> **ability**: [`SkillsetAbilityClient`](../ability/classes/SkillsetAbilityClient.md)

Defined in: [skillset/index.js:30](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/skillset/index.js#L30)

## Methods

### create()

> **create**(`request`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<\{ \}\>

Defined in: [skillset/index.js:59](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/skillset/index.js#L59)

Creates a new skillset.

#### Parameters

##### request

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<\{ \}\>

***

### delete()

> **delete**(`skillsetId`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<\{ \}\>

Defined in: [skillset/index.js:80](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/skillset/index.js#L80)

Deletes the skillset.

#### Parameters

##### skillsetId

`string`

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<\{ \}\>

***

### extend()

> **extend**(`extensionOptions`): `SkillsetClient`

Defined in: [client.js:382](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/client.js#L382)

Creates a new instance of the same client type with extended options.

This is useful when you need to create a client with modified configuration
(e.g., different endpoint, token, or headers) without affecting the original.

Note: This method creates a completely new instance rather than cloning,
which is necessary because private class fields cannot be copied.

#### Parameters

##### extensionOptions

[`Partial`](https://www.typescriptlang.org/docs/handbook/utility-types.html#partialtype)\<[`ChatBotKitClientOptions`](../../client/interfaces/ChatBotKitClientOptions.md)\>

Options to merge with current options

#### Returns

`SkillsetClient`

A new instance of the same client class with extended options

#### Inherited from

[`ChatBotKitClient`](../../client/classes/ChatBotKitClient.md).[`extend`](../../client/classes/ChatBotKitClient.md#extend)

***

### fetch()

> **fetch**(`skillsetId`): [`ResponsePromise`](../../client/classes/ResponsePromise.md)\<\{ \}, `never`\>

Defined in: [skillset/index.js:49](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/skillset/index.js#L49)

Fetches a skillset.

#### Parameters

##### skillsetId

`string`

#### Returns

[`ResponsePromise`](../../client/classes/ResponsePromise.md)\<\{ \}, `never`\>

***

### list()

> **list**(`request?`): [`ResponsePromise`](../../client/classes/ResponsePromise.md)\<\{ \}, \{ \}\>

Defined in: [skillset/index.js:39](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/skillset/index.js#L39)

Retrieves a list of all skillsets.

#### Parameters

##### request?

[`SkillsetListRequest`](../v1/type-aliases/SkillsetListRequest.md)

#### Returns

[`ResponsePromise`](../../client/classes/ResponsePromise.md)\<\{ \}, \{ \}\>

***

### update()

> **update**(`skillsetId`, `request`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<\{ \}\>

Defined in: [skillset/index.js:70](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/skillset/index.js#L70)

Updates a skillset.

#### Parameters

##### skillsetId

`string`

##### request

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<\{ \}\>
