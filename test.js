const cliSelect = require('./dist/index.js')

const run = async () => {
  const selected = await cliSelect({
    values: ['a', 'b', 'c'],
  })
  if (selected) console.log(selected)
}

run().catch(console.error)
