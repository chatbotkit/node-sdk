import dotenv from 'dotenv'

import { ChatBotKit } from '@chatbotkit/sdk'

import cors from 'cors'
import express from 'express'

dotenv.config()

const app = express()
const port = 3001

app.use(cors())
app.use(express.json())

const cbk = new ChatBotKit({
  secret: process.env.CHATBOTKIT_API_SECRET,
})

app.post('/api/conversation/complete', async (req, res) => {
  const { messages } = req.body

  try {
    const response = cbk.conversation.complete(null, {
      messages,
    })

    res.writeHead(200, {
      'Content-Type': 'application/jsonl',
    })

    for await (const chunk of response.stream()) {
      res.write(JSON.stringify(chunk) + '\n')
    }

    res.end()
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(error)

    res.status(500).send('Internal Server Error')
  }
})

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Server listening at http://localhost:${port}`)
})
