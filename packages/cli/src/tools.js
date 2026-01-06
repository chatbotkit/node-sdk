import { tools } from '@chatbotkit/agent'

export { tools }

/**
 * Get specific tools based on selected tool names
 *
 * @param {Array<keyof typeof tools>} [selectedTools] - Array of tool names to include. If not provided, returns only default tools
 * @returns {typeof tools}
 */
export function getTools(selectedTools) {
  if (!selectedTools || selectedTools.length === 0) {
    return Object.fromEntries(
      Object.entries(tools).filter(([, tool]) => tool.default)
    )
  }

  return Object.fromEntries(
    Object.entries(tools).filter(([name]) => selectedTools.includes(name))
  )
}

/**
 * Get available tool names
 *
 * @returns {Array<keyof typeof tools>}
 */
export function getToolNames() {
  return Object.keys(tools)
}
