# @chatbotkit/fetch

## 1.41.0

### Minor Changes

- 31311f5: React Native and Expo support.

  - `@chatbotkit/sdk`: `stream()` now throws a `StreamUnsupportedError` (`code: 'STREAM_UNSUPPORTED'`) when the response has no readable body, e.g. with the built-in React Native `fetch`, instead of silently yielding nothing. Pass a streaming fetch such as `expo/fetch` as `fetchFn`. Requests no longer construct a `TextDecoder` up front.
  - `@chatbotkit/sdk`: `file.upload()` and `conversation.attachment.upload()` accept React Native file references (`{ uri, name, type }`) as `data`.
  - `@chatbotkit/fetch`: `jsonl()` reads any body with `getReader()` or an async iterable, decodes multi-byte characters split across chunks, cancels the reader when the consumer stops early, and throws a `StreamUnsupportedError` when the body cannot be read or `TextDecoder` is missing.
  - `@chatbotkit/react`: new `@chatbotkit/react/headless` entry point with the conversation manager hooks and context only, no `react-dom` or DOM APIs. `react-dom` and `react-markdown` are now optional peer dependencies.

## 1.30.0

### Minor Changes

- 94ca388: Remove tslib.

## 1.26.3

### Patch Changes

- 9b9f290: Fixed packages.

## 1.26.1

### Patch Changes

- 3c96292: Fixed pnpm export.

## 1.23.0

### Minor Changes

- 86ecdee: Fixed misaligned api configuration.

## 1.21.7

### Patch Changes

- e15d60e: Fixed package artifacts.

## 1.21.6

### Patch Changes

- 1ab635b: Remove not needed build files.

## 1.19.0

### Minor Changes

- 502d38b: SDK overhaul

## 1.18.3

### Patch Changes

- e409f0f: Fixed issue with consuming body upon error.

## 1.18.0

### Minor Changes

- 4951ab6: Updated fetch implementation plus new API types.

## 1.14.4

### Patch Changes

- 1fe223f: Improved react components and new SDK function parameters.

## 1.8.0

### Minor Changes

- ae511e0: Bug fixes, react components improvements, streaming server actions.

## 1.1.10

### Patch Changes

- 6c2f553: Fixed CJS path corruption issue.

## 1.1.5

### Patch Changes

- c2e6ac6: Updated docs.

## 1.0.0

### Major Changes

- Better and more consistent API types, list filtering and more.

## 0.3.0

### Minor Changes

- - Refactored project scripts.
  - Introduced a new usage method.

## 0.2.0

### Minor Changes

- Fixed some depdency issues.

## 0.1.0

### Minor Changes

- File API support and isomorphic fetch.
