export class RequestError extends Error {
    /**
     * @param {string} message
     * @param {Response} response
     */
    constructor(message: string, response: Response);
    code: number;
    response: Response;
}
/**
 * @param {string} url
 * @param {{}} options
 * @param {number} [retries=5]
 * @param {number} [retryDelay=250]
 * @returns {Promise<Response>}
 */
export function fetchWithBackoff(url: string, options: {}, retries?: number | undefined, retryDelay?: number | undefined): Promise<Response>;
