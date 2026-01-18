import readline from 'readline'

/**
 * Ask a question to the user
 *
 * @param {string} question
 * @returns {Promise<boolean>}
 */
export async function confirm(question) {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  })

  return new Promise((resolve) => {
    rl.question(question + ' [y/N]', (answer) => {
      rl.close()

      resolve(answer.toLowerCase().startsWith('y'))
    })
  })
}

/**
 * Ask for user input
 *
 * @param {string} question
 * @returns {Promise<string>}
 */
export async function prompt(question) {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  })

  return new Promise((resolve) => {
    rl.question(question, (answer) => {
      rl.close()

      resolve(answer)
    })
  })
}

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
export async function select(question, options) {
  // eslint-disable-next-line no-constant-condition
  while (true) {
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    })

    // eslint-disable-next-line no-console
    console.log(question)

    options.forEach((option, index) => {
      // eslint-disable-next-line no-console
      console.log(`  ${index + 1}) ${option.label}`)
    })

    const answer = await new Promise((resolve) => {
      rl.question('Enter your choice (number): ', (input) => {
        rl.close()
        resolve(input)
      })
    })

    const index = parseInt(/** @type {string} */ (answer), 10) - 1

    if (index >= 0 && index < options.length) {
      return options[index].value
    }

    // eslint-disable-next-line no-console
    console.log('Invalid choice. Please try again.\n')
  }
}
