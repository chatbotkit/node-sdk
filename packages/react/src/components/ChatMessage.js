import { useMemo } from 'react'
import Markdown from 'react-markdown'

const defaultComponents = {
  a: ({ href, children }) => {
    const isExternal = /^https?:\/\//.test(href)

    return (
      <a
        href={href}
        {...(isExternal ? { target: '_blank', rel: 'noopener' } : {})}
      >
        {children}
      </a>
    )
  },

  code: ({ inline, className, children }) => {
    const language = className ? className.replace(/language-/, '') : null

    if (inline) {
      return <code className="className">{children}</code>
    } else {
      return (
        <pre>
          <code className={className} data-language={language}>
            {children}
          </code>
        </pre>
      )
    }
  },
}

export function ChatMessage(props) {
  const {
    text,

    style: customStyle,
    components: customComponents,

    children,

    ...rest
  } = props || {}

  const components = useMemo(() => {
    return {
      ...defaultComponents,
      ...customComponents,
    }
  }, [customComponents])

  /** @type {import('react').CSSProperties} */
  const style = useMemo(() => {
    return {
      whiteSpace: 'pre-wrap',

      ...customStyle,
    }
  }, [customStyle])

  return (
    <div {...rest} style={style}>
      <Markdown components={components}>{text}</Markdown>
      {children}
    </div>
  )
}
