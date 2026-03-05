/**
 * Loads skills from multiple directories.
 * Each directory should contain subdirectories with SKILL.md files.
 *
 * @param {string[]} directories - Array of directory paths to scan for skills
 * @param {{ watch?: boolean }} [options] - Options for loading skills
 * @returns {Promise<SkillsResult>}
 */
export function loadSkills(directories: string[], options?: {
    watch?: boolean;
}): Promise<SkillsResult>;
/**
 * Creates a skills feature configuration from skill definitions.
 *
 * @param {SkillDefinition[]} skills - Array of skill definitions
 * @returns {{ name: 'skills', options: { skills: SkillDefinition[] } }}
 */
export function createSkillsFeature(skills: SkillDefinition[]): {
    name: "skills";
    options: {
        skills: SkillDefinition[];
    };
};
export type SkillDefinition = {
    name: string;
    description: string;
    path: string;
};
export type SkillsResult = {
    skills: SkillDefinition[];
    close: () => void;
};
