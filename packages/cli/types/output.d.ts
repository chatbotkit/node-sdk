/**
 * @internal
 * @param {any} input
 * @returns {void}
 */
export function print(input: any): void;
/**
 * @internal
 * @param {any} error
 * @returns {void}
 */
export function printError(error: any): void;
export namespace config {
    let output: 'yaml' | 'json' | 'jsonl';
}
/**
 * The error class for command errors which should be printed to the user.
 *
 * @internal
 */
export class CommandError extends Error {
}
