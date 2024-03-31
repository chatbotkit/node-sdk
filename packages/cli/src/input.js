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
