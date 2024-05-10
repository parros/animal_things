const express = require('express')
const requestLogger = require('./middleware/requestLogger')
const blockPrivateRoutes = require('./middleware/blockPrivateRoutes')
const routes = require('./routes')

const app = express()
const PORT = 3001

// global middleware

app.use( requestLogger )
app.use( blockPrivateRoutes )

app.use( express.static('public') )
app.use( express.json() )

app.use( routes )

app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`)
})

const this = 3
const them = 2
const that = this + them

console.log(that)