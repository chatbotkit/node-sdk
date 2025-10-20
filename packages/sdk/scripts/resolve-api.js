import fs from 'node:fs/promises'
import SwaggerClient from 'swagger-client'

async function main() {
  if (!process.argv[2]) {
    throw new Error('No input file provided')
  }

  if (!process.argv[3]) {
    throw new Error('No output file provided')
  }

  const data = await fs.readFile(process.argv[2])

  const spec = JSON.parse(data.toString())

  const result = await SwaggerClient.resolve({ spec })

  await fs.writeFile(process.argv[3], JSON.stringify(result.spec, null, 2))
}

main()
