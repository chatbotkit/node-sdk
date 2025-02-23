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

- [cache](client.ResponsePromise.md#cache)
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
| `url` | `string` \| [`URL`]( https://developer.mozilla.org/docs/Web/API/URL ) |
| `request` | `Object` |
| `request.data?` | `any` |
| `request.headers` | [`Record`]( https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type )\<`string`, `any`\> |
| `request.method` | `string` |

#### Returns

[`ResponsePromise`](client.ResponsePromise.md)\<`T`, `U`\>

#### Defined in

[client.js:39](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/client.js#L39)

## Methods

### cache

▸ **cache**(`key`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<`any`\>

#### Defined in

[client.js:177](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/client.js#L177)

___

### catch

▸ **catch**(`fn`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `fn` | (...`args`: `any`[]) => `any` |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<`any`\>

#### Defined in

[client.js:149](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/client.js#L149)

___

### finally

▸ **finally**(`fn`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<[`Response`]( https://developer.mozilla.org/docs/Web/API/Response )\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `fn` | (...`args`: `any`[]) => `any` |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<[`Response`]( https://developer.mozilla.org/docs/Web/API/Response )\>

#### Defined in

[client.js:156](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/client.js#L156)

___

### getRequest

▸ **getRequest**(`params?`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<[`Response`]( https://developer.mozilla.org/docs/Web/API/Response )\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `params?` | `Object` |
| `params.data?` | `any` |
| `params.headers?` | [`Record`]( https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type )\<`string`, `any`\> |
| `params.method?` | `string` |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<[`Response`]( https://developer.mozilla.org/docs/Web/API/Response )\>

#### Defined in

[client.js:58](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/client.js#L58)

___

### stream

▸ **stream**(): [`AsyncGenerator`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/AsyncGenerator )\<`U`, `any`, `any`\>

#### Returns

[`AsyncGenerator`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/AsyncGenerator )\<`U`, `any`, `any`\>

#### Defined in

[client.js:163](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/client.js#L163)

___

### then

▸ **then**(`onSuccess`, `onFail`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<`T`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `onSuccess` | (...`args`: `any`[]) => `any` |
| `onFail` | (...`args`: `any`[]) => `any` |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<`T`\>

#### Defined in

[client.js:130](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/client.js#L130)
