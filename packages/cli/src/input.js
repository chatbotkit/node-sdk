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
