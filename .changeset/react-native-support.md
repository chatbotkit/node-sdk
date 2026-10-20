---
'@chatbotkit/fetch': minor
'@chatbotkit/sdk': minor
'@chatbotkit/react': minor
---

React Native and Expo support.

- `@chatbotkit/sdk`: `stream()` now throws a `StreamUnsupportedError` (`code: 'STREAM_UNSUPPORTED'`) when the response has no readable body, e.g. with the built-in React Native `fetch`, instead of silently yielding nothing. Pass a streaming fetch such as `expo/fetch` as `fetchFn`. Requests no longer construct a `TextDecoder` up front.
- `@chatbotkit/sdk`: `file.upload()` and `conversation.attachment.upload()` accept React Native file references (`{ uri, name, type }`) as `data`.
- `@chatbotkit/fetch`: `jsonl()` reads any body with `getReader()` or an async iterable, decodes multi-byte characters split across chunks, cancels the reader when the consumer stops early, and throws a `StreamUnsupportedError` when the body cannot be read or `TextDecoder` is missing.
- `@chatbotkit/react`: new `@chatbotkit/react/headless` entry point with the conversation manager hooks and context only, no `react-dom` or DOM APIs. `react-dom` and `react-markdown` are now optional peer dependencies.
