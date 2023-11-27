[@chatbotkit/sdk](../README.md) / [Modules](../modules.md) / model/v1

# Module: model/v1

## Table of contents

### Type Aliases

- [Model](model_v1.md#model)
- [ModelConfig](model_v1.md#modelconfig)

### Functions

- [buildModelString](model_v1.md#buildmodelstring)

## Type Aliases

### Model

Ƭ **Model**\<\>: `string` \| \{ `config`: [`ModelConfig`](model_v1.md#modelconfig) ; `name`: `string`  }

#### Defined in

[model/v1.js:14](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/model/v1.js#L14)

___

### ModelConfig

Ƭ **ModelConfig**\<\>: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `frequencyPenalty?` | `number` |
| `interactionMaxMessages?` | `number` |
| `maxTokens?` | `number` |
| `presencePenalty?` | `number` |
| `region?` | ``"us"`` \| ``"eu"`` |
| `seed?` | `number` |
| `temperature?` | `number` |

#### Defined in

[model/v1.js:12](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/model/v1.js#L12)

## Functions

### buildModelString

▸ **buildModelString**(`model`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `model` | [`Model`](model_v1.md#model) |

#### Returns

`string`

#### Defined in

[model/v1.js:19](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/model/v1.js#L19)
