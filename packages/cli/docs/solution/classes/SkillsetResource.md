[**@chatbotkit/cli**](../../README.md)

***

[@chatbotkit/cli](../../modules.md) / [solution](../README.md) / SkillsetResource

# Class: SkillsetResource

Defined in: [packages/cli/src/solution/index.js:810](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/cli/src/solution/index.js#L810)

Represents a skillset resource.

## Extends

- [`Resource`](Resource.md)

## Constructors

### Constructor

> **new SkillsetResource**(`config`): `SkillsetResource`

Defined in: [packages/cli/src/solution/index.js:622](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/cli/src/solution/index.js#L622)

#### Parameters

##### config

\{ `id?`: `string`; `properties?`: \{ \}; `slug?`: `string`; `type?`: `"blueprint"`; \} | \{ `id?`: `string`; `properties?`: \{ \}; `slug?`: `string`; `type?`: `"bot"`; \} | \{ `id?`: `string`; `properties?`: \{ \}; `slug?`: `string`; `type?`: `"dataset"`; \} | \{ `id?`: `string`; `properties?`: \{ \}; `slug?`: `string`; `type?`: `"file"`; \} | \{ `id?`: `string`; `properties?`: \{ \}; `slug?`: `string`; `type?`: `"secret"`; \} | \{ `id?`: `string`; `properties?`: \{ \}; `slug?`: `string`; `type?`: `"skillset"`; \} | \{ `id?`: `string`; `properties?`: \{ \}; `slug?`: `string`; `type?`: `"widgetIntegration"`; \} | \{ `id?`: `string`; `properties?`: \{ \}; `slug?`: `string`; `type?`: `"sitemapIntegration"`; \} | \{ `id?`: `string`; `properties?`: \{ \}; `slug?`: `string`; `type?`: `"slackIntegration"`; \} | \{ `id?`: `string`; `properties?`: \{ \}; `slug?`: `string`; `type?`: `"discordIntegration"`; \} | \{ `id?`: `string`; `properties?`: \{ \}; `slug?`: `string`; `type?`: `"telegramIntegration"`; \} | \{ `id?`: `string`; `properties?`: \{ \}; `slug?`: `string`; `type?`: `"whatsappIntegration"`; \} | \{ `id?`: `string`; `properties?`: \{ \}; `slug?`: `string`; `type?`: `"messengerIntegration"`; \} | \{ `id?`: `string`; `properties?`: \{ \}; `slug?`: `string`; `type?`: `"notionIntegration"`; \} | \{ `id?`: `string`; `properties?`: \{ \}; `slug?`: `string`; `type?`: `"emailIntegration"`; \} | \{ `id?`: `string`; `properties?`: \{ \}; `slug?`: `string`; `type?`: `"triggerIntegration"`; \} | \{ `id?`: `string`; `properties?`: \{ \}; `slug?`: `string`; `type?`: `"supportIntegration"`; \} | \{ `id?`: `string`; `properties?`: \{ \}; `slug?`: `string`; `type?`: `"extractIntegration"`; \} | \{ `id?`: `string`; `properties?`: \{ \}; `slug?`: `string`; `type?`: `"mcpserverIntegration"`; \} | \{ `id?`: `string`; `properties?`: \{ \}; `slug?`: `string`; `type?`: `"twilioIntegration"`; \}

#### Returns

`SkillsetResource`

#### Inherited from

[`Resource`](Resource.md).[`constructor`](Resource.md#constructor)

## Accessors

### baseClient

#### Get Signature

> **get** **baseClient**(): `ChatBotKit`

Defined in: [packages/cli/src/solution/index.js:670](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/cli/src/solution/index.js#L670)

##### Returns

`ChatBotKit`

#### Inherited from

[`Resource`](Resource.md).[`baseClient`](Resource.md#baseclient)

***

### client

#### Get Signature

> **get** **client**(): `SkillsetClient`

Defined in: [packages/cli/src/solution/index.js:815](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/cli/src/solution/index.js#L815)

##### Returns

`SkillsetClient`

#### Overrides

[`Resource`](Resource.md).[`client`](Resource.md#client)

***

### createProperties

#### Get Signature

> **get** **createProperties**(): [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `any`\>

Defined in: [packages/cli/src/solution/index.js:697](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/cli/src/solution/index.js#L697)

Get the properties to use for create operations.
Override this method in subclasses to filter properties for creates.

##### Returns

[`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `any`\>

#### Inherited from

[`Resource`](Resource.md).[`createProperties`](Resource.md#createproperties)

***

### description

#### Get Signature

> **get** **description**(): `string`

Defined in: [packages/cli/src/solution/index.js:663](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/cli/src/solution/index.js#L663)

##### Returns

`string`

#### Inherited from

[`Resource`](Resource.md).[`description`](Resource.md#description)

***

### id

#### Get Signature

> **get** **id**(): `string`

Defined in: [packages/cli/src/solution/index.js:649](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/cli/src/solution/index.js#L649)

##### Returns

`string`

#### Inherited from

[`Resource`](Resource.md).[`id`](Resource.md#id)

***

### name

#### Get Signature

> **get** **name**(): `string`

Defined in: [packages/cli/src/solution/index.js:656](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/cli/src/solution/index.js#L656)

##### Returns

`string`

#### Inherited from

[`Resource`](Resource.md).[`name`](Resource.md#name)

***

### slug

#### Get Signature

> **get** **slug**(): `string`

Defined in: [packages/cli/src/solution/index.js:636](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/cli/src/solution/index.js#L636)

##### Returns

`string`

#### Inherited from

[`Resource`](Resource.md).[`slug`](Resource.md#slug)

***

### type

#### Get Signature

> **get** **type**(): `string`

Defined in: [packages/cli/src/solution/index.js:629](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/cli/src/solution/index.js#L629)

##### Returns

`string`

#### Inherited from

[`Resource`](Resource.md).[`type`](Resource.md#type)

***

### updateProperties

#### Get Signature

> **get** **updateProperties**(): [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `any`\>

Defined in: [packages/cli/src/solution/index.js:707](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/cli/src/solution/index.js#L707)

Get the properties to use for update operations.
Override this method in subclasses to filter properties for updates.

##### Returns

[`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `any`\>

#### Inherited from

[`Resource`](Resource.md).[`updateProperties`](Resource.md#updateproperties)

## Methods

### sync()

> **sync**(): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`void`\>

Defined in: [packages/cli/src/solution/index.js:716](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/cli/src/solution/index.js#L716)

Sync the resource.

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`void`\>

#### Inherited from

[`Resource`](Resource.md).[`sync`](Resource.md#sync)
