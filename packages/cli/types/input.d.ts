/**
 * Ask a question to the user
 *
 * @param {string} question
 * @returns {Promise<boolean>}
 */
export function confirm(question: string): Promise<boolean>;
/**
 * Ask for user input
 *
 * @param {string} question
 * @returns {Promise<string>}
 */
export function prompt(question: string): Promise<string>;
/**
 * @typedef {Object} SelectOption
 * @property {string} value - The value to return when selected
 * @property {string} label - The label to display to the user
 */
/**
 * Ask the user to select from a list of options
 *
 * @param {string} question
 * @param {SelectOption[]} options
 * @returns {Promise<string>}
 */
export function select(question: string, options: SelectOption[]): Promise<string>;
export type SelectOption = {
    /**
     * - The value to return when selected
     */
    value: string;
    /**
     * - The label to display to the user
     */
    label: string;
};
