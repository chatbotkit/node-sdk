/**
 * @internal
 * @param {string|ArrayBuffer} buffer
 * @returns {ArrayBuffer}
 */
export function getBuffer(buffer: string | ArrayBuffer): ArrayBuffer;
/**
 * A reference to a local file by URI, as returned by React Native and Expo
 * pickers.
 *
 * @typedef {{
 *   uri: string,
 *   name?: string,
 *   type?: string
 * }} FileReference
 */
/**
 * @internal
 * @param {any} value
 * @returns {value is FileReference}
 */
export function isFileReference(value: any): value is FileReference;
/**
 * @internal
 * @param {string|ArrayBuffer|FileReference} data
 * @returns {Promise<{ body: ArrayBuffer|Blob, size: number, name?: string }>}
 */
export function getUploadBody(data: string | ArrayBuffer | FileReference): Promise<{
    body: ArrayBuffer | Blob;
    size: number;
    name?: string;
}>;
/**
 * A reference to a local file by URI, as returned by React Native and Expo
 * pickers.
 */
export type FileReference = {
    uri: string;
    name?: string;
    type?: string;
};
