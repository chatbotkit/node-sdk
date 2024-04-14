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
