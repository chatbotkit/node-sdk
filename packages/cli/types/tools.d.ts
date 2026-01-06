/**
 * Get specific tools based on selected tool names
 *
 * @param {Array<keyof typeof tools>} [selectedTools] - Array of tool names to include. If not provided, returns only default tools
 * @returns {typeof tools}
 */
export function getTools(selectedTools?: Array<keyof typeof tools>): typeof tools;
/**
 * Get available tool names
 *
 * @returns {Array<keyof typeof tools>}
 */
export function getToolNames(): Array<keyof typeof tools>;
export { tools };
import { tools } from '@chatbotkit/agent';
