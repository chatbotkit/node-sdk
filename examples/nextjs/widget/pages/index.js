import { ChatInput, useConversationManager } from '@chatbotkit/react'
import { AutoScroller } from '@chatbotkit/react/components/AutoScroller.js'

import { useState, useMemo, createContext, useContext } from 'react'

const WidgetContext = createContext()

function Widget(props) {
  const { position, style: defaultStyle, ...rest } = props

  const [open, setOpen] = useState(false)

  const toggle = () => setOpen(!open)

  const style = useMemo(() => {
    const positionStyle = {
      'bottom-left': {
        position: 'fixed',
        bottom: '0px',
        left: '0px',
        alignItems: 'flex-start',
      },

      'top-left': {
        position: 'fixed',
        top: '0px',
        left: '0px',
        alignItems: 'flex-start',
      },

      'bottom-right': {
        position: 'fixed',
        bottom: '0px',
        right: '0px',
        alignItems: 'flex-end',
      },

      'top-right': {
        position: 'fixed',
        top: '0px',
        right: '0px',
        alignItems: 'flex-end',
      },
    }[position]

    return {
      display: 'flex',
      flexDirection: 'column',

      ...positionStyle,

      ...defaultStyle,
    }
  }, [defaultStyle, position])

  return (
    <WidgetContext.Provider value={{ open, setOpen, toggle }}>
      <div {...rest} style={style} />
    </WidgetContext.Provider>
  )
}

function WidgetFrame(props) {
  const { style: defaultStyle, ...rest } = props || {}

  const widget = useContext(WidgetContext)

  const style = useMemo(() => {
    return {
      overflow: 'hidden',

      display: 'flex',
      flexDirection: 'column',

      ...(widget.open ? { display: 'flex' } : { display: 'none' }),

      ...defaultStyle,
    }
  }, [defaultStyle, widget.open])

  return <div {...rest} style={style} data-open={widget.open} />
}

function WidgetBar(props) {
  const { style: defaultStyle, children, ...rest } = props || {}

  const style = useMemo(() => {
    return {
      ...defaultStyle,

      display: 'grid',
      gridAutoFlow: 'column',
    }
  }, [defaultStyle])

  return (
    <div {...rest} style={style}>
      {children}
    </div>
  )
}

function WidgetCloseButton(props) {
  const { style: defaultStyle, onClick, ...rest } = props || {}

  const widget = useContext(WidgetContext)

  const style = useMemo(() => {
    return {
      ...defaultStyle,

      justifySelf: 'flex-end',
    }
  }, [defaultStyle])

  function handleClick(event) {
    if (onClick) {
      onClick(event)
    }

    if (event.defaultPrevented) {
      return
    }

    widget.setOpen(false)
  }

  return <button {...rest} style={style} onClick={handleClick} />
}

function WidgetContent(props) {
  const { style: defaultStyle, ...rest } = props || {}

  const style = useMemo(() => {
    return {
      ...defaultStyle,
    }
  }, [defaultStyle])

  return <AutoScroller {...rest} style={style} />
}

function WidgetInput(props) {
  const { style: defaultStyle, ...rest } = props || {}

  const style = useMemo(() => {
    return {
      ...defaultStyle,
    }
  }, [defaultStyle])

  return <ChatInput {...rest} style={style} />
}

function WidgetButton(props) {
  const { onClick, ...rest } = props || {}

  const widget = useContext(WidgetContext)

  function handleClick(event) {
    if (onClick) {
      onClick(event)
    }

    if (event.defaultPrevented) {
      return
    }

    widget.toggle()
  }

  return <button {...rest} onClick={handleClick} />
}

export default function Index() {
  const { thinking, text, setText, messages, submit } = useConversationManager({
    endpoint: '/api/conversation/complete',
  })

  return (
    <div>
      <Widget className="space-y-2 w-full max-w-xl p-2" position="bottom-right">
        <WidgetFrame className="rounded-xl border border-indigo-500 scale-0 data-[open=true]:scale-100 transition-all ease-in-out">
          <WidgetBar className="bg-indigo-500 text-white p-2">
            Super Widget
            <WidgetCloseButton>×</WidgetCloseButton>
          </WidgetBar>
          <WidgetContent className="p-2">
            <div>Hi there</div>
            <div>
              {messages.map(({ id, type, text }) => {
                switch (type) {
                  case 'user':
                    return (
                      <div key={id}>
                        <strong>user:</strong> {text}
                      </div>
                    )

                  case 'bot':
                    return (
                      <div key={id}>
                        <strong>bot:</strong> {text}
                      </div>
                    )
                }
              })}
              {thinking ? (
                <div key="thinking">
                  <strong>bot:</strong> thinking...
                </div>
              ) : null}
            </div>
            <WidgetInput
              className="rounded-xl border border-gray-300 p-2"
              value={text}
              onChange={(event) => setText(event.target.value)}
              onSubmit={submit}
              placeholder="Type something..."
            />
          </WidgetContent>
        </WidgetFrame>
        <WidgetButton className="rounded-full w-10 h-10 bg-indigo-500 hover:scale-110 transition-all ease-in-out" />
      </Widget>
    </div>
  )
}
