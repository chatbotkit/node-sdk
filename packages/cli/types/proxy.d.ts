/**
 * @template T
 * @param {T[]} array
 * @returns {{[key: string]: T|undefined}}
 */
export function getArrayBackedObject<T>(array: T[]): {
    [key: string]: T | undefined;
};
/**
 * @internal
 * @template T
 */
export class ArrayBackedObject<T> {
    /**
     * @param {T[]} array
     */
    constructor(array: T[]);
    /** @type {T[]} */
    array: T[];
}
