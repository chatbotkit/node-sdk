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
     * @type {ComputerFileClient} file client
     */
    file: ComputerFileClient;
    /**
     * @type {ComputerSessionClient} session client
     */
    session: ComputerSessionClient;
    /**
     * Retrieves a list of all computers.
     *
     * @param {import('./v1.js').ComputerListRequest} [request]
     * @returns {ResponsePromise<import('./v1.js').ComputerListResponse,import('./v1.js').ComputerListStreamType>}
     */
    list(request?: import("./v1.js").ComputerListRequest): ResponsePromise<import("./v1.js").ComputerListResponse, import("./v1.js").ComputerListStreamType>;
    /**
     * Fetches a computer.
     *
     * @param {string} computerId
     * @returns {ResponsePromise<import('./v1.js').ComputerFetchResponse,never>}
     */
    fetch(computerId: string): ResponsePromise<import("./v1.js").ComputerFetchResponse, never>;
    /**
     * Creates a new computer.
     *
     * @param {import('./v1.js').ComputerCreateRequest} request
     * @returns {Promise<import('./v1.js').ComputerCreateResponse>}
     */
    create(request: import("./v1.js").ComputerCreateRequest): Promise<import("./v1.js").ComputerCreateResponse>;
    /**
     * Updates a computer.
     *
     * @param {string} computerId
     * @param {import('./v1.js').ComputerUpdateRequest} request
     * @returns {Promise<import('./v1.js').ComputerUpdateResponse>}
     */
    update(computerId: string, request: import("./v1.js").ComputerUpdateRequest): Promise<import("./v1.js").ComputerUpdateResponse>;
    /**
     * Deletes the computer.
     *
     * @param {string} computerId
     * @returns {Promise<import('./v1.js').ComputerDeleteResponse>}
     */
    delete(computerId: string): Promise<import("./v1.js").ComputerDeleteResponse>;
    /**
     * Starts the computer.
     *
     * @param {string} computerId
     * @returns {Promise<import('./v1.js').ComputerStartResponse>}
     */
    start(computerId: string): Promise<import("./v1.js").ComputerStartResponse>;
    /**
     * Stops the computer.
     *
     * @param {string} computerId
     * @returns {Promise<import('./v1.js').ComputerStopResponse>}
     */
    stop(computerId: string): Promise<import("./v1.js").ComputerStopResponse>;
    /**
     * Restarts the computer.
     *
     * @param {string} computerId
     * @returns {Promise<import('./v1.js').ComputerRestartResponse>}
     */
    restart(computerId: string): Promise<import("./v1.js").ComputerRestartResponse>;
    /**
     * Runs a shell command on the computer.
     *
     * @param {string} computerId
     * @param {import('./v1.js').ComputerExecRequest} request
     * @returns {Promise<import('./v1.js').ComputerExecResponse>}
     */
    exec(computerId: string, request: import("./v1.js").ComputerExecRequest): Promise<import("./v1.js").ComputerExecResponse>;
}
export default ComputerClient;
export type ResponsePromise<T, U> = import("../client.js").ResponsePromise<T, U>;
import { ChatBotKitClient } from '../client.js';
import { ComputerFileClient } from './file/index.js';
import { ComputerSessionClient } from './session/index.js';
