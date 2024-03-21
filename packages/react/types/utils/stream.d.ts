/**
 * @todo come up with a better type for source
 *
 * @param {any} source
 */
export function stream(source: any): Promise<any>;
/**
 * @todo come up with a better type for source
 *
 * @param {any} source
 */
export function consume(source: any): {
    [Symbol.asyncIterator]: () => {
        current: any;
        next(): Promise<any>;
    };
};
