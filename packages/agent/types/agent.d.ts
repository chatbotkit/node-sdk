/**
 * Loads an agent definition from a markdown file. The file may contain an
 * optional YAML front matter block with `backstory`, `model`, `name`, and
 * `description` fields. The markdown body is appended to `backstory` (if any)
 * to form the final backstory string.
 *
 * @param {string} filePath - Path to the agent markdown file (absolute or relative to cwd)
 * @returns {Promise<AgentDefinition>}
 */
export function loadAgent(filePath: string): Promise<AgentDefinition>;
export type AgentDefinition = {
    name?: string;
    description?: string;
    backstory?: string;
    model?: string;
    botId?: string;
    skillsetId?: string;
    datasetId?: string;
};
