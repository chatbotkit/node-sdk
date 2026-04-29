/**
 * @template T
 * @template U
 * @typedef {import('../../../client.js').ResponsePromise<T,U>} ResponsePromise
 */
/**
 * Trigger integration execution client.
 */
export class TriggerIntegrationExecutionClient extends ChatBotKitClient {
    /**
     * Retrieves a list of all executions for a trigger integration.
     *
     * @param {string} triggerId
     * @param {import('./v1.js').TriggerIntegrationExecutionListRequest} [request]
     * @returns {ResponsePromise<import('./v1.js').TriggerIntegrationExecutionListResponse,import('./v1.js').TriggerIntegrationExecutionListStreamType>}
     */
    list(triggerId: string, request?: import("./v1.js").TriggerIntegrationExecutionListRequest): ResponsePromise<import("./v1.js").TriggerIntegrationExecutionListResponse, import("./v1.js").TriggerIntegrationExecutionListStreamType>;
    /**
     * Cancels a trigger integration execution.
     *
     * @param {string} triggerId
     * @param {string} triggerExecutionId
     * @returns {Promise<import('./v1.js').TriggerIntegrationExecutionCancelResponse>}
     */
    cancel(triggerId: string, triggerExecutionId: string): Promise<import("./v1.js").TriggerIntegrationExecutionCancelResponse>;
}
export default TriggerIntegrationExecutionClient;
export type ResponsePromise<T, U> = import("../../../client.js").ResponsePromise<T, U>;
import { ChatBotKitClient } from '../../../client.js';
