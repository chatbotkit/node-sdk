'use server'

import { Solution } from '@chatbotkit/cli/solution'
import { stream } from '@chatbotkit/react/utils/stream'

// Now let's define a server action that will be called by the client to search
// the dataset and complete the conversation.

export async function query({ messages }) {
  // First, locate the solution by name.

  const solution = await Solution.load('rag')

  // Then, call the `complete` method on the solution's base client, passing the
  // messages and the dataset ID.

  return stream(
    solution.baseClient.conversation.complete(null, {
      // The messages are passed from the client.

      messages,

      // The dataset ID is stored in the solution's RAG dataset. We simply find
      // it by name and pass it to the `complete` method.

      datasetId: solution.dataset.rag?.id,
    })
  )
}
