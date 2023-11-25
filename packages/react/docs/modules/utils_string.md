[@chatbotkit/react](../README.md) / [Modules](../modules.md) / utils/string

# Module: utils/string

## Table of contents

### Functions

- [getRandomId](utils_string.md#getrandomid)
- [replaceBetween](utils_string.md#replacebetween)
- [replaceWithCoordinates](utils_string.md#replacewithcoordinates)

## Functions

### getRandomId

▸ **getRandomId**(`prefix?`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `prefix?` | `string` |

#### Returns

`string`

#### Defined in

[utils/string.js:5](https://github.com/chatbotkit/node-sdk/blob/1a40caa/packages/react/src/utils/string.js#L5)

___

### replaceBetween

▸ **replaceBetween**(`input`, `begin`, `end`, `replacement`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | `string` |
| `begin` | `number` |
| `end` | `number` |
| `replacement` | `string` |

#### Returns

`string`

#### Defined in

[utils/string.js:16](https://github.com/chatbotkit/node-sdk/blob/1a40caa/packages/react/src/utils/string.js#L16)

___

### replaceWithCoordinates

▸ **replaceWithCoordinates**(`input`, `replacements`): (`string` \| \{ `begin`: `number` ; `end`: `number` ; `input`: `string` ; `output`: `string`  })[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | `string` |
| `replacements` | [`string`, `string`][] |

#### Returns

(`string` \| \{ `begin`: `number` ; `end`: `number` ; `input`: `string` ; `output`: `string`  })[]

#### Defined in

[utils/string.js:25](https://github.com/chatbotkit/node-sdk/blob/1a40caa/packages/react/src/utils/string.js#L25)
