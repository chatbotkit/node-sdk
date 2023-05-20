/**
 * @param {string} [prefix]
 * @returns {string}
 */
export function getRandomId(prefix) {
  return `${prefix || ''}${Math.random().toString(32).slice(2)}`
}

/**
 * @param {string} input
 * @param {number} begin
 * @param {number} end
 * @param {string} replacement
 * @returns {string}
 */
export function replaceBetween(input, begin, end, replacement) {
  return input.substring(0, begin) + replacement + input.substring(end)
}

/**
 * @param {string} input
 * @param {[string, string][]} replacements
 * @returns {({begin: number, end: number, input: string, output: string}|string)[]}
 */
export function replaceWithCoordinates(input, replacements) {
  const output = []

  let currentIndex = 0

  while (currentIndex < input.length) {
    let found = false

    for (const [search, replacement] of replacements) {
      if (input.startsWith(search, currentIndex)) {
        const origInput = input

        const resultOutput = replaceBetween(
          input,
          currentIndex,
          currentIndex + search.length,
          replacement
        )

        output.push({
          begin: currentIndex,
          end: currentIndex + replacement.length,
          input: origInput,
          output: resultOutput,
        })

        input = resultOutput

        currentIndex += replacement.length

        found = true

        break
      }
    }

    if (!found) {
      currentIndex += 1
    }
  }

  output.push(input)

  return output
}
