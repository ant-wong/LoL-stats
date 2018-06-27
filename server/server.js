/* EXPRESS SERVER */
const express = require('express')
const cors = require('cors')
const port = 6060 || process.argv[2]
const app = express()


app.use(cors())


app.listen(port, () => {
  console.log('Listening on 6060.')
})