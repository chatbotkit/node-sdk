/**
 * @typedef {{
 *   maxTokens?: number,
 *   temperature?: number,
 *   frequencyPenalty?: number,
 *   presencePenalty?: number,
 *   seed?: number,
 *   interactionMaxMessages?: number,
 *   region?: 'us'|'eu'
 * }} ModelConfig
 *
 * @typedef {string|{name: string, config: ModelConfig}} Model
 *
 * @param {Model} model
 * @returns {string}
 */
export function buildModelString(model: Model): string;
export type ModelConfig = {
    maxTokens?: number;
    temperature?: number;
    frequencyPenalty?: number;
    presencePenalty?: number;
    seed?: number;
    interactionMaxMessages?: number;
    region?: 'us' | 'eu';
};
export type Model = string | {
    name: string;
    config: ModelConfig;
};
