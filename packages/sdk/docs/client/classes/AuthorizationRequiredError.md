[**@chatbotkit/sdk**](../../README.md)

***

[@chatbotkit/sdk](../../modules.md) / [client](../README.md) / AuthorizationRequiredError

# Class: AuthorizationRequiredError

Defined in: [client.js:35](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/sdk/src/client.js#L35)

Thrown when the API responds with `409 authorization_required` - the linked
secret or connection has not been authenticated yet. `url` is the address the
user must visit to authorize; `data` carries the full response body.

## Extends

- `FetchError`

## Constructors

### Constructor

> **new AuthorizationRequiredError**(`message`, `meta?`): `AuthorizationRequiredError`

Defined in: [client.js:40](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/sdk/src/client.js#L40)

#### Parameters

##### message

`string`

##### meta?

###### data?

`any`

###### status?

`number`

###### url?

`string`

#### Returns

`AuthorizationRequiredError`

#### Overrides

`FetchError.constructor`
