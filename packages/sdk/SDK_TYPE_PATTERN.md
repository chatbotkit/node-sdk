# SDK v1.js Type Pattern Guide

## Overview

This document describes the standard pattern for typing v1.js SDK files to ensure proper TypeScript type safety using OpenAPI-derived types.

## Core Principles

1. **Remove manual typedefs** - Don't manually define `*Options` and `*Instance` types that duplicate OpenAPI
2. **Use OpenAPI as source of truth** - All Response and RequestBody types should reference OpenAPI operations
3. **DRY principle** - Define typedefs once at function level, reuse in annotations
4. **Preserve external API** - Keep `*Request`, `*Response`, `*RequestBody` typedefs for external consumers

## Pattern Template

### List Function Pattern

```javascript
/**
 * @typedef {{
 *   cursor?: string,
 *   order?: 'desc'|'asc',
 *   take?: number,
 *   meta?: Record<string,string>
 * }} ResourceListRequest
 *
 * @typedef {import('../types/api/v1.js').operations['listResources']['responses']['200']['content']['application/json']} ResourceListResponse
 *
 * @typedef {import('../types/api/v1.js').operations['listResources']['responses']['200']['content']['application/jsonl']} ResourceListStreamType
 *
 * @param {ChatBotKitClient} client
 * @param {ResourceListRequest} [request]
 * @returns {ResponsePromise<ResourceListResponse,ResourceListStreamType>}
 */
export function listResources(client, request) {
  let url = `/api/v1/resource/list`

  /** @type {ResponsePromise<ResourceListResponse,ResourceListStreamType>} */
  const response = client.clientFetch(url, { query: request })

  return response
}
```

### Fetch Function Pattern

```javascript
/**
 * @typedef {import('../types/api/v1.js').operations['fetchResource']['responses']['200']['content']['application/json']} ResourceFetchResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} resourceId
 * @returns {ResponsePromise<ResourceFetchResponse,never>}
 */
export function fetchResource(client, resourceId) {
  const url = `/api/v1/resource/${resourceId}/fetch`

  /** @type {ResponsePromise<ResourceFetchResponse,never>} */
  const response = client.clientFetch(url)

  return response
}
```

### Create/Update Function Pattern

```javascript
/**
 * @typedef {{
 *   name?: string,
 *   description?: string,
 *   // ... other parameters accepted by the function
 * }} ResourceCreateRequest
 *
 * @typedef {import('../types/api/v1.js').operations['createResource']['requestBody']['content']['application/json']} ResourceCreateRequestBody
 *
 * @typedef {import('../types/api/v1.js').operations['createResource']['responses']['200']['content']['application/json']} ResourceCreateResponse
 *
 * @param {ChatBotKitClient} client
 * @param {ResourceCreateRequest} request
 * @returns {Promise<ResourceCreateResponse>}
 */
export async function createResource(client, request) {
  const url = `/api/v1/resource/create`

  /** @type {ResourceCreateResponse} */
  const response = await client.clientFetch(url, {
    /** @type {ResourceCreateRequestBody} */
    record: {
      ...request,
    },
  })

  return response
}
```

### Delete Function Pattern

```javascript
/**
 * @typedef {import('../types/api/v1.js').operations['deleteResource']['requestBody']['content']['application/json']} ResourceDeleteRequestBody
 *
 * @typedef {import('../types/api/v1.js').operations['deleteResource']['responses']['200']['content']['application/json']} ResourceDeleteResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} resourceId
 * @returns {Promise<ResourceDeleteResponse>}
 */
export async function deleteResource(client, resourceId) {
  const url = `/api/v1/resource/${resourceId}/delete`

  /** @type {ResourceDeleteResponse} */
  const response = await client.clientFetch(url, {
    /** @type {ResourceDeleteRequestBody} */
    record: {},
  })

  return response
}
```

## What to Change

### ❌ REMOVE

```javascript
/**
 * Manual typedefs that duplicate OpenAPI
 */
@typedef {{
  name?: string,
  description?: string,
  ...
}} ResourceOptions

@typedef {ResourceOptions & {
  id: string,
  createdAt: number,
  updatedAt: number
}} ResourceInstance

@typedef {{items: ResourceInstance[]}} ResourceListResponse

@typedef {{
  type: 'item',
  data: ResourceInstance
}} ResourceListStreamItemType
```

### ❌ REMOVE

```javascript
/**
 * Duplicate type declarations inside functions
 */
export function listResources(client, request) {
  /** @typedef {import('../types/api/v1.js').operations['listResources']['responses']['200']['content']['application/json']} T */
  /** @typedef {import('../types/api/v1.js').operations['listResources']['responses']['200']['content']['application/jsonl']} U */
  /** @type {ResponsePromise<T,U>} */
  const response = client.clientFetch(url, { query: request })
}
```

### ❌ REMOVE

```javascript
/**
 * Inline OpenAPI types without typedef
 */
export async function createResource(client, request) {
  /** @type {import('../types/api/v1.js').operations['createResource']['responses']['200']['content']['application/json']} */
  const response = await client.clientFetch(url, {
    /** @type {import('../types/api/v1.js').operations['createResource']['requestBody']['content']['application/json']} */
    record: { ...request },
  })
}
```

### ✅ KEEP

```javascript
/**
 * Request typedefs for external use (when they add value over OpenAPI)
 */
@typedef {{
  cursor?: string,
  order?: 'desc'|'asc',
  take?: number
}} ResourceListRequest
```

### ✅ ADD

```javascript
/**
 * OpenAPI-derived Response and RequestBody typedefs
 */
@typedef {import('../types/api/v1.js').operations['...']['responses']['200']['content']['application/json']} ResourceResponse

@typedef {import('../types/api/v1.js').operations['...']['requestBody']['content']['application/json']} ResourceRequestBody

@typedef {import('../types/api/v1.js').operations['...']['responses']['200']['content']['application/jsonl']} ResourceStreamType
```

## Finding the OpenAPI Operation Name

The operation name in the OpenAPI types corresponds to the function name with appropriate casing:

- `listBots` → `operations['listBots']`
- `fetchBot` → `operations['fetchBot']`
- `createBot` → `operations['createBot']`
- `updateBot` → `operations['updateBot']`
- `deleteBot` → `operations['deleteBot']`

## Benefits

1. **Type Safety**: TypeScript catches invalid property access
2. **Maintainability**: Changes to OpenAPI automatically reflect in SDK
3. **DRY Code**: No duplicate type declarations
4. **Consistency**: All SDK files follow the same pattern
5. **External Use**: Types can be imported and reused in application code

## Example Files

See these files for reference:

- `/workspaces/cbk-platform/sdks/node/packages/sdk/src/platform/example/v1.js` (✓ Updated)
- `/workspaces/cbk-platform/sdks/node/packages/sdk/src/bot/v1.js` (✓ Updated)
- `/workspaces/cbk-platform/sdks/node/packages/sdk/src/dataset/file/v1.js` (✓ Updated)
