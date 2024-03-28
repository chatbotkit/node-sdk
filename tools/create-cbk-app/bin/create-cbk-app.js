import cbk from '../src/index.js'

cbk().catch((error) => {
  // eslint-disable-next-line no-console
  console.error(error)

  process.exit(1)
})
