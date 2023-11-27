import { buildParamString } from '../param.js'

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
 * @typedef {string|{name: string, config?: ModelConfig}} Model
 *
 * @param {Model} model
 * @returns {string}
 */
export function buildModelString(model) {
  if (typeof model === 'string') {
    return model
  } else {
    return buildParamString(model.name, model.config)
  }
}
