import { ChatBotKitClient } from '../client.js'
import { ComputerFileClient } from './file/index.js'
import { ComputerSessionClient } from './session/index.js'
import {
  createComputer,
  deleteComputer,
  execComputer,
  fetchComputer,
  listComputers,
  restartComputer,
  startComputer,
  stopComputer,
  updateComputer,
} from './v1.js'

/**
 * @template T
 * @template U
 * @typedef {import('../client.js').ResponsePromise<T,U>} ResponsePromise
 */

/**
 * Computer client.
 */
export class ComputerClient extends ChatBotKitClient {
  /**
   * @param {import('../client.js').ChatBotKitClientOptions} options
   */
  constructor(options) {
    super(options)

    /**
     * @type {ComputerFileClient} file client
     */
    this.file = new ComputerFileClient(options)

    /**
     * @type {ComputerSessionClient} session client
     */
    this.session = new ComputerSessionClient(options)
  }

  /**
   * Retrieves a list of all computers.
   *
   * @param {import('./v1.js').ComputerListRequest} [request]
   * @returns {ResponsePromise<import('./v1.js').ComputerListResponse,import('./v1.js').ComputerListStreamType>}
   */
  list(request) {
    return listComputers(this, request)
  }

  /**
   * Fetches a computer.
   *
   * @param {string} computerId
   * @returns {ResponsePromise<import('./v1.js').ComputerFetchResponse,never>}
   */
  fetch(computerId) {
    return fetchComputer(this, computerId)
  }

  /**
   * Creates a new computer.
   *
   * @param {import('./v1.js').ComputerCreateRequest} request
   * @returns {Promise<import('./v1.js').ComputerCreateResponse>}
   */
  create(request) {
    return createComputer(this, request)
  }

  /**
   * Updates a computer.
   *
   * @param {string} computerId
   * @param {import('./v1.js').ComputerUpdateRequest} request
   * @returns {Promise<import('./v1.js').ComputerUpdateResponse>}
   */
  update(computerId, request) {
    return updateComputer(this, computerId, request)
  }

  /**
   * Deletes the computer.
   *
   * @param {string} computerId
   * @returns {Promise<import('./v1.js').ComputerDeleteResponse>}
   */
  delete(computerId) {
    return deleteComputer(this, computerId)
  }

  /**
   * Starts the computer.
   *
   * @param {string} computerId
   * @returns {Promise<import('./v1.js').ComputerStartResponse>}
   */
  start(computerId) {
    return startComputer(this, computerId)
  }

  /**
   * Stops the computer.
   *
   * @param {string} computerId
   * @returns {Promise<import('./v1.js').ComputerStopResponse>}
   */
  stop(computerId) {
    return stopComputer(this, computerId)
  }

  /**
   * Restarts the computer.
   *
   * @param {string} computerId
   * @returns {Promise<import('./v1.js').ComputerRestartResponse>}
   */
  restart(computerId) {
    return restartComputer(this, computerId)
  }

  /**
   * Runs a shell command on the computer.
   *
   * @param {string} computerId
   * @param {import('./v1.js').ComputerExecRequest} request
   * @returns {Promise<import('./v1.js').ComputerExecResponse>}
   */
  exec(computerId, request) {
    return execComputer(this, computerId, request)
  }
}

export default ComputerClient
