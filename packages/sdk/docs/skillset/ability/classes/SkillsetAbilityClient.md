[**@chatbotkit/sdk**](../../../README.md)

***

[@chatbotkit/sdk](../../../modules.md) / [skillset/ability](../README.md) / SkillsetAbilityClient

# Class: SkillsetAbilityClient

Defined in: [skillset/ability/index.js:20](https://github.com/chatbotkit/cbk-platform/blob/main/sdks/node/packages/sdk/src/skillset/ability/index.js#L20)

Skillset ability client.

## Extends

- [`ChatBotKitClient`](../../../client/classes/ChatBotKitClient.md)

## Constructors

### Constructor

> **new SkillsetAbilityClient**(`options`): `SkillsetAbilityClient`

Defined in: [skillset/ability/index.js:24](https://github.com/chatbotkit/cbk-platform/blob/main/sdks/node/packages/sdk/src/skillset/ability/index.js#L24)

#### Parameters

##### options

[`ChatBotKitClientOptions`](../../../client/interfaces/ChatBotKitClientOptions.md)

#### Returns

`SkillsetAbilityClient`

#### Overrides

[`ChatBotKitClient`](../../../client/classes/ChatBotKitClient.md).[`constructor`](../../../client/classes/ChatBotKitClient.md#constructor)

## Methods

### create()

> **create**(`skillsetId`, `request`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<\{ \}\>

Defined in: [skillset/ability/index.js:68](https://github.com/chatbotkit/cbk-platform/blob/main/sdks/node/packages/sdk/src/skillset/ability/index.js#L68)

Creates a new ability.

#### Parameters

##### skillsetId

`string`

##### request

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<\{ \}\>

***

### delete()

> **delete**(`skillsetId`, `abilityId`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<\{ \}\>

Defined in: [skillset/ability/index.js:91](https://github.com/chatbotkit/cbk-platform/blob/main/sdks/node/packages/sdk/src/skillset/ability/index.js#L91)

Deletes the ability.

#### Parameters

##### skillsetId

`string`

##### abilityId

`string`

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<\{ \}\>

***

### export()

> **export**(`skillsetId`, `request?`): [`ResponsePromise`](../../../client/classes/ResponsePromise.md)\<\{ \}, \{ \}\>

Defined in: [skillset/ability/index.js:46](https://github.com/chatbotkit/cbk-platform/blob/main/sdks/node/packages/sdk/src/skillset/ability/index.js#L46)

Exports abilities.

#### Parameters

##### skillsetId

`string`

##### request?

[`SkillsetAbilityExportRequest`](../v1/type-aliases/SkillsetAbilityExportRequest.md)

#### Returns

[`ResponsePromise`](../../../client/classes/ResponsePromise.md)\<\{ \}, \{ \}\>

***

### extend()

> **extend**(`extensionOptions`): `SkillsetAbilityClient`

Defined in: [client.js:382](https://github.com/chatbotkit/cbk-platform/blob/main/sdks/node/packages/sdk/src/client.js#L382)

Creates a new instance of the same client type with extended options.

This is useful when you need to create a client with modified configuration
(e.g., different endpoint, token, or headers) without affecting the original.

Note: This method creates a completely new instance rather than cloning,
which is necessary because private class fields cannot be copied.

#### Parameters

##### extensionOptions

[`Partial`](https://www.typescriptlang.org/docs/handbook/utility-types.html#partialtype)\<[`ChatBotKitClientOptions`](../../../client/interfaces/ChatBotKitClientOptions.md)\>

Options to merge with current options

#### Returns

`SkillsetAbilityClient`

A new instance of the same client class with extended options

#### Inherited from

[`ChatBotKitClient`](../../../client/classes/ChatBotKitClient.md).[`extend`](../../../client/classes/ChatBotKitClient.md#extend)

***

### fetch()

> **fetch**(`skillsetId`, `abilityId`): [`ResponsePromise`](../../../client/classes/ResponsePromise.md)\<\{ \}, `never`\>

Defined in: [skillset/ability/index.js:57](https://github.com/chatbotkit/cbk-platform/blob/main/sdks/node/packages/sdk/src/skillset/ability/index.js#L57)

Fetches a ability.

#### Parameters

##### skillsetId

`string`

##### abilityId

`string`

#### Returns

[`ResponsePromise`](../../../client/classes/ResponsePromise.md)\<\{ \}, `never`\>

***

### list()

> **list**(`skillsetId`, `request?`): [`ResponsePromise`](../../../client/classes/ResponsePromise.md)\<\{ \}, \{ \}\>

Defined in: [skillset/ability/index.js:35](https://github.com/chatbotkit/cbk-platform/blob/main/sdks/node/packages/sdk/src/skillset/ability/index.js#L35)

Retrieves a list of all abilities.

#### Parameters

##### skillsetId

`string`

##### request?

[`SkillsetAbilityListRequest`](../v1/type-aliases/SkillsetAbilityListRequest.md)

#### Returns

[`ResponsePromise`](../../../client/classes/ResponsePromise.md)\<\{ \}, \{ \}\>

***

### update()

> **update**(`skillsetId`, `abilityId`, `request`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<\{ \}\>

Defined in: [skillset/ability/index.js:80](https://github.com/chatbotkit/cbk-platform/blob/main/sdks/node/packages/sdk/src/skillset/ability/index.js#L80)

Updates an ability.

#### Parameters

##### skillsetId

`string`

##### abilityId

`string`

##### request

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<\{ \}\>
