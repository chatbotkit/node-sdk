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

### Properties

- [decoder](client.ResponsePromise.md#decoder)
- [fetchPromise](client.ResponsePromise.md#fetchpromise)
- [request](client.ResponsePromise.md#request)
- [streamPromise](client.ResponsePromise.md#streampromise)
- [url](client.ResponsePromise.md#url)

### Accessors

- [[toStringTag]](client.ResponsePromise.md#[tostringtag])

### Methods

- [catch](client.ResponsePromise.md#catch)
- [finally](client.ResponsePromise.md#finally)
- [getFetchPromise](client.ResponsePromise.md#getfetchpromise)
- [getRequest](client.ResponsePromise.md#getrequest)
- [getStreamPromise](client.ResponsePromise.md#getstreampromise)
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
| `request.data?` | `Record`\<`string`, `any`\> |
| `request.headers` | `Record`\<`string`, `any`\> |
| `request.method` | `string` |

#### Returns

[`ResponsePromise`](client.ResponsePromise.md)\<`T`, `U`\>

#### Defined in

[client.js:39](https://github.com/chatbotkit/node-sdk/blob/1a40caa/packages/sdk/src/client.js#L39)

## Properties

### decoder

• **decoder**: `TextDecoder`

#### Defined in

[client.js:43](https://github.com/chatbotkit/node-sdk/blob/1a40caa/packages/sdk/src/client.js#L43)

___

### fetchPromise

• **fetchPromise**: `Promise`\<`Response`\>

#### Defined in

[client.js:45](https://github.com/chatbotkit/node-sdk/blob/1a40caa/packages/sdk/src/client.js#L45)

[client.js:109](https://github.com/chatbotkit/node-sdk/blob/1a40caa/packages/sdk/src/client.js#L109)

___

### request

• **request**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `data?` | `Record`\<`string`, `any`\> |
| `headers` | `Record`\<`string`, `any`\> |
| `method` | `string` |

#### Defined in

[client.js:41](https://github.com/chatbotkit/node-sdk/blob/1a40caa/packages/sdk/src/client.js#L41)

___

### streamPromise

• **streamPromise**: `Promise`\<`Response`\>

#### Defined in

[client.js:46](https://github.com/chatbotkit/node-sdk/blob/1a40caa/packages/sdk/src/client.js#L46)

[client.js:117](https://github.com/chatbotkit/node-sdk/blob/1a40caa/packages/sdk/src/client.js#L117)

___

### url

• **url**: `string` \| `URL`

#### Defined in

[client.js:40](https://github.com/chatbotkit/node-sdk/blob/1a40caa/packages/sdk/src/client.js#L40)

## Accessors

### [toStringTag]

• `get` **[toStringTag]**(): `string`

#### Returns

`string`

#### Defined in

[client.js:49](https://github.com/chatbotkit/node-sdk/blob/1a40caa/packages/sdk/src/client.js#L49)

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

[client.js:149](https://github.com/chatbotkit/node-sdk/blob/1a40caa/packages/sdk/src/client.js#L149)

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

[client.js:156](https://github.com/chatbotkit/node-sdk/blob/1a40caa/packages/sdk/src/client.js#L156)

___

### getFetchPromise

▸ **getFetchPromise**(): `Promise`\<`Response`\>

#### Returns

`Promise`\<`Response`\>

#### Defined in

[client.js:107](https://github.com/chatbotkit/node-sdk/blob/1a40caa/packages/sdk/src/client.js#L107)

___

### getRequest

▸ **getRequest**(`params?`): `Promise`\<`Response`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `params?` | `Object` |
| `params.data?` | `Record`\<`string`, `any`\> |
| `params.headers?` | `Record`\<`string`, `any`\> |

#### Returns

`Promise`\<`Response`\>

#### Defined in

[client.js:56](https://github.com/chatbotkit/node-sdk/blob/1a40caa/packages/sdk/src/client.js#L56)

___

### getStreamPromise

▸ **getStreamPromise**(): `Promise`\<`Response`\>

#### Returns

`Promise`\<`Response`\>

#### Defined in

[client.js:115](https://github.com/chatbotkit/node-sdk/blob/1a40caa/packages/sdk/src/client.js#L115)

___

### stream

▸ **stream**(): `AsyncGenerator`\<`U`, `any`, `any`\>

#### Returns

`AsyncGenerator`\<`U`, `any`, `any`\>

#### Defined in

[client.js:163](https://github.com/chatbotkit/node-sdk/blob/1a40caa/packages/sdk/src/client.js#L163)

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

[client.js:130](https://github.com/chatbotkit/node-sdk/blob/1a40caa/packages/sdk/src/client.js#L130)
