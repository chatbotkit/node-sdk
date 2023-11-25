import https from 'https'
import fs from 'fs/promises'
import SwaggerClient from 'swagger-client'

async function main() {
  if (!process.argv[2]) {
    throw new Error('No URL provided')
  }

  if (!process.argv[3]) {
    throw new Error('No output file provided')
  }

  const data = await new Promise((resolve, reject) => {
    https.get(process.argv[2], (res) => {
      let data = ''

      res.on('data', (chunk) => (data += chunk))
      res.on('end', () => resolve(data))
      res.on('error', reject)
    })
  })

  const spec = JSON.parse(data.toString())

  const result = await SwaggerClient.resolve({ spec })

  await fs.writeFile(process.argv[3], JSON.stringify(result.spec, null, 2))
}

main()
