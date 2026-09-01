[**@chatbotkit/sdk**](../../../README.md)

***

[@chatbotkit/sdk](../../../modules.md) / [secret/v1](../README.md) / SecretProxyRequest

# Type Alias: SecretProxyRequest

> **SecretProxyRequest**\<\> = [`SecretProxyRequestBody`](SecretProxyRequestBody.md)

Defined in: [secret/v1.js:213](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/sdk/src/secret/v1.js#L213)

Proxies a request through the secret. The secret is injected into the request
headers server-side (it never leaves the platform). The upstream response -
success or error - is returned as a raw `Response` (inspect `.status`/`.json()`/
`.text()` as you would a `fetch` response, including streaming and binary
bodies). The one exception is a CBK `authorization_required` signal, which is
thrown as an AuthorizationRequiredError carrying the `url` the user
must visit to authenticate.

## Type Parameters
