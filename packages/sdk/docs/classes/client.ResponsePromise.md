[@chatbotkit/sdk](../README.md) / [Modules](../modules.md) / [client](../modules/client.md) / ResponsePromise

# Class: ResponsePromise\<T, U\>

[client](../modules/client.md).ResponsePromise

## Type parameters

| Name |
| :------ |
| `T` |
| `U` |

## Table of contents

### Constructors

- [constructor](client.ResponsePromise.md#constructor)

### Methods

- [catch](client.ResponsePromise.md#catch)
- [finally](client.ResponsePromise.md#finally)
- [getRequest](client.ResponsePromise.md#getrequest)
- [stream](client.ResponsePromise.md#stream)
- [then](client.ResponsePromise.md#then)

## Constructors

### constructor

• **new ResponsePromise**\<`T`, `U`\>(`url`, `request`): [`ResponsePromise`](client.ResponsePromise.md)\<`T`, `U`\>

#### Type parameters

| Name |
| :------ |
| `T` |
| `U` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` \| `URL` |
| `request` | `Object` |
| `request.data?` | `any` |
| `request.headers` | `Record`\<`string`, `any`\> |
| `request.method` | `string` |

#### Returns

[`ResponsePromise`](client.ResponsePromise.md)\<`T`, `U`\>

#### Defined in

[client.js:39](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/client.js#L39)

## Methods

### catch

▸ **catch**(`fn`): `Promise`\<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `fn` | (...`args`: `any`[]) => `any` |

#### Returns

`Promise`\<`any`\>

#### Defined in

[client.js:147](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/client.js#L147)

___

### finally

▸ **finally**(`fn`): `Promise`\<`Response`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `fn` | (...`args`: `any`[]) => `any` |

#### Returns

`Promise`\<`Response`\>

#### Defined in

[client.js:154](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/client.js#L154)

___

### getRequest

▸ **getRequest**(`params?`): `Promise`\<`Response`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `params?` | `Object` |
| `params.data?` | `any` |
| `params.headers?` | `Record`\<`string`, `any`\> |
| `params.method?` | `string` |

#### Returns

`Promise`\<`Response`\>

#### Defined in

[client.js:56](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/client.js#L56)

___

### stream

▸ **stream**(): `AsyncGenerator`\<`U`, `any`, `any`\>

#### Returns

`AsyncGenerator`\<`U`, `any`, `any`\>

#### Defined in

[client.js:161](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/client.js#L161)

___

### then

▸ **then**(`onSuccess`, `onFail`): `Promise`\<`T`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `onSuccess` | (...`args`: `any`[]) => `any` |
| `onFail` | (...`args`: `any`[]) => `any` |

#### Returns

`Promise`\<`T`\>

#### Defined in

[client.js:128](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/client.js#L128)
