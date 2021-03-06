/* EXPRESS SERVER */
const express = require('express')
const cors = require('cors')
const port = 6060 || process.argv[2]
const app = express()
const bodyParser = require('body-parser')

const Summoners = require('./routes')

/* CORS */
app.use(cors())

/* BODY PARSER */
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


app.use('/', Summoners)

app.listen(port, () => {
  console.log('Listening on 6060.')
})