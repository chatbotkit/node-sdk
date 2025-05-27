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

• **new ResponsePromise**\<`T`, `U`\>(`url`, `request`, `cacheMap?`): [`ResponsePromise`](client.ResponsePromise.md)\<`T`, `U`\>

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
| `request.retries?` | `number` |
| `request.retryDelay?` | `number` |
| `request.retryTimeout?` | `boolean` |
| `request.timeout?` | `number` |
| `cacheMap?` | [`Map`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Map )\<`string`, [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<`T`\>\> |

#### Returns

[`ResponsePromise`](client.ResponsePromise.md)\<`T`, `U`\>

#### Defined in

[client.js:48](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/client.js#L48)

## Methods

### cache

▸ **cache**(`key?`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<`T`\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `key?` | `string` | `'default'` |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<`T`\>

#### Defined in

[client.js:213](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/client.js#L213)

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

[client.js:184](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/client.js#L184)

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

[client.js:191](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/client.js#L191)

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
| `params.retries?` | `number` |
| `params.retryDelay?` | `number` |
| `params.retryTimeout?` | `boolean` |
| `params.timeout?` | `number` |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<[`Response`]( https://developer.mozilla.org/docs/Web/API/Response )\>

#### Defined in

[client.js:75](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/client.js#L75)

___

### stream

▸ **stream**(): [`AsyncGenerator`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/AsyncGenerator )\<`U`, `any`, `any`\>

#### Returns

[`AsyncGenerator`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/AsyncGenerator )\<`U`, `any`, `any`\>

#### Defined in

[client.js:198](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/client.js#L198)

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

[client.js:165](https://github.com/chatbotkit/node-sdk/blob/main/packages/sdk/src/client.js#L165)
