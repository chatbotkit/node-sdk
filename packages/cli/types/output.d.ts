/**
 * @param {any} input
 * @returns {void}
 */
export function print(input: any): void;
/**
 * @param {any} error
 * @returns {void}
 */
export function printError(error: any): void;
export namespace config {
    let output: 'text' | 'json' | 'jsonl';
}
