/* globals globalThis */

import { useMemo, useState } from 'react'
import { ConversationClient } from '@chatbotkit/sdk'

import { getRandomId } from '../utils/string.js'
import { cloneAndExtend } from '../utils/object.js'

/**
 * @typedef {{
 *   id: string,
 *   type: 'bot'|'user',
 *   text: string
 * }} Message
 */

/**
 * @param {{
 *   client?: ConversationClient,
 *   endpoint?: string,
 *   token?: string,
 *   conversationId?: string,
 *   backstory?: string,
 *   model?: string,
 *   datasetId?: string,
 *   skillsetId?: string,
 *   [key: string]: any
 * }} options
 */
export function useConversationManager(options) {
  const {
    client: _client,

    endpoint,

    token: _token,

    conversationId: _conversationId,

    backstory: _backstory,

    model: _model,

    datasetId: _datasetId,
    skillsetId: _skillsetId,

    ...rest
  } = options

  const [token, setToken] = useState(_token)

  const [conversationId, setConversationId] = useState(_conversationId)

  const [backstory, setBackstory] = useState(_backstory)

  const [model, setModel] = useState(_model)

  const [datasetId, setDatasetId] = useState(_datasetId)

  const [skillsetId, setSkillsetId] = useState(_skillsetId)

  const client = useMemo(() => {
    const options = { ...rest, secret: token || '' }

    let thisClient = _client || new ConversationClient(options)

    const extension = {}

    if (endpoint) {
      extension.url = new URL(
        globalThis.window?.location?.origin || 'about:blank'
      )

      extension.endpoints = {
        '/api/v1/conversation/complete': endpoint,
      }
    }

    if (token) {
      extension.secret = token
    }

    if (Object.keys(extension).length === 0) {
      return thisClient
    }

    return cloneAndExtend(thisClient, extension)
  }, [_client, endpoint, token])

  const [text, setText] = useState(/** @type {string} */ (''))

  const [messages, setMessages] = useState(/** @type { Message[]} */ ([]))

  const [thinking, setThinking] = useState(false)
  const [writing, setWriting] = useState(false)

  const [error, setError] = useState(/** @type {any} */ (null))

  async function submit() {
    if (!text) {
      return
    }

    setText('')

    /** @type {Message} */
    const userMessage = {
      id: getRandomId('message-'),
      type: 'user',
      text: text,
    }

    /** @type {Message[]} */
    let newMessages = messages.slice(0)

    newMessages = [...newMessages, userMessage]

    setMessages([...newMessages])

    setThinking(true)

    let it

    try {
      if (conversationId) {
        it = client.complete(conversationId, { text })
      } else {
        it = client.complete(null, {
          backstory: backstory,
          model: model,
          datasetId: datasetId,
          skillsetId: skillsetId,
          messages: newMessages.slice(-100),
        })
      }
    } catch (e) {
      setThinking(false)

      setError(e)

      return
    }

    /** @type {Message} */
    const botMessage = {
      id: getRandomId('message-'),
      type: 'bot',
      text: '',
    }

    let alreadyStreaming = false

    try {
      for await (const event of it.stream()) {
        if (event.type === 'token') {
          if (!alreadyStreaming) {
            alreadyStreaming = true

            newMessages = [...newMessages, botMessage]

            setMessages(newMessages)

            setThinking(false)
            setWriting(true)
          }

          botMessage.text += event.data.token

          setMessages([...newMessages])
        }
      }
    } catch (e) {
      setError(e)
    } finally {
      setWriting(false)
    }
  }

  return {
    token,
    setToken,

    conversationId,
    setConversationId,

    backstory,
    setBackstory,

    model,
    setModel,

    datasetId,
    setDatasetId,

    skillsetId,
    setSkillsetId,

    text,
    setText,

    messages,
    setMessages,

    thinking,
    setThinking,

    writing,
    setWriting,

    error,
    setError,

    submit,
  }
}

export default useConversationManager
