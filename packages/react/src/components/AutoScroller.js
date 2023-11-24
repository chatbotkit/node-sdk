import React, { useRef, useEffect } from 'react'

export function AutoScrollAnchor() {
  return <div className="auto-scroll-anchor ![height:1px]" />
}

/**
 * @param {{
 *   anchor?: 'top'|'bottom',
 *   childList?: boolean,
 *   subtree?: boolean,
 *   block?: 'start'|'end',
 *   delay?: number,
 *   [name: string]: any
 * }} props
 */
export function AutoScroller({
  anchor = 'bottom',

  childList = true,

  subtree = false,

  block = 'end',

  delay = 3000,

  disabled,

  children,

  ...props
}) {
  const rootRef = /** @type {React.MutableRefObject<HTMLDivElement>} */ (
    useRef()
  )

  useEffect(() => {
    if (disabled) {
      return
    }

    /** @type {boolean} */
    let visible = false

    /** @type {boolean} */
    let pause = false

    /** @type {NodeJS.Timeout} */
    let timeout

    const io = new IntersectionObserver((entries) => {
      if (pause) {
        return
      }

      visible = entries.some((entry) => entry.isIntersecting)
    })

    const anchor = rootRef.current?.querySelector('.auto-scroll-anchor')

    if (anchor) {
      io.observe(anchor)
    }

    const mo = new MutationObserver(() => {
      if (!visible) {
        return
      }

      pause = true

      rootRef.current
        ?.querySelector('.auto-scroll-anchor')
        ?.scrollIntoView({ behavior: 'smooth', block })

      clearTimeout(timeout)

      timeout = setTimeout(() => {
        visible = true
        pause = false
      }, delay)
    })

    const root = rootRef.current

    if (root) {
      mo.observe(root, { childList, subtree })
    }

    return () => {
      io.disconnect()
      mo.disconnect()
    }
  }, [disabled])

  return (
    <div ref={rootRef} {...props}>
      {anchor === 'top' ? <AutoScrollAnchor key="top" /> : null}
      {children}
      {anchor === 'bottom' ? <AutoScrollAnchor key="bottom" /> : null}
    </div>
  )
}

export default AutoScroller
