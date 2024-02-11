[@chatbotkit/react](../README.md) / [Modules](../modules.md) / components/AutoTextarea

# Module: components/AutoTextarea

## Table of contents

### Type Aliases

- [onFocusFn](components_AutoTextarea.md#onfocusfn)
- [onInputFn](components_AutoTextarea.md#oninputfn)

### Functions

- [AutoTextarea](components_AutoTextarea.md#autotextarea)

## Type Aliases

### onFocusFn

Ƭ **onFocusFn**\<\>: (`event`: `React.ChangeEvent`\<`HTMLTextAreaElement`\>) => `any`

#### Type declaration

▸ (`event`): `any`

A textarea that automatically adjusts its height based on its content. The
height is adjusted on input and focus events.

##### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `React.ChangeEvent`\<`HTMLTextAreaElement`\> |

##### Returns

`any`

#### Defined in

[components/AutoTextarea.js:5](https://github.com/chatbotkit/node-sdk/blob/main/packages/react/src/components/AutoTextarea.js#L5)

___

### onInputFn

Ƭ **onInputFn**\<\>: (`event`: `React.ChangeEvent`\<`HTMLTextAreaElement`\>) => `any`

#### Type declaration

▸ (`event`): `any`

##### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `React.ChangeEvent`\<`HTMLTextAreaElement`\> |

##### Returns

`any`

#### Defined in

[components/AutoTextarea.js:4](https://github.com/chatbotkit/node-sdk/blob/main/packages/react/src/components/AutoTextarea.js#L4)

## Functions

### AutoTextarea

▸ **AutoTextarea**(`props?`): `Element`

#### Parameters

| Name | Type |
| :------ | :------ |
| `props?` | `Object` |
| `props.adjustOnFocus?` | `boolean` |
| `props.adjustOnInput?` | `boolean` |
| `props.onFocus?` | [`onFocusFn`](components_AutoTextarea.md#onfocusfn) |
| `props.onInput?` | [`onInputFn`](components_AutoTextarea.md#oninputfn) |

#### Returns

`Element`

#### Defined in

[components/AutoTextarea.js:18](https://github.com/chatbotkit/node-sdk/blob/main/packages/react/src/components/AutoTextarea.js#L18)
