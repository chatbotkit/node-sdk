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
export default function AutoScroller({
  anchor = 'bottom',

  childList = true,

  subtree = false,

  block = 'end',

  delay = 3000,

  disabled,

  children,

  ...props
}) {
  const rootRef = useRef()

  useEffect(() => {
    if (disabled) {
      return
    }

    let visible = false
    let pause = false
    let timeout = 0

    const io = new IntersectionObserver((entries) => {
      if (pause) {
        return
      }

      visible = entries.some((entry) => entry.isIntersecting)
    })

    // @ts-ignore
    io.observe(rootRef.current?.querySelector('.auto-scroll-anchor'))

    const mo = new MutationObserver(() => {
      if (!visible) {
        return
      }

      pause = true

      rootRef.current
        // @ts-ignore
        ?.querySelector('.auto-scroll-anchor')
        ?.scrollIntoView({ behavior: 'smooth', block })

      clearTimeout(timeout)

      // @ts-ignore
      timeout = setTimeout(() => {
        visible = true
        pause = false
      }, delay)
    })

    // @ts-ignore
    mo.observe(rootRef.current, { childList, subtree })

    return () => {
      io.disconnect()
      mo.disconnect()
    }
  }, [disabled])

  return (
    // @ts-ignore
    <div ref={rootRef} {...props}>
      {anchor === 'top' ? <AutoScrollAnchor key="top" /> : null}
      {children}
      {anchor === 'bottom' ? <AutoScrollAnchor key="bottom" /> : null}
    </div>
  )
}
