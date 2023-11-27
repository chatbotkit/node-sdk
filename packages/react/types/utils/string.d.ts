/**
 * @internal
 * @param {string} [prefix]
 * @returns {string}
 */
export function getRandomId(prefix?: string | undefined): string;
/**
 * @internal
 * @param {string} input
 * @param {number} begin
 * @param {number} end
 * @param {string} replacement
 * @returns {string}
 */
export function replaceBetween(input: string, begin: number, end: number, replacement: string): string;
/**
 * @internal
 * @param {string} input
 * @param {[string, string][]} replacements
 * @returns {({begin: number, end: number, input: string, output: string}|string)[]}
 */
export function replaceWithCoordinates(input: string, replacements: [string, string][]): (string | {
    begin: number;
    end: number;
    input: string;
    output: string;
})[];
