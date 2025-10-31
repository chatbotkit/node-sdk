import { ChatBotKitClient } from '../client.js'
import {
  createMemory,
  deleteMemory,
  exportMemories,
  fetchMemory,
  listMemories,
  searchMemory,
  updateMemory,
} from './v1.js'

/**
 * @template T
 * @template U
 * @typedef {import('../client.js').ResponsePromise<T,U>} ResponsePromise
 */

/**
 * Memory client.
 */
export class MemoryClient extends ChatBotKitClient {
  /**
   * @param {import('../client.js').ChatBotKitClientOptions} options
   */
  constructor(options) {
    super(options)
  }

  /**
   * Retrieves a list of all memories.
   *
   * @param {import('./v1.js').MemoryListRequest} [request]
   * @returns {ResponsePromise<import('./v1.js').MemoryListResponse,import('./v1.js').MemoryListStreamType>}
   */
  list(request) {
    return listMemories(this, request)
  }

  /**
   * Fetches a memory.
   *
   * @param {string} memoryId
   * @returns {ResponsePromise<import('./v1.js').MemoryFetchResponse,never>}
   */
  fetch(memoryId) {
    return fetchMemory(this, memoryId)
  }

  /**
   * Creates a new memory.
   *
   * @param {import('./v1.js').MemoryCreateRequest} request
   * @returns {Promise<import('./v1.js').MemoryCreateResponse>}
   */
  create(request) {
    return createMemory(this, request)
  }

  /**
   * Updates a memory.
   *
   * @param {string} memoryId
   * @param {import('./v1.js').MemoryUpdateRequest} request
   * @returns {Promise<import('./v1.js').MemoryUpdateResponse>}
   */
  update(memoryId, request) {
    return updateMemory(this, memoryId, request)
  }

  /**
   * Deletes the memory.
   *
   * @param {string} memoryId
   * @returns {Promise<import('./v1.js').MemoryDeleteResponse>}
   */
  delete(memoryId) {
    return deleteMemory(this, memoryId)
  }

  /**
   * Exports memories.
   *
   * @param {import('./v1.js').MemoryExportRequest} [request]
   * @returns {ResponsePromise<import('./v1.js').MemoryExportResponse,import('./v1.js').MemoryExportStreamType>}
   */
  export(request) {
    return exportMemories(this, request)
  }

  /**
   * Searches for memories.
   *
   * @param {import('./v1.js').MemorySearchRequest} request
   * @returns {Promise<import('./v1.js').MemorySearchResponse>}
   */
  search(request) {
    return searchMemory(this, request)
  }
}

export default MemoryClient
