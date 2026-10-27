import assert from 'node:assert/strict'
import fs from 'node:fs'
import { describe, it } from 'node:test'

const spec = JSON.parse(
  fs.readFileSync(new URL('../src/types/api/v1.json', import.meta.url), 'utf8')
)

/**
 * @param {any} node
 * @param {any[]} found
 * @returns {any[]}
 */
function schemasWithSlackIntegrationId(node, found = []) {
  if (Array.isArray(node)) {
    node.forEach((item) => schemasWithSlackIntegrationId(item, found))
  } else if (node && typeof node === 'object') {
    if (node.properties && node.properties.slackIntegrationId) {
      found.push(node)
    }

    Object.values(node).forEach((value) =>
      schemasWithSlackIntegrationId(value, found)
    )
  }

  return found
}

describe('event log API types', () => {
  for (const [path, method] of [
    ['/event/log/list', 'get'],
    ['/event/log/export', 'get'],
    ['/event/log/subscribe', 'post'],
  ]) {
    it(`declares chatIntegrationId wherever ${path} declares slackIntegrationId`, () => {
      const schemas = schemasWithSlackIntegrationId(spec.paths[path][method])

      assert.ok(schemas.length > 0)

      for (const schema of schemas) {
        assert.deepEqual(schema.properties.chatIntegrationId, {
          description: 'Related Chat integration ID if applicable',
          type: 'string',
        })
      }
    })
  }
})
