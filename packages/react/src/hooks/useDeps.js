import { useEffect, useState } from 'react'

/**
 * @param {any[]} [deps]
 * @returns {number}
 */
export default function useDeps(deps = []) {
  const [depsId, setDepsId] = useState(0)

  useEffect(
    () => {
      setDepsId((prevId) => prevId + 1)
    },
    // eslint-disable-next-line
    deps
  )

  return depsId
}
