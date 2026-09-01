[**@chatbotkit/sdk**](../../../../README.md)

***

[@chatbotkit/sdk](../../../../modules.md) / [contact/secret/v1](../README.md) / SecretProxyRequest

# Type Alias: SecretProxyRequest

> **SecretProxyRequest**\<\> = [`SecretProxyRequestBody`](SecretProxyRequestBody.md)

Defined in: [contact/secret/v1.js:118](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/sdk/src/contact/secret/v1.js#L118)

Proxies a request through a contact's (personal) secret, injected server-side.
Returns the raw upstream `Response` (success or error, including streaming and
binary bodies). A CBK `authorization_required` signal - common here, since the
contact may not have authenticated the secret yet - is thrown as an
AuthorizationRequiredError carrying the `url` the user must visit.

## Type Parameters
