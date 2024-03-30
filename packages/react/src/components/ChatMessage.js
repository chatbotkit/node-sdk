'use any'

import { useMemo } from 'react'
import Markdown from 'react-markdown'

/**
 * @type {import('react-markdown').Components}
 */
const defaultComponents = {
  a: ({ href, children }) => {
    const isExternal = /^https?:\/\//.test(href || '')

    return (
      <a
        href={href}
        {...(isExternal ? { target: '_blank', rel: 'noopener' } : {})}
      >
        {children}
      </a>
    )
  },
}

/**
 * @param {{
 *   text: string,
 * } & Pick<import('react-markdown').Options,'remarkPlugins'|'rehypePlugins'|'components'> & import('react').HTMLProps<HTMLDivElement>} props
 */
export function ChatMessage(props) {
  const {
    text,

    remarkPlugins,
    rehypePlugins,

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

  return (
    <div {...rest}>
      <Markdown
        remarkPlugins={remarkPlugins}
        rehypePlugins={rehypePlugins}
        components={components}
      >
        {text}
      </Markdown>
      {children}
    </div>
  )
}
