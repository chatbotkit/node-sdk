/* eslint-disable @typescript-eslint/ban-ts-comment */

import { useState, useEffect } from 'react'
import { ConversationClient } from '@chatbotkit/sdk/conversation/index.js'

import { getRandomId, replaceWithCoordinates } from '../utils/string.js'

/**
 * @typedef {{
 *   id: string,
 *   type: string,
 *   text: string,
 *   createdAt: number,
 *   meta?: Record<string,any>
 * }} Message
 *
 * @typedef {(error: any) => any} onErrorFn
 * @typedef {(conversationId: string, messages: Message[], data: Record<string,any>) => any} onSendFn
 * @typedef {(conversationId: string, messages: Message[], data: Record<string,any>) => any} onReceiveFn
 *
 * @param {{
 *   conversationId?: string,
 *   token?: string,
 *   messages?: Message[],
 *   stream?: boolean,
 *   verbose?: boolean,
 *   onError?: onErrorFn?,
 *   onSend?: onSendFn?,
 *   onReceive?: onReceiveFn?,
 * }}[options]
 */
// @ts-ignore
export default function useConversationManager({
  conversationId: _conversationId = '',

  token: _token = '',

  messages: _messages = [],

  stream = false,

  verbose = false,

  onError = null,
  onSend = null,
  onReceive = null,
} = {}) {
  // general states

  const [conversationId, setConversationId] = useState(_conversationId)

  const [token, setToken] = useState(_token)

  const [messages, setMessages] = useState(_messages)

  const [text, setText] = useState('')

  const [entities, setEntities] = useState({})

  const [outgoingMessage, setOutgoingMessage] = useState('')

  // loading & thinking state

  const [loading, setLoading] = useState(false)

  const [thinking, setThinking] = useState(false)

  useEffect(() => {
    // NOTE: if we are loading we must be thinking

    if (loading) {
      setThinking(true)
    }
  }, [loading])

  // entity methods

  /**
   * @param {string} text
   * @param {Record<string,string>} en
   */
  function redactEnitities(text, en = entities) {
    const steps = replaceWithCoordinates(text, Object.entries(en))

    const output = steps.pop()

    steps.forEach((step) => {
      // @ts-ignore
      delete step.input
      // @ts-ignore
      delete step.output
    })

    return [output, ...steps]
  }

  /**
   * @param {string} text
   * @param {Record<string,string>} en
   */
  function unredactEnitities(text, en = entities) {
    Object.entries(en).forEach(([real, redacted]) => {
      text = text.split(redacted).join(real)
    })

    return text
  }

  // state utility methods

  /**
   * @returns {Promise<void>}
   */
  async function flushUserMessage() {
    if (!text) {
      return
    }

    setText('')

    setOutgoingMessage(text)

    let newMessages = messages.slice(0)

    newMessages = newMessages.concat({
      id: getRandomId('message-'),
      type: 'user',
      text,
      createdAt: Date.now(),
    })

    setMessages(newMessages)
  }

  // utility states

  const [nextStep, setNextStep] = useState(null)

  useEffect(() => {
    if (!nextStep) {
      return
    }

    setNextStep(null)

    // @ts-ignore
    switch (nextStep.fn) {
      case 'continueConversation':
        // @ts-ignore
        continueConversation(nextStep.options)

        break

      default:
        // @ts-ignore
        throw new Error(`Unrecognised fn: ${nextStep.fn}`)
    }
  }, [nextStep])

  // base methods

  /**
   * @param {{
   *   token?: string,
   * }} [options]
   * @returns {Promise<void>}
   */
  async function continueConversation(options) {
    let newMessages = messages.slice(0)

    let thisText

    if (text) {
      thisText = text

      const message = {
        id: getRandomId('message-'),

        text: text,
        type: 'user',

        createdAt: Date.now(),
      }

      newMessages = newMessages.concat([message])

      setText('')
    } else if (outgoingMessage) {
      thisText = outgoingMessage

      setOutgoingMessage('')
    } else {
      return
    }

    setMessages(newMessages)

    setLoading(true)

    const [redactedText, ...redactedEntities] = redactEnitities(
      thisText,
      entities
    )

    const secret = options?.token || token

    const client = new ConversationClient({ secret })

    // @ts-ignore
    const completion = client.complete(conversationId, {
      text: redactedText,
      entities: redactedEntities,
    })

    let iter

    if (stream) {
      iter = completion.stream()
    } else {
      iter = (async function* () {
        yield { type: 'receiveResult', data: await completion }
      })()
    }

    try {
      if (onSend) {
        await onSend(conversationId, newMessages, {})
      }

      const tempId = getRandomId('tmp-')

      let tempText = ''

      for await (let { type, data } of iter) {
        switch (type) {
          case 'intentDetectionEnd': {
            if (!verbose) {
              break
            }

            const { action } = data

            if (!action) {
              break
            }

            const { name, input } = action

            switch (name) {
              case 'search': {
                const id = getRandomId('tmp-')

                newMessages = newMessages.concat([
                  {
                    id: id,

                    text: '',
                    type: 'context',

                    createdAt: Date.now(),

                    meta: {
                      search: input,
                    },
                  },
                ])

                setMessages(newMessages)

                break
              }
            }

            break
          }

          case 'token': {
            if (!stream) {
              break
            }

            const { token } = data

            tempText += token

            setMessages([
              ...newMessages,
              {
                id: tempId,

                text: tempText,
                type: 'bot',

                createdAt: Date.now(),

                meta: {},
              },
            ])

            if (tempText.length) {
              setThinking(false)
            }

            break
          }

          case 'sendResult': {
            const { entities: newEntities } = data

            setEntities({ ...entities, ...newEntities })

            break
          }

          case 'receiveResult': {
            const { id, text, parse } = data

            setMessages([
              ...newMessages,
              {
                id: id,

                text: unredactEnitities(
                  (parse ? parse.stripped : text).trim(),
                  entities
                ),

                type: 'bot',

                createdAt: Date.now(),
              },
            ])

            setThinking(false)

            if (onReceive) {
              await onReceive(conversationId, newMessages, data)
            }

            break
          }
        }
      }
    } catch (e) {
      if (onError) {
        onError(e)
      }
    }

    setLoading(false)
  }

  // helper methods

  /**
   * @param {{
   *   token?: string,
   *   conversationId?: string
   *   messages?: Message[]
   * }} [options]
   * @returns {void}
   */
  function interact(options) {
    if (options?.token) {
      setToken(options.token)
    }

    if (options?.conversationId) {
      setConversationId(options.conversationId)
    }

    if (options?.messages) {
      setMessages(options.messages)
    }

    if (options?.conversationId || conversationId) {
      setNextStep({
        // @ts-ignore
        fn: 'continueConversation',
        options,
      })
    } else {
      throw new Error(`No conversation id specified`)
    }
  }

  /**
   * @returns {void}
   */
  function reset() {
    setMessages([])

    setConversationId('')
  }

  // final

  return {
    text,
    setText,

    token,
    setToken,

    conversationId,
    setConversationId,

    messages,
    setMessages,

    flushUserMessage,

    continueConversation,

    interact,
    reset,

    loading,

    thinking,
  }
}
