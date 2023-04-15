export class RequestError extends Error {
    /**
     * @param {string} message
     * @param {number|string} code
     * @param {RequestInit} request
     * @param {Response} response
     */
    constructor(message: string, code: number | string, request: RequestInit, response: Response);
    code: string | number;
    request: RequestInit;
    response: Response;
}
/**
 * @param {string} url
 * @param {RequestInit} options
 * @param {number} [retries=5]
 * @param {number} [retryDelay=250]
 * @returns {Promise<Response>}
 */
export function fetchWithBackoff(url: string, options: RequestInit, retries?: number | undefined, retryDelay?: number | undefined): Promise<Response>;
