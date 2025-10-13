import { useEffect, useState } from 'react'

export default function useDeps(deps = []) {
  const [depsId, setDepsId] = useState(0)

  useEffect(
    () => {
      setDepsId((prevId) => prevId + 1)
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    deps
  )

  return depsId
}
